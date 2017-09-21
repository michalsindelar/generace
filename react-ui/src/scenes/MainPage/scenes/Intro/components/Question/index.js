// @flow
import React, { Component } from "react"
import styled from 'styled-components';
import QuestionApproved from "./QuestionApproved"
import QuestionDeclined from "./QuestionDeclined"
import QuestionHead from "./QuestionHead"
import {PALETTE} from "../../../../../../services/styleTools"

const QuestionStyl = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
`

export const QuestionTitle = styled.h2`
  font-size: 25px;
  color: ${PALETTE.secondary};
  font-weight: 700;
  margin-bottom: 5px;
`

export const QuestionSubtitle = styled.h2`
  font-size: 20px;
  color: ${PALETTE.secondary};
  font-weight: 700;
  margin-bottom: 5px;
`


class Question extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: true,
    };
  }

  toggleDialog = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {
      view
    } = this.props

    const {
      open
    } = this.state

    const body = view === "approved"
      ? <QuestionApproved />
      : <QuestionDeclined />


    const head = view === "approved"
      ? <QuestionHead  title="Jdu" subtitle="Mám názor." toggleDialog={this.toggleDialog} />
      : <QuestionHead  title="Nejdu" subtitle="Proč nevolím?" toggleDialog={this.toggleDialog} />

    return (
      <QuestionStyl>

        <div>
          {head}
          {open && body}
        </div>

      </QuestionStyl>
    )
  }
}
export default Question
