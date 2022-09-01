var aa = B("#variations a"),
  D = w.getComputedStyle(C("form input[type=submit]")).backgroundColor,
  J = d.documentElement,
  L = "rtl" === w.getComputedStyle(J).direction,
  ba = /iPad|iPhone|iPod/.test(navigator.userAgent) && !w.MSStream,
  ca = L ? "\u200e" : "",
  da = Math.max(J.clientHeight, J.scrollHeight, J.offsetHeight),
  ea = [];
function fa(c) {
  ea.forEach(function (a) {
    a(c);
  });
}
M(d, fa);
function ha(c) {
  function a(r) {
    k = k || r;
    r -= k;
    var t = r / 300;
    var g = 2;
    1 > t ? (g = 0) : (t -= 2);
    w.scrollTo(0, ((e + c < f ? c : f - e) / 2) * (t * t * t + g) + e);
    600 > r && requestAnimationFrame(a);
  }
  var e = w.pageYOffset,
    f = da - w.innerHeight,
    k;
  requestAnimationFrame(a);
}
function ia(c, a, e) {
  var f = N("button");
  f.innerHTML = a ? a : '<img src="/'.concat(c, '.svg">');
  c && (f.id = c);
  e && (f.style.backgroundColor = e);
  return f;
}
function ja(c, a) {
  c.style.backgroundColor = "#" + a;
  c.href = "/" + a;
  c.innerHTML = "" + ca + "#" + a;
  c.style.color = ka(la(a)) ? ma : na;
}
function oa(c) {
  return c.textContent.replace(ca, "").substr(1);
}
function pa(c, a) {
  return setTimeout(c, a);
}
function Q(c) {
  return Math.round(c);
}
function R(c, a, e, f) {
  var k = f ? !1 : { passive: !0 };
  a.split(" ").forEach(function (r) {
    c.addEventListener(r, e, k);
  });
}
function M(c, a, e) {
  R(c, "click", a, e);
}
function qa(c, a) {
  R(c, "transitionend", a);
}
function N(c) {
  return d.createElement(c);
}
function B(c, a) {
  return (a || d).querySelectorAll(c);
}
function C(c, a) {
  return B(c, a)[0];
}
function ra(c) {
  for (var a = "", e = 0; e < c; ++e) a += "0";
  return a;
}
(function () {
  if (!d.cookie || -1 === (" " + d.cookie).indexOf(" consent=1")) {
    var c = N("div");
    c.id = "consent";
    c.innerHTML =
      '<p>We use cookies to give you the best experience. If you continue to use this site we assume that you are happy with it (<a href="/privacy-policy">privacy policy</a>)<p><button>OK</button>';
    var a = C("button", c);
    a.style.backgroundColor = D;
    M(a, function () {
      var e = new Date();
      e.setTime(e.getTime() + 31536e6);
      document.cookie = "consent=1; expires=" + e.toUTCString() + "; path=/";
      c.style.display = "none";
    });
    C("body").appendChild(c);
  }
})();
R(w, "DOMContentLoaded resize", function () {
  da = Math.max(J.clientHeight, J.scrollHeight, J.offsetHeight);
});
function sa(c) {
  if (!c) return -w.pageYOffset;
  c = C("#" + c);
  w.getComputedStyle(c);
  var a = c.getBoundingClientRect();
  c = w.innerHeight - a.height;
  a = a.top;
  0 < c && (a -= c / 2);
  return a;
}
(function () {
  var c = ia("top", null, D);
  C("img", c).alt = "^";
  var a;
  M(c, function () {
    ha(sa());
  });
  R(w, "scroll", function () {
    (a = w.pageYOffset > J.clientHeight)
      ? ((c.style.transform = "translateX(0)"), (c.style.opacity = ".8"))
      : (c.style.opacity = "");
  });
  qa(c, function () {
    a || (c.style.transform = "translateX(200%)");
  });
  C("body").appendChild(c);
})();
var na = "#fff",
  ma = "#333",
  S,
  T = [0, 0, 0],
  ta = [0, 0, 0];
