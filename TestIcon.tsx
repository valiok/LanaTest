import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 7h-3V5.5A2.5 2.5 0 0013.5 3h-3A2.5 2.5 0 008 5.5V7H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3v-8a3 3 0 00-3-3zm-4 2v10H9V9h6zm-5-3.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V7h-4V5.5zM4 18v-8a1 1 0 011-1h2v10H5a1 1 0 01-1-1zm16 0a1 1 0 01-1 1h-2V9h2a1 1 0 011 1v8z"
        fill="#003466"
      />
    </Svg>
  )
}

export default SvgComponent
