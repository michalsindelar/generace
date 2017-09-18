// @flow
import React from "react"
import FullscreenSlide from "../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import {PALETTE} from "../../../services/styleTools"

const IntroStyl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const IntroLogoStyl = styled.img`
  color: ${PALETTE.SECONDARY};
  font-size: 20px;
  max-width: 260px;
`

const IntroHeaderStyl = styled.h1`
  color: ${PALETTE.SECONDARY};
  font-size: 60px;
  clear: both;
`

const Intro = () =>
  <FullscreenSlide className="Attendance">

    <IntroStyl>
      <IntroLogoStyl src="urna.svg" alt="Generace s názorem | Volební urna" />
      <IntroHeaderStyl>Znáte tohle?</IntroHeaderStyl>
    </IntroStyl>

  </FullscreenSlide>

export default Intro
