import React from "react"
import styled from 'styled-components';
import {PALETTE} from "../services/styleTools"
import {FACEBOOK_LINK} from "../services/consts"

const HeaderStyl = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0;
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  padding: 20px 0;
  color: ${PALETTE.SECONDARY};
  background-color: ${PALETTE.PRIMARY};
  z-index: 999;
`

const Header = ({ children }) =>
  <HeaderStyl className={`Container`}>
    <div style={{marginLeft: "30px"}}>Generace s názorem</div>
    <div style={{marginRight: "30px"}}>
      <a href={FACEBOOK_LINK}>
        <img style={{width: "34px", height: "34px"}} src="./fb.svg" alt="Generace s názorem | Facebook" />
      </a>
    </div>
  </HeaderStyl>

export default Header
