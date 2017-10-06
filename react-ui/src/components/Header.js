import React from "react"
import styled from 'styled-components';
import {MEDIA_ONLY_QUERY, PALETTE} from "../services/styleTools"
import {FACEBOOK_LINK} from "../services/consts"
import Facebook from "./Facebook"
import Instagram from "./Instagram"

const HeaderStyl = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;

  height: 34px;
  width: 100%;
  max-width: 100%;

  font-size: 24px;s
  font-weight: 600;

  color: ${PALETTE.SECONDARY};
  background-color: ${PALETTE.PRIMARY};
  z-index: 999;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    position: absolute;
  `}
`
const HeaderIcon = styled.div`
  margin-right: 20px;
`

const Header = ({ children }) =>
  <HeaderStyl>
    <div style={{marginLeft: "20px"}}>Generace s názorem</div>

    <div style={{display: "flex"}}>
      <HeaderIcon><Facebook /></HeaderIcon>
      <HeaderIcon><Instagram /></HeaderIcon>
    </div>

  </HeaderStyl>

export default Header
