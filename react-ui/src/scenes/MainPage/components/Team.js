// @flow
import React from "react"
import FullscreenSlide from "../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import {isLtDesktopBigHeight, MEDIA_ONLY_QUERY, PALETTE} from "../../../services/styleTools"

const TeamStyl = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  max-width: 100%;
  width: 1415px;
  height: 100%;
  margin: 0 auto;
  color: ${PALETTE.SECONDARY}; 
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    height: auto;
  `}
`

const TeamPerson = styled.div`
`
const TeamWrapper = styled.div`
  padding-top: 30px;
`
const TeamPersonSubRole = styled.span`
  font-size: 12px;
  margin-left: 5px;
`

const TeamImg = styled.img`
  max-width: 100%;
`
const TeamGroup = styled.div`
  display: inline-block;
  border-top: 2px solid black;
  padding-top: 10px;
  margin-top: 10px;
`


const Team = () =>
  <FullscreenSlide className="Attendance">

    <TeamStyl>

      <a href="team.png"><TeamImg src="team.png" alt="Team" /></a>

      <TeamWrapper>
        <div>
          <TeamPerson>Jakub Ondráček</TeamPerson>
          <TeamPerson>Michal Ondráček<TeamPersonSubRole>/grafika</TeamPersonSubRole></TeamPerson>
          <TeamPerson>Barbora Kudelová<TeamPersonSubRole>/foto</TeamPersonSubRole></TeamPerson>
          <TeamPerson>Lenka Marková</TeamPerson>
        </div>

        <TeamGroup>
          <TeamPerson>Michal Šindelář <TeamPersonSubRole>/web</TeamPersonSubRole></TeamPerson>
          <TeamPerson>Jakub Ondráček <TeamPersonSubRole>/postprodukce</TeamPersonSubRole></TeamPerson>
        </TeamGroup>
      </TeamWrapper>

    </TeamStyl>

  </FullscreenSlide>

export default Team
