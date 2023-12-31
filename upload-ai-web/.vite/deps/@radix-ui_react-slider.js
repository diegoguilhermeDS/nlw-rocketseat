import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $ae6933e535247d3d$export$7d15b64cf5a3a4c4,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $db6c3485150b8e66$export$1ab7ae714698c4b8,
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  $f631663db3294ace$export$b39126d51d94e6f3
} from "./chunk-PZT7WD2M.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
} from "./chunk-53WW62NW.js";
import "./chunk-FTOI3LDF.js";
import {
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  _extends
} from "./chunk-LUNQST5I.js";
import {
  require_react
} from "./chunk-V44YBZFD.js";
import {
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/.pnpm/@radix-ui+react-slider@1.1.2_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-slider/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $faa2e61a3361514f$var$PAGE_KEYS = [
  "PageUp",
  "PageDown"
];
var $faa2e61a3361514f$var$ARROW_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
];
var $faa2e61a3361514f$var$BACK_KEYS = {
  "from-left": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-right": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowRight"
  ],
  "from-bottom": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-top": [
    "Home",
    "PageDown",
    "ArrowUp",
    "ArrowLeft"
  ]
};
var $faa2e61a3361514f$var$SLIDER_NAME = "Slider";
var [$faa2e61a3361514f$var$Collection, $faa2e61a3361514f$var$useCollection, $faa2e61a3361514f$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($faa2e61a3361514f$var$SLIDER_NAME);
var [$faa2e61a3361514f$var$createSliderContext, $faa2e61a3361514f$export$ef72632d7b901f97] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($faa2e61a3361514f$var$SLIDER_NAME, [
  $faa2e61a3361514f$var$createCollectionScope
]);
var [$faa2e61a3361514f$var$SliderProvider, $faa2e61a3361514f$var$useSliderContext] = $faa2e61a3361514f$var$createSliderContext($faa2e61a3361514f$var$SLIDER_NAME);
var $faa2e61a3361514f$export$472062a354075cee = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { name, min = 0, max = 100, step = 1, orientation = "horizontal", disabled = false, minStepsBetweenThumbs = 0, defaultValue = [
    min
  ], value: value1, onValueChange = () => {
  }, onValueCommit = () => {
  }, inverted = false, ...sliderProps } = props;
  const [slider, setSlider] = (0, import_react.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setSlider(node)
  );
  const thumbRefs = (0, import_react.useRef)(/* @__PURE__ */ new Set());
  const valueIndexToChangeRef = (0, import_react.useRef)(0);
  const isHorizontal = orientation === "horizontal";
  const isFormControl = slider ? Boolean(slider.closest("form")) : true;
  const SliderOrientation = isHorizontal ? $faa2e61a3361514f$var$SliderHorizontal : $faa2e61a3361514f$var$SliderVertical;
  const [values = [], setValues] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: value1,
    defaultProp: defaultValue,
    onChange: (value) => {
      var _thumbs$valueIndexToC;
      const thumbs = [
        ...thumbRefs.current
      ];
      (_thumbs$valueIndexToC = thumbs[valueIndexToChangeRef.current]) === null || _thumbs$valueIndexToC === void 0 || _thumbs$valueIndexToC.focus();
      onValueChange(value);
    }
  });
  const valuesBeforeSlideStartRef = (0, import_react.useRef)(values);
  function handleSlideStart(value) {
    const closestIndex = $faa2e61a3361514f$var$getClosestValueIndex(values, value);
    updateValues(value, closestIndex);
  }
  function handleSlideMove(value) {
    updateValues(value, valueIndexToChangeRef.current);
  }
  function handleSlideEnd() {
    const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
    const nextValue = values[valueIndexToChangeRef.current];
    const hasChanged = nextValue !== prevValue;
    if (hasChanged)
      onValueCommit(values);
  }
  function updateValues(value, atIndex, { commit } = {
    commit: false
  }) {
    const decimalCount = $faa2e61a3361514f$var$getDecimalCount(step);
    const snapToStep = $faa2e61a3361514f$var$roundValue(Math.round((value - min) / step) * step + min, decimalCount);
    const nextValue = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(snapToStep, [
      min,
      max
    ]);
    setValues((prevValues = []) => {
      const nextValues = $faa2e61a3361514f$var$getNextSortedValues(prevValues, nextValue, atIndex);
      if ($faa2e61a3361514f$var$hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
        valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
        const hasChanged = String(nextValues) !== String(prevValues);
        if (hasChanged && commit)
          onValueCommit(nextValues);
        return hasChanged ? nextValues : prevValues;
      } else
        return prevValues;
    });
  }
  return (0, import_react.createElement)($faa2e61a3361514f$var$SliderProvider, {
    scope: props.__scopeSlider,
    disabled,
    min,
    max,
    valueIndexToChangeRef,
    thumbs: thumbRefs.current,
    values,
    orientation
  }, (0, import_react.createElement)($faa2e61a3361514f$var$Collection.Provider, {
    scope: props.__scopeSlider
  }, (0, import_react.createElement)($faa2e61a3361514f$var$Collection.Slot, {
    scope: props.__scopeSlider
  }, (0, import_react.createElement)(SliderOrientation, _extends({
    "aria-disabled": disabled,
    "data-disabled": disabled ? "" : void 0
  }, sliderProps, {
    ref: composedRefs,
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(sliderProps.onPointerDown, () => {
      if (!disabled)
        valuesBeforeSlideStartRef.current = values;
    }),
    min,
    max,
    inverted,
    onSlideStart: disabled ? void 0 : handleSlideStart,
    onSlideMove: disabled ? void 0 : handleSlideMove,
    onSlideEnd: disabled ? void 0 : handleSlideEnd,
    onHomeKeyDown: () => !disabled && updateValues(min, 0, {
      commit: true
    }),
    onEndKeyDown: () => !disabled && updateValues(max, values.length - 1, {
      commit: true
    }),
    onStepKeyDown: ({ event, direction: stepDirection }) => {
      if (!disabled) {
        const isPageKey = $faa2e61a3361514f$var$PAGE_KEYS.includes(event.key);
        const isSkipKey = isPageKey || event.shiftKey && $faa2e61a3361514f$var$ARROW_KEYS.includes(event.key);
        const multiplier = isSkipKey ? 10 : 1;
        const atIndex = valueIndexToChangeRef.current;
        const value = values[atIndex];
        const stepInDirection = step * multiplier * stepDirection;
        updateValues(value + stepInDirection, atIndex, {
          commit: true
        });
      }
    }
  })))), isFormControl && values.map(
    (value, index) => (0, import_react.createElement)($faa2e61a3361514f$var$BubbleInput, {
      key: index,
      name: name ? name + (values.length > 1 ? "[]" : "") : void 0,
      value
    })
  ));
});
Object.assign($faa2e61a3361514f$export$472062a354075cee, {
  displayName: $faa2e61a3361514f$var$SLIDER_NAME
});
var [$faa2e61a3361514f$var$SliderOrientationProvider, $faa2e61a3361514f$var$useSliderOrientationContext] = $faa2e61a3361514f$var$createSliderContext($faa2e61a3361514f$var$SLIDER_NAME, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
});
var $faa2e61a3361514f$var$SliderHorizontal = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { min, max, dir, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
  const [slider, setSlider] = (0, import_react.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setSlider(node)
  );
  const rectRef = (0, import_react.useRef)();
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const isDirectionLTR = direction === "ltr";
  const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
  function getValueFromPointer(pointerPosition) {
    const rect = rectRef.current || slider.getBoundingClientRect();
    const input = [
      0,
      rect.width
    ];
    const output = isSlidingFromLeft ? [
      min,
      max
    ] : [
      max,
      min
    ];
    const value = $faa2e61a3361514f$var$linearScale(input, output);
    rectRef.current = rect;
    return value(pointerPosition - rect.left);
  }
  return (0, import_react.createElement)($faa2e61a3361514f$var$SliderOrientationProvider, {
    scope: props.__scopeSlider,
    startEdge: isSlidingFromLeft ? "left" : "right",
    endEdge: isSlidingFromLeft ? "right" : "left",
    direction: isSlidingFromLeft ? 1 : -1,
    size: "width"
  }, (0, import_react.createElement)($faa2e61a3361514f$var$SliderImpl, _extends({
    dir: direction,
    "data-orientation": "horizontal"
  }, sliderProps, {
    ref: composedRefs,
    style: {
      ...sliderProps.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: (event) => {
      const value = getValueFromPointer(event.clientX);
      onSlideStart === null || onSlideStart === void 0 || onSlideStart(value);
    },
    onSlideMove: (event) => {
      const value = getValueFromPointer(event.clientX);
      onSlideMove === null || onSlideMove === void 0 || onSlideMove(value);
    },
    onSlideEnd: () => {
      rectRef.current = void 0;
      onSlideEnd === null || onSlideEnd === void 0 || onSlideEnd();
    },
    onStepKeyDown: (event) => {
      const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
      const isBackKey = $faa2e61a3361514f$var$BACK_KEYS[slideDirection].includes(event.key);
      onStepKeyDown === null || onStepKeyDown === void 0 || onStepKeyDown({
        event,
        direction: isBackKey ? -1 : 1
      });
    }
  })));
});
var $faa2e61a3361514f$var$SliderVertical = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { min, max, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
  const sliderRef = (0, import_react.useRef)(null);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, sliderRef);
  const rectRef = (0, import_react.useRef)();
  const isSlidingFromBottom = !inverted;
  function getValueFromPointer(pointerPosition) {
    const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
    const input = [
      0,
      rect.height
    ];
    const output = isSlidingFromBottom ? [
      max,
      min
    ] : [
      min,
      max
    ];
    const value = $faa2e61a3361514f$var$linearScale(input, output);
    rectRef.current = rect;
    return value(pointerPosition - rect.top);
  }
  return (0, import_react.createElement)($faa2e61a3361514f$var$SliderOrientationProvider, {
    scope: props.__scopeSlider,
    startEdge: isSlidingFromBottom ? "bottom" : "top",
    endEdge: isSlidingFromBottom ? "top" : "bottom",
    size: "height",
    direction: isSlidingFromBottom ? 1 : -1
  }, (0, import_react.createElement)($faa2e61a3361514f$var$SliderImpl, _extends({
    "data-orientation": "vertical"
  }, sliderProps, {
    ref,
    style: {
      ...sliderProps.style,
      ["--radix-slider-thumb-transform"]: "translateY(50%)"
    },
    onSlideStart: (event) => {
      const value = getValueFromPointer(event.clientY);
      onSlideStart === null || onSlideStart === void 0 || onSlideStart(value);
    },
    onSlideMove: (event) => {
      const value = getValueFromPointer(event.clientY);
      onSlideMove === null || onSlideMove === void 0 || onSlideMove(value);
    },
    onSlideEnd: () => {
      rectRef.current = void 0;
      onSlideEnd === null || onSlideEnd === void 0 || onSlideEnd();
    },
    onStepKeyDown: (event) => {
      const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
      const isBackKey = $faa2e61a3361514f$var$BACK_KEYS[slideDirection].includes(event.key);
      onStepKeyDown === null || onStepKeyDown === void 0 || onStepKeyDown({
        event,
        direction: isBackKey ? -1 : 1
      });
    }
  })));
});
var $faa2e61a3361514f$var$SliderImpl = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeSlider, onSlideStart, onSlideMove, onSlideEnd, onHomeKeyDown, onEndKeyDown, onStepKeyDown, ...sliderProps } = props;
  const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$SLIDER_NAME, __scopeSlider);
  return (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, sliderProps, {
    ref: forwardedRef,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Home") {
        onHomeKeyDown(event);
        event.preventDefault();
      } else if (event.key === "End") {
        onEndKeyDown(event);
        event.preventDefault();
      } else if ($faa2e61a3361514f$var$PAGE_KEYS.concat($faa2e61a3361514f$var$ARROW_KEYS).includes(event.key)) {
        onStepKeyDown(event);
        event.preventDefault();
      }
    }),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
      const target = event.target;
      target.setPointerCapture(event.pointerId);
      event.preventDefault();
      if (context.thumbs.has(target))
        target.focus();
      else
        onSlideStart(event);
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, (event) => {
      const target = event.target;
      if (target.hasPointerCapture(event.pointerId))
        onSlideMove(event);
    }),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
      const target = event.target;
      if (target.hasPointerCapture(event.pointerId)) {
        target.releasePointerCapture(event.pointerId);
        onSlideEnd(event);
      }
    })
  }));
});
var $faa2e61a3361514f$var$TRACK_NAME = "SliderTrack";
var $faa2e61a3361514f$export$105594979f116971 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeSlider, ...trackProps } = props;
  const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$TRACK_NAME, __scopeSlider);
  return (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-disabled": context.disabled ? "" : void 0,
    "data-orientation": context.orientation
  }, trackProps, {
    ref: forwardedRef
  }));
});
Object.assign($faa2e61a3361514f$export$105594979f116971, {
  displayName: $faa2e61a3361514f$var$TRACK_NAME
});
var $faa2e61a3361514f$var$RANGE_NAME = "SliderRange";
var $faa2e61a3361514f$export$a5cf38a7a000fe77 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeSlider, ...rangeProps } = props;
  const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$RANGE_NAME, __scopeSlider);
  const orientation = $faa2e61a3361514f$var$useSliderOrientationContext($faa2e61a3361514f$var$RANGE_NAME, __scopeSlider);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const valuesCount = context.values.length;
  const percentages = context.values.map(
    (value) => $faa2e61a3361514f$var$convertValueToPercentage(value, context.min, context.max)
  );
  const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
  const offsetEnd = 100 - Math.max(...percentages);
  return (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-orientation": context.orientation,
    "data-disabled": context.disabled ? "" : void 0
  }, rangeProps, {
    ref: composedRefs,
    style: {
      ...props.style,
      [orientation.startEdge]: offsetStart + "%",
      [orientation.endEdge]: offsetEnd + "%"
    }
  }));
});
Object.assign($faa2e61a3361514f$export$a5cf38a7a000fe77, {
  displayName: $faa2e61a3361514f$var$RANGE_NAME
});
var $faa2e61a3361514f$var$THUMB_NAME = "SliderThumb";
var $faa2e61a3361514f$export$2c1b491743890dec = (0, import_react.forwardRef)((props, forwardedRef) => {
  const getItems = $faa2e61a3361514f$var$useCollection(props.__scopeSlider);
  const [thumb, setThumb] = (0, import_react.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setThumb(node)
  );
  const index = (0, import_react.useMemo)(
    () => thumb ? getItems().findIndex(
      (item) => item.ref.current === thumb
    ) : -1,
    [
      getItems,
      thumb
    ]
  );
  return (0, import_react.createElement)($faa2e61a3361514f$var$SliderThumbImpl, _extends({}, props, {
    ref: composedRefs,
    index
  }));
});
var $faa2e61a3361514f$var$SliderThumbImpl = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeSlider, index, ...thumbProps } = props;
  const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$THUMB_NAME, __scopeSlider);
  const orientation = $faa2e61a3361514f$var$useSliderOrientationContext($faa2e61a3361514f$var$THUMB_NAME, __scopeSlider);
  const [thumb, setThumb] = (0, import_react.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setThumb(node)
  );
  const size = $db6c3485150b8e66$export$1ab7ae714698c4b8(thumb);
  const value = context.values[index];
  const percent = value === void 0 ? 0 : $faa2e61a3361514f$var$convertValueToPercentage(value, context.min, context.max);
  const label = $faa2e61a3361514f$var$getLabel(index, context.values.length);
  const orientationSize = size === null || size === void 0 ? void 0 : size[orientation.size];
  const thumbInBoundsOffset = orientationSize ? $faa2e61a3361514f$var$getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
  (0, import_react.useEffect)(() => {
    if (thumb) {
      context.thumbs.add(thumb);
      return () => {
        context.thumbs.delete(thumb);
      };
    }
  }, [
    thumb,
    context.thumbs
  ]);
  return (0, import_react.createElement)("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
    }
  }, (0, import_react.createElement)($faa2e61a3361514f$var$Collection.ItemSlot, {
    scope: props.__scopeSlider
  }, (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    role: "slider",
    "aria-label": props["aria-label"] || label,
    "aria-valuemin": context.min,
    "aria-valuenow": value,
    "aria-valuemax": context.max,
    "aria-orientation": context.orientation,
    "data-orientation": context.orientation,
    "data-disabled": context.disabled ? "" : void 0,
    tabIndex: context.disabled ? void 0 : 0
  }, thumbProps, {
    ref: composedRefs,
    style: value === void 0 ? {
      display: "none"
    } : props.style,
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, () => {
      context.valueIndexToChangeRef.current = index;
    })
  }))));
});
Object.assign($faa2e61a3361514f$export$2c1b491743890dec, {
  displayName: $faa2e61a3361514f$var$THUMB_NAME
});
var $faa2e61a3361514f$var$BubbleInput = (props) => {
  const { value, ...inputProps } = props;
  const ref = (0, import_react.useRef)(null);
  const prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value);
  (0, import_react.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("input", {
        bubbles: true
      });
      setValue.call(input, value);
      input.dispatchEvent(event);
    }
  }, [
    prevValue,
    value
  ]);
  return (0, import_react.createElement)("input", _extends({
    style: {
      display: "none"
    }
  }, inputProps, {
    ref,
    defaultValue: value
  }));
};
function $faa2e61a3361514f$var$getNextSortedValues(prevValues = [], nextValue, atIndex) {
  const nextValues = [
    ...prevValues
  ];
  nextValues[atIndex] = nextValue;
  return nextValues.sort(
    (a, b) => a - b
  );
}
function $faa2e61a3361514f$var$convertValueToPercentage(value, min, max) {
  const maxSteps = max - min;
  const percentPerStep = 100 / maxSteps;
  const percentage = percentPerStep * (value - min);
  return $ae6933e535247d3d$export$7d15b64cf5a3a4c4(percentage, [
    0,
    100
  ]);
}
function $faa2e61a3361514f$var$getLabel(index, totalValues) {
  if (totalValues > 2)
    return `Value ${index + 1} of ${totalValues}`;
  else if (totalValues === 2)
    return [
      "Minimum",
      "Maximum"
    ][index];
  else
    return void 0;
}
function $faa2e61a3361514f$var$getClosestValueIndex(values, nextValue) {
  if (values.length === 1)
    return 0;
  const distances = values.map(
    (value) => Math.abs(value - nextValue)
  );
  const closestDistance = Math.min(...distances);
  return distances.indexOf(closestDistance);
}
function $faa2e61a3361514f$var$getThumbInBoundsOffset(width, left, direction) {
  const halfWidth = width / 2;
  const halfPercent = 50;
  const offset = $faa2e61a3361514f$var$linearScale([
    0,
    halfPercent
  ], [
    0,
    halfWidth
  ]);
  return (halfWidth - offset(left) * direction) * direction;
}
function $faa2e61a3361514f$var$getStepsBetweenValues(values) {
  return values.slice(0, -1).map(
    (value, index) => values[index + 1] - value
  );
}
function $faa2e61a3361514f$var$hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = $faa2e61a3361514f$var$getStepsBetweenValues(values);
    const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
    return actualMinStepsBetweenValues >= minStepsBetweenValues;
  }
  return true;
}
function $faa2e61a3361514f$var$linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function $faa2e61a3361514f$var$getDecimalCount(value) {
  return (String(value).split(".")[1] || "").length;
}
function $faa2e61a3361514f$var$roundValue(value, decimalCount) {
  const rounder = Math.pow(10, decimalCount);
  return Math.round(value * rounder) / rounder;
}
var $faa2e61a3361514f$export$be92b6f5f03c0fe9 = $faa2e61a3361514f$export$472062a354075cee;
var $faa2e61a3361514f$export$13921ac0cc260818 = $faa2e61a3361514f$export$105594979f116971;
var $faa2e61a3361514f$export$9a58ef0d7ad3278c = $faa2e61a3361514f$export$a5cf38a7a000fe77;
var $faa2e61a3361514f$export$6521433ed15a34db = $faa2e61a3361514f$export$2c1b491743890dec;
export {
  $faa2e61a3361514f$export$9a58ef0d7ad3278c as Range,
  $faa2e61a3361514f$export$be92b6f5f03c0fe9 as Root,
  $faa2e61a3361514f$export$472062a354075cee as Slider,
  $faa2e61a3361514f$export$a5cf38a7a000fe77 as SliderRange,
  $faa2e61a3361514f$export$2c1b491743890dec as SliderThumb,
  $faa2e61a3361514f$export$105594979f116971 as SliderTrack,
  $faa2e61a3361514f$export$6521433ed15a34db as Thumb,
  $faa2e61a3361514f$export$13921ac0cc260818 as Track,
  $faa2e61a3361514f$export$ef72632d7b901f97 as createSliderScope
};
//# sourceMappingURL=@radix-ui_react-slider.js.map
