// @flow
import React from "react"
import FullscreenSlide from "../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import {PALETTE} from "../../../services/styleTools"

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
`

const AttendanceHeaderStyl = styled.h1`
  color: ${PALETTE.SECONDARY};
  font-size: 350px;
  margin: 0;
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