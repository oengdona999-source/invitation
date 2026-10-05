"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [464], {
        8464: function(e, l, a) {
            a.r(l), a.d(l, {
                default: function() {
                    return n
                }
            });
            var r = a(7437);
            a(2265);
            var t = a(3480),
                s = a.n(t);

            function n(e) {
                let {
                    galleries: l,
                    getMediaUrl: a,
                    onImageClick: t
                } = e;
                return (0, r.jsxs)("div", {
                    className: s().galleryTemplate2Wrapper,
                    children: [(0, r.jsx)("div", {
                        className: s().galleryTemplate2BorderLeft
                    }), (0, r.jsx)("div", {
                        className: s().galleryTemplate2Frame,
                        children: (0, r.jsx)("div", {
                            className: `${s().galleryMasonry} ${s().galleryTemplate2}`,
                            children: l.map((e, l) => {
                                if (0 === l) return (0, r.jsx)("div", {
                                    className: s().galleryItem,
                                    style: {
                                        "--gallery-index": l,
                                        gridColumn: "span 6",
                                        aspectRatio: "16 / 9"
                                    },
                                    onClick: () => t(e, l),
                                    children: (0, r.jsx)("img", {
                                        src: a(e.media_url),
                                        alt: `Gallery ${l+1}`,
                                        loading: "eager",
                                        onLoad: e => {
                                            let l = e.currentTarget;
                                            l.naturalWidth / l.naturalHeight < 1 && (l.style.objectPosition = "top center")
                                        }
                                    })
                                }, l);
                                let n = Math.floor((l - 1) / 2) + 2,
                                    i = 2 === n || 3 === n,
                                    c = n >= 4;
                                return (0, r.jsx)("div", {
                                    className: s().galleryItem,
                                    style: {
                                        "--gallery-index": l,
                                        gridColumn: "span 3",
                                        aspectRatio: i ? "16 / 9" : "3 / 4"
                                    },
                                    onClick: () => t(e, l),
                                    children: (0, r.jsx)("img", {
                                        src: a(e.media_url),
                                        alt: `Gallery ${l+1}`,
                                        loading: l < 4 ? "eager" : "lazy",
                                        onLoad: e => {
                                            let l = e.currentTarget,
                                                a = l.naturalWidth / l.naturalHeight < 1;
                                            i && a ? l.style.objectPosition = "top center" : c && !a && (l.style.objectPosition = "center")
                                        }
                                    })
                                }, l)
                            })
                        })
                    }), (0, r.jsx)("div", {
                        className: s().galleryTemplate2BorderRight
                    })]
                })
            }
        }
    }
]);