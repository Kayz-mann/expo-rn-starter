import * as React from "react"
import Svg, { SvgProps, Rect, Path, Circle } from "react-native-svg"

const DefaultNotification = (props: SvgProps) => (
  <Svg
    width={38}
    height={36}
    fill="none"
    {...props}
  >
    <Rect width={38} height={36} rx={9} fill="#F7F7F7" />
    <Path
      d="M28 12.5c0 1.93-1.57 3.5-3.5 3.5S21 14.43 21 12.5 22.57 9 24.5 9s3.5 1.57 3.5 3.5Zm-2 5.29c-.5.13-1 .21-1.5.21a5.51 5.51 0 0 1-5.5-5.5c0-1.47.58-2.8 1.5-3.79A1.93 1.93 0 0 0 19 8c-1.1 0-2 .9-2 2v.29c-2.97.88-5 3.61-5 6.71v6l-2 2v1h18v-1l-2-2v-5.21ZM19 29c1.11 0 2-.89 2-2h-4a2 2 0 0 0 2 2Z"
      fill="#4F4F4F"
    />
    <Circle cx={24.5} cy={12.5} r={3.5} fill="#4F4F4F" />
  </Svg>
)

export default DefaultNotification