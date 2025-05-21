/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Workflow1Icon(props) {
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
          "M7.5 2.5H4.167c-.92 0-1.667.746-1.667 1.667V7.5c0 .92.746 1.667 1.667 1.667H7.5c.92 0 1.667-.747 1.667-1.667V4.167c0-.92-.747-1.667-1.667-1.667zM5.833 9.167V12.5A1.667 1.667 0 007.5 14.167h3.333m5-3.334H12.5c-.92 0-1.667.746-1.667 1.667v3.333c0 .92.746 1.667 1.667 1.667h3.333c.92 0 1.667-.746 1.667-1.667V12.5c0-.92-.746-1.667-1.667-1.667z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Workflow1Icon;
/* prettier-ignore-end */
