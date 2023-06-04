/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/bootstrap/js/bootstrap.min.js":
/*!********************************************************!*\
  !*** ./resources/assets/bootstrap/js/bootstrap.min.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e18) { throw _e18; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e19) { didErr = true; err = _e19; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var t = "transitionend",
    e = function e(t) {
      var e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        var _i2 = t.getAttribute("href");
        if (!_i2 || !_i2.includes("#") && !_i2.startsWith(".")) return null;
        _i2.includes("#") && !_i2.startsWith("#") && (_i2 = "#".concat(_i2.split("#")[1])), e = _i2 && "#" !== _i2 ? _i2.trim() : null;
      }
      return e;
    },
    i = function i(t) {
      var i = e(t);
      return i && document.querySelector(i) ? i : null;
    },
    n = function n(t) {
      var i = e(t);
      return i ? document.querySelector(i) : null;
    },
    s = function s(e) {
      e.dispatchEvent(new Event(t));
    },
    o = function o(t) {
      return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
    },
    r = function r(t) {
      return o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null;
    },
    a = function a(t) {
      if (!o(t) || 0 === t.getClientRects().length) return !1;
      var e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
      if (!i) return e;
      if (i !== t) {
        var _e2 = t.closest("summary");
        if (_e2 && _e2.parentNode !== i) return !1;
        if (null === _e2) return !1;
      }
      return e;
    },
    l = function l(t) {
      return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
    },
    c = function c(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var _e3 = t.getRootNode();
        return _e3 instanceof ShadowRoot ? _e3 : null;
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
    },
    h = function h() {},
    d = function d(t) {
      t.offsetHeight;
    },
    u = function u() {
      return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null;
    },
    f = [],
    p = function p() {
      return "rtl" === document.documentElement.dir;
    },
    g = function g(t) {
      var e;
      e = function e() {
        var e = u();
        if (e) {
          var _i3 = t.NAME,
            _n2 = e.fn[_i3];
          e.fn[_i3] = t.jQueryInterface, e.fn[_i3].Constructor = t, e.fn[_i3].noConflict = function () {
            return e.fn[_i3] = _n2, t.jQueryInterface;
          };
        }
      }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", function () {
        for (var _i4 = 0, _f = f; _i4 < _f.length; _i4++) {
          var _t2 = _f[_i4];
          _t2();
        }
      }), f.push(e)) : e();
    },
    m = function m(t) {
      "function" == typeof t && t();
    },
    _ = function _(e, i) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      if (!n) return void m(e);
      var o = function (t) {
        if (!t) return 0;
        var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;
        var n = Number.parseFloat(e),
          s = Number.parseFloat(i);
        return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
      }(i) + 5;
      var r = !1;
      var a = function a(_ref) {
        var n = _ref.target;
        n === i && (r = !0, i.removeEventListener(t, a), m(e));
      };
      i.addEventListener(t, a), setTimeout(function () {
        r || s(i);
      }, o);
    },
    b = function b(t, e, i, n) {
      var s = t.length;
      var o = t.indexOf(e);
      return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
    },
    v = /[^.]*(?=\..*)\.|.*/,
    y = /\..*/,
    w = /::\d+$/,
    A = {};
  var E = 1;
  var T = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    },
    C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function O(t, e) {
    return e && "".concat(e, "::").concat(E++) || t.uidEvent || E++;
  }
  function x(t) {
    var e = O(t);
    return t.uidEvent = e, A[e] = A[e] || {}, A[e];
  }
  function k(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.values(t).find(function (t) {
      return t.callable === e && t.delegationSelector === i;
    });
  }
  function L(t, e, i) {
    var n = "string" == typeof e,
      s = n ? i : e || i;
    var o = N(t);
    return C.has(o) || (o = t), [n, s, o];
  }
  function D(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    var _L = L(e, i, n),
      _L2 = _slicedToArray(_L, 3),
      o = _L2[0],
      r = _L2[1],
      a = _L2[2];
    if (e in T) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };
      r = _t3(r);
    }
    var l = x(t),
      c = l[a] || (l[a] = {}),
      h = k(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    var d = O(r, e.replace(v, "")),
      u = o ? function (t, e, i) {
        return function n(s) {
          var o = t.querySelectorAll(e);
          for (var _r2 = s.target; _r2 && _r2 !== this; _r2 = _r2.parentNode) {
            var _iterator = _createForOfIteratorHelper(o),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _a = _step.value;
                if (_a === _r2) return j(s, {
                  delegateTarget: _r2
                }), n.oneOff && P.off(t, s.type, e, i), i.apply(_r2, [s]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        };
      }(t, i, r) : function (t, e) {
        return function i(n) {
          return j(n, {
            delegateTarget: t
          }), i.oneOff && P.off(t, n.type, e), e.apply(t, [n]);
        };
      }(t, r);
    u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }
  function S(t, e, i, n, s) {
    var o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function I(t, e, i, n) {
    var s = e[i] || {};
    for (var _i5 = 0, _Object$keys = Object.keys(s); _i5 < _Object$keys.length; _i5++) {
      var _o = _Object$keys[_i5];
      if (_o.includes(n)) {
        var _n3 = s[_o];
        S(t, e, i, _n3.callable, _n3.delegationSelector);
      }
    }
  }
  function N(t) {
    return t = t.replace(y, ""), T[t] || t;
  }
  var P = {
    on: function on(t, e, i, n) {
      D(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      D(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      var _L3 = L(e, i, n),
        _L4 = _slicedToArray(_L3, 3),
        s = _L4[0],
        o = _L4[1],
        r = _L4[2],
        a = r !== e,
        l = x(t),
        c = l[r] || {},
        h = e.startsWith(".");
      if (void 0 === o) {
        if (h) for (var _i6 = 0, _Object$keys2 = Object.keys(l); _i6 < _Object$keys2.length; _i6++) {
          var _i7 = _Object$keys2[_i6];
          I(t, l, _i7, e.slice(1));
        }
        for (var _i8 = 0, _Object$keys3 = Object.keys(c); _i8 < _Object$keys3.length; _i8++) {
          var _i9 = _Object$keys3[_i8];
          var _n4 = _i9.replace(w, "");
          if (!a || e.includes(_n4)) {
            var _e4 = c[_i9];
            S(t, l, r, _e4.callable, _e4.delegationSelector);
          }
        }
      } else {
        if (!Object.keys(c).length) return;
        S(t, l, r, o, s ? i : null);
      }
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = u();
      var s = null,
        o = !0,
        r = !0,
        a = !1;
      e !== N(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
      var l = new Event(e, {
        bubbles: o,
        cancelable: !0
      });
      return l = j(l, i), a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
    }
  };
  function j(t, e) {
    var _loop = function _loop() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i10], 2),
        i = _Object$entries$_i[0],
        n = _Object$entries$_i[1];
      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, {
          configurable: !0,
          get: function get() {
            return n;
          }
        });
      }
    };
    for (var _i10 = 0, _Object$entries = Object.entries(e || {}); _i10 < _Object$entries.length; _i10++) {
      _loop();
    }
    return t;
  }
  var M = new Map(),
    H = {
      set: function set(t, e, i) {
        M.has(t) || M.set(t, new Map());
        var n = M.get(t);
        n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
      },
      get: function get(t, e) {
        return M.has(t) && M.get(t).get(e) || null;
      },
      remove: function remove(t, e) {
        if (!M.has(t)) return;
        var i = M.get(t);
        i["delete"](e), 0 === i.size && M["delete"](t);
      }
    };
  function $(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function W(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }
  var B = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-".concat(W(e)), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(W(e)));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {},
        i = Object.keys(t.dataset).filter(function (t) {
          return t.startsWith("bs") && !t.startsWith("bsConfig");
        });
      var _iterator2 = _createForOfIteratorHelper(i),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _n5 = _step2.value;
          var _i11 = _n5.replace(/^bs/, "");
          _i11 = _i11.charAt(0).toLowerCase() + _i11.slice(1, _i11.length), e[_i11] = $(t.dataset[_n5]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return $(t.getAttribute("data-bs-".concat(W(e))));
    }
  };
  var F = /*#__PURE__*/function () {
    function F() {
      _classCallCheck(this, F);
    }
    _createClass(F, [{
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t;
      }
    }, {
      key: "_mergeConfigObj",
      value: function _mergeConfigObj(t, e) {
        var i = o(e) ? B.getDataAttribute(e, "config") : {};
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), "object" == _typeof(i) ? i : {}), o(e) ? B.getDataAttributes(e) : {}), "object" == _typeof(t) ? t : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;
        for (var _i12 = 0, _Object$keys4 = Object.keys(e); _i12 < _Object$keys4.length; _i12++) {
          var _n6 = _Object$keys4[_i12];
          var _s2 = e[_n6],
            _r3 = t[_n6],
            _a2 = o(_r3) ? "element" : null == (i = _r3) ? "".concat(i) : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(_s2).test(_a2)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(_n6, "\" provided type \"").concat(_a2, "\" but expected type \"").concat(_s2, "\"."));
        }
        var i;
      }
    }], [{
      key: "Default",
      get: function get() {
        return {};
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return {};
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }]);
    return F;
  }();
  var z = /*#__PURE__*/function (_F) {
    _inherits(z, _F);
    var _super = _createSuper(z);
    function z(t, e) {
      var _this;
      _classCallCheck(this, z);
      _this = _super.call(this), (t = r(t)) && (_this._element = t, _this._config = _this._getConfig(e), H.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
      return _this;
    }
    _createClass(z, [{
      key: "dispose",
      value: function dispose() {
        H.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
        var _iterator3 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _t4 = _step3.value;
            this[_t4] = null;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        _(t, e, i);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return H.get(r(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.2.3";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }, {
      key: "eventName",
      value: function eventName(t) {
        return "".concat(t).concat(this.EVENT_KEY);
      }
    }]);
    return z;
  }(F);
  var q = function q(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
    var i = "click.dismiss".concat(t.EVENT_KEY),
      s = t.NAME;
    P.on(document, i, "[data-bs-dismiss=\"".concat(s, "\"]"), function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
      var o = n(this) || this.closest(".".concat(s));
      t.getOrCreateInstance(o)[e]();
    });
  };
  var R = /*#__PURE__*/function (_z) {
    _inherits(R, _z);
    var _super2 = _createSuper(R);
    function R() {
      _classCallCheck(this, R);
      return _super2.apply(this, arguments);
    }
    _createClass(R, [{
      key: "close",
      value: function close() {
        var _this2 = this;
        if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;
        this._element.classList.remove("show");
        var t = this._element.classList.contains("fade");
        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = R.getOrCreateInstance(this);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return R;
  }(z);
  q(R, "close"), g(R);
  var V = '[data-bs-toggle="button"]';
  var K = /*#__PURE__*/function (_z2) {
    _inherits(K, _z2);
    var _super3 = _createSuper(K);
    function K() {
      _classCallCheck(this, K);
      return _super3.apply(this, arguments);
    }
    _createClass(K, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = K.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }]);
    return K;
  }(z);
  P.on(document, "click.bs.button.data-api", V, function (t) {
    t.preventDefault();
    var e = t.target.closest(V);
    K.getOrCreateInstance(e).toggle();
  }), g(K);
  var Q = {
      find: function find(t) {
        var _ref2;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
        return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
      },
      findOne: function findOne(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
        return Element.prototype.querySelector.call(e, t);
      },
      children: function children(t, e) {
        var _ref3;
        return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
          return t.matches(e);
        });
      },
      parents: function parents(t, e) {
        var i = [];
        var n = t.parentNode.closest(e);
        for (; n;) i.push(n), n = n.parentNode.closest(e);
        return i;
      },
      prev: function prev(t, e) {
        var i = t.previousElementSibling;
        for (; i;) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next: function next(t, e) {
        var i = t.nextElementSibling;
        for (; i;) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren: function focusableChildren(t) {
        var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
          return "".concat(t, ":not([tabindex^=\"-\"])");
        }).join(",");
        return this.find(e, t).filter(function (t) {
          return !l(t) && a(t);
        });
      }
    },
    X = {
      endCallback: null,
      leftCallback: null,
      rightCallback: null
    },
    Y = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)"
    };
  var U = /*#__PURE__*/function (_F2) {
    _inherits(U, _F2);
    var _super4 = _createSuper(U);
    function U(t, e) {
      var _this3;
      _classCallCheck(this, U);
      _this3 = _super4.call(this), _this3._element = t, t && U.isSupported() && (_this3._config = _this3._getConfig(e), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
      return _this3;
    }
    _createClass(U, [{
      key: "dispose",
      value: function dispose() {
        P.off(this._element, ".bs.swipe");
      }
    }, {
      key: "_start",
      value: function _start(t) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
      }
    }, {
      key: "_end",
      value: function _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), m(this._config.endCallback);
      }
    }, {
      key: "_move",
      value: function _move(t) {
        this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this._deltaX);
        if (t <= 40) return;
        var e = t / this._deltaX;
        this._deltaX = 0, e && m(e > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this4 = this;
        this._supportPointerEvents ? (P.on(this._element, "pointerdown.bs.swipe", function (t) {
          return _this4._start(t);
        }), P.on(this._element, "pointerup.bs.swipe", function (t) {
          return _this4._end(t);
        }), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.swipe", function (t) {
          return _this4._start(t);
        }), P.on(this._element, "touchmove.bs.swipe", function (t) {
          return _this4._move(t);
        }), P.on(this._element, "touchend.bs.swipe", function (t) {
          return _this4._end(t);
        }));
      }
    }, {
      key: "_eventIsPointerPenTouch",
      value: function _eventIsPointerPenTouch(t) {
        return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
      }
    }], [{
      key: "Default",
      get: function get() {
        return X;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Y;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "swipe";
      }
    }, {
      key: "isSupported",
      value: function isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }]);
    return U;
  }(F);
  var G = "next",
    J = "prev",
    Z = "left",
    tt = "right",
    et = "slid.bs.carousel",
    it = "carousel",
    nt = "active",
    st = {
      ArrowLeft: tt,
      ArrowRight: Z
    },
    ot = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0
    },
    rt = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean"
    };
  var at = /*#__PURE__*/function (_z3) {
    _inherits(at, _z3);
    var _super5 = _createSuper(at);
    function at(t, e) {
      var _this5;
      _classCallCheck(this, at);
      _this5 = _super5.call(this, t, e), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = Q.findOne(".carousel-indicators", _this5._element), _this5._addEventListeners(), _this5._config.ride === it && _this5.cycle();
      return _this5;
    }
    _createClass(at, [{
      key: "next",
      value: function next() {
        this._slide(G);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && a(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(J);
      }
    }, {
      key: "pause",
      value: function pause() {
        this._isSliding && s(this._element), this._clearInterval();
      }
    }, {
      key: "cycle",
      value: function cycle() {
        var _this6 = this;
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(function () {
          return _this6.nextWhenVisible();
        }, this._config.interval);
      }
    }, {
      key: "_maybeEnableCycle",
      value: function _maybeEnableCycle() {
        var _this7 = this;
        this._config.ride && (this._isSliding ? P.one(this._element, et, function () {
          return _this7.cycle();
        }) : this.cycle());
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this8 = this;
        var e = this._getItems();
        if (t > e.length - 1 || t < 0) return;
        if (this._isSliding) return void P.one(this._element, et, function () {
          return _this8.to(t);
        });
        var i = this._getItemIndex(this._getActive());
        if (i === t) return;
        var n = t > i ? G : J;
        this._slide(n, e[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(at.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.defaultInterval = t.interval, t;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this9 = this;
        this._config.keyboard && P.on(this._element, "keydown.bs.carousel", function (t) {
          return _this9._keydown(t);
        }), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", function () {
          return _this9.pause();
        }), P.on(this._element, "mouseleave.bs.carousel", function () {
          return _this9._maybeEnableCycle();
        })), this._config.touch && U.isSupported() && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this10 = this;
        var _iterator4 = _createForOfIteratorHelper(Q.find(".carousel-item img", this._element)),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _t5 = _step4.value;
            P.on(_t5, "dragstart.bs.carousel", function (t) {
              return t.preventDefault();
            });
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var t = {
          leftCallback: function leftCallback() {
            return _this10._slide(_this10._directionToOrder(Z));
          },
          rightCallback: function rightCallback() {
            return _this10._slide(_this10._directionToOrder(tt));
          },
          endCallback: function endCallback() {
            "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
              return _this10._maybeEnableCycle();
            }, 500 + _this10._config.interval));
          }
        };
        this._swipeHelper = new U(this._element, t);
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = st[t.key];
        e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._getItems().indexOf(t);
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (!this._indicatorsElement) return;
        var e = Q.findOne(".active", this._indicatorsElement);
        e.classList.remove(nt), e.removeAttribute("aria-current");
        var i = Q.findOne("[data-bs-slide-to=\"".concat(t, "\"]"), this._indicatorsElement);
        i && (i.classList.add(nt), i.setAttribute("aria-current", "true"));
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || this._getActive();
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        this._config.interval = e || this._config.defaultInterval;
      }
    }, {
      key: "_slide",
      value: function _slide(t) {
        var _this11 = this;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this._isSliding) return;
        var i = this._getActive(),
          n = t === G,
          s = e || b(this._getItems(), i, n, this._config.wrap);
        if (s === i) return;
        var o = this._getItemIndex(s),
          r = function r(e) {
            return P.trigger(_this11._element, e, {
              relatedTarget: s,
              direction: _this11._orderToDirection(t),
              from: _this11._getItemIndex(i),
              to: o
            });
          };
        if (r("slide.bs.carousel").defaultPrevented) return;
        if (!i || !s) return;
        var a = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
        var l = n ? "carousel-item-start" : "carousel-item-end",
          c = n ? "carousel-item-next" : "carousel-item-prev";
        s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(function () {
          s.classList.remove(l, c), s.classList.add(nt), i.classList.remove(nt, c, l), _this11._isSliding = !1, r(et);
        }, i, this._isAnimated()), a && this.cycle();
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("slide");
      }
    }, {
      key: "_getActive",
      value: function _getActive() {
        return Q.findOne(".active.carousel-item", this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return Q.find(".carousel-item", this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return p() ? t === Z ? J : G : t === Z ? G : J;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return p() ? t === J ? Z : tt : t === J ? tt : Z;
      }
    }], [{
      key: "Default",
      get: function get() {
        return ot;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return rt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = at.getOrCreateInstance(this, t);
          if ("number" != typeof t) {
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
              e[t]();
            }
          } else e.to(t);
        });
      }
    }]);
    return at;
  }(z);
  P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function (t) {
    var e = n(this);
    if (!e || !e.classList.contains(it)) return;
    t.preventDefault();
    var i = at.getOrCreateInstance(e),
      s = this.getAttribute("data-bs-slide-to");
    return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
  }), P.on(window, "load.bs.carousel.data-api", function () {
    var t = Q.find('[data-bs-ride="carousel"]');
    var _iterator5 = _createForOfIteratorHelper(t),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _e5 = _step5.value;
        at.getOrCreateInstance(_e5);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }), g(at);
  var lt = "show",
    ct = "collapse",
    ht = "collapsing",
    dt = '[data-bs-toggle="collapse"]',
    ut = {
      parent: null,
      toggle: !0
    },
    ft = {
      parent: "(null|element)",
      toggle: "boolean"
    };
  var pt = /*#__PURE__*/function (_z4) {
    _inherits(pt, _z4);
    var _super6 = _createSuper(pt);
    function pt(t, e) {
      var _this12;
      _classCallCheck(this, pt);
      _this12 = _super6.call(this, t, e), _this12._isTransitioning = !1, _this12._triggerArray = [];
      var n = Q.find(dt);
      var _iterator6 = _createForOfIteratorHelper(n),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _t6 = _step6.value;
          var _e6 = i(_t6),
            _n7 = Q.find(_e6).filter(function (t) {
              return t === _this12._element;
            });
          null !== _e6 && _n7.length && _this12._triggerArray.push(_t6);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      _this12._initializeChildren(), _this12._config.parent || _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown()), _this12._config.toggle && _this12.toggle();
      return _this12;
    }
    _createClass(pt, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this13 = this;
        if (this._isTransitioning || this._isShown()) return;
        var t = [];
        if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(function (t) {
          return t !== _this13._element;
        }).map(function (t) {
          return pt.getOrCreateInstance(t, {
            toggle: !1
          });
        })), t.length && t[0]._isTransitioning) return;
        if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        var _iterator7 = _createForOfIteratorHelper(t),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _e7 = _step7.value;
            _e7.hide();
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        var e = this._getDimension();
        this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var i = "scroll".concat(e[0].toUpperCase() + e.slice(1));
        this._queueCallback(function () {
          _this13._isTransitioning = !1, _this13._element.classList.remove(ht), _this13._element.classList.add(ct, lt), _this13._element.style[e] = "", P.trigger(_this13._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[e] = "".concat(this._element[i], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this14 = this;
        if (this._isTransitioning || !this._isShown()) return;
        if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
        var t = this._getDimension();
        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), d(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
        var _iterator8 = _createForOfIteratorHelper(this._triggerArray),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _t7 = _step8.value;
            var _e8 = n(_t7);
            _e8 && !this._isShown(_e8) && this._addAriaAndCollapsedClass([_t7], !1);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this14._isTransitioning = !1, _this14._element.classList.remove(ht), _this14._element.classList.add(ct), P.trigger(_this14._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(lt);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        if (!this._config.parent) return;
        var t = this._getFirstLevelChildren(dt);
        var _iterator9 = _createForOfIteratorHelper(t),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _e9 = _step9.value;
            var _t8 = n(_e9);
            _t8 && this._addAriaAndCollapsedClass([_e9], this._isShown(_t8));
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
    }, {
      key: "_getFirstLevelChildren",
      value: function _getFirstLevelChildren(t) {
        var e = Q.find(":scope .collapse .collapse", this._config.parent);
        return Q.find(t, this._config.parent).filter(function (t) {
          return !e.includes(t);
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (t.length) {
          var _iterator10 = _createForOfIteratorHelper(t),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _i13 = _step10.value;
              _i13.classList.toggle("collapsed", !e), _i13.setAttribute("aria-expanded", e);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return ut;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ft;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        var e = {};
        return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function () {
          var i = pt.getOrCreateInstance(this, e);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }]);
    return pt;
  }(z);
  P.on(document, "click.bs.collapse.data-api", dt, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = i(this),
      n = Q.find(e);
    var _iterator11 = _createForOfIteratorHelper(n),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _t9 = _step11.value;
        pt.getOrCreateInstance(_t9, {
          toggle: !1
        }).toggle();
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  }), g(pt);
  var gt = "top",
    mt = "bottom",
    _t = "right",
    bt = "left",
    vt = "auto",
    yt = [gt, mt, _t, bt],
    wt = "start",
    At = "end",
    Et = "clippingParents",
    Tt = "viewport",
    Ct = "popper",
    Ot = "reference",
    xt = yt.reduce(function (t, e) {
      return t.concat([e + "-" + wt, e + "-" + At]);
    }, []),
    kt = [].concat(yt, [vt]).reduce(function (t, e) {
      return t.concat([e, e + "-" + wt, e + "-" + At]);
    }, []),
    Lt = "beforeRead",
    Dt = "read",
    St = "afterRead",
    It = "beforeMain",
    Nt = "main",
    Pt = "afterMain",
    jt = "beforeWrite",
    Mt = "write",
    Ht = "afterWrite",
    $t = [Lt, Dt, St, It, Nt, Pt, jt, Mt, Ht];
  function Wt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function Bt(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }
    return t;
  }
  function Ft(t) {
    return t instanceof Bt(t).Element || t instanceof Element;
  }
  function zt(t) {
    return t instanceof Bt(t).HTMLElement || t instanceof HTMLElement;
  }
  function qt(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof Bt(t).ShadowRoot || t instanceof ShadowRoot);
  }
  var Rt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        zt(s) && Wt(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
            s = e.attributes[t] || {},
            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
              return t[e] = "", t;
            }, {});
          zt(n) && Wt(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };
  function Vt(t) {
    return t.split("-")[0];
  }
  var Kt = Math.max,
    Qt = Math.min,
    Xt = Math.round;
  function Yt() {
    var t = navigator.userAgentData;
    return null != t && t.brands ? t.brands.map(function (t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Ut() {
    return !/^((?!chrome|android).)*safari/i.test(Yt());
  }
  function Gt(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1;
    e && zt(t) && (s = t.offsetWidth > 0 && Xt(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && Xt(n.height) / t.offsetHeight || 1);
    var r = (Ft(t) ? Bt(t) : window).visualViewport,
      a = !Ut() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c
    };
  }
  function Jt(t) {
    var e = Gt(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }
  function Zt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && qt(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function te(t) {
    return Bt(t).getComputedStyle(t);
  }
  function ee(t) {
    return ["table", "td", "th"].indexOf(Wt(t)) >= 0;
  }
  function ie(t) {
    return ((Ft(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }
  function ne(t) {
    return "html" === Wt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || ie(t);
  }
  function se(t) {
    return zt(t) && "fixed" !== te(t).position ? t.offsetParent : null;
  }
  function oe(t) {
    for (var e = Bt(t), i = se(t); i && ee(i) && "static" === te(i).position;) i = se(i);
    return i && ("html" === Wt(i) || "body" === Wt(i) && "static" === te(i).position) ? e : i || function (t) {
      var e = /firefox/i.test(Yt());
      if (/Trident/i.test(Yt()) && zt(t) && "fixed" === te(t).position) return null;
      var i = ne(t);
      for (qt(i) && (i = i.host); zt(i) && ["html", "body"].indexOf(Wt(i)) < 0;) {
        var n = te(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }
      return null;
    }(t) || e;
  }
  function re(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function ae(t, e, i) {
    return Kt(t, Qt(e, i));
  }
  function le(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }
  function ce(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }
  var he = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = Vt(i.placement),
        l = re(a),
        c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = function (t, e) {
            return le("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
              placement: e.placement
            })) : t) ? t : ce(t, yt));
          }(s.padding, i),
          d = Jt(o),
          u = "y" === l ? gt : bt,
          f = "y" === l ? mt : _t,
          p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
          g = r[l] - i.rects.reference[l],
          m = oe(o),
          _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
          b = p / 2 - g / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          A = ae(v, w, y),
          E = l;
        i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Zt(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function de(t) {
    return t.split("-")[1];
  }
  var ue = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function fe(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d = t.isFixed,
      u = r.x,
      f = void 0 === u ? 0 : u,
      p = r.y,
      g = void 0 === p ? 0 : p,
      m = "function" == typeof h ? h({
        x: f,
        y: g
      }) : {
        x: f,
        y: g
      };
    f = m.x, g = m.y;
    var _ = r.hasOwnProperty("x"),
      b = r.hasOwnProperty("y"),
      v = bt,
      y = gt,
      w = window;
    if (c) {
      var A = oe(i),
        E = "clientHeight",
        T = "clientWidth";
      A === Bt(i) && "static" !== te(A = ie(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === gt || (s === bt || s === _t) && o === At) && (y = mt, g -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, g *= l ? 1 : -1), s !== bt && (s !== gt && s !== mt || o !== At) || (v = _t, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
    }
    var C,
      O = Object.assign({
        position: a
      }, c && ue),
      x = !0 === h ? function (t) {
        var e = t.x,
          i = t.y,
          n = window.devicePixelRatio || 1;
        return {
          x: Xt(e * n) / n || 0,
          y: Xt(i * n) / n || 0
        };
      }({
        x: f,
        y: g
      }) : {
        x: f,
        y: g
      };
    return f = x.x, g = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? g + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
  }
  var pe = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: Vt(e.placement),
          variation: de(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy
        };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, fe(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, fe(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  };
  var ge = {
    passive: !0
  };
  var me = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = Bt(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, ge);
      }), a && l.addEventListener("resize", i.update, ge), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, ge);
        }), a && l.removeEventListener("resize", i.update, ge);
      };
    },
    data: {}
  };
  var _e = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function be(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return _e[t];
    });
  }
  var ve = {
    start: "end",
    end: "start"
  };
  function ye(t) {
    return t.replace(/start|end/g, function (t) {
      return ve[t];
    });
  }
  function we(t) {
    var e = Bt(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }
  function Ae(t) {
    return Gt(ie(t)).left + we(t).scrollLeft;
  }
  function Ee(t) {
    var e = te(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Te(t) {
    return ["html", "body", "#document"].indexOf(Wt(t)) >= 0 ? t.ownerDocument.body : zt(t) && Ee(t) ? t : Te(ne(t));
  }
  function Ce(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Te(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = Bt(n),
      r = s ? [o].concat(o.visualViewport || [], Ee(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Ce(ne(r)));
  }
  function Oe(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }
  function xe(t, e, i) {
    return e === Tt ? Oe(function (t, e) {
      var i = Bt(t),
        n = ie(t),
        s = i.visualViewport,
        o = n.clientWidth,
        r = n.clientHeight,
        a = 0,
        l = 0;
      if (s) {
        o = s.width, r = s.height;
        var c = Ut();
        (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
      }
      return {
        width: o,
        height: r,
        x: a + Ae(t),
        y: l
      };
    }(t, i)) : Ft(e) ? function (t, e) {
      var i = Gt(t, !1, "fixed" === e);
      return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
    }(e, i) : Oe(function (t) {
      var e,
        i = ie(t),
        n = we(t),
        s = null == (e = t.ownerDocument) ? void 0 : e.body,
        o = Kt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
        r = Kt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
        a = -n.scrollLeft + Ae(t),
        l = -n.scrollTop;
      return "rtl" === te(s || i).direction && (a += Kt(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(ie(t)));
  }
  function ke(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? Vt(s) : null,
      r = s ? de(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case gt:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;
      case mt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;
      case _t:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;
      case bt:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;
      default:
        e = {
          x: i.x,
          y: i.y
        };
    }
    var c = o ? re(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case wt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case At:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function Le(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.strategy,
      r = void 0 === o ? t.strategy : o,
      a = i.boundary,
      l = void 0 === a ? Et : a,
      c = i.rootBoundary,
      h = void 0 === c ? Tt : c,
      d = i.elementContext,
      u = void 0 === d ? Ct : d,
      f = i.altBoundary,
      p = void 0 !== f && f,
      g = i.padding,
      m = void 0 === g ? 0 : g,
      _ = le("number" != typeof m ? m : ce(m, yt)),
      b = u === Ct ? Ot : Ct,
      v = t.rects.popper,
      y = t.elements[p ? b : u],
      w = function (t, e, i, n) {
        var s = "clippingParents" === e ? function (t) {
            var e = Ce(ne(t)),
              i = ["absolute", "fixed"].indexOf(te(t).position) >= 0 && zt(t) ? oe(t) : t;
            return Ft(i) ? e.filter(function (t) {
              return Ft(t) && Zt(t, i) && "body" !== Wt(t);
            }) : [];
          }(t) : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
            var s = xe(t, i, n);
            return e.top = Kt(s.top, e.top), e.right = Qt(s.right, e.right), e.bottom = Qt(s.bottom, e.bottom), e.left = Kt(s.left, e.left), e;
          }, xe(t, r, n));
        return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
      }(Ft(y) ? y : y.contextElement || ie(t.elements.popper), l, h, r),
      A = Gt(t.elements.reference),
      E = ke({
        reference: A,
        element: v,
        strategy: "absolute",
        placement: s
      }),
      T = Oe(Object.assign({}, v, E)),
      C = u === Ct ? T : A,
      O = {
        top: w.top - C.top + _.top,
        bottom: C.bottom - w.bottom + _.bottom,
        left: w.left - C.left + _.left,
        right: C.right - w.right + _.right
      },
      x = t.modifiersData.offset;
    if (u === Ct && x) {
      var k = x[s];
      Object.keys(O).forEach(function (t) {
        var e = [_t, mt].indexOf(t) >= 0 ? 1 : -1,
          i = [gt, mt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }
    return O;
  }
  function De(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? kt : l,
      h = de(n),
      d = h ? a ? xt : xt.filter(function (t) {
        return de(t) === h;
      }) : yt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = Le(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[Vt(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  var Se = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, g = i.allowedAutoPlacements, m = e.options.placement, _ = Vt(m), b = l || (_ !== m && p ? function (t) {
            if (Vt(t) === vt) return [];
            var e = be(t);
            return [ye(t), e, ye(e)];
          }(m) : [be(m)]), v = [m].concat(b).reduce(function (t, i) {
            return t.concat(Vt(i) === vt ? De(e, {
              placement: i,
              boundary: h,
              rootBoundary: d,
              padding: c,
              flipVariations: p,
              allowedAutoPlacements: g
            }) : i);
          }, []), y = e.rects.reference, w = e.rects.popper, A = new Map(), E = !0, T = v[0], C = 0; C < v.length; C++) {
          var O = v[C],
            x = Vt(O),
            k = de(O) === wt,
            L = [gt, mt].indexOf(x) >= 0,
            D = L ? "width" : "height",
            S = Le(e, {
              placement: O,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c
            }),
            I = L ? k ? _t : bt : k ? mt : gt;
          y[D] > w[D] && (I = be(I));
          var N = be(I),
            P = [];
          if (o && P.push(S[x] <= 0), a && P.push(S[I] <= 0, S[N] <= 0), P.every(function (t) {
            return t;
          })) {
            T = O, E = !1;
            break;
          }
          A.set(O, P);
        }
        if (E) for (var j = function j(t) {
            var e = v.find(function (e) {
              var i = A.get(e);
              if (i) return i.slice(0, t).every(function (t) {
                return t;
              });
            });
            if (e) return T = e, "break";
          }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--);
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };
  function Ie(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }
  function Ne(t) {
    return [gt, _t, mt, bt].some(function (e) {
      return t[e] >= 0;
    });
  }
  var Pe = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function fn(t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Le(e, {
            elementContext: "reference"
          }),
          a = Le(e, {
            altBoundary: !0
          }),
          l = Ie(r, n),
          c = Ie(a, s, o),
          h = Ne(l),
          d = Ne(c);
        e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d
        }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-reference-hidden": h,
          "data-popper-escaped": d
        });
      }
    },
    je = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function fn(t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = kt.reduce(function (t, i) {
            return t[i] = function (t, e, i) {
              var n = Vt(t),
                s = [bt, gt].indexOf(n) >= 0 ? -1 : 1,
                o = "function" == typeof i ? i(Object.assign({}, e, {
                  placement: t
                })) : i,
                r = o[0],
                a = o[1];
              return r = r || 0, a = (a || 0) * s, [bt, _t].indexOf(n) >= 0 ? {
                x: a,
                y: r
              } : {
                x: r,
                y: a
              };
            }(i, e.rects, o), t;
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
      }
    },
    Me = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function fn(t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = ke({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement
        });
      },
      data: {}
    },
    He = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function fn(t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          g = void 0 === p ? 0 : p,
          m = Le(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h
          }),
          _ = Vt(e.placement),
          b = de(e.placement),
          v = !b,
          y = re(_),
          w = "x" === y ? "y" : "x",
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C = "function" == typeof g ? g(Object.assign({}, e.rects, {
            placement: e.placement
          })) : g,
          O = "number" == typeof C ? {
            mainAxis: C,
            altAxis: C
          } : Object.assign({
            mainAxis: 0,
            altAxis: 0
          }, C),
          x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
          k = {
            x: 0,
            y: 0
          };
        if (A) {
          if (o) {
            var L,
              D = "y" === y ? gt : bt,
              S = "y" === y ? mt : _t,
              I = "y" === y ? "height" : "width",
              N = A[y],
              P = N + m[D],
              j = N - m[S],
              M = f ? -T[I] / 2 : 0,
              H = b === wt ? E[I] : T[I],
              $ = b === wt ? -T[I] : -E[I],
              W = e.elements.arrow,
              B = f && W ? Jt(W) : {
                width: 0,
                height: 0
              },
              F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              },
              z = F[D],
              q = F[S],
              R = ae(0, E[I], B[I]),
              V = v ? E[I] / 2 - M - R - z - O.mainAxis : H - R - z - O.mainAxis,
              K = v ? -E[I] / 2 + M + R + q + O.mainAxis : $ + R + q + O.mainAxis,
              Q = e.elements.arrow && oe(e.elements.arrow),
              X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = N + K - Y,
              G = ae(f ? Qt(P, N + V - Y - X) : P, N, f ? Kt(j, U) : j);
            A[y] = G, k[y] = G - N;
          }
          if (a) {
            var J,
              Z = "x" === y ? gt : bt,
              tt = "x" === y ? mt : _t,
              et = A[w],
              it = "y" === w ? "height" : "width",
              nt = et + m[Z],
              st = et - m[tt],
              ot = -1 !== [gt, bt].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct = f && ot ? function (t, e, i) {
                var n = ae(t, e, i);
                return n > i ? i : n;
              }(at, et, lt) : ae(f ? at : nt, et, f ? lt : st);
            A[w] = ct, k[w] = ct - et;
          }
          e.modifiersData[n] = k;
        }
      },
      requiresIfExists: ["offset"]
    };
  function $e(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = zt(e),
      r = zt(e) && function (t) {
        var e = t.getBoundingClientRect(),
          i = Xt(e.width) / t.offsetWidth || 1,
          n = Xt(e.height) / t.offsetHeight || 1;
        return 1 !== i || 1 !== n;
      }(e),
      a = ie(e),
      l = Gt(t, r, i),
      c = {
        scrollLeft: 0,
        scrollTop: 0
      },
      h = {
        x: 0,
        y: 0
      };
    return (o || !o && !i) && (("body" !== Wt(e) || Ee(a)) && (c = (n = e) !== Bt(n) && zt(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : we(n)), zt(e) ? ((h = Gt(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ae(a))), {
      x: l.left + c.scrollLeft - h.x,
      y: l.top + c.scrollTop - h.y,
      width: l.width,
      height: l.height
    };
  }
  function We(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
        if (!i.has(t)) {
          var n = e.get(t);
          n && s(n);
        }
      }), n.push(t);
    }
    return t.forEach(function (t) {
      e.set(t.name, t);
    }), t.forEach(function (t) {
      i.has(t.name) || s(t);
    }), n;
  }
  var Be = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Fe() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function ze(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? Be : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Be, o),
          modifiersData: {},
          elements: {
            reference: t,
            popper: e
          },
          attributes: {},
          styles: {}
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function setOptions(i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
              reference: Ft(t) ? Ce(t) : t.contextElement ? Ce(t.contextElement) : [],
              popper: Ce(e)
            };
            var r,
              c,
              u = function (t) {
                var e = We(t);
                return $t.reduce(function (t, i) {
                  return t.concat(e.filter(function (t) {
                    return t.phase === i;
                  }));
                }, []);
              }((r = [].concat(n, a.options.modifiers), c = r.reduce(function (t, e) {
                var i = t[e.name];
                return t[e.name] = i ? Object.assign({}, i, e, {
                  options: Object.assign({}, i.options, e.options),
                  data: Object.assign({}, i.data, e.data)
                }) : e, t;
              }, {}), Object.keys(c).map(function (t) {
                return c[t];
              })));
            return a.orderedModifiers = u.filter(function (t) {
              return t.enabled;
            }), a.orderedModifiers.forEach(function (t) {
              var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;
              if ("function" == typeof s) {
                var o = s({
                  state: a,
                  name: e,
                  instance: h,
                  options: n
                });
                l.push(o || function () {});
              }
            }), h.update();
          },
          forceUpdate: function forceUpdate() {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (Fe(e, i)) {
                a.rects = {
                  reference: $e(e, oe(i), "fixed" === a.options.strategy),
                  popper: Jt(i)
                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                  return a.modifiersData[t.name] = Object.assign({}, t.data);
                });
                for (var n = 0; n < a.orderedModifiers.length; n++) if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                    o = s.fn,
                    r = s.options,
                    l = void 0 === r ? {} : r,
                    d = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: d,
                    instance: h
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          },
          update: (s = function s() {
            return new Promise(function (t) {
              h.forceUpdate(), t(a);
            });
          }, function () {
            return r || (r = new Promise(function (t) {
              Promise.resolve().then(function () {
                r = void 0, t(s());
              });
            })), r;
          }),
          destroy: function destroy() {
            d(), c = !0;
          }
        };
      if (!Fe(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }
      return h.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), h;
    };
  }
  var qe = ze(),
    Re = ze({
      defaultModifiers: [me, Me, pe, Rt]
    }),
    Ve = ze({
      defaultModifiers: [me, Me, pe, Rt, je, Se, He, he, Pe]
    });
  var Ke = Object.freeze(Object.defineProperty({
      __proto__: null,
      popperGenerator: ze,
      detectOverflow: Le,
      createPopperBase: qe,
      createPopper: Ve,
      createPopperLite: Re,
      top: gt,
      bottom: mt,
      right: _t,
      left: bt,
      auto: vt,
      basePlacements: yt,
      start: wt,
      end: At,
      clippingParents: Et,
      viewport: Tt,
      popper: Ct,
      reference: Ot,
      variationPlacements: xt,
      placements: kt,
      beforeRead: Lt,
      read: Dt,
      afterRead: St,
      beforeMain: It,
      main: Nt,
      afterMain: Pt,
      beforeWrite: jt,
      write: Mt,
      afterWrite: Ht,
      modifierPhases: $t,
      applyStyles: Rt,
      arrow: he,
      computeStyles: pe,
      eventListeners: me,
      flip: Se,
      hide: Pe,
      offset: je,
      popperOffsets: Me,
      preventOverflow: He
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    Qe = "dropdown",
    Xe = "ArrowUp",
    Ye = "ArrowDown",
    Ue = "click.bs.dropdown.data-api",
    Ge = "keydown.bs.dropdown.data-api",
    Je = "show",
    Ze = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    ti = "".concat(Ze, ".show"),
    ei = ".dropdown-menu",
    ii = p() ? "top-end" : "top-start",
    ni = p() ? "top-start" : "top-end",
    si = p() ? "bottom-end" : "bottom-start",
    oi = p() ? "bottom-start" : "bottom-end",
    ri = p() ? "left-start" : "right-start",
    ai = p() ? "right-start" : "left-start",
    li = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle"
    },
    ci = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)"
    };
  var hi = /*#__PURE__*/function (_z5) {
    _inherits(hi, _z5);
    var _super7 = _createSuper(hi);
    function hi(t, e) {
      var _this15;
      _classCallCheck(this, hi);
      _this15 = _super7.call(this, t, e), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = Q.next(_this15._element, ei)[0] || Q.prev(_this15._element, ei)[0] || Q.findOne(ei, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
      return _this15;
    }
    _createClass(hi, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (l(this._element) || this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };
        if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
            var _ref4;
            var _iterator12 = _createForOfIteratorHelper((_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))),
              _step12;
            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _t10 = _step12.value;
                P.on(_t10, "mouseover", h);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), P.trigger(this._element, "shown.bs.dropdown", t);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (l(this._element) || !this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };
        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(hi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        if (!P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
          if ("ontouchstart" in document.documentElement) {
            var _ref5;
            var _iterator13 = _createForOfIteratorHelper((_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))),
              _step13;
            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _t11 = _step13.value;
                P.off(_t11, "mouseover", h);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
          this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t);
        }
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("object" == _typeof((t = _get(_getPrototypeOf(hi.prototype), "_getConfig", this).call(this, t)).reference) && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(Qe.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (void 0 === Ke) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var t = this._element;
        "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);
        var e = this._getPopperConfig();
        this._popper = Ve(t, this._menu, e);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains(Je);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._parent;
        if (t.classList.contains("dropend")) return ri;
        if (t.classList.contains("dropstart")) return ai;
        if (t.classList.contains("dropup-center")) return "top";
        if (t.classList.contains("dropdown-center")) return "bottom";
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? ni : ii : e ? oi : si;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this16 = this;
        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this16._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
          e = _ref6.target;
        var i = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(function (t) {
          return a(t);
        });
        i.length && b(i, e, t === Ye, !i.includes(e)).focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return li;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ci;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Qe;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = hi.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
        var e = Q.find(ti);
        var _iterator14 = _createForOfIteratorHelper(e),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _i14 = _step14.value;
            var _e10 = hi.getInstance(_i14);
            if (!_e10 || !1 === _e10._config.autoClose) continue;
            var _n8 = t.composedPath(),
              _s3 = _n8.includes(_e10._menu);
            if (_n8.includes(_e10._element) || "inside" === _e10._config.autoClose && !_s3 || "outside" === _e10._config.autoClose && _s3) continue;
            if (_e10._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            var _o2 = {
              relatedTarget: _e10._element
            };
            "click" === t.type && (_o2.clickEvent = t), _e10._completeHide(_o2);
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var e = /input|textarea/i.test(t.target.tagName),
          i = "Escape" === t.key,
          n = [Xe, Ye].includes(t.key);
        if (!n && !i) return;
        if (e && !i) return;
        t.preventDefault();
        var s = this.matches(Ze) ? this : Q.prev(this, Ze)[0] || Q.next(this, Ze)[0] || Q.findOne(Ze, t.delegateTarget.parentNode),
          o = hi.getOrCreateInstance(s);
        if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
        o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
      }
    }]);
    return hi;
  }(z);
  P.on(document, Ge, Ze, hi.dataApiKeydownHandler), P.on(document, Ge, ei, hi.dataApiKeydownHandler), P.on(document, Ue, hi.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), P.on(document, Ue, Ze, function (t) {
    t.preventDefault(), hi.getOrCreateInstance(this).toggle();
  }), g(hi);
  var di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    ui = ".sticky-top",
    fi = "padding-right",
    pi = "margin-right";
  var gi = /*#__PURE__*/function () {
    function gi() {
      _classCallCheck(this, gi);
      this._element = document.body;
    }
    _createClass(gi, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, fi, function (e) {
          return e + t;
        }), this._setElementAttributes(di, fi, function (e) {
          return e + t;
        }), this._setElementAttributes(ui, pi, function (e) {
          return e - t;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, fi), this._resetElementAttributes(di, fi), this._resetElementAttributes(ui, pi);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this17 = this;
        var n = this.getWidth();
        this._applyManipulationCallback(t, function (t) {
          if (t !== _this17._element && window.innerWidth > t.clientWidth + n) return;
          _this17._saveInitialAttribute(t, e);
          var s = window.getComputedStyle(t).getPropertyValue(e);
          t.style.setProperty(e, "".concat(i(Number.parseFloat(s)), "px"));
        });
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style.getPropertyValue(e);
        i && B.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = B.getDataAttribute(t, e);
          null !== i ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        if (o(t)) e(t);else {
          var _iterator15 = _createForOfIteratorHelper(Q.find(t, this._element)),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var _i15 = _step15.value;
              e(_i15);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        }
      }
    }]);
    return gi;
  }();
  var mi = "show",
    _i = "mousedown.bs.backdrop",
    bi = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body"
    },
    vi = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)"
    };
  var yi = /*#__PURE__*/function (_F3) {
    _inherits(yi, _F3);
    var _super8 = _createSuper(yi);
    function yi(t) {
      var _this18;
      _classCallCheck(this, yi);
      _this18 = _super8.call(this), _this18._config = _this18._getConfig(t), _this18._isAppended = !1, _this18._element = null;
      return _this18;
    }
    _createClass(yi, [{
      key: "show",
      value: function show(t) {
        if (!this._config.isVisible) return void m(t);
        this._append();
        var e = this._getElement();
        this._config.isAnimated && d(e), e.classList.add(mi), this._emulateAnimation(function () {
          m(t);
        });
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this19 = this;
        this._config.isVisible ? (this._getElement().classList.remove(mi), this._emulateAnimation(function () {
          _this19.dispose(), m(t);
        })) : m(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (P.off(this._element, _i), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t12 = document.createElement("div");
          _t12.className = this._config.className, this._config.isAnimated && _t12.classList.add("fade"), this._element = _t12;
        }
        return this._element;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.rootElement = r(t.rootElement), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this20 = this;
        if (this._isAppended) return;
        var t = this._getElement();
        this._config.rootElement.append(t), P.on(t, _i, function () {
          m(_this20._config.clickCallback);
        }), this._isAppended = !0;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        _(t, this._getElement(), this._config.isAnimated);
      }
    }], [{
      key: "Default",
      get: function get() {
        return bi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return vi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "backdrop";
      }
    }]);
    return yi;
  }(F);
  var wi = ".bs.focustrap",
    Ai = "backward",
    Ei = {
      autofocus: !0,
      trapElement: null
    },
    Ti = {
      autofocus: "boolean",
      trapElement: "element"
    };
  var Ci = /*#__PURE__*/function (_F4) {
    _inherits(Ci, _F4);
    var _super9 = _createSuper(Ci);
    function Ci(t) {
      var _this21;
      _classCallCheck(this, Ci);
      _this21 = _super9.call(this), _this21._config = _this21._getConfig(t), _this21._isActive = !1, _this21._lastTabNavDirection = null;
      return _this21;
    }
    _createClass(Ci, [{
      key: "activate",
      value: function activate() {
        var _this22 = this;
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, wi), P.on(document, "focusin.bs.focustrap", function (t) {
          return _this22._handleFocusin(t);
        }), P.on(document, "keydown.tab.bs.focustrap", function (t) {
          return _this22._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, P.off(document, wi));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = this._config.trapElement;
        if (t.target === document || t.target === e || e.contains(t.target)) return;
        var i = Q.focusableChildren(e);
        0 === i.length ? e.focus() : this._lastTabNavDirection === Ai ? i[i.length - 1].focus() : i[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ai : "forward");
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ei;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ti;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "focustrap";
      }
    }]);
    return Ci;
  }(F);
  var Oi = "hidden.bs.modal",
    xi = "show.bs.modal",
    ki = "modal-open",
    Li = "show",
    Di = "modal-static",
    Si = {
      backdrop: !0,
      focus: !0,
      keyboard: !0
    },
    Ii = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean"
    };
  var Ni = /*#__PURE__*/function (_z6) {
    _inherits(Ni, _z6);
    var _super10 = _createSuper(Ni);
    function Ni(t, e) {
      var _this23;
      _classCallCheck(this, Ni);
      _this23 = _super10.call(this, t, e), _this23._dialog = Q.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new gi(), _this23._addEventListeners();
      return _this23;
    }
    _createClass(Ni, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this24 = this;
        this._isShown || this._isTransitioning || P.trigger(this._element, xi, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(ki), this._adjustDialog(), this._backdrop.show(function () {
          return _this24._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;
        this._isShown && !this._isTransitioning && (P.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Li), this._queueCallback(function () {
          return _this25._hideModal();
        }, this._element, this._isAnimated())));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        for (var _i16 = 0, _arr2 = [window, this._dialog]; _i16 < _arr2.length; _i16++) {
          var _t13 = _arr2[_i16];
          P.off(_t13, ".bs.modal");
        }
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Ni.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new yi({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Ci({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this26 = this;
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        var e = Q.findOne(".modal-body", this._dialog);
        e && (e.scrollTop = 0), d(this._element), this._element.classList.add(Li), this._queueCallback(function () {
          _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, P.trigger(_this26._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this27 = this;
        P.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          if ("Escape" === t.key) return _this27._config.keyboard ? (t.preventDefault(), void _this27.hide()) : void _this27._triggerBackdropTransition();
        }), P.on(window, "resize.bs.modal", function () {
          _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
        }), P.on(this._element, "mousedown.dismiss.bs.modal", function (t) {
          P.one(_this27._element, "click.dismiss.bs.modal", function (e) {
            _this27._element === t.target && _this27._element === e.target && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
          });
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this28 = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(ki), _this28._resetAdjustments(), _this28._scrollBar.reset(), P.trigger(_this28._element, Oi);
        });
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this29 = this;
        if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
          e = this._element.style.overflowY;
        "hidden" === e || this._element.classList.contains(Di) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Di), this._queueCallback(function () {
          _this29._element.classList.remove(Di), _this29._queueCallback(function () {
            _this29._element.style.overflowY = e;
          }, _this29._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
          e = this._scrollBar.getWidth(),
          i = e > 0;
        if (i && !t) {
          var _t14 = p() ? "paddingLeft" : "paddingRight";
          this._element.style[_t14] = "".concat(e, "px");
        }
        if (!i && t) {
          var _t15 = p() ? "paddingRight" : "paddingLeft";
          this._element.style[_t15] = "".concat(e, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Si;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ii;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = Ni.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }]);
    return Ni;
  }(z);
  P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this30 = this;
    var e = n(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, xi, function (t) {
      t.defaultPrevented || P.one(e, Oi, function () {
        a(_this30) && _this30.focus();
      });
    });
    var i = Q.findOne(".modal.show");
    i && Ni.getInstance(i).hide(), Ni.getOrCreateInstance(e).toggle(this);
  }), q(Ni), g(Ni);
  var Pi = "show",
    ji = "showing",
    Mi = "hiding",
    Hi = ".offcanvas.show",
    $i = "hidePrevented.bs.offcanvas",
    Wi = "hidden.bs.offcanvas",
    Bi = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    },
    Fi = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean"
    };
  var zi = /*#__PURE__*/function (_z7) {
    _inherits(zi, _z7);
    var _super11 = _createSuper(zi);
    function zi(t, e) {
      var _this31;
      _classCallCheck(this, zi);
      _this31 = _super11.call(this, t, e), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
      return _this31;
    }
    _createClass(zi, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this32 = this;
        this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new gi().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ji), this._queueCallback(function () {
          _this32._config.scroll && !_this32._config.backdrop || _this32._focustrap.activate(), _this32._element.classList.add(Pi), _this32._element.classList.remove(ji), P.trigger(_this32._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this33 = this;
        this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Mi), this._backdrop.hide(), this._queueCallback(function () {
          _this33._element.classList.remove(Pi, Mi), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new gi().reset(), P.trigger(_this33._element, Wi);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(zi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this34 = this;
        var t = Boolean(this._config.backdrop);
        return new yi({
          className: "offcanvas-backdrop",
          isVisible: t,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: t ? function () {
            "static" !== _this34._config.backdrop ? _this34.hide() : P.trigger(_this34._element, $i);
          } : null
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Ci({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this35 = this;
        P.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          "Escape" === t.key && (_this35._config.keyboard ? _this35.hide() : P.trigger(_this35._element, $i));
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return Bi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Fi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = zi.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return zi;
  }(z);
  P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this36 = this;
    var e = n(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
    P.one(e, Wi, function () {
      a(_this36) && _this36.focus();
    });
    var i = Q.findOne(Hi);
    i && i !== e && zi.getInstance(i).hide(), zi.getOrCreateInstance(e).toggle(this);
  }), P.on(window, "load.bs.offcanvas.data-api", function () {
    var _iterator16 = _createForOfIteratorHelper(Q.find(Hi)),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var _t16 = _step16.value;
        zi.getOrCreateInstance(_t16).show();
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
  }), P.on(window, "resize.bs.offcanvas", function () {
    var _iterator17 = _createForOfIteratorHelper(Q.find("[aria-modal][class*=show][class*=offcanvas-]")),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _t17 = _step17.value;
        "fixed" !== getComputedStyle(_t17).position && zi.getOrCreateInstance(_t17).hide();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  }), q(zi), g(zi);
  var qi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    Ri = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Vi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Ki = function Ki(t, e) {
      var i = t.nodeName.toLowerCase();
      return e.includes(i) ? !qi.has(i) || Boolean(Ri.test(t.nodeValue) || Vi.test(t.nodeValue)) : e.filter(function (t) {
        return t instanceof RegExp;
      }).some(function (t) {
        return t.test(i);
      });
    },
    Qi = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    Xi = {
      allowList: Qi,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>"
    },
    Yi = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string"
    },
    Ui = {
      entry: "(string|element|function|null)",
      selector: "(string|element)"
    };
  var Gi = /*#__PURE__*/function (_F5) {
    _inherits(Gi, _F5);
    var _super12 = _createSuper(Gi);
    function Gi(t) {
      var _this37;
      _classCallCheck(this, Gi);
      _this37 = _super12.call(this), _this37._config = _this37._getConfig(t);
      return _this37;
    }
    _createClass(Gi, [{
      key: "getContent",
      value: function getContent() {
        var _this38 = this;
        return Object.values(this._config.content).map(function (t) {
          return _this38._resolvePossibleFunction(t);
        }).filter(Boolean);
      }
    }, {
      key: "hasContent",
      value: function hasContent() {
        return this.getContent().length > 0;
      }
    }, {
      key: "changeContent",
      value: function changeContent(t) {
        return this._checkContent(t), this._config.content = _objectSpread(_objectSpread({}, this._config.content), t), this;
      }
    }, {
      key: "toHtml",
      value: function toHtml() {
        var _e$classList;
        var t = document.createElement("div");
        t.innerHTML = this._maybeSanitize(this._config.template);
        for (var _i17 = 0, _Object$entries2 = Object.entries(this._config.content); _i17 < _Object$entries2.length; _i17++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i17], 2),
            _e11 = _Object$entries2$_i[0],
            _i18 = _Object$entries2$_i[1];
          this._setContent(t, _i18, _e11);
        }
        var e = t.children[0],
          i = this._resolvePossibleFunction(this._config.extraClass);
        return i && (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(i.split(" "))), e;
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        _get(_getPrototypeOf(Gi.prototype), "_typeCheckConfig", this).call(this, t), this._checkContent(t.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(t) {
        for (var _i19 = 0, _Object$entries3 = Object.entries(t); _i19 < _Object$entries3.length; _i19++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i19], 2),
            _e12 = _Object$entries3$_i[0],
            _i20 = _Object$entries3$_i[1];
          _get(_getPrototypeOf(Gi.prototype), "_typeCheckConfig", this).call(this, {
            selector: _e12,
            entry: _i20
          }, Ui);
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(t, e, i) {
        var n = Q.findOne(i, t);
        n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
      }
    }, {
      key: "_maybeSanitize",
      value: function _maybeSanitize(t) {
        return this._config.sanitize ? function (t, e, i) {
          var _ref7;
          if (!t.length) return t;
          if (i && "function" == typeof i) return i(t);
          var n = new window.DOMParser().parseFromString(t, "text/html"),
            s = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));
          var _iterator18 = _createForOfIteratorHelper(s),
            _step18;
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var _ref8;
              var _t18 = _step18.value;
              var _i21 = _t18.nodeName.toLowerCase();
              if (!Object.keys(e).includes(_i21)) {
                _t18.remove();
                continue;
              }
              var _n9 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_t18.attributes)),
                _s4 = [].concat(e["*"] || [], e[_i21] || []);
              var _iterator19 = _createForOfIteratorHelper(_n9),
                _step19;
              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var _e13 = _step19.value;
                  Ki(_e13, _s4) || _t18.removeAttribute(_e13.nodeName);
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
          return n.body.innerHTML;
        }(t, this._config.allowList, this._config.sanitizeFn) : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return "function" == typeof t ? t(this) : t;
      }
    }, {
      key: "_putElementInTemplate",
      value: function _putElementInTemplate(t, e) {
        if (this._config.html) return e.innerHTML = "", void e.append(t);
        e.textContent = t.textContent;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Xi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Yi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "TemplateFactory";
      }
    }]);
    return Gi;
  }(F);
  var Ji = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Zi = "fade",
    tn = "show",
    en = ".modal",
    nn = "hide.bs.modal",
    sn = "hover",
    on = "focus",
    rn = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: p() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: p() ? "right" : "left"
    },
    an = {
      allowList: Qi,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 0],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus"
    },
    ln = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string"
    };
  var cn = /*#__PURE__*/function (_z8) {
    _inherits(cn, _z8);
    var _super13 = _createSuper(cn);
    function cn(t, e) {
      var _this39;
      _classCallCheck(this, cn);
      if (void 0 === Ke) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this39 = _super13.call(this, t, e), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = null, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39._newContent = null, _this39.tip = null, _this39._setListeners(), _this39._config.selector || _this39._fixTitle();
      return _this39;
    }
    _createClass(cn, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), P.off(this._element.closest(en), nn, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), _get(_getPrototypeOf(cn.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this40 = this;
        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        var t = P.trigger(this._element, this.constructor.eventName("show")),
          e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (t.defaultPrevented || !e) return;
        this._disposePopper();
        var i = this._getTipElement();
        this._element.setAttribute("aria-describedby", i.getAttribute("id"));
        var n = this._config.container;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(tn), "ontouchstart" in document.documentElement) {
          var _ref9;
          var _iterator20 = _createForOfIteratorHelper((_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))),
            _step20;
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var _t19 = _step20.value;
              P.on(_t19, "mouseover", h);
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
        }
        this._queueCallback(function () {
          P.trigger(_this40._element, _this40.constructor.eventName("shown")), !1 === _this40._isHovered && _this40._leave(), _this40._isHovered = !1;
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this41 = this;
        if (this._isShown() && !P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(tn), "ontouchstart" in document.documentElement) {
            var _ref10;
            var _iterator21 = _createForOfIteratorHelper((_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))),
              _step21;
            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var _t20 = _step21.value;
                P.off(_t20, "mouseover", h);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          }
          this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback(function () {
            _this41._isWithActiveTrigger() || (_this41._isHovered || _this41._disposePopper(), _this41._element.removeAttribute("aria-describedby"), P.trigger(_this41._element, _this41.constructor.eventName("hidden")));
          }, this.tip, this._isAnimated());
        }
      }
    }, {
      key: "update",
      value: function update() {
        this._popper && this._popper.update();
      }
    }, {
      key: "_isWithContent",
      value: function _isWithContent() {
        return Boolean(this._getTitle());
      }
    }, {
      key: "_getTipElement",
      value: function _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
    }, {
      key: "_createTipElement",
      value: function _createTipElement(t) {
        var e = this._getTemplateFactory(t).toHtml();
        if (!e) return null;
        e.classList.remove(Zi, tn), e.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
        var i = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        }(this.constructor.NAME).toString();
        return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Zi), e;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Gi(_objectSpread(_objectSpread({}, this._config), {}, {
          content: t,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        })), this._templateFactory;
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".tooltip-inner": this._getTitle()
        };
      }
    }, {
      key: "_getTitle",
      value: function _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t) {
        return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(Zi);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(tn);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        var e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
          i = rn[e.toUpperCase()];
        return Ve(this._element, t, this._getPopperConfig(i));
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this42 = this;
        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this42._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return "function" == typeof t ? t.call(this._element) : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this43 = this;
        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: function fn(t) {
              _this43._getTipElement().setAttribute("data-popper-placement", t.state.placement);
            }
          }]
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this44 = this;
        var t = this._config.trigger.split(" ");
        var _iterator22 = _createForOfIteratorHelper(t),
          _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var _e14 = _step22.value;
            if ("click" === _e14) P.on(this._element, this.constructor.eventName("click"), this._config.selector, function (t) {
              _this44._initializeOnDelegatedTarget(t).toggle();
            });else if ("manual" !== _e14) {
              var _t21 = _e14 === sn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                _i22 = _e14 === sn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
              P.on(this._element, _t21, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);
                e._activeTrigger["focusin" === t.type ? on : sn] = !0, e._enter();
              }), P.on(this._element, _i22, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);
                e._activeTrigger["focusout" === t.type ? on : sn] = e._element.contains(t.relatedTarget), e._leave();
              });
            }
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
        this._hideModalHandler = function () {
          _this44._element && _this44.hide();
        }, P.on(this._element.closest(en), nn, this._hideModalHandler);
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title");
        t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
      }
    }, {
      key: "_enter",
      value: function _enter() {
        var _this45 = this;
        this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(function () {
          _this45._isHovered && _this45.show();
        }, this._config.delay.show));
      }
    }, {
      key: "_leave",
      value: function _leave() {
        var _this46 = this;
        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(function () {
          _this46._isHovered || _this46.hide();
        }, this._config.delay.hide));
      }
    }, {
      key: "_setTimeout",
      value: function _setTimeout(t, e) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = B.getDataAttributes(this._element);
        for (var _i23 = 0, _Object$keys5 = Object.keys(e); _i23 < _Object$keys5.length; _i23++) {
          var _t22 = _Object$keys5[_i23];
          Ji.has(_t22) && delete e[_t22];
        }
        return t = _objectSpread(_objectSpread({}, e), "object" == _typeof(t) && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        for (var _e15 in this._config) this.constructor.Default[_e15] !== this._config[_e15] && (t[_e15] = this._config[_e15]);
        return t.selector = !1, t.trigger = "manual", t;
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
    }], [{
      key: "Default",
      get: function get() {
        return an;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ln;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = cn.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return cn;
  }(z);
  g(cn);
  var hn = _objectSpread(_objectSpread({}, cn.Default), {}, {
      content: "",
      offset: [0, 8],
      placement: "right",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click"
    }),
    dn = _objectSpread(_objectSpread({}, cn.DefaultType), {}, {
      content: "(null|string|element|function)"
    });
  var un = /*#__PURE__*/function (_cn) {
    _inherits(un, _cn);
    var _super14 = _createSuper(un);
    function un() {
      _classCallCheck(this, un);
      return _super14.apply(this, arguments);
    }
    _createClass(un, [{
      key: "_isWithContent",
      value: function _isWithContent() {
        return this._getTitle() || this._getContent();
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent()
        };
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }], [{
      key: "Default",
      get: function get() {
        return hn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return dn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = un.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return un;
  }(cn);
  g(un);
  var fn = "click.bs.scrollspy",
    pn = "active",
    gn = "[href]",
    mn = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [.1, .5, 1]
    },
    _n = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array"
    };
  var bn = /*#__PURE__*/function (_z9) {
    _inherits(bn, _z9);
    var _super15 = _createSuper(bn);
    function bn(t, e) {
      var _this47;
      _classCallCheck(this, bn);
      _this47 = _super15.call(this, t, e), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, _this47.refresh();
      return _this47;
    }
    _createClass(bn, [{
      key: "refresh",
      value: function refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        var _iterator23 = _createForOfIteratorHelper(this._observableSections.values()),
          _step23;
        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _t23 = _step23.value;
            this._observer.observe(_t23);
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._observer.disconnect(), _get(_getPrototypeOf(bn.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? "".concat(t.offset, "px 0px -30%") : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(function (t) {
          return Number.parseFloat(t);
        })), t;
      }
    }, {
      key: "_maybeEnableSmoothScroll",
      value: function _maybeEnableSmoothScroll() {
        var _this48 = this;
        this._config.smoothScroll && (P.off(this._config.target, fn), P.on(this._config.target, fn, gn, function (t) {
          var e = _this48._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            var _i24 = _this48._rootElement || window,
              _n10 = e.offsetTop - _this48._element.offsetTop;
            if (_i24.scrollTo) return void _i24.scrollTo({
              top: _n10,
              behavior: "smooth"
            });
            _i24.scrollTop = _n10;
          }
        }));
      }
    }, {
      key: "_getNewObserver",
      value: function _getNewObserver() {
        var _this49 = this;
        var t = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver(function (t) {
          return _this49._observerCallback(t);
        }, t);
      }
    }, {
      key: "_observerCallback",
      value: function _observerCallback(t) {
        var _this50 = this;
        var e = function e(t) {
            return _this50._targetLinks.get("#".concat(t.target.id));
          },
          i = function i(t) {
            _this50._previousScrollData.visibleEntryTop = t.target.offsetTop, _this50._process(e(t));
          },
          n = (this._rootElement || document.documentElement).scrollTop,
          s = n >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = n;
        var _iterator24 = _createForOfIteratorHelper(t),
          _step24;
        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _o3 = _step24.value;
            if (!_o3.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(e(_o3));
              continue;
            }
            var _t24 = _o3.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (s && _t24) {
              if (i(_o3), !n) return;
            } else s || _t24 || i(_o3);
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    }, {
      key: "_initializeTargetsAndObservables",
      value: function _initializeTargetsAndObservables() {
        this._targetLinks = new Map(), this._observableSections = new Map();
        var t = Q.find(gn, this._config.target);
        var _iterator25 = _createForOfIteratorHelper(t),
          _step25;
        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _e16 = _step25.value;
            if (!_e16.hash || l(_e16)) continue;
            var _t25 = Q.findOne(_e16.hash, this._element);
            a(_t25) && (this._targetLinks.set(_e16.hash, _e16), this._observableSections.set(_e16.hash, _t25));
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "_process",
      value: function _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(pn), this._activateParents(t), P.trigger(this._element, "activate.bs.scrollspy", {
          relatedTarget: t
        }));
      }
    }, {
      key: "_activateParents",
      value: function _activateParents(t) {
        if (t.classList.contains("dropdown-item")) Q.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(pn);else {
          var _iterator26 = _createForOfIteratorHelper(Q.parents(t, ".nav, .list-group")),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var _e17 = _step26.value;
              var _iterator27 = _createForOfIteratorHelper(Q.prev(_e17, ".nav-link, .nav-item > .nav-link, .list-group-item")),
                _step27;
              try {
                for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                  var _t26 = _step27.value;
                  _t26.classList.add(pn);
                }
              } catch (err) {
                _iterator27.e(err);
              } finally {
                _iterator27.f();
              }
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
        }
      }
    }, {
      key: "_clearActiveClass",
      value: function _clearActiveClass(t) {
        t.classList.remove(pn);
        var e = Q.find("[href].active", t);
        var _iterator28 = _createForOfIteratorHelper(e),
          _step28;
        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _t27 = _step28.value;
            _t27.classList.remove(pn);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return mn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return _n;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = bn.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return bn;
  }(z);
  P.on(window, "load.bs.scrollspy.data-api", function () {
    var _iterator29 = _createForOfIteratorHelper(Q.find('[data-bs-spy="scroll"]')),
      _step29;
    try {
      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
        var _t28 = _step29.value;
        bn.getOrCreateInstance(_t28);
      }
    } catch (err) {
      _iterator29.e(err);
    } finally {
      _iterator29.f();
    }
  }), g(bn);
  var vn = "ArrowLeft",
    yn = "ArrowRight",
    wn = "ArrowUp",
    An = "ArrowDown",
    En = "active",
    Tn = "fade",
    Cn = "show",
    On = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    xn = ".nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role=\"tab\"]:not(.dropdown-toggle), ".concat(On);
  var kn = /*#__PURE__*/function (_z10) {
    _inherits(kn, _z10);
    var _super16 = _createSuper(kn);
    function kn(t) {
      var _this51;
      _classCallCheck(this, kn);
      _this51 = _super16.call(this, t), _this51._parent = _this51._element.closest('.list-group, .nav, [role="tablist"]'), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), P.on(_this51._element, "keydown.bs.tab", function (t) {
        return _this51._keydown(t);
      }));
      return _this51;
    }
    _createClass(kn, [{
      key: "show",
      value: function show() {
        var t = this._element;
        if (this._elemIsActive(t)) return;
        var e = this._getActiveElem(),
          i = e ? P.trigger(e, "hide.bs.tab", {
            relatedTarget: t
          }) : null;
        P.trigger(t, "show.bs.tab", {
          relatedTarget: e
        }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
      }
    }, {
      key: "_activate",
      value: function _activate(t, e) {
        var _this52 = this;
        t && (t.classList.add(En), this._activate(n(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), _this52._toggleDropDown(t, !0), P.trigger(t, "shown.bs.tab", {
            relatedTarget: e
          })) : t.classList.add(Cn);
        }, t, t.classList.contains(Tn)));
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(t, e) {
        var _this53 = this;
        t && (t.classList.remove(En), t.blur(), this._deactivate(n(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), _this53._toggleDropDown(t, !1), P.trigger(t, "hidden.bs.tab", {
            relatedTarget: e
          })) : t.classList.remove(Cn);
        }, t, t.classList.contains(Tn)));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (![vn, yn, wn, An].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();
        var e = [yn, An].includes(t.key),
          i = b(this._getChildren().filter(function (t) {
            return !l(t);
          }), t.target, e, !0);
        i && (i.focus({
          preventScroll: !0
        }), kn.getOrCreateInstance(i).show());
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        return Q.find(xn, this._parent);
      }
    }, {
      key: "_getActiveElem",
      value: function _getActiveElem() {
        var _this54 = this;
        return this._getChildren().find(function (t) {
          return _this54._elemIsActive(t);
        }) || null;
      }
    }, {
      key: "_setInitialAttributes",
      value: function _setInitialAttributes(t, e) {
        this._setAttributeIfNotExists(t, "role", "tablist");
        var _iterator30 = _createForOfIteratorHelper(e),
          _step30;
        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var _t29 = _step30.value;
            this._setInitialAttributesOnChild(_t29);
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }
      }
    }, {
      key: "_setInitialAttributesOnChild",
      value: function _setInitialAttributesOnChild(t) {
        t = this._getInnerElement(t);
        var e = this._elemIsActive(t),
          i = this._getOuterElement(t);
        t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
      }
    }, {
      key: "_setInitialAttributesOnTargetPanel",
      value: function _setInitialAttributesOnTargetPanel(t) {
        var e = n(t);
        e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", "#".concat(t.id)));
      }
    }, {
      key: "_toggleDropDown",
      value: function _toggleDropDown(t, e) {
        var i = this._getOuterElement(t);
        if (!i.classList.contains("dropdown")) return;
        var n = function n(t, _n11) {
          var s = Q.findOne(t, i);
          s && s.classList.toggle(_n11, e);
        };
        n(".dropdown-toggle", En), n(".dropdown-menu", Cn), i.setAttribute("aria-expanded", e);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(t, e, i) {
        t.hasAttribute(e) || t.setAttribute(e, i);
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(t) {
        return t.classList.contains(En);
      }
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(t) {
        return t.matches(xn) ? t : Q.findOne(xn, t);
      }
    }, {
      key: "_getOuterElement",
      value: function _getOuterElement(t) {
        return t.closest(".nav-item, .list-group-item") || t;
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = kn.getOrCreateInstance(this);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return kn;
  }(z);
  P.on(document, "click.bs.tab", On, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || kn.getOrCreateInstance(this).show();
  }), P.on(window, "load.bs.tab", function () {
    var _iterator31 = _createForOfIteratorHelper(Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')),
      _step31;
    try {
      for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
        var _t30 = _step31.value;
        kn.getOrCreateInstance(_t30);
      }
    } catch (err) {
      _iterator31.e(err);
    } finally {
      _iterator31.f();
    }
  }), g(kn);
  var Ln = "hide",
    Dn = "show",
    Sn = "showing",
    In = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    Nn = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
  var Pn = /*#__PURE__*/function (_z11) {
    _inherits(Pn, _z11);
    var _super17 = _createSuper(Pn);
    function Pn(t, e) {
      var _this55;
      _classCallCheck(this, Pn);
      _this55 = _super17.call(this, t, e), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
      return _this55;
    }
    _createClass(Pn, [{
      key: "show",
      value: function show() {
        var _this56 = this;
        P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Ln), d(this._element), this._element.classList.add(Dn, Sn), this._queueCallback(function () {
          _this56._element.classList.remove(Sn), P.trigger(_this56._element, "shown.bs.toast"), _this56._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this57 = this;
        this.isShown() && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(Sn), this._queueCallback(function () {
          _this57._element.classList.add(Ln), _this57._element.classList.remove(Sn, Dn), P.trigger(_this57._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(Dn), _get(_getPrototypeOf(Pn.prototype), "dispose", this).call(this);
      }
    }, {
      key: "isShown",
      value: function isShown() {
        return this._element.classList.contains(Dn);
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this58 = this;
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this58.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }
        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this59 = this;
        P.on(this._element, "mouseover.bs.toast", function (t) {
          return _this59._onInteraction(t, !0);
        }), P.on(this._element, "mouseout.bs.toast", function (t) {
          return _this59._onInteraction(t, !1);
        }), P.on(this._element, "focusin.bs.toast", function (t) {
          return _this59._onInteraction(t, !0);
        }), P.on(this._element, "focusout.bs.toast", function (t) {
          return _this59._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Nn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return In;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Pn.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return Pn;
  }(z);
  return q(Pn), g(Pn), {
    Alert: R,
    Button: K,
    Carousel: at,
    Collapse: pt,
    Dropdown: hi,
    Modal: Ni,
    Offcanvas: zi,
    Popover: un,
    ScrollSpy: bn,
    Tab: kn,
    Toast: Pn,
    Tooltip: cn
  };
});

/***/ }),

/***/ "./resources/assets/js/bs-init.js":
/*!****************************************!*\
  !*** ./resources/assets/js/bs-init.js ***!
  \****************************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
document.addEventListener('DOMContentLoaded', function () {
  var charts = document.querySelectorAll('[data-bss-chart]');
  var _iterator = _createForOfIteratorHelper(charts),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var chart = _step.value;
      chart.chart = new Chart(chart, JSON.parse(chart.dataset.bssChart));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}, false);

/***/ }),

/***/ "./resources/assets/js/chart.min.js":
/*!******************************************!*\
  !*** ./resources/assets/js/chart.min.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * Chart.js v2.8.0
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var t = {
    rgb2hsl: e,
    rgb2hsv: i,
    rgb2hwb: n,
    rgb2cmyk: a,
    rgb2keyword: o,
    rgb2xyz: s,
    rgb2lab: l,
    rgb2lch: function rgb2lch(t) {
      return v(l(t));
    },
    hsl2rgb: u,
    hsl2hsv: function hsl2hsv(t) {
      var e = t[0],
        i = t[1] / 100,
        n = t[2] / 100;
      if (0 === n) return [0, 0, 0];
      return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)];
    },
    hsl2hwb: function hsl2hwb(t) {
      return n(u(t));
    },
    hsl2cmyk: function hsl2cmyk(t) {
      return a(u(t));
    },
    hsl2keyword: function hsl2keyword(t) {
      return o(u(t));
    },
    hsv2rgb: d,
    hsv2hsl: function hsv2hsl(t) {
      var e,
        i,
        n = t[0],
        a = t[1] / 100,
        r = t[2] / 100;
      return e = a * r, [n, 100 * (e = (e /= (i = (2 - a) * r) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)];
    },
    hsv2hwb: function hsv2hwb(t) {
      return n(d(t));
    },
    hsv2cmyk: function hsv2cmyk(t) {
      return a(d(t));
    },
    hsv2keyword: function hsv2keyword(t) {
      return o(d(t));
    },
    hwb2rgb: h,
    hwb2hsl: function hwb2hsl(t) {
      return e(h(t));
    },
    hwb2hsv: function hwb2hsv(t) {
      return i(h(t));
    },
    hwb2cmyk: function hwb2cmyk(t) {
      return a(h(t));
    },
    hwb2keyword: function hwb2keyword(t) {
      return o(h(t));
    },
    cmyk2rgb: c,
    cmyk2hsl: function cmyk2hsl(t) {
      return e(c(t));
    },
    cmyk2hsv: function cmyk2hsv(t) {
      return i(c(t));
    },
    cmyk2hwb: function cmyk2hwb(t) {
      return n(c(t));
    },
    cmyk2keyword: function cmyk2keyword(t) {
      return o(c(t));
    },
    keyword2rgb: _,
    keyword2hsl: function keyword2hsl(t) {
      return e(_(t));
    },
    keyword2hsv: function keyword2hsv(t) {
      return i(_(t));
    },
    keyword2hwb: function keyword2hwb(t) {
      return n(_(t));
    },
    keyword2cmyk: function keyword2cmyk(t) {
      return a(_(t));
    },
    keyword2lab: function keyword2lab(t) {
      return l(_(t));
    },
    keyword2xyz: function keyword2xyz(t) {
      return s(_(t));
    },
    xyz2rgb: f,
    xyz2lab: m,
    xyz2lch: function xyz2lch(t) {
      return v(m(t));
    },
    lab2xyz: p,
    lab2rgb: y,
    lab2lch: v,
    lch2lab: x,
    lch2xyz: function lch2xyz(t) {
      return p(x(t));
    },
    lch2rgb: function lch2rgb(t) {
      return y(x(t));
    }
  };
  function e(t) {
    var e,
      i,
      n = t[0] / 255,
      a = t[1] / 255,
      r = t[2] / 255,
      o = Math.min(n, a, r),
      s = Math.max(n, a, r),
      l = s - o;
    return s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (o + s) / 2, [e, 100 * (s == o ? 0 : i <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * i];
  }
  function i(t) {
    var e,
      i,
      n = t[0],
      a = t[1],
      r = t[2],
      o = Math.min(n, a, r),
      s = Math.max(n, a, r),
      l = s - o;
    return i = 0 == s ? 0 : l / s * 1e3 / 10, s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10];
  }
  function n(t) {
    var i = t[0],
      n = t[1],
      a = t[2];
    return [e(t)[0], 100 * (1 / 255 * Math.min(i, Math.min(n, a))), 100 * (a = 1 - 1 / 255 * Math.max(i, Math.max(n, a)))];
  }
  function a(t) {
    var e,
      i = t[0] / 255,
      n = t[1] / 255,
      a = t[2] / 255;
    return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e];
  }
  function o(t) {
    return w[JSON.stringify(t)];
  }
  function s(t) {
    var e = t[0] / 255,
      i = t[1] / 255,
      n = t[2] / 255;
    return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)];
  }
  function l(t) {
    var e = s(t),
      i = e[0],
      n = e[1],
      a = e[2];
    return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))];
  }
  function u(t) {
    var e,
      i,
      n,
      a,
      r,
      o = t[0] / 360,
      s = t[1] / 100,
      l = t[2] / 100;
    if (0 == s) return [r = 255 * l, r, r];
    e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
    for (var u = 0; u < 3; u++) (n = o + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, r = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * r;
    return a;
  }
  function d(t) {
    var e = t[0] / 60,
      i = t[1] / 100,
      n = t[2] / 100,
      a = Math.floor(e) % 6,
      r = e - Math.floor(e),
      o = 255 * n * (1 - i),
      s = 255 * n * (1 - i * r),
      l = 255 * n * (1 - i * (1 - r));
    n *= 255;
    switch (a) {
      case 0:
        return [n, l, o];
      case 1:
        return [s, n, o];
      case 2:
        return [o, n, l];
      case 3:
        return [o, s, n];
      case 4:
        return [l, o, n];
      case 5:
        return [n, o, s];
    }
  }
  function h(t) {
    var e,
      i,
      n,
      a,
      o = t[0] / 360,
      s = t[1] / 100,
      l = t[2] / 100,
      u = s + l;
    switch (u > 1 && (s /= u, l /= u), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
      default:
      case 6:
      case 0:
        r = i, g = a, b = s;
        break;
      case 1:
        r = a, g = i, b = s;
        break;
      case 2:
        r = s, g = i, b = a;
        break;
      case 3:
        r = s, g = a, b = i;
        break;
      case 4:
        r = a, g = s, b = i;
        break;
      case 5:
        r = i, g = s, b = a;
    }
    return [255 * r, 255 * g, 255 * b];
  }
  function c(t) {
    var e = t[0] / 100,
      i = t[1] / 100,
      n = t[2] / 100,
      a = t[3] / 100;
    return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))];
  }
  function f(t) {
    var e,
      i,
      n,
      a = t[0] / 100,
      r = t[1] / 100,
      o = t[2] / 100;
    return i = -.9689 * a + 1.8758 * r + .0415 * o, n = .0557 * a + -.204 * r + 1.057 * o, e = (e = 3.2406 * a + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))];
  }
  function m(t) {
    var e = t[0],
      i = t[1],
      n = t[2];
    return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))];
  }
  function p(t) {
    var e,
      i,
      n,
      a,
      r = t[0],
      o = t[1],
      s = t[2];
    return r <= 8 ? a = (i = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((r + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)];
  }
  function v(t) {
    var e,
      i = t[0],
      n = t[1],
      a = t[2];
    return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e];
  }
  function y(t) {
    return f(p(t));
  }
  function x(t) {
    var e,
      i = t[0],
      n = t[1];
    return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)];
  }
  function _(t) {
    return k[t];
  }
  var k = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    },
    w = {};
  for (var M in k) w[JSON.stringify(k[M])] = M;
  var S = function S() {
    return new O();
  };
  for (var D in t) {
    S[D + "Raw"] = function (e) {
      return function (i) {
        return "number" == typeof i && (i = Array.prototype.slice.call(arguments)), t[e](i);
      };
    }(D);
    var C = /(\w+)2(\w+)/.exec(D),
      P = C[1],
      T = C[2];
    (S[P] = S[P] || {})[T] = S[D] = function (e) {
      return function (i) {
        "number" == typeof i && (i = Array.prototype.slice.call(arguments));
        var n = t[e](i);
        if ("string" == typeof n || void 0 === n) return n;
        for (var a = 0; a < n.length; a++) n[a] = Math.round(n[a]);
        return n;
      };
    }(D);
  }
  var O = function O() {
    this.convs = {};
  };
  O.prototype.routeSpace = function (t, e) {
    var i = e[0];
    return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i));
  }, O.prototype.setValues = function (t, e) {
    return this.space = t, this.convs = {}, this.convs[t] = e, this;
  }, O.prototype.getValues = function (t) {
    var e = this.convs[t];
    if (!e) {
      var i = this.space,
        n = this.convs[i];
      e = S[i][t](n), this.convs[t] = e;
    }
    return e;
  }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
    O.prototype[t] = function (e) {
      return this.routeSpace(t, arguments);
    };
  });
  var I = S,
    A = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    },
    F = {
      getRgba: R,
      getHsla: L,
      getRgb: function getRgb(t) {
        var e = R(t);
        return e && e.slice(0, 3);
      },
      getHsl: function getHsl(t) {
        var e = L(t);
        return e && e.slice(0, 3);
      },
      getHwb: W,
      getAlpha: function getAlpha(t) {
        var e = R(t);
        if (e) return e[3];
        if (e = L(t)) return e[3];
        if (e = W(t)) return e[3];
      },
      hexString: function hexString(t, e) {
        var e = void 0 !== e && 3 === t.length ? e : t[3];
        return "#" + H(t[0]) + H(t[1]) + H(t[2]) + (e >= 0 && e < 1 ? H(Math.round(255 * e)) : "");
      },
      rgbString: function rgbString(t, e) {
        if (e < 1 || t[3] && t[3] < 1) return Y(t, e);
        return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      },
      rgbaString: Y,
      percentString: function percentString(t, e) {
        if (e < 1 || t[3] && t[3] < 1) return N(t, e);
        var i = Math.round(t[0] / 255 * 100),
          n = Math.round(t[1] / 255 * 100),
          a = Math.round(t[2] / 255 * 100);
        return "rgb(" + i + "%, " + n + "%, " + a + "%)";
      },
      percentaString: N,
      hslString: function hslString(t, e) {
        if (e < 1 || t[3] && t[3] < 1) return z(t, e);
        return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
      },
      hslaString: z,
      hwbString: function hwbString(t, e) {
        void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
        return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
      },
      keyword: function keyword(t) {
        return E[t.slice(0, 3)];
      }
    };
  function R(t) {
    if (t) {
      var e = [0, 0, 0],
        i = 1,
        n = t.match(/^#([a-fA-F0-9]{3,4})$/i),
        a = "";
      if (n) {
        a = (n = n[1])[3];
        for (var r = 0; r < e.length; r++) e[r] = parseInt(n[r] + n[r], 16);
        a && (i = Math.round(parseInt(a + a, 16) / 255 * 100) / 100);
      } else if (n = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
        a = n[2], n = n[1];
        for (r = 0; r < e.length; r++) e[r] = parseInt(n.slice(2 * r, 2 * r + 2), 16);
        a && (i = Math.round(parseInt(a, 16) / 255 * 100) / 100);
      } else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
        for (r = 0; r < e.length; r++) e[r] = parseInt(n[r + 1]);
        i = parseFloat(n[4]);
      } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
        for (r = 0; r < e.length; r++) e[r] = Math.round(2.55 * parseFloat(n[r + 1]));
        i = parseFloat(n[4]);
      } else if (n = t.match(/(\w+)/)) {
        if ("transparent" == n[1]) return [0, 0, 0, 0];
        if (!(e = A[n[1]])) return;
      }
      for (r = 0; r < e.length; r++) e[r] = V(e[r], 0, 255);
      return i = i || 0 == i ? V(i, 0, 1) : 1, e[3] = i, e;
    }
  }
  function L(t) {
    if (t) {
      var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
      if (e) {
        var i = parseFloat(e[4]);
        return [V(parseInt(e[1]), 0, 360), V(parseFloat(e[2]), 0, 100), V(parseFloat(e[3]), 0, 100), V(isNaN(i) ? 1 : i, 0, 1)];
      }
    }
  }
  function W(t) {
    if (t) {
      var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
      if (e) {
        var i = parseFloat(e[4]);
        return [V(parseInt(e[1]), 0, 360), V(parseFloat(e[2]), 0, 100), V(parseFloat(e[3]), 0, 100), V(isNaN(i) ? 1 : i, 0, 1)];
      }
    }
  }
  function Y(t, e) {
    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
  }
  function N(t, e) {
    return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
  }
  function z(t, e) {
    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
  }
  function V(t, e, i) {
    return Math.min(Math.max(e, t), i);
  }
  function H(t) {
    var e = t.toString(16).toUpperCase();
    return e.length < 2 ? "0" + e : e;
  }
  var E = {};
  for (var B in A) E[A[B]] = B;
  var j = function j(t) {
    return t instanceof j ? t : this instanceof j ? (this.valid = !1, this.values = {
      rgb: [0, 0, 0],
      hsl: [0, 0, 0],
      hsv: [0, 0, 0],
      hwb: [0, 0, 0],
      cmyk: [0, 0, 0, 0],
      alpha: 1
    }, void ("string" == typeof t ? (e = F.getRgba(t)) ? this.setValues("rgb", e) : (e = F.getHsla(t)) ? this.setValues("hsl", e) : (e = F.getHwb(t)) && this.setValues("hwb", e) : "object" == _typeof(t) && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new j(t);
    var e;
  };
  j.prototype = {
    isValid: function isValid() {
      return this.valid;
    },
    rgb: function rgb() {
      return this.setSpace("rgb", arguments);
    },
    hsl: function hsl() {
      return this.setSpace("hsl", arguments);
    },
    hsv: function hsv() {
      return this.setSpace("hsv", arguments);
    },
    hwb: function hwb() {
      return this.setSpace("hwb", arguments);
    },
    cmyk: function cmyk() {
      return this.setSpace("cmyk", arguments);
    },
    rgbArray: function rgbArray() {
      return this.values.rgb;
    },
    hslArray: function hslArray() {
      return this.values.hsl;
    },
    hsvArray: function hsvArray() {
      return this.values.hsv;
    },
    hwbArray: function hwbArray() {
      var t = this.values;
      return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
    },
    cmykArray: function cmykArray() {
      return this.values.cmyk;
    },
    rgbaArray: function rgbaArray() {
      var t = this.values;
      return t.rgb.concat([t.alpha]);
    },
    hslaArray: function hslaArray() {
      var t = this.values;
      return t.hsl.concat([t.alpha]);
    },
    alpha: function alpha(t) {
      return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
    },
    red: function red(t) {
      return this.setChannel("rgb", 0, t);
    },
    green: function green(t) {
      return this.setChannel("rgb", 1, t);
    },
    blue: function blue(t) {
      return this.setChannel("rgb", 2, t);
    },
    hue: function hue(t) {
      return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
    },
    saturation: function saturation(t) {
      return this.setChannel("hsl", 1, t);
    },
    lightness: function lightness(t) {
      return this.setChannel("hsl", 2, t);
    },
    saturationv: function saturationv(t) {
      return this.setChannel("hsv", 1, t);
    },
    whiteness: function whiteness(t) {
      return this.setChannel("hwb", 1, t);
    },
    blackness: function blackness(t) {
      return this.setChannel("hwb", 2, t);
    },
    value: function value(t) {
      return this.setChannel("hsv", 2, t);
    },
    cyan: function cyan(t) {
      return this.setChannel("cmyk", 0, t);
    },
    magenta: function magenta(t) {
      return this.setChannel("cmyk", 1, t);
    },
    yellow: function yellow(t) {
      return this.setChannel("cmyk", 2, t);
    },
    black: function black(t) {
      return this.setChannel("cmyk", 3, t);
    },
    hexString: function hexString() {
      return F.hexString(this.values.rgb);
    },
    rgbString: function rgbString() {
      return F.rgbString(this.values.rgb, this.values.alpha);
    },
    rgbaString: function rgbaString() {
      return F.rgbaString(this.values.rgb, this.values.alpha);
    },
    percentString: function percentString() {
      return F.percentString(this.values.rgb, this.values.alpha);
    },
    hslString: function hslString() {
      return F.hslString(this.values.hsl, this.values.alpha);
    },
    hslaString: function hslaString() {
      return F.hslaString(this.values.hsl, this.values.alpha);
    },
    hwbString: function hwbString() {
      return F.hwbString(this.values.hwb, this.values.alpha);
    },
    keyword: function keyword() {
      return F.keyword(this.values.rgb, this.values.alpha);
    },
    rgbNumber: function rgbNumber() {
      var t = this.values.rgb;
      return t[0] << 16 | t[1] << 8 | t[2];
    },
    luminosity: function luminosity() {
      for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
        var n = t[i] / 255;
        e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
      }
      return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
    },
    contrast: function contrast(t) {
      var e = this.luminosity(),
        i = t.luminosity();
      return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05);
    },
    level: function level(t) {
      var e = this.contrast(t);
      return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
    },
    dark: function dark() {
      var t = this.values.rgb;
      return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
    },
    light: function light() {
      return !this.dark();
    },
    negate: function negate() {
      for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
      return this.setValues("rgb", t), this;
    },
    lighten: function lighten(t) {
      var e = this.values.hsl;
      return e[2] += e[2] * t, this.setValues("hsl", e), this;
    },
    darken: function darken(t) {
      var e = this.values.hsl;
      return e[2] -= e[2] * t, this.setValues("hsl", e), this;
    },
    saturate: function saturate(t) {
      var e = this.values.hsl;
      return e[1] += e[1] * t, this.setValues("hsl", e), this;
    },
    desaturate: function desaturate(t) {
      var e = this.values.hsl;
      return e[1] -= e[1] * t, this.setValues("hsl", e), this;
    },
    whiten: function whiten(t) {
      var e = this.values.hwb;
      return e[1] += e[1] * t, this.setValues("hwb", e), this;
    },
    blacken: function blacken(t) {
      var e = this.values.hwb;
      return e[2] += e[2] * t, this.setValues("hwb", e), this;
    },
    greyscale: function greyscale() {
      var t = this.values.rgb,
        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
      return this.setValues("rgb", [e, e, e]), this;
    },
    clearer: function clearer(t) {
      var e = this.values.alpha;
      return this.setValues("alpha", e - e * t), this;
    },
    opaquer: function opaquer(t) {
      var e = this.values.alpha;
      return this.setValues("alpha", e + e * t), this;
    },
    rotate: function rotate(t) {
      var e = this.values.hsl,
        i = (e[0] + t) % 360;
      return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this;
    },
    mix: function mix(t, e) {
      var i = t,
        n = void 0 === e ? .5 : e,
        a = 2 * n - 1,
        r = this.alpha() - i.alpha(),
        o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
        s = 1 - o;
      return this.rgb(o * this.red() + s * i.red(), o * this.green() + s * i.green(), o * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n));
    },
    toJSON: function toJSON() {
      return this.rgb();
    },
    clone: function clone() {
      var t,
        e,
        i = new j(),
        n = this.values,
        a = i.values;
      for (var r in n) n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
      return i;
    }
  }, j.prototype.spaces = {
    rgb: ["red", "green", "blue"],
    hsl: ["hue", "saturation", "lightness"],
    hsv: ["hue", "saturation", "value"],
    hwb: ["hue", "whiteness", "blackness"],
    cmyk: ["cyan", "magenta", "yellow", "black"]
  }, j.prototype.maxes = {
    rgb: [255, 255, 255],
    hsl: [360, 100, 100],
    hsv: [360, 100, 100],
    hwb: [360, 100, 100],
    cmyk: [100, 100, 100, 100]
  }, j.prototype.getValues = function (t) {
    for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
    return 1 !== e.alpha && (i.a = e.alpha), i;
  }, j.prototype.setValues = function (t, e) {
    var i,
      n,
      a = this.values,
      r = this.spaces,
      o = this.maxes,
      s = 1;
    if (this.valid = !0, "alpha" === t) s = e;else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
      for (i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];
      s = e.a;
    } else if (void 0 !== e[r[t][0]]) {
      var l = r[t];
      for (i = 0; i < t.length; i++) a[t][i] = e[l[i]];
      s = e.alpha;
    }
    if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;
    for (i = 0; i < t.length; i++) n = Math.max(0, Math.min(o[t][i], a[t][i])), a[t][i] = Math.round(n);
    for (var u in r) u !== t && (a[u] = I[t][u](a[t]));
    return !0;
  }, j.prototype.setSpace = function (t, e) {
    var i = e[0];
    return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this);
  }, j.prototype.setChannel = function (t, e, i) {
    var n = this.values[t];
    return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this);
  }, "undefined" != typeof window && (window.Color = j);
  var U,
    G = j,
    q = {
      noop: function noop() {},
      uid: (U = 0, function () {
        return U++;
      }),
      isNullOrUndef: function isNullOrUndef(t) {
        return null == t;
      },
      isArray: function isArray(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        var e = Object.prototype.toString.call(t);
        return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
      },
      isObject: function isObject(t) {
        return null !== t && "[object Object]" === Object.prototype.toString.call(t);
      },
      isFinite: function (_isFinite) {
        function isFinite(_x) {
          return _isFinite.apply(this, arguments);
        }
        isFinite.toString = function () {
          return _isFinite.toString();
        };
        return isFinite;
      }(function (t) {
        return ("number" == typeof t || t instanceof Number) && isFinite(t);
      }),
      valueOrDefault: function valueOrDefault(t, e) {
        return void 0 === t ? e : t;
      },
      valueAtIndexOrDefault: function valueAtIndexOrDefault(t, e, i) {
        return q.valueOrDefault(q.isArray(t) ? t[e] : t, i);
      },
      callback: function callback(t, e, i) {
        if (t && "function" == typeof t.call) return t.apply(i, e);
      },
      each: function each(t, e, i, n) {
        var a, r, o;
        if (q.isArray(t)) {
          if (r = t.length, n) for (a = r - 1; a >= 0; a--) e.call(i, t[a], a);else for (a = 0; a < r; a++) e.call(i, t[a], a);
        } else if (q.isObject(t)) for (r = (o = Object.keys(t)).length, a = 0; a < r; a++) e.call(i, t[o[a]], o[a]);
      },
      arrayEquals: function arrayEquals(t, e) {
        var i, n, a, r;
        if (!t || !e || t.length !== e.length) return !1;
        for (i = 0, n = t.length; i < n; ++i) if (a = t[i], r = e[i], a instanceof Array && r instanceof Array) {
          if (!q.arrayEquals(a, r)) return !1;
        } else if (a !== r) return !1;
        return !0;
      },
      clone: function clone(t) {
        if (q.isArray(t)) return t.map(q.clone);
        if (q.isObject(t)) {
          for (var e = {}, i = Object.keys(t), n = i.length, a = 0; a < n; ++a) e[i[a]] = q.clone(t[i[a]]);
          return e;
        }
        return t;
      },
      _merger: function _merger(t, e, i, n) {
        var a = e[t],
          r = i[t];
        q.isObject(a) && q.isObject(r) ? q.merge(a, r, n) : e[t] = q.clone(r);
      },
      _mergerIf: function _mergerIf(t, e, i) {
        var n = e[t],
          a = i[t];
        q.isObject(n) && q.isObject(a) ? q.mergeIf(n, a) : e.hasOwnProperty(t) || (e[t] = q.clone(a));
      },
      merge: function merge(t, e, i) {
        var n,
          a,
          r,
          o,
          s,
          l = q.isArray(e) ? e : [e],
          u = l.length;
        if (!q.isObject(t)) return t;
        for (n = (i = i || {}).merger || q._merger, a = 0; a < u; ++a) if (e = l[a], q.isObject(e)) for (s = 0, o = (r = Object.keys(e)).length; s < o; ++s) n(r[s], t, e, i);
        return t;
      },
      mergeIf: function mergeIf(t, e) {
        return q.merge(t, e, {
          merger: q._mergerIf
        });
      },
      extend: function extend(t) {
        for (var e = function e(_e2, i) {
            t[i] = _e2;
          }, i = 1, n = arguments.length; i < n; ++i) q.each(arguments[i], e);
        return t;
      },
      inherits: function inherits(t) {
        var e = this,
          i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
          n = function n() {
            this.constructor = i;
          };
        return n.prototype = e.prototype, i.prototype = new n(), i.extend = q.inherits, t && q.extend(i.prototype, t), i.__super__ = e.prototype, i;
      }
    },
    Z = q;
  q.callCallback = q.callback, q.indexOf = function (t, e, i) {
    return Array.prototype.indexOf.call(t, e, i);
  }, q.getValueOrDefault = q.valueOrDefault, q.getValueAtIndexOrDefault = q.valueAtIndexOrDefault;
  var $ = {
      linear: function linear(t) {
        return t;
      },
      easeInQuad: function easeInQuad(t) {
        return t * t;
      },
      easeOutQuad: function easeOutQuad(t) {
        return -t * (t - 2);
      },
      easeInOutQuad: function easeInOutQuad(t) {
        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
      },
      easeInCubic: function easeInCubic(t) {
        return t * t * t;
      },
      easeOutCubic: function easeOutCubic(t) {
        return (t -= 1) * t * t + 1;
      },
      easeInOutCubic: function easeInOutCubic(t) {
        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
      },
      easeInQuart: function easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart: function easeOutQuart(t) {
        return -((t -= 1) * t * t * t - 1);
      },
      easeInOutQuart: function easeInOutQuart(t) {
        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
      },
      easeInQuint: function easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint: function easeOutQuint(t) {
        return (t -= 1) * t * t * t * t + 1;
      },
      easeInOutQuint: function easeInOutQuint(t) {
        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
      },
      easeInSine: function easeInSine(t) {
        return 1 - Math.cos(t * (Math.PI / 2));
      },
      easeOutSine: function easeOutSine(t) {
        return Math.sin(t * (Math.PI / 2));
      },
      easeInOutSine: function easeInOutSine(t) {
        return -.5 * (Math.cos(Math.PI * t) - 1);
      },
      easeInExpo: function easeInExpo(t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
      },
      easeOutExpo: function easeOutExpo(t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      },
      easeInOutExpo: function easeInOutExpo(t) {
        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
      },
      easeInCirc: function easeInCirc(t) {
        return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
      },
      easeOutCirc: function easeOutCirc(t) {
        return Math.sqrt(1 - (t -= 1) * t);
      },
      easeInOutCirc: function easeInOutCirc(t) {
        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      },
      easeInElastic: function easeInElastic(t) {
        var e = 1.70158,
          i = 0,
          n = 1;
        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i));
      },
      easeOutElastic: function easeOutElastic(t) {
        var e = 1.70158,
          i = 0,
          n = 1;
        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1);
      },
      easeInOutElastic: function easeInOutElastic(t) {
        var e = 1.70158,
          i = 0,
          n = 1;
        return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1);
      },
      easeInBack: function easeInBack(t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      easeOutBack: function easeOutBack(t) {
        var e = 1.70158;
        return (t -= 1) * t * ((e + 1) * t + e) + 1;
      },
      easeInOutBack: function easeInOutBack(t) {
        var e = 1.70158;
        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      },
      easeInBounce: function easeInBounce(t) {
        return 1 - $.easeOutBounce(1 - t);
      },
      easeOutBounce: function easeOutBounce(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
      },
      easeInOutBounce: function easeInOutBounce(t) {
        return t < .5 ? .5 * $.easeInBounce(2 * t) : .5 * $.easeOutBounce(2 * t - 1) + .5;
      }
    },
    X = {
      effects: $
    };
  Z.easingEffects = $;
  var K = Math.PI,
    J = K / 180,
    Q = 2 * K,
    tt = K / 2,
    et = K / 4,
    it = 2 * K / 3,
    nt = {
      clear: function clear(t) {
        t.ctx.clearRect(0, 0, t.width, t.height);
      },
      roundedRect: function roundedRect(t, e, i, n, a, r) {
        if (r) {
          var o = Math.min(r, a / 2, n / 2),
            s = e + o,
            l = i + o,
            u = e + n - o,
            d = i + a - o;
          t.moveTo(e, l), s < u && l < d ? (t.arc(s, l, o, -K, -tt), t.arc(u, l, o, -tt, 0), t.arc(u, d, o, 0, tt), t.arc(s, d, o, tt, K)) : s < u ? (t.moveTo(s, i), t.arc(u, l, o, -tt, tt), t.arc(s, l, o, tt, K + tt)) : l < d ? (t.arc(s, l, o, -K, 0), t.arc(s, d, o, 0, K)) : t.arc(s, l, o, -K, K), t.closePath(), t.moveTo(e, i);
        } else t.rect(e, i, n, a);
      },
      drawPoint: function drawPoint(t, e, i, n, a, r) {
        var o,
          s,
          l,
          u,
          d,
          h = (r || 0) * J;
        if (!e || "object" != _typeof(e) || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
          if (!(isNaN(i) || i <= 0)) {
            switch (t.beginPath(), e) {
              default:
                t.arc(n, a, i, 0, Q), t.closePath();
                break;
              case "triangle":
                t.moveTo(n + Math.sin(h) * i, a - Math.cos(h) * i), h += it, t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i), h += it, t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i), t.closePath();
                break;
              case "rectRounded":
                u = i - (d = .516 * i), s = Math.cos(h + et) * u, l = Math.sin(h + et) * u, t.arc(n - s, a - l, d, h - K, h - tt), t.arc(n + l, a - s, d, h - tt, h), t.arc(n + s, a + l, d, h, h + tt), t.arc(n - l, a + s, d, h + tt, h + K), t.closePath();
                break;
              case "rect":
                if (!r) {
                  u = Math.SQRT1_2 * i, t.rect(n - u, a - u, 2 * u, 2 * u);
                  break;
                }
                h += et;
              case "rectRot":
                s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + l, a - s), t.lineTo(n + s, a + l), t.lineTo(n - l, a + s), t.closePath();
                break;
              case "crossRot":
                h += et;
              case "cross":
                s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n + l, a - s), t.lineTo(n - l, a + s);
                break;
              case "star":
                s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n + l, a - s), t.lineTo(n - l, a + s), h += et, s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n + l, a - s), t.lineTo(n - l, a + s);
                break;
              case "line":
                s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l);
                break;
              case "dash":
                t.moveTo(n, a), t.lineTo(n + Math.cos(h) * i, a + Math.sin(h) * i);
            }
            t.fill(), t.stroke();
          }
        } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height);
      },
      _isPointInArea: function _isPointInArea(t, e) {
        return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6;
      },
      clipArea: function clipArea(t, e) {
        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
      },
      unclipArea: function unclipArea(t) {
        t.restore();
      },
      lineTo: function lineTo(t, e, i, n) {
        var a = i.steppedLine;
        if (a) {
          if ("middle" === a) {
            var r = (e.x + i.x) / 2;
            t.lineTo(r, n ? i.y : e.y), t.lineTo(r, n ? e.y : i.y);
          } else "after" === a && !n || "after" !== a && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
          t.lineTo(i.x, i.y);
        } else i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y);
      }
    },
    at = nt;
  Z.clear = nt.clear, Z.drawRoundedRectangle = function (t) {
    t.beginPath(), nt.roundedRect.apply(nt, arguments);
  };
  var rt = {
    _set: function _set(t, e) {
      return Z.merge(this[t] || (this[t] = {}), e);
    }
  };
  rt._set("global", {
    defaultColor: "rgba(0,0,0,0.1)",
    defaultFontColor: "#666",
    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    defaultFontSize: 12,
    defaultFontStyle: "normal",
    defaultLineHeight: 1.2,
    showLines: !0
  });
  var ot = rt,
    st = Z.valueOrDefault;
  var lt = {
      toLineHeight: function toLineHeight(t, e) {
        var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
        if (!i || "normal" === i[1]) return 1.2 * e;
        switch (t = +i[2], i[3]) {
          case "px":
            return t;
          case "%":
            t /= 100;
        }
        return e * t;
      },
      toPadding: function toPadding(t) {
        var e, i, n, a;
        return Z.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, a = +t.left || 0) : e = i = n = a = +t || 0, {
          top: e,
          right: i,
          bottom: n,
          left: a,
          height: e + n,
          width: a + i
        };
      },
      _parseFont: function _parseFont(t) {
        var e = ot.global,
          i = st(t.fontSize, e.defaultFontSize),
          n = {
            family: st(t.fontFamily, e.defaultFontFamily),
            lineHeight: Z.options.toLineHeight(st(t.lineHeight, e.defaultLineHeight), i),
            size: i,
            style: st(t.fontStyle, e.defaultFontStyle),
            weight: null,
            string: ""
          };
        return n.string = function (t) {
          return !t || Z.isNullOrUndef(t.size) || Z.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
        }(n), n;
      },
      resolve: function resolve(t, e, i) {
        var n, a, r;
        for (n = 0, a = t.length; n < a; ++n) if (void 0 !== (r = t[n]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && Z.isArray(r) && (r = r[i]), void 0 !== r)) return r;
      }
    },
    ut = Z,
    dt = X,
    ht = at,
    ct = lt;
  ut.easing = dt, ut.canvas = ht, ut.options = ct;
  var ft = function ft(t) {
    ut.extend(this, t), this.initialize.apply(this, arguments);
  };
  ut.extend(ft.prototype, {
    initialize: function initialize() {
      this.hidden = !1;
    },
    pivot: function pivot() {
      var t = this;
      return t._view || (t._view = ut.clone(t._model)), t._start = {}, t;
    },
    transition: function transition(t) {
      var e = this,
        i = e._model,
        n = e._start,
        a = e._view;
      return i && 1 !== t ? (a || (a = e._view = {}), n || (n = e._start = {}), function (t, e, i, n) {
        var a,
          r,
          o,
          s,
          l,
          u,
          d,
          h,
          c,
          f = Object.keys(i);
        for (a = 0, r = f.length; a < r; ++a) if (u = i[o = f[a]], e.hasOwnProperty(o) || (e[o] = u), (s = e[o]) !== u && "_" !== o[0]) {
          if (t.hasOwnProperty(o) || (t[o] = s), (d = _typeof(u)) == _typeof(l = t[o])) if ("string" === d) {
            if ((h = G(l)).valid && (c = G(u)).valid) {
              e[o] = c.mix(h, n).rgbString();
              continue;
            }
          } else if (ut.isFinite(l) && ut.isFinite(u)) {
            e[o] = l + (u - l) * n;
            continue;
          }
          e[o] = u;
        }
      }(n, a, i, t), e) : (e._view = i, e._start = null, e);
    },
    tooltipPosition: function tooltipPosition() {
      return {
        x: this._model.x,
        y: this._model.y
      };
    },
    hasValue: function hasValue() {
      return ut.isNumber(this._model.x) && ut.isNumber(this._model.y);
    }
  }), ft.extend = ut.inherits;
  var gt = ft,
    mt = gt.extend({
      chart: null,
      currentStep: 0,
      numSteps: 60,
      easing: "",
      render: null,
      onAnimationProgress: null,
      onAnimationComplete: null
    }),
    pt = mt;
  Object.defineProperty(mt.prototype, "animationObject", {
    get: function get() {
      return this;
    }
  }), Object.defineProperty(mt.prototype, "chartInstance", {
    get: function get() {
      return this.chart;
    },
    set: function set(t) {
      this.chart = t;
    }
  }), ot._set("global", {
    animation: {
      duration: 1e3,
      easing: "easeOutQuart",
      onProgress: ut.noop,
      onComplete: ut.noop
    }
  });
  var vt = {
      animations: [],
      request: null,
      addAnimation: function addAnimation(t, e, i, n) {
        var a,
          r,
          o = this.animations;
        for (e.chart = t, e.startTime = Date.now(), e.duration = i, n || (t.animating = !0), a = 0, r = o.length; a < r; ++a) if (o[a].chart === t) return void (o[a] = e);
        o.push(e), 1 === o.length && this.requestAnimationFrame();
      },
      cancelAnimation: function cancelAnimation(t) {
        var e = ut.findIndex(this.animations, function (e) {
          return e.chart === t;
        });
        -1 !== e && (this.animations.splice(e, 1), t.animating = !1);
      },
      requestAnimationFrame: function requestAnimationFrame() {
        var t = this;
        null === t.request && (t.request = ut.requestAnimFrame.call(window, function () {
          t.request = null, t.startDigest();
        }));
      },
      startDigest: function startDigest() {
        this.advance(), this.animations.length > 0 && this.requestAnimationFrame();
      },
      advance: function advance() {
        for (var t, e, i, n, a = this.animations, r = 0; r < a.length;) e = (t = a[r]).chart, i = t.numSteps, n = Math.floor((Date.now() - t.startTime) / t.duration * i) + 1, t.currentStep = Math.min(n, i), ut.callback(t.render, [e, t], e), ut.callback(t.onAnimationProgress, [t], e), t.currentStep >= i ? (ut.callback(t.onAnimationComplete, [t], e), e.animating = !1, a.splice(r, 1)) : ++r;
      }
    },
    yt = ut.options.resolve,
    bt = ["push", "pop", "shift", "splice", "unshift"];
  function xt(t, e) {
    var i = t._chartjs;
    if (i) {
      var n = i.listeners,
        a = n.indexOf(e);
      -1 !== a && n.splice(a, 1), n.length > 0 || (bt.forEach(function (e) {
        delete t[e];
      }), delete t._chartjs);
    }
  }
  var _t = function _t(t, e) {
    this.initialize(t, e);
  };
  ut.extend(_t.prototype, {
    datasetElementType: null,
    dataElementType: null,
    initialize: function initialize(t, e) {
      this.chart = t, this.index = e, this.linkScales(), this.addElements();
    },
    updateIndex: function updateIndex(t) {
      this.index = t;
    },
    linkScales: function linkScales() {
      var t = this,
        e = t.getMeta(),
        i = t.getDataset();
      null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id);
    },
    getDataset: function getDataset() {
      return this.chart.data.datasets[this.index];
    },
    getMeta: function getMeta() {
      return this.chart.getDatasetMeta(this.index);
    },
    getScaleForId: function getScaleForId(t) {
      return this.chart.scales[t];
    },
    _getValueScaleId: function _getValueScaleId() {
      return this.getMeta().yAxisID;
    },
    _getIndexScaleId: function _getIndexScaleId() {
      return this.getMeta().xAxisID;
    },
    _getValueScale: function _getValueScale() {
      return this.getScaleForId(this._getValueScaleId());
    },
    _getIndexScale: function _getIndexScale() {
      return this.getScaleForId(this._getIndexScaleId());
    },
    reset: function reset() {
      this.update(!0);
    },
    destroy: function destroy() {
      this._data && xt(this._data, this);
    },
    createMetaDataset: function createMetaDataset() {
      var t = this.datasetElementType;
      return t && new t({
        _chart: this.chart,
        _datasetIndex: this.index
      });
    },
    createMetaData: function createMetaData(t) {
      var e = this.dataElementType;
      return e && new e({
        _chart: this.chart,
        _datasetIndex: this.index,
        _index: t
      });
    },
    addElements: function addElements() {
      var t,
        e,
        i = this.getMeta(),
        n = this.getDataset().data || [],
        a = i.data;
      for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
      i.dataset = i.dataset || this.createMetaDataset();
    },
    addElementAndReset: function addElementAndReset(t) {
      var e = this.createMetaData(t);
      this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
    },
    buildOrUpdateElements: function buildOrUpdateElements() {
      var t,
        e,
        i = this,
        n = i.getDataset(),
        a = n.data || (n.data = []);
      i._data !== a && (i._data && xt(i._data, i), a && Object.isExtensible(a) && (e = i, (t = a)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: {
          listeners: [e]
        }
      }), bt.forEach(function (e) {
        var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
          n = t[e];
        Object.defineProperty(t, e, {
          configurable: !0,
          enumerable: !1,
          value: function value() {
            var e = Array.prototype.slice.call(arguments),
              a = n.apply(this, e);
            return ut.each(t._chartjs.listeners, function (t) {
              "function" == typeof t[i] && t[i].apply(t, e);
            }), a;
          }
        });
      }))), i._data = a), i.resyncElements();
    },
    update: ut.noop,
    transition: function transition(t) {
      for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
      e.dataset && e.dataset.transition(t);
    },
    draw: function draw() {
      var t = this.getMeta(),
        e = t.data || [],
        i = e.length,
        n = 0;
      for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw();
    },
    removeHoverStyle: function removeHoverStyle(t) {
      ut.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = this.chart.data.datasets[t._datasetIndex],
        i = t._index,
        n = t.custom || {},
        a = t._model,
        r = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: a.backgroundColor,
        borderColor: a.borderColor,
        borderWidth: a.borderWidth
      }, a.backgroundColor = yt([n.hoverBackgroundColor, e.hoverBackgroundColor, r(a.backgroundColor)], void 0, i), a.borderColor = yt([n.hoverBorderColor, e.hoverBorderColor, r(a.borderColor)], void 0, i), a.borderWidth = yt([n.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth], void 0, i);
    },
    resyncElements: function resyncElements() {
      var t = this.getMeta(),
        e = this.getDataset().data,
        i = t.data.length,
        n = e.length;
      n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i);
    },
    insertElements: function insertElements(t, e) {
      for (var i = 0; i < e; ++i) this.addElementAndReset(t + i);
    },
    onDataPush: function onDataPush() {
      var t = arguments.length;
      this.insertElements(this.getDataset().data.length - t, t);
    },
    onDataPop: function onDataPop() {
      this.getMeta().data.pop();
    },
    onDataShift: function onDataShift() {
      this.getMeta().data.shift();
    },
    onDataSplice: function onDataSplice(t, e) {
      this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
    },
    onDataUnshift: function onDataUnshift() {
      this.insertElements(0, arguments.length);
    }
  }), _t.extend = ut.inherits;
  var kt = _t;
  ot._set("global", {
    elements: {
      arc: {
        backgroundColor: ot.global.defaultColor,
        borderColor: "#fff",
        borderWidth: 2,
        borderAlign: "center"
      }
    }
  });
  var wt = gt.extend({
      inLabelRange: function inLabelRange(t) {
        var e = this._view;
        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
      },
      inRange: function inRange(t, e) {
        var i = this._view;
        if (i) {
          for (var n = ut.getAngleFromPoint(i, {
              x: t,
              y: e
            }), a = n.angle, r = n.distance, o = i.startAngle, s = i.endAngle; s < o;) s += 2 * Math.PI;
          for (; a > s;) a -= 2 * Math.PI;
          for (; a < o;) a += 2 * Math.PI;
          var l = a >= o && a <= s,
            u = r >= i.innerRadius && r <= i.outerRadius;
          return l && u;
        }
        return !1;
      },
      getCenterPoint: function getCenterPoint() {
        var t = this._view,
          e = (t.startAngle + t.endAngle) / 2,
          i = (t.innerRadius + t.outerRadius) / 2;
        return {
          x: t.x + Math.cos(e) * i,
          y: t.y + Math.sin(e) * i
        };
      },
      getArea: function getArea() {
        var t = this._view;
        return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
      },
      tooltipPosition: function tooltipPosition() {
        var t = this._view,
          e = t.startAngle + (t.endAngle - t.startAngle) / 2,
          i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
        return {
          x: t.x + Math.cos(e) * i,
          y: t.y + Math.sin(e) * i
        };
      },
      draw: function draw() {
        var t,
          e = this._chart.ctx,
          i = this._view,
          n = i.startAngle,
          a = i.endAngle,
          r = "inner" === i.borderAlign ? .33 : 0;
        e.save(), e.beginPath(), e.arc(i.x, i.y, Math.max(i.outerRadius - r, 0), n, a), e.arc(i.x, i.y, i.innerRadius, a, n, !0), e.closePath(), e.fillStyle = i.backgroundColor, e.fill(), i.borderWidth && ("inner" === i.borderAlign ? (e.beginPath(), t = r / i.outerRadius, e.arc(i.x, i.y, i.outerRadius, n - t, a + t), i.innerRadius > r ? (t = r / i.innerRadius, e.arc(i.x, i.y, i.innerRadius - r, a + t, n - t, !0)) : e.arc(i.x, i.y, r, a + Math.PI / 2, n - Math.PI / 2), e.closePath(), e.clip(), e.beginPath(), e.arc(i.x, i.y, i.outerRadius, n, a), e.arc(i.x, i.y, i.innerRadius, a, n, !0), e.closePath(), e.lineWidth = 2 * i.borderWidth, e.lineJoin = "round") : (e.lineWidth = i.borderWidth, e.lineJoin = "bevel"), e.strokeStyle = i.borderColor, e.stroke()), e.restore();
      }
    }),
    Mt = ut.valueOrDefault,
    St = ot.global.defaultColor;
  ot._set("global", {
    elements: {
      line: {
        tension: .4,
        backgroundColor: St,
        borderWidth: 3,
        borderColor: St,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        capBezierPoints: !0,
        fill: !0
      }
    }
  });
  var Dt = gt.extend({
      draw: function draw() {
        var t,
          e,
          i,
          n,
          a = this._view,
          r = this._chart.ctx,
          o = a.spanGaps,
          s = this._children.slice(),
          l = ot.global,
          u = l.elements.line,
          d = -1;
        for (this._loop && s.length && s.push(s[0]), r.save(), r.lineCap = a.borderCapStyle || u.borderCapStyle, r.setLineDash && r.setLineDash(a.borderDash || u.borderDash), r.lineDashOffset = Mt(a.borderDashOffset, u.borderDashOffset), r.lineJoin = a.borderJoinStyle || u.borderJoinStyle, r.lineWidth = Mt(a.borderWidth, u.borderWidth), r.strokeStyle = a.borderColor || l.defaultColor, r.beginPath(), d = -1, t = 0; t < s.length; ++t) e = s[t], i = ut.previousItem(s, t), n = e._view, 0 === t ? n.skip || (r.moveTo(n.x, n.y), d = t) : (i = -1 === d ? i : s[d], n.skip || (d !== t - 1 && !o || -1 === d ? r.moveTo(n.x, n.y) : ut.canvas.lineTo(r, i._view, e._view), d = t));
        r.stroke(), r.restore();
      }
    }),
    Ct = ut.valueOrDefault,
    Pt = ot.global.defaultColor;
  function Tt(t) {
    var e = this._view;
    return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
  }
  ot._set("global", {
    elements: {
      point: {
        radius: 3,
        pointStyle: "circle",
        backgroundColor: Pt,
        borderColor: Pt,
        borderWidth: 1,
        hitRadius: 1,
        hoverRadius: 4,
        hoverBorderWidth: 1
      }
    }
  });
  var Ot = gt.extend({
      inRange: function inRange(t, e) {
        var i = this._view;
        return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2);
      },
      inLabelRange: Tt,
      inXRange: Tt,
      inYRange: function inYRange(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
      },
      getCenterPoint: function getCenterPoint() {
        var t = this._view;
        return {
          x: t.x,
          y: t.y
        };
      },
      getArea: function getArea() {
        return Math.PI * Math.pow(this._view.radius, 2);
      },
      tooltipPosition: function tooltipPosition() {
        var t = this._view;
        return {
          x: t.x,
          y: t.y,
          padding: t.radius + t.borderWidth
        };
      },
      draw: function draw(t) {
        var e = this._view,
          i = this._chart.ctx,
          n = e.pointStyle,
          a = e.rotation,
          r = e.radius,
          o = e.x,
          s = e.y,
          l = ot.global,
          u = l.defaultColor;
        e.skip || (void 0 === t || ut.canvas._isPointInArea(e, t)) && (i.strokeStyle = e.borderColor || u, i.lineWidth = Ct(e.borderWidth, l.elements.point.borderWidth), i.fillStyle = e.backgroundColor || u, ut.canvas.drawPoint(i, n, r, o, s, a));
      }
    }),
    It = ot.global.defaultColor;
  function At(t) {
    return t && void 0 !== t.width;
  }
  function Ft(t) {
    var e, i, n, a, r;
    return At(t) ? (r = t.width / 2, e = t.x - r, i = t.x + r, n = Math.min(t.y, t.base), a = Math.max(t.y, t.base)) : (r = t.height / 2, e = Math.min(t.x, t.base), i = Math.max(t.x, t.base), n = t.y - r, a = t.y + r), {
      left: e,
      top: n,
      right: i,
      bottom: a
    };
  }
  function Rt(t, e, i) {
    return t === e ? i : t === i ? e : t;
  }
  function Lt(t, e, i) {
    var n,
      a,
      r,
      o,
      s = t.borderWidth,
      l = function (t) {
        var e = t.borderSkipped,
          i = {};
        return e ? (t.horizontal ? t.base > t.x && (e = Rt(e, "left", "right")) : t.base < t.y && (e = Rt(e, "bottom", "top")), i[e] = !0, i) : i;
      }(t);
    return ut.isObject(s) ? (n = +s.top || 0, a = +s.right || 0, r = +s.bottom || 0, o = +s.left || 0) : n = a = r = o = +s || 0, {
      t: l.top || n < 0 ? 0 : n > i ? i : n,
      r: l.right || a < 0 ? 0 : a > e ? e : a,
      b: l.bottom || r < 0 ? 0 : r > i ? i : r,
      l: l.left || o < 0 ? 0 : o > e ? e : o
    };
  }
  function Wt(t, e, i) {
    var n = null === e,
      a = null === i,
      r = !(!t || n && a) && Ft(t);
    return r && (n || e >= r.left && e <= r.right) && (a || i >= r.top && i <= r.bottom);
  }
  ot._set("global", {
    elements: {
      rectangle: {
        backgroundColor: It,
        borderColor: It,
        borderSkipped: "bottom",
        borderWidth: 0
      }
    }
  });
  var Yt = gt.extend({
      draw: function draw() {
        var t = this._chart.ctx,
          e = this._view,
          i = function (t) {
            var e = Ft(t),
              i = e.right - e.left,
              n = e.bottom - e.top,
              a = Lt(t, i / 2, n / 2);
            return {
              outer: {
                x: e.left,
                y: e.top,
                w: i,
                h: n
              },
              inner: {
                x: e.left + a.l,
                y: e.top + a.t,
                w: i - a.l - a.r,
                h: n - a.t - a.b
              }
            };
          }(e),
          n = i.outer,
          a = i.inner;
        t.fillStyle = e.backgroundColor, t.fillRect(n.x, n.y, n.w, n.h), n.w === a.w && n.h === a.h || (t.save(), t.beginPath(), t.rect(n.x, n.y, n.w, n.h), t.clip(), t.fillStyle = e.borderColor, t.rect(a.x, a.y, a.w, a.h), t.fill("evenodd"), t.restore());
      },
      height: function height() {
        var t = this._view;
        return t.base - t.y;
      },
      inRange: function inRange(t, e) {
        return Wt(this._view, t, e);
      },
      inLabelRange: function inLabelRange(t, e) {
        var i = this._view;
        return At(i) ? Wt(i, t, null) : Wt(i, null, e);
      },
      inXRange: function inXRange(t) {
        return Wt(this._view, t, null);
      },
      inYRange: function inYRange(t) {
        return Wt(this._view, null, t);
      },
      getCenterPoint: function getCenterPoint() {
        var t,
          e,
          i = this._view;
        return At(i) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
          x: t,
          y: e
        };
      },
      getArea: function getArea() {
        var t = this._view;
        return At(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base);
      },
      tooltipPosition: function tooltipPosition() {
        var t = this._view;
        return {
          x: t.x,
          y: t.y
        };
      }
    }),
    Nt = {},
    zt = wt,
    Vt = Dt,
    Ht = Ot,
    Et = Yt;
  Nt.Arc = zt, Nt.Line = Vt, Nt.Point = Ht, Nt.Rectangle = Et;
  var Bt = ut.options.resolve;
  ot._set("bar", {
    hover: {
      mode: "label"
    },
    scales: {
      xAxes: [{
        type: "category",
        categoryPercentage: .8,
        barPercentage: .9,
        offset: !0,
        gridLines: {
          offsetGridLines: !0
        }
      }],
      yAxes: [{
        type: "linear"
      }]
    }
  });
  var jt = kt.extend({
      dataElementType: Nt.Rectangle,
      initialize: function initialize() {
        var t;
        kt.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0;
      },
      update: function update(t) {
        var e,
          i,
          n = this.getMeta().data;
        for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t);
      },
      updateElement: function updateElement(t, e, i) {
        var n = this,
          a = n.getMeta(),
          r = n.getDataset(),
          o = n._resolveElementOptions(t, e);
        t._xScale = n.getScaleForId(a.xAxisID), t._yScale = n.getScaleForId(a.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
          backgroundColor: o.backgroundColor,
          borderColor: o.borderColor,
          borderSkipped: o.borderSkipped,
          borderWidth: o.borderWidth,
          datasetLabel: r.label,
          label: n.chart.data.labels[e]
        }, n._updateElementGeometry(t, e, i), t.pivot();
      },
      _updateElementGeometry: function _updateElementGeometry(t, e, i) {
        var n = this,
          a = t._model,
          r = n._getValueScale(),
          o = r.getBasePixel(),
          s = r.isHorizontal(),
          l = n._ruler || n.getRuler(),
          u = n.calculateBarValuePixels(n.index, e),
          d = n.calculateBarIndexPixels(n.index, e, l);
        a.horizontal = s, a.base = i ? o : u.base, a.x = s ? i ? o : u.head : d.center, a.y = s ? d.center : i ? o : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size;
      },
      _getStacks: function _getStacks(t) {
        var e,
          i,
          n = this.chart,
          a = this._getIndexScale().options.stacked,
          r = void 0 === t ? n.data.datasets.length : t + 1,
          o = [];
        for (e = 0; e < r; ++e) (i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === o.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === o.indexOf(i.stack))) && o.push(i.stack);
        return o;
      },
      getStackCount: function getStackCount() {
        return this._getStacks().length;
      },
      getStackIndex: function getStackIndex(t, e) {
        var i = this._getStacks(t),
          n = void 0 !== e ? i.indexOf(e) : -1;
        return -1 === n ? i.length - 1 : n;
      },
      getRuler: function getRuler() {
        var t,
          e,
          i = this._getIndexScale(),
          n = this.getStackCount(),
          a = this.index,
          r = i.isHorizontal(),
          o = r ? i.left : i.top,
          s = o + (r ? i.width : i.height),
          l = [];
        for (t = 0, e = this.getMeta().data.length; t < e; ++t) l.push(i.getPixelForValue(null, t, a));
        return {
          min: ut.isNullOrUndef(i.options.barThickness) ? function (t, e) {
            var i,
              n,
              a,
              r,
              o = t.isHorizontal() ? t.width : t.height,
              s = t.getTicks();
            for (a = 1, r = e.length; a < r; ++a) o = Math.min(o, Math.abs(e[a] - e[a - 1]));
            for (a = 0, r = s.length; a < r; ++a) n = t.getPixelForTick(a), o = a > 0 ? Math.min(o, n - i) : o, i = n;
            return o;
          }(i, l) : -1,
          pixels: l,
          start: o,
          end: s,
          stackCount: n,
          scale: i
        };
      },
      calculateBarValuePixels: function calculateBarValuePixels(t, e) {
        var i,
          n,
          a,
          r,
          o,
          s,
          l = this.chart,
          u = this.getMeta(),
          d = this._getValueScale(),
          h = d.isHorizontal(),
          c = l.data.datasets,
          f = +d.getRightValue(c[t].data[e]),
          g = d.options.minBarLength,
          m = d.options.stacked,
          p = u.stack,
          v = 0;
        if (m || void 0 === m && void 0 !== p) for (i = 0; i < t; ++i) (n = l.getDatasetMeta(i)).bar && n.stack === p && n.controller._getValueScaleId() === d.id && l.isDatasetVisible(i) && (a = +d.getRightValue(c[i].data[e]), (f < 0 && a < 0 || f >= 0 && a > 0) && (v += a));
        return r = d.getPixelForValue(v), s = (o = d.getPixelForValue(v + f)) - r, void 0 !== g && Math.abs(s) < g && (s = g, o = f >= 0 && !h || f < 0 && h ? r - g : r + g), {
          size: s,
          base: r,
          head: o,
          center: o + s / 2
        };
      },
      calculateBarIndexPixels: function calculateBarIndexPixels(t, e, i) {
        var n = i.scale.options,
          a = "flex" === n.barThickness ? function (t, e, i) {
            var n,
              a = e.pixels,
              r = a[t],
              o = t > 0 ? a[t - 1] : null,
              s = t < a.length - 1 ? a[t + 1] : null,
              l = i.categoryPercentage;
            return null === o && (o = r - (null === s ? e.end - e.start : s - r)), null === s && (s = r + r - o), n = r - (r - Math.min(o, s)) / 2 * l, {
              chunk: Math.abs(s - o) / 2 * l / e.stackCount,
              ratio: i.barPercentage,
              start: n
            };
          }(e, i, n) : function (t, e, i) {
            var n,
              a,
              r = i.barThickness,
              o = e.stackCount,
              s = e.pixels[t];
            return ut.isNullOrUndef(r) ? (n = e.min * i.categoryPercentage, a = i.barPercentage) : (n = r * o, a = 1), {
              chunk: n / o,
              ratio: a,
              start: s - n / 2
            };
          }(e, i, n),
          r = this.getStackIndex(t, this.getMeta().stack),
          o = a.start + a.chunk * r + a.chunk / 2,
          s = Math.min(ut.valueOrDefault(n.maxBarThickness, 1 / 0), a.chunk * a.ratio);
        return {
          base: o - s / 2,
          head: o + s / 2,
          center: o,
          size: s
        };
      },
      draw: function draw() {
        var t = this.chart,
          e = this._getValueScale(),
          i = this.getMeta().data,
          n = this.getDataset(),
          a = i.length,
          r = 0;
        for (ut.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) isNaN(e.getRightValue(n.data[r])) || i[r].draw();
        ut.canvas.unclipArea(t.ctx);
      },
      _resolveElementOptions: function _resolveElementOptions(t, e) {
        var i,
          n,
          a,
          r = this.chart,
          o = r.data.datasets[this.index],
          s = t.custom || {},
          l = r.options.elements.rectangle,
          u = {},
          d = {
            chart: r,
            dataIndex: e,
            dataset: o,
            datasetIndex: this.index
          },
          h = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"];
        for (i = 0, n = h.length; i < n; ++i) u[a = h[i]] = Bt([s[a], o[a], l[a]], d, e);
        return u;
      }
    }),
    Ut = ut.valueOrDefault,
    Gt = ut.options.resolve;
  ot._set("bubble", {
    hover: {
      mode: "single"
    },
    scales: {
      xAxes: [{
        type: "linear",
        position: "bottom",
        id: "x-axis-0"
      }],
      yAxes: [{
        type: "linear",
        position: "left",
        id: "y-axis-0"
      }]
    },
    tooltips: {
      callbacks: {
        title: function title() {
          return "";
        },
        label: function label(t, e) {
          var i = e.datasets[t.datasetIndex].label || "",
            n = e.datasets[t.datasetIndex].data[t.index];
          return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")";
        }
      }
    }
  });
  var qt = kt.extend({
      dataElementType: Nt.Point,
      update: function update(t) {
        var e = this,
          i = e.getMeta().data;
        ut.each(i, function (i, n) {
          e.updateElement(i, n, t);
        });
      },
      updateElement: function updateElement(t, e, i) {
        var n = this,
          a = n.getMeta(),
          r = t.custom || {},
          o = n.getScaleForId(a.xAxisID),
          s = n.getScaleForId(a.yAxisID),
          l = n._resolveElementOptions(t, e),
          u = n.getDataset().data[e],
          d = n.index,
          h = i ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == _typeof(u) ? u : NaN, e, d),
          c = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);
        t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
          backgroundColor: l.backgroundColor,
          borderColor: l.borderColor,
          borderWidth: l.borderWidth,
          hitRadius: l.hitRadius,
          pointStyle: l.pointStyle,
          rotation: l.rotation,
          radius: i ? 0 : l.radius,
          skip: r.skip || isNaN(h) || isNaN(c),
          x: h,
          y: c
        }, t.pivot();
      },
      setHoverStyle: function setHoverStyle(t) {
        var e = t._model,
          i = t._options,
          n = ut.getHoverColor;
        t.$previousStyle = {
          backgroundColor: e.backgroundColor,
          borderColor: e.borderColor,
          borderWidth: e.borderWidth,
          radius: e.radius
        }, e.backgroundColor = Ut(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Ut(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Ut(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius;
      },
      _resolveElementOptions: function _resolveElementOptions(t, e) {
        var i,
          n,
          a,
          r = this.chart,
          o = r.data.datasets[this.index],
          s = t.custom || {},
          l = r.options.elements.point,
          u = o.data[e],
          d = {},
          h = {
            chart: r,
            dataIndex: e,
            dataset: o,
            datasetIndex: this.index
          },
          c = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
        for (i = 0, n = c.length; i < n; ++i) d[a = c[i]] = Gt([s[a], o[a], l[a]], h, e);
        return d.radius = Gt([s.radius, u ? u.r : void 0, o.radius, l.radius], h, e), d;
      }
    }),
    Zt = ut.options.resolve,
    $t = ut.valueOrDefault;
  ot._set("doughnut", {
    animation: {
      animateRotate: !0,
      animateScale: !1
    },
    hover: {
      mode: "single"
    },
    legendCallback: function legendCallback(t) {
      var e = [];
      e.push('<ul class="' + t.id + '-legend">');
      var i = t.data,
        n = i.datasets,
        a = i.labels;
      if (n.length) for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
      return e.push("</ul>"), e.join("");
    },
    legend: {
      labels: {
        generateLabels: function generateLabels(t) {
          var e = t.data;
          return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
            var a = t.getDatasetMeta(0),
              r = e.datasets[0],
              o = a.data[n],
              s = o && o.custom || {},
              l = t.options.elements.arc;
            return {
              text: i,
              fillStyle: Zt([s.backgroundColor, r.backgroundColor, l.backgroundColor], void 0, n),
              strokeStyle: Zt([s.borderColor, r.borderColor, l.borderColor], void 0, n),
              lineWidth: Zt([s.borderWidth, r.borderWidth, l.borderWidth], void 0, n),
              hidden: isNaN(r.data[n]) || a.data[n].hidden,
              index: n
            };
          }) : [];
        }
      },
      onClick: function onClick(t, e) {
        var i,
          n,
          a,
          r = e.index,
          o = this.chart;
        for (i = 0, n = (o.data.datasets || []).length; i < n; ++i) (a = o.getDatasetMeta(i)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
        o.update();
      }
    },
    cutoutPercentage: 50,
    rotation: -.5 * Math.PI,
    circumference: 2 * Math.PI,
    tooltips: {
      callbacks: {
        title: function title() {
          return "";
        },
        label: function label(t, e) {
          var i = e.labels[t.index],
            n = ": " + e.datasets[t.datasetIndex].data[t.index];
          return ut.isArray(i) ? (i = i.slice())[0] += n : i += n, i;
        }
      }
    }
  });
  var Xt = kt.extend({
    dataElementType: Nt.Arc,
    linkScales: ut.noop,
    getRingIndex: function getRingIndex(t) {
      for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
      return e;
    },
    update: function update(t) {
      var e,
        i,
        n = this,
        a = n.chart,
        r = a.chartArea,
        o = a.options,
        s = r.right - r.left,
        l = r.bottom - r.top,
        u = Math.min(s, l),
        d = {
          x: 0,
          y: 0
        },
        h = n.getMeta(),
        c = h.data,
        f = o.cutoutPercentage,
        g = o.circumference,
        m = n._getRingWeight(n.index);
      if (g < 2 * Math.PI) {
        var p = o.rotation % (2 * Math.PI),
          v = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + g,
          y = {
            x: Math.cos(p),
            y: Math.sin(p)
          },
          b = {
            x: Math.cos(v),
            y: Math.sin(v)
          },
          x = p <= 0 && v >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= v,
          _ = p <= .5 * Math.PI && .5 * Math.PI <= v || p <= 2.5 * Math.PI && 2.5 * Math.PI <= v,
          k = p <= -Math.PI && -Math.PI <= v || p <= Math.PI && Math.PI <= v,
          w = p <= .5 * -Math.PI && .5 * -Math.PI <= v || p <= 1.5 * Math.PI && 1.5 * Math.PI <= v,
          M = f / 100,
          S = {
            x: k ? -1 : Math.min(y.x * (y.x < 0 ? 1 : M), b.x * (b.x < 0 ? 1 : M)),
            y: w ? -1 : Math.min(y.y * (y.y < 0 ? 1 : M), b.y * (b.y < 0 ? 1 : M))
          },
          D = {
            x: x ? 1 : Math.max(y.x * (y.x > 0 ? 1 : M), b.x * (b.x > 0 ? 1 : M)),
            y: _ ? 1 : Math.max(y.y * (y.y > 0 ? 1 : M), b.y * (b.y > 0 ? 1 : M))
          },
          C = {
            width: .5 * (D.x - S.x),
            height: .5 * (D.y - S.y)
          };
        u = Math.min(s / C.width, l / C.height), d = {
          x: -.5 * (D.x + S.x),
          y: -.5 * (D.y + S.y)
        };
      }
      for (e = 0, i = c.length; e < i; ++e) c[e]._options = n._resolveElementOptions(c[e], e);
      for (a.borderWidth = n.getMaxBorderWidth(), a.outerRadius = Math.max((u - a.borderWidth) / 2, 0), a.innerRadius = Math.max(f ? a.outerRadius / 100 * f : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / (n._getVisibleDatasetWeightTotal() || 1), a.offsetX = d.x * a.outerRadius, a.offsetY = d.y * a.outerRadius, h.total = n.calculateTotal(), n.outerRadius = a.outerRadius - a.radiusLength * n._getRingWeightOffset(n.index), n.innerRadius = Math.max(n.outerRadius - a.radiusLength * m, 0), e = 0, i = c.length; e < i; ++e) n.updateElement(c[e], e, t);
    },
    updateElement: function updateElement(t, e, i) {
      var n = this,
        a = n.chart,
        r = a.chartArea,
        o = a.options,
        s = o.animation,
        l = (r.left + r.right) / 2,
        u = (r.top + r.bottom) / 2,
        d = o.rotation,
        h = o.rotation,
        c = n.getDataset(),
        f = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(c.data[e]) * (o.circumference / (2 * Math.PI)),
        g = i && s.animateScale ? 0 : n.innerRadius,
        m = i && s.animateScale ? 0 : n.outerRadius,
        p = t._options || {};
      ut.extend(t, {
        _datasetIndex: n.index,
        _index: e,
        _model: {
          backgroundColor: p.backgroundColor,
          borderColor: p.borderColor,
          borderWidth: p.borderWidth,
          borderAlign: p.borderAlign,
          x: l + a.offsetX,
          y: u + a.offsetY,
          startAngle: d,
          endAngle: h,
          circumference: f,
          outerRadius: m,
          innerRadius: g,
          label: ut.valueAtIndexOrDefault(c.label, e, a.data.labels[e])
        }
      });
      var v = t._model;
      i && s.animateRotate || (v.startAngle = 0 === e ? o.rotation : n.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot();
    },
    calculateTotal: function calculateTotal() {
      var t,
        e = this.getDataset(),
        i = this.getMeta(),
        n = 0;
      return ut.each(i.data, function (i, a) {
        t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t));
      }), n;
    },
    calculateCircumference: function calculateCircumference(t) {
      var e = this.getMeta().total;
      return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
    },
    getMaxBorderWidth: function getMaxBorderWidth(t) {
      var e,
        i,
        n,
        a,
        r,
        o,
        s,
        l,
        u = 0,
        d = this.chart;
      if (!t) for (e = 0, i = d.data.datasets.length; e < i; ++e) if (d.isDatasetVisible(e)) {
        t = (n = d.getDatasetMeta(e)).data, e !== this.index && (r = n.controller);
        break;
      }
      if (!t) return 0;
      for (e = 0, i = t.length; e < i; ++e) a = t[e], "inner" !== (o = r ? r._resolveElementOptions(a, e) : a._options).borderAlign && (s = o.borderWidth, u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u);
      return u;
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
        i = t._options,
        n = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth
      }, e.backgroundColor = $t(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = $t(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = $t(i.hoverBorderWidth, i.borderWidth);
    },
    _resolveElementOptions: function _resolveElementOptions(t, e) {
      var i,
        n,
        a,
        r = this.chart,
        o = this.getDataset(),
        s = t.custom || {},
        l = r.options.elements.arc,
        u = {},
        d = {
          chart: r,
          dataIndex: e,
          dataset: o,
          datasetIndex: this.index
        },
        h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
      for (i = 0, n = h.length; i < n; ++i) u[a = h[i]] = Zt([s[a], o[a], l[a]], d, e);
      return u;
    },
    _getRingWeightOffset: function _getRingWeightOffset(t) {
      for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
      return e;
    },
    _getRingWeight: function _getRingWeight(t) {
      return Math.max($t(this.chart.data.datasets[t].weight, 1), 0);
    },
    _getVisibleDatasetWeightTotal: function _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length);
    }
  });
  ot._set("horizontalBar", {
    hover: {
      mode: "index",
      axis: "y"
    },
    scales: {
      xAxes: [{
        type: "linear",
        position: "bottom"
      }],
      yAxes: [{
        type: "category",
        position: "left",
        categoryPercentage: .8,
        barPercentage: .9,
        offset: !0,
        gridLines: {
          offsetGridLines: !0
        }
      }]
    },
    elements: {
      rectangle: {
        borderSkipped: "left"
      }
    },
    tooltips: {
      mode: "index",
      axis: "y"
    }
  });
  var Kt = jt.extend({
      _getValueScaleId: function _getValueScaleId() {
        return this.getMeta().xAxisID;
      },
      _getIndexScaleId: function _getIndexScaleId() {
        return this.getMeta().yAxisID;
      }
    }),
    Jt = ut.valueOrDefault,
    Qt = ut.options.resolve,
    te = ut.canvas._isPointInArea;
  function ee(t, e) {
    return Jt(t.showLine, e.showLines);
  }
  ot._set("line", {
    showLines: !0,
    spanGaps: !1,
    hover: {
      mode: "label"
    },
    scales: {
      xAxes: [{
        type: "category",
        id: "x-axis-0"
      }],
      yAxes: [{
        type: "linear",
        id: "y-axis-0"
      }]
    }
  });
  var ie = kt.extend({
      datasetElementType: Nt.Line,
      dataElementType: Nt.Point,
      update: function update(t) {
        var e,
          i,
          n = this,
          a = n.getMeta(),
          r = a.dataset,
          o = a.data || [],
          s = n.getScaleForId(a.yAxisID),
          l = n.getDataset(),
          u = ee(l, n.chart.options);
        for (u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = n.index, r._children = o, r._model = n._resolveLineOptions(r), r.pivot()), e = 0, i = o.length; e < i; ++e) n.updateElement(o[e], e, t);
        for (u && 0 !== r._model.tension && n.updateBezierControlPoints(), e = 0, i = o.length; e < i; ++e) o[e].pivot();
      },
      updateElement: function updateElement(t, e, i) {
        var n,
          a,
          r = this,
          o = r.getMeta(),
          s = t.custom || {},
          l = r.getDataset(),
          u = r.index,
          d = l.data[e],
          h = r.getScaleForId(o.yAxisID),
          c = r.getScaleForId(o.xAxisID),
          f = o.dataset._model,
          g = r._resolvePointOptions(t, e);
        n = c.getPixelForValue("object" == _typeof(d) ? d : NaN, e, u), a = i ? h.getBasePixel() : r.calculatePointY(d, e, u), t._xScale = c, t._yScale = h, t._options = g, t._datasetIndex = u, t._index = e, t._model = {
          x: n,
          y: a,
          skip: s.skip || isNaN(n) || isNaN(a),
          radius: g.radius,
          pointStyle: g.pointStyle,
          rotation: g.rotation,
          backgroundColor: g.backgroundColor,
          borderColor: g.borderColor,
          borderWidth: g.borderWidth,
          tension: Jt(s.tension, f ? f.tension : 0),
          steppedLine: !!f && f.steppedLine,
          hitRadius: g.hitRadius
        };
      },
      _resolvePointOptions: function _resolvePointOptions(t, e) {
        var i,
          n,
          a,
          r = this.chart,
          o = r.data.datasets[this.index],
          s = t.custom || {},
          l = r.options.elements.point,
          u = {},
          d = {
            chart: r,
            dataIndex: e,
            dataset: o,
            datasetIndex: this.index
          },
          h = {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation"
          },
          c = Object.keys(h);
        for (i = 0, n = c.length; i < n; ++i) u[a = c[i]] = Qt([s[a], o[h[a]], o[a], l[a]], d, e);
        return u;
      },
      _resolveLineOptions: function _resolveLineOptions(t) {
        var e,
          i,
          n,
          a = this.chart,
          r = a.data.datasets[this.index],
          o = t.custom || {},
          s = a.options,
          l = s.elements.line,
          u = {},
          d = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"];
        for (e = 0, i = d.length; e < i; ++e) u[n = d[e]] = Qt([o[n], r[n], l[n]]);
        return u.spanGaps = Jt(r.spanGaps, s.spanGaps), u.tension = Jt(r.lineTension, l.tension), u.steppedLine = Qt([o.steppedLine, r.steppedLine, l.stepped]), u;
      },
      calculatePointY: function calculatePointY(t, e, i) {
        var n,
          a,
          r,
          o = this.chart,
          s = this.getMeta(),
          l = this.getScaleForId(s.yAxisID),
          u = 0,
          d = 0;
        if (l.options.stacked) {
          for (n = 0; n < i; n++) if (a = o.data.datasets[n], "line" === (r = o.getDatasetMeta(n)).type && r.yAxisID === l.id && o.isDatasetVisible(n)) {
            var h = Number(l.getRightValue(a.data[e]));
            h < 0 ? d += h || 0 : u += h || 0;
          }
          var c = Number(l.getRightValue(t));
          return c < 0 ? l.getPixelForValue(d + c) : l.getPixelForValue(u + c);
        }
        return l.getPixelForValue(t);
      },
      updateBezierControlPoints: function updateBezierControlPoints() {
        var t,
          e,
          i,
          n,
          a = this.chart,
          r = this.getMeta(),
          o = r.dataset._model,
          s = a.chartArea,
          l = r.data || [];
        function u(t, e, i) {
          return Math.max(Math.min(t, i), e);
        }
        if (o.spanGaps && (l = l.filter(function (t) {
          return !t._model.skip;
        })), "monotone" === o.cubicInterpolationMode) ut.splineCurveMonotone(l);else for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, n = ut.splineCurve(ut.previousItem(l, t)._model, i, ut.nextItem(l, t)._model, o.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
        if (a.options.elements.line.capBezierPoints) for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, te(i, s) && (t > 0 && te(l[t - 1]._model, s) && (i.controlPointPreviousX = u(i.controlPointPreviousX, s.left, s.right), i.controlPointPreviousY = u(i.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && te(l[t + 1]._model, s) && (i.controlPointNextX = u(i.controlPointNextX, s.left, s.right), i.controlPointNextY = u(i.controlPointNextY, s.top, s.bottom)));
      },
      draw: function draw() {
        var t,
          e = this.chart,
          i = this.getMeta(),
          n = i.data || [],
          a = e.chartArea,
          r = n.length,
          o = 0;
        for (ee(this.getDataset(), e.options) && (t = (i.dataset._model.borderWidth || 0) / 2, ut.canvas.clipArea(e.ctx, {
          left: a.left,
          right: a.right,
          top: a.top - t,
          bottom: a.bottom + t
        }), i.dataset.draw(), ut.canvas.unclipArea(e.ctx)); o < r; ++o) n[o].draw(a);
      },
      setHoverStyle: function setHoverStyle(t) {
        var e = t._model,
          i = t._options,
          n = ut.getHoverColor;
        t.$previousStyle = {
          backgroundColor: e.backgroundColor,
          borderColor: e.borderColor,
          borderWidth: e.borderWidth,
          radius: e.radius
        }, e.backgroundColor = Jt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Jt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Jt(i.hoverBorderWidth, i.borderWidth), e.radius = Jt(i.hoverRadius, i.radius);
      }
    }),
    ne = ut.options.resolve;
  ot._set("polarArea", {
    scale: {
      type: "radialLinear",
      angleLines: {
        display: !1
      },
      gridLines: {
        circular: !0
      },
      pointLabels: {
        display: !1
      },
      ticks: {
        beginAtZero: !0
      }
    },
    animation: {
      animateRotate: !0,
      animateScale: !0
    },
    startAngle: -.5 * Math.PI,
    legendCallback: function legendCallback(t) {
      var e = [];
      e.push('<ul class="' + t.id + '-legend">');
      var i = t.data,
        n = i.datasets,
        a = i.labels;
      if (n.length) for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
      return e.push("</ul>"), e.join("");
    },
    legend: {
      labels: {
        generateLabels: function generateLabels(t) {
          var e = t.data;
          return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
            var a = t.getDatasetMeta(0),
              r = e.datasets[0],
              o = a.data[n].custom || {},
              s = t.options.elements.arc;
            return {
              text: i,
              fillStyle: ne([o.backgroundColor, r.backgroundColor, s.backgroundColor], void 0, n),
              strokeStyle: ne([o.borderColor, r.borderColor, s.borderColor], void 0, n),
              lineWidth: ne([o.borderWidth, r.borderWidth, s.borderWidth], void 0, n),
              hidden: isNaN(r.data[n]) || a.data[n].hidden,
              index: n
            };
          }) : [];
        }
      },
      onClick: function onClick(t, e) {
        var i,
          n,
          a,
          r = e.index,
          o = this.chart;
        for (i = 0, n = (o.data.datasets || []).length; i < n; ++i) (a = o.getDatasetMeta(i)).data[r].hidden = !a.data[r].hidden;
        o.update();
      }
    },
    tooltips: {
      callbacks: {
        title: function title() {
          return "";
        },
        label: function label(t, e) {
          return e.labels[t.index] + ": " + t.yLabel;
        }
      }
    }
  });
  var ae = kt.extend({
    dataElementType: Nt.Arc,
    linkScales: ut.noop,
    update: function update(t) {
      var e,
        i,
        n,
        a = this,
        r = a.getDataset(),
        o = a.getMeta(),
        s = a.chart.options.startAngle || 0,
        l = a._starts = [],
        u = a._angles = [],
        d = o.data;
      for (a._updateRadius(), o.count = a.countVisibleElements(), e = 0, i = r.data.length; e < i; e++) l[e] = s, n = a._computeAngle(e), u[e] = n, s += n;
      for (e = 0, i = d.length; e < i; ++e) d[e]._options = a._resolveElementOptions(d[e], e), a.updateElement(d[e], e, t);
    },
    _updateRadius: function _updateRadius() {
      var t = this,
        e = t.chart,
        i = e.chartArea,
        n = e.options,
        a = Math.min(i.right - i.left, i.bottom - i.top);
      e.outerRadius = Math.max(a / 2, 0), e.innerRadius = Math.max(n.cutoutPercentage ? e.outerRadius / 100 * n.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength;
    },
    updateElement: function updateElement(t, e, i) {
      var n = this,
        a = n.chart,
        r = n.getDataset(),
        o = a.options,
        s = o.animation,
        l = a.scale,
        u = a.data.labels,
        d = l.xCenter,
        h = l.yCenter,
        c = o.startAngle,
        f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
        g = n._starts[e],
        m = g + (t.hidden ? 0 : n._angles[e]),
        p = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
        v = t._options || {};
      ut.extend(t, {
        _datasetIndex: n.index,
        _index: e,
        _scale: l,
        _model: {
          backgroundColor: v.backgroundColor,
          borderColor: v.borderColor,
          borderWidth: v.borderWidth,
          borderAlign: v.borderAlign,
          x: d,
          y: h,
          innerRadius: 0,
          outerRadius: i ? p : f,
          startAngle: i && s.animateRotate ? c : g,
          endAngle: i && s.animateRotate ? c : m,
          label: ut.valueAtIndexOrDefault(u, e, u[e])
        }
      }), t.pivot();
    },
    countVisibleElements: function countVisibleElements() {
      var t = this.getDataset(),
        e = this.getMeta(),
        i = 0;
      return ut.each(e.data, function (e, n) {
        isNaN(t.data[n]) || e.hidden || i++;
      }), i;
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
        i = t._options,
        n = ut.getHoverColor,
        a = ut.valueOrDefault;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth
      }, e.backgroundColor = a(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = a(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = a(i.hoverBorderWidth, i.borderWidth);
    },
    _resolveElementOptions: function _resolveElementOptions(t, e) {
      var i,
        n,
        a,
        r = this.chart,
        o = this.getDataset(),
        s = t.custom || {},
        l = r.options.elements.arc,
        u = {},
        d = {
          chart: r,
          dataIndex: e,
          dataset: o,
          datasetIndex: this.index
        },
        h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
      for (i = 0, n = h.length; i < n; ++i) u[a = h[i]] = ne([s[a], o[a], l[a]], d, e);
      return u;
    },
    _computeAngle: function _computeAngle(t) {
      var e = this,
        i = this.getMeta().count,
        n = e.getDataset(),
        a = e.getMeta();
      if (isNaN(n.data[t]) || a.data[t].hidden) return 0;
      var r = {
        chart: e.chart,
        dataIndex: t,
        dataset: n,
        datasetIndex: e.index
      };
      return ne([e.chart.options.elements.arc.angle, 2 * Math.PI / i], r, t);
    }
  });
  ot._set("pie", ut.clone(ot.doughnut)), ot._set("pie", {
    cutoutPercentage: 0
  });
  var re = Xt,
    oe = ut.valueOrDefault,
    se = ut.options.resolve;
  ot._set("radar", {
    scale: {
      type: "radialLinear"
    },
    elements: {
      line: {
        tension: 0
      }
    }
  });
  var le = kt.extend({
    datasetElementType: Nt.Line,
    dataElementType: Nt.Point,
    linkScales: ut.noop,
    update: function update(t) {
      var e,
        i,
        n = this,
        a = n.getMeta(),
        r = a.dataset,
        o = a.data || [],
        s = n.chart.scale,
        l = n.getDataset();
      for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = n.index, r._children = o, r._loop = !0, r._model = n._resolveLineOptions(r), r.pivot(), e = 0, i = o.length; e < i; ++e) n.updateElement(o[e], e, t);
      for (n.updateBezierControlPoints(), e = 0, i = o.length; e < i; ++e) o[e].pivot();
    },
    updateElement: function updateElement(t, e, i) {
      var n = this,
        a = t.custom || {},
        r = n.getDataset(),
        o = n.chart.scale,
        s = o.getPointPositionForValue(e, r.data[e]),
        l = n._resolvePointOptions(t, e),
        u = n.getMeta().dataset._model,
        d = i ? o.xCenter : s.x,
        h = i ? o.yCenter : s.y;
      t._scale = o, t._options = l, t._datasetIndex = n.index, t._index = e, t._model = {
        x: d,
        y: h,
        skip: a.skip || isNaN(d) || isNaN(h),
        radius: l.radius,
        pointStyle: l.pointStyle,
        rotation: l.rotation,
        backgroundColor: l.backgroundColor,
        borderColor: l.borderColor,
        borderWidth: l.borderWidth,
        tension: oe(a.tension, u ? u.tension : 0),
        hitRadius: l.hitRadius
      };
    },
    _resolvePointOptions: function _resolvePointOptions(t, e) {
      var i,
        n,
        a,
        r = this.chart,
        o = r.data.datasets[this.index],
        s = t.custom || {},
        l = r.options.elements.point,
        u = {},
        d = {
          chart: r,
          dataIndex: e,
          dataset: o,
          datasetIndex: this.index
        },
        h = {
          backgroundColor: "pointBackgroundColor",
          borderColor: "pointBorderColor",
          borderWidth: "pointBorderWidth",
          hitRadius: "pointHitRadius",
          hoverBackgroundColor: "pointHoverBackgroundColor",
          hoverBorderColor: "pointHoverBorderColor",
          hoverBorderWidth: "pointHoverBorderWidth",
          hoverRadius: "pointHoverRadius",
          pointStyle: "pointStyle",
          radius: "pointRadius",
          rotation: "pointRotation"
        },
        c = Object.keys(h);
      for (i = 0, n = c.length; i < n; ++i) u[a = c[i]] = se([s[a], o[h[a]], o[a], l[a]], d, e);
      return u;
    },
    _resolveLineOptions: function _resolveLineOptions(t) {
      var e,
        i,
        n,
        a = this.chart,
        r = a.data.datasets[this.index],
        o = t.custom || {},
        s = a.options.elements.line,
        l = {},
        u = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"];
      for (e = 0, i = u.length; e < i; ++e) l[n = u[e]] = se([o[n], r[n], s[n]]);
      return l.tension = oe(r.lineTension, s.tension), l;
    },
    updateBezierControlPoints: function updateBezierControlPoints() {
      var t,
        e,
        i,
        n,
        a = this.getMeta(),
        r = this.chart.chartArea,
        o = a.data || [];
      function s(t, e, i) {
        return Math.max(Math.min(t, i), e);
      }
      for (t = 0, e = o.length; t < e; ++t) i = o[t]._model, n = ut.splineCurve(ut.previousItem(o, t, !0)._model, i, ut.nextItem(o, t, !0)._model, i.tension), i.controlPointPreviousX = s(n.previous.x, r.left, r.right), i.controlPointPreviousY = s(n.previous.y, r.top, r.bottom), i.controlPointNextX = s(n.next.x, r.left, r.right), i.controlPointNextY = s(n.next.y, r.top, r.bottom);
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
        i = t._options,
        n = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
        radius: e.radius
      }, e.backgroundColor = oe(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = oe(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = oe(i.hoverBorderWidth, i.borderWidth), e.radius = oe(i.hoverRadius, i.radius);
    }
  });
  ot._set("scatter", {
    hover: {
      mode: "single"
    },
    scales: {
      xAxes: [{
        id: "x-axis-1",
        type: "linear",
        position: "bottom"
      }],
      yAxes: [{
        id: "y-axis-1",
        type: "linear",
        position: "left"
      }]
    },
    showLines: !1,
    tooltips: {
      callbacks: {
        title: function title() {
          return "";
        },
        label: function label(t) {
          return "(" + t.xLabel + ", " + t.yLabel + ")";
        }
      }
    }
  });
  var ue = {
    bar: jt,
    bubble: qt,
    doughnut: Xt,
    horizontalBar: Kt,
    line: ie,
    polarArea: ae,
    pie: re,
    radar: le,
    scatter: ie
  };
  function de(t, e) {
    return t["native"] ? {
      x: t.x,
      y: t.y
    } : ut.getRelativePosition(t, e);
  }
  function he(t, e) {
    var i, n, a, r, o;
    for (n = 0, r = t.data.datasets.length; n < r; ++n) if (t.isDatasetVisible(n)) for (a = 0, o = (i = t.getDatasetMeta(n)).data.length; a < o; ++a) {
      var s = i.data[a];
      s._view.skip || e(s);
    }
  }
  function ce(t, e) {
    var i = [];
    return he(t, function (t) {
      t.inRange(e.x, e.y) && i.push(t);
    }), i;
  }
  function fe(t, e, i, n) {
    var a = Number.POSITIVE_INFINITY,
      r = [];
    return he(t, function (t) {
      if (!i || t.inRange(e.x, e.y)) {
        var o = t.getCenterPoint(),
          s = n(e, o);
        s < a ? (r = [t], a = s) : s === a && r.push(t);
      }
    }), r;
  }
  function ge(t) {
    var e = -1 !== t.indexOf("x"),
      i = -1 !== t.indexOf("y");
    return function (t, n) {
      var a = e ? Math.abs(t.x - n.x) : 0,
        r = i ? Math.abs(t.y - n.y) : 0;
      return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
    };
  }
  function me(t, e, i) {
    var n = de(e, t);
    i.axis = i.axis || "x";
    var a = ge(i.axis),
      r = i.intersect ? ce(t, n) : fe(t, n, !1, a),
      o = [];
    return r.length ? (t.data.datasets.forEach(function (e, i) {
      if (t.isDatasetVisible(i)) {
        var n = t.getDatasetMeta(i).data[r[0]._index];
        n && !n._view.skip && o.push(n);
      }
    }), o) : [];
  }
  var pe = {
    modes: {
      single: function single(t, e) {
        var i = de(e, t),
          n = [];
        return he(t, function (t) {
          if (t.inRange(i.x, i.y)) return n.push(t), n;
        }), n.slice(0, 1);
      },
      label: me,
      index: me,
      dataset: function dataset(t, e, i) {
        var n = de(e, t);
        i.axis = i.axis || "xy";
        var a = ge(i.axis),
          r = i.intersect ? ce(t, n) : fe(t, n, !1, a);
        return r.length > 0 && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r;
      },
      "x-axis": function xAxis(t, e) {
        return me(t, e, {
          intersect: !1
        });
      },
      point: function point(t, e) {
        return ce(t, de(e, t));
      },
      nearest: function nearest(t, e, i) {
        var n = de(e, t);
        i.axis = i.axis || "xy";
        var a = ge(i.axis);
        return fe(t, n, i.intersect, a);
      },
      x: function x(t, e, i) {
        var n = de(e, t),
          a = [],
          r = !1;
        return he(t, function (t) {
          t.inXRange(n.x) && a.push(t), t.inRange(n.x, n.y) && (r = !0);
        }), i.intersect && !r && (a = []), a;
      },
      y: function y(t, e, i) {
        var n = de(e, t),
          a = [],
          r = !1;
        return he(t, function (t) {
          t.inYRange(n.y) && a.push(t), t.inRange(n.x, n.y) && (r = !0);
        }), i.intersect && !r && (a = []), a;
      }
    }
  };
  function ve(t, e) {
    return ut.where(t, function (t) {
      return t.position === e;
    });
  }
  function ye(t, e) {
    t.forEach(function (t, e) {
      return t._tmpIndex_ = e, t;
    }), t.sort(function (t, i) {
      var n = e ? i : t,
        a = e ? t : i;
      return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight;
    }), t.forEach(function (t) {
      delete t._tmpIndex_;
    });
  }
  function be(t, e) {
    ut.each(t, function (t) {
      e[t.position] += t.isHorizontal() ? t.height : t.width;
    });
  }
  ot._set("global", {
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
  });
  var xe = {
    defaults: {},
    addBox: function addBox(t, e) {
      t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
    },
    removeBox: function removeBox(t, e) {
      var i = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== i && t.boxes.splice(i, 1);
    },
    configure: function configure(t, e, i) {
      for (var n, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) n = a[o], i.hasOwnProperty(n) && (e[n] = i[n]);
    },
    update: function update(t, e, i) {
      if (t) {
        var n = t.options.layout || {},
          a = ut.options.toPadding(n.padding),
          r = a.left,
          o = a.right,
          s = a.top,
          l = a.bottom,
          u = ve(t.boxes, "left"),
          d = ve(t.boxes, "right"),
          h = ve(t.boxes, "top"),
          c = ve(t.boxes, "bottom"),
          f = ve(t.boxes, "chartArea");
        ye(u, !0), ye(d, !1), ye(h, !0), ye(c, !1);
        var g,
          m = u.concat(d),
          p = h.concat(c),
          v = m.concat(p),
          y = e - r - o,
          b = i - s - l,
          x = (e - y / 2) / m.length,
          _ = y,
          k = b,
          w = {
            top: s,
            left: r,
            bottom: l,
            right: o
          },
          M = [];
        ut.each(v, function (t) {
          var e,
            i = t.isHorizontal();
          i ? (e = t.update(t.fullWidth ? y : _, b / 2), k -= e.height) : (e = t.update(x, k), _ -= e.width), M.push({
            horizontal: i,
            width: e.width,
            box: t
          });
        }), g = function (t) {
          var e = 0,
            i = 0,
            n = 0,
            a = 0;
          return ut.each(t, function (t) {
            if (t.getPadding) {
              var r = t.getPadding();
              e = Math.max(e, r.top), i = Math.max(i, r.left), n = Math.max(n, r.bottom), a = Math.max(a, r.right);
            }
          }), {
            top: e,
            left: i,
            bottom: n,
            right: a
          };
        }(v), ut.each(m, I), be(m, w), ut.each(p, I), be(p, w), ut.each(m, function (t) {
          var e = ut.findNextWhere(M, function (e) {
              return e.box === t;
            }),
            i = {
              left: 0,
              right: 0,
              top: w.top,
              bottom: w.bottom
            };
          e && t.update(e.width, k, i);
        }), be(v, w = {
          top: s,
          left: r,
          bottom: l,
          right: o
        });
        var S = Math.max(g.left - w.left, 0);
        w.left += S, w.right += Math.max(g.right - w.right, 0);
        var D = Math.max(g.top - w.top, 0);
        w.top += D, w.bottom += Math.max(g.bottom - w.bottom, 0);
        var C = i - w.top - w.bottom,
          P = e - w.left - w.right;
        P === _ && C === k || (ut.each(m, function (t) {
          t.height = C;
        }), ut.each(p, function (t) {
          t.fullWidth || (t.width = P);
        }), k = C, _ = P);
        var T = r + S,
          O = s + D;
        ut.each(u.concat(h), A), T += _, O += k, ut.each(d, A), ut.each(c, A), t.chartArea = {
          left: w.left,
          top: w.top,
          right: w.left + _,
          bottom: w.top + k
        }, ut.each(f, function (e) {
          e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(_, k);
        });
      }
      function I(t) {
        var e = ut.findNextWhere(M, function (e) {
          return e.box === t;
        });
        if (e) if (e.horizontal) {
          var i = {
            left: Math.max(w.left, g.left),
            right: Math.max(w.right, g.right),
            top: 0,
            bottom: 0
          };
          t.update(t.fullWidth ? y : _, b / 2, i);
        } else t.update(e.width, k);
      }
      function A(t) {
        t.isHorizontal() ? (t.left = t.fullWidth ? r : w.left, t.right = t.fullWidth ? e - o : w.left + _, t.top = O, t.bottom = O + t.height, O = t.bottom) : (t.left = T, t.right = T + t.width, t.top = w.top, t.bottom = w.top + k, T = t.right);
      }
    }
  };
  "undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self && self;
  function _e() {
    throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs");
  }
  var ke,
    we = (ke = Object.freeze({
      "default": "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"
    })) && ke["default"] || ke,
    Me = "$chartjs",
    Se = "chartjs-size-monitor",
    De = "chartjs-render-monitor",
    Ce = "chartjs-render-animation",
    Pe = ["animationstart", "webkitAnimationStart"],
    Te = {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
      pointerenter: "mouseenter",
      pointerdown: "mousedown",
      pointermove: "mousemove",
      pointerup: "mouseup",
      pointerleave: "mouseout",
      pointerout: "mouseout"
    };
  function Oe(t, e) {
    var i = ut.getStyle(t, e),
      n = i && i.match(/^(\d+)(\.\d+)?px$/);
    return n ? Number(n[1]) : void 0;
  }
  var Ie = !!function () {
    var t = !1;
    try {
      var e = Object.defineProperty({}, "passive", {
        get: function get() {
          t = !0;
        }
      });
      window.addEventListener("e", null, e);
    } catch (t) {}
    return t;
  }() && {
    passive: !0
  };
  function Ae(t, e, i) {
    t.addEventListener(e, i, Ie);
  }
  function Fe(t, e, i) {
    t.removeEventListener(e, i, Ie);
  }
  function Re(t, e, i, n, a) {
    return {
      type: t,
      chart: e,
      "native": a || null,
      x: void 0 !== i ? i : null,
      y: void 0 !== n ? n : null
    };
  }
  function Le(t) {
    var e = document.createElement("div");
    return e.className = t || "", e;
  }
  function We(t, e, i) {
    var n,
      a,
      r,
      o,
      s = t[Me] || (t[Me] = {}),
      l = s.resizer = function (t) {
        var e = Le(Se),
          i = Le(Se + "-expand"),
          n = Le(Se + "-shrink");
        i.appendChild(Le()), n.appendChild(Le()), e.appendChild(i), e.appendChild(n), e._reset = function () {
          i.scrollLeft = 1e6, i.scrollTop = 1e6, n.scrollLeft = 1e6, n.scrollTop = 1e6;
        };
        var a = function a() {
          e._reset(), t();
        };
        return Ae(i, "scroll", a.bind(i, "expand")), Ae(n, "scroll", a.bind(n, "shrink")), e;
      }((n = function n() {
        if (s.resizer) {
          var n = i.options.maintainAspectRatio && t.parentNode,
            a = n ? n.clientWidth : 0;
          e(Re("resize", i)), n && n.clientWidth < a && i.canvas && e(Re("resize", i));
        }
      }, r = !1, o = [], function () {
        o = Array.prototype.slice.call(arguments), a = a || this, r || (r = !0, ut.requestAnimFrame.call(window, function () {
          r = !1, n.apply(a, o);
        }));
      }));
    !function (t, e) {
      var i = t[Me] || (t[Me] = {}),
        n = i.renderProxy = function (t) {
          t.animationName === Ce && e();
        };
      ut.each(Pe, function (e) {
        Ae(t, e, n);
      }), i.reflow = !!t.offsetParent, t.classList.add(De);
    }(t, function () {
      if (s.resizer) {
        var e = t.parentNode;
        e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset();
      }
    });
  }
  function Ye(t) {
    var e = t[Me] || {},
      i = e.resizer;
    delete e.resizer, function (t) {
      var e = t[Me] || {},
        i = e.renderProxy;
      i && (ut.each(Pe, function (e) {
        Fe(t, e, i);
      }), delete e.renderProxy), t.classList.remove(De);
    }(t), i && i.parentNode && i.parentNode.removeChild(i);
  }
  var Ne = {
    disableCSSInjection: !1,
    _enabled: "undefined" != typeof window && "undefined" != typeof document,
    _ensureLoaded: function _ensureLoaded() {
      var t, e, i;
      this._loaded || (this._loaded = !0, this.disableCSSInjection || (e = we, i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))));
    },
    acquireContext: function acquireContext(t, e) {
      "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
      var i = t && t.getContext && t.getContext("2d");
      return this._ensureLoaded(), i && i.canvas === t ? (function (t, e) {
        var i = t.style,
          n = t.getAttribute("height"),
          a = t.getAttribute("width");
        if (t[Me] = {
          initial: {
            height: n,
            width: a,
            style: {
              display: i.display,
              height: i.height,
              width: i.width
            }
          }
        }, i.display = i.display || "block", null === a || "" === a) {
          var r = Oe(t, "width");
          void 0 !== r && (t.width = r);
        }
        if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
          var o = Oe(t, "height");
          void 0 !== r && (t.height = o);
        }
      }(t, e), i) : null;
    },
    releaseContext: function releaseContext(t) {
      var e = t.canvas;
      if (e[Me]) {
        var i = e[Me].initial;
        ["height", "width"].forEach(function (t) {
          var n = i[t];
          ut.isNullOrUndef(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
        }), ut.each(i.style || {}, function (t, i) {
          e.style[i] = t;
        }), e.width = e.width, delete e[Me];
      }
    },
    addEventListener: function addEventListener(t, e, i) {
      var n = t.canvas;
      if ("resize" !== e) {
        var a = i[Me] || (i[Me] = {});
        Ae(n, e, (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function (e) {
          i(function (t, e) {
            var i = Te[t.type] || t.type,
              n = ut.getRelativePosition(t, e);
            return Re(i, e, n.x, n.y, t);
          }(e, t));
        });
      } else We(n, i, t);
    },
    removeEventListener: function removeEventListener(t, e, i) {
      var n = t.canvas;
      if ("resize" !== e) {
        var a = ((i[Me] || {}).proxies || {})[t.id + "_" + e];
        a && Fe(n, e, a);
      } else Ye(n);
    }
  };
  ut.addEvent = Ae, ut.removeEvent = Fe;
  var ze = Ne._enabled ? Ne : {
      acquireContext: function acquireContext(t) {
        return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
      }
    },
    Ve = ut.extend({
      initialize: function initialize() {},
      acquireContext: function acquireContext() {},
      releaseContext: function releaseContext() {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {}
    }, ze);
  ot._set("global", {
    plugins: {}
  });
  var He = {
      _plugins: [],
      _cacheId: 0,
      register: function register(t) {
        var e = this._plugins;
        [].concat(t).forEach(function (t) {
          -1 === e.indexOf(t) && e.push(t);
        }), this._cacheId++;
      },
      unregister: function unregister(t) {
        var e = this._plugins;
        [].concat(t).forEach(function (t) {
          var i = e.indexOf(t);
          -1 !== i && e.splice(i, 1);
        }), this._cacheId++;
      },
      clear: function clear() {
        this._plugins = [], this._cacheId++;
      },
      count: function count() {
        return this._plugins.length;
      },
      getAll: function getAll() {
        return this._plugins;
      },
      notify: function notify(t, e, i) {
        var n,
          a,
          r,
          o,
          s,
          l = this.descriptors(t),
          u = l.length;
        for (n = 0; n < u; ++n) if ("function" == typeof (s = (r = (a = l[n]).plugin)[e]) && ((o = [t].concat(i || [])).push(a.options), !1 === s.apply(r, o))) return !1;
        return !0;
      },
      descriptors: function descriptors(t) {
        var e = t.$plugins || (t.$plugins = {});
        if (e.id === this._cacheId) return e.descriptors;
        var i = [],
          n = [],
          a = t && t.config || {},
          r = a.options && a.options.plugins || {};
        return this._plugins.concat(a.plugins || []).forEach(function (t) {
          if (-1 === i.indexOf(t)) {
            var e = t.id,
              a = r[e];
            !1 !== a && (!0 === a && (a = ut.clone(ot.global.plugins[e])), i.push(t), n.push({
              plugin: t,
              options: a || {}
            }));
          }
        }), e.descriptors = n, e.id = this._cacheId, n;
      },
      _invalidate: function _invalidate(t) {
        delete t.$plugins;
      }
    },
    Ee = {
      constructors: {},
      defaults: {},
      registerScaleType: function registerScaleType(t, e, i) {
        this.constructors[t] = e, this.defaults[t] = ut.clone(i);
      },
      getScaleConstructor: function getScaleConstructor(t) {
        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
      },
      getScaleDefaults: function getScaleDefaults(t) {
        return this.defaults.hasOwnProperty(t) ? ut.merge({}, [ot.scale, this.defaults[t]]) : {};
      },
      updateScaleDefaults: function updateScaleDefaults(t, e) {
        this.defaults.hasOwnProperty(t) && (this.defaults[t] = ut.extend(this.defaults[t], e));
      },
      addScalesToLayout: function addScalesToLayout(t) {
        ut.each(t.scales, function (e) {
          e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, xe.addBox(t, e);
        });
      }
    },
    Be = ut.valueOrDefault;
  ot._set("global", {
    tooltips: {
      enabled: !0,
      custom: null,
      mode: "nearest",
      position: "average",
      intersect: !0,
      backgroundColor: "rgba(0,0,0,0.8)",
      titleFontStyle: "bold",
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleFontColor: "#fff",
      titleAlign: "left",
      bodySpacing: 2,
      bodyFontColor: "#fff",
      bodyAlign: "left",
      footerFontStyle: "bold",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFontColor: "#fff",
      footerAlign: "left",
      yPadding: 6,
      xPadding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      multiKeyBackground: "#fff",
      displayColors: !0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      callbacks: {
        beforeTitle: ut.noop,
        title: function title(t, e) {
          var i = "",
            n = e.labels,
            a = n ? n.length : 0;
          if (t.length > 0) {
            var r = t[0];
            r.label ? i = r.label : r.xLabel ? i = r.xLabel : a > 0 && r.index < a && (i = n[r.index]);
          }
          return i;
        },
        afterTitle: ut.noop,
        beforeBody: ut.noop,
        beforeLabel: ut.noop,
        label: function label(t, e) {
          var i = e.datasets[t.datasetIndex].label || "";
          return i && (i += ": "), ut.isNullOrUndef(t.value) ? i += t.yLabel : i += t.value, i;
        },
        labelColor: function labelColor(t, e) {
          var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
          return {
            borderColor: i.borderColor,
            backgroundColor: i.backgroundColor
          };
        },
        labelTextColor: function labelTextColor() {
          return this._options.bodyFontColor;
        },
        afterLabel: ut.noop,
        afterBody: ut.noop,
        beforeFooter: ut.noop,
        footer: ut.noop,
        afterFooter: ut.noop
      }
    }
  });
  var je = {
    average: function average(t) {
      if (!t.length) return !1;
      var e,
        i,
        n = 0,
        a = 0,
        r = 0;
      for (e = 0, i = t.length; e < i; ++e) {
        var o = t[e];
        if (o && o.hasValue()) {
          var s = o.tooltipPosition();
          n += s.x, a += s.y, ++r;
        }
      }
      return {
        x: n / r,
        y: a / r
      };
    },
    nearest: function nearest(t, e) {
      var i,
        n,
        a,
        r = e.x,
        o = e.y,
        s = Number.POSITIVE_INFINITY;
      for (i = 0, n = t.length; i < n; ++i) {
        var l = t[i];
        if (l && l.hasValue()) {
          var u = l.getCenterPoint(),
            d = ut.distanceBetweenPoints(e, u);
          d < s && (s = d, a = l);
        }
      }
      if (a) {
        var h = a.tooltipPosition();
        r = h.x, o = h.y;
      }
      return {
        x: r,
        y: o
      };
    }
  };
  function Ue(t, e) {
    return e && (ut.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }
  function Ge(t) {
    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
  }
  function qe(t) {
    var e = ot.global;
    return {
      xPadding: t.xPadding,
      yPadding: t.yPadding,
      xAlign: t.xAlign,
      yAlign: t.yAlign,
      bodyFontColor: t.bodyFontColor,
      _bodyFontFamily: Be(t.bodyFontFamily, e.defaultFontFamily),
      _bodyFontStyle: Be(t.bodyFontStyle, e.defaultFontStyle),
      _bodyAlign: t.bodyAlign,
      bodyFontSize: Be(t.bodyFontSize, e.defaultFontSize),
      bodySpacing: t.bodySpacing,
      titleFontColor: t.titleFontColor,
      _titleFontFamily: Be(t.titleFontFamily, e.defaultFontFamily),
      _titleFontStyle: Be(t.titleFontStyle, e.defaultFontStyle),
      titleFontSize: Be(t.titleFontSize, e.defaultFontSize),
      _titleAlign: t.titleAlign,
      titleSpacing: t.titleSpacing,
      titleMarginBottom: t.titleMarginBottom,
      footerFontColor: t.footerFontColor,
      _footerFontFamily: Be(t.footerFontFamily, e.defaultFontFamily),
      _footerFontStyle: Be(t.footerFontStyle, e.defaultFontStyle),
      footerFontSize: Be(t.footerFontSize, e.defaultFontSize),
      _footerAlign: t.footerAlign,
      footerSpacing: t.footerSpacing,
      footerMarginTop: t.footerMarginTop,
      caretSize: t.caretSize,
      cornerRadius: t.cornerRadius,
      backgroundColor: t.backgroundColor,
      opacity: 0,
      legendColorBackground: t.multiKeyBackground,
      displayColors: t.displayColors,
      borderColor: t.borderColor,
      borderWidth: t.borderWidth
    };
  }
  function Ze(t, e) {
    return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding;
  }
  function $e(t) {
    return Ue([], Ge(t));
  }
  var Xe = gt.extend({
      initialize: function initialize() {
        this._model = qe(this._options), this._lastActive = [];
      },
      getTitle: function getTitle() {
        var t = this._options.callbacks,
          e = t.beforeTitle.apply(this, arguments),
          i = t.title.apply(this, arguments),
          n = t.afterTitle.apply(this, arguments),
          a = [];
        return a = Ue(a, Ge(e)), a = Ue(a, Ge(i)), a = Ue(a, Ge(n));
      },
      getBeforeBody: function getBeforeBody() {
        return $e(this._options.callbacks.beforeBody.apply(this, arguments));
      },
      getBody: function getBody(t, e) {
        var i = this,
          n = i._options.callbacks,
          a = [];
        return ut.each(t, function (t) {
          var r = {
            before: [],
            lines: [],
            after: []
          };
          Ue(r.before, Ge(n.beforeLabel.call(i, t, e))), Ue(r.lines, n.label.call(i, t, e)), Ue(r.after, Ge(n.afterLabel.call(i, t, e))), a.push(r);
        }), a;
      },
      getAfterBody: function getAfterBody() {
        return $e(this._options.callbacks.afterBody.apply(this, arguments));
      },
      getFooter: function getFooter() {
        var t = this._options.callbacks,
          e = t.beforeFooter.apply(this, arguments),
          i = t.footer.apply(this, arguments),
          n = t.afterFooter.apply(this, arguments),
          a = [];
        return a = Ue(a, Ge(e)), a = Ue(a, Ge(i)), a = Ue(a, Ge(n));
      },
      update: function update(t) {
        var e,
          i,
          n,
          a,
          r,
          o,
          s,
          l,
          u,
          d,
          h = this,
          c = h._options,
          f = h._model,
          g = h._model = qe(c),
          m = h._active,
          p = h._data,
          v = {
            xAlign: f.xAlign,
            yAlign: f.yAlign
          },
          y = {
            x: f.x,
            y: f.y
          },
          b = {
            width: f.width,
            height: f.height
          },
          x = {
            x: f.caretX,
            y: f.caretY
          };
        if (m.length) {
          g.opacity = 1;
          var _ = [],
            k = [];
          x = je[c.position].call(h, m, h._eventPosition);
          var w = [];
          for (e = 0, i = m.length; e < i; ++e) w.push((n = m[e], a = void 0, r = void 0, o = void 0, s = void 0, l = void 0, u = void 0, d = void 0, a = n._xScale, r = n._yScale || n._scale, o = n._index, s = n._datasetIndex, l = n._chart.getDatasetMeta(s).controller, u = l._getIndexScale(), d = l._getValueScale(), {
            xLabel: a ? a.getLabelForIndex(o, s) : "",
            yLabel: r ? r.getLabelForIndex(o, s) : "",
            label: u ? "" + u.getLabelForIndex(o, s) : "",
            value: d ? "" + d.getLabelForIndex(o, s) : "",
            index: o,
            datasetIndex: s,
            x: n._model.x,
            y: n._model.y
          }));
          c.filter && (w = w.filter(function (t) {
            return c.filter(t, p);
          })), c.itemSort && (w = w.sort(function (t, e) {
            return c.itemSort(t, e, p);
          })), ut.each(w, function (t) {
            _.push(c.callbacks.labelColor.call(h, t, h._chart)), k.push(c.callbacks.labelTextColor.call(h, t, h._chart));
          }), g.title = h.getTitle(w, p), g.beforeBody = h.getBeforeBody(w, p), g.body = h.getBody(w, p), g.afterBody = h.getAfterBody(w, p), g.footer = h.getFooter(w, p), g.x = x.x, g.y = x.y, g.caretPadding = c.caretPadding, g.labelColors = _, g.labelTextColors = k, g.dataPoints = w, b = function (t, e) {
            var i = t._chart.ctx,
              n = 2 * e.yPadding,
              a = 0,
              r = e.body,
              o = r.reduce(function (t, e) {
                return t + e.before.length + e.lines.length + e.after.length;
              }, 0);
            o += e.beforeBody.length + e.afterBody.length;
            var s = e.title.length,
              l = e.footer.length,
              u = e.titleFontSize,
              d = e.bodyFontSize,
              h = e.footerFontSize;
            n += s * u, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += o * d, n += o ? (o - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * h, n += l ? (l - 1) * e.footerSpacing : 0;
            var c = 0,
              f = function f(t) {
                a = Math.max(a, i.measureText(t).width + c);
              };
            return i.font = ut.fontString(u, e._titleFontStyle, e._titleFontFamily), ut.each(e.title, f), i.font = ut.fontString(d, e._bodyFontStyle, e._bodyFontFamily), ut.each(e.beforeBody.concat(e.afterBody), f), c = e.displayColors ? d + 2 : 0, ut.each(r, function (t) {
              ut.each(t.before, f), ut.each(t.lines, f), ut.each(t.after, f);
            }), c = 0, i.font = ut.fontString(h, e._footerFontStyle, e._footerFontFamily), ut.each(e.footer, f), {
              width: a += 2 * e.xPadding,
              height: n
            };
          }(this, g), y = function (t, e, i, n) {
            var a = t.x,
              r = t.y,
              o = t.caretSize,
              s = t.caretPadding,
              l = t.cornerRadius,
              u = i.xAlign,
              d = i.yAlign,
              h = o + s,
              c = l + s;
            return "right" === u ? a -= e.width : "center" === u && ((a -= e.width / 2) + e.width > n.width && (a = n.width - e.width), a < 0 && (a = 0)), "top" === d ? r += h : r -= "bottom" === d ? e.height + h : e.height / 2, "center" === d ? "left" === u ? a += h : "right" === u && (a -= h) : "left" === u ? a -= c : "right" === u && (a += c), {
              x: a,
              y: r
            };
          }(g, b, v = function (t, e) {
            var i,
              n,
              a,
              r,
              o,
              s = t._model,
              l = t._chart,
              u = t._chart.chartArea,
              d = "center",
              h = "center";
            s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
            var c = (u.left + u.right) / 2,
              f = (u.top + u.bottom) / 2;
            "center" === h ? (i = function i(t) {
              return t <= c;
            }, n = function n(t) {
              return t > c;
            }) : (i = function i(t) {
              return t <= e.width / 2;
            }, n = function n(t) {
              return t >= l.width - e.width / 2;
            }), a = function a(t) {
              return t + e.width + s.caretSize + s.caretPadding > l.width;
            }, r = function r(t) {
              return t - e.width - s.caretSize - s.caretPadding < 0;
            }, o = function o(t) {
              return t <= f ? "top" : "bottom";
            }, i(s.x) ? (d = "left", a(s.x) && (d = "center", h = o(s.y))) : n(s.x) && (d = "right", r(s.x) && (d = "center", h = o(s.y)));
            var g = t._options;
            return {
              xAlign: g.xAlign ? g.xAlign : d,
              yAlign: g.yAlign ? g.yAlign : h
            };
          }(this, b), h._chart);
        } else g.opacity = 0;
        return g.xAlign = v.xAlign, g.yAlign = v.yAlign, g.x = y.x, g.y = y.y, g.width = b.width, g.height = b.height, g.caretX = x.x, g.caretY = x.y, h._model = g, t && c.custom && c.custom.call(h, g), h;
      },
      drawCaret: function drawCaret(t, e) {
        var i = this._chart.ctx,
          n = this._view,
          a = this.getCaretPosition(t, e, n);
        i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3);
      },
      getCaretPosition: function getCaretPosition(t, e, i) {
        var n,
          a,
          r,
          o,
          s,
          l,
          u = i.caretSize,
          d = i.cornerRadius,
          h = i.xAlign,
          c = i.yAlign,
          f = t.x,
          g = t.y,
          m = e.width,
          p = e.height;
        if ("center" === c) s = g + p / 2, "left" === h ? (a = (n = f) - u, r = n, o = s + u, l = s - u) : (a = (n = f + m) + u, r = n, o = s - u, l = s + u);else if ("left" === h ? (n = (a = f + d + u) - u, r = a + u) : "right" === h ? (n = (a = f + m - d - u) - u, r = a + u) : (n = (a = i.caretX) - u, r = a + u), "top" === c) s = (o = g) - u, l = o;else {
          s = (o = g + p) + u, l = o;
          var v = r;
          r = n, n = v;
        }
        return {
          x1: n,
          x2: a,
          x3: r,
          y1: o,
          y2: s,
          y3: l
        };
      },
      drawTitle: function drawTitle(t, e, i) {
        var n = e.title;
        if (n.length) {
          t.x = Ze(e, e._titleAlign), i.textAlign = e._titleAlign, i.textBaseline = "top";
          var a,
            r,
            o = e.titleFontSize,
            s = e.titleSpacing;
          for (i.fillStyle = e.titleFontColor, i.font = ut.fontString(o, e._titleFontStyle, e._titleFontFamily), a = 0, r = n.length; a < r; ++a) i.fillText(n[a], t.x, t.y), t.y += o + s, a + 1 === n.length && (t.y += e.titleMarginBottom - s);
        }
      },
      drawBody: function drawBody(t, e, i) {
        var n,
          a = e.bodyFontSize,
          r = e.bodySpacing,
          o = e._bodyAlign,
          s = e.body,
          l = e.displayColors,
          u = e.labelColors,
          d = 0,
          h = l ? Ze(e, "left") : 0;
        i.textAlign = o, i.textBaseline = "top", i.font = ut.fontString(a, e._bodyFontStyle, e._bodyFontFamily), t.x = Ze(e, o);
        var c = function c(e) {
          i.fillText(e, t.x + d, t.y), t.y += a + r;
        };
        i.fillStyle = e.bodyFontColor, ut.each(e.beforeBody, c), d = l && "right" !== o ? "center" === o ? a / 2 + 1 : a + 2 : 0, ut.each(s, function (r, o) {
          n = e.labelTextColors[o], i.fillStyle = n, ut.each(r.before, c), ut.each(r.lines, function (r) {
            l && (i.fillStyle = e.legendColorBackground, i.fillRect(h, t.y, a, a), i.lineWidth = 1, i.strokeStyle = u[o].borderColor, i.strokeRect(h, t.y, a, a), i.fillStyle = u[o].backgroundColor, i.fillRect(h + 1, t.y + 1, a - 2, a - 2), i.fillStyle = n), c(r);
          }), ut.each(r.after, c);
        }), d = 0, ut.each(e.afterBody, c), t.y -= r;
      },
      drawFooter: function drawFooter(t, e, i) {
        var n = e.footer;
        n.length && (t.x = Ze(e, e._footerAlign), t.y += e.footerMarginTop, i.textAlign = e._footerAlign, i.textBaseline = "top", i.fillStyle = e.footerFontColor, i.font = ut.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), ut.each(n, function (n) {
          i.fillText(n, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing;
        }));
      },
      drawBackground: function drawBackground(t, e, i, n) {
        i.fillStyle = e.backgroundColor, i.strokeStyle = e.borderColor, i.lineWidth = e.borderWidth;
        var a = e.xAlign,
          r = e.yAlign,
          o = t.x,
          s = t.y,
          l = n.width,
          u = n.height,
          d = e.cornerRadius;
        i.beginPath(), i.moveTo(o + d, s), "top" === r && this.drawCaret(t, n), i.lineTo(o + l - d, s), i.quadraticCurveTo(o + l, s, o + l, s + d), "center" === r && "right" === a && this.drawCaret(t, n), i.lineTo(o + l, s + u - d), i.quadraticCurveTo(o + l, s + u, o + l - d, s + u), "bottom" === r && this.drawCaret(t, n), i.lineTo(o + d, s + u), i.quadraticCurveTo(o, s + u, o, s + u - d), "center" === r && "left" === a && this.drawCaret(t, n), i.lineTo(o, s + d), i.quadraticCurveTo(o, s, o + d, s), i.closePath(), i.fill(), e.borderWidth > 0 && i.stroke();
      },
      draw: function draw() {
        var t = this._chart.ctx,
          e = this._view;
        if (0 !== e.opacity) {
          var i = {
              width: e.width,
              height: e.height
            },
            n = {
              x: e.x,
              y: e.y
            },
            a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
            r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
          this._options.enabled && r && (t.save(), t.globalAlpha = a, this.drawBackground(n, e, t, i), n.y += e.yPadding, this.drawTitle(n, e, t), this.drawBody(n, e, t), this.drawFooter(n, e, t), t.restore());
        }
      },
      handleEvent: function handleEvent(t) {
        var e,
          i = this,
          n = i._options;
        return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !ut.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
          x: t.x,
          y: t.y
        }, i.update(!0), i.pivot())), e;
      }
    }),
    Ke = je,
    Je = Xe;
  Je.positioners = Ke;
  var Qe = ut.valueOrDefault;
  function ti() {
    return ut.merge({}, [].slice.call(arguments), {
      merger: function merger(t, e, i, n) {
        if ("xAxes" === t || "yAxes" === t) {
          var a,
            r,
            o,
            s = i[t].length;
          for (e[t] || (e[t] = []), a = 0; a < s; ++a) o = i[t][a], r = Qe(o.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || o.type && o.type !== e[t][a].type ? ut.merge(e[t][a], [Ee.getScaleDefaults(r), o]) : ut.merge(e[t][a], o);
        } else ut._merger(t, e, i, n);
      }
    });
  }
  function ei() {
    return ut.merge({}, [].slice.call(arguments), {
      merger: function merger(t, e, i, n) {
        var a = e[t] || {},
          r = i[t];
        "scales" === t ? e[t] = ti(a, r) : "scale" === t ? e[t] = ut.merge(a, [Ee.getScaleDefaults(r.type), r]) : ut._merger(t, e, i, n);
      }
    });
  }
  function ii(t) {
    return "top" === t || "bottom" === t;
  }
  ot._set("global", {
    elements: {},
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    hover: {
      onHover: null,
      mode: "nearest",
      intersect: !0,
      animationDuration: 400
    },
    onClick: null,
    maintainAspectRatio: !0,
    responsive: !0,
    responsiveAnimationDuration: 0
  });
  var ni = function ni(t, e) {
    return this.construct(t, e), this;
  };
  ut.extend(ni.prototype, {
    construct: function construct(t, e) {
      var i = this;
      e = function (t) {
        var e = (t = t || {}).data = t.data || {};
        return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = ei(ot.global, ot[t.type], t.options || {}), t;
      }(e);
      var n = Ve.acquireContext(t, e),
        a = n && n.canvas,
        r = a && a.height,
        o = a && a.width;
      i.id = ut.uid(), i.ctx = n, i.canvas = a, i.config = e, i.width = o, i.height = r, i.aspectRatio = r ? o / r : null, i.options = e.options, i._bufferedRender = !1, i.chart = i, i.controller = i, ni.instances[i.id] = i, Object.defineProperty(i, "data", {
        get: function get() {
          return i.config.data;
        },
        set: function set(t) {
          i.config.data = t;
        }
      }), n && a ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item");
    },
    initialize: function initialize() {
      var t = this;
      return He.notify(t, "beforeInit"), ut.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), He.notify(t, "afterInit"), t;
    },
    clear: function clear() {
      return ut.canvas.clear(this), this;
    },
    stop: function stop() {
      return vt.cancelAnimation(this), this;
    },
    resize: function resize(t) {
      var e = this,
        i = e.options,
        n = e.canvas,
        a = i.maintainAspectRatio && e.aspectRatio || null,
        r = Math.max(0, Math.floor(ut.getMaximumWidth(n))),
        o = Math.max(0, Math.floor(a ? r / a : ut.getMaximumHeight(n)));
      if ((e.width !== r || e.height !== o) && (n.width = e.width = r, n.height = e.height = o, n.style.width = r + "px", n.style.height = o + "px", ut.retinaScale(e, i.devicePixelRatio), !t)) {
        var s = {
          width: r,
          height: o
        };
        He.notify(e, "resize", [s]), i.onResize && i.onResize(e, s), e.stop(), e.update({
          duration: i.responsiveAnimationDuration
        });
      }
    },
    ensureScalesHaveIDs: function ensureScalesHaveIDs() {
      var t = this.options,
        e = t.scales || {},
        i = t.scale;
      ut.each(e.xAxes, function (t, e) {
        t.id = t.id || "x-axis-" + e;
      }), ut.each(e.yAxes, function (t, e) {
        t.id = t.id || "y-axis-" + e;
      }), i && (i.id = i.id || "scale");
    },
    buildOrUpdateScales: function buildOrUpdateScales() {
      var t = this,
        e = t.options,
        i = t.scales || {},
        n = [],
        a = Object.keys(i).reduce(function (t, e) {
          return t[e] = !1, t;
        }, {});
      e.scales && (n = n.concat((e.scales.xAxes || []).map(function (t) {
        return {
          options: t,
          dtype: "category",
          dposition: "bottom"
        };
      }), (e.scales.yAxes || []).map(function (t) {
        return {
          options: t,
          dtype: "linear",
          dposition: "left"
        };
      }))), e.scale && n.push({
        options: e.scale,
        dtype: "radialLinear",
        isDefault: !0,
        dposition: "chartArea"
      }), ut.each(n, function (e) {
        var n = e.options,
          r = n.id,
          o = Qe(n.type, e.dtype);
        ii(n.position) !== ii(e.dposition) && (n.position = e.dposition), a[r] = !0;
        var s = null;
        if (r in i && i[r].type === o) (s = i[r]).options = n, s.ctx = t.ctx, s.chart = t;else {
          var l = Ee.getScaleConstructor(o);
          if (!l) return;
          s = new l({
            id: r,
            type: o,
            options: n,
            ctx: t.ctx,
            chart: t
          }), i[s.id] = s;
        }
        s.mergeTicksOptions(), e.isDefault && (t.scale = s);
      }), ut.each(a, function (t, e) {
        t || delete i[e];
      }), t.scales = i, Ee.addScalesToLayout(this);
    },
    buildOrUpdateControllers: function buildOrUpdateControllers() {
      var t = this,
        e = [];
      return ut.each(t.data.datasets, function (i, n) {
        var a = t.getDatasetMeta(n),
          r = i.type || t.config.type;
        if (a.type && a.type !== r && (t.destroyDatasetMeta(n), a = t.getDatasetMeta(n)), a.type = r, a.controller) a.controller.updateIndex(n), a.controller.linkScales();else {
          var o = ue[a.type];
          if (void 0 === o) throw new Error('"' + a.type + '" is not a chart type.');
          a.controller = new o(t, n), e.push(a.controller);
        }
      }, t), e;
    },
    resetElements: function resetElements() {
      var t = this;
      ut.each(t.data.datasets, function (e, i) {
        t.getDatasetMeta(i).controller.reset();
      }, t);
    },
    reset: function reset() {
      this.resetElements(), this.tooltip.initialize();
    },
    update: function update(t) {
      var e,
        i,
        n = this;
      if (t && "object" == _typeof(t) || (t = {
        duration: t,
        lazy: arguments[1]
      }), i = (e = n).options, ut.each(e.scales, function (t) {
        xe.removeBox(e, t);
      }), i = ei(ot.global, ot[e.config.type], i), e.options = e.config.options = i, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = i.tooltips, e.tooltip.initialize(), He._invalidate(n), !1 !== He.notify(n, "beforeUpdate")) {
        n.tooltip._data = n.data;
        var a = n.buildOrUpdateControllers();
        ut.each(n.data.datasets, function (t, e) {
          n.getDatasetMeta(e).controller.buildOrUpdateElements();
        }, n), n.updateLayout(), n.options.animation && n.options.animation.duration && ut.each(a, function (t) {
          t.reset();
        }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], He.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
          duration: t.duration,
          easing: t.easing,
          lazy: t.lazy
        } : n.render(t);
      }
    },
    updateLayout: function updateLayout() {
      !1 !== He.notify(this, "beforeLayout") && (xe.update(this, this.width, this.height), He.notify(this, "afterScaleUpdate"), He.notify(this, "afterLayout"));
    },
    updateDatasets: function updateDatasets() {
      if (!1 !== He.notify(this, "beforeDatasetsUpdate")) {
        for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
        He.notify(this, "afterDatasetsUpdate");
      }
    },
    updateDataset: function updateDataset(t) {
      var e = this.getDatasetMeta(t),
        i = {
          meta: e,
          index: t
        };
      !1 !== He.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), He.notify(this, "afterDatasetUpdate", [i]));
    },
    render: function render(t) {
      var e = this;
      t && "object" == _typeof(t) || (t = {
        duration: t,
        lazy: arguments[1]
      });
      var i = e.options.animation,
        n = Qe(t.duration, i && i.duration),
        a = t.lazy;
      if (!1 !== He.notify(e, "beforeRender")) {
        var r = function r(t) {
          He.notify(e, "afterRender"), ut.callback(i && i.onComplete, [t], e);
        };
        if (i && n) {
          var o = new pt({
            numSteps: n / 16.66,
            easing: t.easing || i.easing,
            render: function render(t, e) {
              var i = ut.easing.effects[e.easing],
                n = e.currentStep,
                a = n / e.numSteps;
              t.draw(i(a), a, n);
            },
            onAnimationProgress: i.onProgress,
            onAnimationComplete: r
          });
          vt.addAnimation(e, o, n, a);
        } else e.draw(), r(new pt({
          numSteps: 0,
          chart: e
        }));
        return e;
      }
    },
    draw: function draw(t) {
      var e = this;
      e.clear(), ut.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== He.notify(e, "beforeDraw", [t]) && (ut.each(e.boxes, function (t) {
        t.draw(e.chartArea);
      }, e), e.drawDatasets(t), e._drawTooltip(t), He.notify(e, "afterDraw", [t]));
    },
    transition: function transition(t) {
      for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
      this.tooltip.transition(t);
    },
    drawDatasets: function drawDatasets(t) {
      var e = this;
      if (!1 !== He.notify(e, "beforeDatasetsDraw", [t])) {
        for (var i = (e.data.datasets || []).length - 1; i >= 0; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
        He.notify(e, "afterDatasetsDraw", [t]);
      }
    },
    drawDataset: function drawDataset(t, e) {
      var i = this.getDatasetMeta(t),
        n = {
          meta: i,
          index: t,
          easingValue: e
        };
      !1 !== He.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), He.notify(this, "afterDatasetDraw", [n]));
    },
    _drawTooltip: function _drawTooltip(t) {
      var e = this.tooltip,
        i = {
          tooltip: e,
          easingValue: t
        };
      !1 !== He.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), He.notify(this, "afterTooltipDraw", [i]));
    },
    getElementAtEvent: function getElementAtEvent(t) {
      return pe.modes.single(this, t);
    },
    getElementsAtEvent: function getElementsAtEvent(t) {
      return pe.modes.label(this, t, {
        intersect: !0
      });
    },
    getElementsAtXAxis: function getElementsAtXAxis(t) {
      return pe.modes["x-axis"](this, t, {
        intersect: !0
      });
    },
    getElementsAtEventForMode: function getElementsAtEventForMode(t, e, i) {
      var n = pe.modes[e];
      return "function" == typeof n ? n(this, t, i) : [];
    },
    getDatasetAtEvent: function getDatasetAtEvent(t) {
      return pe.modes.dataset(this, t, {
        intersect: !0
      });
    },
    getDatasetMeta: function getDatasetMeta(t) {
      var e = this.data.datasets[t];
      e._meta || (e._meta = {});
      var i = e._meta[this.id];
      return i || (i = e._meta[this.id] = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null
      }), i;
    },
    getVisibleDatasetCount: function getVisibleDatasetCount() {
      for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
      return t;
    },
    isDatasetVisible: function isDatasetVisible(t) {
      var e = this.getDatasetMeta(t);
      return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
    },
    generateLegend: function generateLegend() {
      return this.options.legendCallback(this);
    },
    destroyDatasetMeta: function destroyDatasetMeta(t) {
      var e = this.id,
        i = this.data.datasets[t],
        n = i._meta && i._meta[e];
      n && (n.controller.destroy(), delete i._meta[e]);
    },
    destroy: function destroy() {
      var t,
        e,
        i = this,
        n = i.canvas;
      for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
      n && (i.unbindEvents(), ut.canvas.clear(i), Ve.releaseContext(i.ctx), i.canvas = null, i.ctx = null), He.notify(i, "destroy"), delete ni.instances[i.id];
    },
    toBase64Image: function toBase64Image() {
      return this.canvas.toDataURL.apply(this.canvas, arguments);
    },
    initToolTip: function initToolTip() {
      var t = this;
      t.tooltip = new Je({
        _chart: t,
        _chartInstance: t,
        _data: t.data,
        _options: t.options.tooltips
      }, t);
    },
    bindEvents: function bindEvents() {
      var t = this,
        e = t._listeners = {},
        i = function i() {
          t.eventHandler.apply(t, arguments);
        };
      ut.each(t.options.events, function (n) {
        Ve.addEventListener(t, n, i), e[n] = i;
      }), t.options.responsive && (i = function i() {
        t.resize();
      }, Ve.addEventListener(t, "resize", i), e.resize = i);
    },
    unbindEvents: function unbindEvents() {
      var t = this,
        e = t._listeners;
      e && (delete t._listeners, ut.each(e, function (e, i) {
        Ve.removeEventListener(t, i, e);
      }));
    },
    updateHoverStyle: function updateHoverStyle(t, e, i) {
      var n,
        a,
        r,
        o = i ? "setHoverStyle" : "removeHoverStyle";
      for (a = 0, r = t.length; a < r; ++a) (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[o](n);
    },
    eventHandler: function eventHandler(t) {
      var e = this,
        i = e.tooltip;
      if (!1 !== He.notify(e, "beforeEvent", [t])) {
        e._bufferedRender = !0, e._bufferedRequest = null;
        var n = e.handleEvent(t);
        i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), He.notify(e, "afterEvent", [t]);
        var a = e._bufferedRequest;
        return a ? e.render(a) : n && !e.animating && (e.stop(), e.render({
          duration: e.options.hover.animationDuration,
          lazy: !0
        })), e._bufferedRender = !1, e._bufferedRequest = null, e;
      }
    },
    handleEvent: function handleEvent(t) {
      var e,
        i = this,
        n = i.options || {},
        a = n.hover;
      return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, a.mode, a), ut.callback(n.onHover || n.hover.onHover, [t["native"], i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t["native"], i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, a.mode, !1), i.active.length && a.mode && i.updateHoverStyle(i.active, a.mode, !0), e = !ut.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e;
    }
  }), ni.instances = {};
  var ai = ni;
  ni.Controller = ni, ni.types = {}, ut.configMerge = ei, ut.scaleMerge = ti;
  function ri() {
    throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.");
  }
  function oi(t) {
    this.options = t || {};
  }
  ut.extend(oi.prototype, {
    formats: ri,
    parse: ri,
    format: ri,
    add: ri,
    diff: ri,
    startOf: ri,
    endOf: ri,
    _create: function _create(t) {
      return t;
    }
  }), oi.override = function (t) {
    ut.extend(oi.prototype, t);
  };
  var si = {
      _date: oi
    },
    li = {
      formatters: {
        values: function values(t) {
          return ut.isArray(t) ? t : "" + t;
        },
        linear: function linear(t, e, i) {
          var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
          Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
          var a = ut.log10(Math.abs(n)),
            r = "";
          if (0 !== t) {
            if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
              var o = ut.log10(Math.abs(t));
              r = t.toExponential(Math.floor(o) - Math.floor(a));
            } else {
              var s = -1 * Math.floor(a);
              s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s);
            }
          } else r = "0";
          return r;
        },
        logarithmic: function logarithmic(t, e, i) {
          var n = t / Math.pow(10, Math.floor(ut.log10(t)));
          return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === e || e === i.length - 1 ? t.toExponential() : "";
        }
      }
    },
    ui = ut.valueOrDefault,
    di = ut.valueAtIndexOrDefault;
  function hi(t) {
    var e,
      i,
      n = [];
    for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
    return n;
  }
  function ci(t, e, i) {
    return ut.isArray(e) ? ut.longestText(t, i, e) : t.measureText(e).width;
  }
  ot._set("scale", {
    display: !0,
    position: "left",
    offset: !1,
    gridLines: {
      display: !0,
      color: "rgba(0, 0, 0, 0.1)",
      lineWidth: 1,
      drawBorder: !0,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickMarkLength: 10,
      zeroLineWidth: 1,
      zeroLineColor: "rgba(0,0,0,0.25)",
      zeroLineBorderDash: [],
      zeroLineBorderDashOffset: 0,
      offsetGridLines: !1,
      borderDash: [],
      borderDashOffset: 0
    },
    scaleLabel: {
      display: !1,
      labelString: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      beginAtZero: !1,
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      padding: 0,
      reverse: !1,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 0,
      labelOffset: 0,
      callback: li.formatters.values,
      minor: {},
      major: {}
    }
  });
  var fi = gt.extend({
      getPadding: function getPadding() {
        return {
          left: this.paddingLeft || 0,
          top: this.paddingTop || 0,
          right: this.paddingRight || 0,
          bottom: this.paddingBottom || 0
        };
      },
      getTicks: function getTicks() {
        return this._ticks;
      },
      mergeTicksOptions: function mergeTicksOptions() {
        var t = this.options.ticks;
        for (var e in !1 === t.minor && (t.minor = {
          display: !1
        }), !1 === t.major && (t.major = {
          display: !1
        }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
      },
      beforeUpdate: function beforeUpdate() {
        ut.callback(this.options.beforeUpdate, [this]);
      },
      update: function update(t, e, i) {
        var n,
          a,
          r,
          o,
          s,
          l,
          u = this;
        for (u.beforeUpdate(), u.maxWidth = t, u.maxHeight = e, u.margins = ut.extend({
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, i), u._maxLabelLines = 0, u.longestLabelWidth = 0, u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), s = u.buildTicks() || [], s = u.afterBuildTicks(s) || s, u.beforeTickToLabelConversion(), r = u.convertTicksToLabels(s) || u.ticks, u.afterTickToLabelConversion(), u.ticks = r, n = 0, a = r.length; n < a; ++n) o = r[n], (l = s[n]) ? l.label = o : s.push(l = {
          label: o,
          major: !1
        });
        return u._ticks = s, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize;
      },
      afterUpdate: function afterUpdate() {
        ut.callback(this.options.afterUpdate, [this]);
      },
      beforeSetDimensions: function beforeSetDimensions() {
        ut.callback(this.options.beforeSetDimensions, [this]);
      },
      setDimensions: function setDimensions() {
        var t = this;
        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
      },
      afterSetDimensions: function afterSetDimensions() {
        ut.callback(this.options.afterSetDimensions, [this]);
      },
      beforeDataLimits: function beforeDataLimits() {
        ut.callback(this.options.beforeDataLimits, [this]);
      },
      determineDataLimits: ut.noop,
      afterDataLimits: function afterDataLimits() {
        ut.callback(this.options.afterDataLimits, [this]);
      },
      beforeBuildTicks: function beforeBuildTicks() {
        ut.callback(this.options.beforeBuildTicks, [this]);
      },
      buildTicks: ut.noop,
      afterBuildTicks: function afterBuildTicks(t) {
        var e = this;
        return ut.isArray(t) && t.length ? ut.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = ut.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t);
      },
      beforeTickToLabelConversion: function beforeTickToLabelConversion() {
        ut.callback(this.options.beforeTickToLabelConversion, [this]);
      },
      convertTicksToLabels: function convertTicksToLabels() {
        var t = this.options.ticks;
        this.ticks = this.ticks.map(t.userCallback || t.callback, this);
      },
      afterTickToLabelConversion: function afterTickToLabelConversion() {
        ut.callback(this.options.afterTickToLabelConversion, [this]);
      },
      beforeCalculateTickRotation: function beforeCalculateTickRotation() {
        ut.callback(this.options.beforeCalculateTickRotation, [this]);
      },
      calculateTickRotation: function calculateTickRotation() {
        var t = this,
          e = t.ctx,
          i = t.options.ticks,
          n = hi(t._ticks),
          a = ut.options._parseFont(i);
        e.font = a.string;
        var r = i.minRotation || 0;
        if (n.length && t.options.display && t.isHorizontal()) for (var o, s = ut.longestText(e, a.string, n, t.longestTextCache), l = s, u = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; l > u && r < i.maxRotation;) {
          var d = ut.toRadians(r);
          if (o = Math.cos(d), Math.sin(d) * s > t.maxHeight) {
            r--;
            break;
          }
          r++, l = o * s;
        }
        t.labelRotation = r;
      },
      afterCalculateTickRotation: function afterCalculateTickRotation() {
        ut.callback(this.options.afterCalculateTickRotation, [this]);
      },
      beforeFit: function beforeFit() {
        ut.callback(this.options.beforeFit, [this]);
      },
      fit: function fit() {
        var t = this,
          e = t.minSize = {
            width: 0,
            height: 0
          },
          i = hi(t._ticks),
          n = t.options,
          a = n.ticks,
          r = n.scaleLabel,
          o = n.gridLines,
          s = t._isVisible(),
          l = n.position,
          u = t.isHorizontal(),
          d = ut.options._parseFont,
          h = d(a),
          c = n.gridLines.tickMarkLength;
        if (e.width = u ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && o.drawTicks ? c : 0, e.height = u ? s && o.drawTicks ? c : 0 : t.maxHeight, r.display && s) {
          var f = d(r),
            g = ut.options.toPadding(r.padding),
            m = f.lineHeight + g.height;
          u ? e.height += m : e.width += m;
        }
        if (a.display && s) {
          var p = ut.longestText(t.ctx, h.string, i, t.longestTextCache),
            v = ut.numberOfLabelLines(i),
            y = .5 * h.size,
            b = t.options.ticks.padding;
          if (t._maxLabelLines = v, t.longestLabelWidth = p, u) {
            var x = ut.toRadians(t.labelRotation),
              _ = Math.cos(x),
              k = Math.sin(x) * p + h.lineHeight * v + y;
            e.height = Math.min(t.maxHeight, e.height + k + b), t.ctx.font = h.string;
            var w,
              M,
              S = ci(t.ctx, i[0], h.string),
              D = ci(t.ctx, i[i.length - 1], h.string),
              C = t.getPixelForTick(0) - t.left,
              P = t.right - t.getPixelForTick(i.length - 1);
            0 !== t.labelRotation ? (w = "bottom" === l ? _ * S : _ * y, M = "bottom" === l ? _ * y : _ * D) : (w = S / 2, M = D / 2), t.paddingLeft = Math.max(w - C, 0) + 3, t.paddingRight = Math.max(M - P, 0) + 3;
          } else a.mirror ? p = 0 : p += b + y, e.width = Math.min(t.maxWidth, e.width + p), t.paddingTop = h.size / 2, t.paddingBottom = h.size / 2;
        }
        t.handleMargins(), t.width = e.width, t.height = e.height;
      },
      handleMargins: function handleMargins() {
        var t = this;
        t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
      },
      afterFit: function afterFit() {
        ut.callback(this.options.afterFit, [this]);
      },
      isHorizontal: function isHorizontal() {
        return "top" === this.options.position || "bottom" === this.options.position;
      },
      isFullWidth: function isFullWidth() {
        return this.options.fullWidth;
      },
      getRightValue: function getRightValue(t) {
        if (ut.isNullOrUndef(t)) return NaN;
        if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
        if (t) if (this.isHorizontal()) {
          if (void 0 !== t.x) return this.getRightValue(t.x);
        } else if (void 0 !== t.y) return this.getRightValue(t.y);
        return t;
      },
      getLabelForIndex: ut.noop,
      getPixelForValue: ut.noop,
      getValueForPixel: ut.noop,
      getPixelForTick: function getPixelForTick(t) {
        var e = this,
          i = e.options.offset;
        if (e.isHorizontal()) {
          var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
            a = n * t + e.paddingLeft;
          i && (a += n / 2);
          var r = e.left + a;
          return r += e.isFullWidth() ? e.margins.left : 0;
        }
        var o = e.height - (e.paddingTop + e.paddingBottom);
        return e.top + t * (o / (e._ticks.length - 1));
      },
      getPixelForDecimal: function getPixelForDecimal(t) {
        var e = this;
        if (e.isHorizontal()) {
          var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
            n = e.left + i;
          return n += e.isFullWidth() ? e.margins.left : 0;
        }
        return e.top + t * e.height;
      },
      getBasePixel: function getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
      },
      getBaseValue: function getBaseValue() {
        var t = this.min,
          e = this.max;
        return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
      },
      _autoSkip: function _autoSkip(t) {
        var e,
          i,
          n = this,
          a = n.isHorizontal(),
          r = n.options.ticks.minor,
          o = t.length,
          s = !1,
          l = r.maxTicksLimit,
          u = n._tickSize() * (o - 1),
          d = a ? n.width - (n.paddingLeft + n.paddingRight) : n.height - (n.paddingTop + n.PaddingBottom),
          h = [];
        for (u > d && (s = 1 + Math.floor(u / d)), o > l && (s = Math.max(s, 1 + Math.floor(o / l))), e = 0; e < o; e++) i = t[e], s > 1 && e % s > 0 && delete i.label, h.push(i);
        return h;
      },
      _tickSize: function _tickSize() {
        var t = this,
          e = t.isHorizontal(),
          i = t.options.ticks.minor,
          n = ut.toRadians(t.labelRotation),
          a = Math.abs(Math.cos(n)),
          r = Math.abs(Math.sin(n)),
          o = i.autoSkipPadding || 0,
          s = t.longestLabelWidth + o || 0,
          l = ut.options._parseFont(i),
          u = t._maxLabelLines * l.lineHeight + o || 0;
        return e ? u * a > s * r ? s / a : u / r : u * r < s * a ? u / a : s / r;
      },
      _isVisible: function _isVisible() {
        var t,
          e,
          i,
          n = this.chart,
          a = this.options.display;
        if ("auto" !== a) return !!a;
        for (t = 0, e = n.data.datasets.length; t < e; ++t) if (n.isDatasetVisible(t) && ((i = n.getDatasetMeta(t)).xAxisID === this.id || i.yAxisID === this.id)) return !0;
        return !1;
      },
      draw: function draw(t) {
        var e = this,
          i = e.options;
        if (e._isVisible()) {
          var n,
            a,
            r,
            o = e.chart,
            s = e.ctx,
            l = ot.global.defaultFontColor,
            u = i.ticks.minor,
            d = i.ticks.major || u,
            h = i.gridLines,
            c = i.scaleLabel,
            f = i.position,
            g = 0 !== e.labelRotation,
            m = u.mirror,
            p = e.isHorizontal(),
            v = ut.options._parseFont,
            y = u.display && u.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
            b = ui(u.fontColor, l),
            x = v(u),
            _ = x.lineHeight,
            k = ui(d.fontColor, l),
            w = v(d),
            M = u.padding,
            S = u.labelOffset,
            D = h.drawTicks ? h.tickMarkLength : 0,
            C = ui(c.fontColor, l),
            P = v(c),
            T = ut.options.toPadding(c.padding),
            O = ut.toRadians(e.labelRotation),
            I = [],
            A = h.drawBorder ? di(h.lineWidth, 0, 0) : 0,
            F = ut._alignPixel;
          "top" === f ? (n = F(o, e.bottom, A), a = e.bottom - D, r = n - A / 2) : "bottom" === f ? (n = F(o, e.top, A), a = n + A / 2, r = e.top + D) : "left" === f ? (n = F(o, e.right, A), a = e.right - D, r = n - A / 2) : (n = F(o, e.left, A), a = n + A / 2, r = e.left + D);
          if (ut.each(y, function (n, s) {
            if (!ut.isNullOrUndef(n.label)) {
              var l,
                u,
                d,
                c,
                v,
                y,
                b,
                x,
                k,
                w,
                C,
                P,
                T,
                R,
                L,
                W,
                Y = n.label;
              s === e.zeroLineIndex && i.offset === h.offsetGridLines ? (l = h.zeroLineWidth, u = h.zeroLineColor, d = h.zeroLineBorderDash || [], c = h.zeroLineBorderDashOffset || 0) : (l = di(h.lineWidth, s), u = di(h.color, s), d = h.borderDash || [], c = h.borderDashOffset || 0);
              var N = ut.isArray(Y) ? Y.length : 1,
                z = function (t, e, i) {
                  var n = t.getPixelForTick(e);
                  return i && (1 === t.getTicks().length ? n -= t.isHorizontal() ? Math.max(n - t.left, t.right - n) : Math.max(n - t.top, t.bottom - n) : n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n;
                }(e, s, h.offsetGridLines);
              if (p) {
                var V = D + M;
                z < e.left - 1e-7 && (u = "rgba(0,0,0,0)"), v = b = k = C = F(o, z, l), y = a, x = r, T = e.getPixelForTick(s) + S, "top" === f ? (w = F(o, t.top, A) + A / 2, P = t.bottom, L = ((g ? 1 : .5) - N) * _, W = g ? "left" : "center", R = e.bottom - V) : (w = t.top, P = F(o, t.bottom, A) - A / 2, L = (g ? 0 : .5) * _, W = g ? "right" : "center", R = e.top + V);
              } else {
                var H = (m ? 0 : D) + M;
                z < e.top - 1e-7 && (u = "rgba(0,0,0,0)"), v = a, b = r, y = x = w = P = F(o, z, l), R = e.getPixelForTick(s) + S, L = (1 - N) * _ / 2, "left" === f ? (k = F(o, t.left, A) + A / 2, C = t.right, W = m ? "left" : "right", T = e.right - H) : (k = t.left, C = F(o, t.right, A) - A / 2, W = m ? "right" : "left", T = e.left + H);
              }
              I.push({
                tx1: v,
                ty1: y,
                tx2: b,
                ty2: x,
                x1: k,
                y1: w,
                x2: C,
                y2: P,
                labelX: T,
                labelY: R,
                glWidth: l,
                glColor: u,
                glBorderDash: d,
                glBorderDashOffset: c,
                rotation: -1 * O,
                label: Y,
                major: n.major,
                textOffset: L,
                textAlign: W
              });
            }
          }), ut.each(I, function (t) {
            var e = t.glWidth,
              i = t.glColor;
            if (h.display && e && i && (s.save(), s.lineWidth = e, s.strokeStyle = i, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), u.display) {
              s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? w.string : x.string, s.fillStyle = t.major ? k : b, s.textBaseline = "middle", s.textAlign = t.textAlign;
              var n = t.label,
                a = t.textOffset;
              if (ut.isArray(n)) for (var r = 0; r < n.length; ++r) s.fillText("" + n[r], 0, a), a += _;else s.fillText(n, 0, a);
              s.restore();
            }
          }), c.display) {
            var R,
              L,
              W = 0,
              Y = P.lineHeight / 2;
            if (p) R = e.left + (e.right - e.left) / 2, L = "bottom" === f ? e.bottom - Y - T.bottom : e.top + Y + T.top;else {
              var N = "left" === f;
              R = N ? e.left + Y + T.top : e.right - Y - T.top, L = e.top + (e.bottom - e.top) / 2, W = N ? -.5 * Math.PI : .5 * Math.PI;
            }
            s.save(), s.translate(R, L), s.rotate(W), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = C, s.font = P.string, s.fillText(c.labelString, 0, 0), s.restore();
          }
          if (A) {
            var z,
              V,
              H,
              E,
              B = A,
              j = di(h.lineWidth, y.length - 1, 0);
            p ? (z = F(o, e.left, B) - B / 2, V = F(o, e.right, j) + j / 2, H = E = n) : (H = F(o, e.top, B) - B / 2, E = F(o, e.bottom, j) + j / 2, z = V = n), s.lineWidth = A, s.strokeStyle = di(h.color, 0), s.beginPath(), s.moveTo(z, H), s.lineTo(V, E), s.stroke();
          }
        }
      }
    }),
    gi = fi.extend({
      getLabels: function getLabels() {
        var t = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
      },
      determineDataLimits: function determineDataLimits() {
        var t,
          e = this,
          i = e.getLabels();
        e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex];
      },
      buildTicks: function buildTicks() {
        var t = this,
          e = t.getLabels();
        t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
      },
      getLabelForIndex: function getLabelForIndex(t, e) {
        var i = this,
          n = i.chart;
        return n.getDatasetMeta(e).controller._getValueScaleId() === i.id ? i.getRightValue(n.data.datasets[e].data[t]) : i.ticks[t - i.minIndex];
      },
      getPixelForValue: function getPixelForValue(t, e) {
        var i,
          n = this,
          a = n.options.offset,
          r = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);
        if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
          t = i || t;
          var o = n.getLabels().indexOf(t);
          e = -1 !== o ? o : e;
        }
        if (n.isHorizontal()) {
          var s = n.width / r,
            l = s * (e - n.minIndex);
          return a && (l += s / 2), n.left + l;
        }
        var u = n.height / r,
          d = u * (e - n.minIndex);
        return a && (d += u / 2), n.top + d;
      },
      getPixelForTick: function getPixelForTick(t) {
        return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
      },
      getValueForPixel: function getValueForPixel(t) {
        var e = this,
          i = e.options.offset,
          n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
          a = e.isHorizontal(),
          r = (a ? e.width : e.height) / n;
        return t -= a ? e.left : e.top, i && (t -= r / 2), (t <= 0 ? 0 : Math.round(t / r)) + e.minIndex;
      },
      getBasePixel: function getBasePixel() {
        return this.bottom;
      }
    }),
    mi = {
      position: "bottom"
    };
  gi._defaults = mi;
  var pi = ut.noop,
    vi = ut.isNullOrUndef;
  var yi = fi.extend({
      getRightValue: function getRightValue(t) {
        return "string" == typeof t ? +t : fi.prototype.getRightValue.call(this, t);
      },
      handleTickRangeOptions: function handleTickRangeOptions() {
        var t = this,
          e = t.options.ticks;
        if (e.beginAtZero) {
          var i = ut.sign(t.min),
            n = ut.sign(t.max);
          i < 0 && n < 0 ? t.max = 0 : i > 0 && n > 0 && (t.min = 0);
        }
        var a = void 0 !== e.min || void 0 !== e.suggestedMin,
          r = void 0 !== e.max || void 0 !== e.suggestedMax;
        void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== r && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
      },
      getTickLimit: function getTickLimit() {
        var t,
          e = this.options.ticks,
          i = e.stepSize,
          n = e.maxTicksLimit;
        return i ? t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1 : (t = this._computeTickLimit(), n = n || 11), n && (t = Math.min(n, t)), t;
      },
      _computeTickLimit: function _computeTickLimit() {
        return Number.POSITIVE_INFINITY;
      },
      handleDirectionalChanges: pi,
      buildTicks: function buildTicks() {
        var t = this,
          e = t.options.ticks,
          i = t.getTickLimit(),
          n = {
            maxTicks: i = Math.max(2, i),
            min: e.min,
            max: e.max,
            precision: e.precision,
            stepSize: ut.valueOrDefault(e.fixedStepSize, e.stepSize)
          },
          a = t.ticks = function (t, e) {
            var i,
              n,
              a,
              r,
              o = [],
              s = t.stepSize,
              l = s || 1,
              u = t.maxTicks - 1,
              d = t.min,
              h = t.max,
              c = t.precision,
              f = e.min,
              g = e.max,
              m = ut.niceNum((g - f) / u / l) * l;
            if (m < 1e-14 && vi(d) && vi(h)) return [f, g];
            (r = Math.ceil(g / m) - Math.floor(f / m)) > u && (m = ut.niceNum(r * m / u / l) * l), s || vi(c) ? i = Math.pow(10, ut._decimalPlaces(m)) : (i = Math.pow(10, c), m = Math.ceil(m * i) / i), n = Math.floor(f / m) * m, a = Math.ceil(g / m) * m, s && (!vi(d) && ut.almostWhole(d / m, m / 1e3) && (n = d), !vi(h) && ut.almostWhole(h / m, m / 1e3) && (a = h)), r = (a - n) / m, r = ut.almostEquals(r, Math.round(r), m / 1e3) ? Math.round(r) : Math.ceil(r), n = Math.round(n * i) / i, a = Math.round(a * i) / i, o.push(vi(d) ? n : d);
            for (var p = 1; p < r; ++p) o.push(Math.round((n + p * m) * i) / i);
            return o.push(vi(h) ? a : h), o;
          }(n, t);
        t.handleDirectionalChanges(), t.max = ut.max(a), t.min = ut.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
      },
      convertTicksToLabels: function convertTicksToLabels() {
        var t = this;
        t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), fi.prototype.convertTicksToLabels.call(t);
      }
    }),
    bi = {
      position: "left",
      ticks: {
        callback: li.formatters.linear
      }
    },
    xi = yi.extend({
      determineDataLimits: function determineDataLimits() {
        var t = this,
          e = t.options,
          i = t.chart,
          n = i.data.datasets,
          a = t.isHorizontal();
        function r(e) {
          return a ? e.xAxisID === t.id : e.yAxisID === t.id;
        }
        t.min = null, t.max = null;
        var o = e.stacked;
        if (void 0 === o && ut.each(n, function (t, e) {
          if (!o) {
            var n = i.getDatasetMeta(e);
            i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (o = !0);
          }
        }), e.stacked || o) {
          var s = {};
          ut.each(n, function (n, a) {
            var o = i.getDatasetMeta(a),
              l = [o.type, void 0 === e.stacked && void 0 === o.stack ? a : "", o.stack].join(".");
            void 0 === s[l] && (s[l] = {
              positiveValues: [],
              negativeValues: []
            });
            var u = s[l].positiveValues,
              d = s[l].negativeValues;
            i.isDatasetVisible(a) && r(o) && ut.each(n.data, function (i, n) {
              var a = +t.getRightValue(i);
              isNaN(a) || o.data[n].hidden || (u[n] = u[n] || 0, d[n] = d[n] || 0, e.relativePoints ? u[n] = 100 : a < 0 ? d[n] += a : u[n] += a);
            });
          }), ut.each(s, function (e) {
            var i = e.positiveValues.concat(e.negativeValues),
              n = ut.min(i),
              a = ut.max(i);
            t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? a : Math.max(t.max, a);
          });
        } else ut.each(n, function (e, n) {
          var a = i.getDatasetMeta(n);
          i.isDatasetVisible(n) && r(a) && ut.each(e.data, function (e, i) {
            var n = +t.getRightValue(e);
            isNaN(n) || a.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n));
          });
        });
        t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions();
      },
      _computeTickLimit: function _computeTickLimit() {
        var t;
        return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = ut.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight));
      },
      handleDirectionalChanges: function handleDirectionalChanges() {
        this.isHorizontal() || this.ticks.reverse();
      },
      getLabelForIndex: function getLabelForIndex(t, e) {
        return +this.getRightValue(this.chart.data.datasets[e].data[t]);
      },
      getPixelForValue: function getPixelForValue(t) {
        var e = this,
          i = e.start,
          n = +e.getRightValue(t),
          a = e.end - i;
        return e.isHorizontal() ? e.left + e.width / a * (n - i) : e.bottom - e.height / a * (n - i);
      },
      getValueForPixel: function getValueForPixel(t) {
        var e = this,
          i = e.isHorizontal(),
          n = i ? e.width : e.height,
          a = (i ? t - e.left : e.bottom - t) / n;
        return e.start + (e.end - e.start) * a;
      },
      getPixelForTick: function getPixelForTick(t) {
        return this.getPixelForValue(this.ticksAsNumbers[t]);
      }
    }),
    _i = bi;
  xi._defaults = _i;
  var ki = ut.valueOrDefault;
  var wi = {
    position: "left",
    ticks: {
      callback: li.formatters.logarithmic
    }
  };
  function Mi(t, e) {
    return ut.isFinite(t) && t >= 0 ? t : e;
  }
  var Si = fi.extend({
      determineDataLimits: function determineDataLimits() {
        var t = this,
          e = t.options,
          i = t.chart,
          n = i.data.datasets,
          a = t.isHorizontal();
        function r(e) {
          return a ? e.xAxisID === t.id : e.yAxisID === t.id;
        }
        t.min = null, t.max = null, t.minNotZero = null;
        var o = e.stacked;
        if (void 0 === o && ut.each(n, function (t, e) {
          if (!o) {
            var n = i.getDatasetMeta(e);
            i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (o = !0);
          }
        }), e.stacked || o) {
          var s = {};
          ut.each(n, function (n, a) {
            var o = i.getDatasetMeta(a),
              l = [o.type, void 0 === e.stacked && void 0 === o.stack ? a : "", o.stack].join(".");
            i.isDatasetVisible(a) && r(o) && (void 0 === s[l] && (s[l] = []), ut.each(n.data, function (e, i) {
              var n = s[l],
                a = +t.getRightValue(e);
              isNaN(a) || o.data[i].hidden || a < 0 || (n[i] = n[i] || 0, n[i] += a);
            }));
          }), ut.each(s, function (e) {
            if (e.length > 0) {
              var i = ut.min(e),
                n = ut.max(e);
              t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? n : Math.max(t.max, n);
            }
          });
        } else ut.each(n, function (e, n) {
          var a = i.getDatasetMeta(n);
          i.isDatasetVisible(n) && r(a) && ut.each(e.data, function (e, i) {
            var n = +t.getRightValue(e);
            isNaN(n) || a.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n));
          });
        });
        this.handleTickRangeOptions();
      },
      handleTickRangeOptions: function handleTickRangeOptions() {
        var t = this,
          e = t.options.ticks;
        t.min = Mi(e.min, t.min), t.max = Mi(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(ut.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(ut.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(ut.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(ut.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(ut.log10(t.max))) : t.minNotZero = 1);
      },
      buildTicks: function buildTicks() {
        var t = this,
          e = t.options.ticks,
          i = !t.isHorizontal(),
          n = {
            min: Mi(e.min),
            max: Mi(e.max)
          },
          a = t.ticks = function (t, e) {
            var i,
              n,
              a = [],
              r = ki(t.min, Math.pow(10, Math.floor(ut.log10(e.min)))),
              o = Math.floor(ut.log10(e.max)),
              s = Math.ceil(e.max / Math.pow(10, o));
            0 === r ? (i = Math.floor(ut.log10(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), a.push(r), r = n * Math.pow(10, i)) : (i = Math.floor(ut.log10(r)), n = Math.floor(r / Math.pow(10, i)));
            var l = i < 0 ? Math.pow(10, Math.abs(i)) : 1;
            do {
              a.push(r), 10 == ++n && (n = 1, l = ++i >= 0 ? 1 : l), r = Math.round(n * Math.pow(10, i) * l) / l;
            } while (i < o || i === o && n < s);
            var u = ki(t.max, r);
            return a.push(u), a;
          }(n, t);
        t.max = ut.max(a), t.min = ut.min(a), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && a.reverse();
      },
      convertTicksToLabels: function convertTicksToLabels() {
        this.tickValues = this.ticks.slice(), fi.prototype.convertTicksToLabels.call(this);
      },
      getLabelForIndex: function getLabelForIndex(t, e) {
        return +this.getRightValue(this.chart.data.datasets[e].data[t]);
      },
      getPixelForTick: function getPixelForTick(t) {
        return this.getPixelForValue(this.tickValues[t]);
      },
      _getFirstTickValue: function _getFirstTickValue(t) {
        var e = Math.floor(ut.log10(t));
        return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
      },
      getPixelForValue: function getPixelForValue(t) {
        var e,
          i,
          n,
          a,
          r,
          o = this,
          s = o.options.ticks,
          l = s.reverse,
          u = ut.log10,
          d = o._getFirstTickValue(o.minNotZero),
          h = 0;
        return t = +o.getRightValue(t), l ? (n = o.end, a = o.start, r = -1) : (n = o.start, a = o.end, r = 1), o.isHorizontal() ? (e = o.width, i = l ? o.right : o.left) : (e = o.height, r *= -1, i = l ? o.top : o.bottom), t !== n && (0 === n && (e -= h = ki(s.fontSize, ot.global.defaultFontSize), n = d), 0 !== t && (h += e / (u(a) - u(n)) * (u(t) - u(n))), i += r * h), i;
      },
      getValueForPixel: function getValueForPixel(t) {
        var e,
          i,
          n,
          a,
          r = this,
          o = r.options.ticks,
          s = o.reverse,
          l = ut.log10,
          u = r._getFirstTickValue(r.minNotZero);
        if (s ? (i = r.end, n = r.start) : (i = r.start, n = r.end), r.isHorizontal() ? (e = r.width, a = s ? r.right - t : t - r.left) : (e = r.height, a = s ? t - r.top : r.bottom - t), a !== i) {
          if (0 === i) {
            var d = ki(o.fontSize, ot.global.defaultFontSize);
            a -= d, e -= d, i = u;
          }
          a *= l(n) - l(i), a /= e, a = Math.pow(10, l(i) + a);
        }
        return a;
      }
    }),
    Di = wi;
  Si._defaults = Di;
  var Ci = ut.valueOrDefault,
    Pi = ut.valueAtIndexOrDefault,
    Ti = ut.options.resolve,
    Oi = {
      display: !0,
      animate: !0,
      position: "chartArea",
      angleLines: {
        display: !0,
        color: "rgba(0, 0, 0, 0.1)",
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0
      },
      gridLines: {
        circular: !1
      },
      ticks: {
        showLabelBackdrop: !0,
        backdropColor: "rgba(255,255,255,0.75)",
        backdropPaddingY: 2,
        backdropPaddingX: 2,
        callback: li.formatters.linear
      },
      pointLabels: {
        display: !0,
        fontSize: 10,
        callback: function callback(t) {
          return t;
        }
      }
    };
  function Ii(t) {
    var e = t.options;
    return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
  }
  function Ai(t) {
    var e = t.ticks;
    return e.display && t.display ? Ci(e.fontSize, ot.global.defaultFontSize) + 2 * e.backdropPaddingY : 0;
  }
  function Fi(t, e, i, n, a) {
    return t === n || t === a ? {
      start: e - i / 2,
      end: e + i / 2
    } : t < n || t > a ? {
      start: e - i,
      end: e
    } : {
      start: e,
      end: e + i
    };
  }
  function Ri(t) {
    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
  }
  function Li(t, e, i, n) {
    var a,
      r,
      o = i.y + n / 2;
    if (ut.isArray(e)) for (a = 0, r = e.length; a < r; ++a) t.fillText(e[a], i.x, o), o += n;else t.fillText(e, i.x, o);
  }
  function Wi(t, e, i) {
    90 === t || 270 === t ? i.y -= e.h / 2 : (t > 270 || t < 90) && (i.y -= e.h);
  }
  function Yi(t) {
    return ut.isNumber(t) ? t : 0;
  }
  var Ni = yi.extend({
      setDimensions: function setDimensions() {
        var t = this;
        t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Ai(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2;
      },
      determineDataLimits: function determineDataLimits() {
        var t = this,
          e = t.chart,
          i = Number.POSITIVE_INFINITY,
          n = Number.NEGATIVE_INFINITY;
        ut.each(e.data.datasets, function (a, r) {
          if (e.isDatasetVisible(r)) {
            var o = e.getDatasetMeta(r);
            ut.each(a.data, function (e, a) {
              var r = +t.getRightValue(e);
              isNaN(r) || o.data[a].hidden || (i = Math.min(r, i), n = Math.max(r, n));
            });
          }
        }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions();
      },
      _computeTickLimit: function _computeTickLimit() {
        return Math.ceil(this.drawingArea / Ai(this.options));
      },
      convertTicksToLabels: function convertTicksToLabels() {
        var t = this;
        yi.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t);
      },
      getLabelForIndex: function getLabelForIndex(t, e) {
        return +this.getRightValue(this.chart.data.datasets[e].data[t]);
      },
      fit: function fit() {
        var t = this.options;
        t.display && t.pointLabels.display ? function (t) {
          var e,
            i,
            n,
            a = ut.options._parseFont(t.options.pointLabels),
            r = {
              l: 0,
              r: t.width,
              t: 0,
              b: t.height - t.paddingTop
            },
            o = {};
          t.ctx.font = a.string, t._pointLabelSizes = [];
          var s,
            l,
            u,
            d = Ii(t);
          for (e = 0; e < d; e++) {
            n = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, u = t.pointLabels[e] || "", i = ut.isArray(u) ? {
              w: ut.longestText(s, s.font, u),
              h: u.length * l
            } : {
              w: s.measureText(u).width,
              h: l
            }, t._pointLabelSizes[e] = i;
            var h = t.getIndexAngle(e),
              c = ut.toDegrees(h) % 360,
              f = Fi(c, n.x, i.w, 0, 180),
              g = Fi(c, n.y, i.h, 90, 270);
            f.start < r.l && (r.l = f.start, o.l = h), f.end > r.r && (r.r = f.end, o.r = h), g.start < r.t && (r.t = g.start, o.t = h), g.end > r.b && (r.b = g.end, o.b = h);
          }
          t.setReductions(t.drawingArea, r, o);
        }(this) : this.setCenterPoint(0, 0, 0, 0);
      },
      setReductions: function setReductions(t, e, i) {
        var n = this,
          a = e.l / Math.sin(i.l),
          r = Math.max(e.r - n.width, 0) / Math.sin(i.r),
          o = -e.t / Math.cos(i.t),
          s = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
        a = Yi(a), r = Yi(r), o = Yi(o), s = Yi(s), n.drawingArea = Math.min(Math.floor(t - (a + r) / 2), Math.floor(t - (o + s) / 2)), n.setCenterPoint(a, r, o, s);
      },
      setCenterPoint: function setCenterPoint(t, e, i, n) {
        var a = this,
          r = a.width - e - a.drawingArea,
          o = t + a.drawingArea,
          s = i + a.drawingArea,
          l = a.height - a.paddingTop - n - a.drawingArea;
        a.xCenter = Math.floor((o + r) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop);
      },
      getIndexAngle: function getIndexAngle(t) {
        return t * (2 * Math.PI / Ii(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
      },
      getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
        var e = this;
        if (null === t) return 0;
        var i = e.drawingArea / (e.max - e.min);
        return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i;
      },
      getPointPosition: function getPointPosition(t, e) {
        var i = this.getIndexAngle(t) - Math.PI / 2;
        return {
          x: Math.cos(i) * e + this.xCenter,
          y: Math.sin(i) * e + this.yCenter
        };
      },
      getPointPositionForValue: function getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
      },
      getBasePosition: function getBasePosition() {
        var t = this.min,
          e = this.max;
        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0);
      },
      draw: function draw() {
        var t = this,
          e = t.options,
          i = e.gridLines,
          n = e.ticks;
        if (e.display) {
          var a = t.ctx,
            r = this.getIndexAngle(0),
            o = ut.options._parseFont(n);
          (e.angleLines.display || e.pointLabels.display) && function (t) {
            var e = t.ctx,
              i = t.options,
              n = i.angleLines,
              a = i.gridLines,
              r = i.pointLabels,
              o = Ci(n.lineWidth, a.lineWidth),
              s = Ci(n.color, a.color),
              l = Ai(i);
            e.save(), e.lineWidth = o, e.strokeStyle = s, e.setLineDash && (e.setLineDash(Ti([n.borderDash, a.borderDash, []])), e.lineDashOffset = Ti([n.borderDashOffset, a.borderDashOffset, 0]));
            var u = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
              d = ut.options._parseFont(r);
            e.font = d.string, e.textBaseline = "middle";
            for (var h = Ii(t) - 1; h >= 0; h--) {
              if (n.display && o && s) {
                var c = t.getPointPosition(h, u);
                e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(c.x, c.y), e.stroke();
              }
              if (r.display) {
                var f = 0 === h ? l / 2 : 0,
                  g = t.getPointPosition(h, u + f + 5),
                  m = Pi(r.fontColor, h, ot.global.defaultFontColor);
                e.fillStyle = m;
                var p = t.getIndexAngle(h),
                  v = ut.toDegrees(p);
                e.textAlign = Ri(v), Wi(v, t._pointLabelSizes[h], g), Li(e, t.pointLabels[h] || "", g, d.lineHeight);
              }
            }
            e.restore();
          }(t), ut.each(t.ticks, function (e, s) {
            if (s > 0 || n.reverse) {
              var l = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);
              if (i.display && 0 !== s && function (t, e, i, n) {
                var a,
                  r = t.ctx,
                  o = e.circular,
                  s = Ii(t),
                  l = Pi(e.color, n - 1),
                  u = Pi(e.lineWidth, n - 1);
                if ((o || s) && l && u) {
                  if (r.save(), r.strokeStyle = l, r.lineWidth = u, r.setLineDash && (r.setLineDash(e.borderDash || []), r.lineDashOffset = e.borderDashOffset || 0), r.beginPath(), o) r.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI);else {
                    a = t.getPointPosition(0, i), r.moveTo(a.x, a.y);
                    for (var d = 1; d < s; d++) a = t.getPointPosition(d, i), r.lineTo(a.x, a.y);
                  }
                  r.closePath(), r.stroke(), r.restore();
                }
              }(t, i, l, s), n.display) {
                var u = Ci(n.fontColor, ot.global.defaultFontColor);
                if (a.font = o.string, a.save(), a.translate(t.xCenter, t.yCenter), a.rotate(r), n.showLabelBackdrop) {
                  var d = a.measureText(e).width;
                  a.fillStyle = n.backdropColor, a.fillRect(-d / 2 - n.backdropPaddingX, -l - o.size / 2 - n.backdropPaddingY, d + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY);
                }
                a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = u, a.fillText(e, 0, -l), a.restore();
              }
            }
          });
        }
      }
    }),
    zi = Oi;
  Ni._defaults = zi;
  var Vi = ut.valueOrDefault,
    Hi = Number.MIN_SAFE_INTEGER || -9007199254740991,
    Ei = Number.MAX_SAFE_INTEGER || 9007199254740991,
    Bi = {
      millisecond: {
        common: !0,
        size: 1,
        steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
      },
      second: {
        common: !0,
        size: 1e3,
        steps: [1, 2, 5, 10, 15, 30]
      },
      minute: {
        common: !0,
        size: 6e4,
        steps: [1, 2, 5, 10, 15, 30]
      },
      hour: {
        common: !0,
        size: 36e5,
        steps: [1, 2, 3, 6, 12]
      },
      day: {
        common: !0,
        size: 864e5,
        steps: [1, 2, 5]
      },
      week: {
        common: !1,
        size: 6048e5,
        steps: [1, 2, 3, 4]
      },
      month: {
        common: !0,
        size: 2628e6,
        steps: [1, 2, 3]
      },
      quarter: {
        common: !1,
        size: 7884e6,
        steps: [1, 2, 3, 4]
      },
      year: {
        common: !0,
        size: 3154e7
      }
    },
    ji = Object.keys(Bi);
  function Ui(t, e) {
    return t - e;
  }
  function Gi(t) {
    var e,
      i,
      n,
      a = {},
      r = [];
    for (e = 0, i = t.length; e < i; ++e) a[n = t[e]] || (a[n] = !0, r.push(n));
    return r;
  }
  function qi(t, e, i, n) {
    var a = function (t, e, i) {
        for (var n, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
          if (a = t[(n = o + s >> 1) - 1] || null, r = t[n], !a) return {
            lo: null,
            hi: r
          };
          if (r[e] < i) o = n + 1;else {
            if (!(a[e] > i)) return {
              lo: a,
              hi: r
            };
            s = n - 1;
          }
        }
        return {
          lo: r,
          hi: null
        };
      }(t, e, i),
      r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
      o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
      s = o[e] - r[e],
      l = s ? (i - r[e]) / s : 0,
      u = (o[n] - r[n]) * l;
    return r[n] + u;
  }
  function Zi(t, e) {
    var i = t._adapter,
      n = t.options.time,
      a = n.parser,
      r = a || n.format,
      o = e;
    return "function" == typeof a && (o = a(o)), ut.isFinite(o) || (o = "string" == typeof r ? i.parse(o, r) : i.parse(o)), null !== o ? +o : (a || "function" != typeof r || (o = r(e), ut.isFinite(o) || (o = i.parse(o))), o);
  }
  function $i(t, e) {
    if (ut.isNullOrUndef(e)) return null;
    var i = t.options.time,
      n = Zi(t, t.getRightValue(e));
    return null === n ? n : (i.round && (n = +t._adapter.startOf(n, i.round)), n);
  }
  function Xi(t) {
    for (var e = ji.indexOf(t) + 1, i = ji.length; e < i; ++e) if (Bi[ji[e]].common) return ji[e];
  }
  function Ki(t, e, i, n) {
    var a,
      r = t._adapter,
      o = t.options,
      s = o.time,
      l = s.unit || function (t, e, i, n) {
        var a,
          r,
          o,
          s = ji.length;
        for (a = ji.indexOf(t); a < s - 1; ++a) if (o = (r = Bi[ji[a]]).steps ? r.steps[r.steps.length - 1] : Ei, r.common && Math.ceil((i - e) / (o * r.size)) <= n) return ji[a];
        return ji[s - 1];
      }(s.minUnit, e, i, n),
      u = Xi(l),
      d = Vi(s.stepSize, s.unitStepSize),
      h = "week" === l && s.isoWeekday,
      c = o.ticks.major.enabled,
      f = Bi[l],
      g = e,
      m = i,
      p = [];
    for (d || (d = function (t, e, i, n) {
      var a,
        r,
        o,
        s = e - t,
        l = Bi[i],
        u = l.size,
        d = l.steps;
      if (!d) return Math.ceil(s / (n * u));
      for (a = 0, r = d.length; a < r && (o = d[a], !(Math.ceil(s / (u * o)) <= n)); ++a);
      return o;
    }(e, i, l, n)), h && (g = +r.startOf(g, "isoWeek", h), m = +r.startOf(m, "isoWeek", h)), g = +r.startOf(g, h ? "day" : l), (m = +r.startOf(m, h ? "day" : l)) < i && (m = +r.add(m, 1, l)), a = g, c && u && !h && !s.round && (a = +r.startOf(a, u), a = +r.add(a, ~~((g - a) / (f.size * d)) * d, l)); a < m; a = +r.add(a, d, l)) p.push(+a);
    return p.push(+a), p;
  }
  var Ji = fi.extend({
      initialize: function initialize() {
        this.mergeTicksOptions(), fi.prototype.initialize.call(this);
      },
      update: function update() {
        var t = this.options,
          e = t.time || (t.time = {}),
          i = this._adapter = new si._date(t.adapters.date);
        return e.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), ut.mergeIf(e.displayFormats, i.formats()), fi.prototype.update.apply(this, arguments);
      },
      getRightValue: function getRightValue(t) {
        return t && void 0 !== t.t && (t = t.t), fi.prototype.getRightValue.call(this, t);
      },
      determineDataLimits: function determineDataLimits() {
        var t,
          e,
          i,
          n,
          a,
          r,
          o = this,
          s = o.chart,
          l = o._adapter,
          u = o.options.time,
          d = u.unit || "day",
          h = Ei,
          c = Hi,
          f = [],
          g = [],
          m = [],
          p = s.data.labels || [];
        for (t = 0, i = p.length; t < i; ++t) m.push($i(o, p[t]));
        for (t = 0, i = (s.data.datasets || []).length; t < i; ++t) if (s.isDatasetVisible(t)) {
          if (a = s.data.datasets[t].data, ut.isObject(a[0])) for (g[t] = [], e = 0, n = a.length; e < n; ++e) r = $i(o, a[e]), f.push(r), g[t][e] = r;else {
            for (e = 0, n = m.length; e < n; ++e) f.push(m[e]);
            g[t] = m.slice(0);
          }
        } else g[t] = [];
        m.length && (m = Gi(m).sort(Ui), h = Math.min(h, m[0]), c = Math.max(c, m[m.length - 1])), f.length && (f = Gi(f).sort(Ui), h = Math.min(h, f[0]), c = Math.max(c, f[f.length - 1])), h = $i(o, u.min) || h, c = $i(o, u.max) || c, h = h === Ei ? +l.startOf(Date.now(), d) : h, c = c === Hi ? +l.endOf(Date.now(), d) + 1 : c, o.min = Math.min(h, c), o.max = Math.max(h + 1, c), o._horizontal = o.isHorizontal(), o._table = [], o._timestamps = {
          data: f,
          datasets: g,
          labels: m
        };
      },
      buildTicks: function buildTicks() {
        var t,
          e,
          i,
          n = this,
          a = n.min,
          r = n.max,
          o = n.options,
          s = o.time,
          l = [],
          u = [];
        switch (o.ticks.source) {
          case "data":
            l = n._timestamps.data;
            break;
          case "labels":
            l = n._timestamps.labels;
            break;
          case "auto":
          default:
            l = Ki(n, a, r, n.getLabelCapacity(a));
        }
        for ("ticks" === o.bounds && l.length && (a = l[0], r = l[l.length - 1]), a = $i(n, s.min) || a, r = $i(n, s.max) || r, t = 0, e = l.length; t < e; ++t) (i = l[t]) >= a && i <= r && u.push(i);
        return n.min = a, n.max = r, n._unit = s.unit || function (t, e, i, n, a) {
          var r, o;
          for (r = ji.length - 1; r >= ji.indexOf(i); r--) if (o = ji[r], Bi[o].common && t._adapter.diff(a, n, o) >= e.length) return o;
          return ji[i ? ji.indexOf(i) : 0];
        }(n, u, s.minUnit, n.min, n.max), n._majorUnit = Xi(n._unit), n._table = function (t, e, i, n) {
          if ("linear" === n || !t.length) return [{
            time: e,
            pos: 0
          }, {
            time: i,
            pos: 1
          }];
          var a,
            r,
            o,
            s,
            l,
            u = [],
            d = [e];
          for (a = 0, r = t.length; a < r; ++a) (s = t[a]) > e && s < i && d.push(s);
          for (d.push(i), a = 0, r = d.length; a < r; ++a) l = d[a + 1], o = d[a - 1], s = d[a], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
            time: s,
            pos: a / (r - 1)
          });
          return u;
        }(n._timestamps.data, a, r, o.distribution), n._offsets = function (t, e, i, n, a) {
          var r,
            o,
            s = 0,
            l = 0;
          return a.offset && e.length && (a.time.min || (r = qi(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - r : (qi(t, "time", e[1], "pos") - r) / 2), a.time.max || (o = qi(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? o : (o - qi(t, "time", e[e.length - 2], "pos")) / 2)), {
            start: s,
            end: l
          };
        }(n._table, u, 0, 0, o), o.ticks.reverse && u.reverse(), function (t, e, i) {
          var n,
            a,
            r,
            o,
            s = [];
          for (n = 0, a = e.length; n < a; ++n) r = e[n], o = !!i && r === +t._adapter.startOf(r, i), s.push({
            value: r,
            major: o
          });
          return s;
        }(n, u, n._majorUnit);
      },
      getLabelForIndex: function getLabelForIndex(t, e) {
        var i = this,
          n = i._adapter,
          a = i.chart.data,
          r = i.options.time,
          o = a.labels && t < a.labels.length ? a.labels[t] : "",
          s = a.datasets[e].data[t];
        return ut.isObject(s) && (o = i.getRightValue(s)), r.tooltipFormat ? n.format(Zi(i, o), r.tooltipFormat) : "string" == typeof o ? o : n.format(Zi(i, o), r.displayFormats.datetime);
      },
      tickFormatFunction: function tickFormatFunction(t, e, i, n) {
        var a = this._adapter,
          r = this.options,
          o = r.time.displayFormats,
          s = o[this._unit],
          l = this._majorUnit,
          u = o[l],
          d = +a.startOf(t, l),
          h = r.ticks.major,
          c = h.enabled && l && u && t === d,
          f = a.format(t, n || (c ? u : s)),
          g = c ? h : r.ticks.minor,
          m = Vi(g.callback, g.userCallback);
        return m ? m(f, e, i) : f;
      },
      convertTicksToLabels: function convertTicksToLabels(t) {
        var e,
          i,
          n = [];
        for (e = 0, i = t.length; e < i; ++e) n.push(this.tickFormatFunction(t[e].value, e, t));
        return n;
      },
      getPixelForOffset: function getPixelForOffset(t) {
        var e = this,
          i = e.options.ticks.reverse,
          n = e._horizontal ? e.width : e.height,
          a = e._horizontal ? i ? e.right : e.left : i ? e.bottom : e.top,
          r = qi(e._table, "time", t, "pos"),
          o = n * (e._offsets.start + r) / (e._offsets.start + 1 + e._offsets.end);
        return i ? a - o : a + o;
      },
      getPixelForValue: function getPixelForValue(t, e, i) {
        var n = null;
        if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = $i(this, t)), null !== n) return this.getPixelForOffset(n);
      },
      getPixelForTick: function getPixelForTick(t) {
        var e = this.getTicks();
        return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
      },
      getValueForPixel: function getValueForPixel(t) {
        var e = this,
          i = e._horizontal ? e.width : e.height,
          n = e._horizontal ? e.left : e.top,
          a = (i ? (t - n) / i : 0) * (e._offsets.start + 1 + e._offsets.start) - e._offsets.end,
          r = qi(e._table, "pos", a, "time");
        return e._adapter._create(r);
      },
      getLabelWidth: function getLabelWidth(t) {
        var e = this.options.ticks,
          i = this.ctx.measureText(t).width,
          n = ut.toRadians(e.maxRotation),
          a = Math.cos(n),
          r = Math.sin(n);
        return i * a + Vi(e.fontSize, ot.global.defaultFontSize) * r;
      },
      getLabelCapacity: function getLabelCapacity(t) {
        var e = this,
          i = e.options.time.displayFormats.millisecond,
          n = e.tickFormatFunction(t, 0, [], i),
          a = e.getLabelWidth(n),
          r = e.isHorizontal() ? e.width : e.height,
          o = Math.floor(r / a);
        return o > 0 ? o : 1;
      }
    }),
    Qi = {
      position: "bottom",
      distribution: "linear",
      bounds: "data",
      adapters: {},
      time: {
        parser: !1,
        format: !1,
        unit: !1,
        round: !1,
        displayFormat: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {}
      },
      ticks: {
        autoSkip: !1,
        source: "auto",
        major: {
          enabled: !1
        }
      }
    };
  Ji._defaults = Qi;
  var tn,
    en = {
      category: gi,
      linear: xi,
      logarithmic: Si,
      radialLinear: Ni,
      time: Ji
    },
    nn = (function (t, e) {
      t.exports = function () {
        var e, i;
        function n() {
          return e.apply(null, arguments);
        }
        function a(t) {
          return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t);
        }
        function r(t) {
          return null != t && "[object Object]" === Object.prototype.toString.call(t);
        }
        function o(t) {
          return void 0 === t;
        }
        function s(t) {
          return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t);
        }
        function l(t) {
          return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
        }
        function u(t, e) {
          var i,
            n = [];
          for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
          return n;
        }
        function d(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        function h(t, e) {
          for (var i in e) d(e, i) && (t[i] = e[i]);
          return d(e, "toString") && (t.toString = e.toString), d(e, "valueOf") && (t.valueOf = e.valueOf), t;
        }
        function c(t, e, i, n) {
          return Oe(t, e, i, n, !0).utc();
        }
        function f(t) {
          return null == t._pf && (t._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
          }), t._pf;
        }
        function g(t) {
          if (null == t._isValid) {
            var e = f(t),
              n = i.call(e.parsedDateParts, function (t) {
                return null != t;
              }),
              a = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
            if (t._strict && (a = a && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return a;
            t._isValid = a;
          }
          return t._isValid;
        }
        function m(t) {
          var e = c(NaN);
          return null != t ? h(f(e), t) : f(e).userInvalidated = !0, e;
        }
        i = Array.prototype.some ? Array.prototype.some : function (t) {
          for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++) if (n in e && t.call(this, e[n], n, e)) return !0;
          return !1;
        };
        var p = n.momentProperties = [];
        function v(t, e) {
          var i, n, a;
          if (o(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), o(e._i) || (t._i = e._i), o(e._f) || (t._f = e._f), o(e._l) || (t._l = e._l), o(e._strict) || (t._strict = e._strict), o(e._tzm) || (t._tzm = e._tzm), o(e._isUTC) || (t._isUTC = e._isUTC), o(e._offset) || (t._offset = e._offset), o(e._pf) || (t._pf = f(e)), o(e._locale) || (t._locale = e._locale), p.length > 0) for (i = 0; i < p.length; i++) n = p[i], o(a = e[n]) || (t[n] = a);
          return t;
        }
        var y = !1;
        function b(t) {
          v(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === y && (y = !0, n.updateOffset(this), y = !1);
        }
        function x(t) {
          return t instanceof b || null != t && null != t._isAMomentObject;
        }
        function _(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        }
        function k(t) {
          var e = +t,
            i = 0;
          return 0 !== e && isFinite(e) && (i = _(e)), i;
        }
        function w(t, e, i) {
          var n,
            a = Math.min(t.length, e.length),
            r = Math.abs(t.length - e.length),
            o = 0;
          for (n = 0; n < a; n++) (i && t[n] !== e[n] || !i && k(t[n]) !== k(e[n])) && o++;
          return o + r;
        }
        function M(t) {
          !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t);
        }
        function S(t, e) {
          var i = !0;
          return h(function () {
            if (null != n.deprecationHandler && n.deprecationHandler(null, t), i) {
              for (var a, r = [], o = 0; o < arguments.length; o++) {
                if (a = "", "object" == _typeof(arguments[o])) {
                  for (var s in a += "\n[" + o + "] ", arguments[0]) a += s + ": " + arguments[0][s] + ", ";
                  a = a.slice(0, -2);
                } else a = arguments[o];
                r.push(a);
              }
              M(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + new Error().stack), i = !1;
            }
            return e.apply(this, arguments);
          }, e);
        }
        var D,
          C = {};
        function P(t, e) {
          null != n.deprecationHandler && n.deprecationHandler(t, e), C[t] || (M(e), C[t] = !0);
        }
        function T(t) {
          return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t);
        }
        function O(t, e) {
          var i,
            n = h({}, t);
          for (i in e) d(e, i) && (r(t[i]) && r(e[i]) ? (n[i] = {}, h(n[i], t[i]), h(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]);
          for (i in t) d(t, i) && !d(e, i) && r(t[i]) && (n[i] = h({}, n[i]));
          return n;
        }
        function I(t) {
          null != t && this.set(t);
        }
        n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, D = Object.keys ? Object.keys : function (t) {
          var e,
            i = [];
          for (e in t) d(t, e) && i.push(e);
          return i;
        };
        var A = {};
        function F(t, e) {
          var i = t.toLowerCase();
          A[i] = A[i + "s"] = A[e] = t;
        }
        function R(t) {
          return "string" == typeof t ? A[t] || A[t.toLowerCase()] : void 0;
        }
        function L(t) {
          var e,
            i,
            n = {};
          for (i in t) d(t, i) && (e = R(i)) && (n[e] = t[i]);
          return n;
        }
        var W = {};
        function Y(t, e) {
          W[t] = e;
        }
        function N(t, e, i) {
          var n = "" + Math.abs(t),
            a = e - n.length,
            r = t >= 0;
          return (r ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + n;
        }
        var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          V = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          H = {},
          E = {};
        function B(t, e, i, n) {
          var a = n;
          "string" == typeof n && (a = function a() {
            return this[n]();
          }), t && (E[t] = a), e && (E[e[0]] = function () {
            return N(a.apply(this, arguments), e[1], e[2]);
          }), i && (E[i] = function () {
            return this.localeData().ordinal(a.apply(this, arguments), t);
          });
        }
        function j(t, e) {
          return t.isValid() ? (e = U(e, t.localeData()), H[e] = H[e] || function (t) {
            var e,
              i,
              n,
              a = t.match(z);
            for (e = 0, i = a.length; e < i; e++) E[a[e]] ? a[e] = E[a[e]] : a[e] = (n = a[e]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
            return function (e) {
              var n,
                r = "";
              for (n = 0; n < i; n++) r += T(a[n]) ? a[n].call(e, t) : a[n];
              return r;
            };
          }(e), H[e](t)) : t.localeData().invalidDate();
        }
        function U(t, e) {
          var i = 5;
          function n(t) {
            return e.longDateFormat(t) || t;
          }
          for (V.lastIndex = 0; i >= 0 && V.test(t);) t = t.replace(V, n), V.lastIndex = 0, i -= 1;
          return t;
        }
        var G = /\d/,
          q = /\d\d/,
          Z = /\d{3}/,
          $ = /\d{4}/,
          X = /[+-]?\d{6}/,
          K = /\d\d?/,
          J = /\d\d\d\d?/,
          Q = /\d\d\d\d\d\d?/,
          tt = /\d{1,3}/,
          et = /\d{1,4}/,
          it = /[+-]?\d{1,6}/,
          nt = /\d+/,
          at = /[+-]?\d+/,
          rt = /Z|[+-]\d\d:?\d\d/gi,
          ot = /Z|[+-]\d\d(?::?\d\d)?/gi,
          st = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          lt = {};
        function ut(t, e, i) {
          lt[t] = T(e) ? e : function (t, n) {
            return t && i ? i : e;
          };
        }
        function dt(t, e) {
          return d(lt, t) ? lt[t](e._strict, e._locale) : new RegExp(ht(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, i, n, a) {
            return e || i || n || a;
          })));
        }
        function ht(t) {
          return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        var ct = {};
        function ft(t, e) {
          var i,
            n = e;
          for ("string" == typeof t && (t = [t]), s(e) && (n = function n(t, i) {
            i[e] = k(t);
          }), i = 0; i < t.length; i++) ct[t[i]] = n;
        }
        function gt(t, e) {
          ft(t, function (t, i, n, a) {
            n._w = n._w || {}, e(t, n._w, n, a);
          });
        }
        function mt(t, e, i) {
          null != e && d(ct, t) && ct[t](e, i._a, i, t);
        }
        var pt = 0,
          vt = 1,
          yt = 2,
          bt = 3,
          xt = 4,
          _t = 5,
          kt = 6,
          wt = 7,
          Mt = 8;
        function St(t) {
          return Dt(t) ? 366 : 365;
        }
        function Dt(t) {
          return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
        }
        B("Y", 0, 0, function () {
          var t = this.year();
          return t <= 9999 ? "" + t : "+" + t;
        }), B(0, ["YY", 2], 0, function () {
          return this.year() % 100;
        }), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), F("year", "y"), Y("year", 1), ut("Y", at), ut("YY", K, q), ut("YYYY", et, $), ut("YYYYY", it, X), ut("YYYYYY", it, X), ft(["YYYYY", "YYYYYY"], pt), ft("YYYY", function (t, e) {
          e[pt] = 2 === t.length ? n.parseTwoDigitYear(t) : k(t);
        }), ft("YY", function (t, e) {
          e[pt] = n.parseTwoDigitYear(t);
        }), ft("Y", function (t, e) {
          e[pt] = parseInt(t, 10);
        }), n.parseTwoDigitYear = function (t) {
          return k(t) + (k(t) > 68 ? 1900 : 2e3);
        };
        var Ct,
          Pt = Tt("FullYear", !0);
        function Tt(t, e) {
          return function (i) {
            return null != i ? (It(this, t, i), n.updateOffset(this, e), this) : Ot(this, t);
          };
        }
        function Ot(t, e) {
          return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
        }
        function It(t, e, i) {
          t.isValid() && !isNaN(i) && ("FullYear" === e && Dt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), At(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i));
        }
        function At(t, e) {
          if (isNaN(t) || isNaN(e)) return NaN;
          var i,
            n = (e % (i = 12) + i) % i;
          return t += (e - n) / 12, 1 === n ? Dt(t) ? 29 : 28 : 31 - n % 7 % 2;
        }
        Ct = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
          var e;
          for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
          return -1;
        }, B("M", ["MM", 2], "Mo", function () {
          return this.month() + 1;
        }), B("MMM", 0, 0, function (t) {
          return this.localeData().monthsShort(this, t);
        }), B("MMMM", 0, 0, function (t) {
          return this.localeData().months(this, t);
        }), F("month", "M"), Y("month", 8), ut("M", K), ut("MM", K, q), ut("MMM", function (t, e) {
          return e.monthsShortRegex(t);
        }), ut("MMMM", function (t, e) {
          return e.monthsRegex(t);
        }), ft(["M", "MM"], function (t, e) {
          e[vt] = k(t) - 1;
        }), ft(["MMM", "MMMM"], function (t, e, i, n) {
          var a = i._locale.monthsParse(t, n, i._strict);
          null != a ? e[vt] = a : f(i).invalidMonth = t;
        });
        var Ft = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          Rt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          Lt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
        function Wt(t, e) {
          var i;
          if (!t.isValid()) return t;
          if ("string" == typeof e) if (/^\d+$/.test(e)) e = k(e);else if (!s(e = t.localeData().monthsParse(e))) return t;
          return i = Math.min(t.date(), At(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t;
        }
        function Yt(t) {
          return null != t ? (Wt(this, t), n.updateOffset(this, !0), this) : Ot(this, "Month");
        }
        var Nt = st,
          zt = st;
        function Vt() {
          function t(t, e) {
            return e.length - t.length;
          }
          var e,
            i,
            n = [],
            a = [],
            r = [];
          for (e = 0; e < 12; e++) i = c([2e3, e]), n.push(this.monthsShort(i, "")), a.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
          for (n.sort(t), a.sort(t), r.sort(t), e = 0; e < 12; e++) n[e] = ht(n[e]), a[e] = ht(a[e]);
          for (e = 0; e < 24; e++) r[e] = ht(r[e]);
          this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
        }
        function Ht(t) {
          var e;
          if (t < 100 && t >= 0) {
            var i = Array.prototype.slice.call(arguments);
            i[0] = t + 400, e = new Date(Date.UTC.apply(null, i)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t);
          } else e = new Date(Date.UTC.apply(null, arguments));
          return e;
        }
        function Et(t, e, i) {
          var n = 7 + e - i,
            a = (7 + Ht(t, 0, n).getUTCDay() - e) % 7;
          return -a + n - 1;
        }
        function Bt(t, e, i, n, a) {
          var r,
            o,
            s = (7 + i - n) % 7,
            l = Et(t, n, a),
            u = 1 + 7 * (e - 1) + s + l;
          return u <= 0 ? o = St(r = t - 1) + u : u > St(t) ? (r = t + 1, o = u - St(t)) : (r = t, o = u), {
            year: r,
            dayOfYear: o
          };
        }
        function jt(t, e, i) {
          var n,
            a,
            r = Et(t.year(), e, i),
            o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
          return o < 1 ? (a = t.year() - 1, n = o + Ut(a, e, i)) : o > Ut(t.year(), e, i) ? (n = o - Ut(t.year(), e, i), a = t.year() + 1) : (a = t.year(), n = o), {
            week: n,
            year: a
          };
        }
        function Ut(t, e, i) {
          var n = Et(t, e, i),
            a = Et(t + 1, e, i);
          return (St(t) - n + a) / 7;
        }
        function Gt(t, e) {
          return t.slice(e, 7).concat(t.slice(0, e));
        }
        B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), F("week", "w"), F("isoWeek", "W"), Y("week", 5), Y("isoWeek", 5), ut("w", K), ut("ww", K, q), ut("W", K), ut("WW", K, q), gt(["w", "ww", "W", "WW"], function (t, e, i, n) {
          e[n.substr(0, 1)] = k(t);
        }), B("d", 0, "do", "day"), B("dd", 0, 0, function (t) {
          return this.localeData().weekdaysMin(this, t);
        }), B("ddd", 0, 0, function (t) {
          return this.localeData().weekdaysShort(this, t);
        }), B("dddd", 0, 0, function (t) {
          return this.localeData().weekdays(this, t);
        }), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), F("day", "d"), F("weekday", "e"), F("isoWeekday", "E"), Y("day", 11), Y("weekday", 11), Y("isoWeekday", 11), ut("d", K), ut("e", K), ut("E", K), ut("dd", function (t, e) {
          return e.weekdaysMinRegex(t);
        }), ut("ddd", function (t, e) {
          return e.weekdaysShortRegex(t);
        }), ut("dddd", function (t, e) {
          return e.weekdaysRegex(t);
        }), gt(["dd", "ddd", "dddd"], function (t, e, i, n) {
          var a = i._locale.weekdaysParse(t, n, i._strict);
          null != a ? e.d = a : f(i).invalidWeekday = t;
        }), gt(["d", "e", "E"], function (t, e, i, n) {
          e[n] = k(t);
        });
        var qt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          Zt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          $t = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          Xt = st,
          Kt = st,
          Jt = st;
        function Qt() {
          function t(t, e) {
            return e.length - t.length;
          }
          var e,
            i,
            n,
            a,
            r,
            o = [],
            s = [],
            l = [],
            u = [];
          for (e = 0; e < 7; e++) i = c([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), a = this.weekdaysShort(i, ""), r = this.weekdays(i, ""), o.push(n), s.push(a), l.push(r), u.push(n), u.push(a), u.push(r);
          for (o.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) s[e] = ht(s[e]), l[e] = ht(l[e]), u[e] = ht(u[e]);
          this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i");
        }
        function te() {
          return this.hours() % 12 || 12;
        }
        function ee(t, e) {
          B(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e);
          });
        }
        function ie(t, e) {
          return e._meridiemParse;
        }
        B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, te), B("k", ["kk", 2], 0, function () {
          return this.hours() || 24;
        }), B("hmm", 0, 0, function () {
          return "" + te.apply(this) + N(this.minutes(), 2);
        }), B("hmmss", 0, 0, function () {
          return "" + te.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2);
        }), B("Hmm", 0, 0, function () {
          return "" + this.hours() + N(this.minutes(), 2);
        }), B("Hmmss", 0, 0, function () {
          return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2);
        }), ee("a", !0), ee("A", !1), F("hour", "h"), Y("hour", 13), ut("a", ie), ut("A", ie), ut("H", K), ut("h", K), ut("k", K), ut("HH", K, q), ut("hh", K, q), ut("kk", K, q), ut("hmm", J), ut("hmmss", Q), ut("Hmm", J), ut("Hmmss", Q), ft(["H", "HH"], bt), ft(["k", "kk"], function (t, e, i) {
          var n = k(t);
          e[bt] = 24 === n ? 0 : n;
        }), ft(["a", "A"], function (t, e, i) {
          i._isPm = i._locale.isPM(t), i._meridiem = t;
        }), ft(["h", "hh"], function (t, e, i) {
          e[bt] = k(t), f(i).bigHour = !0;
        }), ft("hmm", function (t, e, i) {
          var n = t.length - 2;
          e[bt] = k(t.substr(0, n)), e[xt] = k(t.substr(n)), f(i).bigHour = !0;
        }), ft("hmmss", function (t, e, i) {
          var n = t.length - 4,
            a = t.length - 2;
          e[bt] = k(t.substr(0, n)), e[xt] = k(t.substr(n, 2)), e[_t] = k(t.substr(a)), f(i).bigHour = !0;
        }), ft("Hmm", function (t, e, i) {
          var n = t.length - 2;
          e[bt] = k(t.substr(0, n)), e[xt] = k(t.substr(n));
        }), ft("Hmmss", function (t, e, i) {
          var n = t.length - 4,
            a = t.length - 2;
          e[bt] = k(t.substr(0, n)), e[xt] = k(t.substr(n, 2)), e[_t] = k(t.substr(a));
        });
        var ne,
          ae = Tt("Hours", !0),
          re = {
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
            },
            longDateFormat: {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
            },
            months: Rt,
            monthsShort: Lt,
            week: {
              dow: 0,
              doy: 6
            },
            weekdays: qt,
            weekdaysMin: $t,
            weekdaysShort: Zt,
            meridiemParse: /[ap]\.?m?\.?/i
          },
          oe = {},
          se = {};
        function le(t) {
          return t ? t.toLowerCase().replace("_", "-") : t;
        }
        function ue(e) {
          var i = null;
          if (!oe[e] && t && t.exports) try {
            i = ne._abbr;
            var n = _e;
            n("./locale/" + e), de(i);
          } catch (t) {}
          return oe[e];
        }
        function de(t, e) {
          var i;
          return t && ((i = o(e) ? ce(t) : he(t, e)) ? ne = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), ne._abbr;
        }
        function he(t, e) {
          if (null !== e) {
            var i,
              n = re;
            if (e.abbr = t, null != oe[t]) P("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = oe[t]._config;else if (null != e.parentLocale) if (null != oe[e.parentLocale]) n = oe[e.parentLocale]._config;else {
              if (null == (i = ue(e.parentLocale))) return se[e.parentLocale] || (se[e.parentLocale] = []), se[e.parentLocale].push({
                name: t,
                config: e
              }), null;
              n = i._config;
            }
            return oe[t] = new I(O(n, e)), se[t] && se[t].forEach(function (t) {
              he(t.name, t.config);
            }), de(t), oe[t];
          }
          return delete oe[t], null;
        }
        function ce(t) {
          var e;
          if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ne;
          if (!a(t)) {
            if (e = ue(t)) return e;
            t = [t];
          }
          return function (t) {
            for (var e, i, n, a, r = 0; r < t.length;) {
              for (a = le(t[r]).split("-"), e = a.length, i = (i = le(t[r + 1])) ? i.split("-") : null; e > 0;) {
                if (n = ue(a.slice(0, e).join("-"))) return n;
                if (i && i.length >= e && w(a, i, !0) >= e - 1) break;
                e--;
              }
              r++;
            }
            return ne;
          }(t);
        }
        function fe(t) {
          var e,
            i = t._a;
          return i && -2 === f(t).overflow && (e = i[vt] < 0 || i[vt] > 11 ? vt : i[yt] < 1 || i[yt] > At(i[pt], i[vt]) ? yt : i[bt] < 0 || i[bt] > 24 || 24 === i[bt] && (0 !== i[xt] || 0 !== i[_t] || 0 !== i[kt]) ? bt : i[xt] < 0 || i[xt] > 59 ? xt : i[_t] < 0 || i[_t] > 59 ? _t : i[kt] < 0 || i[kt] > 999 ? kt : -1, f(t)._overflowDayOfYear && (e < pt || e > yt) && (e = yt), f(t)._overflowWeeks && -1 === e && (e = wt), f(t)._overflowWeekday && -1 === e && (e = Mt), f(t).overflow = e), t;
        }
        function ge(t, e, i) {
          return null != t ? t : null != e ? e : i;
        }
        function me(t) {
          var e,
            i,
            a,
            r,
            o,
            s = [];
          if (!t._d) {
            for (a = function (t) {
              var e = new Date(n.now());
              return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()];
            }(t), t._w && null == t._a[yt] && null == t._a[vt] && function (t) {
              var e, i, n, a, r, o, s, l;
              if (null != (e = t._w).GG || null != e.W || null != e.E) r = 1, o = 4, i = ge(e.GG, t._a[pt], jt(Ie(), 1, 4).year), n = ge(e.W, 1), ((a = ge(e.E, 1)) < 1 || a > 7) && (l = !0);else {
                r = t._locale._week.dow, o = t._locale._week.doy;
                var u = jt(Ie(), r, o);
                i = ge(e.gg, t._a[pt], u.year), n = ge(e.w, u.week), null != e.d ? ((a = e.d) < 0 || a > 6) && (l = !0) : null != e.e ? (a = e.e + r, (e.e < 0 || e.e > 6) && (l = !0)) : a = r;
              }
              n < 1 || n > Ut(i, r, o) ? f(t)._overflowWeeks = !0 : null != l ? f(t)._overflowWeekday = !0 : (s = Bt(i, n, a, r, o), t._a[pt] = s.year, t._dayOfYear = s.dayOfYear);
            }(t), null != t._dayOfYear && (o = ge(t._a[pt], a[pt]), (t._dayOfYear > St(o) || 0 === t._dayOfYear) && (f(t)._overflowDayOfYear = !0), i = Ht(o, 0, t._dayOfYear), t._a[vt] = i.getUTCMonth(), t._a[yt] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = s[e] = a[e];
            for (; e < 7; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[bt] && 0 === t._a[xt] && 0 === t._a[_t] && 0 === t._a[kt] && (t._nextDay = !0, t._a[bt] = 0), t._d = (t._useUTC ? Ht : function (t, e, i, n, a, r, o) {
              var s;
              return t < 100 && t >= 0 ? (s = new Date(t + 400, e, i, n, a, r, o), isFinite(s.getFullYear()) && s.setFullYear(t)) : s = new Date(t, e, i, n, a, r, o), s;
            }).apply(null, s), r = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[bt] = 24), t._w && void 0 !== t._w.d && t._w.d !== r && (f(t).weekdayMismatch = !0);
          }
        }
        var pe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          ve = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          ye = /Z|[+-]\d\d(?::?\d\d)?/,
          be = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
          xe = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
          ke = /^\/?Date\((\-?\d+)/i;
        function we(t) {
          var e,
            i,
            n,
            a,
            r,
            o,
            s = t._i,
            l = pe.exec(s) || ve.exec(s);
          if (l) {
            for (f(t).iso = !0, e = 0, i = be.length; e < i; e++) if (be[e][1].exec(l[1])) {
              a = be[e][0], n = !1 !== be[e][2];
              break;
            }
            if (null == a) return void (t._isValid = !1);
            if (l[3]) {
              for (e = 0, i = xe.length; e < i; e++) if (xe[e][1].exec(l[3])) {
                r = (l[2] || " ") + xe[e][0];
                break;
              }
              if (null == r) return void (t._isValid = !1);
            }
            if (!n && null != r) return void (t._isValid = !1);
            if (l[4]) {
              if (!ye.exec(l[4])) return void (t._isValid = !1);
              o = "Z";
            }
            t._f = a + (r || "") + (o || ""), Pe(t);
          } else t._isValid = !1;
        }
        var Me = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
        function Se(t) {
          var e = parseInt(t, 10);
          return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
        }
        var De = {
          UT: 0,
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480
        };
        function Ce(t) {
          var e,
            i,
            n,
            a,
            r,
            o,
            s,
            l = Me.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
          if (l) {
            var u = (e = l[4], i = l[3], n = l[2], a = l[5], r = l[6], o = l[7], s = [Se(e), Lt.indexOf(i), parseInt(n, 10), parseInt(a, 10), parseInt(r, 10)], o && s.push(parseInt(o, 10)), s);
            if (!function (t, e, i) {
              if (t) {
                var n = Zt.indexOf(t),
                  a = new Date(e[0], e[1], e[2]).getDay();
                if (n !== a) return f(i).weekdayMismatch = !0, i._isValid = !1, !1;
              }
              return !0;
            }(l[1], u, t)) return;
            t._a = u, t._tzm = function (t, e, i) {
              if (t) return De[t];
              if (e) return 0;
              var n = parseInt(i, 10),
                a = n % 100,
                r = (n - a) / 100;
              return 60 * r + a;
            }(l[8], l[9], l[10]), t._d = Ht.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), f(t).rfc2822 = !0;
          } else t._isValid = !1;
        }
        function Pe(t) {
          if (t._f !== n.ISO_8601) {
            if (t._f !== n.RFC_2822) {
              t._a = [], f(t).empty = !0;
              var e,
                i,
                a,
                r,
                o,
                s = "" + t._i,
                l = s.length,
                u = 0;
              for (a = U(t._f, t._locale).match(z) || [], e = 0; e < a.length; e++) r = a[e], (i = (s.match(dt(r, t)) || [])[0]) && ((o = s.substr(0, s.indexOf(i))).length > 0 && f(t).unusedInput.push(o), s = s.slice(s.indexOf(i) + i.length), u += i.length), E[r] ? (i ? f(t).empty = !1 : f(t).unusedTokens.push(r), mt(r, i, t)) : t._strict && !i && f(t).unusedTokens.push(r);
              f(t).charsLeftOver = l - u, s.length > 0 && f(t).unusedInput.push(s), t._a[bt] <= 12 && !0 === f(t).bigHour && t._a[bt] > 0 && (f(t).bigHour = void 0), f(t).parsedDateParts = t._a.slice(0), f(t).meridiem = t._meridiem, t._a[bt] = (d = t._locale, h = t._a[bt], null == (c = t._meridiem) ? h : null != d.meridiemHour ? d.meridiemHour(h, c) : null != d.isPM ? ((g = d.isPM(c)) && h < 12 && (h += 12), g || 12 !== h || (h = 0), h) : h), me(t), fe(t);
            } else Ce(t);
          } else we(t);
          var d, h, c, g;
        }
        function Te(t) {
          var e = t._i,
            i = t._f;
          return t._locale = t._locale || ce(t._l), null === e || void 0 === i && "" === e ? m({
            nullInput: !0
          }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), x(e) ? new b(fe(e)) : (l(e) ? t._d = e : a(i) ? function (t) {
            var e, i, n, a, r;
            if (0 === t._f.length) return f(t).invalidFormat = !0, void (t._d = new Date(NaN));
            for (a = 0; a < t._f.length; a++) r = 0, e = v({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[a], Pe(e), g(e) && (r += f(e).charsLeftOver, r += 10 * f(e).unusedTokens.length, f(e).score = r, (null == n || r < n) && (n = r, i = e));
            h(t, i || e);
          }(t) : i ? Pe(t) : function (t) {
            var e = t._i;
            o(e) ? t._d = new Date(n.now()) : l(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function (t) {
              var e = ke.exec(t._i);
              null === e ? (we(t), !1 === t._isValid && (delete t._isValid, Ce(t), !1 === t._isValid && (delete t._isValid, n.createFromInputFallback(t)))) : t._d = new Date(+e[1]);
            }(t) : a(e) ? (t._a = u(e.slice(0), function (t) {
              return parseInt(t, 10);
            }), me(t)) : r(e) ? function (t) {
              if (!t._d) {
                var e = L(t._i);
                t._a = u([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                  return t && parseInt(t, 10);
                }), me(t);
              }
            }(t) : s(e) ? t._d = new Date(e) : n.createFromInputFallback(t);
          }(t), g(t) || (t._d = null), t));
        }
        function Oe(t, e, i, n, o) {
          var s,
            l = {};
          return !0 !== i && !1 !== i || (n = i, i = void 0), (r(t) && function (t) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
            var e;
            for (e in t) if (t.hasOwnProperty(e)) return !1;
            return !0;
          }(t) || a(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = o, l._l = i, l._i = t, l._f = e, l._strict = n, (s = new b(fe(Te(l))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s;
        }
        function Ie(t, e, i, n) {
          return Oe(t, e, i, n, !1);
        }
        n.createFromInputFallback = S("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
          t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
        }), n.ISO_8601 = function () {}, n.RFC_2822 = function () {};
        var Ae = S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = Ie.apply(null, arguments);
            return this.isValid() && t.isValid() ? t < this ? this : t : m();
          }),
          Fe = S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = Ie.apply(null, arguments);
            return this.isValid() && t.isValid() ? t > this ? this : t : m();
          });
        function Re(t, e) {
          var i, n;
          if (1 === e.length && a(e[0]) && (e = e[0]), !e.length) return Ie();
          for (i = e[0], n = 1; n < e.length; ++n) e[n].isValid() && !e[n][t](i) || (i = e[n]);
          return i;
        }
        var Le = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
        function We(t) {
          var e = L(t),
            i = e.year || 0,
            n = e.quarter || 0,
            a = e.month || 0,
            r = e.week || e.isoWeek || 0,
            o = e.day || 0,
            s = e.hour || 0,
            l = e.minute || 0,
            u = e.second || 0,
            d = e.millisecond || 0;
          this._isValid = function (t) {
            for (var e in t) if (-1 === Ct.call(Le, e) || null != t[e] && isNaN(t[e])) return !1;
            for (var i = !1, n = 0; n < Le.length; ++n) if (t[Le[n]]) {
              if (i) return !1;
              parseFloat(t[Le[n]]) !== k(t[Le[n]]) && (i = !0);
            }
            return !0;
          }(e), this._milliseconds = +d + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +o + 7 * r, this._months = +a + 3 * n + 12 * i, this._data = {}, this._locale = ce(), this._bubble();
        }
        function Ye(t) {
          return t instanceof We;
        }
        function Ne(t) {
          return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
        }
        function ze(t, e) {
          B(t, 0, 0, function () {
            var t = this.utcOffset(),
              i = "+";
            return t < 0 && (t = -t, i = "-"), i + N(~~(t / 60), 2) + e + N(~~t % 60, 2);
          });
        }
        ze("Z", ":"), ze("ZZ", ""), ut("Z", ot), ut("ZZ", ot), ft(["Z", "ZZ"], function (t, e, i) {
          i._useUTC = !0, i._tzm = He(ot, t);
        });
        var Ve = /([\+\-]|\d\d)/gi;
        function He(t, e) {
          var i = (e || "").match(t);
          if (null === i) return null;
          var n = i[i.length - 1] || [],
            a = (n + "").match(Ve) || ["-", 0, 0],
            r = 60 * a[1] + k(a[2]);
          return 0 === r ? 0 : "+" === a[0] ? r : -r;
        }
        function Ee(t, e) {
          var i, a;
          return e._isUTC ? (i = e.clone(), a = (x(t) || l(t) ? t.valueOf() : Ie(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + a), n.updateOffset(i, !1), i) : Ie(t).local();
        }
        function Be(t) {
          return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
        }
        function je() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }
        n.updateOffset = function () {};
        var Ue = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
          Ge = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function qe(t, e) {
          var i,
            n,
            a,
            r,
            o,
            l,
            u = t,
            h = null;
          return Ye(t) ? u = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
          } : s(t) ? (u = {}, e ? u[e] = t : u.milliseconds = t) : (h = Ue.exec(t)) ? (i = "-" === h[1] ? -1 : 1, u = {
            y: 0,
            d: k(h[yt]) * i,
            h: k(h[bt]) * i,
            m: k(h[xt]) * i,
            s: k(h[_t]) * i,
            ms: k(Ne(1e3 * h[kt])) * i
          }) : (h = Ge.exec(t)) ? (i = "-" === h[1] ? -1 : 1, u = {
            y: Ze(h[2], i),
            M: Ze(h[3], i),
            w: Ze(h[4], i),
            d: Ze(h[5], i),
            h: Ze(h[6], i),
            m: Ze(h[7], i),
            s: Ze(h[8], i)
          }) : null == u ? u = {} : "object" == _typeof(u) && ("from" in u || "to" in u) && (r = Ie(u.from), o = Ie(u.to), a = r.isValid() && o.isValid() ? (o = Ee(o, r), r.isBefore(o) ? l = $e(r, o) : ((l = $e(o, r)).milliseconds = -l.milliseconds, l.months = -l.months), l) : {
            milliseconds: 0,
            months: 0
          }, (u = {}).ms = a.milliseconds, u.M = a.months), n = new We(u), Ye(t) && d(t, "_locale") && (n._locale = t._locale), n;
        }
        function Ze(t, e) {
          var i = t && parseFloat(t.replace(",", "."));
          return (isNaN(i) ? 0 : i) * e;
        }
        function $e(t, e) {
          var i = {};
          return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i;
        }
        function Xe(t, e) {
          return function (i, n) {
            var a;
            return null === n || isNaN(+n) || (P(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = i, i = n, n = a), Ke(this, qe(i = "string" == typeof i ? +i : i, n), t), this;
          };
        }
        function Ke(t, e, i, a) {
          var r = e._milliseconds,
            o = Ne(e._days),
            s = Ne(e._months);
          t.isValid() && (a = null == a || a, s && Wt(t, Ot(t, "Month") + s * i), o && It(t, "Date", Ot(t, "Date") + o * i), r && t._d.setTime(t._d.valueOf() + r * i), a && n.updateOffset(t, o || s));
        }
        qe.fn = We.prototype, qe.invalid = function () {
          return qe(NaN);
        };
        var Je = Xe(1, "add"),
          Qe = Xe(-1, "subtract");
        function ti(t, e) {
          var i,
            n,
            a = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            r = t.clone().add(a, "months");
          return e - r < 0 ? (i = t.clone().add(a - 1, "months"), n = (e - r) / (r - i)) : (i = t.clone().add(a + 1, "months"), n = (e - r) / (i - r)), -(a + n) || 0;
        }
        function ei(t) {
          var e;
          return void 0 === t ? this._locale._abbr : (null != (e = ce(t)) && (this._locale = e), this);
        }
        n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var ii = S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
          return void 0 === t ? this.localeData() : this.locale(t);
        });
        function ni() {
          return this._locale;
        }
        var ai = 1e3,
          ri = 60 * ai,
          oi = 60 * ri,
          si = 3506328 * oi;
        function li(t, e) {
          return (t % e + e) % e;
        }
        function ui(t, e, i) {
          return t < 100 && t >= 0 ? new Date(t + 400, e, i) - si : new Date(t, e, i).valueOf();
        }
        function di(t, e, i) {
          return t < 100 && t >= 0 ? Date.UTC(t + 400, e, i) - si : Date.UTC(t, e, i);
        }
        function hi(t, e) {
          B(0, [t, t.length], 0, e);
        }
        function ci(t, e, i, n, a) {
          var r;
          return null == t ? jt(this, n, a).year : (r = Ut(t, n, a), e > r && (e = r), function (t, e, i, n, a) {
            var r = Bt(t, e, i, n, a),
              o = Ht(r.year, 0, r.dayOfYear);
            return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
          }.call(this, t, e, i, n, a));
        }
        B(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100;
        }), B(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100;
        }), hi("gggg", "weekYear"), hi("ggggg", "weekYear"), hi("GGGG", "isoWeekYear"), hi("GGGGG", "isoWeekYear"), F("weekYear", "gg"), F("isoWeekYear", "GG"), Y("weekYear", 1), Y("isoWeekYear", 1), ut("G", at), ut("g", at), ut("GG", K, q), ut("gg", K, q), ut("GGGG", et, $), ut("gggg", et, $), ut("GGGGG", it, X), ut("ggggg", it, X), gt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, n) {
          e[n.substr(0, 2)] = k(t);
        }), gt(["gg", "GG"], function (t, e, i, a) {
          e[a] = n.parseTwoDigitYear(t);
        }), B("Q", 0, "Qo", "quarter"), F("quarter", "Q"), Y("quarter", 7), ut("Q", G), ft("Q", function (t, e) {
          e[vt] = 3 * (k(t) - 1);
        }), B("D", ["DD", 2], "Do", "date"), F("date", "D"), Y("date", 9), ut("D", K), ut("DD", K, q), ut("Do", function (t, e) {
          return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
        }), ft(["D", "DD"], yt), ft("Do", function (t, e) {
          e[yt] = k(t.match(K)[0]);
        });
        var fi = Tt("Date", !0);
        B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), F("dayOfYear", "DDD"), Y("dayOfYear", 4), ut("DDD", tt), ut("DDDD", Z), ft(["DDD", "DDDD"], function (t, e, i) {
          i._dayOfYear = k(t);
        }), B("m", ["mm", 2], 0, "minute"), F("minute", "m"), Y("minute", 14), ut("m", K), ut("mm", K, q), ft(["m", "mm"], xt);
        var gi = Tt("Minutes", !1);
        B("s", ["ss", 2], 0, "second"), F("second", "s"), Y("second", 15), ut("s", K), ut("ss", K, q), ft(["s", "ss"], _t);
        var mi,
          pi = Tt("Seconds", !1);
        for (B("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }), B(0, ["SS", 2], 0, function () {
          return ~~(this.millisecond() / 10);
        }), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function () {
          return 10 * this.millisecond();
        }), B(0, ["SSSSS", 5], 0, function () {
          return 100 * this.millisecond();
        }), B(0, ["SSSSSS", 6], 0, function () {
          return 1e3 * this.millisecond();
        }), B(0, ["SSSSSSS", 7], 0, function () {
          return 1e4 * this.millisecond();
        }), B(0, ["SSSSSSSS", 8], 0, function () {
          return 1e5 * this.millisecond();
        }), B(0, ["SSSSSSSSS", 9], 0, function () {
          return 1e6 * this.millisecond();
        }), F("millisecond", "ms"), Y("millisecond", 16), ut("S", tt, G), ut("SS", tt, q), ut("SSS", tt, Z), mi = "SSSS"; mi.length <= 9; mi += "S") ut(mi, nt);
        function vi(t, e) {
          e[kt] = k(1e3 * ("0." + t));
        }
        for (mi = "S"; mi.length <= 9; mi += "S") ft(mi, vi);
        var yi = Tt("Milliseconds", !1);
        B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
        var bi = b.prototype;
        function xi(t) {
          return t;
        }
        bi.add = Je, bi.calendar = function (t, e) {
          var i = t || Ie(),
            a = Ee(i, this).startOf("day"),
            r = n.calendarFormat(this, a) || "sameElse",
            o = e && (T(e[r]) ? e[r].call(this, i) : e[r]);
          return this.format(o || this.localeData().calendar(r, this, Ie(i)));
        }, bi.clone = function () {
          return new b(this);
        }, bi.diff = function (t, e, i) {
          var n, a, r;
          if (!this.isValid()) return NaN;
          if (!(n = Ee(t, this)).isValid()) return NaN;
          switch (a = 6e4 * (n.utcOffset() - this.utcOffset()), e = R(e)) {
            case "year":
              r = ti(this, n) / 12;
              break;
            case "month":
              r = ti(this, n);
              break;
            case "quarter":
              r = ti(this, n) / 3;
              break;
            case "second":
              r = (this - n) / 1e3;
              break;
            case "minute":
              r = (this - n) / 6e4;
              break;
            case "hour":
              r = (this - n) / 36e5;
              break;
            case "day":
              r = (this - n - a) / 864e5;
              break;
            case "week":
              r = (this - n - a) / 6048e5;
              break;
            default:
              r = this - n;
          }
          return i ? r : _(r);
        }, bi.endOf = function (t) {
          var e;
          if (void 0 === (t = R(t)) || "millisecond" === t || !this.isValid()) return this;
          var i = this._isUTC ? di : ui;
          switch (t) {
            case "year":
              e = i(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              e = i(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
              break;
            case "month":
              e = i(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              e = i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
              break;
            case "isoWeek":
              e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
              break;
            case "day":
            case "date":
              e = i(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              e = this._d.valueOf(), e += oi - li(e + (this._isUTC ? 0 : this.utcOffset() * ri), oi) - 1;
              break;
            case "minute":
              e = this._d.valueOf(), e += ri - li(e, ri) - 1;
              break;
            case "second":
              e = this._d.valueOf(), e += ai - li(e, ai) - 1;
          }
          return this._d.setTime(e), n.updateOffset(this, !0), this;
        }, bi.format = function (t) {
          t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
          var e = j(this, t);
          return this.localeData().postformat(e);
        }, bi.from = function (t, e) {
          return this.isValid() && (x(t) && t.isValid() || Ie(t).isValid()) ? qe({
            to: this,
            from: t
          }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
        }, bi.fromNow = function (t) {
          return this.from(Ie(), t);
        }, bi.to = function (t, e) {
          return this.isValid() && (x(t) && t.isValid() || Ie(t).isValid()) ? qe({
            from: this,
            to: t
          }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
        }, bi.toNow = function (t) {
          return this.to(Ie(), t);
        }, bi.get = function (t) {
          return T(this[t = R(t)]) ? this[t]() : this;
        }, bi.invalidAt = function () {
          return f(this).overflow;
        }, bi.isAfter = function (t, e) {
          var i = x(t) ? t : Ie(t);
          return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = R(e) || "millisecond") ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf());
        }, bi.isBefore = function (t, e) {
          var i = x(t) ? t : Ie(t);
          return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = R(e) || "millisecond") ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf());
        }, bi.isBetween = function (t, e, i, n) {
          var a = x(t) ? t : Ie(t),
            r = x(e) ? e : Ie(e);
          return !!(this.isValid() && a.isValid() && r.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(a, i) : !this.isBefore(a, i)) && (")" === n[1] ? this.isBefore(r, i) : !this.isAfter(r, i));
        }, bi.isSame = function (t, e) {
          var i,
            n = x(t) ? t : Ie(t);
          return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = R(e) || "millisecond") ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()));
        }, bi.isSameOrAfter = function (t, e) {
          return this.isSame(t, e) || this.isAfter(t, e);
        }, bi.isSameOrBefore = function (t, e) {
          return this.isSame(t, e) || this.isBefore(t, e);
        }, bi.isValid = function () {
          return g(this);
        }, bi.lang = ii, bi.locale = ei, bi.localeData = ni, bi.max = Fe, bi.min = Ae, bi.parsingFlags = function () {
          return h({}, f(this));
        }, bi.set = function (t, e) {
          if ("object" == _typeof(t)) for (var i = function (t) {
              var e = [];
              for (var i in t) e.push({
                unit: i,
                priority: W[i]
              });
              return e.sort(function (t, e) {
                return t.priority - e.priority;
              }), e;
            }(t = L(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);else if (T(this[t = R(t)])) return this[t](e);
          return this;
        }, bi.startOf = function (t) {
          var e;
          if (void 0 === (t = R(t)) || "millisecond" === t || !this.isValid()) return this;
          var i = this._isUTC ? di : ui;
          switch (t) {
            case "year":
              e = i(this.year(), 0, 1);
              break;
            case "quarter":
              e = i(this.year(), this.month() - this.month() % 3, 1);
              break;
            case "month":
              e = i(this.year(), this.month(), 1);
              break;
            case "week":
              e = i(this.year(), this.month(), this.date() - this.weekday());
              break;
            case "isoWeek":
              e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
              break;
            case "day":
            case "date":
              e = i(this.year(), this.month(), this.date());
              break;
            case "hour":
              e = this._d.valueOf(), e -= li(e + (this._isUTC ? 0 : this.utcOffset() * ri), oi);
              break;
            case "minute":
              e = this._d.valueOf(), e -= li(e, ri);
              break;
            case "second":
              e = this._d.valueOf(), e -= li(e, ai);
          }
          return this._d.setTime(e), n.updateOffset(this, !0), this;
        }, bi.subtract = Qe, bi.toArray = function () {
          var t = this;
          return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()];
        }, bi.toObject = function () {
          var t = this;
          return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
          };
        }, bi.toDate = function () {
          return new Date(this.valueOf());
        }, bi.toISOString = function (t) {
          if (!this.isValid()) return null;
          var e = !0 !== t,
            i = e ? this.clone().utc() : this;
          return i.year() < 0 || i.year() > 9999 ? j(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : T(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", j(i, "Z")) : j(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }, bi.inspect = function () {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var t = "moment",
            e = "";
          this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
          var i = "[" + t + '("]',
            n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            a = e + '[")]';
          return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + a);
        }, bi.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }, bi.toString = function () {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }, bi.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }, bi.valueOf = function () {
          return this._d.valueOf() - 6e4 * (this._offset || 0);
        }, bi.creationData = function () {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          };
        }, bi.year = Pt, bi.isLeapYear = function () {
          return Dt(this.year());
        }, bi.weekYear = function (t) {
          return ci.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }, bi.isoWeekYear = function (t) {
          return ci.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
        }, bi.quarter = bi.quarters = function (t) {
          return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3);
        }, bi.month = Yt, bi.daysInMonth = function () {
          return At(this.year(), this.month());
        }, bi.week = bi.weeks = function (t) {
          var e = this.localeData().week(this);
          return null == t ? e : this.add(7 * (t - e), "d");
        }, bi.isoWeek = bi.isoWeeks = function (t) {
          var e = jt(this, 1, 4).week;
          return null == t ? e : this.add(7 * (t - e), "d");
        }, bi.weeksInYear = function () {
          var t = this.localeData()._week;
          return Ut(this.year(), t.dow, t.doy);
        }, bi.isoWeeksInYear = function () {
          return Ut(this.year(), 1, 4);
        }, bi.date = fi, bi.day = bi.days = function (t) {
          if (!this.isValid()) return null != t ? this : NaN;
          var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != t ? (t = function (t, e) {
            return "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10);
          }(t, this.localeData()), this.add(t - e, "d")) : e;
        }, bi.weekday = function (t) {
          if (!this.isValid()) return null != t ? this : NaN;
          var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == t ? e : this.add(t - e, "d");
        }, bi.isoWeekday = function (t) {
          if (!this.isValid()) return null != t ? this : NaN;
          if (null != t) {
            var e = function (t, e) {
              return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
            }(t, this.localeData());
            return this.day(this.day() % 7 ? e : e - 7);
          }
          return this.day() || 7;
        }, bi.dayOfYear = function (t) {
          var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
          return null == t ? e : this.add(t - e, "d");
        }, bi.hour = bi.hours = ae, bi.minute = bi.minutes = gi, bi.second = bi.seconds = pi, bi.millisecond = bi.milliseconds = yi, bi.utcOffset = function (t, e, i) {
          var a,
            r = this._offset || 0;
          if (!this.isValid()) return null != t ? this : NaN;
          if (null != t) {
            if ("string" == typeof t) {
              if (null === (t = He(ot, t))) return this;
            } else Math.abs(t) < 16 && !i && (t *= 60);
            return !this._isUTC && e && (a = Be(this)), this._offset = t, this._isUTC = !0, null != a && this.add(a, "m"), r !== t && (!e || this._changeInProgress ? Ke(this, qe(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this;
          }
          return this._isUTC ? r : Be(this);
        }, bi.utc = function (t) {
          return this.utcOffset(0, t);
        }, bi.local = function (t) {
          return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Be(this), "m")), this;
        }, bi.parseZone = function () {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
            var t = He(rt, this._i);
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
          }
          return this;
        }, bi.hasAlignedHourOffset = function (t) {
          return !!this.isValid() && (t = t ? Ie(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0);
        }, bi.isDST = function () {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }, bi.isLocal = function () {
          return !!this.isValid() && !this._isUTC;
        }, bi.isUtcOffset = function () {
          return !!this.isValid() && this._isUTC;
        }, bi.isUtc = je, bi.isUTC = je, bi.zoneAbbr = function () {
          return this._isUTC ? "UTC" : "";
        }, bi.zoneName = function () {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }, bi.dates = S("dates accessor is deprecated. Use date instead.", fi), bi.months = S("months accessor is deprecated. Use month instead", Yt), bi.years = S("years accessor is deprecated. Use year instead", Pt), bi.zone = S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
          return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
        }), bi.isDSTShifted = S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
          if (!o(this._isDSTShifted)) return this._isDSTShifted;
          var t = {};
          if (v(t, this), (t = Te(t))._a) {
            var e = t._isUTC ? c(t._a) : Ie(t._a);
            this._isDSTShifted = this.isValid() && w(t._a, e.toArray()) > 0;
          } else this._isDSTShifted = !1;
          return this._isDSTShifted;
        });
        var _i = I.prototype;
        function ki(t, e, i, n) {
          var a = ce(),
            r = c().set(n, e);
          return a[i](r, t);
        }
        function wi(t, e, i) {
          if (s(t) && (e = t, t = void 0), t = t || "", null != e) return ki(t, e, i, "month");
          var n,
            a = [];
          for (n = 0; n < 12; n++) a[n] = ki(t, n, i, "month");
          return a;
        }
        function Mi(t, e, i, n) {
          "boolean" == typeof t ? (s(e) && (i = e, e = void 0), e = e || "") : (i = e = t, t = !1, s(e) && (i = e, e = void 0), e = e || "");
          var a,
            r = ce(),
            o = t ? r._week.dow : 0;
          if (null != i) return ki(e, (i + o) % 7, n, "day");
          var l = [];
          for (a = 0; a < 7; a++) l[a] = ki(e, (a + o) % 7, n, "day");
          return l;
        }
        _i.calendar = function (t, e, i) {
          var n = this._calendar[t] || this._calendar.sameElse;
          return T(n) ? n.call(e, i) : n;
        }, _i.longDateFormat = function (t) {
          var e = this._longDateFormat[t],
            i = this._longDateFormat[t.toUpperCase()];
          return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function (t) {
            return t.slice(1);
          }), this._longDateFormat[t]);
        }, _i.invalidDate = function () {
          return this._invalidDate;
        }, _i.ordinal = function (t) {
          return this._ordinal.replace("%d", t);
        }, _i.preparse = xi, _i.postformat = xi, _i.relativeTime = function (t, e, i, n) {
          var a = this._relativeTime[i];
          return T(a) ? a(t, e, i, n) : a.replace(/%d/i, t);
        }, _i.pastFuture = function (t, e) {
          var i = this._relativeTime[t > 0 ? "future" : "past"];
          return T(i) ? i(e) : i.replace(/%s/i, e);
        }, _i.set = function (t) {
          var e, i;
          for (i in t) T(e = t[i]) ? this[i] = e : this["_" + i] = e;
          this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
        }, _i.months = function (t, e) {
          return t ? a(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Ft).test(e) ? "format" : "standalone"][t.month()] : a(this._months) ? this._months : this._months.standalone;
        }, _i.monthsShort = function (t, e) {
          return t ? a(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Ft.test(e) ? "format" : "standalone"][t.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
        }, _i.monthsParse = function (t, e, i) {
          var n, a, r;
          if (this._monthsParseExact) return function (t, e, i) {
            var n,
              a,
              r,
              o = t.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) r = c([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
            return i ? "MMM" === e ? -1 !== (a = Ct.call(this._shortMonthsParse, o)) ? a : null : -1 !== (a = Ct.call(this._longMonthsParse, o)) ? a : null : "MMM" === e ? -1 !== (a = Ct.call(this._shortMonthsParse, o)) ? a : -1 !== (a = Ct.call(this._longMonthsParse, o)) ? a : null : -1 !== (a = Ct.call(this._longMonthsParse, o)) ? a : -1 !== (a = Ct.call(this._shortMonthsParse, o)) ? a : null;
          }.call(this, t, e, i);
          for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
            if (a = c([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
            if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
            if (!i && this._monthsParse[n].test(t)) return n;
          }
        }, _i.monthsRegex = function (t) {
          return this._monthsParseExact ? (d(this, "_monthsRegex") || Vt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = zt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
        }, _i.monthsShortRegex = function (t) {
          return this._monthsParseExact ? (d(this, "_monthsRegex") || Vt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = Nt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
        }, _i.week = function (t) {
          return jt(t, this._week.dow, this._week.doy).week;
        }, _i.firstDayOfYear = function () {
          return this._week.doy;
        }, _i.firstDayOfWeek = function () {
          return this._week.dow;
        }, _i.weekdays = function (t, e) {
          var i = a(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
          return !0 === t ? Gt(i, this._week.dow) : t ? i[t.day()] : i;
        }, _i.weekdaysMin = function (t) {
          return !0 === t ? Gt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
        }, _i.weekdaysShort = function (t) {
          return !0 === t ? Gt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
        }, _i.weekdaysParse = function (t, e, i) {
          var n, a, r;
          if (this._weekdaysParseExact) return function (t, e, i) {
            var n,
              a,
              r,
              o = t.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) r = c([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
            return i ? "dddd" === e ? -1 !== (a = Ct.call(this._weekdaysParse, o)) ? a : null : "ddd" === e ? -1 !== (a = Ct.call(this._shortWeekdaysParse, o)) ? a : null : -1 !== (a = Ct.call(this._minWeekdaysParse, o)) ? a : null : "dddd" === e ? -1 !== (a = Ct.call(this._weekdaysParse, o)) ? a : -1 !== (a = Ct.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Ct.call(this._minWeekdaysParse, o)) ? a : null : "ddd" === e ? -1 !== (a = Ct.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Ct.call(this._weekdaysParse, o)) ? a : -1 !== (a = Ct.call(this._minWeekdaysParse, o)) ? a : null : -1 !== (a = Ct.call(this._minWeekdaysParse, o)) ? a : -1 !== (a = Ct.call(this._weekdaysParse, o)) ? a : -1 !== (a = Ct.call(this._shortWeekdaysParse, o)) ? a : null;
          }.call(this, t, e, i);
          for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
            if (a = c([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
            if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
            if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
            if (!i && this._weekdaysParse[n].test(t)) return n;
          }
        }, _i.weekdaysRegex = function (t) {
          return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Xt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
        }, _i.weekdaysShortRegex = function (t) {
          return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
        }, _i.weekdaysMinRegex = function (t) {
          return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Jt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
        }, _i.isPM = function (t) {
          return "p" === (t + "").toLowerCase().charAt(0);
        }, _i.meridiem = function (t, e, i) {
          return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM";
        }, de("en", {
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function ordinal(t) {
            var e = t % 10,
              i = 1 === k(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + i;
          }
        }), n.lang = S("moment.lang is deprecated. Use moment.locale instead.", de), n.langData = S("moment.langData is deprecated. Use moment.localeData instead.", ce);
        var Si = Math.abs;
        function Di(t, e, i, n) {
          var a = qe(e, i);
          return t._milliseconds += n * a._milliseconds, t._days += n * a._days, t._months += n * a._months, t._bubble();
        }
        function Ci(t) {
          return t < 0 ? Math.floor(t) : Math.ceil(t);
        }
        function Pi(t) {
          return 4800 * t / 146097;
        }
        function Ti(t) {
          return 146097 * t / 4800;
        }
        function Oi(t) {
          return function () {
            return this.as(t);
          };
        }
        var Ii = Oi("ms"),
          Ai = Oi("s"),
          Fi = Oi("m"),
          Ri = Oi("h"),
          Li = Oi("d"),
          Wi = Oi("w"),
          Yi = Oi("M"),
          Ni = Oi("Q"),
          zi = Oi("y");
        function Vi(t) {
          return function () {
            return this.isValid() ? this._data[t] : NaN;
          };
        }
        var Hi = Vi("milliseconds"),
          Ei = Vi("seconds"),
          Bi = Vi("minutes"),
          ji = Vi("hours"),
          Ui = Vi("days"),
          Gi = Vi("months"),
          qi = Vi("years"),
          Zi = Math.round,
          $i = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
          },
          Xi = Math.abs;
        function Ki(t) {
          return (t > 0) - (t < 0) || +t;
        }
        function Ji() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var t,
            e,
            i = Xi(this._milliseconds) / 1e3,
            n = Xi(this._days),
            a = Xi(this._months);
          t = _(i / 60), e = _(t / 60), i %= 60, t %= 60;
          var r = _(a / 12),
            o = a %= 12,
            s = n,
            l = e,
            u = t,
            d = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
            h = this.asSeconds();
          if (!h) return "P0D";
          var c = h < 0 ? "-" : "",
            f = Ki(this._months) !== Ki(h) ? "-" : "",
            g = Ki(this._days) !== Ki(h) ? "-" : "",
            m = Ki(this._milliseconds) !== Ki(h) ? "-" : "";
          return c + "P" + (r ? f + r + "Y" : "") + (o ? f + o + "M" : "") + (s ? g + s + "D" : "") + (l || u || d ? "T" : "") + (l ? m + l + "H" : "") + (u ? m + u + "M" : "") + (d ? m + d + "S" : "");
        }
        var Qi = We.prototype;
        return Qi.isValid = function () {
          return this._isValid;
        }, Qi.abs = function () {
          var t = this._data;
          return this._milliseconds = Si(this._milliseconds), this._days = Si(this._days), this._months = Si(this._months), t.milliseconds = Si(t.milliseconds), t.seconds = Si(t.seconds), t.minutes = Si(t.minutes), t.hours = Si(t.hours), t.months = Si(t.months), t.years = Si(t.years), this;
        }, Qi.add = function (t, e) {
          return Di(this, t, e, 1);
        }, Qi.subtract = function (t, e) {
          return Di(this, t, e, -1);
        }, Qi.as = function (t) {
          if (!this.isValid()) return NaN;
          var e,
            i,
            n = this._milliseconds;
          if ("month" === (t = R(t)) || "quarter" === t || "year" === t) switch (e = this._days + n / 864e5, i = this._months + Pi(e), t) {
            case "month":
              return i;
            case "quarter":
              return i / 3;
            case "year":
              return i / 12;
          } else switch (e = this._days + Math.round(Ti(this._months)), t) {
            case "week":
              return e / 7 + n / 6048e5;
            case "day":
              return e + n / 864e5;
            case "hour":
              return 24 * e + n / 36e5;
            case "minute":
              return 1440 * e + n / 6e4;
            case "second":
              return 86400 * e + n / 1e3;
            case "millisecond":
              return Math.floor(864e5 * e) + n;
            default:
              throw new Error("Unknown unit " + t);
          }
        }, Qi.asMilliseconds = Ii, Qi.asSeconds = Ai, Qi.asMinutes = Fi, Qi.asHours = Ri, Qi.asDays = Li, Qi.asWeeks = Wi, Qi.asMonths = Yi, Qi.asQuarters = Ni, Qi.asYears = zi, Qi.valueOf = function () {
          return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN;
        }, Qi._bubble = function () {
          var t,
            e,
            i,
            n,
            a,
            r = this._milliseconds,
            o = this._days,
            s = this._months,
            l = this._data;
          return r >= 0 && o >= 0 && s >= 0 || r <= 0 && o <= 0 && s <= 0 || (r += 864e5 * Ci(Ti(s) + o), o = 0, s = 0), l.milliseconds = r % 1e3, t = _(r / 1e3), l.seconds = t % 60, e = _(t / 60), l.minutes = e % 60, i = _(e / 60), l.hours = i % 24, o += _(i / 24), a = _(Pi(o)), s += a, o -= Ci(Ti(a)), n = _(s / 12), s %= 12, l.days = o, l.months = s, l.years = n, this;
        }, Qi.clone = function () {
          return qe(this);
        }, Qi.get = function (t) {
          return t = R(t), this.isValid() ? this[t + "s"]() : NaN;
        }, Qi.milliseconds = Hi, Qi.seconds = Ei, Qi.minutes = Bi, Qi.hours = ji, Qi.days = Ui, Qi.weeks = function () {
          return _(this.days() / 7);
        }, Qi.months = Gi, Qi.years = qi, Qi.humanize = function (t) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e = this.localeData(),
            i = function (t, e, i) {
              var n = qe(t).abs(),
                a = Zi(n.as("s")),
                r = Zi(n.as("m")),
                o = Zi(n.as("h")),
                s = Zi(n.as("d")),
                l = Zi(n.as("M")),
                u = Zi(n.as("y")),
                d = a <= $i.ss && ["s", a] || a < $i.s && ["ss", a] || r <= 1 && ["m"] || r < $i.m && ["mm", r] || o <= 1 && ["h"] || o < $i.h && ["hh", o] || s <= 1 && ["d"] || s < $i.d && ["dd", s] || l <= 1 && ["M"] || l < $i.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
              return d[2] = e, d[3] = +t > 0, d[4] = i, function (t, e, i, n, a) {
                return a.relativeTime(e || 1, !!i, t, n);
              }.apply(null, d);
            }(this, !t, e);
          return t && (i = e.pastFuture(+this, i)), e.postformat(i);
        }, Qi.toISOString = Ji, Qi.toString = Ji, Qi.toJSON = Ji, Qi.locale = ei, Qi.localeData = ni, Qi.toIsoString = S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ji), Qi.lang = ii, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), ut("x", at), ut("X", /[+-]?\d+(\.\d{1,3})?/), ft("X", function (t, e, i) {
          i._d = new Date(1e3 * parseFloat(t, 10));
        }), ft("x", function (t, e, i) {
          i._d = new Date(k(t));
        }), n.version = "2.24.0", e = Ie, n.fn = bi, n.min = function () {
          return Re("isBefore", [].slice.call(arguments, 0));
        }, n.max = function () {
          return Re("isAfter", [].slice.call(arguments, 0));
        }, n.now = function () {
          return Date.now ? Date.now() : +new Date();
        }, n.utc = c, n.unix = function (t) {
          return Ie(1e3 * t);
        }, n.months = function (t, e) {
          return wi(t, e, "months");
        }, n.isDate = l, n.locale = de, n.invalid = m, n.duration = qe, n.isMoment = x, n.weekdays = function (t, e, i) {
          return Mi(t, e, i, "weekdays");
        }, n.parseZone = function () {
          return Ie.apply(null, arguments).parseZone();
        }, n.localeData = ce, n.isDuration = Ye, n.monthsShort = function (t, e) {
          return wi(t, e, "monthsShort");
        }, n.weekdaysMin = function (t, e, i) {
          return Mi(t, e, i, "weekdaysMin");
        }, n.defineLocale = he, n.updateLocale = function (t, e) {
          if (null != e) {
            var i,
              n,
              a = re;
            null != (n = ue(t)) && (a = n._config), e = O(a, e), (i = new I(e)).parentLocale = oe[t], oe[t] = i, de(t);
          } else null != oe[t] && (null != oe[t].parentLocale ? oe[t] = oe[t].parentLocale : null != oe[t] && delete oe[t]);
          return oe[t];
        }, n.locales = function () {
          return D(oe);
        }, n.weekdaysShort = function (t, e, i) {
          return Mi(t, e, i, "weekdaysShort");
        }, n.normalizeUnits = R, n.relativeTimeRounding = function (t) {
          return void 0 === t ? Zi : "function" == typeof t && (Zi = t, !0);
        }, n.relativeTimeThreshold = function (t, e) {
          return void 0 !== $i[t] && (void 0 === e ? $i[t] : ($i[t] = e, "s" === t && ($i.ss = e - 1), !0));
        }, n.calendarFormat = function (t, e) {
          var i = t.diff(e, "days", !0);
          return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse";
        }, n.prototype = bi, n.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "GGGG-[W]WW",
          MONTH: "YYYY-MM"
        }, n;
      }();
    }(tn = {
      exports: {}
    }, tn.exports), tn.exports),
    an = {
      datetime: "MMM D, YYYY, h:mm:ss a",
      millisecond: "h:mm:ss.SSS a",
      second: "h:mm:ss a",
      minute: "h:mm a",
      hour: "hA",
      day: "MMM D",
      week: "ll",
      month: "MMM YYYY",
      quarter: "[Q]Q - YYYY",
      year: "YYYY"
    };
  si._date.override("function" == typeof nn ? {
    _id: "moment",
    formats: function formats() {
      return an;
    },
    parse: function parse(t, e) {
      return "string" == typeof t && "string" == typeof e ? t = nn(t, e) : t instanceof nn || (t = nn(t)), t.isValid() ? t.valueOf() : null;
    },
    format: function format(t, e) {
      return nn(t).format(e);
    },
    add: function add(t, e, i) {
      return nn(t).add(e, i).valueOf();
    },
    diff: function diff(t, e, i) {
      return nn.duration(nn(t).diff(nn(e))).as(i);
    },
    startOf: function startOf(t, e, i) {
      return t = nn(t), "isoWeek" === e ? t.isoWeekday(i).valueOf() : t.startOf(e).valueOf();
    },
    endOf: function endOf(t, e) {
      return nn(t).endOf(e).valueOf();
    },
    _create: function _create(t) {
      return nn(t);
    }
  } : {}), ot._set("global", {
    plugins: {
      filler: {
        propagate: !0
      }
    }
  });
  var rn = {
    dataset: function dataset(t) {
      var e = t.fill,
        i = t.chart,
        n = i.getDatasetMeta(e),
        a = n && i.isDatasetVisible(e) && n.dataset._children || [],
        r = a.length || 0;
      return r ? function (t, e) {
        return e < r && a[e]._view || null;
      } : null;
    },
    boundary: function boundary(t) {
      var e = t.boundary,
        i = e ? e.x : null,
        n = e ? e.y : null;
      return function (t) {
        return {
          x: null === i ? t.x : i,
          y: null === n ? t.y : n
        };
      };
    }
  };
  function on(t, e, i) {
    var n,
      a = t._model || {},
      r = a.fill;
    if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;
    if (!0 === r) return "origin";
    if (n = parseFloat(r, 10), isFinite(n) && Math.floor(n) === n) return "-" !== r[0] && "+" !== r[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;
    switch (r) {
      case "bottom":
        return "start";
      case "top":
        return "end";
      case "zero":
        return "origin";
      case "origin":
      case "start":
      case "end":
        return r;
      default:
        return !1;
    }
  }
  function sn(t) {
    var e,
      i = t.el._model || {},
      n = t.el._scale || {},
      a = t.fill,
      r = null;
    if (isFinite(a)) return null;
    if ("start" === a ? r = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? r = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? r = i.scaleZero : n.getBasePosition ? r = n.getBasePosition() : n.getBasePixel && (r = n.getBasePixel()), null != r) {
      if (void 0 !== r.x && void 0 !== r.y) return r;
      if (ut.isFinite(r)) return {
        x: (e = n.isHorizontal()) ? r : null,
        y: e ? null : r
      };
    }
    return null;
  }
  function ln(t, e, i) {
    var n,
      a = t[e].fill,
      r = [e];
    if (!i) return a;
    for (; !1 !== a && -1 === r.indexOf(a);) {
      if (!isFinite(a)) return a;
      if (!(n = t[a])) return !1;
      if (n.visible) return a;
      r.push(a), a = n.fill;
    }
    return !1;
  }
  function un(t) {
    var e = t.fill,
      i = "dataset";
    return !1 === e ? null : (isFinite(e) || (i = "boundary"), rn[i](t));
  }
  function dn(t) {
    return t && !t.skip;
  }
  function hn(t, e, i, n, a) {
    var r;
    if (n && a) {
      for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) ut.canvas.lineTo(t, e[r - 1], e[r]);
      for (t.lineTo(i[a - 1].x, i[a - 1].y), r = a - 1; r > 0; --r) ut.canvas.lineTo(t, i[r], i[r - 1], !0);
    }
  }
  var cn = {
      id: "filler",
      afterDatasetsUpdate: function afterDatasetsUpdate(t, e) {
        var i,
          n,
          a,
          r,
          o = (t.data.datasets || []).length,
          s = e.propagate,
          l = [];
        for (n = 0; n < o; ++n) r = null, (a = (i = t.getDatasetMeta(n)).dataset) && a._model && a instanceof Nt.Line && (r = {
          visible: t.isDatasetVisible(n),
          fill: on(a, n, o),
          chart: t,
          el: a
        }), i.$filler = r, l.push(r);
        for (n = 0; n < o; ++n) (r = l[n]) && (r.fill = ln(l, n, s), r.boundary = sn(r), r.mapper = un(r));
      },
      beforeDatasetDraw: function beforeDatasetDraw(t, e) {
        var i = e.meta.$filler;
        if (i) {
          var n = t.ctx,
            a = i.el,
            r = a._view,
            o = a._children || [],
            s = i.mapper,
            l = r.backgroundColor || ot.global.defaultColor;
          s && l && o.length && (ut.canvas.clipArea(n, t.chartArea), function (t, e, i, n, a, r) {
            var o,
              s,
              l,
              u,
              d,
              h,
              c,
              f = e.length,
              g = n.spanGaps,
              m = [],
              p = [],
              v = 0,
              y = 0;
            for (t.beginPath(), o = 0, s = f + !!r; o < s; ++o) d = i(u = e[l = o % f]._view, l, n), h = dn(u), c = dn(d), h && c ? (v = m.push(u), y = p.push(d)) : v && y && (g ? (h && m.push(u), c && p.push(d)) : (hn(t, m, p, v, y), v = y = 0, m = [], p = []));
            hn(t, m, p, v, y), t.closePath(), t.fillStyle = a, t.fill();
          }(n, o, s, r, l, a._loop), ut.canvas.unclipArea(n));
        }
      }
    },
    fn = ut.noop,
    gn = ut.valueOrDefault;
  function mn(t, e) {
    return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
  }
  ot._set("global", {
    legend: {
      display: !0,
      position: "top",
      fullWidth: !0,
      reverse: !1,
      weight: 1e3,
      onClick: function onClick(t, e) {
        var i = e.datasetIndex,
          n = this.chart,
          a = n.getDatasetMeta(i);
        a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update();
      },
      onHover: null,
      onLeave: null,
      labels: {
        boxWidth: 40,
        padding: 10,
        generateLabels: function generateLabels(t) {
          var e = t.data;
          return ut.isArray(e.datasets) ? e.datasets.map(function (e, i) {
            return {
              text: e.label,
              fillStyle: ut.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
              hidden: !t.isDatasetVisible(i),
              lineCap: e.borderCapStyle,
              lineDash: e.borderDash,
              lineDashOffset: e.borderDashOffset,
              lineJoin: e.borderJoinStyle,
              lineWidth: e.borderWidth,
              strokeStyle: e.borderColor,
              pointStyle: e.pointStyle,
              datasetIndex: i
            };
          }, this) : [];
        }
      }
    },
    legendCallback: function legendCallback(t) {
      var e = [];
      e.push('<ul class="' + t.id + '-legend">');
      for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
      return e.push("</ul>"), e.join("");
    }
  });
  var pn = gt.extend({
    initialize: function initialize(t) {
      ut.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1;
    },
    beforeUpdate: fn,
    update: function update(t, e, i) {
      var n = this;
      return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
    },
    afterUpdate: fn,
    beforeSetDimensions: fn,
    setDimensions: function setDimensions() {
      var t = this;
      t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: fn,
    beforeBuildLabels: fn,
    buildLabels: function buildLabels() {
      var t = this,
        e = t.options.labels || {},
        i = ut.callback(e.generateLabels, [t.chart], t) || [];
      e.filter && (i = i.filter(function (i) {
        return e.filter(i, t.chart.data);
      })), t.options.reverse && i.reverse(), t.legendItems = i;
    },
    afterBuildLabels: fn,
    beforeFit: fn,
    fit: function fit() {
      var t = this,
        e = t.options,
        i = e.labels,
        n = e.display,
        a = t.ctx,
        r = ut.options._parseFont(i),
        o = r.size,
        s = t.legendHitBoxes = [],
        l = t.minSize,
        u = t.isHorizontal();
      if (u ? (l.width = t.maxWidth, l.height = n ? 10 : 0) : (l.width = n ? 10 : 0, l.height = t.maxHeight), n) if (a.font = r.string, u) {
        var d = t.lineWidths = [0],
          h = 0;
        a.textAlign = "left", a.textBaseline = "top", ut.each(t.legendItems, function (t, e) {
          var n = mn(i, o) + o / 2 + a.measureText(t.text).width;
          (0 === e || d[d.length - 1] + n + i.padding > l.width) && (h += o + i.padding, d[d.length - (e > 0 ? 0 : 1)] = i.padding), s[e] = {
            left: 0,
            top: 0,
            width: n,
            height: o
          }, d[d.length - 1] += n + i.padding;
        }), l.height += h;
      } else {
        var c = i.padding,
          f = t.columnWidths = [],
          g = i.padding,
          m = 0,
          p = 0,
          v = o + c;
        ut.each(t.legendItems, function (t, e) {
          var n = mn(i, o) + o / 2 + a.measureText(t.text).width;
          e > 0 && p + v > l.height - c && (g += m + i.padding, f.push(m), m = 0, p = 0), m = Math.max(m, n), p += v, s[e] = {
            left: 0,
            top: 0,
            width: n,
            height: o
          };
        }), g += m, f.push(m), l.width += g;
      }
      t.width = l.width, t.height = l.height;
    },
    afterFit: fn,
    isHorizontal: function isHorizontal() {
      return "top" === this.options.position || "bottom" === this.options.position;
    },
    draw: function draw() {
      var t = this,
        e = t.options,
        i = e.labels,
        n = ot.global,
        a = n.defaultColor,
        r = n.elements.line,
        o = t.width,
        s = t.lineWidths;
      if (e.display) {
        var l,
          u = t.ctx,
          d = gn(i.fontColor, n.defaultFontColor),
          h = ut.options._parseFont(i),
          c = h.size;
        u.textAlign = "left", u.textBaseline = "middle", u.lineWidth = .5, u.strokeStyle = d, u.fillStyle = d, u.font = h.string;
        var f = mn(i, c),
          g = t.legendHitBoxes,
          m = t.isHorizontal();
        l = m ? {
          x: t.left + (o - s[0]) / 2 + i.padding,
          y: t.top + i.padding,
          line: 0
        } : {
          x: t.left + i.padding,
          y: t.top + i.padding,
          line: 0
        };
        var p = c + i.padding;
        ut.each(t.legendItems, function (n, d) {
          var h = u.measureText(n.text).width,
            v = f + c / 2 + h,
            y = l.x,
            b = l.y;
          m ? d > 0 && y + v + i.padding > t.left + t.minSize.width && (b = l.y += p, l.line++, y = l.x = t.left + (o - s[l.line]) / 2 + i.padding) : d > 0 && b + p > t.top + t.minSize.height && (y = l.x = y + t.columnWidths[l.line] + i.padding, b = l.y = t.top + i.padding, l.line++), function (t, i, n) {
            if (!(isNaN(f) || f <= 0)) {
              u.save();
              var o = gn(n.lineWidth, r.borderWidth);
              if (u.fillStyle = gn(n.fillStyle, a), u.lineCap = gn(n.lineCap, r.borderCapStyle), u.lineDashOffset = gn(n.lineDashOffset, r.borderDashOffset), u.lineJoin = gn(n.lineJoin, r.borderJoinStyle), u.lineWidth = o, u.strokeStyle = gn(n.strokeStyle, a), u.setLineDash && u.setLineDash(gn(n.lineDash, r.borderDash)), e.labels && e.labels.usePointStyle) {
                var s = f * Math.SQRT2 / 2,
                  l = t + f / 2,
                  d = i + c / 2;
                ut.canvas.drawPoint(u, n.pointStyle, s, l, d);
              } else 0 !== o && u.strokeRect(t, i, f, c), u.fillRect(t, i, f, c);
              u.restore();
            }
          }(y, b, n), g[d].left = y, g[d].top = b, function (t, e, i, n) {
            var a = c / 2,
              r = f + a + t,
              o = e + a;
            u.fillText(i.text, r, o), i.hidden && (u.beginPath(), u.lineWidth = 2, u.moveTo(r, o), u.lineTo(r + n, o), u.stroke());
          }(y, b, n, h), m ? l.x += v + i.padding : l.y += p;
        });
      }
    },
    _getLegendItemAt: function _getLegendItemAt(t, e) {
      var i,
        n,
        a,
        r = this;
      if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom) for (a = r.legendHitBoxes, i = 0; i < a.length; ++i) if (t >= (n = a[i]).left && t <= n.left + n.width && e >= n.top && e <= n.top + n.height) return r.legendItems[i];
      return null;
    },
    handleEvent: function handleEvent(t) {
      var e,
        i = this,
        n = i.options,
        a = "mouseup" === t.type ? "click" : t.type;
      if ("mousemove" === a) {
        if (!n.onHover && !n.onLeave) return;
      } else {
        if ("click" !== a) return;
        if (!n.onClick) return;
      }
      e = i._getLegendItemAt(t.x, t.y), "click" === a ? e && n.onClick && n.onClick.call(i, t["native"], e) : (n.onLeave && e !== i._hoveredItem && (i._hoveredItem && n.onLeave.call(i, t["native"], i._hoveredItem), i._hoveredItem = e), n.onHover && e && n.onHover.call(i, t["native"], e));
    }
  });
  function vn(t, e) {
    var i = new pn({
      ctx: t.ctx,
      options: e,
      chart: t
    });
    xe.configure(t, i, e), xe.addBox(t, i), t.legend = i;
  }
  var yn = {
      id: "legend",
      _element: pn,
      beforeInit: function beforeInit(t) {
        var e = t.options.legend;
        e && vn(t, e);
      },
      beforeUpdate: function beforeUpdate(t) {
        var e = t.options.legend,
          i = t.legend;
        e ? (ut.mergeIf(e, ot.global.legend), i ? (xe.configure(t, i, e), i.options = e) : vn(t, e)) : i && (xe.removeBox(t, i), delete t.legend);
      },
      afterEvent: function afterEvent(t, e) {
        var i = t.legend;
        i && i.handleEvent(e);
      }
    },
    bn = ut.noop;
  ot._set("global", {
    title: {
      display: !1,
      fontStyle: "bold",
      fullWidth: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3
    }
  });
  var xn = gt.extend({
    initialize: function initialize(t) {
      ut.extend(this, t), this.legendHitBoxes = [];
    },
    beforeUpdate: bn,
    update: function update(t, e, i) {
      var n = this;
      return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
    },
    afterUpdate: bn,
    beforeSetDimensions: bn,
    setDimensions: function setDimensions() {
      var t = this;
      t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: bn,
    beforeBuildLabels: bn,
    buildLabels: bn,
    afterBuildLabels: bn,
    beforeFit: bn,
    fit: function fit() {
      var t = this,
        e = t.options,
        i = e.display,
        n = t.minSize,
        a = ut.isArray(e.text) ? e.text.length : 1,
        r = ut.options._parseFont(e),
        o = i ? a * r.lineHeight + 2 * e.padding : 0;
      t.isHorizontal() ? (n.width = t.maxWidth, n.height = o) : (n.width = o, n.height = t.maxHeight), t.width = n.width, t.height = n.height;
    },
    afterFit: bn,
    isHorizontal: function isHorizontal() {
      var t = this.options.position;
      return "top" === t || "bottom" === t;
    },
    draw: function draw() {
      var t = this,
        e = t.ctx,
        i = t.options;
      if (i.display) {
        var n,
          a,
          r,
          o = ut.options._parseFont(i),
          s = o.lineHeight,
          l = s / 2 + i.padding,
          u = 0,
          d = t.top,
          h = t.left,
          c = t.bottom,
          f = t.right;
        e.fillStyle = ut.valueOrDefault(i.fontColor, ot.global.defaultFontColor), e.font = o.string, t.isHorizontal() ? (a = h + (f - h) / 2, r = d + l, n = f - h) : (a = "left" === i.position ? h + l : f - l, r = d + (c - d) / 2, n = c - d, u = Math.PI * ("left" === i.position ? -.5 : .5)), e.save(), e.translate(a, r), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle";
        var g = i.text;
        if (ut.isArray(g)) for (var m = 0, p = 0; p < g.length; ++p) e.fillText(g[p], 0, m, n), m += s;else e.fillText(g, 0, 0, n);
        e.restore();
      }
    }
  });
  function _n(t, e) {
    var i = new xn({
      ctx: t.ctx,
      options: e,
      chart: t
    });
    xe.configure(t, i, e), xe.addBox(t, i), t.titleBlock = i;
  }
  var kn = {},
    wn = cn,
    Mn = yn,
    Sn = {
      id: "title",
      _element: xn,
      beforeInit: function beforeInit(t) {
        var e = t.options.title;
        e && _n(t, e);
      },
      beforeUpdate: function beforeUpdate(t) {
        var e = t.options.title,
          i = t.titleBlock;
        e ? (ut.mergeIf(e, ot.global.title), i ? (xe.configure(t, i, e), i.options = e) : _n(t, e)) : i && (xe.removeBox(t, i), delete t.titleBlock);
      }
    };
  for (var Dn in kn.filler = wn, kn.legend = Mn, kn.title = Sn, ai.helpers = ut, function () {
    function t(t, e, i) {
      var n;
      return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n;
    }
    function e(t) {
      return null != t && "none" !== t;
    }
    function i(i, n, a) {
      var r = document.defaultView,
        o = ut._getParentNode(i),
        s = r.getComputedStyle(i)[n],
        l = r.getComputedStyle(o)[n],
        u = e(s),
        d = e(l),
        h = Number.POSITIVE_INFINITY;
      return u || d ? Math.min(u ? t(s, i, a) : h, d ? t(l, o, a) : h) : "none";
    }
    ut.where = function (t, e) {
      if (ut.isArray(t) && Array.prototype.filter) return t.filter(e);
      var i = [];
      return ut.each(t, function (t) {
        e(t) && i.push(t);
      }), i;
    }, ut.findIndex = Array.prototype.findIndex ? function (t, e, i) {
      return t.findIndex(e, i);
    } : function (t, e, i) {
      i = void 0 === i ? t : i;
      for (var n = 0, a = t.length; n < a; ++n) if (e.call(i, t[n], n, t)) return n;
      return -1;
    }, ut.findNextWhere = function (t, e, i) {
      ut.isNullOrUndef(i) && (i = -1);
      for (var n = i + 1; n < t.length; n++) {
        var a = t[n];
        if (e(a)) return a;
      }
    }, ut.findPreviousWhere = function (t, e, i) {
      ut.isNullOrUndef(i) && (i = t.length);
      for (var n = i - 1; n >= 0; n--) {
        var a = t[n];
        if (e(a)) return a;
      }
    }, ut.isNumber = function (t) {
      return !isNaN(parseFloat(t)) && isFinite(t);
    }, ut.almostEquals = function (t, e, i) {
      return Math.abs(t - e) < i;
    }, ut.almostWhole = function (t, e) {
      var i = Math.round(t);
      return i - e < t && i + e > t;
    }, ut.max = function (t) {
      return t.reduce(function (t, e) {
        return isNaN(e) ? t : Math.max(t, e);
      }, Number.NEGATIVE_INFINITY);
    }, ut.min = function (t) {
      return t.reduce(function (t, e) {
        return isNaN(e) ? t : Math.min(t, e);
      }, Number.POSITIVE_INFINITY);
    }, ut.sign = Math.sign ? function (t) {
      return Math.sign(t);
    } : function (t) {
      return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
    }, ut.log10 = Math.log10 ? function (t) {
      return Math.log10(t);
    } : function (t) {
      var e = Math.log(t) * Math.LOG10E,
        i = Math.round(e);
      return t === Math.pow(10, i) ? i : e;
    }, ut.toRadians = function (t) {
      return t * (Math.PI / 180);
    }, ut.toDegrees = function (t) {
      return t * (180 / Math.PI);
    }, ut._decimalPlaces = function (t) {
      if (ut.isFinite(t)) {
        for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
        return i;
      }
    }, ut.getAngleFromPoint = function (t, e) {
      var i = e.x - t.x,
        n = e.y - t.y,
        a = Math.sqrt(i * i + n * n),
        r = Math.atan2(n, i);
      return r < -.5 * Math.PI && (r += 2 * Math.PI), {
        angle: r,
        distance: a
      };
    }, ut.distanceBetweenPoints = function (t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }, ut.aliasPixel = function (t) {
      return t % 2 == 0 ? 0 : .5;
    }, ut._alignPixel = function (t, e, i) {
      var n = t.currentDevicePixelRatio,
        a = i / 2;
      return Math.round((e - a) * n) / n + a;
    }, ut.splineCurve = function (t, e, i, n) {
      var a = t.skip ? e : t,
        r = e,
        o = i.skip ? e : i,
        s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
        l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
        u = s / (s + l),
        d = l / (s + l),
        h = n * (u = isNaN(u) ? 0 : u),
        c = n * (d = isNaN(d) ? 0 : d);
      return {
        previous: {
          x: r.x - h * (o.x - a.x),
          y: r.y - h * (o.y - a.y)
        },
        next: {
          x: r.x + c * (o.x - a.x),
          y: r.y + c * (o.y - a.y)
        }
      };
    }, ut.EPSILON = Number.EPSILON || 1e-14, ut.splineCurveMonotone = function (t) {
      var e,
        i,
        n,
        a,
        r,
        o,
        s,
        l,
        u,
        d = (t || []).map(function (t) {
          return {
            model: t._model,
            deltaK: 0,
            mK: 0
          };
        }),
        h = d.length;
      for (e = 0; e < h; ++e) if (!(n = d[e]).model.skip) {
        if (i = e > 0 ? d[e - 1] : null, (a = e < h - 1 ? d[e + 1] : null) && !a.model.skip) {
          var c = a.model.x - n.model.x;
          n.deltaK = 0 !== c ? (a.model.y - n.model.y) / c : 0;
        }
        !i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2;
      }
      for (e = 0; e < h - 1; ++e) n = d[e], a = d[e + 1], n.model.skip || a.model.skip || (ut.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (r = n.mK / n.deltaK, o = a.mK / n.deltaK, (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), n.mK = r * s * n.deltaK, a.mK = o * s * n.deltaK)));
      for (e = 0; e < h; ++e) (n = d[e]).model.skip || (i = e > 0 ? d[e - 1] : null, a = e < h - 1 ? d[e + 1] : null, i && !i.model.skip && (u = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - u, n.model.controlPointPreviousY = n.model.y - u * n.mK), a && !a.model.skip && (u = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + u, n.model.controlPointNextY = n.model.y + u * n.mK));
    }, ut.nextItem = function (t, e, i) {
      return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
    }, ut.previousItem = function (t, e, i) {
      return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
    }, ut.niceNum = function (t, e) {
      var i = Math.floor(ut.log10(t)),
        n = t / Math.pow(10, i);
      return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i);
    }, ut.requestAnimFrame = "undefined" == typeof window ? function (t) {
      t();
    } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
      return window.setTimeout(t, 1e3 / 60);
    }, ut.getRelativePosition = function (t, e) {
      var i,
        n,
        a = t.originalEvent || t,
        r = t.target || t.srcElement,
        o = r.getBoundingClientRect(),
        s = a.touches;
      s && s.length > 0 ? (i = s[0].clientX, n = s[0].clientY) : (i = a.clientX, n = a.clientY);
      var l = parseFloat(ut.getStyle(r, "padding-left")),
        u = parseFloat(ut.getStyle(r, "padding-top")),
        d = parseFloat(ut.getStyle(r, "padding-right")),
        h = parseFloat(ut.getStyle(r, "padding-bottom")),
        c = o.right - o.left - l - d,
        f = o.bottom - o.top - u - h;
      return {
        x: i = Math.round((i - o.left - l) / c * r.width / e.currentDevicePixelRatio),
        y: n = Math.round((n - o.top - u) / f * r.height / e.currentDevicePixelRatio)
      };
    }, ut.getConstraintWidth = function (t) {
      return i(t, "max-width", "clientWidth");
    }, ut.getConstraintHeight = function (t) {
      return i(t, "max-height", "clientHeight");
    }, ut._calculatePadding = function (t, e, i) {
      return (e = ut.getStyle(t, e)).indexOf("%") > -1 ? i * parseInt(e, 10) / 100 : parseInt(e, 10);
    }, ut._getParentNode = function (t) {
      var e = t.parentNode;
      return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
    }, ut.getMaximumWidth = function (t) {
      var e = ut._getParentNode(t);
      if (!e) return t.clientWidth;
      var i = e.clientWidth,
        n = i - ut._calculatePadding(e, "padding-left", i) - ut._calculatePadding(e, "padding-right", i),
        a = ut.getConstraintWidth(t);
      return isNaN(a) ? n : Math.min(n, a);
    }, ut.getMaximumHeight = function (t) {
      var e = ut._getParentNode(t);
      if (!e) return t.clientHeight;
      var i = e.clientHeight,
        n = i - ut._calculatePadding(e, "padding-top", i) - ut._calculatePadding(e, "padding-bottom", i),
        a = ut.getConstraintHeight(t);
      return isNaN(a) ? n : Math.min(n, a);
    }, ut.getStyle = function (t, e) {
      return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
    }, ut.retinaScale = function (t, e) {
      var i = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
      if (1 !== i) {
        var n = t.canvas,
          a = t.height,
          r = t.width;
        n.height = a * i, n.width = r * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = r + "px");
      }
    }, ut.fontString = function (t, e, i) {
      return e + " " + t + "px " + i;
    }, ut.longestText = function (t, e, i, n) {
      var a = (n = n || {}).data = n.data || {},
        r = n.garbageCollect = n.garbageCollect || [];
      n.font !== e && (a = n.data = {}, r = n.garbageCollect = [], n.font = e), t.font = e;
      var o = 0;
      ut.each(i, function (e) {
        null != e && !0 !== ut.isArray(e) ? o = ut.measureText(t, a, r, o, e) : ut.isArray(e) && ut.each(e, function (e) {
          null == e || ut.isArray(e) || (o = ut.measureText(t, a, r, o, e));
        });
      });
      var s = r.length / 2;
      if (s > i.length) {
        for (var l = 0; l < s; l++) delete a[r[l]];
        r.splice(0, s);
      }
      return o;
    }, ut.measureText = function (t, e, i, n, a) {
      var r = e[a];
      return r || (r = e[a] = t.measureText(a).width, i.push(a)), r > n && (n = r), n;
    }, ut.numberOfLabelLines = function (t) {
      var e = 1;
      return ut.each(t, function (t) {
        ut.isArray(t) && t.length > e && (e = t.length);
      }), e;
    }, ut.color = G ? function (t) {
      return t instanceof CanvasGradient && (t = ot.global.defaultColor), G(t);
    } : function (t) {
      return console.error("Color.js not found!"), t;
    }, ut.getHoverColor = function (t) {
      return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : ut.color(t).saturate(.5).darken(.1).rgbString();
    };
  }(), ai._adapters = si, ai.Animation = pt, ai.animationService = vt, ai.controllers = ue, ai.DatasetController = kt, ai.defaults = ot, ai.Element = gt, ai.elements = Nt, ai.Interaction = pe, ai.layouts = xe, ai.platform = Ve, ai.plugins = He, ai.Scale = fi, ai.scaleService = Ee, ai.Ticks = li, ai.Tooltip = Je, ai.helpers.each(en, function (t, e) {
    ai.scaleService.registerScaleType(e, t, t._defaults);
  }), kn) kn.hasOwnProperty(Dn) && ai.plugins.register(kn[Dn]);
  ai.platform.initialize();
  var Cn = ai;
  return "undefined" != typeof window && (window.Chart = ai), ai.Chart = ai, ai.Legend = kn.legend._element, ai.Title = kn.title._element, ai.pluginService = ai.plugins, ai.PluginBase = ai.Element.extend({}), ai.canvasHelpers = ai.helpers.canvas, ai.layoutService = ai.layouts, ai.LinearScaleBase = yi, ai.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function (t) {
    ai[t] = function (e, i) {
      return new ai(e, ai.helpers.merge(i || {}, {
        type: t.charAt(0).toLowerCase() + t.slice(1)
      }));
    };
  }), Cn;
});

/***/ }),

/***/ "./resources/assets/js/jquery.min.js":
/*!*******************************************!*\
  !*** ./resources/assets/js/jquery.min.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == ( false ? 0 : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat ? function (e) {
      return t.flat.call(e);
    } : function (e) {
      return t.concat.apply([], e);
    },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function m(e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
    x = function x(e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }
  var f = "3.6.0",
    S = function S(e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
        r = 0;
      if (p(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function map(e, t, n) {
      var r,
        i,
        o = 0,
        a = [];
      if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });
  var d = function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function j(e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function P(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
      F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function ne(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function ie(e, t) {
        return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
      oe = function oe() {
        T();
      },
      ae = be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
            r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1;
        }
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }
        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }
    function le(e) {
      return e[S] = !0, e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
            r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e && e.namespaceURI,
        n = e && (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
        n,
        r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
            r,
            i,
            o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }
          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
          r = [],
          i = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1;
      }, j = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
          r = 0,
          i = e.parentNode,
          o = t.parentNode,
          a = [e],
          s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;
        while (n = n.parentNode) a.unshift(n);
        n = t;
        while (n = n.parentNode) s.unshift(n);
        while (a[r] === s[r]) r++;
        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) n += o(t);
      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
            n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
            m = "last" !== h.slice(-4),
            x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l = y !== m ? "nextSibling" : "previousSibling",
              c = e.parentNode,
              f = x && e.nodeName.toLowerCase(),
              p = !n && !x,
              d = !1;
            if (c) {
              if (y) {
                while (l) {
                  a = e;
                  while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  u = l = "only" === h && !u && "nextSibling";
                }
                return !0;
              }
              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                  i[h] = [k, s, d];
                  break;
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
            a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
              r = a(e, o),
              i = r.length;
            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
            i = [],
            s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
              o = s(e, null, r, []),
              a = e.length;
            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;
            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = de(e);
    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
        return !1;
      } : function (e, t, n) {
        var r,
          i,
          o,
          a = [k, p];
        if (n) {
          while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
        } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
          if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
          if ((i[c] = a)[2] = s(e, t, n)) return !0;
        }
        return !1;
      };
    }
    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0;
      } : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
          o,
          a,
          s = [],
          u = [],
          l = t.length,
          c = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
            return n;
          }(h || "*", n.nodeType ? [n] : n, []),
          f = !d || !e && h ? c : Te(c, s, d, n, r),
          p = g ? y || (e ? d : l || v) ? [] : t : f;
        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;
          while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;
              while (o--) (a = p[o]) && i.push(f[o] = a);
              y(null, p = [], i, r);
            }
            o = p.length;
            while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }
    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
          return e === i;
        }, a, !0), l = be(function (e) {
          return -1 < P(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r;
        }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
          return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
        }
        c.push(t);
      }
      return we(c);
    }
    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break;
      }
      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = A[e + " "];
      if (!a) {
        t || (t = h(e)), n = t.length;
        while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
            a,
            s,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = k += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);
              while (s = v[a++]) if (s(o, t || C, n)) {
                _r.push(o);
                break;
              }
              i && (k = h);
            }
            m && ((o = !s && o) && u--, e && c.push(o));
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(_r));
              f = Te(f);
            }
            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }
          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }
      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && h(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        i = G.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }
      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);
  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
  var h = function h(e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    T = function T(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }
  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
        n,
        r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || D, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, D = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
    H = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function closest(e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function c() {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
      f = {
        add: function add() {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            S.each(e, function (e, t) {
              m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function remove() {
          return S.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
          }), this;
        },
        has: function has(e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function empty() {
          return s && (s = []), this;
        },
        disable: function disable() {
          return a = u = [], s = t = "", this;
        },
        disabled: function disabled() {
          return !s;
        },
        lock: function lock() {
          return a = u = [], t || i || (s = t = ""), this;
        },
        locked: function locked() {
          return !!a;
        },
        fireWith: function fireWith(e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
        },
        fire: function fire() {
          return f.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!o;
        }
      };
    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
        i = "pending",
        a = {
          state: function state() {
            return i;
          },
          always: function always() {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return a.then(null, e);
          },
          pipe: function pipe() {
            var i = arguments;
            return S.Deferred(function (r) {
              S.each(o, function (e, t) {
                var n = m(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = null;
            }).promise();
          },
          then: function then(t, n, r) {
            var u = 0;
            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function e() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                    }
                  };
                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
              };
            }
            return S.Deferred(function (e) {
              o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? S.extend(e, a) : a;
          }
        },
        s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = s.call(arguments),
        o = S.Deferred(),
        a = function a(t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };
      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
      while (t--) I(i[t], a(t), o.reject);
      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }
  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
  var $ = function $(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
        return l.call(S(e), n);
      })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
        i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) i[X(r)] = t[r];
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
        r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
          while (n--) delete r[t[n]];
        }
        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}
      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
        r,
        i,
        o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          Y.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";
      var n = S.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = S._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
        r = 1,
        i = S.Deferred(),
        o = this,
        a = this.length,
        s = function s() {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function ie(e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = {
      composed: !0
    };
  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });
  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r ? function () {
        return r.cur();
      } : function () {
        return S.css(e, t, "");
      },
      u = s(),
      l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, S.style(e, t, c + l), n = n || [];
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
      c = 0;
      while (o = a[c++]) he.test(o.type || "") && n.push(o);
    }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }
  function Se(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
          n,
          r = Y.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;
        while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && S.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Te,
    isPropagationStopped: Te,
    isImmediatePropagationStopped: Te,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Se(this, e, Ce), !1;
      },
      trigger: function trigger() {
        return Se(this, e), !0;
      },
      _default: function _default() {
        return !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
          n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return Ee(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ee(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == _typeof(e)) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }
  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }
  function qe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
    });
    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);else Le(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
        if (t = n[Y.expando]) {
          if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
          n[Y.expando] = void 0;
        }
        n[Q.expando] && (n[Q.expando] = void 0);
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Oe(this, e, !0);
    },
    remove: function remove(e) {
      return Oe(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      return this.pushStack(n);
    };
  });
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function Re(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = C), t.getComputedStyle(e);
    },
    Me = function Me(e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }
  function Fe(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a;
      }
    }));
  }();
  var Be = ["Webkit", "Moz", "ms"],
    $e = E.createElement("div").style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return t || (e in $e ? e : _e[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = Be.length;
      while (n--) if ((e = Be[n] + t) in $e) return e;
    }(e) || e);
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ge = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }
  function Je(e, t, n) {
    var r = Re(e),
      i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
          return Je(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
          i = Re(e),
          o = !y.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
          s = n ? Qe(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Ye);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
          i,
          o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
          return o;
        }
        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = Ke).prototype = {
    constructor: Ke,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = Ke.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
        n = Ke.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this;
    }
  }).init.prototype = Ke.prototype, (Ke.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = Ke.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = Ke.prototype.init, S.fx.step = {};
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
  }
  function at() {
    return C.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }
  function st(e, t) {
    var n,
      r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function u() {
        if (a) return !1;
        for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, {
          specialEasing: {},
          easing: S.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function createTween(e, t) {
          var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function stop(e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }),
      c = l.props;
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < i; r++) if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }
  S.Animation = S.extend(lt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t);
    },
    prefilters: [function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        v = Y.get(e, "fxshow");
      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = t[r], rt.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }
        d[r] = v && v[r] || S.style(e, r);
      }
      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
        display: l
      }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
        for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]);
      })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
    }],
    prefilter: function prefilter(e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
        o = S.speed(e, n, r),
        a = function a() {
          var e = lt(this, S.extend({}, t), o);
          (i || Y.get(this, "finish")) && e.stop(!0);
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = S.timers,
          r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
          t = Y.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = S.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];
    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
      t = 0,
      n = S.timers;
    for (Ze = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || S.fx.stop(), Ze = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    et || (et = !0, ot());
  }, S.fx.stop = function () {
    et = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);
      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
        r = 0,
        i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), ct = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = ft[t] || S.find.attr;
    ft[t] = function (e, t, n) {
      var r,
        i,
        o = t.toLowerCase();
      return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r;
    };
  });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(" ");
  }
  function gt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }
  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, gt(this)));
      });
      if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
        a = 0;
        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
        i !== (s = ht(r)) && n.setAttribute("class", s);
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, gt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
        a = 0;
        while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
        i !== (s = ht(r)) && n.setAttribute("class", s);
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
        a = "string" === o || Array.isArray(i);
      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, gt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;
        if (a) {
          t = 0, n = S(this), r = vt(i);
          while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
        } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
      return !1;
    }
  });
  var yt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : ht(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
            n,
            r,
            i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
            if (t = S(n).val(), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function set(e, t) {
          var n,
            r,
            i = e.options,
            o = S.makeArray(t),
            a = i.length;
          while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function xt(e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };
    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var bt = C.location,
    wt = {
      guid: Date.now()
    },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) At(n + "[" + t + "]", e[t], r, i);
  }
  S.param = function (e, t) {
    var n,
      r = [],
      i = function i(e, t) {
        var n = m(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) At(n, e[n], t, i);
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Et, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Et, "\r\n")
        };
      }).get();
    }
  });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Mt = E.createElement("a");
  function It(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  Mt.href = bt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Rt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
    },
    ajaxPrefilter: It(Ot),
    ajaxTransport: It(Pt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
        f,
        p,
        n,
        d,
        r,
        h,
        g,
        i,
        o,
        v = S.ajaxSetup({}, t),
        y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
        x = S.Deferred(),
        b = S.Callbacks("once memory"),
        w = v.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = n[e.toLowerCase() + " "];
            }
            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return h ? p : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == h && (v.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];
            return this;
          },
          abort: function abort(e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this;
          }
        };
      if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));
        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");
      function l(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }
              a || (a = i);
            }
            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
              t = a(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: a ? e : "No conversion from " + u + " to " + o
              };
            }
          }
          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Bt = {
      0: 200,
      1223: 204
    },
    $t = S.ajaxSettings.xhr();
  y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
    var _o, a;
    if (y.cors || $t && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
          r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");
        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
      i,
      o,
      a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = S.css(e, "position"),
        c = S(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
        n,
        r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
          t,
          n,
          r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === S.css(e, "position")) e = e.offsetParent;
        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
      if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Xt, "");
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return S;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var Vt = C.jQuery,
    Gt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});

/***/ }),

/***/ "./resources/assets/js/theme.js":
/*!**************************************!*\
  !*** ./resources/assets/js/theme.js ***!
  \**************************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function () {
  "use strict";

  // Start of use strict
  var sidebar = document.querySelector('.sidebar');
  var sidebarToggles = document.querySelectorAll('#sidebarToggle, #sidebarToggleTop');
  if (sidebar) {
    var collapseEl = sidebar.querySelector('.collapse');
    var collapseElementList = [].slice.call(document.querySelectorAll('.sidebar .collapse'));
    var sidebarCollapseList = collapseElementList.map(function (collapseEl) {
      return new bootstrap.Collapse(collapseEl, {
        toggle: false
      });
    });
    var _iterator = _createForOfIteratorHelper(sidebarToggles),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var toggle = _step.value;
        // Toggle the side navigation
        toggle.addEventListener('click', function (e) {
          document.body.classList.toggle('sidebar-toggled');
          sidebar.classList.toggle('toggled');
          if (sidebar.classList.contains('toggled')) {
            var _iterator3 = _createForOfIteratorHelper(sidebarCollapseList),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var bsCollapse = _step3.value;
                bsCollapse.hide();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          ;
        });
      }

      // Close any open menu accordions when window is resized below 768px
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    window.addEventListener('resize', function () {
      var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if (vw < 768) {
        var _iterator2 = _createForOfIteratorHelper(sidebarCollapseList),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var bsCollapse = _step2.value;
            bsCollapse.hide();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      ;
    });
  }

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over

  var fixedNaigation = document.querySelector('body.fixed-nav .sidebar');
  if (fixedNaigation) {
    fixedNaigation.on('mousewheel DOMMouseScroll wheel', function (e) {
      var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if (vw > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });
  }
  var scrollToTop = document.querySelector('.scroll-to-top');
  if (scrollToTop) {
    // Scroll to top button appear
    window.addEventListener('scroll', function () {
      var scrollDistance = window.pageYOffset;

      //check if user is scrolling up
      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }
})(); // End of use strict

/***/ }),

/***/ "./resources/js/customApp.js":
/*!***********************************!*\
  !*** ./resources/js/customApp.js ***!
  \***********************************/
/***/ (() => {

console.log("moja custom appka ");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./resources/assets/js/jquery.min.js");
/******/ 	__webpack_require__("./resources/assets/bootstrap/js/bootstrap.min.js");
/******/ 	__webpack_require__("./resources/assets/js/bs-init.js");
/******/ 	__webpack_require__("./resources/assets/js/chart.min.js");
/******/ 	__webpack_require__("./resources/assets/js/theme.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/customApp.js");
/******/ 	
/******/ })()
;