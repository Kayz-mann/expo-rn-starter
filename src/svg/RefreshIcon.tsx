import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const RefreshIcon = (props: SvgProps) => (
    <Svg
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            d="M14.667 7.167A6.75 6.75 0 0 0 1.75 5.5m-.417-3.333V5.5h3.334M1.333 8.833A6.75 6.75 0 0 0 14.25 10.5m.417 3.333V10.5h-3.334"
            stroke="#1755A6"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default RefreshIcon
