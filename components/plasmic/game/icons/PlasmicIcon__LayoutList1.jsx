/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LayoutList1Icon(props) {
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
          "M7.5 2.5H3.333a.833.833 0 00-.833.833V7.5c0 .46.373.833.833.833H7.5c.46 0 .833-.373.833-.833V3.333A.833.833 0 007.5 2.5zm0 9.167H3.333a.833.833 0 00-.833.833v4.167c0 .46.373.833.833.833H7.5c.46 0 .833-.373.833-.833V12.5a.833.833 0 00-.833-.833zm4.167-8.334H17.5M11.667 7.5H17.5m-5.833 5H17.5m-5.833 4.167H17.5"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LayoutList1Icon;
/* prettier-ignore-end */