function ua(c, a) {
  return Math.floor(Math.random() * (a - c + 1) + c);
}
function ka(c) {
  return 135 < (299 * c[0] + 587 * c[1] + 114 * c[2]) / 1e3;
}
function va(c) {
  var a = c.indexOf("("),
    e = c.lastIndexOf(")");
  if (-1 === a || -1 === e) return null;
  var f = [0, 0, 0];
  c.substring(a + 1, e)
    .split(/\s*,\s*/g)
    .forEach(function (k, r) {
      f[r] = +k;
    });
  return f;
}
function wa(c) {
  c = c.trim();
  "#" === c.charAt(0) && (c = c.substr(1));
  var a = c.length;
  return (6 === a || 3 === a) && /^[a-fA-F0-9]+$/.test(c);
}
function xa() {
  var c = S;
  return c[0] === c[1] && c[2] === c[3] && c[4] === c[5]
    ? c[0] + c[2] + c[4]
    : c;
}
function la(c) {
  return [
    parseInt(c.substring(0, 2), 16),
    parseInt(c.substring(2, 4), 16),
    parseInt(c.substring(4, 6), 16),
  ];
}
function U(c) {
  return (16777216 | (c[0] << 16) | (c[1] << 8) | c[2]).toString(16).substr(1);
}
function za(c) {
  var a = c[0] / 255,
    e = c[1] / 255;
  c = c[2] / 255;
  var f = Math.max(a, e, c),
    k = Math.min(a, e, c),
    r = (f + k) / 2;
  if (f === k) return [0, 0, 100 * r];
  var t = f - k,
    g = 0;
  switch (f) {
    case a:
      g = (e - c) / t + (e < c ? 6 : 0);
      break;
    case e:
      g = (c - a) / t + 2;
      break;
    case c:
      g = (a - e) / t + 4;
  }
  return [
    (g / 6) * 360,
    100 * (0.5 < r ? t / (2 - f - k) : t / (f + k)),
    100 * r,
  ];
}
function V(c) {
  var a = c[2] / 100;
  if (0 === c[1]) return (a = Q(255 * a)), [a, a, a];
  var e = c[0] / 360;
  c = c[1] / 100;
  c = 0.5 > a ? a * (1 + c) : a + c - a * c;
  a = 2 * a - c;
  return [
    Q(255 * Aa(a, c, e + 1 / 3)),
    Q(255 * Aa(a, c, e)),
    Q(255 * Aa(a, c, e - 1 / 3)),
  ];
}
function Ba(c) {
  return "hsl("
    .concat(Q(c[0]), ",")
    .concat(Q(c[1]), "%,")
    .concat(Q(c[2]), "%)");
}
function Ca(c, a, e) {
  var f = "",
    k = c[0],
    r = c[1];
  c = c[2];
  var t = e + 1,
    g = (a[0] - k) / t,
    u = (a[1] - r) / t;
  a = (a[2] - c) / t;
  for (t = 0; t < e; t++) (k += g), (r += u), (c += a), (f += U(V([k, r, c])));
  return f;
}
function Da(c) {
  var a = Ea,
    e = "",
    f = a[2],
    k = (c / 120) * f;
  f -= ((c + 1) / 2) * k;
  for (var r = 0; r < c; r++)
    (f += k), (e += U(V([a[0], a[1], 100 < f ? 100 : f])));
  return e;
}
function Aa(c, a, e) {
  0 > e ? (e += 1) : 1 < e && --e;
  return e < 1 / 6
    ? c + 6 * (a - c) * e
    : 0.5 > e
    ? a
    : e < 2 / 3
    ? c + (a - c) * (2 / 3 - e) * 6
    : c;
}
function Fa(c) {
  for (var a = Ea.slice(), e = "", f = 0; f < c.length; f++) {
    var k = a[0];
    for (k += c[f]; 360 <= k; ) k -= 360;
    for (; 0 > k; ) k += 360;
    a[0] = k;
    e += U(V(a));
  }
  return e;
}
(function () {
  function c(x) {
    f.value = x;
    f.select();
    d.execCommand("copy");
  }
  function a(x) {
    var v = x.href.lastIndexOf("/");
    if (-1 !== v && ((x = x.href.substr(v + 1)), /^[a-fA-F0-9]{6}$/.test(x)))
      return x;
  }
  function e(x) {
    function v(G) {
      var H = x[G],
        K = ia(
          null,
          '<svg viewBox="0 0 26.2 32"><path d="M20 13.6l-7.5-7.3c-.2-.3-.5-.5-.9-.5H1.2C.5 5.8 0 6.4 0 7V31c0 .6.5 1.1 1.2 1.1h18c.6 0 1.2-.5 1.2-1.1V14.8c0-.5-.1-.9-.5-1.2zm-7.2-3.8l3.6 3.6h-3.6zM18 29.7H2.3V8.2h8.2v6.2a1.2 1.2 0 0 0 .3 1c.3.3.7.4 1 .3H18z"/><path d="M25.7 7.8L18.4.5c-.3-.3-.6-.5-1-.5H7a1.2 1.2 0 0 0-1.2 1.2v3.2h2.3v-2h8.2V7L19 9.9h4.7v14h-2v2.3H25c.3 0 .6-.1.8-.3s.4-.6.4-.9V9c0-.5-.1-1-.5-1.2zm-7-.2V4l3.5 3.6z"/></svg>',
          D
        );
      M(K, function (z) {
        for (var I = "", O = 0; O < H.childNodes.length; O++)
          0 < O && (I += " "), (I += a(H.childNodes[O].firstChild));
        f.style.top = w.pageYOffset + z.clientY + "px";
        c(I);
      });
      x[G].previousSibling.appendChild(K);
    }
    for (var A = 0; A < x.length; A++) v(A);
  }
  if (!m) {
    var f = N("input"),
      k = ia(
        "copy",
        '<svg viewBox="0 0 26.2 32"><path d="M20 13.6l-7.5-7.3c-.2-.3-.5-.5-.9-.5H1.2C.5 5.8 0 6.4 0 7V31c0 .6.5 1.1 1.2 1.1h18c.6 0 1.2-.5 1.2-1.1V14.8c0-.5-.1-.9-.5-1.2zm-7.2-3.8l3.6 3.6h-3.6zM18 29.7H2.3V8.2h8.2v6.2a1.2 1.2 0 0 0 .3 1c.3.3.7.4 1 .3H18z"/><path d="M25.7 7.8L18.4.5c-.3-.3-.6-.5-1-.5H7a1.2 1.2 0 0 0-1.2 1.2v3.2h2.3v-2h8.2V7L19 9.9h4.7v14h-2v2.3H25c.3 0 .6-.1.8-.3s.4-.6.4-.9V9c0-.5-.1-1-.5-1.2zm-7-.2V4l3.5 3.6z"/></svg>'
      ),
      r = B("path", k),
      t = B("li > a"),
      g = C("body");
    f.id = "copyInput";
    var u;
    M(k, function (x) {
      f.style.top = w.pageYOffset + x.clientY + "px";
      c(u);
    });
    g.appendChild(f);
    g.appendChild(k);
    e(B("#schemes h2+ol"));
    e(B("#schemes h3+ol"));
    g = w.getComputedStyle(k);
    var y = parseInt(g.width),
      E = y + y / 3.5,
      F = parseInt(g.height) / 2;
    g = function (x) {
      var v = t[x];
      if (v.hostname !== w.location.hostname || !a(v)) return "continue";
      R(v, "mouseover", function () {
        var A = a(v),
          G = v.getBoundingClientRect(),
          H = G.left + (L ? E : G.width - E) + "px";
        k.style.top = w.pageYOffset + G.top + G.height / 2 - F + "px";
        k.style.left = H;
        u = A;
        k.style.display = "block";
        G = ka(la(A))
          ? ["#fff", "rgba(51,51,51,.8)"]
          : ["#333", "rgba(255,255,255,.8)"];
        A = G[0];
        G = G[1];
        r[0].style.fill = A;
        r[1].style.fill = A;
        k.style.backgroundColor = G;
      });
      R(v, "mouseout", function (A) {
        A = d.elementFromPoint(A.clientX, A.clientY);
        A !== k && A !== v && (k.style.display = "none");
      });
    };
    for (y = 0; y < t.length; y++) g(y);
  }
})();
for (
  var Ga = N("p"),
    Ha = [
      '0 0 20 16"><path d="M18 0H2A2 2 0 0 0 .01 2L0 14c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 4l-8 5-8-5V2l8 5 8-5z"/><path fill="none" d="M-2-4h24v24H-2z',
    ],
    Ia = Ha.length - 1,
    Ja = [["eepurl.com/gck5Ab", nl]],
    Ka = "",
    W = 0;
  W <= Ia;
  W++
)
  0 < W && (Ka += " "),
    (Ka += '<a href="//'
      .concat(Ja[W][0], '" title="')
      .concat(Ja[W][1], '" rel=nofollow><svg viewBox="')
      .concat(
        Ha[W].replace("<path", '<path fill="'.concat(D, '"')),
        '"/></svg>'
      )
      .concat(W === Ia ? " <small>".concat(nl, "</small>") : "", "</a>"));
