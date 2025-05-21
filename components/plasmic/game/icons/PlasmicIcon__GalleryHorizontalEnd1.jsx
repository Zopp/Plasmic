/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GalleryHorizontalEnd1Icon(props) {
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
          "M1.667 5.833v8.334M5 4.167v11.666M16.667 2.5H10c-.92 0-1.667.746-1.667 1.667v11.666c0 .92.747 1.667 1.667 1.667h6.667c.92 0 1.666-.746 1.666-1.667V4.167c0-.92-.746-1.667-1.666-1.667z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GalleryHorizontalEnd1Icon;
/* prettier-ignore-end */
