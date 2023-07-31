import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const PendingIcon = (props: SvgProps) => (
    <Svg
        width={42}
        height={42}
        fill="none"
        {...props}
    >
        <Circle cx={21} cy={21} r={21} fill="#F8961E" fillOpacity={0.1} />
        <Path
            d="M26 21c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm1.65 7.35L25.5 26.2V23h1v2.79l1.85 1.85-.7.71ZM27 12h-3.18c-.42-1.16-1.52-2-2.82-2-1.3 0-2.4.84-2.82 2H15c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11a6.743 6.743 0 0 1-1.42-2H15V14h2v3h8v-3h2v5.08c.71.1 1.38.31 2 .6V14c0-1.1-.9-2-2-2Zm-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"
            fill="#F8961E"
        />
    </Svg>
)

export default PendingIcon