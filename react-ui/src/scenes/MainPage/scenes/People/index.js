// @flow
import React from "react"
import styled from 'styled-components';

import FullscreenSlide from "../../../../components/FullscreenSlide/index"
import Person from "./components/Person"
import {PEOPLE} from "../../../../services/consts"
import {MEDIA_ONLY_QUERY} from "../../../../services/styleTools"


const PeopleStyl = styled.div`
  display: flex;
  justify-content: center;
  align–content: center;
  align-self: center;
  height: 100%;

  ${MEDIA_ONLY_QUERY.DESKTOP`
    display: block;
    width: 100%;
  `}
`

const People = () =>
  <FullscreenSlide className="Attendance">
    <PeopleStyl>
      {Object.keys(PEOPLE).map(key =>
        <Person imgKey={key} key={key} {...PEOPLE[key]} />
      )}
    </PeopleStyl>
  </FullscreenSlide>

export default People
