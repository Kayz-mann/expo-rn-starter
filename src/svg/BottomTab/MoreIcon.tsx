import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const MoreIcon = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            d="M12 7.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0-5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
            fill={props?.stroke}
            stroke={props?.stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
            stroke={props?.stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default MoreIcon
