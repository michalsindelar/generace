// @flow
import React from "react"
import styled from 'styled-components';

import {ANIMATION, isLtDesktopBigHeight, PALETTE} from "../../../../../../services/styleTools"
import { QuestionTitle, QuestionSubtitle } from "./index"
import Icon from "../../../../../../components/Icon"

const QuestionHeadStyl = styled.div`
  color: ${PALETTE.secondary};
  cursor: pointer;
  animation: 2s ${ANIMATION.fadeIn};
  
`
const extraStyle = {
  display: isLtDesktopBigHeight ? "inline-block" : "block",
  marginLeft: isLtDesktopBigHeight ? "15px" : "initial"
}

const QuestionHead = ({ title, subtitle, toggleDialog, view, ...rest }) =>
  <QuestionHeadStyl onClick={toggleDialog} {...rest}>
    <Icon src={`./${view}.svg`} />
    <QuestionTitle style={extraStyle}>{title}</QuestionTitle>
    <QuestionSubtitle style={extraStyle}>{subtitle}</QuestionSubtitle>
  </QuestionHeadStyl>


export default QuestionHead
