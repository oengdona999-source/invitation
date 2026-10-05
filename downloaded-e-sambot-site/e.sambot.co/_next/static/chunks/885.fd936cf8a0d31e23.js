(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [885], {
        4885: function(e, o, n) {
            "use strict";
            n.r(o), n.d(o, {
                default: function() {
                    return a
                }
            });
            var l = n(7437),
                t = n(2265),
                d = n(5819),
                r = n(7637),
                s = n.n(r);

            function a(e) {
                let {
                    isOpen: o,
                    onClose: n,
                    value: r,
                    eventName: a
                } = e, [i, c] = (0, t.useState)(!1), u = (0, t.useRef)(null);
                (0, t.useEffect)(() => (o ? (c(!0), document.body.style.overflow = "hidden", u.current && r && d.toCanvas(u.current, r, {
                    errorCorrectionLevel: "H",
                    margin: 1,
                    width: 220,
                    color: {
                        dark: "#000000",
                        light: "#ffffff"
                    }
                }).catch(e => console.error("Error generating QR code:", e))) : document.body.style.overflow = "unset", () => {
                    document.body.style.overflow = "unset"
                }), [o, r]);
                let _ = () => {
                    c(!1), setTimeout(n, 300)
                };
                return o || i ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: `${s().overlay} ${i?s().overlayVisible:""}`,
                        onClick: _
                    }), (0, l.jsxs)("div", {
                        className: `${s().modal} ${i?s().modalVisible:""}`,
                        children: [(0, l.jsx)("button", {
                            className: s().closeButton,
                            onClick: _,
                            "aria-label": "Close modal",
                            children: (0, l.jsxs)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [(0, l.jsx)("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }), (0, l.jsx)("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: s().content,
                            children: [(0, l.jsxs)("div", {
                                className: s().header,
                                children: [(0, l.jsx)("h2", {
                                    children: "ស្កេនលេខសម្គាល់"
                                }), (0, l.jsx)("p", {
                                    children: "Scan QR Code"
                                })]
                            }), (0, l.jsx)("div", {
                                className: s().qrCodeContainer,
                                children: (0, l.jsx)("canvas", {
                                    ref: u,
                                    style: {
                                        display: "block",
                                        width: "220px",
                                        height: "220px"
                                    }
                                })
                            }), (0, l.jsxs)("div", {
                                className: s().footer,
                                children: [(0, l.jsxs)("button", {
                                    className: s().downloadButton,
                                    onClick: () => {
                                        if (u.current) {
                                            let e = document.createElement("a");
                                            e.href = u.current.toDataURL("image/png"), e.download = `qrcode-${a||"event"}.png`, e.click()
                                        }
                                    },
                                    children: [(0, l.jsxs)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [(0, l.jsx)("path", {
                                            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                        }), (0, l.jsx)("polyline", {
                                            points: "7 10 12 15 17 10"
                                        }), (0, l.jsx)("line", {
                                            x1: "12",
                                            y1: "15",
                                            x2: "12",
                                            y2: "3"
                                        })]
                                    }), "ទាញយក QR Code"]
                                }), (0, l.jsx)("button", {
                                    className: s().closeButtonSecondary,
                                    onClick: _,
                                    children: "បិទ"
                                })]
                            })]
                        })]
                    })]
                }) : null
            }
        },
        7637: function(e) {
            e.exports = {
                overlay: "QRCodeModal_overlay__3nlvj",
                overlayVisible: "QRCodeModal_overlayVisible__A90aE",
                modal: "QRCodeModal_modal__sI9gS",
                modalVisible: "QRCodeModal_modalVisible__KMBo1",
                closeButton: "QRCodeModal_closeButton__JEMyr",
                content: "QRCodeModal_content__VNssO",
                header: "QRCodeModal_header__Ai30g",
                qrCodeContainer: "QRCodeModal_qrCodeContainer__8Y1gN",
                fadeInScale: "QRCodeModal_fadeInScale__HX8Fd",
                footer: "QRCodeModal_footer__Ma9Fj",
                downloadButton: "QRCodeModal_downloadButton__1qON0",
                closeButtonSecondary: "QRCodeModal_closeButtonSecondary__NpNej"
            }
        }
    }
]);