Ga.innerHTML = Ka;
var La = C("header>nav");
La.parentNode.insertBefore(Ga, La.nextSibling);
var Oa = (function () {
    function c(a) {
      function e() {
        f.input.readOnly && ((f.input.readOnly = !1), (f.input.value = ""));
      }
      var f = this;
      this.P = C("header form");
      this.W = C("p", this.P).style;
      this.X = C("input[type=submit]", this.P).style;
      this.form = C("form");
      var k = va(w.getComputedStyle(C("input", this.form)).backgroundColor);
      S = U(k);
      T = la(S);
      ta = za(T);
      this.options = a ? a : {};
      this.open = a.Y;
      this.B = T;
      this.i = ta;
      this.form = C("form");
      this.input = C("input[type=search]", this.form);
      var r = this.value();
      this.input.readOnly = wa(r) && !this.options.D;
      ba && (this.input.className = "hideCancel");
      R(
        this.form,
        "submit",
        function (g) {
          f.submit(g, r);
        },
        !0
      );
      this.j = N("div");
      var t = this.j.style;
      a.Y
        ? ((this.j.className = "show"),
          (t.position = "static"),
          (t.transform = "translateY(0)"))
        : (ea.push(function () {
            f.close();
          }),
          (t.transform = "translateY(-1000%)"));
      R(this.input, "paste", e);
      R(
        this.input,
        "keypress",
        function (g) {
          13 === g.keyCode ? f.submit(g, r) : e();
        },
        !0
      );
      M(this.input, function (g) {
        g.stopPropagation();
        !f.options.D && f.open
          ? (f.input.readOnly = !1)
          : (fa(g),
            (t.transform = "translateY(0)"),
            (f.j.className = "show"),
            (f.open = !0));
      });
      qa(this.j, function () {
        f.open || (t.transform = "translateY(-1000%)");
      });
      M(this.j, function (g) {
        g.stopPropagation();
      });
      R(
        d,
        "selectstart",
        function (g) {
          if (f.active) return g.preventDefault(), !1;
        },
        !0
      );
      this.A = N("div");
      this.A.innerHTML =
        '<canvas></canvas><ul><li><p><svg viewBox="0 0 32 32"><g transform="matrix(1.23 0 0 1.23 -187 -839)"><path fill="'
          .concat(
            D,
            '" d="m152 682v26h26v-26zm2 24v-22h22z"/></g></svg></p><p><input type=range min=0 max=100 step=1 value='
          )
          .concat(
            this.i[1],
            '></p></li><li><p><svg viewBox="0 0 32 32"><path fill="'
          )
          .concat(
            D,
            '" d="M16.02 7.12c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9-4-8.9-8.9-8.9zm-7.12 8.9c0-3.92 3.2-7.12 7.12-7.12v14.24c-3.92 0-7.12-3.2-7.12-7.12zM15.3 0h1.43v5.34H15.3zm11.4 15.3h5.34v1.43H26.7zM0 15.3h5.34v1.43H0zm15.3 11.4h1.43v5.34H15.3zM5.2 4.2l3.78 3.77-1 1-3.8-3.77zm21.63 0l1 1-3.77 3.78-1-1zM5.2 27.77l-1.02-1L7.96 23l1 1zm21.64.2l-3.78-3.78 1-1.04 3.8 3.78z"/></svg></p><p><input type=range min=0 max=100 step=1 value='
          )
          .concat(this.i[2], "></p></li></ul>");
      this.canvas = C("canvas", this.A);
      this.V(B("input", this.A));
      R(
        this.canvas,
        "touchstart",
        function (g) {
          g.preventDefault();
          f.input.readOnly = !f.options.D;
        },
        !0
      );
      R(this.canvas, "touchmove", function (g) {
        var u = f.canvas.getBoundingClientRect();
        f.K(Q(g.touches[0].clientX - u.left), Q(g.touches[0].clientY - u.top));
      });
      R(this.canvas, "mousedown", function (g) {
        f.active = !0;
        f.K(g.offsetX, g.offsetY);
      });
      R(this.canvas, "mousemove", function (g) {
        f.active && f.K(g.offsetX, g.offsetY);
      });
      R(this.canvas, "mouseup", function () {
        f.active = !1;
      });
      this.v = N("div");
      this.v.style.display = "none";
      this.j.appendChild(this.A);
      this.form.appendChild(this.j);
      m ||
        ((a = N("p")),
        (a.innerHTML = "<button class=active>"
          .concat(p, "</button> <button>")
          .concat(s, "</button>")),
        (this.u = B("button", a)),
        this.j.appendChild(this.v),
        this.j.appendChild(a),
        this.U());
      R(this.input, "input", function (g) {
        f.T(g.target);
      });
      R(w, "resize", function () {
        f.O();
      });
      this.O();
    }
    c.prototype.submit = function (a, e) {
      var f = this.value();
      "" === f
        ? a.preventDefault()
        : this.options.Z
        ? f === e && a.preventDefault()
        : wa(w.location.pathname.substr(1)) && f === e
        ? a.preventDefault()
        : ((e = f.length),
          (6 !== e && 3 !== e) ||
            !f.match(/^[a-f0-9]+$/i) ||
            (a.preventDefault(),
            3 === e &&
              ((a = f.charAt(0)),
              (e = f.charAt(1)),
              (f = f.charAt(2)),
              (f = a + a + e + e + f + f)),
            (w.location.href = "/" + f)));
    };
    c.prototype.value = function (a) {
      var e = this.input.value.trim();
      return a ? e : e.toLowerCase();
    };
    c.prototype.V = function (a) {
      function e(r) {
        R(k.o[r], "mousedown mousemove touchstart touchmove", function (t) {
          if (f.active || ("touchmove" !== t.type && "mousemove" !== t.type))
            (f.active = !0), (f.input.readOnly = !f.options.D);
        });
        R(k.o[r], "input", function (t) {
          t = +t.target.value;
          0 < r
            ? ((f.i[2] = t), (f.B = V(f.i)), f.L(f.B), f.S())
            : (f.setColor(!0), f.G(t), f.R());
        });
        R(k.o[r], "mouseup touchend", function () {
          f.active = !1;
        });
      }
      var f = this;
      this.o = [a[0], a[1]];
      this.H();
      var k = this;
      for (a = 0; a < this.o.length; a++) e(a);
    };
    c.prototype.close = function () {
      this.open &&
        ((this.j.className = ""),
        (this.open = this.active = !1),
        (this.input.readOnly = !this.options.D));
    };
    c.prototype.U = function () {
      function a(g) {
        var u = 0 === g ? 1 : 0;
        u
          ? ((e.v.style.display = "none"), (e.A.style.display = "block"))
          : ((e.v.style.display = "table-cell"), (e.A.style.display = "none"));
        g = e.u[g];
        u = e.u[u];
        var y = g.style.color,
          E = u.style.color,
          F = g.style.backgroundColor,
          x = u.style.backgroundColor;
        g.className = "active";
        g.style.color = E;
        g.style.backgroundColor = x;
        u.className = "";
        u.style.color = y;
        u.style.backgroundColor = F;
      }
      var e = this,
        f = N("div");
      f.style.display = "none";
      this.form.appendChild(f);
      var k;
      M(
        this.u[0],
        function (g) {
          g.preventDefault();
          "active" !== e.u[0].className &&
            (k && ((k = !1), (e.F = null), e.G(+e.o[0].value), e.H()), a(0));
        },
        !0
      );
      var r, t;
      M(
        this.u[1],
        function (g) {
          g.preventDefault();
          "active" !== e.u[1].className &&
            (r === S
              ? a(1)
              : r
              ? Ma({ hex: S }, function (u) {
                  r = S;
                  a(1);
                  e.N(u);
                })
              : ((g = w.getComputedStyle(e.A)),
                (e.v.style.height =
                  parseInt(g.height) + parseInt(g.marginBottom) + "px"),
                (e.v.style.width = g.width),
                Ma({ hex: S }, function (u) {
                  function y(E) {
                    R(e.C[E], "input", function () {
                      clearTimeout(t);
                      t = pa(function () {
                        for (
                          var F = B("input", e.C[E].parentNode),
                            x = {},
                            v,
                            A = 0;
                          A < F.length;
                          A++
                        ) {
                          var G = F[A],
                            H = G.id.split("_"),
                            K = H[0];
                          H = H[1];
                          x.hasOwnProperty(K) || ((x[K] = {}), (v = K));
                          x[K][H] = +G.value;
                        }
                        Ma(x, function (z) {
                          e.N(z, v);
                          r = z.hex;
                          e.o[0].value = Math.floor(100 * z.hsl.s).toString();
                          k = !0;
                        });
                      }, 300);
                    });
                  }
                  a(1);
                  r = S;
                  e.v.innerHTML = Na(u);
                  e.C = B("input", e.v);
                  for (u = 0; u < e.C.length; u++) y(u);
                })));
        },
        !0
      );
    };
    c.prototype.N = function (a, e) {
      for (var f = 0; f < this.C.length; f++) {
        var k = this.C[f],
          r = k.id.split("_"),
          t = r[0];
        t !== e && (k.value = parseFloat(a[t][r[1]]).toFixed(2));
      }
      e = a.rgb;
      e = [e.r, e.g, e.b];
      this.input.value = a.hex;
      this.L(e);
      this.I(e);
    };
    c.prototype.O = function () {
      var a = parseInt(
          w.getComputedStyle(C("input[type=submit]", this.form)).paddingLeft
        ),
        e = Math.round(C("p", this.form).getBoundingClientRect().width);
      this.j.style.width = e + "px";
      this.width = e - a;
      this.height = Math.round(e / 3);
      this.G(+this.o[0].value);
    };
    c.prototype.T = function (a) {
      var e = a.value;
      e = wa(e)
        ? 3 === e.length
          ? e[0] + e[0] + e[1] + e[1] + e[2] + e[2]
          : e
        : void 0;
      if (e) {
        var f = la(e);
        this.i = za(f);
        a.style.backgroundColor = "#" + e;
        a.style.color = ka(f) ? ma : na;
        this.G(+(this.o[0].value = String(za(f)[1])));
        this.H();
        this.I(f, !0);
      }
    };
    c.prototype.H = function () {
      this.S();
      this.R();
    };
    c.prototype.M = function (a) {
      var e = this.i.slice();
      e[a] = 0;
      var f = Ba(e);
      e[a] = 100;
      return [f, Ba(e)];
    };
    c.prototype.S = function () {
      var a = this.M(1);
      this.o[0].style.background = "linear-gradient(to "
        .concat(L ? "left" : "right", ", ")
        .concat(a[0], ", ")
        .concat(a[1], ")");
    };
    c.prototype.R = function () {
      var a = this.i.slice(),
        e = a[2],
        f = this.M(2),
        k = L ? "left" : "right";
      a[2] = 50;
      a = Ba(a);
      this.o[1].value = String(e);
      this.o[1].style.background = "linear-gradient(to "
        .concat(k, ", ")
        .concat(f[0], " 0%, ")
        .concat(a, " 50%, ")
        .concat(f[1], " 100%)");
    };
    c.prototype.K = function (a, e) {
      var f = this.width - 1,
        k = this.height - 1;
      0 > a || a > f || 0 > e || e > k || ((this.F = [a, e]), this.setColor());
    };
    c.prototype.setColor = function (a) {
      var e = this.F
        ? this.J.getImageData(this.F[0], this.F[1], 1, 1).data
        : this.B;
      this.L(e);
      this.I(e, a);
    };
    c.prototype.L = function (a) {
      S = (16777216 | (a[0] << 16) | (a[1] << 8) | a[2]).toString(16).substr(1);
      this.input.value = S;
      this.input.style.backgroundColor = "#" + S;
      this.input.style.color = ka(a) ? ma : na;
    };
    c.prototype.I = function (a, e) {
      e || ((this.B = a), (this.i = za(a)), this.H());
      a = this.i.slice();
      a[1] /= 1.8225;
      a[2] = 55;
      e = "#" + U(V(a));
      a[2] = 70;
      var f = "#" + U(V(a));
      this.X.backgroundColor = e;
      this.W.boxShadow = (L ? "-" : "") + ".2em .2em 0 0 " + f;
      var k = B("form path");
      for (f = 0; f < k.length; f++) k[f].style.fill = e;
      if (this.u)
        for (f = 0; f < this.u.length; f++)
          (k = this.u[f]),
            "active" === k.className
              ? (k.style.backgroundColor = e)
              : ((a[1] = this.i[1]),
                (a[2] = 90),
                (k.style.backgroundColor = "#" + U(V(a))));
    };
    c.prototype.G = function (a) {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.J = this.canvas.getContext("2d");
      var e = 360 / this.width,
        f = 100 / this.height;
      this.i[1] = a;
      this.B = V(this.i);
      for (
        var k = this.J.getImageData(0, 0, this.width, this.height),
          r = k.data,
          t,
          g,
          u,
          y = 0;
        y < this.height;
        y++
      )
        for (u = 100 - y * f, t = 0; t < this.width; t++) {
          g = 4 * (y * this.width + t);
          var E = V([t * e, a, u]);
          r[g + 3] = 255;
          r[g + 2] = E[2];
          r[g + 1] = E[1];
          r[g] = E[0];
        }
      this.J.putImageData(k, 0, 0);
    };
    return c;
  })(),
  Pa =
    "CIELab:l,100:a,-128-127:b,-128-127\nCIELCHab:l,100:c,100:h,360\nCIELuv:l,100:u,-134-220:v,-140-122\nCMYK:c,1:m,1:y,1:k,1\nHSL:h,360:s,1:l,1\nRGB:r,255:g,255:b,255";
