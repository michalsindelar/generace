// @flow
import React from "react"
import FullscreenSlide from "../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import {isLtDesktopBigHeight, MEDIA_ONLY_QUERY, PALETTE} from "../../../services/styleTools"

const AttendanceStyl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const AttendanceSubheader = styled.p`
  color: ${PALETTE.WHITE};
  font-size: 20px;
  text-align: center;
  max-width: 55%;

  ${MEDIA_ONLY_QUERY.DESKTOP`
    max-width: 60%;
  `}
  
  ${MEDIA_ONLY_QUERY.TABLET`
    max-width: 80%;
  `}
  
  ${MEDIA_ONLY_QUERY.PHONE`
    max-width: 100%;
  `}
  
`

const AttendanceHeaderStyl = styled.h1`
  color: ${PALETTE.SECONDARY};
  font-size: ${isLtDesktopBigHeight ? "200px" : "350px"};
  margin: 0;

  ${MEDIA_ONLY_QUERY.DESKTOP`
    font-size: 150px;
  `}

`

const Attendance = () =>
  <FullscreenSlide className="Attendance">

    <AttendanceStyl>

      <AttendanceSubheader>
        Svůj hlas do volební urny hodil během posledních sněmovních voleb jen každý druhý člověk ve věku 18 - 30 let.
      </AttendanceSubheader>

      <AttendanceHeaderStyl>51%</AttendanceHeaderStyl>

      <AttendanceSubheader>
        Na utváření státu se podílí příliš málo mladých lidí na to, aby se jim podobal.
      </AttendanceSubheader>

    </AttendanceStyl>

  </FullscreenSlide>

export default Attendance
