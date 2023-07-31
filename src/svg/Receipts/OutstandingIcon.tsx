import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const OutstandingIcon = (props: SvgProps) => (
    <Svg
        width={42}
        height={42}
        fill="none"
        {...props}
    >
        <Circle cx={21} cy={21} r={21} fill="#72179D" fillOpacity={0.1} />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.903 28.237a3.867 3.867 0 0 1 3.867-3.867h15.467a3.867 3.867 0 0 1 0 7.733H12.77a3.867 3.867 0 0 1-3.867-3.866Zm1.934 0c0 1.068.865 1.933 1.933 1.933h15.467a1.933 1.933 0 1 0 0-3.867H12.77a1.933 1.933 0 0 0-1.933 1.934Zm9.666-5.8a6.767 6.767 0 1 1 0-13.534 6.767 6.767 0 0 1 0 13.534Zm0-1.934a4.834 4.834 0 1 0 0-9.667 4.834 4.834 0 0 0 0 9.667Zm-7.733 8.7V27.27h10.633v1.933H12.77Zm8.7-16.433v2.5l1.65 1.65-1.367 1.367-2.216-2.216V12.77h1.933Z"
            fill="#72179D"
        />
    </Svg>
)

export default OutstandingIcon