import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const HomeIcon = (props: SvgProps) => (
    <Svg width={24} height={24} fill="none" {...props}>
        <Path
            d="M7.5 14.166h5m1.667 3.334H5.833A3.333 3.333 0 0 1 2.5 14.166V8.923a3.333 3.333 0 0 1 1.606-2.851l4.167-2.525a3.333 3.333 0 0 1 3.454 0l4.167 2.525a3.333 3.333 0 0 1 1.606 2.85v5.244a3.333 3.333 0 0 1-3.333 3.334Z"
            stroke={props?.stroke}
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default HomeIcon;
