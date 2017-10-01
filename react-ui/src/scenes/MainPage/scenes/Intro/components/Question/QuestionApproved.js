// @flow
import React from "react"

import { QuestionSubtitle } from "./index"
import {CREATE_AVATAR_LINK} from "../../../../../../services/consts"
import Facebook from "../../../../../../components/Facebook"
import Instagram from "../../../../../../components/Instagram"
import Icon from "../../../../../../components/Icon"
import LabelLink from "../../../../../../components/LabelLink"
import { SecondaryColorStyl, PALETTE } from "../../../../../../services/styleTools"
import config from "../../../../../../services/config"

const QuestionApproved = ({}) =>
  <SecondaryColorStyl style={{marginTop: "50px", color: PALETTE.SECONDARY}}>
    <QuestionSubtitle>
      Dej o sobě vědět.
    </QuestionSubtitle>

    <p>Sleduj stránku Generace s názorem</p>
    <Facebook style={{marginRight: "40px"}}/>
    <Instagram />

    {config.profile_picture_enabled &&

      <div style={{marginBottom: "30px"}}>
        <p style={{marginTop: "100px"}}>Řekni o sobě, že máš názor.</p>
        <Icon src={"./profile-picture-generation.svg"} width="200px" height="70px" />

        <LabelLink href={CREATE_AVATAR_LINK}>Generátor profilovky!</LabelLink>
      </div>

    }


  </SecondaryColorStyl>

export default QuestionApproved

