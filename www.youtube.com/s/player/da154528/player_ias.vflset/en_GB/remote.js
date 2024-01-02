(function(g) {
    var window = this;
    'use strict';
    var $7 = function(a) {
            g.xo(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.gb()).toString(36));
            return a
        },
        a8 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Hga(a.B, b, c)
        },
        ixb = function(a) {
            if (a instanceof g.Xs) return a;
            if ("function" == typeof a.Ek) return a.Ek(!1);
            if (g.Ya(a)) {
                var b = 0,
                    c = new g.Xs;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.J2;
                        if (b in a) return g.Ys(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        jxb = function(a, b, c) {
            if (g.Ya(a)) g.Xb(a, b, c);
            else
                for (a = ixb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        kxb = function(a, b) {
            var c = [];
            jxb(b, function(d) {
                try {
                    var e = g.mv.prototype.B.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.vla(e) && c.push(d)
            }, a);
            return c
        },
        lxb = function(a, b) {
            kxb(a, b).forEach(function(c) {
                g.mv.prototype.remove.call(this, c)
            }, a)
        },
        mxb = function(a) {
            if (a.ma) {
                if (a.ma.locationOverrideToken) return {
                    locationOverrideToken: a.ma.locationOverrideToken
                };
                if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7) return {
                    latitudeE7: a.ma.latitudeE7,
                    longitudeE7: a.ma.longitudeE7
                }
            }
            return null
        },
        nxb = function(a, b) {
            g.Fb(a, b) || a.push(b)
        },
        oxb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        pxb = function(a, b) {
            return g.gd(a, b)
        },
        qxb = function(a) {
            try {
                return g.Qa.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        b8 = function(a) {
            if (g.Qa.JSON) try {
                return g.Qa.JSON.parse(a)
            } catch (b) {}
            return qxb(a)
        },
        rxb = function(a, b, c, d) {
            var e = new g.po(null);
            a && g.qo(e, a);
            b && g.ro(e, b);
            c && g.so(e, c);
            d && (e.C = d);
            return e
        },
        sxb = function() {
            this.j = c8();
            this.j.Fk("/client_streamz/youtube/living_room/mdx/channel/opened", {
                Ue: 3,
                Te: "channel_type"
            })
        },
        txb = function(a, b) {
            a.j.Ol("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        uxb = function() {
            this.j = c8();
            this.j.Fk("/client_streamz/youtube/living_room/mdx/channel/closed", {
                Ue: 3,
                Te: "channel_type"
            })
        },
        vxb = function(a, b) {
            a.j.Ol("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        wxb = function() {
            this.j = c8();
            this.j.Fk("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                Ue: 3,
                Te: "channel_type"
            })
        },
        xxb = function(a, b) {
            a.j.Ol("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        yxb = function() {
            this.j = c8();
            this.j.Fk("/client_streamz/youtube/living_room/mdx/channel/error", {
                Ue: 3,
                Te: "channel_type"
            })
        },
        zxb = function(a, b) {
            a.j.Ol("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        Axb = function() {
            this.j = c8();
            this.j.Fk("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        Bxb = function() {
            this.j = c8();
            this.j.Fk("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        d8 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.Vu;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type =
                a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", Cxb(this, a.capabilities || ""), Dxb(this, a.compatibleSenderThemes || ""), Exb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand =
                a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        Cxb = function(a, b) {
            a.capabilities.clear();
            g.bt(b.split(","), g.fb(pxb, Fxb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        Dxb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.bt(b.split(","), g.fb(pxb, Gxb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        Exb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        e8 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        f8 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        Hxb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        Ixb = function(a) {
            return new e8(a)
        },
        Jxb = function(a) {
            return Array.isArray(a) ? g.pr(a, Ixb) : []
        },
        g8 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        Kxb = function(a) {
            return Array.isArray(a) ? "[" + g.pr(a, g8).join(",") + "]" : "null"
        },
        Lxb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        Mxb = function(a) {
            return g.pr(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        Nxb = function(a, b) {
            return g.Db(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        h8 = function(a, b) {
            return g.Db(a, function(c) {
                return f8(c, b)
            })
        },
        Oxb = function() {
            var a = (0, g.WC)();
            a && lxb(a, a.j.Ek(!0))
        },
        i8 = function() {
            var a = g.YC("yt-remote-connected-devices") || [];
            g.Ub(a);
            return a
        },
        Pxb = function(a) {
            if (0 == a.length) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.pr(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        Qxb = function(a) {
            g.XC("yt-remote-connected-devices", a, 86400)
        },
        j8 = function() {
            if (Rxb) return Rxb;
            var a = g.YC("yt-remote-device-id");
            a || (a = Lxb(), g.XC("yt-remote-device-id", a, 31536E3));
            for (var b = i8(), c = 1, d = a; g.Fb(b, d);) c++, d = a + "#" + c;
            return Rxb = d
        },
        Sxb = function() {
            var a = i8(),
                b = j8();
            g.$C() && g.Wb(a, b);
            a = Pxb(a);
            if (0 == a.length) try {
                g.qoa("remote_sid")
            } catch (c) {} else try {
                g.oC("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        Txb = function() {
            return g.YC("yt-remote-session-browser-channel")
        },
        Uxb = function() {
            return g.YC("yt-remote-local-screens") || []
        },
        Vxb = function() {
            g.XC("yt-remote-lounge-token-expiration", !0, 86400)
        },
        Wxb = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.pr(Uxb(), function(d) {
                    return d.loungeToken
                }),
                c = g.pr(a, function(d) {
                    return d.loungeToken
                });
            g.qr(c, function(d) {
                return !g.Fb(b, d)
            }) && Vxb();
            g.XC("yt-remote-local-screens", a, 31536E3)
        },
        k8 = function(a) {
            a || (g.ZC("yt-remote-session-screen-id"), g.ZC("yt-remote-session-video-id"));
            Sxb();
            a = i8();
            g.Hb(a, j8());
            Qxb(a)
        },
        Xxb = function() {
            if (!l8) {
                var a = g.xv();
                a && (l8 = new g.jv(a))
            }
        },
        Yxb = function() {
            Xxb();
            return l8 ? !!l8.get("yt-remote-use-staging-server") : !1
        },
        m8 = function(a, b) {
            g.KE[a] = !0;
            var c = g.IE();
            c && c.publish.apply(c, arguments);
            g.KE[a] = !1
        },
        Zxb = function() {},
        c8 = function() {
            if (!n8) {
                n8 = new g.cg(new Zxb);
                var a = g.LB("client_streamz_web_flush_count", -1); - 1 !== a && (n8.D = a)
            }
            return n8
        },
        $xb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        ayb = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        byb = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        o8 = function(a) {
            a.length ? cyb(a.shift(), function() {
                o8(a)
            }) : dyb()
        },
        eyb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        cyb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Rn(d, g.jw(a));
            (document.head || document.documentElement).appendChild(d)
        },
        fyb = function() {
            var a = $xb(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        dyb = function() {
            var a = byb();
            a && a(!1, "No cast extension found")
        },
        hyb = function() {
            if (gyb) {
                var a = 2,
                    b = byb(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                cyb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", dyb, c)
            }
        },
        iyb = function() {
            hyb();
            var a = fyb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        kyb = function() {
            hyb();
            var a = fyb();
            a.push.apply(a, g.oa(jyb.map(eyb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        p8 = function(a, b, c) {
            g.H.call(this);
            this.K = null != c ? (0, g.eb)(a, c) : a;
            this.Yi = b;
            this.G = (0, g.eb)(this.X1, this);
            this.j = !1;
            this.B = 0;
            this.C = this.fd = null;
            this.D = []
        },
        q8 = function(a, b, c) {
            g.H.call(this);
            this.D = null != c ? a.bind(c) : a;
            this.Yi = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.fd = null
        },
        lyb = function(a) {
            a.fd = g.ag(function() {
                a.fd = null;
                a.j && !a.B && (a.j = !1, lyb(a))
            }, a.Yi);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        r8 = function() {},
        myb = function() {
            g.yb.call(this, "p")
        },
        nyb = function() {
            g.yb.call(this, "o")
        },
        pyb = function() {
            return oyb = oyb || new g.Dd
        },
        qyb = function(a) {
            g.yb.call(this, "serverreachability", a)
        },
        s8 = function(a) {
            var b = pyb();
            b.dispatchEvent(new qyb(b, a))
        },
        ryb = function(a) {
            g.yb.call(this, "statevent", a)
        },
        t8 = function(a) {
            var b = pyb();
            b.dispatchEvent(new ryb(b, a))
        },
        syb = function(a, b, c, d) {
            g.yb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        u8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Qa.setTimeout(function() {
                a()
            }, b)
        },
        v8 = function() {},
        w8 = function(a, b, c, d) {
            this.G = a;
            this.D = b;
            this.Ic = c;
            this.ac = d || 1;
            this.bb = new g.cp(this);
            this.tb = 45E3;
            a = g.ES ? 125 : void 0;
            this.kb = new g.$f(a);
            this.Na = null;
            this.C = !1;
            this.W = this.Za = this.Z = this.Qa = this.Ba = this.Jb = this.ma = null;
            this.ra = [];
            this.j = null;
            this.K = 0;
            this.N = this.Ea = null;
            this.Bb = -1;
            this.La = !1;
            this.rb = 0;
            this.Xa = null;
            this.Ub = this.Va = this.Rb = this.Ga = !1;
            this.B = new tyb
        },
        tyb = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        vyb = function(a, b, c) {
            a.Qa = 1;
            a.Z = $7(b.clone());
            a.W = c;
            a.Ga = !0;
            uyb(a, null)
        },
        uyb = function(a, b) {
            a.Ba = Date.now();
            x8(a);
            a.Za = a.Z.clone();
            a8(a.Za, "t", a.ac);
            a.K = 0;
            var c = a.G.Qa;
            a.B = new tyb;
            a.j = wyb(a.G, c ? b : null, !a.W);
            0 < a.rb && (a.Xa = new q8((0, g.eb)(a.OS, a, a.j), a.rb));
            a.bb.Ra(a.j, "readystatechange", a.b2);
            b = a.Na ? g.ld(a.Na) : {};
            a.W ? (a.Ea || (a.Ea = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Za, a.Ea, a.W, b)) : (a.Ea = "GET", a.j.send(a.Za, a.Ea, null, b));
            s8(1)
        },
        xyb = function(a) {
            return a.j ? "GET" == a.Ea && 2 != a.Qa && a.G.yf : !1
        },
        Cyb = function(a, b, c) {
            for (var d = !0, e; !a.La && a.K < c.length;)
                if (e = yyb(a, c), e == zyb) {
                    4 == b &&
                        (a.N = 4, t8(14), d = !1);
                    break
                } else if (e == Ayb) {
                a.N = 4;
                t8(15);
                d = !1;
                break
            } else Byb(a, e);
            xyb(a) && 0 != a.K && (a.B.j = a.B.j.slice(a.K), a.K = 0);
            4 != b || 0 != c.length || a.B.B || (a.N = 1, t8(16), d = !1);
            a.C = a.C && d;
            d ? 0 < c.length && !a.Ub && (a.Ub = !0, a.G.UP(a)) : (y8(a), z8(a))
        },
        yyb = function(a, b) {
            var c = a.K,
                d = b.indexOf("\n", c);
            if (-1 == d) return zyb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Ayb;
            d += 1;
            if (d + c > b.length) return zyb;
            b = b.slice(d, d + c);
            a.K = d + c;
            return b
        },
        x8 = function(a) {
            a.Jb = Date.now() + a.tb;
            Dyb(a, a.tb)
        },
        Dyb = function(a, b) {
            if (null != a.ma) throw Error("WatchDog timer not null");
            a.ma = u8((0, g.eb)(a.Y1, a), b)
        },
        A8 = function(a) {
            a.ma && (g.Qa.clearTimeout(a.ma), a.ma = null)
        },
        z8 = function(a) {
            a.G.Pg() || a.La || Eyb(a.G, a)
        },
        y8 = function(a) {
            A8(a);
            g.ub(a.Xa);
            a.Xa = null;
            a.kb.stop();
            a.bb.Jf();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        Byb = function(a, b) {
            try {
                var c = a.G;
                if (0 != c.Gh && (c.j == a || Fyb(c.B, a)))
                    if (!a.Va && Fyb(c.B, a) && 3 == c.Gh) {
                        try {
                            var d = c.zf.j.parse(b)
                        } catch (x) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Ba + 3E3 < a.Ba) B8(c), C8(c);
                                        else break a;
                                    Gyb(c);
                                    t8(18)
                                }
                            }
                            else c.ue = e[1], 0 < c.ue - c.Xa && 37500 > e[2] && c.Va && 0 == c.ra && !c.ma && (c.ma = u8((0, g.eb)(c.d2, c), 6E3));
                            if (1 >= Hyb(c.B) && c.hd) {
                                try {
                                    c.hd()
                                } catch (x) {}
                                c.hd = void 0
                            }
                        } else D8(c, 11)
                    } else if ((a.Va || c.j == a) && B8(c), !g.cc(b))
                    for (e = c.zf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Xa = f[0];
                        f = f[1];
                        if (2 == c.Gh)
                            if ("c" == f[0]) {
                                c.D = f[1];
                                c.Ub = f[2];
                                var h = f[3];
                                null != h && (c.PS = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.bb = 1.5 * l);
                                d = c;
                                var m = a.jO();
                                if (m) {
                                    var n = g.Xm(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.fc(n, "spdy") || g.fc(n, "quic") || g.fc(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (Iyb(p, p.B), p.B = null))
                                    }
                                    if (d.Ga) {
                                        var q = g.Xm(m, "X-HTTP-Session-Id");
                                        q && (d.Ie = q, g.xo(d.Na, d.Ga, q))
                                    }
                                }
                                c.Gh = 3;
                                c.G && c.G.WS();
                                c.Oc && (c.Od = Date.now() - a.Ba);
                                d = c;
                                var r = a;
                                d.Bd = Jyb(d, d.Qa ? d.Ub : null, d.ac);
                                if (r.Va) {
                                    Kyb(d.B,
                                        r);
                                    var t = r,
                                        v = d.bb;
                                    v && t.setTimeout(v);
                                    t.ma && (A8(t), x8(t));
                                    d.j = r
                                } else Lyb(d);
                                0 < c.C.length && E8(c)
                            } else "stop" != f[0] && "close" != f[0] || D8(c, 7);
                        else 3 == c.Gh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? D8(c, 7) : c.disconnect() : "noop" != f[0] && c.G && c.G.VS(f), c.ra = 0)
                    }
                s8(4)
            } catch (x) {}
        },
        Myb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        Nyb = function(a) {
            this.G = a || 10;
            g.Qa.PerformanceNavigationTiming ? (a = g.Qa.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Qa.chrome && g.Qa.chrome.loadTimes && g.Qa.chrome.loadTimes() && g.Qa.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            1 < this.D && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        Oyb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        Hyb = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        Fyb = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        Iyb =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        Kyb = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        Pyb = function(a) {
            if (null != a.B) return a.C.concat(a.B.ra);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.C;
                a = g.u(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
                return b
            }
            return g.Kb(a.C)
        },
        Qyb = function(a, b) {
            var c = new v8;
            if (g.Qa.Image) {
                var d = new Image;
                d.onload = g.fb(F8, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.fb(F8, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.fb(F8, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.fb(F8, c, d, "TestLoadImage: timeout", !1, b);
                g.Qa.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        F8 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        Ryb = function() {
            this.j = new r8
        },
        Syb = function(a, b, c) {
            var d = c || "";
            try {
                g.oo(a, function(e, f) {
                    var h = e;
                    g.$a(e) && (h = g.Mm(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        G8 = function(a, b, c) {
            return c && c.n7 ? c.n7[a] || b : b
        },
        Tyb = function(a) {
            this.C = [];
            this.Ub = this.Bd = this.Na = this.ac = this.j = this.Ie = this.Ga = this.La = this.N = this.Jb = this.W = null;
            this.Of = this.Za = 0;
            this.Mf = G8("failFast", !1, a);
            this.Va = this.ma = this.Z = this.K = this.G = null;
            this.Ic = !0;
            this.ue = this.Xa = -1;
            this.Rb = this.ra = this.Ba = 0;
            this.lh = G8("baseRetryDelayMs", 5E3, a);
            this.Qf = G8("retryDelaySeedMs", 1E4, a);
            this.Nf = G8("forwardChannelMaxRetries", 2, a);
            this.Pe = G8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.He = a && a.Ykb || void 0;
            this.yf = a && a.Ukb || !1;
            this.bb = void 0;
            this.Qa = a && a.Kba || !1;
            this.D = "";
            this.B =
                new Nyb(a && a.gib);
            this.zf = new Ryb;
            this.tb = a && a.wib || !1;
            this.rb = a && a.mib || !1;
            this.tb && this.rb && (this.rb = !1);
            this.Rf = a && a.Yhb || !1;
            a && a.yib && (this.Ic = !1);
            this.Oc = !this.tb && this.Ic && a && a.kib || !1;
            this.jd = void 0;
            a && a.WX && 0 < a.WX && (this.jd = a.WX);
            this.hd = void 0;
            this.Od = 0;
            this.kb = !1;
            this.Bb = this.Ea = null
        },
        C8 = function(a) {
            a.j && (Uyb(a), a.j.cancel(), a.j = null)
        },
        Vyb = function(a) {
            C8(a);
            a.Z && (g.Qa.clearTimeout(a.Z), a.Z = null);
            B8(a);
            a.B.cancel();
            a.K && ("number" === typeof a.K && g.Qa.clearTimeout(a.K), a.K = null)
        },
        E8 = function(a) {
            Oyb(a.B) || a.K || (a.K = !0, g.If(a.RS, a), a.Ba = 0)
        },
        Xyb = function(a, b) {
            if (Hyb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
            if (a.K) return a.C = b.ra.concat(a.C), !0;
            if (1 == a.Gh || 2 == a.Gh || a.Ba >= (a.Mf ? 0 : a.Nf)) return !1;
            a.K = u8((0, g.eb)(a.RS, a, b), Wyb(a, a.Ba));
            a.Ba++;
            return !0
        },
        Zyb = function(a, b) {
            var c;
            b ? c = b.Ic : c = a.Za++;
            var d = a.Na.clone();
            g.xo(d, "SID", a.D);
            g.xo(d, "RID", c);
            g.xo(d, "AID", a.Xa);
            H8(a, d);
            a.N && a.W && g.bp(d, a.N, a.W);
            c = new w8(a, a.D, c, a.Ba + 1);
            null === a.N && (c.Na = a.W);
            b && (a.C = b.ra.concat(a.C));
            b = Yyb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.Pe) + Math.round(.5 * a.Pe * Math.random()));
            Iyb(a.B, c);
            vyb(c, d, b)
        },
        H8 = function(a, b) {
            a.La && g.Wc(a.La, function(c, d) {
                g.xo(b, d, c)
            });
            a.G && g.oo({}, function(c, d) {
                g.xo(b, d, c)
            })
        },
        Yyb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.eb)(a.G.e2, a.G, a) : null;
            a: for (var e = a.C, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        Syb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.C.splice(0, c);
            b.ra = a;
            return d
        },
        Lyb = function(a) {
            a.j || a.Z || (a.Rb = 1, g.If(a.QS, a), a.ra = 0)
        },
        Gyb = function(a) {
            if (a.j || a.Z || 3 <= a.ra) return !1;
            a.Rb++;
            a.Z = u8((0, g.eb)(a.QS, a), Wyb(a, a.ra));
            a.ra++;
            return !0
        },
        Uyb = function(a) {
            null != a.Ea && (g.Qa.clearTimeout(a.Ea), a.Ea = null)
        },
        $yb = function(a) {
            a.j = new w8(a, a.D, "rpc", a.Rb);
            null === a.N && (a.j.Na = a.W);
            a.j.rb = 0;
            var b = a.Bd.clone();
            g.xo(b, "RID", "rpc");
            g.xo(b, "SID", a.D);
            g.xo(b, "AID", a.Xa);
            g.xo(b, "CI", a.Va ? "0" : "1");
            !a.Va && a.jd && g.xo(b, "TO", a.jd);
            g.xo(b, "TYPE", "xmlhttp");
            H8(a, b);
            a.N && a.W && g.bp(b, a.N, a.W);
            a.bb && a.j.setTimeout(a.bb);
            var c = a.j;
            a = a.Ub;
            c.Qa = 1;
            c.Z = $7(b.clone());
            c.W = null;
            c.Ga = !0;
            uyb(c, a)
        },
        B8 = function(a) {
            null != a.ma && (g.Qa.clearTimeout(a.ma), a.ma = null)
        },
        Eyb = function(a, b) {
            var c = null;
            if (a.j == b) {
                B8(a);
                Uyb(a);
                a.j = null;
                var d = 2
            } else if (Fyb(a.B, b)) c = b.ra, Kyb(a.B, b), d = 1;
            else return;
            if (0 != a.Gh)
                if (b.C)
                    if (1 == d) {
                        c = b.W ? b.W.length : 0;
                        b = Date.now() - b.Ba;
                        var e = a.Ba;
                        d = pyb();
                        d.dispatchEvent(new syb(d, c, b, e));
                        E8(a)
                    } else Lyb(a);
            else {
                var f = b.Bb;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && Xyb(a, b) || 2 == d && Gyb(a))) switch (c && 0 < c.length && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        D8(a, 5);
                        break;
                    case 4:
                        D8(a, 10);
                        break;
                    case 3:
                        D8(a, 6);
                        break;
                    default:
                        D8(a, 2)
                }
            }
        },
        Wyb = function(a, b) {
            var c = a.lh + Math.floor(Math.random() *
                a.Qf);
            a.isActive() || (c *= 2);
            return c * b
        },
        D8 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.G && (c = null);
                var d = (0, g.eb)(a.Qba, a);
                c || (c = new g.po("//www.google.com/images/cleardot.gif"), g.Qa.location && "http" == g.Qa.location.protocol || g.qo(c, "https"), $7(c));
                Qyb(c.toString(), d)
            } else t8(2);
            a.Gh = 0;
            a.G && a.G.US(b);
            azb(a);
            Vyb(a)
        },
        azb = function(a) {
            a.Gh = 0;
            a.Bb = [];
            if (a.G) {
                var b = Pyb(a.B);
                if (0 != b.length || 0 != a.C.length) g.Lb(a.Bb, b), g.Lb(a.Bb, a.C), a.B.C.length = 0, g.Kb(a.C), a.C.length = 0;
                a.G.SS()
            }
        },
        bzb = function(a) {
            if (0 == a.Gh) return a.Bb;
            var b = [];
            g.Lb(b, Pyb(a.B));
            g.Lb(b, a.C);
            return b
        },
        Jyb = function(a, b, c) {
            var d = g.Zo(c);
            "" != d.j ? (b && g.ro(d, b + "." + d.j), g.so(d, d.D)) : (d = g.Qa.location, d = rxb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ga;
            c = a.Ie;
            b && c && g.xo(d, b, c);
            g.xo(d, "VER", a.PS);
            H8(a, d);
            return d
        },
        wyb = function(a, b, c) {
            if (b && !a.Qa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.yf && !a.He ? new g.Qm(new g.ko({
                B_: c
            })) : new g.Qm(a.He);
            b.K = a.Qa;
            return b
        },
        czb = function() {},
        dzb = function() {
            if (g.We && !g.Oc(10)) throw Error("Environmental error: no available transport.");
        },
        J8 = function(a, b) {
            g.Dd.call(this);
            this.j = new Tyb(b);
            this.G = a;
            this.B = b && b.a8 || null;
            a = b && b.Z7 || null;
            b && b.eib && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.W = a;
            a = b && b.vjb || null;
            b && b.fY && (a ? a["X-WebChannel-Content-Type"] = b.fY : a = {
                "X-WebChannel-Content-Type": b.fY
            });
            b && b.nV && (a ? a["X-WebChannel-Client-Profile"] = b.nV : a = {
                "X-WebChannel-Client-Profile": b.nV
            });
            this.j.Jb = a;
            (a = b && b.ujb) && !g.cc(a) && (this.j.N = a);
            this.K = b && b.Kba || !1;
            this.D = b && b.vkb || !1;
            (b = b && b.j7) && !g.cc(b) && (this.j.Ga = b, g.fd(this.B, b) && (a = this.B,
                b in a && delete a[b]));
            this.C = new I8(this)
        },
        ezb = function(a) {
            myb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.cd(b)) ? g.jd(b, this.j) : b : this.data = a
        },
        fzb = function(a) {
            nyb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        I8 = function(a) {
            this.j = a
        },
        gzb = function(a, b) {
            this.B = a;
            this.j = b
        },
        hzb = function(a) {
            return bzb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? qxb(b) : b) : c = b;
                return c
            })
        },
        K8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Qa.setTimeout(function() {
                a()
            }, b)
        },
        M8 = function(a) {
            L8.dispatchEvent(new izb(L8, a))
        },
        izb = function(a) {
            g.yb.call(this, "statevent", a)
        },
        N8 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.cp(this);
            this.G = new g.$f;
            this.G.setInterval(250)
        },
        kzb = function(a, b, c) {
            a.Mx = 1;
            a.Tr = $7(b.clone());
            a.Lu = c;
            a.Ga = !0;
            jzb(a, null)
        },
        lzb = function(a, b, c, d, e) {
            a.Mx = 1;
            a.Tr = $7(b.clone());
            a.Lu = null;
            a.Ga = c;
            e && (a.f_ = !1);
            jzb(a, d)
        },
        jzb = function(a, b) {
            a.Lx = Date.now();
            O8(a);
            a.Vr = a.Tr.clone();
            a8(a.Vr, "t", a.K);
            a.tG = 0;
            a.hj = a.j.yL(a.j.bC() ? b : null);
            0 < a.wL && (a.rG = new q8((0, g.eb)(a.XS, a, a.hj), a.wL));
            a.C.Ra(a.hj, "readystatechange", a.j2);
            b = a.Ku ? g.ld(a.Ku) : {};
            a.Lu ? (a.sG = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.hj.send(a.Vr, a.sG, a.Lu, b)) : (a.sG = "GET", a.f_ && !g.Pc && (b.Connection = "close"), a.hj.send(a.Vr, a.sG, null, b));
            a.j.Qn(1)
        },
        ozb = function(a, b) {
            var c = a.tG,
                d = b.indexOf("\n", c);
            if (-1 == d) return mzb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return nzb;
            d += 1;
            if (d + c > b.length) return mzb;
            b = b.slice(d, d + c);
            a.tG = d + c;
            return b
        },
        qzb = function(a, b) {
            a.Lx = Date.now();
            O8(a);
            var c = b ? window.location.hostname : "";
            a.Vr = a.Tr.clone();
            g.xo(a.Vr, "DOMAIN", c);
            g.xo(a.Vr, "t", a.K);
            try {
                a.Bo = new ActiveXObject("htmlfile")
            } catch (m) {
                P8(a);
                a.Ur = 7;
                M8(22);
                Q8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in R8) f = R8[f];
                        else if (f in pzb) f = R8[f] = pzb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                R8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            c = g.ee(d + "</body></html>");
            a.Bo.open();
            a.Bo.write(g.de(c));
            a.Bo.close();
            a.Bo.parentWindow.m = (0, g.eb)(a.P$, a);
            a.Bo.parentWindow.d = (0, g.eb)(a.eZ, a, !0);
            a.Bo.parentWindow.rpcClose = (0, g.eb)(a.eZ, a, !1);
            c = a.Bo.createElement("DIV");
            a.Bo.parentWindow.document.body.appendChild(c);
            d = g.Zd(a.Vr.toString()) || g.be;
            d = g.te(g.Vd(d));
            d = g.ee('<iframe src="' + d + '"></iframe>');
            g.Pba(c, d);
            a.j.Qn(1)
        },
        O8 = function(a) {
            a.xL = Date.now() + a.B;
            rzb(a, a.B)
        },
        rzb = function(a, b) {
            if (null != a.Nx) throw Error("WatchDog timer not null");
            a.Nx = K8((0, g.eb)(a.f2, a), b)
        },
        szb = function(a) {
            a.Nx && (g.Qa.clearTimeout(a.Nx), a.Nx = null)
        },
        Q8 = function(a) {
            a.j.Pg() || a.Ju || a.j.uG(a)
        },
        P8 = function(a) {
            szb(a);
            g.ub(a.rG);
            a.rG = null;
            a.G.stop();
            a.C.Jf();
            if (a.hj) {
                var b = a.hj;
                a.hj = null;
                b.abort();
                b.dispose()
            }
            a.Bo && (a.Bo = null)
        },
        tzb = function(a, b) {
            try {
                a.j.YS(a, b), a.j.Qn(4)
            } catch (c) {}
        },
        vzb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                uzb(a, b, function(h) {
                    h ? c(!0) : g.Qa.setTimeout(function() {
                        vzb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        uzb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    S8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            g.Qa.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        S8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        wzb = function(a) {
            this.j = a;
            this.B = new r8
        },
        xzb = function(a) {
            var b = T8(a.j, a.MC, "/mail/images/cleardot.gif");
            $7(b);
            vzb(b.toString(), 5E3, (0, g.eb)(a.N4, a), 3, 2E3);
            a.Qn(1)
        },
        yzb = function(a) {
            var b = a.j.K;
            if (null != b) M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));
            else if (a.Mj = new N8(a), a.Mj.Ku = a.zL, b = a.j, b = T8(b, b.bC() ? a.aC : null, a.AL), M8(5), !g.We || g.Oc(10)) a8(b, "TYPE", "xmlhttp"), lzb(a.Mj, b, !1, a.aC, !1);
            else {
                a8(b, "TYPE", "html");
                var c = a.Mj;
                a = !!a.aC;
                c.Mx = 3;
                c.Tr = $7(b.clone());
                qzb(c, a)
            }
        },
        zzb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new r8;
            this.W = a || null;
            this.K = null != b ? b : null;
            this.Z = c || !1
        },
        Azb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        Bzb = function(a, b, c, d) {
            g.yb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        Czb = function(a) {
            g.yb.call(this, "serverreachability", a)
        },
        Ezb = function(a) {
            a.l2(1, 0);
            a.vG = T8(a, null, a.BL);
            Dzb(a)
        },
        Fzb = function(a) {
            a.Bs && (a.Bs.abort(), a.Bs = null);
            a.Lg && (a.Lg.cancel(), a.Lg = null);
            a.uq && (g.Qa.clearTimeout(a.uq), a.uq = null);
            V8(a);
            a.Wj && (a.Wj.cancel(), a.Wj = null);
            a.Wr && (g.Qa.clearTimeout(a.Wr), a.Wr = null)
        },
        Gzb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new Azb(a.m2++, b));
            2 != a.j && 3 != a.j || Dzb(a)
        },
        Hzb = function(a) {
            var b = 0;
            a.Lg && b++;
            a.Wj && b++;
            return b
        },
        Dzb = function(a) {
            a.Wj || a.Wr || (a.Wr = K8((0, g.eb)(a.cT, a), 0), a.Px = 0)
        },
        Kzb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.dC = Math.floor(1E5 * Math.random());
                    b = a.dC++;
                    var c = new N8(a, "", b);
                    c.Ku = a.Jo;
                    var d = Izb(a),
                        e = a.vG.clone();
                    g.xo(e, "RID", b);
                    g.xo(e, "CVER", "1");
                    W8(a, e);
                    kzb(c, e, d);
                    a.Wj = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? Jzb(a, b) : 0 == a.B.length || a.Wj || Jzb(a))
        },
        Jzb = function(a, b) {
            if (b)
                if (6 < a.Mu) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.dC - 1;
                    b = Izb(a)
                } else c = b.N, b = b.Lu;
            else c = a.dC++, b = Izb(a);
            var d = a.vG.clone();
            g.xo(d, "SID", a.D);
            g.xo(d, "RID", c);
            g.xo(d, "AID", a.Qx);
            W8(a, d);
            c = new N8(a, a.D, c, a.Px + 1);
            c.Ku = a.Jo;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Wj = c;
            kzb(c, d, b)
        },
        W8 = function(a, b) {
            a.Pi && (a = a.Pi.gT()) && g.Wc(a, function(c, d) {
                g.xo(b, d, c)
            })
        },
        Izb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Mu && 0 < b) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    pE: void 0
                }, f++) {
                e.pE = a.B[f].j;
                var h = a.B[f].map;
                e.pE = 6 >= a.Mu ? f : e.pE - d;
                try {
                    g.Wc(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.pE + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.pE + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        Lzb = function(a) {
            a.Lg || a.uq || (a.N = 1, a.uq = K8((0, g.eb)(a.bT, a), 0), a.Ox = 0)
        },
        Nzb = function(a) {
            if (a.Lg || a.uq || 3 <= a.Ox) return !1;
            a.N++;
            a.uq = K8((0, g.eb)(a.bT, a), Mzb(a, a.Ox));
            a.Ox++;
            return !0
        },
        U8 = function(a, b, c) {
            a.YK = null == a.K ? c : !a.K;
            a.Ko = b.tq;
            a.Z || Ezb(a)
        },
        V8 = function(a) {
            null != a.Nu && (g.Qa.clearTimeout(a.Nu), a.Nu = null)
        },
        Mzb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        X8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Pi && (c = null);
                var d = (0, g.eb)(a.Pba, a);
                c || (c = new g.po("//www.google.com/images/cleardot.gif"), $7(c));
                uzb(c.toString(), 1E4, d)
            } else M8(2);
            Ozb(a, b)
        },
        Ozb = function(a, b) {
            a.j = 0;
            a.Pi && a.Pi.dT(b);
            Pzb(a);
            Fzb(a)
        },
        Pzb = function(a) {
            a.j = 0;
            a.Ko = -1;
            if (a.Pi)
                if (0 == a.C.length && 0 == a.B.length) a.Pi.CL();
                else {
                    var b = g.Kb(a.C),
                        c = g.Kb(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.Pi.CL(b, c)
                }
        },
        T8 = function(a, b, c) {
            var d = g.Zo(c);
            if ("" != d.j) b && g.ro(d, b + "." + d.j), g.so(d, d.D);
            else {
                var e = window.location;
                d = rxb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.cC && g.Wc(a.cC, function(f, h) {
                g.xo(d, h, f)
            });
            g.xo(d, "VER", a.Mu);
            W8(a, d);
            return d
        },
        Qzb = function() {},
        Rzb = function() {
            this.j = [];
            this.B = []
        },
        Szb = function(a) {
            g.yb.call(this, "channelMessage");
            this.message = a
        },
        Tzb = function(a) {
            g.yb.call(this, "channelError");
            this.error = a
        },
        Uzb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        Y8 = function(a, b) {
            g.H.call(this);
            this.j = new g.Eu(this.H$, 0, this);
            g.J(this, this.j);
            this.Yi = 5E3;
            this.B = 0;
            if ("function" === typeof a) b && (a = (0, g.eb)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.eb)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        Vzb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.Ba = a;
            this.N = b;
            this.C = new g.iv;
            this.B = new Y8(this.aba, this);
            this.j = null;
            this.ma = !1;
            this.K = null;
            this.W = "";
            this.Z = this.G = 0;
            this.D = [];
            this.Qa = c;
            this.ra = d;
            this.Va = e;
            this.Na = new sxb;
            this.Ea = new uxb;
            this.La = new wxb;
            this.Ga = new yxb;
            this.Xa = new Axb;
            this.Za = new Bxb
        },
        Wzb = function(a) {
            if (a.j) {
                var b = a.ra(),
                    c = a.j.Jo || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Jo = c
            }
        },
        Z8 = function(a) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.Fl(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Gl(a) || "";
            a = g.mc();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.kc(a, "10.0") && (this.B = !1))
        },
        $8 = function(a, b) {
            var c = a.j;
            a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
            return g.Ml(c + b, {})
        },
        Xzb = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.fb(a.D, d, !0),
                onError: g.fb(a.C, e),
                onTimeout: g.fb(a.G, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.fC(b, a)
        },
        Yzb = function(a, b) {
            g.Dd.call(this);
            var c = this;
            this.Ad = a();
            this.Ad.subscribe("handlerOpened", this.s2, this);
            this.Ad.subscribe("handlerClosed", this.o2, this);
            this.Ad.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Ad.subscribe("handlerMessage", this.q2, this);
            this.j = b
        },
        Zzb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new dzb : e;
            var f = void 0 === f ? new g.iv : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ba = c;
            this.G = f;
            this.Z = null;
            this.W = this.N = 0;
            this.channel = null;
            this.K = 0;
            this.C = new Y8(function() {
                d.C.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : Hyb((new gzb(h, h.j)).j.B)) && d.connect(d.Z, d.N)
            });
            this.D = {};
            this.B = {};
            this.ma = !1;
            this.logger = null;
            this.ra = [];
            this.Eg = void 0;
            this.Na = new sxb;
            this.Ea = new uxb;
            this.La = new wxb;
            this.Ga = new yxb
        },
        $zb = function(a) {
            g.vd(a.channel, "m", function() {
                a.K = 3;
                a.C.reset();
                a.Z = null;
                a.N = 0;
                for (var b = g.u(a.ra), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.ra = [];
                a.oa("webChannelOpened");
                txb(a.Na, "WEB_CHANNEL")
            });
            g.vd(a.channel, "n", function() {
                a.K = 0;
                a.C.isActive() || a.oa("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : hzb(new gzb(b, b.j));
                c && (a.ra = [].concat(g.oa(c)));
                vxb(a.Ea, "WEB_CHANNEL")
            });
            g.vd(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.C.start(), a.channel && a.channel.close()) : a.oa("webChannelMessage", new Uzb(c[0], c[1]));
                a.Eg = b.statusCode;
                xxb(a.La, "WEB_CHANNEL")
            });
            g.vd(a.channel, "o", function() {
                401 === a.Eg || a.C.start();
                a.oa("webChannelError");
                zxb(a.Ga, "WEB_CHANNEL")
            })
        },
        aAb = function(a) {
            var b = a.Ba();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        bAb = function(a) {
            g.Dd.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.w2, this);
            this.j.subscribe("webChannelClosed", this.t2, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.v2, this)
        },
        cAb = function(a, b, c, d, e) {
            function f() {
                return new Vzb($8(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.KB("enable_mdx_web_channel_desktop") ? new bAb(function() {
                return new Zzb($8(a, "/wc"), b, c)
            }) : new Yzb(f, e)
        },
        gAb = function() {
            var a = dAb;
            eAb();
            a9.push(a);
            fAb()
        },
        b9 = function(a, b) {
            eAb();
            var c = hAb(a, String(b));
            0 == a9.length ? iAb(c) : (fAb(), g.Xb(a9, function(d) {
                d(c)
            }))
        },
        c9 = function(a) {
            b9("CP", a)
        },
        eAb = function() {
            a9 || (a9 = g.Sa("yt.mdx.remote.debug.handlers_") || [], g.Ra("yt.mdx.remote.debug.handlers_", a9))
        },
        iAb = function(a) {
            var b = (d9 + 1) % 50;
            d9 = b;
            e9[b] = a;
            f9 || (f9 = 49 == b)
        },
        fAb = function() {
            var a = a9;
            if (e9[0]) {
                var b = f9 ? d9 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e9[b];
                    g.Xb(a, function(d) {
                        d(c)
                    })
                } while (b != d9);
                e9 = Array(50);
                d9 = -1;
                f9 = !1
            }
        },
        hAb = function(a, b) {
            var c = (Date.now() - jAb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g9 = function(a) {
            g.cG.call(this);
            this.K = a;
            this.screens = []
        },
        kAb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        lAb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.bt(a.screens, function(f) {
                return !!Nxb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = kAb(a, b[d]) || c;
            return c
        },
        mAb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.bt(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        nAb = function(a, b, c, d, e) {
            g.cG.call(this);
            this.C = a;
            this.N = b;
            this.D = c;
            this.K = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.fd = NaN
        },
        i9 = function(a) {
            g9.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            h9(this);
            this.info("Initializing with " + Kxb(this.screens))
        },
        oAb = function(a) {
            if (a.screens.length) {
                var b = g.pr(a.screens, function(d) {
                        return d.id
                    }),
                    c = $8(a.B, "/pairing/get_lounge_token_batch");
                Xzb(a.B, c, {
                    screen_ids: b.join(",")
                }, (0, g.eb)(a.H6, a), (0, g.eb)(a.G6, a))
            }
        },
        h9 = function(a) {
            if (g.KB("deprecate_pair_servlet_enabled")) return lAb(a, []);
            var b = Jxb(Uxb());
            b = g.bt(b, function(c) {
                return !c.uuid
            });
            return lAb(a, b)
        },
        j9 = function(a, b) {
            Wxb(g.pr(a.screens, Hxb));
            b && Vxb()
        },
        qAb = function(a, b) {
            g.cG.call(this);
            this.K = b;
            b = (b = g.YC("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Fb(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            pAb("Initialized with " + g.Mm(this.j))
        },
        rAb = function(a, b, c) {
            var d = $8(a.G, "/pairing/get_screen_availability");
            Xzb(a.G, d, {
                lounge_token: b.token
            }, (0, g.eb)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c("online" == e[h].status);
                        return
                    }
                c(!1)
            }, a), (0, g.eb)(function() {
                c(!1)
            }, a))
        },
        tAb = function(a, b) {
            a: if (oxb(b) != oxb(a.j)) var c = !1;
                else {
                    c = g.ed(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (pAb("Updated online screens: " + g.Mm(a.j)), a.j = b, a.oa("screenChange"));sAb(a)
        },
        k9 = function(a) {
            isNaN(a.C) || g.cC(a.C);
            a.C = g.aC((0, g.eb)(a.ZQ, a), 0 < a.D && a.D < g.gb() ? 2E4 : 1E4)
        },
        pAb = function(a) {
            b9("OnlineScreenService", a)
        },
        uAb = function(a) {
            var b = {};
            g.Xb(a.K(), function(c) {
                c.token ? b[c.token] = c.id : this.cg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        sAb = function(a) {
            a = g.ed(g.Xc(a.j, function(b) {
                return b
            }));
            g.Ub(a);
            a.length ? g.XC("yt-remote-online-screen-ids", a.join(","), 60) : g.ZC("yt-remote-online-screen-ids")
        },
        l9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g9.call(this, "ScreenService");
            this.D = a;
            this.N = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            vAb(this)
        },
        xAb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.Pk(),
                l = c ? h8(h, c) : null;
            c && (a.N || l) || (l = h8(h, b));
            if (l) {
                l.uuid = b;
                var m = m9(a, l);
                rAb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? wAb(a, c, (0, g.eb)(function(n) {
                var p = m9(this, new e8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                rAb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        yAb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        zAb = function(a, b, c) {
            rAb(a.j, b, c)
        },
        wAb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.fC($8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        AAb = function(a) {
            a.screens = a.B.Pk();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + Kxb(a.screens))
        },
        vAb = function(a) {
            BAb(a);
            a.B = new i9(a.D);
            a.B.subscribe("screenChange", (0, g.eb)(a.R6, a));
            AAb(a);
            a.N || (a.C = Jxb(g.YC("yt-remote-automatic-screen-cache") || []));
            BAb(a);
            a.info("Initializing automatic screens: " + Kxb(a.C));
            a.j = new qAb(a.D, (0, g.eb)(a.Pk, a, !0));
            a.j.subscribe("screenChange", (0, g.eb)(function() {
                this.oa("onlineScreenChange")
            }, a))
        },
        m9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = h8(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || CAb(a));
            BAb(a);
            a.G[b.uuid] = b.id;
            g.XC("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        CAb = function(a) {
            a = g.bt(a.C, function(b) {
                return "shortLived" != b.idType
            });
            g.XC("yt-remote-automatic-screen-cache", g.pr(a, Hxb))
        },
        BAb = function(a) {
            a.G = g.YC("yt-remote-device-id-map") || {}
        },
        n9 = function(a, b, c) {
            g.cG.call(this);
            this.Ga = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        o9 = function(a, b) {
            a.j = b;
            a.oa("sessionScreen", a.j)
        },
        DAb = function(a, b) {
            a.j && (a.j.token = b, m9(a.D, a.j));
            a.oa("sessionScreen", a.j)
        },
        p9 = function(a, b) {
            b9(a.Ga, b)
        },
        q9 = function(a, b, c) {
            n9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.ra = (0, g.eb)(this.D2, this);
            this.Ea = (0, g.eb)(this.X$, this);
            this.ma = g.aC(function() {
                EAb(d, null)
            }, 12E4);
            this.N = this.G = this.K = this.Z = 0;
            this.Ba = !1;
            this.W = "unknown"
        },
        GAb = function(a, b) {
            g.cC(a.N);
            a.N = 0;
            0 == b ? FAb(a) : a.N = g.aC(function() {
                FAb(a)
            }, b)
        },
        FAb = function(a) {
            HAb(a, "getLoungeToken");
            g.cC(a.G);
            a.G = g.aC(function() {
                IAb(a, null)
            }, 3E4)
        },
        HAb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Mm());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.eb)(function() {
                p9(this, "Failed to send message: " + b + ".")
            }, a)) : p9(a, "Sending yt message without session: " + g.Mm(c))
        },
        JAb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.uW(b, function(c) {
                o9(a, c)
            }, function() {
                return a.Cj()
            }, 5)) : a.Cj(Error("Waiting for session status timed out."))
        },
        LAb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            KAb(a, d, function(e) {
                e ? (a.Ba = !0, m9(a.D, d), o9(a, d), a.W = "unknown", GAb(a, c)) : (g.NB(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Cj())
            }, 5)
        },
        EAb = function(a, b) {
            g.cC(a.ma);
            a.ma = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? LAb(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.NB(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), JAb(a, b.screenId))) : (g.NB(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), JAb(a, b.screenId)) :
                JAb(a, b.screenId) : a.Cj(Error("Waiting for session status timed out."))
        },
        IAb = function(a, b) {
            g.cC(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.W = c, GAb(a, 3E4)) : (DAb(a, b.loungeToken), a.Ba = !1, a.W = "unknown", GAb(a, b.loungeTokenRefreshIntervalMs))
        },
        KAb = function(a, b, c, d) {
            g.cC(a.K);
            a.K = 0;
            zAb(a.D, b, function(e) {
                e || 0 > d ? c(e) : a.K = g.aC(function() {
                    KAb(a, b, c, d - 1)
                }, 300)
            })
        },
        MAb = function(a) {
            g.cC(a.Z);
            a.Z = 0;
            g.cC(a.K);
            a.K = 0;
            g.cC(a.ma);
            a.ma = 0;
            g.cC(a.G);
            a.G = 0;
            g.cC(a.N);
            a.N = 0
        },
        r9 = function(a, b, c, d) {
            n9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.Z = null;
            this.Ea = "";
            this.Qa = c;
            this.Na = null;
            this.ma = function() {};
            this.W = NaN;
            this.La = (0, g.eb)(this.E2, this);
            this.G = function() {};
            this.N = this.K = 0;
            this.ra = !1;
            this.Ba = "unknown"
        },
        s9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.C) ? 0 : b.getDialAppInfo))
        },
        NAb = function(a) {
            a.G = a.D.iT(a.Ea, a.B.label, a.B.friendlyName, s9(a), function(b, c) {
                a.G = function() {};
                a.ra = !0;
                o9(a, b);
                "shortLived" == b.idType && 0 < c && t9(a, c)
            }, function(b) {
                a.G = function() {};
                a.Cj(b)
            })
        },
        OAb = function(a) {
            var b = {};
            b.pairingCode = a.Ea;
            b.theme = a.Qa;
            Yxb() && (b.env_useStageMdx = 1);
            return g.Ll(b)
        },
        PAb = function(a) {
            return new Promise(function(b) {
                a.Ea = Lxb();
                if (a.Na) {
                    var c = new chrome.cast.DialLaunchResponse(!0, OAb(a));
                    b(c);
                    NAb(a)
                } else a.ma = function() {
                    g.cC(a.W);
                    a.ma = function() {};
                    a.W = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, OAb(a));
                    b(d);
                    NAb(a)
                }, a.W = g.aC(function() {
                    a.ma()
                }, 100)
            })
        },
        RAb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            return (new Promise(function(e) {
                QAb(a, d, function(f) {
                    f ? (a.ra = !0, m9(a.D, d), o9(a, d), t9(a, c)) : g.NB(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : PAb(a)
            })
        },
        SAb = function(a, b) {
            var c = a.Z.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                xAb(a.D, c, b, d, function(f) {
                    f && f.token && o9(a, f);
                    e(f)
                }, function(f) {
                    p9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : PAb(a)
            })
        },
        QAb = function(a, b, c, d) {
            g.cC(a.K);
            a.K = 0;
            zAb(a.D, b, function(e) {
                e || 0 > d ? c(e) : a.K = g.aC(function() {
                    QAb(a, b, c, d - 1)
                }, 300)
            })
        },
        t9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            s9(a) && (g.cC(a.N), a.N = 0, 0 == b ? TAb(a) : a.N = g.aC(function() {
                TAb(a)
            }, b))
        },
        TAb = function(a) {
            s9(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ba = c, t9(a, 3E4)) : (a.ra = !1, a.Ba = "unknown", DAb(a, b.loungeToken), t9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ba = "noLoungeTokenResponse";
                t9(a, 3E4)
            })
        },
        UAb = function(a) {
            g.cC(a.K);
            a.K = 0;
            g.cC(a.N);
            a.N = 0;
            a.G();
            a.G = function() {};
            g.cC(a.W)
        },
        u9 = function(a, b) {
            n9.call(this, a, b, "ManualSession");
            this.C = g.aC((0, g.eb)(this.Xz, this, null), 150)
        },
        v9 = function(a, b) {
            g.cG.call(this);
            this.config_ = b;
            this.B = a;
            this.Z = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.W = b.disableCastApi || !1;
            this.K = b.forceMirroring || !1;
            this.j = null;
            this.N = !1;
            this.C = [];
            this.G = (0, g.eb)(this.T9, this)
        },
        VAb = function(a, b) {
            return b ? g.Db(a.C, function(c) {
                return f8(b, c.label)
            }, a) : null
        },
        w9 = function(a) {
            b9("Controller", a)
        },
        dAb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        x9 = function(a) {
            return a.N || !!a.C.length || !!a.j
        },
        y9 = function(a, b, c) {
            b != a.j && (g.ub(a.j), (a.j = b) ? (c ? a.oa("yt-remote-cast2-receiver-resumed",
                b.B) : a.oa("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.eb)(a.cZ, a, b)), b.subscribe("sessionFailed", function() {
                return WAb(a, b)
            }), b.j ? a.oa("yt-remote-cast2-session-change", b.j) : c && a.j.Xz(null)) : a.oa("yt-remote-cast2-session-change", null))
        },
        WAb = function(a, b) {
            a.j == b && a.oa("yt-remote-cast2-session-failed")
        },
        XAb = function(a) {
            var b = a.B.hT(),
                c = a.j && a.j.B;
            a = g.pr(b, function(d) {
                c && f8(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = VAb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        dBb = function(a, b, c, d) {
            d.disableCastApi ? z9("Cannot initialize because disabled by Mdx config.") : YAb() ? ZAb(b, d) && ($Ab(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? aBb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? aBb(a, c) : (A9("Failed to load cast API: " + f), bBb(!1), $Ab(!1), g.ZC("yt-remote-cast-available"), g.ZC("yt-remote-cast-receiver"),
                    cBb(), c(!1))
            }, d.loadCastApiSetupScript ? g.msa("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= $xb() && iyb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? dyb() : 89 <= $xb() ? kyb() : (hyb(), o8(jyb.map(eyb))))) : z9("Cannot initialize because not running Chrome")
        },
        cBb = function() {
            z9("dispose");
            var a = B9();
            a && a.dispose();
            g.Ra("yt.mdx.remote.cloudview.instance_", null);
            eBb(!1);
            g.NE(fBb);
            fBb.length = 0
        },
        C9 = function() {
            return !!g.YC("yt-remote-cast-installed")
        },
        gBb = function() {
            var a = g.YC("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        hBb = function() {
            z9("clearCurrentReceiver");
            g.ZC("yt-remote-cast-receiver")
        },
        iBb = function() {
            return C9() ? B9() ? B9().getCastSession() : (A9("getCastSelector: Cast is not initialized."), null) : (A9("getCastSelector: Cast API is not installed!"), null)
        },
        jBb = function() {
            C9() ? B9() ? D9() ? (z9("Requesting cast selector."), B9().requestSession()) : (z9("Wait for cast API to be ready to request the session."), fBb.push(g.ME("yt-remote-cast2-api-ready", jBb))) : A9("requestCastSelector: Cast is not initialized.") : A9("requestCastSelector: Cast API is not installed!")
        },
        E9 = function(a, b) {
            D9() ? B9().setConnectedScreenStatus(a, b) : A9("setConnectedScreenStatus called before ready.")
        },
        YAb = function() {
            var a = 0 <= g.mc().search(/ (CrMo|Chrome|CriOS)\//);
            return g.YK || a
        },
        kBb = function(a, b) {
            B9().init(a, b)
        },
        ZAb = function(a, b) {
            var c = !1;
            B9() || (a = new v9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.XC("yt-remote-cast-available", d);
                m8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                z9("onReceiverSelected: " + d.friendlyName);
                g.XC("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                z9("onReceiverResumed: " + d.friendlyName);
                g.XC("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                z9("onSessionChange: " + g8(d));
                d || g.ZC("yt-remote-cast-receiver");
                m8("yt-remote-cast2-session-change", d)
            }), g.Ra("yt.mdx.remote.cloudview.instance_", a), c = !0);
            z9("cloudview.createSingleton_: " + c);
            return c
        },
        B9 = function() {
            return g.Sa("yt.mdx.remote.cloudview.instance_")
        },
        aBb = function(a, b) {
            bBb(!0);
            $Ab(!1);
            kBb(a, function(c) {
                c ? (eBb(!0), g.OE("yt-remote-cast2-api-ready")) : (A9("Failed to initialize cast API."), bBb(!1), g.ZC("yt-remote-cast-available"), g.ZC("yt-remote-cast-receiver"), cBb());
                b(c)
            })
        },
        z9 = function(a) {
            b9("cloudview", a)
        },
        A9 = function(a) {
            b9("cloudview", a)
        },
        bBb = function(a) {
            z9("setCastInstalled_ " + a);
            g.XC("yt-remote-cast-installed", a)
        },
        D9 = function() {
            return !!g.Sa("yt.mdx.remote.cloudview.apiReady_")
        },
        eBb = function(a) {
            z9("setApiReady_ " + a);
            g.Ra("yt.mdx.remote.cloudview.apiReady_", a)
        },
        $Ab = function(a) {
            g.Ra("yt.mdx.remote.cloudview.initializing_", a)
        },
        F9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.K = this.N = 0;
            this.trackData = null;
            this.Tk = this.Ep = !1;
            this.Z = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        lBb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Ep = !1;
            a.Tk = !1;
            a.N = 0;
            a.K = g.gb();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.Z = 0;
            a.C = NaN;
            a.B = !1
        },
        G9 = function(a) {
            return a.isPlaying() ? (g.gb() - a.K) / 1E3 : 0
        },
        H9 = function(a, b) {
            a.N = b;
            a.K = g.gb()
        },
        I9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.gb() - a.K) / 1E3 + a.N;
                case -1E3:
                    return 0
            }
            return a.N
        },
        J9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && lBb(a)
        },
        mBb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.pd(a.trackData);
            b.hasPrevious = a.Ep;
            b.hasNext = a.Tk;
            b.playerTime = a.N;
            b.playerTimeAt = a.K;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.Z;
            b.liveIngestionTime = a.C;
            return b
        },
        L9 = function(a, b) {
            g.cG.call(this);
            this.C = 0;
            this.D = a;
            this.K = [];
            this.G = new Rzb;
            this.B = this.j = null;
            this.W = (0, g.eb)(this.I8, this);
            this.N = (0, g.eb)(this.zE, this);
            this.Z = (0, g.eb)(this.H8, this);
            this.ma = (0, g.eb)(this.L8, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.vR, this), nBb(this))) : c = 3;
            0 != c && (b ? this.vR(c) : g.aC((0, g.eb)(function() {
                this.vR(c)
            }, this), 0));
            (a = iBb()) && K9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.ma)
        },
        M9 = function(a) {
            return new F9(a.D.getPlayerContextData())
        },
        nBb = function(a) {
            g.Xb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.K.push(this.D.subscribe(b, g.fb(this.R9, b), this))
            }, a)
        },
        oBb = function(a) {
            g.Xb(a.K, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.K.length = 0
        },
        N9 = function(a) {
            return 1 == a.getState()
        },
        O9 = function(a, b) {
            var c = a.G;
            50 > c.j.length + c.B.length && a.G.B.push(b)
        },
        pBb = function(a, b, c) {
            var d = M9(a);
            H9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            P9(a, d)
        },
        Q9 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        P9 = function(a, b) {
            oBb(a);
            a.D.setPlayerContextData(mBb(b));
            nBb(a)
        },
        K9 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.W), a.B.removeMediaListener(a.N), a.zE(null));
            a.B = b;
            a.B && (c9("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.W), a.B.addMediaListener(a.N), a.B.media.length && a.zE(a.B.media[0]))
        },
        qBb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = M9(a);
                b.contentId != d.videoId && c9("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                H9(d, a.j.getEstimatedTime());
                P9(a, d)
            } else c9("No cast media video. Ignoring state update.")
        },
        R9 = function(a, b, c) {
            return (0, g.eb)(function(d) {
                this.cg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.cg("Retrying " + b + " using MDx browser channel."), Q9(this, b, c))
            }, a)
        },
        U9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.cG.call(this);
            var e = this;
            this.K = NaN;
            this.Ea = !1;
            this.W = this.Z = this.ra = this.Ba = NaN;
            this.ma = [];
            this.G = this.N = this.D = this.j = this.B = null;
            this.Na = a;
            this.La = d;
            this.ma.push(g.OC(window, "beforeunload", function() {
                e.gz(2)
            }));
            this.C = [];
            this.j = new F9;
            this.Qa = b.id;
            this.Ga = b.idType;
            this.B = cAb(this.Na, c, this.mT, "shortLived" == this.Ga, this.Qa);
            this.B.Ra("channelOpened", function() {
                rBb(e)
            });
            this.B.Ra("channelClosed", function() {
                S9("Channel closed");
                isNaN(e.K) ? k8(!0) : k8();
                e.dispose()
            });
            this.B.Ra("channelError", function(f) {
                k8();
                isNaN(e.ED()) ? (1 == f && "shortLived" == e.Ga && e.oa("browserChannelAuthError", f), S9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ea = !0, S9("Channel error: " + f + " with reconnection in " + e.ED() + " ms"), T9(e, 2))
            });
            this.B.Ra("channelMessage", function(f) {
                sBb(e, f)
            });
            this.B.Hr(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.$C() && g.XC("yt-remote-session-video-id", f)
            })
        },
        tBb = function(a) {
            return g.Db(a.C, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        S9 = function(a) {
            b9("conn", a)
        },
        T9 = function(a, b) {
            a.oa("proxyStateChange", b)
        },
        uBb = function(a) {
            a.K = g.aC(function() {
                S9("Connecting timeout");
                a.gz(1)
            }, 2E4)
        },
        vBb = function(a) {
            g.cC(a.K);
            a.K = NaN
        },
        wBb = function(a) {
            g.cC(a.Ba);
            a.Ba = NaN
        },
        yBb = function(a) {
            xBb(a);
            a.ra = g.aC(function() {
                V9(a, "getNowPlaying")
            }, 2E4)
        },
        xBb = function(a) {
            g.cC(a.ra);
            a.ra = NaN
        },
        rBb = function(a) {
            S9("Channel opened");
            a.Ea && (a.Ea = !1, wBb(a), a.Ba = g.aC(function() {
                S9("Timing out waiting for a screen.");
                a.gz(1)
            }, 15E3))
        },
        ABb = function(a, b) {
            var c = null;
            if (b) {
                var d = tBb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ra("yt.mdx.remote.remoteClient_", c);
            b && (vBb(a), wBb(a));
            c = a.B.Lz() && isNaN(a.K);
            b == c ? b && (T9(a, 1), V9(a, "getSubtitlesTrack")) : b ? (a.pW() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), zBb(a)) : a.gz(1)
        },
        BBb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.id(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.oa("remotePlayerChange"))
        },
        CBb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            J9(a.j, d, e);
            a.oa("remoteQueueChange", c)
        },
        EBb = function(a, b) {
            b.params = b.params || {};
            CBb(a, b, "NOW_PLAYING_MAY_CHANGE");
            DBb(a, b);
            a.oa("autoplayDismissed")
        },
        DBb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            H9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.Z = isNaN(c) ? 0 : c;
            a.j.xl(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? yBb(a) : xBb(a);
            a.oa("remotePlayerChange")
        },
        FBb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                H9(a.j, isNaN(b) ? 0 : b);
                a.oa("remotePlayerChange")
            }
        },
        GBb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.oa("remotePlayerChange")
        },
        HBb = function(a, b) {
            a.N = b.params.videoId;
            a.oa("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        IBb = function(a, b) {
            a.N = b.params.videoId || null;
            a.oa("autoplayUpNext", a.N)
        },
        JBb = function(a, b) {
            a.G = b.params.autoplayMode;
            a.oa("autoplayModeChange", a.G);
            "DISABLED" == a.G && a.oa("autoplayDismissed")
        },
        KBb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.Ep = "true" == b.params.hasPrevious;
            a.j.Tk = c;
            a.oa("previousNextChange")
        },
        sBb = function(a, b) {
            b = b.message;
            b.params ? S9("Received: action=" + b.action + ", params=" + g.Mm(b.params)) : S9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = b8(b.params.devices);
                    a.C = g.pr(b, function(d) {
                        return new d8(d)
                    });
                    b = !!g.Db(a.C, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    ABb(a, b);
                    b = a.sX("mlm");
                    a.oa("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Ib(a.C, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    ABb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new d8(b8(b.params.device));
                    g.Db(a.C, function(d) {
                        return d.equals(c)
                    }) || nxb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new d8(b8(b.params.device));
                    g.Ib(a.C, function(d) {
                        return d.equals(c)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    CBb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    EBb(a, b);
                    break;
                case "onStateChange":
                    DBb(a, b);
                    break;
                case "onAdStateChange":
                    FBb(a, b);
                    break;
                case "onVolumeChanged":
                    GBb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    BBb(a, b);
                    break;
                case "nowAutoplaying":
                    HBb(a, b);
                    break;
                case "autoplayDismissed":
                    a.oa("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    IBb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    JBb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    KBb(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.oa("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.oa("loopModeChange", b.params.loopMode);
                    break;
                default:
                    S9("Unrecognized action: " + b.action)
            }
        },
        zBb = function(a) {
            g.cC(a.W);
            a.W = g.aC(function() {
                a.gz(1)
            }, 864E5)
        },
        V9 = function(a, b, c) {
            c ? S9("Sending: action=" + b + ", params=" + g.Mm(c)) : S9("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        LBb = function(a) {
            g9.call(this, "ScreenServiceProxy");
            this.Zg = a;
            this.j = [];
            this.j.push(this.Zg.$_s("screenChange", (0, g.eb)(this.I2, this)));
            this.j.push(this.Zg.$_s("onlineScreenChange", (0, g.eb)(this.z9, this)))
        },
        QBb = function(a, b) {
            Xxb();
            if (!l8 || !l8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.IB("MDX_CONFIG") || b;
                Oxb();
                Sxb();
                W9 || (W9 = new Z8(b ? b.loungeApiHost : void 0), Yxb() && (W9.j = "/api/loungedev"));
                X9 || (X9 = g.Sa("yt.mdx.remote.deferredProxies_") || [], g.Ra("yt.mdx.remote.deferredProxies_", X9));
                MBb();
                var c = Y9();
                if (!c) {
                    var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ra("yt.mdx.remote.screenService_", d);
                    c = Y9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ra("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    dBb(a, d, function(f) {
                        f ? Z9() && E9(Z9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            m8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Sa("yt.mdx.remote.initialized_") && (g.Ra("yt.mdx.remote.initialized_", !0), $9("Initializing: " + g.Mm(b)),
                    a$.push(g.ME("yt-remote-cast2-api-ready", function() {
                        m8("yt-remote-api-ready")
                    })), a$.push(g.ME("yt-remote-cast2-availability-change", function() {
                        m8("yt-remote-receiver-availability-change")
                    })), a$.push(g.ME("yt-remote-cast2-receiver-selected", function() {
                        b$(null);
                        m8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), a$.push(g.ME("yt-remote-cast2-receiver-resumed", function() {
                        m8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), a$.push(g.ME("yt-remote-cast2-session-change", NBb)), a$.push(g.ME("yt-remote-connection-change", function(f) {
                        f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), hBb())
                    })), a$.push(g.ME("yt-remote-cast2-session-failed", function() {
                        m8("yt-remote-connection-failed")
                    })), a = OBb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.KB("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), $9(" -- with channel params: " + g.Mm(a)), a ? (g.XC("yt-remote-session-app", a.app), g.XC("yt-remote-session-name", a.name)) : (g.ZC("yt-remote-session-app"), g.ZC("yt-remote-session-name")), g.Ra("yt.mdx.remote.channelParams_", a), c.start(), Z9() || PBb())
            }
        },
        RBb = function() {
            var a = Y9().Zg.$_gos();
            var b = d$();
            b && e$() && (Nxb(a, b) || a.push(b));
            return Mxb(a)
        },
        TBb = function() {
            var a = SBb();
            !a && C9() && gBb() && (a = {
                key: "cast-selector-receiver",
                name: gBb()
            });
            return a
        },
        SBb = function() {
            var a = RBb(),
                b = d$();
            b || (b = c$());
            return g.Db(a, function(c) {
                return b && f8(b, c.key) ? !0 : !1
            })
        },
        d$ = function() {
            var a = Z9();
            if (!a) return null;
            var b = Y9().Pk();
            return h8(b, a)
        },
        NBb = function(a) {
            $9("remote.onCastSessionChange_: " + g8(a));
            if (a) {
                var b = d$();
                if (b && b.id == a.id) {
                    if (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) f$ && (f$.token = a), (b = e$()) && b.Hr(a)
                } else b && g$(), h$(a, 1)
            } else e$() && g$()
        },
        g$ = function() {
            D9() ? B9().stopSession() : A9("stopSession called before API ready.");
            var a = e$();
            a && (a.disconnect(1), UBb(null))
        },
        VBb = function() {
            var a = e$();
            return !!a && 3 != a.getProxyState()
        },
        $9 = function(a) {
            b9("remote", a)
        },
        Y9 = function() {
            if (!WBb) {
                var a = g.Sa("yt.mdx.remote.screenService_");
                WBb = a ? new LBb(a) : null
            }
            return WBb
        },
        Z9 = function() {
            return g.Sa("yt.mdx.remote.currentScreenId_")
        },
        XBb = function(a) {
            g.Ra("yt.mdx.remote.currentScreenId_", a)
        },
        YBb = function() {
            return g.Sa("yt.mdx.remote.connectData_")
        },
        b$ = function(a) {
            g.Ra("yt.mdx.remote.connectData_", a)
        },
        e$ = function() {
            return g.Sa("yt.mdx.remote.connection_")
        },
        UBb = function(a) {
            var b = e$();
            b$(null);
            a || XBb("");
            g.Ra("yt.mdx.remote.connection_", a);
            X9 && (g.Xb(X9, function(c) {
                c(a)
            }), X9.length = 0);
            b && !a ? m8("yt-remote-connection-change", !1) : !b && a && m8("yt-remote-connection-change", !0)
        },
        c$ = function() {
            var a = g.$C();
            if (!a) return null;
            var b = Y9();
            if (!b) return null;
            b = b.Pk();
            return h8(b, a)
        },
        h$ = function(a, b) {
            Z9();
            d$() && d$();
            if (i$) f$ = a;
            else {
                XBb(a.id);
                var c = g.Sa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new U9(W9, a, OBb(), c);
                a.connect(b, YBb());
                a.subscribe("beforeDisconnect", function(d) {
                    m8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    e$() && (e$(), UBb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = d$();
                    d && "shortLived" == d.idType && (D9() ? B9().handleBrowserChannelAuthError() : A9("refreshLoungeToken called before API ready."))
                });
                UBb(a)
            }
        },
        PBb = function() {
            var a = c$();
            a ? ($9("Resume connection to: " + g8(a)), h$(a, 0)) : (k8(), hBb(), $9("Skipping connecting because no session screen found."))
        },
        MBb = function() {
            var a = OBb();
            if (g.id(a)) {
                a = j8();
                var b = g.YC("yt-remote-session-name") || "",
                    c = g.YC("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.IB("SESSION_INDEX", "0"));
                (b = g.IB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Ra("yt.mdx.remote.channelParams_", a)
            }
        },
        OBb = function() {
            return g.Sa("yt.mdx.remote.channelParams_") || {}
        },
        aCb = function(a, b, c) {
            g.H.call(this);
            var d = this;
            this.module = a;
            this.J = b;
            this.Fc = c;
            this.events = new g.aL(this);
            this.W = this.events.T(this.J, "onVolumeChange", function(e) {
                ZBb(d, e)
            });
            this.D = !1;
            this.G = new g.NL(64);
            this.j = new g.Eu(this.x_, 500, this);
            this.B = new g.Eu(this.y_, 1E3, this);
            this.N = new p8(this.oca, 0, this);
            this.C = {};
            this.Z = new g.Eu(this.o0, 1E3, this);
            this.K = new q8(this.seekTo, 1E3, this);
            g.J(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.k9);
            this.events.T(b, "captionschanged", this.F8);
            this.events.T(b, "captionssettingschanged", this.G_);
            this.events.T(b, "videoplayerreset", this.FJ);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Fc.EV()
            });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                $Bb(d.module) || j$(d) || k$(d, 0)
            });
            a = this.Fc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.ZY, this);
            a.subscribe("remotePlayerChange", this.GE, this);
            a.subscribe("remoteQueueChange", this.FJ, this);
            a.subscribe("previousNextChange", this.WY, this);
            a.subscribe("nowAutoplaying", this.RY, this);
            a.subscribe("autoplayDismissed", this.wY, this);
            g.J(this, this.j);
            g.J(this, this.B);
            g.J(this, this.N);
            g.J(this, this.Z);
            g.J(this, this.K);
            this.G_();
            this.FJ();
            this.GE()
        },
        ZBb = function(a, b) {
            if (j$(a)) {
                a.Fc.unsubscribe("remotePlayerChange", a.GE, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = M9(a.Fc);
                if (c !== d.volume || b !== d.muted) a.Fc.setVolume(c, b), a.Z.start();
                a.Fc.subscribe("remotePlayerChange", a.GE, a)
            }
        },
        bCb = function(a) {
            a.Kc(0);
            a.j.stop();
            a.Cc(new g.NL(64))
        },
        cCb = function(a, b) {
            if (j$(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.J.getSubtitlesUserSettings()
                }, g.qd(c, b));
                a.Fc.lT(a.J.getVideoData(1).videoId, c);
                a.C = M9(a.Fc).trackData
            }
        },
        k$ = function(a, b) {
            var c = a.J.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.J.getVideoData(1);
            a.Fc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ba, mxb(c));
            a.Cc(new g.NL(1))
        },
        dCb = function(a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", {
                    gX: 1
                });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        },
        j$ = function(a) {
            return M9(a.Fc).videoId === a.J.getVideoData(1).videoId
        },
        l$ = function() {
            g.U.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                Y: {
                    role: "dialog"
                },
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                        I: "div",
                        S: "ytp-mdx-popup-title",
                        ya: "You're signed out"
                    }, {
                        I: "div",
                        S: "ytp-mdx-popup-description",
                        ya: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        I: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        V: [{
                            I: "button",
                            Ma: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            ya: "Cancel"
                        }, {
                            I: "button",
                            Ma: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            ya: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.MG(this, 250);
            this.cancelButton = this.Ha("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ha("ytp-mdx-privacy-popup-confirm");
            g.J(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        m$ = function(a) {
            g.U.call(this, {
                I: "div",
                S: "ytp-remote",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    V: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        V: [g.lva()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        ya: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.MG(this, 250);
            g.J(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.Dc(a.Vb())
        },
        n$ = function(a, b) {
            g.LX.call(this, "Play on", 1, a, b);
            this.J = a;
            this.Vt = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        eCb = function(a) {
            g.RV.call(this, a);
            this.Mp = {
                key: Lxb(),
                name: "This computer"
            };
            this.Pl = null;
            this.subscriptions = [];
            this.GQ = this.Fc = null;
            this.Vt = [this.Mp];
            this.Es = this.Mp;
            this.jf = new g.NL(64);
            this.DX = 0;
            this.Sh = -1;
            this.YE = !1;
            this.WE = this.XA = null;
            if (!g.sS(this.player.U()) && !g.jH(this.player.U())) {
                a = this.player;
                var b = g.tU(a);
                b && (b = b.xn()) && (b = new n$(a, b), g.J(this, b));
                b = new m$(a);
                g.J(this, b);
                g.GU(a, b.element, 4);
                this.XA = new l$;
                g.J(this, this.XA);
                g.GU(a, this.XA.element, 4);
                this.YE = !!c$()
            }
        },
        o$ = function(a) {
            a.WE && (a.player.removeEventListener("presentingplayerstatechange",
                a.WE), a.WE = null)
        },
        fCb = function(a, b, c) {
            a.jf = c;
            a.player.oa("presentingplayerstatechange", new g.SG(c, b))
        },
        p$ = function(a, b) {
            if (b.key !== a.Es.key)
                if (b.key === a.Mp.key) g$();
                else if ($Bb(a) && gCb(a), a.Es = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.jH(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.getLength(); l++) h[l] = g.OV(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Ba,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = mxb(d)) && (a.locationInfo = d);
                    d = a
                }
                $9("Connecting to: " + g.Mm(b));
                "cast-selector-receiver" == b.key ? (b$(d || null), b = d || null, D9() ? B9().setLaunchParams(b) : A9("setLaunchParams called before ready.")) : !d && VBb() && Z9() == b.key ? m8("yt-remote-connection-change", !0) : (g$(), b$(d || null), d = Y9().Pk(), (b = h8(d, b.key)) && h$(b, 1))
            }
        },
        $Bb = function(a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.YE || !a.XA ? !1 : g.BS(b) || g.DS(b)
        },
        gCb = function(a) {
            a.player.Vb().isPlaying() ? a.player.pauseVideo() : (a.WE = function(b) {
                !a.YE && g.VG(b, 8) && (a.player.pauseVideo(), o$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.WE));
            a.XA && a.XA.od();
            e$() || (i$ = !0)
        };
    g.Tx.prototype.Rs = g.ca(0, function() {
        return g.Tj(this, 6)
    });
    var pzb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        R8 = {
            "'": "\\'"
        },
        Fxb = {
            sna: "atp",
            J2a: "ska",
            K_a: "que",
            lSa: "mus",
            I2a: "sus",
            BDa: "dsp",
            Q0a: "seq",
            NQa: "mic",
            Cua: "dpa",
            Eoa: "cds",
            bSa: "mlm",
            qua: "dsdtr",
            LSa: "ntb",
            qeb: "vsp",
            rva: "scn",
            Y_a: "rpe",
            oua: "dcn",
            pua: "dcp",
            oXa: "pas"
        },
        Gxb = {
            Z3: "u",
            CLASSIC: "cl",
            J3: "k",
            w1: "i",
            Y0: "cr",
            P3: "m",
            s1: "g",
            uU: "up"
        };
    d8.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var l8, Rxb = "";
    Zxb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.KB("enable_client_streamz_web")) {
            a = g.u(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.Rea(c.value), c = {
                serializedIncrementBatch: g.fg(c.j())
            }, g.qD("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var n8, gyb = ayb("loadCastFramework") || ayb("loadCastApplicationFramework"),
        jyb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.ib(p8, g.H);
    g.k = p8.prototype;
    g.k.W1 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.fd ? this.C = g.gb() + this.Yi : this.fd = g.ag(this.G, this.Yi)
    };
    g.k.stop = function() {
        this.fd && (g.Qa.clearTimeout(this.fd), this.fd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)))
    };
    g.k.xa = function() {
        this.stop();
        p8.Lf.xa.call(this)
    };
    g.k.X1 = function() {
        this.fd && (g.Qa.clearTimeout(this.fd), this.fd = null);
        this.C ? (this.fd = g.ag(this.G, this.C - g.gb()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D))
    };
    g.w(q8, g.H);
    g.k = q8.prototype;
    g.k.vL = function(a) {
        this.C = arguments;
        this.fd || this.B ? this.j = !0 : lyb(this)
    };
    g.k.stop = function() {
        this.fd && (g.Qa.clearTimeout(this.fd), this.fd = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.fd || (this.j = !1, lyb(this))
    };
    g.k.xa = function() {
        g.H.prototype.xa.call(this);
        this.stop()
    };
    r8.prototype.stringify = function(a) {
        return g.Qa.JSON.stringify(a, void 0)
    };
    r8.prototype.parse = function(a) {
        return g.Qa.JSON.parse(a, void 0)
    };
    g.ib(myb, g.yb);
    g.ib(nyb, g.yb);
    var oyb = null;
    g.ib(qyb, g.yb);
    g.ib(ryb, g.yb);
    g.ib(syb, g.yb);
    v8.prototype.debug = function() {};
    v8.prototype.info = function() {};
    v8.prototype.warning = function() {};
    var Ayb = {},
        zyb = {};
    g.k = w8.prototype;
    g.k.setTimeout = function(a) {
        this.tb = a
    };
    g.k.b2 = function(a) {
        a = a.target;
        var b = this.Xa;
        b && 3 == g.Tm(a) ? b.vL() : this.OS(a)
    };
    g.k.OS = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.Tm(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.ES || this.j && (this.B.B || g.Vm(this.j) || g.Wm(this.j)))) {
                    this.La || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2));
                    A8(this);
                    var e = this.j.getStatus();
                    this.Bb = e;
                    b: if (xyb(this)) {
                        var f = g.Wm(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.Tm(this.j);
                        if (!this.B.C) {
                            if ("undefined" === typeof TextDecoder) {
                                y8(this);
                                z8(this);
                                var m = "";
                                break b
                            }
                            this.B.C = new g.Qa.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.B.B = !0, a += this.B.C.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.length = 0;
                        this.B.j += a;
                        this.K = 0;
                        m = this.B.j
                    } else m = g.Vm(this.j);
                    if (this.C = 200 == e) {
                        if (this.Rb && !this.Va) {
                            b: {
                                if (this.j) {
                                    var n = g.Xm(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.cc(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Va = !0,
                            Byb(this, e);
                            else {
                                this.C = !1;
                                this.N = 3;
                                t8(12);
                                y8(this);
                                z8(this);
                                break a
                            }
                        }
                        this.Ga ? (Cyb(this, b, m), g.ES && this.C && 3 == b && (this.bb.Ra(this.kb, "tick", this.Z1), this.kb.start())) : Byb(this, m);
                        4 == b && y8(this);
                        this.C && !this.La && (4 == b ? Eyb(this.G, this) : (this.C = !1, x8(this)))
                    } else g.Gfa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.N = 3, t8(12)) : (this.N = 0, t8(13)), y8(this), z8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.Z1 = function() {
        if (this.j) {
            var a = g.Tm(this.j),
                b = g.Vm(this.j);
            this.K < b.length && (A8(this), Cyb(this, a, b), this.C && 4 != a && x8(this))
        }
    };
    g.k.cancel = function() {
        this.La = !0;
        y8(this)
    };
    g.k.Y1 = function() {
        this.ma = null;
        var a = Date.now();
        0 <= a - this.Jb ? (2 != this.Qa && (s8(3), t8(17)), y8(this), this.N = 2, z8(this)) : Dyb(this, this.Jb - a)
    };
    g.k.getLastError = function() {
        return this.N
    };
    g.k.jO = function() {
        return this.j
    };
    Nyb.prototype.cancel = function() {
        this.C = Pyb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = Tyb.prototype;
    g.k.PS = 8;
    g.k.Gh = 1;
    g.k.connect = function(a, b, c, d) {
        t8(0);
        this.ac = a;
        this.La = b || {};
        c && void 0 !== d && (this.La.OSID = c, this.La.OAID = d);
        this.Va = this.Ic;
        this.Na = Jyb(this, null, this.ac);
        E8(this)
    };
    g.k.disconnect = function() {
        Vyb(this);
        if (3 == this.Gh) {
            var a = this.Za++,
                b = this.Na.clone();
            g.xo(b, "SID", this.D);
            g.xo(b, "RID", a);
            g.xo(b, "TYPE", "terminate");
            H8(this, b);
            a = new w8(this, this.D, a);
            a.Qa = 2;
            a.Z = $7(b.clone());
            b = !1;
            if (g.Qa.navigator && g.Qa.navigator.sendBeacon) try {
                b = g.Qa.navigator.sendBeacon(a.Z.toString(), "")
            } catch (c) {}!b && g.Qa.Image && ((new Image).src = a.Z, b = !0);
            b || (a.j = wyb(a.G, null), a.j.send(a.Z));
            a.Ba = Date.now();
            x8(a)
        }
        azb(this)
    };
    g.k.Pg = function() {
        return 0 == this.Gh
    };
    g.k.getState = function() {
        return this.Gh
    };
    g.k.RS = function(a) {
        if (this.K)
            if (this.K = null, 1 == this.Gh) {
                if (!a) {
                    this.Za = Math.floor(1E5 * Math.random());
                    a = this.Za++;
                    var b = new w8(this, "", a),
                        c = this.W;
                    this.Jb && (c ? (c = g.ld(c), g.qd(c, this.Jb)) : c = this.Jb);
                    null !== this.N || this.rb || (b.Na = c, c = null);
                    var d;
                    if (this.tb) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = Yyb(this, b, d);
                    e = this.Na.clone();
                    g.xo(e, "RID", a);
                    g.xo(e, "CVER", 22);
                    this.Ga && g.xo(e, "X-HTTP-Session-Id", this.Ga);
                    H8(this, e);
                    c && (this.rb ? d = "headers=" + g.pe(g.Iga(c)) + "&" + d : this.N && g.bp(e, this.N, c));
                    Iyb(this.B, b);
                    this.Rf && g.xo(e, "TYPE", "init");
                    this.tb ? (g.xo(e, "$req", d), g.xo(e, "SID", "null"), b.Rb = !0, vyb(b, e, null)) : vyb(b, e, d);
                    this.Gh = 2
                }
            } else 3 == this.Gh && (a ? Zyb(this, a) : 0 == this.C.length || Oyb(this.B) || Zyb(this))
    };
    g.k.QS = function() {
        this.Z = null;
        $yb(this);
        if (this.Oc && !(this.kb || null == this.j || 0 >= this.Od)) {
            var a = 2 * this.Od;
            this.Ea = u8((0, g.eb)(this.E8, this), a)
        }
    };
    g.k.E8 = function() {
        this.Ea && (this.Ea = null, this.Va = !1, this.kb = !0, t8(10), C8(this), $yb(this))
    };
    g.k.UP = function(a) {
        this.j == a && this.Oc && !this.kb && (Uyb(this), this.kb = !0, t8(11))
    };
    g.k.d2 = function() {
        null != this.ma && (this.ma = null, C8(this), Gyb(this), t8(19))
    };
    g.k.Qba = function(a) {
        a ? t8(2) : t8(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = czb.prototype;
    g.k.WS = function() {};
    g.k.VS = function() {};
    g.k.US = function() {};
    g.k.SS = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.e2 = function() {};
    g.ib(J8, g.Dd);
    J8.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Qa = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    J8.prototype.close = function() {
        this.j.disconnect()
    };
    J8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Mm(a), a = c);
        b.C.push(new Myb(b.Of++, a));
        3 == b.Gh && E8(b)
    };
    J8.prototype.xa = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        J8.Lf.xa.call(this)
    };
    g.ib(ezb, myb);
    g.ib(fzb, nyb);
    g.ib(I8, czb);
    I8.prototype.WS = function() {
        this.j.dispatchEvent("m")
    };
    I8.prototype.VS = function(a) {
        this.j.dispatchEvent(new ezb(a))
    };
    I8.prototype.US = function(a) {
        this.j.dispatchEvent(new fzb(a))
    };
    I8.prototype.SS = function() {
        this.j.dispatchEvent("n")
    };
    var L8 = new g.Dd;
    g.w(izb, g.yb);
    g.k = N8.prototype;
    g.k.Ku = null;
    g.k.rq = !1;
    g.k.Nx = null;
    g.k.xL = null;
    g.k.Lx = null;
    g.k.Mx = null;
    g.k.Tr = null;
    g.k.Vr = null;
    g.k.Lu = null;
    g.k.hj = null;
    g.k.tG = 0;
    g.k.Bo = null;
    g.k.sG = null;
    g.k.Ur = null;
    g.k.ZB = -1;
    g.k.f_ = !0;
    g.k.Ju = !1;
    g.k.wL = 0;
    g.k.rG = null;
    var nzb = {},
        mzb = {};
    g.k = N8.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.j2 = function(a) {
        a = a.target;
        var b = this.rG;
        b && 3 == g.Tm(a) ? b.vL() : this.XS(a)
    };
    g.k.XS = function(a) {
        try {
            if (a == this.hj) a: {
                var b = g.Tm(this.hj),
                    c = this.hj.B,
                    d = this.hj.getStatus();
                if (g.We && !g.Oc(10) || g.Pc && !g.Nc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Vm(this.hj)) break a;this.Ju || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Qn(3) : this.j.Qn(2));szb(this);
                var e = this.hj.getStatus();this.ZB = e;
                var f = g.Vm(this.hj);
                if (this.rq = 200 == e) {
                    4 == b && P8(this);
                    if (this.Ga) {
                        for (a = !0; !this.Ju && this.tG < f.length;) {
                            var h = ozb(this, f);
                            if (h == mzb) {
                                4 == b && (this.Ur = 4, M8(15), a = !1);
                                break
                            } else if (h == nzb) {
                                this.Ur = 4;
                                M8(16);
                                a = !1;
                                break
                            } else tzb(this, h)
                        }
                        4 == b && 0 == f.length && (this.Ur = 1, M8(17), a = !1);
                        this.rq = this.rq && a;
                        a || (P8(this), Q8(this))
                    } else tzb(this, f);
                    this.rq && !this.Ju && (4 == b ? this.j.uG(this) : (this.rq = !1, O8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Ur = 3, M8(13)) : (this.Ur = 0, M8(14)),
                P8(this),
                Q8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.P$ = function(a) {
        K8((0, g.eb)(this.O$, this, a), 0)
    };
    g.k.O$ = function(a) {
        this.Ju || (szb(this), tzb(this, a), O8(this))
    };
    g.k.eZ = function(a) {
        K8((0, g.eb)(this.N$, this, a), 0)
    };
    g.k.N$ = function(a) {
        this.Ju || (P8(this), this.rq = a, this.j.uG(this), this.j.Qn(4))
    };
    g.k.cancel = function() {
        this.Ju = !0;
        P8(this)
    };
    g.k.f2 = function() {
        this.Nx = null;
        var a = Date.now();
        0 <= a - this.xL ? (2 != this.Mx && this.j.Qn(3), P8(this), this.Ur = 2, M8(18), Q8(this)) : rzb(this, this.xL - a)
    };
    g.k.getLastError = function() {
        return this.Ur
    };
    g.k = wzb.prototype;
    g.k.zL = null;
    g.k.Mj = null;
    g.k.cK = !1;
    g.k.z_ = null;
    g.k.IH = null;
    g.k.gP = null;
    g.k.AL = null;
    g.k.Ml = null;
    g.k.tq = -1;
    g.k.aC = null;
    g.k.MC = null;
    g.k.connect = function(a) {
        this.AL = a;
        a = T8(this.j, null, this.AL);
        M8(3);
        this.z_ = Date.now();
        var b = this.j.W;
        null != b ? (this.aC = b[0], (this.MC = b[1]) ? (this.Ml = 1, xzb(this)) : (this.Ml = 2, yzb(this))) : (a8(a, "MODE", "init"), this.Mj = new N8(this), this.Mj.Ku = this.zL, lzb(this.Mj, a, !1, null, !0), this.Ml = 0)
    };
    g.k.N4 = function(a) {
        if (a) this.Ml = 2, yzb(this);
        else {
            M8(4);
            var b = this.j;
            b.Ko = b.Bs.tq;
            X8(b, 9)
        }
        a && this.Qn(2)
    };
    g.k.yL = function(a) {
        return this.j.yL(a)
    };
    g.k.abort = function() {
        this.Mj && (this.Mj.cancel(), this.Mj = null);
        this.tq = -1
    };
    g.k.Pg = function() {
        return !1
    };
    g.k.YS = function(a, b) {
        this.tq = a.ZB;
        if (0 == this.Ml)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Ko = this.tq;
                    X8(a, 2);
                    return
                }
                this.aC = c[0];
                this.MC = c[1]
            } else a = this.j, a.Ko = this.tq, X8(a, 2);
        else if (2 == this.Ml)
            if (this.cK) M8(7), this.gP = Date.now();
            else if ("11111" == b) {
            if (M8(6), this.cK = !0, this.IH = Date.now(), a = this.IH - this.z_, !g.We || g.Oc(10) || 500 > a) this.tq = 200, this.Mj.cancel(), M8(12), U8(this.j, this, !0)
        } else M8(8), this.IH = this.gP = Date.now(), this.cK = !1
    };
    g.k.uG = function() {
        this.tq = this.Mj.ZB;
        if (this.Mj.rq) 0 == this.Ml ? this.MC ? (this.Ml = 1, xzb(this)) : (this.Ml = 2, yzb(this)) : 2 == this.Ml && ((!g.We || g.Oc(10) ? !this.cK : 200 > this.gP - this.IH) ? (M8(11), U8(this.j, this, !1)) : (M8(12), U8(this.j, this, !0)));
        else {
            0 == this.Ml ? M8(9) : 2 == this.Ml && M8(10);
            var a = this.j;
            this.Mj.getLastError();
            a.Ko = this.tq;
            X8(a, 2)
        }
    };
    g.k.bC = function() {
        return this.j.bC()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.Qn = function(a) {
        this.j.Qn(a)
    };
    g.k = zzb.prototype;
    g.k.Jo = null;
    g.k.cC = null;
    g.k.Wj = null;
    g.k.Lg = null;
    g.k.BL = null;
    g.k.vG = null;
    g.k.ZS = null;
    g.k.wG = null;
    g.k.dC = 0;
    g.k.m2 = 0;
    g.k.Pi = null;
    g.k.Wr = null;
    g.k.uq = null;
    g.k.Nu = null;
    g.k.Bs = null;
    g.k.YK = null;
    g.k.Qx = -1;
    g.k.aT = -1;
    g.k.Ko = -1;
    g.k.Px = 0;
    g.k.Ox = 0;
    g.k.Mu = 8;
    g.ib(Bzb, g.yb);
    g.ib(Czb, g.yb);
    g.k = zzb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        M8(0);
        this.BL = b;
        this.cC = c || {};
        d && void 0 !== e && (this.cC.OSID = d, this.cC.OAID = e);
        this.Z ? (K8((0, g.eb)(this.oV, this, a), 100), Ezb(this)) : this.oV(a)
    };
    g.k.disconnect = function() {
        Fzb(this);
        if (3 == this.j) {
            var a = this.dC++,
                b = this.vG.clone();
            g.xo(b, "SID", this.D);
            g.xo(b, "RID", a);
            g.xo(b, "TYPE", "terminate");
            W8(this, b);
            a = new N8(this, this.D, a);
            a.Mx = 2;
            a.Tr = $7(b.clone());
            (new Image).src = a.Tr.toString();
            a.Lx = Date.now();
            O8(a)
        }
        Pzb(this)
    };
    g.k.oV = function(a) {
        this.Bs = new wzb(this);
        this.Bs.zL = this.Jo;
        this.Bs.B = this.G;
        this.Bs.connect(a)
    };
    g.k.Pg = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.cT = function(a) {
        this.Wr = null;
        Kzb(this, a)
    };
    g.k.bT = function() {
        this.uq = null;
        this.Lg = new N8(this, this.D, "rpc", this.N);
        this.Lg.Ku = this.Jo;
        this.Lg.wL = 0;
        var a = this.ZS.clone();
        g.xo(a, "RID", "rpc");
        g.xo(a, "SID", this.D);
        g.xo(a, "CI", this.YK ? "0" : "1");
        g.xo(a, "AID", this.Qx);
        W8(this, a);
        if (!g.We || g.Oc(10)) g.xo(a, "TYPE", "xmlhttp"), lzb(this.Lg, a, !0, this.wG, !1);
        else {
            g.xo(a, "TYPE", "html");
            var b = this.Lg,
                c = !!this.wG;
            b.Mx = 3;
            b.Tr = $7(a.clone());
            qzb(b, c)
        }
    };
    g.k.YS = function(a, b) {
        if (0 != this.j && (this.Lg == a || this.Wj == a))
            if (this.Ko = a.ZB, this.Wj == a && 3 == this.j)
                if (7 < this.Mu) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.uq) {
                                if (this.Lg)
                                    if (this.Lg.Lx + 3E3 < this.Wj.Lx) V8(this), this.Lg.cancel(), this.Lg = null;
                                    else break a;
                                Nzb(this);
                                M8(19)
                            }
                        }
                    else this.aT = a[1], 0 < this.aT - this.Qx && 37500 > a[2] && this.YK && 0 == this.Ox && !this.Nu && (this.Nu = K8((0, g.eb)(this.n2, this), 6E3));
                    else X8(this, 11)
                } else null != b && X8(this, 11);
        else if (this.Lg ==
            a && V8(this), !g.cc(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.Qx = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.D = c[1], this.wG = c[2], c = c[3], null != c ? this.Mu = c : this.Mu = 6, this.j = 3, this.Pi && this.Pi.fT(), this.ZS = T8(this, this.bC() ? this.wG : null, this.BL), Lzb(this)) : "stop" == c[0] && X8(this, 7) : 3 == this.j && ("stop" == c[0] ? X8(this, 7) : "noop" != c[0] && this.Pi && this.Pi.eT(c), this.Ox = 0)
    };
    g.k.n2 = function() {
        null != this.Nu && (this.Nu = null, this.Lg.cancel(), this.Lg = null, Nzb(this), M8(20))
    };
    g.k.uG = function(a) {
        if (this.Lg == a) {
            V8(this);
            this.Lg = null;
            var b = 2
        } else if (this.Wj == a) this.Wj = null, b = 1;
        else return;
        this.Ko = a.ZB;
        if (0 != this.j)
            if (a.rq)
                if (1 == b) {
                    b = a.Lu ? a.Lu.length : 0;
                    a = Date.now() - a.Lx;
                    var c = L8;
                    c.dispatchEvent(new Bzb(c, b, a, this.Px));
                    Dzb(this);
                    this.C.length = 0
                } else Lzb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Ko)) {
                if (d = 1 == b) this.Wj || this.Wr || 1 == this.j || 2 <= this.Px ? d = !1 : (this.Wr = K8((0, g.eb)(this.cT, this, a), Mzb(this, this.Px)), this.Px++, d = !0);
                d = !(d || 2 == b && Nzb(this))
            }
            if (d) switch (c) {
                case 1:
                    X8(this,
                        5);
                    break;
                case 4:
                    X8(this, 10);
                    break;
                case 3:
                    X8(this, 6);
                    break;
                case 7:
                    X8(this, 12);
                    break;
                default:
                    X8(this, 2)
            }
        }
    };
    g.k.l2 = function(a) {
        if (!g.Fb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.Pba = function(a) {
        a ? M8(2) : (M8(1), Ozb(this, 8))
    };
    g.k.yL = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Qm;
        a.K = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Pi && this.Pi.isActive(this)
    };
    g.k.Qn = function(a) {
        var b = L8;
        b.dispatchEvent(new Czb(b, a))
    };
    g.k.bC = function() {
        return !(!g.We || g.Oc(10))
    };
    g.k = Qzb.prototype;
    g.k.fT = function() {};
    g.k.eT = function() {};
    g.k.dT = function() {};
    g.k.CL = function() {};
    g.k.gT = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = Rzb.prototype;
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.B.length
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.Fb(this.j, a) || g.Fb(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.Reb)(b, a);
        0 <= c ? (g.Gb(b, c), b = !0) : b = !1;
        return b || g.Hb(this.B, a)
    };
    g.k.hm = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b) a.push(this.B[b]);
        return a
    };
    g.w(Szb, g.yb);
    g.w(Tzb, g.yb);
    g.ib(Y8, g.H);
    g.k = Y8.prototype;
    g.k.H$ = function() {
        this.Yi = Math.min(3E5, 2 * this.Yi);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.Yi + 15E3 * Math.random();
        g.Fu(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Yi = 5E3
    };
    g.ib(Vzb, Qzb);
    g.k = Vzb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.Fh = function(a) {
        return this.C.Fh(a)
    };
    g.k.oa = function(a, b) {
        return this.C.oa.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.ub(this.C), this.disconnect(), g.ub(this.B), this.B = null, this.ra = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.W = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ba + "/test";
            b = this.Ba + "/bind";
            var d = new zzb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Qa),
                e = this.j;
            e && (e.Pi = null);
            d.Pi = this;
            this.j = d;
            Wzb(this);
            if (this.j) {
                d = g.IB("ID_TOKEN");
                var f = this.j.Jo || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Jo = f
            }
            e ? (3 != e.getState() && 0 == Hzb(e) || e.getState(), this.j.connect(a, b, this.N, e.D, e.Qx)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        Wzb(this);
        this.j && (3 == this.j.getState() && Kzb(this.j), this.j.disconnect());
        this.Z = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.qd(a, b);
        this.B.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.D.push(a) : this.Lz() && (Wzb(this), Gzb(this.j, a))
    };
    g.k.fT = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b) Gzb(this.j, a[b])
        }
        this.oa("handlerOpened");
        txb(this.Na, "BROWSER_CHANNEL")
    };
    g.k.dT = function(a) {
        var b = 2 == a && 401 == this.j.Ko;
        4 == a || b || this.B.start();
        this.oa("handlerError", a, b);
        zxb(this.Ga, "BROWSER_CHANNEL")
    };
    g.k.CL = function(a, b) {
        if (!this.B.isActive()) this.oa("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        vxb(this.Ea, "BROWSER_CHANNEL");
        a && this.Xa.j.DL("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.Za.j.DL("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.gT = function() {
        var a = {
            v: 2
        };
        this.W && (a.gsessionid = this.W);
        0 != this.G && (a.ui = "" + this.G);
        0 != this.Z && (a.ui = "" + this.Z);
        this.K && g.qd(a, this.K);
        return a
    };
    g.k.eT = function(a) {
        "S" == a[0] ? this.W = a[1] : "gracefulReconnect" == a[0] ? (this.B.start(), this.j.disconnect()) : this.oa("handlerMessage", new Uzb(a[0], a[1]));
        xxb(this.La, "BROWSER_CHANNEL")
    };
    g.k.Lz = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.Hr = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Va && this.j) {
            var b = this.j.Jo || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Jo = b
        }
    };
    g.k.Rs = function() {
        return this.N.id
    };
    g.k.Xs = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.Vw = function() {
        var a = this.B;
        g.Gu(a.j);
        a.start()
    };
    g.k.aba = function() {
        this.B.isActive();
        0 == Hzb(this.j) && this.connect(this.K, this.G)
    };
    Z8.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Z8.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Z8.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.w(Yzb, g.Dd);
    g.k = Yzb.prototype;
    g.k.connect = function(a, b, c) {
        this.Ad.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Ad.disconnect(a)
    };
    g.k.Vw = function() {
        this.Ad.Vw()
    };
    g.k.Rs = function() {
        return this.Ad.Rs()
    };
    g.k.Xs = function() {
        return this.Ad.Xs()
    };
    g.k.Lz = function() {
        return this.Ad.Lz()
    };
    g.k.s2 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Ad,
            b = this.j;
        g.XC("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.YK,
            sessionId: a.j.D,
            arrayId: a.j.Qx
        });
        g.XC("yt-remote-session-screen-id", b);
        a = i8();
        b = j8();
        g.Fb(a, b) || a.push(b);
        Qxb(a);
        Sxb()
    };
    g.k.o2 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.q2 = function(a) {
        this.dispatchEvent(new Szb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new Tzb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Ad.sendMessage(a, b)
    };
    g.k.Hr = function(a) {
        this.Ad.Hr(a)
    };
    g.k.dispose = function() {
        this.Ad.dispose()
    };
    g.k = Zzb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.K && (this.C.stop(), this.Z = a, this.N = b, aAb(this), (a = g.IB("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.V7 && (this.B.mdxVersion = "" + this.j.V7), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.e5 && (this.B.cst = this.j.e5),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), 0 !== this.N ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new J8(this.pathPrefix, {
            j7: "gsessionid",
            Z7: this.D,
            a8: this.B
        }), this.channel.open(), this.K = 2, $zb(this))
    };
    g.k.disconnect = function(a) {
        this.W = void 0 === a ? 0 : a;
        this.C.stop();
        aAb(this);
        this.channel && (0 !== this.W ? this.B.ui = "" + this.W : delete this.B.ui, this.channel.close());
        this.W = 0
    };
    g.k.Xs = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.Vw = function() {
        var a = this.C;
        g.Gu(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (aAb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Hr = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.Rs = function() {
        return this.j ? this.j.id : ""
    };
    g.k.oa = function(a) {
        return this.G.oa.apply(this.G, [a].concat(g.oa(g.Ia.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.Fh = function(a) {
        return this.G.Fh(a)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.ub(this.G), this.disconnect(), g.ub(this.C), this.Ba = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.w(bAb, g.Dd);
    g.k = bAb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Vw = function() {
        this.j.Vw()
    };
    g.k.Rs = function() {
        return this.j.Rs()
    };
    g.k.Xs = function() {
        return this.j.Xs()
    };
    g.k.Lz = function() {
        return 3 === this.j.K
    };
    g.k.w2 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.t2 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.v2 = function(a) {
        this.dispatchEvent(new Szb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new Tzb(401 === this.j.Eg ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Hr = function(a) {
        this.j.Hr(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var jAb = Date.now(),
        a9 = null,
        e9 = Array(50),
        d9 = -1,
        f9 = !1;
    g.ib(g9, g.cG);
    g9.prototype.Pk = function() {
        return this.screens
    };
    g9.prototype.contains = function(a) {
        return !!Nxb(this.screens, a)
    };
    g9.prototype.get = function(a) {
        return a ? h8(this.screens, a) : null
    };
    g9.prototype.info = function(a) {
        b9(this.K, a)
    };
    g.w(nAb, g.cG);
    g.k = nAb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.fd) && this.yZ()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.fd) || (g.cC(this.fd), this.fd = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.cG.prototype.xa.call(this)
    };
    g.k.yZ = function() {
        this.fd = NaN;
        this.j = g.fC($8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.eb)(this.A2, this),
            onError: (0, g.eb)(this.z2, this),
            onTimeout: (0, g.eb)(this.B2, this)
        })
    };
    g.k.A2 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.oa("pairingComplete", new e8(a), b)
    };
    g.k.z2 = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.B >= hCb.length ? this.oa("pairingFailed", Error("DIAL polling timed out")) : (a = hCb[this.B], this.fd = g.aC((0, g.eb)(this.yZ, this), a), this.B++) : this.oa("pairingFailed", Error("Server error " + a.status))
    };
    g.k.B2 = function() {
        this.j = null;
        this.oa("pairingFailed", Error("Server not responding"))
    };
    var hCb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.ib(i9, g9);
    g.k = i9.prototype;
    g.k.start = function() {
        h9(this) && this.oa("screenChange");
        !g.YC("yt-remote-lounge-token-expiration") && oAb(this);
        g.cC(this.j);
        this.j = g.aC((0, g.eb)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        h9(this);
        kAb(this, a);
        j9(this, !1);
        this.oa("screenChange");
        b(a);
        a.token || oAb(this)
    };
    g.k.remove = function(a, b) {
        var c = h9(this);
        mAb(this, a) && (j9(this, !1), c = !0);
        b(a);
        c && this.oa("screenChange")
    };
    g.k.XK = function(a, b, c, d) {
        var e = h9(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, j9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.oa("screenChange")
    };
    g.k.xa = function() {
        g.cC(this.j);
        i9.Lf.xa.call(this)
    };
    g.k.H6 = function(a) {
        h9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        j9(this, !b);
        b && b9(this.K, "Missed " + b + " lounge tokens.")
    };
    g.k.G6 = function(a) {
        b9(this.K, "Requesting lounge tokens failed: " + a)
    };
    g.w(qAb, g.cG);
    g.k = qAb.prototype;
    g.k.start = function() {
        var a = parseInt(g.YC("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.gb() - 144E5 < a ? 0 : a) ? k9(this): (this.D = g.gb() + 3E5, g.XC("yt-remote-fast-check-period", this.D), this.ZQ())
    };
    g.k.isEmpty = function() {
        return g.id(this.j)
    };
    g.k.update = function() {
        pAb("Updating availability on schedule.");
        var a = this.K(),
            b = g.Xc(this.j, function(c, d) {
                return c && !!h8(a, d)
            }, this);
        tAb(this, b)
    };
    g.k.xa = function() {
        g.cC(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.cG.prototype.xa.call(this)
    };
    g.k.ZQ = function() {
        g.cC(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = uAb(this);
        if (oxb(a)) {
            var b = $8(this.G, "/pairing/get_screen_availability");
            this.B = Xzb(this.G, b, {
                lounge_token: g.ed(a).join(",")
            }, (0, g.eb)(this.n$, this, a), (0, g.eb)(this.m$, this))
        } else tAb(this, {}), k9(this)
    };
    g.k.n$ = function(a, b) {
        this.B = null;
        var c = g.ed(uAb(this));
        if (g.Vb(c, g.ed(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
            tAb(this, c);
            k9(this)
        } else this.cg("Changing Screen set during request."), this.ZQ()
    };
    g.k.m$ = function(a) {
        this.cg("Screen availability failed: " + a);
        this.B = null;
        k9(this)
    };
    g.k.cg = function(a) {
        b9("OnlineScreenService", a)
    };
    g.ib(l9, g9);
    g.k = l9.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.oa("screenChange"), this.j.isEmpty() || this.oa("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.XK = function(a, b, c, d) {
        this.B.contains(a) ? this.B.XK(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b9(this.K, a), d(Error(a)))
    };
    g.k.Pk = function(a) {
        return a ? this.screens : g.Jb(this.screens, g.bt(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.hT = function() {
        return g.bt(this.Pk(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.iT = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new nAb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.ub(l);
            e(m9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.ub(l);
            f(m)
        });
        l.start();
        return (0, g.eb)(l.stop, l)
    };
    g.k.C2 = function(a, b, c, d) {
        g.fC($8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.eb)(function(e, f) {
                e = new e8(f.screen || {});
                if (!e.name || yAb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); yAb(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(m9(this, e))
            }, this),
            onError: (0, g.eb)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.eb)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.ub(this.B);
        g.ub(this.j);
        l9.Lf.xa.call(this)
    };
    g.k.R6 = function() {
        AAb(this);
        this.oa("screenChange");
        this.j.update()
    };
    l9.prototype.dispose = l9.prototype.dispose;
    g.ib(n9, g.cG);
    g.k = n9.prototype;
    g.k.Cj = function(a) {
        this.isDisposed() || (a && (p9(this, "" + a), this.oa("sessionFailed")), this.j = null, this.oa("sessionScreen", null))
    };
    g.k.info = function(a) {
        b9(this.Ga, a)
    };
    g.k.jT = function() {
        return null
    };
    g.k.rR = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.eb)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.eb)(function() {
            p9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.rR("");
        n9.Lf.xa.call(this)
    };
    g.w(q9, n9);
    g.k = q9.prototype;
    g.k.pR = function(a) {
        if (this.C) {
            if (this.C == a) return;
            p9(this, "Overriding cast session with new session object");
            MAb(this);
            this.Ba = !1;
            this.W = "unknown";
            this.C.removeUpdateListener(this.ra);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea)
        }
        this.C = a;
        this.C.addUpdateListener(this.ra);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea);
        HAb(this, "getMdxSessionStatus")
    };
    g.k.Xz = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Mm(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.eb)(function() {
            this.Cj()
        }, this), (0, g.eb)(function() {
            this.Cj(Error("Failed to stop receiver app."))
        }, this)) : this.Cj(Error("Stopping cast device without session."))
    };
    g.k.rR = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        MAb(this);
        this.C && (this.C.removeUpdateListener(this.ra), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea));
        this.C = null;
        n9.prototype.xa.call(this)
    };
    g.k.X$ = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = b8(b), g.$a(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Mm(b)), a) {
                    case "mdxSessionStatus":
                        EAb(this, b);
                        break;
                    case "loungeToken":
                        IAb(this, b);
                        break;
                    default:
                        p9(this, "Unknown youtube message: " + a)
                } else p9(this, "Unable to parse message.");
                else p9(this, "No data in message.")
    };
    g.k.uW = function(a, b, c, d) {
        g.cC(this.Z);
        this.Z = 0;
        xAb(this.D, this.B.label, a, this.B.friendlyName, (0, g.eb)(function(e) {
            e ? b(e) : 0 <= d ? (p9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.aC((0, g.eb)(this.uW, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.jT = function() {
        return this.C
    };
    g.k.D2 = function(a) {
        this.isDisposed() || a || (p9(this, "Cast session died."), this.Cj())
    };
    g.w(r9, n9);
    g.k = r9.prototype;
    g.k.pR = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.La)
    };
    g.k.Xz = function(a) {
        this.Na = a;
        this.ma()
    };
    g.k.stop = function() {
        UAb(this);
        this.C ? this.C.stop((0, g.eb)(this.Cj, this, null), (0, g.eb)(this.Cj, this, "Failed to stop DIAL device.")) : this.Cj()
    };
    g.k.xa = function() {
        UAb(this);
        this.C && this.C.removeUpdateListener(this.La);
        this.C = null;
        n9.prototype.xa.call(this)
    };
    g.k.E2 = function(a) {
        this.isDisposed() || a || (p9(this, "DIAL session died."), this.G(), this.G = function() {}, this.Cj())
    };
    g.w(u9, n9);
    u9.prototype.stop = function() {
        this.Cj()
    };
    u9.prototype.pR = function() {};
    u9.prototype.Xz = function() {
        g.cC(this.C);
        this.C = NaN;
        var a = h8(this.D.Pk(), this.B.label);
        a ? o9(this, a) : this.Cj(Error("No such screen"))
    };
    u9.prototype.xa = function() {
        g.cC(this.C);
        this.C = NaN;
        n9.prototype.xa.call(this)
    };
    g.w(v9, g.cG);
    g.k = v9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
        this.W || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.eb)(this.W9, this);
        c = new chrome.cast.ApiConfig(c, (0, g.eb)(this.aZ, this), e, d, a);
        c.customDialLaunchCallback = (0, g.eb)(this.T8, this);
        chrome.cast.initialize(c, (0, g.eb)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.G), gAb(), this.B.subscribe("onlineScreenChange", (0, g.eb)(this.kT, this)), this.C = XAb(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.eb)(function(f) {
                this.cg("Failed to set initial custom receivers: " + g.Mm(f))
            }, this)), this.oa("yt-remote-cast2-availability-change", x9(this)), b(!0))
        }, this), (0, g.eb)(function(f) {
            this.cg("Failed to initialize API: " + g.Mm(f));
            b(!1)
        }, this))
    };
    g.k.lba = function(a, b) {
        w9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) w9("Unsetting old screen status: " + this.j.B.friendlyName), y9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = h8(this.B.Pk(), a);
                if (!c) {
                    w9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    w9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = VAb(this, c);
                a || (w9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(a), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.eb)(function(d) {
                    this.cg("Failed to set initial custom receivers: " + g.Mm(d))
                }, this)));
                w9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                y9(this, new u9(this.B, a), !0)
            }
            this.j.rR(b)
        } else w9("setConnectedScreenStatus: no screen.")
    };
    g.k.oba = function(a) {
        this.isDisposed() ? this.cg("Setting connection data on disposed cast v2") : this.j ? this.j.Xz(a) : this.cg("Setting connection data without a session")
    };
    g.k.G2 = function() {
        this.isDisposed() ? this.cg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), y9(this, null)) : w9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.eb)(this.aZ, this), (0, g.eb)(this.q$, this))
    };
    g.k.xa = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.eb)(this.kT, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = dAb,
            b = g.Sa("yt.mdx.remote.debug.handlers_");
        g.Hb(b || [], a);
        g.ub(this.j);
        g.cG.prototype.xa.call(this)
    };
    g.k.cg = function(a) {
        b9("Controller", a)
    };
    g.k.cZ = function(a, b) {
        this.j == a && (b || y9(this, null), this.oa("yt-remote-cast2-session-change", b))
    };
    g.k.T9 = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), w9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) w9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            w9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.oa("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            y9(this,
                                new u9(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            y9(this, new r9(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            y9(this, new q9(this.B, a, this.config_));
                            break;
                        default:
                            this.cg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.cg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.cg("onReceiverAction_ called without receiver.")
    };
    g.k.T8 = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.cg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.cg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return w9("Reselecting dial screen."),
                this.oa("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.cg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            y9(this, new r9(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, s9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = RAb(b, {
                name: b.B.friendlyName,
                screenId: a.screenId,
                loungeToken: a.loungeToken,
                dialId: b.Z.receiver.label,
                screenIdType: "shortLived"
            },
            a.loungeTokenRefreshIntervalMs) : (g.NB(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = SAb(b, c)) : a = SAb(b, c)) : a = PAb(b);
        return a
    };
    g.k.aZ = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.K) {
            w9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) w9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), y9(this, new q9(this.B, c, this.config_), !0);
                    else {
                        this.cg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = h8(this.B.Pk(),
                        d.label);
                e && f8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (w9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.ub(this.j), this.j = new q9(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.eb)(this.cZ, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return WAb(b, b.j)
                }), this.j.Xz(null));
                this.j.pR(a)
            }
        }
    };
    g.k.F2 = function() {
        return this.j ? this.j.jT() : null
    };
    g.k.q$ = function(a) {
        this.isDisposed() || (this.cg("Failed to estabilish a session: " + g.Mm(a)), a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null), this.oa("yt-remote-cast2-session-failed"))
    };
    g.k.W9 = function(a) {
        w9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = x9(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            x9(this) != b && this.oa("yt-remote-cast2-availability-change", x9(this))
        }
    };
    g.k.kT = function() {
        this.isDisposed() || (this.C = XAb(this), w9("Updating custom receivers: " + g.Mm(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.eb)(function() {
            this.cg("Failed to set custom receivers.")
        }, this)), this.oa("yt-remote-cast2-availability-change", x9(this)))
    };
    v9.prototype.setLaunchParams = v9.prototype.oba;
    v9.prototype.setConnectedScreenStatus = v9.prototype.lba;
    v9.prototype.stopSession = v9.prototype.G2;
    v9.prototype.getCastSession = v9.prototype.F2;
    v9.prototype.requestSession = v9.prototype.requestSession;
    v9.prototype.init = v9.prototype.init;
    v9.prototype.dispose = v9.prototype.dispose;
    var fBb = [];
    g.k = F9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        lBb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Ep = a.hasPrevious, this.Tk = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return 1 == this.playerState
    };
    g.k.xl = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + G9(this) : this.G
    };
    g.k.clone = function() {
        return new F9(mBb(this))
    };
    g.w(L9, g.cG);
    g.k = L9.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.Xs = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.Vw = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        N9(this) ? (this.j ? this.j.play(null, g.Hd, R9(this, "play")) : Q9(this, "play"), pBb(this, 1, I9(M9(this))), this.oa("remotePlayerChange")) : O9(this, this.play)
    };
    g.k.pause = function() {
        N9(this) ? (this.j ? this.j.pause(null, g.Hd, R9(this, "pause")) : Q9(this, "pause"), pBb(this, 2, I9(M9(this))), this.oa("remotePlayerChange")) : O9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (N9(this)) {
            if (this.j) {
                var b = M9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Hd, R9(this, "seekTo", {
                    newTime: a
                }))
            } else Q9(this, "seekTo", {
                newTime: a
            });
            pBb(this, 3, a);
            this.oa("remotePlayerChange")
        } else O9(this, g.fb(this.seekTo, a))
    };
    g.k.stop = function() {
        if (N9(this)) {
            this.j ? this.j.stop(null, g.Hd, R9(this, "stopVideo")) : Q9(this, "stopVideo");
            var a = M9(this);
            a.index = -1;
            a.videoId = "";
            lBb(a);
            P9(this, a);
            this.oa("remotePlayerChange")
        } else O9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.eb)(function() {
                        c9("set receiver volume: " + d)
                    }, this), (0, g.eb)(function() {
                        this.cg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.eb)(function() {
                    c9("set receiver muted: " + b)
                }, this), (0, g.eb)(function() {
                    this.cg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                Q9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            P9(this, c)
        } else O9(this, g.fb(this.setVolume, a, b))
    };
    g.k.lT = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Mm(b.style), g.qd(a, c.trackData));
            Q9(this, "setSubtitlesTrack", a);
            P9(this, c)
        } else O9(this, g.fb(this.lT, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        N9(this) ? (b = b.getLanguageInfo().getId(), Q9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = M9(this), a.audioTrackId = b, P9(this, a)) : O9(this, g.fb(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = M9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        J9(l, a, c || 0);
        void 0 !== b && (H9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Mm(h));
        Q9(this, "setPlaylist", m);
        d || P9(this, l)
    };
    g.k.WJ = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "previous")
        } else O9(this, g.fb(this.WJ, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "next")
        } else O9(this, g.fb(this.nextVideo, a, b))
    };
    g.k.dH = function() {
        if (N9(this)) {
            Q9(this, "clearPlaylist");
            var a = M9(this);
            a.reset();
            P9(this, a);
            this.oa("remotePlayerChange")
        } else O9(this, this.dH)
    };
    g.k.EV = function() {
        N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.EV)
    };
    g.k.dispose = function() {
        if (3 != this.C) {
            var a = this.C;
            this.C = 3;
            this.oa("proxyStateChange", a, this.C)
        }
        g.cG.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        oBb(this);
        this.D = null;
        this.G.clear();
        K9(this, null);
        g.cG.prototype.xa.call(this)
    };
    g.k.vR = function(a) {
        if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
            var b = this.C;
            this.C = a;
            this.oa("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.G.isEmpty();) b = a = this.G, 0 === b.j.length && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.R9 = function(a, b) {
        this.oa(a, b)
    };
    g.k.I8 = function(a) {
        if (!a) this.zE(null), K9(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = M9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, P9(this, b)
        }
    };
    g.k.zE = function(a) {
        c9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a) this.j.addUpdateListener(this.Z), qBb(this), this.oa("remotePlayerChange")
    };
    g.k.H8 = function(a) {
        a ? (qBb(this), this.oa("remotePlayerChange")) : this.zE(null)
    };
    g.k.TR = function() {
        Q9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.L8 = function() {
        var a = iBb();
        a && K9(this, a)
    };
    g.k.cg = function(a) {
        b9("CP", a)
    };
    g.w(U9, g.cG);
    g.k = U9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.La && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            H9(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.La ? "setInitialState" : "setPlaylist";
            S9("Connecting with " + c + " and params: " + g.Mm(m));
            this.B.connect({
                method: c,
                params: g.Mm(m)
            }, a, Txb())
        } else S9("Connecting without params"), this.B.connect({}, a, Txb());
        uBb(this)
    };
    g.k.Hr = function(a) {
        this.B.Hr(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ra("yt.mdx.remote.remoteClient_", null), this.oa("beforeDispose"), T9(this, 3));
        g.cG.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        vBb(this);
        xBb(this);
        wBb(this);
        g.cC(this.Z);
        this.Z = NaN;
        g.cC(this.W);
        this.W = NaN;
        this.D = null;
        g.PC(this.ma);
        this.ma.length = 0;
        this.B.dispose();
        g.cG.prototype.xa.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    };
    g.k.sX = function(a) {
        if (!this.C || 0 === this.C.length) return !1;
        for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.o6 = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.ED()) ? this.B.Lz() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    };
    g.k.gz = function(a) {
        S9("Disconnecting with " + a);
        g.Ra("yt.mdx.remote.remoteClient_", null);
        vBb(this);
        this.oa("beforeDisconnect", a);
        1 == a && k8();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.k6 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), J9(a, this.D, a.index));
        return mBb(a)
    };
    g.k.qba = function(a) {
        var b = this,
            c = new F9(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.cC(this.Z), this.Z = g.aC(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && V9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && I9(this.j) == I9(c) && g.Mm(this.j.trackData) == g.Mm(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.Xb(d, function(e) {
            this.oa(e)
        }, this)
    };
    g.k.pW = function() {
        var a = this.B.Rs(),
            b = g.Db(this.C, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.ED = function() {
        return this.B.Xs()
    };
    g.k.T5 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.U5 = function() {
        return this.N || ""
    };
    g.k.H2 = function() {
        !isNaN(this.ED()) && this.B.Vw()
    };
    g.k.jba = function(a, b) {
        V9(this, a, b);
        zBb(this)
    };
    g.k.mT = function() {
        var a = g.pC("SID", "") || "",
            b = g.pC("SAPISID", "") || "",
            c = g.pC("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.fg(g.eg(a), 2);
        b = g.fg(g.eg(b), 2);
        c = g.fg(g.eg(c), 2);
        return g.fg(g.eg(a + "," + b + "," + c), 2)
    };
    U9.prototype.subscribe = U9.prototype.subscribe;
    U9.prototype.unsubscribeByKey = U9.prototype.Fh;
    U9.prototype.getProxyState = U9.prototype.o6;
    U9.prototype.disconnect = U9.prototype.gz;
    U9.prototype.getPlayerContextData = U9.prototype.k6;
    U9.prototype.setPlayerContextData = U9.prototype.qba;
    U9.prototype.getOtherConnectedRemoteId = U9.prototype.pW;
    U9.prototype.getReconnectTimeout = U9.prototype.ED;
    U9.prototype.getAutoplayMode = U9.prototype.T5;
    U9.prototype.getAutoplayVideoId = U9.prototype.U5;
    U9.prototype.reconnect = U9.prototype.H2;
    U9.prototype.sendMessage = U9.prototype.jba;
    U9.prototype.getXsrfToken = U9.prototype.mT;
    U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.sX;
    g.w(LBb, g9);
    g.k = LBb.prototype;
    g.k.Pk = function(a) {
        return this.Zg.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Zg.$_c(a)
    };
    g.k.get = function(a) {
        return this.Zg.$_g(a)
    };
    g.k.start = function() {
        this.Zg.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Zg.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Zg.$_r(a, b, c)
    };
    g.k.XK = function(a, b, c, d) {
        this.Zg.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.Zg.$_ubk(this.j[a]);
        this.j.length = 0;
        this.Zg = null;
        g9.prototype.xa.call(this)
    };
    g.k.I2 = function() {
        this.oa("screenChange")
    };
    g.k.z9 = function() {
        this.oa("onlineScreenChange")
    };
    l9.prototype.$_st = l9.prototype.start;
    l9.prototype.$_gspc = l9.prototype.C2;
    l9.prototype.$_gsppc = l9.prototype.iT;
    l9.prototype.$_c = l9.prototype.contains;
    l9.prototype.$_g = l9.prototype.get;
    l9.prototype.$_a = l9.prototype.add;
    l9.prototype.$_un = l9.prototype.XK;
    l9.prototype.$_r = l9.prototype.remove;
    l9.prototype.$_gs = l9.prototype.Pk;
    l9.prototype.$_gos = l9.prototype.hT;
    l9.prototype.$_s = l9.prototype.subscribe;
    l9.prototype.$_ubk = l9.prototype.Fh;
    var f$ = null,
        i$ = !1,
        W9 = null,
        X9 = null,
        WBb = null,
        a$ = [];
    g.w(aCb, g.H);
    g.k = aCb.prototype;
    g.k.xa = function() {
        g.H.prototype.xa.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Fc;
        a.unsubscribe("proxyStateChange", this.ZY, this);
        a.unsubscribe("remotePlayerChange", this.GE, this);
        a.unsubscribe("remoteQueueChange", this.FJ, this);
        a.unsubscribe("previousNextChange", this.WY, this);
        a.unsubscribe("nowAutoplaying", this.RY, this);
        a.unsubscribe("autoplayDismissed", this.wY, this);
        this.Fc = this.module = null
    };
    g.k.Sk = function(a) {
        var b = g.Ia.apply(1, arguments);
        if (2 != this.Fc.C)
            if (j$(this)) {
                if (1081 != M9(this.Fc).playerState || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        M9(this.Fc).isPlaying() ? this.Fc.pause() : this.Fc.play();
                        break;
                    case "control_play":
                        this.Fc.play();
                        break;
                    case "control_pause":
                        this.Fc.pause();
                        break;
                    case "control_seek":
                        this.K.vL(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        cCb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.J.getCurrentTime();
                    k$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    k$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    cCb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.F8 = function(a) {
        this.N.W1(a)
    };
    g.k.oca = function(a) {
        this.Sk("control_subtitles_set_track", g.id(a) ? null : a)
    };
    g.k.G_ = function() {
        var a = this.J.getOption("captions", "track");
        g.id(a) || cCb(this, a)
    };
    g.k.Kc = function(a) {
        this.module.Kc(a, this.J.getVideoData().lengthSeconds)
    };
    g.k.k9 = function() {
        g.id(this.C) || dCb(this, this.C);
        this.D = !1
    };
    g.k.ZY = function(a, b) {
        this.B.stop();
        2 === b && this.y_()
    };
    g.k.GE = function() {
        if (j$(this)) {
            this.j.stop();
            var a = M9(this.Fc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Sh = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Sh = 0;
                    break;
                default:
                    this.module.Sh = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Cc(new g.NL(8));
                    this.x_();
                    break;
                case 1085:
                case 3:
                    this.Cc(new g.NL(9));
                    break;
                case 1083:
                case 0:
                    this.Cc(new g.NL(2));
                    this.K.stop();
                    this.Kc(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Cc(new g.NL(4));
                    break;
                case 2:
                    this.Cc(new g.NL(4));
                    this.Kc(I9(a));
                    break;
                case -1:
                    this.Cc(new g.NL(64));
                    break;
                case -1E3:
                    this.Cc(new g.NL(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        EH: 2
                    }))
            }
            a = M9(this.Fc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, dCb(this, a));
            a = M9(this.Fc); - 1 === a.volume || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.o0()
        } else bCb(this)
    };
    g.k.WY = function() {
        this.J.oa("mdxpreviousnextchange")
    };
    g.k.FJ = function() {
        j$(this) || bCb(this)
    };
    g.k.RY = function(a) {
        isNaN(a) || this.J.oa("mdxnowautoplaying", a)
    };
    g.k.wY = function() {
        this.J.oa("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        j$(this) && this.Fc.setAudioTrack(this.J.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === M9(this.Fc).playerState ? k$(this, a) : b && this.Fc.seekTo(a)
    };
    g.k.o0 = function() {
        var a = this;
        if (j$(this)) {
            var b = M9(this.Fc);
            this.events.Nc(this.W);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.W = this.events.T(this.J, "onVolumeChange", function(c) {
                ZBb(a, c)
            })
        }
    };
    g.k.x_ = function() {
        this.j.stop();
        if (!this.Fc.isDisposed()) {
            var a = M9(this.Fc);
            a.isPlaying() && this.Cc(new g.NL(8));
            this.Kc(I9(a));
            this.j.start()
        }
    };
    g.k.y_ = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Fc.Xs();
        2 == this.Fc.C && !isNaN(a) && this.B.start()
    };
    g.k.Cc = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.TBa(b, a)) {
            var c = g.TG(a, 2);
            c !== g.TG(this.G, 2) && this.J.rB(c);
            this.G = a;
            fCb(this.module, b, a)
        }
    };
    g.w(l$, g.U);
    l$.prototype.od = function() {
        this.j.show()
    };
    l$.prototype.Pb = function() {
        this.j.hide()
    };
    l$.prototype.B = function() {
        m8("mdx-privacy-popup-cancel");
        this.Pb()
    };
    l$.prototype.C = function() {
        m8("mdx-privacy-popup-confirm");
        this.Pb()
    };
    g.w(m$, g.U);
    m$.prototype.onStateChange = function(a) {
        this.Dc(a.state)
    };
    m$.prototype.Dc = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.TG(a, 128) ? g.qK("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.qK("Playing on $RECEIVER_NAME", b) : g.qK("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.w(n$, g.LX);
    n$.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && 1 < a.length && !this.J.getOption("remote", "quickCast") ? (this.Vt = g.$b(a, this.j, this), g.MX(this, g.pr(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Nj(a), this.enable(!0)) : this.enable(!1)
    };
    n$.prototype.j = function(a) {
        return a.key
    };
    n$.prototype.Dk = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Vt[a].name
    };
    n$.prototype.kh = function(a) {
        g.LX.prototype.kh.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.Vt[a]);
        this.Lb.Pb()
    };
    g.w(eCb, g.RV);
    g.k = eCb.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.rS(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        QBb(b, a);
        this.subscriptions.push(g.ME("yt-remote-before-disconnect", this.D8, this));
        this.subscriptions.push(g.ME("yt-remote-connection-change", this.X9, this));
        this.subscriptions.push(g.ME("yt-remote-receiver-availability-change", this.YY,
            this));
        this.subscriptions.push(g.ME("yt-remote-auto-connect", this.V9, this));
        this.subscriptions.push(g.ME("yt-remote-receiver-resumed", this.U9, this));
        this.subscriptions.push(g.ME("mdx-privacy-popup-confirm", this.waa, this));
        this.subscriptions.push(g.ME("mdx-privacy-popup-cancel", this.vaa, this));
        this.YY()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.RV.prototype.load.call(this);
        this.Pl = new aCb(this, this.player, this.Fc);
        var a = (a = YBb()) ? a.currentTime : 0;
        var b = VBb() ? new L9(e$(), void 0) : null;
        0 == a && b && (a = I9(M9(b)));
        0 !== a && this.Kc(a);
        fCb(this, this.jf, this.jf);
        this.player.aq(6)
    };
    g.k.unload = function() {
        this.player.oa("mdxautoplaycanceled");
        this.Es = this.Mp;
        g.vb(this.Pl, this.Fc);
        this.Fc = this.Pl = null;
        g.RV.prototype.unload.call(this);
        this.player.aq(5);
        o$(this)
    };
    g.k.xa = function() {
        g.NE(this.subscriptions);
        g.RV.prototype.xa.call(this)
    };
    g.k.BE = function(a) {
        var b = g.Ia.apply(1, arguments);
        this.loaded && this.Pl.Sk.apply(this.Pl, [a].concat(g.oa(b)))
    };
    g.k.getAdState = function() {
        return this.Sh
    };
    g.k.Ep = function() {
        return this.Fc ? M9(this.Fc).Ep : !1
    };
    g.k.Tk = function() {
        return this.Fc ? M9(this.Fc).Tk : !1
    };
    g.k.Kc = function(a, b) {
        this.DX = a || 0;
        this.player.oa("progresssync", a, b);
        this.player.vc("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.DX
    };
    g.k.getProgressState = function() {
        var a = M9(this.Fc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Rh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + G9(a) : a.C,
            isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
            loaded: a.Z,
            seekableEnd: a.B ? a.j + G9(a) : a.j,
            seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Fc && this.Fc.nextVideo()
    };
    g.k.WJ = function() {
        this.Fc && this.Fc.WJ()
    };
    g.k.D8 = function(a) {
        1 === a && (this.GQ = this.Fc ? M9(this.Fc) : null)
    };
    g.k.X9 = function() {
        var a = VBb() ? new L9(e$(), void 0) : null;
        if (a) {
            var b = this.Es;
            this.loaded && this.unload();
            this.Fc = a;
            this.GQ = null;
            b.key !== this.Mp.key && (this.Es = b, this.load())
        } else g.ub(this.Fc), this.Fc = null, this.loaded && (this.unload(), (a = this.GQ) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, I9(a)));
        this.player.oa("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.YY = function() {
        var a = [this.Mp],
            b = a.concat,
            c = RBb();
        C9() && g.YC("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Vt = b.call(a, c);
        a = TBb() || this.Mp;
        p$(this, a);
        this.player.vc("onMdxReceiversChange")
    };
    g.k.V9 = function() {
        var a = TBb();
        p$(this, a)
    };
    g.k.U9 = function() {
        this.Es = TBb()
    };
    g.k.waa = function() {
        this.YE = !0;
        o$(this);
        i$ = !1;
        f$ && h$(f$, 1);
        f$ = null
    };
    g.k.vaa = function() {
        this.YE = !1;
        o$(this);
        p$(this, this.Mp);
        this.Es = this.Mp;
        i$ = !1;
        f$ = null;
        this.player.playVideo()
    };
    g.k.Ih = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Vt;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? jBb() : p$(this, b)), this.loaded ? this.Es : this.Mp;
            case "quickCast":
                return 2 === this.Vt.length && "cast-selector-receiver" === this.Vt[1].key ? (b && jBb(), !0) : !1
        }
    };
    g.k.TR = function() {
        this.Fc.TR()
    };
    g.k.yl = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return void 0 !== (null == (a = g.IB("PLAYER_CONFIG")) ? void 0 : null == (b = a.args) ? void 0 : b.authuser) ? !0 : !(!g.IB("SESSION_INDEX") && !g.IB("LOGGED_IN"))
    };
    g.QV("remote", eCb);
})(_yt_player);