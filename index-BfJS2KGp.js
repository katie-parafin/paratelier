(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Rh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var pd = { exports: {} },
  es = {},
  hd = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xo = Symbol.for("react.element"),
  zh = Symbol.for("react.portal"),
  Lh = Symbol.for("react.fragment"),
  Nh = Symbol.for("react.strict_mode"),
  Ih = Symbol.for("react.profiler"),
  Mh = Symbol.for("react.provider"),
  Fh = Symbol.for("react.context"),
  Th = Symbol.for("react.forward_ref"),
  Oh = Symbol.for("react.suspense"),
  Dh = Symbol.for("react.memo"),
  Ah = Symbol.for("react.lazy"),
  _u = Symbol.iterator;
function Uh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_u && e[_u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var md = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gd = Object.assign,
  vd = {};
function kr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = vd),
    (this.updater = n || md);
}
kr.prototype.isReactComponent = {};
kr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
kr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function yd() {}
yd.prototype = kr.prototype;
function xa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = vd),
    (this.updater = n || md);
}
var wa = (xa.prototype = new yd());
wa.constructor = xa;
gd(wa, kr.prototype);
wa.isPureReactComponent = !0;
var $u = Array.isArray,
  xd = Object.prototype.hasOwnProperty,
  Sa = { current: null },
  wd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sd(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      xd.call(t, r) && !wd.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: xo,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Sa.current,
  };
}
function bh(e, t) {
  return {
    $$typeof: xo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ka(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xo;
}
function Bh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Eu = /\/+/g;
function Rs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Bh("" + e.key)
    : t.toString(36);
}
function qo(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xo:
          case zh:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Rs(s, 0) : r),
      $u(o)
        ? ((n = ""),
          e != null && (n = e.replace(Eu, "$&/") + "/"),
          qo(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (ka(o) &&
            (o = bh(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Eu, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), $u(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Rs(i, l);
      s += qo(i, t, n, a, o);
    }
  else if (((a = Uh(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Rs(i, l++)), (s += qo(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Po(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    qo(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Hh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null },
  ei = { transition: null },
  Vh = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: ei,
    ReactCurrentOwner: Sa,
  };
function kd() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: Po,
  forEach: function (e, t, n) {
    Po(
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
      Po(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Po(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ka(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = kr;
B.Fragment = Lh;
B.Profiler = Ih;
B.PureComponent = xa;
B.StrictMode = Nh;
B.Suspense = Oh;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vh;
B.act = kd;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = gd({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Sa.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      xd.call(t, a) &&
        !wd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: xo, type: e.type, key: o, ref: i, props: r, _owner: s };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Fh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Mh, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Sd;
B.createFactory = function (e) {
  var t = Sd.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Th, render: e };
};
B.isValidElement = ka;
B.lazy = function (e) {
  return { $$typeof: Ah, _payload: { _status: -1, _result: e }, _init: Hh };
};
B.memo = function (e, t) {
  return { $$typeof: Dh, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = ei.transition;
  ei.transition = {};
  try {
    e();
  } finally {
    ei.transition = t;
  }
};
B.unstable_act = kd;
B.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Te.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
B.useId = function () {
  return Te.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Te.current.useRef(e);
};
B.useState = function (e) {
  return Te.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Te.current.useTransition();
};
B.version = "18.3.1";
hd.exports = B;
var R = hd.exports;
const W = Rh(R);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wh = R,
  Gh = Symbol.for("react.element"),
  Kh = Symbol.for("react.fragment"),
  Qh = Object.prototype.hasOwnProperty,
  Yh = Wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Xh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cd(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Qh.call(t, r) && !Xh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Gh,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Yh.current,
  };
}
es.Fragment = Kh;
es.jsx = Cd;
es.jsxs = Cd;
pd.exports = es;
var u = pd.exports,
  fl = {},
  jd = { exports: {} },
  qe = {},
  _d = { exports: {} },
  $d = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, L) {
    var z = P.length;
    P.push(L);
    e: for (; 0 < z; ) {
      var M = (z - 1) >>> 1,
        F = P[M];
      if (0 < o(F, L)) (P[M] = L), (P[z] = F), (z = M);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var L = P[0],
      z = P.pop();
    if (z !== L) {
      P[0] = z;
      e: for (var M = 0, F = P.length, re = F >>> 1; M < re; ) {
        var ee = 2 * (M + 1) - 1,
          te = P[ee],
          ve = ee + 1,
          De = P[ve];
        if (0 > o(te, z))
          ve < F && 0 > o(De, te)
            ? ((P[M] = De), (P[ve] = z), (M = ve))
            : ((P[M] = te), (P[ee] = z), (M = ee));
        else if (ve < F && 0 > o(De, z)) (P[M] = De), (P[ve] = z), (M = ve);
        else break e;
      }
    }
    return L;
  }
  function o(P, L) {
    var z = P.sortIndex - L.sortIndex;
    return z !== 0 ? z : P.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    c = [],
    d = 1,
    p = null,
    f = 3,
    v = !1,
    y = !1,
    w = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(P) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= P)
        r(c), (L.sortIndex = L.expirationTime), t(a, L);
      else break;
      L = n(c);
    }
  }
  function x(P) {
    if (((w = !1), g(P), !y))
      if (n(a) !== null) (y = !0), A(C);
      else {
        var L = n(c);
        L !== null && D(x, L.startTime - P);
      }
  }
  function C(P, L) {
    (y = !1), w && ((w = !1), m($), ($ = -1)), (v = !0);
    var z = f;
    try {
      for (
        g(L), p = n(a);
        p !== null && (!(p.expirationTime > L) || (P && !O()));

      ) {
        var M = p.callback;
        if (typeof M == "function") {
          (p.callback = null), (f = p.priorityLevel);
          var F = M(p.expirationTime <= L);
          (L = e.unstable_now()),
            typeof F == "function" ? (p.callback = F) : p === n(a) && r(a),
            g(L);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var re = !0;
      else {
        var ee = n(c);
        ee !== null && D(x, ee.startTime - L), (re = !1);
      }
      return re;
    } finally {
      (p = null), (f = z), (v = !1);
    }
  }
  var S = !1,
    k = null,
    $ = -1,
    _ = 5,
    N = -1;
  function O() {
    return !(e.unstable_now() - N < _);
  }
  function b() {
    if (k !== null) {
      var P = e.unstable_now();
      N = P;
      var L = !0;
      try {
        L = k(!0, P);
      } finally {
        L ? K() : ((S = !1), (k = null));
      }
    } else S = !1;
  }
  var K;
  if (typeof h == "function")
    K = function () {
      h(b);
    };
  else if (typeof MessageChannel < "u") {
    var fe = new MessageChannel(),
      Q = fe.port2;
    (fe.port1.onmessage = b),
      (K = function () {
        Q.postMessage(null);
      });
  } else
    K = function () {
      j(b, 0);
    };
  function A(P) {
    (k = P), S || ((S = !0), K());
  }
  function D(P, L) {
    $ = j(function () {
      P(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), A(C));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = f;
      }
      var z = f;
      f = L;
      try {
        return P();
      } finally {
        f = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, L) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = f;
      f = P;
      try {
        return L();
      } finally {
        f = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, L, z) {
      var M = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? M + z : M))
          : (z = M),
        P)
      ) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return (
        (F = z + F),
        (P = {
          id: d++,
          callback: L,
          priorityLevel: P,
          startTime: z,
          expirationTime: F,
          sortIndex: -1,
        }),
        z > M
          ? ((P.sortIndex = z),
            t(c, P),
            n(a) === null &&
              P === n(c) &&
              (w ? (m($), ($ = -1)) : (w = !0), D(x, z - M)))
          : ((P.sortIndex = F), t(a, P), y || v || ((y = !0), A(C))),
        P
      );
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (P) {
      var L = f;
      return function () {
        var z = f;
        f = L;
        try {
          return P.apply(this, arguments);
        } finally {
          f = z;
        }
      };
    });
})($d);
_d.exports = $d;
var Jh = _d.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zh = R,
  Ze = Jh;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var Ed = new Set(),
  eo = {};
function Ln(e, t) {
  sr(e, t), sr(e + "Capture", t);
}
function sr(e, t) {
  for (eo[e] = t, e = 0; e < t.length; e++) Ed.add(t[e]);
}
var Mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pl = Object.prototype.hasOwnProperty,
  qh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Pu = {},
  Ru = {};
function e0(e) {
  return pl.call(Ru, e)
    ? !0
    : pl.call(Pu, e)
    ? !1
    : qh.test(e)
    ? (Ru[e] = !0)
    : ((Pu[e] = !0), !1);
}
function t0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function n0(e, t, n, r) {
  if (t === null || typeof t > "u" || t0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Oe(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  $e[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  $e[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  $e[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  $e[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  $e[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  $e[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  $e[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ca = /[\-:]([a-z])/g;
function ja(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ca, ja);
    $e[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ca, ja);
    $e[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ca, ja);
  $e[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  $e[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new Oe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  $e[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _a(e, t, n, r) {
  var o = $e.hasOwnProperty(t) ? $e[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (n0(t, n, o, r) && (n = null),
    r || o === null
      ? e0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var At = Zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ro = Symbol.for("react.element"),
  Dn = Symbol.for("react.portal"),
  An = Symbol.for("react.fragment"),
  $a = Symbol.for("react.strict_mode"),
  hl = Symbol.for("react.profiler"),
  Pd = Symbol.for("react.provider"),
  Rd = Symbol.for("react.context"),
  Ea = Symbol.for("react.forward_ref"),
  ml = Symbol.for("react.suspense"),
  gl = Symbol.for("react.suspense_list"),
  Pa = Symbol.for("react.memo"),
  Vt = Symbol.for("react.lazy"),
  zd = Symbol.for("react.offscreen"),
  zu = Symbol.iterator;
function Pr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (zu && e[zu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ae = Object.assign,
  zs;
function Tr(e) {
  if (zs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zs = (t && t[1]) || "";
    }
  return (
    `
` +
    zs +
    e
  );
}
var Ls = !1;
function Ns(e, t) {
  if (!e || Ls) return "";
  Ls = !0;
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
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Ls = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Tr(e) : "";
}
function r0(e) {
  switch (e.tag) {
    case 5:
      return Tr(e.type);
    case 16:
      return Tr("Lazy");
    case 13:
      return Tr("Suspense");
    case 19:
      return Tr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ns(e.type, !1)), e;
    case 11:
      return (e = Ns(e.type.render, !1)), e;
    case 1:
      return (e = Ns(e.type, !0)), e;
    default:
      return "";
  }
}
function vl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case An:
      return "Fragment";
    case Dn:
      return "Portal";
    case hl:
      return "Profiler";
    case $a:
      return "StrictMode";
    case ml:
      return "Suspense";
    case gl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Rd:
        return (e.displayName || "Context") + ".Consumer";
      case Pd:
        return (e._context.displayName || "Context") + ".Provider";
      case Ea:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Pa:
        return (
          (t = e.displayName || null), t !== null ? t : vl(e.type) || "Memo"
        );
      case Vt:
        (t = e._payload), (e = e._init);
        try {
          return vl(e(t));
        } catch {}
    }
  return null;
}
function o0(e) {
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
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
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
      return vl(t);
    case 8:
      return t === $a ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ln(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ld(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function i0(e) {
  var t = Ld(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function zo(e) {
  e._valueTracker || (e._valueTracker = i0(e));
}
function Nd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ld(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function wi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yl(e, t) {
  var n = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Lu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ln(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Id(e, t) {
  (t = t.checked), t != null && _a(e, "checked", t, !1);
}
function xl(e, t) {
  Id(e, t);
  var n = ln(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? wl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && wl(e, t.type, ln(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function wl(e, t, n) {
  (t !== "number" || wi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Or = Array.isArray;
function qn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ln(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Sl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Or(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ln(n) };
}
function Md(e, t) {
  var n = ln(t.value),
    r = ln(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Mu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Lo,
  Td = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Lo = Lo || document.createElement("div"),
          Lo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Lo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function to(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Br = {
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
  s0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Br).forEach(function (e) {
  s0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Br[t] = Br[e]);
  });
});
function Od(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Br.hasOwnProperty(e) && Br[e])
    ? ("" + t).trim()
    : t + "px";
}
function Dd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Od(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var l0 = ae(
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
function Cl(e, t) {
  if (t) {
    if (l0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function jl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var _l = null;
function Ra(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $l = null,
  er = null,
  tr = null;
function Fu(e) {
  if ((e = ko(e))) {
    if (typeof $l != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = is(t)), $l(e.stateNode, e.type, t));
  }
}
function Ad(e) {
  er ? (tr ? tr.push(e) : (tr = [e])) : (er = e);
}
function Ud() {
  if (er) {
    var e = er,
      t = tr;
    if (((tr = er = null), Fu(e), t)) for (e = 0; e < t.length; e++) Fu(t[e]);
  }
}
function bd(e, t) {
  return e(t);
}
function Bd() {}
var Is = !1;
function Hd(e, t, n) {
  if (Is) return e(t, n);
  Is = !0;
  try {
    return bd(e, t, n);
  } finally {
    (Is = !1), (er !== null || tr !== null) && (Bd(), Ud());
  }
}
function no(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = is(n);
  if (r === null) return null;
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
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var El = !1;
if (Mt)
  try {
    var Rr = {};
    Object.defineProperty(Rr, "passive", {
      get: function () {
        El = !0;
      },
    }),
      window.addEventListener("test", Rr, Rr),
      window.removeEventListener("test", Rr, Rr);
  } catch {
    El = !1;
  }
function a0(e, t, n, r, o, i, s, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Hr = !1,
  Si = null,
  ki = !1,
  Pl = null,
  u0 = {
    onError: function (e) {
      (Hr = !0), (Si = e);
    },
  };
function c0(e, t, n, r, o, i, s, l, a) {
  (Hr = !1), (Si = null), a0.apply(u0, arguments);
}
function d0(e, t, n, r, o, i, s, l, a) {
  if ((c0.apply(this, arguments), Hr)) {
    if (Hr) {
      var c = Si;
      (Hr = !1), (Si = null);
    } else throw Error(E(198));
    ki || ((ki = !0), (Pl = c));
  }
}
function Nn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Tu(e) {
  if (Nn(e) !== e) throw Error(E(188));
}
function f0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Nn(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Tu(o), e;
        if (i === r) return Tu(o), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Wd(e) {
  return (e = f0(e)), e !== null ? Gd(e) : null;
}
function Gd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Kd = Ze.unstable_scheduleCallback,
  Ou = Ze.unstable_cancelCallback,
  p0 = Ze.unstable_shouldYield,
  h0 = Ze.unstable_requestPaint,
  de = Ze.unstable_now,
  m0 = Ze.unstable_getCurrentPriorityLevel,
  za = Ze.unstable_ImmediatePriority,
  Qd = Ze.unstable_UserBlockingPriority,
  Ci = Ze.unstable_NormalPriority,
  g0 = Ze.unstable_LowPriority,
  Yd = Ze.unstable_IdlePriority,
  ts = null,
  jt = null;
function v0(e) {
  if (jt && typeof jt.onCommitFiberRoot == "function")
    try {
      jt.onCommitFiberRoot(ts, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : w0,
  y0 = Math.log,
  x0 = Math.LN2;
function w0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((y0(e) / x0) | 0)) | 0;
}
var No = 64,
  Io = 4194304;
function Dr(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
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
function ji(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Dr(l)) : ((i &= s), i !== 0 && (r = Dr(i)));
  } else (s = n & ~o), s !== 0 ? (r = Dr(s)) : i !== 0 && (r = Dr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - pt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function S0(e, t) {
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
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function k0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - pt(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = S0(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Rl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xd() {
  var e = No;
  return (No <<= 1), !(No & 4194240) && (No = 64), e;
}
function Ms(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function wo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n);
}
function C0(e, t) {
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
    var o = 31 - pt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function La(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var G = 0;
function Jd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Zd,
  Na,
  qd,
  ef,
  tf,
  zl = !1,
  Mo = [],
  Zt = null,
  qt = null,
  en = null,
  ro = new Map(),
  oo = new Map(),
  Gt = [],
  j0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Du(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zt = null;
      break;
    case "dragenter":
    case "dragleave":
      qt = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
      break;
    case "pointerover":
    case "pointerout":
      ro.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oo.delete(t.pointerId);
  }
}
function zr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ko(t)), t !== null && Na(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function _0(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Zt = zr(Zt, e, t, n, r, o)), !0;
    case "dragenter":
      return (qt = zr(qt, e, t, n, r, o)), !0;
    case "mouseover":
      return (en = zr(en, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ro.set(i, zr(ro.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), oo.set(i, zr(oo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function nf(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vd(n)), t !== null)) {
          (e.blockedOn = t),
            tf(e.priority, function () {
              qd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ti(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (_l = r), n.target.dispatchEvent(r), (_l = null);
    } else return (t = ko(n)), t !== null && Na(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Au(e, t, n) {
  ti(e) && n.delete(t);
}
function $0() {
  (zl = !1),
    Zt !== null && ti(Zt) && (Zt = null),
    qt !== null && ti(qt) && (qt = null),
    en !== null && ti(en) && (en = null),
    ro.forEach(Au),
    oo.forEach(Au);
}
function Lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zl ||
      ((zl = !0),
      Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, $0)));
}
function io(e) {
  function t(o) {
    return Lr(o, e);
  }
  if (0 < Mo.length) {
    Lr(Mo[0], e);
    for (var n = 1; n < Mo.length; n++) {
      var r = Mo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Zt !== null && Lr(Zt, e),
      qt !== null && Lr(qt, e),
      en !== null && Lr(en, e),
      ro.forEach(t),
      oo.forEach(t),
      n = 0;
    n < Gt.length;
    n++
  )
    (r = Gt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gt.length && ((n = Gt[0]), n.blockedOn === null); )
    nf(n), n.blockedOn === null && Gt.shift();
}
var nr = At.ReactCurrentBatchConfig,
  _i = !0;
function E0(e, t, n, r) {
  var o = G,
    i = nr.transition;
  nr.transition = null;
  try {
    (G = 1), Ia(e, t, n, r);
  } finally {
    (G = o), (nr.transition = i);
  }
}
function P0(e, t, n, r) {
  var o = G,
    i = nr.transition;
  nr.transition = null;
  try {
    (G = 4), Ia(e, t, n, r);
  } finally {
    (G = o), (nr.transition = i);
  }
}
function Ia(e, t, n, r) {
  if (_i) {
    var o = Ll(e, t, n, r);
    if (o === null) Vs(e, t, r, $i, n), Du(e, r);
    else if (_0(o, e, t, n, r)) r.stopPropagation();
    else if ((Du(e, r), t & 4 && -1 < j0.indexOf(e))) {
      for (; o !== null; ) {
        var i = ko(o);
        if (
          (i !== null && Zd(i),
          (i = Ll(e, t, n, r)),
          i === null && Vs(e, t, r, $i, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Vs(e, t, r, null, n);
  }
}
var $i = null;
function Ll(e, t, n, r) {
  if ((($i = null), (e = Ra(r)), (e = vn(e)), e !== null))
    if (((t = Nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ($i = e), null;
}
function rf(e) {
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
      switch (m0()) {
        case za:
          return 1;
        case Qd:
          return 4;
        case Ci:
        case g0:
          return 16;
        case Yd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  Ma = null,
  ni = null;
function of() {
  if (ni) return ni;
  var e,
    t = Ma,
    n = t.length,
    r,
    o = "value" in Yt ? Yt.value : Yt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (ni = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ri(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Fo() {
  return !0;
}
function Uu() {
  return !1;
}
function et(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Fo
        : Uu),
      (this.isPropagationStopped = Uu),
      this
    );
  }
  return (
    ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Fo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Fo));
      },
      persist: function () {},
      isPersistent: Fo,
    }),
    t
  );
}
var Cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fa = et(Cr),
  So = ae({}, Cr, { view: 0, detail: 0 }),
  R0 = et(So),
  Fs,
  Ts,
  Nr,
  ns = ae({}, So, {
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
    getModifierState: Ta,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nr &&
            (Nr && e.type === "mousemove"
              ? ((Fs = e.screenX - Nr.screenX), (Ts = e.screenY - Nr.screenY))
              : (Ts = Fs = 0),
            (Nr = e)),
          Fs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ts;
    },
  }),
  bu = et(ns),
  z0 = ae({}, ns, { dataTransfer: 0 }),
  L0 = et(z0),
  N0 = ae({}, So, { relatedTarget: 0 }),
  Os = et(N0),
  I0 = ae({}, Cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  M0 = et(I0),
  F0 = ae({}, Cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  T0 = et(F0),
  O0 = ae({}, Cr, { data: 0 }),
  Bu = et(O0),
  D0 = {
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
  A0 = {
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
  U0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function b0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = U0[e]) ? !!t[e] : !1;
}
function Ta() {
  return b0;
}
var B0 = ae({}, So, {
    key: function (e) {
      if (e.key) {
        var t = D0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ri(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? A0[e.keyCode] || "Unidentified"
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
    getModifierState: Ta,
    charCode: function (e) {
      return e.type === "keypress" ? ri(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ri(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  H0 = et(B0),
  V0 = ae({}, ns, {
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
  }),
  Hu = et(V0),
  W0 = ae({}, So, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ta,
  }),
  G0 = et(W0),
  K0 = ae({}, Cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Q0 = et(K0),
  Y0 = ae({}, ns, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  X0 = et(Y0),
  J0 = [9, 13, 27, 32],
  Oa = Mt && "CompositionEvent" in window,
  Vr = null;
Mt && "documentMode" in document && (Vr = document.documentMode);
var Z0 = Mt && "TextEvent" in window && !Vr,
  sf = Mt && (!Oa || (Vr && 8 < Vr && 11 >= Vr)),
  Vu = " ",
  Wu = !1;
function lf(e, t) {
  switch (e) {
    case "keyup":
      return J0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function af(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function q0(e, t) {
  switch (e) {
    case "compositionend":
      return af(t);
    case "keypress":
      return t.which !== 32 ? null : ((Wu = !0), Vu);
    case "textInput":
      return (e = t.data), e === Vu && Wu ? null : e;
    default:
      return null;
  }
}
function em(e, t) {
  if (Un)
    return e === "compositionend" || (!Oa && lf(e, t))
      ? ((e = of()), (ni = Ma = Yt = null), (Un = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return sf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var tm = {
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
function Gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!tm[e.type] : t === "textarea";
}
function uf(e, t, n, r) {
  Ad(r),
    (t = Ei(t, "onChange")),
    0 < t.length &&
      ((n = new Fa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wr = null,
  so = null;
function nm(e) {
  wf(e, 0);
}
function rs(e) {
  var t = Hn(e);
  if (Nd(t)) return e;
}
function rm(e, t) {
  if (e === "change") return t;
}
var cf = !1;
if (Mt) {
  var Ds;
  if (Mt) {
    var As = "oninput" in document;
    if (!As) {
      var Ku = document.createElement("div");
      Ku.setAttribute("oninput", "return;"),
        (As = typeof Ku.oninput == "function");
    }
    Ds = As;
  } else Ds = !1;
  cf = Ds && (!document.documentMode || 9 < document.documentMode);
}
function Qu() {
  Wr && (Wr.detachEvent("onpropertychange", df), (so = Wr = null));
}
function df(e) {
  if (e.propertyName === "value" && rs(so)) {
    var t = [];
    uf(t, so, e, Ra(e)), Hd(nm, t);
  }
}
function om(e, t, n) {
  e === "focusin"
    ? (Qu(), (Wr = t), (so = n), Wr.attachEvent("onpropertychange", df))
    : e === "focusout" && Qu();
}
function im(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return rs(so);
}
function sm(e, t) {
  if (e === "click") return rs(t);
}
function lm(e, t) {
  if (e === "input" || e === "change") return rs(t);
}
function am(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gt = typeof Object.is == "function" ? Object.is : am;
function lo(e, t) {
  if (gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!pl.call(t, o) || !gt(e[o], t[o])) return !1;
  }
  return !0;
}
function Yu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xu(e, t) {
  var n = Yu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Yu(n);
  }
}
function ff(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ff(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function pf() {
  for (var e = window, t = wi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = wi(e.document);
  }
  return t;
}
function Da(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function um(e) {
  var t = pf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ff(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Da(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Xu(n, i));
        var s = Xu(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var cm = Mt && "documentMode" in document && 11 >= document.documentMode,
  bn = null,
  Nl = null,
  Gr = null,
  Il = !1;
function Ju(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Il ||
    bn == null ||
    bn !== wi(r) ||
    ((r = bn),
    "selectionStart" in r && Da(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Gr && lo(Gr, r)) ||
      ((Gr = r),
      (r = Ei(Nl, "onSelect")),
      0 < r.length &&
        ((t = new Fa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = bn))));
}
function To(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bn = {
    animationend: To("Animation", "AnimationEnd"),
    animationiteration: To("Animation", "AnimationIteration"),
    animationstart: To("Animation", "AnimationStart"),
    transitionend: To("Transition", "TransitionEnd"),
  },
  Us = {},
  hf = {};
Mt &&
  ((hf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bn.animationend.animation,
    delete Bn.animationiteration.animation,
    delete Bn.animationstart.animation),
  "TransitionEvent" in window || delete Bn.transitionend.transition);
function os(e) {
  if (Us[e]) return Us[e];
  if (!Bn[e]) return e;
  var t = Bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hf) return (Us[e] = t[n]);
  return e;
}
var mf = os("animationend"),
  gf = os("animationiteration"),
  vf = os("animationstart"),
  yf = os("transitionend"),
  xf = new Map(),
  Zu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function cn(e, t) {
  xf.set(e, t), Ln(t, [e]);
}
for (var bs = 0; bs < Zu.length; bs++) {
  var Bs = Zu[bs],
    dm = Bs.toLowerCase(),
    fm = Bs[0].toUpperCase() + Bs.slice(1);
  cn(dm, "on" + fm);
}
cn(mf, "onAnimationEnd");
cn(gf, "onAnimationIteration");
cn(vf, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(yf, "onTransitionEnd");
sr("onMouseEnter", ["mouseout", "mouseover"]);
sr("onMouseLeave", ["mouseout", "mouseover"]);
sr("onPointerEnter", ["pointerout", "pointerover"]);
sr("onPointerLeave", ["pointerout", "pointerover"]);
Ln(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ln(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ar =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  pm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));
function qu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), d0(r, t, void 0, e), (e.currentTarget = null);
}
function wf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          qu(o, l, c), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          qu(o, l, c), (i = a);
        }
    }
  }
  if (ki) throw ((e = Pl), (ki = !1), (Pl = null), e);
}
function J(e, t) {
  var n = t[Dl];
  n === void 0 && (n = t[Dl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Sf(t, e, 2, !1), n.add(r));
}
function Hs(e, t, n) {
  var r = 0;
  t && (r |= 4), Sf(n, e, r, t);
}
var Oo = "_reactListening" + Math.random().toString(36).slice(2);
function ao(e) {
  if (!e[Oo]) {
    (e[Oo] = !0),
      Ed.forEach(function (n) {
        n !== "selectionchange" && (pm.has(n) || Hs(n, !1, e), Hs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Oo] || ((t[Oo] = !0), Hs("selectionchange", !1, t));
  }
}
function Sf(e, t, n, r) {
  switch (rf(t)) {
    case 1:
      var o = E0;
      break;
    case 4:
      o = P0;
      break;
    default:
      o = Ia;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !El ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Vs(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = vn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Hd(function () {
    var c = i,
      d = Ra(n),
      p = [];
    e: {
      var f = xf.get(e);
      if (f !== void 0) {
        var v = Fa,
          y = e;
        switch (e) {
          case "keypress":
            if (ri(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = H0;
            break;
          case "focusin":
            (y = "focus"), (v = Os);
            break;
          case "focusout":
            (y = "blur"), (v = Os);
            break;
          case "beforeblur":
          case "afterblur":
            v = Os;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = bu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = L0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = G0;
            break;
          case mf:
          case gf:
          case vf:
            v = M0;
            break;
          case yf:
            v = Q0;
            break;
          case "scroll":
            v = R0;
            break;
          case "wheel":
            v = X0;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = T0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Hu;
        }
        var w = (t & 4) !== 0,
          j = !w && e === "scroll",
          m = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var h = c, g; h !== null; ) {
          g = h;
          var x = g.stateNode;
          if (
            (g.tag === 5 &&
              x !== null &&
              ((g = x),
              m !== null && ((x = no(h, m)), x != null && w.push(uo(h, x, g)))),
            j)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((f = new v(f, y, null, n, d)), p.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== _l &&
            (y = n.relatedTarget || n.fromElement) &&
            (vn(y) || y[Ft]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = c),
              (y = y ? vn(y) : null),
              y !== null &&
                ((j = Nn(y)), y !== j || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = c)),
          v !== y)
        ) {
          if (
            ((w = bu),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Hu),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (j = v == null ? f : Hn(v)),
            (g = y == null ? f : Hn(y)),
            (f = new w(x, h + "leave", v, n, d)),
            (f.target = j),
            (f.relatedTarget = g),
            (x = null),
            vn(d) === c &&
              ((w = new w(m, h + "enter", y, n, d)),
              (w.target = g),
              (w.relatedTarget = j),
              (x = w)),
            (j = x),
            v && y)
          )
            t: {
              for (w = v, m = y, h = 0, g = w; g; g = Mn(g)) h++;
              for (g = 0, x = m; x; x = Mn(x)) g++;
              for (; 0 < h - g; ) (w = Mn(w)), h--;
              for (; 0 < g - h; ) (m = Mn(m)), g--;
              for (; h--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = Mn(w)), (m = Mn(m));
              }
              w = null;
            }
          else w = null;
          v !== null && ec(p, f, v, w, !1),
            y !== null && j !== null && ec(p, j, y, w, !0);
        }
      }
      e: {
        if (
          ((f = c ? Hn(c) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var C = rm;
        else if (Gu(f))
          if (cf) C = lm;
          else {
            C = im;
            var S = om;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = sm);
        if (C && (C = C(e, c))) {
          uf(p, C, n, d);
          break e;
        }
        S && S(e, f, c),
          e === "focusout" &&
            (S = f._wrapperState) &&
            S.controlled &&
            f.type === "number" &&
            wl(f, "number", f.value);
      }
      switch (((S = c ? Hn(c) : window), e)) {
        case "focusin":
          (Gu(S) || S.contentEditable === "true") &&
            ((bn = S), (Nl = c), (Gr = null));
          break;
        case "focusout":
          Gr = Nl = bn = null;
          break;
        case "mousedown":
          Il = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Il = !1), Ju(p, n, d);
          break;
        case "selectionchange":
          if (cm) break;
        case "keydown":
        case "keyup":
          Ju(p, n, d);
      }
      var k;
      if (Oa)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        Un
          ? lf(e, n) && ($ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ &&
        (sf &&
          n.locale !== "ko" &&
          (Un || $ !== "onCompositionStart"
            ? $ === "onCompositionEnd" && Un && (k = of())
            : ((Yt = d),
              (Ma = "value" in Yt ? Yt.value : Yt.textContent),
              (Un = !0))),
        (S = Ei(c, $)),
        0 < S.length &&
          (($ = new Bu($, e, null, n, d)),
          p.push({ event: $, listeners: S }),
          k ? ($.data = k) : ((k = af(n)), k !== null && ($.data = k)))),
        (k = Z0 ? q0(e, n) : em(e, n)) &&
          ((c = Ei(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Bu("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: c }),
            (d.data = k)));
    }
    wf(p, t);
  });
}
function uo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ei(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = no(e, n)),
      i != null && r.unshift(uo(e, i, o)),
      (i = no(e, t)),
      i != null && r.push(uo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ec(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      o
        ? ((a = no(n, i)), a != null && s.unshift(uo(n, a, l)))
        : o || ((a = no(n, i)), a != null && s.push(uo(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var hm = /\r\n?/g,
  mm = /\u0000|\uFFFD/g;
function tc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      hm,
      `
`
    )
    .replace(mm, "");
}
function Do(e, t, n) {
  if (((t = tc(t)), tc(e) !== t && n)) throw Error(E(425));
}
function Pi() {}
var Ml = null,
  Fl = null;
function Tl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ol = typeof setTimeout == "function" ? setTimeout : void 0,
  gm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nc = typeof Promise == "function" ? Promise : void 0,
  vm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof nc < "u"
      ? function (e) {
          return nc.resolve(null).then(e).catch(ym);
        }
      : Ol;
function ym(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ws(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), io(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  io(t);
}
function tn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function rc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jr = Math.random().toString(36).slice(2),
  Ct = "__reactFiber$" + jr,
  co = "__reactProps$" + jr,
  Ft = "__reactContainer$" + jr,
  Dl = "__reactEvents$" + jr,
  xm = "__reactListeners$" + jr,
  wm = "__reactHandles$" + jr;
function vn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[Ct])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rc(e); e !== null; ) {
          if ((n = e[Ct])) return n;
          e = rc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ko(e) {
  return (
    (e = e[Ct] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function is(e) {
  return e[co] || null;
}
var Al = [],
  Vn = -1;
function dn(e) {
  return { current: e };
}
function q(e) {
  0 > Vn || ((e.current = Al[Vn]), (Al[Vn] = null), Vn--);
}
function X(e, t) {
  Vn++, (Al[Vn] = e.current), (e.current = t);
}
var an = {},
  Ne = dn(an),
  Be = dn(!1),
  $n = an;
function lr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function Ri() {
  q(Be), q(Ne);
}
function oc(e, t, n) {
  if (Ne.current !== an) throw Error(E(168));
  X(Ne, t), X(Be, n);
}
function kf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, o0(e) || "Unknown", o));
  return ae({}, n, r);
}
function zi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || an),
    ($n = Ne.current),
    X(Ne, e),
    X(Be, Be.current),
    !0
  );
}
function ic(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = kf(e, t, $n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(Be),
      q(Ne),
      X(Ne, e))
    : q(Be),
    X(Be, n);
}
var Rt = null,
  ss = !1,
  Gs = !1;
function Cf(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function Sm(e) {
  (ss = !0), Cf(e);
}
function fn() {
  if (!Gs && Rt !== null) {
    Gs = !0;
    var e = 0,
      t = G;
    try {
      var n = Rt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Rt = null), (ss = !1);
    } catch (o) {
      throw (Rt !== null && (Rt = Rt.slice(e + 1)), Kd(za, fn), o);
    } finally {
      (G = t), (Gs = !1);
    }
  }
  return null;
}
var Wn = [],
  Gn = 0,
  Li = null,
  Ni = 0,
  tt = [],
  nt = 0,
  En = null,
  zt = 1,
  Lt = "";
function hn(e, t) {
  (Wn[Gn++] = Ni), (Wn[Gn++] = Li), (Li = e), (Ni = t);
}
function jf(e, t, n) {
  (tt[nt++] = zt), (tt[nt++] = Lt), (tt[nt++] = En), (En = e);
  var r = zt;
  e = Lt;
  var o = 32 - pt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - pt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (zt = (1 << (32 - pt(t) + o)) | (n << o) | r),
      (Lt = i + e);
  } else (zt = (1 << i) | (n << o) | r), (Lt = e);
}
function Aa(e) {
  e.return !== null && (hn(e, 1), jf(e, 1, 0));
}
function Ua(e) {
  for (; e === Li; )
    (Li = Wn[--Gn]), (Wn[Gn] = null), (Ni = Wn[--Gn]), (Wn[Gn] = null);
  for (; e === En; )
    (En = tt[--nt]),
      (tt[nt] = null),
      (Lt = tt[--nt]),
      (tt[nt] = null),
      (zt = tt[--nt]),
      (tt[nt] = null);
}
var Je = null,
  Ye = null,
  ne = !1,
  ft = null;
function _f(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function sc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Je = e), (Ye = tn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = En !== null ? { id: zt, overflow: Lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ul(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bl(e) {
  if (ne) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!sc(e, t)) {
        if (Ul(e)) throw Error(E(418));
        t = tn(n.nextSibling);
        var r = Je;
        t && sc(e, t)
          ? _f(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ne = !1), (Je = e));
      }
    } else {
      if (Ul(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (ne = !1), (Je = e);
    }
  }
}
function lc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Je = e;
}
function Ao(e) {
  if (e !== Je) return !1;
  if (!ne) return lc(e), (ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Tl(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (Ul(e)) throw ($f(), Error(E(418)));
    for (; t; ) _f(e, t), (t = tn(t.nextSibling));
  }
  if ((lc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = tn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Je ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function $f() {
  for (var e = Ye; e; ) e = tn(e.nextSibling);
}
function ar() {
  (Ye = Je = null), (ne = !1);
}
function ba(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var km = At.ReactCurrentBatchConfig;
function Ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Uo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ac(e) {
  var t = e._init;
  return t(e._payload);
}
function Ef(e) {
  function t(m, h) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [h]), (m.flags |= 16)) : g.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function o(m, h) {
    return (m = sn(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((m.flags |= 2), h) : g)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, h, g, x) {
    return h === null || h.tag !== 6
      ? ((h = qs(g, m.mode, x)), (h.return = m), h)
      : ((h = o(h, g)), (h.return = m), h);
  }
  function a(m, h, g, x) {
    var C = g.type;
    return C === An
      ? d(m, h, g.props.children, x, g.key)
      : h !== null &&
        (h.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Vt &&
            ac(C) === h.type))
      ? ((x = o(h, g.props)), (x.ref = Ir(m, h, g)), (x.return = m), x)
      : ((x = ci(g.type, g.key, g.props, null, m.mode, x)),
        (x.ref = Ir(m, h, g)),
        (x.return = m),
        x);
  }
  function c(m, h, g, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = el(g, m.mode, x)), (h.return = m), h)
      : ((h = o(h, g.children || [])), (h.return = m), h);
  }
  function d(m, h, g, x, C) {
    return h === null || h.tag !== 7
      ? ((h = Cn(g, m.mode, x, C)), (h.return = m), h)
      : ((h = o(h, g)), (h.return = m), h);
  }
  function p(m, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = qs("" + h, m.mode, g)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ro:
          return (
            (g = ci(h.type, h.key, h.props, null, m.mode, g)),
            (g.ref = Ir(m, null, h)),
            (g.return = m),
            g
          );
        case Dn:
          return (h = el(h, m.mode, g)), (h.return = m), h;
        case Vt:
          var x = h._init;
          return p(m, x(h._payload), g);
      }
      if (Or(h) || Pr(h))
        return (h = Cn(h, m.mode, g, null)), (h.return = m), h;
      Uo(m, h);
    }
    return null;
  }
  function f(m, h, g, x) {
    var C = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return C !== null ? null : l(m, h, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ro:
          return g.key === C ? a(m, h, g, x) : null;
        case Dn:
          return g.key === C ? c(m, h, g, x) : null;
        case Vt:
          return (C = g._init), f(m, h, C(g._payload), x);
      }
      if (Or(g) || Pr(g)) return C !== null ? null : d(m, h, g, x, null);
      Uo(m, g);
    }
    return null;
  }
  function v(m, h, g, x, C) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (m = m.get(g) || null), l(h, m, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ro:
          return (m = m.get(x.key === null ? g : x.key) || null), a(h, m, x, C);
        case Dn:
          return (m = m.get(x.key === null ? g : x.key) || null), c(h, m, x, C);
        case Vt:
          var S = x._init;
          return v(m, h, g, S(x._payload), C);
      }
      if (Or(x) || Pr(x)) return (m = m.get(g) || null), d(h, m, x, C, null);
      Uo(h, x);
    }
    return null;
  }
  function y(m, h, g, x) {
    for (
      var C = null, S = null, k = h, $ = (h = 0), _ = null;
      k !== null && $ < g.length;
      $++
    ) {
      k.index > $ ? ((_ = k), (k = null)) : (_ = k.sibling);
      var N = f(m, k, g[$], x);
      if (N === null) {
        k === null && (k = _);
        break;
      }
      e && k && N.alternate === null && t(m, k),
        (h = i(N, h, $)),
        S === null ? (C = N) : (S.sibling = N),
        (S = N),
        (k = _);
    }
    if ($ === g.length) return n(m, k), ne && hn(m, $), C;
    if (k === null) {
      for (; $ < g.length; $++)
        (k = p(m, g[$], x)),
          k !== null &&
            ((h = i(k, h, $)), S === null ? (C = k) : (S.sibling = k), (S = k));
      return ne && hn(m, $), C;
    }
    for (k = r(m, k); $ < g.length; $++)
      (_ = v(k, m, $, g[$], x)),
        _ !== null &&
          (e && _.alternate !== null && k.delete(_.key === null ? $ : _.key),
          (h = i(_, h, $)),
          S === null ? (C = _) : (S.sibling = _),
          (S = _));
    return (
      e &&
        k.forEach(function (O) {
          return t(m, O);
        }),
      ne && hn(m, $),
      C
    );
  }
  function w(m, h, g, x) {
    var C = Pr(g);
    if (typeof C != "function") throw Error(E(150));
    if (((g = C.call(g)), g == null)) throw Error(E(151));
    for (
      var S = (C = null), k = h, $ = (h = 0), _ = null, N = g.next();
      k !== null && !N.done;
      $++, N = g.next()
    ) {
      k.index > $ ? ((_ = k), (k = null)) : (_ = k.sibling);
      var O = f(m, k, N.value, x);
      if (O === null) {
        k === null && (k = _);
        break;
      }
      e && k && O.alternate === null && t(m, k),
        (h = i(O, h, $)),
        S === null ? (C = O) : (S.sibling = O),
        (S = O),
        (k = _);
    }
    if (N.done) return n(m, k), ne && hn(m, $), C;
    if (k === null) {
      for (; !N.done; $++, N = g.next())
        (N = p(m, N.value, x)),
          N !== null &&
            ((h = i(N, h, $)), S === null ? (C = N) : (S.sibling = N), (S = N));
      return ne && hn(m, $), C;
    }
    for (k = r(m, k); !N.done; $++, N = g.next())
      (N = v(k, m, $, N.value, x)),
        N !== null &&
          (e && N.alternate !== null && k.delete(N.key === null ? $ : N.key),
          (h = i(N, h, $)),
          S === null ? (C = N) : (S.sibling = N),
          (S = N));
    return (
      e &&
        k.forEach(function (b) {
          return t(m, b);
        }),
      ne && hn(m, $),
      C
    );
  }
  function j(m, h, g, x) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === An &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ro:
          e: {
            for (var C = g.key, S = h; S !== null; ) {
              if (S.key === C) {
                if (((C = g.type), C === An)) {
                  if (S.tag === 7) {
                    n(m, S.sibling),
                      (h = o(S, g.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  S.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Vt &&
                    ac(C) === S.type)
                ) {
                  n(m, S.sibling),
                    (h = o(S, g.props)),
                    (h.ref = Ir(m, S, g)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            g.type === An
              ? ((h = Cn(g.props.children, m.mode, x, g.key)),
                (h.return = m),
                (m = h))
              : ((x = ci(g.type, g.key, g.props, null, m.mode, x)),
                (x.ref = Ir(m, h, g)),
                (x.return = m),
                (m = x));
          }
          return s(m);
        case Dn:
          e: {
            for (S = g.key; h !== null; ) {
              if (h.key === S)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(m, h.sibling),
                    (h = o(h, g.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = el(g, m.mode, x)), (h.return = m), (m = h);
          }
          return s(m);
        case Vt:
          return (S = g._init), j(m, h, S(g._payload), x);
      }
      if (Or(g)) return y(m, h, g, x);
      if (Pr(g)) return w(m, h, g, x);
      Uo(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = o(h, g)), (h.return = m), (m = h))
          : (n(m, h), (h = qs(g, m.mode, x)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return j;
}
var ur = Ef(!0),
  Pf = Ef(!1),
  Ii = dn(null),
  Mi = null,
  Kn = null,
  Ba = null;
function Ha() {
  Ba = Kn = Mi = null;
}
function Va(e) {
  var t = Ii.current;
  q(Ii), (e._currentValue = t);
}
function Bl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function rr(e, t) {
  (Mi = e),
    (Ba = Kn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if (Ba !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kn === null)) {
      if (Mi === null) throw Error(E(308));
      (Kn = e), (Mi.dependencies = { lanes: 0, firstContext: e });
    } else Kn = Kn.next = e;
  return t;
}
var yn = null;
function Wa(e) {
  yn === null ? (yn = [e]) : yn.push(e);
}
function Rf(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Wa(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Tt(e, r)
  );
}
function Tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Wt = !1;
function Ga(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zf(e, t) {
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
function Nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Tt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Wa(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Tt(e, n)
  );
}
function oi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), La(e, n);
  }
}
function uc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Fi(e, t, n, r) {
  var o = e.updateQueue;
  Wt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      c = a.next;
    (a.next = null), s === null ? (i = c) : (s.next = c), (s = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = c) : (l.next = c),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = o.baseState;
    (s = 0), (d = c = a = null), (l = i);
    do {
      var f = l.lane,
        v = l.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            w = l;
          switch (((f = t), (v = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                p = y.call(v, p, f);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (f = typeof y == "function" ? y.call(v, p, f) : y),
                f == null)
              )
                break e;
              p = ae({}, p, f);
              break e;
            case 2:
              Wt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((c = d = v), (a = p)) : (d = d.next = v),
          (s |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Rn |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function cc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(E(191, o));
        o.call(r);
      }
    }
}
var Co = {},
  _t = dn(Co),
  fo = dn(Co),
  po = dn(Co);
function xn(e) {
  if (e === Co) throw Error(E(174));
  return e;
}
function Ka(e, t) {
  switch ((X(po, t), X(fo, e), X(_t, Co), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : kl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = kl(t, e));
  }
  q(_t), X(_t, t);
}
function cr() {
  q(_t), q(fo), q(po);
}
function Lf(e) {
  xn(po.current);
  var t = xn(_t.current),
    n = kl(t, e.type);
  t !== n && (X(fo, e), X(_t, n));
}
function Qa(e) {
  fo.current === e && (q(_t), q(fo));
}
var se = dn(0);
function Ti(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ks = [];
function Ya() {
  for (var e = 0; e < Ks.length; e++)
    Ks[e]._workInProgressVersionPrimary = null;
  Ks.length = 0;
}
var ii = At.ReactCurrentDispatcher,
  Qs = At.ReactCurrentBatchConfig,
  Pn = 0,
  le = null,
  me = null,
  xe = null,
  Oi = !1,
  Kr = !1,
  ho = 0,
  Cm = 0;
function Ee() {
  throw Error(E(321));
}
function Xa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!gt(e[n], t[n])) return !1;
  return !0;
}
function Ja(e, t, n, r, o, i) {
  if (
    ((Pn = i),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ii.current = e === null || e.memoizedState === null ? Em : Pm),
    (e = n(r, o)),
    Kr)
  ) {
    i = 0;
    do {
      if (((Kr = !1), (ho = 0), 25 <= i)) throw Error(E(301));
      (i += 1),
        (xe = me = null),
        (t.updateQueue = null),
        (ii.current = Rm),
        (e = n(r, o));
    } while (Kr);
  }
  if (
    ((ii.current = Di),
    (t = me !== null && me.next !== null),
    (Pn = 0),
    (xe = me = le = null),
    (Oi = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Za() {
  var e = ho !== 0;
  return (ho = 0), e;
}
function St() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (le.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function st() {
  if (me === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = xe === null ? le.memoizedState : xe.next;
  if (t !== null) (xe = t), (me = e);
  else {
    if (e === null) throw Error(E(310));
    (me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      xe === null ? (le.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function mo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ys(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = me,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      c = i;
    do {
      var d = c.lane;
      if ((Pn & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var p = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (s = r)) : (a = a.next = p),
          (le.lanes |= d),
          (Rn |= d);
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? (s = r) : (a.next = l),
      gt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (le.lanes |= i), (Rn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xs(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    gt(i, t.memoizedState) || (Ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Nf() {}
function If(e, t) {
  var n = le,
    r = st(),
    o = t(),
    i = !gt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ue = !0)),
    (r = r.queue),
    qa(Tf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      go(9, Ff.bind(null, n, r, o, t), void 0, null),
      Se === null)
    )
      throw Error(E(349));
    Pn & 30 || Mf(n, t, o);
  }
  return o;
}
function Mf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ff(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Of(t) && Df(e);
}
function Tf(e, t, n) {
  return n(function () {
    Of(t) && Df(e);
  });
}
function Of(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch {
    return !0;
  }
}
function Df(e) {
  var t = Tt(e, 1);
  t !== null && ht(t, e, 1, -1);
}
function dc(e) {
  var t = St();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $m.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function go(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Af() {
  return st().memoizedState;
}
function si(e, t, n, r) {
  var o = St();
  (le.flags |= e),
    (o.memoizedState = go(1 | t, n, void 0, r === void 0 ? null : r));
}
function ls(e, t, n, r) {
  var o = st();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (me !== null) {
    var s = me.memoizedState;
    if (((i = s.destroy), r !== null && Xa(r, s.deps))) {
      o.memoizedState = go(t, n, i, r);
      return;
    }
  }
  (le.flags |= e), (o.memoizedState = go(1 | t, n, i, r));
}
function fc(e, t) {
  return si(8390656, 8, e, t);
}
function qa(e, t) {
  return ls(2048, 8, e, t);
}
function Uf(e, t) {
  return ls(4, 2, e, t);
}
function bf(e, t) {
  return ls(4, 4, e, t);
}
function Bf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Hf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ls(4, 4, Bf.bind(null, t, e), n)
  );
}
function eu() {}
function Vf(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Wf(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Gf(e, t, n) {
  return Pn & 21
    ? (gt(n, t) || ((n = Xd()), (le.lanes |= n), (Rn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function jm(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Qs.transition;
  Qs.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (Qs.transition = r);
  }
}
function Kf() {
  return st().memoizedState;
}
function _m(e, t, n) {
  var r = on(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qf(e))
  )
    Yf(t, n);
  else if (((n = Rf(e, t, n, r)), n !== null)) {
    var o = Fe();
    ht(n, e, r, o), Xf(n, t, r);
  }
}
function $m(e, t, n) {
  var r = on(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qf(e)) Yf(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), gt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Wa(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Rf(e, t, o, r)),
      n !== null && ((o = Fe()), ht(n, e, r, o), Xf(n, t, r));
  }
}
function Qf(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function Yf(e, t) {
  Kr = Oi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Xf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), La(e, n);
  }
}
var Di = {
    readContext: it,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  Em = {
    readContext: it,
    useCallback: function (e, t) {
      return (St().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: fc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        si(4194308, 4, Bf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return si(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return si(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = St();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = St();
      return (
        (t = n !== void 0 ? n(t) : t),
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
        (e = e.dispatch = _m.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = St();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: dc,
    useDebugValue: eu,
    useDeferredValue: function (e) {
      return (St().memoizedState = e);
    },
    useTransition: function () {
      var e = dc(!1),
        t = e[0];
      return (e = jm.bind(null, e[1])), (St().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        o = St();
      if (ne) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(E(349));
        Pn & 30 || Mf(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        fc(Tf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        go(9, Ff.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = St(),
        t = Se.identifierPrefix;
      if (ne) {
        var n = Lt,
          r = zt;
        (n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ho++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Cm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Pm = {
    readContext: it,
    useCallback: Vf,
    useContext: it,
    useEffect: qa,
    useImperativeHandle: Hf,
    useInsertionEffect: Uf,
    useLayoutEffect: bf,
    useMemo: Wf,
    useReducer: Ys,
    useRef: Af,
    useState: function () {
      return Ys(mo);
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      var t = st();
      return Gf(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = Ys(mo)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: Nf,
    useSyncExternalStore: If,
    useId: Kf,
    unstable_isNewReconciler: !1,
  },
  Rm = {
    readContext: it,
    useCallback: Vf,
    useContext: it,
    useEffect: qa,
    useImperativeHandle: Hf,
    useInsertionEffect: Uf,
    useLayoutEffect: bf,
    useMemo: Wf,
    useReducer: Xs,
    useRef: Af,
    useState: function () {
      return Xs(mo);
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      var t = st();
      return me === null ? (t.memoizedState = e) : Gf(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = Xs(mo)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: Nf,
    useSyncExternalStore: If,
    useId: Kf,
    unstable_isNewReconciler: !1,
  };
function ut(e, t) {
  if (e && e.defaultProps) {
    (t = ae({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ae({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var as = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      o = on(e),
      i = Nt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = nn(e, i, o)),
      t !== null && (ht(t, e, o, r), oi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      o = on(e),
      i = Nt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = nn(e, i, o)),
      t !== null && (ht(t, e, o, r), oi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Fe(),
      r = on(e),
      o = Nt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = nn(e, o, r)),
      t !== null && (ht(t, e, r, n), oi(t, e, r));
  },
};
function pc(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !lo(n, r) || !lo(o, i)
      : !0
  );
}
function Jf(e, t, n) {
  var r = !1,
    o = an,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = it(i))
      : ((o = He(t) ? $n : Ne.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? lr(e, o) : an)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = as),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function hc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && as.enqueueReplaceState(t, t.state, null);
}
function Vl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ga(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = it(i))
    : ((i = He(t) ? $n : Ne.current), (o.context = lr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Hl(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && as.enqueueReplaceState(o, o.state, null),
      Fi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function dr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += r0(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Js(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var zm = typeof WeakMap == "function" ? WeakMap : Map;
function Zf(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ui || ((Ui = !0), (ta = r)), Wl(e, t);
    }),
    n
  );
}
function qf(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Wl(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Wl(e, t),
          typeof r != "function" &&
            (rn === null ? (rn = new Set([this])) : rn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function mc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Vm.bind(null, e, t, n)), t.then(e, e));
}
function gc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Nt(-1, 1)), (t.tag = 2), nn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Lm = At.ReactCurrentOwner,
  Ue = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? Pf(t, null, n, r) : ur(t, e.child, n, r);
}
function yc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    rr(t, o),
    (r = Ja(e, t, n, r, i, o)),
    (n = Za()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ot(e, t, o))
      : (ne && n && Aa(t), (t.flags |= 1), Ie(e, t, r, o), t.child)
  );
}
function xc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !au(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ep(e, t, i, r, o))
      : ((e = ci(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : lo), n(s, r) && e.ref === t.ref)
    )
      return Ot(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = sn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ep(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (lo(i, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), Ot(e, t, o);
  }
  return Gl(e, t, n, r, o);
}
function tp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        X(Yn, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          X(Yn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        X(Yn, Qe),
        (Qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      X(Yn, Qe),
      (Qe |= r);
  return Ie(e, t, o, n), t.child;
}
function np(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Gl(e, t, n, r, o) {
  var i = He(n) ? $n : Ne.current;
  return (
    (i = lr(t, i)),
    rr(t, o),
    (n = Ja(e, t, n, r, i, o)),
    (r = Za()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ot(e, t, o))
      : (ne && r && Aa(t), (t.flags |= 1), Ie(e, t, n, o), t.child)
  );
}
function wc(e, t, n, r, o) {
  if (He(n)) {
    var i = !0;
    zi(t);
  } else i = !1;
  if ((rr(t, o), t.stateNode === null))
    li(e, t), Jf(t, n, r), Vl(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = it(c))
      : ((c = He(n) ? $n : Ne.current), (c = lr(t, c)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== c) && hc(t, s, r, c)),
      (Wt = !1);
    var f = t.memoizedState;
    (s.state = f),
      Fi(t, r, s, o),
      (a = t.memoizedState),
      l !== r || f !== a || Be.current || Wt
        ? (typeof d == "function" && (Hl(t, n, d, r), (a = t.memoizedState)),
          (l = Wt || pc(t, n, l, r, f, a, c))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = c),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      zf(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : ut(t.type, l)),
      (s.props = c),
      (p = t.pendingProps),
      (f = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = it(a))
        : ((a = He(n) ? $n : Ne.current), (a = lr(t, a)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || f !== a) && hc(t, s, r, a)),
      (Wt = !1),
      (f = t.memoizedState),
      (s.state = f),
      Fi(t, r, s, o);
    var y = t.memoizedState;
    l !== p || f !== y || Be.current || Wt
      ? (typeof v == "function" && (Hl(t, n, v, r), (y = t.memoizedState)),
        (c = Wt || pc(t, n, c, r, f, y, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Kl(e, t, n, r, i, o);
}
function Kl(e, t, n, r, o, i) {
  np(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && ic(t, n, !1), Ot(e, t, i);
  (r = t.stateNode), (Lm.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ur(t, e.child, null, i)), (t.child = ur(t, null, l, i)))
      : Ie(e, t, l, i),
    (t.memoizedState = r.state),
    o && ic(t, n, !0),
    t.child
  );
}
function rp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? oc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && oc(e, t.context, !1),
    Ka(e, t.containerInfo);
}
function Sc(e, t, n, r, o) {
  return ar(), ba(o), (t.flags |= 256), Ie(e, t, n, r), t.child;
}
var Ql = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function op(e, t, n) {
  var r = t.pendingProps,
    o = se.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    X(se, o & 1),
    e === null)
  )
    return (
      bl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = ds(s, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Yl(n)),
              (t.memoizedState = Ql),
              e)
            : tu(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Nm(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = sn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = sn(l, i)) : ((i = Cn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Yl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ql),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = sn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function tu(e, t) {
  return (
    (t = ds({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function bo(e, t, n, r) {
  return (
    r !== null && ba(r),
    ur(t, e.child, null, n),
    (e = tu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Nm(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Js(Error(E(422)))), bo(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = ds({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Cn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && ur(t, e.child, null, s),
        (t.child.memoizedState = Yl(s)),
        (t.memoizedState = Ql),
        i);
  if (!(t.mode & 1)) return bo(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(E(419))), (r = Js(i, r, void 0)), bo(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Ue || l)) {
    if (((r = Se), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Tt(e, o), ht(r, e, o, -1));
    }
    return lu(), (r = Js(Error(E(421)))), bo(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Wm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ye = tn(o.nextSibling)),
      (Je = t),
      (ne = !0),
      (ft = null),
      e !== null &&
        ((tt[nt++] = zt),
        (tt[nt++] = Lt),
        (tt[nt++] = En),
        (zt = e.id),
        (Lt = e.overflow),
        (En = t)),
      (t = tu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function kc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bl(e.return, t, n);
}
function Zs(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function ip(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ie(e, t, r.children, n), (r = se.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
        else if (e.tag === 19) kc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((X(se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ti(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Zs(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ti(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Zs(t, !0, n, null, i);
        break;
      case "together":
        Zs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function li(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ot(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Rn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = sn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Im(e, t, n) {
  switch (t.tag) {
    case 3:
      rp(t), ar();
      break;
    case 5:
      Lf(t);
      break;
    case 1:
      He(t.type) && zi(t);
      break;
    case 4:
      Ka(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      X(Ii, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (X(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? op(e, t, n)
          : (X(se, se.current & 1),
            (e = Ot(e, t, n)),
            e !== null ? e.sibling : null);
      X(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ip(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        X(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), tp(e, t, n);
  }
  return Ot(e, t, n);
}
var sp, Xl, lp, ap;
sp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Xl = function () {};
lp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), xn(_t.current);
    var i = null;
    switch (n) {
      case "input":
        (o = yl(e, o)), (r = yl(e, r)), (i = []);
        break;
      case "select":
        (o = ae({}, o, { value: void 0 })),
          (r = ae({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Sl(e, o)), (r = Sl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Pi);
    }
    Cl(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var l = o[c];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (eo.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((l = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && a !== l && (a != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (eo.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && J("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ap = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mr(e, t) {
  if (!ne)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Mm(e, t, n) {
  var r = t.pendingProps;
  switch ((Ua(t), t.tag)) {
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
      return Pe(t), null;
    case 1:
      return He(t.type) && Ri(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        cr(),
        q(Be),
        q(Ne),
        Ya(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ao(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (oa(ft), (ft = null)))),
        Xl(e, t),
        Pe(t),
        null
      );
    case 5:
      Qa(t);
      var o = xn(po.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return Pe(t), null;
        }
        if (((e = xn(_t.current)), Ao(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ct] = t), (r[co] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ar.length; o++) J(Ar[o], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              Lu(r, i), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              Iu(r, i), J("invalid", r);
          }
          Cl(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Do(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Do(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : eo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              zo(r), Nu(r, i, !0);
              break;
            case "textarea":
              zo(r), Mu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Pi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ct] = t),
            (e[co] = r),
            sp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = jl(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ar.length; o++) J(Ar[o], e);
                o = r;
                break;
              case "source":
                J("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (o = r);
                break;
              case "details":
                J("toggle", e), (o = r);
                break;
              case "input":
                Lu(e, r), (o = yl(e, r)), J("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ae({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                Iu(e, r), (o = Sl(e, r)), J("invalid", e);
                break;
              default:
                o = r;
            }
            Cl(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Dd(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Td(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && to(e, a)
                    : typeof a == "number" && to(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (eo.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && J("scroll", e)
                      : a != null && _a(e, i, a, s));
              }
            switch (n) {
              case "input":
                zo(e), Nu(e, r, !1);
                break;
              case "textarea":
                zo(e), Mu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ln(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Pi);
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
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) ap(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = xn(po.current)), xn(_t.current), Ao(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ct] = t),
            (i = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Do(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Do(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ct] = t),
            (t.stateNode = r);
      }
      return Pe(t), null;
    case 13:
      if (
        (q(se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ne && Ye !== null && t.mode & 1 && !(t.flags & 128))
          $f(), ar(), (t.flags |= 98560), (i = !1);
        else if (((i = Ao(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(E(317));
            i[Ct] = t;
          } else
            ar(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (i = !1);
        } else ft !== null && (oa(ft), (ft = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || se.current & 1 ? ge === 0 && (ge = 3) : lu())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        cr(), Xl(e, t), e === null && ao(t.stateNode.containerInfo), Pe(t), null
      );
    case 10:
      return Va(t.type._context), Pe(t), null;
    case 17:
      return He(t.type) && Ri(), Pe(t), null;
    case 19:
      if ((q(se), (i = t.memoizedState), i === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Mr(i, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ti(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Mr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return X(se, (se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            de() > fr &&
            ((t.flags |= 128), (r = !0), Mr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ti(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Mr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ne)
            )
              return Pe(t), null;
          } else
            2 * de() - i.renderingStartTime > fr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Mr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = de()),
          (t.sibling = null),
          (n = se.current),
          X(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        su(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Fm(e, t) {
  switch ((Ua(t), t.tag)) {
    case 1:
      return (
        He(t.type) && Ri(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        cr(),
        q(Be),
        q(Ne),
        Ya(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Qa(t), null;
    case 13:
      if ((q(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        ar();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(se), null;
    case 4:
      return cr(), null;
    case 10:
      return Va(t.type._context), null;
    case 22:
    case 23:
      return su(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bo = !1,
  ze = !1,
  Tm = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function Qn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function Jl(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Cc = !1;
function Om(e, t) {
  if (((Ml = _i), (e = pf()), Da(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            c = 0,
            d = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = s + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (f = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++c === o && (l = s),
                f === i && ++d === r && (a = s),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = f), (f = p.parentNode);
            }
            p = v;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fl = { focusedElem: e, selectionRange: n }, _i = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    j = y.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ut(t.type, w),
                      j
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (x) {
          ce(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (y = Cc), (Cc = !1), y;
}
function Qr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Jl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function us(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
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
function Zl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function up(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), up(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ct], delete t[co], delete t[Dl], delete t[xm], delete t[wm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function cp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ql(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Pi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ql(e, t, n), e = e.sibling; e !== null; ) ql(e, t, n), (e = e.sibling);
}
function ea(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ea(e, t, n), e = e.sibling; e !== null; ) ea(e, t, n), (e = e.sibling);
}
var Ce = null,
  ct = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) dp(e, t, n), (n = n.sibling);
}
function dp(e, t, n) {
  if (jt && typeof jt.onCommitFiberUnmount == "function")
    try {
      jt.onCommitFiberUnmount(ts, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || Qn(n, t);
    case 6:
      var r = Ce,
        o = ct;
      (Ce = null),
        Bt(e, t, n),
        (Ce = r),
        (ct = o),
        Ce !== null &&
          (ct
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (ct
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ws(e.parentNode, n)
              : e.nodeType === 1 && Ws(e, n),
            io(e))
          : Ws(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (o = ct),
        (Ce = n.stateNode.containerInfo),
        (ct = !0),
        Bt(e, t, n),
        (Ce = r),
        (ct = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Jl(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (
        !ze &&
        (Qn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ce(n, t, l);
        }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), Bt(e, t, n), (ze = r))
        : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function _c(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Tm()),
      t.forEach(function (r) {
        var o = Gm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function at(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ce = l.stateNode), (ct = !1);
              break e;
            case 3:
              (Ce = l.stateNode.containerInfo), (ct = !0);
              break e;
            case 4:
              (Ce = l.stateNode.containerInfo), (ct = !0);
              break e;
          }
          l = l.return;
        }
        if (Ce === null) throw Error(E(160));
        dp(i, s, o), (Ce = null), (ct = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (c) {
        ce(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) fp(t, e), (t = t.sibling);
}
function fp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((at(t, e), yt(e), r & 4)) {
        try {
          Qr(3, e, e.return), us(3, e);
        } catch (w) {
          ce(e, e.return, w);
        }
        try {
          Qr(5, e, e.return);
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 1:
      at(t, e), yt(e), r & 512 && n !== null && Qn(n, n.return);
      break;
    case 5:
      if (
        (at(t, e),
        yt(e),
        r & 512 && n !== null && Qn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          to(o, "");
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Id(o, i),
              jl(l, s);
            var c = jl(l, i);
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                p = a[s + 1];
              d === "style"
                ? Dd(o, p)
                : d === "dangerouslySetInnerHTML"
                ? Td(o, p)
                : d === "children"
                ? to(o, p)
                : _a(o, d, p, c);
            }
            switch (l) {
              case "input":
                xl(o, i);
                break;
              case "textarea":
                Md(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? qn(o, !!i.multiple, v, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qn(o, !!i.multiple, i.defaultValue, !0)
                      : qn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[co] = i;
          } catch (w) {
            ce(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((at(t, e), yt(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (at(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          io(t.containerInfo);
        } catch (w) {
          ce(e, e.return, w);
        }
      break;
    case 4:
      at(t, e), yt(e);
      break;
    case 13:
      at(t, e),
        yt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ou = de())),
        r & 4 && _c(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (c = ze) || d), at(t, e), (ze = c)) : at(t, e),
        yt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (I = e, d = e.child; d !== null; ) {
            for (p = I = d; I !== null; ) {
              switch (((f = I), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qr(4, f, f.return);
                  break;
                case 1:
                  Qn(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      ce(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Qn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Ec(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (I = v)) : Ec(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Od("display", s)));
              } catch (w) {
                ce(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (w) {
                ce(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      at(t, e), yt(e), r & 4 && _c(e);
      break;
    case 21:
      break;
    default:
      at(t, e), yt(e);
  }
}
function yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (to(o, ""), (r.flags &= -33));
          var i = jc(e);
          ea(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = jc(e);
          ql(e, l, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      ce(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dm(e, t, n) {
  (I = e), pp(e);
}
function pp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Bo;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || ze;
        l = Bo;
        var c = ze;
        if (((Bo = s), (ze = a) && !c))
          for (I = o; I !== null; )
            (s = I),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Pc(o)
                : a !== null
                ? ((a.return = s), (I = a))
                : Pc(o);
        for (; i !== null; ) (I = i), pp(i), (i = i.sibling);
        (I = o), (Bo = l), (ze = c);
      }
      $c(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (I = i)) : $c(e);
  }
}
function $c(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || us(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && cc(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                cc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && io(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        ze || (t.flags & 512 && Zl(t));
      } catch (f) {
        ce(t, t.return, f);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Ec(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Pc(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            us(4, t);
          } catch (a) {
            ce(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ce(t, o, a);
            }
          }
          var i = t.return;
          try {
            Zl(t);
          } catch (a) {
            ce(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Zl(t);
          } catch (a) {
            ce(t, s, a);
          }
      }
    } catch (a) {
      ce(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (I = l);
      break;
    }
    I = t.return;
  }
}
var Am = Math.ceil,
  Ai = At.ReactCurrentDispatcher,
  nu = At.ReactCurrentOwner,
  ot = At.ReactCurrentBatchConfig,
  H = 0,
  Se = null,
  he = null,
  _e = 0,
  Qe = 0,
  Yn = dn(0),
  ge = 0,
  vo = null,
  Rn = 0,
  cs = 0,
  ru = 0,
  Yr = null,
  Ae = null,
  ou = 0,
  fr = 1 / 0,
  Et = null,
  Ui = !1,
  ta = null,
  rn = null,
  Ho = !1,
  Xt = null,
  bi = 0,
  Xr = 0,
  na = null,
  ai = -1,
  ui = 0;
function Fe() {
  return H & 6 ? de() : ai !== -1 ? ai : (ai = de());
}
function on(e) {
  return e.mode & 1
    ? H & 2 && _e !== 0
      ? _e & -_e
      : km.transition !== null
      ? (ui === 0 && (ui = Xd()), ui)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : rf(e.type))),
        e)
    : 1;
}
function ht(e, t, n, r) {
  if (50 < Xr) throw ((Xr = 0), (na = null), Error(E(185)));
  wo(e, n, r),
    (!(H & 2) || e !== Se) &&
      (e === Se && (!(H & 2) && (cs |= n), ge === 4 && Kt(e, _e)),
      Ve(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((fr = de() + 500), ss && fn()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  k0(e, t);
  var r = ji(e, e === Se ? _e : 0);
  if (r === 0)
    n !== null && Ou(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ou(n), t === 1))
      e.tag === 0 ? Sm(Rc.bind(null, e)) : Cf(Rc.bind(null, e)),
        vm(function () {
          !(H & 6) && fn();
        }),
        (n = null);
    else {
      switch (Jd(r)) {
        case 1:
          n = za;
          break;
        case 4:
          n = Qd;
          break;
        case 16:
          n = Ci;
          break;
        case 536870912:
          n = Yd;
          break;
        default:
          n = Ci;
      }
      n = Sp(n, hp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function hp(e, t) {
  if (((ai = -1), (ui = 0), H & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (or() && e.callbackNode !== n) return null;
  var r = ji(e, e === Se ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Bi(e, r);
  else {
    t = r;
    var o = H;
    H |= 2;
    var i = gp();
    (Se !== e || _e !== t) && ((Et = null), (fr = de() + 500), kn(e, t));
    do
      try {
        Bm();
        break;
      } catch (l) {
        mp(e, l);
      }
    while (!0);
    Ha(),
      (Ai.current = i),
      (H = o),
      he !== null ? (t = 0) : ((Se = null), (_e = 0), (t = ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Rl(e)), o !== 0 && ((r = o), (t = ra(e, o)))), t === 1)
    )
      throw ((n = vo), kn(e, 0), Kt(e, r), Ve(e, de()), n);
    if (t === 6) Kt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Um(o) &&
          ((t = Bi(e, r)),
          t === 2 && ((i = Rl(e)), i !== 0 && ((r = i), (t = ra(e, i)))),
          t === 1))
      )
        throw ((n = vo), kn(e, 0), Kt(e, r), Ve(e, de()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          mn(e, Ae, Et);
          break;
        case 3:
          if (
            (Kt(e, r), (r & 130023424) === r && ((t = ou + 500 - de()), 10 < t))
          ) {
            if (ji(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Fe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ol(mn.bind(null, e, Ae, Et), t);
            break;
          }
          mn(e, Ae, Et);
          break;
        case 4:
          if ((Kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - pt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = de() - r),
            (r =
              (120 > r
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
                : 1960 * Am(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ol(mn.bind(null, e, Ae, Et), r);
            break;
          }
          mn(e, Ae, Et);
          break;
        case 5:
          mn(e, Ae, Et);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ve(e, de()), e.callbackNode === n ? hp.bind(null, e) : null;
}
function ra(e, t) {
  var n = Yr;
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = Bi(e, t)),
    e !== 2 && ((t = Ae), (Ae = n), t !== null && oa(t)),
    e
  );
}
function oa(e) {
  Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
}
function Um(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!gt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Kt(e, t) {
  for (
    t &= ~ru,
      t &= ~cs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Rc(e) {
  if (H & 6) throw Error(E(327));
  or();
  var t = ji(e, 0);
  if (!(t & 1)) return Ve(e, de()), null;
  var n = Bi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Rl(e);
    r !== 0 && ((t = r), (n = ra(e, r)));
  }
  if (n === 1) throw ((n = vo), kn(e, 0), Kt(e, t), Ve(e, de()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mn(e, Ae, Et),
    Ve(e, de()),
    null
  );
}
function iu(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((fr = de() + 500), ss && fn());
  }
}
function zn(e) {
  Xt !== null && Xt.tag === 0 && !(H & 6) && or();
  var t = H;
  H |= 1;
  var n = ot.transition,
    r = G;
  try {
    if (((ot.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (ot.transition = n), (H = t), !(H & 6) && fn();
  }
}
function su() {
  (Qe = Yn.current), q(Yn);
}
function kn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), gm(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n;
      switch ((Ua(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ri();
          break;
        case 3:
          cr(), q(Be), q(Ne), Ya();
          break;
        case 5:
          Qa(r);
          break;
        case 4:
          cr();
          break;
        case 13:
          q(se);
          break;
        case 19:
          q(se);
          break;
        case 10:
          Va(r.type._context);
          break;
        case 22:
        case 23:
          su();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (he = e = sn(e.current, null)),
    (_e = Qe = t),
    (ge = 0),
    (vo = null),
    (ru = cs = Rn = 0),
    (Ae = Yr = null),
    yn !== null)
  ) {
    for (t = 0; t < yn.length; t++)
      if (((n = yn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    yn = null;
  }
  return e;
}
function mp(e, t) {
  do {
    var n = he;
    try {
      if ((Ha(), (ii.current = Di), Oi)) {
        for (var r = le.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Oi = !1;
      }
      if (
        ((Pn = 0),
        (xe = me = le = null),
        (Kr = !1),
        (ho = 0),
        (nu.current = null),
        n === null || n.return === null)
      ) {
        (ge = 1), (vo = t), (he = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = _e),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            d = l,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = gc(s);
          if (v !== null) {
            (v.flags &= -257),
              vc(v, s, l, i, t),
              v.mode & 1 && mc(i, c, t),
              (t = v),
              (a = c);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              mc(i, c, t), lu();
              break e;
            }
            a = Error(E(426));
          }
        } else if (ne && l.mode & 1) {
          var j = gc(s);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              vc(j, s, l, i, t),
              ba(dr(a, l));
            break e;
          }
        }
        (i = a = dr(a, l)),
          ge !== 4 && (ge = 2),
          Yr === null ? (Yr = [i]) : Yr.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Zf(i, a, t);
              uc(i, m);
              break e;
            case 1:
              l = a;
              var h = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (rn === null || !rn.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = qf(i, l, t);
                uc(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      yp(n);
    } catch (C) {
      (t = C), he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function gp() {
  var e = Ai.current;
  return (Ai.current = Di), e === null ? Di : e;
}
function lu() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    Se === null || (!(Rn & 268435455) && !(cs & 268435455)) || Kt(Se, _e);
}
function Bi(e, t) {
  var n = H;
  H |= 2;
  var r = gp();
  (Se !== e || _e !== t) && ((Et = null), kn(e, t));
  do
    try {
      bm();
      break;
    } catch (o) {
      mp(e, o);
    }
  while (!0);
  if ((Ha(), (H = n), (Ai.current = r), he !== null)) throw Error(E(261));
  return (Se = null), (_e = 0), ge;
}
function bm() {
  for (; he !== null; ) vp(he);
}
function Bm() {
  for (; he !== null && !p0(); ) vp(he);
}
function vp(e) {
  var t = wp(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? yp(e) : (he = t),
    (nu.current = null);
}
function yp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Fm(n, t)), n !== null)) {
        (n.flags &= 32767), (he = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ge = 6), (he = null);
        return;
      }
    } else if (((n = Mm(n, t, Qe)), n !== null)) {
      he = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function mn(e, t, n) {
  var r = G,
    o = ot.transition;
  try {
    (ot.transition = null), (G = 1), Hm(e, t, n, r);
  } finally {
    (ot.transition = o), (G = r);
  }
  return null;
}
function Hm(e, t, n, r) {
  do or();
  while (Xt !== null);
  if (H & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (C0(e, i),
    e === Se && ((he = Se = null), (_e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ho ||
      ((Ho = !0),
      Sp(Ci, function () {
        return or(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ot.transition), (ot.transition = null);
    var s = G;
    G = 1;
    var l = H;
    (H |= 4),
      (nu.current = null),
      Om(e, n),
      fp(n, e),
      um(Fl),
      (_i = !!Ml),
      (Fl = Ml = null),
      (e.current = n),
      Dm(n),
      h0(),
      (H = l),
      (G = s),
      (ot.transition = i);
  } else e.current = n;
  if (
    (Ho && ((Ho = !1), (Xt = e), (bi = o)),
    (i = e.pendingLanes),
    i === 0 && (rn = null),
    v0(n.stateNode),
    Ve(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ui) throw ((Ui = !1), (e = ta), (ta = null), e);
  return (
    bi & 1 && e.tag !== 0 && or(),
    (i = e.pendingLanes),
    i & 1 ? (e === na ? Xr++ : ((Xr = 0), (na = e))) : (Xr = 0),
    fn(),
    null
  );
}
function or() {
  if (Xt !== null) {
    var e = Jd(bi),
      t = ot.transition,
      n = G;
    try {
      if (((ot.transition = null), (G = 16 > e ? 16 : e), Xt === null))
        var r = !1;
      else {
        if (((e = Xt), (Xt = null), (bi = 0), H & 6)) throw Error(E(331));
        var o = H;
        for (H |= 4, I = e.current; I !== null; ) {
          var i = I,
            s = i.child;
          if (I.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (I = c; I !== null; ) {
                  var d = I;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qr(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (I = p);
                  else
                    for (; I !== null; ) {
                      d = I;
                      var f = d.sibling,
                        v = d.return;
                      if ((up(d), d === c)) {
                        I = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (I = f);
                        break;
                      }
                      I = v;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var j = w.sibling;
                    (w.sibling = null), (w = j);
                  } while (w !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (I = s);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qr(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (I = m);
                break e;
              }
              I = i.return;
            }
        }
        var h = e.current;
        for (I = h; I !== null; ) {
          s = I;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (I = g);
          else
            e: for (s = h; I !== null; ) {
              if (((l = I), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      us(9, l);
                  }
                } catch (C) {
                  ce(l, l.return, C);
                }
              if (l === s) {
                I = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (I = x);
                break e;
              }
              I = l.return;
            }
        }
        if (
          ((H = o), fn(), jt && typeof jt.onPostCommitFiberRoot == "function")
        )
          try {
            jt.onPostCommitFiberRoot(ts, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (ot.transition = t);
    }
  }
  return !1;
}
function zc(e, t, n) {
  (t = dr(n, t)),
    (t = Zf(e, t, 1)),
    (e = nn(e, t, 1)),
    (t = Fe()),
    e !== null && (wo(e, 1, t), Ve(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) zc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (rn === null || !rn.has(r)))
        ) {
          (e = dr(n, e)),
            (e = qf(t, e, 1)),
            (t = nn(t, e, 1)),
            (e = Fe()),
            t !== null && (wo(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Vm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (_e & n) === n &&
      (ge === 4 || (ge === 3 && (_e & 130023424) === _e && 500 > de() - ou)
        ? kn(e, 0)
        : (ru |= n)),
    Ve(e, t);
}
function xp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Io), (Io <<= 1), !(Io & 130023424) && (Io = 4194304))
      : (t = 1));
  var n = Fe();
  (e = Tt(e, t)), e !== null && (wo(e, t, n), Ve(e, n));
}
function Wm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xp(e, n);
}
function Gm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), xp(e, n);
}
var wp;
wp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), Im(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), ne && t.flags & 1048576 && jf(t, Ni, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      li(e, t), (e = t.pendingProps);
      var o = lr(t, Ne.current);
      rr(t, n), (o = Ja(null, t, r, e, o, n));
      var i = Za();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((i = !0), zi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ga(t),
            (o.updater = as),
            (t.stateNode = o),
            (o._reactInternals = t),
            Vl(t, r, e, n),
            (t = Kl(null, t, r, !0, i, n)))
          : ((t.tag = 0), ne && i && Aa(t), Ie(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (li(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Qm(r)),
          (e = ut(r, e)),
          o)
        ) {
          case 0:
            t = Gl(null, t, r, e, n);
            break e;
          case 1:
            t = wc(null, t, r, e, n);
            break e;
          case 11:
            t = yc(null, t, r, e, n);
            break e;
          case 14:
            t = xc(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        Gl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        wc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((rp(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          zf(e, t),
          Fi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = dr(Error(E(423)), t)), (t = Sc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = dr(Error(E(424)), t)), (t = Sc(e, t, r, n, o));
            break e;
          } else
            for (
              Ye = tn(t.stateNode.containerInfo.firstChild),
                Je = t,
                ne = !0,
                ft = null,
                n = Pf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ar(), r === o)) {
            t = Ot(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Lf(t),
        e === null && bl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Tl(r, o) ? (s = null) : i !== null && Tl(r, i) && (t.flags |= 32),
        np(e, t),
        Ie(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && bl(t), null;
    case 13:
      return op(e, t, n);
    case 4:
      return (
        Ka(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ur(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        yc(e, t, r, o, n)
      );
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          X(Ii, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (gt(i.value, s)) {
            if (i.children === o.children && !Be.current) {
              t = Ot(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Nt(-1, n & -n)), (a.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (c.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Bl(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(E(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Bl(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ie(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        rr(t, n),
        (o = it(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ut(r, t.pendingProps)),
        (o = ut(r.type, o)),
        xc(e, t, r, o, n)
      );
    case 15:
      return ep(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        li(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), zi(t)) : (e = !1),
        rr(t, n),
        Jf(t, r, o),
        Vl(t, r, o, n),
        Kl(null, t, r, !0, e, n)
      );
    case 19:
      return ip(e, t, n);
    case 22:
      return tp(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Sp(e, t) {
  return Kd(e, t);
}
function Km(e, t, n, r) {
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
function rt(e, t, n, r) {
  return new Km(e, t, n, r);
}
function au(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Qm(e) {
  if (typeof e == "function") return au(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ea)) return 11;
    if (e === Pa) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ci(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) au(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case An:
        return Cn(n.children, o, i, t);
      case $a:
        (s = 8), (o |= 8);
        break;
      case hl:
        return (
          (e = rt(12, n, t, o | 2)), (e.elementType = hl), (e.lanes = i), e
        );
      case ml:
        return (e = rt(13, n, t, o)), (e.elementType = ml), (e.lanes = i), e;
      case gl:
        return (e = rt(19, n, t, o)), (e.elementType = gl), (e.lanes = i), e;
      case zd:
        return ds(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Pd:
              s = 10;
              break e;
            case Rd:
              s = 9;
              break e;
            case Ea:
              s = 11;
              break e;
            case Pa:
              s = 14;
              break e;
            case Vt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Cn(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function ds(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = zd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function qs(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function el(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ym(e, t, n, r, o) {
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
    (this.eventTimes = Ms(0)),
    (this.expirationTimes = Ms(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ms(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function uu(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Ym(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = rt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ga(i),
    e
  );
}
function Xm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function kp(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return kf(e, n, t);
  }
  return t;
}
function Cp(e, t, n, r, o, i, s, l, a) {
  return (
    (e = uu(n, r, !0, e, o, i, s, l, a)),
    (e.context = kp(null)),
    (n = e.current),
    (r = Fe()),
    (o = on(n)),
    (i = Nt(r, o)),
    (i.callback = t ?? null),
    nn(n, i, o),
    (e.current.lanes = o),
    wo(e, o, r),
    Ve(e, r),
    e
  );
}
function fs(e, t, n, r) {
  var o = t.current,
    i = Fe(),
    s = on(o);
  return (
    (n = kp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = nn(o, t, s)),
    e !== null && (ht(e, o, s, i), oi(e, o, s)),
    s
  );
}
function Hi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cu(e, t) {
  Lc(e, t), (e = e.alternate) && Lc(e, t);
}
function Jm() {
  return null;
}
var jp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function du(e) {
  this._internalRoot = e;
}
ps.prototype.render = du.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  fs(e, t, null, null);
};
ps.prototype.unmount = du.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zn(function () {
      fs(null, e, null, null);
    }),
      (t[Ft] = null);
  }
};
function ps(e) {
  this._internalRoot = e;
}
ps.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ef();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++);
    Gt.splice(n, 0, e), n === 0 && nf(e);
  }
};
function fu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nc() {}
function Zm(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Hi(s);
        i.call(c);
      };
    }
    var s = Cp(t, r, e, 0, null, !1, !1, "", Nc);
    return (
      (e._reactRootContainer = s),
      (e[Ft] = s.current),
      ao(e.nodeType === 8 ? e.parentNode : e),
      zn(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = Hi(a);
      l.call(c);
    };
  }
  var a = uu(e, 0, !1, null, null, !1, !1, "", Nc);
  return (
    (e._reactRootContainer = a),
    (e[Ft] = a.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    zn(function () {
      fs(t, a, n, r);
    }),
    a
  );
}
function ms(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Hi(s);
        l.call(a);
      };
    }
    fs(t, s, e, o);
  } else s = Zm(n, t, e, o, r);
  return Hi(s);
}
Zd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dr(t.pendingLanes);
        n !== 0 &&
          (La(t, n | 1), Ve(t, de()), !(H & 6) && ((fr = de() + 500), fn()));
      }
      break;
    case 13:
      zn(function () {
        var r = Tt(e, 1);
        if (r !== null) {
          var o = Fe();
          ht(r, e, 1, o);
        }
      }),
        cu(e, 1);
  }
};
Na = function (e) {
  if (e.tag === 13) {
    var t = Tt(e, 134217728);
    if (t !== null) {
      var n = Fe();
      ht(t, e, 134217728, n);
    }
    cu(e, 134217728);
  }
};
qd = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      n = Tt(e, t);
    if (n !== null) {
      var r = Fe();
      ht(n, e, t, r);
    }
    cu(e, t);
  }
};
ef = function () {
  return G;
};
tf = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
$l = function (e, t, n) {
  switch (t) {
    case "input":
      if ((xl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = is(r);
            if (!o) throw Error(E(90));
            Nd(r), xl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Md(e, n);
      break;
    case "select":
      (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
  }
};
bd = iu;
Bd = zn;
var qm = { usingClientEntryPoint: !1, Events: [ko, Hn, is, Ad, Ud, iu] },
  Fr = {
    findFiberByHostInstance: vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  e1 = {
    bundleType: Fr.bundleType,
    version: Fr.version,
    rendererPackageName: Fr.rendererPackageName,
    rendererConfig: Fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fr.findFiberByHostInstance || Jm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vo.isDisabled && Vo.supportsFiber)
    try {
      (ts = Vo.inject(e1)), (jt = Vo);
    } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qm;
qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fu(t)) throw Error(E(200));
  return Xm(e, t, null, n);
};
qe.createRoot = function (e, t) {
  if (!fu(e)) throw Error(E(299));
  var n = !1,
    r = "",
    o = jp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = uu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ft] = t.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    new du(t)
  );
};
qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Wd(t)), (e = e === null ? null : e.stateNode), e;
};
qe.flushSync = function (e) {
  return zn(e);
};
qe.hydrate = function (e, t, n) {
  if (!hs(t)) throw Error(E(200));
  return ms(null, e, t, !0, n);
};
qe.hydrateRoot = function (e, t, n) {
  if (!fu(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = jp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Cp(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Ft] = t.current),
    ao(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ps(t);
};
qe.render = function (e, t, n) {
  if (!hs(t)) throw Error(E(200));
  return ms(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function (e) {
  if (!hs(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (zn(function () {
        ms(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ft] = null);
        });
      }),
      !0)
    : !1;
};
qe.unstable_batchedUpdates = iu;
qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hs(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return ms(e, t, n, !1, r);
};
qe.version = "18.3.1-next-f1338f8080-20240426";
function _p() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_p);
    } catch (e) {
      console.error(e);
    }
}
_p(), (jd.exports = qe);
var $p = jd.exports,
  Ic = $p;
(fl.createRoot = Ic.createRoot), (fl.hydrateRoot = Ic.hydrateRoot);
const Mc = "pushstate",
  Fc = "popstate",
  Ep = "beforeunload",
  Pp = (e) => (e.preventDefault(), (e.returnValue = "")),
  t1 = () => {
    removeEventListener(Ep, Pp, { capture: !0 });
  };
function Rp(e) {
  let t = e.getLocation();
  const n = new Set();
  let r = [];
  const o = () => {
      (t = e.getLocation()), n.forEach((s) => s());
    },
    i = async (s, l) => {
      var a;
      if (
        !((l == null ? void 0 : l.ignoreBlocker) ?? !1) &&
        typeof document < "u" &&
        r.length
      ) {
        for (const d of r)
          if (!(await d())) {
            (a = e.onBlocked) == null || a.call(e, o);
            return;
          }
      }
      s();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (s) => (
      n.add(s),
      () => {
        n.delete(s);
      }
    ),
    push: (s, l, a) => {
      (l = Tc(l)),
        i(() => {
          e.pushState(s, l), o();
        }, a);
    },
    replace: (s, l, a) => {
      (l = Tc(l)),
        i(() => {
          e.replaceState(s, l), o();
        }, a);
    },
    go: (s, l) => {
      i(() => {
        e.go(s), o();
      }, l);
    },
    back: (s) => {
      i(() => {
        e.back(), o();
      }, s);
    },
    forward: (s) => {
      i(() => {
        e.forward(), o();
      }, s);
    },
    createHref: (s) => e.createHref(s),
    block: (s) => (
      r.push(s),
      r.length === 1 && addEventListener(Ep, Pp, { capture: !0 }),
      () => {
        (r = r.filter((l) => l !== s)), r.length || t1();
      }
    ),
    flush: () => {
      var s;
      return (s = e.flush) == null ? void 0 : s.call(e);
    },
    destroy: () => {
      var s;
      return (s = e.destroy) == null ? void 0 : s.call(e);
    },
    notify: o,
  };
}
function Tc(e) {
  return e || (e = {}), { ...e, key: o1() };
}
function n1(e) {
  const t = typeof document < "u" ? window : void 0,
    n = t.history.pushState,
    r = t.history.replaceState,
    o = (w) => w,
    i = () =>
      Vi(
        `${t.location.pathname}${t.location.search}${t.location.hash}`,
        t.history.state
      );
  let s = i(),
    l;
  const a = () => s;
  let c, d;
  const p = () => {
      c &&
        ((y._ignoreSubscribers = !0),
        (c.isPush ? t.history.pushState : t.history.replaceState)(
          c.state,
          "",
          c.href
        ),
        (y._ignoreSubscribers = !1),
        (c = void 0),
        (d = void 0),
        (l = void 0));
    },
    f = (w, j, m) => {
      const h = o(j);
      d || (l = s),
        (s = Vi(j, m)),
        (c = {
          href: h,
          state: m,
          isPush: (c == null ? void 0 : c.isPush) || w === "push",
        }),
        d || (d = Promise.resolve().then(() => p()));
    },
    v = () => {
      (s = i()), y.notify();
    },
    y = Rp({
      getLocation: a,
      getLength: () => t.history.length,
      pushState: (w, j) => f("push", w, j),
      replaceState: (w, j) => f("replace", w, j),
      back: () => t.history.back(),
      forward: () => t.history.forward(),
      go: (w) => t.history.go(w),
      createHref: (w) => o(w),
      flush: p,
      destroy: () => {
        (t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(Mc, v),
          t.removeEventListener(Fc, v);
      },
      onBlocked: (w) => {
        l && s !== l && ((s = l), w());
      },
    });
  return (
    t.addEventListener(Mc, v),
    t.addEventListener(Fc, v),
    (t.history.pushState = function (...w) {
      const j = n.apply(t.history, w);
      return y._ignoreSubscribers || v(), j;
    }),
    (t.history.replaceState = function (...w) {
      const j = r.apply(t.history, w);
      return y._ignoreSubscribers || v(), j;
    }),
    y
  );
}
function r1(e = { initialEntries: ["/"] }) {
  const t = e.initialEntries;
  let n = e.initialIndex ?? t.length - 1;
  const r = t.map(() => ({}));
  return Rp({
    getLocation: () => Vi(t[n], r[n]),
    getLength: () => t.length,
    pushState: (i, s) => {
      n < t.length - 1 && (t.splice(n + 1), r.splice(n + 1)),
        r.push(s),
        t.push(i),
        (n = Math.max(t.length - 1, 0));
    },
    replaceState: (i, s) => {
      (r[n] = s), (t[n] = i);
    },
    back: () => {
      n = Math.max(n - 1, 0);
    },
    forward: () => {
      n = Math.min(n + 1, t.length - 1);
    },
    go: (i) => {
      n = Math.min(Math.max(n + i, 0), t.length - 1);
    },
    createHref: (i) => i,
  });
}
function Vi(e, t) {
  const n = e.indexOf("#"),
    r = e.indexOf("?");
  return {
    href: e,
    pathname: e.substring(
      0,
      n > 0 ? (r > 0 ? Math.min(n, r) : n) : r > 0 ? r : e.length
    ),
    hash: n > -1 ? e.substring(n) : "",
    search: r > -1 ? e.slice(r, n === -1 ? void 0 : n) : "",
    state: t || {},
  };
}
function o1() {
  return (Math.random() + 1).toString(36).substring(7);
}
var i1 = "Invariant failed";
function Me(e, t) {
  if (!e) throw new Error(i1);
}
const tl = R.createContext(null);
function zp() {
  return typeof document > "u"
    ? tl
    : window.__TSR_ROUTER_CONTEXT__
    ? window.__TSR_ROUTER_CONTEXT__
    : ((window.__TSR_ROUTER_CONTEXT__ = tl), tl);
}
function Ut(e) {
  const t = R.useContext(zp());
  return e == null || e.warn, t;
}
var Lp = { exports: {} },
  Np = {},
  Ip = { exports: {} },
  Mp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pr = R;
function s1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var l1 = typeof Object.is == "function" ? Object.is : s1,
  a1 = pr.useState,
  u1 = pr.useEffect,
  c1 = pr.useLayoutEffect,
  d1 = pr.useDebugValue;
function f1(e, t) {
  var n = t(),
    r = a1({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    c1(
      function () {
        (o.value = n), (o.getSnapshot = t), nl(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    u1(
      function () {
        return (
          nl(o) && i({ inst: o }),
          e(function () {
            nl(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    d1(n),
    n
  );
}
function nl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !l1(e, n);
  } catch {
    return !0;
  }
}
function p1(e, t) {
  return t();
}
var h1 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? p1
    : f1;
Mp.useSyncExternalStore =
  pr.useSyncExternalStore !== void 0 ? pr.useSyncExternalStore : h1;
Ip.exports = Mp;
var m1 = Ip.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gs = R,
  g1 = m1;
function v1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var y1 = typeof Object.is == "function" ? Object.is : v1,
  x1 = g1.useSyncExternalStore,
  w1 = gs.useRef,
  S1 = gs.useEffect,
  k1 = gs.useMemo,
  C1 = gs.useDebugValue;
Np.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = w1(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = k1(
    function () {
      function a(v) {
        if (!c) {
          if (((c = !0), (d = v), (v = r(v)), o !== void 0 && s.hasValue)) {
            var y = s.value;
            if (o(y, v)) return (p = y);
          }
          return (p = v);
        }
        if (((y = p), y1(d, v))) return y;
        var w = r(v);
        return o !== void 0 && o(y, w) ? y : ((d = v), (p = w));
      }
      var c = !1,
        d,
        p,
        f = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        f === null
          ? void 0
          : function () {
              return a(f());
            },
      ];
    },
    [t, n, r, o]
  );
  var l = x1(e, i[0], i[1]);
  return (
    S1(
      function () {
        (s.hasValue = !0), (s.value = l);
      },
      [l]
    ),
    C1(l),
    l
  );
};
Lp.exports = Np;
var j1 = Lp.exports;
class _1 {
  constructor(t, n) {
    (this.listeners = new Set()),
      (this._batching = !1),
      (this._flushing = 0),
      (this.subscribe = (r) => {
        var o, i;
        this.listeners.add(r);
        const s =
          (i = (o = this.options) == null ? void 0 : o.onSubscribe) == null
            ? void 0
            : i.call(o, r, this);
        return () => {
          this.listeners.delete(r), s == null || s();
        };
      }),
      (this.setState = (r) => {
        var o, i, s;
        const l = this.state;
        (this.state =
          (o = this.options) != null && o.updateFn
            ? this.options.updateFn(l)(r)
            : r(l)),
          (s = (i = this.options) == null ? void 0 : i.onUpdate) == null ||
            s.call(i),
          this._flush();
      }),
      (this._flush = () => {
        if (this._batching) return;
        const r = ++this._flushing;
        this.listeners.forEach((o) => {
          this._flushing === r && o();
        });
      }),
      (this.batch = (r) => {
        if (this._batching) return r();
        (this._batching = !0), r(), (this._batching = !1), this._flush();
      }),
      (this.state = t),
      (this.options = n);
  }
}
function $1(e, t = (n) => n) {
  return j1.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    E1
  );
}
function E1(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (let r = 0; r < n.length; r++)
    if (
      !Object.prototype.hasOwnProperty.call(t, n[r]) ||
      !Object.is(e[n[r]], t[n[r]])
    )
      return !1;
  return !0;
}
const Re = "__root__";
function P1(e, t) {
  let n,
    r,
    o,
    i = "";
  for (n in e)
    if ((o = e[n]) !== void 0)
      if (Array.isArray(o))
        for (r = 0; r < o.length; r++)
          i && (i += "&"),
            (i += encodeURIComponent(n) + "=" + encodeURIComponent(o[r]));
      else
        i && (i += "&"),
          (i += encodeURIComponent(n) + "=" + encodeURIComponent(o));
  return "" + i;
}
function Oc(e) {
  if (!e) return "";
  const t = decodeURIComponent(e);
  return t === "false"
    ? !1
    : t === "true"
    ? !0
    : +t * 0 === 0 && +t + "" === t
    ? +t
    : t;
}
function R1(e, t) {
  let n, r;
  const o = {},
    i = e.split("&");
  for (; (n = i.shift()); ) {
    const s = n.indexOf("=");
    if (s !== -1) {
      (r = n.slice(0, s)), (r = decodeURIComponent(r));
      const l = n.slice(s + 1);
      o[r] !== void 0 ? (o[r] = [].concat(o[r], Oc(l))) : (o[r] = Oc(l));
    } else (r = n), (r = decodeURIComponent(r)), (o[r] = "");
  }
  return o;
}
const z1 = N1(JSON.parse),
  L1 = I1(JSON.stringify, JSON.parse);
function N1(e) {
  return (t) => {
    t.substring(0, 1) === "?" && (t = t.substring(1));
    const n = R1(t);
    for (const r in n) {
      const o = n[r];
      if (typeof o == "string")
        try {
          n[r] = e(o);
        } catch {}
    }
    return n;
  };
}
function I1(e, t) {
  function n(r) {
    if (typeof r == "object" && r !== null)
      try {
        return e(r);
      } catch {}
    else if (typeof r == "string" && typeof t == "function")
      try {
        return t(r), e(r);
      } catch {}
    return r;
  }
  return (r) => {
    (r = { ...r }),
      Object.keys(r).forEach((i) => {
        const s = r[i];
        typeof s > "u" || s === void 0 ? delete r[i] : (r[i] = n(s));
      });
    const o = P1(r).toString();
    return o ? `?${o}` : "";
  };
}
function Jr(e) {
  return e[e.length - 1];
}
function M1(e) {
  return typeof e == "function";
}
function Xn(e, t) {
  return M1(e) ? e(t) : e;
}
function Zr(e, t) {
  return t.reduce((n, r) => ((n[r] = e[r]), n), {});
}
function Tn(e, t) {
  if (e === t) return e;
  const n = t,
    r = Ac(e) && Ac(n);
  if (r || (hr(e) && hr(n))) {
    const o = r ? e : Object.keys(e),
      i = o.length,
      s = r ? n : Object.keys(n),
      l = s.length,
      a = r ? [] : {};
    let c = 0;
    for (let d = 0; d < l; d++) {
      const p = r ? d : s[d];
      ((!r && o.includes(p)) || r) && e[p] === void 0 && n[p] === void 0
        ? ((a[p] = void 0), c++)
        : ((a[p] = Tn(e[p], n[p])), a[p] === e[p] && e[p] !== void 0 && c++);
    }
    return i === l && c === i ? e : a;
  }
  return n;
}
function hr(e) {
  if (!Dc(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!Dc(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Dc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ac(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Uc(e, t) {
  let n = Object.keys(e);
  return t && (n = n.filter((r) => e[r] !== void 0)), n;
}
function ir(e, t, n) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (hr(e) && hr(t)) {
    const r = (n == null ? void 0 : n.ignoreUndefined) ?? !0,
      o = Uc(e, r),
      i = Uc(t, r);
    return !(n != null && n.partial) && o.length !== i.length
      ? !1
      : i.every((s) => ir(e[s], t[s], n));
  }
  return Array.isArray(e) && Array.isArray(t)
    ? e.length !== t.length
      ? !1
      : !e.some((r, o) => !ir(r, t[o], n))
    : !1;
}
const Ur = typeof window < "u" ? R.useLayoutEffect : R.useEffect;
function On(e) {
  let t, n;
  const r = new Promise((o, i) => {
    (t = o), (n = i);
  });
  return (
    (r.status = "pending"),
    (r.resolve = (o) => {
      (r.status = "resolved"), (r.value = o), t(o), e == null || e(o);
    }),
    (r.reject = (o) => {
      (r.status = "rejected"), n(o);
    }),
    r
  );
}
function rl(e) {
  const t = R.useRef({ value: e, prev: null }),
    n = t.current.value;
  return e !== n && (t.current = { value: e, prev: n }), t.current.prev;
}
function F1(e, t, n = {}, r = {}) {
  const o = R.useRef(typeof IntersectionObserver == "function"),
    i = R.useRef(null);
  return (
    R.useEffect(() => {
      if (!(!e.current || !o.current || r.disabled))
        return (
          (i.current = new IntersectionObserver(([s]) => {
            t(s);
          }, n)),
          i.current.observe(e.current),
          () => {
            var s;
            (s = i.current) == null || s.disconnect();
          }
        );
    }, [t, n, r.disabled, e]),
    i.current
  );
}
function T1(e) {
  const t = R.useRef(null);
  return (
    R.useEffect(() => {
      e && (typeof e == "function" ? e(t.current) : (e.current = t.current));
    }),
    t
  );
}
function It(e) {
  return vs(e.filter((t) => t !== void 0).join("/"));
}
function vs(e) {
  return e.replace(/\/{2,}/g, "/");
}
function pu(e) {
  return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function wn(e) {
  return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function ia(e) {
  return wn(pu(e));
}
function Wi(e, t) {
  return e.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function O1(e, t, n) {
  return Wi(e, n) === Wi(t, n);
}
function D1({
  basepath: e,
  base: t,
  to: n,
  trailingSlash: r = "never",
  caseSensitive: o,
}) {
  var i, s;
  (t = Gi(e, t, o)), (n = Gi(e, n, o));
  let l = mr(t);
  const a = mr(n);
  l.length > 1 && ((i = Jr(l)) == null ? void 0 : i.value) === "/" && l.pop(),
    a.forEach((d, p) => {
      d.value === "/"
        ? p
          ? p === a.length - 1 && l.push(d)
          : (l = [d])
        : d.value === ".."
        ? l.pop()
        : d.value === "." || l.push(d);
    }),
    l.length > 1 &&
      (((s = Jr(l)) == null ? void 0 : s.value) === "/"
        ? r === "never" && l.pop()
        : r === "always" && l.push({ type: "pathname", value: "/" }));
  const c = It([e, ...l.map((d) => d.value)]);
  return vs(c);
}
function mr(e) {
  if (!e) return [];
  e = vs(e);
  const t = [];
  if (
    (e.slice(0, 1) === "/" &&
      ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })),
    !e)
  )
    return t;
  const n = e.split("/").filter(Boolean);
  return (
    t.push(
      ...n.map((r) =>
        r === "$" || r === "*"
          ? { type: "wildcard", value: r }
          : r.charAt(0) === "$"
          ? { type: "param", value: r }
          : { type: "pathname", value: decodeURI(r) }
      )
    ),
    e.slice(-1) === "/" &&
      ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })),
    t
  );
}
function Wo({
  path: e,
  params: t,
  leaveWildcards: n,
  leaveParams: r,
  decodeCharMap: o,
}) {
  const i = mr(e),
    s = {};
  for (const [l, a] of Object.entries(t)) {
    const c = typeof a == "string";
    ["*", "_splat"].includes(l)
      ? (s[l] = c ? encodeURI(a) : a)
      : (s[l] = c ? A1(a, o) : a);
  }
  return It(
    i.map((l) => {
      if (l.type === "wildcard") {
        const a = s._splat;
        return n ? `${l.value}${a ?? ""}` : a;
      }
      if (l.type === "param") {
        if (r) {
          const a = s[l.value];
          return `${l.value}${a ?? ""}`;
        }
        return s[l.value.substring(1)] ?? "undefined";
      }
      return l.value;
    })
  );
}
function A1(e, t) {
  let n = encodeURIComponent(e);
  if (t) for (const [r, o] of t) n = n.replaceAll(r, o);
  return n;
}
function Go(e, t, n) {
  const r = U1(e, t, n);
  if (!(n.to && !r)) return r ?? {};
}
function Gi(e, t, n = !1) {
  const r = n ? e : e.toLowerCase(),
    o = n ? t : t.toLowerCase();
  switch (!0) {
    case r === "/":
      return t;
    case o === r:
      return "";
    case t.length < e.length:
      return t;
    case o[r.length] !== "/":
      return t;
    case o.startsWith(r):
      return t.slice(e.length);
    default:
      return t;
  }
}
function U1(e, t, n) {
  if (e !== "/" && !t.startsWith(e)) return;
  t = Gi(e, t, n.caseSensitive);
  const r = Gi(e, `${n.to ?? "$"}`, n.caseSensitive),
    o = mr(t),
    i = mr(r);
  t.startsWith("/") || o.unshift({ type: "pathname", value: "/" }),
    r.startsWith("/") || i.unshift({ type: "pathname", value: "/" });
  const s = {};
  return (() => {
    for (let a = 0; a < Math.max(o.length, i.length); a++) {
      const c = o[a],
        d = i[a],
        p = a >= o.length - 1,
        f = a >= i.length - 1;
      if (d) {
        if (d.type === "wildcard") {
          const v = decodeURI(It(o.slice(a).map((y) => y.value)));
          return (s["*"] = v), (s._splat = v), !0;
        }
        if (d.type === "pathname") {
          if (d.value === "/" && !(c != null && c.value)) return !0;
          if (c) {
            if (n.caseSensitive) {
              if (d.value !== c.value) return !1;
            } else if (d.value.toLowerCase() !== c.value.toLowerCase())
              return !1;
          }
        }
        if (!c) return !1;
        if (d.type === "param") {
          if (c.value === "/") return !1;
          c.value.charAt(0) !== "$" &&
            (s[d.value.substring(1)] = decodeURIComponent(c.value));
        }
      }
      if (!p && f)
        return (
          (s["**"] = It(o.slice(a + 1).map((v) => v.value))),
          !!n.fuzzy && (d == null ? void 0 : d.value) !== "/"
        );
    }
    return !0;
  })()
    ? s
    : void 0;
}
function gn(e) {
  return !!(e != null && e.isRedirect);
}
function ol(e) {
  return !!(e != null && e.isRedirect) && e.href;
}
function hu(e) {
  const t = e.errorComponent ?? ys;
  return u.jsx(b1, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) =>
      n ? R.createElement(t, { error: n, reset: r }) : e.children,
  });
}
class b1 extends R.Component {
  constructor() {
    super(...arguments), (this.state = { error: null });
  }
  static getDerivedStateFromProps(t) {
    return { resetKey: t.getResetKey() };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(t, n) {
    n.error && n.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(t, n) {
    this.props.onCatch && this.props.onCatch(t, n);
  }
  render() {
    return this.props.children({
      error:
        this.state.resetKey !== this.props.getResetKey()
          ? null
          : this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
}
function ys({ error: e }) {
  const [t, n] = R.useState(!1);
  return u.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      u.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          u.jsx("strong", {
            style: { fontSize: "1rem" },
            children: "Something went wrong!",
          }),
          u.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => n((r) => !r),
            children: t ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      u.jsx("div", { style: { height: ".25rem" } }),
      t
        ? u.jsx("div", {
            children: u.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: e.message
                ? u.jsx("code", { children: e.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
function Le(e) {
  const t = Ut({ warn: (e == null ? void 0 : e.router) === void 0 });
  return $1(
    ((e == null ? void 0 : e.router) || t).__store,
    e == null ? void 0 : e.select
  );
}
function dt(e) {
  return !!(e != null && e.isNotFound);
}
function B1(e) {
  const t = Le({
    select: (n) => `not-found-${n.location.pathname}-${n.status}`,
  });
  return u.jsx(hu, {
    getResetKey: () => t,
    onCatch: (n, r) => {
      var o;
      if (dt(n)) (o = e.onCatch) == null || o.call(e, n, r);
      else throw n;
    },
    errorComponent: ({ error: n }) => {
      var r;
      if (dt(n)) return (r = e.fallback) == null ? void 0 : r.call(e, n);
      throw n;
    },
    children: e.children,
  });
}
function H1() {
  return u.jsx("p", { children: "Not Found" });
}
const V1 = {
    stringify: (e) =>
      JSON.stringify(e, function (n, r) {
        const o = this[n],
          i = bc.find((s) => s.stringifyCondition(o));
        return i ? i.stringify(o) : r;
      }),
    parse: (e) =>
      JSON.parse(e, function (n, r) {
        const o = this[n],
          i = bc.find((s) => s.parseCondition(o));
        return i ? i.parse(o) : r;
      }),
  },
  bc = [
    {
      stringifyCondition: (e) => e instanceof Date,
      stringify: (e) => ({ $date: e.toISOString() }),
      parseCondition: (e) => hr(e) && e.$date,
      parse: (e) => new Date(e.$date),
    },
    {
      stringifyCondition: (e) => e === void 0,
      stringify: () => ({ $undefined: "" }),
      parseCondition: (e) => hr(e) && e.$undefined === "",
      parse: () => {},
    },
  ],
  Fp = ["component", "errorComponent", "pendingComponent", "notFoundComponent"];
function W1(e) {
  var t;
  for (const n of Fp) if ((t = e.options[n]) != null && t.preload) return !0;
  return !1;
}
function Bc(e, t) {
  if (e == null) return {};
  if ("~validate" in e) {
    const n = e["~validate"]({ value: t });
    if ("value" in n) return n.value;
    throw new Tp(JSON.stringify(n.issues, void 0, 2));
  }
  return "parse" in e ? e.parse(t) : typeof e == "function" ? e(t) : {};
}
function G1(e) {
  return new K1(e);
}
class K1 {
  constructor(t) {
    (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.subscribers = new Set()),
      (this.startReactTransition = (n) => n()),
      (this.update = (n) => {
        n.notFoundRoute &&
          console.warn(
            "The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info."
          );
        const r = this.options;
        (this.options = { ...this.options, ...n }),
          (this.isServer = this.options.isServer ?? typeof document > "u"),
          (this.pathParamsDecodeCharMap = this.options
            .pathParamsAllowedCharacters
            ? new Map(
                this.options.pathParamsAllowedCharacters.map((o) => [
                  encodeURIComponent(o),
                  o,
                ])
              )
            : void 0),
          (!this.basepath || (n.basepath && n.basepath !== r.basepath)) &&
            (n.basepath === void 0 || n.basepath === "" || n.basepath === "/"
              ? (this.basepath = "/")
              : (this.basepath = `/${ia(n.basepath)}`)),
          (!this.history ||
            (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ??
              (this.isServer
                ? r1({ initialEntries: [this.basepath || "/"] })
                : n1())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            (this.__store = new _1(Y1(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter(
                    (o) => !["redirected"].includes(o.status)
                  ),
                };
              },
            }));
      }),
      (this.buildRouteTree = () => {
        (this.routesById = {}), (this.routesByPath = {});
        const n = this.options.notFoundRoute;
        n &&
          (n.init({
            originalIndex: 99999999999,
            defaultSsr: this.options.defaultSsr,
          }),
          (this.routesById[n.id] = n));
        const r = (s) => {
          s.forEach((l, a) => {
            l.init({ originalIndex: a, defaultSsr: this.options.defaultSsr });
            const c = this.routesById[l.id];
            if (
              (Me(!c, `Duplicate routes found with id: ${String(l.id)}`),
              (this.routesById[l.id] = l),
              !l.isRoot && l.path)
            ) {
              const p = wn(l.fullPath);
              (!this.routesByPath[p] || l.fullPath.endsWith("/")) &&
                (this.routesByPath[p] = l);
            }
            const d = l.children;
            d != null && d.length && r(d);
          });
        };
        r([this.routeTree]);
        const o = [];
        Object.values(this.routesById).forEach((s, l) => {
          var a;
          if (s.isRoot || !s.path) return;
          const c = pu(s.fullPath),
            d = mr(c);
          for (
            ;
            d.length > 1 && ((a = d[0]) == null ? void 0 : a.value) === "/";

          )
            d.shift();
          const p = d.map((f) =>
            f.value === "/"
              ? 0.75
              : f.type === "param"
              ? 0.5
              : f.type === "wildcard"
              ? 0.25
              : 1
          );
          o.push({ child: s, trimmed: c, parsed: d, index: l, scores: p });
        }),
          (this.flatRoutes = o
            .sort((s, l) => {
              const a = Math.min(s.scores.length, l.scores.length);
              for (let c = 0; c < a; c++)
                if (s.scores[c] !== l.scores[c])
                  return l.scores[c] - s.scores[c];
              if (s.scores.length !== l.scores.length)
                return l.scores.length - s.scores.length;
              for (let c = 0; c < a; c++)
                if (s.parsed[c].value !== l.parsed[c].value)
                  return s.parsed[c].value > l.parsed[c].value ? 1 : -1;
              return s.index - l.index;
            })
            .map((s, l) => ((s.child.rank = l), s.child)));
      }),
      (this.subscribe = (n, r) => {
        const o = { eventType: n, fn: r };
        return (
          this.subscribers.add(o),
          () => {
            this.subscribers.delete(o);
          }
        );
      }),
      (this.emit = (n) => {
        this.subscribers.forEach((r) => {
          r.eventType === n.type && r.fn(n);
        });
      }),
      (this.parseLocation = (n) => {
        const r = ({ pathname: l, search: a, hash: c, state: d }) => {
            const p = this.options.parseSearch(a),
              f = this.options.stringifySearch(p);
            return {
              pathname: l,
              searchStr: f,
              search: Tn(n == null ? void 0 : n.search, p),
              hash: c.split("#").reverse()[0] ?? "",
              href: `${l}${f}${c}`,
              state: Tn(n == null ? void 0 : n.state, d),
            };
          },
          o = r(this.history.location),
          { __tempLocation: i, __tempKey: s } = o.state;
        if (i && (!s || s === this.tempLocationKey)) {
          const l = r(i);
          return (
            (l.state.key = o.state.key),
            delete l.state.__tempLocation,
            { ...l, maskedLocation: o }
          );
        }
        return o;
      }),
      (this.resolvePathWithBase = (n, r) =>
        D1({
          basepath: this.basepath,
          base: n,
          to: vs(r),
          trailingSlash: this.options.trailingSlash,
          caseSensitive: this.options.caseSensitive,
        })),
      (this.getMatchedRoutes = (n, r) => {
        let o = {};
        const i = wn(n.pathname),
          s = (d) =>
            Go(this.basepath, i, {
              to: d.fullPath,
              caseSensitive:
                d.options.caseSensitive ?? this.options.caseSensitive,
              fuzzy: !0,
            });
        let l =
          (r == null ? void 0 : r.to) !== void 0
            ? this.routesByPath[r.to]
            : void 0;
        l
          ? (o = s(l))
          : (l = this.flatRoutes.find((d) => {
              const p = s(d);
              return p ? ((o = p), !0) : !1;
            }));
        let a = l || this.routesById[Re];
        const c = [a];
        for (; a.parentRoute; ) (a = a.parentRoute), c.unshift(a);
        return { matchedRoutes: c, routeParams: o, foundRoute: l };
      }),
      (this.cancelMatch = (n) => {
        const r = this.getMatch(n);
        r && (r.abortController.abort(), clearTimeout(r.pendingTimeout));
      }),
      (this.cancelMatches = () => {
        var n;
        (n = this.state.pendingMatches) == null ||
          n.forEach((r) => {
            this.cancelMatch(r.id);
          });
      }),
      (this.buildLocation = (n) => {
        const r = (i = {}, s) => {
            var l, a, c, d, p, f;
            const v = i._fromLocation
                ? this.matchRoutes(i._fromLocation, { _buildLocation: !0 })
                : this.state.matches,
              y =
                i.from != null
                  ? v.find((O) =>
                      Go(this.basepath, wn(O.pathname), {
                        to: i.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      })
                    )
                  : void 0,
              w =
                (y == null ? void 0 : y.pathname) ||
                this.latestLocation.pathname;
            Me(
              i.from == null || y != null,
              "Could not find match for from: " + i.from
            );
            const j =
                (l = this.state.pendingMatches) != null && l.length
                  ? (a = Jr(this.state.pendingMatches)) == null
                    ? void 0
                    : a.search
                  : ((c = Jr(v)) == null ? void 0 : c.search) ||
                    this.latestLocation.search,
              m =
                s == null
                  ? void 0
                  : s.matchedRoutes.filter((O) =>
                      v.find((b) => b.routeId === O.id)
                    );
            let h;
            if (i.to) h = this.resolvePathWithBase(w, `${i.to}`);
            else {
              const O =
                this.routesById[
                  (d =
                    m == null
                      ? void 0
                      : m.find((b) => {
                          const K = Wo({
                            path: b.fullPath,
                            params: (s == null ? void 0 : s.routeParams) ?? {},
                            decodeCharMap: this.pathParamsDecodeCharMap,
                          });
                          return It([this.basepath, K]) === w;
                        })) == null
                    ? void 0
                    : d.id
                ];
              h = this.resolvePathWithBase(w, (O == null ? void 0 : O.to) ?? w);
            }
            const g = { ...((p = Jr(v)) == null ? void 0 : p.params) };
            let x = (i.params ?? !0) === !0 ? g : { ...g, ...Xn(i.params, g) };
            Object.keys(x).length > 0 &&
              (s == null ||
                s.matchedRoutes
                  .map((O) => {
                    var b;
                    return (
                      ((b = O.options.params) == null ? void 0 : b.stringify) ??
                      O.options.stringifyParams
                    );
                  })
                  .filter(Boolean)
                  .forEach((O) => {
                    x = { ...x, ...O(x) };
                  })),
              (h = Wo({
                path: h,
                params: x ?? {},
                leaveWildcards: !1,
                leaveParams: n.leaveParams,
                decodeCharMap: this.pathParamsDecodeCharMap,
              }));
            let C = j;
            if (n._includeValidateSearch) {
              let O = (f = this.options.search) != null && f.strict ? {} : C;
              s == null ||
                s.matchedRoutes.forEach((b) => {
                  try {
                    b.options.validateSearch &&
                      (O = {
                        ...O,
                        ...(Bc(b.options.validateSearch, { ...O, ...C }) ?? {}),
                      });
                  } catch {}
                }),
                (C = O);
            }
            (C = ((O) => {
              const b =
                  (s == null
                    ? void 0
                    : s.matchedRoutes.reduce((Q, A) => {
                        var D;
                        let P = [];
                        return (
                          "search" in A.options
                            ? (D = A.options.search) != null &&
                              D.middlewares &&
                              (P = A.options.search.middlewares)
                            : (A.options.preSearchFilters ||
                                A.options.postSearchFilters) &&
                              (P = [
                                ({ search: z, next: M }) => {
                                  let F = z;
                                  "preSearchFilters" in A.options &&
                                    A.options.preSearchFilters &&
                                    (F = A.options.preSearchFilters.reduce(
                                      (ee, te) => te(ee),
                                      z
                                    ));
                                  const re = M(F);
                                  return "postSearchFilters" in A.options &&
                                    A.options.postSearchFilters
                                    ? A.options.postSearchFilters.reduce(
                                        (ee, te) => te(ee),
                                        re
                                      )
                                    : re;
                                },
                              ]),
                          Q.concat(P)
                        );
                      }, [])) ?? [],
                K = ({ search: Q }) =>
                  i.search ? (i.search === !0 ? Q : Xn(i.search, Q)) : {};
              b.push(K);
              const fe = (Q, A) => {
                if (Q >= b.length) return A;
                const D = b[Q];
                return D({ search: A, next: (L) => fe(Q + 1, L) });
              };
              return fe(0, O);
            })(C)),
              (C = Tn(j, C));
            const k = this.options.stringifySearch(C),
              $ =
                i.hash === !0
                  ? this.latestLocation.hash
                  : i.hash
                  ? Xn(i.hash, this.latestLocation.hash)
                  : void 0,
              _ = $ ? `#${$}` : "";
            let N =
              i.state === !0
                ? this.latestLocation.state
                : i.state
                ? Xn(i.state, this.latestLocation.state)
                : {};
            return (
              (N = Tn(this.latestLocation.state, N)),
              {
                pathname: h,
                search: C,
                searchStr: k,
                state: N,
                hash: $ ?? "",
                href: `${h}${k}${_}`,
                unmaskOnReload: i.unmaskOnReload,
              }
            );
          },
          o = (i = {}, s) => {
            var l;
            const a = r(i);
            let c = s ? r(s) : void 0;
            if (!c) {
              let f = {};
              const v =
                (l = this.options.routeMasks) == null
                  ? void 0
                  : l.find((y) => {
                      const w = Go(this.basepath, a.pathname, {
                        to: y.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      });
                      return w ? ((f = w), !0) : !1;
                    });
              if (v) {
                const { from: y, ...w } = v;
                (s = { ...Zr(n, ["from"]), ...w, params: f }), (c = r(s));
              }
            }
            const d = this.getMatchedRoutes(a, i),
              p = r(i, d);
            if (c) {
              const f = this.getMatchedRoutes(c, s),
                v = r(s, f);
              p.maskedLocation = v;
            }
            return p;
          };
        return n.mask ? o(n, { ...Zr(n, ["from"]), ...n.mask }) : o(n);
      }),
      (this.commitLocation = ({
        viewTransition: n,
        ignoreBlocker: r,
        ...o
      }) => {
        const i = () => {
            o.state.key = this.latestLocation.state.key;
            const a = ir(o.state, this.latestLocation.state);
            return delete o.state.key, a;
          },
          s = this.latestLocation.href === o.href,
          l = this.commitLocationPromise;
        if (
          ((this.commitLocationPromise = On(() => {
            l == null || l.resolve();
          })),
          s && i())
        )
          this.load();
        else {
          let { maskedLocation: a, ...c } = o;
          a &&
            ((c = {
              ...a,
              state: {
                ...a.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...c,
                  search: c.searchStr,
                  state: {
                    ...c.state,
                    __tempKey: void 0,
                    __tempLocation: void 0,
                    key: void 0,
                  },
                },
              },
            }),
            (c.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (c.state.__tempKey = this.tempLocationKey)),
            (this.shouldViewTransition = n),
            this.history[o.replace ? "replace" : "push"](c.href, c.state, {
              ignoreBlocker: r,
            });
        }
        return (
          (this.resetNextScroll = o.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        );
      }),
      (this.buildAndCommitLocation = ({
        replace: n,
        resetScroll: r,
        viewTransition: o,
        ignoreBlocker: i,
        ...s
      } = {}) => {
        const l = s.href;
        if (l) {
          const c = Vi(l, {});
          (s.to = c.pathname),
            (s.search = this.options.parseSearch(c.search)),
            (s.hash = c.hash.slice(1));
        }
        const a = this.buildLocation({ ...s, _includeValidateSearch: !0 });
        return this.commitLocation({
          ...a,
          viewTransition: o,
          replace: n,
          resetScroll: r,
          ignoreBlocker: i,
        });
      }),
      (this.navigate = ({ to: n, ...r }) => {
        const o = String(n);
        let i;
        try {
          new URL(`${o}`), (i = !0);
        } catch {}
        return Me(!i), this.buildAndCommitLocation({ ...r, to: n });
      }),
      (this.load = async () => {
        this.latestLocation = this.parseLocation(this.latestLocation);
        let n, r, o;
        for (
          o = new Promise((i) => {
            this.startReactTransition(async () => {
              var s;
              try {
                const l = this.latestLocation,
                  a = this.state.resolvedLocation,
                  c = a.href !== l.href;
                this.cancelMatches();
                let d;
                this.__store.batch(() => {
                  (d = this.matchRoutes(l)),
                    this.__store.setState((p) => ({
                      ...p,
                      status: "pending",
                      isLoading: !0,
                      location: l,
                      pendingMatches: d,
                      cachedMatches: p.cachedMatches.filter(
                        (f) => !d.find((v) => v.id === f.id)
                      ),
                    }));
                }),
                  this.state.redirect ||
                    this.emit({
                      type: "onBeforeNavigate",
                      fromLocation: a,
                      toLocation: l,
                      pathChanged: c,
                    }),
                  this.emit({
                    type: "onBeforeLoad",
                    fromLocation: a,
                    toLocation: l,
                    pathChanged: c,
                  }),
                  await this.loadMatches({
                    matches: d,
                    location: l,
                    onReady: async () => {
                      this.startViewTransition(async () => {
                        let p, f, v;
                        this.__store.batch(() => {
                          this.__store.setState((y) => {
                            const w = y.matches,
                              j = y.pendingMatches || y.matches;
                            return (
                              (p = w.filter(
                                (m) => !j.find((h) => h.id === m.id)
                              )),
                              (f = j.filter(
                                (m) => !w.find((h) => h.id === m.id)
                              )),
                              (v = w.filter((m) =>
                                j.find((h) => h.id === m.id)
                              )),
                              {
                                ...y,
                                isLoading: !1,
                                loadedAt: Date.now(),
                                matches: j,
                                pendingMatches: void 0,
                                cachedMatches: [
                                  ...y.cachedMatches,
                                  ...p.filter((m) => m.status !== "error"),
                                ],
                              }
                            );
                          }),
                            this.clearExpiredCache();
                        }),
                          [
                            [p, "onLeave"],
                            [f, "onEnter"],
                            [v, "onStay"],
                          ].forEach(([y, w]) => {
                            y.forEach((j) => {
                              var m, h;
                              (h = (m =
                                this.looseRoutesById[j.routeId].options)[w]) ==
                                null || h.call(m, j);
                            });
                          });
                      });
                    },
                  });
              } catch (l) {
                ol(l)
                  ? ((n = l),
                    this.isServer ||
                      this.navigate({ ...l, replace: !0, ignoreBlocker: !0 }))
                  : dt(l) && (r = l),
                  this.__store.setState((a) => ({
                    ...a,
                    statusCode: n
                      ? n.statusCode
                      : r
                      ? 404
                      : a.matches.some((c) => c.status === "error")
                      ? 500
                      : 200,
                    redirect: n,
                  }));
              }
              this.latestLoadPromise === o &&
                ((s = this.commitLocationPromise) == null || s.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                i();
            });
          }),
            this.latestLoadPromise = o,
            await o;
          this.latestLoadPromise && o !== this.latestLoadPromise;

        )
          await this.latestLoadPromise;
      }),
      (this.startViewTransition = (n) => {
        const r =
          this.shouldViewTransition ?? this.options.defaultViewTransition;
        delete this.shouldViewTransition,
          r &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          typeof document.startViewTransition == "function"
            ? document.startViewTransition(n)
            : n();
      }),
      (this.updateMatch = (n, r) => {
        var o;
        let i;
        const s =
            (o = this.state.pendingMatches) == null
              ? void 0
              : o.find((c) => c.id === n),
          l = this.state.matches.find((c) => c.id === n),
          a = s ? "pendingMatches" : l ? "matches" : "cachedMatches";
        return (
          this.__store.setState((c) => {
            var d;
            return {
              ...c,
              [a]:
                (d = c[a]) == null
                  ? void 0
                  : d.map((p) => (p.id === n ? (i = r(p)) : p)),
            };
          }),
          i
        );
      }),
      (this.getMatch = (n) =>
        [
          ...this.state.cachedMatches,
          ...(this.state.pendingMatches ?? []),
          ...this.state.matches,
        ].find((r) => r.id === n)),
      (this.loadMatches = async ({
        location: n,
        matches: r,
        preload: o,
        onReady: i,
        updateMatch: s = this.updateMatch,
      }) => {
        let l,
          a = !1;
        const c = async () => {
          a || ((a = !0), await (i == null ? void 0 : i()));
        };
        !this.isServer && !this.state.matches.length && c();
        const d = (p, f) => {
          var v, y, w;
          if (ol(f)) throw f;
          if (gn(f) || dt(f)) {
            if (
              (s(p.id, (j) => ({
                ...j,
                status: gn(f) ? "redirected" : dt(f) ? "notFound" : "error",
                isFetching: !1,
                error: f,
                beforeLoadPromise: void 0,
                loaderPromise: void 0,
              })),
              f.routeId || (f.routeId = p.routeId),
              (v = p.beforeLoadPromise) == null || v.resolve(),
              (y = p.loaderPromise) == null || y.resolve(),
              (w = p.loadPromise) == null || w.resolve(),
              gn(f))
            )
              throw (
                ((a = !0),
                (f = this.resolveRedirect({ ...f, _fromLocation: n })),
                f)
              );
            if (dt(f))
              throw (this._handleNotFound(r, f, { updateMatch: s }), f);
          }
        };
        try {
          await new Promise((p, f) => {
            (async () => {
              var v, y, w;
              try {
                const j = (g, x, C) => {
                  var S, k;
                  const { id: $, routeId: _ } = r[g],
                    N = this.looseRoutesById[_];
                  if (x instanceof Promise) throw x;
                  (x.routerCode = C), (l = l ?? g), d(this.getMatch($), x);
                  try {
                    (k = (S = N.options).onError) == null || k.call(S, x);
                  } catch (O) {
                    (x = O), d(this.getMatch($), x);
                  }
                  s($, (O) => {
                    var b, K;
                    return (
                      (b = O.beforeLoadPromise) == null || b.resolve(),
                      (K = O.loadPromise) == null || K.resolve(),
                      {
                        ...O,
                        error: x,
                        status: "error",
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0,
                      }
                    );
                  });
                };
                for (const [g, { id: x, routeId: C }] of r.entries()) {
                  const S = this.getMatch(x),
                    k = (v = r[g - 1]) == null ? void 0 : v.id,
                    $ = this.looseRoutesById[C],
                    _ = $.options.pendingMs ?? this.options.defaultPendingMs,
                    N = !!(
                      i &&
                      !this.isServer &&
                      !o &&
                      ($.options.loader || $.options.beforeLoad) &&
                      typeof _ == "number" &&
                      _ !== 1 / 0 &&
                      ($.options.pendingComponent ??
                        this.options.defaultPendingComponent)
                    );
                  if (S.beforeLoadPromise || S.loaderPromise)
                    N &&
                      setTimeout(() => {
                        try {
                          c();
                        } catch {}
                      }, _),
                      await S.beforeLoadPromise;
                  else {
                    try {
                      s(x, (F) => ({
                        ...F,
                        loadPromise: On(() => {
                          var re;
                          (re = F.loadPromise) == null || re.resolve();
                        }),
                        beforeLoadPromise: On(),
                      }));
                      const O = new AbortController();
                      let b;
                      N &&
                        (b = setTimeout(() => {
                          try {
                            c();
                          } catch {}
                        }, _));
                      const { paramsError: K, searchError: fe } =
                        this.getMatch(x);
                      K && j(g, K, "PARSE_PARAMS"),
                        fe && j(g, fe, "VALIDATE_SEARCH");
                      const Q = () =>
                        k
                          ? this.getMatch(k).context
                          : this.options.context ?? {};
                      s(x, (F) => ({
                        ...F,
                        isFetching: "beforeLoad",
                        fetchCount: F.fetchCount + 1,
                        abortController: O,
                        pendingTimeout: b,
                        context: {
                          ...Q(),
                          ...F.__routeContext,
                          ...F.__beforeLoadContext,
                        },
                      }));
                      const {
                          search: A,
                          params: D,
                          context: P,
                          cause: L,
                        } = this.getMatch(x),
                        z = {
                          search: A,
                          abortController: O,
                          params: D,
                          preload: !!o,
                          context: P,
                          location: n,
                          navigate: (F) =>
                            this.navigate({ ...F, _fromLocation: n }),
                          buildLocation: this.buildLocation,
                          cause: o ? "preload" : L,
                          matches: r,
                        };
                      let M =
                        (await ((w = (y = $.options).beforeLoad) == null
                          ? void 0
                          : w.call(y, z))) ?? {};
                      this.serializeLoaderData &&
                        (M = this.serializeLoaderData(
                          "__beforeLoadContext",
                          M,
                          { router: this, match: this.getMatch(x) }
                        )),
                        (gn(M) || dt(M)) && j(g, M, "BEFORE_LOAD"),
                        s(x, (F) => ({
                          ...F,
                          __beforeLoadContext: M,
                          context: { ...Q(), ...F.__routeContext, ...M },
                          abortController: O,
                        }));
                    } catch (O) {
                      j(g, O, "BEFORE_LOAD");
                    }
                    s(x, (O) => {
                      var b;
                      return (
                        (b = O.beforeLoadPromise) == null || b.resolve(),
                        { ...O, beforeLoadPromise: void 0, isFetching: !1 }
                      );
                    });
                  }
                }
                const m = r.slice(0, l),
                  h = [];
                m.forEach(({ id: g, routeId: x }, C) => {
                  h.push(
                    (async () => {
                      const { loaderPromise: S } = this.getMatch(g);
                      let k = !1;
                      if (S) await S;
                      else {
                        const $ = h[C - 1],
                          _ = this.looseRoutesById[x],
                          N = () => {
                            const {
                              params: z,
                              loaderDeps: M,
                              abortController: F,
                              context: re,
                              cause: ee,
                            } = this.getMatch(g);
                            return {
                              params: z,
                              deps: M,
                              preload: !!o,
                              parentMatchPromise: $,
                              abortController: F,
                              context: re,
                              location: n,
                              navigate: (te) =>
                                this.navigate({ ...te, _fromLocation: n }),
                              cause: o ? "preload" : ee,
                              route: _,
                            };
                          },
                          O = Date.now() - this.getMatch(g).updatedAt,
                          b = o
                            ? _.options.preloadStaleTime ??
                              this.options.defaultPreloadStaleTime ??
                              3e4
                            : _.options.staleTime ??
                              this.options.defaultStaleTime ??
                              0,
                          K = _.options.shouldReload,
                          fe = typeof K == "function" ? K(N()) : K;
                        s(g, (z) => ({
                          ...z,
                          loaderPromise: On(),
                          preload:
                            !!o && !this.state.matches.find((M) => M.id === g),
                        }));
                        const Q = async () => {
                            var z, M, F, re, ee, te, ve, De;
                            try {
                              const We = async () => {
                                const oe = this.getMatch(g);
                                oe.minPendingPromise &&
                                  (await oe.minPendingPromise);
                              };
                              try {
                                _._lazyPromise === void 0 &&
                                  (_.lazyFn
                                    ? (_._lazyPromise = _.lazyFn().then(
                                        (ue) => {
                                          const { id: bt, ...Er } = ue.options;
                                          Object.assign(_.options, Er);
                                        }
                                      ))
                                    : (_._lazyPromise = Promise.resolve())),
                                  _._componentsPromise === void 0 &&
                                    (_._componentsPromise = _._lazyPromise.then(
                                      () =>
                                        Promise.all(
                                          Fp.map(async (ue) => {
                                            const bt = _.options[ue];
                                            bt != null &&
                                              bt.preload &&
                                              (await bt.preload());
                                          })
                                        )
                                    )),
                                  s(g, (ue) => ({
                                    ...ue,
                                    isFetching: "loader",
                                  }));
                                let oe = await ((M = (z = _.options).loader) ==
                                null
                                  ? void 0
                                  : M.call(z, N()));
                                this.serializeLoaderData &&
                                  (oe = this.serializeLoaderData(
                                    "loaderData",
                                    oe,
                                    { router: this, match: this.getMatch(g) }
                                  )),
                                  d(this.getMatch(g), oe),
                                  await _._lazyPromise,
                                  await We();
                                const vt =
                                    (re = (F = _.options).meta) == null
                                      ? void 0
                                      : re.call(F, {
                                          matches: r,
                                          match: this.getMatch(g),
                                          params: this.getMatch(g).params,
                                          loaderData: oe,
                                        }),
                                  Ge =
                                    (te = (ee = _.options).headers) == null
                                      ? void 0
                                      : te.call(ee, { loaderData: oe });
                                s(g, (ue) => ({
                                  ...ue,
                                  error: void 0,
                                  status: "success",
                                  isFetching: !1,
                                  updatedAt: Date.now(),
                                  loaderData: oe,
                                  meta: vt,
                                  headers: Ge,
                                }));
                              } catch (oe) {
                                let vt = oe;
                                await We(), d(this.getMatch(g), oe);
                                try {
                                  (De = (ve = _.options).onError) == null ||
                                    De.call(ve, oe);
                                } catch (Ge) {
                                  (vt = Ge), d(this.getMatch(g), Ge);
                                }
                                s(g, (Ge) => ({
                                  ...Ge,
                                  error: vt,
                                  status: "error",
                                  isFetching: !1,
                                }));
                              }
                              await _._componentsPromise;
                            } catch (We) {
                              d(this.getMatch(g), We);
                            }
                          },
                          { status: A, invalid: D } = this.getMatch(g);
                        (k = A === "success" && (D || (fe ?? O > b))),
                          (o && _.options.preload === !1) ||
                            (k
                              ? (async () => {
                                  try {
                                    await Q();
                                  } catch (z) {
                                    ol(z) && (await this.navigate(z));
                                  }
                                })()
                              : A !== "success" && (await Q()));
                        const { loaderPromise: P, loadPromise: L } =
                          this.getMatch(g);
                        P == null || P.resolve(), L == null || L.resolve();
                      }
                      return (
                        s(g, ($) => ({
                          ...$,
                          isFetching: k ? $.isFetching : !1,
                          loaderPromise: void 0,
                          invalid: !1,
                        })),
                        this.getMatch(g)
                      );
                    })()
                  );
                }),
                  await Promise.all(h),
                  p();
              } catch (j) {
                f(j);
              }
            })();
          }),
            await c();
        } catch (p) {
          if (gn(p) || dt(p)) throw (dt(p) && !o && (await c()), p);
        }
        return r;
      }),
      (this.invalidate = (n) => {
        const r = (o) => {
          var i;
          return ((i = n == null ? void 0 : n.filter) == null
            ? void 0
            : i.call(n, o)) ?? !0
            ? {
                ...o,
                invalid: !0,
                ...(o.status === "error"
                  ? { status: "pending", error: void 0 }
                  : {}),
              }
            : o;
        };
        return (
          this.__store.setState((o) => {
            var i;
            return {
              ...o,
              matches: o.matches.map(r),
              cachedMatches: o.cachedMatches.map(r),
              pendingMatches:
                (i = o.pendingMatches) == null ? void 0 : i.map(r),
            };
          }),
          this.load()
        );
      }),
      (this.resolveRedirect = (n) => {
        const r = n;
        return r.href || (r.href = this.buildLocation(r).href), r;
      }),
      (this.clearCache = (n) => {
        const r = n == null ? void 0 : n.filter;
        r !== void 0
          ? this.__store.setState((o) => ({
              ...o,
              cachedMatches: o.cachedMatches.filter((i) => !r(i)),
            }))
          : this.__store.setState((o) => ({ ...o, cachedMatches: [] }));
      }),
      (this.clearExpiredCache = () => {
        const n = (r) => {
          const o = this.looseRoutesById[r.routeId];
          if (!o.options.loader) return !0;
          const i =
            (r.preload
              ? o.options.preloadGcTime ?? this.options.defaultPreloadGcTime
              : o.options.gcTime ?? this.options.defaultGcTime) ?? 5 * 60 * 1e3;
          return !(r.status !== "error" && Date.now() - r.updatedAt < i);
        };
        this.clearCache({ filter: n });
      }),
      (this.preloadRoute = async (n) => {
        const r = this.buildLocation(n);
        let o = this.matchRoutes(r, { throwOnError: !0, preload: !0, dest: n });
        const i = Object.fromEntries(
          [
            ...this.state.matches,
            ...(this.state.pendingMatches ?? []),
            ...this.state.cachedMatches,
          ].map((l) => [l.id, !0])
        );
        this.__store.batch(() => {
          o.forEach((l) => {
            i[l.id] ||
              this.__store.setState((a) => ({
                ...a,
                cachedMatches: [...a.cachedMatches, l],
              }));
          });
        });
        const s = new Set(
          [...this.state.matches, ...(this.state.pendingMatches ?? [])].map(
            (l) => l.id
          )
        );
        try {
          return (
            (o = await this.loadMatches({
              matches: o,
              location: r,
              preload: !0,
              updateMatch: (l, a) => {
                s.has(l)
                  ? (o = o.map((c) => (c.id === l ? a(c) : c)))
                  : this.updateMatch(l, a);
              },
            })),
            o
          );
        } catch (l) {
          if (gn(l)) return await this.preloadRoute({ ...l, _fromLocation: r });
          console.error(l);
          return;
        }
      }),
      (this.matchRoute = (n, r) => {
        const o = {
            ...n,
            to: n.to ? this.resolvePathWithBase(n.from || "", n.to) : void 0,
            params: n.params || {},
            leaveParams: !0,
          },
          i = this.buildLocation(o);
        if (r != null && r.pending && this.state.status !== "pending")
          return !1;
        const l = (
            (r == null ? void 0 : r.pending) === void 0
              ? !this.state.isLoading
              : r.pending
          )
            ? this.latestLocation
            : this.state.resolvedLocation,
          a = Go(this.basepath, l.pathname, { ...r, to: i.pathname });
        return !a || (n.params && !ir(a, n.params, { partial: !0 }))
          ? !1
          : a && ((r == null ? void 0 : r.includeSearch) ?? !0)
          ? ir(l.search, i.search, { partial: !0 })
            ? a
            : !1
          : a;
      }),
      (this.dehydrate = () => {
        var n;
        const r =
          ((n = this.options.errorSerializer) == null ? void 0 : n.serialize) ??
          X1;
        return {
          state: {
            dehydratedMatches: this.state.matches.map((o) => ({
              ...Zr(o, ["id", "status", "updatedAt"]),
              error: o.error
                ? { data: r(o.error), __isServerError: !0 }
                : void 0,
            })),
          },
          manifest: this.manifest,
        };
      }),
      (this.hydrate = () => {
        var n, r, o;
        let i;
        typeof document < "u" &&
          (i = this.options.transformer.parse(
            (n = window.__TSR__) == null ? void 0 : n.dehydrated
          )),
          Me(i),
          (this.dehydratedData = i.payload),
          (o = (r = this.options).hydrate) == null || o.call(r, i.payload);
        const s = i.router.state,
          l = this.matchRoutes(this.state.location).map((a) => {
            const c = s.dehydratedMatches.find((d) => d.id === a.id);
            return (
              Me(
                c,
                `Could not find a client-side match for dehydrated match with id: ${a.id}!`
              ),
              { ...a, ...c }
            );
          });
        this.__store.setState((a) => ({ ...a, matches: l })),
          (this.manifest = i.router.manifest);
      }),
      (this.injectedHtml = []),
      (this.injectHtml = (n) => {
        const r = () => (
          (this.injectedHtml = this.injectedHtml.filter((o) => o !== r)), n
        );
        this.injectedHtml.push(r);
      }),
      (this.streamedKeys = new Set()),
      (this.getStreamedValue = (n) => {
        var r;
        if (this.isServer) return;
        const o = (r = window.__TSR__) == null ? void 0 : r.streamedValues[n];
        if (o)
          return (
            o.parsed || (o.parsed = this.options.transformer.parse(o.value)),
            o.parsed
          );
      }),
      (this.streamValue = (n, r) => {
        var o;
        this.streamedKeys.has(n), this.streamedKeys.add(n);
        const i = `__TSR__.streamedValues['${n}'] = { value: ${
          (o = this.serializer) == null
            ? void 0
            : o.call(this, this.options.transformer.stringify(r))
        }}`;
        this.injectHtml(
          `<script class='tsr-once'>${i}; __TSR__.cleanScripts()<\/script>`
        );
      }),
      (this._handleNotFound = (
        n,
        r,
        { updateMatch: o = this.updateMatch } = {}
      ) => {
        const i = Object.fromEntries(n.map((a) => [a.routeId, a]));
        let s =
          (r.global
            ? this.looseRoutesById[Re]
            : this.looseRoutesById[r.routeId]) || this.looseRoutesById[Re];
        for (
          ;
          !s.options.notFoundComponent &&
          !this.options.defaultNotFoundComponent &&
          s.id !== Re;

        )
          (s = s.parentRoute), Me(s);
        const l = i[s.id];
        Me(l, "Could not find match for route: " + s.id),
          o(l.id, (a) => ({
            ...a,
            status: "notFound",
            error: r,
            isFetching: !1,
          })),
          r.routerCode === "BEFORE_LOAD" &&
            s.parentRoute &&
            ((r.routeId = s.parentRoute.id),
            this._handleNotFound(n, r, { updateMatch: o }));
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some(
          (n) => n.status === "notFound" || n.globalNotFound
        )),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...t,
        caseSensitive: t.caseSensitive ?? !1,
        notFoundMode: t.notFoundMode ?? "fuzzy",
        stringifySearch: t.stringifySearch ?? L1,
        parseSearch: t.parseSearch ?? z1,
        transformer: t.transformer ?? V1,
      }),
      typeof document < "u" && (window.__TSR__ROUTER__ = this);
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  matchRoutes(t, n, r) {
    return typeof t == "string"
      ? this.matchRoutesInternal({ pathname: t, search: n }, r)
      : this.matchRoutesInternal(t, n);
  }
  matchRoutesInternal(t, n) {
    const {
      foundRoute: r,
      matchedRoutes: o,
      routeParams: i,
    } = this.getMatchedRoutes(t, n == null ? void 0 : n.dest);
    let s = !1;
    (r ? r.path !== "/" && i["**"] : wn(t.pathname)) &&
      (this.options.notFoundRoute
        ? o.push(this.options.notFoundRoute)
        : (s = !0));
    const l = (() => {
        if (s) {
          if (this.options.notFoundMode !== "root")
            for (let d = o.length - 1; d >= 0; d--) {
              const p = o[d];
              if (p.children) return p.id;
            }
          return Re;
        }
      })(),
      a = o.map((d) => {
        var p;
        let f;
        const v =
          ((p = d.options.params) == null ? void 0 : p.parse) ??
          d.options.parseParams;
        if (v)
          try {
            const y = v(i);
            Object.assign(i, y);
          } catch (y) {
            if (
              ((f = new Q1(y.message, { cause: y })),
              n != null && n.throwOnError)
            )
              throw f;
            return f;
          }
      }),
      c = [];
    return (
      o.forEach((d, p) => {
        var f, v, y, w, j, m, h, g, x, C, S, k;
        const $ = c[p - 1],
          [_, N] = (() => {
            const z = ($ == null ? void 0 : $.search) ?? t.search;
            try {
              const M = Bc(d.options.validateSearch, z) ?? {};
              return [{ ...z, ...M }, void 0];
            } catch (M) {
              const F = new Tp(M.message, { cause: M });
              if (n != null && n.throwOnError) throw F;
              return [z, F];
            }
          })(),
          O =
            ((v = (f = d.options).loaderDeps) == null
              ? void 0
              : v.call(f, { search: _ })) ?? "",
          b = O ? JSON.stringify(O) : "",
          K = Wo({
            path: d.fullPath,
            params: i,
            decodeCharMap: this.pathParamsDecodeCharMap,
          }),
          fe =
            Wo({
              path: d.id,
              params: i,
              leaveWildcards: !0,
              decodeCharMap: this.pathParamsDecodeCharMap,
            }) + b,
          Q = this.getMatch(fe),
          A = this.state.matches.find((z) => z.id === fe) ? "stay" : "enter";
        let D;
        if (Q) D = { ...Q, cause: A, params: i };
        else {
          const z =
            d.options.loader || d.options.beforeLoad || d.lazyFn || W1(d)
              ? "pending"
              : "success";
          D = {
            id: fe,
            index: p,
            routeId: d.id,
            params: i,
            pathname: It([this.basepath, K]),
            updatedAt: Date.now(),
            search: {},
            searchError: void 0,
            status: z,
            isFetching: !1,
            error: void 0,
            paramsError: a[p],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: A,
            loaderDeps: O,
            invalid: !1,
            preload: !1,
            links: (w = (y = d.options).links) == null ? void 0 : w.call(y),
            scripts: (m = (j = d.options).scripts) == null ? void 0 : m.call(j),
            staticData: d.options.staticData || {},
            loadPromise: On(),
            fullPath: d.fullPath,
          };
        }
        D.status === "success" &&
          ((D.meta =
            (g = (h = d.options).meta) == null
              ? void 0
              : g.call(h, {
                  matches: c,
                  match: D,
                  params: D.params,
                  loaderData: D.loaderData,
                })),
          (D.headers =
            (C = (x = d.options).headers) == null
              ? void 0
              : C.call(x, { loaderData: D.loaderData }))),
          (n != null && n.preload) || (D.globalNotFound = l === d.id),
          (D.search = Tn(D.search, _)),
          (D.searchError = N);
        const L = ($ == null ? void 0 : $.id)
          ? $.context ?? this.options.context ?? {}
          : this.options.context ?? {};
        if (
          ((D.context = {
            ...L,
            ...D.__routeContext,
            ...D.__beforeLoadContext,
          }),
          !Q && (n == null ? void 0 : n._buildLocation) !== !0)
        ) {
          const z = {
            deps: O,
            params: D.params,
            context: D.context,
            location: t,
            navigate: (M) => this.navigate({ ...M, _fromLocation: t }),
            buildLocation: this.buildLocation,
            cause: D.cause,
            abortController: D.abortController,
            preload: !!D.preload,
            matches: c,
          };
          (D.__routeContext =
            ((k = (S = d.options).context) == null ? void 0 : k.call(S, z)) ??
            {}),
            (D.context = {
              ...L,
              ...D.__routeContext,
              ...D.__beforeLoadContext,
            });
        }
        c.push(D);
      }),
      c
    );
  }
}
class Tp extends Error {}
class Q1 extends Error {}
function Y1(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: { ...e },
    location: e,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  };
}
function X1(e) {
  return e instanceof Error
    ? { name: e.name, message: e.message }
    : { data: e };
}
function Hc(e) {
  return !(typeof e == "object" && e && "data" in e) ||
    !("__isServerError" in e && e.__isServerError) ||
    !(typeof e.data == "object" && e.data)
    ? !1
    : e.__isServerError === !0;
}
function Vc(e) {
  if ("name" in e && "message" in e) {
    const t = new Error(e.message);
    return (t.name = e.name), t;
  }
  return e.data;
}
const xs = R.createContext(void 0);
function gr(e) {
  const t = R.useContext(xs);
  return Le({
    select: (r) => {
      const o = r.matches.find((i) =>
        e.from ? e.from === i.routeId : i.id === t
      );
      if (
        (Me(
          !((e.shouldThrow ?? !0) && !o),
          `Could not find ${
            e.from ? `an active match from "${e.from}"` : "a nearest match!"
          }`
        ),
        o !== void 0)
      )
        return e.select ? e.select(o) : o;
    },
  });
}
function J1(e) {
  return gr({
    ...e,
    select: (t) =>
      typeof e.select == "function" ? e.select(t.loaderDeps) : t.loaderDeps,
  });
}
function Z1(e) {
  return gr({
    ...e,
    select: (t) =>
      typeof e.select == "function" ? e.select(t.loaderData) : t.loaderData,
  });
}
function Op(e) {
  return gr({
    ...e,
    select: (t) => (e.select ? e.select(t.params) : t.params),
  });
}
function q1(e) {
  return gr({
    ...e,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function ws(e) {
  const { navigate: t } = Ut();
  return R.useCallback((n) => t({ ...n }), [t]);
}
let Dp = class {
  constructor(t) {
    (this.init = (n) => {
      var r, o;
      this.originalIndex = n.originalIndex;
      const i = this.options,
        s = !(i != null && i.path) && !(i != null && i.id);
      (this.parentRoute =
        (o = (r = this.options).getParentRoute) == null ? void 0 : o.call(r)),
        s ? (this._path = Re) : Me(this.parentRoute);
      let l = s ? Re : i.path;
      l && l !== "/" && (l = pu(l));
      const a = (i == null ? void 0 : i.id) || l;
      let c = s
        ? Re
        : It([this.parentRoute.id === Re ? "" : this.parentRoute.id, a]);
      l === Re && (l = "/"), c !== Re && (c = It(["/", c]));
      const d = c === Re ? "/" : It([this.parentRoute.fullPath, l]);
      (this._path = l),
        (this._id = c),
        (this._fullPath = d),
        (this._to = d),
        (this._ssr = (i == null ? void 0 : i.ssr) ?? n.defaultSsr ?? !0);
    }),
      (this.updateLoader = (n) => (Object.assign(this.options, n), this)),
      (this.update = (n) => (Object.assign(this.options, n), this)),
      (this.lazy = (n) => ((this.lazyFn = n), this)),
      (this.useMatch = (n) => gr({ ...n, from: this.id })),
      (this.useRouteContext = (n) =>
        gr({
          ...n,
          from: this.id,
          select: (r) =>
            n != null && n.select ? n.select(r.context) : r.context,
        })),
      (this.useSearch = (n) => q1({ ...n, from: this.id })),
      (this.useParams = (n) => Op({ ...n, from: this.id })),
      (this.useLoaderDeps = (n) => J1({ ...n, from: this.id })),
      (this.useLoaderData = (n) => Z1({ ...n, from: this.id })),
      (this.useNavigate = () => ws({ from: this.id })),
      (this.options = t || {}),
      (this.isRoot = !(t != null && t.getParentRoute)),
      Me(!(t != null && t.id && t != null && t.path)),
      (this.$$typeof = Symbol.for("react.memo"));
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
  get ssr() {
    return this._ssr;
  }
  addChildren(t) {
    return this._addFileChildren(t);
  }
  _addFileChildren(t) {
    return (
      Array.isArray(t) && (this.children = t),
      typeof t == "object" && t !== null && (this.children = Object.values(t)),
      this
    );
  }
};
function eg(e) {
  return new Dp(e);
}
class tg extends Dp {
  constructor(t) {
    super(t);
  }
  addChildren(t) {
    return super.addChildren(t), this;
  }
  _addFileChildren(t) {
    return super._addFileChildren(t), this;
  }
  _addFileTypes() {
    return this;
  }
}
function ng(e) {
  return new tg(e);
}
function jo(e) {
  return new rg(e, { silent: !0 }).createRoute;
}
class rg {
  constructor(t, n) {
    (this.path = t),
      (this.createRoute = (r) => {
        this.silent;
        const o = eg(r);
        return (o.isRoot = !1), o;
      }),
      (this.silent = n == null ? void 0 : n.silent);
  }
}
function di(e) {
  return u.jsx(u.Fragment, { children: e.children });
}
function Ap(e, t, n) {
  return t.options.notFoundComponent
    ? u.jsx(t.options.notFoundComponent, { data: n })
    : e.options.defaultNotFoundComponent
    ? u.jsx(e.options.defaultNotFoundComponent, { data: n })
    : u.jsx(H1, {});
}
const Up = R.memo(function ({ matchId: t }) {
    var n, r;
    const o = Ut(),
      i = Le({
        select: (j) => {
          var m;
          return (m = j.matches.find((h) => h.id === t)) == null
            ? void 0
            : m.routeId;
        },
      });
    Me(i);
    const s = o.routesById[i],
      l = s.options.pendingComponent ?? o.options.defaultPendingComponent,
      a = l ? u.jsx(l, {}) : null,
      c = s.options.errorComponent ?? o.options.defaultErrorComponent,
      d = s.options.onCatch ?? o.options.defaultOnCatch,
      p = s.isRoot
        ? s.options.notFoundComponent ??
          ((n = o.options.notFoundRoute) == null ? void 0 : n.options.component)
        : s.options.notFoundComponent,
      f =
        (!s.isRoot || s.options.wrapInSuspense) &&
        (s.options.wrapInSuspense ??
          l ??
          ((r = s.options.errorComponent) == null ? void 0 : r.preload))
          ? R.Suspense
          : di,
      v = c ? hu : di,
      y = p ? B1 : di,
      w = Le({ select: (j) => j.loadedAt });
    return u.jsx(xs.Provider, {
      value: t,
      children: u.jsx(f, {
        fallback: a,
        children: u.jsx(v, {
          getResetKey: () => w,
          errorComponent: c || ys,
          onCatch: (j, m) => {
            if (dt(j)) throw j;
            d == null || d(j, m);
          },
          children: u.jsx(y, {
            fallback: (j) => {
              if (
                !p ||
                (j.routeId && j.routeId !== i) ||
                (!j.routeId && !s.isRoot)
              )
                throw j;
              return R.createElement(p, j);
            },
            children: u.jsx(og, { matchId: t }),
          }),
        }),
      }),
    });
  }),
  og = R.memo(function ({ matchId: t }) {
    var n, r, o;
    const i = Ut(),
      {
        match: s,
        matchIndex: l,
        routeId: a,
      } = Le({
        select: (f) => {
          const v = f.matches.findIndex((j) => j.id === t),
            y = f.matches[v];
          return {
            routeId: y.routeId,
            matchIndex: v,
            match: Zr(y, ["id", "status", "error", "loadPromise"]),
          };
        },
      }),
      c = i.routesById[a],
      d = R.useMemo(() => {
        const f = c.options.component ?? i.options.defaultComponent;
        return f ? u.jsx(f, {}) : u.jsx(bp, {});
      }, [c.options.component, i.options.defaultComponent]),
      p = (c.options.errorComponent ?? i.options.defaultErrorComponent) || ys;
    if (s.status === "notFound") {
      let f;
      return (
        Hc(s.error)
          ? (f = (
              ((n = i.options.errorSerializer) == null
                ? void 0
                : n.deserialize) ?? Vc
            )(s.error.data))
          : (f = s.error),
        Me(dt(f)),
        Ap(i, c, f)
      );
    }
    if (s.status === "redirected") throw (Me(gn(s.error)), s.loadPromise);
    if (s.status === "error") {
      if (i.isServer)
        return u.jsx(p, { error: s.error, info: { componentStack: "" } });
      throw Hc(s.error)
        ? (
            ((r = i.options.errorSerializer) == null
              ? void 0
              : r.deserialize) ?? Vc
          )(s.error.data)
        : s.error;
    }
    if (s.status === "pending") {
      const f = c.options.pendingMinMs ?? i.options.defaultPendingMinMs;
      if (
        f &&
        !((o = i.getMatch(s.id)) != null && o.minPendingPromise) &&
        !i.isServer
      ) {
        const v = On();
        Promise.resolve().then(() => {
          i.updateMatch(s.id, (y) => ({ ...y, minPendingPromise: v }));
        }),
          setTimeout(() => {
            v.resolve(),
              i.updateMatch(s.id, (y) => ({ ...y, minPendingPromise: void 0 }));
          }, f);
      }
      throw s.loadPromise;
    }
    return u.jsxs(u.Fragment, {
      children: [
        d,
        i.AfterEachMatch
          ? u.jsx(i.AfterEachMatch, { match: s, matchIndex: l })
          : null,
      ],
    });
  }),
  bp = R.memo(function () {
    const t = Ut(),
      n = R.useContext(xs),
      r = Le({
        select: (c) => {
          var d;
          return (d = c.matches.find((p) => p.id === n)) == null
            ? void 0
            : d.routeId;
        },
      }),
      o = t.routesById[r],
      { parentGlobalNotFound: i } = Le({
        select: (c) => {
          const p = c.matches.find((f) => f.id === n);
          return Me(p), { parentGlobalNotFound: p.globalNotFound };
        },
      }),
      s = Le({
        select: (c) => {
          var d;
          const p = c.matches,
            f = p.findIndex((v) => v.id === n);
          return (d = p[f + 1]) == null ? void 0 : d.id;
        },
      });
    if (i) return Ap(t, o, void 0);
    if (!s) return null;
    const l = u.jsx(Up, { matchId: s }),
      a = t.options.defaultPendingComponent
        ? u.jsx(t.options.defaultPendingComponent, {})
        : null;
    return n === Re ? u.jsx(R.Suspense, { fallback: a, children: l }) : l;
  }),
  ig = "Error preloading route! ☝️";
function sg(e, t) {
  const n = Ut(),
    [r, o] = R.useState(!1),
    i = R.useRef(!1),
    s = T1(t),
    {
      activeProps: l = () => ({ className: "active" }),
      inactiveProps: a = () => ({}),
      activeOptions: c,
      to: d,
      preload: p,
      preloadDelay: f,
      replace: v,
      startTransition: y,
      resetScroll: w,
      viewTransition: j,
      children: m,
      target: h,
      disabled: g,
      style: x,
      className: C,
      onClick: S,
      onFocus: k,
      onMouseEnter: $,
      onMouseLeave: _,
      onTouchStart: N,
      ignoreBlocker: O,
      ...b
    } = e,
    { params: K, search: fe, hash: Q, state: A, mask: D, ...P } = b,
    L = R.useMemo(() => {
      try {
        return new URL(`${d}`), "external";
      } catch {}
      return "internal";
    }, [d]),
    z = Le({ select: (ie) => ie.location.search }),
    M = R.useMemo(() => n.buildLocation(e), [n, e, z]),
    F = R.useMemo(
      () => p ?? n.options.defaultPreload,
      [n.options.defaultPreload, p]
    ),
    re = f ?? n.options.defaultPreloadDelay ?? 0,
    ee = Le({
      select: (ie) => {
        if (c != null && c.exact) {
          if (!O1(ie.location.pathname, M.pathname, n.basepath)) return !1;
        } else {
          const ye = Wi(ie.location.pathname, n.basepath).split("/");
          if (
            !Wi(M.pathname, n.basepath)
              .split("/")
              .every((Eh, Ph) => Eh === ye[Ph])
          )
            return !1;
        }
        return ((c == null ? void 0 : c.includeSearch) ?? !0) &&
          !ir(ie.location.search, M.search, {
            partial: !(c != null && c.exact),
            ignoreUndefined: !(c != null && c.explicitUndefined),
          })
          ? !1
          : c != null && c.includeHash
          ? ie.location.hash === M.hash
          : !0;
      },
    }),
    te = R.useCallback(() => {
      n.preloadRoute(e).catch((ie) => {
        console.warn(ie), console.warn(ig);
      });
    }, [e, n]),
    ve = R.useCallback(
      (ie) => {
        ie != null && ie.isIntersecting && te();
      },
      [te]
    );
  if (
    (F1(s, ve, { rootMargin: "100px" }, { disabled: !!g || F !== "viewport" }),
    Ur(() => {
      i.current || (!g && F === "render" && (te(), (i.current = !0)));
    }, [g, te, F]),
    L === "external")
  )
    return {
      ...P,
      ref: s,
      type: L,
      href: d,
      ...(m && { children: m }),
      ...(h && { target: h }),
      ...(g && { disabled: g }),
      ...(x && { style: x }),
      ...(C && { className: C }),
      ...(S && { onClick: S }),
      ...(k && { onFocus: k }),
      ...($ && { onMouseEnter: $ }),
      ...(_ && { onMouseLeave: _ }),
      ...(N && { onTouchStart: N }),
    };
  const De = (ie) => {
      if (
        !g &&
        !lg(ie) &&
        !ie.defaultPrevented &&
        (!h || h === "_self") &&
        ie.button === 0
      ) {
        ie.preventDefault(),
          $p.flushSync(() => {
            o(!0);
          });
        const ye = n.subscribe("onResolved", () => {
          ye(), o(!1);
        });
        n.buildAndCommitLocation({
          ...e,
          replace: v,
          resetScroll: w,
          startTransition: y,
          viewTransition: j,
          ignoreBlocker: O,
        });
      }
    },
    We = (ie) => {
      g || (F && te());
    },
    oe = We,
    vt = (ie) => {
      if (g) return;
      const ye = ie.target || {};
      if (F) {
        if (ye.preloadTimeout) return;
        ye.preloadTimeout = setTimeout(() => {
          (ye.preloadTimeout = null), te();
        }, re);
      }
    },
    Ge = (ie) => {
      if (g) return;
      const ye = ie.target || {};
      ye.preloadTimeout &&
        (clearTimeout(ye.preloadTimeout), (ye.preloadTimeout = null));
    },
    ue = (ie) => (ye) => {
      var Ps;
      (Ps = ye.persist) == null || Ps.call(ye),
        ie.filter(Boolean).forEach((ju) => {
          ye.defaultPrevented || ju(ye);
        });
    },
    bt = ee ? Xn(l, {}) ?? {} : {},
    Er = ee ? {} : Xn(a, {}),
    ku = [C, bt.className, Er.className].filter(Boolean).join(" "),
    Cu = { ...x, ...bt.style, ...Er.style };
  return {
    ...P,
    ...bt,
    ...Er,
    href: g
      ? void 0
      : M.maskedLocation
      ? n.history.createHref(M.maskedLocation.href)
      : n.history.createHref(M.href),
    ref: s,
    onClick: ue([S, De]),
    onFocus: ue([k, We]),
    onMouseEnter: ue([$, vt]),
    onMouseLeave: ue([_, Ge]),
    onTouchStart: ue([N, oe]),
    disabled: !!g,
    target: h,
    ...(Object.keys(Cu).length && { style: Cu }),
    ...(ku && { className: ku }),
    ...(g && { role: "link", "aria-disabled": !0 }),
    ...(ee && { "data-status": "active", "aria-current": "page" }),
    ...(r && { "data-transitioning": "transitioning" }),
  };
}
const Ki = R.forwardRef((e, t) => {
  const { _asChild: n, ...r } = e,
    { type: o, ref: i, ...s } = sg(r, t),
    l =
      typeof r.children == "function"
        ? r.children({ isActive: s["data-status"] === "active" })
        : r.children;
  return (
    typeof n > "u" && delete s.disabled,
    R.createElement(n || "a", { ...s, ref: i }, l)
  );
});
function lg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ag() {
  const e = Ut(),
    t = R.useRef({ router: e, mounted: !1 }),
    n = Le({
      select: (p) =>
        Zr(p, ["isLoading", "location", "resolvedLocation", "isTransitioning"]),
    }),
    [r, o] = R.useTransition(),
    i = Le({ select: (p) => p.matches.some((f) => f.status === "pending") }),
    s = rl(n.isLoading),
    l = n.isLoading || r || i,
    a = rl(l),
    c = n.isLoading || i,
    d = rl(c);
  return (
    e.isServer || (e.startReactTransition = o),
    R.useEffect(() => {
      const p = e.history.subscribe(e.load),
        f = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        wn(e.latestLocation.href) !== wn(f.href) &&
          e.commitLocation({ ...f, replace: !0 }),
        () => {
          p();
        }
      );
    }, [e, e.history]),
    Ur(() => {
      var p;
      if (
        (typeof window < "u" && (p = window.__TSR__) != null && p.dehydrated) ||
        (t.current.router === e && t.current.mounted)
      )
        return;
      (t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (v) {
            console.error(v);
          }
        })();
    }, [e]),
    Ur(() => {
      if (s && !n.isLoading) {
        const p = e.state.location,
          f = e.state.resolvedLocation,
          v = f.pathname !== p.pathname;
        e.emit({
          type: "onLoad",
          fromLocation: f,
          toLocation: p,
          pathChanged: v,
        });
      }
    }, [s, e, n.isLoading]),
    Ur(() => {
      if (d && !c) {
        const p = e.state.location,
          f = e.state.resolvedLocation,
          v = f.pathname !== p.pathname;
        e.emit({
          type: "onBeforeRouteMount",
          fromLocation: f,
          toLocation: p,
          pathChanged: v,
        });
      }
    }, [c, d, e]),
    Ur(() => {
      if (a && !l) {
        const p = e.state.location,
          f = e.state.resolvedLocation,
          v = f.pathname !== p.pathname;
        if (
          (e.emit({
            type: "onResolved",
            fromLocation: f,
            toLocation: p,
            pathChanged: v,
          }),
          e.__store.setState((y) => ({
            ...y,
            status: "idle",
            resolvedLocation: y.location,
          })),
          typeof document < "u" &&
            document.querySelector &&
            e.state.location.hash !== "")
        ) {
          const y = document.getElementById(e.state.location.hash);
          y && y.scrollIntoView();
        }
      }
    }, [l, a, e]),
    null
  );
}
function ug() {
  const e = Ut(),
    t = e.options.defaultPendingComponent
      ? u.jsx(e.options.defaultPendingComponent, {})
      : null,
    n =
      e.isServer || (typeof document < "u" && window.__TSR__) ? di : R.Suspense,
    r = u.jsxs(n, { fallback: t, children: [u.jsx(ag, {}), u.jsx(cg, {})] });
  return e.options.InnerWrap ? u.jsx(e.options.InnerWrap, { children: r }) : r;
}
function cg() {
  const e = Le({
      select: (n) => {
        var r;
        return (r = n.matches[0]) == null ? void 0 : r.id;
      },
    }),
    t = Le({ select: (n) => n.loadedAt });
  return u.jsx(xs.Provider, {
    value: e,
    children: u.jsx(hu, {
      getResetKey: () => t,
      errorComponent: ys,
      onCatch: (n) => {
        n.message || n.toString();
      },
      children: e ? u.jsx(Up, { matchId: e }) : null,
    }),
  });
}
function dg({ router: e, children: t, ...n }) {
  e.update({
    ...e.options,
    ...n,
    context: { ...e.options.context, ...n.context },
  });
  const r = zp(),
    o = u.jsx(r.Provider, { value: e, children: t });
  return e.options.Wrap ? u.jsx(e.options.Wrap, { children: o }) : o;
}
function fg({ router: e, ...t }) {
  return u.jsx(dg, { router: e, ...t, children: u.jsx(ug, {}) });
}
let pg = { data: "" },
  hg = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || pg,
  mg = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  gg = /\/\*[^]*?\*\/|  +/g,
  Wc = /\n+/g,
  Qt = (e, t) => {
    let n = "",
      r = "",
      o = "";
    for (let i in e) {
      let s = e[i];
      i[0] == "@"
        ? i[1] == "i"
          ? (n = i + " " + s + ";")
          : (r +=
              i[1] == "f"
                ? Qt(s, i)
                : i + "{" + Qt(s, i[1] == "k" ? "" : t) + "}")
        : typeof s == "object"
        ? (r += Qt(
            s,
            t
              ? t.replace(/([^,])+/g, (l) =>
                  i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (a) =>
                    /&/.test(a) ? a.replace(/&/g, l) : l ? l + " " + a : a
                  )
                )
              : i
          ))
        : s != null &&
          ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (o += Qt.p ? Qt.p(i, s) : i + ":" + s + ";"));
    }
    return n + (t && o ? t + "{" + o + "}" : o) + r;
  },
  $t = {},
  Bp = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + Bp(e[n]);
      return t;
    }
    return e;
  },
  vg = (e, t, n, r, o) => {
    let i = Bp(e),
      s =
        $t[i] ||
        ($t[i] = ((a) => {
          let c = 0,
            d = 11;
          for (; c < a.length; ) d = (101 * d + a.charCodeAt(c++)) >>> 0;
          return "go" + d;
        })(i));
    if (!$t[s]) {
      let a =
        i !== e
          ? e
          : ((c) => {
              let d,
                p,
                f = [{}];
              for (; (d = mg.exec(c.replace(gg, ""))); )
                d[4]
                  ? f.shift()
                  : d[3]
                  ? ((p = d[3].replace(Wc, " ").trim()),
                    f.unshift((f[0][p] = f[0][p] || {})))
                  : (f[0][d[1]] = d[2].replace(Wc, " ").trim());
              return f[0];
            })(e);
      $t[s] = Qt(o ? { ["@keyframes " + s]: a } : a, n ? "" : "." + s);
    }
    let l = n && $t.g ? $t.g : null;
    return (
      n && ($t.g = $t[s]),
      ((a, c, d, p) => {
        p
          ? (c.data = c.data.replace(p, a))
          : c.data.indexOf(a) === -1 && (c.data = d ? a + c.data : c.data + a);
      })($t[s], t, r, l),
      s
    );
  },
  yg = (e, t, n) =>
    e.reduce((r, o, i) => {
      let s = t[i];
      if (s && s.call) {
        let l = s(n),
          a = (l && l.props && l.props.className) || (/^go/.test(l) && l);
        s = a
          ? "." + a
          : l && typeof l == "object"
          ? l.props
            ? ""
            : Qt(l, "")
          : l === !1
          ? ""
          : l;
      }
      return r + o + (s ?? "");
    }, "");
function un(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return vg(
    n.unshift
      ? n.raw
        ? yg(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {})
      : n,
    hg(t.target),
    t.g,
    t.o,
    t.k
  );
}
let Hp, sa, la;
un.bind({ g: 1 });
let Dt = un.bind({ k: 1 });
function xg(e, t, n, r) {
  (Qt.p = t), (Hp = e), (sa = n), (la = r);
}
function pn(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function o(i, s) {
      let l = Object.assign({}, i),
        a = l.className || o.className;
      (n.p = Object.assign({ theme: sa && sa() }, l)),
        (n.o = / *go\d+/.test(a)),
        (l.className = un.apply(n, r) + (a ? " " + a : ""));
      let c = e;
      return (
        e[0] && ((c = l.as || e), delete l.as), la && c[0] && la(l), Hp(c, l)
      );
    }
    return o;
  };
}
function Vp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Vp(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function je() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Vp(e)) && (r && (r += " "), (r += t));
  return r;
}
const wg = (e) => {
  try {
    const t = localStorage.getItem(e);
    return typeof t == "string" ? JSON.parse(t) : void 0;
  } catch {
    return;
  }
};
function Qi(e, t) {
  const [n, r] = W.useState();
  W.useEffect(() => {
    const i = wg(e);
    r(typeof i > "u" || i === null ? (typeof t == "function" ? t() : t) : i);
  }, [t, e]);
  const o = W.useCallback(
    (i) => {
      r((s) => {
        let l = i;
        typeof i == "function" && (l = i(s));
        try {
          localStorage.setItem(e, JSON.stringify(l));
        } catch {}
        return l;
      });
    },
    [e]
  );
  return [n, o];
}
const Sg = typeof window > "u";
function aa(e) {
  const t = {
    pending: "yellow",
    success: "green",
    error: "red",
    notFound: "purple",
    redirected: "gray",
  };
  return e.isFetching && e.status === "success"
    ? e.isFetching === "beforeLoad"
      ? "purple"
      : "blue"
    : t[e.status];
}
function kg(e, t) {
  const n = e.find((r) => r.routeId === t.id);
  return n ? aa(n) : "gray";
}
function Wp() {
  const e = W.useRef(!1),
    t = W.useCallback(() => e.current, []);
  return (
    W[Sg ? "useEffect" : "useLayoutEffect"](
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    t
  );
}
const Cg = (e) => {
  const t = Object.getOwnPropertyNames(Object(e)),
    n = typeof e == "bigint" ? `${e.toString()}n` : e;
  try {
    return JSON.stringify(n, t);
  } catch {
    return "unable to stringify";
  }
};
function Gc(e) {
  const t = Wp(),
    [n, r] = W.useState(e),
    o = W.useCallback(
      (i) => {
        jg(() => {
          t() && r(i);
        });
      },
      [t]
    );
  return [n, o];
}
function jg(e) {
  Promise.resolve()
    .then(e)
    .catch((t) =>
      setTimeout(() => {
        throw t;
      })
    );
}
function _g(e, t = [(n) => n]) {
  return e
    .map((n, r) => [n, r])
    .sort(([n, r], [o, i]) => {
      for (const s of t) {
        const l = s(n),
          a = s(o);
        if (typeof l > "u") {
          if (typeof a > "u") continue;
          return 1;
        }
        if (l !== a) return l > a ? 1 : -1;
      }
      return r - i;
    })
    .map(([n]) => n);
}
const Y = {
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      neutral: {
        50: "#f9fafb",
        100: "#f2f4f7",
        200: "#eaecf0",
        300: "#d0d5dd",
        400: "#98a2b3",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1d2939",
        900: "#101828",
      },
      darkGray: {
        50: "#525c7a",
        100: "#49536e",
        200: "#414962",
        300: "#394056",
        400: "#313749",
        500: "#292e3d",
        600: "#212530",
        700: "#191c24",
        800: "#111318",
        900: "#0b0d10",
      },
      gray: {
        50: "#f9fafb",
        100: "#f2f4f7",
        200: "#eaecf0",
        300: "#d0d5dd",
        400: "#98a2b3",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1d2939",
        900: "#101828",
      },
      blue: {
        25: "#F5FAFF",
        50: "#EFF8FF",
        100: "#D1E9FF",
        200: "#B2DDFF",
        300: "#84CAFF",
        400: "#53B1FD",
        500: "#2E90FA",
        600: "#1570EF",
        700: "#175CD3",
        800: "#1849A9",
        900: "#194185",
      },
      green: {
        25: "#F6FEF9",
        50: "#ECFDF3",
        100: "#D1FADF",
        200: "#A6F4C5",
        300: "#6CE9A6",
        400: "#32D583",
        500: "#12B76A",
        600: "#039855",
        700: "#027A48",
        800: "#05603A",
        900: "#054F31",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      },
      yellow: {
        25: "#FFFCF5",
        50: "#FFFAEB",
        100: "#FEF0C7",
        200: "#FEDF89",
        300: "#FEC84B",
        400: "#FDB022",
        500: "#F79009",
        600: "#DC6803",
        700: "#B54708",
        800: "#93370D",
        900: "#7A2E0E",
      },
      purple: {
        25: "#FAFAFF",
        50: "#F4F3FF",
        100: "#EBE9FE",
        200: "#D9D6FE",
        300: "#BDB4FE",
        400: "#9B8AFB",
        500: "#7A5AF8",
        600: "#6938EF",
        700: "#5925DC",
        800: "#4A1FB8",
        900: "#3E1C96",
      },
      teal: {
        25: "#F6FEFC",
        50: "#F0FDF9",
        100: "#CCFBEF",
        200: "#99F6E0",
        300: "#5FE9D0",
        400: "#2ED3B7",
        500: "#15B79E",
        600: "#0E9384",
        700: "#107569",
        800: "#125D56",
        900: "#134E48",
      },
      pink: {
        25: "#fdf2f8",
        50: "#fce7f3",
        100: "#fbcfe8",
        200: "#f9a8d4",
        300: "#f472b6",
        400: "#ec4899",
        500: "#db2777",
        600: "#be185d",
        700: "#9d174d",
        800: "#831843",
        900: "#500724",
      },
      cyan: {
        25: "#ecfeff",
        50: "#cffafe",
        100: "#a5f3fc",
        200: "#67e8f9",
        300: "#22d3ee",
        400: "#06b6d4",
        500: "#0891b2",
        600: "#0e7490",
        700: "#155e75",
        800: "#164e63",
        900: "#083344",
      },
    },
    alpha: {
      100: "ff",
      90: "e5",
      80: "cc",
      70: "b3",
      60: "99",
      50: "80",
      40: "66",
      30: "4d",
      20: "33",
      10: "1a",
      0: "00",
    },
    font: {
      size: {
        "2xs": "calc(var(--tsrd-font-size) * 0.625)",
        xs: "calc(var(--tsrd-font-size) * 0.75)",
        sm: "calc(var(--tsrd-font-size) * 0.875)",
        md: "var(--tsrd-font-size)",
        lg: "calc(var(--tsrd-font-size) * 1.125)",
        xl: "calc(var(--tsrd-font-size) * 1.25)",
        "2xl": "calc(var(--tsrd-font-size) * 1.5)",
        "3xl": "calc(var(--tsrd-font-size) * 1.875)",
        "4xl": "calc(var(--tsrd-font-size) * 2.25)",
        "5xl": "calc(var(--tsrd-font-size) * 3)",
        "6xl": "calc(var(--tsrd-font-size) * 3.75)",
        "7xl": "calc(var(--tsrd-font-size) * 4.5)",
        "8xl": "calc(var(--tsrd-font-size) * 6)",
        "9xl": "calc(var(--tsrd-font-size) * 8)",
      },
      lineHeight: {
        "3xs": "calc(var(--tsrd-font-size) * 0.75)",
        "2xs": "calc(var(--tsrd-font-size) * 0.875)",
        xs: "calc(var(--tsrd-font-size) * 1)",
        sm: "calc(var(--tsrd-font-size) * 1.25)",
        md: "calc(var(--tsrd-font-size) * 1.5)",
        lg: "calc(var(--tsrd-font-size) * 1.75)",
        xl: "calc(var(--tsrd-font-size) * 2)",
        "2xl": "calc(var(--tsrd-font-size) * 2.25)",
        "3xl": "calc(var(--tsrd-font-size) * 2.5)",
        "4xl": "calc(var(--tsrd-font-size) * 2.75)",
        "5xl": "calc(var(--tsrd-font-size) * 3)",
        "6xl": "calc(var(--tsrd-font-size) * 3.25)",
        "7xl": "calc(var(--tsrd-font-size) * 3.5)",
        "8xl": "calc(var(--tsrd-font-size) * 3.75)",
        "9xl": "calc(var(--tsrd-font-size) * 4)",
      },
      weight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontFamily: {
        sans: "ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",
        mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      },
    },
    breakpoints: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    border: {
      radius: {
        none: "0px",
        xs: "calc(var(--tsrd-font-size) * 0.125)",
        sm: "calc(var(--tsrd-font-size) * 0.25)",
        md: "calc(var(--tsrd-font-size) * 0.375)",
        lg: "calc(var(--tsrd-font-size) * 0.5)",
        xl: "calc(var(--tsrd-font-size) * 0.75)",
        "2xl": "calc(var(--tsrd-font-size) * 1)",
        "3xl": "calc(var(--tsrd-font-size) * 1.5)",
        full: "9999px",
      },
    },
    size: {
      0: "0px",
      0.25: "calc(var(--tsrd-font-size) * 0.0625)",
      0.5: "calc(var(--tsrd-font-size) * 0.125)",
      1: "calc(var(--tsrd-font-size) * 0.25)",
      1.5: "calc(var(--tsrd-font-size) * 0.375)",
      2: "calc(var(--tsrd-font-size) * 0.5)",
      2.5: "calc(var(--tsrd-font-size) * 0.625)",
      3: "calc(var(--tsrd-font-size) * 0.75)",
      3.5: "calc(var(--tsrd-font-size) * 0.875)",
      4: "calc(var(--tsrd-font-size) * 1)",
      4.5: "calc(var(--tsrd-font-size) * 1.125)",
      5: "calc(var(--tsrd-font-size) * 1.25)",
      5.5: "calc(var(--tsrd-font-size) * 1.375)",
      6: "calc(var(--tsrd-font-size) * 1.5)",
      6.5: "calc(var(--tsrd-font-size) * 1.625)",
      7: "calc(var(--tsrd-font-size) * 1.75)",
      8: "calc(var(--tsrd-font-size) * 2)",
      9: "calc(var(--tsrd-font-size) * 2.25)",
      10: "calc(var(--tsrd-font-size) * 2.5)",
      11: "calc(var(--tsrd-font-size) * 2.75)",
      12: "calc(var(--tsrd-font-size) * 3)",
      14: "calc(var(--tsrd-font-size) * 3.5)",
      16: "calc(var(--tsrd-font-size) * 4)",
      20: "calc(var(--tsrd-font-size) * 5)",
      24: "calc(var(--tsrd-font-size) * 6)",
      28: "calc(var(--tsrd-font-size) * 7)",
      32: "calc(var(--tsrd-font-size) * 8)",
      36: "calc(var(--tsrd-font-size) * 9)",
      40: "calc(var(--tsrd-font-size) * 10)",
      44: "calc(var(--tsrd-font-size) * 11)",
      48: "calc(var(--tsrd-font-size) * 12)",
      52: "calc(var(--tsrd-font-size) * 13)",
      56: "calc(var(--tsrd-font-size) * 14)",
      60: "calc(var(--tsrd-font-size) * 15)",
      64: "calc(var(--tsrd-font-size) * 16)",
      72: "calc(var(--tsrd-font-size) * 18)",
      80: "calc(var(--tsrd-font-size) * 20)",
      96: "calc(var(--tsrd-font-size) * 24)",
    },
    shadow: {
      xs: (e = "rgb(0 0 0 / 0.1)") => "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      sm: (e = "rgb(0 0 0 / 0.1)") => `0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,
      md: (e = "rgb(0 0 0 / 0.1)") =>
        `0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,
      lg: (e = "rgb(0 0 0 / 0.1)") =>
        `0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,
      xl: (e = "rgb(0 0 0 / 0.1)") =>
        `0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,
      "2xl": (e = "rgb(0 0 0 / 0.25)") => `0 25px 50px -12px ${e}`,
      inner: (e = "rgb(0 0 0 / 0.05)") => `inset 0 2px 4px 0 ${e}`,
      none: () => "none",
    },
    zIndices: {
      hide: -1,
      auto: "auto",
      base: 0,
      docked: 10,
      dropdown: 1e3,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
  },
  Ss = W.createContext(void 0),
  mu = W.createContext(void 0),
  $g = () => {
    const e = W.useContext(mu);
    if (!e)
      throw new Error(
        "useDevtoolsOnClose must be used within a TanStackRouterDevtools component"
      );
    return e;
  },
  Kc = ({ expanded: e, style: t = {} }) => {
    const n = Gp();
    return u.jsx("span", {
      className: n.expander,
      children: u.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        fill: "none",
        viewBox: "0 0 24 24",
        className: je(n.expanderIcon(e)),
        children: u.jsx("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M9 18l6-6-6-6",
        }),
      }),
    });
  };
function Eg(e, t) {
  if (t < 1) return [];
  let n = 0;
  const r = [];
  for (; n < e.length; ) r.push(e.slice(n, n + t)), (n = n + t);
  return r;
}
const Pg = ({
  handleEntry: e,
  label: t,
  value: n,
  subEntries: r = [],
  subEntryPages: o = [],
  type: i,
  expanded: s = !1,
  toggleExpanded: l,
  pageSize: a,
  renderer: c,
}) => {
  const [d, p] = R.useState([]),
    [f, v] = R.useState(void 0),
    y = Gp(),
    w = () => {
      v(n());
    };
  return u.jsx("div", {
    className: y.entry,
    children: o.length
      ? u.jsxs(u.Fragment, {
          children: [
            u.jsxs("button", {
              className: y.expandButton,
              onClick: () => l(),
              children: [
                u.jsx(Kc, { expanded: s }),
                t,
                u.jsxs("span", {
                  className: y.info,
                  children: [
                    String(i).toLowerCase() === "iterable" ? "(Iterable) " : "",
                    r.length,
                    " ",
                    r.length > 1 ? "items" : "item",
                  ],
                }),
              ],
            }),
            s
              ? o.length === 1
                ? u.jsx("div", {
                    className: y.subEntries,
                    children: r.map((j, m) => e(j)),
                  })
                : u.jsx("div", {
                    className: y.subEntries,
                    children: o.map((j, m) =>
                      u.jsx(
                        "div",
                        {
                          children: u.jsxs("div", {
                            className: y.entry,
                            children: [
                              u.jsxs("button", {
                                className: je(y.labelButton, "labelButton"),
                                onClick: () =>
                                  p((h) =>
                                    h.includes(m)
                                      ? h.filter((g) => g !== m)
                                      : [...h, m]
                                  ),
                                children: [
                                  u.jsx(Kc, { expanded: d.includes(m) }),
                                  " ",
                                  "[",
                                  m * a,
                                  " ...",
                                  " ",
                                  m * a + a - 1,
                                  "]",
                                ],
                              }),
                              d.includes(m)
                                ? u.jsx("div", {
                                    className: y.subEntries,
                                    children: j.map((h) => e(h)),
                                  })
                                : null,
                            ],
                          }),
                        },
                        m
                      )
                    ),
                  })
              : null,
          ],
        })
      : i === "function"
      ? u.jsx(u.Fragment, {
          children: u.jsx(Jn, {
            renderer: c,
            label: u.jsxs("button", {
              onClick: w,
              className: y.refreshValueBtn,
              children: [u.jsx("span", { children: t }), " 🔄", " "],
            }),
            value: f,
            defaultExpanded: {},
          }),
        })
      : u.jsxs(u.Fragment, {
          children: [
            u.jsxs("span", { children: [t, ":"] }),
            " ",
            u.jsx("span", { className: y.value, children: Cg(n) }),
          ],
        }),
  });
};
function Rg(e) {
  return Symbol.iterator in e;
}
function Jn({
  value: e,
  defaultExpanded: t,
  renderer: n = Pg,
  pageSize: r = 100,
  filterSubEntries: o,
  ...i
}) {
  const [s, l] = R.useState(!!t),
    a = R.useCallback(() => l((v) => !v), []);
  let c = typeof e,
    d = [];
  const p = (v) => {
    const y = t === !0 ? { [v.label]: !0 } : t == null ? void 0 : t[v.label];
    return { ...v, defaultExpanded: y };
  };
  Array.isArray(e)
    ? ((c = "array"),
      (d = e.map((v, y) => p({ label: y.toString(), value: v }))))
    : e !== null &&
      typeof e == "object" &&
      Rg(e) &&
      typeof e[Symbol.iterator] == "function"
    ? ((c = "Iterable"),
      (d = Array.from(e, (v, y) => p({ label: y.toString(), value: v }))))
    : typeof e == "object" &&
      e !== null &&
      ((c = "object"),
      (d = Object.entries(e).map(([v, y]) => p({ label: v, value: y })))),
    (d = o ? o(d) : d);
  const f = Eg(d, r);
  return n({
    handleEntry: (v) =>
      u.jsx(
        Jn,
        { value: e, renderer: n, filterSubEntries: o, ...i, ...v },
        v.label
      ),
    type: c,
    subEntries: d,
    subEntryPages: f,
    value: e,
    expanded: s,
    toggleExpanded: a,
    pageSize: r,
    ...i,
  });
}
const zg = (e) => {
  const { colors: t, font: n, size: r, alpha: o, shadow: i, border: s } = Y,
    { fontFamily: l, lineHeight: a, size: c } = n,
    d = e ? un.bind({ target: e }) : un;
  return {
    entry: d`
      font-family: ${l.mono};
      font-size: ${c.xs};
      line-height: ${a.sm};
      outline: none;
      word-break: break-word;
    `,
    labelButton: d`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,
    expander: d`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,
    expanderIcon: (p) =>
      p
        ? d`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `
        : d`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,
    expandButton: d`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,
    value: d`
      color: ${t.purple[400]};
    `,
    subEntries: d`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,
    info: d`
      color: ${t.gray[500]};
      font-size: ${c["2xs"]};
      padding-left: ${r[1]};
    `,
    refreshValueBtn: d`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${l.mono};
      font-size: ${c.xs};
    `,
  };
};
let Ko = null;
function Gp() {
  const e = R.useContext(Ss);
  return Ko || ((Ko = zg(e)), Ko);
}
function Qc() {
  const e = W.useId();
  return u.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    enableBackground: "new 0 0 634 633",
    viewBox: "0 0 634 633",
    children: u.jsxs("g", {
      transform: "translate(1)",
      children: [
        u.jsxs("linearGradient", {
          id: `a-${e}`,
          x1: "-641.486",
          x2: "-641.486",
          y1: "856.648",
          y2: "855.931",
          gradientTransform: "matrix(633 0 0 -633 406377 542258)",
          gradientUnits: "userSpaceOnUse",
          children: [
            u.jsx("stop", { offset: "0", stopColor: "#6bdaff" }),
            u.jsx("stop", { offset: "0.319", stopColor: "#f9ffb5" }),
            u.jsx("stop", { offset: "0.706", stopColor: "#ffa770" }),
            u.jsx("stop", { offset: "1", stopColor: "#ff7373" }),
          ],
        }),
        u.jsx("circle", {
          cx: "316.5",
          cy: "316.5",
          r: "316.5",
          fill: `url(#a-${e})`,
          fillRule: "evenodd",
          clipRule: "evenodd",
        }),
        u.jsx("defs", {
          children: u.jsx("filter", {
            id: `b-${e}`,
            width: "454",
            height: "396.9",
            x: "-137.5",
            y: "412",
            filterUnits: "userSpaceOnUse",
            children: u.jsx("feColorMatrix", {
              values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",
            }),
          }),
        }),
        u.jsx("mask", {
          id: `c-${e}`,
          width: "454",
          height: "396.9",
          x: "-137.5",
          y: "412",
          maskUnits: "userSpaceOnUse",
          children: u.jsx("g", {
            filter: `url(#b-${e})`,
            children: u.jsx("circle", {
              cx: "316.5",
              cy: "316.5",
              r: "316.5",
              fill: "#FFF",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          }),
        }),
        u.jsx("ellipse", {
          cx: "89.5",
          cy: "610.5",
          fill: "#015064",
          fillRule: "evenodd",
          stroke: "#00CFE2",
          strokeWidth: "25",
          clipRule: "evenodd",
          mask: `url(#c-${e})`,
          rx: "214.5",
          ry: "186",
        }),
        u.jsx("defs", {
          children: u.jsx("filter", {
            id: `d-${e}`,
            width: "454",
            height: "396.9",
            x: "316.5",
            y: "412",
            filterUnits: "userSpaceOnUse",
            children: u.jsx("feColorMatrix", {
              values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",
            }),
          }),
        }),
        u.jsx("mask", {
          id: `e-${e}`,
          width: "454",
          height: "396.9",
          x: "316.5",
          y: "412",
          maskUnits: "userSpaceOnUse",
          children: u.jsx("g", {
            filter: `url(#d-${e})`,
            children: u.jsx("circle", {
              cx: "316.5",
              cy: "316.5",
              r: "316.5",
              fill: "#FFF",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          }),
        }),
        u.jsx("ellipse", {
          cx: "543.5",
          cy: "610.5",
          fill: "#015064",
          fillRule: "evenodd",
          stroke: "#00CFE2",
          strokeWidth: "25",
          clipRule: "evenodd",
          mask: `url(#e-${e})`,
          rx: "214.5",
          ry: "186",
        }),
        u.jsx("defs", {
          children: u.jsx("filter", {
            id: `f-${e}`,
            width: "454",
            height: "396.9",
            x: "-137.5",
            y: "450",
            filterUnits: "userSpaceOnUse",
            children: u.jsx("feColorMatrix", {
              values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",
            }),
          }),
        }),
        u.jsx("mask", {
          id: `g-${e}`,
          width: "454",
          height: "396.9",
          x: "-137.5",
          y: "450",
          maskUnits: "userSpaceOnUse",
          children: u.jsx("g", {
            filter: `url(#f-${e})`,
            children: u.jsx("circle", {
              cx: "316.5",
              cy: "316.5",
              r: "316.5",
              fill: "#FFF",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          }),
        }),
        u.jsx("ellipse", {
          cx: "89.5",
          cy: "648.5",
          fill: "#015064",
          fillRule: "evenodd",
          stroke: "#00A8B8",
          strokeWidth: "25",
          clipRule: "evenodd",
          mask: `url(#g-${e})`,
          rx: "214.5",
          ry: "186",
        }),
        u.jsx("defs", {
          children: u.jsx("filter", {
            id: `h-${e}`,
            width: "454",
            height: "396.9",
            x: "316.5",
            y: "450",
            filterUnits: "userSpaceOnUse",
            children: u.jsx("feColorMatrix", {
              values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",
            }),
          }),
        }),
        u.jsx("mask", {
          id: `i-${e}`,
          width: "454",
          height: "396.9",
          x: "316.5",
          y: "450",
          maskUnits: "userSpaceOnUse",
          children: u.jsx("g", {
            filter: `url(#h-${e})`,
            children: u.jsx("circle", {
              cx: "316.5",
              cy: "316.5",
              r: "316.5",
              fill: "#FFF",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          }),
        }),
        u.jsx("ellipse", {
          cx: "543.5",
          cy: "648.5",
          fill: "#015064",
          fillRule: "evenodd",
          stroke: "#00A8B8",
          strokeWidth: "25",
          clipRule: "evenodd",
          mask: `url(#i-${e})`,
          rx: "214.5",
          ry: "186",
        }),
        u.jsx("defs", {
          children: u.jsx("filter", {
            id: `j-${e}`,
            width: "454",
            height: "396.9",
            x: "-137.5",
            y: "486",
            filterUnits: "userSpaceOnUse",
            children: u.jsx("feColorMatrix", {
              values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",
            }),
          }),
        }),
        u.jsx("mask", {
          id: `k-${e}`,
          width: "454",
          height: "396.9",
          x: "-137.5",
          y: "486",
          maskUnits: "userSpaceOnUse",
          children: u.jsx("g", {
            filter: `url(#j-${e})`,
            children: u.jsx("circle", {
              cx: "316.5",
              cy: "316.5",
              r: "316.5",
              fill: "#FFF",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          }),
        }),
        u.jsx("ellipse", {
          cx: "89.5",
          cy: "684.5",
          fill: "#015064",
          fillRule: "evenodd",
          stroke: "#007782",
          strokeWidth: "25",
          clipRule: "evenodd",
          mask: `url(#k-${e})`,
          rx: "214.5",
          ry: "186",
        }),
        u.jsx("defs", {
          children: u.jsx("filter", {
            id: `l-${e}`,
            width: "454",
            height: "396.9",
            x: "316.5",
            y: "486",
            filterUnits: "userSpaceOnUse",
            children: u.jsx("feColorMatrix", {
              values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",
            }),
          }),
        }),
        u.jsx("mask", {
          id: `m-${e}`,
          width: "454",
          height: "396.9",
          x: "316.5",
          y: "486",
          maskUnits: "userSpaceOnUse",
          children: u.jsx("g", {
            filter: `url(#l-${e})`,
            children: u.jsx("circle", {
              cx: "316.5",
              cy: "316.5",
              r: "316.5",
              fill: "#FFF",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          }),
        }),
        u.jsx("ellipse", {
          cx: "543.5",
          cy: "684.5",
          fill: "#015064",
          fillRule: "evenodd",
          stroke: "#007782",
          strokeWidth: "25",
          clipRule: "evenodd",
          mask: `url(#m-${e})`,
          rx: "214.5",
          ry: "186",
        }),
        u.jsx("defs", {
          children: u.jsx("filter", {
            id: `n-${e}`,
            width: "176.9",
            height: "129.3",
            x: "272.2",
            y: "308",
            filterUnits: "userSpaceOnUse",
            children: u.jsx("feColorMatrix", {
              values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",
            }),
          }),
        }),
        u.jsx("mask", {
          id: `o-${e}`,
          width: "176.9",
          height: "129.3",
          x: "272.2",
          y: "308",
          maskUnits: "userSpaceOnUse",
          children: u.jsx("g", {
            filter: `url(#n-${e})`,
            children: u.jsx("circle", {
              cx: "316.5",
              cy: "316.5",
              r: "316.5",
              fill: "#FFF",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          }),
        }),
        u.jsxs("g", {
          mask: `url(#o-${e})`,
          children: [
            u.jsx("path", {
              fill: "none",
              stroke: "#000",
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeWidth: "11",
              d: "M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1",
            }),
            u.jsxs("linearGradient", {
              id: `p-${e}`,
              x1: "-645.656",
              x2: "-646.499",
              y1: "854.878",
              y2: "854.788",
              gradientTransform:
                "matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)",
              gradientUnits: "userSpaceOnUse",
              children: [
                u.jsx("stop", { offset: "0", stopColor: "#ee2700" }),
                u.jsx("stop", { offset: "1", stopColor: "#ff008e" }),
              ],
            }),
            u.jsx("path", {
              fill: `url(#p-${e})`,
              fillRule: "evenodd",
              d: "M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z",
              clipRule: "evenodd",
            }),
            u.jsx("path", {
              fill: "#D8D8D8",
              fillRule: "evenodd",
              stroke: "#FFF",
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeWidth: "7",
              d: "M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9",
              clipRule: "evenodd",
            }),
          ],
        }),
        u.jsx("defs", {
          children: u.jsx("filter", {
            id: `q-${e}`,
            width: "280.6",
            height: "317.4",
            x: "73.2",
            y: "113.9",
            filterUnits: "userSpaceOnUse",
            children: u.jsx("feColorMatrix", {
              values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",
            }),
          }),
        }),
        u.jsx("mask", {
          id: `r-${e}`,
          width: "280.6",
          height: "317.4",
          x: "73.2",
          y: "113.9",
          maskUnits: "userSpaceOnUse",
          children: u.jsx("g", {
            filter: `url(#q-${e})`,
            children: u.jsx("circle", {
              cx: "316.5",
              cy: "316.5",
              r: "316.5",
              fill: "#FFF",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          }),
        }),
        u.jsxs("g", {
          mask: `url(#r-${e})`,
          children: [
            u.jsxs("linearGradient", {
              id: `s-${e}`,
              x1: "-646.8",
              x2: "-646.8",
              y1: "854.844",
              y2: "853.844",
              gradientTransform:
                "matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)",
              gradientUnits: "userSpaceOnUse",
              children: [
                u.jsx("stop", { offset: "0", stopColor: "#a17500" }),
                u.jsx("stop", { offset: "1", stopColor: "#5d2100" }),
              ],
            }),
            u.jsx("path", {
              fill: `url(#s-${e})`,
              fillRule: "evenodd",
              d: "M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6",
              clipRule: "evenodd",
            }),
            u.jsxs("linearGradient", {
              id: `t-${e}`,
              x1: "-635.467",
              x2: "-635.467",
              y1: "852.115",
              y2: "851.115",
              gradientTransform:
                "matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)",
              gradientUnits: "userSpaceOnUse",
              children: [
                u.jsx("stop", { offset: "0", stopColor: "#2f8a00" }),
                u.jsx("stop", { offset: "1", stopColor: "#90ff57" }),
              ],
            }),
            u.jsx("path", {
              fill: `url(#t-${e})`,
              fillRule: "evenodd",
              stroke: "#2F8A00",
              strokeWidth: "13",
              d: "M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z",
              clipRule: "evenodd",
            }),
            u.jsxs("linearGradient", {
              id: `u-${e}`,
              x1: "-636.573",
              x2: "-636.573",
              y1: "855.444",
              y2: "854.444",
              gradientTransform:
                "matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)",
              gradientUnits: "userSpaceOnUse",
              children: [
                u.jsx("stop", { offset: "0", stopColor: "#2f8a00" }),
                u.jsx("stop", { offset: "1", stopColor: "#90ff57" }),
              ],
            }),
            u.jsx("path", {
              fill: `url(#u-${e})`,
              fillRule: "evenodd",
              stroke: "#2F8A00",
              strokeWidth: "13",
              d: "M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z",
              clipRule: "evenodd",
            }),
            u.jsxs("linearGradient", {
              id: `v-${e}`,
              x1: "-632.145",
              x2: "-632.145",
              y1: "854.174",
              y2: "853.174",
              gradientTransform:
                "matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)",
              gradientUnits: "userSpaceOnUse",
              children: [
                u.jsx("stop", { offset: "0", stopColor: "#2f8a00" }),
                u.jsx("stop", { offset: "1", stopColor: "#90ff57" }),
              ],
            }),
            u.jsx("path", {
              fill: `url(#v-${e})`,
              fillRule: "evenodd",
              stroke: "#2F8A00",
              strokeWidth: "13",
              d: "M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z",
              clipRule: "evenodd",
            }),
            u.jsxs("linearGradient", {
              id: `w-${e}`,
              x1: "-638.224",
              x2: "-638.224",
              y1: "853.801",
              y2: "852.801",
              gradientTransform:
                "matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)",
              gradientUnits: "userSpaceOnUse",
              children: [
                u.jsx("stop", { offset: "0", stopColor: "#2f8a00" }),
                u.jsx("stop", { offset: "1", stopColor: "#90ff57" }),
              ],
            }),
            u.jsx("path", {
              fill: `url(#w-${e})`,
              fillRule: "evenodd",
              stroke: "#2F8A00",
              strokeWidth: "13",
              d: "M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z",
              clipRule: "evenodd",
            }),
            u.jsxs("linearGradient", {
              id: `x-${e}`,
              x1: "-637.723",
              x2: "-637.723",
              y1: "855.103",
              y2: "854.103",
              gradientTransform:
                "matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)",
              gradientUnits: "userSpaceOnUse",
              children: [
                u.jsx("stop", { offset: "0", stopColor: "#2f8a00" }),
                u.jsx("stop", { offset: "1", stopColor: "#90ff57" }),
              ],
            }),
            u.jsx("path", {
              fill: `url(#x-${e})`,
              fillRule: "evenodd",
              stroke: "#2F8A00",
              strokeWidth: "13",
              d: "M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z",
              clipRule: "evenodd",
            }),
            u.jsxs("linearGradient", {
              id: `y-${e}`,
              x1: "-631.79",
              x2: "-631.79",
              y1: "855.872",
              y2: "854.872",
              gradientTransform:
                "matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)",
              gradientUnits: "userSpaceOnUse",
              children: [
                u.jsx("stop", { offset: "0", stopColor: "#2f8a00" }),
                u.jsx("stop", { offset: "1", stopColor: "#90ff57" }),
              ],
            }),
            u.jsx("path", {
              fill: `url(#y-${e})`,
              fillRule: "evenodd",
              stroke: "#2F8A00",
              strokeWidth: "13",
              d: "M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z",
              clipRule: "evenodd",
            }),
            u.jsx("path", {
              fill: "none",
              stroke: "#2F8A00",
              strokeLinecap: "round",
              strokeWidth: "8",
              d: "M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1",
            }),
            u.jsx("path", {
              fill: "none",
              stroke: "#2F8A00",
              strokeLinecap: "round",
              strokeWidth: "8",
              d: "M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32",
            }),
          ],
        }),
        u.jsx("defs", {
          children: u.jsx("filter", {
            id: `z-${e}`,
            width: "532",
            height: "633",
            x: "50.5",
            y: "399",
            filterUnits: "userSpaceOnUse",
            children: u.jsx("feColorMatrix", {
              values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",
            }),
          }),
        }),
        u.jsx("mask", {
          id: `A-${e}`,
          width: "532",
          height: "633",
          x: "50.5",
          y: "399",
          maskUnits: "userSpaceOnUse",
          children: u.jsx("g", {
            filter: `url(#z-${e})`,
            children: u.jsx("circle", {
              cx: "316.5",
              cy: "316.5",
              r: "316.5",
              fill: "#FFF",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          }),
        }),
        u.jsxs("linearGradient", {
          id: `B-${e}`,
          x1: "-641.104",
          x2: "-641.278",
          y1: "856.577",
          y2: "856.183",
          gradientTransform: "matrix(532 0 0 -633 341484.5 542657)",
          gradientUnits: "userSpaceOnUse",
          children: [
            u.jsx("stop", { offset: "0", stopColor: "#fff400" }),
            u.jsx("stop", { offset: "1", stopColor: "#3c8700" }),
          ],
        }),
        u.jsx("ellipse", {
          cx: "316.5",
          cy: "715.5",
          fill: `url(#B-${e})`,
          fillRule: "evenodd",
          clipRule: "evenodd",
          mask: `url(#A-${e})`,
          rx: "266",
          ry: "316.5",
        }),
        u.jsx("defs", {
          children: u.jsx("filter", {
            id: `C-${e}`,
            width: "288",
            height: "283",
            x: "391",
            y: "-24",
            filterUnits: "userSpaceOnUse",
            children: u.jsx("feColorMatrix", {
              values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",
            }),
          }),
        }),
        u.jsx("mask", {
          id: `D-${e}`,
          width: "288",
          height: "283",
          x: "391",
          y: "-24",
          maskUnits: "userSpaceOnUse",
          children: u.jsx("g", {
            filter: `url(#C-${e})`,
            children: u.jsx("circle", {
              cx: "316.5",
              cy: "316.5",
              r: "316.5",
              fill: "#FFF",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          }),
        }),
        u.jsx("g", {
          mask: `url(#D-${e})`,
          children: u.jsxs("g", {
            transform: "translate(397 -24)",
            children: [
              u.jsxs("linearGradient", {
                id: `E-${e}`,
                x1: "-1036.672",
                x2: "-1036.672",
                y1: "880.018",
                y2: "879.018",
                gradientTransform: "matrix(227 0 0 -227 235493 199764)",
                gradientUnits: "userSpaceOnUse",
                children: [
                  u.jsx("stop", { offset: "0", stopColor: "#ffdf00" }),
                  u.jsx("stop", { offset: "1", stopColor: "#ff9d00" }),
                ],
              }),
              u.jsx("circle", {
                cx: "168.5",
                cy: "113.5",
                r: "113.5",
                fill: `url(#E-${e})`,
                fillRule: "evenodd",
                clipRule: "evenodd",
              }),
              u.jsxs("linearGradient", {
                id: `F-${e}`,
                x1: "-1017.329",
                x2: "-1018.602",
                y1: "658.003",
                y2: "657.998",
                gradientTransform: "matrix(30 0 0 -1 30558 771)",
                gradientUnits: "userSpaceOnUse",
                children: [
                  u.jsx("stop", { offset: "0", stopColor: "#ffa400" }),
                  u.jsx("stop", { offset: "1", stopColor: "#ff5e00" }),
                ],
              }),
              u.jsx("path", {
                fill: "none",
                stroke: `url(#F-${e})`,
                strokeLinecap: "round",
                strokeLinejoin: "bevel",
                strokeWidth: "12",
                d: "M30 113H0",
              }),
              u.jsxs("linearGradient", {
                id: `G-${e}`,
                x1: "-1014.501",
                x2: "-1015.774",
                y1: "839.985",
                y2: "839.935",
                gradientTransform: "matrix(26.5 0 0 -5.5 26925 4696.5)",
                gradientUnits: "userSpaceOnUse",
                children: [
                  u.jsx("stop", { offset: "0", stopColor: "#ffa400" }),
                  u.jsx("stop", { offset: "1", stopColor: "#ff5e00" }),
                ],
              }),
              u.jsx("path", {
                fill: "none",
                stroke: `url(#G-${e})`,
                strokeLinecap: "round",
                strokeLinejoin: "bevel",
                strokeWidth: "12",
                d: "M33.5 79.5L7 74",
              }),
              u.jsxs("linearGradient", {
                id: `H-${e}`,
                x1: "-1016.59",
                x2: "-1017.862",
                y1: "852.671",
                y2: "852.595",
                gradientTransform: "matrix(29 0 0 -8 29523 6971)",
                gradientUnits: "userSpaceOnUse",
                children: [
                  u.jsx("stop", { offset: "0", stopColor: "#ffa400" }),
                  u.jsx("stop", { offset: "1", stopColor: "#ff5e00" }),
                ],
              }),
              u.jsx("path", {
                fill: "none",
                stroke: `url(#H-${e})`,
                strokeLinecap: "round",
                strokeLinejoin: "bevel",
                strokeWidth: "12",
                d: "M34 146l-29 8",
              }),
              u.jsxs("linearGradient", {
                id: `I-${e}`,
                x1: "-1011.984",
                x2: "-1013.257",
                y1: "863.523",
                y2: "863.229",
                gradientTransform: "matrix(24 0 0 -13 24339 11407)",
                gradientUnits: "userSpaceOnUse",
                children: [
                  u.jsx("stop", { offset: "0", stopColor: "#ffa400" }),
                  u.jsx("stop", { offset: "1", stopColor: "#ff5e00" }),
                ],
              }),
              u.jsx("path", {
                fill: "none",
                stroke: `url(#I-${e})`,
                strokeLinecap: "round",
                strokeLinejoin: "bevel",
                strokeWidth: "12",
                d: "M45 177l-24 13",
              }),
              u.jsxs("linearGradient", {
                id: `J-${e}`,
                x1: "-1006.673",
                x2: "-1007.946",
                y1: "869.279",
                y2: "868.376",
                gradientTransform: "matrix(20 0 0 -19 20205 16720)",
                gradientUnits: "userSpaceOnUse",
                children: [
                  u.jsx("stop", { offset: "0", stopColor: "#ffa400" }),
                  u.jsx("stop", { offset: "1", stopColor: "#ff5e00" }),
                ],
              }),
              u.jsx("path", {
                fill: "none",
                stroke: `url(#J-${e})`,
                strokeLinecap: "round",
                strokeLinejoin: "bevel",
                strokeWidth: "12",
                d: "M67 204l-20 19",
              }),
              u.jsxs("linearGradient", {
                id: `K-${e}`,
                x1: "-992.85",
                x2: "-993.317",
                y1: "871.258",
                y2: "870.258",
                gradientTransform:
                  "matrix(13.8339 0 0 -22.8467 13825.796 20131.938)",
                gradientUnits: "userSpaceOnUse",
                children: [
                  u.jsx("stop", { offset: "0", stopColor: "#ffa400" }),
                  u.jsx("stop", { offset: "1", stopColor: "#ff5e00" }),
                ],
              }),
              u.jsx("path", {
                fill: "none",
                stroke: `url(#K-${e})`,
                strokeLinecap: "round",
                strokeLinejoin: "bevel",
                strokeWidth: "12",
                d: "M94.4 227l-13.8 22.8",
              }),
              u.jsxs("linearGradient", {
                id: `L-${e}`,
                x1: "-953.835",
                x2: "-953.965",
                y1: "871.9",
                y2: "870.9",
                gradientTransform: "matrix(7.5 0 0 -24.5 7278 21605)",
                gradientUnits: "userSpaceOnUse",
                children: [
                  u.jsx("stop", { offset: "0", stopColor: "#ffa400" }),
                  u.jsx("stop", { offset: "1", stopColor: "#ff5e00" }),
                ],
              }),
              u.jsx("path", {
                fill: "none",
                stroke: `url(#L-${e})`,
                strokeLinecap: "round",
                strokeLinejoin: "bevel",
                strokeWidth: "12",
                d: "M127.5 243.5L120 268",
              }),
              u.jsxs("linearGradient", {
                id: `M-${e}`,
                x1: "244.504",
                x2: "244.496",
                y1: "871.898",
                y2: "870.898",
                gradientTransform: "matrix(.5 0 0 -24.5 45.5 21614)",
                gradientUnits: "userSpaceOnUse",
                children: [
                  u.jsx("stop", { offset: "0", stopColor: "#ffa400" }),
                  u.jsx("stop", { offset: "1", stopColor: "#ff5e00" }),
                ],
              }),
              u.jsx("path", {
                fill: "none",
                stroke: `url(#M-${e})`,
                strokeLinecap: "round",
                strokeLinejoin: "bevel",
                strokeWidth: "12",
                d: "M167.5 252.5l.5 24.5",
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Lg(e) {
  const { className: t, ...n } = e,
    r = _o();
  return u.jsxs("button", {
    ...n,
    className: je(r.logo, t),
    children: [
      u.jsx("div", { className: r.tanstackLogo, children: "TANSTACK" }),
      u.jsx("div", { className: r.routerLogo, children: "React Router v1" }),
    ],
  });
}
function Ng(e) {
  const { shadowDOMTarget: t } = e;
  return u.jsx(Ss.Provider, { value: t, children: u.jsx(Ig, { ...e }) });
}
function Ig({
  initialIsOpen: e,
  panelProps: t = {},
  closeButtonProps: n = {},
  toggleButtonProps: r = {},
  position: o = "bottom-left",
  containerElement: i = "footer",
  router: s,
  shadowDOMTarget: l,
}) {
  const [a, c] = W.useState(),
    d = W.useRef(null),
    [p, f] = Qi("tanstackRouterDevtoolsOpen", e),
    [v, y] = Qi("tanstackRouterDevtoolsHeight", null),
    [w, j] = Gc(!1),
    [m, h] = Gc(!1),
    g = Wp(),
    x = _o(),
    C = (A, D) => {
      if (D.button !== 0) return;
      h(!0);
      const P = {
          originalHeight:
            (A == null ? void 0 : A.getBoundingClientRect().height) ?? 0,
          pageY: D.pageY,
        },
        L = (M) => {
          const F = P.pageY - M.pageY,
            re = P.originalHeight + F;
          y(re), re < 70 ? f(!1) : f(!0);
        },
        z = () => {
          h(!1),
            document.removeEventListener("mousemove", L),
            document.removeEventListener("mouseUp", z);
        };
      document.addEventListener("mousemove", L),
        document.addEventListener("mouseup", z);
    },
    S = p ?? !1;
  W.useEffect(() => {
    j(p ?? !1);
  }, [p, w, j]),
    W.useEffect(() => {
      var A;
      if (w) {
        const D =
            (A = a == null ? void 0 : a.parentElement) == null
              ? void 0
              : A.style.paddingBottom,
          P = () => {
            var L;
            const z =
              (L = d.current) == null
                ? void 0
                : L.getBoundingClientRect().height;
            a != null &&
              a.parentElement &&
              (a.parentElement.style.paddingBottom = `${z}px`);
          };
        if ((P(), typeof window < "u"))
          return (
            window.addEventListener("resize", P),
            () => {
              window.removeEventListener("resize", P),
                a != null &&
                  a.parentElement &&
                  typeof D == "string" &&
                  (a.parentElement.style.paddingBottom = D);
            }
          );
      }
    }, [w, a == null ? void 0 : a.parentElement]),
    W.useEffect(() => {
      if (a) {
        const A = a,
          D = getComputedStyle(A).fontSize;
        A.style.setProperty("--tsrd-font-size", D);
      }
    }, [a]);
  const { style: k = {}, ...$ } = t,
    { style: _ = {}, onClick: N, ...O } = n,
    { onClick: b, className: K, ...fe } = r;
  if (!g()) return null;
  const Q = v ?? 500;
  return u.jsxs(i, {
    ref: c,
    className: "TanStackRouterDevtools",
    children: [
      u.jsx(mu.Provider, {
        value: { onCloseClick: N ?? (() => {}) },
        children: u.jsx(Qp, {
          ref: d,
          ...$,
          router: s,
          className: je(
            x.devtoolsPanelContainer,
            x.devtoolsPanelContainerVisibility(!!p),
            x.devtoolsPanelContainerResizing(m),
            x.devtoolsPanelContainerAnimation(w, Q + 16)
          ),
          style: { height: Q, ...k },
          isOpen: w,
          setIsOpen: f,
          handleDragStart: (A) => C(d.current, A),
          shadowDOMTarget: l,
        }),
      }),
      u.jsxs("button", {
        type: "button",
        ...fe,
        "aria-label": "Open TanStack Router Devtools",
        onClick: (A) => {
          f(!0), b && b(A);
        },
        className: je(
          x.mainCloseBtn,
          x.mainCloseBtnPosition(o),
          x.mainCloseBtnAnimation(!S),
          K
        ),
        children: [
          u.jsxs("div", {
            className: x.mainCloseBtnIconContainer,
            children: [
              u.jsx("div", {
                className: x.mainCloseBtnIconOuter,
                children: u.jsx(Qc, {}),
              }),
              u.jsx("div", {
                className: x.mainCloseBtnIconInner,
                children: u.jsx(Qc, {}),
              }),
            ],
          }),
          u.jsx("div", { className: x.mainCloseBtnDivider, children: "-" }),
          u.jsx("div", {
            className: x.routerLogoCloseButton,
            children: "TanStack Router",
          }),
        ],
      }),
    ],
  });
}
W.forwardRef(function (t, n) {
  const { shadowDOMTarget: r } = t;
  return u.jsx(Ss.Provider, {
    value: r,
    children: u.jsx(mu.Provider, {
      value: { onCloseClick: () => {} },
      children: u.jsx(Qp, { ref: n, ...t }),
    }),
  });
});
function Kp({ router: e, route: t, isRoot: n, activeId: r, setActiveId: o }) {
  var i;
  const s = Le({ router: e }),
    l = _o(),
    a = s.pendingMatches || s.matches,
    c = s.matches.find((p) => p.routeId === t.id),
    d = W.useMemo(() => {
      try {
        if (c != null && c.params) {
          const p = c.params,
            f = t.path || ia(t.id);
          if (f.startsWith("$")) {
            const v = f.slice(1);
            if (p[v]) return `(${p[v]})`;
          }
        }
        return "";
      } catch {
        return "";
      }
    }, [c, t]);
  return u.jsxs("div", {
    children: [
      u.jsxs("div", {
        role: "button",
        "aria-label": `Open match details for ${t.id}`,
        onClick: () => {
          c && o(r === t.id ? "" : t.id);
        },
        className: je(l.routesRowContainer(t.id === r, !!c)),
        children: [
          u.jsx("div", { className: je(l.matchIndicator(kg(a, t))) }),
          u.jsxs("div", {
            className: je(l.routesRow(!!c)),
            children: [
              u.jsxs("div", {
                children: [
                  u.jsxs("code", {
                    className: l.code,
                    children: [n ? Re : t.path || ia(t.id), " "],
                  }),
                  u.jsx("code", { className: l.routeParamInfo, children: d }),
                ],
              }),
              u.jsx(ua, { match: c, router: e }),
            ],
          }),
        ],
      }),
      (i = t.children) != null && i.length
        ? u.jsx("div", {
            className: l.nestedRouteRow(!!n),
            children: [...t.children]
              .sort((p, f) => p.rank - f.rank)
              .map((p) =>
                u.jsx(
                  Kp,
                  { router: e, route: p, activeId: r, setActiveId: o },
                  p.id
                )
              ),
          })
        : null,
    ],
  });
}
const Qp = W.forwardRef(function (t, n) {
  var r, o;
  const {
      isOpen: i = !0,
      setIsOpen: s,
      handleDragStart: l,
      router: a,
      shadowDOMTarget: c,
      ...d
    } = t,
    { onCloseClick: p } = $g(),
    f = _o(),
    { className: v, ...y } = d,
    w = Ut({ warn: !1 }),
    j = a ?? w,
    m = Le({ router: j });
  Me(j);
  const [h, g] = Qi("tanstackRouterDevtoolsShowMatches", !0),
    [x, C] = Qi("tanstackRouterDevtoolsActiveRouteId", ""),
    S = W.useMemo(
      () =>
        [...(m.pendingMatches ?? []), ...m.matches, ...m.cachedMatches].find(
          (N) => N.routeId === x || N.id === x
        ),
      [x, m.cachedMatches, m.matches, m.pendingMatches]
    ),
    k = Object.keys(m.location.search).length,
    $ = { ...j, state: j.state };
  return u.jsxs("div", {
    ref: n,
    className: je(f.devtoolsPanel, "TanStackRouterDevtoolsPanel", v),
    ...y,
    children: [
      l ? u.jsx("div", { className: f.dragHandle, onMouseDown: l }) : null,
      u.jsx("button", {
        className: f.panelCloseBtn,
        onClick: (_) => {
          s(!1), p(_);
        },
        children: u.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "10",
          height: "6",
          fill: "none",
          viewBox: "0 0 10 6",
          className: f.panelCloseBtnIcon,
          children: u.jsx("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.667",
            d: "M1 1l4 4 4-4",
          }),
        }),
      }),
      u.jsxs("div", {
        className: f.firstContainer,
        children: [
          u.jsx("div", {
            className: f.row,
            children: u.jsx(Lg, {
              "aria-hidden": !0,
              onClick: (_) => {
                s(!1), p(_);
              },
            }),
          }),
          u.jsx("div", {
            className: f.routerExplorerContainer,
            children: u.jsx("div", {
              className: f.routerExplorer,
              children: u.jsx(Jn, {
                label: "Router",
                value: Object.fromEntries(
                  _g(
                    Object.keys($),
                    [
                      "state",
                      "routesById",
                      "routesByPath",
                      "flatRoutes",
                      "options",
                      "manifest",
                    ].map((_) => (N) => N !== _)
                  )
                    .map((_) => [_, $[_]])
                    .filter(
                      (_) =>
                        typeof _[1] != "function" &&
                        ![
                          "__store",
                          "basepath",
                          "injectedHtml",
                          "subscribers",
                          "latestLoadPromise",
                          "navigateTimeout",
                          "resetNextScroll",
                          "tempLocationKey",
                          "latestLocation",
                          "routeTree",
                          "history",
                        ].includes(_[0])
                    )
                ),
                defaultExpanded: { state: {}, context: {}, options: {} },
                filterSubEntries: (_) =>
                  _.filter((N) => typeof N.value != "function"),
              }),
            }),
          }),
        ],
      }),
      u.jsxs("div", {
        className: f.secondContainer,
        children: [
          u.jsxs("div", {
            className: f.matchesContainer,
            children: [
              u.jsxs("div", {
                className: f.detailsHeader,
                children: [
                  u.jsx("span", { children: "Pathname" }),
                  m.location.maskedLocation
                    ? u.jsx("div", {
                        className: f.maskedBadgeContainer,
                        children: u.jsx("span", {
                          className: f.maskedBadge,
                          children: "masked",
                        }),
                      })
                    : null,
                ],
              }),
              u.jsxs("div", {
                className: f.detailsContent,
                children: [
                  u.jsx("code", { children: m.location.pathname }),
                  m.location.maskedLocation
                    ? u.jsx("code", {
                        className: f.maskedLocation,
                        children: m.location.maskedLocation.pathname,
                      })
                    : null,
                ],
              }),
              u.jsxs("div", {
                className: f.detailsHeader,
                children: [
                  u.jsxs("div", {
                    className: f.routeMatchesToggle,
                    children: [
                      u.jsx("button", {
                        type: "button",
                        onClick: () => {
                          g(!1);
                        },
                        disabled: !h,
                        className: je(f.routeMatchesToggleBtn(!h, !0)),
                        children: "Routes",
                      }),
                      u.jsx("button", {
                        type: "button",
                        onClick: () => {
                          g(!0);
                        },
                        disabled: h,
                        className: je(f.routeMatchesToggleBtn(!!h, !1)),
                        children: "Matches",
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className: f.detailsHeaderInfo,
                    children: u.jsx("div", {
                      children: "age / staleTime / gcTime",
                    }),
                  }),
                ],
              }),
              u.jsx("div", {
                className: je(f.routesContainer),
                children: h
                  ? u.jsx("div", {
                      children: ((r = m.pendingMatches) != null && r.length
                        ? m.pendingMatches
                        : m.matches
                      ).map((_, N) =>
                        u.jsxs(
                          "div",
                          {
                            role: "button",
                            "aria-label": `Open match details for ${_.id}`,
                            onClick: () => C(x === _.id ? "" : _.id),
                            className: je(f.matchRow(_ === S)),
                            children: [
                              u.jsx("div", {
                                className: je(f.matchIndicator(aa(_))),
                              }),
                              u.jsx("code", {
                                className: f.matchID,
                                children: `${
                                  _.routeId === Re ? Re : _.pathname
                                }`,
                              }),
                              u.jsx(ua, { match: _, router: j }),
                            ],
                          },
                          _.id || N
                        )
                      ),
                    })
                  : u.jsx(Kp, {
                      router: j,
                      route: j.routeTree,
                      isRoot: !0,
                      activeId: x,
                      setActiveId: C,
                    }),
              }),
            ],
          }),
          m.cachedMatches.length
            ? u.jsxs("div", {
                className: f.cachedMatchesContainer,
                children: [
                  u.jsxs("div", {
                    className: f.detailsHeader,
                    children: [
                      u.jsx("div", { children: "Cached Matches" }),
                      u.jsx("div", {
                        className: f.detailsHeaderInfo,
                        children: "age / staleTime / gcTime",
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    children: m.cachedMatches.map((_) =>
                      u.jsxs(
                        "div",
                        {
                          role: "button",
                          "aria-label": `Open match details for ${_.id}`,
                          onClick: () => C(x === _.id ? "" : _.id),
                          className: je(f.matchRow(_ === S)),
                          children: [
                            u.jsx("div", {
                              className: je(f.matchIndicator(aa(_))),
                            }),
                            u.jsx("code", {
                              className: f.matchID,
                              children: `${_.id}`,
                            }),
                            u.jsx(ua, { match: _, router: j }),
                          ],
                        },
                        _.id
                      )
                    ),
                  }),
                ],
              })
            : null,
        ],
      }),
      S
        ? u.jsxs("div", {
            className: f.thirdContainer,
            children: [
              u.jsx("div", {
                className: f.detailsHeader,
                children: "Match Details",
              }),
              u.jsx("div", {
                children: u.jsxs("div", {
                  className: f.matchDetails,
                  children: [
                    u.jsx("div", {
                      className: f.matchStatus(S.status, S.isFetching),
                      children: u.jsx("div", {
                        children:
                          S.status === "success" && S.isFetching
                            ? "fetching"
                            : S.status,
                      }),
                    }),
                    u.jsxs("div", {
                      className: f.matchDetailsInfoLabel,
                      children: [
                        u.jsx("div", { children: "ID:" }),
                        u.jsx("div", {
                          className: f.matchDetailsInfo,
                          children: u.jsx("code", { children: S.id }),
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: f.matchDetailsInfoLabel,
                      children: [
                        u.jsx("div", { children: "State:" }),
                        u.jsx("div", {
                          className: f.matchDetailsInfo,
                          children:
                            (o = m.pendingMatches) != null &&
                            o.find((_) => _.id === S.id)
                              ? "Pending"
                              : m.matches.find((_) => _.id === S.id)
                              ? "Active"
                              : "Cached",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: f.matchDetailsInfoLabel,
                      children: [
                        u.jsx("div", { children: "Last Updated:" }),
                        u.jsx("div", {
                          className: f.matchDetailsInfo,
                          children: S.updatedAt
                            ? new Date(S.updatedAt).toLocaleTimeString()
                            : "N/A",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              S.loaderData
                ? u.jsxs(u.Fragment, {
                    children: [
                      u.jsx("div", {
                        className: f.detailsHeader,
                        children: "Loader Data",
                      }),
                      u.jsx("div", {
                        className: f.detailsContent,
                        children: u.jsx(Jn, {
                          label: "loaderData",
                          value: S.loaderData,
                          defaultExpanded: {},
                        }),
                      }),
                    ],
                  })
                : null,
              u.jsx("div", {
                className: f.detailsHeader,
                children: "Explorer",
              }),
              u.jsx("div", {
                className: f.detailsContent,
                children: u.jsx(Jn, {
                  label: "Match",
                  value: S,
                  defaultExpanded: {},
                }),
              }),
            ],
          })
        : null,
      k
        ? u.jsxs("div", {
            className: f.fourthContainer,
            children: [
              u.jsx("div", {
                className: f.detailsHeader,
                children: "Search Params",
              }),
              u.jsx("div", {
                className: f.detailsContent,
                children: u.jsx(Jn, {
                  value: m.location.search,
                  defaultExpanded: Object.keys(m.location.search).reduce(
                    (_, N) => ((_[N] = {}), _),
                    {}
                  ),
                }),
              }),
            ],
          })
        : null,
    ],
  });
});
function ua({ match: e, router: t }) {
  const n = _o(),
    r = W.useReducer(
      () => ({}),
      () => ({})
    )[1];
  if (
    (W.useEffect(() => {
      const a = setInterval(() => {
        r();
      }, 1e3);
      return () => {
        clearInterval(a);
      };
    }, [r]),
    !e)
  )
    return null;
  const o = t.looseRoutesById[e.routeId];
  if (!o.options.loader) return null;
  const i = Date.now() - e.updatedAt,
    s = o.options.staleTime ?? t.options.defaultStaleTime ?? 0,
    l = o.options.gcTime ?? t.options.defaultGcTime ?? 30 * 60 * 1e3;
  return u.jsxs("div", {
    className: je(n.ageTicker(i > s)),
    children: [
      u.jsx("div", { children: il(i) }),
      u.jsx("div", { children: "/" }),
      u.jsx("div", { children: il(s) }),
      u.jsx("div", { children: "/" }),
      u.jsx("div", { children: il(l) }),
    ],
  });
}
function il(e) {
  const t = ["s", "min", "h", "d"],
    n = [e / 1e3, e / 6e4, e / 36e5, e / 864e5];
  let r = 0;
  for (let i = 1; i < n.length && !(n[i] < 1); i++) r = i;
  return (
    new Intl.NumberFormat(navigator.language, {
      compactDisplay: "short",
      notation: "compact",
      maximumFractionDigits: 0,
    }).format(n[r]) + t[r]
  );
}
const Mg = (e) => {
  const { colors: t, font: n, size: r, alpha: o, shadow: i, border: s } = Y,
    { fontFamily: l, lineHeight: a, size: c } = n,
    d = e ? un.bind({ target: e }) : un;
  return {
    devtoolsPanelContainer: d`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,
    devtoolsPanelContainerVisibility: (p) => d`
        visibility: ${p ? "visible" : "hidden"};
      `,
    devtoolsPanelContainerResizing: (p) =>
      p
        ? d`
          transition: none;
        `
        : d`
        transition: all 0.4s ease;
      `,
    devtoolsPanelContainerAnimation: (p, f) =>
      p
        ? d`
          pointer-events: auto;
          transform: translateY(0);
        `
        : d`
        pointer-events: none;
        transform: translateY(${f}px);
      `,
    logo: d`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${l.sans};
      gap: ${Y.size[0.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,
    tanstackLogo: d`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,
    routerLogo: d`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,
    devtoolsPanel: d`
      display: flex;
      font-size: ${c.sm};
      font-family: ${l.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${c.xs};
      }
    `,
    dragHandle: d`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${o[90]};
      }
    `,
    firstContainer: d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,
    routerExplorerContainer: d`
      overflow-y: auto;
      flex: 1;
    `,
    routerExplorer: d`
      padding: ${Y.size[2]};
    `,
    row: d`
      display: flex;
      align-items: center;
      padding: ${Y.size[2]} ${Y.size[2.5]};
      gap: ${Y.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,
    detailsHeader: d`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${Y.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${Y.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,
    maskedBadge: d`
      background: ${t.yellow[900]}${o[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${Y.size[0]} ${Y.size[2.5]};
      border-radius: ${s.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,
    maskedLocation: d`
      color: ${t.yellow[300]};
    `,
    detailsContent: d`
      padding: ${Y.size[1.5]} ${Y.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,
    routeMatchesToggle: d`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${s.radius.sm};
      overflow: hidden;
    `,
    routeMatchesToggleBtn: (p, f) => {
      const y = [
        d`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${l.sans};
        font-weight: ${n.weight.medium};
      `,
      ];
      if (p) {
        const w = d`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;
        y.push(w);
      } else {
        const w = d`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${o[20]};
        `;
        y.push(w);
      }
      return (
        f &&
          y.push(d`
          border-right: 1px solid ${Y.colors.gray[500]};
        `),
        y
      );
    },
    detailsHeaderInfo: d`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${t.gray[400]};
    `,
    matchRow: (p) => {
      const v = [
        d`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${c.xs};
        color: ${t.gray[300]};
      `,
      ];
      if (p) {
        const y = d`
          background: ${t.darkGray[500]};
        `;
        v.push(y);
      }
      return v;
    },
    matchIndicator: (p) => {
      const v = [
        d`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[p][900]};
        border: 1px solid ${t[p][500]};
        border-radius: ${s.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `,
      ];
      if (p === "gray") {
        const y = d`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;
        v.push(y);
      }
      return v;
    },
    matchID: d`
      flex: 1;
      line-height: ${a.xs};
    `,
    ageTicker: (p) => {
      const v = [
        d`
        display: flex;
        gap: ${r[1]};
        font-size: ${c.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${a.xs};
      `,
      ];
      if (p) {
        const y = d`
          color: ${t.yellow[400]};
        `;
        v.push(y);
      }
      return v;
    },
    secondContainer: d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,
    thirdContainer: d`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,
    fourthContainer: d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,
    routesContainer: d`
      overflow-x: auto;
      overflow-y: visible;
    `,
    routesRowContainer: (p, f) => {
      const y = [
        d`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${c.xs};
        color: ${t.gray[300]};
        cursor: ${f ? "pointer" : "default"};
        line-height: ${a.xs};
      `,
      ];
      if (p) {
        const w = d`
          background: ${t.darkGray[500]};
        `;
        y.push(w);
      }
      return y;
    },
    routesRow: (p) => {
      const v = [
        d`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${c.xs};
        line-height: ${a.xs};
      `,
      ];
      if (!p) {
        const y = d`
          color: ${t.gray[400]};
        `;
        v.push(y);
      }
      return v;
    },
    routeParamInfo: d`
      color: ${t.gray[400]};
      font-size: ${c.xs};
      line-height: ${a.xs};
    `,
    nestedRouteRow: (p) => d`
        margin-left: ${p ? 0 : r[3.5]};
        border-left: ${p ? "" : `solid 1px ${t.gray[700]}`};
      `,
    code: d`
      font-size: ${c.xs};
      line-height: ${a.xs};
    `,
    matchesContainer: d`
      flex: 1 1 auto;
      overflow-y: auto;
    `,
    cachedMatchesContainer: d`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,
    maskedBadgeContainer: d`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,
    matchDetails: d`
      display: flex;
      flex-direction: column;
      padding: ${Y.size[2]};
      font-size: ${Y.font.size.xs};
      color: ${Y.colors.gray[300]};
      line-height: ${Y.font.lineHeight.sm};
    `,
    matchStatus: (p, f) => {
      const y =
        f && p === "success"
          ? f === "beforeLoad"
            ? "purple"
            : "blue"
          : {
              pending: "yellow",
              success: "green",
              error: "red",
              notFound: "purple",
              redirected: "gray",
            }[p];
      return d`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${Y.border.radius.sm};
        font-weight: ${Y.font.weight.normal};
        background-color: ${Y.colors[y][900]}${Y.alpha[90]};
        color: ${Y.colors[y][300]};
        border: 1px solid ${Y.colors[y][600]};
        margin-bottom: ${Y.size[2]};
        transition: all 0.25s ease-out;
      `;
    },
    matchDetailsInfo: d`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,
    matchDetailsInfoLabel: d`
      display: flex;
    `,
    mainCloseBtn: d`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${s.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,
    mainCloseBtnPosition: (p) => d`
        ${p === "top-left" ? `top: ${r[2]}; left: ${r[2]};` : ""}
        ${p === "top-right" ? `top: ${r[2]}; right: ${r[2]};` : ""}
        ${p === "bottom-left" ? `bottom: ${r[2]}; left: ${r[2]};` : ""}
        ${p === "bottom-right" ? `bottom: ${r[2]}; right: ${r[2]};` : ""}
      `,
    mainCloseBtnAnimation: (p) =>
      p
        ? d`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `
        : d`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `,
    routerLogoCloseButton: d`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,
    mainCloseBtnDivider: d`
      width: 1px;
      background: ${Y.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,
    mainCloseBtnIconContainer: d`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,
    mainCloseBtnIconOuter: d`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,
    mainCloseBtnIconInner: d`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
    panelCloseBtn: d`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${s.radius.sm} ${s.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[0.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,
    panelCloseBtnIcon: d`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,
  };
};
let Qo = null;
function _o() {
  const e = W.useContext(Ss);
  return Qo || ((Qo = Mg(e)), Qo);
}
var be = function () {
  return (
    (be =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    be.apply(this, arguments)
  );
};
function Yi(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Z = "-ms-",
  qr = "-moz-",
  V = "-webkit-",
  Yp = "comm",
  ks = "rule",
  gu = "decl",
  Fg = "@import",
  Xp = "@keyframes",
  Tg = "@layer",
  Jp = Math.abs,
  vu = String.fromCharCode,
  ca = Object.assign;
function Og(e, t) {
  return we(e, 0) ^ 45
    ? (((((((t << 2) ^ we(e, 0)) << 2) ^ we(e, 1)) << 2) ^ we(e, 2)) << 2) ^
        we(e, 3)
    : 0;
}
function Zp(e) {
  return e.trim();
}
function Pt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function U(e, t, n) {
  return e.replace(t, n);
}
function fi(e, t, n) {
  return e.indexOf(t, n);
}
function we(e, t) {
  return e.charCodeAt(t) | 0;
}
function vr(e, t, n) {
  return e.slice(t, n);
}
function kt(e) {
  return e.length;
}
function qp(e) {
  return e.length;
}
function br(e, t) {
  return t.push(e), e;
}
function Dg(e, t) {
  return e.map(t).join("");
}
function Yc(e, t) {
  return e.filter(function (n) {
    return !Pt(n, t);
  });
}
var Cs = 1,
  yr = 1,
  eh = 0,
  lt = 0,
  pe = 0,
  _r = "";
function js(e, t, n, r, o, i, s, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Cs,
    column: yr,
    length: s,
    return: "",
    siblings: l,
  };
}
function Ht(e, t) {
  return ca(
    js("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Fn(e) {
  for (; e.root; ) e = Ht(e.root, { children: [e] });
  br(e, e.siblings);
}
function Ag() {
  return pe;
}
function Ug() {
  return (
    (pe = lt > 0 ? we(_r, --lt) : 0), yr--, pe === 10 && ((yr = 1), Cs--), pe
  );
}
function mt() {
  return (
    (pe = lt < eh ? we(_r, lt++) : 0), yr++, pe === 10 && ((yr = 1), Cs++), pe
  );
}
function jn() {
  return we(_r, lt);
}
function pi() {
  return lt;
}
function _s(e, t) {
  return vr(_r, e, t);
}
function da(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function bg(e) {
  return (Cs = yr = 1), (eh = kt((_r = e))), (lt = 0), [];
}
function Bg(e) {
  return (_r = ""), e;
}
function sl(e) {
  return Zp(_s(lt - 1, fa(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Hg(e) {
  for (; (pe = jn()) && pe < 33; ) mt();
  return da(e) > 2 || da(pe) > 3 ? "" : " ";
}
function Vg(e, t) {
  for (
    ;
    --t &&
    mt() &&
    !(pe < 48 || pe > 102 || (pe > 57 && pe < 65) || (pe > 70 && pe < 97));

  );
  return _s(e, pi() + (t < 6 && jn() == 32 && mt() == 32));
}
function fa(e) {
  for (; mt(); )
    switch (pe) {
      case e:
        return lt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && fa(pe);
        break;
      case 40:
        e === 41 && fa(e);
        break;
      case 92:
        mt();
        break;
    }
  return lt;
}
function Wg(e, t) {
  for (; mt() && e + pe !== 57; ) if (e + pe === 84 && jn() === 47) break;
  return "/*" + _s(t, lt - 1) + "*" + vu(e === 47 ? e : mt());
}
function Gg(e) {
  for (; !da(jn()); ) mt();
  return _s(e, lt);
}
function Kg(e) {
  return Bg(hi("", null, null, null, [""], (e = bg(e)), 0, [0], e));
}
function hi(e, t, n, r, o, i, s, l, a) {
  for (
    var c = 0,
      d = 0,
      p = s,
      f = 0,
      v = 0,
      y = 0,
      w = 1,
      j = 1,
      m = 1,
      h = 0,
      g = "",
      x = o,
      C = i,
      S = r,
      k = g;
    j;

  )
    switch (((y = h), (h = mt()))) {
      case 40:
        if (y != 108 && we(k, p - 1) == 58) {
          fi((k += U(sl(h), "&", "&\f")), "&\f", Jp(c ? l[c - 1] : 0)) != -1 &&
            (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += sl(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Hg(y);
        break;
      case 92:
        k += Vg(pi() - 1, 7);
        continue;
      case 47:
        switch (jn()) {
          case 42:
          case 47:
            br(Qg(Wg(mt(), pi()), t, n, a), a);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * w:
        l[c++] = kt(k) * m;
      case 125 * w:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            j = 0;
          case 59 + d:
            m == -1 && (k = U(k, /\f/g, "")),
              v > 0 &&
                kt(k) - p &&
                br(
                  v > 32
                    ? Jc(k + ";", r, n, p - 1, a)
                    : Jc(U(k, " ", "") + ";", r, n, p - 2, a),
                  a
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (br(
                (S = Xc(k, t, n, c, d, o, l, g, (x = []), (C = []), p, i)),
                i
              ),
              h === 123)
            )
              if (d === 0) hi(k, t, S, S, x, i, p, l, C);
              else
                switch (f === 99 && we(k, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    hi(
                      e,
                      S,
                      S,
                      r && br(Xc(e, S, S, 0, 0, o, l, g, o, (x = []), p, C), C),
                      o,
                      C,
                      p,
                      l,
                      r ? x : C
                    );
                    break;
                  default:
                    hi(k, S, S, S, [""], C, 0, l, C);
                }
        }
        (c = d = v = 0), (w = m = 1), (g = k = ""), (p = s);
        break;
      case 58:
        (p = 1 + kt(k)), (v = y);
      default:
        if (w < 1) {
          if (h == 123) --w;
          else if (h == 125 && w++ == 0 && Ug() == 125) continue;
        }
        switch (((k += vu(h)), h * w)) {
          case 38:
            m = d > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (l[c++] = (kt(k) - 1) * m), (m = 1);
            break;
          case 64:
            jn() === 45 && (k += sl(mt())),
              (f = jn()),
              (d = p = kt((g = k += Gg(pi())))),
              h++;
            break;
          case 45:
            y === 45 && kt(k) == 2 && (w = 0);
        }
    }
  return i;
}
function Xc(e, t, n, r, o, i, s, l, a, c, d, p) {
  for (
    var f = o - 1, v = o === 0 ? i : [""], y = qp(v), w = 0, j = 0, m = 0;
    w < r;
    ++w
  )
    for (var h = 0, g = vr(e, f + 1, (f = Jp((j = s[w])))), x = e; h < y; ++h)
      (x = Zp(j > 0 ? v[h] + " " + g : U(g, /&\f/g, v[h]))) && (a[m++] = x);
  return js(e, t, n, o === 0 ? ks : l, a, c, d, p);
}
function Qg(e, t, n, r) {
  return js(e, t, n, Yp, vu(Ag()), vr(e, 2, -2), 0, r);
}
function Jc(e, t, n, r, o) {
  return js(e, t, n, gu, vr(e, 0, r), vr(e, r + 1, -1), r, o);
}
function th(e, t, n) {
  switch (Og(e, t)) {
    case 5103:
      return V + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return V + e + e;
    case 4789:
      return qr + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return V + e + qr + e + Z + e + e;
    case 5936:
      switch (we(e, t + 11)) {
        case 114:
          return V + e + Z + U(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return V + e + Z + U(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return V + e + Z + U(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return V + e + Z + e + e;
    case 6165:
      return V + e + Z + "flex-" + e + e;
    case 5187:
      return (
        V + e + U(e, /(\w+).+(:[^]+)/, V + "box-$1$2" + Z + "flex-$1$2") + e
      );
    case 5443:
      return (
        V +
        e +
        Z +
        "flex-item-" +
        U(e, /flex-|-self/g, "") +
        (Pt(e, /flex-|baseline/)
          ? ""
          : Z + "grid-row-" + U(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        V +
        e +
        Z +
        "flex-line-pack" +
        U(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return V + e + Z + U(e, "shrink", "negative") + e;
    case 5292:
      return V + e + Z + U(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        V +
        "box-" +
        U(e, "-grow", "") +
        V +
        e +
        Z +
        U(e, "grow", "positive") +
        e
      );
    case 4554:
      return V + U(e, /([^-])(transform)/g, "$1" + V + "$2") + e;
    case 6187:
      return (
        U(U(U(e, /(zoom-|grab)/, V + "$1"), /(image-set)/, V + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return U(e, /(image-set\([^]*)/, V + "$1$`$1");
    case 4968:
      return (
        U(
          U(e, /(.+:)(flex-)?(.*)/, V + "box-pack:$3" + Z + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        V +
        e +
        e
      );
    case 4200:
      if (!Pt(e, /flex-|baseline/))
        return Z + "grid-column-align" + vr(e, t) + e;
      break;
    case 2592:
    case 3360:
      return Z + U(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), Pt(r.props, /grid-\w+-end/);
        })
        ? ~fi(e + (n = n[t].value), "span", 0)
          ? e
          : Z +
            U(e, "-start", "") +
            e +
            Z +
            "grid-row-span:" +
            (~fi(n, "span", 0) ? Pt(n, /\d+/) : +Pt(n, /\d+/) - +Pt(e, /\d+/)) +
            ";"
        : Z + U(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Pt(r.props, /grid-\w+-start/);
        })
        ? e
        : Z + U(U(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return U(e, /(.+)-inline(.+)/, V + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (kt(e) - 1 - t > 6)
        switch (we(e, t + 1)) {
          case 109:
            if (we(e, t + 4) !== 45) break;
          case 102:
            return (
              U(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  V +
                  "$2-$3$1" +
                  qr +
                  (we(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~fi(e, "stretch", 0)
              ? th(U(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return U(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, o, i, s, l, a, c) {
          return (
            Z +
            o +
            ":" +
            i +
            c +
            (s ? Z + o + "-span:" + (l ? a : +a - +i) + c : "") +
            e
          );
        }
      );
    case 4949:
      if (we(e, t + 6) === 121) return U(e, ":", ":" + V) + e;
      break;
    case 6444:
      switch (we(e, we(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            U(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                V +
                (we(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                V +
                "$2$3$1" +
                Z +
                "$2box$3"
            ) + e
          );
        case 100:
          return U(e, ":", ":" + Z) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return U(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Xi(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function Yg(e, t, n, r) {
  switch (e.type) {
    case Tg:
      if (e.children.length) break;
    case Fg:
    case gu:
      return (e.return = e.return || e.value);
    case Yp:
      return "";
    case Xp:
      return (e.return = e.value + "{" + Xi(e.children, r) + "}");
    case ks:
      if (!kt((e.value = e.props.join(",")))) return "";
  }
  return kt((n = Xi(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Xg(e) {
  var t = qp(e);
  return function (n, r, o, i) {
    for (var s = "", l = 0; l < t; l++) s += e[l](n, r, o, i) || "";
    return s;
  };
}
function Jg(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Zg(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case gu:
        e.return = th(e.value, e.length, n);
        return;
      case Xp:
        return Xi([Ht(e, { value: U(e.value, "@", "@" + V) })], r);
      case ks:
        if (e.length)
          return Dg((n = e.props), function (o) {
            switch (Pt(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Fn(Ht(e, { props: [U(o, /:(read-\w+)/, ":" + qr + "$1")] })),
                  Fn(Ht(e, { props: [o] })),
                  ca(e, { props: Yc(n, r) });
                break;
              case "::placeholder":
                Fn(
                  Ht(e, { props: [U(o, /:(plac\w+)/, ":" + V + "input-$1")] })
                ),
                  Fn(Ht(e, { props: [U(o, /:(plac\w+)/, ":" + qr + "$1")] })),
                  Fn(Ht(e, { props: [U(o, /:(plac\w+)/, Z + "input-$1")] })),
                  Fn(Ht(e, { props: [o] })),
                  ca(e, { props: Yc(n, r) });
                break;
            }
            return "";
          });
    }
}
var qg = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Ke = {},
  xr =
    (typeof process < "u" &&
      Ke !== void 0 &&
      (Ke.REACT_APP_SC_ATTR || Ke.SC_ATTR)) ||
    "data-styled",
  nh = "active",
  rh = "data-styled-version",
  $s = "6.1.13",
  yu = `/*!sc*/
`,
  Ji = typeof window < "u" && "HTMLElement" in window,
  ev = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Ke !== void 0 &&
      Ke.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Ke.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? Ke.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      Ke.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Ke !== void 0 &&
      Ke.SC_DISABLE_SPEEDY !== void 0 &&
      Ke.SC_DISABLE_SPEEDY !== "" &&
      Ke.SC_DISABLE_SPEEDY !== "false" &&
      Ke.SC_DISABLE_SPEEDY),
  Es = Object.freeze([]),
  wr = Object.freeze({});
function tv(e, t, n) {
  return (
    n === void 0 && (n = wr), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var oh = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  nv = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  rv = /(^-|-$)/g;
function Zc(e) {
  return e.replace(nv, "-").replace(rv, "");
}
var ov = /(a)(d)/gi,
  Yo = 52,
  qc = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function pa(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > Yo; t = (t / Yo) | 0) n = qc(t % Yo) + n;
  return (qc(t % Yo) + n).replace(ov, "$1-$2");
}
var ll,
  ih = 5381,
  Zn = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  sh = function (e) {
    return Zn(ih, e);
  };
function iv(e) {
  return pa(sh(e) >>> 0);
}
function sv(e) {
  return e.displayName || e.name || "Component";
}
function al(e) {
  return typeof e == "string" && !0;
}
var lh = typeof Symbol == "function" && Symbol.for,
  ah = lh ? Symbol.for("react.memo") : 60115,
  lv = lh ? Symbol.for("react.forward_ref") : 60112,
  av = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  uv = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  uh = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  cv =
    (((ll = {})[lv] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (ll[ah] = uh),
    ll);
function ed(e) {
  return ("type" in (t = e) && t.type.$$typeof) === ah
    ? uh
    : "$$typeof" in e
    ? cv[e.$$typeof]
    : av;
  var t;
}
var dv = Object.defineProperty,
  fv = Object.getOwnPropertyNames,
  td = Object.getOwnPropertySymbols,
  pv = Object.getOwnPropertyDescriptor,
  hv = Object.getPrototypeOf,
  nd = Object.prototype;
function ch(e, t, n) {
  if (typeof t != "string") {
    if (nd) {
      var r = hv(t);
      r && r !== nd && ch(e, r, n);
    }
    var o = fv(t);
    td && (o = o.concat(td(t)));
    for (var i = ed(e), s = ed(t), l = 0; l < o.length; ++l) {
      var a = o[l];
      if (!(a in uv || (n && n[a]) || (s && a in s) || (i && a in i))) {
        var c = pv(t, a);
        try {
          dv(e, a, c);
        } catch {}
      }
    }
  }
  return e;
}
function Sr(e) {
  return typeof e == "function";
}
function xu(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Sn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function rd(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function yo(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function ha(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !yo(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = ha(e[r], t[r]);
  else if (yo(t)) for (var r in t) e[r] = ha(e[r], t[r]);
  return e;
}
function wu(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function $o(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var mv = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
            if ((i <<= 1) < 0) throw $o(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(r),
            (this.length = i);
          for (var s = o; s < i; s++) this.groupSizes[s] = 0;
        }
        for (
          var l = this.indexOfGroup(t + 1), a = ((s = 0), n.length);
          s < a;
          s++
        )
          this.tag.insertRule(l, n[s]) && (this.groupSizes[t]++, l++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < o; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            o = this.indexOfGroup(t),
            i = o + r,
            s = o;
          s < i;
          s++
        )
          n += "".concat(this.tag.getRule(s)).concat(yu);
        return n;
      }),
      e
    );
  })(),
  mi = new Map(),
  Zi = new Map(),
  gi = 1,
  Xo = function (e) {
    if (mi.has(e)) return mi.get(e);
    for (; Zi.has(gi); ) gi++;
    var t = gi++;
    return mi.set(e, t), Zi.set(t, e), t;
  },
  gv = function (e, t) {
    (gi = t + 1), mi.set(e, t), Zi.set(t, e);
  },
  vv = "style[".concat(xr, "][").concat(rh, '="').concat($s, '"]'),
  yv = new RegExp(
    "^".concat(xr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  xv = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  wv = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(yu),
        o = [],
        i = 0,
        s = r.length;
      i < s;
      i++
    ) {
      var l = r[i].trim();
      if (l) {
        var a = l.match(yv);
        if (a) {
          var c = 0 | parseInt(a[1], 10),
            d = a[2];
          c !== 0 && (gv(d, c), xv(e, d, a[3]), e.getTag().insertRules(c, o)),
            (o.length = 0);
        } else o.push(l);
      }
    }
  },
  od = function (e) {
    for (
      var t = document.querySelectorAll(vv), n = 0, r = t.length;
      n < r;
      n++
    ) {
      var o = t[n];
      o &&
        o.getAttribute(xr) !== nh &&
        (wv(e, o), o.parentNode && o.parentNode.removeChild(o));
    }
  };
function Sv() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var dh = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (l) {
        var a = Array.from(l.querySelectorAll("style[".concat(xr, "]")));
        return a[a.length - 1];
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(xr, nh), r.setAttribute(rh, $s);
    var s = Sv();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
  },
  kv = (function () {
    function e(t) {
      (this.element = dh(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
            var s = r[o];
            if (s.ownerNode === n) return s;
          }
          throw $o(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  Cv = (function () {
    function e(t) {
      (this.element = dh(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  jv = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  id = Ji,
  _v = { isServer: !Ji, useCSSOMInjection: !ev },
  fh = (function () {
    function e(t, n, r) {
      t === void 0 && (t = wr), n === void 0 && (n = {});
      var o = this;
      (this.options = be(be({}, _v), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server && Ji && id && ((id = !1), od(this)),
        wu(this, function () {
          return (function (i) {
            for (
              var s = i.getTag(),
                l = s.length,
                a = "",
                c = function (p) {
                  var f = (function (m) {
                    return Zi.get(m);
                  })(p);
                  if (f === void 0) return "continue";
                  var v = i.names.get(f),
                    y = s.getGroup(p);
                  if (v === void 0 || !v.size || y.length === 0)
                    return "continue";
                  var w = ""
                      .concat(xr, ".g")
                      .concat(p, '[id="')
                      .concat(f, '"]'),
                    j = "";
                  v !== void 0 &&
                    v.forEach(function (m) {
                      m.length > 0 && (j += "".concat(m, ","));
                    }),
                    (a += ""
                      .concat(y)
                      .concat(w, '{content:"')
                      .concat(j, '"}')
                      .concat(yu));
                },
                d = 0;
              d < l;
              d++
            )
              c(d);
            return a;
          })(o);
        });
    }
    return (
      (e.registerId = function (t) {
        return Xo(t);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && Ji && od(this);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            be(be({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                o = n.target;
              return n.isServer ? new jv(o) : r ? new kv(o) : new Cv(o);
            })(this.options)),
            new mv(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Xo(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Xo(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Xo(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  $v = /&/g,
  Ev = /^\s*\/\/.*$/gm;
function ph(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = ph(n.children, t)),
      n
    );
  });
}
function Pv(e) {
  var t,
    n,
    r,
    o = wr,
    i = o.options,
    s = i === void 0 ? wr : i,
    l = o.plugins,
    a = l === void 0 ? Es : l,
    c = function (f, v, y) {
      return y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : f;
    },
    d = a.slice();
  d.push(function (f) {
    f.type === ks &&
      f.value.includes("&") &&
      (f.props[0] = f.props[0].replace($v, n).replace(r, c));
  }),
    s.prefix && d.push(Zg),
    d.push(Yg);
  var p = function (f, v, y, w) {
    v === void 0 && (v = ""),
      y === void 0 && (y = ""),
      w === void 0 && (w = "&"),
      (t = w),
      (n = v),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var j = f.replace(Ev, ""),
      m = Kg(y || v ? "".concat(y, " ").concat(v, " { ").concat(j, " }") : j);
    s.namespace && (m = ph(m, s.namespace));
    var h = [];
    return (
      Xi(
        m,
        Xg(
          d.concat(
            Jg(function (g) {
              return h.push(g);
            })
          )
        )
      ),
      h
    );
  };
  return (
    (p.hash = a.length
      ? a
          .reduce(function (f, v) {
            return v.name || $o(15), Zn(f, v.name);
          }, ih)
          .toString()
      : ""),
    p
  );
}
var Rv = new fh(),
  ma = Pv(),
  hh = W.createContext({
    shouldForwardProp: void 0,
    styleSheet: Rv,
    stylis: ma,
  });
hh.Consumer;
W.createContext(void 0);
function sd() {
  return R.useContext(hh);
}
var zv = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = ma);
        var s = r.name + i.hash;
        o.hasNameForId(r.id, s) ||
          o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        wu(this, function () {
          throw $o(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = ma), this.name + t.hash;
      }),
      e
    );
  })(),
  Lv = function (e) {
    return e >= "A" && e <= "Z";
  };
function ld(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Lv(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var mh = function (e) {
    return e == null || e === !1 || e === "";
  },
  gh = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var i = e[o];
      e.hasOwnProperty(o) &&
        !mh(i) &&
        ((Array.isArray(i) && i.isCss) || Sr(i)
          ? r.push("".concat(ld(o), ":"), i, ";")
          : yo(i)
          ? r.push.apply(r, Yi(Yi(["".concat(o, " {")], gh(i), !1), ["}"], !1))
          : r.push(
              ""
                .concat(ld(o), ": ")
                .concat(
                  ((t = o),
                  (n = i) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in qg ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function _n(e, t, n, r) {
  if (mh(e)) return [];
  if (xu(e)) return [".".concat(e.styledComponentId)];
  if (Sr(e)) {
    if (!Sr((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var o = e(t);
    return _n(o, t, n, r);
  }
  var i;
  return e instanceof zv
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : yo(e)
    ? gh(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Es,
        e.map(function (s) {
          return _n(s, t, n, r);
        })
      )
    : [e.toString()];
}
function Nv(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Sr(n) && !xu(n)) return !1;
  }
  return !0;
}
var Iv = sh($s),
  Mv = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && Nv(t)),
        (this.componentId = n),
        (this.baseHash = Zn(Iv, n)),
        (this.baseStyle = r),
        fh.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            o = Sn(o, this.staticRulesId);
          else {
            var i = rd(_n(this.rules, t, n, r)),
              s = pa(Zn(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var l = r(i, ".".concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, l);
            }
            (o = Sn(o, s)), (this.staticRulesId = s);
          }
        else {
          for (
            var a = Zn(this.baseHash, r.hash), c = "", d = 0;
            d < this.rules.length;
            d++
          ) {
            var p = this.rules[d];
            if (typeof p == "string") c += p;
            else if (p) {
              var f = rd(_n(p, t, n, r));
              (a = Zn(a, f + d)), (c += f);
            }
          }
          if (c) {
            var v = pa(a >>> 0);
            n.hasNameForId(this.componentId, v) ||
              n.insertRules(
                this.componentId,
                v,
                r(c, ".".concat(v), void 0, this.componentId)
              ),
              (o = Sn(o, v));
          }
        }
        return o;
      }),
      e
    );
  })(),
  vh = W.createContext(void 0);
vh.Consumer;
var ul = {};
function Fv(e, t, n) {
  var r = xu(e),
    o = e,
    i = !al(e),
    s = t.attrs,
    l = s === void 0 ? Es : s,
    a = t.componentId,
    c =
      a === void 0
        ? (function (x, C) {
            var S = typeof x != "string" ? "sc" : Zc(x);
            ul[S] = (ul[S] || 0) + 1;
            var k = "".concat(S, "-").concat(iv($s + S + ul[S]));
            return C ? "".concat(C, "-").concat(k) : k;
          })(t.displayName, t.parentComponentId)
        : a,
    d = t.displayName,
    p =
      d === void 0
        ? (function (x) {
            return al(x) ? "styled.".concat(x) : "Styled(".concat(sv(x), ")");
          })(e)
        : d,
    f =
      t.displayName && t.componentId
        ? "".concat(Zc(t.displayName), "-").concat(t.componentId)
        : t.componentId || c,
    v = r && o.attrs ? o.attrs.concat(l).filter(Boolean) : l,
    y = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var j = t.shouldForwardProp;
      y = function (x, C) {
        return w(x, C) && j(x, C);
      };
    } else y = w;
  }
  var m = new Mv(n, f, r ? o.componentStyle : void 0);
  function h(x, C) {
    return (function (S, k, $) {
      var _ = S.attrs,
        N = S.componentStyle,
        O = S.defaultProps,
        b = S.foldedComponentIds,
        K = S.styledComponentId,
        fe = S.target,
        Q = W.useContext(vh),
        A = sd(),
        D = S.shouldForwardProp || A.shouldForwardProp,
        P = tv(k, Q, O) || wr,
        L = (function (te, ve, De) {
          for (
            var We,
              oe = be(be({}, ve), { className: void 0, theme: De }),
              vt = 0;
            vt < te.length;
            vt += 1
          ) {
            var Ge = Sr((We = te[vt])) ? We(oe) : We;
            for (var ue in Ge)
              oe[ue] =
                ue === "className"
                  ? Sn(oe[ue], Ge[ue])
                  : ue === "style"
                  ? be(be({}, oe[ue]), Ge[ue])
                  : Ge[ue];
          }
          return (
            ve.className && (oe.className = Sn(oe.className, ve.className)), oe
          );
        })(_, k, P),
        z = L.as || fe,
        M = {};
      for (var F in L)
        L[F] === void 0 ||
          F[0] === "$" ||
          F === "as" ||
          (F === "theme" && L.theme === P) ||
          (F === "forwardedAs"
            ? (M.as = L.forwardedAs)
            : (D && !D(F, z)) || (M[F] = L[F]));
      var re = (function (te, ve) {
          var De = sd(),
            We = te.generateAndInjectStyles(ve, De.styleSheet, De.stylis);
          return We;
        })(N, L),
        ee = Sn(b, K);
      return (
        re && (ee += " " + re),
        L.className && (ee += " " + L.className),
        (M[al(z) && !oh.has(z) ? "class" : "className"] = ee),
        (M.ref = $),
        R.createElement(z, M)
      );
    })(g, x, C);
  }
  h.displayName = p;
  var g = W.forwardRef(h);
  return (
    (g.attrs = v),
    (g.componentStyle = m),
    (g.displayName = p),
    (g.shouldForwardProp = y),
    (g.foldedComponentIds = r
      ? Sn(o.foldedComponentIds, o.styledComponentId)
      : ""),
    (g.styledComponentId = f),
    (g.target = r ? o.target : e),
    Object.defineProperty(g, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (x) {
        this._foldedDefaultProps = r
          ? (function (C) {
              for (var S = [], k = 1; k < arguments.length; k++)
                S[k - 1] = arguments[k];
              for (var $ = 0, _ = S; $ < _.length; $++) ha(C, _[$], !0);
              return C;
            })({}, o.defaultProps, x)
          : x;
      },
    }),
    wu(g, function () {
      return ".".concat(g.styledComponentId);
    }),
    i &&
      ch(g, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    g
  );
}
function ad(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var ud = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function Tv(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Sr(e) || yo(e)) return ud(_n(ad(Es, Yi([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? _n(r)
    : ud(_n(ad(r, t)));
}
function ga(e, t, n) {
  if ((n === void 0 && (n = wr), !t)) throw $o(1, t);
  var r = function (o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, Tv.apply(void 0, Yi([o], i, !1)));
  };
  return (
    (r.attrs = function (o) {
      return ga(
        e,
        t,
        be(be({}, n), {
          attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (o) {
      return ga(e, t, be(be({}, n), o));
    }),
    r
  );
}
var yh = function (e) {
    return ga(Fv, e);
  },
  T = yh;
oh.forEach(function (e) {
  T[e] = yh(e);
});
const Ov = () =>
  u.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "47.998",
    height: "40.34",
    children: u.jsxs("g", {
      fill: "#1a171b",
      children: [
        u.jsx("path", {
          d: "M47.273 0h-6.544a.728.728 0 0 0-.712.58L38.63 7.219H.727a.727.727 0 0 0-.7.912l4.6 17.5c.006.021.019.037.026.059a.792.792 0 0 0 .042.094.747.747 0 0 0 .092.135.831.831 0 0 0 .065.068.626.626 0 0 0 .167.107.285.285 0 0 0 .045.029l13.106 5.145-5.754 2.184a4.382 4.382 0 1 0 .535 1.353l7.234-2.746 6.866 2.7A4.684 4.684 0 1 0 27.6 33.4l-5.39-2.113 13.613-5.164c.013-.006.021-.016.033-.021a.712.712 0 0 0 .188-.119.625.625 0 0 0 .063-.072.654.654 0 0 0 .095-.135.58.58 0 0 0 .04-.1.73.73 0 0 0 .033-.084l5.042-24.137h5.953a.728.728 0 0 0 0-1.455zM8.443 38.885a3.151 3.151 0 1 1 3.152-3.15 3.155 3.155 0 0 1-3.152 3.15zm23.1-6.3a3.151 3.151 0 1 1-3.143 3.149 3.155 3.155 0 0 1 3.148-3.152zM25.98 8.672l-.538 7.3H14.661l-.677-7.295zm-.645 8.75-.535 7.293h-9.328l-.672-7.293zM1.671 8.672h10.853l.677 7.3h-9.61zm2.3 8.75h9.362l.677 7.293H5.892zM20.2 30.5 9.175 26.17H31.6zm14.778-5.781h-8.722l.537-7.293h9.7zm1.822-8.752h-9.9l.537-7.295h10.889z",
        }),
        u.jsx("circle", { cx: "8.443", cy: "35.734", r: ".728" }),
        u.jsx("circle", { cx: "31.548", cy: "35.734", r: ".728" }),
      ],
    }),
  });
var Dv = (e) => typeof e == "function",
  qi = (e, t) => (Dv(e) ? e(t) : e),
  Av = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  xh = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  Uv = 20,
  vi = new Map(),
  bv = 1e3,
  cd = (e) => {
    if (vi.has(e)) return;
    let t = setTimeout(() => {
      vi.delete(e), In({ type: 4, toastId: e });
    }, bv);
    vi.set(e, t);
  },
  Bv = (e) => {
    let t = vi.get(e);
    t && clearTimeout(t);
  },
  va = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Uv) };
      case 1:
        return (
          t.toast.id && Bv(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === t.toast.id ? { ...i, ...t.toast } : i
            ),
          }
        );
      case 2:
        let { toast: n } = t;
        return e.toasts.find((i) => i.id === n.id)
          ? va(e, { type: 1, toast: n })
          : va(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? cd(r)
            : e.toasts.forEach((i) => {
                cd(i.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === r || r === void 0 ? { ...i, visible: !1 } : i
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((i) => i.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let o = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((i) => ({
            ...i,
            pauseDuration: i.pauseDuration + o,
          })),
        };
    }
  },
  yi = [],
  xi = { toasts: [], pausedAt: void 0 },
  In = (e) => {
    (xi = va(xi, e)),
      yi.forEach((t) => {
        t(xi);
      });
  },
  Hv = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Vv = (e = {}) => {
    let [t, n] = R.useState(xi);
    R.useEffect(
      () => (
        yi.push(n),
        () => {
          let o = yi.indexOf(n);
          o > -1 && yi.splice(o, 1);
        }
      ),
      [t]
    );
    let r = t.toasts.map((o) => {
      var i, s;
      return {
        ...e,
        ...e[o.type],
        ...o,
        duration:
          o.duration ||
          ((i = e[o.type]) == null ? void 0 : i.duration) ||
          (e == null ? void 0 : e.duration) ||
          Hv[o.type],
        style: {
          ...e.style,
          ...((s = e[o.type]) == null ? void 0 : s.style),
          ...o.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  Wv = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Av(),
  }),
  Eo = (e) => (t, n) => {
    let r = Wv(t, e, n);
    return In({ type: 2, toast: r }), r.id;
  },
  Xe = (e, t) => Eo("blank")(e, t);
Xe.error = Eo("error");
Xe.success = Eo("success");
Xe.loading = Eo("loading");
Xe.custom = Eo("custom");
Xe.dismiss = (e) => {
  In({ type: 3, toastId: e });
};
Xe.remove = (e) => In({ type: 4, toastId: e });
Xe.promise = (e, t, n) => {
  let r = Xe.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (o) => (
          Xe.success(qi(t.success, o), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          o
        )
      )
      .catch((o) => {
        Xe.error(qi(t.error, o), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var Gv = (e, t) => {
    In({ type: 1, toast: { id: e, height: t } });
  },
  Kv = () => {
    In({ type: 5, time: Date.now() });
  },
  Qv = (e) => {
    let { toasts: t, pausedAt: n } = Vv(e);
    R.useEffect(() => {
      if (n) return;
      let i = Date.now(),
        s = t.map((l) => {
          if (l.duration === 1 / 0) return;
          let a = (l.duration || 0) + l.pauseDuration - (i - l.createdAt);
          if (a < 0) {
            l.visible && Xe.dismiss(l.id);
            return;
          }
          return setTimeout(() => Xe.dismiss(l.id), a);
        });
      return () => {
        s.forEach((l) => l && clearTimeout(l));
      };
    }, [t, n]);
    let r = R.useCallback(() => {
        n && In({ type: 6, time: Date.now() });
      }, [n]),
      o = R.useCallback(
        (i, s) => {
          let {
              reverseOrder: l = !1,
              gutter: a = 8,
              defaultPosition: c,
            } = s || {},
            d = t.filter(
              (v) => (v.position || c) === (i.position || c) && v.height
            ),
            p = d.findIndex((v) => v.id === i.id),
            f = d.filter((v, y) => y < p && v.visible).length;
          return d
            .filter((v) => v.visible)
            .slice(...(l ? [f + 1] : [0, f]))
            .reduce((v, y) => v + (y.height || 0) + a, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: Gv,
        startPause: Kv,
        endPause: r,
        calculateOffset: o,
      },
    };
  },
  Yv = Dt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Xv = Dt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Jv = Dt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  Zv = pn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Yv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Xv} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Jv} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  qv = Dt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  ey = pn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${qv} 1s linear infinite;
`,
  ty = Dt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  ny = Dt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  ry = pn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ty} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ny} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  oy = pn("div")`
  position: absolute;
`,
  iy = pn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  sy = Dt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  ly = pn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${sy} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  ay = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? R.createElement(ly, null, t)
        : t
      : n === "blank"
      ? null
      : R.createElement(
          iy,
          null,
          R.createElement(ey, { ...r }),
          n !== "loading" &&
            R.createElement(
              oy,
              null,
              n === "error"
                ? R.createElement(Zv, { ...r })
                : R.createElement(ry, { ...r })
            )
        );
  },
  uy = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  cy = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  dy = "0%{opacity:0;} 100%{opacity:1;}",
  fy = "0%{opacity:1;} 100%{opacity:0;}",
  py = pn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  hy = pn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  my = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, o] = xh() ? [dy, fy] : [uy(n), cy(n)];
    return {
      animation: t
        ? `${Dt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Dt(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  gy = R.memo(({ toast: e, position: t, style: n, children: r }) => {
    let o = e.height
        ? my(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      i = R.createElement(ay, { toast: e }),
      s = R.createElement(hy, { ...e.ariaProps }, qi(e.message, e));
    return R.createElement(
      py,
      { className: e.className, style: { ...o, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: i, message: s })
        : R.createElement(R.Fragment, null, i, s)
    );
  });
xg(R.createElement);
var vy = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: o,
  }) => {
    let i = R.useCallback(
      (s) => {
        if (s) {
          let l = () => {
            let a = s.getBoundingClientRect().height;
            r(e, a);
          };
          l(),
            new MutationObserver(l).observe(s, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return R.createElement("div", { ref: i, className: t, style: n }, o);
  },
  yy = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      o = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: xh() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...o,
    };
  },
  xy = un`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Jo = 16,
  wy = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: o,
    containerStyle: i,
    containerClassName: s,
  }) => {
    let { toasts: l, handlers: a } = Qv(n);
    return R.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Jo,
          left: Jo,
          right: Jo,
          bottom: Jo,
          pointerEvents: "none",
          ...i,
        },
        className: s,
        onMouseEnter: a.startPause,
        onMouseLeave: a.endPause,
      },
      l.map((c) => {
        let d = c.position || t,
          p = a.calculateOffset(c, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          f = yy(d, p);
        return R.createElement(
          vy,
          {
            id: c.id,
            key: c.id,
            onHeightUpdate: a.updateHeight,
            className: c.visible ? xy : "",
            style: f,
          },
          c.type === "custom"
            ? qi(c.message, c)
            : o
            ? o(c)
            : R.createElement(gy, { toast: c, position: d })
        );
      })
    );
  },
  Jt = Xe;
const wh = R.createContext(void 0),
  Sy = () => {
    const [e, t] = R.useState([]),
      n = (i) => {
        t([...e, i]);
      },
      r = (i) => {
        t(e.filter((s) => s.orderId != i.orderId));
      },
      o = () => {
        t([]);
      };
    return u.jsxs(wh.Provider, {
      value: { cart: e, addToCart: n, removeFromCart: r, clearCart: o },
      children: [
        u.jsxs(ky, {
          children: [
            u.jsx(Ki, {
              to: "/",
              children: u.jsx(Cy, { children: "Paratelier" }),
            }),
            u.jsx(Ki, {
              to: "/cart",
              children: u.jsx(jy, { children: u.jsx(Ov, {}) }),
            }),
          ],
        }),
        u.jsx(wy, {}),
        u.jsx(bp, {}),
        u.jsx(Ng, { position: "bottom-right" }),
      ],
    });
  },
  Su = () => {
    const e = R.useContext(wh);
    if (!e) throw new Error("no cart context");
    return e;
  },
  ky = T.div`
  height: 80px;
  width: 100%;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,
  Cy = T.div`
  font-size: 36px;
  font-weight: 500;
`,
  jy = T.div`
  position: absolute;
  top: 16px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 60px;
  border-radius: 100%;
  transition: 0.2s;
`,
  $r = ng({ component: Sy }),
  _y = () => {
    const e = ws();
    return u.jsxs($y, {
      children: [
        "Your items are on the way 🖤",
        u.jsx(Ey, { onClick: () => e({ to: "/" }), children: "I want more" }),
      ],
    });
  },
  $y = T.div`
  width: auto;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  flex-direction: column;
  padding-bottom: 100px;
`,
  Ey = T.button`
  border-radius: 6px;
  background-color: #222;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  height: auto;
  width: auto;
  font-size: 24px;
  margin-top: 20px;
`,
  Py = jo("/successfulPurchase")({ component: _y }),
  Ry = () => {
    const { cart: e, clearCart: t } = Su(),
      n = ws(),
      [r, o] = R.useState(0),
      i = () => {
        Jt.dismiss(),
          Jt("You just got 100x more fashionable", { icon: "😉" }),
          t(),
          n({ to: "/successfulPurchase" });
      },
      s = R.useMemo(
        () => Math.max(e.map((a) => a.price).reduce((a, c) => a + c, 0) - r, 0),
        [e, r]
      ),
      l = R.useMemo(() => {
        const a = new Map();
        return (
          e.forEach((c) => {
            const d = `${c.id}-${c.selectedSize || "default"}`;
            a.has(d)
              ? (a.get(d).quantity += 1)
              : a.set(d, { item: c, quantity: 1 });
          }),
          Array.from(a.values()).sort((c, d) =>
            c.item.id.localeCompare(d.item.id)
          )
        );
      }, [e]);
    return u.jsxs(Oy, {
      children: [
        u.jsx(Fy, { children: "Checkout" }),
        u.jsxs(Ny, {
          children: [
            u.jsxs("div", {
              children: [
                u.jsxs(cl, {
                  children: [
                    u.jsx(Zo, { children: "User Information" }),
                    u.jsxs(wt, {
                      children: [
                        u.jsx("label", {
                          htmlFor: "name",
                          children: "Full Name:",
                        }),
                        u.jsx(xt, { type: "text", id: "name", name: "name" }),
                      ],
                    }),
                    u.jsxs(wt, {
                      children: [
                        u.jsx("label", {
                          htmlFor: "email",
                          children: "Email:",
                        }),
                        u.jsx(xt, {
                          type: "email",
                          id: "email",
                          name: "email",
                          required: !0,
                        }),
                      ],
                    }),
                    u.jsxs(wt, {
                      children: [
                        u.jsx("label", {
                          htmlFor: "phone",
                          children: "Phone:",
                        }),
                        u.jsx(xt, {
                          type: "tel",
                          id: "phone",
                          name: "phone",
                          required: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs(cl, {
                  children: [
                    u.jsx(Zo, { children: "Shipping Address" }),
                    u.jsxs(wt, {
                      children: [
                        u.jsx("label", {
                          htmlFor: "address",
                          children: "Address:",
                        }),
                        u.jsx(xt, {
                          type: "text",
                          id: "address",
                          name: "address",
                          required: !0,
                        }),
                      ],
                    }),
                    u.jsxs(wt, {
                      children: [
                        u.jsx("label", { htmlFor: "city", children: "City:" }),
                        u.jsx(xt, {
                          type: "text",
                          id: "city",
                          name: "city",
                          required: !0,
                        }),
                      ],
                    }),
                    u.jsxs(wt, {
                      children: [
                        u.jsx("label", {
                          htmlFor: "zipCode",
                          children: "Zip Code:",
                        }),
                        u.jsx(xt, {
                          type: "text",
                          id: "zipCode",
                          name: "zipCode",
                          required: !0,
                        }),
                      ],
                    }),
                    u.jsxs(wt, {
                      children: [
                        u.jsx("label", {
                          htmlFor: "country",
                          children: "Country:",
                        }),
                        u.jsx(xt, {
                          type: "text",
                          id: "country",
                          name: "country",
                          required: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs(cl, {
                  children: [
                    u.jsx(Zo, { children: "Payment Information" }),
                    u.jsxs(wt, {
                      children: [
                        u.jsx("label", {
                          htmlFor: "cardNumber",
                          children: "Card Number:",
                        }),
                        u.jsx(xt, {
                          type: "text",
                          id: "cardNumber",
                          name: "cardNumber",
                          required: !0,
                        }),
                      ],
                    }),
                    u.jsxs(wt, {
                      children: [
                        u.jsx("label", {
                          htmlFor: "expiryDate",
                          children: "Expiration Date:",
                        }),
                        u.jsx(xt, {
                          type: "month",
                          id: "expiryDate",
                          name: "expiryDate",
                          required: !0,
                        }),
                      ],
                    }),
                    u.jsxs(wt, {
                      children: [
                        u.jsx("label", { htmlFor: "cvv", children: "CVV:" }),
                        u.jsx(xt, {
                          type: "text",
                          id: "cvv",
                          name: "cvv",
                          required: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs(Ty, {
              children: [
                u.jsx(Zo, { children: "Order Summary" }),
                u.jsx(Iy, {
                  children: l.map((a) =>
                    u.jsxs("p", {
                      children: [
                        a.quantity,
                        " ",
                        a.item.title,
                        " ",
                        a.item.selectedSize && `- ${a.item.selectedSize}`,
                      ],
                    })
                  ),
                }),
                s >= 10 &&
                  u.jsxs(Ly, {
                    children: [
                      u.jsx("label", {
                        htmlFor: "cardNumber",
                        children: "Use Parafin credits - $10?",
                      }),
                      u.jsx(zy, {
                        type: "checkbox",
                        id: "toggle",
                        onClick: () => o(r == 0 ? 10 : 0),
                      }),
                    ],
                  }),
                u.jsxs("p", { children: ["Total Amount: $", s] }),
                u.jsx(My, { onClick: i, children: "Purchase" }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  zy = T.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  /* When checked, change the background color */
  &:checked {
    accent-color: #000;
  }
`,
  Ly = T.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`,
  Ny = T.div`
  display: flex;
  flex-direction: row;
  column-gap: 100px;
`,
  Iy = T.div`
  border: 1px solid #222;
  max-width: 60vh;
  padding: 0px 0 0 24px;
`,
  xt = T.input`
  width: 80vh;
  height: 3vh;
`,
  My = T.button`
  border-radius: 6px;
  background-color: #222;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  height: auto;
  width: 60vh;
  font-size: 24px;
`,
  wt = T.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
}`,
  Fy = T.div`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 10px;
`,
  Zo = T.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`,
  Ty = T.div`
  padding: 40px 0 0 0px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,
  cl = T.div`
  padding: 40px 0 0 80px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,
  Oy = T.div`
  padding: 32px 0 100px 80px;
`,
  Dy = jo("/checkout")({ component: Ry }),
  ya = T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 64px 200px;
`,
  Ay = ({ item: e, quantity: t, onRemove: n }) =>
    u.jsxs(Hy, {
      children: [
        u.jsx(Wy, { src: `${e.images[0]}` }),
        u.jsx(Gy, { src: `${e.solo}` }),
        u.jsx(Uy, {
          children: u.jsxs(by, {
            children: [
              u.jsxs("div", {
                children: [
                  e.title + (e.selectedSize ? " - " + e.selectedSize : ""),
                  u.jsxs(By, { children: ["Quantity: ", t] }),
                ],
              }),
              u.jsx(Vy, {
                onClick: (r) => {
                  r.stopPropagation(), n(e);
                },
                children: "-",
              }),
            ],
          }),
        }),
      ],
    }),
  Uy = T.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -418px;
`,
  by = T.div`
  display: flex;
  justify-content: space-between;
`,
  By = T.div`
  margin-top: 4px;
  font-size: 14px;
  color: #555;
`,
  Hy = T.div`
  box-sizing: border-box;
  height: 450px;
  width: 300px;
  border-radius: 16px;
  background-color: #fff;
  overflow: hidden;
`,
  Vy = T.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 24px;
`,
  Wy = T.img`
  width: 100%;
  height: 88%;
  object-fit: cover;
`,
  Gy = T.img`
  width: 100%;
  height: 88%;
  object-fit: cover;
  position: relative;
  top: -401px;
  opacity: 0;
  z-index: 2;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`,
  Ky = () => {
    const { cart: e, removeFromCart: t } = Su(),
      n = ws(),
      r = (l) => {
        Jt.dismiss(), Jt("Removed from cart", { icon: "🛒" }), t(l);
      },
      o = () => {
        n({ to: "/checkout" });
      },
      i = R.useMemo(
        () => e.map((l) => l.price).reduce((l, a) => l + a, 0),
        [e]
      ),
      s = R.useMemo(() => {
        const l = new Map();
        return (
          e.forEach((a) => {
            const c = `${a.id}-${a.selectedSize || "default"}`;
            l.has(c)
              ? (l.get(c).quantity += 1)
              : l.set(c, { item: a, quantity: 1 });
          }),
          Array.from(l.values()).sort((a, c) =>
            a.item.id.localeCompare(c.item.id)
          )
        );
      }, [e]);
    return u.jsxs(Xy, {
      children: [
        u.jsx(Qy, { children: "Cart" }),
        e.length > 0 &&
          u.jsxs(u.Fragment, {
            children: [
              u.jsx(ya, {
                children: s.map(({ item: l, quantity: a }) =>
                  u.jsx(
                    Ay,
                    { item: l, quantity: a, onRemove: r },
                    `${l.id}-${l.selectedSize || "default"}`
                  )
                ),
              }),
              u.jsxs(Jy, {
                children: [
                  "Total Price: $",
                  i,
                  u.jsx(Zy, { onClick: o, children: "Checkout" }),
                ],
              }),
            ],
          }),
        e.length == 0 &&
          u.jsxs(Yy, {
            children: [
              "Need a wardrobe upgrade?",
              u.jsx(qy, {
                onClick: () => n({ to: "/" }),
                children: "Take me shopping",
              }),
            ],
          }),
      ],
    });
  },
  Qy = T.div`
  padding: 32px 0 0 32px;
  font-size: 32px;
  font-weight: 500;
`,
  Yy = T.div`
  width: auto;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  flex-direction: column;
`,
  Xy = T.div`
  padding-bottom: 100px;
`,
  Jy = T.div`
  padding: 32px 250px 32px 32px;
  font-size: 28px;
  font-weight: 500;
  text-align: end;
  display: grid;
`,
  Zy = T.button`
  border-radius: 6px;
  background-color: #222;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  height: auto;
  width: auto;
  font-size: 24px;
  margin-left: auto;
  margin-top: 18px;
`,
  qy = T.button`
  border-radius: 6px;
  background-color: #222;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  height: auto;
  width: auto;
  font-size: 24px;
  margin-top: 10px;
`,
  ex = jo("/cart")({ component: Ky }),
  Sh = [
    {
      id: "101",
      images: ["hat3.jpg", "hat2.jpg", "hat4.jpg"],
      thumb: "hat3.jpg",
      solo: "hat4.jpg",
      title: "Mint cream cap",
      description: "Bring a touch of quiet luxury to any look.",
      price: 25,
    },
    {
      id: "102",
      images: ["yeti1.jpg", "yeti2.jpg"],
      thumb: "yeti1.jpg",
      solo: "yeti2.jpg",
      title: "Yeti Tumbler",
      description:
        "Ultra durable. Built for peak performance and every-day use. ",
      price: 50,
    },
    {
      id: "110",
      images: ["blackshirt1.jpg", "blackshirt2.jpg"],
      thumb: "blackshirt1.jpg",
      solo: "blackshirt2.jpg",
      title: "The Davis Tee",
      description: "Classic yet stylish streetwear",
      sizeOptions: ["small", "medium", "large", "xl"],
      price: 45,
    },
    {
      id: "103",
      images: ["notebook.jpg", "happynotebook.jpg"],
      thumb: "happynotebook.jpg",
      solo: "notebook.jpg",
      title: "Joyous Tabula",
      description: "You feel so happy - so much you're already smiling.",
      price: 15,
    },
    {
      id: "121",
      images: ["arcteryx1.jpg", "arcteryx2.jpg", "arcteryx3.jpg"],
      thumb: "arcteryx1.jpg",
      solo: "arcteryx3.jpg",
      title: "Matt-teryx Jacket",
      description: "All-weather all-terrain luxury jacket",
      sizeOptions: ["small", "medium", "large", "xl"],
      price: 200,
    },
    {
      id: "108",
      images: [
        "creamsweater1.jpg",
        "creamsweater2.jpg",
        "creamsweatersolo.jpg",
      ],
      thumb: "creamsweater1.jpg",
      solo: "creamsweatersolo.jpg",
      title: "Parafin FC Pullover",
      description: "isn't josh so handsome ❤️",
      sizeOptions: ["small", "medium", "large", "xl"],
      price: 45,
    },
    {
      id: "109",
      images: ["candle1.jpg", "candle2.jpg"],
      thumb: "candlethumb.jpg",
      solo: "candle2.jpg",
      title: "Hand Poured Candle",
      description: "Hand-poured in-house by new Parafin hires.",
      price: 8,
    },
    {
      id: "104",
      images: ["mayagreyshirt.jpg", "mayagreyshirt2.jpg"],
      thumb: "mayagreyshirt.jpg",
      solo: "mayagreyshirt2.jpg",
      title: "The Original",
      description: "Simplicity brings many pleasures.",
      sizeOptions: ["small", "medium", "large", "xl"],
      price: 25,
    },
    {
      id: "105",
      images: ["parafinhacks.jpg", "parafinhacks1.jpg"],
      thumb: "parafinhacks.jpg",
      solo: "parafinhacks1.jpg",
      title: "Hacking Space",
      description: "From the 2024 Spring Collection.",
      sizeOptions: ["small", "medium", "large", "xl"],
      price: 25,
    },
    {
      id: "107",
      images: ["greensweater1.jpg", "greensweater2.jpg", "greensweater3.jpg"],
      thumb: "greensweater1.jpg",
      solo: "greensweater2.jpg",
      title: "Forest Green Jumper",
      description: "Trademark green jumper",
      sizeOptions: ["small", "medium", "large", "xl"],
      price: 50,
    },
    {
      id: "131",
      images: ["sweatpants1.jpg", "sweatpants2.jpg"],
      thumb: "sweatpants1.jpg",
      solo: "sweatpants2.jpg",
      title: "Limited Edition Sweatpants",
      description: "From Parafin's Luxury Fitness Line",
      sizeOptions: ["small", "medium", "large", "xl"],
      price: 80,
    },
    {
      id: "120",
      images: ["babytee1.jpg", "babytee2.jpg"],
      thumb: "babytee1.jpg",
      solo: "babytee2.jpg",
      title: "Next Gen Onesie",
      sizeOptions: ["small", "medium", "large", "xl"],
      description: "For the next generation of creators",
      price: 50,
    },
    {
      id: "106",
      images: ["backpack1.jpg", "backpack2.jpg"],
      thumb: "backpack1.jpg",
      solo: "backpack2.jpg",
      title: "Nema Backpack",
      description: "Exclusively from our winter 2024 collection",
      price: 110,
    },
  ],
  tx = [
    {
      id: "200",
      images: ["blackstreetwear.jpg"],
      thumb: "blackstreetwear.jpg",
      solo: "comingsoon.jpg",
      title: "Obsidean wear",
      description: "Oversied",
      price: 50,
      released: !1,
    },
    {
      id: "201",
      images: ["bluewindbreaker.jpg"],
      thumb: "bluewindbreaker.jpg",
      solo: "comingsoon.jpg",
      title: "Royal Windbreaker",
      description: "Alaskan influence with dual layer insulation",
      price: 80,
      released: !1,
    },
    {
      id: "202",
      images: ["parafinhoodie.jpg"],
      thumb: "parafinhoodie.jpg",
      solo: "comingsoon.jpg",
      title: "Cobalt pullover hoodie",
      description: "Oversied",
      price: 50,
      released: !1,
    },
  ],
  nx = ({ item: e, size: t }) =>
    u.jsx(Ki, {
      to: "/item/$itemId",
      params: { itemId: e.id },
      children: u.jsxs(kh, {
        children: [
          u.jsx(ix, { src: `${e.thumb}` }),
          u.jsx($h, { src: `${e.solo}` }),
          u.jsxs(Ch, {
            children: [
              u.jsx(jh, { children: e.title + (t ? " " + t : "") }),
              e.released !== !1 && u.jsxs(_h, { children: ["$", e.price] }),
            ],
          }),
        ],
      }),
    }),
  rx = ({ item: e, size: t }) =>
    u.jsxs(kh, {
      children: [
        u.jsx(ox, { src: `${e.thumb}` }),
        u.jsx($h, { src: `${e.solo}` }),
        u.jsxs(Ch, {
          children: [
            u.jsx(jh, { children: e.title + (t ? " " + t : "") }),
            e.released !== !1 && u.jsxs(_h, { children: ["$", e.price] }),
          ],
        }),
      ],
    }),
  kh = T.div`
  box-sizing: border-box;
  height: 450px;
  width: 300px;
  border-radius: 16px;
  background-color: #fff;
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.08);
  }
`,
  Ch = T.div`
  padding: 0px 16px;
  position: relative;
  top: -408px;
  display: flex;
  flex-direction: row;
`,
  jh = T.p`
  width: 100%;
  text-align: left;
`,
  _h = T.p`
  text-align: right;
`,
  ox = T.img`
  width: 100%;
  height: 88%;
  object-fit: cover;
  opacity: 0.7; /* Set initial opacity for a faded look */
  transition: opacity 0.2s ease-in-out; /* Smooth transition for opacity change */

  &:hover {
    opacity: 0.5; /* Further fades out on hover */
  }
`,
  ix = T.img`
  width: 100%;
  height: 88%;
  object-fit: cover;
`,
  $h = T.img`
  width: 100%;
  height: 88%;
  object-fit: cover;
  position: relative;
  top: -401px;
  opacity: 0;
  z-index: 2;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`,
  sx = () =>
    u.jsxs(lx, {
      children: [
        u.jsx(ya, { children: Sh.map((e) => u.jsx(nx, { item: e }, e.id)) }),
        u.jsx(ax, { children: "Anticipated drops" }),
        u.jsx(ya, { children: tx.map((e) => u.jsx(rx, { item: e }, e.id)) }),
        u.jsxs(cx, {
          children: [
            u.jsxs(hx, {
              children: [
                u.jsx(fx, { children: "Created at" }),
                u.jsx(px, { src: "camp.png" }),
              ],
            }),
            u.jsx(dx, {
              children: u.jsx("a", {
                href: "https://parafin.com",
                target: "_blank",
                children: "Parafin ↗",
              }),
            }),
          ],
        }),
      ],
    }),
  lx = T.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  display: flex;
  flex-wrap: wrap;
`,
  ax = T.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
`,
  ux = jo("/")({ component: sx }),
  cx = T.div`
  height: 200px;
  width: 100%;
  background-color: #eeeeee;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0px;
`,
  dx = T.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,
  fx = T.div`
  font-size: 24px;
  font-weight: 500;
  display: inline-block;
`,
  px = T.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`,
  hx = T.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`,
  mx = () =>
    u.jsx("svg", {
      enableBackground: "new 0 0 256 256",
      height: "36px",
      id: "Layer_1",
      version: "1.1",
      viewBox: "0 0 256 256",
      width: "36px",
      xmlSpace: "preserve",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      children: u.jsx("path", {
        d: "M91.474,33.861l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051l89.6,89.6c2.5,2.5,6.551,2.5,9.051,0s2.5-6.742,0-9.242L21.849,134  H249.6c3.535,0,6.4-2.466,6.4-6s-2.865-6-6.4-6H21.849l78.676-78.881c1.25-1.25,1.875-2.993,1.875-4.629s-0.625-3.326-1.875-4.576  C98.024,31.413,93.974,31.361,91.474,33.861z",
      }),
    }),
  ke = [];
for (let e = 0; e < 256; ++e) ke.push((e + 256).toString(16).slice(1));
function gx(e, t = 0) {
  return (
    ke[e[t + 0]] +
    ke[e[t + 1]] +
    ke[e[t + 2]] +
    ke[e[t + 3]] +
    "-" +
    ke[e[t + 4]] +
    ke[e[t + 5]] +
    "-" +
    ke[e[t + 6]] +
    ke[e[t + 7]] +
    "-" +
    ke[e[t + 8]] +
    ke[e[t + 9]] +
    "-" +
    ke[e[t + 10]] +
    ke[e[t + 11]] +
    ke[e[t + 12]] +
    ke[e[t + 13]] +
    ke[e[t + 14]] +
    ke[e[t + 15]]
  ).toLowerCase();
}
let dl;
const vx = new Uint8Array(16);
function yx() {
  if (!dl) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    dl = crypto.getRandomValues.bind(crypto);
  }
  return dl(vx);
}
const xx =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  dd = { randomUUID: xx };
function wx(e, t, n) {
  if (dd.randomUUID && !t && !e) return dd.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || yx)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), gx(r);
}
const Sx = () => {
    const { addToCart: e } = Su(),
      { itemId: t } = Op({ from: "/item/$itemId" }),
      n = Sh.find((a) => a.id === t),
      [r, o] = R.useState(0),
      [i, s] = R.useState(null);
    if (!n) throw new Error("item not found");
    const l = () => {
      if (n.sizeOptions && !i) {
        Jt.dismiss(), Jt.error("Please select a size");
        return;
      }
      Jt.dismiss(),
        Jt("Added to cart", { icon: "🛒" }),
        e({ ...n, selectedSize: i, orderId: wx() });
    };
    return u.jsxs(jx, {
      children: [
        u.jsx(Ki, {
          to: "/",
          children: u.jsx(_x, { children: u.jsx(mx, {}) }),
        }),
        u.jsx(Px, {
          children: n.images.map((a, c) =>
            u.jsx(
              $x,
              { onClick: () => o(c), children: u.jsx(Ex, { src: `${a}` }) },
              c
            )
          ),
        }),
        u.jsx(Rx, { src: `${n.images[r]}` }),
        u.jsxs(zx, {
          children: [
            u.jsx(Lx, { children: n.title }),
            u.jsx(Nx, { children: n.description }),
            n.released != !1 && u.jsxs(Ix, { children: ["$ ", n.price] }),
            n.sizeOptions &&
              u.jsxs(Cx, {
                children: [
                  u.jsx(kx, { children: "Select a size:" }),
                  n.sizeOptions.map((a) =>
                    u.jsx(
                      "button",
                      {
                        style: {
                          padding: "10px 20px",
                          fontSize: "16px",
                          border: i === a ? "3px solid #222" : "1px solid #222",
                          borderRadius: "4px",
                          cursor: "pointer",
                          outline: "none",
                        },
                        onClick: () => s(a),
                        children: a,
                      },
                      a
                    )
                  ),
                ],
              }),
            u.jsx(Mx, { onClick: l, children: "Add to cart" }),
          ],
        }),
      ],
    });
  },
  kx = T.div`
  margin: auto;
  font-size: 16px;
  font-weight: 400px;
`,
  Cx = T.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
`,
  jx = T.div`
  display: flex;
  padding: 32px;
  gap: 32px;
`,
  _x = T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  transition: 0.2s;
`,
  $x = T.div`
  box-sizing: border-box;
  height: 100px;
  width: 100px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  transition: 0.1s;

  &:hover {
    outline: 4px solid gray;
  }
`,
  Ex = T.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,
  Px = T.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,
  Rx = T.img`
  height: 600px;
  border-radius: 16px;
`,
  zx = T.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,
  Lx = T.div`
  font-size: 32px;
  font-weight: 500;
`,
  Nx = T.div`
  font-size: 16px;
  font-weight: 700;
`,
  Ix = T.div`
  font-size: 16px;
  font-weight: 400;
`,
  Mx = T.button`
  border-radius: 6px;
  background-color: #222;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding-left: 25px;
  padding-right: 25px;
  height: 40px;
  width: 140px;
`,
  Fx = jo("/item/$itemId")({ component: Sx }),
  Tx = Py.update({
    id: "/successfulPurchase",
    path: "/successfulPurchase",
    getParentRoute: () => $r,
  }),
  Ox = Dy.update({
    id: "/checkout",
    path: "/checkout",
    getParentRoute: () => $r,
  }),
  Dx = ex.update({ id: "/cart", path: "/cart", getParentRoute: () => $r }),
  Ax = ux.update({ id: "/", path: "/", getParentRoute: () => $r }),
  Ux = Fx.update({
    id: "/item/$itemId",
    path: "/item/$itemId",
    getParentRoute: () => $r,
  }),
  bx = {
    IndexRoute: Ax,
    CartRoute: Dx,
    CheckoutRoute: Ox,
    SuccessfulPurchaseRoute: Tx,
    ItemItemIdRoute: Ux,
  },
  Bx = $r._addFileChildren(bx)._addFileTypes(),
  Hx = G1({ routeTree: Bx, defaultPreload: "intent" }),
  fd = document.getElementById("app");
fd.innerHTML || fl.createRoot(fd).render(u.jsx(fg, { router: Hx }));
