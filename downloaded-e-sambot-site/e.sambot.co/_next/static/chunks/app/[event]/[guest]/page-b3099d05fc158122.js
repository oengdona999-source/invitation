(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [752], {
        3855: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 378))
        },
        378: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return D
                }
            });
            var r = n(7437),
                i = n(2265),
                o = n(3145),
                l = n(166),
                a = n(9376);
            let d = () => {
                let e = "https://cmssambot.b-cdn.net",
                    t = (0, i.useCallback)(async (e, t, n) => {
                        let r = new URLSearchParams({
                                lang: e || "km",
                                event: t,
                                guest: n
                            }),
                            i = `/api/event?${r.toString()}`;
                        try {
                            let e = await fetch(i, {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                            if (!e.ok) {
                                let t = await e.text();
                                console.error("API Error Response:", t);
                                let n = Error(`Failed to fetch event data: ${e.status} ${e.statusText}`);
                                throw n.status = e.status, n.response = t, n
                            }
                            let t = await e.json();
                            if ("error" === t.status) {
                                let n = Error(t.message || "API returned an error");
                                throw n.status = e.status, n.response = JSON.stringify(t), n
                            }
                            return t
                        } catch (e) {
                            if (console.error("Fetch error details:", {
                                    name: e.name,
                                    message: e.message,
                                    stack: e.stack
                                }), e.message && (e.message.includes("CORS") || e.message.includes("Failed to fetch") || e.message.includes("NetworkError"))) {
                                let e = Error("CORS Error: The API server is blocking cross-origin requests. The API needs to allow requests from your domain.");
                                throw e.status = 0, e.isCors = !0, e
                            }
                            if ("TypeError" === e.name) {
                                let t = Error(`Network error: ${e.message||"Unable to reach API. Check your connection and API endpoint."}`);
                                throw t.status = 0, t
                            }
                            throw e
                        }
                    }, []),
                    n = (0, i.useCallback)((e, t) => {
                        if (!e) return "";
                        if (!(e.includes("b-cdn.net") || e.includes("bunnycdn.com"))) return e;
                        try {
                            let n = new URL(e),
                                r = "undefined" != typeof navigator ? navigator.userAgent : "",
                                i = /iPhone|iPad|iPod/.test(r) && /Telegram/i.test(r),
                                o = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
                            if (n.searchParams.has("cache") || n.searchParams.set("cache", "true"), i) return n.searchParams.delete("mobile"), n.searchParams.delete("quality"), n.toString();
                            return o && !t ? (n.searchParams.has("mobile") || n.searchParams.set("mobile", "1"), n.searchParams.has("quality") || n.searchParams.set("quality", "medium")) : t && !n.searchParams.has("quality") && n.searchParams.set("quality", "high"), n.toString()
                        } catch (t) {
                            return e
                        }
                    }, []);
                return {
                    fetchEvent: t,
                    getMediaUrl: (0, i.useCallback)(function(t) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (!t) return "";
                        if (t.startsWith("http://") || t.startsWith("https://")) return r ? n(t, i) : t;
                        let o = t.startsWith("/") ? t.substring(1) : t,
                            l = `${e}/${o}`;
                        return r ? n(l, i) : l
                    }, [e, n])
                }
            };

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!e || "string" != typeof e) return "";
                let r = n ? e.trim() : e;
                return r.length > t && (r = r.substring(0, t)), r = (r = r.replace(/\0/g, "")).replace(/[\x00-\x1F\x7F]/g, "")
            }

            function u(e) {
                if (!e || "string" != typeof e) return "";
                if ("undefined" != typeof document) {
                    let t = document.createElement("textarea");
                    return t.innerHTML = e, t.value
                }
                let t = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#039;": "'",
                    "&apos;": "'",
                    "&nbsp;": " "
                };
                return e.replace(/&[#\w]+;/g, e => t[e] || e)
            }
            var c = n(3480),
                v = n.n(c),
                m = n(257);
            let g = (0, l.default)(() => Promise.all([n.e(352), n.e(819), n.e(885)]).then(n.bind(n, 4885)), {
                    loadableGenerated: {
                        webpack: () => [4885]
                    },
                    ssr: !1
                }),
                L = (0, l.default)(() => Promise.all([n.e(148), n.e(394)]).then(n.bind(n, 7394)), {
                    loadableGenerated: {
                        webpack: () => [7394]
                    },
                    ssr: !1
                }),
                p = (0, l.default)(() => n.e(228).then(n.bind(n, 3228)), {
                    loadableGenerated: {
                        webpack: () => [3228]
                    },
                    ssr: !1
                }),
                h = (0, l.default)(() => n.e(464).then(n.bind(n, 8464)), {
                    loadableGenerated: {
                        webpack: () => [8464]
                    },
                    ssr: !1
                }),
                y = (0, l.default)(() => n.e(596).then(n.bind(n, 8596)), {
                    loadableGenerated: {
                        webpack: () => [8596]
                    },
                    ssr: !1
                }),
                _ = (0, l.default)(() => n.e(169).then(n.bind(n, 1169)), {
                    loadableGenerated: {
                        webpack: () => [1169]
                    },
                    ssr: !1
                }),
                f = (0, l.default)(() => n.e(76).then(n.bind(n, 1076)), {
                    loadableGenerated: {
                        webpack: () => [1076]
                    },
                    ssr: !1
                }),
                b = (0, l.default)(() => n.e(559).then(n.bind(n, 6559)), {
                    loadableGenerated: {
                        webpack: () => [6559]
                    },
                    ssr: !1
                }),
                w = (0, l.default)(() => n.e(789).then(n.bind(n, 2789)), {
                    loadableGenerated: {
                        webpack: () => [2789]
                    },
                    ssr: !1
                }),
                x = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect fill='%23e8e6e3' width='400' height='400'/%3E%3C/svg%3E"; {
                let e = console.error,
                    t = console.warn,
                    n = console.log,
                    r = e => {
                        var t, n;
                        if (!e || 0 === e.length) return !1;
                        let r = String(e.join(" ")).toLowerCase(),
                            i = e[0];
                        return r.includes("aborterror") || r.includes("play() request was interrupted") || r.includes("interrupted by a new load") || r.includes("the play() request was interrupted") || r.includes("goo.gl/ldlk22") || r.includes("eventpageclient.tsx") || (null == i ? void 0 : i.name) === "AbortError" || (null == i ? void 0 : null === (t = i.message) || void 0 === t ? void 0 : t.includes("AbortError")) || (null == i ? void 0 : null === (n = i.message) || void 0 === n ? void 0 : n.includes("interrupted")) || i instanceof Error && "AbortError" === i.name
                    };
                console.error = function() {
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    r(n) || e.apply(console, n)
                }, console.warn = function() {
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    r(n) || t.apply(console, n)
                }, console.log = function() {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    r(t) || n.apply(console, t)
                }, window.addEventListener("unhandledrejection", e => {
                    var t, n;
                    let r = e.reason;
                    ((null == r ? void 0 : r.name) === "AbortError" || (null == r ? void 0 : null === (t = r.message) || void 0 === t ? void 0 : t.includes("AbortError")) || (null == r ? void 0 : null === (n = r.message) || void 0 === n ? void 0 : n.includes("interrupted")) || String(r).includes("AbortError")) && (e.preventDefault(), e.stopPropagation())
                }, !0), window.addEventListener("error", e => {
                    var t, n, r;
                    ((null === (t = e.error) || void 0 === t ? void 0 : t.name) === "AbortError" || (null === (n = e.message) || void 0 === n ? void 0 : n.includes("AbortError")) || (null === (r = e.message) || void 0 === r ? void 0 : r.includes("interrupted"))) && (e.preventDefault(), e.stopPropagation())
                }, !0)
            }

            function E(e, t, n, r) {}
            let P = (e, t, n) => {
                    let i = e || t,
                        o = i.split(" / "),
                        l = 2 === o.length;
                    return (0, r.jsx)("div", {
                        className: n.titleContainer,
                        children: (0, r.jsx)("h2", {
                            children: l ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("span", {
                                    className: n.khmerText,
                                    children: o[0]
                                }), " / ", o[1]]
                            }) : i
                        })
                    })
                },
                T = (e, t, n) => {
                    let i = e || t,
                        o = i.split(" / "),
                        l = 2 === o.length;
                    return (0, r.jsx)("h2", {
                        children: l ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("span", {
                                className: n.khmerText,
                                children: o[0]
                            }), " / ", o[1]]
                        }) : i
                    })
                },
                j = async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1920;
                    return new Promise((r, i) => {
                        let o = new FileReader;
                        o.readAsDataURL(e), o.onload = o => {
                            var l;
                            let a = new Image;
                            a.src = null === (l = o.target) || void 0 === l ? void 0 : l.result, a.onload = () => {
                                let i = a.width,
                                    o = a.height;
                                i > o ? i > n && (o = Math.round(o * n / i), i = n) : o > n && (i = Math.round(i * n / o), o = n);
                                let l = document.createElement("canvas");
                                l.width = i, l.height = o;
                                let d = l.getContext("2d");
                                if (!d) return r(e);
                                d.drawImage(a, 0, 0, i, o);
                                let s = .8,
                                    u = () => {
                                        l.toBlob(n => {
                                            if (!n) return r(e);
                                            n.size / 1024 / 1024 > t && s > .1 ? (s -= .1, u()) : r(new File([n], e.name.replace(/\.[^/.]+$/, "") + ".webp", {
                                                type: "image/webp",
                                                lastModified: Date.now()
                                            }))
                                        }, "image/webp", s)
                                    };
                                u()
                            }, a.onerror = e => i(e)
                        }, o.onerror = e => i(e)
                    })
                },
                k = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!e) return null;
                    try {
                        let n = new URL(e),
                            r = n.hostname.toLowerCase(),
                            i = "";
                        if ("youtu.be" === r ? i = n.pathname.replace("/", "") : r.includes("youtube.com") && ("/watch" === n.pathname ? i = n.searchParams.get("v") || "" : n.pathname.startsWith("/embed/") ? i = n.pathname.split("/embed/")[1] || "" : n.pathname.startsWith("/shorts/") && (i = n.pathname.split("/shorts/")[1] || "")), !(i = i.split(/[?&/]/)[0].trim())) return null;
                        let o = new URLSearchParams({
                            rel: "0",
                            modestbranding: "1",
                            playsinline: "1",
                            autoplay: t ? "1" : "0",
                            mute: t ? "1" : "0"
                        });
                        return `https://www.youtube-nocookie.com/embed/${i}?${o.toString()}`
                    } catch {
                        return null
                    }
                },
                S = e => {
                    try {
                        let t = new URL(e).pathname.split("/").filter(Boolean),
                            n = t.indexOf("embed");
                        if (-1 === n || !t[n + 1]) return null;
                        return t[n + 1]
                    } catch {
                        return null
                    }
                };

            function I(e) {
                let {
                    embedUrl: t,
                    title: n,
                    frameColor: o
                } = e, [l, a] = (0, i.useState)(!1);
                return (0, i.useEffect)(() => {
                    let e = !0,
                        n = S(t);
                    if (!n) {
                        a(!1);
                        return
                    }
                    let r = e => new Promise((t, n) => {
                        let r = new Image;
                        r.onload = () => {
                            if (r.naturalWidth <= 1 || r.naturalHeight <= 1) {
                                n(Error("Invalid thumbnail dimensions"));
                                return
                            }
                            t({
                                width: r.naturalWidth,
                                height: r.naturalHeight
                            })
                        }, r.onerror = () => n(Error("Failed to load thumbnail")), r.src = e
                    });
                    return (async () => {
                        try {
                            let t = await r(`https://i.ytimg.com/vi/${n}/maxresdefault.jpg`);
                            if (!e) return;
                            a(t.height > t.width)
                        } catch {
                            try {
                                let t = await r(`https://i.ytimg.com/vi/${n}/hqdefault.jpg`);
                                if (!e) return;
                                a(t.height > t.width)
                            } catch {
                                if (!e) return;
                                a(!1)
                            }
                        }
                    })(), () => {
                        e = !1
                    }
                }, [t]), (0, r.jsx)("div", {
                    className: v().youtubeEmbedFrame,
                    style: o ? {
                        "--video-frame-color": o
                    } : void 0,
                    children: (0, r.jsx)("div", {
                        className: `${v().youtubeEmbedWrapper} ${l?v().youtubeEmbedPortrait:v().youtubeEmbedLandscape}`,
                        children: (0, r.jsx)("iframe", {
                            src: t,
                            title: n,
                            loading: "lazy",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            allowFullScreen: !0,
                            referrerPolicy: "strict-origin-when-cross-origin"
                        })
                    })
                })
            }
            let C = ["km", "en", "th", "vi", "zh", "ja", "ko"],
                N = {
                    km: "\uD83C\uDDF0\uD83C\uDDED",
                    kh: "\uD83C\uDDF0\uD83C\uDDED",
                    en: "\uD83C\uDDEC\uD83C\uDDE7",
                    th: "\uD83C\uDDF9\uD83C\uDDED",
                    vi: "\uD83C\uDDFB\uD83C\uDDF3",
                    zh: "\uD83C\uDDE8\uD83C\uDDF3",
                    ja: "\uD83C\uDDEF\uD83C\uDDF5",
                    ko: "\uD83C\uDDF0\uD83C\uDDF7"
                };

            function M(e) {
                return e.toLowerCase().replace(/[^a-z]/g, "").slice(0, 2)
            }

            function A(e) {
                let t = M(e);
                return "km" === t || "kh" === t ? "ខ្មែរ" : "en" === t ? "EN" : t.toUpperCase()
            }

            function $(e, t) {
                if (t) {
                    if (e && e.length >= 2) {
                        let n = e.slice(-2).toLowerCase();
                        if (C.includes(n)) return {
                            guestName: e.slice(0, -2),
                            lang: t
                        }
                    }
                    return {
                        guestName: e || "",
                        lang: t
                    }
                }
                if (e && e.length >= 2) {
                    let t = e.slice(-2).toLowerCase();
                    if (C.includes(t)) return {
                        guestName: e.slice(0, -2),
                        lang: t
                    }
                }
                return {
                    guestName: e || "",
                    lang: "km"
                }
            }

            function D(e) {
                var t, n, l, c, S, C, D, O, Q, F, R, B, W, z, V, Z, q, U, H, G, K;
                let {
                    lang: Y,
                    event: J,
                    guest: X,
                    initialData: ee
                } = e, et = (0, a.useRouter)(), {
                    fetchEvent: en,
                    getMediaUrl: er
                } = d(), ei = (null == J ? void 0 : J.toLowerCase()) === "panhvorn_rithisacc", eo = (null == J ? void 0 : J.toLowerCase()) === "robert_sovannarath", {
                    guestName: el,
                    lang: ea
                } = $(X, Y), ed = Y || ea, es = ee && "object" == typeof ee ? ee.data || ee : null, [eu, ec] = (0, i.useState)(ed), [ev, em] = (0, i.useState)(1), [eg, eL] = (0, i.useState)(!es), [ep, eh] = (0, i.useState)(es), [ey, e_] = (0, i.useState)([]), [ef, eb] = (0, i.useState)(null), [ew, ex] = (0, i.useState)([]), [eE, eP] = (0, i.useState)(!1), eT = (null == ep ? void 0 : null === (n = ep.event) || void 0 === n ? void 0 : null === (t = n.theme) || void 0 === t ? void 0 : t.theme_template) || (null == ep ? void 0 : ep.theme_template) || "default", ej = "modern" === eT, ek = "dark_mode" === eT, eS = "default" === eT, eI = ej || ek, eC = (0, i.useRef)(null), eN = e => {
                    var t, n, r, i, o, l, a, d, s, u, c, v;
                    let m = (null == e ? void 0 : null === (t = e.event) || void 0 === t ? void 0 : t.theme_layout_positions) || (null == e ? void 0 : null === (r = e.event) || void 0 === r ? void 0 : null === (n = r.theme) || void 0 === n ? void 0 : n.theme_layout_positions) || (null == e ? void 0 : null === (o = e.data) || void 0 === o ? void 0 : null === (i = o.event) || void 0 === i ? void 0 : i.theme_layout_positions) || (null == e ? void 0 : null === (d = e.data) || void 0 === d ? void 0 : null === (a = d.event) || void 0 === a ? void 0 : null === (l = a.theme) || void 0 === l ? void 0 : l.theme_layout_positions) || (null == e ? void 0 : e.theme_layout_positions) || (null == e ? void 0 : null === (s = e.theme) || void 0 === s ? void 0 : s.theme_layout_positions) || (null == e ? void 0 : null === (u = e.data) || void 0 === u ? void 0 : u.theme_layout_positions) || (null == e ? void 0 : null === (v = e.data) || void 0 === v ? void 0 : null === (c = v.theme) || void 0 === c ? void 0 : c.theme_layout_positions);
                    return Array.isArray(m) && m.length > 0 ? m : null
                }, eM = (e, t) => {
                    let n = e.find(e => (null == e ? void 0 : e.element_key) === t && (null == e ? void 0 : e.is_active) !== !1) ? ? null;
                    if (!n) return null;
                    let r = Number(null == n ? void 0 : n.x_percent),
                        i = Number(null == n ? void 0 : n.y_percent);
                    if (!Number.isFinite(r) || !Number.isFinite(i)) return null;
                    let o = {
                        center: "translate(-50%, -50%)",
                        left: "translate(0, -50%)",
                        right: "translate(-100%, -50%)",
                        top: "translate(-50%, 0)",
                        bottom: "translate(-50%, -100%)",
                        "top-left": "translate(0, 0)",
                        "top-center": "translate(-50%, 0)",
                        "top-right": "translate(-100%, 0)",
                        "middle-left": "translate(0, -50%)",
                        "middle-right": "translate(-100%, -50%)",
                        "bottom-left": "translate(0, -100%)",
                        "bottom-center": "translate(-50%, -100%)",
                        "bottom-right": "translate(-100%, -100%)"
                    };
                    return {
                        left: `${r}%`,
                        top: `${i}%`,
                        right: "auto",
                        bottom: "auto",
                        transform: o[String((null == n ? void 0 : n.anchor) || "center").toLowerCase()] ? ? o.center
                    }
                }, eA = (0, i.useMemo)(() => {
                    let e = eN(ep);
                    return e ? eM(e, "guest_name") : null
                }, [ep]), e$ = (0, i.useMemo)(() => {
                    let e = eN(ep);
                    return e ? eM(e, "open_button") ? ? eM(e, "start_button") ? ? eM(e, "button") : null
                }, [ep]), eD = (0, i.useMemo)(() => null !== eN(ep), [ep]);
                (0, i.useMemo)(() => {
                    try {
                        var e, t, n, r, i, o, l, a;
                        let d = (null == ep ? void 0 : null === (t = ep.event) || void 0 === t ? void 0 : null === (e = t.theme) || void 0 === e ? void 0 : e.media) || (null == ep ? void 0 : null === (n = ep.theme) || void 0 === n ? void 0 : n.media) || [],
                            s = (null == es ? void 0 : null === (i = es.event) || void 0 === i ? void 0 : null === (r = i.theme) || void 0 === r ? void 0 : r.media) || (null == es ? void 0 : null === (a = es.data) || void 0 === a ? void 0 : null === (l = a.event) || void 0 === l ? void 0 : null === (o = l.theme) || void 0 === o ? void 0 : o.media) || [],
                            u = [...d, ...s].filter(Boolean).find(e => (null == e ? void 0 : e.slot) === "theme_image" || (null == e ? void 0 : e.type) === "image");
                        if (null == u ? void 0 : u.url) return er(u.url);
                        if (null == ef ? void 0 : ef.button_image) return er(ef.button_image);
                        return "/line-name.png"
                    } catch (e) {
                        return "/line-name.png"
                    }
                }, [null == ep ? void 0 : null === (c = ep.event) || void 0 === c ? void 0 : null === (l = c.theme) || void 0 === l ? void 0 : l.media, null == ep ? void 0 : null === (S = ep.theme) || void 0 === S ? void 0 : S.media, es, null == ef ? void 0 : ef.button_image, er]);
                let [eO, eQ] = (0, i.useState)(null), [eF, eR] = (0, i.useState)(!1), eB = (0, i.useRef)(!1), [eW, ez] = (0, i.useState)(!1), eV = (0, i.useRef)(!1), [eZ, eq] = (0, i.useState)(null), [eU, eH] = (0, i.useState)(!1), [eG, eK] = (0, i.useState)(!1), [eY, eJ] = (0, i.useState)(!1), [eX, e0] = (0, i.useState)({}), [e1, e5] = (0, i.useState)("1.5rem"), e6 = (0, i.useRef)(null), e4 = (0, i.useRef)(null), e2 = (0, i.useRef)(null), [e8, e3] = (0, i.useState)("medium"), e7 = (0, i.useRef)("medium"), e9 = (0, i.useRef)(null), te = (0, i.useRef)(null), tt = (0, i.useRef)(Date.now()), tn = (0, i.useRef)(!1);
                (0, i.useRef)(null);
                let tr = (0, i.useRef)(!1);
                (0, i.useEffect)(() => {
                    if ("undefined" == typeof navigator) return;
                    let e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    if (e) {
                        let t = () => {
                            let t = e.effectiveType || "4g",
                                n = e.downlink || 10,
                                r = e.rtt || 50,
                                i = "medium";
                            i = "slow-2g" === t || "2g" === t || n < 1 || r > 1e3 ? "slow" : "3g" === t || n >= 1 && n < 5 || r > 500 ? "medium" : "fast", e7.current = i, e3(i)
                        };
                        return t(), e.addEventListener("change", t), () => {
                            e.removeEventListener("change", t)
                        }
                    }
                    if (nI.current) {
                        let e = nI.current,
                            t = Date.now(),
                            n = 0,
                            r = () => {
                                if (e.buffered.length > 0) {
                                    let r = e.buffered.end(e.buffered.length - 1),
                                        i = (Date.now() - t) / 1e3;
                                    if (i > 0 && r > n) {
                                        let e = (r - n) / i;
                                        e < .5 ? (e7.current = "slow", e3("slow"), e.toFixed(2)) : e < 1 ? (e7.current = "medium", e3("medium")) : (e7.current = "fast", e3("fast")), n = r, t = Date.now()
                                    }
                                }
                            };
                        return e.addEventListener("progress", r), e.addEventListener("timeupdate", r), () => {
                            e.removeEventListener("progress", r), e.removeEventListener("timeupdate", r)
                        }
                    }
                }, [ey.length]);
                let [ti, to] = (0, i.useState)(null), tl = (0, i.useRef)(null), [ta, td] = (0, i.useState)(!0), [ts, tu] = (0, i.useState)({
                    name: "",
                    comment: ""
                }), [tc, tv] = (0, i.useState)([]), [tm, tg] = (0, i.useState)([]), [tL, tp] = (0, i.useState)(!1), [th, ty] = (0, i.useState)(!1), [t_, tf] = (0, i.useState)(null), [tb, tw] = (0, i.useState)([]), [tx, tE] = (0, i.useState)(!1), [tP, tT] = (0, i.useState)({
                    name: "",
                    attendance: "",
                    numberOfAttendees: "",
                    specialRequests: "",
                    food: "",
                    namesOfGuests: "",
                    hasDietary: "",
                    dietaryDetails: ""
                }), [tj, tk] = (0, i.useState)(!1), [tS, tI] = (0, i.useState)(null), [tC, tN] = (0, i.useState)(!1), [tM, tA] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    if (!tP.name) {
                        var e;
                        let t = (null == ep ? void 0 : null === (e = ep.invitation) || void 0 === e ? void 0 : e.name) || (null == ep ? void 0 : ep.guest_name) || X || "";
                        t && tT(e => ({ ...e,
                            name: u(t)
                        }))
                    }
                }, [null == ep ? void 0 : null === (C = ep.invitation) || void 0 === C ? void 0 : C.name, null == ep ? void 0 : ep.guest_name, X]);
                let [t$, tD] = (0, i.useState)(null), [tO, tQ] = (0, i.useState)(0), [tF, tR] = (0, i.useState)([]), [tB, tW] = (0, i.useState)(null), [tz, tV] = (0, i.useState)(1), [tZ, tq] = (0, i.useState)(1), [tU, tH] = (0, i.useState)(null), [tG, tK] = (0, i.useState)(null), [tY, tJ] = (0, i.useState)(!1), tX = (0, i.useRef)(null), [t0, t1] = (0, i.useState)(null), [t5, t6] = (0, i.useState)(!1), [t4, t2] = (0, i.useState)(""), [t8, t3] = (0, i.useState)(""), [t7, t9] = (0, i.useState)(""), [ne, nt] = (0, i.useState)(""), [nn, nr] = (0, i.useState)(!1), [ni, no] = (0, i.useState)(!1), [nl, na] = (0, i.useState)(""), [nd, ns] = (0, i.useState)(!1), [nu, nc] = (0, i.useState)(!1), [nv, nm] = (0, i.useState)(!1), [ng] = (0, i.useState)(!0), [nL, np] = (0, i.useState)(!1), nh = (0, i.useRef)(1), ny = (0, i.useRef)(null), n_ = m.env.NEXT_PUBLIC_FALLBACK_AUDIO_TRACK || "/fallback-audio.mp3";
                (0, i.useEffect)(() => {
                    eB.current = eF
                }, [eF]), (0, i.useEffect)(() => {
                    nh.current = ev
                }, [ev]), (0, i.useEffect)(() => {
                    var e, t, n, r, i, o, l, a, d, s, u, c;
                    let v = localStorage.getItem("sambot_visitor_uuid");
                    v || (v = "vis_" + Math.random().toString(36).substring(2, 15) + "_" + Date.now(), localStorage.setItem("sambot_visitor_uuid", v));
                    let m = (null == ep ? void 0 : null === (e = ep.event) || void 0 === e ? void 0 : e.uuid) || (null == ep ? void 0 : null === (t = ep.event) || void 0 === t ? void 0 : t.event_uuid) || (null == ep ? void 0 : null === (n = ep.invitation) || void 0 === n ? void 0 : n.event_uuid) || (null == ee ? void 0 : null === (i = ee.data) || void 0 === i ? void 0 : null === (r = i.event) || void 0 === r ? void 0 : r.uuid) || (null == ee ? void 0 : null === (l = ee.data) || void 0 === l ? void 0 : null === (o = l.event) || void 0 === o ? void 0 : o.event_uuid) || (null == ee ? void 0 : null === (d = ee.data) || void 0 === d ? void 0 : null === (a = d.invitation) || void 0 === a ? void 0 : a.event_uuid) || (null == ee ? void 0 : null === (s = ee.event) || void 0 === s ? void 0 : s.uuid) || (null == ee ? void 0 : null === (u = ee.event) || void 0 === u ? void 0 : u.event_uuid) || (null == ee ? void 0 : null === (c = ee.invitation) || void 0 === c ? void 0 : c.event_uuid),
                        g = async () => {
                            try {
                                await fetch("/api/active-users/ping", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        track_id: v,
                                        event_uuid: m || null,
                                        url: window.location.href
                                    })
                                })
                            } catch (e) {}
                        };
                    g();
                    let L = setInterval(g, 3e4);
                    return () => clearInterval(L)
                }, [ep, ee]);
                let nf = function() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        r = t.find(e => {
                            var t, n;
                            return "music" === ((null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) || e.type) && (null === (n = e.music) || void 0 === n ? void 0 : n.url)
                        });
                    if (null == r ? void 0 : null === (e = r.music) || void 0 === e ? void 0 : e.url) return er(r.music.url);
                    let i = n.find(e => "audio" === e.type && e.url);
                    return (null == i ? void 0 : i.url) ? er(i.url) : n_
                };
                (0, i.useEffect)(() => {
                    let e = console.error,
                        t = console.warn,
                        n = console.log,
                        r = e => {
                            if (!e || 0 === e.length) return !1;
                            let t = String(e.join(" ")).toLowerCase(),
                                n = e[0];
                            if (t.includes("aborterror") || t.includes("play() request was interrupted") || t.includes("interrupted by a new load") || t.includes("the play() request was interrupted") || t.includes("goo.gl/ldlk22") || t.includes("eventpageclient.tsx:1577")) return !0;
                            if (n) {
                                var r, i, o;
                                if ((null == n ? void 0 : n.name) === "AbortError" || (null == n ? void 0 : null === (r = n.message) || void 0 === r ? void 0 : r.includes("AbortError")) || (null == n ? void 0 : null === (i = n.message) || void 0 === i ? void 0 : i.includes("interrupted")) || (null == n ? void 0 : null === (o = n.message) || void 0 === o ? void 0 : o.includes("play() request was interrupted")) || n instanceof Error && "AbortError" === n.name || "object" == typeof n && "name" in n && "AbortError" === n.name) return !0
                            }
                            return !1
                        };
                    console.error = function() {
                        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        r(n) || e.apply(console, n)
                    }, console.warn = function() {
                        for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                        r(n) || t.apply(console, n)
                    }, console.log = function() {
                        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        r(t) || n.apply(console, t)
                    };
                    let i = e => {
                        var t, n, r;
                        let i = e.reason;
                        if ((null == i ? void 0 : i.name) === "AbortError" || (null == i ? void 0 : null === (t = i.message) || void 0 === t ? void 0 : t.includes("AbortError")) || (null == i ? void 0 : null === (n = i.message) || void 0 === n ? void 0 : n.includes("interrupted")) || (null == i ? void 0 : null === (r = i.message) || void 0 === r ? void 0 : r.includes("play() request was interrupted")) || String(i).includes("AbortError")) return e.preventDefault(), e.stopPropagation(), !1
                    };
                    window.addEventListener("unhandledrejection", i, !0);
                    let o = e => {
                        var t, n, r, i;
                        if ((null === (t = e.error) || void 0 === t ? void 0 : t.name) === "AbortError" || (null === (n = e.message) || void 0 === n ? void 0 : n.includes("AbortError")) || (null === (r = e.message) || void 0 === r ? void 0 : r.includes("interrupted")) || (null === (i = e.message) || void 0 === i ? void 0 : i.includes("play() request was interrupted"))) return e.preventDefault(), e.stopPropagation(), !1
                    };
                    return window.addEventListener("error", o, !0), () => {
                        console.error = e, console.warn = t, console.log = n, window.removeEventListener("unhandledrejection", i, !0), window.removeEventListener("error", o, !0)
                    }
                }, []), (0, i.useEffect)(() => {}, [ep, eF]);
                let nb = (0, i.useMemo)(() => {
                        var e, t, n, r;
                        let i = (null == ep ? void 0 : null === (e = ep.event) || void 0 === e ? void 0 : e.segments) || (null == ep ? void 0 : ep.segments) || (null == ep ? void 0 : null === (n = ep.data) || void 0 === n ? void 0 : null === (t = n.event) || void 0 === t ? void 0 : t.segments) || (null == ep ? void 0 : null === (r = ep.data) || void 0 === r ? void 0 : r.segments) || [],
                            o = i.filter(e => 1 === e.is_visible || !0 === e.is_visible);
                        return 1 === ev && i.length, o
                    }, [ep, ev]),
                    nw = (0, i.useMemo)(() => nb.some(e => {
                        var t;
                        return "information" === ((null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) || e.type)
                    }), [nb]),
                    nx = (0, i.useMemo)(() => nb.some(e => {
                        var t;
                        return "map" === ((null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) || e.type)
                    }), [nb]),
                    nE = (0, i.useMemo)(() => nb.some(e => {
                        var t;
                        return "photo_gallery" === ((null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) || e.type)
                    }), [nb]),
                    nP = (0, i.useMemo)(() => nb.some(e => {
                        var t;
                        return "greeting" === ((null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) || e.type)
                    }), [nb]),
                    nT = (0, i.useMemo)(() => nb.some(e => {
                        var t;
                        return ((null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) === "food_option" || "food_option" === e.type) && 1 === e.is_visible
                    }), [nb]),
                    nj = (0, i.useMemo)(() => {
                        var e;
                        let t = nb.find(e => {
                            var t;
                            return "map" === ((null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) || e.type)
                        });
                        return (null == t ? void 0 : null === (e = t.map_link) || void 0 === e ? void 0 : e.url) || ""
                    }, [nb]);
                (0, i.useCallback)(() => {
                    var e, t, n, r, i, o, l, a, d, s, u, c, v, m, g, L, p, h, y, _, f, b, w, x, E, P, T, j, k, S, I, C, N;
                    let M = (null == ep ? void 0 : null === (e = ep.event) || void 0 === e ? void 0 : e.name) || "Event",
                        A = eu || ed || "km",
                        $ = (null == ep ? void 0 : null === (t = ep.event) || void 0 === t ? void 0 : t.start_date) || (null == ep ? void 0 : null === (n = ep.event) || void 0 === n ? void 0 : n.date) || (null == ep ? void 0 : null === (r = ep.event) || void 0 === r ? void 0 : r.event_date) || (null == ep ? void 0 : null === (i = ep.event) || void 0 === i ? void 0 : i.date_time) || (null == ep ? void 0 : null === (o = ep.invitation) || void 0 === o ? void 0 : o.start_date) || (null == ep ? void 0 : null === (l = ep.invitation) || void 0 === l ? void 0 : l.date) || (null == ep ? void 0 : null === (a = ep.invitation) || void 0 === a ? void 0 : a.event_date) || (null == ep ? void 0 : null === (d = ep.invitation) || void 0 === d ? void 0 : d.date_time),
                        D = (null == ep ? void 0 : null === (s = ep.event) || void 0 === s ? void 0 : s.end_date) || (null == ep ? void 0 : null === (u = ep.event) || void 0 === u ? void 0 : u.end_date_time) || (null == ep ? void 0 : null === (c = ep.event) || void 0 === c ? void 0 : c.endDate) || (null == ep ? void 0 : null === (v = ep.invitation) || void 0 === v ? void 0 : v.end_date) || (null == ep ? void 0 : null === (m = ep.invitation) || void 0 === m ? void 0 : m.end_date_time) || (null == ep ? void 0 : null === (g = ep.invitation) || void 0 === g ? void 0 : g.endDate);
                    if (!$) return "";
                    let O = (null == ep ? void 0 : null === (L = ep.event) || void 0 === L ? void 0 : L.timezone) || (null == ep ? void 0 : null === (p = ep.event) || void 0 === p ? void 0 : p.time_zone) || "Asia/Phnom_Penh",
                        Q = (null == ep ? void 0 : null === (h = ep.event) || void 0 === h ? void 0 : h.timezone_offset) || (null == ep ? void 0 : null === (y = ep.event) || void 0 === y ? void 0 : y.tz_offset) || "+07:00",
                        F = e => new Date(/^\d{4}-\d{2}-\d{2}$/.test(e) ? `${e}T00:00:00${Q}` : e.includes("T") || e.includes("Z") || e.includes("+") || e.includes("-") ? e : `${e}${Q}`),
                        R = F($),
                        B = D ? F(D) : new Date(R.getTime() + 72e5),
                        W = e => {
                            let t = e.getUTCFullYear(),
                                n = String(e.getUTCMonth() + 1).padStart(2, "0"),
                                r = String(e.getUTCDate()).padStart(2, "0"),
                                i = String(e.getUTCHours()).padStart(2, "0"),
                                o = String(e.getUTCMinutes()).padStart(2, "0"),
                                l = String(e.getUTCSeconds()).padStart(2, "0");
                            return `${t}${n}${r}T${i}${o}${l}Z`
                        };
                    W(R);
                    let z = W(B),
                        V = (null == ep ? void 0 : null === (_ = ep.resolved_meta) || void 0 === _ ? void 0 : _.meta_title) || (null == ep ? void 0 : null === (f = ep.event_meta_translation) || void 0 === f ? void 0 : f.meta_title) || (null == ep ? void 0 : null === (w = ep.event_meta_translations) || void 0 === w ? void 0 : null === (b = w.find(e => e.language_code === A)) || void 0 === b ? void 0 : b.meta_title) || M,
                        Z = (null == ep ? void 0 : null === (x = ep.resolved_meta) || void 0 === x ? void 0 : x.meta_description) || (null == ep ? void 0 : null === (E = ep.event_meta_translation) || void 0 === E ? void 0 : E.meta_description) || (null == ep ? void 0 : null === (T = ep.event_meta_translations) || void 0 === T ? void 0 : null === (P = T.find(e => e.language_code === A)) || void 0 === P ? void 0 : P.meta_description) || (null == ep ? void 0 : null === (j = ep.event) || void 0 === j ? void 0 : j.description) || "",
                        q = (null == ep ? void 0 : null === (k = ep.event) || void 0 === k ? void 0 : k.location_name) || (null == ep ? void 0 : null === (S = ep.event) || void 0 === S ? void 0 : S.venue) || (null == ep ? void 0 : null === (I = ep.event) || void 0 === I ? void 0 : I.place) || (null == ep ? void 0 : null === (C = ep.event) || void 0 === C ? void 0 : C.location) || nj || "",
                        U = B.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: !0,
                            timeZone: O
                        }),
                        H = [];
                    if (V && "" !== V.trim() && H.push(V), Z && "" !== Z.trim()) {
                        let e = Z.replace(/\{location\}/g, q || "TBA").replace(/\{date\}/g, U || "TBA");
                        H.push(e)
                    }
                    q && H.push(`Location: ${q}`), U && H.push(`Date: ${U}`);
                    let G = H.join("\n\n") || `Event: ${M}`,
                        K = new URLSearchParams({
                            action: "TEMPLATE",
                            text: M,
                            dates: `${z}/${z}`,
                            details: G,
                            location: nj || (null == ep ? void 0 : null === (N = ep.event) || void 0 === N ? void 0 : N.location) || "",
                            ctz: O,
                            sf: "true"
                        });
                    return `https://calendar.google.com/calendar/render?${K.toString()}`
                }, [ep, nj, eu, ed]);
                let nk = (0, i.useCallback)(() => {
                        var e, t, n, r, i, o, l, a, d, s, u, c, v, m, g, L, p, h, y, _, f, b, w, x;
                        let E = (null == ep ? void 0 : null === (e = ep.event) || void 0 === e ? void 0 : e.name) || "Event",
                            P = (null == ep ? void 0 : null === (t = ep.event) || void 0 === t ? void 0 : t.end_date) || (null == ep ? void 0 : null === (n = ep.event) || void 0 === n ? void 0 : n.end_date_time) || (null == ep ? void 0 : null === (r = ep.event) || void 0 === r ? void 0 : r.endDate) || (null == ep ? void 0 : null === (i = ep.invitation) || void 0 === i ? void 0 : i.end_date) || (null == ep ? void 0 : null === (o = ep.invitation) || void 0 === o ? void 0 : o.end_date_time) || (null == ep ? void 0 : null === (l = ep.invitation) || void 0 === l ? void 0 : l.endDate);
                        if (!P) return "";
                        let T = (null == ep ? void 0 : null === (a = ep.event) || void 0 === a ? void 0 : a.timezone) || (null == ep ? void 0 : null === (d = ep.event) || void 0 === d ? void 0 : d.time_zone) || "Asia/Phnom_Penh",
                            j = (null == ep ? void 0 : null === (s = ep.event) || void 0 === s ? void 0 : s.timezone_offset) || (null == ep ? void 0 : null === (u = ep.event) || void 0 === u ? void 0 : u.tz_offset) || "+07:00",
                            k = new Date(/^\d{4}-\d{2}-\d{2}$/.test(P) ? `${P}T00:00:00${j}` : P.includes("T") || P.includes("Z") || P.includes("+") || P.includes("-") ? P : `${P}${j}`),
                            S = e => {
                                let t = e.getUTCFullYear(),
                                    n = String(e.getUTCMonth() + 1).padStart(2, "0"),
                                    r = String(e.getUTCDate()).padStart(2, "0"),
                                    i = String(e.getUTCHours()).padStart(2, "0"),
                                    o = String(e.getUTCMinutes()).padStart(2, "0"),
                                    l = String(e.getUTCSeconds()).padStart(2, "0");
                                return `${t}${n}${r}T${i}${o}${l}Z`
                            },
                            I = S(k),
                            C = S(k),
                            N = nj || (null == ep ? void 0 : null === (v = ep.event) || void 0 === v ? void 0 : null === (c = v.map_link) || void 0 === c ? void 0 : c.url) || (null == ep ? void 0 : null === (m = ep.event) || void 0 === m ? void 0 : m.location) || "",
                            M = (null == ep ? void 0 : null === (g = ep.resolved_meta) || void 0 === g ? void 0 : g.meta_title) || (null == ep ? void 0 : null === (L = ep.event_meta_translation) || void 0 === L ? void 0 : L.meta_title) || (null == ep ? void 0 : null === (h = ep.event_meta_translations) || void 0 === h ? void 0 : null === (p = h.find(e => e.language_code === ed)) || void 0 === p ? void 0 : p.meta_title) || E,
                            A = (null == ep ? void 0 : null === (y = ep.resolved_meta) || void 0 === y ? void 0 : y.meta_description) || (null == ep ? void 0 : null === (_ = ep.event_meta_translation) || void 0 === _ ? void 0 : _.meta_description) || (null == ep ? void 0 : null === (b = ep.event_meta_translations) || void 0 === b ? void 0 : null === (f = b.find(e => e.language_code === ed)) || void 0 === f ? void 0 : f.meta_description) || (null == ep ? void 0 : null === (w = ep.event) || void 0 === w ? void 0 : w.description) || "",
                            $ = k.toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: !0,
                                timeZone: T
                            }),
                            D = N || (null == ep ? void 0 : null === (x = ep.event) || void 0 === x ? void 0 : x.location) || "",
                            O = [];
                        if (M && "" !== M.trim() && O.push(M), A && "" !== A.trim()) {
                            let e = A.replace(/\{location\}/g, D || "TBA").replace(/\{date\}/g, $ || "TBA");
                            O.push(e)
                        }
                        $ && O.push(`Date: ${$}`), D && O.push(`Location: ${D}`);
                        let Q = O.join("\n\n") || E,
                            F = new URLSearchParams({
                                action: "TEMPLATE",
                                text: E,
                                dates: `${I}/${C}`,
                                details: Q,
                                location: N,
                                ctz: T,
                                sf: "true"
                            });
                        return `https://calendar.google.com/calendar/render?${F.toString()}`
                    }, [ep, nj, eu, ed]),
                    nS = !!(tB || t$);
                (0, i.useEffect)(() => {
                    if ("undefined" == typeof document || !nS) return;
                    let e = document.body.style.overflow;
                    return document.body.style.overflow = "hidden", () => {
                        document.body.style.overflow = e
                    }
                }, [nS]), (0, i.useEffect)(() => {
                    if ("undefined" != typeof document && (null == ef ? void 0 : ef.button_image)) {
                        let e = er(ef.button_image),
                            t = document.body.style.getPropertyValue("background-image"),
                            n = document.body.style.getPropertyValue("background-size"),
                            r = document.body.style.getPropertyValue("background-position"),
                            i = document.body.style.getPropertyValue("background-repeat");
                        return document.body.style.setProperty("background-image", `url("${e}")`, "important"), document.body.style.setProperty("background-size", "cover", "important"), document.body.style.setProperty("background-position", "center", "important"), document.body.style.setProperty("background-repeat", "no-repeat", "important"), () => {
                            t ? document.body.style.setProperty("background-image", t, "important") : document.body.style.removeProperty("background-image"), n ? document.body.style.setProperty("background-size", n, "important") : document.body.style.removeProperty("background-size"), r ? document.body.style.setProperty("background-position", r, "important") : document.body.style.removeProperty("background-position"), i ? document.body.style.setProperty("background-repeat", i, "important") : document.body.style.removeProperty("background-repeat")
                        }
                    }
                }, [null == ef ? void 0 : ef.button_image, er]), (0, i.useEffect)(() => {
                    if ("undefined" != typeof document && !Array.from(document.querySelectorAll('link[rel="preconnect"]')).some(e => e.href.includes("cmssambot.b-cdn.net"))) {
                        let e = document.createElement("link");
                        e.rel = "preconnect", e.href = "https://cmssambot.b-cdn.net", e.crossOrigin = "anonymous", document.head.appendChild(e)
                    }
                }, []), (0, i.useEffect)(() => {
                    if (ee) {
                        var e, t, n, r, i, o;
                        ee.data;
                        let l = ee.data || ee;
                        eb(null == l ? void 0 : null === (t = l.event) || void 0 === t ? void 0 : null === (e = t.theme) || void 0 === e ? void 0 : e.settings), ex((null == l ? void 0 : null === (n = l.event) || void 0 === n ? void 0 : n.languages) || []);
                        let a = (null == l ? void 0 : null === (i = l.event) || void 0 === i ? void 0 : null === (r = i.theme) || void 0 === r ? void 0 : r.media) || [],
                            d = e => {
                                let t = a.find(t => "video" === t.type && t.slot === e);
                                return t ? er(t.url, !0) : ""
                            },
                            s = [d("theme_video_1"), d("theme_video_2"), d("theme_video_3"), d("theme_video_4")];
                        e_(s), s[0] && em(1), to(nf((null == l ? void 0 : null === (o = l.event) || void 0 === o ? void 0 : o.segments) || (null == l ? void 0 : l.segments) || [], a)), e0({
                            khmer: "សូមចុចបើកសំបុត្រ",
                            english: "Click to Open The Invitation"
                        });
                        let u = a.find(e => "theme_image" === e.slot);
                        if (u && window.innerWidth >= 769) {
                            let e = er(u.url);
                            document.documentElement.style.backgroundImage = `url('${e}')`, document.body.style.backgroundImage = `url('${e}')`
                        }
                    }
                }, [ee]), (0, i.useEffect)(() => {
                    var e;
                    if (ei) {
                        e5(window.innerWidth <= 768 ? "1.4rem" : "1rem");
                        return
                    }
                    if (eo) {
                        e5(window.innerWidth <= 768 ? "1.8rem" : "1.5rem");
                        return
                    }
                    if (null == ep ? void 0 : null === (e = ep.invitation) || void 0 === e ? void 0 : e.name) {
                        let e = u(ep.invitation.name).length,
                            t = window.innerWidth <= 768,
                            n = t ? 1.2 : 1.5;
                        e > 30 ? n *= .7 : e > 20 ? n *= .85 : e > 15 && (n *= .95);
                        let r = Math.max(t ? 1 : 1.2, Math.min(t ? 1.4 : 1.7, n));
                        e5(`${r}rem`)
                    } else e5("1.5rem")
                }, [null == ep ? void 0 : null === (D = ep.invitation) || void 0 === D ? void 0 : D.name, ei, eo]), (0, i.useEffect)(() => {
                    {
                        let e = () => {
                            nr(window.innerWidth >= 769), nI.current && 1 === ev && nI.current.paused && !nI.current.ended && nI.current.play().then(() => E("Resize", "video 1 resumed OK")).catch(e => {
                                null == e || e.message, setTimeout(() => {
                                    nI.current && 1 === ev && nI.current.paused && nI.current.play().then(() => E("Resize", "video 1 retry OK")).catch(() => {})
                                }, 100)
                            })
                        };
                        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }
                }, [ev]), (0, i.useEffect)(() => {
                    if (window.innerWidth <= 768) {
                        let e = () => {
                                let e = .01 * window.innerHeight;
                                document.documentElement.style.setProperty("--vh", `${e}px`)
                            },
                            t = "undefined" != typeof navigator && /Android/.test(navigator.userAgent);
                        if (t && (document.documentElement.classList.add("android-device"), document.body.classList.add("android-device")), e(), t) {
                            let n = !1,
                                r = window.innerHeight,
                                i = () => {
                                    let t = window.innerHeight;
                                    t === r || (r = t, n || (window.requestAnimationFrame(() => {
                                        e(), n = !1
                                    }), n = !0))
                                };
                            window.addEventListener("scroll", i, {
                                passive: !0
                            }), window.addEventListener("resize", i, {
                                passive: !0
                            });
                            let o = () => {
                                setTimeout(() => {
                                    r = window.innerHeight, e()
                                }, 100)
                            };
                            window.addEventListener("orientationchange", o);
                            let l = setInterval(() => {
                                let t = window.innerHeight;
                                t !== r && (r = t, e())
                            }, 100);
                            return () => {
                                window.removeEventListener("scroll", i), window.removeEventListener("resize", i), window.removeEventListener("orientationchange", o), clearInterval(l), t && (document.documentElement.classList.remove("android-device"), document.body.classList.remove("android-device"))
                            }
                        } {
                            window.addEventListener("resize", e);
                            let t = () => {
                                setTimeout(e, 100)
                            };
                            return window.addEventListener("orientationchange", t), window.scrollTo(0, 1), () => {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", t)
                            }
                        }
                    }
                }, []), (0, i.useEffect)(() => {
                    var e;
                    (null == ep ? void 0 : null === (e = ep.invitation) || void 0 === e ? void 0 : e.name) && tu(e => e.name ? e : { ...e,
                        name: u(ep.invitation.name)
                    })
                }, [null == ep ? void 0 : null === (O = ep.invitation) || void 0 === O ? void 0 : O.name]), (0, i.useEffect)(() => {
                    let e = async () => {
                        var e, t, n, r, i, o, l, a, d, s, u, c, v, m, g, L, p, h, y, _, f, b, w, x, E, P;
                        let T = (null == ep ? void 0 : null === (e = ep.event) || void 0 === e ? void 0 : e.uuid) || (null == ep ? void 0 : null === (t = ep.event) || void 0 === t ? void 0 : t.event_uuid) || (null == ep ? void 0 : null === (r = ep.data) || void 0 === r ? void 0 : null === (n = r.event) || void 0 === n ? void 0 : n.uuid) || (null == ep ? void 0 : null === (o = ep.data) || void 0 === o ? void 0 : null === (i = o.event) || void 0 === i ? void 0 : i.event_uuid) || (null == es ? void 0 : null === (l = es.event) || void 0 === l ? void 0 : l.uuid) || (null == es ? void 0 : null === (d = es.data) || void 0 === d ? void 0 : null === (a = d.event) || void 0 === a ? void 0 : a.uuid) || (null == ee ? void 0 : null === (u = ee.data) || void 0 === u ? void 0 : null === (s = u.event) || void 0 === s ? void 0 : s.uuid) || (null == ee ? void 0 : null === (v = ee.data) || void 0 === v ? void 0 : null === (c = v.event) || void 0 === c ? void 0 : c.event_uuid) || (null == ee ? void 0 : null === (m = ee.event) || void 0 === m ? void 0 : m.uuid) || (null == ee ? void 0 : null === (g = ee.event) || void 0 === g ? void 0 : g.event_uuid) || (null == ep ? void 0 : null === (L = ep.invitation) || void 0 === L ? void 0 : L.event_uuid) || (null == ep ? void 0 : null === (p = ep.invitation) || void 0 === p ? void 0 : p.uuid) || (null == es ? void 0 : null === (h = es.invitation) || void 0 === h ? void 0 : h.event_uuid) || (null == es ? void 0 : null === (y = es.invitation) || void 0 === y ? void 0 : y.uuid) || (null == ee ? void 0 : null === (f = ee.data) || void 0 === f ? void 0 : null === (_ = f.invitation) || void 0 === _ ? void 0 : _.event_uuid) || (null == ee ? void 0 : null === (w = ee.data) || void 0 === w ? void 0 : null === (b = w.invitation) || void 0 === b ? void 0 : b.uuid) || (null == ee ? void 0 : null === (x = ee.invitation) || void 0 === x ? void 0 : x.event_uuid) || (null == ee ? void 0 : null === (E = ee.invitation) || void 0 === E ? void 0 : E.uuid);
                        if (T) {
                            tE(!0);
                            try {
                                let e = `/api/messages?event_uuid=${encodeURIComponent(T)}&per_page=10000&limit=10000`,
                                    t = await fetch(e, {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    });
                                if (!t.ok) {
                                    let e = await t.text();
                                    throw console.error("Greeting messages API error:", e), Error(`Failed to fetch messages: ${t.status}`)
                                }
                                let n = await t.json(),
                                    r = [];
                                Array.isArray(n) ? r = n : Array.isArray(null == n ? void 0 : n.data) ? r = n.data : Array.isArray(null == n ? void 0 : null === (P = n.data) || void 0 === P ? void 0 : P.data) ? r = n.data.data : Array.isArray(null == n ? void 0 : n.messages) ? r = n.messages : (null == n ? void 0 : n.data) && "object" == typeof n.data && (r = Object.values(n.data).filter(e => "object" == typeof e && null !== e && (e.id || e.uuid || e.content || e.sender)));
                                let i = r.filter(e => !0 === e.is_active || 1 === e.is_active || "1" === e.is_active || "true" === e.is_active || void 0 === e.is_active || null === e.is_active);
                                tw(i)
                            } catch (e) {
                                console.error("Error fetching greeting messages:", e), tw([])
                            } finally {
                                tE(!1)
                            }
                        }
                    };
                    (ep || ee) && e()
                }, [null == ep ? void 0 : null === (Q = ep.event) || void 0 === Q ? void 0 : Q.uuid, null == ep ? void 0 : null === (F = ep.event) || void 0 === F ? void 0 : F.event_uuid, null == ep ? void 0 : null === (R = ep.invitation) || void 0 === R ? void 0 : R.event_uuid, null == ep ? void 0 : null === (B = ep.invitation) || void 0 === B ? void 0 : B.uuid, ee]), (0, i.useEffect)(() => {
                    var e, t, n, r, i, o, l, a, d, s, u, c, v, g;
                    let L = (null == ep ? void 0 : null === (e = ep.event) || void 0 === e ? void 0 : e.start_date) || (null == ep ? void 0 : null === (t = ep.event) || void 0 === t ? void 0 : t.date) || (null == ep ? void 0 : null === (n = ep.event) || void 0 === n ? void 0 : n.event_date) || (null == ep ? void 0 : null === (r = ep.event) || void 0 === r ? void 0 : r.date_time) || (null == ep ? void 0 : null === (i = ep.invitation) || void 0 === i ? void 0 : i.start_date) || (null == ep ? void 0 : null === (o = ep.invitation) || void 0 === o ? void 0 : o.date) || (null == ep ? void 0 : null === (l = ep.invitation) || void 0 === l ? void 0 : l.event_date) || (null == ep ? void 0 : null === (a = ep.invitation) || void 0 === a ? void 0 : a.date_time),
                        p = (null == ep ? void 0 : null === (d = ep.event) || void 0 === d ? void 0 : d.end_date) || (null == ep ? void 0 : null === (s = ep.event) || void 0 === s ? void 0 : s.end_date_time) || (null == ep ? void 0 : null === (u = ep.event) || void 0 === u ? void 0 : u.endDate) || (null == ep ? void 0 : null === (c = ep.invitation) || void 0 === c ? void 0 : c.end_date) || (null == ep ? void 0 : null === (v = ep.invitation) || void 0 === v ? void 0 : v.end_date_time) || (null == ep ? void 0 : null === (g = ep.invitation) || void 0 === g ? void 0 : g.endDate);
                    if (!L) {
                        t1({
                            days: 0,
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        }), t6(!1), t3(""), t9(""), nt("");
                        return
                    }
                    let h = () => {
                        var e, t, n, r;
                        let i;
                        let o = new Date,
                            l = null,
                            a = (null == ep ? void 0 : null === (e = ep.event) || void 0 === e ? void 0 : e.timezone) || (null == ep ? void 0 : null === (t = ep.event) || void 0 === t ? void 0 : t.time_zone) || m.env.NEXT_PUBLIC_EVENT_TZ || "Asia/Phnom_Penh",
                            d = (null == ep ? void 0 : null === (n = ep.event) || void 0 === n ? void 0 : n.timezone_offset) || (null == ep ? void 0 : null === (r = ep.event) || void 0 === r ? void 0 : r.tz_offset) || m.env.NEXT_PUBLIC_EVENT_TZ_OFFSET || "+07:00",
                            s = e => {
                                let t = String(e || "").trim();
                                if (!t) return new Date(NaN);
                                let n = t.match(/^(\d{2})[-/](\d{2})[-/](\d{4})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/);
                                if (n) {
                                    let [, e, t, r, i = "00", o = "00", l = "00"] = n;
                                    return new Date(`${r}-${t}-${e}T${i}:${o}:${l}${d}`)
                                }
                                if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return new Date(`${t}T00:00:00${d}`);
                                let r = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}(:\d{2})?$/.test(t) ? t.replace(" ", "T") : t;
                                return new Date(!/(?:Z|[+-]\d{2}:?\d{2})$/.test(r) && /T\d{2}:\d{2}/.test(r) ? `${r}${d}` : r)
                            },
                            u = e => {
                                let t = new Intl.DateTimeFormat(void 0, {
                                        timeZone: a,
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        hour12: !1
                                    }).formatToParts(e),
                                    n = e => {
                                        var n;
                                        return (null === (n = t.find(t => t.type === e)) || void 0 === n ? void 0 : n.value) || "00"
                                    },
                                    r = n("day"),
                                    i = n("month"),
                                    o = n("year"),
                                    l = n("hour"),
                                    d = n("minute"),
                                    s = n("second");
                                return `${r}/${i}/${o} ${l}:${d}:${s}`
                            };
                        t2(u(o));
                        try {
                            if (i = s(L), isNaN(i.getTime())) {
                                console.error("Countdown - Invalid start date format:", L), t1(null), t3(""), t9(""), nt("");
                                return
                            }
                            if (p) try {
                                let e = s(p);
                                isNaN(e.getTime()) ? (console.warn("Countdown - Invalid end date format:", p), l = null) : l = e
                            } catch (e) {
                                console.warn("Countdown - Error parsing end date:", e, p), l = null
                            }
                            t9(u(i)), l ? (nt(u(l)), t3(`${u(i)} - ${u(l)}`)) : (nt(""), t3(u(i)))
                        } catch (e) {
                            console.error("Countdown - Error parsing start date:", e, L), t1(null), t3(""), t9(""), nt("");
                            return
                        }
                        if (l) {
                            if (o > l) {
                                t6(!0), t1(null), t3(""), t9(""), nt("");
                                return
                            }
                            t6(!1);
                            let e = l.getTime() - o.getTime();
                            t1({
                                days: Math.floor(e / 864e5),
                                hours: Math.floor(e % 864e5 / 36e5),
                                minutes: Math.floor(e % 36e5 / 6e4),
                                seconds: Math.floor(e % 6e4 / 1e3)
                            });
                            return
                        }
                        if (o >= i) {
                            t6(!0), t1(null);
                            return
                        }
                        t6(!1);
                        let c = i.getTime() - o.getTime();
                        t1({
                            days: Math.floor(c / 864e5),
                            hours: Math.floor(c % 864e5 / 36e5),
                            minutes: Math.floor(c % 36e5 / 6e4),
                            seconds: Math.floor(c % 6e4 / 1e3)
                        })
                    };
                    h();
                    let y = setInterval(h, 1e3);
                    return () => clearInterval(y)
                }, [ep]), (0, i.useEffect)(() => {
                    let e = async () => {
                        var e, t, n, r, i, o, l, a, d, s, u, c, v, m, g, L, p, h, y, _, f, b, w, x, E, P, T, j, k, S, I, C, N, M;
                        let A = (null == ep ? void 0 : null === (e = ep.event) || void 0 === e ? void 0 : e.uuid) || (null == ep ? void 0 : null === (t = ep.event) || void 0 === t ? void 0 : t.event_uuid) || (null == ep ? void 0 : null === (n = ep.invitation) || void 0 === n ? void 0 : n.event_uuid) || (null == ep ? void 0 : null === (r = ep.invitation) || void 0 === r ? void 0 : r.uuid) || (null == ee ? void 0 : null === (o = ee.data) || void 0 === o ? void 0 : null === (i = o.event) || void 0 === i ? void 0 : i.uuid) || (null == ee ? void 0 : null === (a = ee.data) || void 0 === a ? void 0 : null === (l = a.event) || void 0 === l ? void 0 : l.event_uuid) || (null == ee ? void 0 : null === (s = ee.data) || void 0 === s ? void 0 : null === (d = s.invitation) || void 0 === d ? void 0 : d.event_uuid) || (null == ee ? void 0 : null === (c = ee.data) || void 0 === c ? void 0 : null === (u = c.invitation) || void 0 === u ? void 0 : u.uuid) || (null == ee ? void 0 : null === (v = ee.event) || void 0 === v ? void 0 : v.uuid) || (null == ee ? void 0 : null === (m = ee.event) || void 0 === m ? void 0 : m.event_uuid) || (null == ee ? void 0 : null === (g = ee.invitation) || void 0 === g ? void 0 : g.event_uuid) || (null == ee ? void 0 : null === (L = ee.invitation) || void 0 === L ? void 0 : L.uuid),
                            $ = (null == ep ? void 0 : null === (p = ep.event) || void 0 === p ? void 0 : p.end_date) || (null == ep ? void 0 : null === (h = ep.event) || void 0 === h ? void 0 : h.end_date_time) || (null == ep ? void 0 : null === (y = ep.event) || void 0 === y ? void 0 : y.endDate) || (null == ep ? void 0 : null === (_ = ep.invitation) || void 0 === _ ? void 0 : _.end_date) || (null == ep ? void 0 : null === (f = ep.invitation) || void 0 === f ? void 0 : f.end_date_time) || (null == ep ? void 0 : null === (b = ep.invitation) || void 0 === b ? void 0 : b.endDate);
                        if (!A || !$) return;
                        let D = new Date >= new Date(/^\d{4}-\d{2}-\d{2}$/.test($) ? $ + "T00:00:00" : $);
                        if (nc(D), D) {
                            let e = (null == ep ? void 0 : null === (w = ep.invitation) || void 0 === w ? void 0 : w.uuid) || (null == ep ? void 0 : null === (x = ep.invitation) || void 0 === x ? void 0 : x.id) || (null == ep ? void 0 : null === (P = ep.data) || void 0 === P ? void 0 : null === (E = P.invitation) || void 0 === E ? void 0 : E.uuid) || (null == ep ? void 0 : null === (j = ep.data) || void 0 === j ? void 0 : null === (T = j.invitation) || void 0 === T ? void 0 : T.id);
                            if (!e) return;
                            (null == ep ? void 0 : null === (k = ep.event) || void 0 === k ? void 0 : k.is_checkin) === 1 || (null == ep ? void 0 : null === (S = ep.event) || void 0 === S ? void 0 : S.is_checkin) === !0 || (null == ep ? void 0 : null === (C = ep.data) || void 0 === C ? void 0 : null === (I = C.event) || void 0 === I ? void 0 : I.is_checkin) === 1 || (null == ep ? void 0 : null === (M = ep.data) || void 0 === M ? void 0 : null === (N = M.event) || void 0 === N ? void 0 : N.is_checkin) === !0 || (null == ep ? void 0 : ep.is_checkin) === 1 || (null == ep ? void 0 : ep.is_checkin) === !0 ? (ns(!0), na(e), no(!0)) : (ns(!1), no(!1))
                        }
                    };
                    (ep || ee) && e()
                }, [ep, ee]), (0, i.useEffect)(() => {
                    if (!ni && nl && nu) {
                        let e = setTimeout(() => {
                            nm(!0)
                        }, 300);
                        return () => clearTimeout(e)
                    }
                    nm(!1)
                }, [ni, nl, nu]);
                let nI = (0, i.useRef)(null),
                    nC = (0, i.useRef)(null),
                    nN = (0, i.useRef)(null),
                    nM = (0, i.useRef)(null),
                    nA = (0, i.useRef)(null),
                    n$ = (0, i.useRef)(null),
                    [nD, nO] = (0, i.useState)({
                        video1: !1,
                        video2: !1,
                        video3: !1
                    }),
                    nQ = (0, i.useCallback)(() => {
                        if ("undefined" != typeof navigator && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                            let e = () => {
                                let e = .01 * window.innerHeight;
                                document.documentElement.style.setProperty("--vh", `${e}px`)
                            };
                            e(), document.body.classList.add("ios-fullscreen"), document.documentElement.classList.add("ios-fullscreen");
                            let t = () => {
                                document.body.style.setProperty("position", "fixed", "important"), document.body.style.setProperty("width", "100%", "important"), document.body.style.setProperty("height", "100%", "important"), document.body.style.setProperty("top", "0", "important"), document.body.style.setProperty("left", "0", "important"), document.body.style.setProperty("right", "0", "important"), document.body.style.setProperty("bottom", "0", "important"), document.body.style.setProperty("margin", "0", "important"), document.body.style.setProperty("padding", "0", "important"), document.body.style.setProperty("overflow", "hidden", "important"), document.body.style.setProperty("-webkit-overflow-scrolling", "touch", "important"), document.documentElement.style.setProperty("position", "fixed", "important"), document.documentElement.style.setProperty("width", "100%", "important"), document.documentElement.style.setProperty("height", "100%", "important"), document.documentElement.style.setProperty("margin", "0", "important"), document.documentElement.style.setProperty("padding", "0", "important"), document.documentElement.style.setProperty("overflow", "hidden", "important");
                                let e = window.innerHeight;
                                document.body.style.setProperty("height", `${e}px`, "important"), document.documentElement.style.setProperty("height", `${e}px`, "important")
                            };
                            t(), window.scrollTo({
                                top: 1,
                                left: 0,
                                behavior: "auto"
                            }), requestAnimationFrame(() => {
                                window.scrollTo({
                                    top: 1,
                                    left: 0,
                                    behavior: "auto"
                                }), setTimeout(() => {
                                    window.scrollTo({
                                        top: 1,
                                        left: 0,
                                        behavior: "auto"
                                    }), e()
                                }, 10), setTimeout(() => {
                                    window.scrollTo({
                                        top: 1,
                                        left: 0,
                                        behavior: "auto"
                                    }), e()
                                }, 50), setTimeout(() => {
                                    window.scrollTo({
                                        top: 1,
                                        left: 0,
                                        behavior: "auto"
                                    }), e()
                                }, 100), setTimeout(() => {
                                    window.scrollTo({
                                        top: 1,
                                        left: 0,
                                        behavior: "auto"
                                    }), e()
                                }, 200), setTimeout(() => {
                                    window.scrollTo({
                                        top: 1,
                                        left: 0,
                                        behavior: "auto"
                                    }), e()
                                }, 500), setTimeout(() => {
                                    window.scrollTo({
                                        top: 1,
                                        left: 0,
                                        behavior: "auto"
                                    }), e()
                                }, 1e3)
                            }), setTimeout(() => {
                                window.dispatchEvent(new Event("resize")), e(), t()
                            }, 100), window.addEventListener("orientationchange", () => {
                                e(), t(), window.scrollTo({
                                    top: 1,
                                    left: 0,
                                    behavior: "auto"
                                })
                            }), screen.orientation && screen.orientation.lock && screen.orientation.lock("portrait").catch(() => {})
                        } else {
                            let e = document.documentElement;
                            e.requestFullscreen ? e.requestFullscreen().catch(e => {}) : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                        }
                    }, []),
                    nF = (0, i.useMemo)(() => "undefined" != typeof navigator && (navigator.userAgent.toLowerCase().indexOf("telegram") > -1 || void 0 !== window.TelegramWebApp || void 0 !== window.Telegram), []),
                    nR = (0, i.useMemo)(() => !!nF && "undefined" != typeof navigator && /Android/.test(navigator.userAgent), [nF]),
                    nB = (0, i.useMemo)(() => !!nF && "undefined" != typeof navigator && /iPhone|iPad|iPod/.test(navigator.userAgent), [nF]),
                    nW = (0, i.useMemo)(() => {
                        if ("undefined" == typeof navigator) return !1;
                        let e = navigator.userAgent,
                            t = /iPhone|iPad|iPod/.test(e),
                            n = /WebKit/.test(e),
                            r = /CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo/i.test(e);
                        return t && n && !r
                    }, []),
                    nz = (0, i.useCallback)(e => {
                        let t = nC.current;
                        if (!t || t.ended) return !1;
                        let n = Number.isFinite(t.currentTime) ? t.currentTime : 0;
                        n.toFixed(2), t.muted = !0, t.playsInline = !0, t.style.backgroundColor = "transparent";
                        let r = () => {
                            let e = nC.current;
                            e && !e.ended && (n > 0 && Math.abs(e.currentTime - n) > .25 && (e.currentTime = n), e.play().catch(() => {}))
                        };
                        if (t.readyState < 2) {
                            let e = () => {
                                t.removeEventListener("canplay", e), r()
                            };
                            t.addEventListener("canplay", e, {
                                once: !0
                            }), t.load(), setTimeout(r, 150)
                        } else r();
                        return !0
                    }, []),
                    nV = (0, i.useCallback)(e => {
                        var t, n, r, i;
                        let o = nC.current;
                        if (!o) return !1;
                        if (eB.current && 3 === nh.current) return !0;
                        let l = (null == o ? void 0 : o.ended) || !1,
                            a = (null == o ? void 0 : o.duration) || 0,
                            d = o && o.seekable && o.seekable.length > 0 ? o.seekable.end(o.seekable.length - 1) : 0,
                            s = Number.isFinite(a) && a > 0 ? a : Number.isFinite(d) && d > 0 ? d : 0,
                            u = (null == o ? void 0 : o.currentTime) || 0,
                            c = "undefined" != typeof navigator ? navigator.userAgent : "";
                        if (/iPhone|iPad|iPod/.test(c), /WebKit/.test(c), /CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo/i.test(c), 2 !== nh.current) return !1;
                        if (!l && !(s > 0 && u >= s - .05)) return u.toFixed(2), s.toFixed(2), !1;
                        u.toFixed(2), s.toFixed(2), eB.current = !0;
                        let v = (null == ep ? void 0 : null === (n = ep.event) || void 0 === n ? void 0 : null === (t = n.theme) || void 0 === t ? void 0 : t.theme_template) || (null == ep ? void 0 : ep.theme_template) || "default",
                            m = "dark_mode" === v;
                        if ("modern" === v || m) {
                            let e = 3;
                            m && (e = eV.current ? 4 : 3), ej && (e = 3), nh.current = e, ej ? nC.current && (nC.current.style.zIndex = "0", nC.current.style.opacity = "0", nC.current.style.visibility = "hidden") : nC.current && (nC.current.style.zIndex = "1"), eR(!0), em(e), tJ(!1), null === (i = ny.current) || void 0 === i || i.call(ny);
                            let t = nN.current;
                            if (t && (t.muted = !0, t.playsInline = !0, t.loop = !0, t.style.backgroundColor = "transparent", t.play().catch(e => console.log("Scrollable video 3 play error:", e))), (ej || m) && nM.current) {
                                let e = nM.current;
                                e.muted = !0, e.playsInline = !0, e.loop = !0, requestAnimationFrame(() => {
                                    e.play().catch(e => console.log("Video 4 play error:", e))
                                })
                            }
                            return !0
                        }
                        nh.current = 3, nC.current && (nC.current.style.zIndex = "1"), eR(!0), em(3), tJ(!1), null === (r = ny.current) || void 0 === r || r.call(ny);
                        let g = nN.current;
                        return g && (g.muted = !0, g.playsInline = !0, g.style.backgroundColor = "transparent", g.currentTime = 0, g.readyState < 2 && g.load(), requestAnimationFrame(() => {
                            g.play().catch(() => {
                                g.addEventListener("canplay", () => g.play().catch(() => {}), {
                                    once: !0
                                })
                            })
                        })), !0
                    }, []),
                    nZ = (0, i.useCallback)(e => {
                        var t, n;
                        if (eB.current && (3 === nh.current || 4 === nh.current)) return;
                        if (eB.current = !0, eI) {
                            let e = 3;
                            ek ? e = eV.current ? 4 : 3 : ej && (e = 3), nh.current = e, nC.current && 2 !== e && (ej ? (nC.current.style.zIndex = "0", nC.current.style.opacity = "0", nC.current.style.visibility = "hidden") : nC.current.style.zIndex = "1"), eR(!0), em(e), tJ(!1), null === (n = ny.current) || void 0 === n || n.call(ny), 2 === e && nC.current ? (nC.current.loop = !0, nC.current.play().catch(() => {})) : 3 === e && nN.current ? (nN.current.loop = !0, nN.current.play().catch(() => {})) : 4 === e && nM.current && (nM.current.loop = !0, nM.current.play().catch(() => {}));
                            return
                        }
                        nh.current = 3, nC.current && (nC.current.style.zIndex = "1"), eR(!0), em(3), tJ(!1), null === (t = ny.current) || void 0 === t || t.call(ny);
                        let r = nN.current;
                        r && (r.muted = !0, r.playsInline = !0, r.style.backgroundColor = "transparent", r.currentTime = 0, r.readyState < 2 && r.load(), requestAnimationFrame(() => {
                            r.play().catch(() => {
                                r.addEventListener("canplay", () => r.play().catch(() => {}), {
                                    once: !0
                                })
                            })
                        }))
                    }, [ej]),
                    nq = (0, i.useCallback)(() => {
                        if (0 !== ey.length && 1 === ev) {
                            eK(!0), eS || (eJ(!0), setTimeout(() => eJ(!1), 450)), e4.current && (clearTimeout(e4.current), e4.current = null), e2.current && (clearInterval(e2.current), e2.current = null);
                            let t = "slow" === e7.current ? 8e3 : "medium" === e7.current ? 6e3 : 5e3;
                            if (e4.current = setTimeout(() => {
                                    var e;
                                    let n = (null === (e = nC.current) || void 0 === e ? void 0 : e.ended) || !1;
                                    if ((1 === nh.current || 2 === nh.current) && !eB.current && ey.length >= 3 && !n) {
                                        let e = nC.current,
                                            n = (null == e ? void 0 : e.currentTime) ? ? 0;
                                        nz(`Fallback timeout (${t}ms)`), (nW || nB) && setTimeout(() => {
                                            let e = nC.current,
                                                t = 2 === nh.current && !eB.current,
                                                r = (null == e ? void 0 : e.ended) || !1,
                                                i = (null == e ? void 0 : e.currentTime) ? ? 0,
                                                o = (null == e ? void 0 : e.paused) ? ? !0,
                                                l = i > n + .12,
                                                a = (null == e ? void 0 : e.duration) ? ? 0,
                                                d = Number.isFinite(a) && a > 0 && i >= a - 1.2;
                                            if (!t || r || !o && l || d || nz("iOS/Telegram iOS: still stuck, retry resume"), t && !r && nB && i < .2 && (o || !l)) {
                                                nZ("Telegram iOS: video 2 stuck at start fallback");
                                                return
                                            }
                                            t && !r && d && nV("iOS/Telegram iOS: near-end stuck, proceed to video 3")
                                        }, 900)
                                    }
                                }, t), e2.current = setInterval(() => {
                                    var e;
                                    if (null === (e = nC.current) || void 0 === e ? void 0 : e.ended) {
                                        e4.current && (clearTimeout(e4.current), e4.current = null), e2.current && (clearInterval(e2.current), e2.current = null);
                                        return
                                    }
                                    em(e => ((3 === e || eB.current) && (e4.current && (clearTimeout(e4.current), e4.current = null), e2.current && (clearInterval(e2.current), e2.current = null)), e))
                                }, 500), nR && (setTimeout(() => {
                                    var e, t;
                                    null === (e = nC.current) || void 0 === e || e.ended;
                                    let n = (null === (t = nC.current) || void 0 === t ? void 0 : t.ended) || !1;
                                    em(e => (eB.current || !(ey.length >= 3) || n || 2 !== e || nz("Telegram Android: 1.5s timeout"), e))
                                }, 1500), setTimeout(() => {
                                    var e, t;
                                    null === (e = nC.current) || void 0 === e || e.ended;
                                    let n = (null === (t = nC.current) || void 0 === t ? void 0 : t.ended) || !1;
                                    em(e => (eB.current || !(ey.length >= 3) || n || 2 !== e || nz("Telegram Android: 3s timeout"), e))
                                }, 3e3)), (async () => {
                                    try {
                                        var e, t, n, r, i, o;
                                        let l = (null == ep ? void 0 : null === (e = ep.invitation) || void 0 === e ? void 0 : e.uuid) || (null == ep ? void 0 : null === (n = ep.data) || void 0 === n ? void 0 : null === (t = n.invitation) || void 0 === t ? void 0 : t.uuid) || (null == ee ? void 0 : null === (r = ee.invitation) || void 0 === r ? void 0 : r.uuid) || (null == ee ? void 0 : null === (o = ee.data) || void 0 === o ? void 0 : null === (i = o.invitation) || void 0 === i ? void 0 : i.uuid);
                                        if (!l) return;
                                        let a = `/api/invitations/${encodeURIComponent(l)}/open-ticket`,
                                            d = await fetch(a, {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                }
                                            });
                                        if (!d.ok) {
                                            let e = await d.text();
                                            console.warn("Open-ticket API error:", d.status, e);
                                            return
                                        }
                                        await d.json()
                                    } catch (e) {
                                        console.warn("Error calling open-ticket API:", e)
                                    }
                                })(), tl.current && ti && (tl.current.muted = !1, td(!1), tl.current.volume = 1, tl.current.play().catch(e => {
                                    var t;
                                    (null == e ? void 0 : e.name) !== "AbortError" && (null == e || null === (t = e.message) || void 0 === t || t.includes("interrupted"))
                                })), nC.current) {
                                let e = nC.current,
                                    t = "undefined" != typeof navigator && /Chrome/.test(navigator.userAgent) && !/Edge|Edg/.test(navigator.userAgent);
                                "undefined" != typeof navigator && /Android/.test(navigator.userAgent) && (e.setAttribute("playsinline", "true"), e.setAttribute("webkit-playsinline", "true"), e.setAttribute("x5-video-player-type", "h5"), e.setAttribute("x5-video-player-fullscreen", "true"), e.setAttribute("x5-video-orientation", "portraint")), t && (e.setAttribute("autoplay", "true"), e.setAttribute("muted", "true"), e.setAttribute("playsinline", "true"), e.setAttribute("webkit-playsinline", "true")), e.muted = !0, e.playsInline = !0, e.style.backgroundColor = "transparent", em(2), (() => {
                                    if (!nC.current) return;
                                    let e = nC.current;
                                    e.currentTime = 0, e.style.backgroundColor = "transparent", e.readyState < 1 && e.load(), (() => {
                                        if (!nC.current) return;
                                        let e = nC.current;
                                        if (e.paused) {
                                            let t = e.play();
                                            void 0 !== t && t.then(() => E("OpenTicket", "video 2 playing OK")).catch(e => {
                                                null == e || e.message, setTimeout(() => {
                                                    nC.current && 2 === nh.current && nC.current.paused && nC.current.play().catch(() => {})
                                                }, 100)
                                            })
                                        }
                                    })()
                                })()
                            } else em(2);
                            if (tl.current && ti && tl.current.play().catch(e => {
                                    var t;
                                    (null == e ? void 0 : e.name) !== "AbortError" && (null == e || null === (t = e.message) || void 0 === t || t.includes("interrupted"))
                                }), nR) {
                                var e;
                                let t = (null === (e = nC.current) || void 0 === e ? void 0 : e.currentTime) || 0;
                                setTimeout(() => {
                                    let e = nC.current,
                                        n = (null == e ? void 0 : e.ended) || !1,
                                        r = (null == e ? void 0 : e.currentTime) || 0;
                                    e && e.paused && !n && r <= t + .1 && ey.length >= 3 && em(e => (2 !== e || eB.current || nz("Telegram Android: Video 2 stuck after 1s"), e))
                                }, 1e3), setTimeout(() => {
                                    let e = nC.current,
                                        n = (null == e ? void 0 : e.ended) || !1,
                                        r = (null == e ? void 0 : e.currentTime) || 0;
                                    !eB.current && ey.length >= 3 && !n && r <= t + .5 && em(e => (2 !== e || eB.current || nz("Telegram Android: Fallback after 3s, video 2 stuck"), e))
                                }, 3e3)
                            }
                        }
                    }, [ev, ey.length, ti, nQ, ep, ee, nR, nB, eF, nz, nZ, nV, eS]),
                    nU = (0, i.useCallback)(e => {
                        tV(1), tW(e)
                    }, []),
                    nH = (0, i.useCallback)(() => {
                        tW(null), tV(1)
                    }, []);
                (0, i.useCallback)((e, t, n, r, i) => {
                    if ("next" === e && n < t.length - 1) {
                        let e = n + 1,
                            o = t[e];
                        o && o.media_url && (i(e), r(er(o.media_url)))
                    } else if ("prev" === e && n > 0) {
                        let e = n - 1,
                            o = t[e];
                        o && o.media_url && (i(e), r(er(o.media_url)))
                    }
                }, [er]);
                let nG = (0, i.useCallback)(() => {
                    var e;
                    ((null == ep ? void 0 : null === (e = ep.event) || void 0 === e ? void 0 : e.segments) || (null == ep ? void 0 : ep.segments) || []).filter(e => 1 === e.is_visible || !0 === e.is_visible || e.is_visible).forEach(e => {
                        e.galleries && Array.isArray(e.galleries) && e.galleries.forEach(e => {
                            e.media_url && (new Image().src = er(e.media_url))
                        }), e.media && Array.isArray(e.media) && e.media.forEach(e => {
                            e.media_url && ("image" === e.type || !e.type) && (new Image().src = er(e.media_url))
                        })
                    })
                }, [null == ep ? void 0 : null === (W = ep.event) || void 0 === W ? void 0 : W.segments, null == ep ? void 0 : ep.segments, er]);
                (0, i.useEffect)(() => {
                    ny.current = nG
                }, [nG]), (0, i.useEffect)(() => {
                    if (!nB || 0 === ey.length) return;
                    let e = -1,
                        t = Date.now(),
                        n = setInterval(() => {
                            let n = 1 === nh.current ? nI.current : 2 === nh.current ? nC.current : nN.current;
                            if (!n || n.ended) return;
                            let r = n.currentTime || 0;
                            if (r > e + .03) {
                                e = r, t = Date.now();
                                return
                            }
                            Date.now() - t < 3500 || (n.muted = !0, n.playsInline = !0, n.play().catch(() => {}), 2 === nh.current && !eB.current && r < .3 && nZ("Telegram iOS watchdog: video 2 stalled at start"), t = Date.now())
                        }, 700);
                    return () => clearInterval(n)
                }, [nB, ey.length, nZ]), (0, i.useEffect)(() => {
                    var e;
                    if (0 === ((null == ep ? void 0 : null === (e = ep.event) || void 0 === e ? void 0 : e.segments) || (null == ep ? void 0 : ep.segments) || []).length) return;
                    let t = setTimeout(() => nG(), 300);
                    return () => clearTimeout(t)
                }, [null == ep ? void 0 : null === (z = ep.event) || void 0 === z ? void 0 : z.segments, null == ep ? void 0 : ep.segments, nG]);
                let nK = (0, i.useCallback)(() => {
                        if ("undefined" == typeof navigator) return !0;
                        let e = "undefined" != typeof navigator && navigator.userAgent || "",
                            t = /Mobi|Android|iPhone|iPad|iPod|Windows Phone|BlackBerry/i.test(e),
                            n = window.matchMedia("(pointer: fine)").matches,
                            r = "undefined" == typeof navigator || 1 >= (navigator.maxTouchPoints || 0);
                        return !t && n && r
                    }, []),
                    [nY, nJ] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    let e = () => {
                        nJ(nK())
                    };
                    return e(), window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }, [nK]);
                let nX = (0, i.useCallback)(() => {
                        if (!tl.current) return;
                        let e = !ta;
                        tl.current.muted = e, td(e), e || tl.current.play().catch(e => {
                            var t;
                            (null == e ? void 0 : e.name) !== "AbortError" && (null == e || null === (t = e.message) || void 0 === t || t.includes("interrupted"))
                        })
                    }, [ta]),
                    n0 = (0, i.useCallback)(e => {
                        if ("undefined" == typeof document || !nA.current) return;
                        let t = nA.current.querySelector(`[data-segment-type="${e}"]`) || document.querySelector(`[data-segment-type="${e}"]`);
                        t && ("footer" === e ? t.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                            inline: "nearest"
                        }) : t.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "nearest"
                        }))
                    }, []),
                    n1 = (0, i.useCallback)(() => {
                        if (tY) {
                            tJ(!1), tt.current = Date.now(), tn.current = !0; {
                                let e = `event_viewed_${J}_${X}`;
                                localStorage.setItem(e, "true"), window.scrollBy({
                                    top: 350,
                                    behavior: "smooth"
                                })
                            }
                            nA.current && nA.current.scrollBy({
                                top: 350,
                                behavior: "smooth"
                            })
                        }
                    }, [tY, J, X]),
                    n5 = (0, i.useCallback)(async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        try {
                            var n, r, i, o, l, a;
                            t || eL(!0), eQ(null);
                            let d = e || ed,
                                s = await en(d, J, el);
                            if (null == s || s.data, "error" === s.status) throw Error(s.message || "API returned an error");
                            let u = s.data || s;
                            eh(u), eb(null == u ? void 0 : null === (r = u.event) || void 0 === r ? void 0 : null === (n = r.theme) || void 0 === n ? void 0 : n.settings), ex((null == u ? void 0 : null === (i = u.event) || void 0 === i ? void 0 : i.languages) || []);
                            let c = (null == u ? void 0 : null === (l = u.event) || void 0 === l ? void 0 : null === (o = l.theme) || void 0 === o ? void 0 : o.media) || [],
                                v = e => {
                                    let t = c.find(t => "video" === t.type && t.slot === e);
                                    return t ? er(t.url, !0) : ""
                                },
                                m = [v("theme_video_1"), v("theme_video_2"), v("theme_video_3"), v("theme_video_4")];
                            e_(m), m.filter(e => e).length, t && eF && m[2] && !eI ? em(3) : t && eF && eI ? em(2) : m[0] && (em(1), eF && eR(!1));
                            let g = (null == u ? void 0 : null === (a = u.event) || void 0 === a ? void 0 : a.segments) || (null == u ? void 0 : u.segments) || [];
                            to(nf(g, c)), e0({
                                khmer: "សូមចុចបើកសំបុត្រ",
                                english: "Click to Open The Invitation"
                            }), t || eL(!1)
                        } catch (n) {
                            t || eL(!1);
                            let e = n.response || n.message || "Unknown error occurred";
                            n.isCors ? e = "CORS Error: The API server is blocking requests from your browser. This is likely a server configuration issue." : 0 === n.status && (e = `Network error: ${n.message||"Unable to reach API. This could be a CORS issue or network problem."}`), eQ(e), console.error("Error loading event data:", {
                                message: n.message,
                                status: n.status,
                                response: n.response,
                                isCors: n.isCors,
                                error: n
                            }), 404 === n.status && et.push("/error")
                        }
                    }, [ed, J, el, en, et, eF, er]);
                if ((0, i.useEffect)(() => {}, []), (0, i.useEffect)(() => {
                        es || n5()
                    }, [n5, es]), (0, i.useEffect)(() => {
                        if (0 === ey.length) return;
                        "localhost" === window.location.hostname || "127.0.0.1" === window.location.hostname || window.location.hostname.includes("localhost");
                        let e = !1,
                            t = () => {
                                if (!e && (e = !0, nI.current && 1 === ev)) {
                                    let e = nI.current;
                                    e.readyState < 1 && e.load();
                                    let t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768,
                                        n = () => {
                                            if (e.muted = !0, e.playsInline = !0, e.currentTime = 0, e.setAttribute("autoplay", "true"), e.setAttribute("muted", "true"), e.setAttribute("playsinline", "true"), e.setAttribute("webkit-playsinline", "true"), e.paused) {
                                                if (("slow" === e7.current || t) && e.buffered.length > 0 && e.buffered.end(e.buffered.length - 1) < (t ? 1 : .5)) {
                                                    setTimeout(() => {
                                                        nI.current && nI.current.paused && 1 === ev && nI.current.play().catch(() => {})
                                                    }, t ? 800 : 500);
                                                    return
                                                }
                                                e.play().catch(() => {
                                                    setTimeout(() => {
                                                        nI.current && nI.current.paused && 1 === ev && (nI.current.readyState < 1 && nI.current.load(), nI.current.play().catch(() => {}))
                                                    }, 100)
                                                })
                                            }
                                        };
                                    "slow" === e7.current ? setTimeout(n, 100) : n()
                                }
                            },
                            n = ["click", "touchstart", "touchend", "mousedown", "keydown", "scroll", "wheel", "pointerdown"];
                        n.forEach(e => {
                            document.addEventListener(e, t, {
                                once: !0,
                                passive: !0
                            }), window.addEventListener(e, t, {
                                once: !0,
                                passive: !0
                            })
                        });
                        let r = () => {
                            if (nI.current && 1 === ev && nI.current.paused && !nI.current.ended) {
                                let e = nI.current;
                                e.muted = !0, e.playsInline = !0, e.play().catch(() => {})
                            }
                        };
                        r();
                        let i = setTimeout(r, 200),
                            o = setTimeout(r, 500),
                            l = setTimeout(r, 1e3),
                            a = setTimeout(r, 2e3);
                        return () => {
                            clearTimeout(i), clearTimeout(o), clearTimeout(l), clearTimeout(a), n.forEach(e => {
                                document.removeEventListener(e, t), window.removeEventListener(e, t)
                            })
                        }
                    }, [ey.length, ev]), (0, i.useEffect)(() => {
                        tr.current || ([nC.current, nN.current].forEach((e, t) => {
                            if (e) try {
                                e.pause(), e.currentTime = 0, e.muted = !0, e.playsInline = !0, e.volume = 0
                            } catch (e) {}
                        }), tr.current = !0)
                    }, []), (0, i.useEffect)(() => {
                        if (ey.length < 3 || !(3 === ev || eF)) return;
                        let e = nN.current;
                        if (!e) return;
                        e.muted = !0, e.playsInline = !0, e.style.backgroundColor = "transparent";
                        let t = () => {
                            (3 === nh.current || eB.current) && nN.current && nN.current.paused && !nN.current.ended && nN.current.play().catch(() => {})
                        };
                        t();
                        let n = setTimeout(t, 100),
                            r = setTimeout(t, 300),
                            i = setTimeout(t, 800);
                        return () => {
                            clearTimeout(n), clearTimeout(r), clearTimeout(i)
                        }
                    }, [ey.length, ev, eF]), (0, i.useEffect)(() => {
                        if (0 === ey.length) return;
                        let e = () => {
                            if (nI.current) {
                                let e = nI.current;
                                e.style.opacity = "1", e.style.zIndex = "2", e.style.visibility = "visible", e.style.display = "block", e.style.backgroundColor = "transparent";
                                let t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
                                if (e.readyState < 1 && e.load(), t) {
                                    e.playsInline = !0, e.muted = !0;
                                    try {
                                        e.playbackRate && e.playbackRate
                                    } catch (e) {}
                                }
                                let n = () => {
                                    if (e.readyState >= 1 && e.paused) {
                                        if ("slow" === e7.current || t) {
                                            let t = e.currentTime;
                                            e.currentTime = 1, setTimeout(() => {
                                                if (nI.current && !nI.current.ended) {
                                                    nI.current.currentTime = t;
                                                    let e = () => {
                                                        if (nI.current && nI.current.paused && "slow" === e7.current) {
                                                            let e = nI.current.currentTime;
                                                            nI.current.currentTime = Math.min(e + .5, 3), setTimeout(() => {
                                                                nI.current && !nI.current.ended && (nI.current.currentTime = e)
                                                            }, 300)
                                                        }
                                                    };
                                                    setTimeout(e, 500), setTimeout(e, 1500), setTimeout(e, 2500), setTimeout(e, 4e3)
                                                }
                                            }, 300)
                                        } else {
                                            let t = e.currentTime;
                                            e.currentTime = .1, setTimeout(() => {
                                                nI.current && !nI.current.ended && (nI.current.currentTime = t)
                                            }, 100)
                                        }
                                    }
                                };
                                if (e.addEventListener("loadedmetadata", () => {
                                        "slow" === e7.current && setTimeout(n, 100)
                                    }, {
                                        once: !0
                                    }), e.addEventListener("canplay", n, {
                                        once: !0
                                    }), e.addEventListener("canplaythrough", n, {
                                        once: !0
                                    }), "slow" === e7.current) {
                                    let t = 0,
                                        r = () => {
                                            if (e.readyState >= 2 && e.paused && e.buffered.length > 0) {
                                                let r = e.buffered.end(e.buffered.length - 1);
                                                r < 2 && r > t && (t = r, n())
                                            }
                                        };
                                    e.addEventListener("progress", r);
                                    let i = () => {
                                            e && e.removeEventListener("progress", r)
                                        },
                                        o = setInterval(() => {
                                            if (!nI.current || 1 !== ev) {
                                                clearInterval(o), i();
                                                return
                                            }
                                            e.buffered.length > 0 && e.paused && (2 > e.buffered.end(e.buffered.length - 1) ? n() : (clearInterval(o), i()))
                                        }, 1e3);
                                    return setTimeout(() => {
                                        clearInterval(o), i()
                                    }, 1e4), () => {
                                        clearInterval(o), i()
                                    }
                                }
                                return
                            }
                            if (nC.current) {
                                let e = nC.current;
                                eG || 1 !== ev || e.paused || (e.pause(), e.currentTime = 0)
                            }
                        };
                        e();
                        let t = setTimeout(e, 50),
                            n = setTimeout(e, 100),
                            r = setTimeout(e, 200),
                            i = setTimeout(e, 300),
                            o = setTimeout(e, 500);
                        return () => {
                            clearTimeout(t), clearTimeout(n), clearTimeout(r), clearTimeout(i), clearTimeout(o)
                        }
                    }, [ey.length]), (0, i.useEffect)(() => {
                        if (0 !== ey.length) {
                            if (nI.current && 1 === ev) {
                                let e = () => {
                                    if (!nI.current || 1 !== ev) return;
                                    let e = nI.current;
                                    e.muted = !0, e.playsInline = !0, e.currentTime = 0, "undefined" != typeof navigator && /Chrome/.test(navigator.userAgent) && !/Edge|Edg/.test(navigator.userAgent) && (e.setAttribute("autoplay", "true"), e.setAttribute("muted", "true"), e.setAttribute("playsinline", "true")), e.readyState < 1 && e.load(), e.paused && e.play().catch(() => {
                                        setTimeout(() => {
                                            nI.current && nI.current.paused && 1 === ev && nI.current.play().catch(() => {
                                                setTimeout(() => {
                                                    nI.current && nI.current.paused && 1 === ev && nI.current.play().catch(() => {})
                                                }, 200)
                                            })
                                        }, 100)
                                    })
                                };
                                e(), nI.current.readyState >= 2 ? e() : (nI.current.addEventListener("canplay", e, {
                                    once: !0
                                }), nI.current.addEventListener("canplaythrough", e, {
                                    once: !0
                                })), setTimeout(e, 100), setTimeout(e, 300), setTimeout(e, 500)
                            }
                            return () => {}
                        }
                    }, [ey.length]), (0, i.useEffect)(() => {
                        if (0 === ey.length || eF) return;
                        let e = nI.current;
                        if (!e) return;
                        e.style.opacity = "1", e.style.zIndex = "2", e.style.visibility = "visible", e.style.display = "block", e.style.backgroundColor = "transparent";
                        let t = () => {
                            try {
                                e.muted = !0, e.currentTime = 0, e.playsInline = !0, "localhost" === window.location.hostname || window.location.hostname;
                                let t = e.src || ey[0] || "";
                                t && (t.includes("cmssambot.b-cdn.net") || t.includes("bunnycdn.com") || t.startsWith("https://")) && (e.crossOrigin = "anonymous"), e.setAttribute("autoplay", "true"), e.setAttribute("muted", "true"), e.setAttribute("playsinline", "true"), e.setAttribute("webkit-playsinline", "true"), e.readyState < 1 && e.load(), nR && (e.setAttribute("x5-video-player-type", "h5"), e.setAttribute("x5-video-player-fullscreen", "true"), e.setAttribute("x5-video-orientation", "portraint"), e.load());
                                let n = e.play();
                                void 0 !== n && n.then(() => {}).catch(t => {
                                    var n, r;
                                    !((null == t ? void 0 : t.name) === "AbortError" || (null == t ? void 0 : null === (n = t.message) || void 0 === n ? void 0 : n.includes("AbortError")) || (null == t ? void 0 : null === (r = t.message) || void 0 === r ? void 0 : r.includes("interrupted"))) && e.readyState < 2 && (e.load(), setTimeout(() => {
                                        e && e.paused && e.play().catch(() => {
                                            setTimeout(() => {
                                                e && e.paused && e.play().catch(() => {})
                                            }, 200)
                                        })
                                    }, 100))
                                })
                            } catch (e) {
                                null == e || e.name
                            }
                        };
                        t();
                        let n = setTimeout(() => {
                                e && e.paused && t()
                            }, 500),
                            r = !1,
                            i = () => {
                                r || (r = !0), t(), setTimeout(() => t(), 50), setTimeout(() => t(), 100), setTimeout(() => t(), 200)
                            };
                        if (["touchstart", "click", "touchend", "mousedown", "keydown", "scroll", "wheel"].forEach(e => {
                                document.addEventListener(e, i, {
                                    once: !0,
                                    passive: !0
                                }), window.addEventListener(e, i, {
                                    once: !0,
                                    passive: !0
                                })
                            }), document.body.addEventListener("touchstart", i, {
                                once: !0,
                                passive: !0
                            }), document.body.addEventListener("click", i, {
                                once: !0
                            }), nR) {
                            let e = () => {
                                i()
                            };
                            window.addEventListener("focus", e, {
                                once: !0
                            }), document.body.addEventListener("touchstart", e, {
                                once: !0,
                                passive: !0
                            })
                        }
                        return setTimeout(() => {
                            e && e.paused && 1 === ev && t()
                        }, 1e3), () => {
                            clearTimeout(n), document.removeEventListener("touchstart", i), document.removeEventListener("click", i), document.removeEventListener("touchend", i), nR && (window.removeEventListener("focus", i), document.body.removeEventListener("touchstart", i))
                        }
                    }, [ey.length, eF, nR]), (0, i.useEffect)(() => {
                        if (0 === ey.length) return;
                        let e = () => {
                            nI.current && 1 === ev && nI.current.paused && !nI.current.ended && nI.current.play().then(() => E("KeepPlaying", "video 1 playing")).catch(e => {
                                null == e || e.message, setTimeout(() => {
                                    nI.current && 1 === ev && nI.current.paused && nI.current.play().catch(() => {})
                                }, 100)
                            }), nC.current && 2 === ev && nC.current.paused && !nC.current.ended && nC.current.play().then(() => E("KeepPlaying", "video 2 playing")).catch(e => {
                                null == e || e.message, setTimeout(() => {
                                    nC.current && 2 === ev && nC.current.paused && nC.current.play().catch(() => {})
                                }, 100)
                            }), nN.current && 3 === ev && nN.current.paused && !nN.current.ended && nN.current.play().then(() => E("KeepPlaying", "video 3 playing")).catch(e => {
                                null == e || e.message, setTimeout(() => {
                                    nN.current && 3 === ev && nN.current.paused && nN.current.play().catch(() => {})
                                }, 100)
                            })
                        };
                        window.addEventListener("resize", e);
                        let t = setInterval(e, 1e3);
                        return () => {
                            window.removeEventListener("resize", e), clearInterval(t)
                        }
                    }, [ey.length, ev]), (0, i.useEffect)(() => {
                        if (0 !== ey.length && 1 === ev && nI.current) {
                            let e = nI.current,
                                t = () => {
                                    if (!nI.current || 1 !== ev) return;
                                    let e = nI.current;
                                    e.muted = !0, e.playsInline = !0, e.currentTime = 0, "localhost" === window.location.hostname || window.location.hostname;
                                    let t = e.src || ey[0] || "";
                                    t && (t.includes("cmssambot.b-cdn.net") || t.includes("bunnycdn.com") || t.startsWith("https://")) && (e.crossOrigin = "anonymous"), e.setAttribute("autoplay", "true"), e.setAttribute("muted", "true"), e.setAttribute("playsinline", "true"), e.setAttribute("webkit-playsinline", "true"), e.readyState < 1 && e.load(), (() => {
                                        if (!nI.current || 1 !== ev) return;
                                        let e = nI.current;
                                        e.currentTime = 0, e.muted = !0, e.playsInline = !0, e.readyState < 1 && e.load();
                                        let t = e.play();
                                        void 0 !== t && t.then(() => {
                                            if (nI.current) {
                                                let e = nI.current,
                                                    t = window.getComputedStyle(e);
                                                t.opacity, t.visibility, t.display, e.offsetWidth, e.offsetHeight
                                            }
                                        }).catch(e => {
                                            (null == e ? void 0 : e.name) !== "AbortError" && (null == e || e.message, setTimeout(() => {
                                                if (nI.current && 1 === ev) {
                                                    let e = nI.current;
                                                    e.readyState < 1 && e.load(), e.currentTime = 0, e.play().catch(() => {
                                                        setTimeout(() => {
                                                            if (nI.current && 1 === ev) {
                                                                let e = nI.current;
                                                                e.readyState < 1 && e.load(), e.currentTime = 0, e.play().catch(() => {})
                                                            }
                                                        }, 200)
                                                    })
                                                }
                                            }, 100))
                                        })
                                    })()
                                };
                            t(), setTimeout(t, 100), setTimeout(t, 300), setTimeout(t, 500), setTimeout(t, 1e3);
                            let n = setInterval(() => {
                                    if (!nI.current || 1 !== ev) {
                                        clearInterval(n);
                                        return
                                    }
                                    let e = nI.current;
                                    e.paused && !e.ended && (e.muted = !0, e.playsInline = !0, e.readyState >= 1 ? e.play().catch(() => {
                                        setTimeout(() => {
                                            nI.current && 1 === ev && nI.current.paused && nI.current.play().catch(() => {})
                                        }, 100)
                                    }) : 0 === e.readyState && e.load())
                                }, 400),
                                r = () => {
                                    t()
                                },
                                i = () => {
                                    t()
                                };
                            return e.addEventListener("canplay", r, {
                                once: !0
                            }), e.addEventListener("canplaythrough", i, {
                                once: !0
                            }), () => {
                                clearInterval(n), e.removeEventListener("canplay", r), e.removeEventListener("canplaythrough", i)
                            }
                        }
                    }, [ev, ey.length]), (0, i.useEffect)(() => {
                        if (0 !== ey.length) {
                            if (2 === ev && nC.current) {
                                let e = nC.current,
                                    t = "undefined" != typeof navigator && /Chrome/.test(navigator.userAgent) && !/Edge|Edg/.test(navigator.userAgent);
                                "undefined" != typeof navigator && /Android/.test(navigator.userAgent) && (e.setAttribute("playsinline", "true"), e.setAttribute("webkit-playsinline", "true"), e.setAttribute("x5-video-player-type", "h5"), e.setAttribute("x5-video-player-fullscreen", "true"), e.setAttribute("x5-video-orientation", "portraint")), t && (e.setAttribute("autoplay", "true"), e.setAttribute("muted", "true"), e.setAttribute("playsinline", "true"), e.setAttribute("webkit-playsinline", "true")), e.muted = !0, e.playsInline = !0, e.style.backgroundColor = "transparent", e.readyState < 1 && e.load(), e.paused || e.ended ? e.play().catch(() => {
                                    setTimeout(() => {
                                        nC.current && 2 === nh.current && nC.current.paused && nC.current.play().catch(() => {})
                                    }, 100)
                                }) : e.currentTime > .5 && (e.currentTime = 0)
                            }
                            if (3 === ev && nN.current) {
                                let e = nN.current;
                                e.muted = !0, e.playsInline = !0, e.style.backgroundColor = "transparent", e.paused && e.play().catch(() => {})
                            }
                        }
                    }, [eF, ey.length, ev, ep, er, nF, nB, nW, nV, nZ]), (0, i.useEffect)(() => {
                        if (!tY || !eF) return;
                        let e = () => {
                                if (tn.current = !0, tY) {
                                    tJ(!1), tt.current = Date.now(); {
                                        let e = `event_viewed_${J}_${X}`;
                                        localStorage.setItem(e, "true")
                                    }
                                }
                            },
                            t = () => {
                                if (tn.current = !0, tY) {
                                    tJ(!1), tt.current = Date.now(); {
                                        let e = `event_viewed_${J}_${X}`;
                                        localStorage.setItem(e, "true")
                                    }
                                }
                            };
                        window.addEventListener("scroll", e, {
                            passive: !0
                        }), "undefined" != typeof document && (document.addEventListener("scroll", e, {
                            passive: !0
                        }), document.documentElement.addEventListener("scroll", e, {
                            passive: !0
                        }), document.body.addEventListener("scroll", e, {
                            passive: !0
                        }));
                        let n = nA.current;
                        return n && (n.addEventListener("scroll", e, {
                            passive: !0
                        }), n.addEventListener("wheel", t, {
                            passive: !0
                        })), window.addEventListener("wheel", t, {
                            passive: !0
                        }), () => {
                            window.removeEventListener("scroll", e), "undefined" != typeof document && (document.removeEventListener("scroll", e), document.documentElement.removeEventListener("scroll", e), document.body.removeEventListener("scroll", e)), n && (n.removeEventListener("scroll", e), n.removeEventListener("wheel", t)), window.removeEventListener("wheel", t)
                        }
                    }, [tY, eF, J, X]), (0, i.useEffect)(() => {
                        eF && tl.current && ti && (tl.current.muted = !1, td(!1), tl.current.play().catch(e => {}))
                    }, [eF, ti]), (0, i.useEffect)(() => {
                        if (!nA.current || !eF) return;
                        let e = Array.from(nA.current.querySelectorAll(`.${v().segmentReveal}`));
                        if (0 === e.length) return;
                        let t = new IntersectionObserver(e => {
                            e.forEach(e => {
                                let t = e.target;
                                e.isIntersecting ? (t.classList.remove(v().segmentVisible), t.offsetWidth, t.classList.add(v().segmentVisible)) : t.classList.remove(v().segmentVisible)
                            })
                        }, {
                            root: null,
                            rootMargin: "0px 0px -60px 0px",
                            threshold: .05
                        });
                        return e.forEach(e => t.observe(e)), () => t.disconnect()
                    }, [eF, v().segmentReveal, v().segmentVisible]), (0, i.useEffect)(() => {
                        if (!nA.current || !eF) return;
                        let e = () => {
                                let e = Array.from(nA.current.querySelectorAll(`.${v().galleryItem}`));
                                if (0 === e.length) return null;
                                e.forEach(e => {
                                    let t = e.parentElement,
                                        n = (t ? Array.from(t.querySelectorAll(`.${v().galleryItem}`)) : []).indexOf(e);
                                    e.style.setProperty("--gallery-reveal-delay", `${60*n}ms`)
                                });
                                let t = new IntersectionObserver(e => {
                                    e.forEach(e => {
                                        let t = e.target;
                                        e.isIntersecting ? (t.classList.remove(v().galleryItemVisible), t.offsetWidth, t.classList.add(v().galleryItemVisible)) : t.classList.remove(v().galleryItemVisible)
                                    })
                                }, {
                                    root: null,
                                    rootMargin: "0px 0px -40px 0px",
                                    threshold: .05
                                });
                                return e.forEach(e => t.observe(e)), t
                            },
                            t = setTimeout(() => {
                                let t = e();
                                return () => null == t ? void 0 : t.disconnect()
                            }, 300);
                        return () => clearTimeout(t)
                    }, [eF, v().galleryItem, v().galleryItemVisible]), (0, i.useEffect)(() => {}, [ey.length, ep, eF]), (0, i.useEffect)(() => {
                        2 !== ev || eF || nG()
                    }, [ev, eF, nG]), (0, i.useEffect)(() => {
                        if (!eF || 3 !== ev) {
                            tJ(!1), e9.current && (clearTimeout(e9.current), e9.current = null), tX.current && (clearTimeout(tX.current), tX.current = null);
                            return
                        }
                        return tt.current = Date.now(), tn.current = !1, e9.current && clearTimeout(e9.current), tX.current && clearTimeout(tX.current), e9.current = setTimeout(() => {
                            var e;
                            let t = Date.now() - tt.current,
                                n = tn.current,
                                r = null === (e = nA.current) || void 0 === e ? void 0 : e.parentElement,
                                i = (null == r ? void 0 : r.scrollTop) ? ? window.scrollY ? ? document.documentElement.scrollTop ? ? 0;
                            t > 2e3 && eF && !n && !(i > 30) && (tJ(!0), tX.current = setTimeout(() => {
                                50 > (window.scrollY || document.documentElement.scrollTop || 0) && (window.scrollTo({
                                    top: 30,
                                    behavior: "smooth"
                                }), setTimeout(() => {
                                    100 > (window.scrollY || document.documentElement.scrollTop || 0) && window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    })
                                }, 800))
                            }, 1e3))
                        }, 1e4), () => {
                            e9.current && (clearTimeout(e9.current), e9.current = null), tX.current && (clearTimeout(tX.current), tX.current = null)
                        }
                    }, [eF, ev]), (null == ep ? void 0 : null === (Z = ep.event) || void 0 === Z ? void 0 : null === (V = Z.segments) || void 0 === V ? void 0 : V.some(e => !!e.media && e.media.length > 0 || !!e.galleries && e.galleries.length > 0)) || ey.length, eg) return null;
                if (eO) return (0, r.jsx)("div", {
                    className: v().eventContainer,
                    style: nn ? {
                        maxWidth: "428px",
                        width: "428px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                        background: "#fff"
                    } : {},
                    children: (0, r.jsxs)("div", {
                        style: {
                            padding: "20px",
                            textAlign: "center"
                        },
                        children: [(0, r.jsx)("h2", {
                            style: {
                                color: "#d32f2f",
                                marginBottom: "10px"
                            },
                            children: "Error Loading Event Data"
                        }), (0, r.jsx)("p", {
                            style: {
                                color: "#666",
                                marginBottom: "20px"
                            },
                            children: eO
                        }), (0, r.jsx)("button", {
                            onClick: () => n5(),
                            style: {
                                padding: "10px 20px",
                                backgroundColor: "#1976d2",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer"
                            },
                            children: "Retry"
                        }), (0, r.jsx)("div", {
                            style: {
                                marginTop: "20px",
                                fontSize: "12px",
                                color: "#999"
                            },
                            children: (0, r.jsx)("p", {
                                children: "Check browser console for more details."
                            })
                        })]
                    })
                });
                if (0 === ey.length && eg) return null;
                let n6 = ey.length > 0 ? (0, r.jsxs)("div", {
                        className: `${v().videoContainer} ${eS?v().defaultThemeVideoContainer:""} ${ej?v().modernThemeVideoContainer:""} ${ek&&eF?v().videoContainerDarkModeFade:""}`,
                        style: eI && eF ? {
                            position: "relative",
                            zIndex: 1,
                            left: 0,
                            transform: "none",
                            ...ek ? {
                                WebkitMaskImage: "linear-gradient(to bottom, black 88%, rgba(0, 0, 0, 0.7) 94%, transparent 100%)",
                                maskImage: "linear-gradient(to bottom, black 88%, rgba(0, 0, 0, 0.7) 94%, transparent 100%)"
                            } : {}
                        } : void 0,
                        children: [(0, r.jsx)("img", {
                            src: eZ || x,
                            alt: "",
                            "aria-hidden": "true",
                            fetchPriority: "high",
                            decoding: "async",
                            className: v().lcpPosterImg,
                            style: {
                                display: ev >= 2 ? "none" : "block"
                            }
                        }), ey[0] && (0, r.jsx)("video", {
                            ref: n$,
                            className: v().thumbnailCaptureVideo,
                            src: ey[0],
                            muted: !0,
                            playsInline: !0,
                            preload: "metadata",
                            crossOrigin: (null === (q = ey[0]) || void 0 === q ? void 0 : q.includes("cmssambot.b-cdn.net")) || (null === (U = ey[0]) || void 0 === U ? void 0 : U.includes("bunnycdn.com")) ? "anonymous" : void 0,
                            onLoadedData: () => {
                                let e = n$.current;
                                e && !eZ && (e.currentTime = 0)
                            },
                            onSeeked: () => {
                                let e = n$.current;
                                if (!e || eZ) return;
                                let t = e.videoWidth,
                                    n = e.videoHeight;
                                if (t && n) try {
                                    let r = document.createElement("canvas"),
                                        i = Math.min(1, 400 / t);
                                    r.width = Math.round(t * i), r.height = Math.round(n * i);
                                    let o = r.getContext("2d");
                                    if (!o) return;
                                    o.drawImage(e, 0, 0, r.width, r.height);
                                    let l = r.toDataURL("image/jpeg", .85);
                                    eq(l)
                                } catch {}
                            }
                        }), ey.map((e, t) => {
                            if (ej && 3 === t || !e) return null;
                            let n = "modern" === eT,
                                i = ev === t + 1,
                                o = n && 3 === t && ev >= 2;
                            o && (i = !0);
                            let l = !1,
                                a = 0;
                            if (1 === ev) 0 === t && (l = !0, a = 2);
                            else if (2 === ev) 1 === t ? (l = !0, a = 2) : 0 === t && (l = !0, a = 1);
                            else if (3 === t) {
                                if (ek) {
                                    let e = nM.current && nM.current.currentTime > .1;
                                    l = 4 === ev || 3 === ev && !!e, a = 4 === ev ? 2 : 1
                                } else l = o, a = 0
                            } else if (ev >= 3) {
                                if (2 === t) {
                                    let e = nN.current && nN.current.currentTime > .1;
                                    l = 3 === ev || ek && 4 === ev && !!e, a = ek && 3 !== ev ? 1 : 2
                                } else n && 3 === t ? (l = !0, a = 2) : 1 === t && (ej ? (l = !1, a = 0) : (l = !0, a = ek ? 0 : 1))
                            }
                            let d = !l,
                                s = e && (e.includes("cmssambot.b-cdn.net") || e.includes("bunnycdn.com") || e.startsWith("https://")),
                                u = 0 === t || 1 === t || 2 === t ? "auto" : "none";
                            return (0, r.jsx)("video", {
                                ref: 0 === t ? nI : 1 === t ? nC : 2 === t ? nN : nM,
                                className: `${v().backgroundVideo} ${i?v().activeVideo:""} ${o?v().video4Background:""} ${d?v().video1Hidden:""} ${eS&&(0===t||1===t)||ej&&(1===t||2===t)?v().noFadeVideo:""}`,
                                "data-video-index": t,
                                ...0 === t ? {
                                    poster: eZ || x
                                } : {},
                                preload: u,
                                autoPlay: 0 === t || ej && 3 === t,
                                playsInline: !0,
                                crossOrigin: s ? "anonymous" : void 0,
                                ...nR || "undefined" != typeof navigator && /Android/.test(navigator.userAgent) ? {
                                    "webkit-playsinline": "true",
                                    "x5-video-player-type": "h5",
                                    "x5-video-player-fullscreen": "true",
                                    "x5-video-orientation": "portraint"
                                } : {},
                                ...0 === t ? {
                                    autoplay: "true",
                                    playsinline: "true",
                                    "webkit-playsinline": "true"
                                } : {},
                                muted: !0,
                                loop: 0 === t || 2 === t || 3 === t,
                                controls: !1,
                                controlsList: "nodownload",
                                ...0 === t ? {
                                    onClick: () => {
                                        nI.current && 1 === ev && nI.current.paused && !nI.current.ended && (nI.current.muted = !0, nI.current.playsInline = !0, nI.current.play().catch(() => {}), eH(!0))
                                    },
                                    onTouchEnd: e => {
                                        nI.current && 1 === ev && nI.current.paused && !nI.current.ended && (nI.current.muted = !0, nI.current.playsInline = !0, nI.current.play().catch(() => {}), eH(!0))
                                    }
                                } : {},
                                style: {
                                    backgroundColor: "transparent",
                                    opacity: ek && (2 === t || 3 === t) && ev >= 3 ? 2 === t && 3 === ev || 3 === t && 4 === ev ? 1 : 0 : l ? 1 : 0,
                                    visibility: l ? "visible" : "hidden",
                                    zIndex: a,
                                    display: "block",
                                    transition: eS && (0 === t || 1 === t) || ej && (1 === t || 2 === t) ? "none" : ek && (2 === t || 3 === t) && ev >= 3 ? "opacity 3s ease" : void 0,
                                    ...ek && eF && (2 === t || 3 === t) ? {
                                        WebkitMaskImage: "linear-gradient(to bottom, black 88%, rgba(0, 0, 0, 0.7) 94%, transparent 100%)",
                                        maskImage: "linear-gradient(to bottom, black 88%, rgba(0, 0, 0, 0.7) 94%, transparent 100%)"
                                    } : {}
                                },
                                onCanPlay: () => {
                                    if (0 === t && nI.current && 1 === ev && nI.current.paused) {
                                        let e = nI.current;
                                        e.muted = !0, e.playsInline = !0, e.play().catch(() => {}), [100, 300, 600, 1e3].forEach(e => {
                                            setTimeout(() => {
                                                nI.current && 1 === ev && nI.current.paused && !nI.current.ended && (nI.current.muted = !0, nI.current.playsInline = !0, nI.current.play().catch(() => {}))
                                            }, e)
                                        })
                                    }
                                    let e = 3 === ev || !ek && eF;
                                    if (2 === t && nN.current && e && nN.current.paused) {
                                        let e = nN.current;
                                        e.muted = !0, e.playsInline = !0, e.play().catch(() => {}), [100, 300, 600, 1e3].forEach(e => {
                                            setTimeout(() => {
                                                let e = 3 === nh.current || eB.current;
                                                nN.current && e && nN.current.paused && !nN.current.ended && (nN.current.muted = !0, nN.current.playsInline = !0, nN.current.play().catch(() => {}))
                                            }, e)
                                        })
                                    }
                                },
                                onCanPlayThrough: () => {
                                    let e = 0 === t ? nI : 1 === t ? nC : nN;
                                    e.current && e.current.readyState >= 3 && (e.current.style.backgroundColor = "transparent", e.current.offsetHeight, 0 === t && e.current.paused && 1 === ev && e.current.play().catch(() => {}))
                                },
                                onLoadedMetadata: () => {
                                    let e = 0 === t ? nI : 1 === t ? nC : nN;
                                    if (e.current && 0 === t) {
                                        e.current.setAttribute("autoplay", "true"), e.current.setAttribute("muted", "true"), e.current.setAttribute("playsinline", "true"), e.current.setAttribute("webkit-playsinline", "true"), e.current.muted = !0, e.current.playsInline = !0, e.current.currentTime = 0, e.current.readyState < 1 && e.current.load(), ej && nM.current && (nM.current.setAttribute("autoplay", "true"), nM.current.setAttribute("muted", "true"), nM.current.setAttribute("playsinline", "true"), nM.current.muted = !0, nM.current.playsInline = !0, nM.current.play().catch(() => {}));
                                        let t = () => {
                                            e.current && 1 === ev && (e.current.readyState < 1 && e.current.load(), (e.current.paused || e.current.ended) && e.current.play().catch(() => {
                                                setTimeout(() => {
                                                    e.current && 1 === ev && (e.current.readyState < 1 && e.current.load(), e.current.currentTime = 0, e.current.play().catch(() => {
                                                        setTimeout(() => {
                                                            e.current && 1 === ev && (e.current.readyState < 1 && e.current.load(), e.current.currentTime = 0, e.current.play().catch(() => {}))
                                                        }, 200)
                                                    }))
                                                }, 100)
                                            }))
                                        };
                                        t(), setTimeout(t, 100), setTimeout(t, 300)
                                    }
                                },
                                onLoadedData: () => {
                                    let n = 0 === t ? nI : 1 === t ? nC : nN;
                                    if (n.current) {
                                        "localhost" === window.location.hostname || window.location.hostname;
                                        let r = n.current.src || e || "";
                                        if (r && (r.includes("cmssambot.b-cdn.net") || r.includes("bunnycdn.com") || r.startsWith("https://")) && (n.current.crossOrigin = "anonymous"), 0 === t && (n.current.currentTime = 0), n.current.style.backgroundColor = "transparent", 0 === t) {
                                            np(!0), n.current.setAttribute("autoplay", "true"), n.current.setAttribute("muted", "true"), n.current.setAttribute("playsinline", "true"), n.current.setAttribute("webkit-playsinline", "true"), n.current.muted = !0, n.current.playsInline = !0, n.current.currentTime = 0, n.current.readyState < 1 && n.current.load();
                                            let e = () => {
                                                n.current && 1 === ev && (n.current.readyState < 1 && n.current.load(), (n.current.paused || n.current.ended) && n.current.play().catch(() => {
                                                    setTimeout(() => {
                                                        n.current && 1 === ev && (n.current.readyState < 1 && n.current.load(), n.current.currentTime = 0, n.current.play().catch(() => {
                                                            setTimeout(() => {
                                                                n.current && 1 === ev && (n.current.readyState < 1 && n.current.load(), n.current.currentTime = 0, n.current.play().catch(() => {}))
                                                            }, 200)
                                                        }))
                                                    }, 100)
                                                }))
                                            };
                                            e(), setTimeout(e, 100), setTimeout(e, 300)
                                        } else 1 === t ? (n.current.muted = !0, n.current.currentTime = 0, n.current.paused || (n.current.pause(), n.current.currentTime = 0)) : 2 === t && (n.current.muted = !0, n.current.currentTime = 0, setTimeout(() => {
                                            n.current && (n.current.currentTime = .01, setTimeout(() => {
                                                n.current && (n.current.currentTime = 0, n.current.style.backgroundColor = "transparent")
                                            }, 50))
                                        }, 50))
                                    }
                                },
                                onSeeked: () => {
                                    let e = 0 === t ? nI : 1 === t ? nC : nN;
                                    e.current && (e.current.style.backgroundColor = "transparent", (0 === t || 2 === t) && (e.current.style.opacity = e.current.style.opacity || "1"))
                                },
                                onPlaying: () => {
                                    let e = 0 === t ? nI : 1 === t ? nC : nN;
                                    if (e.current && (e.current.style.backgroundColor = "transparent", "undefined" != typeof navigator && /Android/.test(navigator.userAgent) && (e.current.style.opacity = "1", e.current.style.zIndex = 1 === t ? "2" : 2 === t ? "2" : "1", e.current.style.visibility = "visible", e.current.style.display = "block")), 0 === t && eH(!0), 0 === t) {
                                        let t = setInterval(() => {
                                            e.current && 1 === ev && e.current.paused && !e.current.ended ? e.current.play().catch(() => {}) : 1 !== ev && clearInterval(t)
                                        }, 500);
                                        setTimeout(() => clearInterval(t), 1e4)
                                    }
                                    if (1 === t && "undefined" != typeof navigator && /Android/.test(navigator.userAgent)) {
                                        let e = nC.current;
                                        e && (e.style.opacity = "1", e.style.zIndex = "2", e.style.visibility = "visible", e.style.display = "block")
                                    }
                                },
                                onPause: () => {
                                    if (0 === t && 1 === ev) {
                                        let e = nI.current;
                                        e && !e.ended && setTimeout(() => {
                                            nI.current && 1 === ev && nI.current.paused && !nI.current.ended && nI.current.play().catch(() => {
                                                setTimeout(() => {
                                                    nI.current && 1 === ev && nI.current.paused && nI.current.play().catch(() => {})
                                                }, 100)
                                            })
                                        }, 50)
                                    }
                                    if (1 === t && 2 === ev) {
                                        let e = nC.current;
                                        if (e && !e.ended) {
                                            let t = e.duration,
                                                n = e.seekable && e.seekable.length > 0 ? e.seekable.end(e.seekable.length - 1) : 0,
                                                r = Number.isFinite(t) && t > 0 ? t : Number.isFinite(n) && n > 0 ? n : 0,
                                                i = e.currentTime,
                                                o = Number.isFinite(r) && r > 0,
                                                l = nB ? 1.2 : .2;
                                            if (nF && o && i >= r - l) {
                                                nV("Telegram near-end pause fallback");
                                                return
                                            }
                                            setTimeout(() => {
                                                nC.current && 2 === ev && nC.current.paused && !nC.current.ended && nC.current.play().catch(() => {
                                                    setTimeout(() => {
                                                        nC.current && 2 === ev && nC.current.paused && !nC.current.ended && nC.current.play().catch(() => {})
                                                    }, 100)
                                                })
                                            }, 50)
                                        }
                                    }
                                },
                                onTimeUpdate: () => {
                                    if (1 !== t || 2 !== ev || ey.length < 3) return;
                                    let e = nC.current;
                                    if (!e || eB.current) return;
                                    let n = e.duration,
                                        r = e.currentTime,
                                        i = Number.isFinite(n) && n > 0;
                                    (nW || nF) && i && r >= n - .05 && nV(nF ? "Telegram near-end fallback" : "iOS Safari near-end fallback")
                                },
                                onEnded: () => {
                                    if (1 === t && 2 === ev && ey.length >= 3) {
                                        let e = nC.current;
                                        if (!e || !e.ended && e.currentTime < e.duration - .1) return;
                                        e4.current && (clearTimeout(e4.current), e4.current = null), e2.current && (clearInterval(e2.current), e2.current = null);
                                        let t = "undefined" != typeof navigator && /Android/.test(navigator.userAgent),
                                            n = nN.current;
                                        nV("Video 2 ended naturally"), n && (t && (n.setAttribute("playsinline", "true"), n.setAttribute("webkit-playsinline", "true"), n.setAttribute("x5-video-player-type", "h5"), n.setAttribute("x5-video-player-fullscreen", "true"), n.setAttribute("x5-video-orientation", "portraint")), n.muted = !0, n.playsInline = !0, n.style.backgroundColor = "transparent", n.readyState < 1 && n.load(), nG())
                                    }
                                },
                                children: (0, r.jsx)("source", {
                                    src: e,
                                    type: "video/mp4"
                                })
                            }, t)
                        })]
                    }) : null,
                    n4 = (null == ef ? void 0 : ef.icon_color) || (null == ef ? void 0 : ef.text_color) || "#6b6b5a",
                    n2 = {
                        "--icon-color": n4,
                        "--mute-button-bg": `${n4}20`,
                        "--mute-button-bg-hover": n4
                    },
                    n8 = {
                        "--segment-text-color": n4,
                        "--icon-color": n4
                    },
                    n3 = (0, i.useCallback)(async e => {
                        if (e && e !== eu) {
                            ec(e), eP(!1), await n5(e, !0); {
                                let {
                                    guestName: t
                                } = $(X), n = `/${J}/${t}${e}`;
                                window.history.pushState({ ...window.history.state,
                                    as: n,
                                    url: n
                                }, "", n)
                            }
                        }
                    }, [eu, n5, X, J]);
                (0, i.useEffect)(() => {
                    if (!eE) return;
                    let e = e => {
                        let t = e.target,
                            n = e.target;
                        null != n && n.closest(`.${v().languageTriggerIcon}`) || !eC.current || eC.current.contains(t) || eP(!1)
                    };
                    return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
                        document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
                    }
                }, [eE]), (0, i.useEffect)(() => {
                    (nS || ew.length <= 1) && eP(!1)
                }, [nS, ew.length]), (0, i.useEffect)(() => {
                    var e;
                    if (0 === ew.length) return;
                    let t = M(eu),
                        n = M(ed),
                        r = ew.find(e => M(String((null == e ? void 0 : e.code) || "").trim()) === t);
                    if ((null == r ? void 0 : r.code) && eu !== r.code) {
                        ec(String(r.code));
                        return
                    }
                    if (r) return;
                    let i = ew.find(e => M(String((null == e ? void 0 : e.code) || "").trim()) === n);
                    if (null == i ? void 0 : i.code) {
                        ec(String(i.code));
                        return
                    }
                    let o = String((null === (e = ew[0]) || void 0 === e ? void 0 : e.code) || "").trim();
                    o && ec(o)
                }, [ew, eu, ed]);
                let n7 = ew.length > 1,
                    n9 = (() => {
                        let e = M(eu);
                        return "km" === e || "kh" === e
                    })(),
                    re = A(eu),
                    rt = n9 ? "ជ្រើសរើសភាសា" : "Choose a language",
                    rn = n7 ? (0, r.jsx)("button", {
                        type: "button",
                        className: `${v().floatingAnchorIcon} ${v().languageTriggerIcon}`,
                        onClick: () => eP(e => !e),
                        "aria-label": "Open language menu",
                        "aria-expanded": eE,
                        "aria-haspopup": "menu",
                        title: "Change language",
                        children: (0, r.jsx)("span", {
                            className: v().languageTriggerText,
                            "aria-hidden": "true",
                            children: re
                        })
                    }) : null,
                    rr = n7 && eE && !nS ? (0, r.jsxs)("div", {
                        className: v().languagePopupMenu,
                        ref: eC,
                        role: "menu",
                        "aria-label": rt,
                        children: [(0, r.jsx)("div", {
                            className: v().languagePopupTitle,
                            children: rt
                        }), ew.map((e, t) => {
                            let n = String((null == e ? void 0 : e.code) || "").trim();
                            return n ? (0, r.jsxs)("button", {
                                type: "button",
                                className: `${v().languagePopupOption} ${eu===n?v().languagePopupOptionActive:""}`,
                                onClick: () => {
                                    n3(n)
                                },
                                role: "menuitem",
                                "aria-label": `Switch language to ${n.toUpperCase()}`,
                                children: [(0, r.jsx)("span", {
                                    className: v().languagePopupFlag,
                                    "aria-hidden": "true",
                                    children: N[M(n)] || "\uD83C\uDF10"
                                }), (0, r.jsx)("span", {
                                    className: v().languagePopupLabel,
                                    "aria-hidden": "true",
                                    children: A(n)
                                })]
                            }, n || `lang-option-${t}`) : null
                        })]
                    }) : null,
                    ri = null == ef ? void 0 : ef.mask_fade,
                    ro = ri ? `linear-gradient(${ri.direction||"to bottom"}, transparent ${ri.start_transparent_px??0}px, black ${ri.top_stop_px??48}px, black calc(100% - ${ri.bottom_inset_px??48}px), transparent calc(100% - ${ri.end_transparent_px??0}px))` : void 0,
                    rl = ro && eS && eF ? {
                        WebkitMaskImage: ro,
                        maskImage: ro
                    } : {},
                    ra = !eF && nn ? {
                        maxWidth: "428px",
                        width: "428px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                        background: "transparent"
                    } : {},
                    rd = ej && ey[3] ? (0, r.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "100%",
                            maxWidth: "428px",
                            height: "100vh",
                            zIndex: 0,
                            pointerEvents: "none",
                            opacity: eF ? 1 : 0,
                            transition: "none"
                        },
                        children: (0, r.jsx)("video", {
                            ref: nM,
                            src: ey[3],
                            className: v().backgroundVideo,
                            style: {
                                opacity: 1,
                                visibility: "visible",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            },
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            autoPlay: !0,
                            preload: "auto",
                            crossOrigin: ey[3].includes("bunnycdn.com") || ey[3].includes("cmssambot.b-cdn.net") ? "anonymous" : void 0,
                            ...nR || "undefined" != typeof navigator && /Android/.test(navigator.userAgent) ? {
                                "webkit-playsinline": "true",
                                "x5-video-player-type": "h5",
                                "x5-video-player-fullscreen": "true",
                                "x5-video-orientation": "portraint"
                            } : {}
                        })
                    }) : null;
                return (0, r.jsxs)(r.Fragment, {
                    children: [rd, !eF && !nS && rn && (0, r.jsx)("div", {
                        className: v().floatingAnchorIcons,
                        style: n8,
                        children: rn
                    }), eF && !nS && (0, r.jsxs)("div", {
                        className: v().topControls,
                        style: n2,
                        children: [ek && (0, r.jsx)("div", {
                            onClick: () => {
                                let e = !eW;
                                ez(e), eV.current = e;
                                let t = e ? 4 : 3;
                                em(t);
                                let n = nN.current,
                                    r = nM.current;
                                4 === t && r ? (r.loop = !0, r.readyState < 1 && r.load(), r.play().catch(() => {})) : 3 === t && n && (n.loop = !0, n.readyState < 1 && n.load(), n.play().catch(() => {}))
                            },
                            style: {
                                width: "60px",
                                height: "30px",
                                backgroundColor: eW ? "#2D3748" : "#ECC94B",
                                borderRadius: "15px",
                                position: "relative",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease",
                                display: "flex",
                                alignItems: "center",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                                marginRight: "12px"
                            },
                            "aria-label": eW ? "Switch to Day Mode" : "Switch to Night Mode",
                            title: eW ? "Switch to Day Mode" : "Switch to Night Mode",
                            children: (0, r.jsx)("div", {
                                style: {
                                    width: "24px",
                                    height: "24px",
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "50%",
                                    position: "absolute",
                                    top: "3px",
                                    left: eW ? "33px" : "3px",
                                    transition: "left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                                },
                                children: eW ? (0, r.jsx)("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "#2D3748",
                                    children: (0, r.jsx)("path", {
                                        d: "M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
                                    })
                                }) : (0, r.jsx)("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "#D69E2E",
                                    children: (0, r.jsx)("path", {
                                        d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"
                                    })
                                })
                            })
                        }), ti && (0, r.jsx)("button", {
                            onClick: nX,
                            className: v().muteButton,
                            "aria-label": ta ? "Unmute sound" : "Mute sound",
                            title: ta ? "Unmute sound" : "Mute sound",
                            style: {
                                "--icon-color": (null == ef ? void 0 : ef.icon_color) || (null == ef ? void 0 : ef.text_color) || "#6b6b5a"
                            },
                            hidden: nS,
                            children: ta ? (0, r.jsxs)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: [(0, r.jsx)("path", {
                                    d: "M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12Z",
                                    fill: "currentColor"
                                }), (0, r.jsx)("path", {
                                    d: "M19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12Z",
                                    fill: "currentColor"
                                }), (0, r.jsx)("path", {
                                    d: "M4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3Z",
                                    fill: "currentColor"
                                })]
                            }) : (0, r.jsx)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: (0, r.jsx)("path", {
                                    d: "M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z",
                                    fill: "currentColor"
                                })
                            })
                        })]
                    }), eS && n6, (0, r.jsxs)("div", {
                        className: v().eventContainer,
                        style: { ...ra,
                            ...rl
                        },
                        children: [!eS && n6, rr, ti && (0, r.jsx)("audio", {
                            ref: tl,
                            src: ti,
                            loop: !0,
                            preload: "metadata",
                            style: {
                                display: "none"
                            },
                            muted: ta,
                            onLoadedData: () => {
                                tl.current && (tl.current.muted = ta, eG && !ta && tl.current.play().catch(e => {
                                    var t;
                                    (null == e ? void 0 : e.name) !== "AbortError" && (null == e || null === (t = e.message) || void 0 === t || t.includes("interrupted"))
                                }))
                            }
                        }), ey.length > 0 && (1 === ev && !eG || eY) && (0, r.jsx)("div", {
                            className: `${v().coverPage} ${eY?v().coverPageFadeOut:""} ${eS?v().defaultThemeCoverPage:""}`,
                            onClick: (null == ef ? void 0 : ef.is_start_button_enabled) === !1 || (null == ef ? void 0 : ef.is_start_button_enabled) === "false" ? nq : void 0,
                            style: {
                                cursor: (null == ef ? void 0 : ef.is_start_button_enabled) === !1 || (null == ef ? void 0 : ef.is_start_button_enabled) === "false" ? "pointer" : "default"
                            },
                            children: (0, r.jsxs)("div", {
                                className: `${v().coverContent} ${ei?v().panhvornRithisaccMobileFix:""}`,
                                children: [(0, r.jsxs)("div", {
                                    className: v().invitationNameContainer,
                                    style: eA || void 0,
                                    children: [(0, r.jsx)("h1", {
                                        ref: e6,
                                        className: v().invitationName,
                                        style: {
                                            color: (null == ef ? void 0 : ef.text_color) || "#6b6b5a",
                                            fontSize: e1,
                                            lineHeight: 1.6
                                        },
                                        children: (null == ep ? void 0 : null === (H = ep.invitation) || void 0 === H ? void 0 : H.name) ? u(ep.invitation.name) : "Event Invitation"
                                    }), (0, r.jsx)("img", {
                                        src: "/line-name.png",
                                        alt: "Decorative line",
                                        className: v().decorativeLineImage,
                                        width: "300",
                                        height: "20",
                                        loading: "eager"
                                    }), eD && !e$ && (null == ef ? void 0 : ef.is_start_button_enabled) !== !1 && (null == ef ? void 0 : ef.is_start_button_enabled) !== "false" && (0, r.jsx)("button", {
                                        onClick: nq,
                                        className: v().openInvitationButton,
                                        "aria-label": "Open invitation",
                                        style: {
                                            position: "relative",
                                            top: "1rem",
                                            left: "unset",
                                            bottom: "unset",
                                            transform: "none"
                                        },
                                        children: (null == ef ? void 0 : ef.start_button) ? (0, r.jsx)("img", {
                                            src: er(ef.start_button),
                                            alt: "Click to Open The Invitation",
                                            className: v().buttonImage,
                                            width: 315,
                                            height: 75,
                                            loading: "eager"
                                        }) : (0, r.jsx)(o.default, {
                                            src: "/open-ticket-button.png",
                                            alt: "Click to Open The Invitation",
                                            className: v().buttonImage,
                                            width: 315,
                                            height: 75,
                                            priority: !0,
                                            fetchPriority: "high",
                                            sizes: "315px",
                                            quality: 90
                                        })
                                    })]
                                }), (!eD || e$) && (null == ef ? void 0 : ef.is_start_button_enabled) !== !1 && (null == ef ? void 0 : ef.is_start_button_enabled) !== "false" && (0, r.jsx)("button", {
                                    onClick: nq,
                                    className: v().openInvitationButton,
                                    "aria-label": "Open invitation",
                                    style: e$ || void 0,
                                    children: (null == ef ? void 0 : ef.start_button) ? (0, r.jsx)("img", {
                                        src: er(ef.start_button),
                                        alt: "Click to Open The Invitation",
                                        className: v().buttonImage,
                                        width: 315,
                                        height: 75,
                                        loading: "eager"
                                    }) : (0, r.jsx)(o.default, {
                                        src: "/open-ticket-button.png",
                                        alt: "Click to Open The Invitation",
                                        className: v().buttonImage,
                                        width: 315,
                                        height: 75,
                                        priority: !0,
                                        fetchPriority: "high",
                                        sizes: "315px",
                                        quality: 90
                                    })
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: `${v().contentWrapper} ${v().mobileView} ${eF?"":v().contentWrapperHidden}`,
                            ref: nA,
                            "aria-hidden": !eF,
                            style: {
                                "--segment-text-color": (null == ef ? void 0 : ef.text_color) || "#6b6b5a",
                                pointerEvents: eF ? "auto" : "none",
                                position: "relative",
                                zIndex: 10,
                                ...nR && eF && {
                                    opacity: 1,
                                    visibility: "visible",
                                    display: "block",
                                    backgroundColor: "transparent",
                                    minHeight: "calc(var(--telegram-vh, 100vh))"
                                }
                            },
                            children: (() => {
                                try {
                                    var e, t, n, r;
                                    let i = (null == ep ? void 0 : null === (e = ep.event) || void 0 === e ? void 0 : e.segments) || (null == ep ? void 0 : ep.segments) || (null == ep ? void 0 : null === (n = ep.data) || void 0 === n ? void 0 : null === (t = n.event) || void 0 === t ? void 0 : t.segments) || (null == ep ? void 0 : null === (r = ep.data) || void 0 === r ? void 0 : r.segments) || [],
                                        o = i.find(e => {
                                            var t;
                                            return (null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) === "other" || "other" === e.type
                                        }),
                                        l = i.filter(e => {
                                            var t;
                                            return (null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) === "other" || "other" === e.type || 1 === e.is_visible || !0 === e.is_visible
                                        });
                                    o && !l.find(e => e.id === o.id) && l.push(o);
                                    let a = l.find(e => {
                                        var t;
                                        return (null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) === "other" || "other" === e.type
                                    });
                                    return o && !a && l.push(o), l
                                } catch (e) {
                                    return []
                                }
                            })().filter(e => {
                                var t, n, r, i, o, l, a;
                                let d = ((null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) || e.type || "").toString().toLowerCase().trim();
                                if ((null === (n = e.theme_segment) || void 0 === n ? void 0 : n.type) === "other" || "other" === e.type || ["information", "countdown", "agenda", "rsvp", "map", "youtube", "youtube_embed", "photo_gallery", "bank_transfer", "thank_you_message", "greeting", "footer", "other", "video_segment", "superadmin_media"].map(e => e.toLowerCase().trim()).includes(d) || (null === (r = e.theme_segment) || void 0 === r ? void 0 : r.type) === "other" || "other" === e.type) return !0;
                                let s = eu || (null == ep ? void 0 : null === (i = ep.language) || void 0 === i ? void 0 : i.code) || Y,
                                    u = ew.find(e => e.code === s),
                                    c = (null === (o = e.translations) || void 0 === o ? void 0 : o.find(e => u && e.language_id === u.id)) || (null === (l = e.translations) || void 0 === l ? void 0 : l[0]),
                                    v = (null === (a = e.translations) || void 0 === a ? void 0 : a.map(e => e.title || "").join(" ")) || "",
                                    m = (((null == c ? void 0 : c.title) || "") + " " + v).toLowerCase();
                                return ["information", "countdown", "agenda", "rsvp", "venue", "map", "photo", "gallery", "bank", "transfer", "thank", "greeting", "footer", "save", "date", "other"].some(e => m.includes(e))
                            }).filter((e, t, n) => {
                                var r;
                                return (null === (r = e.theme_segment) || void 0 === r ? void 0 : r.type) === "other" || "other" === e.type || t === n.findIndex(t => {
                                    var n, r;
                                    return t.id === e.id && ((null === (n = t.theme_segment) || void 0 === n ? void 0 : n.type) || t.type) === ((null === (r = e.theme_segment) || void 0 === r ? void 0 : r.type) || e.type)
                                })
                            }).map((e, t, n) => {
                                if (0 === t && !n.find(e => {
                                        var t;
                                        return (null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) === "other" || "other" === e.type
                                    }) && ep) {
                                    var r;
                                    let e = ((null == ep ? void 0 : null === (r = ep.event) || void 0 === r ? void 0 : r.segments) || (null == ep ? void 0 : ep.segments) || []).find(e => {
                                        var t;
                                        return (null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) === "other" || "other" === e.type
                                    });
                                    e && n.push(e)
                                }
                                return e
                            }).sort((e, t) => e.position - t.position).map((e, t) => {
                                var n, i, o, l, a, d, u, c, m, g, L, x, E, S, C, N, M, A, $, D, O, Q, F, R, B, W, z, V, Z, q, U, H, G, K, J, X;
                                let ee = eu || (null == ep ? void 0 : null === (n = ep.language) || void 0 === n ? void 0 : n.code) || Y,
                                    et = ew.find(e => e.code === ee),
                                    en = (null === (i = e.translations) || void 0 === i ? void 0 : i.find(e => et && e.language_id === et.id)) || (null === (o = e.translations) || void 0 === o ? void 0 : o[0]),
                                    eo = ((null === (l = e.theme_segment) || void 0 === l ? void 0 : l.type) || e.type || "").toString().toLowerCase().trim(),
                                    el = `segment-${eo||"segment"}-${e.id||t}`,
                                    ea = "youtube" === eo || "youtube_embed" === eo ? k((null === (a = e.youtube) || void 0 === a ? void 0 : a.url) || e.url, !!(null === (d = e.youtube) || void 0 === d ? void 0 : d.autoplay)) : null;
                                return (0, r.jsxs)("div", {
                                    id: el,
                                    "data-segment-type": eo,
                                    className: v().segmentReveal,
                                    style: {
                                        "--segment-index": t,
                                        ...eI && 0 === t ? {
                                            minHeight: "auto",
                                            marginTop: "40px"
                                        } : {}
                                    },
                                    children: [(null === (u = e.theme_segment) || void 0 === u ? void 0 : u.type) === "greeting" && (0, r.jsxs)("div", {
                                        className: v().greetingSection,
                                        children: [(null == en ? void 0 : en.title) && P(en.title, "", v()), (0, r.jsxs)("form", {
                                            className: v().greetingForm,
                                            onSubmit: async e => {
                                                e.preventDefault();
                                                let t = s(ts.name.trim(), 200),
                                                    n = s(ts.comment.trim(), 2e3);
                                                if (!t || !n) {
                                                    tf({
                                                        type: "error",
                                                        text: "Please fill in all fields"
                                                    });
                                                    return
                                                }
                                                if (t.length < 1 || t.length > 200) {
                                                    tf({
                                                        type: "error",
                                                        text: "Name must be between 1 and 200 characters"
                                                    });
                                                    return
                                                }
                                                if (n.length < 1 || n.length > 2e3) {
                                                    tf({
                                                        type: "error",
                                                        text: "Comment must be between 1 and 2000 characters"
                                                    });
                                                    return
                                                }
                                                ty(!0), tf(null);
                                                try {
                                                    var r, i, o, l, a, d, u, c, v, m, g, L, p, h, y, _, f, b;
                                                    let e = (null == ep ? void 0 : null === (r = ep.event) || void 0 === r ? void 0 : r.id) || (null == ep ? void 0 : null === (i = ep.event) || void 0 === i ? void 0 : i.event_id) || (null == ep ? void 0 : null === (o = ep.invitation) || void 0 === o ? void 0 : o.event_id) || (null == ep ? void 0 : null === (a = ep.data) || void 0 === a ? void 0 : null === (l = a.event) || void 0 === l ? void 0 : l.id) || (null == ep ? void 0 : null === (u = ep.data) || void 0 === u ? void 0 : null === (d = u.event) || void 0 === d ? void 0 : d.event_id) || (null == ep ? void 0 : null === (v = ep.data) || void 0 === v ? void 0 : null === (c = v.invitation) || void 0 === c ? void 0 : c.event_id) || (null == ep ? void 0 : ep.id),
                                                        s = (null == ep ? void 0 : null === (m = ep.event) || void 0 === m ? void 0 : m.uuid) || (null == ep ? void 0 : null === (g = ep.event) || void 0 === g ? void 0 : g.event_uuid) || (null == ep ? void 0 : null === (L = ep.invitation) || void 0 === L ? void 0 : L.event_uuid) || (null == ep ? void 0 : null === (h = ep.data) || void 0 === h ? void 0 : null === (p = h.event) || void 0 === p ? void 0 : p.uuid) || (null == ep ? void 0 : null === (_ = ep.data) || void 0 === _ ? void 0 : null === (y = _.event) || void 0 === y ? void 0 : y.event_uuid) || (null == ep ? void 0 : null === (b = ep.data) || void 0 === b ? void 0 : null === (f = b.invitation) || void 0 === f ? void 0 : f.event_uuid) || (null == ep ? void 0 : ep.uuid) || (null == ep ? void 0 : ep.event_uuid);
                                                    if (!e && !s) throw console.error("Event ID not found in eventData:", ep), Error("Event ID not found");
                                                    let w = new FormData;
                                                    e && w.append("event_id", String(e)), s && w.append("event_uuid", String(s)), w.append("sender", t), w.append("content", n), tc.length > 0 && (tc.forEach(e => {
                                                        w.append("images[]", e)
                                                    }), w.append("is_image_private", tL ? "1" : "0"));
                                                    let x = await fetch("/api/messages", {
                                                        method: "POST",
                                                        body: w
                                                    });
                                                    if (!x.ok) {
                                                        let e = `Failed to send message: ${x.status}`;
                                                        try {
                                                            let t = await x.text();
                                                            console.error("Greeting message API error:", t);
                                                            try {
                                                                let n = JSON.parse(t);
                                                                e = n.message || n.error || e
                                                            } catch {
                                                                if (t.includes("Route [login] not defined")) e = "Authentication error. Please contact support.";
                                                                else if (t.includes("exception") || t.includes("Exception")) {
                                                                    let n = t.match(/"message":\s*"([^"]+)"/);
                                                                    n && (e = n[1])
                                                                } else e = t.substring(0, 200) || e
                                                            }
                                                        } catch (e) {
                                                            console.error("Error parsing error response:", e)
                                                        }
                                                        throw Error(e)
                                                    }
                                                    await x.json(), tf({
                                                        type: "success",
                                                        text: "Message sent successfully!"
                                                    }), tu(e => ({ ...e,
                                                        comment: ""
                                                    })), tv([]), tg([]), tp(!1), (async () => {
                                                        var e, t, n, r, i;
                                                        let o = (null == ep ? void 0 : null === (e = ep.event) || void 0 === e ? void 0 : e.uuid) || (null == ep ? void 0 : null === (t = ep.event) || void 0 === t ? void 0 : t.event_uuid) || (null == ep ? void 0 : null === (n = ep.invitation) || void 0 === n ? void 0 : n.event_uuid) || (null == ep ? void 0 : null === (r = ep.invitation) || void 0 === r ? void 0 : r.uuid);
                                                        if (o) try {
                                                            let e = `/api/messages?event_uuid=${encodeURIComponent(o)}&per_page=10000&limit=10000`,
                                                                t = await fetch(e, {
                                                                    method: "GET",
                                                                    headers: {
                                                                        "Content-Type": "application/json"
                                                                    }
                                                                });
                                                            if (t.ok) {
                                                                let e = await t.json(),
                                                                    n = [];
                                                                Array.isArray(e) ? n = e : Array.isArray(null == e ? void 0 : e.data) ? n = e.data : Array.isArray(null == e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : i.data) ? n = e.data.data : Array.isArray(null == e ? void 0 : e.messages) ? n = e.messages : (null == e ? void 0 : e.data) && "object" == typeof e.data && (n = Object.values(e.data).filter(e => "object" == typeof e && null !== e && (e.id || e.uuid || e.content || e.sender)));
                                                                let r = n.filter(e => !0 === e.is_active || 1 === e.is_active || "1" === e.is_active || "true" === e.is_active || void 0 === e.is_active || null === e.is_active);
                                                                tw(r)
                                                            }
                                                        } catch (e) {
                                                            console.error("Error refreshing messages:", e)
                                                        }
                                                    })(), setTimeout(() => {
                                                        tf(null)
                                                    }, 3e3)
                                                } catch (e) {
                                                    console.error("Error submitting greeting message:", e), tf({
                                                        type: "error",
                                                        text: e.message || "Failed to send message. Please try again."
                                                    })
                                                } finally {
                                                    ty(!1)
                                                }
                                            },
                                            children: [(0, r.jsx)("input", {
                                                type: "text",
                                                className: v().greetingInput,
                                                value: ts.name,
                                                readOnly: !1,
                                                disabled: !1,
                                                onChange: e => {
                                                    let t = s(e.target.value, 200, !1);
                                                    tu(e => ({ ...e,
                                                        name: t
                                                    }))
                                                },
                                                maxLength: 200,
                                                style: {
                                                    pointerEvents: "auto",
                                                    cursor: "text"
                                                }
                                            }), (0, r.jsx)("textarea", {
                                                className: v().greetingTextarea,
                                                value: ts.comment,
                                                onChange: e => {
                                                    let t = e.target.value,
                                                        n = t.length > 2e3 ? t.substring(0, 2e3) : t;
                                                    tu({ ...ts,
                                                        comment: n
                                                    })
                                                },
                                                maxLength: 2e3,
                                                rows: 4
                                            }), (() => {
                                                var t;
                                                let n = e.settings || (null === (t = e.theme_segment) || void 0 === t ? void 0 : t.settings),
                                                    i = "string" == typeof n ? (() => {
                                                        try {
                                                            return JSON.parse(n)
                                                        } catch {
                                                            return null
                                                        }
                                                    })() : n;
                                                return (null == i ? void 0 : i.allow_image) === !0 || (null == i ? void 0 : i.allow_image) === "true" || (null == i ? void 0 : i.allow_image) === 1 ? (0, r.jsxs)("div", {
                                                    className: v().greetingImageUploadContainer,
                                                    children: [(0, r.jsxs)("label", {
                                                        className: v().greetingImageUploadLabel,
                                                        children: [(0, r.jsx)("input", {
                                                            type: "file",
                                                            multiple: !0,
                                                            accept: "image/*",
                                                            className: v().greetingImageInput,
                                                            style: {
                                                                display: "none"
                                                            },
                                                            onChange: async e => {
                                                                let t = Array.from(e.target.files || []);
                                                                if (0 === t.length) return;
                                                                if (tc.length + t.length > 3) {
                                                                    tf({
                                                                        type: "error",
                                                                        text: "You can only upload up to 3 images"
                                                                    });
                                                                    return
                                                                }
                                                                tf(null);
                                                                let n = await Promise.all(t.map(e => j(e))),
                                                                    r = n.map(e => URL.createObjectURL(e));
                                                                tv(e => [...e, ...n]), tg(e => [...e, ...r]), e.target.value = ""
                                                            }
                                                        }), (0, r.jsxs)("div", {
                                                            className: v().greetingImageUploadButton,
                                                            children: [(0, r.jsxs)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [(0, r.jsx)("rect", {
                                                                    x: "3",
                                                                    y: "3",
                                                                    width: "18",
                                                                    height: "18",
                                                                    rx: "2",
                                                                    ry: "2"
                                                                }), (0, r.jsx)("circle", {
                                                                    cx: "8.5",
                                                                    cy: "8.5",
                                                                    r: "1.5"
                                                                }), (0, r.jsx)("polyline", {
                                                                    points: "21 15 16 10 5 21"
                                                                })]
                                                            }), (0, r.jsx)("span", {
                                                                children: "បញ្ជូលរូបភាព/Add Photo"
                                                            })]
                                                        })]
                                                    }), tm.length > 0 && (0, r.jsx)("div", {
                                                        className: v().greetingImagePreviewGrid,
                                                        children: tm.map((e, t) => (0, r.jsxs)("div", {
                                                            className: v().greetingImagePreviewItem,
                                                            children: [(0, r.jsx)("img", {
                                                                src: e,
                                                                alt: `Preview ${t+1}`
                                                            }), (0, r.jsx)("button", {
                                                                type: "button",
                                                                className: v().greetingImageRemoveButton,
                                                                onClick: e => {
                                                                    e.preventDefault(), e.stopPropagation(), tv(e => e.filter((e, n) => n !== t)), tg(e => {
                                                                        let n = e.filter((e, n) => n !== t);
                                                                        return URL.revokeObjectURL(e[t]), n
                                                                    })
                                                                },
                                                                children: (0, r.jsxs)("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "16",
                                                                    height: "16",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    children: [(0, r.jsx)("line", {
                                                                        x1: "18",
                                                                        y1: "6",
                                                                        x2: "6",
                                                                        y2: "18"
                                                                    }), (0, r.jsx)("line", {
                                                                        x1: "6",
                                                                        y1: "6",
                                                                        x2: "18",
                                                                        y2: "18"
                                                                    })]
                                                                })
                                                            })]
                                                        }, t))
                                                    }), tc.length > 0 && (0, r.jsxs)("div", {
                                                        className: v().greetingImagePrivacyContainer,
                                                        children: [(0, r.jsx)("div", {
                                                            className: v().greetingImagePrivacyLabelTitle,
                                                            children: "ភាពមើលឃើញនៃរូបភាព / Image Visibility:"
                                                        }), (0, r.jsxs)("div", {
                                                            className: v().greetingImagePrivacyOptions,
                                                            children: [(0, r.jsxs)("label", {
                                                                className: `${v().greetingImagePrivacyOption} ${tL?"":v().greetingImagePrivacyOptionActive}`,
                                                                children: [(0, r.jsx)("input", {
                                                                    type: "radio",
                                                                    name: "greeting_image_privacy",
                                                                    checked: !tL,
                                                                    onChange: () => tp(!1),
                                                                    className: v().greetingImagePrivacyRadio
                                                                }), (0, r.jsx)("span", {
                                                                    children: "\uD83C\uDF10 សាធារណៈ / Public"
                                                                })]
                                                            }), (0, r.jsxs)("label", {
                                                                className: `${v().greetingImagePrivacyOption} ${tL?v().greetingImagePrivacyOptionActive:""}`,
                                                                children: [(0, r.jsx)("input", {
                                                                    type: "radio",
                                                                    name: "greeting_image_privacy",
                                                                    checked: tL,
                                                                    onChange: () => tp(!0),
                                                                    className: v().greetingImagePrivacyRadio
                                                                }), (0, r.jsx)("span", {
                                                                    children: "\uD83D\uDD12 ឯកជន / Private"
                                                                })]
                                                            })]
                                                        }), tL ? (0, r.jsxs)("div", {
                                                            className: v().greetingImagePrivacyNoticePrivate,
                                                            children: [(0, r.jsxs)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "16",
                                                                height: "16",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [(0, r.jsx)("rect", {
                                                                    x: "3",
                                                                    y: "11",
                                                                    width: "18",
                                                                    height: "11",
                                                                    rx: "2",
                                                                    ry: "2"
                                                                }), (0, r.jsx)("path", {
                                                                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                                                                })]
                                                            }), (0, r.jsxs)("span", {
                                                                children: ["សារជូនពរនឹងបង្ហាញជាសាធារណៈ ប៉ុន្តែ", (0, r.jsx)("strong", {
                                                                    children: "រូបភាពអាចមើលបានតែម្ចាស់កម្មវិធីប៉ុណ្ណោះ"
                                                                }), " (Message text will be public, but photos will only be visible to the event owner)."]
                                                            })]
                                                        }) : (0, r.jsx)("div", {
                                                            className: v().greetingImagePrivacyNoticePublic,
                                                            children: (0, r.jsx)("span", {
                                                                children: "គ្រប់គ្នានឹងអាចមើលឃើញរូបភាពនេះនៅលើសារជូនពរ (Photos will be visible to all guests)."
                                                            })
                                                        })]
                                                    })]
                                                }) : null
                                            })(), t_ && (0, r.jsx)("div", {
                                                className: "success" === t_.type ? v().greetingSuccessMessage : v().greetingErrorMessage,
                                                children: t_.text
                                            }), (null == ef ? void 0 : ef.is_send_message_button_enabled) !== !1 && (null == ef ? void 0 : ef.is_send_message_button_enabled) !== "false" && (0, r.jsx)("button", {
                                                type: "submit",
                                                className: v().greetingSubmitButton,
                                                disabled: th,
                                                children: th ? (0, r.jsx)("span", {
                                                    className: v().greetingButtonEnglish,
                                                    children: "Sending..."
                                                }) : (0, r.jsx)("img", {
                                                    src: (null == ef ? void 0 : ef.button_send_message) ? er(ef.button_send_message) : "/send-greeting-button.png",
                                                    alt: "Send Greeting Messages",
                                                    className: v().greetingButtonImage
                                                })
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: v().greetingMessagesList,
                                            children: tx ? (0, r.jsx)("div", {
                                                className: v().greetingMessagesLoading,
                                                children: "Loading messages..."
                                            }) : tb.length > 0 ? tb.map((e, t) => {
                                                let n = e.created_at || e.createdAt || e.date || e.timestamp || "";
                                                return (0, r.jsxs)("div", {
                                                    className: v().greetingMessageCard,
                                                    children: [(0, r.jsx)("div", {
                                                        className: v().greetingMessageSender,
                                                        children: e.sender || e.name || "Anonymous"
                                                    }), (0, r.jsx)("span", {
                                                        className: v().greetingMessageLine
                                                    }), (0, r.jsx)("div", {
                                                        className: v().greetingMessageContent,
                                                        children: e.content || e.message || e.text || ""
                                                    }), (() => {
                                                        if (!0 === e.is_image_private || 1 === e.is_image_private || "1" === e.is_image_private) return null;
                                                        let t = [];
                                                        if (Array.isArray(e.images)) t = e.images;
                                                        else if ("string" == typeof e.images) try {
                                                            let n = JSON.parse(e.images);
                                                            Array.isArray(n) && (t = n)
                                                        } catch (n) {
                                                            e.images.trim() && (t = [e.images])
                                                        }
                                                        return t && 0 !== t.length ? (0, r.jsx)("div", {
                                                            className: v().greetingMessageImages,
                                                            children: t.map((e, t) => {
                                                                let n = "string" == typeof e ? e : (null == e ? void 0 : e.url) || (null == e ? void 0 : e.media_url) || (null == e ? void 0 : e.path) || "";
                                                                return n ? (0, r.jsx)("img", {
                                                                    src: er(n),
                                                                    alt: `Attached image ${t+1}`,
                                                                    onClick: () => nU(er(n)),
                                                                    style: {
                                                                        cursor: "pointer"
                                                                    }
                                                                }, t) : null
                                                            })
                                                        }) : null
                                                    })(), n && (0, r.jsx)("div", {
                                                        className: v().greetingMessageTimestamp,
                                                        children: (e => {
                                                            try {
                                                                let t = new Date(e),
                                                                    n = String(t.getDate()).padStart(2, "0"),
                                                                    r = String(t.getMonth() + 1).padStart(2, "0"),
                                                                    i = t.getFullYear(),
                                                                    o = t.getHours(),
                                                                    l = String(t.getMinutes()).padStart(2, "0"),
                                                                    a = o >= 12 ? "pm" : "am";
                                                                o %= 12, o = o || 12;
                                                                let d = String(o).padStart(2, "0");
                                                                return `${n}-${r}-${i} | ${d}:${l}${a}`
                                                            } catch (t) {
                                                                return e
                                                            }
                                                        })(n)
                                                    })]
                                                }, e.id || t)
                                            }) : (0, r.jsx)("div", {
                                                className: v().greetingMessagesEmpty,
                                                children: "No messages yet. Be the first to send a greeting!"
                                            })
                                        })]
                                    }), (null === (c = e.theme_segment) || void 0 === c ? void 0 : c.type) === "countdown" && (() => {
                                        var t, n, i;
                                        let o = e.settings;
                                        if ("string" == typeof o) try {
                                            o = JSON.parse(o)
                                        } catch {
                                            o = {}
                                        }
                                        if (o && "object" == typeof o || (o = {}), !o.style && !o.countdown_style) try {
                                            let e = (null == ep ? void 0 : null === (i = ep.event) || void 0 === i ? void 0 : i.uuid) || (null == ep ? void 0 : ep.uuid);
                                            if (e) {
                                                let t = localStorage.getItem(`countdown_settings_${e}`);
                                                t && (o = { ...JSON.parse(t),
                                                    ...o
                                                })
                                            }
                                        } catch {}
                                        let l = (o.style || o.countdown_style || "default").toLowerCase(),
                                            a = (o.label_display || "both").toLowerCase(),
                                            d = o.box_background_image ? er(o.box_background_image) : null,
                                            s = !!(null === (n = e.media) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.media_url),
                                            u = "both" === a || "km" === a,
                                            c = "both" === a || "en" === a,
                                            m = !u && !c,
                                            g = t0 ? String(t0.days).padStart(2, "0") : "00",
                                            L = t0 ? String(t0.hours).padStart(2, "0") : "00",
                                            p = t0 ? String(t0.minutes).padStart(2, "0") : "00",
                                            h = t0 ? String(t0.seconds).padStart(2, "0") : "00",
                                            y = () => t5 ? (0, r.jsxs)("div", {
                                                className: v().eventStartedMessage,
                                                children: [(0, r.jsx)("h3", {
                                                    children: "Event Started"
                                                }), (0, r.jsx)("p", {
                                                    children: "សម្រាប់ព្រឹត្តិការណ៍បានចាប់ផ្តើម"
                                                })]
                                            }) : "modern" === l ? (0, r.jsx)("div", {
                                                className: `${v().countdownTimerModern} ${s?"":`${v().countdownTimerStandalone} ${v().countdownTimerModernCentered}`} ${d?v().countdownTimerWithCustomBg:""}`,
                                                style: d ? {
                                                    backgroundImage: `url(${d})`
                                                } : void 0,
                                                children: (0, r.jsxs)("div", {
                                                    className: v().countdownNumbers,
                                                    children: [(0, r.jsxs)("div", {
                                                        className: `${v().countdownItemModern} ${m?v().countdownItemNoLabel:""}`,
                                                        children: [(0, r.jsx)("span", {
                                                            className: v().countdownNumberModern,
                                                            children: g
                                                        }), u && (0, r.jsx)("span", {
                                                            className: v().countdownLabelKhmerModern,
                                                            children: "ថ្ងៃ"
                                                        }), c && (0, r.jsx)("span", {
                                                            className: v().countdownLabelModern,
                                                            children: "Days"
                                                        })]
                                                    }), (0, r.jsx)("span", {
                                                        className: `${v().countdownSeparatorModern} ${m?v().countdownSeparatorNoLabel:""}`,
                                                        children: ":"
                                                    }), (0, r.jsxs)("div", {
                                                        className: `${v().countdownItemModern} ${m?v().countdownItemNoLabel:""}`,
                                                        children: [(0, r.jsx)("span", {
                                                            className: v().countdownNumberModern,
                                                            children: L
                                                        }), u && (0, r.jsx)("span", {
                                                            className: v().countdownLabelKhmerModern,
                                                            children: "ម៉ោង"
                                                        }), c && (0, r.jsx)("span", {
                                                            className: v().countdownLabelModern,
                                                            children: "Hours"
                                                        })]
                                                    }), (0, r.jsx)("span", {
                                                        className: `${v().countdownSeparatorModern} ${m?v().countdownSeparatorNoLabel:""}`,
                                                        children: ":"
                                                    }), (0, r.jsxs)("div", {
                                                        className: `${v().countdownItemModern} ${m?v().countdownItemNoLabel:""}`,
                                                        children: [(0, r.jsx)("span", {
                                                            className: v().countdownNumberModern,
                                                            children: p
                                                        }), u && (0, r.jsx)("span", {
                                                            className: v().countdownLabelKhmerModern,
                                                            children: "នាទី"
                                                        }), c && (0, r.jsx)("span", {
                                                            className: v().countdownLabelModern,
                                                            children: "Minutes"
                                                        })]
                                                    }), (0, r.jsx)("span", {
                                                        className: `${v().countdownSeparatorModern} ${m?v().countdownSeparatorNoLabel:""}`,
                                                        children: ":"
                                                    }), (0, r.jsxs)("div", {
                                                        className: `${v().countdownItemModern} ${m?v().countdownItemNoLabel:""}`,
                                                        children: [(0, r.jsx)("span", {
                                                            className: v().countdownNumberModern,
                                                            children: h
                                                        }), u && (0, r.jsx)("span", {
                                                            className: v().countdownLabelKhmerModern,
                                                            children: "វិនាទី"
                                                        }), c && (0, r.jsx)("span", {
                                                            className: v().countdownLabelModern,
                                                            children: "Seconds"
                                                        })]
                                                    })]
                                                })
                                            }) : "classic" === l ? (0, r.jsx)("div", {
                                                className: `${v().countdownTimerClassic} ${s?"":v().countdownTimerStandalone}`,
                                                children: (0, r.jsxs)("div", {
                                                    className: v().countdownNumbers,
                                                    children: [(0, r.jsxs)("div", {
                                                        className: `${v().countdownItemClassic} ${m?v().countdownItemNoLabel:""}`,
                                                        children: [(0, r.jsx)("span", {
                                                            className: v().countdownNumberClassic,
                                                            children: g
                                                        }), u && (0, r.jsx)("span", {
                                                            className: v().countdownLabelKhmerClassic,
                                                            children: "ថ្ងៃ"
                                                        }), c && (0, r.jsx)("span", {
                                                            className: v().countdownLabelClassic,
                                                            children: "Days"
                                                        })]
                                                    }), (0, r.jsx)("span", {
                                                        className: `${v().countdownSeparatorClassic} ${m?v().countdownSeparatorNoLabel:""}`,
                                                        children: ":"
                                                    }), (0, r.jsxs)("div", {
                                                        className: `${v().countdownItemClassic} ${m?v().countdownItemNoLabel:""}`,
                                                        children: [(0, r.jsx)("span", {
                                                            className: v().countdownNumberClassic,
                                                            children: L
                                                        }), u && (0, r.jsx)("span", {
                                                            className: v().countdownLabelKhmerClassic,
                                                            children: "ម៉ោង"
                                                        }), c && (0, r.jsx)("span", {
                                                            className: v().countdownLabelClassic,
                                                            children: "Hours"
                                                        })]
                                                    }), (0, r.jsx)("span", {
                                                        className: `${v().countdownSeparatorClassic} ${m?v().countdownSeparatorNoLabel:""}`,
                                                        children: ":"
                                                    }), (0, r.jsxs)("div", {
                                                        className: `${v().countdownItemClassic} ${m?v().countdownItemNoLabel:""}`,
                                                        children: [(0, r.jsx)("span", {
                                                            className: v().countdownNumberClassic,
                                                            children: p
                                                        }), u && (0, r.jsx)("span", {
                                                            className: v().countdownLabelKhmerClassic,
                                                            children: "នាទី"
                                                        }), c && (0, r.jsx)("span", {
                                                            className: v().countdownLabelClassic,
                                                            children: "Minutes"
                                                        })]
                                                    }), (0, r.jsx)("span", {
                                                        className: `${v().countdownSeparatorClassic} ${m?v().countdownSeparatorNoLabel:""}`,
                                                        children: ":"
                                                    }), (0, r.jsxs)("div", {
                                                        className: `${v().countdownItemClassic} ${m?v().countdownItemNoLabel:""}`,
                                                        children: [(0, r.jsx)("span", {
                                                            className: v().countdownNumberClassic,
                                                            children: h
                                                        }), u && (0, r.jsx)("span", {
                                                            className: v().countdownLabelKhmerClassic,
                                                            children: "វិនាទី"
                                                        }), c && (0, r.jsx)("span", {
                                                            className: v().countdownLabelClassic,
                                                            children: "Seconds"
                                                        })]
                                                    })]
                                                })
                                            }) : (0, r.jsx)("div", {
                                                className: `${v().countdownTimer} ${s?"":v().countdownTimerStandalone}`,
                                                children: (0, r.jsxs)("div", {
                                                    className: v().countdownNumbers,
                                                    children: [(0, r.jsxs)("div", {
                                                        className: `${v().countdownItem} ${m?v().countdownItemNoLabel:""}`,
                                                        children: [(0, r.jsx)("span", {
                                                            className: v().countdownNumber,
                                                            children: g
                                                        }), u && (0, r.jsx)("span", {
                                                            className: v().countdownLabelKhmer,
                                                            children: "ថ្ងៃ"
                                                        }), c && (0, r.jsx)("span", {
                                                            className: v().countdownLabel,
                                                            children: "Days"
                                                        })]
                                                    }), (0, r.jsx)("span", {
                                                        className: `${v().countdownSeparator} ${m?v().countdownSeparatorNoLabel:""}`,
                                                        children: ":"
                                                    }), (0, r.jsxs)("div", {
                                                        className: `${v().countdownItem} ${m?v().countdownItemNoLabel:""}`,
                                                        children: [(0, r.jsx)("span", {
                                                            className: v().countdownNumber,
                                                            children: L
                                                        }), u && (0, r.jsx)("span", {
                                                            className: v().countdownLabelKhmer,
                                                            children: "ម៉ោង"
                                                        }), c && (0, r.jsx)("span", {
                                                            className: v().countdownLabel,
                                                            children: "Hours"
                                                        })]
                                                    }), (0, r.jsx)("span", {
                                                        className: `${v().countdownSeparator} ${m?v().countdownSeparatorNoLabel:""}`,
                                                        children: ":"
                                                    }), (0, r.jsxs)("div", {
                                                        className: `${v().countdownItem} ${m?v().countdownItemNoLabel:""}`,
                                                        children: [(0, r.jsx)("span", {
                                                            className: v().countdownNumber,
                                                            children: p
                                                        }), u && (0, r.jsx)("span", {
                                                            className: v().countdownLabelKhmer,
                                                            children: "នាទី"
                                                        }), c && (0, r.jsx)("span", {
                                                            className: v().countdownLabel,
                                                            children: "Minutes"
                                                        })]
                                                    }), (0, r.jsx)("span", {
                                                        className: `${v().countdownSeparator} ${m?v().countdownSeparatorNoLabel:""}`,
                                                        children: ":"
                                                    }), (0, r.jsxs)("div", {
                                                        className: `${v().countdownItem} ${m?v().countdownItemNoLabel:""}`,
                                                        children: [(0, r.jsx)("span", {
                                                            className: v().countdownNumber,
                                                            children: h
                                                        }), u && (0, r.jsx)("span", {
                                                            className: v().countdownLabelKhmer,
                                                            children: "វិនាទី"
                                                        }), c && (0, r.jsx)("span", {
                                                            className: v().countdownLabel,
                                                            children: "Seconds"
                                                        })]
                                                    })]
                                                })
                                            });
                                        return (0, r.jsxs)("div", {
                                            className: v().countdownSection,
                                            style: "modern" === l ? {
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center"
                                            } : void 0,
                                            children: [(null == en ? void 0 : en.title) && P(en.title, "", v()), "modern" === l ? (0, r.jsx)("div", {
                                                style: {
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    padding: "0 16px"
                                                },
                                                children: (0, r.jsx)("div", {
                                                    className: `${v().countdownTimerModern} ${d?v().countdownTimerWithCustomBg:""}`,
                                                    style: {
                                                        position: "relative",
                                                        top: "auto",
                                                        left: "auto",
                                                        right: "auto",
                                                        width: "100%",
                                                        maxWidth: "480px",
                                                        margin: "0 auto",
                                                        ...d ? {
                                                            backgroundImage: `url(${d})`
                                                        } : {}
                                                    },
                                                    children: (0, r.jsxs)("div", {
                                                        className: v().countdownNumbers,
                                                        children: [(0, r.jsxs)("div", {
                                                            className: `${v().countdownItemModern} ${m?v().countdownItemNoLabel:""}`,
                                                            children: [(0, r.jsx)("span", {
                                                                className: v().countdownNumberModern,
                                                                children: t0 ? String(t0.days).padStart(2, "0") : "00"
                                                            }), u && (0, r.jsx)("span", {
                                                                className: v().countdownLabelKhmerModern,
                                                                children: "ថ្ងៃ"
                                                            }), c && (0, r.jsx)("span", {
                                                                className: v().countdownLabelModern,
                                                                children: "Days"
                                                            })]
                                                        }), (0, r.jsx)("span", {
                                                            className: `${v().countdownSeparatorModern} ${m?v().countdownSeparatorNoLabel:""}`,
                                                            children: ":"
                                                        }), (0, r.jsxs)("div", {
                                                            className: `${v().countdownItemModern} ${m?v().countdownItemNoLabel:""}`,
                                                            children: [(0, r.jsx)("span", {
                                                                className: v().countdownNumberModern,
                                                                children: t0 ? String(t0.hours).padStart(2, "0") : "00"
                                                            }), u && (0, r.jsx)("span", {
                                                                className: v().countdownLabelKhmerModern,
                                                                children: "ម៉ោង"
                                                            }), c && (0, r.jsx)("span", {
                                                                className: v().countdownLabelModern,
                                                                children: "Hours"
                                                            })]
                                                        }), (0, r.jsx)("span", {
                                                            className: `${v().countdownSeparatorModern} ${m?v().countdownSeparatorNoLabel:""}`,
                                                            children: ":"
                                                        }), (0, r.jsxs)("div", {
                                                            className: `${v().countdownItemModern} ${m?v().countdownItemNoLabel:""}`,
                                                            children: [(0, r.jsx)("span", {
                                                                className: v().countdownNumberModern,
                                                                children: t0 ? String(t0.minutes).padStart(2, "0") : "00"
                                                            }), u && (0, r.jsx)("span", {
                                                                className: v().countdownLabelKhmerModern,
                                                                children: "នាទី"
                                                            }), c && (0, r.jsx)("span", {
                                                                className: v().countdownLabelModern,
                                                                children: "Minutes"
                                                            })]
                                                        }), (0, r.jsx)("span", {
                                                            className: `${v().countdownSeparatorModern} ${m?v().countdownSeparatorNoLabel:""}`,
                                                            children: ":"
                                                        }), (0, r.jsxs)("div", {
                                                            className: `${v().countdownItemModern} ${m?v().countdownItemNoLabel:""}`,
                                                            children: [(0, r.jsx)("span", {
                                                                className: v().countdownNumberModern,
                                                                children: t0 ? String(t0.seconds).padStart(2, "0") : "00"
                                                            }), u && (0, r.jsx)("span", {
                                                                className: v().countdownLabelKhmerModern,
                                                                children: "វិនាទី"
                                                            }), c && (0, r.jsx)("span", {
                                                                className: v().countdownLabelModern,
                                                                children: "Seconds"
                                                            })]
                                                        })]
                                                    })
                                                })
                                            }) : s ? (0, r.jsxs)("div", {
                                                className: v().countdownImageContainer,
                                                children: [(0, r.jsx)("img", {
                                                    src: er(e.media[0].media_url),
                                                    alt: null == en ? void 0 : en.title,
                                                    className: v().countdownImage
                                                }), y()]
                                            }) : y()]
                                        })
                                    })(), (null === (m = e.theme_segment) || void 0 === m ? void 0 : m.type) === "information" && (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsx)("div", {
                                            className: v().informationSection,
                                            children: null === (g = e.media) || void 0 === g ? void 0 : g.filter(e => e.media_url && !e.media_url.includes("via.placeholder")).map((e, t) => (0, r.jsx)("img", {
                                                src: er(e.media_url),
                                                alt: "Information",
                                                loading: "lazy",
                                                decoding: "async"
                                            }, t))
                                        })
                                    }), ("youtube" === eo || "youtube_embed" === eo) && ea && (0, r.jsx)("div", {
                                        className: v().youtubeSection,
                                        children: (0, r.jsx)(I, {
                                            embedUrl: ea,
                                            title: (null == en ? void 0 : en.title) || "YouTube video",
                                            frameColor: (null == ef ? void 0 : ef.button_color) || (null == ef ? void 0 : ef.icon_color) || (null == ef ? void 0 : ef.text_color)
                                        })
                                    }), ("video_segment" === eo || "superadmin_media" === eo) && (() => {
                                        var t, n, i, o, l, a, d, s, u, c;
                                        let m = (null === (t = e.video) || void 0 === t ? void 0 : t.url) || (null === (i = e.media) || void 0 === i ? void 0 : null === (n = i.find(e => "video" === e.type || "image" === e.type)) || void 0 === n ? void 0 : n.media_url) || (null === (l = e.media) || void 0 === l ? void 0 : null === (o = l.find(e => "video" === e.type || "image" === e.type)) || void 0 === o ? void 0 : o.url) || (null === (d = e.media) || void 0 === d ? void 0 : null === (a = d[0]) || void 0 === a ? void 0 : a.media_url) || (null === (u = e.media) || void 0 === u ? void 0 : null === (s = u[0]) || void 0 === s ? void 0 : s.url),
                                            g = m ? er(m, !0, !0) : null;
                                        if (!g) return null;
                                        let L = g.match(/\.(mp4|webm|ogg|m3u8|mov|mkv)$/i) || (null === (c = e.media) || void 0 === c ? void 0 : c.find(e => "video" === e.type)) || "video_segment" === eo;
                                        return (0, r.jsx)("div", {
                                            className: v().videoSegmentSection,
                                            children: L ? (0, r.jsx)(w, {
                                                src: g
                                            }) : (0, r.jsx)("img", {
                                                src: g,
                                                alt: "Superadmin Media",
                                                className: v().videoSegmentPlayer,
                                                loading: "lazy",
                                                decoding: "async"
                                            })
                                        })
                                    })(), (null === (L = e.theme_segment) || void 0 === L ? void 0 : L.type) === "photo_gallery" && (() => {
                                        var t, n, i, o;
                                        let l = e.gallery_template || e.template || (null === (t = e.theme_segment) || void 0 === t ? void 0 : t.template) || (null === (n = e.theme_segment) || void 0 === n ? void 0 : n.gallery_template) || (null === (o = e.galleries) || void 0 === o ? void 0 : null === (i = o[0]) || void 0 === i ? void 0 : i.template),
                                            a = "string" == typeof l ? l.toLowerCase().trim() : l,
                                            d = "classic" === a ? 6 : "grid" === a ? 3 : "mosaic" === a ? 1 : "duo" === a ? 2 : a,
                                            s = "string" == typeof d ? Number.parseInt(d, 10) : d,
                                            u = ei ? 6 : Number.isFinite(s) ? s : 2,
                                            c = (t, n) => {
                                                let r = window.innerWidth >= 769;
                                                if (nY || nn || r) {
                                                    tD(null), tR([]), tQ(-1), nU(er(t.media_url));
                                                    return
                                                }
                                                tR(e.galleries), tD(er(t.media_url)), tQ(n), tq(1)
                                            };
                                        return (0, r.jsxs)("div", {
                                            className: `${v().gallerySection} ${2===u?v().gallerySectionTemplate2:""}`,
                                            children: [(null == en ? void 0 : en.title) && P(en.title, "", v()), (() => {
                                                if (!e.galleries || 0 === e.galleries.length) return null;
                                                let t = {
                                                    galleries: e.galleries,
                                                    getMediaUrl: er,
                                                    onImageClick: c
                                                };
                                                switch (u) {
                                                    case 1:
                                                        return (0, r.jsx)(p, { ...t
                                                        });
                                                    case 2:
                                                    default:
                                                        return (0, r.jsx)(h, { ...t
                                                        });
                                                    case 3:
                                                        return (0, r.jsx)(y, { ...t
                                                        });
                                                    case 4:
                                                        return (0, r.jsx)(_, { ...t
                                                        });
                                                    case 5:
                                                        return (0, r.jsx)(f, { ...t
                                                        });
                                                    case 6:
                                                        return (0, r.jsx)(b, { ...t
                                                        })
                                                }
                                            })()]
                                        })
                                    })(), (null === (x = e.theme_segment) || void 0 === x ? void 0 : x.type) === "agenda" && (0, r.jsxs)("div", {
                                        className: v().agendaSection,
                                        children: [(null == en ? void 0 : en.title) && P(en.title, "", v()), (null === (E = e.media) || void 0 === E ? void 0 : E[0]) && (0, r.jsx)("img", {
                                            src: er(e.media[0].media_url),
                                            alt: null == en ? void 0 : en.title,
                                            loading: "lazy",
                                            decoding: "async"
                                        })]
                                    }), (null === (S = e.theme_segment) || void 0 === S ? void 0 : S.type) === "map" && (0, r.jsxs)("div", {
                                        className: v().mapSection,
                                        children: [(null == en ? void 0 : en.title) && P(en.title, "", v()), (null === (C = e.media) || void 0 === C ? void 0 : C[0]) && (0, r.jsx)("img", {
                                            src: er(e.media[0].media_url),
                                            alt: null == en ? void 0 : en.title,
                                            loading: "lazy",
                                            decoding: "async"
                                        }), e.map_link && (null == ef ? void 0 : ef.is_location_button_enabled) !== !1 && (null == ef ? void 0 : ef.is_location_button_enabled) !== "false" && (0, r.jsx)("a", {
                                            href: e.map_link.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: v().mapButton,
                                            children: (0, r.jsx)("img", {
                                                src: (null == ef ? void 0 : ef.button_location) ? er(ef.button_location) : "/view-location-button.png",
                                                alt: "Click to View Location",
                                                className: v().mapButtonImage
                                            })
                                        })]
                                    }), (null === (N = e.theme_segment) || void 0 === N ? void 0 : N.type) === "rsvp" && (0, r.jsxs)("div", {
                                        className: v().rsvpSection,
                                        children: [T(null == en ? void 0 : en.title, "RSVP", v()), (null == en ? void 0 : en.description) && (0, r.jsx)("div", {
                                            className: v().rsvpIntro,
                                            children: (0, r.jsx)("p", {
                                                className: v().rsvpIntroText,
                                                dangerouslySetInnerHTML: {
                                                    __html: function(e) {
                                                        if (!e || "string" != typeof e) return "";
                                                        let t = e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
                                                        return (t = (t = (t = (t = (t = (t = t.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, "")).replace(/\s*on\w+\s*=\s*[^\s>]*/gi, "")).replace(/javascript:/gi, "")).replace(/data:text\/html/gi, "")).replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")).replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, "")).replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, "")
                                                    }(en.description)
                                                }
                                            })
                                        }), (0, r.jsxs)("form", {
                                            className: v().rsvpForm,
                                            onSubmit: async e => {
                                                var t, n, r, i, o, l, a, d, u, c, v, m, g, L;
                                                e.preventDefault();
                                                let p = s(tP.name.trim(), 200),
                                                    h = s(tP.specialRequests.trim(), 1e3),
                                                    y = s(tP.food.trim(), 500),
                                                    _ = s(tP.namesOfGuests.trim(), 1e3),
                                                    f = s(tP.dietaryDetails.trim(), 500);
                                                if (!tP.attendance) {
                                                    tI({
                                                        type: "error",
                                                        text: "Please select attendance status"
                                                    });
                                                    return
                                                }
                                                if (!["yes", "no", "maybe"].includes(tP.attendance.toLowerCase())) {
                                                    tI({
                                                        type: "error",
                                                        text: "Invalid attendance status"
                                                    });
                                                    return
                                                }
                                                if (!p || p.length < 1 || p.length > 200) {
                                                    tI({
                                                        type: "error",
                                                        text: "Please enter a valid name (1-200 characters)"
                                                    });
                                                    return
                                                }
                                                let b = ["3651f54b-61ea-481c-8eaf-e8d9e549e6d8", "84cc3182-1586-47c5-ad1e-0c2a9233a5a6"].includes((null == ep ? void 0 : null === (t = ep.event) || void 0 === t ? void 0 : t.uuid) || (null == ep ? void 0 : null === (n = ep.event) || void 0 === n ? void 0 : n.event_uuid) || (null == ep ? void 0 : null === (r = ep.invitation) || void 0 === r ? void 0 : r.event_uuid) || (null == ep ? void 0 : null === (i = ep.invitation) || void 0 === i ? void 0 : i.uuid));
                                                if ("yes" === tP.attendance && !b) {
                                                    if (!tP.numberOfAttendees) {
                                                        tI({
                                                            type: "error",
                                                            text: "Please enter number of attendees"
                                                        });
                                                        return
                                                    }
                                                    let e = parseInt(tP.numberOfAttendees, 10);
                                                    if (isNaN(e) || e < 1 || e > 100) {
                                                        tI({
                                                            type: "error",
                                                            text: "Number of attendees must be between 1 and 100"
                                                        });
                                                        return
                                                    }
                                                    if (!_) {
                                                        tI({
                                                            type: "error",
                                                            text: "Please list the names of all guests attending"
                                                        });
                                                        return
                                                    }
                                                    if (!tP.hasDietary) {
                                                        tI({
                                                            type: "error",
                                                            text: "Please specify if any guests have dietary requirements"
                                                        });
                                                        return
                                                    }
                                                    if ("yes" === tP.hasDietary && !f) {
                                                        tI({
                                                            type: "error",
                                                            text: "Please specify the dietary requirements for each guest"
                                                        });
                                                        return
                                                    }
                                                }
                                                if (tC && !tM) {
                                                    tA(!0);
                                                    return
                                                }
                                                tA(!1), tk(!0), tI(null);
                                                try {
                                                    let e = (null == ep ? void 0 : null === (o = ep.event) || void 0 === o ? void 0 : o.uuid) || (null == ep ? void 0 : null === (l = ep.event) || void 0 === l ? void 0 : l.event_uuid) || (null == ep ? void 0 : null === (a = ep.invitation) || void 0 === a ? void 0 : a.event_uuid) || (null == ep ? void 0 : null === (d = ep.invitation) || void 0 === d ? void 0 : d.uuid);
                                                    if (!e) throw Error("Event UUID not found");
                                                    let t = {
                                                        event_uuid: e,
                                                        invitation_uuid: (null == ep ? void 0 : null === (u = ep.invitation) || void 0 === u ? void 0 : u.uuid) || (null == ep ? void 0 : null === (c = ep.invitation) || void 0 === c ? void 0 : c.invitation_uuid) || "",
                                                        name: p,
                                                        attendance_status: tP.attendance.toLowerCase()
                                                    };
                                                    if ("yes" === tP.attendance) {
                                                        let e = parseInt(tP.numberOfAttendees, 10);
                                                        t.number_of_attendees = isNaN(e) ? 1 : Math.max(1, Math.min(100, e))
                                                    }
                                                    let n = [];
                                                    if ("yes" === tP.attendance && (_ && n.push(`Names of guests: ${_}`), tP.hasDietary)) {
                                                        let e = "yes" === tP.hasDietary ? `Yes (${f})` : "No";
                                                        n.push(`Dietary requirements: ${e}`)
                                                    }
                                                    if (h && n.push(`Special requests: ${h}`), n.length > 0) {
                                                        let e = n.join("\n");
                                                        t.special_requests = e, t.special_request = e
                                                    }
                                                    y && (t.food = y);
                                                    let r = await fetch("/api/event-rsvps", {
                                                        method: "POST",
                                                        headers: {
                                                            "Content-Type": "application/json"
                                                        },
                                                        body: JSON.stringify(t)
                                                    });
                                                    if (!r.ok) {
                                                        let e = `Failed to submit RSVP: ${r.status}`;
                                                        try {
                                                            let t = await r.text();
                                                            console.error("RSVP API error:", t);
                                                            try {
                                                                let n = JSON.parse(t);
                                                                e = n.message || n.error || e
                                                            } catch {
                                                                if (t.includes("Route [login] not defined")) e = "Authentication error. Please contact support.";
                                                                else if (t.includes("exception") || t.includes("Exception")) {
                                                                    let n = t.match(/"message":\s*"([^"]+)"/);
                                                                    n && (e = n[1])
                                                                } else e = t.substring(0, 200) || e
                                                            }
                                                        } catch (e) {
                                                            console.error("Error parsing error response:", e)
                                                        }
                                                        throw Error(e)
                                                    }
                                                    await r.json(), tI({
                                                        type: "success",
                                                        text: ["3651f54b-61ea-481c-8eaf-e8d9e549e6d8", "84cc3182-1586-47c5-ad1e-0c2a9233a5a6"].includes((null == ep ? void 0 : null === (v = ep.event) || void 0 === v ? void 0 : v.uuid) || (null == ep ? void 0 : null === (m = ep.event) || void 0 === m ? void 0 : m.event_uuid) || (null == ep ? void 0 : null === (g = ep.invitation) || void 0 === g ? void 0 : g.event_uuid) || (null == ep ? void 0 : null === (L = ep.invitation) || void 0 === L ? void 0 : L.uuid)) ? "Thank You" : "RSVP submitted successfully!"
                                                    }), tT({
                                                        name: "",
                                                        attendance: "",
                                                        numberOfAttendees: "",
                                                        specialRequests: "",
                                                        food: "",
                                                        namesOfGuests: "",
                                                        hasDietary: "",
                                                        dietaryDetails: ""
                                                    }), setTimeout(() => {
                                                        tI(null)
                                                    }, 3e3)
                                                } catch (e) {
                                                    console.error("Error submitting RSVP:", e), tI({
                                                        type: "error",
                                                        text: e.message || "Failed to submit RSVP. Please try again."
                                                    })
                                                } finally {
                                                    tk(!1)
                                                }
                                            },
                                            children: [(0, r.jsxs)("div", {
                                                className: v().rsvpField,
                                                children: [(0, r.jsx)("label", {
                                                    className: v().rsvpLabel,
                                                    children: "ឈ្មោះ / Name"
                                                }), (0, r.jsx)("input", {
                                                    type: "text",
                                                    className: v().rsvpInput,
                                                    value: tP.name,
                                                    onChange: e => {
                                                        let t = s(e.target.value, 200, !1);
                                                        tT({ ...tP,
                                                            name: t
                                                        })
                                                    },
                                                    maxLength: 200,
                                                    required: !0
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: v().rsvpField,
                                                children: [(0, r.jsx)("label", {
                                                    className: v().rsvpLabel,
                                                    children: "ជ្រើសរើស / Will you be attending?"
                                                }), (0, r.jsxs)("select", {
                                                    className: v().rsvpSelect,
                                                    value: tP.attendance,
                                                    onChange: e => {
                                                        let t = e.target.value;
                                                        tT({ ...tP,
                                                            attendance: t,
                                                            numberOfAttendees: "yes" === t ? tP.numberOfAttendees : "",
                                                            specialRequests: "yes" === t ? tP.specialRequests : "",
                                                            food: "yes" === t ? tP.food : "",
                                                            namesOfGuests: "yes" === t ? tP.namesOfGuests : "",
                                                            hasDietary: "yes" === t ? tP.hasDietary : "",
                                                            dietaryDetails: "yes" === t ? tP.dietaryDetails : ""
                                                        })
                                                    },
                                                    required: !0,
                                                    children: [(0, r.jsx)("option", {
                                                        value: "",
                                                        children: "ជ្រើសរើស / Please Select"
                                                    }), (0, r.jsx)("option", {
                                                        value: "yes",
                                                        children: ["3651f54b-61ea-481c-8eaf-e8d9e549e6d8", "84cc3182-1586-47c5-ad1e-0c2a9233a5a6"].includes((null == ep ? void 0 : null === (M = ep.event) || void 0 === M ? void 0 : M.uuid) || (null == ep ? void 0 : null === (A = ep.event) || void 0 === A ? void 0 : A.event_uuid) || (null == ep ? void 0 : null === ($ = ep.invitation) || void 0 === $ ? void 0 : $.event_uuid) || (null == ep ? void 0 : null === (D = ep.invitation) || void 0 === D ? void 0 : D.uuid)) ? "បាទ / ចាស / Yes" : "បាទ / Yes, I joyfully accept"
                                                    }), (0, r.jsx)("option", {
                                                        value: "no",
                                                        children: ["3651f54b-61ea-481c-8eaf-e8d9e549e6d8", "84cc3182-1586-47c5-ad1e-0c2a9233a5a6"].includes((null == ep ? void 0 : null === (O = ep.event) || void 0 === O ? void 0 : O.uuid) || (null == ep ? void 0 : null === (Q = ep.event) || void 0 === Q ? void 0 : Q.event_uuid) || (null == ep ? void 0 : null === (F = ep.invitation) || void 0 === F ? void 0 : F.event_uuid) || (null == ep ? void 0 : null === (R = ep.invitation) || void 0 === R ? void 0 : R.uuid)) ? "អត់ទេ / No" : "ទេ / No, I regretfully decline"
                                                    })]
                                                })]
                                            }), tP.attendance && !["3651f54b-61ea-481c-8eaf-e8d9e549e6d8", "84cc3182-1586-47c5-ad1e-0c2a9233a5a6"].includes((null == ep ? void 0 : null === (B = ep.event) || void 0 === B ? void 0 : B.uuid) || (null == ep ? void 0 : null === (W = ep.event) || void 0 === W ? void 0 : W.event_uuid) || (null == ep ? void 0 : null === (z = ep.invitation) || void 0 === z ? void 0 : z.event_uuid) || (null == ep ? void 0 : null === (V = ep.invitation) || void 0 === V ? void 0 : V.uuid)) && (0, r.jsxs)(r.Fragment, {
                                                children: ["yes" === tP.attendance && (0, r.jsxs)(r.Fragment, {
                                                    children: [(0, r.jsxs)("div", {
                                                        className: v().rsvpField,
                                                        children: [(0, r.jsx)("label", {
                                                            className: v().rsvpLabel,
                                                            children: "ចំនួនអ្នកចូលរួម / How many guests will be attending? (Including yourself)"
                                                        }), (0, r.jsx)("input", {
                                                            type: "number",
                                                            min: "1",
                                                            max: "100",
                                                            className: v().rsvpInput,
                                                            value: tP.numberOfAttendees,
                                                            onChange: e => {
                                                                let t = e.target.value;
                                                                if ("" === t || /^\d+$/.test(t)) {
                                                                    let e = parseInt(t, 10);
                                                                    ("" === t || !isNaN(e) && e >= 1 && e <= 100) && tT({ ...tP,
                                                                        numberOfAttendees: t
                                                                    })
                                                                }
                                                            },
                                                            required: !0
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: v().rsvpField,
                                                        children: [(0, r.jsx)("label", {
                                                            className: v().rsvpLabel,
                                                            children: "សូមបញ្ជាក់ឈ្មោះភ្ញៀវចូលរួមទាំងអស់ (រួមទាំងកុមារ) / Please list the names of all guests attending (Including children)"
                                                        }), (0, r.jsx)("textarea", {
                                                            className: v().rsvpTextarea,
                                                            value: tP.namesOfGuests,
                                                            onChange: e => {
                                                                let t = e.target.value,
                                                                    n = t.length > 1e3 ? t.substring(0, 1e3) : t;
                                                                tT({ ...tP,
                                                                    namesOfGuests: n
                                                                })
                                                            },
                                                            maxLength: 1e3,
                                                            rows: 2,
                                                            required: !0
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: v().rsvpField,
                                                        children: [(0, r.jsx)("label", {
                                                            className: v().rsvpLabel,
                                                            children: "តើភ្ញៀវណាមានតម្រូវការរបបអាហារពិសេសដែរឬទេ? / Do any guests have dietary requirements?"
                                                        }), (0, r.jsxs)("select", {
                                                            className: v().rsvpSelect,
                                                            value: tP.hasDietary,
                                                            onChange: e => {
                                                                let t = e.target.value;
                                                                tT({ ...tP,
                                                                    hasDietary: t,
                                                                    dietaryDetails: "yes" === t ? tP.dietaryDetails : ""
                                                                })
                                                            },
                                                            required: !0,
                                                            children: [(0, r.jsx)("option", {
                                                                value: "",
                                                                children: "ជ្រើសរើស / Please Select"
                                                            }), (0, r.jsx)("option", {
                                                                value: "yes",
                                                                children: "បាទ/ចាស (សូមបញ្ជាក់សម្រាប់ភ្ញៀវម្នាក់ៗ) / Yes (please specify for each guest)"
                                                            }), (0, r.jsx)("option", {
                                                                value: "no",
                                                                children: "ទេ / No"
                                                            })]
                                                        })]
                                                    }), "yes" === tP.hasDietary && (0, r.jsxs)("div", {
                                                        className: v().rsvpField,
                                                        children: [(0, r.jsx)("label", {
                                                            className: v().rsvpLabel,
                                                            children: "សូមបញ្ជាក់ពីតម្រូវការរបបអាហារ / Please specify dietary requirements"
                                                        }), (0, r.jsx)("textarea", {
                                                            className: v().rsvpTextarea,
                                                            value: tP.dietaryDetails,
                                                            onChange: e => {
                                                                let t = e.target.value,
                                                                    n = t.length > 500 ? t.substring(0, 500) : t;
                                                                tT({ ...tP,
                                                                    dietaryDetails: n
                                                                })
                                                            },
                                                            maxLength: 500,
                                                            rows: 2,
                                                            required: !0
                                                        })]
                                                    })]
                                                }), "yes" === tP.attendance && (0, r.jsxs)(r.Fragment, {
                                                    children: [nT && (() => {
                                                        var e, t;
                                                        let n = nb.find(e => {
                                                                var t;
                                                                return ((null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) === "food_option" || "food_option" === e.type) && 1 === e.is_visible
                                                            }),
                                                            i = (null == n ? void 0 : null === (e = n.translations) || void 0 === e ? void 0 : e.find(e => {
                                                                var t;
                                                                return ew.find(e => e.code === eu) && e.language_id === (null === (t = ew.find(e => e.code === eu)) || void 0 === t ? void 0 : t.id)
                                                            })) || (null == n ? void 0 : null === (t = n.translations) || void 0 === t ? void 0 : t[0]),
                                                            o = (null == n ? void 0 : n.food_options) || (null == n ? void 0 : n.options) || [];
                                                        return (0, r.jsxs)("div", {
                                                            className: v().rsvpField,
                                                            children: [(0, r.jsx)("label", {
                                                                className: v().rsvpLabel,
                                                                children: (null == i ? void 0 : i.title) || "ម្ហូប / Food Option"
                                                            }), (0, r.jsxs)("select", {
                                                                className: v().rsvpSelect,
                                                                value: tP.food,
                                                                onChange: e => {
                                                                    let t = s(e.target.value, 500, !1);
                                                                    tT({ ...tP,
                                                                        food: t
                                                                    })
                                                                },
                                                                children: [(0, r.jsx)("option", {
                                                                    value: "",
                                                                    children: "ជ្រើសរើស / Please Select"
                                                                }), o.map((e, t) => {
                                                                    var n, i;
                                                                    let o = (null === (n = e.translations) || void 0 === n ? void 0 : n.find(e => {
                                                                        var t;
                                                                        return ew.find(e => e.code === eu) && e.language_id === (null === (t = ew.find(e => e.code === eu)) || void 0 === t ? void 0 : t.id)
                                                                    })) || (null === (i = e.translations) || void 0 === i ? void 0 : i[0]);
                                                                    return (0, r.jsx)("option", {
                                                                        value: e.id || e.name,
                                                                        children: (null == o ? void 0 : o.name) || e.name || `Option ${t+1}`
                                                                    }, t)
                                                                })]
                                                            })]
                                                        })
                                                    })(), (0, r.jsxs)("div", {
                                                        className: v().rsvpField,
                                                        children: [(0, r.jsx)("label", {
                                                            className: v().rsvpLabel,
                                                            children: "សំណើពិសេស / Special Requests (Optional)"
                                                        }), (0, r.jsx)("textarea", {
                                                            className: v().rsvpTextarea,
                                                            value: tP.specialRequests,
                                                            onChange: e => {
                                                                let t = e.target.value,
                                                                    n = t.length > 1e3 ? t.substring(0, 1e3) : t;
                                                                tT({ ...tP,
                                                                    specialRequests: n
                                                                })
                                                            },
                                                            maxLength: 1e3,
                                                            rows: 3
                                                        })]
                                                    })]
                                                })]
                                            }), tS && (0, r.jsx)("div", {
                                                className: "success" === tS.type ? v().rsvpSuccessMessage : v().rsvpErrorMessage,
                                                children: tS.text
                                            }), tM && (0, r.jsxs)("div", {
                                                style: {
                                                    backgroundColor: "#fff3cd",
                                                    border: "1px solid #ffc107",
                                                    borderRadius: "4px",
                                                    padding: "15px",
                                                    marginBottom: "15px",
                                                    textAlign: "center"
                                                },
                                                children: [(0, r.jsx)("p", {
                                                    style: {
                                                        marginBottom: "15px",
                                                        color: "#333"
                                                    },
                                                    children: "You have already submitted an RSVP. Do you want to update it?"
                                                }), (0, r.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: "10px",
                                                        justifyContent: "center"
                                                    },
                                                    children: [(0, r.jsx)("button", {
                                                        type: "button",
                                                        onClick: () => {
                                                            tA(!1), tI(null)
                                                        },
                                                        style: {
                                                            padding: "8px 16px",
                                                            backgroundColor: "#6c757d",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: "4px",
                                                            cursor: "pointer",
                                                            fontSize: "14px"
                                                        },
                                                        children: "Cancel"
                                                    }), (0, r.jsx)("button", {
                                                        type: "submit",
                                                        style: {
                                                            padding: "8px 16px",
                                                            backgroundColor: "#28a745",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: "4px",
                                                            cursor: "pointer",
                                                            fontSize: "14px"
                                                        },
                                                        children: "Update RSVP"
                                                    })]
                                                })]
                                            }), (0, r.jsx)("button", {
                                                type: "submit",
                                                className: v().rsvpSubmitButton,
                                                disabled: tj,
                                                children: tj ? (0, r.jsx)("span", {
                                                    children: "កំពុងបញ្ជូន... / Sending..."
                                                }) : (0, r.jsxs)(r.Fragment, {
                                                    children: [(0, r.jsx)("span", {
                                                        className: v().khmerText,
                                                        children: "បញ្ជូន"
                                                    }), " / ", (0, r.jsx)("span", {
                                                        children: "send"
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), (null === (Z = e.theme_segment) || void 0 === Z ? void 0 : Z.type) === "bank_transfer" && (0, r.jsxs)("div", {
                                        className: v().bankSection,
                                        children: [(null == en ? void 0 : en.title) && P(en.title, "", v()), (null === (q = e.media) || void 0 === q ? void 0 : q[0]) && (0, r.jsx)("img", {
                                            src: er(e.media[0].media_url),
                                            alt: null == en ? void 0 : en.title,
                                            loading: "lazy",
                                            decoding: "async"
                                        })]
                                    }), (null === (U = e.theme_segment) || void 0 === U ? void 0 : U.type) === "thank_you_message" && (0, r.jsx)("div", {
                                        className: v().thankYouSection,
                                        children: (null === (H = e.media) || void 0 === H ? void 0 : H[0]) && (0, r.jsx)("img", {
                                            src: er(e.media[0].media_url),
                                            alt: (null == en ? void 0 : en.title) || "Thank You"
                                        })
                                    }), (null === (G = e.theme_segment) || void 0 === G ? void 0 : G.type) === "footer" && (0, r.jsx)("div", {
                                        className: v().footerSection,
                                        children: (null === (K = e.media) || void 0 === K ? void 0 : K[0]) && (e.media[0].link_url ? (0, r.jsx)("a", {
                                            href: e.media[0].link_url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: (0, r.jsx)("img", {
                                                src: er(e.media[0].media_url),
                                                alt: "Footer"
                                            })
                                        }) : (0, r.jsx)("img", {
                                            src: er(e.media[0].media_url),
                                            alt: "Footer"
                                        }))
                                    }), ((null === (J = e.theme_segment) || void 0 === J ? void 0 : J.type) === "other" || "other" === e.type) && (0, r.jsxs)("div", {
                                        className: v().genericSection,
                                        "data-segment-type": "other",
                                        "data-segment-id": e.id,
                                        id: `segment-other-${e.id}`,
                                        style: {
                                            display: "block",
                                            visibility: "visible",
                                            opacity: "1 !important",
                                            pointerEvents: "auto",
                                            position: "relative",
                                            zIndex: 1e3
                                        },
                                        children: [(null == en ? void 0 : en.title) && P(en.title, "", v()), null === (X = e.media) || void 0 === X ? void 0 : X.filter(e => e && e.media_url && "string" == typeof e.media_url && "" !== e.media_url.trim() && !e.media_url.includes("via.placeholder")).map((t, n) => {
                                            var i;
                                            return (0, r.jsx)("img", {
                                                src: er(t.media_url),
                                                alt: (null == en ? void 0 : en.title) || (null === (i = e.theme_segment) || void 0 === i ? void 0 : i.name) || "Save The Date",
                                                loading: "lazy",
                                                decoding: "async",
                                                style: {
                                                    width: "100%",
                                                    height: "auto",
                                                    display: "block",
                                                    marginBottom: "20px"
                                                }
                                            }, `other-media-${n}`)
                                        }), (() => {
                                            var t, n;
                                            if ((null == ef ? void 0 : ef.is_calendar_button_enabled) === !1 || (null == ef ? void 0 : ef.is_calendar_button_enabled) === "false") return null;
                                            let i = (null == ef ? void 0 : ef.button_calendar) ? er(ef.button_calendar) : "/save-the-date.png",
                                                o = "";
                                            try {
                                                ep && nk && (o = nk())
                                            } catch (e) {}
                                            return o && "" !== o.trim() ? (0, r.jsx)("div", {
                                                style: {
                                                    position: "relative",
                                                    zIndex: 1001
                                                },
                                                children: (0, r.jsx)("a", {
                                                    href: o,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: v().saveTheDateWrapper,
                                                    style: {
                                                        textDecoration: "none",
                                                        display: "block",
                                                        cursor: "pointer",
                                                        pointerEvents: "auto",
                                                        position: "relative",
                                                        zIndex: 1002,
                                                        width: "100%",
                                                        height: "auto",
                                                        touchAction: "manipulation",
                                                        WebkitTapHighlightColor: "transparent"
                                                    },
                                                    onClick: e => (o && "" !== o.trim() ? (e.preventDefault(), e.stopPropagation(), window.open(o, "_blank", "noopener,noreferrer") || (window.location.href = o)) : (e.preventDefault(), e.stopPropagation()), !1),
                                                    onTouchEnd: e => {
                                                        o && "" !== o.trim() && (e.preventDefault(), window.open(o, "_blank", "noopener,noreferrer"))
                                                    },
                                                    children: (0, r.jsx)("img", {
                                                        src: i,
                                                        alt: (null == en ? void 0 : en.title) || (null === (n = e.theme_segment) || void 0 === n ? void 0 : n.name) || "Save The Date",
                                                        style: {
                                                            pointerEvents: "none",
                                                            display: "block",
                                                            userSelect: "none",
                                                            width: "100%",
                                                            height: "auto",
                                                            touchAction: "none",
                                                            WebkitUserSelect: "none"
                                                        }
                                                    })
                                                })
                                            }) : (0, r.jsx)("div", {
                                                className: v().saveTheDateWrapper,
                                                children: (0, r.jsx)("img", {
                                                    src: i,
                                                    alt: (null == en ? void 0 : en.title) || (null === (t = e.theme_segment) || void 0 === t ? void 0 : t.name) || "Save The Date",
                                                    loading: "lazy",
                                                    decoding: "async"
                                                })
                                            })
                                        })()]
                                    })]
                                }, e.id || t)
                            })
                        }), tY && 3 === ev && eF && (0, r.jsxs)("div", {
                            className: v().swipeIndicator,
                            children: [(0, r.jsx)("div", {
                                className: v().swipeIndicatorIcon,
                                children: (0, r.jsx)("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, r.jsx)("path", {
                                        d: "M12 5v14M19 12l-7 7-7-7"
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: v().swipeIndicatorText,
                                children: "Swipe up to view more"
                            })]
                        })]
                    }), eF && !nS && (rn || nw || nx || nE || nP) && (0, r.jsxs)("div", {
                        className: v().floatingAnchorIcons,
                        style: n8,
                        children: [rn, nw && (0, r.jsx)("button", {
                            className: v().floatingAnchorIcon,
                            onClick: () => n0("information"),
                            "aria-label": "Scroll to Information",
                            children: (0, r.jsxs)("svg", {
                                viewBox: "531 407 504 422",
                                role: "img",
                                "aria-hidden": "true",
                                children: [(0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 659.5 417 L 672.5 417 Q 679.3 419.3 683 424.5 L 684 426.5 L 684 479.5 L 679.5 485 L 671.5 489 L 661.5 489 L 650 482.5 L 648 475.5 L 648 428.5 Q 649.6 421.6 655.5 419 L 659.5 417 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 785.5 417 L 798.5 417 L 808 423.5 L 810 427.5 L 810 478.5 L 803.5 486 Q 798 490.5 786.5 489 Q 778.9 487.2 775 481.5 L 773 472.5 L 773 437.5 L 773 435.5 Q 772.8 424.3 779.5 420 L 785.5 417 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 910.5 417 Q 928.7 414.3 934 424.5 L 936 428.5 L 936 476.5 Q 934.5 483 929.5 486 L 922.5 489 L 911.5 489 L 902 483.5 L 899 475.5 L 899 428.5 L 906.5 419 L 910.5 417 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 605.5 445 L 631 445 L 631 455.5 L 632 456.5 L 632 480.5 L 633 484.5 L 643.5 496 L 657.5 502 L 675.5 502 Q 690.1 498.1 698 487.5 L 700 483.5 Q 698.3 477.2 701 475.5 L 701 446.5 L 702.5 445 L 757 445 L 757 466.5 L 758 467.5 L 758 482.5 Q 761.3 490.3 767.5 495 Q 774.4 500.1 784.5 502 L 786.5 502 L 801.5 502 L 818 494 L 825 484.5 L 827 477.5 L 827 445 L 881.5 445 L 882 445.5 L 882 452.5 L 883 453.5 L 883 480.5 L 884 484.5 L 891 494 Q 898.4 499.5 909.5 502 L 926.5 502 Q 939.6 498.6 947 489.5 L 951 483.5 L 953 474.5 L 953 445 Q 993.4 446.8 1013 470.5 L 1021 481.5 L 1025 492.5 L 1025 772.5 Q 1019.3 791.3 1005.5 802 Q 991.5 814.5 969.5 819 L 596.5 819 Q 567 812.5 551 792.5 L 543 779.5 L 541 769.5 L 541 491.5 Q 546 474.5 558.5 465 L 577.5 452 L 588.5 448 L 605.5 445 Z M 578 561 L 578 770 L 583 778 Q 590 785 601 789 L 637 789 L 638 790 L 962 790 L 980 781 L 988 770 L 988 561 L 578 561 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 715.5 589 L 759.5 589 L 772 595 L 774 600.5 L 774 621.5 L 772 627 L 759.5 633 L 716.5 633 Q 708 631.5 704 625.5 L 702 622.5 Q 703.3 617.8 701 616.5 L 701 604.5 Q 702.5 596 708.5 592 L 715.5 589 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 805.5 589 L 849.5 589 Q 858 590.5 862 596.5 L 864 602.5 L 864 619.5 Q 862.9 626.9 857.5 630 L 849.5 633 L 806.5 633 L 795 628 Q 788.6 619.7 791 601.5 L 796 593 L 805.5 589 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 895.5 589 L 939.5 589 Q 947.8 590.7 952 596.5 L 954 606.5 L 954 615.5 Q 951.3 617.3 953 623.5 L 948.5 629 L 943.5 632 L 938.5 633 L 896.5 633 L 889.5 631 L 884 626.5 L 881 619.5 L 881 617.5 Q 878.4 600.9 885.5 594 L 895.5 589 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 637.5 646 L 672.5 647 Q 679.3 649.3 683 654.5 L 684 656.5 L 684 679.5 L 682 685 L 672.5 690 L 664.5 690 L 663.5 691 L 633.5 691 L 632.5 690 L 621.5 689 L 615 685 L 612 677.5 L 612 675.5 L 612 657.5 L 619.5 649 L 623.5 647 L 636.5 647 L 637.5 646 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 727.5 646 L 762.5 647 Q 769.3 649.3 773 654.5 L 774 658.5 L 774 678.5 L 774 682.5 L 768.5 687 L 762.5 690 L 754.5 690 L 753.5 691 L 723.5 691 L 722.5 690 L 713.5 690 L 705 684.5 L 702 679.5 L 701 662.5 L 702 657.5 L 707 650 L 713.5 647 L 726.5 647 L 727.5 646 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 816.5 646 L 852.5 647 L 862 653.5 Q 865.9 662.6 864 677.5 L 862 683.5 L 859.5 686 L 852.5 690 L 843.5 690 L 842.5 691 L 812.5 691 L 811.5 690 L 803.5 690 Q 796.8 687.8 793 682.5 Q 789.1 673.4 791 658.5 L 796.5 651 L 803.5 647 L 815.5 647 L 816.5 646 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 906.5 646 L 941.5 647 L 951 652 L 953 656.5 L 954 673.5 Q 951.5 675 953 680.5 L 947.5 687 L 941.5 690 L 933.5 690 L 932.5 691 L 902.5 691 L 901.5 690 L 890.5 689 L 883 682.5 L 881 677.5 L 881 675.5 L 881 660.5 L 882 659.5 L 881 657.5 L 888.5 649 L 892.5 647 L 905.5 647 L 906.5 646 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 626 704 L 670 704 Q 678.8 705.7 683 711.5 L 684 714.5 L 684 737.5 L 679.5 744 L 670.5 748 L 625.5 748 L 615 741.5 L 612 735.5 L 612 716.5 L 615.5 710 L 618.5 708 L 625.5 704 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 714.5 704 L 760.5 704 L 771 709.5 L 774 715.5 L 774 736.5 L 771 743 L 760.5 748 L 715.5 748 Q 707.9 746.2 704 740.5 L 701 730.5 L 701 719.5 Q 702.2 711.7 707.5 708 L 714.5 704 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 805.5 704 L 850.5 704 Q 858.1 705.9 862 711.5 L 864 717.5 L 864 734.5 Q 862.9 741.9 857.5 745 L 850.5 748 L 805.5 748 L 794 741.5 Q 788.8 733.2 791 717.5 Q 793.1 709.6 799.5 706 L 805.5 704 Z "
                                })]
                            })
                        }), nx && (0, r.jsx)("button", {
                            className: v().floatingAnchorIcon,
                            onClick: () => n0("map"),
                            "aria-label": "Scroll to Map",
                            children: (0, r.jsx)("svg", {
                                viewBox: "620 407 327 422",
                                role: "img",
                                "aria-hidden": "true",
                                children: (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 762.5 417 L 803.5 417 L 834.5 424 Q 868.2 437.3 892 460.5 L 893.5 463 L 897 465.5 L 917 492.5 Q 926.2 508.8 932 528.5 L 937 554.5 L 937 587.5 L 936 588.5 L 936 595.5 L 932 612.5 L 932 617.5 L 926 638.5 Q 917.6 663.1 906 684.5 Q 887.1 718.6 863 747.5 L 817.5 795 L 791.5 817 Q 787.8 820.3 779.5 819 Q 748.2 796.8 723 768.5 Q 688.8 732.2 663 687.5 L 652 665.5 L 640 634.5 L 633 606.5 L 633 601.5 L 631 594.5 L 631 584.5 L 630 583.5 L 630 581.5 L 630 557.5 L 635 529.5 L 644 504.5 L 661 476 Q 663.7 477.1 663 474.5 L 666.5 470 Q 668.8 470.8 668 468.5 L 688.5 449 L 718.5 430 L 739.5 422 L 762.5 417 Z M 775 509 L 764 512 L 745 523 Q 728 536 723 562 L 723 579 L 725 588 Q 729 601 738 611 L 754 623 L 768 629 L 779 631 L 790 631 L 804 628 Q 815 624 824 616 Q 833 608 839 597 L 844 580 L 844 561 L 842 552 L 837 540 L 828 527 L 816 518 L 803 512 L 801 512 L 793 509 L 775 509 Z"
                                })
                            })
                        }), nE && (0, r.jsx)("button", {
                            className: v().floatingAnchorIcon,
                            onClick: () => n0("photo_gallery"),
                            "aria-label": "Scroll to Gallery",
                            children: (0, r.jsxs)("svg", {
                                viewBox: "531 409 504 418",
                                role: "img",
                                "aria-hidden": "true",
                                children: [(0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 591.5 419 L 974.5 419 Q 998.3 424.3 1011 440.5 Q 1021.2 451.8 1025 469.5 L 1025 765.5 Q 1019.5 791.5 1001.5 805 Q 990.9 813.9 974.5 817 L 591.5 817 Q 567.8 811.8 555 795.5 Q 544.4 784.1 541 765.5 L 541 470.5 Q 546.3 445.3 563.5 432 Q 574.3 422.3 591.5 419 Z M 580 463 L 574 466 L 570 471 L 569 475 L 570 730 L 623 676 L 625 673 L 646 652 L 661 644 L 671 642 Q 692 642 703 652 L 739 689 L 834 571 Q 845 555 868 551 Q 892 551 904 564 L 986 664 L 989 666 L 989 472 L 988 470 L 980 463 L 580 463 Z "
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: 1,
                                    d: "M 642.5 489 L 652.5 489 L 668.5 493 L 685 504.5 Q 692.6 511.9 697 522.5 L 701 537.5 L 701 549.5 L 699 559.5 L 695 569.5 Q 689.4 579.9 680.5 587 Q 672.7 593.7 661.5 597 L 656.5 598 L 638.5 598 Q 619.8 593.7 609 581.5 Q 601.2 573.3 597 561.5 L 595 553.5 L 595 534.5 Q 599.9 511.9 615.5 500 L 629.5 492 L 642.5 489 Z "
                                })]
                            })
                        }), nP && (0, r.jsx)("button", {
                            className: v().floatingAnchorIcon,
                            onClick: () => n0("greeting"),
                            "aria-label": "Scroll to Messages",
                            children: (0, r.jsxs)("svg", {
                                viewBox: "0 0 24 24",
                                role: "img",
                                "aria-hidden": "true",
                                children: [(0, r.jsx)("defs", {
                                    children: (0, r.jsxs)("mask", {
                                        id: "chat-mask-invitation",
                                        children: [(0, r.jsx)("rect", {
                                            width: "24",
                                            height: "24",
                                            fill: "white"
                                        }), (0, r.jsx)("path", {
                                            d: "M 4 2 h 10 a 2 2 0 0 1 2 2 v 6 a 2 2 0 0 1 -2 2 H 8 l -4 4 v -4 H 4 a 2 2 0 0 1 -2 -2 V 4 a 2 2 0 0 1 2 -2 z",
                                            fill: "black",
                                            stroke: "black",
                                            strokeWidth: "1.5",
                                            strokeLinejoin: "round"
                                        })]
                                    })
                                }), (0, r.jsx)("path", {
                                    mask: "url(#chat-mask-invitation)",
                                    fill: "currentColor",
                                    d: "M 10 6 h 10 a 2 2 0 0 1 2 2 v 6 a 2 2 0 0 1 -2 2 H 18 v 4 l -4 -4 H 10 a 2 2 0 0 1 -2 -2 V 8 a 2 2 0 0 1 2 -2 z"
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M 4 2 h 10 a 2 2 0 0 1 2 2 v 6 a 2 2 0 0 1 -2 2 H 8 l -4 4 v -4 H 4 a 2 2 0 0 1 -2 -2 V 4 a 2 2 0 0 1 2 -2 z"
                                })]
                            })
                        })]
                    }), tB && (0, r.jsx)("div", {
                        className: v().galleryOverlay,
                        onClick: e => {
                            e.target === e.currentTarget && nH()
                        },
                        onTouchStart: e => {
                            if (e.target.closest(`.${v().galleryOverlayActions}`)) return;
                            let t = e.touches[0];
                            tH(t.clientY), tK(t.clientX)
                        },
                        onTouchMove: e => {
                            e.target.closest(`.${v().galleryOverlayActions}`) || e.preventDefault()
                        },
                        onTouchEnd: e => {
                            if (e.target.closest(`.${v().galleryOverlayActions}`)) {
                                tH(null), tK(null);
                                return
                            }
                            if (null === tU || null === tG) return;
                            let t = e.changedTouches[0],
                                n = t.clientY,
                                r = t.clientX,
                                i = tU - n;
                            if (Math.abs(i) > Math.abs(tG - r) && Math.abs(i) > 50) {
                                let e = nb.find(e => {
                                    var t;
                                    return "photo_gallery" === ((null === (t = e.theme_segment) || void 0 === t ? void 0 : t.type) || e.type) && e.galleries && Array.isArray(e.galleries)
                                });
                                if (e && e.galleries) {
                                    let t = e.galleries.findIndex(e => er(e.media_url) === tB);
                                    if (t >= 0) {
                                        if (i > 0 && t < e.galleries.length - 1) {
                                            let n = e.galleries[t + 1];
                                            n && n.media_url && (tW(er(n.media_url)), tV(1))
                                        } else if (i < 0 && t > 0) {
                                            let n = e.galleries[t - 1];
                                            n && n.media_url && (tW(er(n.media_url)), tV(1))
                                        }
                                    }
                                }
                            }
                            tH(null), tK(null)
                        },
                        children: (0, r.jsxs)("div", {
                            className: v().galleryOverlayContent,
                            children: [(0, r.jsx)("img", {
                                src: tB,
                                alt: "Gallery",
                                className: v().galleryOverlayImage,
                                style: {
                                    transform: `scale(${tz})`
                                },
                                loading: "eager",
                                decoding: "async"
                            }), (0, r.jsxs)("div", {
                                className: v().galleryOverlayActions,
                                children: [(0, r.jsxs)("div", {
                                    className: v().galleryOverlayZoomGroup,
                                    children: [(0, r.jsx)("button", {
                                        onClick: e => {
                                            e.stopPropagation(), tV(e => Math.max(1, e - .25))
                                        },
                                        onTouchStart: e => {
                                            e.stopPropagation()
                                        },
                                        onTouchEnd: e => {
                                            e.preventDefault(), e.stopPropagation(), tV(e => Math.max(1, e - .25))
                                        },
                                        className: v().galleryOverlayZoom,
                                        "aria-label": "Zoom out",
                                        children: (0, r.jsx)("svg", {
                                            viewBox: "0 0 24 24",
                                            role: "img",
                                            "aria-hidden": "true",
                                            children: (0, r.jsx)("path", {
                                                d: "M5 12h14",
                                                stroke: "white",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            })
                                        })
                                    }), (0, r.jsx)("button", {
                                        onClick: e => {
                                            e.stopPropagation(), tV(e => Math.min(3, e + .25))
                                        },
                                        onTouchStart: e => {
                                            e.stopPropagation()
                                        },
                                        onTouchEnd: e => {
                                            e.preventDefault(), e.stopPropagation(), tV(e => Math.min(3, e + .25))
                                        },
                                        className: v().galleryOverlayZoom,
                                        "aria-label": "Zoom in",
                                        children: (0, r.jsx)("svg", {
                                            viewBox: "0 0 24 24",
                                            role: "img",
                                            "aria-hidden": "true",
                                            children: (0, r.jsx)("path", {
                                                d: "M12 5v14m7-7H5",
                                                stroke: "white",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            })
                                        })
                                    })]
                                }), (0, r.jsx)("button", {
                                    onClick: e => {
                                        e.stopPropagation(), nH()
                                    },
                                    onTouchStart: e => {
                                        e.stopPropagation()
                                    },
                                    onTouchEnd: e => {
                                        e.preventDefault(), e.stopPropagation(), nH()
                                    },
                                    className: v().galleryOverlayClose,
                                    "aria-label": "Close gallery",
                                    children: (0, r.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        role: "img",
                                        "aria-hidden": "true",
                                        children: (0, r.jsx)("path", {
                                            d: "M18 6L6 18M6 6l12 12",
                                            stroke: "white",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        })
                                    })
                                })]
                            })]
                        })
                    }), t$ && tF && tF.length > 0 && tO >= 0 && tO < tF.length && (0, r.jsxs)("div", {
                        className: v().lightbox,
                        onClick: e => {
                            e.target === e.currentTarget && (tD(null), tR([]), tQ(0))
                        },
                        onTouchStart: e => {
                            if (e.touches.length > 1) {
                                tH(null), tK(null);
                                return
                            }
                            let t = e.touches[0];
                            tH(t.clientY), tK(t.clientX)
                        },
                        onTouchMove: e => {
                            e.touches.length > 1 && (tH(null), tK(null)), e.target.closest("button") || e.preventDefault()
                        },
                        onTouchEnd: e => {
                            if (null === tU || null === tG) return;
                            let t = e.changedTouches[0],
                                n = t.clientY,
                                r = t.clientX,
                                i = tU - n;
                            if (Math.abs(i) > Math.abs(tG - r) && Math.abs(i) > 50) {
                                if (i > 0 && tO < tF.length - 1) {
                                    let e = tO + 1,
                                        t = tF[e];
                                    t && t.media_url && (tQ(e), tD(er(t.media_url)), tq(1))
                                } else if (i < 0 && tO > 0) {
                                    let e = tO - 1,
                                        t = tF[e];
                                    t && t.media_url && (tQ(e), tD(er(t.media_url)), tq(1))
                                }
                            }
                            tH(null), tK(null)
                        },
                        onKeyDown: e => {
                            if ("Escape" === e.key && (tD(null), tR([]), tQ(0)), "ArrowLeft" === e.key && tO > 0 && tF[tO - 1]) {
                                let e = tO - 1;
                                tQ(e);
                                let t = tF[e];
                                t && t.media_url && tD(er(t.media_url))
                            }
                            if ("ArrowRight" === e.key && tO < tF.length - 1 && tF[tO + 1]) {
                                let e = tO + 1;
                                tQ(e);
                                let t = tF[e];
                                t && t.media_url && tD(er(t.media_url))
                            }
                        },
                        tabIndex: 0,
                        children: [(0, r.jsx)("button", {
                            className: v().lightboxClose,
                            onPointerDown: e => {
                                e.preventDefault(), e.stopPropagation(), tD(null), tR([]), tQ(0)
                            },
                            "aria-label": "Close lightbox",
                            children: "\xd7"
                        }), (0, r.jsx)("button", {
                            className: `${v().lightboxZoom} ${v().lightboxZoomOut}`,
                            onPointerDown: e => {
                                e.preventDefault(), e.stopPropagation(), tq(e => Math.max(1, e - .25))
                            },
                            "aria-label": "Zoom Out",
                            children: (0, r.jsx)("svg", {
                                viewBox: "0 0 24 24",
                                role: "img",
                                "aria-hidden": "true",
                                children: (0, r.jsx)("path", {
                                    d: "M5 12h14",
                                    stroke: "#333",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            })
                        }), (0, r.jsx)("button", {
                            className: `${v().lightboxZoom} ${v().lightboxZoomIn}`,
                            onPointerDown: e => {
                                e.preventDefault(), e.stopPropagation(), tq(e => Math.min(3, e + .25))
                            },
                            "aria-label": "Zoom In",
                            children: (0, r.jsx)("svg", {
                                viewBox: "0 0 24 24",
                                role: "img",
                                "aria-hidden": "true",
                                children: (0, r.jsx)("path", {
                                    d: "M12 5v14m7-7H5",
                                    stroke: "#333",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            })
                        }), tO > 0 && tF[tO - 1] && (0, r.jsx)("button", {
                            className: v().lightboxPrev,
                            onPointerDown: e => {
                                e.preventDefault(), e.stopPropagation();
                                let t = tO - 1,
                                    n = tF[t];
                                n && n.media_url && (tQ(t), tD(er(n.media_url)), tq(1))
                            },
                            "aria-label": "Previous image",
                            children: "‹"
                        }), (0, r.jsx)("img", {
                            src: t$,
                            alt: "Gallery",
                            className: `${v().lightboxImage} ${tZ>1?v().lightboxImageZoomed:""}`,
                            style: {
                                transform: `scale(${tZ})`,
                                animation: tZ > 1 ? "none" : void 0
                            },
                            onClick: e => e.stopPropagation(),
                            loading: "eager",
                            decoding: "async"
                        }), tO < tF.length - 1 && tF[tO + 1] && (0, r.jsx)("button", {
                            className: v().lightboxNext,
                            onPointerDown: e => {
                                e.preventDefault(), e.stopPropagation();
                                let t = tO + 1,
                                    n = tF[t];
                                n && n.media_url && (tQ(t), tD(er(n.media_url)), tq(1))
                            },
                            "aria-label": "Next image",
                            children: "›"
                        }), (0, r.jsxs)("div", {
                            className: v().lightboxCounter,
                            children: [tO + 1, " / ", tF.length]
                        })]
                    }), (0, r.jsx)(g, {
                        isOpen: ni,
                        onClose: () => no(!1),
                        value: nl,
                        eventName: (null == ep ? void 0 : null === (G = ep.event) || void 0 === G ? void 0 : G.name) || (null == ep ? void 0 : null === (K = ep.invitation) || void 0 === K ? void 0 : K.name) || "Event"
                    }), (0, r.jsx)(L, {
                        isVisible: nv,
                        onClick: () => no(!0),
                        buttonColor: (null == ef ? void 0 : ef.button_color) || (null == ef ? void 0 : ef.primary_color) || "#667eea"
                    }), tY && eF && (0, r.jsx)("div", {
                        className: v().swipeIndicator,
                        style: {
                            pointerEvents: "auto"
                        },
                        onClick: n1,
                        onTouchStart: e => {
                            e.touches.length > 0 && (te.current = {
                                x: e.touches[0].clientX,
                                y: e.touches[0].clientY,
                                time: Date.now()
                            })
                        },
                        onTouchMove: e => {
                            if (!te.current || 0 === e.touches.length) return;
                            let t = te.current.y - e.touches[0].clientY,
                                n = Math.abs(te.current.x - e.touches[0].clientX);
                            t > 30 && t > n && (n1(), te.current = null)
                        },
                        onTouchEnd: () => {
                            te.current = null
                        },
                        children: (0, r.jsxs)("div", {
                            className: v().swipeIndicatorContent,
                            children: [(0, r.jsx)("div", {
                                className: v().swipeIndicatorIcon,
                                children: (0, r.jsxs)("svg", {
                                    viewBox: "0 0 1379 2400",
                                    fill: "currentColor",
                                    fillRule: "evenodd",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [(0, r.jsx)("path", {
                                        fill: "rgb(0,0,0)",
                                        stroke: "rgb(0,0,0)",
                                        "stroke-width": "1",
                                        opacity: "0",
                                        d: "M 0 0 L 1379 0 L 1379 2400 L 0 2400 L 0 0 Z M 541 349 L 521 354 L 506 360 L 497 365 L 475 382 Q 455 399 444 425 L 436 451 L 435 464 L 434 465 L 434 487 Q 437 488 435 494 L 439 513 L 443 524 Q 456 553 479 573 L 478 588 L 477 589 L 476 619 L 475 620 L 474 657 L 473 658 L 473 675 L 472 676 L 472 698 L 471 699 L 471 725 L 470 726 L 470 750 L 469 751 L 469 786 L 468 787 L 468 818 L 467 819 L 467 853 L 466 854 L 466 903 L 465 904 L 465 947 Q 451 931 433 920 L 417 912 L 396 907 L 383 907 Q 373 909 367 914 L 355 929 L 348 951 L 348 994 L 351 1009 L 352 1027 L 354 1035 L 354 1044 L 356 1054 L 356 1062 L 357 1063 L 357 1078 L 358 1079 L 357 1108 L 356 1109 L 356 1128 L 355 1129 L 355 1159 L 354 1160 L 354 1203 L 353 1204 L 353 1244 L 352 1245 L 352 1300 L 351 1301 L 351 1364 L 350 1365 L 350 1425 L 351 1426 L 352 1447 L 354 1454 L 354 1461 L 357 1474 L 357 1479 L 374 1549 L 402 1633 L 434 1711 L 477 1806 L 548 1944 L 607 2047 Q 620 2062 641 2071 L 660 2078 L 692 2084 L 741 2084 L 751 2082 L 759 2082 L 772 2079 L 783 2078 L 788 2076 L 793 2076 L 818 2070 L 846 2062 L 849 2060 L 852 2060 L 892 2046 L 925 2032 L 953 2017 Q 955 2018 954 2015 Q 986 1999 1011 1975 Q 1026 1961 1037 1943 Q 1036 1940 1039 1941 L 1038 1940 L 1040 1939 L 1051 1914 L 1054 1901 L 1054 1891 L 1055 1890 L 1054 1872 L 1049 1853 L 1047 1830 L 1046 1829 L 1046 1785 L 1047 1784 L 1048 1770 L 1051 1756 L 1064 1722 L 1072 1693 L 1081 1646 L 1085 1610 L 1086 1609 L 1090 1560 L 1091 1559 L 1092 1532 L 1093 1531 L 1093 1519 L 1094 1518 L 1094 1503 L 1095 1502 L 1095 1492 L 1096 1491 L 1096 1480 L 1097 1479 L 1097 1464 L 1098 1463 L 1098 1452 L 1099 1451 L 1099 1440 L 1100 1439 L 1100 1422 L 1101 1421 L 1101 1409 L 1102 1408 L 1103 1369 L 1104 1368 L 1104 1347 L 1105 1346 L 1105 1268 L 1104 1267 L 1104 1253 L 1103 1252 L 1102 1232 L 1097 1205 L 1091 1187 L 1075 1157 L 1059 1118 L 1050 1100 Q 1036 1075 1018 1054 Q 1002 1035 979 1024 L 956 1017 L 934 1016 L 923 974 L 912 951 Q 900 932 885 917 Q 882 918 883 916 Q 868 901 846 893 L 827 888 L 809 887 L 808 886 L 788 887 Q 777 857 757 835 Q 744 819 726 808 L 703 798 L 680 794 L 667 794 L 655 796 L 654 764 L 653 763 L 653 746 L 652 745 L 651 705 L 650 704 L 648 643 L 647 642 L 647 618 L 646 617 L 646 600 L 645 599 L 645 581 L 644 580 L 644 571 L 646 570 Q 664 553 676 530 L 684 508 L 687 492 L 687 485 L 688 484 L 687 459 L 679 428 Q 669 404 652 387 L 626 365 L 610 357 L 581 349 L 541 349 Z "
                                    }), (0, r.jsx)("path", {
                                        fill: "rgb(0,0,0)",
                                        stroke: "rgb(0,0,0)",
                                        "stroke-width": "1",
                                        opacity: "0",
                                        d: "M 551.5 375 L 570.5 375 L 596.5 381 Q 619.7 389.8 635 406.5 L 649 425.5 L 657 444.5 L 661 463.5 L 661 486.5 L 660 487.5 L 659 498.5 L 655 511.5 Q 650.3 524.3 642.5 534 L 639 490.5 L 636 477.5 L 631 464 Q 628.3 465.1 629 462.5 Q 621.8 449.2 610.5 440 L 597.5 431 L 589.5 428 L 576.5 425 L 560.5 425 L 545.5 428 L 531.5 434 L 509 451.5 Q 499.3 460.3 494 473.5 L 488 496.5 L 488 503.5 L 485 510.5 L 485 517.5 L 484 518.5 L 482 536.5 L 482.5 538 L 471 521.5 L 464 504.5 L 461 490.5 L 460 469.5 L 461 468.5 L 462 454.5 L 468 435.5 Q 476.9 413.9 493.5 400 Q 505 389.5 520.5 383 L 531.5 379 L 551.5 375 Z "
                                    }), (0, r.jsx)("path", {
                                        fill: "rgb(0,0,0)",
                                        stroke: "rgb(0,0,0)",
                                        "stroke-width": "1",
                                        opacity: "0",
                                        d: "M 562.5 464 Q 583.9 463.1 592 475.5 L 598 486.5 L 600 494.5 L 602 524.5 L 603 525.5 L 603 543.5 L 604 544.5 L 604 559.5 L 605 560.5 L 605 581.5 L 606 582.5 L 606 600.5 L 607 601.5 L 607 619.5 L 608 620.5 L 608 643.5 L 609 644.5 L 609 662.5 L 610 663.5 L 610 680.5 L 611 681.5 L 611 705.5 L 612 706.5 L 612 723.5 L 613 724.5 L 613 746.5 L 614 747.5 L 614 765.5 L 615 766.5 L 615 782.5 L 616 783.5 L 618 841.5 L 619 842.5 L 621 892.5 L 622 893.5 L 623 919.5 L 625 927.5 L 625 939.5 L 626 940.5 L 627 966.5 L 628 967.5 L 628 977.5 L 629 978.5 L 629 988.5 L 630 989.5 L 630 1001.5 L 631 1002.5 L 631 1011.5 L 633 1020.5 L 633 1031.5 L 634 1032.5 L 636 1056.5 L 637 1057.5 L 639 1077.5 L 641 1083.5 L 641 1089.5 L 646 1110.5 L 649.5 1118 L 670.5 1109 L 673.5 1109 Q 677.5 1105.3 684 1105 L 677 1075.5 L 677 1068.5 L 674 1055.5 L 674 1046.5 L 671 1029.5 L 671 1019.5 L 670 1018.5 L 670 1009.5 L 668 999.5 L 668 987.5 L 667 986.5 L 667 975.5 L 666 974.5 L 665 949.5 L 664 948.5 L 664 936.5 L 663 935.5 L 663 920.5 L 662 919.5 L 662 906.5 L 661 905.5 L 661 893.5 L 660 892.5 L 660 874.5 L 659 873.5 L 658 840.5 L 657 834 L 667.5 832 L 677.5 832 L 678.5 833 L 689.5 834 L 704.5 840 Q 718.4 848 728 860.5 Q 741.7 876.8 751 897.5 L 764 930.5 L 764 934.5 L 769 949.5 L 769 954.5 L 771 959.5 L 774 983.5 L 775 984.5 L 777 1006.5 L 778 1007.5 L 778 1017.5 L 780 1025.5 L 780 1035.5 L 781 1036.5 L 781 1044.5 L 783 1053.5 L 783 1065.5 L 784 1066.5 L 784 1074.5 L 786 1084.5 L 786 1096.5 L 787 1097.5 L 787 1106.5 L 788 1112 L 826 1109 Q 824.3 1104.5 825 1096.5 L 824 1095.5 L 824 1082.5 L 823 1081.5 L 823 1073.5 L 821 1063.5 L 821 1052.5 L 820 1051.5 L 820 1042.5 L 819 1041.5 L 819 1032.5 L 818 1031.5 L 815 998.5 L 813 990.5 L 813 982.5 L 812 981.5 L 812 975.5 L 811 974.5 L 807 945.5 L 802 925 L 822.5 927 L 835.5 931 Q 853.9 938.6 866 952.5 Q 878.5 967 886 986.5 L 897 1028.5 L 900 1032.5 L 909 1063.5 L 953 1188 L 990 1175 L 947 1056.5 L 950.5 1056 Q 978.9 1063.6 994 1084.5 L 1012 1111.5 L 1029 1148.5 L 1033 1154.5 L 1032.5 1156 L 1034 1156.5 Q 1031.5 1158 1035 1159.5 L 1051 1195.5 L 1059 1209.5 L 1062 1221.5 L 1062 1226.5 L 1064 1233.5 L 1064 1242.5 L 1065 1243.5 L 1066 1273.5 L 1067 1274.5 L 1067 1333.5 L 1066 1334.5 L 1066 1359.5 L 1065 1360.5 L 1065 1380.5 L 1064 1381.5 L 1064 1401.5 L 1063 1402.5 L 1063 1416.5 L 1062 1417.5 L 1062 1430.5 L 1061 1431.5 L 1061 1446.5 L 1060 1447.5 L 1059 1474.5 L 1058 1475.5 L 1058 1486.5 L 1057 1487.5 L 1057 1497.5 L 1056 1498.5 L 1056 1513.5 L 1055 1514.5 L 1055 1526.5 L 1054 1527.5 L 1054 1539.5 L 1053 1540.5 L 1053 1554.5 L 1051 1565.5 L 1050 1586.5 L 1048 1595.5 L 1048 1605.5 L 1047 1606.5 L 1045 1628.5 L 1043 1634.5 L 1042 1646.5 L 1040 1652.5 L 1037 1672.5 L 1035 1675.5 L 1028 1705.5 L 1019 1727.5 L 1010 1759.5 L 1008 1780.5 L 1007 1781.5 L 1007 1831.5 L 1008 1832.5 L 1009 1850.5 L 1012 1862.5 L 1012 1867.5 L 1015 1874.5 L 1016 1888.5 L 1015 1889.5 L 1014 1900.5 L 1006 1919.5 L 997 1932.5 L 976.5 1954 L 946.5 1976 L 907.5 1997 L 866.5 2013 L 862.5 2016 L 859.5 2016 L 829.5 2027 L 800.5 2035 L 760.5 2043 L 735.5 2045 L 734.5 2046 L 698.5 2046 L 697.5 2045 L 678.5 2043 L 658.5 2037 Q 647 2032.5 639 2024.5 L 608 1971.5 L 566 1893.5 L 565 1889.5 L 551 1865.5 L 504 1770.5 L 461 1675.5 L 437 1614.5 L 437 1611.5 L 432 1600.5 L 431 1594.5 L 421 1567.5 L 421 1564 Q 418 1565.3 419 1561.5 L 415 1551.5 L 401 1501.5 L 401 1496.5 L 398 1488.5 L 398 1483.5 L 393 1462.5 L 393 1455.5 L 392 1454.5 L 391 1442.5 L 390 1441.5 L 390 1432.5 L 389 1431.5 L 389 1419.5 L 388 1418.5 L 388 1380.5 L 389 1379.5 L 390 1258.5 L 391 1257.5 L 391 1213.5 L 392 1212.5 L 393 1135.5 L 394 1134.5 L 394 1112.5 L 395 1111.5 L 395 1098.5 L 396 1097.5 L 396 1070.5 L 395 1069.5 L 393 1038.5 L 392 1037.5 L 390 1012.5 L 388 1003.5 L 388 994.5 L 387 993.5 L 386 956.5 L 388 946 L 401.5 948 L 411.5 952 Q 428.1 960.9 439 975.5 Q 454.7 997.3 463 1026.5 L 463 1088.5 L 462 1089.5 L 462 1154.5 L 461 1155.5 L 461 1226.5 L 460 1227.5 L 460 1241.5 L 459 1242.5 L 458 1260.5 L 453 1287.5 L 450 1295.5 L 448 1306.5 L 441 1324.5 L 441 1327.5 L 434 1343 L 467.5 1360 L 477 1340.5 L 483 1319.5 L 486 1313.5 L 486 1309.5 L 488 1307.5 Q 485.5 1306 489 1304.5 L 497 1262.5 L 497 1252.5 L 499 1241.5 L 499 1224.5 L 500 1223.5 L 501 1078.5 L 502 1077.5 L 502 1027.5 L 503 1024.5 L 502 1023.5 L 502 1013.5 L 503 1012.5 L 503 954.5 L 504 953.5 L 504 910.5 L 505 909.5 L 505 860.5 L 506 859.5 L 506 825.5 L 507 824.5 L 507 793.5 L 508 792.5 L 508 757.5 L 509 756.5 L 509 731.5 L 510 730.5 L 510 700.5 L 511 699.5 L 511 680.5 L 512 679.5 L 513 636.5 L 514 635.5 L 514 621.5 L 515 620.5 L 516 588.5 L 517 587.5 L 517 575.5 L 518 574.5 L 518 563.5 L 519 561.5 L 519 559.5 L 521 530.5 L 522 529.5 L 525 503.5 L 529 488.5 L 534 480 L 537 478.5 Q 536.3 476.3 538.5 477 Q 546.9 466.9 562.5 464 Z "
                                    }), (0, r.jsx)("path", {
                                        fill: "rgb(233,200,100)",
                                        stroke: "rgb(233,200,100)",
                                        "stroke-width": "1",
                                        opacity: "0.9450980392156862",
                                        d: "M 540.5 349 L 580.5 349 L 609.5 357 L 625.5 365 L 652 386.5 Q 668.9 403.6 679 427.5 L 687 458.5 L 688 483.5 L 687 484.5 L 687 491.5 L 684 507.5 L 676 529.5 Q 664.3 553.3 645.5 570 L 644 570.5 L 644 579.5 L 645 580.5 L 645 598.5 L 646 599.5 L 646 616.5 L 647 617.5 L 647 641.5 L 648 642.5 L 650 703.5 L 651 704.5 L 652 744.5 L 653 745.5 L 653 762.5 L 654 763.5 L 655 796 L 666.5 794 L 679.5 794 L 702.5 798 L 725.5 808 Q 743.6 818.9 757 834.5 Q 776.8 857 788 887 L 807.5 886 L 808.5 887 L 826.5 888 L 845.5 893 Q 867.5 901 883 915.5 Q 882.3 917.8 884.5 917 Q 900.2 931.8 912 950.5 L 923 973.5 L 934 1016 L 955.5 1017 L 978.5 1024 Q 1002.3 1034.7 1018 1053.5 Q 1036 1074.5 1050 1099.5 L 1059 1117.5 L 1075 1156.5 L 1091 1186.5 L 1097 1204.5 L 1102 1231.5 L 1103 1251.5 L 1104 1252.5 L 1104 1266.5 L 1105 1267.5 L 1105 1345.5 L 1104 1346.5 L 1104 1367.5 L 1103 1368.5 L 1102 1407.5 L 1101 1408.5 L 1101 1420.5 L 1100 1421.5 L 1100 1438.5 L 1099 1439.5 L 1099 1450.5 L 1098 1451.5 L 1098 1462.5 L 1097 1463.5 L 1097 1478.5 L 1096 1479.5 L 1096 1490.5 L 1095 1491.5 L 1095 1501.5 L 1094 1502.5 L 1094 1517.5 L 1093 1518.5 L 1093 1530.5 L 1092 1531.5 L 1091 1558.5 L 1090 1559.5 L 1086 1608.5 L 1085 1609.5 L 1081 1645.5 L 1072 1692.5 L 1064 1721.5 L 1051 1755.5 L 1048 1769.5 L 1047 1783.5 L 1046 1784.5 L 1046 1828.5 L 1047 1829.5 L 1049 1852.5 L 1054 1871.5 L 1055 1889.5 L 1054 1890.5 L 1054 1900.5 L 1051 1913.5 L 1040 1939 L 1038 1939.5 L 1038.5 1941 Q 1036.3 1940.3 1037 1942.5 Q 1025.8 1960.8 1010.5 1975 Q 985.6 1998.9 954 2015 Q 955.1 2017.7 952.5 2017 L 924.5 2032 L 891.5 2046 L 851.5 2060 L 848.5 2060 L 845.5 2062 L 817.5 2070 L 792.5 2076 L 787.5 2076 L 782.5 2078 L 771.5 2079 L 758.5 2082 L 750.5 2082 L 740.5 2084 L 691.5 2084 L 659.5 2078 L 640.5 2071 Q 620.4 2062.1 607 2046.5 L 548 1943.5 L 477 1805.5 L 434 1710.5 L 402 1632.5 L 374 1548.5 L 357 1478.5 L 357 1473.5 L 354 1460.5 L 354 1453.5 L 352 1446.5 L 351 1425.5 L 350 1424.5 L 350 1364.5 L 351 1363.5 L 351 1300.5 L 352 1299.5 L 352 1244.5 L 353 1243.5 L 353 1203.5 L 354 1202.5 L 354 1159.5 L 355 1158.5 L 355 1128.5 L 356 1127.5 L 356 1108.5 L 357 1107.5 L 358 1078.5 L 357 1077.5 L 357 1062.5 L 356 1061.5 L 356 1053.5 L 354 1043.5 L 354 1034.5 L 352 1026.5 L 351 1008.5 L 348 993.5 L 348 950.5 L 355 928.5 L 366.5 914 Q 372.9 908.9 382.5 907 L 395.5 907 L 416.5 912 L 432.5 920 Q 451.2 930.8 464.5 947 L 465 903.5 L 466 902.5 L 466 853.5 L 467 852.5 L 467 818.5 L 468 817.5 L 468 786.5 L 469 785.5 L 469 750.5 L 470 749.5 L 470 725.5 L 471 724.5 L 471 698.5 L 472 697.5 L 472 675.5 L 473 674.5 L 473 657.5 L 474 656.5 L 475 619.5 L 476 618.5 L 477 588.5 L 478 587.5 L 479 572.5 Q 455.7 553.3 443 523.5 L 439 512.5 L 435 493.5 Q 436.5 488 434 486.5 L 434 464.5 L 435 463.5 L 436 450.5 L 444 424.5 Q 455.2 399.2 474.5 382 L 496.5 365 L 505.5 360 L 520.5 354 L 540.5 349 Z M 552 375 L 532 379 L 521 383 Q 505 390 494 400 Q 477 414 468 436 L 462 455 L 461 469 L 460 470 L 461 491 L 464 505 L 471 522 L 482 537 L 484 526 L 485 511 L 488 504 L 488 497 L 494 474 Q 499 460 509 452 L 532 434 L 546 428 L 561 425 L 577 425 L 590 428 L 598 431 L 611 440 Q 622 449 629 463 Q 628 465 631 464 L 636 478 L 639 491 L 643 534 Q 650 524 655 512 L 659 499 L 660 488 L 661 487 L 661 464 L 657 445 L 649 426 L 635 407 Q 620 390 597 381 L 571 375 L 552 375 Z M 563 464 Q 547 467 539 477 Q 536 476 537 479 L 534 480 L 529 489 L 525 504 L 522 530 L 521 531 L 519 560 L 519 562 L 518 564 L 518 575 L 517 576 L 517 588 L 516 589 L 515 621 L 514 622 L 514 636 L 513 637 L 512 680 L 511 681 L 511 700 L 510 701 L 510 731 L 509 732 L 509 757 L 508 758 L 508 793 L 507 794 L 507 825 L 506 826 L 506 860 L 505 861 L 505 910 L 504 911 L 504 954 L 503 955 L 503 1013 L 502 1014 L 502 1024 L 503 1025 L 502 1028 L 502 1078 L 501 1079 L 500 1224 L 499 1225 L 499 1242 L 497 1253 L 497 1263 L 489 1305 Q 485 1306 488 1308 L 486 1310 L 486 1314 L 483 1320 L 477 1341 L 468 1360 L 434 1343 L 441 1328 L 441 1325 L 448 1307 L 450 1296 L 453 1288 L 458 1261 L 459 1243 L 460 1242 L 460 1228 L 461 1227 L 461 1156 L 462 1155 L 462 1090 L 463 1089 L 463 1027 Q 455 997 439 976 Q 428 961 412 952 L 402 948 L 388 946 L 386 957 L 387 994 L 388 995 L 388 1004 L 390 1013 L 392 1038 L 393 1039 L 395 1070 L 396 1071 L 396 1098 L 395 1099 L 395 1112 L 394 1113 L 394 1135 L 393 1136 L 392 1213 L 391 1214 L 391 1258 L 390 1259 L 389 1380 L 388 1381 L 388 1419 L 389 1420 L 389 1432 L 390 1433 L 390 1442 L 391 1443 L 392 1455 L 393 1456 L 393 1463 L 398 1484 L 398 1489 L 401 1497 L 401 1502 L 415 1552 L 419 1562 Q 418 1565 421 1564 L 421 1568 L 431 1595 L 432 1601 L 437 1612 L 437 1615 L 461 1676 L 504 1771 L 551 1866 L 565 1890 L 566 1894 L 608 1972 L 639 2025 Q 647 2032 659 2037 L 679 2043 L 698 2045 L 699 2046 L 735 2046 L 736 2045 L 761 2043 L 801 2035 L 830 2027 L 860 2016 L 863 2016 L 867 2013 L 908 1997 L 947 1976 L 977 1954 L 997 1933 L 1006 1920 L 1014 1901 L 1015 1890 L 1016 1889 L 1015 1875 L 1012 1868 L 1012 1863 L 1009 1851 L 1008 1833 L 1007 1832 L 1007 1782 L 1008 1781 L 1010 1760 L 1019 1728 L 1028 1706 L 1035 1676 L 1037 1673 L 1040 1653 L 1042 1647 L 1043 1635 L 1045 1629 L 1047 1607 L 1048 1606 L 1048 1596 L 1050 1587 L 1051 1566 L 1053 1555 L 1053 1541 L 1054 1540 L 1054 1528 L 1055 1527 L 1055 1515 L 1056 1514 L 1056 1499 L 1057 1498 L 1057 1488 L 1058 1487 L 1058 1476 L 1059 1475 L 1060 1448 L 1061 1447 L 1061 1432 L 1062 1431 L 1062 1418 L 1063 1417 L 1063 1403 L 1064 1402 L 1064 1382 L 1065 1381 L 1065 1361 L 1066 1360 L 1066 1335 L 1067 1334 L 1067 1275 L 1066 1274 L 1065 1244 L 1064 1243 L 1064 1234 L 1062 1227 L 1062 1222 L 1059 1210 L 1051 1196 L 1035 1160 Q 1031 1158 1034 1157 L 1033 1156 L 1033 1155 L 1029 1149 L 1012 1112 L 994 1085 Q 979 1064 951 1056 L 947 1057 L 990 1175 L 953 1188 L 909 1064 L 900 1033 L 897 1029 L 886 987 Q 879 967 866 953 Q 854 939 836 931 L 823 927 L 802 925 L 807 946 L 811 975 L 812 976 L 812 982 L 813 983 L 813 991 L 815 999 L 818 1032 L 819 1033 L 819 1042 L 820 1043 L 820 1052 L 821 1053 L 821 1064 L 823 1074 L 823 1082 L 824 1083 L 824 1096 L 825 1097 Q 824 1105 826 1109 L 788 1112 L 787 1107 L 787 1098 L 786 1097 L 786 1085 L 784 1075 L 784 1067 L 783 1066 L 783 1054 L 781 1045 L 781 1037 L 780 1036 L 780 1026 L 778 1018 L 778 1008 L 777 1007 L 775 985 L 774 984 L 771 960 L 769 955 L 769 950 L 764 935 L 764 931 L 751 898 Q 742 877 728 861 Q 718 848 705 840 L 690 834 L 679 833 L 678 832 L 668 832 L 657 834 L 658 841 L 659 874 L 660 875 L 660 893 L 661 894 L 661 906 L 662 907 L 662 920 L 663 921 L 663 936 L 664 937 L 664 949 L 665 950 L 666 975 L 667 976 L 667 987 L 668 988 L 668 1000 L 670 1010 L 670 1019 L 671 1020 L 671 1030 L 674 1047 L 674 1056 L 677 1069 L 677 1076 L 684 1105 Q 678 1105 674 1109 L 671 1109 L 650 1118 L 646 1111 L 641 1090 L 641 1084 L 639 1078 L 637 1058 L 636 1057 L 634 1033 L 633 1032 L 633 1021 L 631 1012 L 631 1003 L 630 1002 L 630 990 L 629 989 L 629 979 L 628 978 L 628 968 L 627 967 L 626 941 L 625 940 L 625 928 L 623 920 L 622 894 L 621 893 L 619 843 L 618 842 L 616 784 L 615 783 L 615 767 L 614 766 L 614 748 L 613 747 L 613 725 L 612 724 L 612 707 L 611 706 L 611 682 L 610 681 L 610 664 L 609 663 L 609 645 L 608 644 L 608 621 L 607 620 L 607 602 L 606 601 L 606 583 L 605 582 L 605 561 L 604 560 L 604 545 L 603 544 L 603 526 L 602 525 L 600 495 L 598 487 L 592 476 Q 584 463 563 464 Z "
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: v().swipeIndicatorText,
                                children: [(0, r.jsx)("span", {
                                    children: "អូសឡើងលើ"
                                }), (0, r.jsx)("span", {
                                    children: "SWIPE UP"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        3480: function(e) {
            e.exports = {
                eventContainer: "EventPage_eventContainer__egMCr",
                backgroundVideo: "EventPage_backgroundVideo__X6Ita",
                activeVideo: "EventPage_activeVideo__cw_rr",
                videoContainer: "EventPage_videoContainer__C9jiJ",
                contentWrapper: "EventPage_contentWrapper__fMYIx",
                loading: "EventPage_loading__iAzpu",
                languageTriggerIcon: "EventPage_languageTriggerIcon__6ZvTW",
                languageTriggerText: "EventPage_languageTriggerText__E8MpA",
                languagePopupMenu: "EventPage_languagePopupMenu__S2pwi",
                languagePopupTitle: "EventPage_languagePopupTitle__1ASHZ",
                languagePopupOption: "EventPage_languagePopupOption__OuZQS",
                languagePopupOptionActive: "EventPage_languagePopupOptionActive__eZ_XI",
                languagePopupLabel: "EventPage_languagePopupLabel__725R9",
                languagePopupFlag: "EventPage_languagePopupFlag__cV697",
                topControls: "EventPage_topControls__LGtol",
                muteButton: "EventPage_muteButton__9itCr",
                videoContainerDarkModeFade: "EventPage_videoContainerDarkModeFade__zReeK",
                lcpPosterImg: "EventPage_lcpPosterImg__znpiV",
                thumbnailCaptureVideo: "EventPage_thumbnailCaptureVideo__DW32r",
                firstVideoLoading: "EventPage_firstVideoLoading__GLOzr",
                firstVideoLoadingIcon: "EventPage_firstVideoLoadingIcon__ZEi1O",
                firstVideoLoadingPulse: "EventPage_firstVideoLoadingPulse__hLzCl",
                video1Hidden: "EventPage_video1Hidden__X7cYu",
                "android-device": "EventPage_android-device__IrMpW",
                videoSwitchButton: "EventPage_videoSwitchButton__yjIw2",
                videoIndicator: "EventPage_videoIndicator__BzalM",
                videoSwitchIcon: "EventPage_videoSwitchIcon__xjjMm",
                coverPage: "EventPage_coverPage__nNZXT",
                hidden: "EventPage_hidden__pa5NU",
                coverPageFadeOut: "EventPage_coverPageFadeOut__GYL6g",
                coverContent: "EventPage_coverContent__cSsqk",
                invitationNameContainer: "EventPage_invitationNameContainer__JiOf1",
                invitationName: "EventPage_invitationName__FD6zm",
                decorativeLine: "EventPage_decorativeLine__h7Hv_",
                lineTrack: "EventPage_lineTrack__H06A8",
                lineMarker: "EventPage_lineMarker__mu4n9",
                decorativeLineImage: "EventPage_decorativeLineImage__TiIwR",
                openInvitationButton: "EventPage_openInvitationButton__Zwf0y",
                panhvornRithisaccMobileFix: "EventPage_panhvornRithisaccMobileFix__94Kxe",
                buttonImage: "EventPage_buttonImage__ee7II",
                zoomInOut: "EventPage_zoomInOut__7rsgY",
                buttonTextKhmer: "EventPage_buttonTextKhmer__KhvcS",
                buttonTextEnglish: "EventPage_buttonTextEnglish__PwWSU",
                contentWrapperFadeIn: "EventPage_contentWrapperFadeIn__5tvpH",
                contentWrapperHidden: "EventPage_contentWrapperHidden__6DwA0",
                segment: "EventPage_segment__uLlZH",
                titleContainer: "EventPage_titleContainer__LZ90f",
                khmerText: "EventPage_khmerText__peESK",
                galleryItem: "EventPage_galleryItem__tImxV",
                greetingSection: "EventPage_greetingSection__52otY",
                greetingForm: "EventPage_greetingForm___GL6P",
                greetingInput: "EventPage_greetingInput__aEPsJ",
                greetingTextarea: "EventPage_greetingTextarea__rq77I",
                greetingSubmitButton: "EventPage_greetingSubmitButton___DWgh",
                greetingButtonImage: "EventPage_greetingButtonImage__J72Rh",
                greetingButtonKhmer: "EventPage_greetingButtonKhmer__ZjkZZ",
                greetingButtonEnglish: "EventPage_greetingButtonEnglish__hmEmI",
                greetingSuccessMessage: "EventPage_greetingSuccessMessage__uYEr1",
                greetingErrorMessage: "EventPage_greetingErrorMessage__7tiDO",
                greetingImageUploadContainer: "EventPage_greetingImageUploadContainer__Kbytn",
                greetingImageUploadButton: "EventPage_greetingImageUploadButton__C6AkZ",
                greetingImagePreviewGrid: "EventPage_greetingImagePreviewGrid__241_4",
                greetingImagePreviewItem: "EventPage_greetingImagePreviewItem__J8d76",
                greetingImageRemoveButton: "EventPage_greetingImageRemoveButton__WAYtd",
                greetingImagePrivacyContainer: "EventPage_greetingImagePrivacyContainer__Jh40R",
                greetingImagePrivacyLabelTitle: "EventPage_greetingImagePrivacyLabelTitle__Qq0hy",
                greetingImagePrivacyOptions: "EventPage_greetingImagePrivacyOptions__T9Mr_",
                greetingImagePrivacyOption: "EventPage_greetingImagePrivacyOption__bcFNz",
                greetingImagePrivacyOptionActive: "EventPage_greetingImagePrivacyOptionActive__MW797",
                greetingImagePrivacyRadio: "EventPage_greetingImagePrivacyRadio__2LhH3",
                greetingImagePrivacyNoticePrivate: "EventPage_greetingImagePrivacyNoticePrivate__r0kJ0",
                greetingImagePrivacyNoticePublic: "EventPage_greetingImagePrivacyNoticePublic__Oa3OL",
                greetingMessageImages: "EventPage_greetingMessageImages__6VC4I",
                greetingMessagesList: "EventPage_greetingMessagesList__A9CiL",
                greetingMessageCard: "EventPage_greetingMessageCard__4Rpus",
                greetingMessageSender: "EventPage_greetingMessageSender__ZOn84",
                greetingMessageLine: "EventPage_greetingMessageLine__wWHkR",
                greetingMessageContent: "EventPage_greetingMessageContent__XEIoU",
                greetingMessageTimestamp: "EventPage_greetingMessageTimestamp___laWv",
                greetingMessagesLoading: "EventPage_greetingMessagesLoading__H9T3y",
                greetingMessagesEmpty: "EventPage_greetingMessagesEmpty__2YP0B",
                countdownSection: "EventPage_countdownSection___oreu",
                countdownImageContainer: "EventPage_countdownImageContainer__et1a9",
                countdownImage: "EventPage_countdownImage__PKhMg",
                countdownOverlay: "EventPage_countdownOverlay__2BX_k",
                countdownTimer: "EventPage_countdownTimer__i9hZB",
                timeDisplay: "EventPage_timeDisplay___tH42",
                timeRow: "EventPage_timeRow__3vgtv",
                timeLabel: "EventPage_timeLabel__VkzDH",
                timeValue: "EventPage_timeValue__Tr1hI",
                countdownNumbers: "EventPage_countdownNumbers__C7gbb",
                countdownItem: "EventPage_countdownItem__nIwb6",
                countdownNumber: "EventPage_countdownNumber__ecMCz",
                countdownLabel: "EventPage_countdownLabel__LHD1T",
                countdownLabelKhmer: "EventPage_countdownLabelKhmer__qGFKq",
                countdownSeparator: "EventPage_countdownSeparator__LtsiU",
                countdownItemNoLabel: "EventPage_countdownItemNoLabel__T1oFM",
                countdownNumberModern: "EventPage_countdownNumberModern__gcymd",
                countdownNumberClassic: "EventPage_countdownNumberClassic__pAdrR",
                countdownSeparatorNoLabel: "EventPage_countdownSeparatorNoLabel__Ur0Xj",
                countdownTimerStandalone: "EventPage_countdownTimerStandalone__ASzZt",
                countdownModernWrapper: "EventPage_countdownModernWrapper__UQnnF",
                countdownTimerModernCentered: "EventPage_countdownTimerModernCentered__rh4wU",
                countdownTimerModern: "EventPage_countdownTimerModern__OCl_S",
                countdownTimerWithCustomBg: "EventPage_countdownTimerWithCustomBg__hpKEJ",
                countdownBoxBgOverlay: "EventPage_countdownBoxBgOverlay__zsn_L",
                countdownItemModern: "EventPage_countdownItemModern__Omhr5",
                countdownLabelKhmerModern: "EventPage_countdownLabelKhmerModern__MwX1V",
                countdownLabelModern: "EventPage_countdownLabelModern__on9df",
                countdownSeparatorModern: "EventPage_countdownSeparatorModern__8QNrf",
                countdownTimerClassic: "EventPage_countdownTimerClassic__J4g5_",
                countdownItemClassic: "EventPage_countdownItemClassic__pIbT_",
                countdownLabelKhmerClassic: "EventPage_countdownLabelKhmerClassic__wBGal",
                countdownLabelClassic: "EventPage_countdownLabelClassic__xXe8t",
                countdownSeparatorClassic: "EventPage_countdownSeparatorClassic__uTHkf",
                eventStartedMessage: "EventPage_eventStartedMessage__6qvEn",
                informationSection: "EventPage_informationSection__dKjTH",
                gallerySection: "EventPage_gallerySection__yAypO",
                gallerySectionTemplate2: "EventPage_gallerySectionTemplate2__aT0qs",
                galleryHero: "EventPage_galleryHero__9WjIQ",
                galleryMasonry: "EventPage_galleryMasonry__uZLO0",
                galleryItemVisible: "EventPage_galleryItemVisible__7BxEc",
                fadeInBottom: "EventPage_fadeInBottom__b_nfC",
                galleryTemplate1: "EventPage_galleryTemplate1__pYOJy",
                galleryTemplate2Wrapper: "EventPage_galleryTemplate2Wrapper__2dkSJ",
                galleryTemplate2BorderLeft: "EventPage_galleryTemplate2BorderLeft__zHdTG",
                galleryTemplate2BorderRight: "EventPage_galleryTemplate2BorderRight__ookxX",
                galleryTemplate2Frame: "EventPage_galleryTemplate2Frame__6Qm9B",
                galleryTemplate2: "EventPage_galleryTemplate2__pN0Uw",
                galleryTemplate3: "EventPage_galleryTemplate3__Yp_Tz",
                galleryTemplate4: "EventPage_galleryTemplate4___2a0z",
                galleryTemplate5: "EventPage_galleryTemplate5__dsD8n",
                galleryTemplate6: "EventPage_galleryTemplate6__hqyG_",
                lightbox: "EventPage_lightbox__TYiUd",
                lightboxFadeIn: "EventPage_lightboxFadeIn__NxaRb",
                lightboxImage: "EventPage_lightboxImage__R7mPG",
                lightboxImagePop: "EventPage_lightboxImagePop__rlol_",
                lightboxClose: "EventPage_lightboxClose__9ia8u",
                lightboxPrev: "EventPage_lightboxPrev__IRuHR",
                lightboxNext: "EventPage_lightboxNext__dKcFG",
                lightboxCounter: "EventPage_lightboxCounter__fzDcb",
                floatingAnchorIcons: "EventPage_floatingAnchorIcons__mVxFC",
                floatingAnchorIcon: "EventPage_floatingAnchorIcon__fm1Pl",
                galleryItemFull: "EventPage_galleryItemFull__Q00gO",
                galleryItemHalf: "EventPage_galleryItemHalf__lg6z8",
                lightboxZoom: "EventPage_lightboxZoom__lWa1T",
                lightboxZoomOut: "EventPage_lightboxZoomOut___TrlL",
                lightboxZoomIn: "EventPage_lightboxZoomIn__e0eTW",
                lightboxImageZoomed: "EventPage_lightboxImageZoomed__MNQXd",
                galleryOverlay: "EventPage_galleryOverlay__rFVDm",
                overlayFade: "EventPage_overlayFade__d4Chg",
                galleryOverlayContent: "EventPage_galleryOverlayContent__e8quy",
                contentPop: "EventPage_contentPop__BjlLG",
                galleryOverlayImage: "EventPage_galleryOverlayImage__li41K",
                galleryOverlayActions: "EventPage_galleryOverlayActions__kNwhy",
                galleryOverlayZoomGroup: "EventPage_galleryOverlayZoomGroup__1DO8S",
                galleryOverlayZoom: "EventPage_galleryOverlayZoom____UA_",
                galleryOverlayClose: "EventPage_galleryOverlayClose__QE2HR",
                galleryOverlayGradient: "EventPage_galleryOverlayGradient__ZZ3Tw",
                swipeIndicator: "EventPage_swipeIndicator__haLES",
                swipeBlurFadeIn: "EventPage_swipeBlurFadeIn__9DJbF",
                swipeIndicatorContent: "EventPage_swipeIndicatorContent__lg1IC",
                swipeIndicatorFadeIn: "EventPage_swipeIndicatorFadeIn__RB5ke",
                swipeIndicatorIcon: "EventPage_swipeIndicatorIcon__wZnqr",
                swipeHandGesture: "EventPage_swipeHandGesture__Lzpif",
                swipeIndicatorText: "EventPage_swipeIndicatorText__gcMS4",
                agendaSection: "EventPage_agendaSection__7lKEz",
                mapSection: "EventPage_mapSection__8lwcY",
                mapButton: "EventPage_mapButton__pA7yT",
                mapButtonImage: "EventPage_mapButtonImage__g3w6d",
                youtubeSection: "EventPage_youtubeSection__LOphq",
                youtubeDescription: "EventPage_youtubeDescription__IIXfh",
                segmentReveal: "EventPage_segmentReveal__TAtWX",
                segmentVisible: "EventPage_segmentVisible__drWVD",
                videoSegmentSection: "EventPage_videoSegmentSection__KdUrF",
                videoSegmentPlayer: "EventPage_videoSegmentPlayer__fhTps",
                youtubeEmbedFrame: "EventPage_youtubeEmbedFrame__wmbkd",
                youtubeEmbedWrapper: "EventPage_youtubeEmbedWrapper__GY9lQ",
                youtubeEmbedLandscape: "EventPage_youtubeEmbedLandscape__anIhd",
                youtubeEmbedPortrait: "EventPage_youtubeEmbedPortrait__wApoX",
                rsvpSection: "EventPage_rsvpSection__BRmLE",
                rsvpIntro: "EventPage_rsvpIntro__8835i",
                rsvpIntroText: "EventPage_rsvpIntroText__7bDlQ",
                rsvpForm: "EventPage_rsvpForm__AgDC2",
                rsvpField: "EventPage_rsvpField__BJYU5",
                rsvpLabel: "EventPage_rsvpLabel__qDWj3",
                rsvpInput: "EventPage_rsvpInput__1uEq3",
                rsvpSelect: "EventPage_rsvpSelect__ximT1",
                rsvpTextarea: "EventPage_rsvpTextarea__XE_wJ",
                rsvpSubmitButton: "EventPage_rsvpSubmitButton__vopfh",
                rsvpSuccessMessage: "EventPage_rsvpSuccessMessage__QJw9j",
                rsvpErrorMessage: "EventPage_rsvpErrorMessage___51h7",
                bankSection: "EventPage_bankSection___pG5N",
                thankYouSection: "EventPage_thankYouSection__0HJWt",
                footerSection: "EventPage_footerSection__hREaO",
                genericSection: "EventPage_genericSection__34IGN",
                saveTheDateWrapper: "EventPage_saveTheDateWrapper__Zfu_l",
                mobileView: "EventPage_mobileView__6ntlY",
                video4Background: "EventPage_video4Background__g6R3c",
                noFadeVideo: "EventPage_noFadeVideo__KOoap",
                defaultThemeVideoContainer: "EventPage_defaultThemeVideoContainer__Rqkb7",
                defaultThemeCoverPage: "EventPage_defaultThemeCoverPage__nohry",
                modernThemeVideoContainer: "EventPage_modernThemeVideoContainer__Qke74",
                hoverLift: "EventPage_hoverLift__BQJN4",
                fadeInUp: "EventPage_fadeInUp__Q_5y9"
            }
        }
    },
    function(e) {
        e.O(0, [189, 241, 971, 117, 744], function() {
            return e(e.s = 3855)
        }), _N_E = e.O()
    }
]);