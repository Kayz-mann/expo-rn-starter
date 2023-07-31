import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const PlusIcon = (props: SvgProps) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path d="M6 14V8H0V6h6V0h2v6h6v2H8v6H6Z" fill="#1755A6" />
  </Svg>
)

export default PlusIcon