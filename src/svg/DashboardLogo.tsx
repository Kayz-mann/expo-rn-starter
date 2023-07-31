import * as React from "react"
import Svg, {
  SvgProps,
  Circle,
  G,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg"

const DashboardLogo = (props: SvgProps) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <Circle cx={13} cy={13} r={13} fill="#004880" />
    <G clipPath="url(#a)">
      <Path
        d="m13 6.81-1.857 4.952-4.953 1.857 4.953 1.857L13 20.43l1.857-4.953 4.953-1.857-4.953-1.857L13 6.81Z"
        fill="#FFF200"
      />
    </G>
    <G clipPath="url(#b)">
      <Path
        d="m17.024 4.617-.851 2.27-2.27.851 2.27.851.85 2.27.852-2.27 2.27-.85-2.27-.852-.851-2.27Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(5.571 6.19)"
          d="M0 0h14.857v14.857H0z"
        />
      </ClipPath>
      <ClipPath id="b">
        <Path
          fill="#fff"
          transform="translate(13.619 4.333)"
          d="M0 0h6.81v6.81H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
)

export default DashboardLogo