// @flow
import React from "react"
import styled from 'styled-components';

import { QuestionTitle, QuestionSubtitle } from "./index"

const QuestionHeadStyl = styled.div`
  cursor: pointer;
`

const QuestionHead = ({ title, subtitle, toggleDialog }) =>
  <QuestionHeadStyl onClick={toggleDialog}>
    <QuestionTitle>{title}</QuestionTitle>
    <QuestionSubtitle>{subtitle}</QuestionSubtitle>

  </QuestionHeadStyl>

export default QuestionHead
