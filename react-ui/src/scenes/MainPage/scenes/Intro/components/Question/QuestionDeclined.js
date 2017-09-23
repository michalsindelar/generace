// @flow
import React from "react"

import QuestionBlock from "./QuestionBlock"

const QuestionDeclined = () =>
  <div>
    <QuestionBlock
      title="Politika mě nezajímá,"
      text="Je mi jedno jestli budu žít v demokracii, nebo totalitě."
    />

    <QuestionBlock
      title="Nemám na to čas."
      text="Jít volůit zabere člověku v průměru půl hodiny, protože volební místnosti jsou všem bláízko."
    />

    <QuestionBlock
      title="Bydlím jinde, než kde mohu volit."
      text="Volební průkaz je nástroj, se kterým lze volit kdekoliv. Lze jej obdržet poštou po vyplnění elektronické žádosti."
      bordered
    />

    <QuestionBlock
      title="Zajímám se o politiku, ale můj názor je NEvolit."
      text="Např. jsem anarchista, nechcu podpořit žádnou ze stran / kandidátů, neuznávám demokracii."
      extraTest="V pořádku, mám názor."
      style={{marginTop: "80px"}}
    />

  </div>

export default QuestionDeclined