function Na(c) {
  for (var a = Pa.split("\n"), e = "<ul>", f = 0; f < a.length; f++) {
    var k = a[f].split(":"),
      r = k[0].toLowerCase();
    if (2 !== k.length) {
      e += "<li><h3>".concat(k[0], "</h2><p>");
      for (var t = 1; t < k.length; t++) {
        var g = k[t].split(","),
          u = g[1].lastIndexOf("-"),
          y = +g[1].substr(0, u);
        u = +g[1].substr(u + 1);
        var E = parseFloat(c[r][g[0]]).toFixed(2),
          F = 1 === u ? 0.01 : "rgb" === r ? 1 : 0.1;
        1 < t && (e += " ");
        var x = g[0];
        e += ""
          .concat(x.charAt(0).toUpperCase() + x.slice(1), ": <input id=")
          .concat(r, "_")
          .concat(g[0], " type=number min=")
          .concat(y, " max=")
          .concat(u, " value=")
          .concat(E, " step=")
          .concat(F, ">");
      }
      e += "</p></li>";
    }
  }
  return e + "</ul>";
}
(function () {
  function c(z) {
    var I = u[z];
    M(
      I,
      function (O) {
        O.preventDefault();
        ha(sa(I.hash.substring(1)));
        e();
      },
      !0
    );
  }
  function a() {
    return !!g.style.transform && g.style.transform !== F;
  }
  function e() {
    a() &&
      ((t.style.opacity = "0"),
      (g.style.transform = F),
      (g.style.boxShadow = ""));
  }
  function f() {
    G = Math.floor(w.innerHeight / 2);
    v = Array(y);
    for (var z = 0; z < y; z++) {
      var I = E[z > x ? z + 1 : z];
      v[z] = [I.offsetTop, I.offsetTop + I.offsetHeight];
    }
  }
  function k() {
    for (
      var z = 0,
        I = 0,
        O = w.pageYOffset,
        Qa = O + G,
        Ra = w.innerHeight,
        ya = O + Ra,
        P = 0;
      P < v.length;
      P++
    )
      if (!(v[P][0] > ya || v[P][1] < O)) {
        if (Qa >= v[P][0] && Qa <= v[P][1]) {
          z = P;
          break;
        }
        var Sa =
          ((v[P][1] > ya ? ya : v[P][1]) - (v[P][0] < O ? O : v[P][0])) / Ra;
        Sa > I && ((z = P), (I = Sa));
      }
    z !== H &&
      (-1 !== H && (u[H].className = ""), (u[z].className = "active"), (H = z));
  }
  for (
    var r = ia("menu", null, D),
      t = C("img", r),
      g = C("aside"),
      u = B("a", g),
      y = u.length,
      E = B("body>section"),
      F = "translateX(" + (L ? "-" : "") + "100%)",
      x = y,
      v = Array(y),
      A = 0;
    A < E.length;
    A++
  )
    if ("stock-images" == E[A].id) {
      x = A;
      break;
    }
  t.alt = "[+]";
  var G;
  ea.push(function (z) {
    z = z.target;
    z === g || z === r || g.contains(z) || r.contains(z) || e();
  });
  for (A = 0; A < y; A++) c(A);
  var H = -1;
  qa(t, function () {
    var z = a();
    t.alt = "[".concat(z ? "-" : "+", "]");
    t.src = "/".concat(z ? "close" : "menu", ".svg");
    t.style.opacity = "";
  });
  M(r, function () {
    a()
      ? e()
      : ((t.style.opacity = "0"),
        (g.style.transform = "translateX(0)"),
        (g.style.boxShadow =
          "".concat(D, " ") + (L ? void 0 : "-") + "0.05em 0 0.5em"));
  });
  var K = !1;
  C("body").appendChild(r);
  R(w, "scroll", function () {
    K || (f(), (K = !0));
    k();
  });
  R(w, "load resize", function () {
    f();
    k();
  });
})();
(function () {
  var c = C("body"),
    a = B("dd > a"),
    e = ia(
      "bg",
      '<svg viewBox="0 0 13.31 23" version="1"><path fill="#fff" d="M8.86 18.43c.16 0 .28-.14.28-.3v-.3c0-.18-.12-.32-.28-.32h-4.4c-.16 0-.28.18-.28.35v.3c0 .17.12.3.28.3zm0 1.34c.16 0 .28-.14.28-.3v-.3c0-.18-.12-.32-.28-.32h-4.4c-.16 0-.28.14-.28.3v.3c0 .18.12.32.28.32zm0 1.37c.16 0 .28-.14.28-.32v-.3c0-.16-.12-.3-.28-.3h-4.4c-.16 0-.28.14-.28.3v.3c0 .18.12.32.28.32zm-.76.46c-.25.53-.8.9-1.44.9-.63 0-1.2-.38-1.46-.9h2.9z"/><path fill="#222" d="M6.66.5C3.26.5.5 3.26.5 6.66c0 1.12.3 2.16.82 3.07 1.5 2.72 1.9 4.25 2.16 5.73.2 1.24.5 1.53 1.43 1.53h3.54c.95 0 1.23-.3 1.44-1.57.25-1.48.65-3 2.16-5.73.5-.9.82-1.94.82-3.06C12.86 3.27 10.16.5 6.7.5z"/></svg>',
      D
    ),
    f = B("path", e)[1],
    k = 0;
  M(e, function () {
    k
      ? ((f.style.fill = ""), (c.className = ""))
      : ((f.style.fill = "#ffff90"), (c.className = "dark"));
    k = +!k;
  });
  for (var r = 0; r < a.length; r++)
    a[r].style.color = w.getComputedStyle(a[r]).color;
  c.appendChild(e);
})();
var X = C("nav nav"),
  Ta = C("nav img"),
  Ua = C("header li ul"),
  Va = Ua.style;
