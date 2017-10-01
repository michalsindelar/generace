// @flow
import React from "react"
import styled from 'styled-components';

import { PALETTE } from "../services/styleTools"

const LabelLinkHover = styled.span`
  display: none;
`

const LabelLinkStylWrapper = styled.span`
  background-color: ${PALETTE.SECONDARY};
  padding: 4px;
  clear: both;
  border-radius: 2px;
  margin-top: 5px;
  &:hover ${LabelLinkHover} {
    display: inline-block;
  }
`
const LabelLinkStyl = styled.a`
  color: white;
  text-decoration: none;
`


const LabelLink = ({ href, children, hover, ...rest }) =>
  <LabelLinkStylWrapper {...rest}>
    <LabelLinkStyl href={href || ""} rel="noreferrer noopener" target="_blank">
      {children}
      {hover
        ? <LabelLinkHover style={{marginLeft: "5px"}}>{hover}</LabelLinkHover>
        : ""
      }
    </LabelLinkStyl>
  </LabelLinkStylWrapper>

export default LabelLink
