// @flow
import React from "react"

import styled from 'styled-components';
import {MEDIA_ONLY_QUERY} from "../../../../../services/styleTools"

const PersonStyl = styled.div`
  width: 33.3%;
  padding-top: 10%;

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

const PersonFooterStyl = styled.div`
  padding-top: 15px;
  color: white;
  text-align: center;
`

const Person = ({ imgKey, name, profession }) =>
  <PersonStyl className={`Person`}>
    <div>
      <PersonImgStyl src={`./people/${imgKey}.jpg`} alt={name} />
      <PersonFooterStyl>
        <div style={{fontSize: "30px", marginBottom: "5px"}}>{name}</div>
        <div>{profession}</div>
      </PersonFooterStyl>

    </div>
  </PersonStyl>

export default Person
