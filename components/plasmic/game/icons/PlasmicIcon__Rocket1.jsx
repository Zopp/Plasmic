/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Rocket1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.75 13.75c-1.25 1.05-1.667 4.167-1.667 4.167S5.2 17.5 6.25 16.25c.592-.7.583-1.775-.075-2.425a1.816 1.816 0 00-2.425-.075zM10 12.5L7.5 10a18.333 18.333 0 011.667-3.292 10.734 10.734 0 019.166-5.041c0 2.266-.65 6.25-5 9.166A18.625 18.625 0 0110 12.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7.5 10H3.333S3.792 7.475 5 6.667c1.35-.9 4.167 0 4.167 0M10 12.5v4.167s2.525-.459 3.333-1.667c.9-1.35 0-4.167 0-4.167"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Rocket1Icon;
/* prettier-ignore-end */
