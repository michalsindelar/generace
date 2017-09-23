// @flow
import React from "react"
import styled from 'styled-components';

import { PALETTE } from "../services/styleTools"


const LabelLinkStylWrapper = styled.span`
  background-color: ${PALETTE.SECONDARY};
  padding: 4px;
  clear: both;
  border-radius: 2px;
  margin-top: 5px;
`
const LabelLinkStyl = styled.a`
  color: white;
  text-decoration: none;
`

const LabelLink = ({ href,children }) =>
  <LabelLinkStylWrapper>
    <LabelLinkStyl href={href || ""}>
      {children}
    </LabelLinkStyl>
  </LabelLinkStylWrapper>

export default LabelLink