function Wa() {
  ea.push(function (c) {
    c = c.target;
    c !== Ta && !X.contains(c) && X.className && (X.className = "");
  });
  qa(Ua, function () {
    X.className || (Va.transform = "translateY(-1000%)");
  });
  M(Ta, function () {
    X.className
      ? X.className && (X.className = "")
      : ((Va.transform = "translateY(0)"), (X.className = "open"));
  });
}
var Y = new XMLHttpRequest();
function Ma(c, a) {
  Y.onreadystatechange = function () {
    if (4 === Y.readyState) {
      var e = void 0;
      try {
        e = JSON.parse(Y.responseText);
      } catch (f) {}
      a(e, Y.status);
    }
  };
  Y.open("POST", "/colors", !0);
  Y.setRequestHeader("Content-Type", "application/json");
  Y.send(JSON.stringify(c));
}
(function () {
  function c() {
    function F(v) {
      function A(K) {
        pa(function () {
          if (0 === v) {
            var z = ((16777216 * Math.random()) | 0).toString(16);
            z += ra(6 - z.length);
          } else z = U(V([ua(t[v - 1][0], t[v - 1][1]), ua(20, 80), ua(20, 80)]));
          ja(G[K], z);
        }, 200 * (K + 1));
      }
      for (var G = r[v], H = 0; H < G.length; H++) A(H);
    }
    for (var x = 0; x < k; x++) F(x);
  }
  function a() {
    u = w.setInterval(c, 7e3);
  }
  function e() {
    clearInterval(u);
    u = 0;
  }
  new Oa({ D: ba });
  C("#random h1").innerHTML +=
    ' <button><svg viewBox="0 0 18 18"><path fill="'.concat(
      D,
      '" d="M14.6 3.4C13.2 2 11.2 1 9 1 4.6 1 1 4.6 1 9s3.6 8 8 8c3.7 0 6.8-2.5 7.7-6h-2c-1 2.3-3 4-5.7 4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.6 0 3 .7 4.2 1.8L10 8h7V1z"/><path fill="none" d="M-3-3h24v24H-3z"/></svg></button>'
    );
  var f = B("#random ul"),
    k = f.length,
    r = Array(k),
    t = [
      [0, 20],
      [80, 140],
      [220, 240],
    ],
    g = C("#information li a");
  g &&
    M(g, function () {
      ha(sa("paints"));
    });
  for (g = 0; g < k; g++) r[g] = B("a", f[g]);
  Wa();
  var u = 0,
    y = 360;
  R(w, "blur", e);
  R(w, "scroll", function () {
    w.pageYOffset + d.documentElement.clientHeight > f[0].offsetTop
      ? u || a()
      : u && e();
  });
  R(w, "DOMContentLoaded focus", function () {
    w.pageYOffset + d.documentElement.clientHeight > f[0].offsetTop && a();
  });
  g = C("#random h1 button");
  var E = C("svg", g);
  M(
    g,
    function (F) {
      F.preventDefault();
      clearInterval(u);
      c();
      E.style.transform = "rotate(".concat(y, "deg)");
      a();
      y += 360;
    },
    !0
  );
  C("footer p").innerHTML =
    '<svg viewBox="0 0 203 61.7"><path fill="#444" d="M18.058 9.562c0 2.577-.877 4.542-2.626 5.94-1.752 1.372-4.22 2.06-7.444 2.06H3.876v11.02h-1.86V1.92h6.53c6.343 0 9.514 2.553 9.514 7.66M3.87 15.976h3.656c3.01 0 5.186-.492 6.503-1.478 1.33-.998 2-2.61 2-4.84 0-2.055-.63-3.573-1.9-4.567C12.86 4.1 10.9 3.6 8.24 3.6h-4.4v12.36m27.44-7.47c.84 0 1.74.085 2.69.255l-.348 1.734c-.826-.21-1.684-.31-2.57-.31-1.69 0-3.064.71-4.166 2.15-1.083 1.43-1.623 3.25-1.623 5.43v10.93h-1.805V8.85h1.532l.182 3.575h.127c.81-1.46 1.68-2.48 2.61-3.064.92-.59 2.04-.89 3.36-.89m18.82 20.17l-.46-3.14h-.15c-1 1.28-2.03 2.18-3.1 2.72-1.05.53-2.29.79-3.71.79-1.95 0-3.47-.5-4.55-1.49-1.09-.99-1.63-2.38-1.63-4.14 0-1.93.8-3.44 2.41-4.51 1.62-1.07 3.95-1.63 7.02-1.69l3.76-.1v-1.32c0-1.88-.39-3.3-1.15-4.27-.77-.96-2-1.44-3.71-1.44-1.84 0-3.74.51-5.7 1.53L38.45 10c2.175-1.02 4.325-1.53 6.45-1.53 2.175 0 3.79.565 4.86 1.696 1.088 1.14 1.628 2.91 1.628 5.3v13.19h-1.33M42.8 27.36c2.115 0 3.79-.6 5-1.805 1.23-1.214 1.84-2.902 1.84-5.052v-1.95l-3.467.147c-2.797.13-4.785.57-5.968 1.31-1.18.73-1.77 1.875-1.77 3.44 0 1.244.377 2.208 1.132 2.904.766.68 1.84 1.02 3.225 1.02m22.883 1.54c-2.877 0-5.134-.885-6.747-2.66-1.603-1.777-2.407-4.274-2.407-7.47 0-3.173.78-5.7 2.34-7.58 1.56-1.91 3.66-2.876 6.29-2.876 2.34 0 4.17.813 5.54 2.442 1.35 1.627 2.03 3.842 2.03 6.637v1.46H58.44c.023 2.71.655 4.81 1.896 6.232 1.252 1.43 3.037 2.15 5.375 2.15 1.14 0 2.13-.08 2.99-.24.87-.16 1.95-.5 3.25-1.02v1.64c-1.12.49-2.15.81-3.09.99-.95.19-1.99.28-3.14.28m-.53-18.97c-1.91 0-3.44.63-4.59 1.9-1.15 1.25-1.83 3.06-2.02 5.42h12.25c0-2.3-.5-4.09-1.49-5.38-.99-1.3-2.37-1.95-4.13-1.95m28.44-1.17V10l-4.11.256c1.1 1.36 1.64 2.845 1.64 4.485 0 1.9-.64 3.46-1.91 4.65-1.263 1.18-2.953 1.76-5.103 1.76-.9 0-1.53-.04-1.9-.11-.72.37-1.26.82-1.64 1.33s-.56 1.05-.56 1.62c0 .63.24 1.09.72 1.38.49.3 1.3.44 2.43.44h3.47c2.156 0 3.79.44 4.95 1.32 1.14.87 1.712 2.15 1.712 3.85 0 2.09-.85 3.71-2.553 4.833-1.69 1.14-4.11 1.715-7.23 1.715-2.497 0-4.437-.48-5.81-1.44-1.362-.96-2.042-2.3-2.042-4 0-1.365.42-2.496 1.26-3.39.857-.9 2-1.51 3.44-1.84-.592-.254-1.07-.61-1.44-1.074-.35-.47-.53-1.013-.53-1.62 0-1.324.848-2.493 2.54-3.49-1.157-.476-2.057-1.22-2.69-2.23-.644-1.02-.966-2.186-.966-3.49 0-1.987.623-3.58 1.875-4.76 1.26-1.197 2.95-1.803 5.1-1.803 1.3 0 2.31.13 3.04.383h6.342M77.6 31.99c0 2.71 2.027 4.08 6.077 4.08 5.215 0 7.795-1.66 7.795-4.97 0-1.19-.41-2.057-1.225-2.59s-2.134-.805-3.95-.805h-3.26c-3.627 0-5.455 1.43-5.455 4.273m1.512-17.02c0 1.533.462 2.716 1.386 3.576.935.84 2.182 1.256 3.736 1.256 1.652 0 2.93-.42 3.79-1.258.886-.84 1.33-2.057 1.33-3.656 0-1.69-.458-2.956-1.37-3.79-.9-.85-2.162-1.276-3.788-1.276-1.58 0-2.824.455-3.738 1.366-.9.9-1.35 2.16-1.35 3.764m26.36-6.46c.84 0 1.74.085 2.688.255l-.347 1.733c-.82-.208-1.68-.31-2.57-.31-1.69 0-3.06.717-4.16 2.152-1.09 1.433-1.63 3.25-1.63 5.427V28.68h-1.8V8.852h1.53l.18 3.575h.13c.82-1.46 1.69-2.48 2.61-3.064.92-.597 2.04-.895 3.36-.895m14.8 20.442c-2.88 0-5.14-.886-6.75-2.662-1.6-1.776-2.41-4.273-2.41-7.47 0-3.172.78-5.698 2.34-7.58 1.56-1.908 3.66-2.875 6.29-2.875 2.34 0 4.17.814 5.54 2.443 1.35 1.628 2.02 3.843 2.02 6.638v1.46H113c.027 2.713.66 4.81 1.9 6.234 1.254 1.435 3.04 2.152 5.377 2.152 1.13 0 2.123-.08 2.983-.237.86-.158 1.95-.5 3.25-1.02v1.64c-1.12.488-2.157.816-3.09.988-.95.19-2 .28-3.15.28m-.53-18.97c-1.91 0-3.44.64-4.597 1.9-1.154 1.25-1.83 3.06-2.022 5.43h12.26c0-2.29-.5-4.08-1.49-5.37-1-1.3-2.38-1.95-4.14-1.95m25.22 13.61c0 1.78-.67 3.15-2.02 4.11-1.35.95-3.25 1.42-5.75 1.42-2.65 0-4.75-.41-6.31-1.22V25.9c1.997.995 4.088 1.495 6.318 1.495 1.956 0 3.44-.323 4.46-.968 1.02-.655 1.53-1.526 1.53-2.61 0-.996-.402-1.835-1.22-2.517-.8-.68-2.124-1.35-3.973-2.01-1.98-.716-3.384-1.33-4.164-1.84-.81-.524-1.41-1.107-1.83-1.752-.4-.656-.6-1.454-.6-2.39 0-1.482.62-2.657 1.86-3.52 1.25-.862 3.01-1.295 5.24-1.295 2.14 0 4.166.4 6.1 1.204l-.673 1.642c-1.95-.81-3.766-1.21-5.43-1.21-1.62 0-2.9.27-3.845.8-.95.53-1.42 1.27-1.42 2.22 0 1.03.365 1.86 1.09 2.48.74.62 2.18 1.31 4.33 2.08 1.786.64 3.09 1.23 3.896 1.75.81.51 1.42 1.09 1.82 1.75.41.65.62 1.43.62 2.31m17.45-.01c0 1.77-.67 3.14-2.02 4.11-1.35.95-3.25 1.42-5.75 1.42-2.65 0-4.76-.41-6.32-1.23v-1.95c1.997 1 4.09 1.5 6.32 1.5 1.96 0 3.44-.33 4.46-.97 1.02-.66 1.53-1.53 1.53-2.61 0-1-.41-1.84-1.22-2.52-.81-.68-2.13-1.35-3.98-2.01-1.982-.72-3.39-1.33-4.164-1.84-.8-.52-1.41-1.11-1.82-1.75-.4-.66-.606-1.46-.606-2.39 0-1.48.62-2.66 1.86-3.52 1.25-.86 3.01-1.3 5.24-1.3 2.14 0 4.164.4 6.1 1.202l-.676 1.64c-1.94-.803-3.76-1.204-5.43-1.204-1.61 0-2.9.264-3.84.8-.944.535-1.42 1.276-1.42 2.225 0 1.03.368 1.86 1.096 2.48.74.62 2.18 1.31 4.32 2.08 1.787.642 3.09 1.23 3.897 1.75.815.51 1.423 1.092 1.826 1.75.414.655.62 1.43.62 2.315m6.7-14.78V21.6c0 1.996.42 3.44 1.256 4.355.84.9 2.14 1.35 3.9 1.35 2.36 0 4.086-.597 5.188-1.788 1.12-1.19 1.68-3.144 1.68-5.832V8.748h1.786V28.58h-1.53l-.33-2.74H181c-1.29 2.066-3.57 3.09-6.88 3.09-4.513 0-6.77-2.413-6.77-7.23V8.75h1.787m32.815 14.786c0 1.777-.67 3.145-2.02 4.112-1.35.95-3.25 1.422-5.75 1.422-2.65 0-4.76-.41-6.315-1.223v-1.95c1.994.996 4.085 1.496 6.32 1.496 1.953 0 3.44-.323 4.46-.968 1.02-.655 1.53-1.526 1.53-2.61 0-.996-.41-1.835-1.22-2.517-.8-.68-2.13-1.35-3.98-2.008-1.984-.717-3.387-1.33-4.166-1.84-.8-.525-1.41-1.108-1.82-1.753-.4-.656-.603-1.454-.603-2.39 0-1.482.62-2.657 1.86-3.52 1.253-.862 3.01-1.295 5.24-1.295 2.14 0 4.167.4 6.1 1.204l-.673 1.642c-1.94-.803-3.76-1.204-5.423-1.204-1.62 0-2.905.268-3.845.804-.95.535-1.42 1.276-1.42 2.225 0 1.035.37 1.86 1.1 2.48.74.62 2.18 1.315 4.32 2.08 1.79.646 3.09 1.23 3.9 1.753.814.51 1.42 1.094 1.825 1.752.415.656.62 1.43.62 2.316"/><path fill="#fa6900" d="M10.365 52.454v-7.142h7.14v7.142h-7.14m33.333 0v-7.142h7.14v7.142H43.7m16.727 0v-7.142h7.14v7.142h-7.14m16.73 0v-7.142h7.14v7.142h-7.14m8.24 0v-7.142h7.14v7.142h-7.14m8.238 0v-7.142h7.142v7.142h-7.142m16.73 0v-7.142h7.14v7.142h-7.14m8.24 0v-7.142h7.14v7.142h-7.14m25.218 0v-7.142h7.14v7.142h-7.14m8.24 0v-7.142h7.14v7.142h-7.14m16.73 0v-7.142h7.14v7.142h-7.14m8.237 0v-7.142h7.142v7.142h-7.14m8.238 0v-7.142h7.142v7.142h-7.14m8.488 0v-7.142h7.14v7.142h-7.14m-183.395 8.24v-7.14h7.14v7.14h-7.14m8.34 0v-7.14h7.14v7.14h-7.14m16.753 0v-7.14h7.14v7.14h-7.14m8.24 0v-7.14h7.14v7.14H43.7m33.456 0v-7.14h7.14v7.14h-7.14m8.24 0v-7.14h7.14v7.14h-7.14m8.24 0v-7.14h7.14v7.14h-7.14m16.73 0v-7.14h7.14v7.14h-7.14m8.238 0v-7.14h7.14v7.14h-7.14m25.22 0v-7.14h7.14v7.14h-7.14m8.238 0v-7.14h7.14v7.14h-7.14m24.968 0v-7.14h7.142v7.14h-7.14m16.728 0v-7.14h7.14v7.14h-7.14"/></svg>';
})();
var Xa = C("#schemes>ul>li>ul"),
  Ya = B("#schemes ul a"),
  Za,
  Z = 0;
