import React from "react"
import {FACEBOOK_LINK} from "../services/consts"

import { ICON_DIMENSION } from "../services/styleTools"

const Facebook = ({ href, ...rest }) =>

  <a href={href || FACEBOOK_LINK} rel="noreferrer noopener" target="_blank" {...rest}>
    <img
      style={{width: ICON_DIMENSION, height: ICON_DIMENSION}}
      src="./fb.svg"
      alt="Generace s názorem | Facebook"
    />
  </a>

export default Facebook