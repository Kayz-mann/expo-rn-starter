import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

const StatusIcon = (props: SvgProps) => (
  <Svg
    width={38}
    height={36}
    fill="none"
    {...props}
  >
    <Rect width={38} height={36} rx={9} fill="#FFF4F4" />
    <Path
      d="M24 26V10m0 0 3 3m-3-3-3 3m-7-3v16m0 0 3-3m-3 3-3-3"
      stroke="#D90000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default StatusIcon
