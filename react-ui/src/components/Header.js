import React from "react"
import styled from 'styled-components';
import {PALETTE} from "../services/styleTools"

const HeaderStyl = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0;
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  padding: 20px 0;
  color: ${PALETTE.SECONDARY};
`

const Header = ({ children }) =>
  <HeaderStyl className={`Container`}>
    <div style={{marginLeft: "30px"}}>Generace s názorem</div>
    <div style={{marginRight: "30px"}}>
      <img style={{width: "34px", height: "34px"}} src="./fb.svg" alt="Generace s názorem | Facebook" />
    </div>
  </HeaderStyl>

export default Header