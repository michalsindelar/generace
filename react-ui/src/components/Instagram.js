import React from "react"
import { INSTAGRAM_LINK} from "../services/consts"

import { ICON_DIMENSION } from "../services/styleTools"

const Instagram = ({ href }) =>

  <a href={href || INSTAGRAM_LINK}>
    <img
      style={{width: ICON_DIMENSION, height: ICON_DIMENSION}}
      src="./insta.svg"
      alt="Generace s názorem | Instagram"
    />
  </a>

export default Instagram