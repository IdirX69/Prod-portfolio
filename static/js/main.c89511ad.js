/*! For license information please see main.c89511ad.js.LICENSE.txt */
!(function () {
  var e = {
      998: function (e, t, n) {
        "use strict";
        var r = n(458),
          a = { "text/plain": "Text", "text/html": "Url", default: "Text" };
        e.exports = function (e, t) {
          var n,
            i,
            o,
            l,
            u,
            s,
            c = !1;
          t || (t = {}), (n = t.debug || !1);
          try {
            if (
              ((o = r()),
              (l = document.createRange()),
              (u = document.getSelection()),
              ((s = document.createElement("span")).textContent = e),
              (s.ariaHidden = "true"),
              (s.style.all = "unset"),
              (s.style.position = "fixed"),
              (s.style.top = 0),
              (s.style.clip = "rect(0, 0, 0, 0)"),
              (s.style.whiteSpace = "pre"),
              (s.style.webkitUserSelect = "text"),
              (s.style.MozUserSelect = "text"),
              (s.style.msUserSelect = "text"),
              (s.style.userSelect = "text"),
              s.addEventListener("copy", function (r) {
                if ((r.stopPropagation(), t.format))
                  if (
                    (r.preventDefault(), "undefined" === typeof r.clipboardData)
                  ) {
                    n && console.warn("unable to use e.clipboardData"),
                      n && console.warn("trying IE specific stuff"),
                      window.clipboardData.clearData();
                    var i = a[t.format] || a.default;
                    window.clipboardData.setData(i, e);
                  } else
                    r.clipboardData.clearData(),
                      r.clipboardData.setData(t.format, e);
                t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
              }),
              document.body.appendChild(s),
              l.selectNodeContents(s),
              u.addRange(l),
              !document.execCommand("copy"))
            )
              throw new Error("copy command was unsuccessful");
            c = !0;
          } catch (f) {
            n && console.error("unable to copy using execCommand: ", f),
              n && console.warn("trying IE specific stuff");
            try {
              window.clipboardData.setData(t.format || "text", e),
                t.onCopy && t.onCopy(window.clipboardData),
                (c = !0);
            } catch (f) {
              n && console.error("unable to copy using clipboardData: ", f),
                n && console.error("falling back to prompt"),
                (i = (function (e) {
                  var t =
                    (/mac os x/i.test(navigator.userAgent)
                      ? "\u2318"
                      : "Ctrl") + "+C";
                  return e.replace(/#{\s*key\s*}/g, t);
                })(
                  "message" in t
                    ? t.message
                    : "Copy to clipboard: #{key}, Enter"
                )),
                window.prompt(i, e);
            }
          } finally {
            u &&
              ("function" == typeof u.removeRange
                ? u.removeRange(l)
                : u.removeAllRanges()),
              s && document.body.removeChild(s),
              o();
          }
          return c;
        };
      },
      568: function (e, t, n) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CopyToClipboard = void 0);
        var a = l(n(791)),
          i = l(n(998)),
          o = ["text", "onCopy", "options", "children"];
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? u(Object(n), !0).forEach(function (t) {
                  g(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function c(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                a = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++)
                (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
              return a;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (a[n] = e[n]));
          }
          return a;
        }
        function f(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function d(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function p(e, t) {
          return (
            (p =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            p(e, t)
          );
        }
        function h(e) {
          var t = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = y(e);
            if (t) {
              var a = y(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return v(this, n);
          };
        }
        function v(e, t) {
          if (t && ("object" === r(t) || "function" === typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return m(e);
        }
        function m(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function y(e) {
          return (
            (y = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            y(e)
          );
        }
        function g(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var b = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && p(e, t);
          })(u, e);
          var t,
            n,
            r,
            l = h(u);
          function u() {
            var e;
            f(this, u);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              g(
                m((e = l.call.apply(l, [this].concat(n)))),
                "onClick",
                function (t) {
                  var n = e.props,
                    r = n.text,
                    o = n.onCopy,
                    l = n.children,
                    u = n.options,
                    s = a.default.Children.only(l),
                    c = (0, i.default)(r, u);
                  o && o(r, c),
                    s &&
                      s.props &&
                      "function" === typeof s.props.onClick &&
                      s.props.onClick(t);
                }
              ),
              e
            );
          }
          return (
            (t = u),
            (n = [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = (e.text, e.onCopy, e.options, e.children),
                    n = c(e, o),
                    r = a.default.Children.only(t);
                  return a.default.cloneElement(
                    r,
                    s(s({}, n), {}, { onClick: this.onClick })
                  );
                },
              },
            ]) && d(t.prototype, n),
            r && d(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            u
          );
        })(a.default.PureComponent);
        (t.CopyToClipboard = b),
          g(b, "defaultProps", { onCopy: void 0, options: void 0 });
      },
      29: function (e, t, n) {
        "use strict";
        var r = n(568).CopyToClipboard;
        (r.CopyToClipboard = r), (e.exports = r);
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          l = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          P = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          j = Symbol.for("react.forward_ref"),
          R = Symbol.for("react.suspense"),
          L = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          N = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var _ = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var M = Symbol.iterator;
        function D(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (M && e[M]) || e["@@iterator"])
            ? e
            : null;
        }
        var A,
          V = Object.assign;
        function F(e) {
          if (void 0 === A)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              A = (t && t[1]) || "";
            }
          return "\n" + A + e;
        }
        var I = !1;
        function z(e, t) {
          if (!e || I) return "";
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  l = i.length - 1;
                1 <= o && 0 <= l && a[o] !== i[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (a[o] !== i[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || a[o] !== i[l])) {
                        var u = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case R:
              return "Suspense";
            case L:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case j:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case O:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case N:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function X(e, t) {
          var n = t.checked;
          return V({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          G(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return V({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ie(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = V(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = wa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Pe(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Te() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function je(e, t) {
          return e(t);
        }
        function Re() {}
        var Le = !1;
        function Oe(e, t, n) {
          if (Le) return e(t, n);
          Le = !0;
          try {
            return je(e, t, n);
          } finally {
            (Le = !1), (null !== Se || null !== Ee) && (Re(), Te());
          }
        }
        function Ne(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var _e = !1;
        if (c)
          try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
              get: function () {
                _e = !0;
              },
            }),
              window.addEventListener("test", Me, Me),
              window.removeEventListener("test", Me, Me);
          } catch (ce) {
            _e = !1;
          }
        function De(e, t, n, r, a, i, o, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ae = !1,
          Ve = null,
          Fe = !1,
          Ie = null,
          ze = {
            onError: function (e) {
              (Ae = !0), (Ve = e);
            },
          };
        function Ue(e, t, n, r, a, i, o, l, u) {
          (Ae = !1), (Ve = null), De.apply(ze, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Be(e) !== e) throw Error(i(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return He(a), e;
                    if (o === r) return He(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var l = !1, u = a.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = a), (r = o);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = a), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = o), (r = a);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = o), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          Ye = a.unstable_cancelCallback,
          Xe = a.unstable_shouldYield,
          Ke = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var l = o & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (i &= o) && (r = ft(i));
          } else 0 !== (o = n & ~a) ? (r = ft(o)) : 0 !== i && (r = ft(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          kt,
          St,
          Et,
          Ct,
          Pt = !1,
          Tt = [],
          jt = null,
          Rt = null,
          Lt = null,
          Ot = new Map(),
          Nt = new Map(),
          _t = [],
          Mt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Dt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              jt = null;
              break;
            case "dragenter":
            case "dragleave":
              Rt = null;
              break;
            case "mouseover":
            case "mouseout":
              Lt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Nt.delete(t.pointerId);
          }
        }
        function At(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Vt(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function zt() {
          (Pt = !1),
            null !== jt && Ft(jt) && (jt = null),
            null !== Rt && Ft(Rt) && (Rt = null),
            null !== Lt && Ft(Lt) && (Lt = null),
            Ot.forEach(It),
            Nt.forEach(It);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Pt ||
              ((Pt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, zt)));
        }
        function Bt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Tt.length) {
            Ut(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== jt && Ut(jt, e),
              null !== Rt && Ut(Rt, e),
              null !== Lt && Ut(Lt, e),
              Ot.forEach(t),
              Nt.forEach(t),
              n = 0;
            n < _t.length;
            n++
          )
            (r = _t[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < _t.length && null === (n = _t[0]).blockedOn; )
            Vt(n), null === n.blockedOn && _t.shift();
        }
        var Wt = x.ReactCurrentBatchConfig,
          Ht = !0;
        function $t(e, t, n, r) {
          var a = bt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = i);
          }
        }
        function qt(e, t, n, r) {
          var a = bt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = i);
          }
        }
        function Qt(e, t, n, r) {
          if (Ht) {
            var a = Xt(e, t, n, r);
            if (null === a) Hr(e, t, r, Yt, n), Dt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (jt = At(jt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Rt = At(Rt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Lt = At(Lt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Ot.set(i, At(Ot.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Nt.set(i, At(Nt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Dt(e, r), 4 & t && -1 < Mt.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && wt(i),
                  null === (i = Xt(e, t, n, r)) && Hr(e, t, r, Yt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Yt = null;
        function Xt(e, t, n, r) {
          if (((Yt = null), null !== (e = ga((e = we(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Yt = e), null;
        }
        function Kt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            V(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = V({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = V({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          vn = an(V({}, pn, { dataTransfer: 0 })),
          mn = an(V({}, fn, { relatedTarget: 0 })),
          yn = an(
            V({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = V({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
          xn = an(V({}, sn, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Pn = V({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = an(Pn),
          jn = an(
            V({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Rn = an(
            V({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Ln = an(
            V({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          On = V({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Nn = an(On),
          _n = [9, 13, 27, 32],
          Mn = c && "CompositionEvent" in window,
          Dn = null;
        c && "documentMode" in document && (Dn = document.documentMode);
        var An = c && "TextEvent" in window && !Dn,
          Vn = c && (!Mn || (Dn && 8 < Dn && 11 >= Dn)),
          Fn = String.fromCharCode(32),
          In = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== _n.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Pe(r),
            0 < (t = qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Qn = null;
        function Yn(e) {
          Fr(e, 0);
        }
        function Xn(e) {
          if (Q(xa(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Gn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent("onpropertychange", nr), (Qn = qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Xn(Qn)) {
            var t = [];
            $n(t, Qn, e, we(e)), Oe(Yn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), (qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(Qn);
        }
        function ir(e, t) {
          if ("click" === e) return Xn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = cr(n, i));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          yr = null,
          gr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== Y(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && ur(gr, r)) ||
              ((gr = r),
              0 < (r = qr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Pr = Cr("animationend"),
          Tr = Cr("animationiteration"),
          jr = Cr("animationstart"),
          Rr = Cr("transitionend"),
          Lr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Nr(e, t) {
          Lr.set(e, t), u(t, [e]);
        }
        for (var _r = 0; _r < Or.length; _r++) {
          var Mr = Or[_r];
          Nr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        }
        Nr(Pr, "onAnimationEnd"),
          Nr(Tr, "onAnimationIteration"),
          Nr(jr, "onAnimationStart"),
          Nr("dblclick", "onDoubleClick"),
          Nr("focusin", "onFocus"),
          Nr("focusout", "onBlur"),
          Nr(Rr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Dr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ar = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Dr)
          );
        function Vr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, l, u, s) {
              if ((Ue.apply(this, arguments), Ae)) {
                if (!Ae) throw Error(i(198));
                var c = Ve;
                (Ae = !1), (Ve = null), Fe || ((Fe = !0), (Ie = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== i && a.isPropagationStopped()))
                    break e;
                  Vr(a, l, s), (i = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (l = r[o]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== i && a.isPropagationStopped())
                  )
                    break e;
                  Vr(a, l, s), (i = u);
                }
            }
          }
          if (Fe) throw ((e = Ie), (Fe = !1), (Ie = null), e);
        }
        function Ir(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function zr(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ar.has(t) || zr(t, !1, e), zr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), zr("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = qt;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !_e ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = ga(l))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = i = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Oe(function () {
            var r = i,
              a = we(n),
              o = [];
            e: {
              var l = Lr.get(e);
              if (void 0 !== l) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Tn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = mn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Rn;
                    break;
                  case Pr:
                  case Tr:
                  case jr:
                    u = yn;
                    break;
                  case Rr:
                    u = Ln;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Nn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = jn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Ne(h, d)) &&
                        c.push($r(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, a)),
                  o.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ga(s) && !s[ha])) &&
                  (u || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ga(s)
                          : null) &&
                        (s !== (f = Be(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = jn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : xa(u)),
                  (p = null == s ? l : xa(s)),
                  ((l = new c(v, h + "leave", u, n, a)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  ga(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = Qr(p)) h++;
                    for (p = 0, v = d; v; v = Qr(v)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (d = Qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Qr(c)), (d = Qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Yr(o, l, u, c, !1),
                  null !== s && null !== f && Yr(o, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? xa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var m = Kn;
              else if (Hn(l))
                if (Gn) m = or;
                else {
                  m = ar;
                  var y = rr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = ir);
              switch (
                (m && (m = m(e, r))
                  ? $n(o, m, n, a)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (y = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
                    ((mr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(o, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, a);
              }
              var g;
              if (Mn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? zn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Vn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (g = en())
                    : ((Zt = "value" in (Gt = a) ? Gt.value : Gt.textContent),
                      (Bn = !0))),
                0 < (y = qr(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  o.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Un(n)) && (b.data = g))),
                (g = An
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!Mn && zn(e, t))
                          ? ((e = en()), (Jt = Zt = Gt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Vn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            Fr(o, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Ne(e, n)) && r.unshift($r(e, i, a)),
              null != (i = Ne(e, t)) && r.push($r(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Yr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              a
                ? null != (u = Ne(n, i)) && o.unshift($r(n, u, l))
                : a || (null != (u = Ne(n, i)) && o.push($r(n, u, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Xr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Xr, "\n")
            .replace(Kr, "");
        }
        function Zr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(i(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Bt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function ga(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Pa(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Ta = {},
          ja = Ea(Ta),
          Ra = Ea(!1),
          La = Ta;
        function Oa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ta;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Na(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function _a() {
          Ca(Ra), Ca(ja);
        }
        function Ma(e, t, n) {
          if (ja.current !== Ta) throw Error(i(168));
          Pa(ja, t), Pa(Ra, n);
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, W(e) || "Unknown", a));
          return V({}, n, r);
        }
        function Aa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ta),
            (La = ja.current),
            Pa(ja, e),
            Pa(Ra, Ra.current),
            !0
          );
        }
        function Va(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Da(e, t, La)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Ra),
              Ca(ja),
              Pa(ja, e))
            : Ca(Ra),
            Pa(Ra, n);
        }
        var Fa = null,
          Ia = !1,
          za = !1;
        function Ua(e) {
          null === Fa ? (Fa = [e]) : Fa.push(e);
        }
        function Ba() {
          if (!za && null !== Fa) {
            za = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fa;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fa = null), (Ia = !1);
            } catch (a) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), Qe(Je, Ba), a);
            } finally {
              (bt = t), (za = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          $a = null,
          qa = 0,
          Qa = [],
          Ya = 0,
          Xa = null,
          Ka = 1,
          Ga = "";
        function Za(e, t) {
          (Wa[Ha++] = qa), (Wa[Ha++] = $a), ($a = e), (qa = t);
        }
        function Ja(e, t, n) {
          (Qa[Ya++] = Ka), (Qa[Ya++] = Ga), (Qa[Ya++] = Xa), (Xa = e);
          var r = Ka;
          e = Ga;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ka = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ga = i + e);
          } else (Ka = (1 << i) | (n << a) | r), (Ga = e);
        }
        function ei(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0));
        }
        function ti(e) {
          for (; e === $a; )
            ($a = Wa[--Ha]), (Wa[Ha] = null), (qa = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === Xa; )
            (Xa = Qa[--Ya]),
              (Qa[Ya] = null),
              (Ga = Qa[--Ya]),
              (Qa[Ya] = null),
              (Ka = Qa[--Ya]),
              (Qa[Ya] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var n = Os(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function li(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xa ? { id: Ka, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Os(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ui(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function si(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!li(e, t)) {
                if (ui(e)) throw Error(i(418));
                t = sa(n.nextSibling);
                var r = ni;
                t && li(e, t)
                  ? oi(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (ui(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ci(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function fi(e) {
          if (e !== ni) return !1;
          if (!ai) return ci(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (ui(e)) throw (di(), Error(i(418)));
            for (; t; ) oi(e, t), (t = sa(t.nextSibling));
          }
          if ((ci(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function di() {
          for (var e = ri; e; ) e = sa(e.nextSibling);
        }
        function pi() {
          (ri = ni = null), (ai = !1);
        }
        function hi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var vi = x.ReactCurrentBatchConfig;
        function mi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = V({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yi = Ea(null),
          gi = null,
          bi = null,
          xi = null;
        function wi() {
          xi = bi = gi = null;
        }
        function ki(e) {
          var t = yi.current;
          Ca(yi), (e._currentValue = t);
        }
        function Si(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ei(e, t) {
          (gi = e),
            (xi = bi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xl = !0), (e.firstContext = null));
        }
        function Ci(e) {
          var t = e._currentValue;
          if (xi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bi)
            ) {
              if (null === gi) throw Error(i(308));
              (bi = e), (gi.dependencies = { lanes: 0, firstContext: e });
            } else bi = bi.next = e;
          return t;
        }
        var Pi = null;
        function Ti(e) {
          null === Pi ? (Pi = [e]) : Pi.push(e);
        }
        function ji(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ti(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ri(e, r)
          );
        }
        function Ri(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Li = !1;
        function Oi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ni(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function _i(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Mi(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & ju))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ri(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ti(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ri(e, n)
          );
        }
        function Di(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Ai(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Vi(e, t, n, r) {
          var a = e.updateQueue;
          Li = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var u = l,
              s = u.next;
            (u.next = null), null === o ? (i = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === l ? (c.firstBaseUpdate = s) : (l.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== i) {
            var f = a.baseState;
            for (o = 0, c = s = u = null, l = i; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = V({}, f, d);
                      break e;
                    case 2:
                      Li = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Au |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Fi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var Ii = new r.Component().refs;
        function zi(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : V({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ui = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              a = ts(e),
              i = _i(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Mi(e, i, a)) && (ns(t, e, a, r), Di(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              a = ts(e),
              i = _i(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Mi(e, i, a)) && (ns(t, e, a, r), Di(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = es(),
              r = ts(e),
              a = _i(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Mi(e, a, r)) && (ns(t, e, r, n), Di(t, e, r));
          },
        };
        function Bi(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, i);
        }
        function Wi(e, t, n) {
          var r = !1,
            a = Ta,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Ci(i))
              : ((a = Na(t) ? La : ja.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Oa(e, a)
                  : Ta)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ui),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Hi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
        }
        function $i(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Ii), Oi(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Ci(i))
            : ((i = Na(t) ? La : ja.current), (a.context = Oa(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (zi(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Ui.enqueueReplaceState(a, a.state, null),
              Vi(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function qi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Ii && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Qi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Yi(e) {
          return (0, e._init)(e._payload);
        }
        function Xi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = _s(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Vs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var i = n.type;
            return i === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === N &&
                    Yi(i) === t.type))
              ? (((r = a(t, n.props)).ref = qi(e, t, n)), (r.return = e), r)
              : (((r = Ms(n.type, n.key, n.props, null, e.mode, r)).ref = qi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Ds(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Vs("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Ms(t.type, t.key, t.props, null, e.mode, n)).ref = qi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Fs(t, e.mode, n)).return = e), t;
                case N:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || D(t))
                return ((t = Ds(t, e.mode, n, null)).return = e), t;
              Qi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? s(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case N:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || D(n)) return null !== a ? null : f(e, t, n, r, null);
              Qi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case N:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || D(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Qi(t, r);
            }
            return null;
          }
          function v(a, i, l, u) {
            for (
              var s = null, c = null, f = i, v = (i = 0), m = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var y = p(a, f, l[v], u);
              if (null === y) {
                null === f && (f = m);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (i = o(y, i, v)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (f = m);
            }
            if (v === l.length) return n(a, f), ai && Za(a, v), s;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(a, l[v], u)) &&
                  ((i = o(f, i, v)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ai && Za(a, v), s;
            }
            for (f = r(a, f); v < l.length; v++)
              null !== (m = h(f, a, v, l[v], u)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (i = o(m, i, v)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Za(a, v),
              s
            );
          }
          function m(a, l, u, s) {
            var c = D(u);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (u = c.call(u))) throw Error(i(151));
            for (
              var f = (c = null), v = l, m = (l = 0), y = null, g = u.next();
              null !== v && !g.done;
              m++, g = u.next()
            ) {
              v.index > m ? ((y = v), (v = null)) : (y = v.sibling);
              var b = p(a, v, g.value, s);
              if (null === b) {
                null === v && (v = y);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (l = o(b, l, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = y);
            }
            if (g.done) return n(a, v), ai && Za(a, m), c;
            if (null === v) {
              for (; !g.done; m++, g = u.next())
                null !== (g = d(a, g.value, s)) &&
                  ((l = o(g, l, m)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return ai && Za(a, m), c;
            }
            for (v = r(a, v); !g.done; m++, g = u.next())
              null !== (g = h(v, a, m, g.value, s)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? m : g.key),
                (l = o(g, l, m)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Za(a, m),
              c
            );
          }
          return function e(r, i, o, u) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var s = o.key, c = i; null !== c; ) {
                      if (c.key === s) {
                        if ((s = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = a(c, o.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === N &&
                            Yi(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, o.props)).ref = qi(r, c, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((i = Ds(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = i))
                      : (((u = Ms(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = qi(r, i, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = o.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, o.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Fs(o, r.mode, u)).return = r), (r = i);
                  }
                  return l(r);
                case N:
                  return e(r, i, (c = o._init)(o._payload), u);
              }
              if (te(o)) return v(r, i, o, u);
              if (D(o)) return m(r, i, o, u);
              Qi(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Vs(o, r.mode, u)).return = r), (r = i)),
                l(r))
              : n(r, i);
          };
        }
        var Ki = Xi(!0),
          Gi = Xi(!1),
          Zi = {},
          Ji = Ea(Zi),
          eo = Ea(Zi),
          to = Ea(Zi);
        function no(e) {
          if (e === Zi) throw Error(i(174));
          return e;
        }
        function ro(e, t) {
          switch ((Pa(to, t), Pa(eo, e), Pa(Ji, Zi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Ji), Pa(Ji, t);
        }
        function ao() {
          Ca(Ji), Ca(eo), Ca(to);
        }
        function io(e) {
          no(to.current);
          var t = no(Ji.current),
            n = ue(t, e.type);
          t !== n && (Pa(eo, e), Pa(Ji, n));
        }
        function oo(e) {
          eo.current === e && (Ca(Ji), Ca(eo));
        }
        var lo = Ea(0);
        function uo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var so = [];
        function co() {
          for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null;
          so.length = 0;
        }
        var fo = x.ReactCurrentDispatcher,
          po = x.ReactCurrentBatchConfig,
          ho = 0,
          vo = null,
          mo = null,
          yo = null,
          go = !1,
          bo = !1,
          xo = 0,
          wo = 0;
        function ko() {
          throw Error(i(321));
        }
        function So(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Eo(e, t, n, r, a, o) {
          if (
            ((ho = o),
            (vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (yo = mo = null),
                (t.updateQueue = null),
                (fo.current = sl),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = ol),
            (t = null !== mo && null !== mo.next),
            (ho = 0),
            (yo = mo = vo = null),
            (go = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Co() {
          var e = 0 !== xo;
          return (xo = 0), e;
        }
        function Po() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yo ? (vo.memoizedState = yo = e) : (yo = yo.next = e), yo
          );
        }
        function To() {
          if (null === mo) {
            var e = vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mo.next;
          var t = null === yo ? vo.memoizedState : yo.next;
          if (null !== t) (yo = t), (mo = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (mo = e).memoizedState,
              baseState: mo.baseState,
              baseQueue: mo.baseQueue,
              queue: mo.queue,
              next: null,
            }),
              null === yo ? (vo.memoizedState = yo = e) : (yo = yo.next = e);
          }
          return yo;
        }
        function jo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ro(e) {
          var t = To(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = mo,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var l = a.next;
              (a.next = o.next), (o.next = l);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var u = (l = null),
              s = null,
              c = o;
            do {
              var f = c.lane;
              if ((ho & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (l = r)) : (s = s.next = d),
                  (vo.lanes |= f),
                  (Au |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === s ? (l = r) : (s.next = u),
              lr(r, t.memoizedState) || (xl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (vo.lanes |= o), (Au |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Lo(e) {
          var t = To(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== a);
            lr(o, t.memoizedState) || (xl = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Oo() {}
        function No(e, t) {
          var n = vo,
            r = To(),
            a = t(),
            o = !lr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (xl = !0)),
            (r = r.queue),
            Ho(Do.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== yo && 1 & yo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Io(9, Mo.bind(null, n, r, a, t), void 0, null),
              null === Ru)
            )
              throw Error(i(349));
            0 !== (30 & ho) || _o(n, t, a);
          }
          return a;
        }
        function _o(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Mo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ao(t) && Vo(e);
        }
        function Do(e, t, n) {
          return n(function () {
            Ao(t) && Vo(e);
          });
        }
        function Ao(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Vo(e) {
          var t = Ri(e, 1);
          null !== t && ns(t, e, 1, -1);
        }
        function Fo(e) {
          var t = Po();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: jo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vo, e)),
            [t.memoizedState, e]
          );
        }
        function Io(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function zo() {
          return To().memoizedState;
        }
        function Uo(e, t, n, r) {
          var a = Po();
          (vo.flags |= e),
            (a.memoizedState = Io(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bo(e, t, n, r) {
          var a = To();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== mo) {
            var o = mo.memoizedState;
            if (((i = o.destroy), null !== r && So(r, o.deps)))
              return void (a.memoizedState = Io(t, n, i, r));
          }
          (vo.flags |= e), (a.memoizedState = Io(1 | t, n, i, r));
        }
        function Wo(e, t) {
          return Uo(8390656, 8, e, t);
        }
        function Ho(e, t) {
          return Bo(2048, 8, e, t);
        }
        function $o(e, t) {
          return Bo(4, 2, e, t);
        }
        function qo(e, t) {
          return Bo(4, 4, e, t);
        }
        function Qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Yo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bo(4, 4, Qo.bind(null, t, e), n)
          );
        }
        function Xo() {}
        function Ko(e, t) {
          var n = To();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Go(e, t) {
          var n = To();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zo(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (xl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (vo.lanes |= n), (Au |= n), (e.baseState = !0)),
              t);
        }
        function Jo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function el() {
          return To().memoizedState;
        }
        function tl(e, t, n) {
          var r = ts(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = ji(e, t, n, r))) {
            ns(n, e, r, es()), il(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = ts(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  l = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, o))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Ti(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = ji(e, t, a, r)) &&
              (ns(n, e, r, (a = es())), il(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vo || (null !== t && t === vo);
        }
        function al(e, t) {
          bo = go = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function il(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var ol = {
            readContext: Ci,
            useCallback: ko,
            useContext: ko,
            useEffect: ko,
            useImperativeHandle: ko,
            useInsertionEffect: ko,
            useLayoutEffect: ko,
            useMemo: ko,
            useReducer: ko,
            useRef: ko,
            useState: ko,
            useDebugValue: ko,
            useDeferredValue: ko,
            useTransition: ko,
            useMutableSource: ko,
            useSyncExternalStore: ko,
            useId: ko,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Ci,
            useCallback: function (e, t) {
              return (Po().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ci,
            useEffect: Wo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Uo(4194308, 4, Qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Uo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Uo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Po();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Po();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Po().memoizedState = e);
            },
            useState: Fo,
            useDebugValue: Xo,
            useDeferredValue: function (e) {
              return (Po().memoizedState = e);
            },
            useTransition: function () {
              var e = Fo(!1),
                t = e[0];
              return (
                (e = Jo.bind(null, e[1])), (Po().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vo,
                a = Po();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Ru)) throw Error(i(349));
                0 !== (30 & ho) || _o(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Wo(Do.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Io(9, Mo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Po(),
                t = Ru.identifierPrefix;
              if (ai) {
                var n = Ga;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ka & ~(1 << (32 - ot(Ka) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Ci,
            useCallback: Ko,
            useContext: Ci,
            useEffect: Ho,
            useImperativeHandle: Yo,
            useInsertionEffect: $o,
            useLayoutEffect: qo,
            useMemo: Go,
            useReducer: Ro,
            useRef: zo,
            useState: function () {
              return Ro(jo);
            },
            useDebugValue: Xo,
            useDeferredValue: function (e) {
              return Zo(To(), mo.memoizedState, e);
            },
            useTransition: function () {
              return [Ro(jo)[0], To().memoizedState];
            },
            useMutableSource: Oo,
            useSyncExternalStore: No,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Ci,
            useCallback: Ko,
            useContext: Ci,
            useEffect: Ho,
            useImperativeHandle: Yo,
            useInsertionEffect: $o,
            useLayoutEffect: qo,
            useMemo: Go,
            useReducer: Lo,
            useRef: zo,
            useState: function () {
              return Lo(jo);
            },
            useDebugValue: Xo,
            useDeferredValue: function (e) {
              var t = To();
              return null === mo
                ? (t.memoizedState = e)
                : Zo(t, mo.memoizedState, e);
            },
            useTransition: function () {
              return [Lo(jo)[0], To().memoizedState];
            },
            useMutableSource: Oo,
            useSyncExternalStore: No,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = _i(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hu || ((Hu = !0), ($u = r)), dl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = _i(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === qu ? (qu = new Set([this])) : qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
        }
        function yl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = _i(-1, 1)).tag = 2), Mi(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = x.ReactCurrentOwner,
          xl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? Gi(t, null, n, r) : Ki(t, e.child, n, r);
        }
        function kl(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Ei(t, a),
            (r = Eo(e, t, n, r, i, a)),
            (n = Co()),
            null === e || xl
              ? (ai && n && ei(t), (t.flags |= 1), wl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hl(e, t, a))
          );
        }
        function Sl(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Ns(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ms(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), El(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(o, r) &&
              e.ref === t.ref
            )
              return Hl(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = _s(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (ur(i, r) && e.ref === t.ref) {
              if (((xl = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Hl(e, t, a);
              0 !== (131072 & e.flags) && (xl = !0);
            }
          }
          return Tl(e, t, n, r, a);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Pa(_u, Nu),
                (Nu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Pa(_u, Nu),
                  (Nu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Pa(_u, Nu),
                (Nu |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Pa(_u, Nu),
              (Nu |= r);
          return wl(e, t, a, n), t.child;
        }
        function Pl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Tl(e, t, n, r, a) {
          var i = Na(n) ? La : ja.current;
          return (
            (i = Oa(t, i)),
            Ei(t, a),
            (n = Eo(e, t, n, r, i, a)),
            (r = Co()),
            null === e || xl
              ? (ai && r && ei(t), (t.flags |= 1), wl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hl(e, t, a))
          );
        }
        function jl(e, t, n, r, a) {
          if (Na(n)) {
            var i = !0;
            Aa(t);
          } else i = !1;
          if ((Ei(t, a), null === t.stateNode))
            Wl(e, t), Wi(t, n, r), $i(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var u = o.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = Ci(s))
              : (s = Oa(t, (s = Na(n) ? La : ja.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || u !== s) && Hi(t, o, r, s)),
              (Li = !1);
            var d = t.memoizedState;
            (o.state = d),
              Vi(t, r, o, a),
              (u = t.memoizedState),
              l !== r || d !== u || Ra.current || Li
                ? ("function" === typeof c &&
                    (zi(t, n, c, r), (u = t.memoizedState)),
                  (l = Li || Bi(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = l))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Ni(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : mi(t.type, l)),
              (o.props = s),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Ci(u))
                : (u = Oa(t, (u = Na(n) ? La : ja.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== f || d !== u) && Hi(t, o, r, u)),
              (Li = !1),
              (d = t.memoizedState),
              (o.state = d),
              Vi(t, r, o, a);
            var h = t.memoizedState;
            l !== f || d !== h || Ra.current || Li
              ? ("function" === typeof p &&
                  (zi(t, n, p, r), (h = t.memoizedState)),
                (s = Li || Bi(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Rl(e, t, n, r, i, a);
        }
        function Rl(e, t, n, r, a, i) {
          Pl(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Va(t, n, !1), Hl(e, t, i);
          (r = t.stateNode), (bl.current = t);
          var l =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Ki(t, e.child, null, i)),
                (t.child = Ki(t, null, l, i)))
              : wl(e, t, l, i),
            (t.memoizedState = r.state),
            a && Va(t, n, !0),
            t.child
          );
        }
        function Ll(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ma(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ma(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Ol(e, t, n, r, a) {
          return pi(), hi(a), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Nl,
          _l,
          Ml,
          Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Al(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Vl(e, t, n) {
          var r,
            a = t.pendingProps,
            o = lo.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Pa(lo, 1 & o),
            null === e)
          )
            return (
              si(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = As(u, a, 0, null)),
                      (e = Ds(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Al(n)),
                      (t.memoizedState = Dl),
                      e)
                    : Fl(t, u))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Il(e, t, l, (r = fl(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = As(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Ds(o, a, l, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Ki(t, e.child, null, l),
                    (t.child.memoizedState = Al(l)),
                    (t.memoizedState = Dl),
                    o);
              if (0 === (1 & t.mode)) return Il(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Il(e, t, l, (r = fl((o = Error(i(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (l & e.childLanes)), xl || u)) {
                if (null !== (r = Ru)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Ri(e, a), ns(r, e, a, -1));
                }
                return vs(), Il(e, t, l, (r = fl(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ts.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ri = sa(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((Qa[Ya++] = Ka),
                    (Qa[Ya++] = Ga),
                    (Qa[Ya++] = Xa),
                    (Ka = e.id),
                    (Ga = e.overflow),
                    (Xa = t)),
                  (t = Fl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, o, n);
          if (l) {
            (l = a.fallback), (u = t.mode), (r = (o = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = _s(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (l = _s(r, l))
                : ((l = Ds(l, u, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Al(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Dl),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = _s(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fl(e, t) {
          return (
            ((t = As(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Il(e, t, n, r) {
          return (
            null !== r && hi(r),
            Ki(t, e.child, null, n),
            ((e = Fl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function zl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Si(e.return, t, n);
        }
        function Ul(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Bl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = lo.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && zl(e, n, t);
                else if (19 === e.tag) zl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Pa(lo, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === uo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ul(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === uo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ul(t, !0, n, null, i);
                break;
              case "together":
                Ul(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Au |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = _s((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = _s(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $l(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ql(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return ql(t), null;
            case 1:
            case 17:
              return Na(t.type) && _a(), ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Ca(Ra),
                Ca(ja),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fi(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (os(ii), (ii = null)))),
                ql(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                _l(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return ql(t), null;
                }
                if (((e = no(Ji.current)), fi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ir("cancel", r), Ir("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Dr.length; a++) Ir(Dr[a], r);
                      break;
                    case "source":
                      Ir("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ir("error", r), Ir("load", r);
                      break;
                    case "details":
                      Ir("toggle", r);
                      break;
                    case "input":
                      K(r, o), Ir("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Ir("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Ir("invalid", r);
                  }
                  for (var u in (ge(n, o), (a = null), o))
                    if (o.hasOwnProperty(u)) {
                      var s = o[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : l.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Ir("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      q(r), J(r, o, !0);
                      break;
                    case "textarea":
                      q(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Nl(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Ir("cancel", e), Ir("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ir("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Dr.length; a++) Ir(Dr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ir("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ir("error", e), Ir("load", e), (a = r);
                        break;
                      case "details":
                        Ir("toggle", e), (a = r);
                        break;
                      case "input":
                        K(e, r), (a = X(e, r)), Ir("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = V({}, r, { value: void 0 })),
                          Ir("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ir("invalid", e);
                    }
                    for (o in (ge(n, a), (s = a)))
                      if (s.hasOwnProperty(o)) {
                        var c = s[o];
                        "style" === o
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (l.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Ir("scroll", e)
                              : null != c && b(e, o, c, u));
                      }
                    switch (n) {
                      case "input":
                        q(e), J(e, r, !1);
                        break;
                      case "textarea":
                        q(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return ql(t), null;
            case 6:
              if (e && null != t.stateNode) Ml(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = no(to.current)), no(Ji.current), fi(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (o = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return ql(t), null;
            case 13:
              if (
                (Ca(lo),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  di(), pi(), (t.flags |= 98560), (o = !1);
                else if (((o = fi(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[da] = t;
                  } else
                    pi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  ql(t), (o = !1);
                } else null !== ii && (os(ii), (ii = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & lo.current)
                        ? 0 === Mu && (Mu = 3)
                        : vs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  ql(t),
                  null);
            case 4:
              return (
                ao(), null === e && Br(t.stateNode.containerInfo), ql(t), null
              );
            case 10:
              return ki(t.type._context), ql(t), null;
            case 19:
              if ((Ca(lo), null === (o = t.memoizedState))) return ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = o.rendering)))
                if (r) $l(o, !1);
                else {
                  if (0 !== Mu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = uo(e))) {
                        for (
                          t.flags |= 128,
                            $l(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Pa(lo, (1 & lo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ge() > Bu &&
                    ((t.flags |= 128),
                    (r = !0),
                    $l(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = uo(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $l(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !u.alternate &&
                        !ai)
                    )
                      return ql(t), null;
                  } else
                    2 * Ge() - o.renderingStartTime > Bu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $l(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = lo.current),
                  Pa(lo, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (ql(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Nu) &&
                    (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Yl(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Na(t.type) && _a(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Ca(Ra),
                Ca(ja),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Ca(lo),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                pi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(lo), null;
            case 4:
              return ao(), null;
            case 10:
              return ki(t.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Nl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (_l = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no(Ji.current);
              var i,
                o = null;
              switch (n) {
                case "input":
                  (a = X(e, a)), (r = X(e, r)), (o = []);
                  break;
                case "select":
                  (a = V({}, a, { value: void 0 })),
                    (r = V({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (i in u)
                      u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (i in u)
                        !u.hasOwnProperty(i) ||
                          (s && s.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in s)
                        s.hasOwnProperty(i) &&
                          u[i] !== s[i] &&
                          (n || (n = {}), (n[i] = s[i]));
                    } else n || (o || (o = []), o.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (o = o || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (o = o || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Ir("scroll", e),
                            o || u === s || (o = []))
                          : (o = o || []).push(c, s));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ml = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xl = !1,
          Kl = !1,
          Gl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function Jl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Es(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            Es(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && eu(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ru(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function au(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function iu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function lu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        var cu = null,
          fu = !1;
        function du(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Kl || Jl(n, t);
            case 6:
              var r = cu,
                a = fu;
              (cu = null),
                du(e, t, n),
                (fu = a),
                null !== (cu = r) &&
                  (fu
                    ? ((e = cu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cu.removeChild(n.stateNode));
              break;
            case 18:
              null !== cu &&
                (fu
                  ? ((e = cu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Bt(e))
                  : ua(cu, n.stateNode));
              break;
            case 4:
              (r = cu),
                (a = fu),
                (cu = n.stateNode.containerInfo),
                (fu = !0),
                du(e, t, n),
                (cu = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Kl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      eu(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              du(e, t, n);
              break;
            case 1:
              if (
                !Kl &&
                (Jl(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Es(n, t, l);
                }
              du(e, t, n);
              break;
            case 21:
              du(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Kl = (r = Kl) || null !== n.memoizedState),
                  du(e, t, n),
                  (Kl = r))
                : du(e, t, n);
              break;
            default:
              du(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gl()),
              t.forEach(function (t) {
                var r = js.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  l = t,
                  u = l;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(i(160));
                pu(o, l, a), (cu = null), (fu = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                Es(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) mu(t, e), (t = t.sibling);
        }
        function mu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vu(t, e), yu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (m) {
                  Es(e, e.return, m);
                }
                try {
                  nu(5, e, e.return);
                } catch (m) {
                  Es(e, e.return, m);
                }
              }
              break;
            case 1:
              vu(t, e), yu(e), 512 & r && null !== n && Jl(n, n.return);
              break;
            case 5:
              if (
                (vu(t, e),
                yu(e),
                512 & r && null !== n && Jl(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  Es(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : o,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === o.type &&
                      null != o.name &&
                      G(a, o),
                      be(u, l);
                    var c = be(u, o);
                    for (l = 0; l < s.length; l += 2) {
                      var f = s[l],
                        d = s[l + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        Z(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (m) {
                    Es(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((vu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (m) {
                  Es(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (vu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (m) {
                  Es(e, e.return, m);
                }
              break;
            case 4:
            default:
              vu(t, e), yu(e);
              break;
            case 13:
              vu(t, e),
                yu(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Uu = Ge())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Kl = (c = Kl) || f), vu(t, e), (Kl = c))
                  : vu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Zl = e, f = e.child; null !== f; ) {
                    for (d = Zl = f; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          Jl(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              Es(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          Jl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            wu(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : wu(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((u = d.stateNode),
                              (l =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = ve("display", l)));
                      } catch (m) {
                        Es(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        Es(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vu(t, e), yu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ou(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    su(e, lu(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  uu(e, lu(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (l) {
              Es(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gu(e, t, n) {
          (Zl = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var a = Zl,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Xl;
              if (!o) {
                var l = a.alternate,
                  u = (null !== l && null !== l.memoizedState) || Kl;
                l = Xl;
                var s = Kl;
                if (((Xl = o), (Kl = u) && !s))
                  for (Zl = a; null !== Zl; )
                    (u = (o = Zl).child),
                      22 === o.tag && null !== o.memoizedState
                        ? ku(a)
                        : null !== u
                        ? ((u.return = o), (Zl = u))
                        : ku(a);
                for (; null !== i; ) (Zl = i), bu(i, t, n), (i = i.sibling);
                (Zl = a), (Xl = l), (Kl = s);
              }
              xu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Zl = i))
                : xu(e);
          }
        }
        function xu(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kl || ru(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Kl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : mi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Fi(t, o, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Fi(t, l, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Kl || (512 & t.flags && au(t));
              } catch (p) {
                Es(t, t.return, p);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function wu(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function ku(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t);
                  } catch (u) {
                    Es(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Es(t, a, u);
                    }
                  }
                  var i = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Es(t, i, u);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Es(t, o, u);
                  }
              }
            } catch (u) {
              Es(t, t.return, u);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var Su,
          Eu = Math.ceil,
          Cu = x.ReactCurrentDispatcher,
          Pu = x.ReactCurrentOwner,
          Tu = x.ReactCurrentBatchConfig,
          ju = 0,
          Ru = null,
          Lu = null,
          Ou = 0,
          Nu = 0,
          _u = Ea(0),
          Mu = 0,
          Du = null,
          Au = 0,
          Vu = 0,
          Fu = 0,
          Iu = null,
          zu = null,
          Uu = 0,
          Bu = 1 / 0,
          Wu = null,
          Hu = !1,
          $u = null,
          qu = null,
          Qu = !1,
          Yu = null,
          Xu = 0,
          Ku = 0,
          Gu = null,
          Zu = -1,
          Ju = 0;
        function es() {
          return 0 !== (6 & ju) ? Ge() : -1 !== Zu ? Zu : (Zu = Ge());
        }
        function ts(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & ju) && 0 !== Ou
            ? Ou & -Ou
            : null !== vi.transition
            ? (0 === Ju && (Ju = vt()), Ju)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function ns(e, t, n, r) {
          if (50 < Ku) throw ((Ku = 0), (Gu = null), Error(i(185)));
          yt(e, n, r),
            (0 !== (2 & ju) && e === Ru) ||
              (e === Ru && (0 === (2 & ju) && (Vu |= n), 4 === Mu && ls(e, Ou)),
              rs(e, r),
              1 === n &&
                0 === ju &&
                0 === (1 & t.mode) &&
                ((Bu = Ge() + 500), Ia && Ba()));
        }
        function rs(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                l = 1 << o,
                u = a[o];
              -1 === u
                ? (0 !== (l & n) && 0 === (l & r)) || (a[o] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (i &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Ru ? Ou : 0);
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ia = !0), Ua(e);
                  })(us.bind(null, e))
                : Ua(us.bind(null, e)),
                oa(function () {
                  0 === (6 & ju) && Ba();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Rs(n, as.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function as(e, t) {
          if (((Zu = -1), (Ju = 0), 0 !== (6 & ju))) throw Error(i(327));
          var n = e.callbackNode;
          if (ks() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ru ? Ou : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ms(e, r);
          else {
            t = r;
            var a = ju;
            ju |= 2;
            var o = hs();
            for (
              (Ru === e && Ou === t) ||
              ((Wu = null), (Bu = Ge() + 500), ds(e, t));
              ;

            )
              try {
                gs();
                break;
              } catch (u) {
                ps(e, u);
              }
            wi(),
              (Cu.current = o),
              (ju = a),
              null !== Lu ? (t = 0) : ((Ru = null), (Ou = 0), (t = Mu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = is(e, a))),
              1 === t)
            )
              throw ((n = Du), ds(e, 0), ls(e, r), rs(e, Ge()), n);
            if (6 === t) ls(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(i(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = ms(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = is(e, o))),
                  1 === t))
              )
                throw ((n = Du), ds(e, 0), ls(e, r), rs(e, Ge()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  ws(e, zu, Wu);
                  break;
                case 3:
                  if (
                    (ls(e, r),
                    (130023424 & r) === r && 10 < (t = Uu + 500 - Ge()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ws.bind(null, e, zu, Wu), t);
                    break;
                  }
                  ws(e, zu, Wu);
                  break;
                case 4:
                  if ((ls(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - ot(r);
                    (o = 1 << l), (l = t[l]) > a && (a = l), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Eu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ws.bind(null, e, zu, Wu), r);
                    break;
                  }
                  ws(e, zu, Wu);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return rs(e, Ge()), e.callbackNode === n ? as.bind(null, e) : null;
        }
        function is(e, t) {
          var n = Iu;
          return (
            e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256),
            2 !== (e = ms(e, t)) && ((t = zu), (zu = n), null !== t && os(t)),
            e
          );
        }
        function os(e) {
          null === zu ? (zu = e) : zu.push.apply(zu, e);
        }
        function ls(e, t) {
          for (
            t &= ~Fu,
              t &= ~Vu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function us(e) {
          if (0 !== (6 & ju)) throw Error(i(327));
          ks();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rs(e, Ge()), null;
          var n = ms(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = is(e, r)));
          }
          if (1 === n) throw ((n = Du), ds(e, 0), ls(e, t), rs(e, Ge()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ws(e, zu, Wu),
            rs(e, Ge()),
            null
          );
        }
        function ss(e, t) {
          var n = ju;
          ju |= 1;
          try {
            return e(t);
          } finally {
            0 === (ju = n) && ((Bu = Ge() + 500), Ia && Ba());
          }
        }
        function cs(e) {
          null !== Yu && 0 === Yu.tag && 0 === (6 & ju) && ks();
          var t = ju;
          ju |= 1;
          var n = Tu.transition,
            r = bt;
          try {
            if (((Tu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Tu.transition = n), 0 === (6 & (ju = t)) && Ba();
          }
        }
        function fs() {
          (Nu = _u.current), Ca(_u);
        }
        function ds(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Lu))
            for (n = Lu.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    _a();
                  break;
                case 3:
                  ao(), Ca(Ra), Ca(ja), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Ca(lo);
                  break;
                case 10:
                  ki(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((Ru = e),
            (Lu = e = _s(e.current, null)),
            (Ou = Nu = t),
            (Mu = 0),
            (Du = null),
            (Fu = Vu = Au = 0),
            (zu = Iu = null),
            null !== Pi)
          ) {
            for (t = 0; t < Pi.length; t++)
              if (null !== (r = (n = Pi[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Pi = null;
          }
          return e;
        }
        function ps(e, t) {
          for (;;) {
            var n = Lu;
            try {
              if ((wi(), (fo.current = ol), go)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                go = !1;
              }
              if (
                ((ho = 0),
                (yo = mo = vo = null),
                (bo = !1),
                (xo = 0),
                (Pu.current = null),
                null === n || null === n.return)
              ) {
                (Mu = 1), (Du = t), (Lu = null);
                break;
              }
              e: {
                var o = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Ou),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = yl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      gl(h, l, u, 0, t),
                      1 & h.mode && ml(o, c, t),
                      (s = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(s), (t.updateQueue = m);
                    } else v.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(o, c, t), vs();
                    break e;
                  }
                  s = Error(i(426));
                } else if (ai && 1 & u.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gl(y, l, u, 0, t),
                      hi(cl(s, u));
                    break e;
                  }
                }
                (o = s = cl(s, u)),
                  4 !== Mu && (Mu = 2),
                  null === Iu ? (Iu = [o]) : Iu.push(o),
                  (o = l);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Ai(o, hl(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var g = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === qu || !qu.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Ai(o, vl(o, u, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              xs(n);
            } catch (x) {
              (t = x), Lu === n && null !== n && (Lu = n = n.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Cu.current;
          return (Cu.current = ol), null === e ? ol : e;
        }
        function vs() {
          (0 !== Mu && 3 !== Mu && 2 !== Mu) || (Mu = 4),
            null === Ru ||
              (0 === (268435455 & Au) && 0 === (268435455 & Vu)) ||
              ls(Ru, Ou);
        }
        function ms(e, t) {
          var n = ju;
          ju |= 2;
          var r = hs();
          for ((Ru === e && Ou === t) || ((Wu = null), ds(e, t)); ; )
            try {
              ys();
              break;
            } catch (a) {
              ps(e, a);
            }
          if ((wi(), (ju = n), (Cu.current = r), null !== Lu))
            throw Error(i(261));
          return (Ru = null), (Ou = 0), Mu;
        }
        function ys() {
          for (; null !== Lu; ) bs(Lu);
        }
        function gs() {
          for (; null !== Lu && !Xe(); ) bs(Lu);
        }
        function bs(e) {
          var t = Su(e.alternate, e, Nu);
          (e.memoizedProps = e.pendingProps),
            null === t ? xs(e) : (Lu = t),
            (Pu.current = null);
        }
        function xs(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ql(n, t, Nu))) return void (Lu = n);
            } else {
              if (null !== (n = Yl(n, t)))
                return (n.flags &= 32767), void (Lu = n);
              if (null === e) return (Mu = 6), void (Lu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Lu = t);
            Lu = t = e;
          } while (null !== t);
          0 === Mu && (Mu = 5);
        }
        function ws(e, t, n) {
          var r = bt,
            a = Tu.transition;
          try {
            (Tu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ks();
                } while (null !== Yu);
                if (0 !== (6 & ju)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, o),
                  e === Ru && ((Lu = Ru = null), (Ou = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qu ||
                    ((Qu = !0),
                    Rs(tt, function () {
                      return ks(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Tu.transition), (Tu.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = ju;
                  (ju |= 4),
                    (Pu.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = l + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = l),
                                    p === o && ++f === r && (s = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        y = v.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : mi(t.type, m),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (w) {
                              Es(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (v = tu), (tu = !1);
                    })(e, n),
                    mu(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    gu(n, e, a),
                    Ke(),
                    (ju = u),
                    (bt = l),
                    (Tu.transition = o);
                } else e.current = n;
                if (
                  (Qu && ((Qu = !1), (Yu = e), (Xu = a)),
                  (o = e.pendingLanes),
                  0 === o && (qu = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rs(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Hu) throw ((Hu = !1), (e = $u), ($u = null), e);
                0 !== (1 & Xu) && 0 !== e.tag && ks(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Gu
                      ? Ku++
                      : ((Ku = 0), (Gu = e))
                    : (Ku = 0),
                  Ba();
              })(e, t, n, r);
          } finally {
            (Tu.transition = a), (bt = r);
          }
          return null;
        }
        function ks() {
          if (null !== Yu) {
            var e = xt(Xu),
              t = Tu.transition,
              n = bt;
            try {
              if (((Tu.transition = null), (bt = 16 > e ? 16 : e), null === Yu))
                var r = !1;
              else {
                if (((e = Yu), (Yu = null), (Xu = 0), 0 !== (6 & ju)))
                  throw Error(i(331));
                var a = ju;
                for (ju |= 4, Zl = e.current; null !== Zl; ) {
                  var o = Zl,
                    l = o.child;
                  if (0 !== (16 & Zl.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Zl = c; null !== Zl; ) {
                          var f = Zl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zl = d);
                          else
                            for (; null !== Zl; ) {
                              var p = (f = Zl).sibling,
                                h = f.return;
                              if ((iu(f), f === c)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zl = p);
                                break;
                              }
                              Zl = h;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var y = m.sibling;
                            (m.sibling = null), (m = y);
                          } while (null !== m);
                        }
                      }
                      Zl = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== l)
                    (l.return = o), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (o = Zl).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, o, o.return);
                        }
                      var g = o.sibling;
                      if (null !== g) {
                        (g.return = o.return), (Zl = g);
                        break e;
                      }
                      Zl = o.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var x = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x)
                    (x.return = l), (Zl = x);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (u = Zl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (k) {
                          Es(u, u.return, k);
                        }
                      if (u === l) {
                        Zl = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), (Zl = w);
                        break e;
                      }
                      Zl = u.return;
                    }
                }
                if (
                  ((ju = a),
                  Ba(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Tu.transition = t);
            }
          }
          return !1;
        }
        function Ss(e, t, n) {
          (e = Mi(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = es()),
            null !== e && (yt(e, 1, t), rs(e, t));
        }
        function Es(e, t, n) {
          if (3 === e.tag) Ss(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ss(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === qu || !qu.has(r)))
                ) {
                  (t = Mi(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = es()),
                    null !== t && (yt(t, 1, e), rs(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = es()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ru === e &&
              (Ou & n) === n &&
              (4 === Mu ||
              (3 === Mu && (130023424 & Ou) === Ou && 500 > Ge() - Uu)
                ? ds(e, 0)
                : (Fu |= n)),
            rs(e, t);
        }
        function Ps(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = es();
          null !== (e = Ri(e, t)) && (yt(e, t, n), rs(e, n));
        }
        function Ts(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ps(e, n);
        }
        function js(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Ps(e, n);
        }
        function Rs(e, t) {
          return Qe(e, t);
        }
        function Ls(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Os(e, t, n, r) {
          return new Ls(e, t, n, r);
        }
        function Ns(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function _s(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Os(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ms(e, t, n, r, a, o) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Ns(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return Ds(n.children, a, o, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Os(12, n, t, 2 | a)).elementType = C), (e.lanes = o), e
                );
              case R:
                return (
                  ((e = Os(13, n, t, a)).elementType = R), (e.lanes = o), e
                );
              case L:
                return (
                  ((e = Os(19, n, t, a)).elementType = L), (e.lanes = o), e
                );
              case _:
                return As(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      l = 10;
                      break e;
                    case T:
                      l = 9;
                      break e;
                    case j:
                      l = 11;
                      break e;
                    case O:
                      l = 14;
                      break e;
                    case N:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Os(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Ds(e, t, n, r) {
          return ((e = Os(7, e, r, t)).lanes = n), e;
        }
        function As(e, t, n, r) {
          return (
            ((e = Os(22, e, r, t)).elementType = _),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Vs(e, t, n) {
          return ((e = Os(6, e, null, t)).lanes = n), e;
        }
        function Fs(e, t, n) {
          return (
            ((t = Os(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Is(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function zs(e, t, n, r, a, i, o, l, u) {
          return (
            (e = new Is(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Os(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Oi(i),
            e
          );
        }
        function Us(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Bs(e) {
          if (!e) return Ta;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Na(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Na(n)) return Da(e, n, t);
          }
          return t;
        }
        function Ws(e, t, n, r, a, i, o, l, u) {
          return (
            ((e = zs(n, r, !0, e, 0, i, 0, l, u)).context = Bs(null)),
            (n = e.current),
            ((i = _i((r = es()), (a = ts(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Mi(n, i, a),
            (e.current.lanes = a),
            yt(e, a, r),
            rs(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var a = t.current,
            i = es(),
            o = ts(a);
          return (
            (n = Bs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = _i(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Mi(a, t, o)) && (ns(e, a, o, i), Di(e, a, o)),
            o
          );
        }
        function $s(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qs(e, t) {
          qs(e, t), (e = e.alternate) && qs(e, t);
        }
        Su = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ra.current) xl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ll(t), pi();
                        break;
                      case 5:
                        io(t);
                        break;
                      case 1:
                        Na(t.type) && Aa(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Pa(yi, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Pa(lo, 1 & lo.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Vl(e, t, n)
                            : (Pa(lo, 1 & lo.current),
                              null !== (e = Hl(e, t, n)) ? e.sibling : null);
                        Pa(lo, 1 & lo.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Bl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Pa(lo, lo.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return Hl(e, t, n);
                  })(e, t, n)
                );
              xl = 0 !== (131072 & e.flags);
            }
          else (xl = !1), ai && 0 !== (1048576 & t.flags) && Ja(t, qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wl(e, t), (e = t.pendingProps);
              var a = Oa(t, ja.current);
              Ei(t, n), (a = Eo(null, t, r, e, a, n));
              var o = Co();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Na(r) ? ((o = !0), Aa(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Oi(t),
                    (a.updater = Ui),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    $i(t, r, e, n),
                    (t = Rl(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ai && o && ei(t),
                    wl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ns(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = mi(r, e)),
                  a)
                ) {
                  case 0:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = jl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = kl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, mi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Tl(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                jl(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 3:
              e: {
                if ((Ll(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Ni(e, t),
                  Vi(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ol(e, t, r, n, (a = cl(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ol(e, t, r, n, (a = cl(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = sa(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = Gi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pi(), r === a)) {
                    t = Hl(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                io(t),
                null === e && si(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Pl(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && si(t), null;
            case 13:
              return Vl(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ki(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                kl(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (l = a.value),
                  Pa(yi, r._currentValue),
                  (r._currentValue = l),
                  null !== o)
                )
                  if (lr(o.value, l)) {
                    if (o.children === a.children && !Ra.current) {
                      t = Hl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        l = o.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === o.tag) {
                              (s = _i(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (o.lanes |= n),
                              null !== (s = o.alternate) && (s.lanes |= n),
                              Si(o.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === o.tag)
                        l = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (l = o.return)) throw Error(i(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          Si(l, n, t),
                          (l = o.sibling);
                      } else l = o.child;
                      if (null !== l) l.return = o;
                      else
                        for (l = o; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (o = l.sibling)) {
                            (o.return = l.return), (l = o);
                            break;
                          }
                          l = l.return;
                        }
                      o = l;
                    }
                wl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ei(t, n),
                (r = r((a = Ci(a)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = mi((r = t.type), t.pendingProps)),
                Sl(e, t, r, (a = mi(r.type, a)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : mi(r, a)),
                Wl(e, t),
                (t.tag = 1),
                Na(r) ? ((e = !0), Aa(t)) : (e = !1),
                Ei(t, n),
                Wi(t, r, a),
                $i(t, r, a, n),
                Rl(null, t, r, !0, e, n)
              );
            case 19:
              return Bl(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Ys =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Xs(e) {
          this._internalRoot = e;
        }
        function Ks(e) {
          this._internalRoot = e;
        }
        function Gs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Js() {}
        function ec(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = $s(o);
                l.call(e);
              };
            }
            Hs(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = $s(o);
                    i.call(e);
                  };
                }
                var o = Ws(t, r, e, 0, null, !1, 0, "", Js);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  cs(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = $s(u);
                  l.call(e);
                };
              }
              var u = zs(e, 0, !1, null, 0, !1, 0, "", Js);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Hs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return $s(o);
        }
        (Ks.prototype.render = Xs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Hs(e, t, null, null);
          }),
          (Ks.prototype.unmount = Xs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cs(function () {
                  Hs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ks.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < _t.length && 0 !== t && t < _t[n].priority;
                n++
              );
              _t.splice(n, 0, e), 0 === n && Vt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    rs(t, Ge()),
                    0 === (6 & ju) && ((Bu = Ge() + 500), Ba()));
                }
                break;
              case 13:
                cs(function () {
                  var t = Ri(e, 1);
                  if (null !== t) {
                    var n = es();
                    ns(t, e, 1, n);
                  }
                }),
                  Qs(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ri(e, 134217728);
              if (null !== t) ns(t, e, 134217728, es());
              Qs(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ts(e),
                n = Ri(e, t);
              if (null !== n) ns(n, e, t, es());
              Qs(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(i(90));
                      Q(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (je = ss),
          (Re = cs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, wa, Pe, Te, ss],
          },
          nc = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (it = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gs(t)) throw Error(i(200));
            return Us(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gs(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Ys;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = zs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Xs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zs(t)) throw Error(i(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gs(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              l = Ys;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Ws(t, null, e, 1, null != n ? n : null, a, 0, o, l)),
              (e[ha] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ks(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zs(t)) throw Error(i(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zs(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ss),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zs(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            i = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: i,
            _owner: l.current,
          };
        }
        (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var x = (b.prototype = new g());
        (x.constructor = b), v(x, y.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            i = {},
            o = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (i[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) i.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            i.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === i[a] && (i[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: l,
            props: i,
            _owner: S.current,
          };
        }
        function P(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function j(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function R(e, t, a, i, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === i ? "." + j(u, 0) : i),
              w(o)
                ? ((a = ""),
                  null != e && (a = e.replace(T, "$&/") + "/"),
                  R(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (P(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(T, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (i = "" === i ? "." : i + ":"), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = i + j((l = e[s]), s);
              u += R(l, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += R((l = l.value), t, a, (c = i + j(l, s++)), o);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function L(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            R(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var N = { current: null },
          _ = { transition: null },
          M = {
            ReactCurrentDispatcher: N,
            ReactCurrentBatchConfig: _,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              L(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!P(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              i = e.key,
              o = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (l = S.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = _.transition;
            _.transition = {};
            try {
              e();
            } finally {
              _.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return N.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return N.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return N.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return N.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return N.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return N.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return N.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return N.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return N.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return N.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return N.current.useRef(e);
          }),
          (t.useState = function (e) {
            return N.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return N.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return N.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > i(u, n))
                s < a && 0 > i(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(s < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((m = !1), x(e), !v))
            if (null !== r(s)) (v = !0), _(k);
            else {
              var t = r(c);
              null !== t && M(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (v = !1), m && ((m = !1), g(P), (P = -1)), (h = !0);
          var i = p;
          try {
            for (
              x(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !R()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var l = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(s) && a(s),
                  x(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && M(w, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          P = -1,
          T = 5,
          j = -1;
        function R() {
          return !(t.unstable_now() - j < T);
        }
        function L() {
          if (null !== C) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(L);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(),
            N = O.port2;
          (O.port1.onmessage = L),
            (S = function () {
              N.postMessage(null);
            });
        } else
          S = function () {
            y(L, 0);
          };
        function _(e) {
          (C = e), E || ((E = !0), S());
        }
        function M(e, n) {
          P = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), _(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (l = i + l),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (m ? (g(P), (P = -1)) : (m = !0), M(w, i - o)))
                : ((e.sortIndex = l), n(s, e), v || h || ((v = !0), _(k))),
              e
            );
          }),
          (t.unstable_shouldYield = R),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      458: function (e) {
        e.exports = function () {
          var e = document.getSelection();
          if (!e.rangeCount) return function () {};
          for (
            var t = document.activeElement, n = [], r = 0;
            r < e.rangeCount;
            r++
          )
            n.push(e.getRangeAt(r));
          switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
              t.blur();
              break;
            default:
              t = null;
          }
          return (
            e.removeAllRanges(),
            function () {
              "Caret" === e.type && e.removeAllRanges(),
                e.rangeCount ||
                  n.forEach(function (t) {
                    e.addRange(t);
                  }),
                t && t.focus();
            }
          );
        };
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach(function (e) {
            o[e] = function () {
              return r[e];
            };
          });
        return (
          (o.default = function () {
            return r;
          }),
          n.d(i, o),
          i
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      "use strict";
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250);
      function i(e) {
        if (Array.isArray(e)) return e;
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function l(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      }
      function u() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function s(e, t) {
        return (
          i(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i,
                o,
                l = [],
                u = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (c) {
                (s = !0), (a = c);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          l(e, t) ||
          u()
        );
      }
      function c(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          c(e) ||
          l(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e) {
        return (
          (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          p(e)
        );
      }
      function h(e) {
        var t = (function (e, t) {
          if ("object" !== p(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== p(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === p(t) ? t : String(t);
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, h(r.key), r);
        }
      }
      function m(e, t, n) {
        return (
          t && v(e.prototype, t),
          n && v(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function y(e, t) {
        return (
          (y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          y(e, t)
        );
      }
      function g(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && y(e, t);
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function x() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function w(e, t) {
        if (t && ("object" === p(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function k(e) {
        var t = x();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var a = b(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return w(this, n);
        };
      }
      function S(e, t, n) {
        return (
          (S = x()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && y(a, n.prototype), a;
              }),
          S.apply(null, arguments)
        );
      }
      function E(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (E = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return S(e, arguments, b(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              y(r, e)
            );
          }),
          E(e)
        );
      }
      function C(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = l(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (u = !0), (i = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function P() {
        return (
          (P = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          P.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var T,
        j = "popstate";
      function R(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function L(e) {
        return { usr: e.state, key: e.key };
      }
      function O(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          P(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? _(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function N(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          i = e.hash,
          o = void 0 === i ? "" : i;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function _(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function M(e) {
        var t =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.location &&
            "null" !== window.location.origin
              ? window.location.origin
              : window.location.href,
          n = "string" === typeof e ? e : N(e);
        return (
          R(
            t,
            "No window.location.(origin|href) available to create URL for href: " +
              n
          ),
          new URL(n, t)
        );
      }
      function D(t, n, r, a) {
        void 0 === a && (a = {});
        var i = a,
          o = i.window,
          l = void 0 === o ? document.defaultView : o,
          u = i.v5Compat,
          s = void 0 !== u && u,
          c = l.history,
          f = e.Pop,
          d = null;
        function p() {
          (f = e.Pop), d && d({ action: f, location: h.location });
        }
        var h = {
          get action() {
            return f;
          },
          get location() {
            return t(l, c);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              l.addEventListener(j, p),
              (d = e),
              function () {
                l.removeEventListener(j, p), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(l, e);
          },
          encodeLocation: function (e) {
            var t = M("string" === typeof e ? e : N(e));
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            f = e.Push;
            var a = O(h.location, t, n);
            r && r(a, t);
            var i = L(a),
              o = h.createHref(a);
            try {
              c.pushState(i, "", o);
            } catch (u) {
              l.location.assign(o);
            }
            s && d && d({ action: f, location: h.location });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = O(h.location, t, n);
            r && r(a, t);
            var i = L(a),
              o = h.createHref(a);
            c.replaceState(i, "", o),
              s && d && d({ action: f, location: h.location });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return h;
      }
      function A(e, t, n) {
        void 0 === n && (n = "/");
        var r = $(("string" === typeof t ? _(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = V(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var i = null, o = 0; null == i && o < a.length; ++o)
          i = B(a[o], H(r));
        return i;
      }
      function V(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, i) {
          var o = {
            relativePath: void 0 === i ? e.path || "" : i,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          o.relativePath.startsWith("/") &&
            (R(
              o.relativePath.startsWith(r),
              'Absolute route path "' +
                o.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (o.relativePath = o.relativePath.slice(r.length)));
          var l = K([r, o.relativePath]),
            u = n.concat(o);
          e.children &&
            e.children.length > 0 &&
            (R(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            V(e.children, t, u, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: U(l, e.index), routesMeta: u });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                i = C(F(e.path));
              try {
                for (i.s(); !(r = i.n()).done; ) {
                  var o = r.value;
                  a(e, t, o);
                }
              } catch (l) {
                i.e(l);
              } finally {
                i.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function F(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = i((n = t)) || c(n) || l(n) || u(),
          a = r[0],
          o = r.slice(1),
          s = a.endsWith("?"),
          d = a.replace(/\?$/, "");
        if (0 === o.length) return s ? [d, ""] : [d];
        var p = F(o.join("/")),
          h = [];
        return (
          h.push.apply(
            h,
            f(
              p.map(function (e) {
                return "" === e ? d : [d, e].join("/");
              })
            )
          ),
          s && h.push.apply(h, f(p)),
          h.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(T || (T = {}));
      var I = /^:\w+$/,
        z = function (e) {
          return "*" === e;
        };
      function U(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(z) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !z(e);
            })
            .reduce(function (e, t) {
              return e + (I.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function B(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", i = [], o = 0;
          o < n.length;
          ++o
        ) {
          var l = n[o],
            u = o === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = W(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
              s
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = l.route;
          i.push({
            params: r,
            pathname: K([a, c.pathname]),
            pathnameBase: G(K([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = K([a, c.pathnameBase]));
        }
        return i;
      }
      function W(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            q(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var i = new RegExp(a, t ? void 0 : "i");
            return [i, r];
          })(e.path, e.caseSensitive, e.end),
          r = s(n, 2),
          a = r[0],
          i = r[1],
          o = t.match(a);
        if (!o) return null;
        var l = o[0],
          u = l.replace(/(.)\/+$/, "$1"),
          c = o.slice(1);
        return {
          params: i.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              u = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    q(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(c[n] || "", t)),
              e
            );
          }, {}),
          pathname: l,
          pathnameBase: u,
          pattern: e,
        };
      }
      function H(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            q(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function $(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function q(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function Q(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function Y(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function X(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = _(e))
            : (R(
                !(a = P({}, e)).pathname || !a.pathname.includes("?"),
                Q("?", "pathname", "search", a)
              ),
              R(
                !a.pathname || !a.pathname.includes("#"),
                Q("#", "pathname", "hash", a)
              ),
              R(
                !a.search || !a.search.includes("#"),
                Q("#", "search", "hash", a)
              ));
        var i,
          o = "" === e || "" === a.pathname,
          l = o ? "/" : a.pathname;
        if (r || null == l) i = n;
        else {
          var u = t.length - 1;
          if (l.startsWith("..")) {
            for (var s = l.split("/"); ".." === s[0]; ) s.shift(), (u -= 1);
            a.pathname = s.join("/");
          }
          i = u >= 0 ? t[u] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? _(e) : e,
              r = n.pathname,
              a = n.search,
              i = void 0 === a ? "" : a,
              o = n.hash,
              l = void 0 === o ? "" : o,
              u = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: u, search: Z(i), hash: J(l) };
          })(a, i),
          f = l && "/" !== l && l.endsWith("/"),
          d = (o || "." === l) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var K = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        G = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        Z = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        J = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        ee = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })(E(Error));
      var te = m(function e(t, n, r, a) {
        d(this, e),
          void 0 === a && (a = !1),
          (this.status = t),
          (this.statusText = n || ""),
          (this.internal = a),
          r instanceof Error
            ? ((this.data = r.toString()), (this.error = r))
            : (this.data = r);
      });
      function ne(e) {
        return e instanceof te;
      }
      var re = ["post", "put", "patch", "delete"],
        ae = (new Set(re), ["get"].concat(re));
      new Set(ae),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      function ie() {
        return (
          (ie = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ie.apply(this, arguments)
        );
      }
      var oe =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        le = t.useState,
        ue = t.useEffect,
        se = t.useLayoutEffect,
        ce = t.useDebugValue;
      function fe(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !oe(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var de = t.createContext(null);
      var pe = t.createContext(null);
      var he = t.createContext(null);
      var ve = t.createContext(null);
      var me = t.createContext(null);
      var ye = t.createContext(null);
      var ge = t.createContext({ outlet: null, matches: [] });
      var be = t.createContext(null);
      function xe() {
        return null != t.useContext(ye);
      }
      function we() {
        return xe() || R(!1), t.useContext(ye).location;
      }
      function ke() {
        xe() || R(!1);
        var e = t.useContext(me),
          n = e.basename,
          r = e.navigator,
          a = t.useContext(ge).matches,
          i = we().pathname,
          o = JSON.stringify(
            Y(a).map(function (e) {
              return e.pathnameBase;
            })
          ),
          l = t.useRef(!1);
        return (
          t.useEffect(function () {
            l.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), l.current))
                if ("number" !== typeof e) {
                  var a = X(e, JSON.parse(o), i, "path" === t.relative);
                  "/" !== n &&
                    (a.pathname = "/" === a.pathname ? n : K([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state, t);
                } else r.go(e);
            },
            [n, r, o, i]
          )
        );
      }
      function Se(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = t.useContext(ge).matches,
          i = we().pathname,
          o = JSON.stringify(
            Y(a).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return X(e, JSON.parse(o), i, "path" === r);
          },
          [e, o, i, r]
        );
      }
      function Ee() {
        var e = (function () {
            var e,
              n = t.useContext(be),
              r = Le(Pe.UseRouteError),
              a = Oe(Pe.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = ne(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          i = { padding: "0.5rem", backgroundColor: a },
          o = { padding: "2px 4px", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unhandled Thrown Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: i }, r) : null,
          t.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          t.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            t.createElement("code", { style: o }, "errorElement"),
            " props on\xa0",
            t.createElement("code", { style: o }, "<Route>")
          )
        );
      }
      var Ce,
        Pe,
        Te = (function (e) {
          g(r, e);
          var n = k(r);
          function r(e) {
            var t;
            return (
              d(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            m(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          ge.Provider,
                          { value: this.props.routeContext },
                          t.createElement(be.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function je(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          i = t.useContext(de);
        return (
          i &&
            r.route.errorElement &&
            (i._deepestRenderedBoundaryId = r.route.id),
          t.createElement(ge.Provider, { value: n }, a)
        );
      }
      function Re(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var a = e,
          i = null == r ? void 0 : r.errors;
        if (null != i) {
          var o = a.findIndex(function (e) {
            return e.route.id && (null == i ? void 0 : i[e.route.id]);
          });
          o >= 0 || R(!1), (a = a.slice(0, Math.min(a.length, o + 1)));
        }
        return a.reduceRight(function (e, o, l) {
          var u = o.route.id ? (null == i ? void 0 : i[o.route.id]) : null,
            s = r ? o.route.errorElement || t.createElement(Ee, null) : null,
            c = n.concat(a.slice(0, l + 1)),
            f = function () {
              return t.createElement(
                je,
                { match: o, routeContext: { outlet: e, matches: c } },
                u ? s : void 0 !== o.route.element ? o.route.element : e
              );
            };
          return r && (o.route.errorElement || 0 === l)
            ? t.createElement(Te, {
                location: r.location,
                component: s,
                error: u,
                children: f(),
                routeContext: { outlet: null, matches: c },
              })
            : f();
        }, null);
      }
      function Le(e) {
        var n = t.useContext(he);
        return n || R(!1), n;
      }
      function Oe(e) {
        var n = (function (e) {
            var n = t.useContext(ge);
            return n || R(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || R(!1), r.route.id;
      }
      !(function (e) {
        e.UseRevalidator = "useRevalidator";
      })(Ce || (Ce = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(Pe || (Pe = {}));
      var Ne;
      function _e(e) {
        R(!1);
      }
      function Me(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          i = n.children,
          o = void 0 === i ? null : i,
          l = n.location,
          u = n.navigationType,
          s = void 0 === u ? e.Pop : u,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        xe() && R(!1);
        var p = a.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof l && (l = _(l));
        var v = l,
          m = v.pathname,
          y = void 0 === m ? "/" : m,
          g = v.search,
          b = void 0 === g ? "" : g,
          x = v.hash,
          w = void 0 === x ? "" : x,
          k = v.state,
          S = void 0 === k ? null : k,
          E = v.key,
          C = void 0 === E ? "default" : E,
          P = t.useMemo(
            function () {
              var e = $(y, p);
              return null == e
                ? null
                : { pathname: e, search: b, hash: w, state: S, key: C };
            },
            [p, y, b, w, S, C]
          );
        return null == P
          ? null
          : t.createElement(
              me.Provider,
              { value: h },
              t.createElement(ye.Provider, {
                children: o,
                value: { location: P, navigationType: s },
              })
            );
      }
      function De(n) {
        var r = n.children,
          a = n.location,
          i = t.useContext(pe);
        return (function (n, r) {
          xe() || R(!1);
          var a,
            i = t.useContext(me).navigator,
            o = t.useContext(he),
            l = t.useContext(ge).matches,
            u = l[l.length - 1],
            s = u ? u.params : {},
            c = (u && u.pathname, u ? u.pathnameBase : "/"),
            f = (u && u.route, we());
          if (r) {
            var d,
              p = "string" === typeof r ? _(r) : r;
            "/" === c ||
              (null == (d = p.pathname) ? void 0 : d.startsWith(c)) ||
              R(!1),
              (a = p);
          } else a = f;
          var h = a.pathname || "/",
            v = A(n, { pathname: "/" === c ? h : h.slice(c.length) || "/" }),
            m = Re(
              v &&
                v.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, s, e.params),
                    pathname: K([
                      c,
                      i.encodeLocation
                        ? i.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? c
                        : K([
                            c,
                            i.encodeLocation
                              ? i.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              l,
              o || void 0
            );
          return r && m
            ? t.createElement(
                ye.Provider,
                {
                  value: {
                    location: ie(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      a
                    ),
                    navigationType: e.Pop,
                  },
                },
                m
              )
            : m;
        })(i && !r ? i.router.routes : Ve(r), a);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Ne || (Ne = {}));
      var Ae = new Promise(function () {});
      t.Component;
      function Ve(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== _e && R(!1),
                  e.props.index && e.props.children && R(!1);
                var i = [].concat(f(n), [a]),
                  o = {
                    id: e.props.id || i.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (o.children = Ve(e.props.children, i)),
                  r.push(o);
              } else r.push.apply(r, Ve(e.props.children, n));
          }),
          r
        );
      }
      function Fe() {
        return (
          (Fe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Fe.apply(this, arguments)
        );
      }
      function Ie(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var ze = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
        ],
        Ue = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function Be(e) {
        var n,
          r = e.basename,
          a = e.children,
          i = e.window,
          o = t.useRef();
        null == o.current &&
          (o.current =
            (void 0 === (n = { window: i, v5Compat: !0 }) && (n = {}),
            D(
              function (e, t) {
                var n = e.location;
                return O(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : N(t);
              },
              null,
              n
            )));
        var l = o.current,
          u = s(t.useState({ action: l.action, location: l.location }), 2),
          c = u[0],
          f = u[1];
        return (
          t.useLayoutEffect(
            function () {
              return l.listen(f);
            },
            [l]
          ),
          t.createElement(Me, {
            basename: r,
            children: a,
            location: c.location,
            navigationType: c.action,
            navigator: l,
          })
        );
      }
      var We = t.forwardRef(function (e, n) {
        var r = e.onClick,
          a = e.relative,
          i = e.reloadDocument,
          o = e.replace,
          l = e.state,
          u = e.target,
          s = e.to,
          c = e.preventScrollReset,
          f = Ie(e, ze),
          d = (function (e, n) {
            var r = (void 0 === n ? {} : n).relative;
            xe() || R(!1);
            var a = t.useContext(me),
              i = a.basename,
              o = a.navigator,
              l = Se(e, { relative: r }),
              u = l.hash,
              s = l.pathname,
              c = l.search,
              f = s;
            return (
              "/" !== i && (f = "/" === s ? i : K([i, s])),
              o.createHref({ pathname: f, search: c, hash: u })
            );
          })(s, { relative: a }),
          p = (function (e, n) {
            var r = void 0 === n ? {} : n,
              a = r.target,
              i = r.replace,
              o = r.state,
              l = r.preventScrollReset,
              u = r.relative,
              s = ke(),
              c = we(),
              f = Se(e, { relative: u });
            return t.useCallback(
              function (t) {
                if (
                  (function (e, t) {
                    return (
                      0 === e.button &&
                      (!t || "_self" === t) &&
                      !(function (e) {
                        return !!(
                          e.metaKey ||
                          e.altKey ||
                          e.ctrlKey ||
                          e.shiftKey
                        );
                      })(e)
                    );
                  })(t, a)
                ) {
                  t.preventDefault();
                  var n = void 0 !== i ? i : N(c) === N(f);
                  s(e, {
                    replace: n,
                    state: o,
                    preventScrollReset: l,
                    relative: u,
                  });
                }
              },
              [c, s, f, i, o, a, e, l, u]
            );
          })(s, {
            replace: o,
            state: l,
            target: u,
            preventScrollReset: c,
            relative: a,
          });
        return t.createElement(
          "a",
          Fe({}, f, {
            href: d,
            onClick: i
              ? r
              : function (e) {
                  r && r(e), e.defaultPrevented || p(e);
                },
            ref: n,
            target: u,
          })
        );
      });
      var He = t.forwardRef(function (e, n) {
        var r = e["aria-current"],
          a = void 0 === r ? "page" : r,
          i = e.caseSensitive,
          o = void 0 !== i && i,
          l = e.className,
          u = void 0 === l ? "" : l,
          s = e.end,
          c = void 0 !== s && s,
          f = e.style,
          d = e.to,
          p = e.children,
          h = Ie(e, Ue),
          v = Se(d, { relative: h.relative }),
          m = we(),
          y = t.useContext(he),
          g = t.useContext(me).navigator,
          b = g.encodeLocation ? g.encodeLocation(v).pathname : v.pathname,
          x = m.pathname,
          w =
            y && y.navigation && y.navigation.location
              ? y.navigation.location.pathname
              : null;
        o ||
          ((x = x.toLowerCase()),
          (w = w ? w.toLowerCase() : null),
          (b = b.toLowerCase()));
        var k,
          S = x === b || (!c && x.startsWith(b) && "/" === x.charAt(b.length)),
          E =
            null != w &&
            (w === b || (!c && w.startsWith(b) && "/" === w.charAt(b.length))),
          C = S ? a : void 0;
        k =
          "function" === typeof u
            ? u({ isActive: S, isPending: E })
            : [u, S ? "active" : null, E ? "pending" : null]
                .filter(Boolean)
                .join(" ");
        var P = "function" === typeof f ? f({ isActive: S, isPending: E }) : f;
        return t.createElement(
          We,
          Fe({}, h, {
            "aria-current": C,
            className: k,
            ref: n,
            style: P,
            to: d,
          }),
          "function" === typeof p ? p({ isActive: S, isPending: E }) : p
        );
      });
      var $e, qe;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })($e || ($e = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(qe || (qe = {}));
      var Qe = n(184),
        Ye = function () {
          return (
            (0, t.useEffect)(function () {
              var e = document.querySelector(".cursor");
              window.addEventListener("mousemove", function (t) {
                (e.style.top = t.y + "px"), (e.style.left = t.x + "px");
              }),
                document.querySelectorAll(".hover").forEach(function (t) {
                  t.addEventListener("mouseover", function () {
                    e.classList.add("hovered");
                  }),
                    t.addEventListener("mouseleave", function () {
                      (e.style.transition = ".7s ease-out"),
                        e.classList.remove("hovered");
                    });
                });
            }, []),
            (0, Qe.jsx)("span", { className: "cursor" })
          );
        },
        Xe = function () {
          return (0, Qe.jsx)("div", {
            className: "navigation",
            children: (0, Qe.jsxs)("ul", {
              children: [
                (0, Qe.jsx)(He, {
                  to: "/",
                  className: function (e) {
                    return e.isActive ? "nav-active hover" : "hover";
                  },
                  children: (0, Qe.jsx)("li", { children: "accueil" }),
                }),
                (0, Qe.jsxs)("li", {
                  className: "nav-portfolio",
                  children: [
                    "portfolio",
                    (0, Qe.jsxs)("ul", {
                      className: "nav-projects",
                      children: [
                        (0, Qe.jsx)(He, {
                          to: "/projet-1",
                          className: function (e) {
                            return e.isActive ? "nav-active hover" : "hover";
                          },
                          children: (0, Qe.jsx)("li", { children: "projet 1" }),
                        }),
                        (0, Qe.jsx)(He, {
                          to: "/projet-2",
                          className: function (e) {
                            return e.isActive ? "nav-active hover" : "hover";
                          },
                          children: (0, Qe.jsx)("li", { children: "projet 2" }),
                        }),
                        (0, Qe.jsx)(He, {
                          to: "/projet-3",
                          className: function (e) {
                            return e.isActive ? "nav-active hover" : "hover";
                          },
                          children: (0, Qe.jsx)("li", { children: "projet 3" }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Qe.jsx)(He, {
                  to: "/contact",
                  className: function (e) {
                    return e.isActive ? "nav-active hover" : "hover";
                  },
                  children: (0, Qe.jsx)("li", { children: "contact" }),
                }),
              ],
            }),
          });
        },
        Ke = function () {
          return (0, Qe.jsx)("span", { className: "logo", children: "AI" });
        },
        Ge = { _origin: "https://api.emailjs.com" },
        Ze = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "https://api.emailjs.com";
          (Ge._userID = e), (Ge._origin = t);
        },
        Je = function (e, t, n) {
          if (!e)
            throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
          if (!t)
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
          if (!n)
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
          return !0;
        },
        et = m(function e(t) {
          d(this, e),
            (this.status = t ? t.status : 0),
            (this.text = t ? t.responseText : "Network Error");
        }),
        tt = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return new Promise(function (r, a) {
            var i = new XMLHttpRequest();
            i.addEventListener("load", function (e) {
              var t = e.target,
                n = new et(t);
              200 === n.status || "OK" === n.text ? r(n) : a(n);
            }),
              i.addEventListener("error", function (e) {
                var t = e.target;
                a(new et(t));
              }),
              i.open("POST", Ge._origin + e, !0),
              Object.keys(n).forEach(function (e) {
                i.setRequestHeader(e, n[e]);
              }),
              i.send(t);
          });
        },
        nt = function (e, t, n, r) {
          var a = r || Ge._userID,
            i = (function (e) {
              var t;
              if (
                !(t = "string" === typeof e ? document.querySelector(e) : e) ||
                "FORM" !== t.nodeName
              )
                throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
              return t;
            })(n);
          Je(a, e, t);
          var o = new FormData(i);
          return (
            o.append("lib_version", "3.10.0"),
            o.append("service_id", e),
            o.append("template_id", t),
            o.append("user_id", a),
            tt("/api/v1.0/email/send-form", o)
          );
        };
      Ze(
        {
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          FAST_REFRESH: !0,
          REACT_APP_ID: "FWDtr2FQcBsoYjI8",
        }.ID
      );
      var rt = function () {
          var e = (0, t.useRef)();
          return (0, Qe.jsxs)("div", {
            className: "form-container",
            children: [
              (0, Qe.jsx)("h2", { children: "contactez-moi" }),
              (0, Qe.jsxs)("form", {
                ref: e,
                onSubmit: function (t) {
                  t.preventDefault();
                  var n = document.querySelector(".formMessage");
                  nt(
                    "service_xtv8ce7",
                    "template_q88v1lr",
                    e.current,
                    "FWDtr2FQcBsoYjI8"
                  ).then(
                    function (t) {
                      console.log(t.text),
                        e.current.reset(),
                        (n.innerHTML =
                          "<p className='success'>Message envoy\xe9 !</p>"),
                        setTimeout(function () {
                          n.innerHTML = "";
                        }, 2e3);
                    },
                    function (e) {
                      console.log(e.text),
                        (n.innerHTML =
                          "<p className='error'>Une erreur s'est produite, veuillez r\xe9essayer</p>"),
                        setTimeout(function () {
                          n.innerHTML = "";
                        }, 2e3);
                    }
                  );
                },
                className: "form-content",
                children: [
                  (0, Qe.jsx)("label", { children: "Nom" }),
                  (0, Qe.jsx)("input", {
                    type: "text",
                    name: "name",
                    required: !0,
                    autoComplete: "off",
                    id: "name",
                  }),
                  (0, Qe.jsx)("label", { children: "Email" }),
                  (0, Qe.jsx)("input", {
                    type: "email",
                    name: "email",
                    required: !0,
                    autoComplete: "off",
                    id: "email",
                  }),
                  (0, Qe.jsx)("label", { children: "Message" }),
                  (0, Qe.jsx)("textarea", { name: "message", id: "mess" }),
                  (0, Qe.jsx)("input", {
                    type: "submit",
                    value: "Envoyer",
                    className: "hover button",
                  }),
                ],
              }),
              (0, Qe.jsx)("div", { className: "formMessage" }),
            ],
          });
        },
        at = function () {
          var e = function () {
            document
              .querySelectorAll(".social-network a")
              .forEach(function (e) {
                e.addEventListener("mouseover", function (t) {
                  e.style.transform = "translate("
                    .concat(t.offsetX - 20, "px,")
                    .concat(t.offsetY - 13, "px)");
                }),
                  e.addEventListener("mouseleave", function () {
                    e.style.transform = "";
                  });
              });
          };
          return (0, Qe.jsx)("div", {
            className: "social-network",
            children: (0, Qe.jsxs)("ul", {
              className: "content",
              children: [
                (0, Qe.jsx)("a", {
                  href: "https://www.linkedin.com/in/idir-adil-07960224b/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover",
                  onMouseOver: e,
                  children: (0, Qe.jsx)("li", {
                    children: (0, Qe.jsx)("i", {
                      className: "fab fa-linkedin",
                    }),
                  }),
                }),
                (0, Qe.jsx)("a", {
                  href: "https://github.com/IdirX69",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover",
                  onMouseOver: e,
                  children: (0, Qe.jsx)("li", {
                    children: (0, Qe.jsx)("i", { className: "fab fa-github" }),
                  }),
                }),
              ],
            }),
          });
        },
        it = function (e) {
          return (0, Qe.jsxs)("div", {
            className: "scroll-bottom",
            children: [
              e.left &&
                (0, Qe.jsx)(He, {
                  to: e.left,
                  className: "left hover",
                  children: (0, Qe.jsx)("span", { children: "\u276c" }),
                }),
              e.right &&
                (0, Qe.jsx)(He, {
                  to: e.right,
                  className: "right hover",
                  children: (0, Qe.jsx)("span", { children: "\u276d" }),
                }),
            ],
          });
        },
        ot = n(29),
        lt = n.n(ot);
      function ut(e, t, n) {
        return (
          (t = h(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function st(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? st(Object(n), !0).forEach(function (t) {
                ut(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : st(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ft = (0, t.createContext)({
          transformPagePoint: function (e) {
            return e;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        dt = (0, t.createContext)({});
      var pt = (0, t.createContext)(null),
        ht = "undefined" !== typeof document,
        vt = ht ? t.useLayoutEffect : t.useEffect,
        mt = (0, t.createContext)({ strict: !1 });
      function yt(e, n, r, a) {
        var i = (0, t.useContext)(dt).visualElement,
          o = (0, t.useContext)(mt),
          l = (0, t.useContext)(pt),
          u = (0, t.useContext)(ft).reducedMotion,
          s = (0, t.useRef)();
        (a = a || o.renderer),
          !s.current &&
            a &&
            (s.current = a(e, {
              visualState: n,
              parent: i,
              props: r,
              presenceId: l ? l.id : void 0,
              blockInitialAnimation: !!l && !1 === l.initial,
              reducedMotionConfig: u,
            }));
        var c = s.current;
        return (
          vt(function () {
            c && c.render();
          }),
          vt(function () {
            c && c.animationState && c.animationState.animateChanges();
          }),
          vt(function () {
            return function () {
              return c && c.notify("Unmount");
            };
          }, []),
          c
        );
      }
      function gt(e) {
        return (
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function bt(e) {
        return "string" === typeof e || Array.isArray(e);
      }
      function xt(e) {
        return "object" === typeof e && "function" === typeof e.start;
      }
      var wt = [
        "initial",
        "animate",
        "exit",
        "whileHover",
        "whileDrag",
        "whileTap",
        "whileFocus",
        "whileInView",
      ];
      function kt(e) {
        return (
          xt(e.animate) ||
          wt.some(function (t) {
            return bt(e[t]);
          })
        );
      }
      function St(e) {
        return Boolean(kt(e) || e.variants);
      }
      function Et(e) {
        var n = (function (e, t) {
            if (kt(e)) {
              var n = e.initial,
                r = e.animate;
              return {
                initial: !1 === n || bt(n) ? n : void 0,
                animate: bt(r) ? r : void 0,
              };
            }
            return !1 !== e.inherit ? t : {};
          })(e, (0, t.useContext)(dt)),
          r = n.initial,
          a = n.animate;
        return (0, t.useMemo)(
          function () {
            return { initial: r, animate: a };
          },
          [Ct(r), Ct(a)]
        );
      }
      function Ct(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var Pt = function (e) {
          return {
            isEnabled: function (t) {
              return e.some(function (e) {
                return !!t[e];
              });
            },
          };
        },
        Tt = {
          measureLayout: Pt(["layout", "layoutId", "drag"]),
          animation: Pt([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: Pt(["exit"]),
          drag: Pt(["drag", "dragControls"]),
          focus: Pt(["whileFocus"]),
          hover: Pt(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: Pt(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: Pt(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: Pt(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      function jt(e) {
        var n = (0, t.useRef)(null);
        return null === n.current && (n.current = e()), n.current;
      }
      var Rt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        Lt = 1;
      var Ot = (0, t.createContext)({}),
        Nt = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "getSnapshotBeforeUpdate",
                value: function () {
                  var e = this.props,
                    t = e.visualElement,
                    n = e.props;
                  return t && t.setProps(n), null;
                },
              },
              { key: "componentDidUpdate", value: function () {} },
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(t.Component),
        _t = (0, t.createContext)({}),
        Mt = Symbol.for("motionComponentSymbol");
      function Dt(e) {
        var n = e.preloadedFeatures,
          r = e.createVisualElement,
          a = e.projectionNodeConstructor,
          i = e.useRender,
          o = e.useVisualState,
          l = e.Component;
        n &&
          (function (e) {
            for (var t in e)
              "projectionNodeConstructor" === t
                ? (Tt.projectionNodeConstructor = e[t])
                : (Tt[t].Component = e[t]);
          })(n);
        var u = (0, t.forwardRef)(function (e, u) {
          var s = ct(
              ct(ct({}, (0, t.useContext)(ft)), e),
              {},
              { layoutId: At(e) }
            ),
            c = s.isStatic,
            f = null,
            d = Et(e),
            p = c
              ? void 0
              : jt(function () {
                  if (Rt.hasEverUpdated) return Lt++;
                }),
            h = o(e, c);
          if (!c && ht) {
            d.visualElement = yt(l, h, s, r);
            var v = (0, t.useContext)(mt).strict,
              m = (0, t.useContext)(_t);
            d.visualElement &&
              (f = d.visualElement.loadFeatures(
                s,
                v,
                n,
                p,
                a || Tt.projectionNodeConstructor,
                m
              ));
          }
          return t.createElement(
            Nt,
            { visualElement: d.visualElement, props: s },
            f,
            t.createElement(
              dt.Provider,
              { value: d },
              i(
                l,
                e,
                p,
                (function (e, n, r) {
                  return (0, t.useCallback)(
                    function (t) {
                      t && e.mount && e.mount(t),
                        n && (t ? n.mount(t) : n.unmount()),
                        r &&
                          ("function" === typeof r
                            ? r(t)
                            : gt(r) && (r.current = t));
                    },
                    [n]
                  );
                })(h, d.visualElement, u),
                h,
                c,
                d.visualElement
              )
            )
          );
        });
        return (u[Mt] = l), u;
      }
      function At(e) {
        var n = e.layoutId,
          r = (0, t.useContext)(Ot).id;
        return r && void 0 !== n ? r + "-" + n : n;
      }
      function Vt(e) {
        function t(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Dt(e(t, n));
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var Ft = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function It(e) {
        return (
          "string" === typeof e &&
          !e.includes("-") &&
          !!(Ft.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      var zt = {};
      var Ut = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        Bt = new Set(Ut);
      function Wt(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          Bt.has(e) ||
          e.startsWith("origin") ||
          ((n || void 0 !== r) && (!!zt[e] || "opacity" === e))
        );
      }
      var Ht = function (e) {
          return !!(null === e || void 0 === e ? void 0 : e.getVelocity);
        },
        $t = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        qt = function (e, t) {
          return Ut.indexOf(e) - Ut.indexOf(t);
        };
      function Qt(e) {
        return e.startsWith("--");
      }
      var Yt = function (e, t) {
          return t && "number" === typeof e ? t.transform(e) : e;
        },
        Xt = function (e, t, n) {
          return Math.min(Math.max(n, e), t);
        },
        Kt = {
          test: function (e) {
            return "number" === typeof e;
          },
          parse: parseFloat,
          transform: function (e) {
            return e;
          },
        },
        Gt = ct(
          ct({}, Kt),
          {},
          {
            transform: function (e) {
              return Xt(0, 1, e);
            },
          }
        ),
        Zt = ct(ct({}, Kt), {}, { default: 1 }),
        Jt = function (e) {
          return Math.round(1e5 * e) / 1e5;
        },
        en = /(-)?([\d]*\.?[\d])+/g,
        tn =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        nn =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function rn(e) {
        return "string" === typeof e;
      }
      var an = function (e) {
          return {
            test: function (t) {
              return rn(t) && t.endsWith(e) && 1 === t.split(" ").length;
            },
            parse: parseFloat,
            transform: function (t) {
              return "".concat(t).concat(e);
            },
          };
        },
        on = an("deg"),
        ln = an("%"),
        un = an("px"),
        sn = an("vh"),
        cn = an("vw"),
        fn = ct(
          ct({}, ln),
          {},
          {
            parse: function (e) {
              return ln.parse(e) / 100;
            },
            transform: function (e) {
              return ln.transform(100 * e);
            },
          }
        ),
        dn = ct(ct({}, Kt), {}, { transform: Math.round }),
        pn = {
          borderWidth: un,
          borderTopWidth: un,
          borderRightWidth: un,
          borderBottomWidth: un,
          borderLeftWidth: un,
          borderRadius: un,
          radius: un,
          borderTopLeftRadius: un,
          borderTopRightRadius: un,
          borderBottomRightRadius: un,
          borderBottomLeftRadius: un,
          width: un,
          maxWidth: un,
          height: un,
          maxHeight: un,
          size: un,
          top: un,
          right: un,
          bottom: un,
          left: un,
          padding: un,
          paddingTop: un,
          paddingRight: un,
          paddingBottom: un,
          paddingLeft: un,
          margin: un,
          marginTop: un,
          marginRight: un,
          marginBottom: un,
          marginLeft: un,
          rotate: on,
          rotateX: on,
          rotateY: on,
          rotateZ: on,
          scale: Zt,
          scaleX: Zt,
          scaleY: Zt,
          scaleZ: Zt,
          skew: on,
          skewX: on,
          skewY: on,
          distance: un,
          translateX: un,
          translateY: un,
          translateZ: un,
          x: un,
          y: un,
          z: un,
          perspective: un,
          transformPerspective: un,
          opacity: Gt,
          originX: fn,
          originY: fn,
          originZ: un,
          zIndex: dn,
          fillOpacity: Gt,
          strokeOpacity: Gt,
          numOctaves: dn,
        };
      function hn(e, t, n, r) {
        var a = e.style,
          i = e.vars,
          o = e.transform,
          l = e.transformKeys,
          u = e.transformOrigin;
        l.length = 0;
        var s = !1,
          c = !1,
          f = !0;
        for (var d in t) {
          var p = t[d];
          if (Qt(d)) i[d] = p;
          else {
            var h = pn[d],
              v = Yt(p, h);
            if (Bt.has(d)) {
              if (((s = !0), (o[d] = v), l.push(d), !f)) continue;
              p !== (h.default || 0) && (f = !1);
            } else d.startsWith("origin") ? ((c = !0), (u[d] = v)) : (a[d] = v);
          }
        }
        if (
          (t.transform ||
            (s || r
              ? (a.transform = (function (e, t, n, r) {
                  var a = e.transform,
                    i = e.transformKeys,
                    o = t.enableHardwareAcceleration,
                    l = void 0 === o || o,
                    u = t.allowTransformNone,
                    s = void 0 === u || u,
                    c = "";
                  i.sort(qt);
                  var f,
                    d = C(i);
                  try {
                    for (d.s(); !(f = d.n()).done; ) {
                      var p = f.value;
                      c += "".concat($t[p] || p, "(").concat(a[p], ") ");
                    }
                  } catch (h) {
                    d.e(h);
                  } finally {
                    d.f();
                  }
                  return (
                    l && !a.z && (c += "translateZ(0)"),
                    (c = c.trim()),
                    r ? (c = r(a, n ? "" : c)) : s && n && (c = "none"),
                    c
                  );
                })(e, n, f, r))
              : a.transform && (a.transform = "none")),
          c)
        ) {
          var m = u.originX,
            y = void 0 === m ? "50%" : m,
            g = u.originY,
            b = void 0 === g ? "50%" : g,
            x = u.originZ,
            w = void 0 === x ? 0 : x;
          a.transformOrigin = "".concat(y, " ").concat(b, " ").concat(w);
        }
      }
      var vn = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function mn(e, t, n) {
        for (var r in t) Ht(t[r]) || Wt(r, n) || (e[r] = t[r]);
      }
      function yn(e, n, r) {
        var a = {};
        return (
          mn(a, e.style || {}, e),
          Object.assign(
            a,
            (function (e, n, r) {
              var a = e.transformTemplate;
              return (0, t.useMemo)(
                function () {
                  var e = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  return (
                    hn(e, n, { enableHardwareAcceleration: !r }, a),
                    Object.assign({}, e.vars, e.style)
                  );
                },
                [n]
              );
            })(e, n, r)
          ),
          e.transformValues ? e.transformValues(a) : a
        );
      }
      function gn(e, t, n) {
        var r = {},
          a = yn(e, t, n);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((r.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
              !0 === e.drag
                ? "none"
                : "pan-".concat("x" === e.drag ? "y" : "x"))),
          (r.style = a),
          r
        );
      }
      var bn = new Set(
        [
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "transformValues",
          "custom",
          "inherit",
          "layout",
          "layoutId",
          "layoutDependency",
          "onLayoutAnimationStart",
          "onLayoutAnimationComplete",
          "onLayoutMeasure",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "drag",
          "dragControls",
          "dragListener",
          "dragConstraints",
          "dragDirectionLock",
          "dragSnapToOrigin",
          "_dragX",
          "_dragY",
          "dragElastic",
          "dragMomentum",
          "dragPropagation",
          "dragTransition",
          "onHoverStart",
          "onHoverEnd",
          "layoutScroll",
        ].concat(
          ["whileInView", "onViewportEnter", "onViewportLeave", "viewport"],
          ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          [
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ],
          ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]
        )
      );
      function xn(e) {
        return bn.has(e);
      }
      var wn,
        kn = function (e) {
          return !xn(e);
        };
      try {
        (wn = require("@emotion/is-prop-valid").default) &&
          (kn = function (e) {
            return e.startsWith("on") ? !xn(e) : wn(e);
          });
      } catch (as) {}
      function Sn(e, t, n) {
        var r = {};
        for (var a in e)
          (kn(a) ||
            (!0 === n && xn(a)) ||
            (!t && !xn(a)) ||
            (e.draggable && a.startsWith("onDrag"))) &&
            (r[a] = e[a]);
        return r;
      }
      function En(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Cn(e, t, n) {
        return "string" === typeof e ? e : un.transform(t + n * e);
      }
      var Pn = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Tn = { offset: "strokeDashoffset", array: "strokeDasharray" };
      var jn = [
        "attrX",
        "attrY",
        "originX",
        "originY",
        "pathLength",
        "pathSpacing",
        "pathOffset",
      ];
      function Rn(e, t, n, r, a) {
        var i = t.attrX,
          o = t.attrY,
          l = t.originX,
          u = t.originY,
          s = t.pathLength,
          c = t.pathSpacing,
          f = void 0 === c ? 1 : c,
          d = t.pathOffset,
          p = void 0 === d ? 0 : d;
        if ((hn(e, En(t, jn), n, a), r))
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        else {
          (e.attrs = e.style), (e.style = {});
          var h = e.attrs,
            v = e.style,
            m = e.dimensions;
          h.transform && (m && (v.transform = h.transform), delete h.transform),
            m &&
              (void 0 !== l || void 0 !== u || v.transform) &&
              (v.transformOrigin = (function (e, t, n) {
                var r = Cn(t, e.x, e.width),
                  a = Cn(n, e.y, e.height);
                return "".concat(r, " ").concat(a);
              })(m, void 0 !== l ? l : 0.5, void 0 !== u ? u : 0.5)),
            void 0 !== i && (h.x = i),
            void 0 !== o && (h.y = o),
            void 0 !== s &&
              (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  a =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4];
                e.pathLength = 1;
                var i = a ? Pn : Tn;
                e[i.offset] = un.transform(-r);
                var o = un.transform(t),
                  l = un.transform(n);
                e[i.array] = "".concat(o, " ").concat(l);
              })(h, s, f, p, !1);
        }
      }
      var Ln = function () {
          return ct(
            ct(
              {},
              {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {},
              }
            ),
            {},
            { attrs: {} }
          );
        },
        On = function (e) {
          return "string" === typeof e && "svg" === e.toLowerCase();
        };
      function Nn(e, n, r, a) {
        var i = (0, t.useMemo)(
          function () {
            var t = Ln();
            return (
              Rn(
                t,
                n,
                { enableHardwareAcceleration: !1 },
                On(a),
                e.transformTemplate
              ),
              ct(ct({}, t.attrs), {}, { style: ct({}, t.style) })
            );
          },
          [n]
        );
        if (e.style) {
          var o = {};
          mn(o, e.style, e), (i.style = ct(ct({}, o), i.style));
        }
        return i;
      }
      function _n() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = function (n, r, a, i, o, l) {
            var u = o.latestValues,
              s = (It(n) ? Nn : gn)(r, u, l, n),
              c = ct(
                ct(ct({}, Sn(r, "string" === typeof n, e)), s),
                {},
                { ref: i }
              );
            return (
              a && (c["data-projection-id"] = a), (0, t.createElement)(n, c)
            );
          };
        return n;
      }
      var Mn = function (e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      };
      function Dn(e, t, n, r) {
        var a = t.style,
          i = t.vars;
        for (var o in (Object.assign(e.style, a, r && r.getProjectionStyles(n)),
        i))
          e.style.setProperty(o, i[o]);
      }
      var An = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function Vn(e, t, n, r) {
        for (var a in (Dn(e, t, void 0, r), t.attrs))
          e.setAttribute(An.has(a) ? a : Mn(a), t.attrs[a]);
      }
      function Fn(e) {
        var t = e.style,
          n = {};
        for (var r in t) (Ht(t[r]) || Wt(r, e)) && (n[r] = t[r]);
        return n;
      }
      function In(e) {
        var t = Fn(e);
        for (var n in e) {
          if (Ht(e[n]))
            t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n];
        }
        return t;
      }
      function zn(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return (
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          "string" === typeof t && (t = e.variants && e.variants[t]),
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          t
        );
      }
      var Un = function (e) {
        return Array.isArray(e);
      };
      function Bn(e) {
        var t,
          n = Ht(e) ? e.get() : e;
        return (
          (t = n),
          Boolean(t && "object" === typeof t && t.mix && t.toValue)
            ? n.toValue()
            : n
        );
      }
      var Wn = ["transitionEnd", "transition"];
      var Hn = function (e) {
        return function (n, r) {
          var a = (0, t.useContext)(dt),
            i = (0, t.useContext)(pt),
            o = function () {
              return (function (e, t, n, r) {
                var a = e.scrapeMotionValuesFromProps,
                  i = e.createRenderState,
                  o = e.onMount,
                  l = { latestValues: $n(t, n, r, a), renderState: i() };
                return (
                  o &&
                    (l.mount = function (e) {
                      return o(t, e, l);
                    }),
                  l
                );
              })(e, n, a, i);
            };
          return r ? o() : jt(o);
        };
      };
      function $n(e, t, n, r) {
        var a = {},
          i = r(e);
        for (var o in i) a[o] = Bn(i[o]);
        var l = e.initial,
          u = e.animate,
          s = kt(e),
          c = St(e);
        t &&
          c &&
          !s &&
          !1 !== e.inherit &&
          (void 0 === l && (l = t.initial), void 0 === u && (u = t.animate));
        var f = !!n && !1 === n.initial,
          d = (f = f || !1 === l) ? u : l;
        d &&
          "boolean" !== typeof d &&
          !xt(d) &&
          (Array.isArray(d) ? d : [d]).forEach(function (t) {
            var n = zn(e, t);
            if (n) {
              var r = n.transitionEnd,
                i = (n.transition, En(n, Wn));
              for (var o in i) {
                var l = i[o];
                if (Array.isArray(l)) l = l[f ? l.length - 1 : 0];
                null !== l && (a[o] = l);
              }
              for (var u in r) a[u] = r[u];
            }
          });
        return a;
      }
      var qn,
        Qn = {
          useVisualState: Hn({
            scrapeMotionValuesFromProps: In,
            createRenderState: Ln,
            onMount: function (e, t, n) {
              var r = n.renderState,
                a = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (i) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              Rn(
                r,
                a,
                { enableHardwareAcceleration: !1 },
                On(t.tagName),
                e.transformTemplate
              ),
                Vn(t, r);
            },
          }),
        },
        Yn = {
          useVisualState: Hn({
            scrapeMotionValuesFromProps: Fn,
            createRenderState: vn,
          }),
        };
      function Xn(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n);
          }
        );
      }
      function Kn(e, n, r, a) {
        (0, t.useEffect)(
          function () {
            var t = e.current;
            if (r && t) return Xn(t, n, r, a);
          },
          [e, n, r, a]
        );
      }
      !(function (e) {
        (e.Animate = "animate"),
          (e.Hover = "whileHover"),
          (e.Tap = "whileTap"),
          (e.Drag = "whileDrag"),
          (e.Focus = "whileFocus"),
          (e.InView = "whileInView"),
          (e.Exit = "exit");
      })(qn || (qn = {}));
      var Gn = function (e) {
        return !1 !== e.isPrimary;
      };
      function Zn(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      var Jn = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = function (t) {
            return e(t, Zn(t));
          };
        return t
          ? function (e) {
              return Gn(e) && n(e);
            }
          : n;
      };
      function er(e, t, n, r) {
        return Xn(e, t, Jn(n, "pointerdown" === t), r);
      }
      function tr(e, t, n, r) {
        return Kn(e, t, n && Jn(n, "pointerdown" === t), r);
      }
      function nr(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
            function () {
              t = null;
            })
          );
        };
      }
      var rr = nr("dragHorizontal"),
        ar = nr("dragVertical");
      function ir(e) {
        var t = !1;
        if ("y" === e) t = ar();
        else if ("x" === e) t = rr();
        else {
          var n = rr(),
            r = ar();
          n && r
            ? (t = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return t;
      }
      function or() {
        var e = ir(!0);
        return !e || (e(), !1);
      }
      function lr(e, t, n) {
        return function (r, a) {
          (function (e) {
            return "pen" !== e.type && "touch" !== e.type;
          })(r) &&
            !or() &&
            (e.animationState && e.animationState.setActive(qn.Hover, t),
            n && n(r, a));
        };
      }
      var ur = function e(t, n) {
        return !!n && (t === n || e(t, n.parentElement));
      };
      function sr(e) {
        return (0, t.useEffect)(function () {
          return function () {
            return e();
          };
        }, []);
      }
      var cr = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        fr = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(cr);
        };
      var dr = new Set();
      function pr(e, t, n) {
        e || dr.has(t) || (console.warn(t), n && console.warn(n), dr.add(t));
      }
      var hr = ["root"],
        vr = new WeakMap(),
        mr = new WeakMap(),
        yr = function (e) {
          var t = vr.get(e.target);
          t && t(e);
        },
        gr = function (e) {
          e.forEach(yr);
        };
      function br(e, t, n) {
        var r = (function (e) {
          var t = e.root,
            n = En(e, hr),
            r = t || document;
          mr.has(r) || mr.set(r, {});
          var a = mr.get(r),
            i = JSON.stringify(n);
          return (
            a[i] || (a[i] = new IntersectionObserver(gr, ct({ root: t }, n))),
            a[i]
          );
        })(t);
        return (
          vr.set(e, n),
          r.observe(e),
          function () {
            vr.delete(e), r.unobserve(e);
          }
        );
      }
      var xr = { some: 0, all: 1 };
      function wr(e, n, r, a) {
        var i = a.root,
          o = a.margin,
          l = a.amount,
          u = void 0 === l ? "some" : l,
          s = a.once;
        (0, t.useEffect)(
          function () {
            if (e && r.current) {
              var t = {
                root: null === i || void 0 === i ? void 0 : i.current,
                rootMargin: o,
                threshold: "number" === typeof u ? u : xr[u],
              };
              return br(r.current, t, function (e) {
                var t = e.isIntersecting;
                if (
                  n.isInView !== t &&
                  ((n.isInView = t), !s || t || !n.hasEnteredView)
                ) {
                  t && (n.hasEnteredView = !0),
                    r.animationState &&
                      r.animationState.setActive(qn.InView, t);
                  var a = r.getProps(),
                    i = t ? a.onViewportEnter : a.onViewportLeave;
                  i && i(e);
                }
              });
            }
          },
          [e, i, o, u]
        );
      }
      function kr(e, n, r, a) {
        var i = a.fallback,
          o = void 0 === i || i;
        (0, t.useEffect)(
          function () {
            e &&
              o &&
              requestAnimationFrame(function () {
                n.hasEnteredView = !0;
                var e = r.getProps().onViewportEnter;
                e && e(null),
                  r.animationState && r.animationState.setActive(qn.InView, !0);
              });
          },
          [e]
        );
      }
      var Sr = function (e) {
          return function (t) {
            return e(t), null;
          };
        },
        Er = {
          inView: Sr(function (e) {
            var n = e.visualElement,
              r = e.whileInView,
              a = e.onViewportEnter,
              i = e.onViewportLeave,
              o = e.viewport,
              l = void 0 === o ? {} : o,
              u = (0, t.useRef)({ hasEnteredView: !1, isInView: !1 }),
              s = Boolean(r || a || i);
            l.once && u.current.hasEnteredView && (s = !1),
              ("undefined" === typeof IntersectionObserver ? kr : wr)(
                s,
                u.current,
                n,
                l
              );
          }),
          tap: Sr(function (e) {
            var n = e.onTap,
              r = e.onTapStart,
              a = e.onTapCancel,
              i = e.whileTap,
              o = e.visualElement,
              l = n || r || a || i,
              u = (0, t.useRef)(!1),
              s = (0, t.useRef)(null),
              c = { passive: !(r || n || a || v) };
            function f() {
              s.current && s.current(), (s.current = null);
            }
            function d() {
              return (
                f(),
                (u.current = !1),
                o.animationState && o.animationState.setActive(qn.Tap, !1),
                !or()
              );
            }
            function p(e, t) {
              d() && (ur(o.current, e.target) ? n && n(e, t) : a && a(e, t));
            }
            function h(e, t) {
              d() && a && a(e, t);
            }
            function v(e, t) {
              f(),
                u.current ||
                  ((u.current = !0),
                  (s.current = fr(
                    er(window, "pointerup", p, c),
                    er(window, "pointercancel", h, c)
                  )),
                  o.animationState && o.animationState.setActive(qn.Tap, !0),
                  r && r(e, t));
            }
            tr(o, "pointerdown", l ? v : void 0, c), sr(f);
          }),
          focus: Sr(function (e) {
            var t = e.whileFocus,
              n = e.visualElement,
              r = n.animationState;
            Kn(
              n,
              "focus",
              t
                ? function () {
                    r && r.setActive(qn.Focus, !0);
                  }
                : void 0
            ),
              Kn(
                n,
                "blur",
                t
                  ? function () {
                      r && r.setActive(qn.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Sr(function (e) {
            var t = e.onHoverStart,
              n = e.onHoverEnd,
              r = e.whileHover,
              a = e.visualElement;
            tr(a, "pointerenter", t || r ? lr(a, !0, t) : void 0, {
              passive: !t,
            }),
              tr(a, "pointerleave", n || r ? lr(a, !1, n) : void 0, {
                passive: !n,
              });
          }),
        };
      function Cr() {
        var e = (0, t.useContext)(pt);
        if (null === e) return [!0, null];
        var n = e.isPresent,
          r = e.onExitComplete,
          a = e.register,
          i = (0, t.useId)();
        (0, t.useEffect)(function () {
          return a(i);
        }, []);
        return !n && r
          ? [
              !1,
              function () {
                return r && r(i);
              },
            ]
          : [!0];
      }
      function Pr(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var Tr = function (e) {
          return /^0[^.\s]+$/.test(e);
        },
        jr = { delta: 0, timestamp: 0 },
        Rr = (1 / 60) * 1e3,
        Lr =
          "undefined" !== typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        Or =
          "undefined" !== typeof window
            ? function (e) {
                return window.requestAnimationFrame(e);
              }
            : function (e) {
                return setTimeout(function () {
                  return e(Lr());
                }, Rr);
              };
      var Nr = !0,
        _r = !1,
        Mr = !1,
        Dr = ["read", "update", "preRender", "render", "postRender"],
        Ar = Dr.reduce(function (e, t) {
          return (
            (e[t] = (function (e) {
              var t = [],
                n = [],
                r = 0,
                a = !1,
                i = !1,
                o = new WeakSet(),
                l = {
                  schedule: function (e) {
                    var i =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2] &&
                        a,
                      l = i ? t : n;
                    return (
                      arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1] &&
                        o.add(e),
                      -1 === l.indexOf(e) &&
                        (l.push(e), i && a && (r = t.length)),
                      e
                    );
                  },
                  cancel: function (e) {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), o.delete(e);
                  },
                  process: function (u) {
                    if (a) i = !0;
                    else {
                      a = !0;
                      var s = [n, t];
                      if (((t = s[0]), ((n = s[1]).length = 0), (r = t.length)))
                        for (var c = 0; c < r; c++) {
                          var f = t[c];
                          f(u), o.has(f) && (l.schedule(f), e());
                        }
                      (a = !1), i && ((i = !1), l.process(u));
                    }
                  },
                };
              return l;
            })(function () {
              return (_r = !0);
            })),
            e
          );
        }, {}),
        Vr = Dr.reduce(function (e, t) {
          var n = Ar[t];
          return (
            (e[t] = function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return _r || Br(), n.schedule(e, t, r);
            }),
            e
          );
        }, {}),
        Fr = Dr.reduce(function (e, t) {
          return (e[t] = Ar[t].cancel), e;
        }, {}),
        Ir = Dr.reduce(function (e, t) {
          return (
            (e[t] = function () {
              return Ar[t].process(jr);
            }),
            e
          );
        }, {}),
        zr = function (e) {
          return Ar[e].process(jr);
        },
        Ur = function e(t) {
          (_r = !1),
            (jr.delta = Nr ? Rr : Math.max(Math.min(t - jr.timestamp, 40), 1)),
            (jr.timestamp = t),
            (Mr = !0),
            Dr.forEach(zr),
            (Mr = !1),
            _r && ((Nr = !1), Or(e));
        },
        Br = function () {
          (_r = !0), (Nr = !0), Mr || Or(Ur);
        };
      function Wr(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Hr(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var $r = (function () {
        function e() {
          d(this, e), (this.subscriptions = []);
        }
        return (
          m(e, [
            {
              key: "add",
              value: function (e) {
                var t = this;
                return (
                  Wr(this.subscriptions, e),
                  function () {
                    return Hr(t.subscriptions, e);
                  }
                );
              },
            },
            {
              key: "notify",
              value: function (e, t, n) {
                var r = this.subscriptions.length;
                if (r)
                  if (1 === r) this.subscriptions[0](e, t, n);
                  else
                    for (var a = 0; a < r; a++) {
                      var i = this.subscriptions[a];
                      i && i(e, t, n);
                    }
              },
            },
            {
              key: "getSize",
              value: function () {
                return this.subscriptions.length;
              },
            },
            {
              key: "clear",
              value: function () {
                this.subscriptions.length = 0;
              },
            },
          ]),
          e
        );
      })();
      function qr(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      var Qr = function (e) {
          return !isNaN(parseFloat(e));
        },
        Yr = (function () {
          function e(t) {
            var n = this,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            d(this, e),
              (this.version = "8.0.2"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.canTrackVelocity = !1),
              (this.events = {}),
              (this.updateAndNotify = function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                (n.prev = n.current), (n.current = e);
                var r = jr.delta,
                  a = jr.timestamp;
                n.lastUpdated !== a &&
                  ((n.timeDelta = r),
                  (n.lastUpdated = a),
                  Vr.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current &&
                    n.events.change &&
                    n.events.change.notify(n.current),
                  n.events.velocityChange &&
                    n.events.velocityChange.notify(n.getVelocity()),
                  t &&
                    n.events.renderRequest &&
                    n.events.renderRequest.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return Vr.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.events.velocityChange &&
                    n.events.velocityChange.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity = Qr(this.current)),
              (this.owner = r.owner);
          }
          return (
            m(e, [
              {
                key: "onChange",
                value: function (e) {
                  return this.on("change", e);
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return (
                    this.events[e] || (this.events[e] = new $r()),
                    this.events[e].add(t)
                  );
                },
              },
              {
                key: "clearListeners",
                value: function () {
                  for (var e in this.events) this.events[e].clear();
                },
              },
              {
                key: "attach",
                value: function (e) {
                  this.passiveEffect = e;
                },
              },
              {
                key: "set",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  t && this.passiveEffect
                    ? this.passiveEffect(e, this.updateAndNotify)
                    : this.updateAndNotify(e, t);
                },
              },
              {
                key: "setWithVelocity",
                value: function (e, t, n) {
                  this.set(t), (this.prev = e), (this.timeDelta = n);
                },
              },
              {
                key: "get",
                value: function () {
                  return this.current;
                },
              },
              {
                key: "getPrevious",
                value: function () {
                  return this.prev;
                },
              },
              {
                key: "getVelocity",
                value: function () {
                  return this.canTrackVelocity
                    ? qr(
                        parseFloat(this.current) - parseFloat(this.prev),
                        this.timeDelta
                      )
                    : 0;
                },
              },
              {
                key: "start",
                value: function (e) {
                  var t = this;
                  return (
                    this.stop(),
                    new Promise(function (n) {
                      (t.hasAnimated = !0),
                        (t.stopAnimation = e(n)),
                        t.events.animationStart &&
                          t.events.animationStart.notify();
                    }).then(function () {
                      t.events.animationComplete &&
                        t.events.animationComplete.notify(),
                        t.clearAnimation();
                    })
                  );
                },
              },
              {
                key: "stop",
                value: function () {
                  this.stopAnimation &&
                    (this.stopAnimation(),
                    this.events.animationCancel &&
                      this.events.animationCancel.notify()),
                    this.clearAnimation();
                },
              },
              {
                key: "isAnimating",
                value: function () {
                  return !!this.stopAnimation;
                },
              },
              {
                key: "clearAnimation",
                value: function () {
                  this.stopAnimation = null;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.clearListeners(), this.stop();
                },
              },
            ]),
            e
          );
        })();
      function Xr(e, t) {
        return new Yr(e, t);
      }
      var Kr = function (e, t) {
          return function (n) {
            return Boolean(
              (rn(n) && nn.test(n) && n.startsWith(e)) ||
                (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        Gr = function (e, t, n) {
          return function (r) {
            var a;
            if (!rn(r)) return r;
            var i = s(r.match(en), 4),
              o = i[0],
              l = i[1],
              u = i[2],
              c = i[3];
            return (
              ut((a = {}), e, parseFloat(o)),
              ut(a, t, parseFloat(l)),
              ut(a, n, parseFloat(u)),
              ut(a, "alpha", void 0 !== c ? parseFloat(c) : 1),
              a
            );
          };
        },
        Zr = ct(
          ct({}, Kt),
          {},
          {
            transform: function (e) {
              return Math.round(
                (function (e) {
                  return Xt(0, 255, e);
                })(e)
              );
            },
          }
        ),
        Jr = {
          test: Kr("rgb", "red"),
          parse: Gr("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              a = e.alpha,
              i = void 0 === a ? 1 : a;
            return (
              "rgba(" +
              Zr.transform(t) +
              ", " +
              Zr.transform(n) +
              ", " +
              Zr.transform(r) +
              ", " +
              Jt(Gt.transform(i)) +
              ")"
            );
          },
        };
      var ea = {
          test: Kr("#"),
          parse: function (e) {
            var t = "",
              n = "",
              r = "",
              a = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (n = e.substring(3, 5)),
                  (r = e.substring(5, 7)),
                  (a = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (r = e.substring(3, 4)),
                  (a = e.substring(4, 5)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (a += a)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: a ? parseInt(a, 16) / 255 : 1,
              }
            );
          },
          transform: Jr.transform,
        },
        ta = {
          test: Kr("hsl", "hue"),
          parse: Gr("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              a = e.alpha,
              i = void 0 === a ? 1 : a;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              ln.transform(Jt(n)) +
              ", " +
              ln.transform(Jt(r)) +
              ", " +
              Jt(Gt.transform(i)) +
              ")"
            );
          },
        },
        na = {
          test: function (e) {
            return Jr.test(e) || ea.test(e) || ta.test(e);
          },
          parse: function (e) {
            return Jr.test(e)
              ? Jr.parse(e)
              : ta.test(e)
              ? ta.parse(e)
              : ea.parse(e);
          },
          transform: function (e) {
            return rn(e)
              ? e
              : e.hasOwnProperty("red")
              ? Jr.transform(e)
              : ta.transform(e);
          },
        },
        ra = "${c}",
        aa = "${n}";
      function ia(e) {
        "number" === typeof e && (e = "".concat(e));
        var t = [],
          n = 0,
          r = 0,
          a = e.match(tn);
        a &&
          ((n = a.length),
          (e = e.replace(tn, ra)),
          t.push.apply(t, f(a.map(na.parse))));
        var i = e.match(en);
        return (
          i &&
            ((r = i.length),
            (e = e.replace(en, aa)),
            t.push.apply(t, f(i.map(Kt.parse)))),
          { values: t, numColors: n, numNumbers: r, tokenised: e }
        );
      }
      function oa(e) {
        return ia(e).values;
      }
      function la(e) {
        var t = ia(e),
          n = t.values,
          r = t.numColors,
          a = t.tokenised,
          i = n.length;
        return function (e) {
          for (var t = a, n = 0; n < i; n++)
            t = t.replace(
              n < r ? ra : aa,
              n < r ? na.transform(e[n]) : Jt(e[n])
            );
          return t;
        };
      }
      var ua = function (e) {
        return "number" === typeof e ? 0 : e;
      };
      var sa = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              rn(e) &&
              ((null === (t = e.match(en)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(tn)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: oa,
          createTransformer: la,
          getAnimatableNone: function (e) {
            var t = oa(e);
            return la(e)(t.map(ua));
          },
        },
        ca = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function fa(e) {
        var t = s(e.slice(0, -1).split("("), 2),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var a = s(r.match(en) || [], 1)[0];
        if (!a) return e;
        var i = r.replace(a, ""),
          o = ca.has(n) ? 1 : 0;
        return a !== r && (o *= 100), n + "(" + o + i + ")";
      }
      var da = /([a-z-]*)\(.*?\)/g,
        pa = ct(
          ct({}, sa),
          {},
          {
            getAnimatableNone: function (e) {
              var t = e.match(da);
              return t ? t.map(fa).join(" ") : e;
            },
          }
        ),
        ha = ct(
          ct({}, pn),
          {},
          {
            color: na,
            backgroundColor: na,
            outlineColor: na,
            fill: na,
            stroke: na,
            borderColor: na,
            borderTopColor: na,
            borderRightColor: na,
            borderBottomColor: na,
            borderLeftColor: na,
            filter: pa,
            WebkitFilter: pa,
          }
        ),
        va = function (e) {
          return ha[e];
        };
      function ma(e, t) {
        var n,
          r = va(e);
        return (
          r !== pa && (r = sa),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, t)
        );
      }
      var ya = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        ga = [
          Kt,
          un,
          ln,
          on,
          cn,
          sn,
          {
            test: function (e) {
              return "auto" === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        ba = function (e) {
          return ga.find(ya(e));
        },
        xa = [].concat(f(ga), [na, sa]),
        wa = function (e) {
          return xa.find(ya(e));
        };
      function ka(e, t, n) {
        var r = e.getProps();
        return zn(
          r,
          t,
          void 0 !== n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      var Sa = ["transitionEnd", "transition"];
      function Ea(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xr(n));
      }
      function Ca(e, t) {
        var n,
          r = ka(e, t),
          a = r ? e.makeTargetAnimatable(r, !1) : {},
          i = a.transitionEnd,
          o = void 0 === i ? {} : i,
          l = (a.transition, En(a, Sa));
        for (var u in (l = ct(ct({}, l), o))) {
          Ea(e, u, ((n = l[u]), Un(n) ? n[n.length - 1] || 0 : n));
        }
      }
      function Pa(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      function Ta(e) {
        return Boolean(Ht(e) && e.add);
      }
      function ja(e, t) {
        var n = window.MotionAppearAnimations,
          r = (function (e, t) {
            return "".concat(e, ": ").concat(t);
          })(e, Bt.has(t) ? "transform" : t),
          a = n && n.get(r);
        return a
          ? (Vr.render(function () {
              try {
                a.cancel(), n.delete(r);
              } catch (e) {}
            }),
            a.currentTime || 0)
          : 0;
      }
      var Ra = "data-" + Mn("framerAppearId");
      var La = function (e) {
          return 1e3 * e;
        },
        Oa = !1,
        Na = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        _a = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Ma = function (e) {
          return e * e;
        },
        Da = _a(Ma),
        Aa = Na(Ma),
        Va = function (e, t, n) {
          return -n * e + n * t + e;
        };
      function Fa(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      var Ia = function (e, t, n) {
          var r = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - r) + r));
        },
        za = [ea, Jr, ta];
      function Ua(e) {
        var t,
          n =
            ((t = e),
            za.find(function (e) {
              return e.test(t);
            }));
        Boolean(n),
          "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          );
        var r = n.parse(e);
        return (
          n === ta &&
            (r = (function (e) {
              var t = e.hue,
                n = e.saturation,
                r = e.lightness,
                a = e.alpha;
              (t /= 360), (r /= 100);
              var i = 0,
                o = 0,
                l = 0;
              if ((n /= 100)) {
                var u = r < 0.5 ? r * (1 + n) : r + n - r * n,
                  s = 2 * r - u;
                (i = Fa(s, u, t + 1 / 3)),
                  (o = Fa(s, u, t)),
                  (l = Fa(s, u, t - 1 / 3));
              } else i = o = l = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * l),
                alpha: a,
              };
            })(r)),
          r
        );
      }
      var Ba = function (e, t) {
        var n = Ua(e),
          r = Ua(t),
          a = ct({}, n);
        return function (e) {
          return (
            (a.red = Ia(n.red, r.red, e)),
            (a.green = Ia(n.green, r.green, e)),
            (a.blue = Ia(n.blue, r.blue, e)),
            (a.alpha = Va(n.alpha, r.alpha, e)),
            Jr.transform(a)
          );
        };
      };
      function Wa(e, t) {
        return "number" === typeof e
          ? function (n) {
              return Va(e, t, n);
            }
          : na.test(e)
          ? Ba(e, t)
          : qa(e, t);
      }
      var Ha = function (e, t) {
          var n = f(e),
            r = n.length,
            a = e.map(function (e, n) {
              return Wa(e, t[n]);
            });
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = a[t](e);
            return n;
          };
        },
        $a = function (e, t) {
          var n = ct(ct({}, e), t),
            r = {};
          for (var a in n)
            void 0 !== e[a] && void 0 !== t[a] && (r[a] = Wa(e[a], t[a]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        },
        qa = function (e, t) {
          var n = sa.createTransformer(t),
            r = ia(e),
            a = ia(t);
          return r.numColors === a.numColors && r.numNumbers >= a.numNumbers
            ? fr(Ha(r.values, a.values), n)
            : ("Complex values '"
                .concat(e, "' and '")
                .concat(
                  t,
                  "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                ),
              function (n) {
                return "".concat(n > 0 ? t : e);
              });
        },
        Qa = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        Ya = function (e, t) {
          return function (n) {
            return Va(e, t, n);
          };
        };
      function Xa(e, t, n) {
        for (
          var r,
            a = [],
            i =
              n ||
              ("number" === typeof (r = e[0])
                ? Ya
                : "string" === typeof r
                ? na.test(r)
                  ? Ba
                  : qa
                : Array.isArray(r)
                ? Ha
                : "object" === typeof r
                ? $a
                : Ya),
            o = e.length - 1,
            l = 0;
          l < o;
          l++
        ) {
          var u = i(e[l], e[l + 1]);
          if (t) {
            var s = Array.isArray(t) ? t[l] : t;
            u = fr(s, u);
          }
          a.push(u);
        }
        return a;
      }
      function Ka(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          a = void 0 === r || r,
          i = n.ease,
          o = n.mixer,
          l = e.length;
        t.length,
          !i || !Array.isArray(i) || i.length,
          e[0] > e[l - 1] && ((e = f(e).reverse()), (t = f(t).reverse()));
        var u = Xa(t, i, o),
          s = u.length,
          c = function (t) {
            var n = 0;
            if (s > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            var r = Qa(e[n], e[n + 1], t);
            return u[n](r);
          };
        return a
          ? function (t) {
              return c(Xt(e[0], e[l - 1], t));
            }
          : c;
      }
      var Ga = function (e) {
          return e;
        },
        Za = function (e, t, n) {
          return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
        };
      function Ja(e, t, n, r) {
        if (e === t && n === r) return Ga;
        var a = function (t) {
          return (function (e, t, n, r, a) {
            var i,
              o,
              l = 0;
            do {
              (i = Za((o = t + (n - t) / 2), r, a) - e) > 0 ? (n = o) : (t = o);
            } while (Math.abs(i) > 1e-7 && ++l < 12);
            return o;
          })(t, 0, 1, e, n);
        };
        return function (e) {
          return 0 === e || 1 === e ? e : Za(a(e), t, r);
        };
      }
      var ei = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        ti = _a(ei),
        ni = Na(ti),
        ri = Ja(0.33, 1.53, 0.69, 0.99),
        ai = _a(ri),
        ii = Na(ai),
        oi = {
          linear: Ga,
          easeIn: Ma,
          easeInOut: Aa,
          easeOut: Da,
          circIn: ei,
          circInOut: ni,
          circOut: ti,
          backIn: ai,
          backInOut: ii,
          backOut: ri,
          anticipate: function (e) {
            return (e *= 2) < 1
              ? 0.5 * ai(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          },
        },
        li = function (e) {
          if (Array.isArray(e)) {
            e.length;
            var t = s(e, 4);
            return Ja(t[0], t[1], t[2], t[3]);
          }
          return "string" === typeof e
            ? ("Invalid easing type '".concat(e, "'"), oi[e])
            : e;
        };
      function ui(e) {
        var t = e.keyframes,
          n = e.ease,
          r = void 0 === n ? Aa : n,
          a = e.times,
          i = e.duration,
          o = void 0 === i ? 300 : i;
        t = f(t);
        var l = ui[0],
          u = (function (e) {
            return Array.isArray(e) && "number" !== typeof e[0];
          })(r)
            ? r.map(li)
            : li(r),
          s = { done: !1, value: l },
          c = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(
            a && a.length === ui.length
              ? a
              : (function (e) {
                  var t = e.length;
                  return e.map(function (e, n) {
                    return 0 !== n ? n / (t - 1) : 0;
                  });
                })(t),
            o
          );
        function d() {
          return Ka(c, t, {
            ease: Array.isArray(u)
              ? u
              : ((e = t),
                (n = u),
                e
                  .map(function () {
                    return n || Aa;
                  })
                  .splice(0, e.length - 1)),
          });
          var e, n;
        }
        var p = d();
        return {
          next: function (e) {
            return (s.value = p(e)), (s.done = e >= o), s;
          },
          flipTarget: function () {
            t.reverse(), (p = d());
          },
        };
      }
      var si = 0.001;
      function ci(e) {
        var t,
          n,
          r = e.duration,
          a = void 0 === r ? 800 : r,
          i = e.bounce,
          o = void 0 === i ? 0.25 : i,
          l = e.velocity,
          u = void 0 === l ? 0 : l,
          s = e.mass,
          c = void 0 === s ? 1 : s,
          f = 1 - o;
        (f = Xt(0.05, 1, f)),
          (a = Xt(0.01, 10, a / 1e3)),
          f < 1
            ? ((t = function (e) {
                var t = e * f,
                  n = t * a,
                  r = t - u,
                  i = fi(e, f),
                  o = Math.exp(-n);
                return si - (r / i) * o;
              }),
              (n = function (e) {
                var n = e * f * a,
                  r = n * u + u,
                  i = Math.pow(f, 2) * Math.pow(e, 2) * a,
                  o = Math.exp(-n),
                  l = fi(Math.pow(e, 2), f);
                return ((-t(e) + si > 0 ? -1 : 1) * ((r - i) * o)) / l;
              }))
            : ((t = function (e) {
                return Math.exp(-e * a) * ((e - u) * a + 1) - 0.001;
              }),
              (n = function (e) {
                return Math.exp(-e * a) * (a * a * (u - e));
              }));
        var d = (function (e, t, n) {
          for (var r = n, a = 1; a < 12; a++) r -= e(r) / t(r);
          return r;
        })(t, n, 5 / a);
        if (((a *= 1e3), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: a };
        var p = Math.pow(d, 2) * c;
        return { stiffness: p, damping: 2 * f * Math.sqrt(c * p), duration: a };
      }
      function fi(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var di = ["keyframes", "restSpeed", "restDelta"],
        pi = ["duration", "bounce"],
        hi = ["stiffness", "damping", "mass"];
      function vi(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      function mi(e) {
        var t = e.keyframes,
          n = e.restSpeed,
          r = void 0 === n ? 2 : n,
          a = e.restDelta,
          i = void 0 === a ? 0.01 : a,
          o = En(e, di),
          l = t[0],
          u = t[t.length - 1],
          s = { done: !1, value: l },
          c = (function (e) {
            var t = ct(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!vi(e, hi) && vi(e, pi)) {
              var n = ci(e);
              (t = ct(
                ct(ct({}, t), n),
                {},
                { velocity: 0, mass: 1 }
              )).isResolvedFromDuration = !0;
            }
            return t;
          })(o),
          f = c.stiffness,
          d = c.damping,
          p = c.mass,
          h = c.velocity,
          v = c.duration,
          m = c.isResolvedFromDuration,
          y = yi,
          g = h ? -h / 1e3 : 0,
          b = d / (2 * Math.sqrt(f * p));
        function x() {
          var e = u - l,
            t = Math.sqrt(f / p) / 1e3;
          if (
            (void 0 === i && (i = Math.min(Math.abs(u - l) / 100, 0.4)), b < 1)
          ) {
            var n = fi(t, b);
            y = function (r) {
              var a = Math.exp(-b * t * r);
              return (
                u -
                a *
                  (((g + b * t * e) / n) * Math.sin(n * r) +
                    e * Math.cos(n * r))
              );
            };
          } else if (1 === b)
            y = function (n) {
              return u - Math.exp(-t * n) * (e + (g + t * e) * n);
            };
          else {
            var r = t * Math.sqrt(b * b - 1);
            y = function (n) {
              var a = Math.exp(-b * t * n),
                i = Math.min(r * n, 300);
              return (
                u -
                (a * ((g + b * t * e) * Math.sinh(i) + r * e * Math.cosh(i))) /
                  r
              );
            };
          }
        }
        return (
          x(),
          {
            next: function (e) {
              var t = y(e);
              if (m) s.done = e >= v;
              else {
                var n = g;
                if (0 !== e)
                  if (b < 1) {
                    var a = Math.max(0, e - 5);
                    n = qr(t - y(a), e - a);
                  } else n = 0;
                var o = Math.abs(n) <= r,
                  l = Math.abs(u - t) <= i;
                s.done = o && l;
              }
              return (s.value = s.done ? u : t), s;
            },
            flipTarget: function () {
              g = -g;
              var e = [u, l];
              (l = e[0]), (u = e[1]), x();
            },
          }
        );
      }
      mi.needsInterpolation = function (e, t) {
        return "string" === typeof e || "string" === typeof t;
      };
      var yi = function (e) {
        return 0;
      };
      var gi = [
          "duration",
          "driver",
          "elapsed",
          "repeat",
          "repeatType",
          "repeatDelay",
          "keyframes",
          "autoplay",
          "onPlay",
          "onStop",
          "onComplete",
          "onRepeat",
          "onUpdate",
          "type",
        ],
        bi = {
          decay: function (e) {
            var t = e.keyframes,
              n = void 0 === t ? [0] : t,
              r = e.velocity,
              a = void 0 === r ? 0 : r,
              i = e.power,
              o = void 0 === i ? 0.8 : i,
              l = e.timeConstant,
              u = void 0 === l ? 350 : l,
              s = e.restDelta,
              c = void 0 === s ? 0.5 : s,
              f = e.modifyTarget,
              d = n[0],
              p = { done: !1, value: d },
              h = o * a,
              v = d + h,
              m = void 0 === f ? v : f(v);
            return (
              m !== v && (h = m - d),
              {
                next: function (e) {
                  var t = -h * Math.exp(-e / u);
                  return (
                    (p.done = !(t > c || t < -c)),
                    (p.value = p.done ? m : m + t),
                    p
                  );
                },
                flipTarget: function () {},
              }
            );
          },
          keyframes: ui,
          tween: ui,
          spring: mi,
        };
      function xi(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e - t - n;
      }
      var wi = function (e) {
        var t = function (t) {
          var n = t.delta;
          return e(n);
        };
        return {
          start: function () {
            return Vr.update(t, !0);
          },
          stop: function () {
            return Fr.update(t);
          },
        };
      };
      function ki(e) {
        var t,
          n,
          r,
          a,
          i,
          o = e.duration,
          l = e.driver,
          u = void 0 === l ? wi : l,
          s = e.elapsed,
          c = void 0 === s ? 0 : s,
          f = e.repeat,
          d = void 0 === f ? 0 : f,
          p = e.repeatType,
          h = void 0 === p ? "loop" : p,
          v = e.repeatDelay,
          m = void 0 === v ? 0 : v,
          y = e.keyframes,
          g = e.autoplay,
          b = void 0 === g || g,
          x = e.onPlay,
          w = e.onStop,
          k = e.onComplete,
          S = e.onRepeat,
          E = e.onUpdate,
          C = e.type,
          P = void 0 === C ? "keyframes" : C,
          T = En(e, gi),
          j = 0,
          R = o,
          L = !1,
          O = !0,
          N = bi[y.length > 2 ? "keyframes" : P],
          _ = y[0],
          M = y[y.length - 1];
        (null === (n = (t = N).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(t, _, M)) &&
          ((i = Ka([0, 100], [_, M], { clamp: !1 })), (y = [0, 100]));
        var D = N(ct(ct({}, T), {}, { duration: o, keyframes: y }));
        function A() {
          j++,
            "reverse" === h
              ? (c = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    r =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3];
                  return r ? xi(t + -e, t, n) : t - (e - t) + n;
                })(c, R, m, (O = j % 2 === 0)))
              : ((c = xi(c, R, m)), "mirror" === h && D.flipTarget()),
            (L = !1),
            S && S();
        }
        function V(e) {
          if ((O || (e = -e), (c += e), !L)) {
            var t = D.next(Math.max(0, c));
            (a = t.value), i && (a = i(a)), (L = O ? t.done : c <= 0);
          }
          E && E(a),
            L &&
              (0 === j && (R = void 0 !== R ? R : c),
              j < d
                ? (function (e, t, n, r) {
                    return r ? e >= t + n : e <= -n;
                  })(c, R, m, O) && A()
                : (r.stop(), k && k()));
        }
        return (
          b && (x && x(), (r = u(V)).start()),
          {
            stop: function () {
              w && w(), r.stop();
            },
            sample: function (e) {
              return D.next(Math.max(0, e));
            },
          }
        );
      }
      var Si = function (e) {
          var t = s(e, 4),
            n = t[0],
            r = t[1],
            a = t[2],
            i = t[3];
          return "cubic-bezier("
            .concat(n, ", ")
            .concat(r, ", ")
            .concat(a, ", ")
            .concat(i, ")");
        },
        Ei = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: Si([0, 0.65, 0.55, 1]),
          circOut: Si([0.55, 0, 1, 0.45]),
          backIn: Si([0.31, 0.01, 0.66, -0.59]),
          backOut: Si([0.33, 1.53, 0.69, 0.99]),
        };
      function Ci(e) {
        if (e) return Array.isArray(e) ? Si(e) : Ei[e];
      }
      var Pi = ["onUpdate", "onComplete"];
      function Ti(e, t, n) {
        n.onUpdate;
        var r,
          a = n.onComplete,
          i = En(n, Pi),
          o = i.keyframes,
          l = i.duration,
          u = void 0 === l ? 300 : l,
          s = i.elapsed,
          c = void 0 === s ? 0 : s,
          f = i.ease;
        if (
          "spring" === i.type ||
          !(
            !(r = i.ease) ||
            Array.isArray(r) ||
            ("string" === typeof r && Ei[r])
          )
        ) {
          for (
            var d = ki(i), p = { done: !1, value: o[0] }, h = [], v = 0;
            !p.done;

          )
            (p = d.sample(v)), h.push(p.value), (v += 10);
          (o = h), (u = v - 10), (f = "linear");
        }
        var m = (function (e, t, n) {
          var r,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i = a.delay,
            o = void 0 === i ? 0 : i,
            l = a.duration,
            u = a.repeat,
            s = void 0 === u ? 0 : u,
            c = a.repeatType,
            f = void 0 === c ? "loop" : c,
            d = a.ease,
            p = a.times;
          return e.animate((ut((r = {}), t, n), ut(r, "offset", p), r), {
            delay: o,
            duration: l,
            easing: Ci(d),
            fill: "both",
            iterations: s + 1,
            direction: "reverse" === f ? "alternate" : "normal",
          });
        })(
          e.owner.current,
          t,
          o,
          ct(ct({}, i), {}, { delay: -c, duration: u, ease: f })
        );
        return (
          (m.onfinish = function () {
            e.set(o[o.length - 1]), a && a();
          }),
          function () {
            var t = m.currentTime;
            if (t) {
              var n = ki(i);
              e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10);
            }
            Vr.update(function () {
              return m.cancel();
            });
          }
        );
      }
      function ji(e, t) {
        var n = performance.now(),
          r = function r(a) {
            var i = a.timestamp - n;
            i >= t && (Fr.read(r), e(i - t));
          };
        return (
          Vr.read(r, !0),
          function () {
            return Fr.read(r);
          }
        );
      }
      function Ri(e) {
        var t = e.keyframes,
          n = e.elapsed,
          r = e.onUpdate,
          a = e.onComplete,
          i = function () {
            return r && r(t[t.length - 1]), a && a(), function () {};
          };
        return n ? ji(i, -n) : i();
      }
      function Li(e) {
        var t,
          n = e.keyframes,
          r = e.velocity,
          a = void 0 === r ? 0 : r,
          i = e.min,
          o = e.max,
          l = e.power,
          u = void 0 === l ? 0.8 : l,
          s = e.timeConstant,
          c = void 0 === s ? 750 : s,
          f = e.bounceStiffness,
          d = void 0 === f ? 500 : f,
          p = e.bounceDamping,
          h = void 0 === p ? 10 : p,
          v = e.restDelta,
          m = void 0 === v ? 1 : v,
          y = e.modifyTarget,
          g = e.driver,
          b = e.onUpdate,
          x = e.onComplete,
          w = e.onStop,
          k = n[0];
        function S(e) {
          return (void 0 !== i && e < i) || (void 0 !== o && e > o);
        }
        function E(e) {
          return void 0 === i
            ? o
            : void 0 === o || Math.abs(i - e) < Math.abs(o - e)
            ? i
            : o;
        }
        function C(e) {
          null === t || void 0 === t || t.stop(),
            (t = ki(
              ct(
                ct({ keyframes: [0, 1], velocity: 0 }, e),
                {},
                {
                  driver: g,
                  onUpdate: function (t) {
                    var n;
                    null === b || void 0 === b || b(t),
                      null === (n = e.onUpdate) || void 0 === n || n.call(e, t);
                  },
                  onComplete: x,
                  onStop: w,
                }
              )
            ));
        }
        function P(e) {
          C(ct({ type: "spring", stiffness: d, damping: h, restDelta: m }, e));
        }
        if (S(k)) P({ velocity: a, keyframes: [k, E(k)] });
        else {
          var T = u * a + k;
          "undefined" !== typeof y && (T = y(T));
          var j,
            R,
            L = E(T),
            O = L === i ? -1 : 1;
          C({
            type: "decay",
            keyframes: [k, 0],
            velocity: a,
            timeConstant: c,
            power: u,
            restDelta: m,
            modifyTarget: y,
            onUpdate: S(T)
              ? function (e) {
                  (j = R),
                    (R = e),
                    (a = qr(e - j, jr.delta)),
                    ((1 === O && e > L) || (-1 === O && e < L)) &&
                      P({ keyframes: [e, L], velocity: a });
                }
              : void 0,
          });
        }
        return {
          stop: function () {
            return null === t || void 0 === t ? void 0 : t.stop();
          },
        };
      }
      var Oi = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        Ni = function (e) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        _i = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        Mi = { type: "keyframes", duration: 0.8 },
        Di = {
          x: Oi,
          y: Oi,
          z: Oi,
          rotate: Oi,
          rotateX: Oi,
          rotateY: Oi,
          rotateZ: Oi,
          scaleX: Ni,
          scaleY: Ni,
          scale: Ni,
          opacity: _i,
          backgroundColor: _i,
          color: _i,
          default: Ni,
        },
        Ai = function (e, t) {
          var n = t.keyframes;
          return n.length > 2 ? Mi : (Di[e] || Di.default)(n[1]);
        },
        Vi = function (e, t) {
          return (
            "zIndex" !== e &&
            (!("number" !== typeof t && !Array.isArray(t)) ||
              !("string" !== typeof t || !sa.test(t) || t.startsWith("url(")))
          );
        },
        Fi = [
          "when",
          "delay",
          "delayChildren",
          "staggerChildren",
          "staggerDirection",
          "repeat",
          "repeatType",
          "repeatDelay",
          "from",
          "elapsed",
        ];
      function Ii(e) {
        e.when,
          e.delay,
          e.delayChildren,
          e.staggerChildren,
          e.staggerDirection,
          e.repeat,
          e.repeatType,
          e.repeatDelay,
          e.from,
          e.elapsed;
        var t = En(e, Fi);
        return !!Object.keys(t).length;
      }
      function zi(e) {
        return (
          0 === e ||
          ("string" === typeof e &&
            0 === parseFloat(e) &&
            -1 === e.indexOf(" "))
        );
      }
      function Ui(e) {
        return "number" === typeof e ? 0 : ma("", e);
      }
      function Bi(e, t) {
        return e[t] || e.default || e;
      }
      function Wi(e, t, n, r) {
        var a = Vi(t, n),
          i = void 0 !== r.from ? r.from : e.get();
        return (
          "none" === i && a && "string" === typeof n
            ? (i = ma(t, n))
            : zi(i) && "string" === typeof n
            ? (i = Ui(n))
            : !Array.isArray(n) &&
              zi(n) &&
              "string" === typeof i &&
              (n = Ui(i)),
          Array.isArray(n) ? (null === n[0] && (n[0] = i), n) : [i, n]
        );
      }
      var Hi = {
          waapi: function () {
            return Object.hasOwnProperty.call(Element.prototype, "animate");
          },
        },
        $i = {},
        qi = {},
        Qi = function (e) {
          qi[e] = function () {
            return void 0 === $i[e] && ($i[e] = Hi[e]()), $i[e];
          };
        };
      for (var Yi in Hi) Qi(Yi);
      var Xi = new Set(["opacity"]),
        Ki = function (e, t, n) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return function (a) {
            var i = Bi(r, e) || {},
              o = i.delay || r.delay || 0,
              l = r.elapsed,
              u = void 0 === l ? 0 : l;
            u -= La(o);
            var s = Wi(t, e, n, i),
              c = s[0],
              f = s[s.length - 1],
              d = Vi(e, c),
              p = Vi(e, f);
            "You are trying to animate "
              .concat(e, ' from "')
              .concat(c, '" to "')
              .concat(f, '". ')
              .concat(
                c,
                " is not an animatable value - to enable this animation set "
              )
              .concat(c, " to a value animatable to ")
              .concat(f, " via the `style` property.");
            var h = ct(
              ct({ keyframes: s, velocity: t.getVelocity() }, i),
              {},
              {
                elapsed: u,
                onUpdate: function (e) {
                  t.set(e), i.onUpdate && i.onUpdate(e);
                },
                onComplete: function () {
                  a(), i.onComplete && i.onComplete();
                },
              }
            );
            if (!d || !p || Oa || !1 === i.type) return Ri(h);
            if ("inertia" === i.type) {
              var v = Li(h);
              return function () {
                return v.stop();
              };
            }
            Ii(i) || (h = ct(ct({}, h), Ai(e, h))),
              h.duration && (h.duration = La(h.duration)),
              h.repeatDelay && (h.repeatDelay = La(h.repeatDelay));
            var m = t.owner,
              y = m && m.current;
            if (
              qi.waapi() &&
              Xi.has(e) &&
              !h.repeatDelay &&
              "mirror" !== h.repeatType &&
              0 !== h.damping &&
              m &&
              y instanceof HTMLElement &&
              !m.getProps().onUpdate
            )
              return Ti(t, e, h);
            var g = ki(h);
            return function () {
              return g.stop();
            };
          };
        },
        Gi = ["transition", "transitionEnd"];
      function Zi(e, t) {
        var n,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = ka(e, t, r.custom),
          i = a || {},
          o = i.transition,
          l = void 0 === o ? e.getDefaultTransition() || {} : o;
        r.transitionOverride && (l = r.transitionOverride);
        var u = a
            ? function () {
                return Ji(e, a, r);
              }
            : function () {
                return Promise.resolve();
              },
          c = (
            null === (n = e.variantChildren) || void 0 === n ? void 0 : n.size
          )
            ? function () {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  a = l,
                  i = a.delayChildren,
                  o = void 0 === i ? 0 : i,
                  u = a.staggerChildren,
                  s = a.staggerDirection;
                return eo(e, t, o + n, u, s, r);
              }
            : function () {
                return Promise.resolve();
              },
          f = l,
          d = f.when;
        if (d) {
          var p = "beforeChildren" === d ? [u, c] : [c, u],
            h = s(p, 2),
            v = h[0],
            m = h[1];
          return v().then(m);
        }
        return Promise.all([u(), c(r.delay)]);
      }
      function Ji(e, t) {
        var n,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = r.delay,
          i = void 0 === a ? 0 : a,
          o = r.transitionOverride,
          l = r.type,
          u = e.makeTargetAnimatable(t),
          s = u.transition,
          c = void 0 === s ? e.getDefaultTransition() : s,
          f = u.transitionEnd,
          d = En(u, Gi),
          p = e.getValue("willChange");
        o && (c = o);
        var h = [],
          v =
            l &&
            (null === (n = e.animationState) || void 0 === n
              ? void 0
              : n.getState()[l]),
          m = function (t) {
            var n = e.getValue(t),
              r = d[t];
            if (!n || void 0 === r || (v && no(v, t))) return "continue";
            var a = ct({ delay: i, elapsed: 0 }, c);
            if (
              (e.shouldReduceMotion &&
                Bt.has(t) &&
                (a = ct(ct({}, a), {}, { type: !1, delay: 0 })),
              !n.hasAnimated)
            ) {
              var o = e.getProps()[Ra];
              o && (a.elapsed = ja(o, t));
            }
            var l = n.start(Ki(t, n, r, a));
            Ta(p) &&
              (p.add(t),
              (l = l.then(function () {
                return p.remove(t);
              }))),
              h.push(l);
          };
        for (var y in d) m(y);
        return Promise.all(h).then(function () {
          f && Ca(e, f);
        });
      }
      function eo(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          i = arguments.length > 5 ? arguments[5] : void 0,
          o = [],
          l = (e.variantChildren.size - 1) * r,
          u =
            1 === a
              ? function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return e * r;
                }
              : function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return l - e * r;
                };
        return (
          Array.from(e.variantChildren)
            .sort(to)
            .forEach(function (e, r) {
              o.push(
                Zi(e, t, ct(ct({}, i), {}, { delay: n + u(r) })).then(
                  function () {
                    return e.notify("AnimationComplete", t);
                  }
                )
              );
            }),
          Promise.all(o)
        );
      }
      function to(e, t) {
        return e.sortNodePosition(t);
      }
      function no(e, t) {
        var n = e.protectedKeys,
          r = e.needsAnimating,
          a = n.hasOwnProperty(t) && !0 !== r[t];
        return (r[t] = !1), a;
      }
      var ro = ["transition", "transitionEnd"],
        ao = [
          qn.Animate,
          qn.InView,
          qn.Focus,
          qn.Hover,
          qn.Tap,
          qn.Drag,
          qn.Exit,
        ],
        io = [].concat(ao).reverse(),
        oo = ao.length;
      function lo(e) {
        return function (t) {
          return Promise.all(
            t.map(function (t) {
              var n = t.animation,
                r = t.options;
              return (function (e, t) {
                var n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if ((e.notify("AnimationStart", t), Array.isArray(t))) {
                  var a = t.map(function (t) {
                    return Zi(e, t, r);
                  });
                  n = Promise.all(a);
                } else if ("string" === typeof t) n = Zi(e, t, r);
                else {
                  var i = "function" === typeof t ? ka(e, t, r.custom) : t;
                  n = Ji(e, i, r);
                }
                return n.then(function () {
                  return e.notify("AnimationComplete", t);
                });
              })(e, n, r);
            })
          );
        };
      }
      function uo(e) {
        var t = lo(e),
          n = (function () {
            var e;
            return (
              ut((e = {}), qn.Animate, so(!0)),
              ut(e, qn.InView, so()),
              ut(e, qn.Hover, so()),
              ut(e, qn.Tap, so()),
              ut(e, qn.Drag, so()),
              ut(e, qn.Focus, so()),
              ut(e, qn.Exit, so()),
              e
            );
          })(),
          r = !0,
          a = function (t, n) {
            var r = ka(e, n);
            if (r) {
              r.transition;
              var a = r.transitionEnd,
                i = En(r, ro);
              t = ct(ct(ct({}, t), i), a);
            }
            return t;
          };
        function i(i, o) {
          for (
            var l = e.getProps(),
              u = e.getVariantContext(!0) || {},
              s = [],
              c = new Set(),
              d = {},
              p = 1 / 0,
              h = function () {
                var t = io[v],
                  h = n[t],
                  m = void 0 !== l[t] ? l[t] : u[t],
                  y = bt(m),
                  g = t === o ? h.isActive : null;
                !1 === g && (p = v);
                var b = m === u[t] && m !== l[t] && y;
                if (
                  (b && r && e.manuallyAnimateOnMount && (b = !1),
                  (h.protectedKeys = ct({}, d)),
                  (!h.isActive && null === g) ||
                    (!m && !h.prevProp) ||
                    xt(m) ||
                    "boolean" === typeof m)
                )
                  return "continue";
                var x = (function (e, t) {
                    if ("string" === typeof t) return t !== e;
                    if (Array.isArray(t)) return !Pr(t, e);
                    return !1;
                  })(h.prevProp, m),
                  w = x || (t === o && h.isActive && !b && y) || (v > p && y),
                  k = Array.isArray(m) ? m : [m],
                  S = k.reduce(a, {});
                !1 === g && (S = {});
                var E = h.prevResolvedValues,
                  C = void 0 === E ? {} : E,
                  P = ct(ct({}, C), S),
                  T = function (e) {
                    (w = !0), c.delete(e), (h.needsAnimating[e] = !0);
                  };
                for (var j in P) {
                  var R = S[j],
                    L = C[j];
                  d.hasOwnProperty(j) ||
                    (R !== L
                      ? Un(R) && Un(L)
                        ? !Pr(R, L) || x
                          ? T(j)
                          : (h.protectedKeys[j] = !0)
                        : void 0 !== R
                        ? T(j)
                        : c.add(j)
                      : void 0 !== R && c.has(j)
                      ? T(j)
                      : (h.protectedKeys[j] = !0));
                }
                (h.prevProp = m),
                  (h.prevResolvedValues = S),
                  h.isActive && (d = ct(ct({}, d), S)),
                  r && e.blockInitialAnimation && (w = !1),
                  w &&
                    !b &&
                    s.push.apply(
                      s,
                      f(
                        k.map(function (e) {
                          return { animation: e, options: ct({ type: t }, i) };
                        })
                      )
                    );
              },
              v = 0;
            v < oo;
            v++
          )
            h();
          if (c.size) {
            var m = {};
            c.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (m[t] = n);
            }),
              s.push({ animation: m });
          }
          var y = Boolean(s.length);
          return (
            r && !1 === l.initial && !e.manuallyAnimateOnMount && (y = !1),
            (r = !1),
            y ? t(s) : Promise.resolve()
          );
        }
        return {
          animateChanges: i,
          setActive: function (t, r, a) {
            var o;
            if (n[t].isActive === r) return Promise.resolve();
            null === (o = e.variantChildren) ||
              void 0 === o ||
              o.forEach(function (e) {
                var n;
                return null === (n = e.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(t, r);
              }),
              (n[t].isActive = r);
            var l = i(a, t);
            for (var u in n) n[u].protectedKeys = {};
            return l;
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: function () {
            return n;
          },
        };
      }
      function so() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var co = {
          animation: Sr(function (e) {
            var n = e.visualElement,
              r = e.animate;
            n.animationState || (n.animationState = uo(n)),
              xt(r) &&
                (0, t.useEffect)(
                  function () {
                    return r.subscribe(n);
                  },
                  [r]
                );
          }),
          exit: Sr(function (e) {
            var n = e.custom,
              r = e.visualElement,
              a = s(Cr(), 2),
              i = a[0],
              o = a[1],
              l = (0, t.useContext)(pt);
            (0, t.useEffect)(
              function () {
                r.isPresent = i;
                var e =
                  r.animationState &&
                  r.animationState.setActive(qn.Exit, !i, {
                    custom: (l && l.custom) || n,
                  });
                e && !i && e.then(o);
              },
              [i]
            );
          }),
        },
        fo = function (e, t) {
          return Math.abs(e - t);
        };
      function po(e, t) {
        var n = fo(e.x, t.x),
          r = fo(e.y, t.y);
        return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
      }
      var ho = (function () {
        function e(t, n) {
          var r = this,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = a.transformPagePoint;
          if (
            (d(this, e),
            (this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var e = yo(r.lastMoveEventInfo, r.history),
                  t = null !== r.startEvent,
                  n = po(e.offset, { x: 0, y: 0 }) >= 3;
                if (t || n) {
                  var a = e.point,
                    i = jr.timestamp;
                  r.history.push(ct(ct({}, a), {}, { timestamp: i }));
                  var o = r.handlers,
                    l = o.onStart,
                    u = o.onMove;
                  t ||
                    (l && l(r.lastMoveEvent, e),
                    (r.startEvent = r.lastMoveEvent)),
                    u && u(r.lastMoveEvent, e);
                }
              }
            }),
            (this.handlePointerMove = function (e, t) {
              Gn(e) &&
                ((r.lastMoveEvent = e),
                (r.lastMoveEventInfo = vo(t, r.transformPagePoint)),
                Vr.update(r.updatePoint, !0));
            }),
            (this.handlePointerUp = function (e, t) {
              if (Gn(e)) {
                r.end();
                var n = r.handlers,
                  a = n.onEnd,
                  i = n.onSessionEnd,
                  o = yo(vo(t, r.transformPagePoint), r.history);
                r.startEvent && a && a(e, o), i && i(e, o);
              }
            }),
            Gn(t))
          ) {
            (this.handlers = n), (this.transformPagePoint = i);
            var o = Zn(t),
              l = vo(o, this.transformPagePoint),
              u = l.point,
              s = jr.timestamp;
            this.history = [ct(ct({}, u), {}, { timestamp: s })];
            var c = n.onSessionStart;
            c && c(t, yo(l, this.history)),
              (this.removeListeners = fr(
                er(window, "pointermove", this.handlePointerMove),
                er(window, "pointerup", this.handlePointerUp),
                er(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          m(e, [
            {
              key: "updateHandlers",
              value: function (e) {
                this.handlers = e;
              },
            },
            {
              key: "end",
              value: function () {
                this.removeListeners && this.removeListeners(),
                  Fr.update(this.updatePoint);
              },
            },
          ]),
          e
        );
      })();
      function vo(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function mo(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function yo(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: mo(n, bo(t)),
          offset: mo(n, go(t)),
          velocity: xo(t, 0.1),
        };
      }
      function go(e) {
        return e[0];
      }
      function bo(e) {
        return e[e.length - 1];
      }
      function xo(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, a = bo(e);
          n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > La(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var i = (a.timestamp - r.timestamp) / 1e3;
        if (0 === i) return { x: 0, y: 0 };
        var o = { x: (a.x - r.x) / i, y: (a.y - r.y) / i };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
      }
      function wo(e) {
        return e.max - e.min;
      }
      function ko(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return Math.abs(e - t) <= n;
      }
      function So(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (e.origin = r),
          (e.originPoint = Va(t.min, t.max, e.origin)),
          (e.scale = wo(n) / wo(t)),
          (ko(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = Va(n.min, n.max, e.origin) - e.originPoint),
          (ko(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function Eo(e, t, n, r) {
        So(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          So(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function Co(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + wo(t));
      }
      function Po(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + wo(t));
      }
      function To(e, t, n) {
        Po(e.x, t.x, n.x), Po(e.y, t.y, n.y);
      }
      function jo(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function Ro(e, t) {
        var n = t.min - e.min,
          r = t.max - e.max;
        if (t.max - t.min < e.max - e.min) {
          var a = [r, n];
          (n = a[0]), (r = a[1]);
        }
        return { min: n, max: r };
      }
      var Lo = 0.35;
      function Oo(e, t, n) {
        return { min: No(e, t), max: No(e, n) };
      }
      function No(e, t) {
        return "number" === typeof e ? e : e[t] || 0;
      }
      function _o(e) {
        return [e("x"), e("y")];
      }
      function Mo(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      function Do(e) {
        return void 0 === e || 1 === e;
      }
      function Ao(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !Do(t) || !Do(n) || !Do(r);
      }
      function Vo(e) {
        return Ao(e) || Fo(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function Fo(e) {
        return Io(e.x) || Io(e.y);
      }
      function Io(e) {
        return e && "0%" !== e;
      }
      function zo(e, t, n) {
        return n + t * (e - n);
      }
      function Uo(e, t, n, r, a) {
        return void 0 !== a && (e = zo(e, a, r)), zo(e, n, r) + t;
      }
      function Bo(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0;
        (e.min = Uo(e.min, t, n, r, a)), (e.max = Uo(e.max, t, n, r, a));
      }
      function Wo(e, t) {
        var n = t.x,
          r = t.y;
        Bo(e.x, n.translate, n.scale, n.originPoint),
          Bo(e.y, r.translate, r.scale, r.originPoint);
      }
      function Ho(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function $o(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function qo(e, t, n) {
        var r = s(n, 3),
          a = r[0],
          i = r[1],
          o = r[2],
          l = void 0 !== t[o] ? t[o] : 0.5,
          u = Va(e.min, e.max, l);
        Bo(e, t[a], t[i], u, t.scale);
      }
      var Qo = ["x", "scaleX", "originX"],
        Yo = ["y", "scaleY", "originY"];
      function Xo(e, t) {
        qo(e.x, t, Qo), qo(e.y, t, Yo);
      }
      function Ko(e, t) {
        return Mo(
          (function (e, t) {
            if (!t) return e;
            var n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var Go = new WeakMap(),
        Zo = (function () {
          function e(t) {
            d(this, e),
              (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t);
          }
          return (
            m(e, [
              {
                key: "start",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = n.snapToCursor,
                    a = void 0 !== r && r;
                  if (!1 !== this.visualElement.isPresent) {
                    var i = function (e) {
                        t.stopAnimation(),
                          a && t.snapToCursor(Zn(e, "page").point);
                      },
                      o = function (e, n) {
                        var r,
                          a = t.getProps(),
                          i = a.drag,
                          o = a.dragPropagation,
                          l = a.onDragStart;
                        (!i ||
                          o ||
                          (t.openGlobalLock && t.openGlobalLock(),
                          (t.openGlobalLock = ir(i)),
                          t.openGlobalLock)) &&
                          ((t.isDragging = !0),
                          (t.currentDirection = null),
                          t.resolveConstraints(),
                          t.visualElement.projection &&
                            ((t.visualElement.projection.isAnimationBlocked =
                              !0),
                            (t.visualElement.projection.target = void 0)),
                          _o(function (e) {
                            var n,
                              r,
                              a = t.getAxisMotionValue(e).get() || 0;
                            if (ln.test(a)) {
                              var i =
                                null ===
                                  (r =
                                    null === (n = t.visualElement.projection) ||
                                    void 0 === n
                                      ? void 0
                                      : n.layout) || void 0 === r
                                  ? void 0
                                  : r.layoutBox[e];
                              if (i) a = wo(i) * (parseFloat(a) / 100);
                            }
                            t.originPoint[e] = a;
                          }),
                          null === l || void 0 === l || l(e, n),
                          null === (r = t.visualElement.animationState) ||
                            void 0 === r ||
                            r.setActive(qn.Drag, !0));
                      },
                      l = function (e, n) {
                        var r = t.getProps(),
                          a = r.dragPropagation,
                          i = r.dragDirectionLock,
                          o = r.onDirectionLock,
                          l = r.onDrag;
                        if (a || t.openGlobalLock) {
                          var u = n.offset;
                          if (i && null === t.currentDirection)
                            return (
                              (t.currentDirection = el(u)),
                              void (
                                null !== t.currentDirection &&
                                (null === o ||
                                  void 0 === o ||
                                  o(t.currentDirection))
                              )
                            );
                          t.updateAxis("x", n.point, u),
                            t.updateAxis("y", n.point, u),
                            t.visualElement.render(),
                            null === l || void 0 === l || l(e, n);
                        }
                      },
                      u = function (e, n) {
                        return t.stop(e, n);
                      };
                    this.panSession = new ho(
                      e,
                      {
                        onSessionStart: i,
                        onStart: o,
                        onMove: l,
                        onSessionEnd: u,
                      },
                      {
                        transformPagePoint:
                          this.visualElement.getTransformPagePoint(),
                      }
                    );
                  }
                },
              },
              {
                key: "stop",
                value: function (e, t) {
                  var n = this.isDragging;
                  if ((this.cancel(), n)) {
                    var r = t.velocity;
                    this.startAnimation(r);
                    var a = this.getProps().onDragEnd;
                    null === a || void 0 === a || a(e, t);
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  var e, t;
                  (this.isDragging = !1),
                    this.visualElement.projection &&
                      (this.visualElement.projection.isAnimationBlocked = !1),
                    null === (e = this.panSession) || void 0 === e || e.end(),
                    (this.panSession = void 0),
                    !this.getProps().dragPropagation &&
                      this.openGlobalLock &&
                      (this.openGlobalLock(), (this.openGlobalLock = null)),
                    null === (t = this.visualElement.animationState) ||
                      void 0 === t ||
                      t.setActive(qn.Drag, !1);
                },
              },
              {
                key: "updateAxis",
                value: function (e, t, n) {
                  var r = this.getProps().drag;
                  if (n && Jo(e, r, this.currentDirection)) {
                    var a = this.getAxisMotionValue(e),
                      i = this.originPoint[e] + n[e];
                    this.constraints &&
                      this.constraints[e] &&
                      (i = (function (e, t, n) {
                        var r = t.min,
                          a = t.max;
                        return (
                          void 0 !== r && e < r
                            ? (e = n ? Va(r, e, n.min) : Math.max(e, r))
                            : void 0 !== a &&
                              e > a &&
                              (e = n ? Va(a, e, n.max) : Math.min(e, a)),
                          e
                        );
                      })(i, this.constraints[e], this.elastic[e])),
                      a.set(i);
                  }
                },
              },
              {
                key: "resolveConstraints",
                value: function () {
                  var e = this,
                    t = this.getProps(),
                    n = t.dragConstraints,
                    r = t.dragElastic,
                    a = (this.visualElement.projection || {}).layout,
                    i = this.constraints;
                  n && gt(n)
                    ? this.constraints ||
                      (this.constraints = this.resolveRefConstraints())
                    : (this.constraints =
                        !(!n || !a) &&
                        (function (e, t) {
                          var n = t.top,
                            r = t.left,
                            a = t.bottom,
                            i = t.right;
                          return { x: jo(e.x, r, i), y: jo(e.y, n, a) };
                        })(a.layoutBox, n)),
                    (this.elastic = (function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : Lo;
                      return (
                        !1 === e ? (e = 0) : !0 === e && (e = Lo),
                        { x: Oo(e, "left", "right"), y: Oo(e, "top", "bottom") }
                      );
                    })(r)),
                    i !== this.constraints &&
                      a &&
                      this.constraints &&
                      !this.hasMutatedConstraints &&
                      _o(function (t) {
                        e.getAxisMotionValue(t) &&
                          (e.constraints[t] = (function (e, t) {
                            var n = {};
                            return (
                              void 0 !== t.min && (n.min = t.min - e.min),
                              void 0 !== t.max && (n.max = t.max - e.min),
                              n
                            );
                          })(a.layoutBox[t], e.constraints[t]));
                      });
                },
              },
              {
                key: "resolveRefConstraints",
                value: function () {
                  var e = this.getProps(),
                    t = e.dragConstraints,
                    n = e.onMeasureDragConstraints;
                  if (!t || !gt(t)) return !1;
                  var r = t.current,
                    a = this.visualElement.projection;
                  if (!a || !a.layout) return !1;
                  var i = (function (e, t, n) {
                      var r = Ko(e, n),
                        a = t.scroll;
                      return a && ($o(r.x, a.offset.x), $o(r.y, a.offset.y)), r;
                    })(r, a.root, this.visualElement.getTransformPagePoint()),
                    o = (function (e, t) {
                      return { x: Ro(e.x, t.x), y: Ro(e.y, t.y) };
                    })(a.layout.layoutBox, i);
                  if (n) {
                    var l = n(
                      (function (e) {
                        var t = e.x,
                          n = e.y;
                        return {
                          top: n.min,
                          right: t.max,
                          bottom: n.max,
                          left: t.min,
                        };
                      })(o)
                    );
                    (this.hasMutatedConstraints = !!l), l && (o = Mo(l));
                  }
                  return o;
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = this,
                    n = this.getProps(),
                    r = n.drag,
                    a = n.dragMomentum,
                    i = n.dragElastic,
                    o = n.dragTransition,
                    l = n.dragSnapToOrigin,
                    u = n.onDragTransitionEnd,
                    s = this.constraints || {},
                    c = _o(function (n) {
                      if (Jo(n, r, t.currentDirection)) {
                        var u =
                          (null === s || void 0 === s ? void 0 : s[n]) || {};
                        l && (u = { min: 0, max: 0 });
                        var c = i ? 200 : 1e6,
                          f = i ? 40 : 1e7,
                          d = ct(
                            ct(
                              {
                                type: "inertia",
                                velocity: a ? e[n] : 0,
                                bounceStiffness: c,
                                bounceDamping: f,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                              },
                              o
                            ),
                            u
                          );
                        return t.startAxisValueAnimation(n, d);
                      }
                    });
                  return Promise.all(c).then(u);
                },
              },
              {
                key: "startAxisValueAnimation",
                value: function (e, t) {
                  var n = this.getAxisMotionValue(e);
                  return n.start(Ki(e, n, 0, t));
                },
              },
              {
                key: "stopAnimation",
                value: function () {
                  var e = this;
                  _o(function (t) {
                    return e.getAxisMotionValue(t).stop();
                  });
                },
              },
              {
                key: "getAxisMotionValue",
                value: function (e) {
                  var t,
                    n = "_drag" + e.toUpperCase(),
                    r = this.visualElement.getProps()[n];
                  return (
                    r ||
                    this.visualElement.getValue(
                      e,
                      (null === (t = this.visualElement.getProps().initial) ||
                      void 0 === t
                        ? void 0
                        : t[e]) || 0
                    )
                  );
                },
              },
              {
                key: "snapToCursor",
                value: function (e) {
                  var t = this;
                  _o(function (n) {
                    if (Jo(n, t.getProps().drag, t.currentDirection)) {
                      var r = t.visualElement.projection,
                        a = t.getAxisMotionValue(n);
                      if (r && r.layout) {
                        var i = r.layout.layoutBox[n],
                          o = i.min,
                          l = i.max;
                        a.set(e[n] - Va(o, l, 0.5));
                      }
                    }
                  });
                },
              },
              {
                key: "scalePositionWithinConstraints",
                value: function () {
                  var e,
                    t = this;
                  if (this.visualElement.current) {
                    var n = this.getProps(),
                      r = n.drag,
                      a = n.dragConstraints,
                      i = this.visualElement.projection;
                    if (gt(a) && i && this.constraints) {
                      this.stopAnimation();
                      var o = { x: 0, y: 0 };
                      _o(function (e) {
                        var n = t.getAxisMotionValue(e);
                        if (n) {
                          var r = n.get();
                          o[e] = (function (e, t) {
                            var n = 0.5,
                              r = wo(e),
                              a = wo(t);
                            return (
                              a > r
                                ? (n = Qa(t.min, t.max - r, e.min))
                                : r > a && (n = Qa(e.min, e.max - a, t.min)),
                              Xt(0, 1, n)
                            );
                          })({ min: r, max: r }, t.constraints[e]);
                        }
                      });
                      var l = this.visualElement.getProps().transformTemplate;
                      (this.visualElement.current.style.transform = l
                        ? l({}, "")
                        : "none"),
                        null === (e = i.root) ||
                          void 0 === e ||
                          e.updateScroll(),
                        i.updateLayout(),
                        this.resolveConstraints(),
                        _o(function (e) {
                          if (Jo(e, r, null)) {
                            var n = t.getAxisMotionValue(e),
                              a = t.constraints[e],
                              i = a.min,
                              l = a.max;
                            n.set(Va(i, l, o[e]));
                          }
                        });
                    }
                  }
                },
              },
              {
                key: "addListeners",
                value: function () {
                  var e,
                    t = this;
                  if (this.visualElement.current) {
                    Go.set(this.visualElement, this);
                    var n = er(
                        this.visualElement.current,
                        "pointerdown",
                        function (e) {
                          var n = t.getProps(),
                            r = n.drag,
                            a = n.dragListener;
                          r && (void 0 === a || a) && t.start(e);
                        }
                      ),
                      r = function () {
                        gt(t.getProps().dragConstraints) &&
                          (t.constraints = t.resolveRefConstraints());
                      },
                      a = this.visualElement.projection,
                      i = a.addEventListener("measure", r);
                    a &&
                      !a.layout &&
                      (null === (e = a.root) ||
                        void 0 === e ||
                        e.updateScroll(),
                      a.updateLayout()),
                      r();
                    var o = Xn(window, "resize", function () {
                        return t.scalePositionWithinConstraints();
                      }),
                      l = a.addEventListener("didUpdate", function (e) {
                        var n = e.delta,
                          r = e.hasLayoutChanged;
                        t.isDragging &&
                          r &&
                          (_o(function (e) {
                            var r = t.getAxisMotionValue(e);
                            r &&
                              ((t.originPoint[e] += n[e].translate),
                              r.set(r.get() + n[e].translate));
                          }),
                          t.visualElement.render());
                      });
                    return function () {
                      o(), n(), i(), null === l || void 0 === l || l();
                    };
                  }
                },
              },
              {
                key: "getProps",
                value: function () {
                  var e = this.visualElement.getProps(),
                    t = e.drag,
                    n = void 0 !== t && t,
                    r = e.dragDirectionLock,
                    a = void 0 !== r && r,
                    i = e.dragPropagation,
                    o = void 0 !== i && i,
                    l = e.dragConstraints,
                    u = void 0 !== l && l,
                    s = e.dragElastic,
                    c = void 0 === s ? Lo : s,
                    f = e.dragMomentum,
                    d = void 0 === f || f;
                  return ct(
                    ct({}, e),
                    {},
                    {
                      drag: n,
                      dragDirectionLock: a,
                      dragPropagation: o,
                      dragConstraints: u,
                      dragElastic: c,
                      dragMomentum: d,
                    }
                  );
                },
              },
            ]),
            e
          );
        })();
      function Jo(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      function el(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
          n = null;
        return (
          Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n
        );
      }
      var tl = {
        pan: Sr(function (e) {
          var n = e.onPan,
            r = e.onPanStart,
            a = e.onPanEnd,
            i = e.onPanSessionStart,
            o = e.visualElement,
            l = n || r || a || i,
            u = (0, t.useRef)(null),
            s = (0, t.useContext)(ft).transformPagePoint,
            c = {
              onSessionStart: i,
              onStart: r,
              onMove: n,
              onEnd: function (e, t) {
                (u.current = null), a && a(e, t);
              },
            };
          (0, t.useEffect)(function () {
            null !== u.current && u.current.updateHandlers(c);
          }),
            tr(
              o,
              "pointerdown",
              l &&
                function (e) {
                  u.current = new ho(e, c, { transformPagePoint: s });
                }
            ),
            sr(function () {
              return u.current && u.current.end();
            });
        }),
        drag: Sr(function (e) {
          var n = e.dragControls,
            r = e.visualElement,
            a = jt(function () {
              return new Zo(r);
            });
          (0, t.useEffect)(
            function () {
              return n && n.subscribe(a);
            },
            [a, n]
          ),
            (0, t.useEffect)(
              function () {
                return a.addListeners();
              },
              [a]
            );
        }),
      };
      function nl(e) {
        return "string" === typeof e && e.startsWith("var(--");
      }
      var rl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function al(e) {
        var t = rl.exec(e);
        if (!t) return [,];
        var n = s(t, 3);
        return [n[1], n[2]];
      }
      function il(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        'Max CSS variable fallback depth detected in property "'.concat(
          e,
          '". This may indicate a circular fallback dependency.'
        );
        var r = al(e),
          a = s(r, 2),
          i = a[0],
          o = a[1];
        if (i) {
          var l = window.getComputedStyle(t).getPropertyValue(i);
          return l ? l.trim() : nl(o) ? il(o, t, n + 1) : o;
        }
      }
      function ol(e, t, n) {
        var r = Object.assign(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(t),
            t)
          ),
          a = e.current;
        if (!(a instanceof Element)) return { target: r, transitionEnd: n };
        for (var i in (n && (n = ct({}, n)),
        e.values.forEach(function (e) {
          var t = e.get();
          if (nl(t)) {
            var n = il(t, a);
            n && e.set(n);
          }
        }),
        r)) {
          var o = r[i];
          if (nl(o)) {
            var l = il(o, a);
            l && ((r[i] = l), n && void 0 === n[i] && (n[i] = o));
          }
        }
        return { target: r, transitionEnd: n };
      }
      var ll,
        ul = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        sl = function (e) {
          return ul.has(e);
        },
        cl = function (e, t) {
          e.set(t, !1), e.set(t);
        },
        fl = function (e) {
          return e === Kt || e === un;
        };
      !(function (e) {
        (e.width = "width"),
          (e.height = "height"),
          (e.left = "left"),
          (e.right = "right"),
          (e.top = "top"),
          (e.bottom = "bottom");
      })(ll || (ll = {}));
      var dl = function (e, t) {
          return parseFloat(e.split(", ")[t]);
        },
        pl = function (e, t) {
          return function (n, r) {
            var a = r.transform;
            if ("none" === a || !a) return 0;
            var i = a.match(/^matrix3d\((.+)\)$/);
            if (i) return dl(i[1], t);
            var o = a.match(/^matrix\((.+)\)$/);
            return o ? dl(o[1], e) : 0;
          };
        },
        hl = new Set(["x", "y", "z"]),
        vl = Ut.filter(function (e) {
          return !hl.has(e);
        });
      function ml(e) {
        var t = [];
        return (
          vl.forEach(function (n) {
            var r = e.getValue(n);
            void 0 !== r &&
              (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
          }),
          t.length && e.render(),
          t
        );
      }
      var yl = {
          width: function (e, t) {
            var n = e.x,
              r = t.paddingLeft,
              a = void 0 === r ? "0" : r,
              i = t.paddingRight,
              o = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(a) - parseFloat(o);
          },
          height: function (e, t) {
            var n = e.y,
              r = t.paddingTop,
              a = void 0 === r ? "0" : r,
              i = t.paddingBottom,
              o = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(a) - parseFloat(o);
          },
          top: function (e, t) {
            var n = t.top;
            return parseFloat(n);
          },
          left: function (e, t) {
            var n = t.left;
            return parseFloat(n);
          },
          bottom: function (e, t) {
            var n = e.y,
              r = t.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (e, t) {
            var n = e.x,
              r = t.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: pl(4, 13),
          y: pl(5, 14),
        },
        gl = function (e, t, n) {
          var r = t.measureViewportBox(),
            a = t.current,
            i = getComputedStyle(a),
            o = i.display,
            l = {};
          "none" === o && t.setStaticValue("display", e.display || "block"),
            n.forEach(function (e) {
              l[e] = yl[e](r, i);
            }),
            t.render();
          var u = t.measureViewportBox();
          return (
            n.forEach(function (n) {
              var r = t.getValue(n);
              cl(r, l[n]), (e[n] = yl[n](u, i));
            }),
            e
          );
        };
      function bl(e, t, n, r) {
        return (function (e) {
          return Object.keys(e).some(sl);
        })(t)
          ? (function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
              (t = ct({}, t)), (r = ct({}, r));
              var a = Object.keys(t).filter(sl),
                i = [],
                o = !1,
                l = [];
              if (
                (a.forEach(function (a) {
                  var u = e.getValue(a);
                  if (e.hasValue(a)) {
                    var s,
                      c = n[a],
                      f = ba(c),
                      d = t[a];
                    if (Un(d)) {
                      var p = d.length,
                        h = null === d[0] ? 1 : 0;
                      (c = d[h]), (f = ba(c));
                      for (var v = h; v < p; v++)
                        s ? ba(d[v]) : (s = ba(d[v])) === f || (fl(f) && fl(s));
                    } else s = ba(d);
                    if (f !== s)
                      if (fl(f) && fl(s)) {
                        var m = u.get();
                        "string" === typeof m && u.set(parseFloat(m)),
                          "string" === typeof d
                            ? (t[a] = parseFloat(d))
                            : Array.isArray(d) &&
                              s === un &&
                              (t[a] = d.map(parseFloat));
                      } else
                        (null === f || void 0 === f ? void 0 : f.transform) &&
                        (null === s || void 0 === s ? void 0 : s.transform) &&
                        (0 === c || 0 === d)
                          ? 0 === c
                            ? u.set(s.transform(c))
                            : (t[a] = f.transform(d))
                          : (o || ((i = ml(e)), (o = !0)),
                            l.push(a),
                            (r[a] = void 0 !== r[a] ? r[a] : t[a]),
                            cl(u, d));
                  }
                }),
                l.length)
              ) {
                var u = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                  c = gl(t, e, l);
                return (
                  i.length &&
                    i.forEach(function (t) {
                      var n = s(t, 2),
                        r = n[0],
                        a = n[1];
                      e.getValue(r).set(a);
                    }),
                  e.render(),
                  ht && null !== u && window.scrollTo({ top: u }),
                  { target: c, transitionEnd: r }
                );
              }
              return { target: t, transitionEnd: r };
            })(e, t, n, r)
          : { target: t, transitionEnd: r };
      }
      var xl = { current: null },
        wl = { current: !1 };
      var kl = ["willChange"],
        Sl = Object.keys(Tt),
        El = Sl.length,
        Cl = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "Unmount",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        Pl = (function () {
          function e(t) {
            var n = this,
              r = t.parent,
              a = t.props,
              i = t.reducedMotionConfig,
              o = t.visualState,
              l =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            d(this, e),
              (this.current = null),
              (this.children = new Set()),
              (this.isVariantNode = !1),
              (this.isControllingVariants = !1),
              (this.shouldReduceMotion = null),
              (this.values = new Map()),
              (this.isPresent = !0),
              (this.valueSubscriptions = new Map()),
              (this.prevMotionValues = {}),
              (this.events = {}),
              (this.propEventSubscriptions = {}),
              (this.notifyUpdate = function () {
                return n.notify("Update", n.latestValues);
              }),
              (this.render = function () {
                n.current &&
                  (n.triggerBuild(),
                  n.renderInstance(
                    n.current,
                    n.renderState,
                    n.props.style,
                    n.projection
                  ));
              }),
              (this.scheduleRender = function () {
                return Vr.render(n.render, !1, !0);
              });
            var u = o.latestValues,
              s = o.renderState;
            (this.latestValues = u),
              (this.baseTarget = ct({}, u)),
              (this.initialValues = a.initial ? ct({}, u) : {}),
              (this.renderState = s),
              (this.parent = r),
              (this.props = a),
              (this.depth = r ? r.depth + 1 : 0),
              (this.reducedMotionConfig = i),
              (this.options = l),
              (this.isControllingVariants = kt(a)),
              (this.isVariantNode = St(a)),
              this.isVariantNode && (this.variantChildren = new Set()),
              (this.manuallyAnimateOnMount = Boolean(r && r.current));
            var c = this.scrapeMotionValuesFromProps(a),
              f = c.willChange,
              p = En(c, kl);
            for (var h in p) {
              var v = p[h];
              void 0 !== u[h] && Ht(v) && (v.set(u[h], !1), Ta(f) && f.add(h));
            }
          }
          return (
            m(e, [
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e) {
                  return {};
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var t,
                    n = this;
                  (this.current = e),
                    this.projection && this.projection.mount(e),
                    this.parent &&
                      this.isVariantNode &&
                      !this.isControllingVariants &&
                      (this.removeFromVariantTree =
                        null === (t = this.parent) || void 0 === t
                          ? void 0
                          : t.addVariantChild(this)),
                    this.values.forEach(function (e, t) {
                      return n.bindToMotionValue(t, e);
                    }),
                    wl.current ||
                      (function () {
                        if (((wl.current = !0), ht))
                          if (window.matchMedia) {
                            var e = window.matchMedia(
                                "(prefers-reduced-motion)"
                              ),
                              t = function () {
                                return (xl.current = e.matches);
                              };
                            e.addListener(t), t();
                          } else xl.current = !1;
                      })(),
                    (this.shouldReduceMotion =
                      "never" !== this.reducedMotionConfig &&
                      ("always" === this.reducedMotionConfig || xl.current)),
                    this.parent && this.parent.children.add(this),
                    this.setProps(this.props);
                },
              },
              {
                key: "unmount",
                value: function () {
                  var e, t, n;
                  for (var r in (null === (e = this.projection) ||
                    void 0 === e ||
                    e.unmount(),
                  Fr.update(this.notifyUpdate),
                  Fr.render(this.render),
                  this.valueSubscriptions.forEach(function (e) {
                    return e();
                  }),
                  null === (t = this.removeFromVariantTree) ||
                    void 0 === t ||
                    t.call(this),
                  null === (n = this.parent) ||
                    void 0 === n ||
                    n.children.delete(this),
                  this.events))
                    this.events[r].clear();
                  this.current = null;
                },
              },
              {
                key: "bindToMotionValue",
                value: function (e, t) {
                  var n = this,
                    r = Bt.has(e),
                    a = t.on("change", function (t) {
                      (n.latestValues[e] = t),
                        n.props.onUpdate && Vr.update(n.notifyUpdate, !1, !0),
                        r &&
                          n.projection &&
                          (n.projection.isTransformDirty = !0);
                    }),
                    i = t.on("renderRequest", this.scheduleRender);
                  this.valueSubscriptions.set(e, function () {
                    a(), i();
                  });
                },
              },
              {
                key: "sortNodePosition",
                value: function (e) {
                  return this.current &&
                    this.sortInstanceNodePosition &&
                    this.type === e.type
                    ? this.sortInstanceNodePosition(this.current, e.current)
                    : 0;
                },
              },
              {
                key: "loadFeatures",
                value: function (e, n, r, a, i, o) {
                  var l = this,
                    u = [];
                  for (var s = 0; s < El; s++) {
                    var c = Sl[s],
                      f = Tt[c],
                      d = f.isEnabled,
                      p = f.Component;
                    d(e) &&
                      p &&
                      u.push(
                        (0, t.createElement)(
                          p,
                          ct(ct({ key: c }, e), {}, { visualElement: this })
                        )
                      );
                  }
                  if (!this.projection && i) {
                    this.projection = new i(
                      a,
                      this.latestValues,
                      this.parent && this.parent.projection
                    );
                    var h = e.layoutId,
                      v = e.layout,
                      m = e.drag,
                      y = e.dragConstraints,
                      g = e.layoutScroll;
                    this.projection.setOptions({
                      layoutId: h,
                      layout: v,
                      alwaysMeasureLayout: Boolean(m) || (y && gt(y)),
                      visualElement: this,
                      scheduleRender: function () {
                        return l.scheduleRender();
                      },
                      animationType: "string" === typeof v ? v : "both",
                      initialPromotionConfig: o,
                      layoutScroll: g,
                    });
                  }
                  return u;
                },
              },
              {
                key: "triggerBuild",
                value: function () {
                  this.build(
                    this.renderState,
                    this.latestValues,
                    this.options,
                    this.props
                  );
                },
              },
              {
                key: "measureViewportBox",
                value: function () {
                  return this.current
                    ? this.measureInstanceViewportBox(this.current, this.props)
                    : { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                },
              },
              {
                key: "getStaticValue",
                value: function (e) {
                  return this.latestValues[e];
                },
              },
              {
                key: "setStaticValue",
                value: function (e, t) {
                  this.latestValues[e] = t;
                },
              },
              {
                key: "makeTargetAnimatable",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  return this.makeTargetAnimatableFromInstance(
                    e,
                    this.props,
                    t
                  );
                },
              },
              {
                key: "setProps",
                value: function (e) {
                  (e.transformTemplate || this.props.transformTemplate) &&
                    this.scheduleRender(),
                    (this.props = e);
                  for (var t = 0; t < Cl.length; t++) {
                    var n = Cl[t];
                    this.propEventSubscriptions[n] &&
                      (this.propEventSubscriptions[n](),
                      delete this.propEventSubscriptions[n]);
                    var r = e["on" + n];
                    r && (this.propEventSubscriptions[n] = this.on(n, r));
                  }
                  this.prevMotionValues = (function (e, t, n) {
                    var r = t.willChange;
                    for (var a in t) {
                      var i = t[a],
                        o = n[a];
                      if (Ht(i)) e.addValue(a, i), Ta(r) && r.add(a);
                      else if (Ht(o))
                        e.addValue(a, Xr(i, { owner: e })),
                          Ta(r) && r.remove(a);
                      else if (o !== i)
                        if (e.hasValue(a)) {
                          var l = e.getValue(a);
                          !l.hasAnimated && l.set(i);
                        } else {
                          var u = e.getStaticValue(a);
                          e.addValue(a, Xr(void 0 !== u ? u : i));
                        }
                    }
                    for (var s in n) void 0 === t[s] && e.removeValue(s);
                    return t;
                  })(
                    this,
                    this.scrapeMotionValuesFromProps(e),
                    this.prevMotionValues
                  );
                },
              },
              {
                key: "getProps",
                value: function () {
                  return this.props;
                },
              },
              {
                key: "getVariant",
                value: function (e) {
                  var t;
                  return null === (t = this.props.variants) || void 0 === t
                    ? void 0
                    : t[e];
                },
              },
              {
                key: "getDefaultTransition",
                value: function () {
                  return this.props.transition;
                },
              },
              {
                key: "getTransformPagePoint",
                value: function () {
                  return this.props.transformPagePoint;
                },
              },
              {
                key: "getClosestVariantNode",
                value: function () {
                  var e;
                  return this.isVariantNode
                    ? this
                    : null === (e = this.parent) || void 0 === e
                    ? void 0
                    : e.getClosestVariantNode();
                },
              },
              {
                key: "getVariantContext",
                value: function () {
                  var e,
                    t,
                    n =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  if (n)
                    return null === (e = this.parent) || void 0 === e
                      ? void 0
                      : e.getVariantContext();
                  if (!this.isControllingVariants) {
                    var r =
                      (null === (t = this.parent) || void 0 === t
                        ? void 0
                        : t.getVariantContext()) || {};
                    return (
                      void 0 !== this.props.initial &&
                        (r.initial = this.props.initial),
                      r
                    );
                  }
                  for (var a = {}, i = 0; i < jl; i++) {
                    var o = Tl[i],
                      l = this.props[o];
                    (bt(l) || !1 === l) && (a[o] = l);
                  }
                  return a;
                },
              },
              {
                key: "addVariantChild",
                value: function (e) {
                  var t,
                    n = this.getClosestVariantNode();
                  if (n)
                    return (
                      null === (t = n.variantChildren) ||
                        void 0 === t ||
                        t.add(e),
                      function () {
                        return n.variantChildren.delete(e);
                      }
                    );
                },
              },
              {
                key: "addValue",
                value: function (e, t) {
                  this.hasValue(e) && this.removeValue(e),
                    this.values.set(e, t),
                    (this.latestValues[e] = t.get()),
                    this.bindToMotionValue(e, t);
                },
              },
              {
                key: "removeValue",
                value: function (e) {
                  var t;
                  this.values.delete(e),
                    null === (t = this.valueSubscriptions.get(e)) ||
                      void 0 === t ||
                      t(),
                    this.valueSubscriptions.delete(e),
                    delete this.latestValues[e],
                    this.removeValueFromRenderState(e, this.renderState);
                },
              },
              {
                key: "hasValue",
                value: function (e) {
                  return this.values.has(e);
                },
              },
              {
                key: "getValue",
                value: function (e, t) {
                  if (this.props.values && this.props.values[e])
                    return this.props.values[e];
                  var n = this.values.get(e);
                  return (
                    void 0 === n &&
                      void 0 !== t &&
                      ((n = Xr(t, { owner: this })), this.addValue(e, n)),
                    n
                  );
                },
              },
              {
                key: "readValue",
                value: function (e) {
                  return void 0 === this.latestValues[e] && this.current
                    ? this.readValueFromInstance(this.current, e, this.options)
                    : this.latestValues[e];
                },
              },
              {
                key: "setBaseTarget",
                value: function (e, t) {
                  this.baseTarget[e] = t;
                },
              },
              {
                key: "getBaseTarget",
                value: function (e) {
                  var t,
                    n = this.props.initial,
                    r =
                      "string" === typeof n || "object" === typeof n
                        ? null === (t = zn(this.props, n)) || void 0 === t
                          ? void 0
                          : t[e]
                        : void 0;
                  if (n && void 0 !== r) return r;
                  var a = this.getBaseTargetFromProps(this.props, e);
                  return void 0 === a || Ht(a)
                    ? void 0 !== this.initialValues[e] && void 0 === r
                      ? void 0
                      : this.baseTarget[e]
                    : a;
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return (
                    this.events[e] || (this.events[e] = new $r()),
                    this.events[e].add(t)
                  );
                },
              },
              {
                key: "notify",
                value: function (e) {
                  for (
                    var t,
                      n,
                      r = arguments.length,
                      a = new Array(r > 1 ? r - 1 : 0),
                      i = 1;
                    i < r;
                    i++
                  )
                    a[i - 1] = arguments[i];
                  null === (n = this.events[e]) ||
                    void 0 === n ||
                    (t = n).notify.apply(t, a);
                },
              },
            ]),
            e
          );
        })(),
        Tl = ["initial"].concat(f(ao)),
        jl = Tl.length,
        Rl = ["transition", "transitionEnd"],
        Ll = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "sortInstanceNodePosition",
                value: function (e, t) {
                  return 2 & e.compareDocumentPosition(t) ? 1 : -1;
                },
              },
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  var n;
                  return null === (n = e.style) || void 0 === n ? void 0 : n[t];
                },
              },
              {
                key: "removeValueFromRenderState",
                value: function (e, t) {
                  var n = t.vars,
                    r = t.style;
                  delete n[e], delete r[e];
                },
              },
              {
                key: "makeTargetAnimatableFromInstance",
                value: function (e, t, n) {
                  var r = e.transition,
                    a = e.transitionEnd,
                    i = En(e, Rl),
                    o = t.transformValues,
                    l = (function (e, t, n) {
                      var r,
                        a = {};
                      for (var i in e) {
                        var o = Pa(i, t);
                        a[i] =
                          void 0 !== o
                            ? o
                            : null === (r = n.getValue(i)) || void 0 === r
                            ? void 0
                            : r.get();
                      }
                      return a;
                    })(i, r || {}, this);
                  if (
                    (o && (a && (a = o(a)), i && (i = o(i)), l && (l = o(l))),
                    n)
                  ) {
                    !(function (e, t, n) {
                      var r,
                        a,
                        i = Object.keys(t).filter(function (t) {
                          return !e.hasValue(t);
                        }),
                        o = i.length;
                      if (o)
                        for (var l = 0; l < o; l++) {
                          var u = i[l],
                            s = t[u],
                            c = null;
                          Array.isArray(s) && (c = s[0]),
                            null === c &&
                              (c =
                                null !==
                                  (a =
                                    null !== (r = n[u]) && void 0 !== r
                                      ? r
                                      : e.readValue(u)) && void 0 !== a
                                  ? a
                                  : t[u]),
                            void 0 !== c &&
                              null !== c &&
                              ("string" === typeof c &&
                              (/^\-?\d*\.?\d+$/.test(c) || Tr(c))
                                ? (c = parseFloat(c))
                                : !wa(c) && sa.test(s) && (c = ma(u, s)),
                              e.addValue(u, Xr(c, { owner: e })),
                              void 0 === n[u] && (n[u] = c),
                              null !== c && e.setBaseTarget(u, c));
                        }
                    })(this, i, l);
                    var u = (function (e, t, n, r) {
                      var a = ol(e, t, r);
                      return bl(e, (t = a.target), n, (r = a.transitionEnd));
                    })(this, i, l, a);
                    (a = u.transitionEnd), (i = u.target);
                  }
                  return ct({ transition: r, transitionEnd: a }, i);
                },
              },
            ]),
            n
          );
        })(Pl);
      var Ol = (function (e) {
        g(n, e);
        var t = k(n);
        function n() {
          return d(this, n), t.apply(this, arguments);
        }
        return (
          m(n, [
            {
              key: "readValueFromInstance",
              value: function (e, t) {
                if (Bt.has(t)) {
                  var n = va(t);
                  return (n && n.default) || 0;
                }
                var r,
                  a = ((r = e), window.getComputedStyle(r)),
                  i = (Qt(t) ? a.getPropertyValue(t) : a[t]) || 0;
                return "string" === typeof i ? i.trim() : i;
              },
            },
            {
              key: "measureInstanceViewportBox",
              value: function (e, t) {
                return Ko(e, t.transformPagePoint);
              },
            },
            {
              key: "build",
              value: function (e, t, n, r) {
                hn(e, t, n, r.transformTemplate);
              },
            },
            {
              key: "scrapeMotionValuesFromProps",
              value: function (e) {
                return Fn(e);
              },
            },
            {
              key: "renderInstance",
              value: function (e, t, n, r) {
                Dn(e, t, n, r);
              },
            },
          ]),
          n
        );
      })(Ll);
      function Nl(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = b(e));

        );
        return e;
      }
      function _l() {
        return (
          (_l =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = Nl(e, t);
                  if (r) {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    return a.get
                      ? a.get.call(arguments.length < 3 ? e : n)
                      : a.value;
                  }
                }),
          _l.apply(this, arguments)
        );
      }
      var Ml = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            var e;
            return (
              d(this, n), ((e = t.apply(this, arguments)).isSVGTag = !1), e
            );
          }
          return (
            m(n, [
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  return e[t];
                },
              },
              {
                key: "readValueFromInstance",
                value: function (e, t) {
                  var n;
                  return Bt.has(t)
                    ? (null === (n = va(t)) || void 0 === n
                        ? void 0
                        : n.default) || 0
                    : ((t = An.has(t) ? t : Mn(t)), e.getAttribute(t));
                },
              },
              {
                key: "measureInstanceViewportBox",
                value: function () {
                  return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                },
              },
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e) {
                  return In(e);
                },
              },
              {
                key: "build",
                value: function (e, t, n, r) {
                  Rn(e, t, n, this.isSVGTag, r.transformTemplate);
                },
              },
              {
                key: "renderInstance",
                value: function (e, t, n, r) {
                  Vn(e, t, 0, r);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  (this.isSVGTag = On(e.tagName)),
                    _l(b(n.prototype), "mount", this).call(this, e);
                },
              },
            ]),
            n
          );
        })(Ll),
        Dl = function (e, t) {
          return It(e)
            ? new Ml(t, { enableHardwareAcceleration: !1 })
            : new Ol(t, { enableHardwareAcceleration: !0 });
        };
      function Al(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      var Vl = {
          correct: function (e, t) {
            if (!t.target) return e;
            if ("string" === typeof e) {
              if (!un.test(e)) return e;
              e = parseFloat(e);
            }
            var n = Al(e, t.target.x),
              r = Al(e, t.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        Fl = "_$css",
        Il = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              a = e,
              i = e.includes("var("),
              o = [];
            i &&
              (e = e.replace(rl, function (e) {
                return o.push(e), Fl;
              }));
            var l = sa.parse(e);
            if (l.length > 5) return a;
            var u = sa.createTransformer(e),
              s = "number" !== typeof l[0] ? 1 : 0,
              c = r.x.scale * n.x,
              f = r.y.scale * n.y;
            (l[0 + s] /= c), (l[1 + s] /= f);
            var d = Va(c, f, 0.5);
            "number" === typeof l[2 + s] && (l[2 + s] /= d),
              "number" === typeof l[3 + s] && (l[3 + s] /= d);
            var p = u(l);
            if (i) {
              var h = 0;
              p = p.replace(Fl, function () {
                var e = o[h];
                return h++, e;
              });
            }
            return p;
          },
        },
        zl = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    r = n.visualElement,
                    a = n.layoutGroup,
                    i = n.switchLayoutGroup,
                    o = n.layoutId,
                    l = r.projection;
                  (e = Ul),
                    Object.assign(zt, e),
                    l &&
                      (a.group && a.group.add(l),
                      i && i.register && o && i.register(l),
                      l.root.didUpdate(),
                      l.addEventListener("animationComplete", function () {
                        t.safeToRemove();
                      }),
                      l.setOptions(
                        ct(
                          ct({}, l.options),
                          {},
                          {
                            onExitComplete: function () {
                              return t.safeToRemove();
                            },
                          }
                        )
                      )),
                    (Rt.hasEverUpdated = !0);
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.layoutDependency,
                    a = n.visualElement,
                    i = n.drag,
                    o = n.isPresent,
                    l = a.projection;
                  return l
                    ? ((l.isPresent = o),
                      i || e.layoutDependency !== r || void 0 === r
                        ? l.willUpdate()
                        : this.safeToRemove(),
                      e.isPresent !== o &&
                        (o
                          ? l.promote()
                          : l.relegate() ||
                            Vr.postRender(function () {
                              var e;
                              (null === (e = l.getStack()) || void 0 === e
                                ? void 0
                                : e.members.length) || t.safeToRemove();
                            })),
                      null)
                    : null;
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this.props.visualElement.projection;
                  e &&
                    (e.root.didUpdate(),
                    !e.currentAnimation && e.isLead() && this.safeToRemove());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e = this.props,
                    t = e.visualElement,
                    n = e.layoutGroup,
                    r = e.switchLayoutGroup,
                    a = t.projection;
                  a &&
                    (a.scheduleCheckAfterUnmount(),
                    (null === n || void 0 === n ? void 0 : n.group) &&
                      n.group.remove(a),
                    (null === r || void 0 === r ? void 0 : r.deregister) &&
                      r.deregister(a));
                },
              },
              {
                key: "safeToRemove",
                value: function () {
                  var e = this.props.safeToRemove;
                  null === e || void 0 === e || e();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(t.Component);
      var Ul = {
          borderRadius: ct(
            ct({}, Vl),
            {},
            {
              applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
              ],
            }
          ),
          borderTopLeftRadius: Vl,
          borderTopRightRadius: Vl,
          borderBottomLeftRadius: Vl,
          borderBottomRightRadius: Vl,
          boxShadow: Il,
        },
        Bl = {
          measureLayout: function (e) {
            var n = s(Cr(), 2),
              r = n[0],
              a = n[1],
              i = (0, t.useContext)(Ot);
            return t.createElement(
              zl,
              ct(
                ct({}, e),
                {},
                {
                  layoutGroup: i,
                  switchLayoutGroup: (0, t.useContext)(_t),
                  isPresent: r,
                  safeToRemove: a,
                }
              )
            );
          },
        };
      var Wl = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Hl = Wl.length,
        $l = function (e) {
          return "string" === typeof e ? parseFloat(e) : e;
        },
        ql = function (e) {
          return "number" === typeof e || un.test(e);
        };
      function Ql(e, t, n, r, a, i) {
        a
          ? ((e.opacity = Va(0, void 0 !== n.opacity ? n.opacity : 1, Xl(r))),
            (e.opacityExit = Va(
              void 0 !== t.opacity ? t.opacity : 1,
              0,
              Kl(r)
            )))
          : i &&
            (e.opacity = Va(
              void 0 !== t.opacity ? t.opacity : 1,
              void 0 !== n.opacity ? n.opacity : 1,
              r
            ));
        for (var o = 0; o < Hl; o++) {
          var l = "border".concat(Wl[o], "Radius"),
            u = Yl(t, l),
            s = Yl(n, l);
          if (void 0 !== u || void 0 !== s)
            u || (u = 0),
              s || (s = 0),
              0 === u || 0 === s || ql(u) === ql(s)
                ? ((e[l] = Math.max(Va($l(u), $l(s), r), 0)),
                  (ln.test(s) || ln.test(u)) && (e[l] += "%"))
                : (e[l] = s);
        }
        (t.rotate || n.rotate) &&
          (e.rotate = Va(t.rotate || 0, n.rotate || 0, r));
      }
      function Yl(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      var Xl = Gl(0, 0.5, ti),
        Kl = Gl(0.5, 0.95, Ga);
      function Gl(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(Qa(e, t, r));
        };
      }
      function Zl(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function Jl(e, t) {
        Zl(e.x, t.x), Zl(e.y, t.y);
      }
      function eu(e, t, n, r, a) {
        return (
          (e = zo((e -= t), 1 / n, r)), void 0 !== a && (e = zo(e, 1 / a, r)), e
        );
      }
      function tu(e, t, n, r, a) {
        var i = s(n, 3),
          o = i[0],
          l = i[1],
          u = i[2];
        !(function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            a = arguments.length > 4 ? arguments[4] : void 0,
            i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : e,
            o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : e;
          if (ln.test(t)) {
            (t = parseFloat(t)), (t = Va(o.min, o.max, t / 100) - o.min);
          }
          if ("number" === typeof t) {
            var l = Va(i.min, i.max, r);
            e === i && (l -= t),
              (e.min = eu(e.min, t, n, l, a)),
              (e.max = eu(e.max, t, n, l, a));
          }
        })(e, t[o], t[l], t[u], t.scale, r, a);
      }
      var nu = ["x", "scaleX", "originX"],
        ru = ["y", "scaleY", "originY"];
      function au(e, t, n, r) {
        tu(
          e.x,
          t,
          nu,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          tu(
            e.y,
            t,
            ru,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function iu(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function ou(e) {
        return iu(e.x) && iu(e.y);
      }
      function lu(e, t) {
        return (
          e.x.min === t.x.min &&
          e.x.max === t.x.max &&
          e.y.min === t.y.min &&
          e.y.max === t.y.max
        );
      }
      function uu(e) {
        return wo(e.x) / wo(e.y);
      }
      var su = (function () {
        function e() {
          d(this, e), (this.members = []);
        }
        return (
          m(e, [
            {
              key: "add",
              value: function (e) {
                Wr(this.members, e), e.scheduleRender();
              },
            },
            {
              key: "remove",
              value: function (e) {
                if (
                  (Hr(this.members, e),
                  e === this.prevLead && (this.prevLead = void 0),
                  e === this.lead)
                ) {
                  var t = this.members[this.members.length - 1];
                  t && this.promote(t);
                }
              },
            },
            {
              key: "relegate",
              value: function (e) {
                var t,
                  n = this.members.findIndex(function (t) {
                    return e === t;
                  });
                if (0 === n) return !1;
                for (var r = n; r >= 0; r--) {
                  var a = this.members[r];
                  if (!1 !== a.isPresent) {
                    t = a;
                    break;
                  }
                }
                return !!t && (this.promote(t), !0);
              },
            },
            {
              key: "promote",
              value: function (e, t) {
                var n,
                  r = this.lead;
                e !== r &&
                  ((this.prevLead = r),
                  (this.lead = e),
                  e.show(),
                  r &&
                    (r.instance && r.scheduleRender(),
                    e.scheduleRender(),
                    (e.resumeFrom = r),
                    t && (e.resumeFrom.preserveOpacity = !0),
                    r.snapshot &&
                      ((e.snapshot = r.snapshot),
                      (e.snapshot.latestValues =
                        r.animationValues || r.latestValues)),
                    (null === (n = e.root) || void 0 === n
                      ? void 0
                      : n.isUpdating) && (e.isLayoutDirty = !0),
                    !1 === e.options.crossfade && r.hide()));
              },
            },
            {
              key: "exitAnimationComplete",
              value: function () {
                this.members.forEach(function (e) {
                  var t, n, r, a, i;
                  null === (n = (t = e.options).onExitComplete) ||
                    void 0 === n ||
                    n.call(t),
                    null ===
                      (i =
                        null === (r = e.resumingFrom) || void 0 === r
                          ? void 0
                          : (a = r.options).onExitComplete) ||
                      void 0 === i ||
                      i.call(a);
                });
              },
            },
            {
              key: "scheduleRender",
              value: function () {
                this.members.forEach(function (e) {
                  e.instance && e.scheduleRender(!1);
                });
              },
            },
            {
              key: "removeLeadSnapshot",
              value: function () {
                this.lead &&
                  this.lead.snapshot &&
                  (this.lead.snapshot = void 0);
              },
            },
          ]),
          e
        );
      })();
      function cu(e, t, n) {
        var r = "",
          a = e.x.translate / t.x,
          i = e.y.translate / t.y;
        if (
          ((a || i) &&
            (r = "translate3d(".concat(a, "px, ").concat(i, "px, 0) ")),
          (1 === t.x && 1 === t.y) ||
            (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
          n)
        ) {
          var o = n.rotate,
            l = n.rotateX,
            u = n.rotateY;
          o && (r += "rotate(".concat(o, "deg) ")),
            l && (r += "rotateX(".concat(l, "deg) ")),
            u && (r += "rotateY(".concat(u, "deg) "));
        }
        var s = e.x.scale * t.x,
          c = e.y.scale * t.y;
        return (
          (1 === s && 1 === c) ||
            (r += "scale(".concat(s, ", ").concat(c, ")")),
          r || "none"
        );
      }
      var fu = function (e, t) {
          return e.depth - t.depth;
        },
        du = (function () {
          function e() {
            d(this, e), (this.children = []), (this.isDirty = !1);
          }
          return (
            m(e, [
              {
                key: "add",
                value: function (e) {
                  Wr(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  Hr(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  this.isDirty && this.children.sort(fu),
                    (this.isDirty = !1),
                    this.children.forEach(e);
                },
              },
            ]),
            e
          );
        })(),
        pu = ["", "X", "Y", "Z"],
        hu = 0;
      function vu(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          a = e.checkIsScrollRoot,
          i = e.resetTransform;
        return (function () {
          function e(t) {
            var r = this,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null === n || void 0 === n
                  ? void 0
                  : n();
            d(this, e),
              (this.id = hu++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isTransformDirty = !1),
              (this.isProjectionDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                r.isUpdating && ((r.isUpdating = !1), r.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                r.nodes.forEach(gu), r.nodes.forEach(Su), r.nodes.forEach(Eu);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.elementId = t),
              (this.latestValues = a),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [].concat(f(i.path), [i]) : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var o = 0; o < this.path.length; o++)
              this.path[o].shouldResetTransform = !0;
            this.root === this && (this.nodes = new du());
          }
          return (
            m(e, [
              {
                key: "addEventListener",
                value: function (e, t) {
                  return (
                    this.eventHandlers.has(e) ||
                      this.eventHandlers.set(e, new $r()),
                    this.eventHandlers.get(e).add(t)
                  );
                },
              },
              {
                key: "notifyListeners",
                value: function (e) {
                  for (
                    var t = this.eventHandlers.get(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  null === t || void 0 === t || t.notify.apply(t, r);
                },
              },
              {
                key: "hasListeners",
                value: function (e) {
                  return this.eventHandlers.has(e);
                },
              },
              {
                key: "registerPotentialNode",
                value: function (e, t) {
                  this.potentialNodes.set(e, t);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var n,
                    r = this,
                    a =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (!this.instance) {
                    (this.isSVG =
                      e instanceof SVGElement && "svg" !== e.tagName),
                      (this.instance = e);
                    var i = this.options,
                      o = i.layoutId,
                      l = i.layout,
                      u = i.visualElement;
                    if (
                      (u && !u.current && u.mount(e),
                      this.root.nodes.add(this),
                      null === (n = this.parent) ||
                        void 0 === n ||
                        n.children.add(this),
                      this.elementId &&
                        this.root.potentialNodes.delete(this.elementId),
                      a && (l || o) && (this.isLayoutDirty = !0),
                      t)
                    ) {
                      var s,
                        c = function () {
                          return (r.root.updateBlockedByResize = !1);
                        };
                      t(e, function () {
                        (r.root.updateBlockedByResize = !0),
                          s && s(),
                          (s = ji(c, 250)),
                          Rt.hasAnimatedSinceResize &&
                            ((Rt.hasAnimatedSinceResize = !1),
                            r.nodes.forEach(ku));
                      });
                    }
                    o && this.root.registerSharedNode(o, this),
                      !1 !== this.options.animate &&
                        u &&
                        (o || l) &&
                        this.addEventListener("didUpdate", function (e) {
                          var t,
                            n,
                            a,
                            i,
                            o,
                            l = e.delta,
                            s = e.hasLayoutChanged,
                            c = e.hasRelativeTargetChanged,
                            f = e.layout;
                          if (r.isTreeAnimationBlocked())
                            return (
                              (r.target = void 0),
                              void (r.relativeTarget = void 0)
                            );
                          var d =
                              null !==
                                (n =
                                  null !== (t = r.options.transition) &&
                                  void 0 !== t
                                    ? t
                                    : u.getDefaultTransition()) && void 0 !== n
                                ? n
                                : Ou,
                            p = u.getProps(),
                            h = p.onLayoutAnimationStart,
                            v = p.onLayoutAnimationComplete,
                            m = !r.targetLayout || !lu(r.targetLayout, f) || c,
                            y = !s && c;
                          if (
                            (null === (a = r.resumeFrom) || void 0 === a
                              ? void 0
                              : a.instance) ||
                            y ||
                            (s && (m || !r.currentAnimation))
                          ) {
                            r.resumeFrom &&
                              ((r.resumingFrom = r.resumeFrom),
                              (r.resumingFrom.resumingFrom = void 0)),
                              r.setAnimationOrigin(l, y);
                            var g = ct(
                              ct({}, Bi(d, "layout")),
                              {},
                              { onPlay: h, onComplete: v }
                            );
                            u.shouldReduceMotion &&
                              ((g.delay = 0), (g.type = !1)),
                              r.startAnimation(g);
                          } else s || 0 !== r.animationProgress || ku(r), r.isLead() && (null === (o = (i = r.options).onExitComplete) || void 0 === o || o.call(i));
                          r.targetLayout = f;
                        });
                  }
                },
              },
              {
                key: "unmount",
                value: function () {
                  var e, t;
                  this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this),
                    null === (e = this.getStack()) ||
                      void 0 === e ||
                      e.remove(this),
                    null === (t = this.parent) ||
                      void 0 === t ||
                      t.children.delete(this),
                    (this.instance = void 0),
                    Fr.preRender(this.updateProjection);
                },
              },
              {
                key: "blockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !0;
                },
              },
              {
                key: "unblockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !1;
                },
              },
              {
                key: "isUpdateBlocked",
                value: function () {
                  return (
                    this.updateManuallyBlocked || this.updateBlockedByResize
                  );
                },
              },
              {
                key: "isTreeAnimationBlocked",
                value: function () {
                  var e;
                  return (
                    this.isAnimationBlocked ||
                    (null === (e = this.parent) || void 0 === e
                      ? void 0
                      : e.isTreeAnimationBlocked()) ||
                    !1
                  );
                },
              },
              {
                key: "startUpdate",
                value: function () {
                  var e;
                  this.isUpdateBlocked() ||
                    ((this.isUpdating = !0),
                    null === (e = this.nodes) || void 0 === e || e.forEach(Cu),
                    this.animationId++);
                },
              },
              {
                key: "willUpdate",
                value: function () {
                  var e,
                    t,
                    n,
                    r =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                  if (this.root.isUpdateBlocked())
                    null === (t = (e = this.options).onExitComplete) ||
                      void 0 === t ||
                      t.call(e);
                  else if (
                    (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty)
                  ) {
                    this.isLayoutDirty = !0;
                    for (var a = 0; a < this.path.length; a++) {
                      var i = this.path[a];
                      (i.shouldResetTransform = !0), i.updateScroll("snapshot");
                    }
                    var o = this.options,
                      l = o.layoutId,
                      u = o.layout;
                    if (void 0 !== l || u) {
                      var s =
                        null === (n = this.options.visualElement) ||
                        void 0 === n
                          ? void 0
                          : n.getProps().transformTemplate;
                      (this.prevTransformTemplateValue =
                        null === s || void 0 === s
                          ? void 0
                          : s(this.latestValues, "")),
                        this.updateSnapshot(),
                        r && this.notifyListeners("willUpdate");
                    }
                  }
                },
              },
              {
                key: "didUpdate",
                value: function () {
                  if (this.isUpdateBlocked())
                    return (
                      this.unblockUpdate(),
                      this.clearAllSnapshots(),
                      void this.nodes.forEach(xu)
                    );
                  this.isUpdating &&
                    ((this.isUpdating = !1),
                    this.potentialNodes.size &&
                      (this.potentialNodes.forEach(Nu),
                      this.potentialNodes.clear()),
                    this.nodes.forEach(wu),
                    this.nodes.forEach(mu),
                    this.nodes.forEach(yu),
                    this.clearAllSnapshots(),
                    Ir.update(),
                    Ir.preRender(),
                    Ir.render());
                },
              },
              {
                key: "clearAllSnapshots",
                value: function () {
                  this.nodes.forEach(bu), this.sharedNodes.forEach(Pu);
                },
              },
              {
                key: "scheduleUpdateProjection",
                value: function () {
                  Vr.preRender(this.updateProjection, !1, !0);
                },
              },
              {
                key: "scheduleCheckAfterUnmount",
                value: function () {
                  var e = this;
                  Vr.postRender(function () {
                    e.isLayoutDirty
                      ? e.root.didUpdate()
                      : e.root.checkUpdateFailed();
                  });
                },
              },
              {
                key: "updateSnapshot",
                value: function () {
                  !this.snapshot &&
                    this.instance &&
                    (this.snapshot = this.measure());
                },
              },
              {
                key: "updateLayout",
                value: function () {
                  var e;
                  if (
                    this.instance &&
                    (this.updateScroll(),
                    (this.options.alwaysMeasureLayout && this.isLead()) ||
                      this.isLayoutDirty)
                  ) {
                    if (this.resumeFrom && !this.resumeFrom.instance)
                      for (var t = 0; t < this.path.length; t++) {
                        this.path[t].updateScroll();
                      }
                    var n = this.layout;
                    (this.layout = this.measure(!1)),
                      (this.layoutCorrected = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.isLayoutDirty = !1),
                      (this.projectionDelta = void 0),
                      this.notifyListeners("measure", this.layout.layoutBox),
                      null === (e = this.options.visualElement) ||
                        void 0 === e ||
                        e.notify(
                          "LayoutMeasure",
                          this.layout.layoutBox,
                          null === n || void 0 === n ? void 0 : n.layoutBox
                        );
                  }
                },
              },
              {
                key: "updateScroll",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "measure",
                    t = Boolean(this.options.layoutScroll && this.instance);
                  this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === e &&
                    (t = !1),
                    t &&
                      (this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: a(this.instance),
                        offset: r(this.instance),
                      });
                },
              },
              {
                key: "resetTransform",
                value: function () {
                  var e;
                  if (i) {
                    var t = this.isLayoutDirty || this.shouldResetTransform,
                      n = this.projectionDelta && !ou(this.projectionDelta),
                      r =
                        null === (e = this.options.visualElement) ||
                        void 0 === e
                          ? void 0
                          : e.getProps().transformTemplate,
                      a =
                        null === r || void 0 === r
                          ? void 0
                          : r(this.latestValues, ""),
                      o = a !== this.prevTransformTemplateValue;
                    t &&
                      (n || Vo(this.latestValues) || o) &&
                      (i(this.instance, a),
                      (this.shouldResetTransform = !1),
                      this.scheduleRender());
                  }
                },
              },
              {
                key: "measure",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = this.measurePageBox(),
                    n = this.removeElementScroll(t);
                  return (
                    e && (n = this.removeTransform(n)),
                    Mu(n),
                    {
                      animationId: this.root.animationId,
                      measuredBox: t,
                      layoutBox: n,
                      latestValues: {},
                      source: this.id,
                    }
                  );
                },
              },
              {
                key: "measurePageBox",
                value: function () {
                  var e = this.options.visualElement;
                  if (!e)
                    return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  var t = e.measureViewportBox(),
                    n = this.root.scroll;
                  return n && ($o(t.x, n.offset.x), $o(t.y, n.offset.y)), t;
                },
              },
              {
                key: "removeElementScroll",
                value: function (e) {
                  var t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Jl(t, e);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n],
                      a = r.scroll,
                      i = r.options;
                    if (r !== this.root && a && i.layoutScroll) {
                      if (a.isRoot) {
                        Jl(t, e);
                        var o = this.root.scroll;
                        o && ($o(t.x, -o.offset.x), $o(t.y, -o.offset.y));
                      }
                      $o(t.x, a.offset.x), $o(t.y, a.offset.y);
                    }
                  }
                  return t;
                },
              },
              {
                key: "applyTransform",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Jl(n, e);
                  for (var r = 0; r < this.path.length; r++) {
                    var a = this.path[r];
                    !t &&
                      a.options.layoutScroll &&
                      a.scroll &&
                      a !== a.root &&
                      Xo(n, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
                      Vo(a.latestValues) && Xo(n, a.latestValues);
                  }
                  return Vo(this.latestValues) && Xo(n, this.latestValues), n;
                },
              },
              {
                key: "removeTransform",
                value: function (e) {
                  var t,
                    n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Jl(n, e);
                  for (var r = 0; r < this.path.length; r++) {
                    var a = this.path[r];
                    if (a.instance && Vo(a.latestValues)) {
                      Ao(a.latestValues) && a.updateSnapshot();
                      var i = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                      Jl(i, a.measurePageBox()),
                        au(
                          n,
                          a.latestValues,
                          null === (t = a.snapshot) || void 0 === t
                            ? void 0
                            : t.layoutBox,
                          i
                        );
                    }
                  }
                  return Vo(this.latestValues) && au(n, this.latestValues), n;
                },
              },
              {
                key: "setTargetDelta",
                value: function (e) {
                  (this.targetDelta = e),
                    (this.isProjectionDirty = !0),
                    this.root.scheduleUpdateProjection();
                },
              },
              {
                key: "setOptions",
                value: function (e) {
                  this.options = ct(
                    ct(ct({}, this.options), e),
                    {},
                    { crossfade: void 0 === e.crossfade || e.crossfade }
                  );
                },
              },
              {
                key: "clearMeasurements",
                value: function () {
                  (this.scroll = void 0),
                    (this.layout = void 0),
                    (this.snapshot = void 0),
                    (this.prevTransformTemplateValue = void 0),
                    (this.targetDelta = void 0),
                    (this.target = void 0),
                    (this.isLayoutDirty = !1);
                },
              },
              {
                key: "resolveTargetDelta",
                value: function () {
                  var e,
                    t = this.getLead();
                  if (
                    (this.isProjectionDirty ||
                      (this.isProjectionDirty = t.isProjectionDirty),
                    this.isTransformDirty ||
                      (this.isTransformDirty = t.isTransformDirty),
                    this.isProjectionDirty ||
                      this.attemptToResolveRelativeTarget)
                  ) {
                    var n = this.options,
                      r = n.layout,
                      a = n.layoutId;
                    if (this.layout && (r || a)) {
                      if (!this.targetDelta && !this.relativeTarget) {
                        var i = this.getClosestProjectingParent();
                        i && i.layout
                          ? ((this.relativeParent = i),
                            (this.relativeTarget = {
                              x: { min: 0, max: 0 },
                              y: { min: 0, max: 0 },
                            }),
                            (this.relativeTargetOrigin = {
                              x: { min: 0, max: 0 },
                              y: { min: 0, max: 0 },
                            }),
                            To(
                              this.relativeTargetOrigin,
                              this.layout.layoutBox,
                              i.layout.layoutBox
                            ),
                            Jl(this.relativeTarget, this.relativeTargetOrigin))
                          : (this.relativeParent = this.relativeTarget =
                              void 0);
                      }
                      var o, l, u;
                      if (this.relativeTarget || this.targetDelta)
                        if (
                          (this.target ||
                            ((this.target = {
                              x: { min: 0, max: 0 },
                              y: { min: 0, max: 0 },
                            }),
                            (this.targetWithTransforms = {
                              x: { min: 0, max: 0 },
                              y: { min: 0, max: 0 },
                            })),
                          this.relativeTarget &&
                          this.relativeTargetOrigin &&
                          (null === (e = this.relativeParent) || void 0 === e
                            ? void 0
                            : e.target)
                            ? ((o = this.target),
                              (l = this.relativeTarget),
                              (u = this.relativeParent.target),
                              Co(o.x, l.x, u.x),
                              Co(o.y, l.y, u.y))
                            : this.targetDelta
                            ? (Boolean(this.resumingFrom)
                                ? (this.target = this.applyTransform(
                                    this.layout.layoutBox
                                  ))
                                : Jl(this.target, this.layout.layoutBox),
                              Wo(this.target, this.targetDelta))
                            : Jl(this.target, this.layout.layoutBox),
                          this.attemptToResolveRelativeTarget)
                        ) {
                          this.attemptToResolveRelativeTarget = !1;
                          var s = this.getClosestProjectingParent();
                          s &&
                          Boolean(s.resumingFrom) ===
                            Boolean(this.resumingFrom) &&
                          !s.options.layoutScroll &&
                          s.target
                            ? ((this.relativeParent = s),
                              (this.relativeTarget = {
                                x: { min: 0, max: 0 },
                                y: { min: 0, max: 0 },
                              }),
                              (this.relativeTargetOrigin = {
                                x: { min: 0, max: 0 },
                                y: { min: 0, max: 0 },
                              }),
                              To(
                                this.relativeTargetOrigin,
                                this.target,
                                s.target
                              ),
                              Jl(
                                this.relativeTarget,
                                this.relativeTargetOrigin
                              ))
                            : (this.relativeParent = this.relativeTarget =
                                void 0);
                        }
                    }
                  }
                },
              },
              {
                key: "getClosestProjectingParent",
                value: function () {
                  if (
                    this.parent &&
                    !Ao(this.parent.latestValues) &&
                    !Fo(this.parent.latestValues)
                  )
                    return (this.parent.relativeTarget ||
                      this.parent.targetDelta) &&
                      this.parent.layout
                      ? this.parent
                      : this.parent.getClosestProjectingParent();
                },
              },
              {
                key: "calcProjection",
                value: function () {
                  var e,
                    t = this.isProjectionDirty,
                    n = this.isTransformDirty;
                  this.isProjectionDirty = this.isTransformDirty = !1;
                  var r = this.getLead(),
                    a = Boolean(this.resumingFrom) || this !== r,
                    i = !0;
                  if ((t && (i = !1), a && n && (i = !1), !i)) {
                    var o = this.options,
                      l = o.layout,
                      u = o.layoutId;
                    if (
                      ((this.isTreeAnimating = Boolean(
                        (null === (e = this.parent) || void 0 === e
                          ? void 0
                          : e.isTreeAnimating) ||
                          this.currentAnimation ||
                          this.pendingAnimation
                      )),
                      this.isTreeAnimating ||
                        (this.targetDelta = this.relativeTarget = void 0),
                      this.layout && (l || u))
                    ) {
                      Jl(this.layoutCorrected, this.layout.layoutBox),
                        (function (e, t, n) {
                          var r,
                            a,
                            i =
                              arguments.length > 3 &&
                              void 0 !== arguments[3] &&
                              arguments[3],
                            o = n.length;
                          if (o) {
                            var l, u;
                            t.x = t.y = 1;
                            for (var s = 0; s < o; s++)
                              (u = (l = n[s]).projectionDelta),
                                "contents" !==
                                  (null ===
                                    (a =
                                      null === (r = l.instance) || void 0 === r
                                        ? void 0
                                        : r.style) || void 0 === a
                                    ? void 0
                                    : a.display) &&
                                  (i &&
                                    l.options.layoutScroll &&
                                    l.scroll &&
                                    l !== l.root &&
                                    Xo(e, {
                                      x: -l.scroll.offset.x,
                                      y: -l.scroll.offset.y,
                                    }),
                                  u &&
                                    ((t.x *= u.x.scale),
                                    (t.y *= u.y.scale),
                                    Wo(e, u)),
                                  i &&
                                    Vo(l.latestValues) &&
                                    Xo(e, l.latestValues));
                            (t.x = Ho(t.x)), (t.y = Ho(t.y));
                          }
                        })(this.layoutCorrected, this.treeScale, this.path, a);
                      var s = r.target;
                      if (s) {
                        this.projectionDelta ||
                          ((this.projectionDelta = {
                            x: {
                              translate: 0,
                              scale: 1,
                              origin: 0,
                              originPoint: 0,
                            },
                            y: {
                              translate: 0,
                              scale: 1,
                              origin: 0,
                              originPoint: 0,
                            },
                          }),
                          (this.projectionDeltaWithTransform = {
                            x: {
                              translate: 0,
                              scale: 1,
                              origin: 0,
                              originPoint: 0,
                            },
                            y: {
                              translate: 0,
                              scale: 1,
                              origin: 0,
                              originPoint: 0,
                            },
                          }));
                        var c = this.treeScale.x,
                          f = this.treeScale.y,
                          d = this.projectionTransform;
                        Eo(
                          this.projectionDelta,
                          this.layoutCorrected,
                          s,
                          this.latestValues
                        ),
                          (this.projectionTransform = cu(
                            this.projectionDelta,
                            this.treeScale
                          )),
                          (this.projectionTransform === d &&
                            this.treeScale.x === c &&
                            this.treeScale.y === f) ||
                            ((this.hasProjected = !0),
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", s));
                      }
                    }
                  }
                },
              },
              {
                key: "hide",
                value: function () {
                  this.isVisible = !1;
                },
              },
              {
                key: "show",
                value: function () {
                  this.isVisible = !0;
                },
              },
              {
                key: "scheduleRender",
                value: function () {
                  var e,
                    t,
                    n,
                    r =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                  null === (t = (e = this.options).scheduleRender) ||
                    void 0 === t ||
                    t.call(e),
                    r &&
                      (null === (n = this.getStack()) ||
                        void 0 === n ||
                        n.scheduleRender()),
                    this.resumingFrom &&
                      !this.resumingFrom.instance &&
                      (this.resumingFrom = void 0);
                },
              },
              {
                key: "setAnimationOrigin",
                value: function (e) {
                  var t,
                    n,
                    r = this,
                    a =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    i = this.snapshot,
                    o =
                      (null === i || void 0 === i ? void 0 : i.latestValues) ||
                      {},
                    l = ct({}, this.latestValues),
                    u = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    };
                  (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    (this.attemptToResolveRelativeTarget = !a);
                  var s = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                    c =
                      (null === i || void 0 === i ? void 0 : i.source) !==
                      (null === (t = this.layout) || void 0 === t
                        ? void 0
                        : t.source),
                    f =
                      ((null === (n = this.getStack()) || void 0 === n
                        ? void 0
                        : n.members.length) || 0) <= 1,
                    d = Boolean(
                      c &&
                        !f &&
                        !0 === this.options.crossfade &&
                        !this.path.some(Lu)
                    );
                  (this.animationProgress = 0),
                    (this.mixTargetDelta = function (t) {
                      var n,
                        a = t / 1e3;
                      Tu(u.x, e.x, a),
                        Tu(u.y, e.y, a),
                        r.setTargetDelta(u),
                        r.relativeTarget &&
                          r.relativeTargetOrigin &&
                          r.layout &&
                          (null === (n = r.relativeParent) || void 0 === n
                            ? void 0
                            : n.layout) &&
                          (To(
                            s,
                            r.layout.layoutBox,
                            r.relativeParent.layout.layoutBox
                          ),
                          Ru(r.relativeTarget, r.relativeTargetOrigin, s, a)),
                        c &&
                          ((r.animationValues = l),
                          Ql(l, o, r.latestValues, a, d, f)),
                        r.root.scheduleUpdateProjection(),
                        r.scheduleRender(),
                        (r.animationProgress = a);
                    }),
                    this.mixTargetDelta(0);
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t,
                    n,
                    r = this;
                  this.notifyListeners("animationStart"),
                    null === (t = this.currentAnimation) ||
                      void 0 === t ||
                      t.stop(),
                    this.resumingFrom &&
                      (null === (n = this.resumingFrom.currentAnimation) ||
                        void 0 === n ||
                        n.stop()),
                    this.pendingAnimation &&
                      (Fr.update(this.pendingAnimation),
                      (this.pendingAnimation = void 0)),
                    (this.pendingAnimation = Vr.update(function () {
                      (Rt.hasAnimatedSinceResize = !0),
                        (r.currentAnimation = (function (e, t) {
                          var n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {},
                            r = Ht(e) ? e : Xr(e);
                          return (
                            r.start(Ki("", r, t, n)),
                            {
                              stop: function () {
                                return r.stop();
                              },
                              isAnimating: function () {
                                return r.isAnimating();
                              },
                            }
                          );
                        })(
                          0,
                          1e3,
                          ct(
                            ct({}, e),
                            {},
                            {
                              onUpdate: function (t) {
                                var n;
                                r.mixTargetDelta(t),
                                  null === (n = e.onUpdate) ||
                                    void 0 === n ||
                                    n.call(e, t);
                              },
                              onComplete: function () {
                                var t;
                                null === (t = e.onComplete) ||
                                  void 0 === t ||
                                  t.call(e),
                                  r.completeAnimation();
                              },
                            }
                          )
                        )),
                        r.resumingFrom &&
                          (r.resumingFrom.currentAnimation =
                            r.currentAnimation),
                        (r.pendingAnimation = void 0);
                    }));
                },
              },
              {
                key: "completeAnimation",
                value: function () {
                  var e;
                  this.resumingFrom &&
                    ((this.resumingFrom.currentAnimation = void 0),
                    (this.resumingFrom.preserveOpacity = void 0)),
                    null === (e = this.getStack()) ||
                      void 0 === e ||
                      e.exitAnimationComplete(),
                    (this.resumingFrom =
                      this.currentAnimation =
                      this.animationValues =
                        void 0),
                    this.notifyListeners("animationComplete");
                },
              },
              {
                key: "finishAnimation",
                value: function () {
                  var e;
                  this.currentAnimation &&
                    (null === (e = this.mixTargetDelta) ||
                      void 0 === e ||
                      e.call(this, 1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation();
                },
              },
              {
                key: "applyTransformsToTarget",
                value: function () {
                  var e = this.getLead(),
                    t = e.targetWithTransforms,
                    n = e.target,
                    r = e.layout,
                    a = e.latestValues;
                  if (t && n && r) {
                    if (
                      this !== e &&
                      this.layout &&
                      r &&
                      Du(
                        this.options.animationType,
                        this.layout.layoutBox,
                        r.layoutBox
                      )
                    ) {
                      n = this.target || {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      };
                      var i = wo(this.layout.layoutBox.x);
                      (n.x.min = e.target.x.min), (n.x.max = n.x.min + i);
                      var o = wo(this.layout.layoutBox.y);
                      (n.y.min = e.target.y.min), (n.y.max = n.y.min + o);
                    }
                    Jl(t, n),
                      Xo(t, a),
                      Eo(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        t,
                        a
                      );
                  }
                },
              },
              {
                key: "registerSharedNode",
                value: function (e, t) {
                  var n, r, a;
                  this.sharedNodes.has(e) || this.sharedNodes.set(e, new su()),
                    this.sharedNodes.get(e).add(t),
                    t.promote({
                      transition:
                        null === (n = t.options.initialPromotionConfig) ||
                        void 0 === n
                          ? void 0
                          : n.transition,
                      preserveFollowOpacity:
                        null ===
                          (a =
                            null === (r = t.options.initialPromotionConfig) ||
                            void 0 === r
                              ? void 0
                              : r.shouldPreserveFollowOpacity) || void 0 === a
                          ? void 0
                          : a.call(r, t),
                    });
                },
              },
              {
                key: "isLead",
                value: function () {
                  var e = this.getStack();
                  return !e || e.lead === this;
                },
              },
              {
                key: "getLead",
                value: function () {
                  var e;
                  return (
                    (this.options.layoutId &&
                      (null === (e = this.getStack()) || void 0 === e
                        ? void 0
                        : e.lead)) ||
                    this
                  );
                },
              },
              {
                key: "getPrevLead",
                value: function () {
                  var e;
                  return this.options.layoutId
                    ? null === (e = this.getStack()) || void 0 === e
                      ? void 0
                      : e.prevLead
                    : void 0;
                },
              },
              {
                key: "getStack",
                value: function () {
                  var e = this.options.layoutId;
                  if (e) return this.root.sharedNodes.get(e);
                },
              },
              {
                key: "promote",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.needsReset,
                    n = e.transition,
                    r = e.preserveFollowOpacity,
                    a = this.getStack();
                  a && a.promote(this, r),
                    t &&
                      ((this.projectionDelta = void 0), (this.needsReset = !0)),
                    n && this.setOptions({ transition: n });
                },
              },
              {
                key: "relegate",
                value: function () {
                  var e = this.getStack();
                  return !!e && e.relegate(this);
                },
              },
              {
                key: "resetRotation",
                value: function () {
                  var e = this.options.visualElement;
                  if (e) {
                    var t = !1,
                      n = e.latestValues;
                    if (
                      ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) &&
                        (t = !0),
                      t)
                    ) {
                      for (var r = {}, a = 0; a < pu.length; a++) {
                        var i = "rotate" + pu[a];
                        n[i] && ((r[i] = n[i]), e.setStaticValue(i, 0));
                      }
                      for (var o in (null === e || void 0 === e || e.render(),
                      r))
                        e.setStaticValue(o, r[o]);
                      e.scheduleRender();
                    }
                  }
                },
              },
              {
                key: "getProjectionStyles",
                value: function () {
                  var e,
                    t,
                    n,
                    r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    a = {};
                  if (!this.instance || this.isSVG) return a;
                  if (!this.isVisible) return { visibility: "hidden" };
                  a.visibility = "";
                  var i =
                    null === (e = this.options.visualElement) || void 0 === e
                      ? void 0
                      : e.getProps().transformTemplate;
                  if (this.needsReset)
                    return (
                      (this.needsReset = !1),
                      (a.opacity = ""),
                      (a.pointerEvents = Bn(r.pointerEvents) || ""),
                      (a.transform = i ? i(this.latestValues, "") : "none"),
                      a
                    );
                  var o = this.getLead();
                  if (!this.projectionDelta || !this.layout || !o.target) {
                    var l = {};
                    return (
                      this.options.layoutId &&
                        ((l.opacity =
                          void 0 !== this.latestValues.opacity
                            ? this.latestValues.opacity
                            : 1),
                        (l.pointerEvents = Bn(r.pointerEvents) || "")),
                      this.hasProjected &&
                        !Vo(this.latestValues) &&
                        ((l.transform = i ? i({}, "") : "none"),
                        (this.hasProjected = !1)),
                      l
                    );
                  }
                  var u = o.animationValues || o.latestValues;
                  this.applyTransformsToTarget(),
                    (a.transform = cu(
                      this.projectionDeltaWithTransform,
                      this.treeScale,
                      u
                    )),
                    i && (a.transform = i(u, a.transform));
                  var s = this.projectionDelta,
                    c = s.x,
                    f = s.y;
                  for (var d in ((a.transformOrigin = ""
                    .concat(100 * c.origin, "% ")
                    .concat(100 * f.origin, "% 0")),
                  o.animationValues
                    ? (a.opacity =
                        o === this
                          ? null !==
                              (n =
                                null !== (t = u.opacity) && void 0 !== t
                                  ? t
                                  : this.latestValues.opacity) && void 0 !== n
                            ? n
                            : 1
                          : this.preserveOpacity
                          ? this.latestValues.opacity
                          : u.opacityExit)
                    : (a.opacity =
                        o === this
                          ? void 0 !== u.opacity
                            ? u.opacity
                            : ""
                          : void 0 !== u.opacityExit
                          ? u.opacityExit
                          : 0),
                  zt))
                    if (void 0 !== u[d]) {
                      var p = zt[d],
                        h = p.correct,
                        v = p.applyTo,
                        m = h(u[d], o);
                      if (v)
                        for (var y = v.length, g = 0; g < y; g++) a[v[g]] = m;
                      else a[d] = m;
                    }
                  return (
                    this.options.layoutId &&
                      (a.pointerEvents =
                        o === this ? Bn(r.pointerEvents) || "" : "none"),
                    a
                  );
                },
              },
              {
                key: "clearSnapshot",
                value: function () {
                  this.resumeFrom = this.snapshot = void 0;
                },
              },
              {
                key: "resetTree",
                value: function () {
                  this.root.nodes.forEach(function (e) {
                    var t;
                    return null === (t = e.currentAnimation) || void 0 === t
                      ? void 0
                      : t.stop();
                  }),
                    this.root.nodes.forEach(xu),
                    this.root.sharedNodes.clear();
                },
              },
            ]),
            e
          );
        })();
      }
      function mu(e) {
        e.updateLayout();
      }
      function yu(e) {
        var t,
          n,
          r,
          a =
            (null === (t = e.resumeFrom) || void 0 === t
              ? void 0
              : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
          var i = e.layout,
            o = i.layoutBox,
            l = i.measuredBox,
            u = e.options.animationType,
            s = a.source !== e.layout.source;
          "size" === u
            ? _o(function (e) {
                var t = s ? a.measuredBox[e] : a.layoutBox[e],
                  n = wo(t);
                (t.min = o[e].min), (t.max = t.min + n);
              })
            : Du(u, a.layoutBox, o) &&
              _o(function (e) {
                var t = s ? a.measuredBox[e] : a.layoutBox[e],
                  n = wo(o[e]);
                t.max = t.min + n;
              });
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          Eo(c, o, a.layoutBox);
          var f = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          s
            ? Eo(f, e.applyTransform(l, !0), a.measuredBox)
            : Eo(f, o, a.layoutBox);
          var d = !ou(c),
            p = !1;
          if (!e.resumeFrom) {
            var h = e.getClosestProjectingParent();
            if (h && !h.resumeFrom) {
              var v = h.snapshot,
                m = h.layout;
              if (v && m) {
                var y = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                To(y, a.layoutBox, v.layoutBox);
                var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                To(g, o, m.layoutBox), lu(y, g) || (p = !0);
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: o,
            snapshot: a,
            delta: f,
            layoutDelta: c,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: p,
          });
        } else
          e.isLead() &&
            (null === (r = (n = e.options).onExitComplete) ||
              void 0 === r ||
              r.call(n));
        e.options.transition = void 0;
      }
      function gu(e) {
        e.isProjectionDirty ||
          (e.isProjectionDirty = Boolean(
            e.parent && e.parent.isProjectionDirty
          )),
          e.isTransformDirty ||
            (e.isTransformDirty = Boolean(
              e.parent && e.parent.isTransformDirty
            ));
      }
      function bu(e) {
        e.clearSnapshot();
      }
      function xu(e) {
        e.clearMeasurements();
      }
      function wu(e) {
        var t = e.options.visualElement;
        (null === t || void 0 === t
          ? void 0
          : t.getProps().onBeforeLayoutMeasure) &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function ku(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0);
      }
      function Su(e) {
        e.resolveTargetDelta();
      }
      function Eu(e) {
        e.calcProjection();
      }
      function Cu(e) {
        e.resetRotation();
      }
      function Pu(e) {
        e.removeLeadSnapshot();
      }
      function Tu(e, t, n) {
        (e.translate = Va(t.translate, 0, n)),
          (e.scale = Va(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function ju(e, t, n, r) {
        (e.min = Va(t.min, n.min, r)), (e.max = Va(t.max, n.max, r));
      }
      function Ru(e, t, n, r) {
        ju(e.x, t.x, n.x, r), ju(e.y, t.y, n.y, r);
      }
      function Lu(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      var Ou = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function Nu(e, t) {
        for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
          if (Boolean(e.path[r].instance)) {
            n = e.path[r];
            break;
          }
        var a = (n && n !== e.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(t, '"]')
        );
        a && e.mount(a, !0);
      }
      function _u(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }
      function Mu(e) {
        _u(e.x), _u(e.y);
      }
      function Du(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !ko(uu(t), uu(n), 0.2))
        );
      }
      var Au = vu({
          attachResizeListener: function (e, t) {
            return Xn(e, "resize", t);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        Vu = { current: void 0 },
        Fu = vu({
          measureScroll: function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          defaultParent: function () {
            if (!Vu.current) {
              var e = new Au(0, {});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (Vu.current = e);
            }
            return Vu.current;
          },
          resetTransform: function (e, t) {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: function (e) {
            return Boolean("fixed" === window.getComputedStyle(e).position);
          },
        }),
        Iu = ct(ct(ct(ct({}, co), Er), tl), Bl),
        zu = Vt(function (e, t) {
          return (function (e, t, n, r, a) {
            var i = t.forwardMotionProps,
              o = void 0 !== i && i;
            return ct(
              ct({}, It(e) ? Qn : Yn),
              {},
              {
                preloadedFeatures: n,
                useRender: _n(o),
                createVisualElement: r,
                projectionNodeConstructor: a,
                Component: e,
              }
            );
          })(e, t, Iu, Dl, Fu);
        });
      var Uu = function () {
          return (0, Qe.jsxs)("main", {
            children: [
              (0, Qe.jsx)(Ye, {}),
              (0, Qe.jsxs)(zu.div, {
                className: "contact",
                exit: "out",
                animate: "in",
                initial: "out",
                variants: {
                  in: { opacity: 1, x: 0 },
                  out: { opacity: 0, x: 300 },
                },
                transition: { duration: 0.4 },
                children: [
                  (0, Qe.jsx)(Xe, {}),
                  (0, Qe.jsx)(Ke, {}),
                  (0, Qe.jsx)(rt, {}),
                  (0, Qe.jsxs)("div", {
                    className: "contact-infos",
                    children: [
                      (0, Qe.jsx)("div", {
                        className: "adress",
                        children: (0, Qe.jsxs)("div", {
                          className: "content",
                          children: [
                            (0, Qe.jsx)("h4", { children: "Localisation" }),
                            (0, Qe.jsx)("p", { children: "Lyon" }),
                            (0, Qe.jsx)("p", { children: "Givors" }),
                          ],
                        }),
                      }),
                      (0, Qe.jsx)("div", {
                        className: "phone",
                        children: (0, Qe.jsxs)("div", {
                          className: "content",
                          children: [
                            (0, Qe.jsx)("h4", { children: "t\xe9l\xe9phone" }),
                            (0, Qe.jsx)(lt(), {
                              text: "0656773615",
                              className: "hover",
                              children: (0, Qe.jsx)("p", {
                                style: { cursor: "pointer" },
                                className: "clipboard",
                                onClick: function () {
                                  return alert("T\xe9l\xe9phone copi\xe9 !");
                                },
                                children: "0656773615",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, Qe.jsx)("div", {
                        className: "email",
                        children: (0, Qe.jsxs)("div", {
                          className: "content",
                          children: [
                            (0, Qe.jsx)("h4", { children: "email" }),
                            (0, Qe.jsx)(lt(), {
                              text: "adil.idirr@gmail.com",
                              className: "hover",
                              children: (0, Qe.jsx)("p", {
                                style: { cursor: "pointer" },
                                className: "clipboard",
                                onClick: function () {
                                  return alert("Email copi\xe9 !");
                                },
                                children: "adil.idirr@gmail.com",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, Qe.jsx)(at, {}),
                      (0, Qe.jsx)("div", {
                        className: "credits",
                        children: (0, Qe.jsx)("p", {
                          children: "Adil Idir-2022",
                        }),
                      }),
                    ],
                  }),
                  (0, Qe.jsx)(it, { left: "/projet-3" }),
                ],
              }),
            ],
          });
        },
        Bu = function () {
          return (
            (0, t.useEffect)(function () {
              var e = document.getElementById("text-target"),
                t = [
                  "React",
                  "Node",
                  "Mysql",
                  "Git",
                  "Express",
                  "Js",
                  "Html",
                  "Css",
                ],
                n = 0,
                r = 0;
              !(function a() {
                setTimeout(function () {
                  n >= t.length
                    ? ((n = 0), (r = 0), a())
                    : r < t[n].length
                    ? (!(function () {
                        var a = document.createElement("span");
                        e.appendChild(a),
                          a.classList.add("letter"),
                          (a.style.opacity = "0"),
                          (a.style.animation = "anim 5s ease forwards"),
                          (a.textContent = t[n][r]),
                          setTimeout(function () {
                            a.remove();
                          }, 2e3);
                      })(),
                      r++,
                      a())
                    : ((r = 0),
                      n++,
                      setTimeout(function () {
                        a();
                      }, 2e3));
                }, 80);
              })();
            }, []),
            (0, Qe.jsxs)("span", {
              className: "dynamic-text",
              children: [
                (0, Qe.jsx)("span", { children: "technos" }),
                (0, Qe.jsx)("span", { id: "text-target" }),
              ],
            })
          );
        },
        Wu = function () {
          return (0, Qe.jsxs)("div", {
            children: [
              (0, Qe.jsx)(Ye, {}),
              (0, Qe.jsxs)(zu.div, {
                className: "home",
                initial: "initial",
                animate: "visible",
                exit: "exit",
                variants: {
                  initial: {
                    opacity: 0,
                    transition: { duration: 0.5 },
                    x: 100,
                  },
                  visible: { opacity: 1, x: 0 },
                  exit: { opacity: 0, transition: { duration: 0.3 }, x: 100 },
                },
                children: [
                  (0, Qe.jsx)(Xe, {}),
                  (0, Qe.jsx)(at, {}),
                  (0, Qe.jsx)("div", {
                    className: "home-main",
                    children: (0, Qe.jsxs)("div", {
                      className: "main-content",
                      children: [
                        (0, Qe.jsx)(zu.h1, {
                          drag: !0,
                          onDragEnd: !0,
                          dragConstraints: {
                            left: -250,
                            right: 950,
                            top: -200,
                            bottom: 250,
                          },
                          children: "ADIL IDIR",
                        }),
                        (0, Qe.jsx)(zu.h2, {
                          drag: !0,
                          onDragEnd: !0,
                          dragConstraints: {
                            left: -250,
                            right: 950,
                            top: -200,
                            bottom: 250,
                          },
                          children: (0, Qe.jsx)(Bu, {}),
                        }),
                      ],
                    }),
                  }),
                  (0, Qe.jsx)(it, { right: "/projet-1" }),
                ],
              }),
            ],
          });
        },
        Hu = function () {
          return (0, Qe.jsx)("div", {
            className: "notFound",
            children: (0, Qe.jsxs)("div", {
              className: "notFound-content",
              children: [
                (0, Qe.jsx)("h2", { children: "Error 404" }),
                (0, Qe.jsx)(He, {
                  to: "/",
                  children: (0, Qe.jsxs)("h3", {
                    children: [
                      "Retour a l'accueil ",
                      (0, Qe.jsx)("i", { className: "fas fa-home" }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        $u = [
          {
            id: 1,
            title: "Wild beer",
            date: "Octobre 2022",
            languages: ["Html", "Css", "Javascript"],
            infos:
              "Wild Beer est un projet de groupe de site vitrine d\xe9velopp\xe9 au d\xe9but de ma formation de d\xe9veloppeur web. Nous avons utilis\xe9 les technologies HTML, CSS et JavaScript pour cr\xe9er une interface attrayante et intuitive pour les utilisateurs. Le site pr\xe9sente une vari\xe9t\xe9 de bi\xe8res artisanales et permet aux visiteurs de naviguer facilement sur le site. Nous avons mis en pratique nos premi\xe8re comp\xe9tences en d\xe9veloppement web pour cr\xe9er ce projet.",
            img: "./assets/img/projet-1.png",
            link: "https://wild-beer.netlify.app/",
          },
          {
            id: 2,
            title: "Api Games",
            date: "Novembre 2022",
            languages: ["React", "Rest api", "Express", "Sql", "Bootstap"],
            infos:
              "API Games est un projet de site de r\xe9f\xe9rencement de jeux vid\xe9o  d\xe9velopp\xe9 pendant notre formation de d\xe9veloppeurs web. Nous avons cr\xe9\xe9 une interface conviviale et fonctionnelle pour les utilisateurs. Le site permet aux visiteurs de rechercher et de consulter des informations sur les jeux vid\xe9o de leur choix, ainsi que de consulter des critiques et des notes des jeux. Nous avons travaill\xe9 sur ce projet pour mettre en pratique nos comp\xe9tences en d\xe9veloppement web et cr\xe9er une application utile et interactive pour les utilisateurs.",
            img: "./assets/img/projet-2.png",
            link: "https://p2-apigames.netlify.app",
          },
          {
            id: 3,
            title: "Origins digital",
            date: "Decembre/janvier 2022",
            languages: ["React", "Node.js", "Express", "Sql", "Sass"],
            infos:
              "Origins Digital est une plateforme de streaming vid\xe9o d\xe9di\xe9e aux esports, disponible en version gratuite. Elle offre une large s\xe9lection de contenus vid\xe9o et permet aux utilisateurs de cr\xe9er un compte pour personnaliser leur exp\xe9rience de visionnage en cr\xe9ant des playlists et en enregistrant leurs vid\xe9os pr\xe9f\xe9r\xe9es. Ce site web est en cours de d\xe9veloppement et devrait \xeatre disponible en f\xe9vrier 2023.",
            img: "./assets/img/projet-3.png",
            link: "http://www.google.com",
          },
        ],
        qu = function (e) {
          var n = e.projectNumber,
            r = s((0, t.useState)($u[n]), 1)[0],
            a = s((0, t.useState)(), 2),
            i = a[0],
            o = a[1],
            l = s((0, t.useState)(), 2),
            u = l[0],
            c = l[1],
            f = s((0, t.useState)(), 2),
            d = f[0],
            p = f[1];
          (0, t.useEffect)(function () {
            o(Math.floor(200 * Math.random() + 700) + "px"),
              c(Math.floor(200 * Math.random() + 150) + "px"),
              p("scale(" + (Math.random() + 0.7) + ")");
          }, []);
          var h = {
            initial: {
              opacity: 0,
              x: Math.floor(
                350 * Math.random() * (Math.random() > 0.4 ? 1 : -1)
              ),
              y: Math.floor(
                120 * Math.random() * (Math.random() > 0.4 ? 1 : -1)
              ),
            },
            visible: { opacity: 1, x: 0, y: 0 },
          };
          return (0, Qe.jsxs)(zu.div, {
            className: "project-main",
            initial: "initial",
            animate: "visible",
            exit: "exit",
            transition: { ease: [0.03, 0.87, 0.73, 0.9], duration: 0.6 },
            variants: {
              initial: { opacity: 0, transition: { duration: 0.5 }, x: 200 },
              visible: { opacity: 1, x: 0 },
              exit: { opacity: 0.4, transition: { duration: 0.35 }, x: -800 },
            },
            children: [
              (0, Qe.jsxs)("div", {
                className: "project-content",
                children: [
                  (0, Qe.jsx)("h1", { children: r.title }),
                  (0, Qe.jsx)("p", { children: r.date }),
                  (0, Qe.jsx)("ul", {
                    className: "languages",
                    children: r.languages.map(function (e) {
                      return (0, Qe.jsx)("li", { children: e }, e);
                    }),
                  }),
                ],
              }),
              (0, Qe.jsxs)(zu.div, {
                initial: "initial",
                animate: "visible",
                variants: h,
                transition: { duration: 1.2 },
                className: "img-content",
                children: [
                  (0, Qe.jsxs)("div", {
                    className: "img-container hover",
                    children: [
                      (0, Qe.jsxs)("span", {
                        children: [
                          (0, Qe.jsx)("h3", { children: r.title }),
                          (0, Qe.jsx)("p", { children: r.infos }),
                        ],
                      }),
                      (0, Qe.jsx)("img", {
                        src: r.img,
                        alt: r.title,
                        className: "img",
                      }),
                    ],
                  }),
                  (0, Qe.jsx)("div", {
                    className: "button-container",
                    children: (0, Qe.jsx)("a", {
                      href: r.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover",
                      children: (0, Qe.jsx)("span", {
                        className: "button",
                        children: "voir le site",
                      }),
                    }),
                  }),
                ],
              }),
              (0, Qe.jsx)("span", {
                className: "random-circle",
                style: { left: i, top: u, transform: d },
              }),
            ],
          });
        },
        Qu = function () {
          return (0, Qe.jsx)("main", {
            children: (0, Qe.jsxs)("div", {
              className: "project",
              children: [
                (0, Qe.jsx)(Ye, {}),
                (0, Qe.jsx)(Xe, {}),
                (0, Qe.jsx)(Ke, {}),
                (0, Qe.jsx)(qu, { projectNumber: 0 }),
                (0, Qe.jsx)(it, { left: "/", right: "/projet-2" }),
              ],
            }),
          });
        },
        Yu = function () {
          return (0, Qe.jsx)("main", {
            children: (0, Qe.jsxs)("div", {
              className: "project",
              children: [
                (0, Qe.jsx)(Ye, {}),
                (0, Qe.jsx)(Xe, {}),
                (0, Qe.jsx)(Ke, {}),
                (0, Qe.jsx)(qu, { projectNumber: 1 }),
                (0, Qe.jsx)(it, { left: "/projet-1", right: "/projet-3" }),
              ],
            }),
          });
        },
        Xu = function () {
          return (0, Qe.jsx)("main", {
            children: (0, Qe.jsxs)("div", {
              className: "project",
              children: [
                (0, Qe.jsx)(Ye, {}),
                (0, Qe.jsx)(Xe, {}),
                (0, Qe.jsx)(Ke, {}),
                (0, Qe.jsx)(qu, { projectNumber: 2 }),
                (0, Qe.jsx)(it, { left: "/projet-2", right: "/contact" }),
              ],
            }),
          });
        };
      function Ku() {
        var e = (0, t.useRef)(!1);
        return (
          vt(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          e
        );
      }
      var Gu = (function (e) {
        g(n, e);
        var t = k(n);
        function n() {
          return d(this, n), t.apply(this, arguments);
        }
        return (
          m(n, [
            {
              key: "getSnapshotBeforeUpdate",
              value: function (e) {
                var t = this.props.childRef.current;
                if (t && e.isPresent && !this.props.isPresent) {
                  var n = this.props.sizeRef.current;
                  (n.height = t.offsetHeight || 0),
                    (n.width = t.offsetWidth || 0),
                    (n.top = t.offsetTop),
                    (n.left = t.offsetLeft);
                }
                return null;
              },
            },
            { key: "componentDidUpdate", value: function () {} },
            {
              key: "render",
              value: function () {
                return this.props.children;
              },
            },
          ]),
          n
        );
      })(t.Component);
      function Zu(e) {
        var n = e.children,
          r = e.isPresent,
          a = (0, t.useId)(),
          i = (0, t.useRef)(null),
          o = (0, t.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, t.useInsertionEffect)(
            function () {
              var e = o.current,
                t = e.width,
                n = e.height,
                l = e.top,
                u = e.left;
              if (!r && i.current && t && n) {
                i.current.dataset.motionPopId = a;
                var s = document.createElement("style");
                return (
                  document.head.appendChild(s),
                  s.sheet &&
                    s.sheet.insertRule(
                      '\n          [data-motion-pop-id="'
                        .concat(
                          a,
                          '"] {\n            position: absolute !important;\n            width: '
                        )
                        .concat(t, "px !important;\n            height: ")
                        .concat(n, "px !important;\n            top: ")
                        .concat(l, "px !important;\n            left: ")
                        .concat(u, "px !important;\n          }\n        ")
                    ),
                  function () {
                    document.head.removeChild(s);
                  }
                );
              }
            },
            [r]
          ),
          t.createElement(
            Gu,
            { isPresent: r, childRef: i, sizeRef: o },
            t.cloneElement(n, { ref: i })
          )
        );
      }
      var Ju = function (e) {
        var n = e.children,
          r = e.initial,
          a = e.isPresent,
          i = e.onExitComplete,
          o = e.custom,
          l = e.presenceAffectsLayout,
          u = e.mode,
          s = jt(es),
          c = (0, t.useId)(),
          f = (0, t.useMemo)(
            function () {
              return {
                id: c,
                initial: r,
                isPresent: a,
                custom: o,
                onExitComplete: function (e) {
                  s.set(e, !0);
                  var t,
                    n = C(s.values());
                  try {
                    for (n.s(); !(t = n.n()).done; ) {
                      if (!t.value) return;
                    }
                  } catch (r) {
                    n.e(r);
                  } finally {
                    n.f();
                  }
                  i && i();
                },
                register: function (e) {
                  return (
                    s.set(e, !1),
                    function () {
                      return s.delete(e);
                    }
                  );
                },
              };
            },
            l ? void 0 : [a]
          );
        return (
          (0, t.useMemo)(
            function () {
              s.forEach(function (e, t) {
                return s.set(t, !1);
              });
            },
            [a]
          ),
          t.useEffect(
            function () {
              !a && !s.size && i && i();
            },
            [a]
          ),
          "popLayout" === u && (n = t.createElement(Zu, { isPresent: a }, n)),
          t.createElement(pt.Provider, { value: f }, n)
        );
      };
      function es() {
        return new Map();
      }
      var ts = function (e) {
        return e.key || "";
      };
      var ns = function (e) {
          var n = e.children,
            r = e.custom,
            a = e.initial,
            i = void 0 === a || a,
            o = e.onExitComplete,
            l = e.exitBeforeEnter,
            u = e.presenceAffectsLayout,
            c = void 0 === u || u,
            d = e.mode,
            p = void 0 === d ? "sync" : d;
          l &&
            ((p = "wait"), pr(!1, "Replace exitBeforeEnter with mode='wait'"));
          var h = (function () {
              var e = Ku(),
                n = s((0, t.useState)(0), 2),
                r = n[0],
                a = n[1],
                i = (0, t.useCallback)(
                  function () {
                    e.current && a(r + 1);
                  },
                  [r]
                );
              return [
                (0, t.useCallback)(
                  function () {
                    return Vr.postRender(i);
                  },
                  [i]
                ),
                r,
              ];
            })(),
            v = s(h, 1)[0],
            m = (0, t.useContext)(Ot).forceRender;
          m && (v = m);
          var y = Ku(),
            g = (function (e) {
              var n = [];
              return (
                t.Children.forEach(e, function (e) {
                  (0, t.isValidElement)(e) && n.push(e);
                }),
                n
              );
            })(n),
            b = g,
            x = new Set(),
            w = (0, t.useRef)(b),
            k = (0, t.useRef)(new Map()).current,
            S = (0, t.useRef)(!0);
          if (
            (vt(function () {
              (S.current = !1),
                (function (e, t) {
                  e.forEach(function (e) {
                    var n = ts(e);
                    t.set(n, e);
                  });
                })(g, k),
                (w.current = b);
            }),
            sr(function () {
              (S.current = !0), k.clear(), x.clear();
            }),
            S.current)
          )
            return t.createElement(
              t.Fragment,
              null,
              b.map(function (e) {
                return t.createElement(
                  Ju,
                  {
                    key: ts(e),
                    isPresent: !0,
                    initial: !!i && void 0,
                    presenceAffectsLayout: c,
                    mode: p,
                  },
                  e
                );
              })
            );
          b = f(b);
          for (
            var E = w.current.map(ts), C = g.map(ts), P = E.length, T = 0;
            T < P;
            T++
          ) {
            var j = E[T];
            -1 === C.indexOf(j) && x.add(j);
          }
          return (
            "wait" === p && x.size && (b = []),
            x.forEach(function (e) {
              if (-1 === C.indexOf(e)) {
                var n = k.get(e);
                if (n) {
                  var a = E.indexOf(e);
                  b.splice(
                    a,
                    0,
                    t.createElement(
                      Ju,
                      {
                        key: ts(n),
                        isPresent: !1,
                        onExitComplete: function () {
                          k.delete(e), x.delete(e);
                          var t = w.current.findIndex(function (t) {
                            return t.key === e;
                          });
                          if ((w.current.splice(t, 1), !x.size)) {
                            if (((w.current = g), !1 === y.current)) return;
                            v(), o && o();
                          }
                        },
                        custom: r,
                        presenceAffectsLayout: c,
                        mode: p,
                      },
                      n
                    )
                  );
                }
              }
            }),
            (b = b.map(function (e) {
              var n = e.key;
              return x.has(n)
                ? e
                : t.createElement(
                    Ju,
                    {
                      key: ts(e),
                      isPresent: !0,
                      presenceAffectsLayout: c,
                      mode: p,
                    },
                    e
                  );
            })),
            t.createElement(
              t.Fragment,
              null,
              x.size
                ? b
                : b.map(function (e) {
                    return (0, t.cloneElement)(e);
                  })
            )
          );
        },
        rs = function () {
          return (0, Qe.jsx)(Be, {
            children: (0, Qe.jsx)(ns, {
              children: (0, Qe.jsxs)(De, {
                children: [
                  (0, Qe.jsx)(_e, { path: "/", element: (0, Qe.jsx)(Wu, {}) }),
                  (0, Qe.jsx)(_e, {
                    path: "/projet-1",
                    element: (0, Qe.jsx)(Qu, {}),
                  }),
                  (0, Qe.jsx)(_e, {
                    path: "/projet-2",
                    element: (0, Qe.jsx)(Yu, {}),
                  }),
                  (0, Qe.jsx)(_e, {
                    path: "/projet-3",
                    element: (0, Qe.jsx)(Xu, {}),
                  }),
                  (0, Qe.jsx)(_e, {
                    path: "/contact",
                    element: (0, Qe.jsx)(Uu, {}),
                  }),
                  (0, Qe.jsx)(_e, { path: "*", element: (0, Qe.jsx)(Hu, {}) }),
                ],
              }),
            }),
          });
        };
      a.createRoot(document.getElementById("root")).render((0, Qe.jsx)(rs, {}));
    })();
})();
//# sourceMappingURL=main.c89511ad.js.map
