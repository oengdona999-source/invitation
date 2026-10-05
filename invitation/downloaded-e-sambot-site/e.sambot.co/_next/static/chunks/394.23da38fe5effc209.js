(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [394], {
        7394: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n(7437),
                o = n(3808),
                l = n.n(o);

            function r(t) {
                let {
                    isVisible: e,
                    onClick: n,
                    buttonColor: o
                } = t;
                if (!e) return null;
                let r = o ? {
                    background: o,
                    boxShadow: `0 4px 20px ${o}80`
                } : void 0;
                return (0, i.jsx)("button", {
                    className: l().floatingButton,
                    onClick: n,
                    "aria-label": "Show QR Code",
                    title: "ស្កេនលេខសម្គាល់",
                    style: r,
                    children: (0, i.jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [(0, i.jsx)("rect", {
                            x: "3",
                            y: "3",
                            width: "7",
                            height: "7"
                        }), (0, i.jsx)("rect", {
                            x: "14",
                            y: "3",
                            width: "7",
                            height: "7"
                        }), (0, i.jsx)("rect", {
                            x: "14",
                            y: "14",
                            width: "7",
                            height: "7"
                        }), (0, i.jsx)("rect", {
                            x: "3",
                            y: "14",
                            width: "7",
                            height: "7"
                        }), (0, i.jsx)("line", {
                            x1: "11",
                            y1: "3",
                            x2: "11",
                            y2: "11"
                        }), (0, i.jsx)("line", {
                            x1: "3",
                            y1: "11",
                            x2: "11",
                            y2: "11"
                        }), (0, i.jsx)("line", {
                            x1: "14",
                            y1: "11",
                            x2: "21",
                            y2: "11"
                        }), (0, i.jsx)("line", {
                            x1: "11",
                            y1: "14",
                            x2: "11",
                            y2: "21"
                        })]
                    })
                })
            }
        },
        3808: function(t) {
            t.exports = {
                floatingButton: "QRCodeFloatingButton_floatingButton__8RjjL",
                slideInUp: "QRCodeFloatingButton_slideInUp___YQaW"
            }
        }
    }
]);