(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        2938: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 8934)), Promise.resolve().then(n.t.bind(n, 3046, 23)), Promise.resolve().then(n.t.bind(n, 7616, 23)), Promise.resolve().then(n.t.bind(n, 5832, 23)), Promise.resolve().then(n.t.bind(n, 2338, 23)), Promise.resolve().then(n.t.bind(n, 8097, 23)), Promise.resolve().then(n.t.bind(n, 7960, 23))
        },
        8934: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return r
                }
            });
            var o = n(2265);

            function r() {
                return (0, o.useEffect)(() => {
                    Array.prototype.includes || (Array.prototype.includes = function(e, t) {
                        let n = Object(this),
                            o = parseInt(String(n.length)) || 0;
                        if (0 === o) return !1;
                        let r = void 0 !== t && parseInt(String(t)) || 0,
                            i = r >= 0 ? r : Math.max(o + r, 0);
                        for (; i < o; i++) {
                            var a;
                            if ((a = n[i]) === e || "number" == typeof a && "number" == typeof e && isNaN(a) && isNaN(e)) return !0
                        }
                        return !1
                    }), String.prototype.includes || (String.prototype.includes = function(e, t) {
                        return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
                    }), String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
                        return t = t || 0, this.substr(t, e.length) === e
                    }), String.prototype.endsWith || (String.prototype.endsWith = function(e, t) {
                        return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
                    }), "function" != typeof Object.assign && (Object.assign = function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                        if (null == e) throw TypeError("Cannot convert undefined or null to object");
                        let r = Object(e);
                        for (let e = 0; e < n.length; e++) {
                            let t = n[e];
                            if (null != t)
                                for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e])
                        }
                        return r
                    }), Array.from || (Array.from = function(e, t, n) {
                        let o, r;
                        let i = Object(e);
                        if (null == e) throw TypeError("Array.from requires an array-like object - not null or undefined");
                        let a = void 0 === t ? void 0 : t;
                        if (void 0 !== a) {
                            if ("function" != typeof a) throw TypeError("Array.from: when provided, the second argument must be a function");
                            arguments.length > 2 && (o = n)
                        }
                        let s = parseInt(i.length) || 0,
                            l = "function" == typeof this ? Object(new this(s)) : Array(s),
                            d = 0;
                        for (; d < s;) r = i[d], a ? l[d] = void 0 === o ? a(r, d) : a.call(o, r, d) : l[d] = r, d += 1;
                        return l.length = s, l
                    }), "undefined" == typeof Promise && console.warn("Promise is not supported in this browser. Some features may not work."), window.fetch || console.warn("fetch is not supported in this browser. Some features may not work."); {
                        let e = () => {
                            let e = .01 * window.innerHeight;
                            document.documentElement.style.setProperty("--vh", `${e}px`);
                            let t = document.documentElement;
                            t.style.getPropertyValue("--vh") || t.style.setProperty("--vh", `${e}px`)
                        };
                        e();
                        let t = null;
                        window.addEventListener("resize", () => {
                            t && cancelAnimationFrame(t), t = requestAnimationFrame(e)
                        }, {
                            passive: !0
                        }), window.addEventListener("orientationchange", () => {
                            setTimeout(e, 100)
                        }, {
                            passive: !0
                        });
                        let n = window.innerHeight;
                        if (setInterval(() => {
                                let t = window.innerHeight;
                                Math.abs(t - n) > 50 && (e(), n = t)
                            }, 250), /iPad|iPhone|iPod/.test(navigator.userAgent) && (document.body.style.webkitOverflowScrolling = "touch", document.documentElement.classList.add("ios-device"), /iPad|iPhone|iPod/.test(navigator.userAgent))) {
                            let e = window.innerHeight;
                            document.documentElement.style.setProperty("--ios-vh", `${e}px`)
                        }
                        if (/Android/.test(navigator.userAgent)) {
                            document.documentElement.classList.add("android-device");
                            let e = document.querySelector('meta[name="viewport"]');
                            e && e.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover");
                            let t = window.innerHeight;
                            document.documentElement.style.setProperty("--android-vh", `${t}px`)
                        }
                        let o = navigator.userAgent.toLowerCase();
                        o.indexOf("chrome") > -1 && -1 === o.indexOf("edge") ? document.documentElement.classList.add("chrome") : o.indexOf("firefox") > -1 ? document.documentElement.classList.add("firefox") : o.indexOf("safari") > -1 && -1 === o.indexOf("chrome") ? document.documentElement.classList.add("safari") : o.indexOf("edge") > -1 && document.documentElement.classList.add("edge"), "ontouchstart" in window || navigator.maxTouchPoints > 0 ? document.documentElement.classList.add("touch-device") : document.documentElement.classList.add("no-touch");
                        let r = o.indexOf("telegram") > -1 || void 0 !== window.TelegramWebApp || void 0 !== window.Telegram,
                            i = o.match(/chrome\/(\d+)/),
                            a = i ? parseInt(i[1]) : 0,
                            s = navigator.userAgent.match(/Android (\d+)/),
                            l = s ? parseInt(s[1]) : 0;
                        if (r) {
                            if (document.documentElement.classList.add("telegram-browser"), /Android/.test(navigator.userAgent)) {
                                document.documentElement.classList.add("telegram-android"), a >= 140 && document.documentElement.classList.add("chrome-140-plus"), 11 === l && document.documentElement.classList.add("android-11");
                                let e = document.querySelector('meta[name="viewport"]');
                                e && e.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover");
                                let t = () => {
                                    let e = .01 * window.innerHeight,
                                        t = window.innerHeight;
                                    document.documentElement.style.setProperty("--vh", `${e}px`), document.documentElement.style.setProperty("--telegram-vh", `${t}px`), document.body.style.setProperty("--telegram-vh", `${t}px`)
                                };
                                t(), window.addEventListener("resize", t, {
                                    passive: !0
                                }), window.addEventListener("orientationchange", () => {
                                    setTimeout(t, 300)
                                }, {
                                    passive: !0
                                }), document.body.style.webkitOverflowScrolling = "touch", document.body.style.transform = "translateZ(0)", document.body.style.webkitTransform = "translateZ(0)", document.body.style.visibility = "visible", document.body.style.opacity = "1"
                            }
                            /iPad|iPhone|iPod/.test(navigator.userAgent) && document.documentElement.classList.add("telegram-ios")
                        }
                    }
                    if (!window.CSS || !CSS.supports || !CSS.supports("color", "var(--fake-var)")) {
                        let e = document.createElement("style");
                        e.textContent = `
        /* Fallback for browsers without CSS custom properties support */
        html {
          --vh: 1vh;
        }
      `, document.head.appendChild(e)
                    }
                    return () => {
                        window.removeEventListener("resize", () => {}), window.removeEventListener("orientationchange", () => {})
                    }
                }, []), null
            }
        },
        7960: function() {},
        3046: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Cormorant_Garamond_d4fc9e', '__Cormorant_Garamond_Fallback_d4fc9e'",
                    fontStyle: "normal"
                },
                className: "__className_d4fc9e",
                variable: "__variable_d4fc9e"
            }
        },
        8097: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Kantumruy_Pro_680a2b', '__Kantumruy_Pro_Fallback_680a2b'",
                    fontStyle: "normal"
                },
                className: "__className_680a2b",
                variable: "__variable_680a2b"
            }
        },
        2338: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Moul_79a552', '__Moul_Fallback_79a552'",
                    fontWeight: 400,
                    fontStyle: "normal"
                },
                className: "__className_79a552",
                variable: "__variable_79a552"
            }
        },
        5832: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Noto_Sans_Khmer_743e56', '__Noto_Sans_Khmer_Fallback_743e56'",
                    fontStyle: "normal"
                },
                className: "__className_743e56",
                variable: "__variable_743e56"
            }
        },
        7616: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Playfair_Display_6b3ed8', '__Playfair_Display_Fallback_6b3ed8'",
                    fontStyle: "normal"
                },
                className: "__className_6b3ed8",
                variable: "__variable_6b3ed8"
            }
        }
    },
    function(e) {
        e.O(0, [594, 971, 117, 744], function() {
            return e(e.s = 2938)
        }), _N_E = e.O()
    }
]);