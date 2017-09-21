// @flow
import React from "react"
import styled from "styled-components"

import { QuestionSubtitle } from "./index"


const QuestionBlockStyl = styled.div`
  cursor: pointer;
`

const QuestionBlock = ({ bordered, title, text }) =>
  <QuestionBlockStyl>
    <QuestionSubtitle>{title}</QuestionSubtitle>
    <p>{text}</p>
  </QuestionBlockStyl>

export default QuestionBlock
