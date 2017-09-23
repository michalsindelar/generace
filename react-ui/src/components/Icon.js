import React from "react"
import { ICON_DIMENSION } from "../services/styleTools"

const Icon = ({ src }) =>
  <img
    style={{width: ICON_DIMENSION, height: ICON_DIMENSION}}
    src={src}
    alt="Generace s názorem | Facebook"
  />

export default Icon