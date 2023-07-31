import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SuccessIcon = (props: SvgProps) => (
    <Svg
        width={77}
        height={77}
        fill="none"
        {...props}
    >
        <Path
            d="M38.5.227a38.275 38.275 0 0 0-27.064 65.337 38.277 38.277 0 0 0 54.128 0A38.277 38.277 0 0 0 76.774 38.5 38.317 38.317 0 0 0 38.5.226Zm20.585 27.42L34.48 52.25c-.8.8-2.098.8-2.899 0l-13.67-13.67a2.05 2.05 0 0 1 2.9-2.897l12.22 12.22 23.157-23.156a2.05 2.05 0 0 1 2.898 2.898Z"
            fill="#fff"
        />
    </Svg>
)

export default SuccessIcon