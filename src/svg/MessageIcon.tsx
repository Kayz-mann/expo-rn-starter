import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const MessageIcon = (props: SvgProps) => (
    <Svg
        width={16}
        height={16}
        fill="none"

        {...props}
    >
        <Path
            d="M15.319.681a.625.625 0 0 0-.657-.144l-13.75 5a.625.625 0 0 0 0 1.17l5.37 2.143 3.962-3.975.881.881-3.981 3.981 2.15 5.369a.625.625 0 0 0 .581.394.625.625 0 0 0 .575-.413l5-13.75a.624.624 0 0 0-.131-.656Z"
            fill="#7B5A0A"
        />
    </Svg>
)

export default MessageIcon