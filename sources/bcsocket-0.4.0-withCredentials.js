(function(){
function g(a) {
  throw a;
}
var h = void 0, j = !0, k = null, o = !1;
function aa() {
  return function() {
  }
}
function p(a) {
  return function(b) {
    this[a] = b
  }
}
function ba(a) {
  return function() {
    return this[a]
  }
}
function ca(a) {
  return function() {
    return a
  }
}
var q, da = da || {}, r = this;
function ea(a) {
  for(var a = a.split("."), b = r, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function fa() {
}
function ga(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function t(a) {
  return"array" == ga(a)
}
function ha(a) {
  var b = ga(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function v(a) {
  return"string" == typeof a
}
function ia(a) {
  return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
  a || g(Error());
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function w(a, b, c) {
  w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return w.apply(k, arguments)
}
var x = Date.now || function() {
  return+new Date
};
function y(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ja = b.prototype;
  a.prototype = new c
}
;function na(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function oa(a) {
  if(!pa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(qa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(ra, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(sa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(ta, "&quot;"));
  return a
}
var qa = /&/g, ra = /</g, sa = />/g, ta = /\"/g, pa = /[&<>\"]/;
var z, va, wa, xa;
function ya() {
  return r.navigator ? r.navigator.userAgent : k
}
xa = wa = va = z = o;
var za;
if(za = ya()) {
  var Aa = r.navigator;
  z = 0 == za.indexOf("Opera");
  va = !z && -1 != za.indexOf("MSIE");
  wa = !z && -1 != za.indexOf("WebKit");
  xa = !z && !wa && "Gecko" == Aa.product
}
var Ba = z, A = va, Ca = xa, B = wa, Da;
a: {
  var Ea = "", Fa;
  if(Ba && r.opera) {
    var Ga = r.opera.version, Ea = "function" == typeof Ga ? Ga() : Ga
  }else {
    if(Ca ? Fa = /rv\:([^\);]+)(\)|;)/ : A ? Fa = /MSIE\s+([^\);]+)(\)|;)/ : B && (Fa = /WebKit\/(\S+)/), Fa) {
      var Ha = Fa.exec(ya()), Ea = Ha ? Ha[1] : ""
    }
  }
  if(A) {
    var Ia, Ja = r.document;
    Ia = Ja ? Ja.documentMode : h;
    if(Ia > parseFloat(Ea)) {
      Da = "" + Ia;
      break a
    }
  }
  Da = Ea
}
var Ka = {};
function C(a) {
  var b;
  if(!(b = Ka[a])) {
    b = 0;
    for(var c = ("" + Da).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var i = c[f] || "", m = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = l.exec(i) || ["", "", ""], u = n.exec(m) || ["", "", ""];
        if(0 == s[0].length && 0 == u[0].length) {
          break
        }
        b = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == u[2].length) ? -1 : (0 == s[2].length) > (0 == u[2].length) ? 1 : 0) || (s[2] < u[2] ? -1 : s[2] > u[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Ka[a] = 0 <= b
  }
  return b
}
var La = {};
function Ma(a) {
  return La[a] || (La[a] = A && !!document.documentMode && document.documentMode >= a)
}
;function Na(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, Na) : this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
y(Na, Error);
Na.prototype.name = "CustomError";
function Oa(a, b) {
  b.unshift(a);
  Na.call(this, na.apply(k, b));
  b.shift()
}
y(Oa, Na);
Oa.prototype.name = "AssertionError";
function Pa(a, b) {
  g(new Oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Qa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ra(a) {
  var b = E, c;
  for(c in b) {
    a.call(h, b[c], c, b)
  }
}
function Sa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ta(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Va(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < Ua.length;f++) {
      c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var F = Array.prototype, Wa = F.indexOf ? function(a, b, c) {
  return F.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(v(a)) {
    return!v(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Xa = F.forEach ? function(a, b, c) {
  F.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
function Ya(a) {
  return F.concat.apply(F, arguments)
}
function Za(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
;function $a(a) {
  if("function" == typeof a.K) {
    return a.K()
  }
  if(v(a)) {
    return a.split("")
  }
  if(ha(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Sa(a)
}
function G(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      Xa(a, b, c)
    }else {
      var d;
      if("function" == typeof a.ea) {
        d = a.ea()
      }else {
        if("function" != typeof a.K) {
          if(ha(a) || v(a)) {
            d = [];
            for(var e = a.length, f = 0;f < e;f++) {
              d.push(f)
            }
          }else {
            d = Ta(a)
          }
        }else {
          d = h
        }
      }
      for(var e = $a(a), f = e.length, i = 0;i < f;i++) {
        b.call(c, e[i], d && d[i], a)
      }
    }
  }
}
;function ab(a, b) {
  this.M = {};
  this.j = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && g(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof ab ? (c = a.ea(), d = a.K()) : (c = Ta(a), d = Sa(a));
      for(var e = 0;e < c.length;e++) {
        this.set(c[e], d[e])
      }
    }
  }
}
q = ab.prototype;
q.e = 0;
q.K = function() {
  bb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.M[this.j[b]])
  }
  return a
};
q.ea = function() {
  bb(this);
  return this.j.concat()
};
q.ca = function(a) {
  return H(this.M, a)
};
q.remove = function(a) {
  return H(this.M, a) ? (delete this.M[a], this.e--, this.j.length > 2 * this.e && bb(this), j) : o
};
function bb(a) {
  if(a.e != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      H(a.M, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.e != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], H(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
q.get = function(a, b) {
  return H(this.M, a) ? this.M[a] : b
};
q.set = function(a, b) {
  H(this.M, a) || (this.e++, this.j.push(a));
  this.M[a] = b
};
q.l = function() {
  return new ab(this)
};
function H(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function I(a, b) {
  var c;
  if(a instanceof I) {
    this.A = b !== h ? b : a.A, cb(this, a.ia), c = a.Ra, J(this), this.Ra = c, db(this, a.da), eb(this, a.ua), fb(this, a.H), gb(this, a.O.l()), c = a.Ga, J(this), this.Ga = c
  }else {
    if(a && (c = ("" + a).match(Qa))) {
      this.A = !!b;
      cb(this, c[1] || "", j);
      var d = c[2] || "";
      J(this);
      this.Ra = d ? decodeURIComponent(d) : "";
      db(this, c[3] || "", j);
      eb(this, c[4]);
      fb(this, c[5] || "", j);
      gb(this, c[6] || "", j);
      c = c[7] || "";
      J(this);
      this.Ga = c ? decodeURIComponent(c) : ""
    }else {
      this.A = !!b, this.O = new hb(k, 0, this.A)
    }
  }
}
q = I.prototype;
q.ia = "";
q.Ra = "";
q.da = "";
q.ua = k;
q.H = "";
q.Ga = "";
q.Zb = o;
q.A = o;
q.toString = function() {
  var a = [], b = this.ia;
  b && a.push(ib(b, jb), ":");
  if(b = this.da) {
    a.push("//");
    var c = this.Ra;
    c && a.push(ib(c, jb), "@");
    a.push(encodeURIComponent("" + b));
    b = this.ua;
    b != k && a.push(":", "" + b)
  }
  if(b = this.H) {
    this.da && "/" != b.charAt(0) && a.push("/"), a.push(ib(b, "/" == b.charAt(0) ? kb : lb))
  }
  (b = this.O.toString()) && a.push("?", b);
  (b = this.Ga) && a.push("#", ib(b, mb));
  return a.join("")
};
q.l = function() {
  return new I(this)
};
function cb(a, b, c) {
  J(a);
  a.ia = c ? b ? decodeURIComponent(b) : "" : b;
  a.ia && (a.ia = a.ia.replace(/:$/, ""))
}
function db(a, b, c) {
  J(a);
  a.da = c ? b ? decodeURIComponent(b) : "" : b
}
function eb(a, b) {
  J(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && g(Error("Bad port number " + b)), a.ua = b) : a.ua = k
}
function fb(a, b, c) {
  J(a);
  a.H = c ? b ? decodeURIComponent(b) : "" : b
}
function gb(a, b, c) {
  J(a);
  b instanceof hb ? (a.O = b, a.O.ib(a.A)) : (c || (b = ib(b, nb)), a.O = new hb(b, 0, a.A))
}
function K(a, b, c) {
  J(a);
  a.O.set(b, c)
}
function ob(a, b, c) {
  J(a);
  t(c) || (c = ["" + c]);
  pb(a.O, b, c)
}
function L(a) {
  J(a);
  K(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ x()).toString(36));
  return a
}
function J(a) {
  a.Zb && g(Error("Tried to modify a read-only Uri"))
}
q.ib = function(a) {
  this.A = a;
  this.O && this.O.ib(a);
  return this
};
function qb(a, b, c, d) {
  var e = new I(k, h);
  a && cb(e, a);
  b && db(e, b);
  c && eb(e, c);
  d && fb(e, d);
  return e
}
function ib(a, b) {
  return v(a) ? encodeURI(a).replace(b, rb) : k
}
function rb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var jb = /[#\/\?@]/g, lb = /[\#\?:]/g, kb = /[\#\?]/g, nb = /[\#\?@]/g, mb = /#/g;
function hb(a, b, c) {
  this.z = a || k;
  this.A = !!c
}
function M(a) {
  if(!a.i && (a.i = new ab, a.e = 0, a.z)) {
    for(var b = a.z.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, f = k;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = N(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
q = hb.prototype;
q.i = k;
q.e = k;
q.add = function(a, b) {
  M(this);
  this.z = k;
  var a = N(this, a), c = this.i.get(a);
  c || this.i.set(a, c = []);
  c.push(b);
  this.e++;
  return this
};
q.remove = function(a) {
  M(this);
  a = N(this, a);
  return this.i.ca(a) ? (this.z = k, this.e -= this.i.get(a).length, this.i.remove(a)) : o
};
q.ca = function(a) {
  M(this);
  a = N(this, a);
  return this.i.ca(a)
};
q.ea = function() {
  M(this);
  for(var a = this.i.K(), b = this.i.ea(), c = [], d = 0;d < b.length;d++) {
    for(var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
q.K = function(a) {
  M(this);
  var b = [];
  if(a) {
    this.ca(a) && (b = Ya(b, this.i.get(N(this, a))))
  }else {
    for(var a = this.i.K(), c = 0;c < a.length;c++) {
      b = Ya(b, a[c])
    }
  }
  return b
};
q.set = function(a, b) {
  M(this);
  this.z = k;
  a = N(this, a);
  this.ca(a) && (this.e -= this.i.get(a).length);
  this.i.set(a, [b]);
  this.e++;
  return this
};
q.get = function(a, b) {
  var c = a ? this.K(a) : [];
  return 0 < c.length ? c[0] : b
};
function pb(a, b, c) {
  a.remove(b);
  0 < c.length && (a.z = k, a.i.set(N(a, b), Za(c)), a.e += c.length)
}
q.toString = function() {
  if(this.z) {
    return this.z
  }
  if(!this.i) {
    return""
  }
  for(var a = [], b = this.i.ea(), c = 0;c < b.length;c++) {
    for(var d = b[c], e = encodeURIComponent("" + d), d = this.K(d), f = 0;f < d.length;f++) {
      var i = e;
      "" !== d[f] && (i += "=" + encodeURIComponent("" + d[f]));
      a.push(i)
    }
  }
  return this.z = a.join("&")
};
q.l = function() {
  var a = new hb;
  a.z = this.z;
  this.i && (a.i = this.i.l());
  return a
};
function N(a, b) {
  var c = "" + b;
  a.A && (c = c.toLowerCase());
  return c
}
q.ib = function(a) {
  a && !this.A && (M(this), this.z = k, G(this.i, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), pb(this, d, a))
  }, this));
  this.A = a
};
function sb() {
}
sb.prototype.Aa = k;
var tb;
function ub() {
}
y(ub, sb);
function vb(a) {
  return(a = wb(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function xb(a) {
  var b = {};
  wb(a) && (b[0] = j, b[1] = j);
  return b
}
ub.prototype.bb = k;
function wb(a) {
  if(!a.bb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.bb = d
      }catch(e) {
      }
    }
    g(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.bb
}
tb = new ub;
function yb() {
}
var zb = 0;
q = yb.prototype;
q.key = 0;
q.ha = o;
q.nb = o;
q.Ia = function(a, b, c, d, e, f) {
  "function" == ga(a) ? this.zb = j : a && a.handleEvent && "function" == ga(a.handleEvent) ? this.zb = o : g(Error("Invalid listener argument"));
  this.sa = a;
  this.Kb = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.ab = f;
  this.nb = o;
  this.key = ++zb;
  this.ha = o
};
q.handleEvent = function(a) {
  return this.zb ? this.sa.call(this.ab || this.src, a) : this.sa.handleEvent.call(this.sa, a)
};
!A || Ma(9);
var Ab = !A || Ma(9), Bb = A && !C("8");
!B || C("528");
Ca && C("1.9b") || A && C("8") || Ba && C("9.5") || B && C("528");
Ca && !C("8") || A && C("9");
function Cb() {
}
Cb.prototype.tb = o;
Cb.prototype.Ba = function() {
  this.tb || (this.tb = j, this.w())
};
Cb.prototype.w = function() {
  this.Ub && Db.apply(k, this.Ub);
  if(this.Eb) {
    for(;this.Eb.length;) {
      this.Eb.shift()()
    }
  }
};
function Db(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Db.apply(k, d) : d && "function" == typeof d.Ba && d.Ba()
  }
}
;function O(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
y(O, Cb);
q = O.prototype;
q.w = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.ga = o;
q.defaultPrevented = o;
q.Oa = j;
q.preventDefault = function() {
  this.defaultPrevented = j;
  this.Oa = o
};
function Eb(a) {
  Eb[" "](a);
  return a
}
Eb[" "] = fa;
function Fb(a, b) {
  a && this.Ia(a, b)
}
y(Fb, O);
q = Fb.prototype;
q.target = k;
q.relatedTarget = k;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = o;
q.altKey = o;
q.shiftKey = o;
q.metaKey = o;
q.$a = k;
q.Ia = function(a, b) {
  var c = this.type = a.type;
  O.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ca) {
      var e;
      a: {
        try {
          Eb(d.nodeName);
          e = j;
          break a
        }catch(f) {
        }
        e = o
      }
      e || (d = k)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = B || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = B || a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.$a = a;
  a.defaultPrevented && this.preventDefault();
  delete this.ga
};
q.preventDefault = function() {
  Fb.ja.preventDefault.call(this);
  var a = this.$a;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = o, Bb) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
q.w = function() {
  Fb.ja.w.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.$a = k
};
var Gb = {}, P = {}, E = {}, Hb = {};
function Ib(a, b, c, d, e) {
  if(b) {
    if(t(b)) {
      for(var f = 0;f < b.length;f++) {
        Ib(a, b[f], c, d, e)
      }
      return k
    }
    var d = !!d, i = P;
    b in i || (i[b] = {e:0, B:0});
    i = i[b];
    d in i || (i[d] = {e:0, B:0}, i.e++);
    var i = i[d], m = ia(a), l;
    i.B++;
    if(i[m]) {
      l = i[m];
      for(f = 0;f < l.length;f++) {
        if(i = l[f], i.sa == c && i.ab == e) {
          if(i.ha) {
            break
          }
          return l[f].key
        }
      }
    }else {
      l = i[m] = [], i.e++
    }
    f = Jb();
    f.src = a;
    i = new yb;
    i.Ia(c, f, a, b, d, e);
    c = i.key;
    f.key = c;
    l.push(i);
    Gb[c] = i;
    E[m] || (E[m] = []);
    E[m].push(i);
    a.addEventListener ? (a == r || !a.qb) && a.addEventListener(b, f, d) : a.attachEvent(b in Hb ? Hb[b] : Hb[b] = "on" + b, f);
    return c
  }
  g(Error("Invalid event type"))
}
function Jb() {
  var a = Kb, b = Ab ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Lb(a, b, c, d, e) {
  if(t(b)) {
    for(var f = 0;f < b.length;f++) {
      Lb(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = P;
      if(b in f && (f = f[b], d in f && (f = f[d], a = ia(a), f[a]))) {
        a = f[a];
        break a
      }
      a = k
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].sa == c && a[f].capture == d && a[f].ab == e) {
          Mb(a[f].key);
          break
        }
      }
    }
  }
}
function Mb(a) {
  if(!Gb[a]) {
    return o
  }
  var b = Gb[a];
  if(b.ha) {
    return o
  }
  var c = b.src, d = b.type, e = b.Kb, f = b.capture;
  c.removeEventListener ? (c == r || !c.qb) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Hb ? Hb[d] : Hb[d] = "on" + d, e);
  c = ia(c);
  e = P[d][f][c];
  if(E[c]) {
    var i = E[c], m = Wa(i, b);
    0 <= m && F.splice.call(i, m, 1);
    0 == i.length && delete E[c]
  }
  b.ha = j;
  e.Db = j;
  Nb(d, f, c, e);
  delete Gb[a];
  return j
}
function Nb(a, b, c, d) {
  if(!d.Ja && d.Db) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].ha ? d[e].Kb.src = k : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.Db = o;
    0 == f && (delete P[a][b][c], P[a][b].e--, 0 == P[a][b].e && (delete P[a][b], P[a].e--), 0 == P[a].e && delete P[a])
  }
}
function Ob(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Ra(function(a) {
      for(var e = a.length - 1;0 <= e;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Mb(f.key), c++
        }
      }
    })
  }else {
    if(a = ia(a), E[a]) {
      for(var a = E[a], e = a.length - 1;0 <= e;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Mb(f.key), c++
        }
      }
    }
  }
}
function Pb(a, b, c, d, e) {
  var f = 1, b = ia(b);
  if(a[b]) {
    a.B--;
    a = a[b];
    a.Ja ? a.Ja++ : a.Ja = 1;
    try {
      for(var i = a.length, m = 0;m < i;m++) {
        var l = a[m];
        l && !l.ha && (f &= Qb(l, e) !== o)
      }
    }finally {
      a.Ja--, Nb(c, d, b, a)
    }
  }
  return Boolean(f)
}
function Qb(a, b) {
  a.nb && Mb(a.key);
  return a.handleEvent(b)
}
function Kb(a, b) {
  if(!Gb[a]) {
    return j
  }
  var c = Gb[a], d = c.type, e = P;
  if(!(d in e)) {
    return j
  }
  var e = e[d], f, i;
  if(!Ab) {
    f = b || ea("window.event");
    var m = j in e, l = o in e;
    if(m) {
      if(0 > f.keyCode || f.returnValue != h) {
        return j
      }
      a: {
        var n = o;
        if(0 == f.keyCode) {
          try {
            f.keyCode = -1;
            break a
          }catch(s) {
            n = j
          }
        }
        if(n || f.returnValue == h) {
          f.returnValue = j
        }
      }
    }
    n = new Fb;
    n.Ia(f, this);
    f = j;
    try {
      if(m) {
        for(var u = [], ua = n.currentTarget;ua;ua = ua.parentNode) {
          u.push(ua)
        }
        i = e[j];
        i.B = i.e;
        for(var D = u.length - 1;!n.ga && 0 <= D && i.B;D--) {
          n.currentTarget = u[D], f &= Pb(i, u[D], d, j, n)
        }
        if(l) {
          i = e[o];
          i.B = i.e;
          for(D = 0;!n.ga && D < u.length && i.B;D++) {
            n.currentTarget = u[D], f &= Pb(i, u[D], d, o, n)
          }
        }
      }else {
        f = Qb(c, n)
      }
    }finally {
      u && (u.length = 0), n.Ba()
    }
    return f
  }
  d = new Fb(b, this);
  try {
    f = Qb(c, d)
  }finally {
    d.Ba()
  }
  return f
}
;function Rb() {
}
y(Rb, Cb);
q = Rb.prototype;
q.qb = j;
q.hb = k;
q.addEventListener = function(a, b, c, d) {
  Ib(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Lb(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = P;
  if(b in c) {
    if(v(a)) {
      a = new O(a, this)
    }else {
      if(a instanceof O) {
        a.target = a.target || this
      }else {
        var d = a, a = new O(b, this);
        Va(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.hb) {
        e.push(f)
      }
      f = c[j];
      f.B = f.e;
      for(var i = e.length - 1;!a.ga && 0 <= i && f.B;i--) {
        a.currentTarget = e[i], d &= Pb(f, e[i], a.type, j, a) && a.Oa != o
      }
    }
    if(o in c) {
      if(f = c[o], f.B = f.e, b) {
        for(i = 0;!a.ga && i < e.length && f.B;i++) {
          a.currentTarget = e[i], d &= Pb(f, e[i], a.type, o, a) && a.Oa != o
        }
      }else {
        for(e = this;!a.ga && e && f.B;e = e.hb) {
          a.currentTarget = e, d &= Pb(f, e, a.type, o, a) && a.Oa != o
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
q.w = function() {
  Rb.ja.w.call(this);
  Ob(this);
  this.hb = k
};
function Sb(a, b) {
  this.pa = a || 1;
  this.ya = b || Tb;
  this.Va = w(this.kc, this);
  this.gb = x()
}
y(Sb, Rb);
Sb.prototype.enabled = o;
var Tb = r.window;
q = Sb.prototype;
q.P = k;
q.setInterval = function(a) {
  this.pa = a;
  this.P && this.enabled ? (this.stop(), this.start()) : this.P && this.stop()
};
q.kc = function() {
  if(this.enabled) {
    var a = x() - this.gb;
    0 < a && a < 0.8 * this.pa ? this.P = this.ya.setTimeout(this.Va, this.pa - a) : (this.dispatchEvent(Ub), this.enabled && (this.P = this.ya.setTimeout(this.Va, this.pa), this.gb = x()))
  }
};
q.start = function() {
  this.enabled = j;
  this.P || (this.P = this.ya.setTimeout(this.Va, this.pa), this.gb = x())
};
q.stop = function() {
  this.enabled = o;
  this.P && (this.ya.clearTimeout(this.P), this.P = k)
};
q.w = function() {
  Sb.ja.w.call(this);
  this.stop();
  delete this.ya
};
var Ub = "tick";
function Vb(a) {
  this.c = a;
  this.j = []
}
y(Vb, Cb);
var Wb = [];
function Xb(a, b, c, d, e, f) {
  t(c) || (Wb[0] = c, c = Wb);
  for(var i = 0;i < c.length;i++) {
    a.j.push(Ib(b, c[i], d || a, e || o, f || a.c || a))
  }
}
Vb.prototype.w = function() {
  Vb.ja.w.call(this);
  Xa(this.j, Mb);
  this.j.length = 0
};
Vb.prototype.handleEvent = function() {
  g(Error("EventHandler.handleEvent not implemented"))
};
function Q(a, b, c, d, e, f) {
  this.g = a;
  this.a = b;
  this.U = c;
  this.C = d;
  this.wa = e || 1;
  this.xa = Yb;
  this.Ca = new Vb(this);
  this.u = f || k;
  this.La = new Sb;
  this.La.setInterval(Zb)
}
q = Q.prototype;
q.t = k;
q.F = o;
q.ma = k;
q.kb = k;
q.va = k;
q.R = k;
q.s = k;
q.S = k;
q.q = k;
q.za = 0;
q.I = k;
q.ka = k;
q.o = k;
q.h = -1;
q.Nb = j;
q.aa = o;
var Yb = 45E3, Zb = 250;
function $b(a, b) {
  switch(a) {
    case 0:
      return"Non-200 return code (" + b + ")";
    case 1:
      return"XMLHTTP failure (no data)";
    case 2:
      return"HttpConnection timeout";
    default:
      return"Unknown error"
  }
}
var ac = {}, bc = {};
function cc() {
  return!A || Ma(10)
}
q = Q.prototype;
q.T = p("t");
q.setTimeout = p("xa");
function dc(a, b, c) {
  a.R = L(b.l());
  a.S = c;
  a.rb = j;
  ec(a, k)
}
function fc(a, b, c, d, e) {
  a.R = L(b.l());
  a.S = k;
  a.rb = c;
  e && (a.Nb = o);
  ec(a, d)
}
function ec(a, b) {
  a.va = x();
  gc(a);
  a.s = a.R.l();
  ob(a.s, "t", a.wa);
  if(hc(a)) {
    a.za = 0;
    a.q = a.g.Ya(a.g.Pa() ? b : k);
    Xb(a.Ca, a.q, "readystatechange", a.lc, o, a);
    var c;
    if(a.t) {
      c = a.t;
      var d = {}, e;
      for(e in c) {
        d[e] = c[e]
      }
      c = d
    }else {
      c = {}
    }
    a.S ? (a.ka = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.q.send(a.s, a.ka, a.S, c)) : (a.ka = "GET", a.Nb && !B && (c.Connection = "close"), a.q.send(a.s, a.ka, k, c));
    if(d = a.S) {
      c = "";
      d = d.split("&");
      for(e = 0;e < d.length;e++) {
        var f = d[e].split("=");
        if(1 < f.length) {
          var i = f[0], f = f[1], m = i.split("_");
          c = 2 <= m.length && "type" == m[1] ? c + (i + "=" + f + "&") : c + (i + "=redacted&")
        }
      }
    }else {
      c = k
    }
    a.a.info("XMLHTTP REQ (" + a.C + ") [attempt " + a.wa + "]: " + a.ka + "\n" + a.s + "\n" + c)
  }
}
q.lc = function(a) {
  a = a.target;
  try {
    if(a == this.q) {
      a: {
        var b = R(this.q);
        if(!cc() || B && !C("420+")) {
          if(4 > b) {
            break a
          }
        }else {
          if(3 > b || 3 == b && !Ba && !ic(this.q)) {
            break a
          }
        }
        jc(this);
        var c = kc(this.q);
        this.h = c;
        var d = ic(this.q);
        d || this.a.debug("No response text for uri " + this.s + " status " + c);
        this.F = 200 == c;
        this.a.info("XMLHTTP RESP (" + this.C + ") [ attempt " + this.wa + "]: " + this.ka + "\n" + this.s + "\n" + b + " " + c);
        if(this.F) {
          if(4 == b && S(this), this.rb ? (lc(this, b, d), Ba && 3 == b && (Xb(this.Ca, this.La, Ub, this.ic), this.La.start())) : (mc(this.a, this.C, d, k), nc(this, d)), this.F && !this.aa) {
            4 == b ? this.g.fa(this) : (this.F = o, gc(this))
          }
        }else {
          this.o = 400 == c && 0 < d.indexOf("Unknown SID") ? 3 : 0, T(), mc(this.a, this.C, d), S(this), oc(this)
        }
      }
    }else {
      this.a.la("Called back with an unexpected xmlhttp")
    }
  }catch(e) {
    this.a.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.q && ic(this.q) ? pc(this.a, e, "ResponseText: " + ic(this.q)) : pc(this.a, e, "No response text")
  }finally {
  }
};
function lc(a, b, c) {
  for(var d = j;!a.aa && a.za < c.length;) {
    var e = qc(a, c);
    if(e == bc) {
      4 == b && (a.o = 4, T(), d = o);
      mc(a.a, a.C, k, "[Incomplete Response]");
      break
    }else {
      if(e == ac) {
        a.o = 4;
        T();
        mc(a.a, a.C, c, "[Invalid Chunk]");
        d = o;
        break
      }else {
        mc(a.a, a.C, e, k), nc(a, e)
      }
    }
  }
  4 == b && 0 == c.length && (a.o = 1, T(), d = o);
  a.F = a.F && d;
  d || (mc(a.a, a.C, c, "[Invalid Chunked Response]"), S(a), oc(a))
}
q.ic = function() {
  var a = R(this.q), b = ic(this.q);
  this.za < b.length && (jc(this), lc(this, a, b), this.F && 4 != a && gc(this))
};
function hc(a) {
  if(!a.u) {
    return j
  }
  if(a.u.Yb()) {
    return Xb(a.Ca, a.u, "offline", a.ob), j
  }
  a.ob();
  return o
}
q.ob = function() {
  this.F && this.a.D("Received browser offline event even though request completed successfully");
  this.a.info("BROWSER_OFFLINE: " + this.s);
  S(this);
  this.o = 6;
  T();
  oc(this)
};
function qc(a, b) {
  var c = a.za, d = b.indexOf("\n", c);
  if(-1 == d) {
    return bc
  }
  c = Number(b.substring(c, d));
  if(isNaN(c)) {
    return ac
  }
  d += 1;
  if(d + c > b.length) {
    return bc
  }
  var e = b.substr(d, c);
  a.za = d + c;
  return e
}
function rc(a, b) {
  a.va = x();
  gc(a);
  var c = b ? window.location.hostname : "";
  a.s = a.R.l();
  K(a.s, "DOMAIN", c);
  K(a.s, "t", a.wa);
  if(hc(a)) {
    try {
      a.I = new ActiveXObject("htmlfile")
    }catch(d) {
      a.a.D("ActiveX blocked");
      S(a);
      a.o = 7;
      T();
      oc(a);
      return
    }
    var e = "<html><body>";
    b && (e += '<script>document.domain="' + c + '"<\/script>');
    e += "</body></html>";
    a.I.open();
    a.I.write(e);
    a.I.close();
    a.I.parentWindow.m = w(a.gc, a);
    a.I.parentWindow.d = w(a.Jb, a, j);
    a.I.parentWindow.rpcClose = w(a.Jb, a, o);
    c = a.I.createElement("div");
    a.I.parentWindow.document.body.appendChild(c);
    c.innerHTML = '<iframe src="' + a.s + '"></iframe>';
    a.a.info("TRIDENT REQ (" + a.C + ") [ attempt " + a.wa + "]: GET\n" + a.s)
  }
}
q.gc = function(a) {
  U(w(this.fc, this, a), 0)
};
q.fc = function(a) {
  if(!this.aa) {
    var b = this.a;
    b.info("TRIDENT TEXT (" + this.C + "): " + sc(b, a));
    jc(this);
    nc(this, a);
    gc(this)
  }
};
q.Jb = function(a) {
  U(w(this.ec, this, a), 0)
};
q.ec = function(a) {
  this.aa || (this.a.info("TRIDENT TEXT (" + this.C + "): " + a ? "success" : "failure"), S(this), this.F = a, this.g.fa(this))
};
q.Xb = function() {
  jc(this);
  this.g.fa(this)
};
q.cancel = function() {
  this.aa = j;
  S(this)
};
function gc(a) {
  a.kb = x() + a.xa;
  tc(a, a.xa)
}
function tc(a, b) {
  a.ma != k && g(Error("WatchDog timer not null"));
  a.ma = U(w(a.hc, a), b)
}
function jc(a) {
  a.ma && (r.clearTimeout(a.ma), a.ma = k)
}
q.hc = function() {
  this.ma = k;
  var a = x();
  0 <= a - this.kb ? (this.F && this.a.D("Received watchdog timeout even though request loaded successfully"), this.a.info("TIMEOUT: " + this.s), S(this), this.o = 2, T(), oc(this)) : (this.a.la("WatchDog timer called too early"), tc(this, this.kb - a))
};
function oc(a) {
  !a.g.yb() && !a.aa && a.g.fa(a)
}
function S(a) {
  jc(a);
  a.La.stop();
  var b = a.Ca;
  Xa(b.j, Mb);
  b.j.length = 0;
  a.q && (b = a.q, a.q = k, b.abort());
  a.I && (a.I = k);
  a.u = k
}
q.wb = ba("o");
function nc(a, b) {
  try {
    a.g.Gb(a, b)
  }catch(c) {
    pc(a.a, c, "Error in httprequest callback")
  }
}
;function uc(a) {
  return eval("(" + a + ")")
}
function vc(a) {
  var b = [];
  wc(new xc, a, b);
  return b.join("")
}
function xc() {
  this.Na = h
}
function wc(a, b, c) {
  switch(typeof b) {
    case "string":
      yc(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(b == k) {
        c.push("null");
        break
      }
      if(t(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", f = 0;f < d;f++) {
          c.push(e), e = b[f], wc(a, a.Na ? a.Na.call(b, "" + f, e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), yc(f, c), c.push(":"), wc(a, a.Na ? a.Na.call(b, f, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      g(Error("Unknown type: " + typeof b))
  }
}
var zc = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Ac = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function yc(a, b) {
  b.push('"', a.replace(Ac, function(a) {
    if(a in zc) {
      return zc[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return zc[a] = e + b.toString(16)
  }), '"')
}
;function Bc(a) {
  return Cc(a || arguments.callee.caller, [])
}
function Cc(a, b) {
  var c = [];
  if(0 <= Wa(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Dc(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = "" + f;
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = Dc(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Cc(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Dc(a) {
  if(Ec[a]) {
    return Ec[a]
  }
  a = "" + a;
  if(!Ec[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Ec[a] = b ? b[1] : "[Anonymous]"
  }
  return Ec[a]
}
var Ec = {};
function Fc(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Fc.prototype.vb = k;
Fc.prototype.ub = k;
var Gc = 0;
Fc.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Gc++;
  d || x();
  this.ra = a;
  this.$b = b;
  delete this.vb;
  delete this.ub
};
Fc.prototype.Ob = p("ra");
function V(a) {
  this.ac = a
}
V.prototype.Ka = k;
V.prototype.ra = k;
V.prototype.Wa = k;
V.prototype.xb = k;
function Hc(a, b) {
  this.name = a;
  this.value = b
}
Hc.prototype.toString = ba("name");
var Ic = new Hc("SEVERE", 1E3), Jc = new Hc("WARNING", 900), Kc = new Hc("INFO", 800), Lc = new Hc("CONFIG", 700), Mc = new Hc("FINE", 500);
q = V.prototype;
q.getParent = ba("Ka");
q.Ob = p("ra");
function Nc(a) {
  if(a.ra) {
    return a.ra
  }
  if(a.Ka) {
    return Nc(a.Ka)
  }
  Pa("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= Nc(this).value) {
    a = this.Wb(a, b, c);
    b = "log:" + a.$b;
    r.console && (r.console.timeStamp ? r.console.timeStamp(b) : r.console.markTimeline && r.console.markTimeline(b));
    r.msWriteProfilerMark && r.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.xb) {
        for(var e = 0, f = h;f = c.xb[e];e++) {
          f(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.Wb = function(a, b, c) {
  var d = new Fc(a, "" + b, this.ac);
  if(c) {
    d.vb = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var i;
      var m = ea("window.location.href");
      if(v(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:m, stack:"Not available"}
      }else {
        var l, n, s = o;
        try {
          l = c.lineNumber || c.mc || "Not available"
        }catch(u) {
          l = "Not available", s = j
        }
        try {
          n = c.fileName || c.filename || c.sourceURL || m
        }catch(ua) {
          n = "Not available", s = j
        }
        i = s || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:l, fileName:n, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + oa(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + oa(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + oa(Bc(f) + "-> ")
    }catch(D) {
      e = "Exception trying to expose exception! You win, we lose. " + D
    }
    d.ub = e
  }
  return d
};
q.D = function(a, b) {
  this.log(Ic, a, b)
};
q.la = function(a, b) {
  this.log(Jc, a, b)
};
q.info = function(a, b) {
  this.log(Kc, a, b)
};
function W(a, b) {
  a.log(Mc, b, h)
}
var Oc = {}, Pc = k;
function Qc(a) {
  Pc || (Pc = new V(""), Oc[""] = Pc, Pc.Ob(Lc));
  var b;
  if(!(b = Oc[a])) {
    b = new V(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Qc(a.substr(0, c));
    c.Wa || (c.Wa = {});
    c.Wa[d] = b;
    b.Ka = c;
    Oc[a] = b
  }
  return b
}
;function X() {
  this.p = Qc("goog.net.BrowserChannel")
}
function mc(a, b, c, d) {
  a.info("XMLHTTP TEXT (" + b + "): " + sc(a, c) + (d ? " " + d : ""))
}
X.prototype.debug = function(a) {
  this.info(a)
};
function pc(a, b, c) {
  a.D((c || "Exception") + b)
}
X.prototype.info = function(a) {
  this.p.info(a)
};
X.prototype.la = function(a) {
  this.p.la(a)
};
X.prototype.D = function(a) {
  this.p.D(a)
};
function sc(a, b) {
  if(!b || b == Rc) {
    return b
  }
  try {
    for(var c = uc(b), d = 0;d < c.length;d++) {
      if(t(c[d])) {
        var e = c[d];
        if(!(2 > e.length)) {
          var f = e[1];
          if(t(f) && !(1 > f.length)) {
            var i = f[0];
            if("noop" != i && "stop" != i) {
              for(var m = 1;m < f.length;m++) {
                f[m] = ""
              }
            }
          }
        }
      }
    }
    return vc(c)
  }catch(l) {
    return a.debug("Exception parsing expected JS array - probably was not JS"), b
  }
}
;function Sc(a) {
  this.headers = new ab;
  this.na = a || k
}
y(Sc, Rb);
Sc.prototype.p = Qc("goog.net.XhrIo");
var Tc = /^https?$/i;
q = Sc.prototype;
q.Q = o;
q.f = k;
q.Sa = k;
q.fb = "";
q.Ab = "";
q.o = "";
q.Za = o;
q.Ha = o;
q.cb = o;
q.Y = o;
q.Qa = 0;
q.Z = k;
q.Mb = "";
q.Qb = o;
q.send = function(a, b, c, d) {
  this.f && g(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.fb = a;
  this.o = "";
  this.Ab = b;
  this.Za = o;
  this.Q = j;
  this.f = this.na ? vb(this.na) : vb(tb);
  this.Sa = this.na ? this.na.Aa || (this.na.Aa = xb(this.na)) : tb.Aa || (tb.Aa = xb(tb));
  this.f.onreadystatechange = w(this.Fb, this);
  try {
    W(this.p, Y(this, "Opening Xhr")), this.cb = j, this.f.open(b, a, j), this.cb = o
  }catch(e) {
    W(this.p, Y(this, "Error opening Xhr: " + e.message));
    Uc(this, e);
    return
  }
  var a = c || "", f = this.headers.l();
  d && G(d, function(a, b) {
    f.set(b, a)
  });
  "POST" == b && !f.ca("Content-Type") && f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  G(f, function(a, b) {
    this.f.setRequestHeader(b, a)
  }, this);
  this.Mb && (this.f.responseType = this.Mb);
  "withCredentials" in this.f && (this.f.withCredentials = this.Qb);
  try {
    this.Z && (Tb.clearTimeout(this.Z), this.Z = k), 0 < this.Qa && (W(this.p, Y(this, "Will abort after " + this.Qa + "ms if incomplete")), this.Z = Tb.setTimeout(w(this.xa, this), this.Qa)), W(this.p, Y(this, "Sending request")), this.Ha = j, this.f.send(a), this.Ha = o
  }catch(i) {
    W(this.p, Y(this, "Send error: " + i.message)), Uc(this, i)
  }
};
q.xa = function() {
  "undefined" != typeof da && this.f && (this.o = "Timed out after " + this.Qa + "ms, aborting", W(this.p, Y(this, this.o)), this.dispatchEvent("timeout"), this.abort(8))
};
function Uc(a, b) {
  a.Q = o;
  a.f && (a.Y = j, a.f.abort(), a.Y = o);
  a.o = b;
  Vc(a);
  Wc(a)
}
function Vc(a) {
  a.Za || (a.Za = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.f && this.Q && (W(this.p, Y(this, "Aborting")), this.Q = o, this.Y = j, this.f.abort(), this.Y = o, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Wc(this))
};
q.w = function() {
  this.f && (this.Q && (this.Q = o, this.Y = j, this.f.abort(), this.Y = o), Wc(this, j));
  Sc.ja.w.call(this)
};
q.Fb = function() {
  !this.cb && !this.Ha && !this.Y ? this.dc() : Xc(this)
};
q.dc = function() {
  Xc(this)
};
function Xc(a) {
  if(a.Q && "undefined" != typeof da) {
    if(a.Sa[1] && 4 == R(a) && 2 == kc(a)) {
      W(a.p, Y(a, "Local request error detected and ignored"))
    }else {
      if(a.Ha && 4 == R(a)) {
        Tb.setTimeout(w(a.Fb, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == R(a)) {
          W(a.p, Y(a, "Request complete"));
          a.Q = o;
          try {
            var b = kc(a), c, d;
            a: {
              switch(b) {
                case 200:
                ;
                case 201:
                ;
                case 202:
                ;
                case 204:
                ;
                case 304:
                ;
                case 1223:
                  d = j;
                  break a;
                default:
                  d = o
              }
            }
            if(!(c = d)) {
              var e;
              if(e = 0 === b) {
                var f = ("" + a.fb).match(Qa)[1] || k;
                if(!f && self.location) {
                  var i = self.location.protocol, f = i.substr(0, i.length - 1)
                }
                e = !Tc.test(f ? f.toLowerCase() : "")
              }
              c = e
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              var m;
              try {
                m = 2 < R(a) ? a.f.statusText : ""
              }catch(l) {
                W(a.p, "Can not get status: " + l.message), m = ""
              }
              a.o = m + " [" + kc(a) + "]";
              Vc(a)
            }
          }finally {
            Wc(a)
          }
        }
      }
    }
  }
}
function Wc(a, b) {
  if(a.f) {
    var c = a.f, d = a.Sa[0] ? fa : k;
    a.f = k;
    a.Sa = k;
    a.Z && (Tb.clearTimeout(a.Z), a.Z = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      a.p.D("Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
q.isActive = function() {
  return!!this.f
};
function R(a) {
  return a.f ? a.f.readyState : 0
}
function kc(a) {
  try {
    return 2 < R(a) ? a.f.status : -1
  }catch(b) {
    return a.p.la("Can not get status: " + b.message), -1
  }
}
function ic(a) {
  try {
    return a.f ? a.f.responseText : ""
  }catch(b) {
    return W(a.p, "Can not get responseText: " + b.message), ""
  }
}
q.wb = function() {
  return v(this.o) ? this.o : "" + this.o
};
function Y(a, b) {
  return b + " [" + a.Ab + " " + a.fb + " " + kc(a) + "]"
}
;function Yc() {
  this.Lb = x()
}
new Yc;
Yc.prototype.set = p("Lb");
Yc.prototype.reset = function() {
  this.set(x())
};
Yc.prototype.get = ba("Lb");
function Zc(a, b, c, d, e) {
  (new X).debug("TestLoadImageWithRetries: " + e);
  if(0 == d) {
    c(o)
  }else {
    var f = e || 0;
    d--;
    $c(a, b, function(e) {
      e ? c(j) : r.setTimeout(function() {
        Zc(a, b, c, d, f)
      }, f)
    })
  }
}
function $c(a, b, c) {
  var d = new X;
  d.debug("TestLoadImage: loading " + a);
  var e = new Image, f = k;
  createHandler = function(a, b) {
    return function() {
      try {
        d.debug("TestLoadImage: " + b), e.onload = k, e.onerror = k, e.onabort = k, e.ontimeout = k, r.clearTimeout(f), c(a)
      }catch(l) {
        pc(d, l)
      }
    }
  };
  e.onload = createHandler(j, "loaded");
  e.onerror = createHandler(o, "error");
  e.onabort = createHandler(o, "abort");
  e.ontimeout = createHandler(o, "timeout");
  f = r.setTimeout(function() {
    if(e.ontimeout) {
      e.ontimeout()
    }
  }, b);
  e.src = a
}
;function ad(a, b) {
  this.g = a;
  this.a = b
}
q = ad.prototype;
q.t = k;
q.v = k;
q.Ma = o;
q.Pb = k;
q.Ea = k;
q.eb = k;
q.H = k;
q.b = k;
q.h = -1;
q.L = k;
q.Ua = k;
q.T = p("t");
q.Xa = function(a) {
  this.H = a;
  a = bd(this.g, this.H);
  T();
  ob(a, "MODE", "init");
  this.v = new Q(this, this.a, h, h, h, this.g.u);
  this.v.T(this.t);
  fc(this.v, a, o, k, j);
  this.b = 0;
  this.Pb = x()
};
q.Tb = function(a) {
  a ? (this.b = 2, cd(this)) : (T(), a = this.g, a.a.debug("Test Connection Blocked"), a.h = a.V.h, Z(a, 9))
};
function cd(a) {
  a.a.debug("TestConnection: starting stage 2");
  a.v = new Q(a, a.a, h, h, h, a.g.u);
  a.v.T(a.t);
  var b = dd(a.g, a.L, a.H);
  T();
  if(cc()) {
    ob(b, "TYPE", "xmlhttp"), fc(a.v, b, o, a.L, o)
  }else {
    ob(b, "TYPE", "html");
    var c = a.v, a = Boolean(a.L);
    c.R = L(b.l());
    rc(c, a)
  }
}
q.Ya = function(a) {
  return this.g.Ya(a)
};
q.abort = function() {
  this.v && (this.v.cancel(), this.v = k);
  this.h = -1
};
q.yb = ca(o);
q.Gb = function(a, b) {
  this.h = a.h;
  if(0 == this.b) {
    if(this.a.debug("TestConnection: Got data for stage 1"), b) {
      try {
        var c = uc(b)
      }catch(d) {
        pc(this.a, d);
        ed(this.g, this);
        return
      }
      this.L = this.g.correctHostPrefix(c[0]);
      this.Ua = c[1]
    }else {
      this.a.debug("TestConnection: Null responseText"), ed(this.g, this)
    }
  }else {
    if(2 == this.b) {
      if(this.Ma) {
        T(), this.eb = x()
      }else {
        if("11111" == b) {
          if(T(), this.Ma = j, this.Ea = x(), c = this.Ea - this.Pb, cc() || 500 > c) {
            this.h = 200, this.v.cancel(), this.a.debug("Test connection succeeded; using streaming connection"), T(), fd(this.g, this, j)
          }
        }else {
          T(), this.Ea = this.eb = x(), this.Ma = o
        }
      }
    }
  }
};
q.fa = function() {
  this.h = this.v.h;
  if(this.v.F) {
    if(0 == this.b) {
      if(this.a.debug("TestConnection: request complete for initial check"), this.Ua) {
        this.b = 1;
        var a = gd(this.g, this.Ua, "/mail/images/cleardot.gif");
        L(a);
        Zc(a.toString(), 5E3, w(this.Tb, this), 3, 2E3)
      }else {
        this.b = 2, cd(this)
      }
    }else {
      2 == this.b && (this.a.debug("TestConnection: request complete for stage 2"), a = o, (a = cc() ? this.Ma : 200 > this.eb - this.Ea ? o : j) ? (this.a.debug("Test connection succeeded; using streaming connection"), T(), fd(this.g, this, j)) : (this.a.debug("Test connection failed; not using streaming"), T(), fd(this.g, this, o)))
    }
  }else {
    this.a.debug("TestConnection: request failed, in state " + this.b), 0 == this.b ? T() : 2 == this.b && T(), ed(this.g, this)
  }
};
q.Pa = function() {
  return this.g.Pa()
};
q.isActive = function() {
  return this.g.isActive()
};
function hd(a) {
  this.pb = a || k;
  this.b = id;
  this.r = [];
  this.N = [];
  this.a = new X
}
function jd(a, b) {
  this.Cb = a;
  this.map = b
}
q = hd.prototype;
q.t = k;
q.oa = k;
q.n = k;
q.k = k;
q.H = k;
q.Fa = k;
q.mb = k;
q.L = k;
q.u = k;
q.Sb = j;
q.ta = 0;
q.bc = 0;
q.Da = o;
q.c = k;
q.G = k;
q.J = k;
q.W = k;
q.V = k;
q.jb = k;
q.Rb = j;
q.qa = -1;
q.Bb = -1;
q.h = -1;
q.X = 0;
q.$ = 0;
q.sb = uc;
q.ba = 8;
var id = 1, kd = new Rb;
function ld(a) {
  O.call(this, "statevent", a)
}
y(ld, O);
function md(a, b) {
  O.call(this, "timingevent", a);
  this.size = b
}
y(md, O);
var Rc = "y2f%";
q = hd.prototype;
q.Xa = function(a, b, c, d, e) {
  this.a.debug("connect()");
  T();
  this.H = b;
  this.oa = c || {};
  d && e !== h && (this.oa.OSID = d, this.oa.OAID = e);
  this.a.debug("connectTest_()");
  nd(this) && (this.V = new ad(this, this.a), this.V.T(this.t), this.V.Xa(a))
};
function od(a) {
  a.V && (a.V.abort(), a.V = k);
  a.k && (a.k.cancel(), a.k = k);
  a.J && (r.clearTimeout(a.J), a.J = k);
  pd(a);
  a.n && (a.n.cancel(), a.n = k);
  a.G && (r.clearTimeout(a.G), a.G = k)
}
q.T = p("t");
q.yb = function() {
  return 0 == this.b
};
function qd(a) {
  !a.n && !a.G && (a.G = U(w(a.Ib, a), 0), a.X = 0)
}
q.Ib = function(a) {
  this.G = k;
  this.a.debug("startForwardChannel_");
  if(nd(this)) {
    if(this.b == id) {
      if(a) {
        this.a.D("Not supposed to retry the open")
      }else {
        this.a.debug("open_()");
        this.ta = Math.floor(1E5 * Math.random());
        var a = this.ta++, b = new Q(this, this.a, "", a, h, this.u);
        b.T(this.t);
        var c = rd(this), d = this.Fa.l();
        K(d, "RID", a);
        this.pb && K(d, "CVER", this.pb);
        sd(this, d);
        dc(b, d, c);
        this.n = b;
        this.b = 2
      }
    }else {
      3 == this.b && (a ? td(this, a) : 0 == this.r.length ? this.a.debug("startForwardChannel_ returned: nothing to send") : this.n ? this.a.D("startForwardChannel_ returned: connection already in progress") : (td(this), this.a.debug("startForwardChannel_ finished, sent request")))
    }
  }
};
function td(a, b) {
  var c, d;
  b ? 6 < a.ba ? (a.r = a.N.concat(a.r), a.N.length = 0, c = a.ta - 1, d = rd(a)) : (c = b.C, d = b.S) : (c = a.ta++, d = rd(a));
  var e = a.Fa.l();
  K(e, "SID", a.U);
  K(e, "RID", c);
  K(e, "AID", a.qa);
  sd(a, e);
  c = new Q(a, a.a, a.U, c, a.X + 1, a.u);
  c.T(a.t);
  c.setTimeout(Math.round(1E4) + Math.round(1E4 * Math.random()));
  a.n = c;
  dc(c, e, d)
}
function sd(a, b) {
  if(a.c) {
    var c = a.c.getAdditionalParams(a);
    c && G(c, function(a, c) {
      K(b, c, a)
    })
  }
}
function rd(a) {
  var b = Math.min(a.r.length, 1E3), c = ["count=" + b], d;
  6 < a.ba && 0 < b ? (d = a.r[0].Cb, c.push("ofs=" + d)) : d = 0;
  for(var e = 0;e < b;e++) {
    var f = a.r[e].Cb, i = a.r[e].map, f = 6 >= a.ba ? e : f - d;
    try {
      G(i, function(a, b) {
        c.push("req" + f + "_" + b + "=" + encodeURIComponent(a))
      })
    }catch(m) {
      c.push("req" + f + "_type=" + encodeURIComponent("_badmap")), a.c && a.c.badMapError(a, i)
    }
  }
  a.N = a.N.concat(a.r.splice(0, b));
  return c.join("&")
}
function ud(a) {
  !a.k && !a.J && (a.lb = 1, a.J = U(w(a.Hb, a), 0), a.$ = 0)
}
function vd(a) {
  if(a.k || a.J) {
    return a.a.D("Request already in progress"), o
  }
  if(3 <= a.$ || !(a.u ? a.u.Yb() : 1)) {
    return o
  }
  a.a.debug("Going to retry GET");
  a.lb++;
  a.J = U(w(a.Hb, a), wd(a, a.$));
  a.$++;
  return j
}
q.Hb = function() {
  this.J = k;
  if(nd(this)) {
    this.a.debug("Creating new HttpRequest");
    this.k = new Q(this, this.a, this.U, "rpc", this.lb, this.u);
    this.k.T(this.t);
    var a = this.mb.l();
    K(a, "RID", "rpc");
    K(a, "SID", this.U);
    K(a, "CI", this.jb ? "0" : "1");
    K(a, "AID", this.qa);
    sd(this, a);
    if(cc()) {
      K(a, "TYPE", "xmlhttp"), fc(this.k, a, j, this.L, o)
    }else {
      K(a, "TYPE", "html");
      var b = this.k, c = Boolean(this.L);
      b.R = L(a.l());
      rc(b, c)
    }
    this.a.debug("New Request created")
  }
};
function nd(a) {
  if(a.c) {
    var b = a.c.okToMakeRequest(a);
    if(0 != b) {
      return a.a.debug("Handler returned error code from okToMakeRequest"), Z(a, b), o
    }
  }
  return j
}
function fd(a, b, c) {
  a.a.debug("Test Connection Finished");
  a.jb = a.Rb && c;
  a.h = b.h;
  a.a.debug("connectChannel_()");
  a.Vb(id, 0);
  a.Fa = bd(a, a.H);
  qd(a)
}
function ed(a, b) {
  a.a.debug("Test Connection Failed");
  a.h = b.h;
  Z(a, 2)
}
q.Gb = function(a, b) {
  if(!(0 == this.b || this.k != a && this.n != a)) {
    if(this.h = a.h, this.n == a && 3 == this.b) {
      if(7 < this.ba) {
        var c;
        try {
          c = this.sb(b)
        }catch(d) {
          c = k
        }
        if(t(c) && 3 == c.length) {
          var e = c;
          if(0 == e[0]) {
            a: {
              if(this.a.debug("Server claims our backchannel is missing."), this.J) {
                this.a.debug("But we are currently starting the request.")
              }else {
                if(this.k) {
                  if(this.k.va + 3E3 < this.n.va) {
                    pd(this), this.k.cancel(), this.k = k
                  }else {
                    break a
                  }
                }else {
                  this.a.la("We do not have a BackChannel established")
                }
                vd(this);
                T()
              }
            }
          }else {
            this.Bb = e[1], c = this.Bb - this.qa, 0 < c && (e = e[2], this.a.debug(e + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), 37500 > e && (this.jb && 0 == this.$) && !this.W && (this.W = U(w(this.cc, this), 6E3)))
          }
        }else {
          this.a.debug("Bad POST response data returned"), Z(this, 11)
        }
      }else {
        b != Rc && (this.a.debug("Bad data returned - missing/invald magic cookie"), Z(this, 11))
      }
    }else {
      if(this.k == a && pd(this), !/^[\s\xa0]*$/.test(b)) {
        c = this.sb(b);
        for(var e = this.c && this.c.channelHandleMultipleArrays ? [] : k, f = 0;f < c.length;f++) {
          var i = c[f];
          this.qa = i[0];
          i = i[1];
          2 == this.b ? "c" == i[0] ? (this.U = i[1], this.L = this.correctHostPrefix(i[2]), i = i[3], this.ba = i != k ? i : 6, this.b = 3, this.c && this.c.channelOpened(this), this.mb = dd(this, this.L, this.H), ud(this)) : "stop" == i[0] && Z(this, 7) : 3 == this.b && ("stop" == i[0] ? (e && e.length && (this.c.channelHandleMultipleArrays(this, e), e.length = 0), Z(this, 7)) : "noop" != i[0] && (e ? e.push(i) : this.c && this.c.channelHandleArray(this, i)), this.$ = 0)
        }
        e && e.length && this.c.channelHandleMultipleArrays(this, e)
      }
    }
  }
};
q.correctHostPrefix = function(a) {
  return this.Sb ? this.c ? this.c.correctHostPrefix(a) : a : k
};
q.cc = function() {
  this.W != k && (this.W = k, this.k.cancel(), this.k = k, vd(this), T())
};
function pd(a) {
  a.W != k && (r.clearTimeout(a.W), a.W = k)
}
q.fa = function(a) {
  this.a.debug("Request complete");
  var b;
  if(this.k == a) {
    pd(this), this.k = k, b = 2
  }else {
    if(this.n == a) {
      this.n = k, b = 1
    }else {
      return
    }
  }
  this.h = a.h;
  if(0 != this.b) {
    if(a.F) {
      1 == b ? (x(), kd.dispatchEvent(new md(kd, a.S ? a.S.length : 0)), qd(this), this.N.length = 0) : ud(this)
    }else {
      var c = a.wb();
      if(3 == c || 7 == c || 0 == c && 0 < this.h) {
        this.a.debug("Not retrying due to error type")
      }else {
        this.a.debug("Maybe retrying, last error: " + $b(c, this.h));
        var d;
        if(d = 1 == b) {
          this.n || this.G ? (this.a.D("Request already in progress"), d = o) : this.b == id || this.X >= (this.Da ? 0 : 2) ? d = o : (this.a.debug("Going to retry POST"), this.G = U(w(this.Ib, this, a), wd(this, this.X)), this.X++, d = j)
        }
        if(d || 2 == b && vd(this)) {
          return
        }
        this.a.debug("Exceeded max number of retries")
      }
      this.a.debug("Error: HTTP request failed");
      switch(c) {
        case 1:
          Z(this, 5);
          break;
        case 4:
          Z(this, 10);
          break;
        case 3:
          Z(this, 6);
          break;
        case 7:
          Z(this, 12);
          break;
        default:
          Z(this, 2)
      }
    }
  }
};
function wd(a, b) {
  var c = 5E3 + Math.floor(1E4 * Math.random());
  a.isActive() || (a.a.debug("Inactive channel"), c *= 2);
  return c * b
}
q.Vb = function(a) {
  0 <= Wa(arguments, this.b) || g(Error("Unexpected channel state: " + this.b))
};
function Z(a, b) {
  a.a.info("Error code " + b);
  if(2 == b || 9 == b) {
    var c = k;
    a.c && (c = a.c.getNetworkTestImageUri(a));
    var d = w(a.jc, a);
    c || (c = new I("//www.google.com/images/cleardot.gif"), L(c));
    $c(c.toString(), 1E4, d)
  }else {
    T()
  }
  xd(a, b)
}
q.jc = function(a) {
  a ? (this.a.info("Successfully pinged google.com"), T()) : (this.a.info("Failed to ping google.com"), T(), xd(this, 8))
};
function xd(a, b) {
  a.a.debug("HttpChannel: error - " + b);
  a.b = 0;
  a.c && a.c.channelError(a, b);
  yd(a);
  od(a)
}
function yd(a) {
  a.b = 0;
  a.h = -1;
  if(a.c) {
    if(0 == a.N.length && 0 == a.r.length) {
      a.c.channelClosed(a)
    }else {
      a.a.debug("Number of undelivered maps, pending: " + a.N.length + ", outgoing: " + a.r.length);
      var b = Za(a.N), c = Za(a.r);
      a.N.length = 0;
      a.r.length = 0;
      a.c.channelClosed(a, b, c)
    }
  }
}
function bd(a, b) {
  var c = gd(a, k, b);
  a.a.debug("GetForwardChannelUri: " + c);
  return c
}
function dd(a, b, c) {
  b = gd(a, a.Pa() ? b : k, c);
  a.a.debug("GetBackChannelUri: " + b);
  return b
}
function gd(a, b, c) {
  var d = c instanceof I ? c.l() : new I(c, h);
  if("" != d.da) {
    b && db(d, b + "." + d.da), eb(d, d.ua)
  }else {
    var e = window.location, d = qb(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c)
  }
  a.oa && G(a.oa, function(a, b) {
    K(d, b, a)
  });
  K(d, "VER", a.ba);
  sd(a, d);
  return d
}
q.Ya = function(a) {
  a && g(Error("Can't create secondary domain capable XhrIo object."));
  a = new Sc;
  a.Qb = j;
  return a
};
q.isActive = function() {
  return!!this.c && this.c.isActive(this)
};
function U(a, b) {
  "function" != ga(a) && g(Error("Fn must not be null and must be a function"));
  return r.setTimeout(function() {
    a()
  }, b)
}
function T() {
  kd.dispatchEvent(new ld(kd))
}
q.Pa = function() {
  return!cc()
};
function zd() {
}
q = zd.prototype;
q.channelHandleMultipleArrays = k;
q.okToMakeRequest = ca(0);
q.channelOpened = aa();
q.channelHandleArray = aa();
q.channelError = aa();
q.channelClosed = aa();
q.getAdditionalParams = function() {
  return{}
};
q.getNetworkTestImageUri = ca(k);
q.isActive = ca(j);
q.badMapError = aa();
q.correctHostPrefix = function(a) {
  return a
};
var $, Ad;
Ad = {"0":"Ok", 4:"User is logging out", 6:"Unknown session ID", 7:"Stopped by server", 8:"General network error", 2:"Request failed", 9:"Blocked by a network administrator", 5:"No data from server", 10:"Got bad data from the server", 11:"Got a bad response from the server"};
$ = function(a, b) {
  var c, d, e, f, i, m, l, n, s;
  l = this;
  a || (a = "channel");
  a.match(/:\/\//) && a.replace(/^ws/, "http");
  b || (b = {});
  if(t(b || "string" === typeof b)) {
    b = {}
  }
  i = b.reconnectTime || 3E3;
  s = function(a) {
    l.readyState = l.readyState = a
  };
  s(this.CLOSED);
  n = k;
  e = b.nc;
  c = new zd;
  c.channelOpened = function() {
    e = n;
    s($.OPEN);
    return"function" === typeof l.onopen ? l.onopen() : h
  };
  d = k;
  c.channelError = function(a, b) {
    var c;
    c = Ad[b];
    d = b;
    s($.Ta);
    return"function" === typeof l.onerror ? l.onerror(c, b) : h
  };
  m = k;
  c.channelClosed = function(a, c, e) {
    if(l.readyState !== $.CLOSED) {
      n = k;
      a = d ? Ad[d] : "Closed";
      s($.CLOSED);
      try {
        if("function" === typeof l.onclose) {
          l.onclose(a, c, e)
        }
      }catch(Bd) {
        "undefined" !== typeof console && console !== k && console.error(Bd.stack)
      }
      b.reconnect && (7 !== d && 0 !== d) && (c = 6 === d ? 0 : i, clearTimeout(m), m = setTimeout(f, c));
      return d = k
    }
  };
  c.channelHandleArray = function(a, b) {
    return"function" === typeof l.onmessage ? l.onmessage(b) : h
  };
  f = function() {
    n && g(Error("Reconnect() called from invalid state"));
    s($.CONNECTING);
    if("function" === typeof l.onconnecting) {
      l.onconnecting()
    }
    clearTimeout(m);
    n = new hd(b.appVersion);
    n.c = c;
    d = k;
    if(b.failFast) {
      var f = n;
      f.Da = j;
      f.a.info("setFailFast: true");
      if((f.n || f.G) && f.X > (f.Da ? 0 : 2)) {
        f.a.info("Retry count " + f.X + " > new maxRetries " + (f.Da ? 0 : 2) + ". Fail immediately!"), f.n ? (f.n.cancel(), f.fa(f.n)) : (r.clearTimeout(f.G), f.G = k, Z(f, 2))
      }
    }
    return n.Xa("" + a + "/test", "" + a + "/bind", k, e != k ? e.U : h, e != k ? e.qa : h)
  };
  this.open = function() {
    l.readyState !== l.CLOSED && g(Error("Already open"));
    return f()
  };
  this.close = function() {
    clearTimeout(m);
    d = 0;
    if(l.readyState !== $.CLOSED) {
      s($.Ta);
      var a = n;
      a.a.debug("disconnect()");
      od(a);
      if(3 == a.b) {
        var b = a.ta++, c = a.Fa.l();
        K(c, "SID", a.U);
        K(c, "RID", b);
        K(c, "TYPE", "terminate");
        sd(a, c);
        b = new Q(a, a.a, a.U, b, h, a.u);
        b.R = L(c.l());
        c = new Image;
        c.src = b.R;
        c.onload = c.onerror = w(b.Xb, b);
        b.va = x();
        gc(b)
      }
      yd(a)
    }
  };
  this.sendMap = function(a) {
    var b;
    ((b = l.readyState) === $.Ta || b === $.CLOSED) && g(Error("Cannot send to a closed connection"));
    b = n;
    0 == b.b && g(Error("Invalid operation: sending map when state is closed"));
    1E3 == b.r.length && b.a.D("Already have 1000 queued maps upon queueing " + vc(a));
    b.r.push(new jd(b.bc++, a));
    (2 == b.b || 3 == b.b) && qd(b)
  };
  this.send = function(a) {
    return this.sendMap({JSON:vc(a)})
  };
  f();
  return this
};
$.prototype.CONNECTING = $.CONNECTING = $.CONNECTING = 0;
$.prototype.OPEN = $.OPEN = $.OPEN = 1;
$.prototype.CLOSING = $.CLOSING = $.Ta = 2;
$.prototype.CLOSED = $.CLOSED = $.CLOSED = 3;
("undefined" !== typeof exports && exports !== k ? exports : window).BCSocket = $;

})();
