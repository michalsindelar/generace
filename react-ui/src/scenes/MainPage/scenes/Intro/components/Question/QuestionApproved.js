// @flow
import React from "react"

import { QuestionSubtitle } from "./index"
import { UnstyledLink } from "../../../../../../services/styleTools"
import {CREATE_AVATAR_LINK} from "../../../../../../services/consts"
import Facebook from "../../../../../../components/Facebook"
import Instagram from "../../../../../../components/Instagram"
import Icon from "../../../../../../components/Icon"
import LabelLink from "../../../../../../components/LabelLink"


const QuestionApproved = ({}) =>
  <div style={{marginTop: "50px"}}>
    <QuestionSubtitle>
      Dej o sobě vědět.
    </QuestionSubtitle>

    <p>Sleduj stránku Generace s názorem</p>
    <Facebook style={{marginRight: "40px"}}/>
    <Instagram />

    <div style={{marginBottom: "30px"}}>
      <p style={{marginTop: "100px"}}>Řekni o sobě, že máš názor.</p>
      <Icon src={"./profile-picture-generation.svg"} width="200px" height="70px" />
    </div>

    <LabelLink href={CREATE_AVATAR_LINK}>Generátor profilovky!</LabelLink>
  </div>

export default QuestionApproved