function $a() {
  function c(r) {
    M(e[r], function () {
      if (r !== f) {
        e[f].className = "";
        e[r].className = "active";
        f = r;
        for (var t = r * Za, g = 0; g < Ya.length; g++)
          ja(Ya[g], h.substr(t + 6 * g, 6));
      }
    });
  }
  var a = N("p");
  a.innerHTML =
    '<button class=active>CIELCHab</button> <button href="#">CIELCHuv</button> <button>HSL</button>';
  for (var e = B("button", a), f = 0, k = 0; k < e.length; k++) c(k);
  k = C("#schemes ul");
  k.parentNode.insertBefore(a, k);
}
for (
  var ab = w.location.pathname.substr(1),
    Ea = ta.slice(),
    bb = "",
    cb = 0,
    db = h.length / 5;
  cb < db;
  cb++
) {
  var eb = bb,
    fb = parseInt(h.substr(5 * cb, 5), 36).toString(16);
  bb = eb + (ra(6 - fb.length) + fb);
}
h = bb;
if (Xa) {
  for (var gb = C("#schemes>ul"), hb = "", ib = 0; ib < Ya.length; ib++) {
    var jb = Ya[ib];
    R(jb, "mouseover", function () {
      gb.className = "active";
    });
    R(jb, "mouseout", function () {
      gb.className = "";
    });
    hb += oa(jb);
  }
  Za = hb.length;
  Z += 2 * Za;
  h = hb + h;
  h =
    h.substr(0, Z) +
    Fa([180]) +
    Fa([-30, 60]) +
    Fa([-150, 300]) +
    Fa([-120, 240]) +
    Fa([90, 90, 90]) +
    Fa([60, 120, 60]) +
    h.substr(Z);
  Z += Za;
  $a();
}
(function () {
  var c = C("#schemes>h2");
  if (c) {
    for (
      var a = B("#schemes>ol"),
        e = B("a", a[0]).length - 1,
        f = e / 2,
        k = "",
        r = "",
        t = 0;
      t < a.length;
      t++
    ) {
      var g = B("a", a[t]),
        u = oa(g[f]) === ab;
      r += u ? Da(e + 1) : Ca(Ea, za(la(oa(g[e]))), e - 1);
      for (var y = 0; y <= e; y++)
        if ((u && y !== f) || (0 < y && y < e)) k += oa(g[y]);
    }
    h = h.substr(0, Z) + k + h.substr(Z) + r;
    r = N("p");
    var E = 0;
    r.innerHTML =
      "<button class=active>CIELab</button> <button>CIELCHuv</button> <button>HSL</button>";
    var F = B("button", r),
      x = k.length;
    k = function (v) {
      M(F[v], function () {
        if (v !== E) {
          F[E].className = "";
          F[v].className = "active";
          E = v;
          for (var A = Z + v * x, G = "#" + ab, H = 0; H < a.length; H++)
            for (
              var K = B("a", a[H]), z = K[3].textContent === G, I = 0;
              I < K.length;
              I++
            )
              if ((z && I !== f) || (0 < I && I < e))
                ja(K[I], h.substr(A, 6)), (A += 6);
        }
      });
    };
    for (t = 0; t < F.length; t++) k(t);
    c.parentNode.insertBefore(r, c);
  }
})();
(function () {
  function c(x) {
    M(t[x], function () {
      if (!F && x !== y) {
        F = !0;
        t[y].className = "";
        t[x].className = "active";
        for (var v = 0; v < g.length; v++) g[v].parentNode.style.opacity = "0";
        E = y;
        y = x;
      }
    });
  }
  function a(x) {
    var v = g[x],
      A = v.parentNode;
    qa(A, function () {
      A.style.opacity
        ? ((v.innerHTML = v.innerHTML.replace(u[E], u[y])),
          (A.style.opacity = ""))
        : (F = !1);
    });
  }
  var e = N("p"),
    f =
      "<button class=active>Hex</button> <button>RGB</button> <button>HSL</button>";
  if (aa[8].pathname.substr(1) === S) {
    f += " <button>HTML</button>";
    var k = aa[8].textContent;
    k = k.substring(k.indexOf(": ") + 2);
    var r = k.indexOf(" ");
    -1 === r && (r = k.indexOf("#"));
    k = k.substring(0, r);
  }
  e.innerHTML = f;
  var t = B("button", e),
    g = B("#examples code strong"),
    u = [
      "#" + xa(),
      "rgb(".concat(T[0], ", ").concat(T[1], ", ").concat(T[2], ")"),
      "hsl("
        .concat(Q(ta[0]), ", ")
        .concat(Q(ta[1]), "%, ")
        .concat(Q(ta[2]), "%)"),
      k,
    ],
    y = 0,
    E = 0,
    F = !1;
  for (f = 0; f < g.length; f++) a(f);
  for (f = 0; f < t.length; f++) c(f);
  f = C("#examples h1");
  f.parentNode.insertBefore(e, f.nextSibling);
})();
