import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SendIcon = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      d="M15.316.681a.625.625 0 0 0-.656-.143l-13.75 5a.625.625 0 0 0 0 1.168L6.278 8.85l3.963-3.975.881.881-3.981 3.982 2.15 5.368a.625.625 0 0 0 .581.394.626.626 0 0 0 .575-.412l5-13.75a.625.625 0 0 0-.131-.657Z"
      fill="#1755A6"
    />
  </Svg>
)

export default SendIcon
