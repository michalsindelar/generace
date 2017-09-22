// @flow
import React from "react"
import styled from 'styled-components';

import { ANIMATION } from "../../../../../../services/styleTools"
import { QuestionTitle, QuestionSubtitle } from "./index"

const QuestionHeadStyl = styled.div`
  cursor: pointer;
    animation: 2s ${ANIMATION.fadeIn};

`

const QuestionHead = ({ title, subtitle, toggleDialog, ...rest }) =>
  <QuestionHeadStyl onClick={toggleDialog} {...rest}>
    <QuestionTitle>{title}</QuestionTitle>
    <QuestionSubtitle>{subtitle}</QuestionSubtitle>

  </QuestionHeadStyl>

export default QuestionHead
