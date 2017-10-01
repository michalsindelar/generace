// @flow
import React from "react"

import QuestionBlock from "./QuestionBlock"

import {
  DEMAGOG,
  MAPA_VOLEBNICH_LINK,
  ONLINE_VOLEBNI_PRUKAZ_LINK,
  VOLEBNI_CALC_LINK,
} from "../../../../../../services/consts"

import { SecondaryColorStyl } from "../../../../../../services/styleTools"

const QuestionDeclined = () =>
  <SecondaryColorStyl>
    <QuestionBlock
      title="Politika mě nezajímá,"
      text="Je mi jedno jestli budu žít v demokracii, nebo totalitě."
      style={{marginTop: "50px"}}
    />

    <QuestionBlock
      title="Nemám na to čas."
      text="Jít volit zabere člověku v průměru půl hodiny, protože volební místnosti jsou všem bláízko."
      labels={[{
          href: MAPA_VOLEBNICH_LINK,
          label: "Mapa volebních místností"
        }]}
    />

    <QuestionBlock
      title="Bydlím jinde, než kde mohu volit."
      text="Volební průkaz je nástroj, se kterým lze volit kdekoliv. Lze jej obdržet poštou po vyplnění elektronické žádosti."
      labels={[{
        href: ONLINE_VOLEBNI_PRUKAZ_LINK,
        label: "Online voličský průkaz"
      }]}
    />

    <QuestionBlock
      title="Nevím koho."
      text="Volební kalkulačka ti poradí, s kterou stranou si rozumíš."
      style={{marginTop: "50px"}}
      labels={[
        {
          href: VOLEBNI_CALC_LINK,
          label: "Volební kalkulačka"
        },
        {
          href: DEMAGOG,
          label: "Komu věřit?"
        }
      ]}
    />

  </SecondaryColorStyl>

export default QuestionDeclined

