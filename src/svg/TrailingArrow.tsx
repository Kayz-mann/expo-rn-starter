import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

const TrailingArrow = (props: SvgProps) => (
    <Svg
        width={24}
        height={40}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)" fill="#9CA69C">
            <Path d="M19 15.5V11l-7 5-7-5v4.5l7 5 7-5Z" />
            <Path d="M19 8.5V4l-7 5-7-5v4.5l7 5 7-5ZM19 29.5V25l-7 5-7-5v4.5l7 5 7-5Z" />
            <Path d="M19 22.5V18l-7 5-7-5v4.5l7 5 7-5Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" transform="rotate(90 12 12)" d="M0 0h40v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default TrailingArrow