// @flow
import React from "react"

import styled from 'styled-components';
import {MEDIA_ONLY_QUERY, isLtDesktopBigHeight} from "../../../../../services/styleTools"

const PersonStyl = styled.div`
  width: 25%;
  cursor: pointer;

  ${MEDIA_ONLY_QUERY.DESKTOP`
    padding-top: 40px;
    width: 100%;
  `}
`
const PersonImgStyl = styled.img`
  width: 100%;
  filter: grayscale(100%);
  transition: .2s filter;

  &:hover {
    filter: grayscale(0);
  }
`

const PersonImgWrapperStyl = styled.div`
  max-height: 70vh;
  overflow: hidden;
`


const PersonFooterStyl = styled.div`
  padding-top: 15px;
  color: white;
  text-align: center;
`

const Person = ({ imgKey, name, profession, fbPost }) =>
  <PersonStyl
    className={`Person`}
    onClick={() => {window.open(fbPost)}}
    style={{paddingTop: isLtDesktopBigHeight ? "0" : "10%"}}
  >
    <div>

      <PersonImgWrapperStyl>
        <PersonImgStyl src={`./people/${imgKey}.jpg`} alt={name} />
      </PersonImgWrapperStyl>

      <PersonFooterStyl>
        <div style={{fontSize: "30px", marginBottom: "5px"}}>{name}</div>
        <div>{profession}</div>
      </PersonFooterStyl>

    </div>
  </PersonStyl>

export default Person
