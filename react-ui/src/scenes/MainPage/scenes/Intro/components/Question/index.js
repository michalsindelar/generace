// @flow
import React, { Component } from "react"
import styled from 'styled-components';
import QuestionApproved from "./QuestionApproved"
import QuestionDeclined from "./QuestionDeclined"
import QuestionHead from "./QuestionHead"
import {
  isLtDesktopBig, MEDIA_ONLY_QUERY, PALETTE, FadeInComp,
  isLtDesktopBigHeight, ANIMATION
} from "../../../../../../services/styleTools"
import Icon from "../../../../../../components/Icon"

const QuestionStyl = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  justify-content: flex-start;
  flex-direction: column;
  font-size: ${isLtDesktopBigHeight ? "12px" : "14px"};
  padding-top: 110px;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    font-size: 14px;
    width: 100%;
    padding-top: 80px;
  `}
`

export const QuestionTitle = styled.h2`
  font-size: 45px;
  color: ${PALETTE.SECONDARY};
  font-weight: 700;
  margin-bottom: 3px;
  margin-top: 3px;

  ${MEDIA_ONLY_QUERY.DESKTOP`
    font-size: 25px;
  `}
`

export const QuestionSubtitle = styled.h2`
  font-size: 20px;
  color: ${PALETTE.SECONDARY};
  font-weight: 700;
  margin-bottom: 5px;
  animation: ${ANIMATION.fadeIn} 1s;
`


class Question extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openSubtitle: false,
      openDetail: false,
    };
  }

  toggleDialog = () => {
    this.setState({
      openSubtitle: !this.state.openSubtitle
    })

    setTimeout(() => {
      this.setState({
        openDetail: !this.state.openDetail
      })
    }, 1000)
  }

  render() {
    const {
      open,
      view
    } = this.props

    const {
      openDetail,
      openSubtitle
    } = this.state

    const body = view === "approved"
      ? <QuestionApproved />
      : <QuestionDeclined />


    const head = view === "approved"
      ? <QuestionHead
          view={view}
          style={{textAlign: isLtDesktopBig() ? "left" : "right"}}
          title="JDU"
          subtitle="Mám názor."
          toggleDialog={this.toggleDialog}
          showSubtitle={openSubtitle}
        />
      : <QuestionHead
        view={view}
        style={{textAlign: isLtDesktopBig() ? "left" : "left"}}
        title="NEJDU"
        subtitle="Proč?"
        toggleDialog={this.toggleDialog}
        showSubtitle={openSubtitle}
        />

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
