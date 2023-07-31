import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ClosedEyeIcon = (props: SvgProps) => (
  <Svg
    width={14}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      d="M9.441 10.298 8.03 8.885A3.062 3.062 0 0 1 4.114 4.97L2.312 3.168A11.847 11.847 0 0 0 0 6s2.625 4.813 7 4.813a6.15 6.15 0 0 0 2.441-.515ZM4.56 1.702A6.15 6.15 0 0 1 7 1.188C11.375 1.188 14 6 14 6s-.822 1.506-2.31 2.833L9.884 7.03A3.063 3.063 0 0 0 5.97 3.114L4.56 1.702Z"
      fill="#4F4F4F"
    />
    <Path
      d="M4.834 5.69A2.188 2.188 0 0 0 7.31 8.166L4.834 5.69Zm4.332.62L6.69 3.834a2.187 2.187 0 0 1 2.476 2.475Zm2.774 5.25L1.44 1.06l.62-.62 10.5 10.5-.62.62Z"
      fill="#4F4F4F"
    />
  </Svg>
)

export default ClosedEyeIcon