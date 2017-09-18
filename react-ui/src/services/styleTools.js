// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components'

const SIZES = {
  DESKTOP_BIG: 1170,
  DESKTOP: 992,
  TABLET: 768,
  PHONE: 376
}

// iterate through the sizes and create a MEDIA_ONLY_QUERY template
export const MEDIA_ONLY_QUERY = Object.keys(SIZES).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = SIZES[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export const DEFAULT_FONT = "kulturista-web"

export const PALETTE = {
  PRIMARY: "#E63C43",
  SECONDARY: "#0F183F",
  WHITE: "#FFF",
}