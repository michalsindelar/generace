// @flow
import React from "react"
import styled from "styled-components"

import { QuestionSubtitle } from "./index"
import {MEDIA_ONLY_QUERY} from "../../../../../../services/styleTools"
import LabelLink from "../../../../../../components/LabelLink"


const PADDING = "10px"


const QuestionBlockStylWrapper = styled.div`
  
  margin-left: -${PADDING};
  margin-bottom: 40px;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    margin-top: 15px;
    margin-bottom: 10px;
  `}
`

const QuestionBlockStyl = styled.div`
  display: flex; 
  padding: ${PADDING} ${PADDING} 0 ${PADDING};
  border-radius: 4px;
`

const QuestionBlockHere = styled.a`
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
`

const QuestionBlock = ({ bordered, title, text, extraTest, label, ...rest }) =>
  <QuestionBlockStylWrapper>
    <QuestionBlockStyl
      {...rest}
    >
      <div>
        <QuestionSubtitle style={{marginTop: 0}}>{title}</QuestionSubtitle>
        <p>{text}</p>
        <p>{extraTest}</p>
      </div>

    </QuestionBlockStyl>

    {label &&
      <div style={{marginTop: PADDING, marginLeft: PADDING, }}>
        <LabelLink href={label.href}>{label.label}</LabelLink>
      </div>
    }

  </QuestionBlockStylWrapper>

export default QuestionBlock
