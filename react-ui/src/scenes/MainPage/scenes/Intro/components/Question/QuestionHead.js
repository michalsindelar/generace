// @flow
import React from "react"
import styled from 'styled-components';

import {ANIMATION, MEDIA_ONLY_QUERY, PALETTE} from "../../../../../../services/styleTools"
import { QuestionTitle, QuestionSubtitle } from "./index"
import Icon from "../../../../../../components/Icon"

const QuestionHeadStyl = styled.div`
  color: ${PALETTE.secondary};
  cursor: pointer;
  animation: 2s ${ANIMATION.fadeIn};
  
`

const QuestionHead = ({ title, subtitle, toggleDialog, view, ...rest }) =>
  <QuestionHeadStyl onClick={toggleDialog} {...rest}>
    <Icon src={`./${view}.svg`} />
    <QuestionTitle>{title}</QuestionTitle>
    <QuestionSubtitle>{subtitle}</QuestionSubtitle>

  </QuestionHeadStyl>

export default QuestionHead
