// @flow
import React from "react"
import R from "ramda"
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
  flex-wrap: wrap;

  ${MEDIA_ONLY_QUERY.DESKTOP`
    display: block;
    width: 100%;

  `}
`
const PeopleDenseStyl = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top: 35px;

  ${MEDIA_ONLY_QUERY.DESKTOP`
    display: block;
    width: 100%;
  `}
`

const PeopleDenseStylWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  max-width: 100%;
`

const People = ({ people = Object.keys(PEOPLE), dense }) =>
  <FullscreenSlide className="Attendance">
    {!dense &&
      <PeopleStyl>
        {people.map(key => <Person imgKey={key} key={key} {...PEOPLE[key]} />)}
      </PeopleStyl>
    }

    {dense &&
      <PeopleDenseStylWrapper>
        <PeopleDenseStyl>
          {R.take(8, people).map(key => <Person imgKey={key} key={key} {...PEOPLE[key]} dense />)}
        </PeopleDenseStyl>
        <PeopleDenseStyl>
          {R.takeLast(7, people).map(key => <Person imgKey={key} key={key} {...PEOPLE[key]} dense />)}
        </PeopleDenseStyl>
      </PeopleDenseStylWrapper>
    }


  </FullscreenSlide>

export default People
