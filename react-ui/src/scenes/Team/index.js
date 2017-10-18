// @flow
import React from "react"
import styled from 'styled-components';

import Header from "../../components/Header"
import FullscreenSlide from "../../components/FullscreenSlide/index"

import TeamContent from "./components/TeamContent"
import {PALETTE} from "../../services/styleTools"

const TeamStyl = styled.div`
  background-color: ${PALETTE.PRIMARY};
`

const Team = () => {

  return (
    <TeamStyl>
      <Header/>

      <TeamContent />

    </TeamStyl>
  )
}


export default Team;

