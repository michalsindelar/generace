// @flow
import React from "react"
import FullscreenSlide from "../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import { MEDIA_ONLY_QUERY, PALETTE} from "../../../services/styleTools"

const TeamStyl = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 1415px;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  color: ${PALETTE.SECONDARY}; 
  padding-bottom: 50px;
`

const TeamPerson = styled.div`
`
const TeamWrapper = styled.div`
  padding-top: 60px;
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


const TeamContent = () =>
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
          <TeamPerson>Michal Šindelář<TeamPersonSubRole>/web</TeamPersonSubRole></TeamPerson>
          <TeamPerson>Marek Machovec<TeamPersonSubRole>/postprodukce</TeamPersonSubRole></TeamPerson>
        </TeamGroup>

        <div><TeamGroup>
          <TeamPerson>info@generacesnazorem.cz</TeamPerson>
        </TeamGroup></div>




      </TeamWrapper>

    </TeamStyl>

  </FullscreenSlide>

export default TeamContent
