/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.5 29.216c-5.339 0-9.43-1.232-12.276-3.696C1.408 23.056 0 19.419 0 14.608 0 9.798 1.481 6.16 4.444 3.696 7.407 1.232 11.674 0 17.248 0c1.819 0 3.447.103 4.884.308 1.467.176 2.875.499 4.224.968v9.064a17.148 17.148 0 00-4.136-1.056 28.944 28.944 0 00-4.268-.308c-2.053 0-3.755.41-5.104 1.232-1.32.792-1.98 2.259-1.98 4.4 0 2.141.47 3.623 1.408 4.444.968.792 2.347 1.188 4.136 1.188.939 0 1.819-.103 2.64-.308v-1.716h-4.708v-6.424h13.508v14.652c-1.203.733-2.743 1.379-4.62 1.936-1.877.557-4.121.836-6.732.836z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GIcon;
/* prettier-ignore-end */
