import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
} from "./chunk-53WW62NW.js";
import "./chunk-FTOI3LDF.js";
import {
  _extends
} from "./chunk-LUNQST5I.js";
import {
  require_react
} from "./chunk-V44YBZFD.js";
import {
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/.pnpm/@radix-ui+react-separator@1.0.3_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-separator/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $89eedd556c436f6a$var$NAME = "Separator";
var $89eedd556c436f6a$var$DEFAULT_ORIENTATION = "horizontal";
var $89eedd556c436f6a$var$ORIENTATIONS = [
  "horizontal",
  "vertical"
];
var $89eedd556c436f6a$export$1ff3c3f08ae963c0 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = $89eedd556c436f6a$var$DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = $89eedd556c436f6a$var$isValidOrientation(orientationProp) ? orientationProp : $89eedd556c436f6a$var$DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? {
    role: "none"
  } : {
    "aria-orientation": ariaOrientation,
    role: "separator"
  };
  return (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-orientation": orientation
  }, semanticProps, domProps, {
    ref: forwardedRef
  }));
});
Object.assign($89eedd556c436f6a$export$1ff3c3f08ae963c0, {
  displayName: $89eedd556c436f6a$var$NAME
});
$89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes = {
  orientation(props, propName, componentName) {
    const propValue = props[propName];
    const strVal = String(propValue);
    if (propValue && !$89eedd556c436f6a$var$isValidOrientation(propValue))
      return new Error($89eedd556c436f6a$var$getInvalidOrientationError(strVal, componentName));
    return null;
  }
};
function $89eedd556c436f6a$var$getInvalidOrientationError(value, componentName) {
  return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`;
}
function $89eedd556c436f6a$var$isValidOrientation(orientation) {
  return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation);
}
var $89eedd556c436f6a$export$be92b6f5f03c0fe9 = $89eedd556c436f6a$export$1ff3c3f08ae963c0;
export {
  $89eedd556c436f6a$export$be92b6f5f03c0fe9 as Root,
  $89eedd556c436f6a$export$1ff3c3f08ae963c0 as Separator
};
//# sourceMappingURL=@radix-ui_react-separator.js.map
