/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3XwD8wCAoqPrGWTGpVKhwr
// Component: C9UhLP6S6jRb
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser,
  useTrigger
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 3XwD8wCAoqPrGWTGpVKhwr/projectcss
import sty from "./PlasmicCardGame.module.css"; // plasmic-import: C9UhLP6S6jRb/css
import Bookmark11Icon from "./icons/PlasmicIcon__Bookmark11"; // plasmic-import: LBXCyLpxoVii/icon

createPlasmicElementProxy;

export const PlasmicCardGame__VariantProps = new Array();

export const PlasmicCardGame__ArgProps = new Array(
  "imageUrl",
  "title",
  "description"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCardGame__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const [isCardGameHover, triggerCardGameHoverProps] = useTrigger(
    "useHover",
    {}
  );
  const triggers = {
    hover_cardGame: isCardGameHover
  };
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"cardGame"}
      data-plasmic-override={overrides.cardGame}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.cardGame
      )}
      data-plasmic-trigger-props={[triggerCardGameHoverProps]}
    >
      <div
        data-plasmic-name={"card"}
        data-plasmic-override={overrides.card}
        className={classNames(projectcss.all, sty.card)}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"badge"}
            data-plasmic-override={overrides.badge}
            hasGap={true}
            className={classNames(projectcss.all, sty.badge)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              hasGap={true}
              className={classNames(projectcss.all, sty.text)}
            >
              <div
                data-plasmic-name={"badge2"}
                data-plasmic-override={overrides.badge2}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.badge2
                )}
              >
                {"New"}
              </div>
            </Stack__>
          </Stack__>
        </div>
        <div
          data-plasmic-name={"screen"}
          data-plasmic-override={overrides.screen}
          className={classNames(projectcss.all, sty.screen)}
        />

        <div
          data-plasmic-name={"hoverOverlay"}
          data-plasmic-override={overrides.hoverOverlay}
          className={classNames(projectcss.all, sty.hoverOverlay)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"buttonsCollection"}
            data-plasmic-override={overrides.buttonsCollection}
            hasGap={true}
            className={classNames(projectcss.all, sty.buttonsCollection)}
          >
            <Bookmark11Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />

            <div
              data-plasmic-name={"addToCollection"}
              data-plasmic-override={overrides.addToCollection}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.addToCollection
              )}
            >
              {"Save"}
            </div>
          </Stack__>
        </div>
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"name"}
        data-plasmic-override={overrides.name}
        hasGap={true}
        className={classNames(projectcss.all, sty.name)}
      >
        <div
          data-plasmic-name={"_492X0W1"}
          data-plasmic-override={overrides._492X0W1}
          className={classNames(projectcss.all, sty._492X0W1)}
        />

        <Stack__
          as={"div"}
          data-plasmic-name={"frame19"}
          data-plasmic-override={overrides.frame19}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame19)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__immHa
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.title;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Subway Surfers";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__irpIc
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.description;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Join the endless running fun!";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </Stack__>
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  cardGame: [
    "cardGame",
    "card",
    "freeBox",
    "badge",
    "text",
    "badge2",
    "screen",
    "hoverOverlay",
    "buttonsCollection",
    "svg",
    "addToCollection",
    "name",
    "_492X0W1",
    "frame19"
  ],

  card: [
    "card",
    "freeBox",
    "badge",
    "text",
    "badge2",
    "screen",
    "hoverOverlay",
    "buttonsCollection",
    "svg",
    "addToCollection"
  ],

  freeBox: ["freeBox", "badge", "text", "badge2"],
  badge: ["badge", "text", "badge2"],
  text: ["text", "badge2"],
  badge2: ["badge2"],
  screen: ["screen"],
  hoverOverlay: ["hoverOverlay", "buttonsCollection", "svg", "addToCollection"],
  buttonsCollection: ["buttonsCollection", "svg", "addToCollection"],
  svg: ["svg"],
  addToCollection: ["addToCollection"],
  name: ["name", "_492X0W1", "frame19"],
  _492X0W1: ["_492X0W1"],
  frame19: ["frame19"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCardGame__ArgProps,
          internalVariantPropNames: PlasmicCardGame__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCardGame__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "cardGame") {
    func.displayName = "PlasmicCardGame";
  } else {
    func.displayName = `PlasmicCardGame.${nodeName}`;
  }
  return func;
}

export const PlasmicCardGame = Object.assign(
  // Top-level PlasmicCardGame renders the root element
  makeNodeComponent("cardGame"),
  {
    // Helper components rendering sub-elements
    card: makeNodeComponent("card"),
    freeBox: makeNodeComponent("freeBox"),
    badge: makeNodeComponent("badge"),
    text: makeNodeComponent("text"),
    badge2: makeNodeComponent("badge2"),
    screen: makeNodeComponent("screen"),
    hoverOverlay: makeNodeComponent("hoverOverlay"),
    buttonsCollection: makeNodeComponent("buttonsCollection"),
    svg: makeNodeComponent("svg"),
    addToCollection: makeNodeComponent("addToCollection"),
    _name: makeNodeComponent("name"),
    _492X0W1: makeNodeComponent("_492X0W1"),
    frame19: makeNodeComponent("frame19"),
    // Metadata about props expected for PlasmicCardGame
    internalVariantProps: PlasmicCardGame__VariantProps,
    internalArgProps: PlasmicCardGame__ArgProps
  }
);

export default PlasmicCardGame;
/* prettier-ignore-end */
