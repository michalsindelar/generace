// @flow
import React from "react"

import { QuestionSubtitle } from "./index"
import { FadeInComp, UnstyledLink } from "../../../../../../services/styleTools"
import {CREATE_AVATAR_LINK} from "../../../../../../services/consts"


const QuestionApproved = ({}) =>
  <FadeInComp>
    <QuestionSubtitle>
      Chci sdělit, že volím
    </QuestionSubtitle>

    <p>A motivovat tak ostatní.</p>

    <p>Sdílet stránku Generace s názorem</p>
    <div>logos</div>

    <p>Vytvořit profilovou fotku Generace s názorem.</p>
    <QuestionSubtitle>
      <UnstyledLink href={CREATE_AVATAR_LINK}>ZDE!</UnstyledLink>
    </QuestionSubtitle>
  </FadeInComp>

export default QuestionApproved

