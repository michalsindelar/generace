// @flow
import React from "react"
import FullscreenSlide from "../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import {MEDIA_ONLY_QUERY, PALETTE} from "../../../services/styleTools"
import Facebook from "../../../components/Facebook"
import {AUTHOR, INFO_EMAIL} from "../../../services/consts"

const AppendixStyl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const AppendixTitle = styled.h2`
  font-size: 48px;
  line-height: 58px;
  margin: 0;
  color: ${PALETTE.SECONDARY};
`

const AppendixFooterStyl = styled.div`
  text-align: right;
  font-size: 12px;  
`


const AppendixFooter = () =>
  <AppendixFooterStyl>
    <span style={{marginRight: "20px"}}>{INFO_EMAIL}</span>
    <span>{AUTHOR}</span>
  </AppendixFooterStyl>

const Appendix = () =>
  <FullscreenSlide className="Appendix" footer={<AppendixFooter />}>

    <AppendixStyl>
      <AppendixTitle>Mám názor.</AppendixTitle>
      <AppendixTitle>Jdu volit.</AppendixTitle>

      <div style={{marginTop: "40px"}}><Facebook /></div>
    </AppendixStyl>

  </FullscreenSlide>

export default Appendix
