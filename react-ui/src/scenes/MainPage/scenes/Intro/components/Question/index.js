// @flow
import React, { Component } from "react"
import styled from 'styled-components';
import QuestionApproved from "./QuestionApproved"
import QuestionDeclined from "./QuestionDeclined"
import QuestionHead from "./QuestionHead"
import {isLtDesktopBig, MEDIA_ONLY_QUERY, PALETTE, FadeInComp} from "../../../../../../services/styleTools"
import Icon from "../../../../../../components/Icon"

const QuestionStyl = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    width: 100%;
    padding-top: 20px;
  `}
`

export const QuestionTitle = styled.h2`
  font-size: 25px;
  color: ${PALETTE.SECONDARY};
  font-weight: 700;
  margin-bottom: 5px;

`

export const QuestionSubtitle = styled.h2`
  font-size: 20px;
  color: ${PALETTE.SECONDARY};
  font-weight: 700;
  margin-bottom: 5px;
`


class Question extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openDetail: true,
    };
  }

  toggleDialog = () => {
    this.setState({
      openDetail: !this.state.openDetail
    })
  }
O
  render() {
    const {
      open,
      view
    } = this.props

    const {
      openDetail
    } = this.state

    const body = view === "approved"
      ? <QuestionApproved />
      : <QuestionDeclined />


    const head = view === "approved"
      ? <QuestionHead view={view} style={{textAlign: isLtDesktopBig() ? "center" : "right"}} title="JDU" subtitle="Mám názor." toggleDialog={this.toggleDialog} />
      : <QuestionHead view={view} style={{textAlign: isLtDesktopBig() ? "center" : "left"}} title="NEJDU" subtitle="Proč?" toggleDialog={this.toggleDialog} />

    return (
      <QuestionStyl style={{textAlign: (view === "approved" && !isLtDesktopBig()) ? "right" : "left"}}>

        {open &&
          <FadeInComp>
            {head}

            {openDetail && <FadeInComp>{body}</FadeInComp>}
          </FadeInComp>
        }

      </QuestionStyl>
    )
  }
}
export default Question
