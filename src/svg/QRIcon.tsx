import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const QRIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      d="M4 10h3m6 0v3m-3 3h3m-3-5.989.01-.011m5.99.011.01-.011M10 13.011l.01-.011m5.99.011.01-.011M16 16.011l.01-.011M10 7.011 10.01 7M10 4.011 10.01 4M16 1h3v3m-3 15h3v-3M4 1H1v3m3 15H1v-3M7 4.6v1.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v0Zm0 9v1.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6v-1.8a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v0Zm9-9v1.8a.6.6 0 0 1-.6.6h-1.8a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v0Z"
      stroke="#1755A6"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default QRIcon