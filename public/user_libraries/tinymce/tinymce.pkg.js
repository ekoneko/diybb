// 4.0.28 (2014-05-27)
!
function(e, t) {
    "use strict";

    function n(e, t) {
        for (var n, r = [], i = 0; i < e.length; ++i) {
            if (n = s[e[i]] || o(e[i]), !n) throw "module definition dependecy not found: " + e[i];
            r.push(n)
        }
        t.apply(null, r)
    }
    function r(e, r, i) {
        if ("string" != typeof e) throw "invalid module definition, module id must be defined and be a string";
        if (r === t) throw "invalid module definition, dependencies must be specified";
        if (i === t) throw "invalid module definition, definition function must be specified";
        n(r, function() {
            s[e] = i.apply(null, arguments)
        })
    }
    function i(e) {
        return !!s[e]
    }
    function o(t) {
        for (var n = e, r = t.split(/[.\/]/), i = 0; i < r.length; ++i) {
            if (!n[r[i]]) return;
            n = n[r[i]]
        }
        return n
    }
    function a(n) {
        for (var r = 0; r < n.length; r++) {
            for (var i = e, o = n[r], a = o.split(/[.\/]/), l = 0; l < a.length - 1; ++l) i[a[l]] === t && (i[a[l]] = {}), i = i[a[l]];
            i[a[a.length - 1]] = s[o]
        }
    }
    var s = {},
        l = "tinymce/dom/Sizzle",
        c = "tinymce/html/Styles",
        d = "tinymce/dom/EventUtils",
        u = "tinymce/dom/TreeWalker",
        f = "tinymce/util/Tools",
        p = "tinymce/dom/Range",
        m = "tinymce/html/Entities",
        h = "tinymce/Env",
        g = "tinymce/dom/StyleSheetLoader",
        v = "tinymce/dom/DOMUtils",
        y = "tinymce/dom/ScriptLoader",
        b = "tinymce/AddOnManager",
        C = "tinymce/html/Node",
        x = "tinymce/html/Schema",
        w = "tinymce/html/SaxParser",
        _ = "tinymce/html/DomParser",
        E = "tinymce/html/Writer",
        N = "tinymce/html/Serializer",
        k = "tinymce/dom/Serializer",
        S = "tinymce/dom/TridentSelection",
        T = "tinymce/util/VK",
        R = "tinymce/dom/ControlSelection",
        A = "tinymce/dom/RangeUtils",
        B = "tinymce/dom/BookmarkManager",
        D = "tinymce/dom/Selection",
        L = "tinymce/dom/ElementUtils",
        M = "tinymce/fmt/Preview",
        H = "tinymce/Formatter",
        P = "tinymce/UndoManager",
        O = "tinymce/EnterKey",
        I = "tinymce/ForceBlocks",
        F = "tinymce/EditorCommands",
        z = "tinymce/util/URI",
        W = "tinymce/util/Class",
        V = "tinymce/util/EventDispatcher",
        U = "tinymce/ui/Selector",
        q = "tinymce/ui/Collection",
        $ = "tinymce/ui/DomUtils",
        j = "tinymce/ui/Control",
        K = "tinymce/ui/Factory",
        Y = "tinymce/ui/KeyboardNavigation",
        G = "tinymce/ui/Container",
        X = "tinymce/ui/DragHelper",
        J = "tinymce/ui/Scrollable",
        Q = "tinymce/ui/Panel",
        Z = "tinymce/ui/Movable",
        et = "tinymce/ui/Resizable",
        tt = "tinymce/ui/FloatPanel",
        nt = "tinymce/ui/Window",
        rt = "tinymce/ui/MessageBox",
        it = "tinymce/WindowManager",
        ot = "tinymce/util/Quirks",
        at = "tinymce/util/Observable",
        st = "tinymce/EditorObservable",
        lt = "tinymce/Shortcuts",
        ct = "tinymce/Editor",
        dt = "tinymce/util/I18n",
        ut = "tinymce/FocusManager",
        ft = "tinymce/EditorManager",
        pt = "tinymce/LegacyInput",
        mt = "tinymce/util/XHR",
        ht = "tinymce/util/JSON",
        gt = "tinymce/util/JSONRequest",
        vt = "tinymce/util/JSONP",
        yt = "tinymce/util/LocalStorage",
        bt = "tinymce/Compat",
        Ct = "tinymce/ui/Layout",
        xt = "tinymce/ui/AbsoluteLayout",
        wt = "tinymce/ui/Tooltip",
        _t = "tinymce/ui/Widget",
        Et = "tinymce/ui/Button",
        Nt = "tinymce/ui/ButtonGroup",
        kt = "tinymce/ui/Checkbox",
        St = "tinymce/ui/PanelButton",
        Tt = "tinymce/ui/ColorButton",
        Rt = "tinymce/ui/ComboBox",
        At = "tinymce/ui/Path",
        Bt = "tinymce/ui/ElementPath",
        Dt = "tinymce/ui/FormItem",
        Lt = "tinymce/ui/Form",
        Mt = "tinymce/ui/FieldSet",
        Ht = "tinymce/ui/FilePicker",
        Pt = "tinymce/ui/FitLayout",
        Ot = "tinymce/ui/FlexLayout",
        It = "tinymce/ui/FlowLayout",
        Ft = "tinymce/ui/FormatControls",
        zt = "tinymce/ui/GridLayout",
        Wt = "tinymce/ui/Iframe",
        Vt = "tinymce/ui/Label",
        Ut = "tinymce/ui/Toolbar",
        qt = "tinymce/ui/MenuBar",
        $t = "tinymce/ui/MenuButton",
        jt = "tinymce/ui/ListBox",
        Kt = "tinymce/ui/MenuItem",
        Yt = "tinymce/ui/Menu",
        Gt = "tinymce/ui/Radio",
        Xt = "tinymce/ui/ResizeHandle",
        Jt = "tinymce/ui/Spacer",
        Qt = "tinymce/ui/SplitButton",
        Zt = "tinymce/ui/StackLayout",
        en = "tinymce/ui/TabPanel",
        tn = "tinymce/ui/TextBox",
        nn = "tinymce/ui/Throbber";
    r(l, [], function() {
        if (!window.jQuery) throw new Error("Load jQuery first");
        return jQuery.find
    }), r(c, [], function() {
        return function(e, t) {
            function n(e, t, n, r) {
                function i(e) {
                    return e = parseInt(e, 10).toString(16), e.length > 1 ? e : "0" + e
                }
                return "#" + i(t) + i(n) + i(r)
            }
            var r = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
                i = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                o = /\s*([^:]+):\s*([^;]+);?/g,
                a = /\s+$/,
                s, l, c = {},
                d, u, f, p = "\ufeff";
            for (e = e || {}, t && (u = t.getValidStyles(), f = t.getInvalidStyles()), d = ("\\\" \\' \\; \\: ; : " + p).split(" "), l = 0; l < d.length; l++) c[d[l]] = p + l, c[p + l] = d[l];
            return {
                toHex: function(e) {
                    return e.replace(r, n)
                },
                parse: function(t) {
                    function s(e, t, n) {
                        var r, i, o, a;
                        if (r = h[e + "-top" + t], r && (i = h[e + "-right" + t], i && (o = h[e + "-bottom" + t], o && (a = h[e + "-left" + t])))) {
                            var s = [r, i, o, a];
                            for (l = s.length - 1; l-- && s[l] === s[l + 1];);
                            l > -1 && n || (h[e + t] = -1 == l ? s[0] : s.join(" "), delete h[e + "-top" + t], delete h[e + "-right" + t], delete h[e + "-bottom" + t], delete h[e + "-left" + t])
                        }
                    }
                    function d(e) {
                        var t = h[e],
                            n;
                        if (t) {
                            for (t = t.split(" "), n = t.length; n--;) if (t[n] !== t[0]) return !1;
                            return h[e] = t[0], !0
                        }
                    }
                    function u(e, t, n, r) {
                        d(t) && d(n) && d(r) && (h[e] = h[t] + " " + h[n] + " " + h[r], delete h[t], delete h[n], delete h[r])
                    }
                    function f(e) {
                        return b = !0, c[e]
                    }
                    function p(e, t) {
                        return b && (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                            return c[e]
                        })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                    }
                    function m(t, n, r, i, o, a) {
                        if (o = o || a) return o = p(o), "'" + o.replace(/\'/g, "\\'") + "'";
                        if (n = p(n || r || i), !e.allow_script_urls) {
                            var s = n.replace(/[\s\r\n]+/, "");
                            if (/(java|vb)script:/i.test(s)) return "";
                            if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(s)) return ""
                        }
                        return C && (n = C.call(x, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')"
                    }
                    var h = {},
                        g, v, y, b, C = e.url_converter,
                        x = e.url_converter_scope || this;
                    if (t) {
                        for (t = t.replace(/[\u0000-\u001F]/g, ""), t = t.replace(/\\[\"\';:\uFEFF]/g, f).replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
                            return e.replace(/[;:]/g, f)
                        }); g = o.exec(t);) {
                            if (v = g[1].replace(a, "").toLowerCase(), y = g[2].replace(a, ""), y = y.replace(/\\[0-9a-f]+/g, function(e) {
                                return String.fromCharCode(parseInt(e.substr(1), 16))
                            }), v && y.length > 0) {
                                if (!e.allow_script_urls && ("behavior" == v || /expression\s*\(|\/\*|\*\//.test(y))) continue;
                                "font-weight" === v && "700" === y ? y = "bold" : ("color" === v || "background-color" === v) && (y = y.toLowerCase()), y = y.replace(r, n), y = y.replace(i, m), h[v] = b ? p(y, !0) : y
                            }
                            o.lastIndex = g.index + g[0].length
                        }
                        s("border", "", !0), s("border", "-width"), s("border", "-color"), s("border", "-style"), s("padding", ""), s("margin", ""), u("border", "border-width", "border-style", "border-color"), "medium none" === h.border && delete h.border, "none" === h["border-image"] && delete h["border-image"]
                    }
                    return h
                },
                serialize: function(e, t) {
                    function n(t) {
                        var n, r, o, a;
                        if (n = u[t]) for (r = 0, o = n.length; o > r; r++) t = n[r], a = e[t], a !== s && a.length > 0 && (i += (i.length > 0 ? " " : "") + t + ": " + a + ";")
                    }
                    function r(e, t) {
                        var n;
                        return n = f["*"], n && n[e] ? !1 : (n = f[t], n && n[e] ? !1 : !0)
                    }
                    var i = "",
                        o, a;
                    if (t && u) n("*"), n(t);
                    else for (o in e) a = e[o], a !== s && a.length > 0 && (!f || r(o, t)) && (i += (i.length > 0 ? " " : "") + o + ": " + a + ";");
                    return i
                }
            }
        }
    }), r(d, [], function() {
        function e(e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
        }
        function t(e, t, n, r) {
            e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
        }
        function n(e, t) {
            function n() {
                return !1
            }
            function r() {
                return !0
            }
            var i, o = t || {},
                l;
            for (i in e) s[i] || (o[i] = e[i]);
            if (o.target || (o.target = o.srcElement || document), e && a.test(e.type) && e.pageX === l && e.clientX !== l) {
                var c = o.target.ownerDocument || document,
                    d = c.documentElement,
                    u = c.body;
                o.pageX = e.clientX + (d && d.scrollLeft || u && u.scrollLeft || 0) - (d && d.clientLeft || u && u.clientLeft || 0), o.pageY = e.clientY + (d && d.scrollTop || u && u.scrollTop || 0) - (d && d.clientTop || u && u.clientTop || 0)
            }
            return o.preventDefault = function() {
                o.isDefaultPrevented = r, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }, o.stopPropagation = function() {
                o.isPropagationStopped = r, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
            }, o.stopImmediatePropagation = function() {
                o.isImmediatePropagationStopped = r, o.stopPropagation()
            }, o.isDefaultPrevented || (o.isDefaultPrevented = n, o.isPropagationStopped = n, o.isImmediatePropagationStopped = n), o
        }
        function r(n, r, i) {
            function o() {
                i.domLoaded || (i.domLoaded = !0, r(c))
            }
            function a() {
                ("complete" === l.readyState || "interactive" === l.readyState && l.body) && (t(l, "readystatechange", a), o())
            }
            function s() {
                try {
                    l.documentElement.doScroll("left")
                } catch (e) {
                    return void setTimeout(s, 0)
                }
                o()
            }
            var l = n.document,
                c = {
                    type: "ready"
                };
            return i.domLoaded ? void r(c) : (l.addEventListener ? "complete" === l.readyState ? o() : e(n, "DOMContentLoaded", o) : (e(l, "readystatechange", a), l.documentElement.doScroll && n.self === n.top && s()), void e(n, "load", o))
        }
        function i() {
            function i(e, t) {
                var n, r, i, o, a = s[t];
                if (n = a && a[e.type]) for (r = 0, i = n.length; i > r; r++) if (o = n[r], o && o.func.call(o.scope, e) === !1 && e.preventDefault(), e.isImmediatePropagationStopped()) return
            }
            var a = this,
                s = {},
                l, c, d, u, f;
            c = o + (+new Date).toString(32), u = "onmouseenter" in document.documentElement, d = "onfocusin" in document.documentElement, f = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, l = 1, a.domLoaded = !1, a.events = s, a.bind = function(t, o, p, m) {
                function h(e) {
                    i(n(e || _.event), g)
                }
                var g, v, y, b, C, x, w, _ = window;
                if (t && 3 !== t.nodeType && 8 !== t.nodeType) {
                    for (t[c] ? g = t[c] : (g = l++, t[c] = g, s[g] = {}), m = m || t, o = o.split(" "), y = o.length; y--;) b = o[y], x = h, C = w = !1, "DOMContentLoaded" === b && (b = "ready"), a.domLoaded && "ready" === b && "complete" == t.readyState ? p.call(m, n({
                        type: b
                    })) : (u || (C = f[b], C && (x = function(e) {
                        var t, r;
                        if (t = e.currentTarget, r = e.relatedTarget, r && t.contains) r = t.contains(r);
                        else for (; r && r !== t;) r = r.parentNode;
                        r || (e = n(e || _.event), e.type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, i(e, g))
                    })), d || "focusin" !== b && "focusout" !== b || (w = !0, C = "focusin" === b ? "focus" : "blur", x = function(e) {
                        e = n(e || _.event), e.type = "focus" === e.type ? "focusin" : "focusout", i(e, g)
                    }), v = s[g][b], v ? "ready" === b && a.domLoaded ? p({
                        type: b
                    }) : v.push({
                        func: p,
                        scope: m
                    }) : (s[g][b] = v = [{
                        func: p,
                        scope: m
                    }], v.fakeName = C, v.capture = w, v.nativeHandler = x, "ready" === b ? r(t, x, a) : e(t, C || b, x, w)));
                    return t = v = 0, p
                }
            }, a.unbind = function(e, n, r) {
                var i, o, l, d, u, f;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return a;
                if (i = e[c]) {
                    if (f = s[i], n) {
                        for (n = n.split(" "), l = n.length; l--;) if (u = n[l], o = f[u]) {
                            if (r) for (d = o.length; d--;) if (o[d].func === r) {
                                var p = o.nativeHandler,
                                    m = o.fakeName,
                                    h = o.capture;
                                o = o.slice(0, d).concat(o.slice(d + 1)), o.nativeHandler = p, o.fakeName = m, o.capture = h, f[u] = o
                            }
                            r && 0 !== o.length || (delete f[u], t(e, o.fakeName || u, o.nativeHandler, o.capture))
                        }
                    } else {
                        for (u in f) o = f[u], t(e, o.fakeName || u, o.nativeHandler, o.capture);
                        f = {}
                    }
                    for (u in f) return a;
                    delete s[i];
                    try {
                        delete e[c]
                    } catch (g) {
                        e[c] = null
                    }
                }
                return a
            }, a.fire = function(e, t, r) {
                var o;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return a;
                r = n(null, r), r.type = t, r.target = e;
                do o = e[c], o && i(r, o), e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow;
                while (e && !r.isPropagationStopped());
                return a
            }, a.clean = function(e) {
                var t, n, r = a.unbind;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return a;
                if (e[c] && r(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName) for (r(e), n = e.getElementsByTagName("*"), t = n.length; t--;) e = n[t], e[c] && r(e);
                return a
            }, a.destroy = function() {
                s = {}
            }, a.cancel = function(e) {
                return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
            }
        }
        var o = "mce-data-",
            a = /^(?:mouse|contextmenu)|click/,
            s = {
                keyLocation: 1,
                layerX: 1,
                layerY: 1,
                returnValue: 1
            };
        return i.Event = new i, i.Event.bind(window, "ready", function() {}), i
    }), r(u, [], function() {
        return function(e, t) {
            function n(e, n, r, i) {
                var o, a;
                if (e) {
                    if (!i && e[n]) return e[n];
                    if (e != t) {
                        if (o = e[r]) return o;
                        for (a = e.parentNode; a && a != t; a = a.parentNode) if (o = a[r]) return o
                    }
                }
            }
            var r = e;
            this.current = function() {
                return r
            }, this.next = function(e) {
                return r = n(r, "firstChild", "nextSibling", e)
            }, this.prev = function(e) {
                return r = n(r, "lastChild", "previousSibling", e)
            }
        }
    }), r(f, [], function() {
        function e(e) {
            return null === e || e === t ? "" : ("" + e).replace(h, "")
        }
        function n(e, n) {
            return n ? "array" == n && g(e) ? !0 : typeof e == n : e !== t
        }
        function r(e) {
            var t = [],
                n, r;
            for (n = 0, r = e.length; r > n; n++) t[n] = e[n];
            return t
        }
        function i(e, t, n) {
            var r;
            for (e = e || [], t = t || ",", "string" == typeof e && (e = e.split(t)), n = n || {}, r = e.length; r--;) n[e[r]] = {};
            return n
        }
        function o(e, n, r) {
            var i, o;
            if (!e) return 0;
            if (r = r || e, e.length !== t) {
                for (i = 0, o = e.length; o > i; i++) if (n.call(r, e[i], i, e) === !1) return 0
            } else for (i in e) if (e.hasOwnProperty(i) && n.call(r, e[i], i, e) === !1) return 0;
            return 1
        }
        function a(e, t) {
            var n = [];
            return o(e, function(e) {
                n.push(t(e))
            }), n
        }
        function s(e, t) {
            var n = [];
            return o(e, function(e) {
                (!t || t(e)) && n.push(e)
            }), n
        }
        function l(e, t, n) {
            var r = this,
                i, o, a, s, l, c = 0;
            if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e), a = e[3].match(/(^|\.)(\w+)$/i)[2], o = r.createNS(e[3].replace(/\.\w+$/, ""), n), !o[a]) {
                if ("static" == e[2]) return o[a] = t, void(this.onCreate && this.onCreate(e[2], e[3], o[a]));
                t[a] || (t[a] = function() {}, c = 1), o[a] = t[a], r.extend(o[a].prototype, t), e[5] && (i = r.resolve(e[5]).prototype, s = e[5].match(/\.(\w+)$/i)[1], l = o[a], o[a] = c ?
                function() {
                    return i[s].apply(this, arguments)
                } : function() {
                    return this.parent = i[s], l.apply(this, arguments)
                }, o[a].prototype[a] = o[a], r.each(i, function(e, t) {
                    o[a].prototype[t] = i[t]
                }), r.each(t, function(e, t) {
                    i[t] ? o[a].prototype[t] = function() {
                        return this.parent = i[t], e.apply(this, arguments)
                    } : t != a && (o[a].prototype[t] = e)
                })), r.each(t["static"], function(e, t) {
                    o[a][t] = e
                })
            }
        }
        function c(e, t) {
            var n, r;
            if (e) for (n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
            return -1
        }
        function d(e, n) {
            var r, i, o, a = arguments,
                s;
            for (r = 1, i = a.length; i > r; r++) {
                n = a[r];
                for (o in n) n.hasOwnProperty(o) && (s = n[o], s !== t && (e[o] = s))
            }
            return e
        }
        function u(e, t, n, r) {
            r = r || this, e && (n && (e = e[n]), o(e, function(e, i) {
                return t.call(r, e, i, n) === !1 ? !1 : void u(e, t, n, r)
            }))
        }
        function f(e, t) {
            var n, r;
            for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) r = e[n], t[r] || (t[r] = {}), t = t[r];
            return t
        }
        function p(e, t) {
            var n, r;
            for (t = t || window, e = e.split("."), n = 0, r = e.length; r > n && (t = t[e[n]], t); n++);
            return t
        }
        function m(t, r) {
            return !t || n(t, "array") ? t : a(t.split(r || ","), e)
        }
        var h = /^\s*|\s*$/g,
            g = Array.isArray ||
        function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        };
        return {
            trim: e,
            isArray: g,
            is: n,
            toArray: r,
            makeMap: i,
            each: o,
            map: a,
            grep: s,
            inArray: c,
            extend: d,
            create: l,
            walk: u,
            createNS: f,
            resolve: p,
            explode: m
        }
    }), r(p, [f], function(e) {
        function t(n) {
            function r() {
                return H.createDocumentFragment()
            }
            function i(e, t) {
                _(F, e, t)
            }
            function o(e, t) {
                _(z, e, t)
            }
            function a(e) {
                i(e.parentNode, j(e))
            }
            function s(e) {
                i(e.parentNode, j(e) + 1)
            }
            function l(e) {
                o(e.parentNode, j(e))
            }
            function c(e) {
                o(e.parentNode, j(e) + 1)
            }
            function d(e) {
                e ? (M[U] = M[V], M[q] = M[W]) : (M[V] = M[U], M[W] = M[q]), M.collapsed = F
            }
            function u(e) {
                a(e), c(e)
            }
            function f(e) {
                i(e, 0), o(e, 1 === e.nodeType ? e.childNodes.length : e.nodeValue.length)
            }
            function p(e, t) {
                var n = M[V],
                    r = M[W],
                    i = M[U],
                    o = M[q],
                    a = t.startContainer,
                    s = t.startOffset,
                    l = t.endContainer,
                    c = t.endOffset;
                return 0 === e ? w(n, r, a, s) : 1 === e ? w(i, o, a, s) : 2 === e ? w(i, o, l, c) : 3 === e ? w(n, r, l, c) : void 0
            }
            function m() {
                E(I)
            }
            function h() {
                return E(P)
            }
            function g() {
                return E(O)
            }
            function v(e) {
                var t = this[V],
                    r = this[W],
                    i, o;
                3 !== t.nodeType && 4 !== t.nodeType || !t.nodeValue ? (t.childNodes.length > 0 && (o = t.childNodes[r]), o ? t.insertBefore(e, o) : 3 == t.nodeType ? n.insertAfter(e, t) : t.appendChild(e)) : r ? r >= t.nodeValue.length ? n.insertAfter(e, t) : (i = t.splitText(r), t.parentNode.insertBefore(e, i)) : t.parentNode.insertBefore(e, t)
            }
            function y(e) {
                var t = M.extractContents();
                M.insertNode(e), e.appendChild(t), M.selectNode(e)
            }
            function b() {
                return $(new t(n), {
                    startContainer: M[V],
                    startOffset: M[W],
                    endContainer: M[U],
                    endOffset: M[q],
                    collapsed: M.collapsed,
                    commonAncestorContainer: M.commonAncestorContainer
                })
            }
            function C(e, t) {
                var n;
                if (3 == e.nodeType) return e;
                if (0 > t) return e;
                for (n = e.firstChild; n && t > 0;)--t, n = n.nextSibling;
                return n ? n : e
            }
            function x() {
                return M[V] == M[U] && M[W] == M[q]
            }
            function w(e, t, r, i) {
                var o, a, s, l, c, d;
                if (e == r) return t == i ? 0 : i > t ? -1 : 1;
                for (o = r; o && o.parentNode != e;) o = o.parentNode;
                if (o) {
                    for (a = 0, s = e.firstChild; s != o && t > a;) a++, s = s.nextSibling;
                    return a >= t ? -1 : 1
                }
                for (o = e; o && o.parentNode != r;) o = o.parentNode;
                if (o) {
                    for (a = 0, s = r.firstChild; s != o && i > a;) a++, s = s.nextSibling;
                    return i > a ? -1 : 1
                }
                for (l = n.findCommonAncestor(e, r), c = e; c && c.parentNode != l;) c = c.parentNode;
                for (c || (c = l), d = r; d && d.parentNode != l;) d = d.parentNode;
                if (d || (d = l), c == d) return 0;
                for (s = l.firstChild; s;) {
                    if (s == c) return -1;
                    if (s == d) return 1;
                    s = s.nextSibling
                }
            }
            function _(e, t, r) {
                var i, o;
                for (e ? (M[V] = t, M[W] = r) : (M[U] = t, M[q] = r), i = M[U]; i.parentNode;) i = i.parentNode;
                for (o = M[V]; o.parentNode;) o = o.parentNode;
                o == i ? w(M[V], M[W], M[U], M[q]) > 0 && M.collapse(e) : M.collapse(e), M.collapsed = x(), M.commonAncestorContainer = n.findCommonAncestor(M[V], M[U])
            }
            function E(e) {
                var t, n = 0,
                    r = 0,
                    i, o, a, s, l, c;
                if (M[V] == M[U]) return N(e);
                for (t = M[U], i = t.parentNode; i; t = i, i = i.parentNode) {
                    if (i == M[V]) return k(t, e);
                    ++n
                }
                for (t = M[V], i = t.parentNode; i; t = i, i = i.parentNode) {
                    if (i == M[U]) return S(t, e);
                    ++r
                }
                for (o = r - n, a = M[V]; o > 0;) a = a.parentNode, o--;
                for (s = M[U]; 0 > o;) s = s.parentNode, o++;
                for (l = a.parentNode, c = s.parentNode; l != c; l = l.parentNode, c = c.parentNode) a = l, s = c;
                return T(a, s, e)
            }
            function N(e) {
                var t, n, i, o, a, s, l, c, d;
                if (e != I && (t = r()), M[W] == M[q]) return t;
                if (3 == M[V].nodeType) {
                    if (n = M[V].nodeValue, i = n.substring(M[W], M[q]), e != O && (o = M[V], c = M[W], d = M[q] - M[W], 0 === c && d >= o.nodeValue.length - 1 ? o.parentNode.removeChild(o) : o.deleteData(c, d), M.collapse(F)), e == I) return;
                    return i.length > 0 && t.appendChild(H.createTextNode(i)), t
                }
                for (o = C(M[V], M[W]), a = M[q] - M[W]; o && a > 0;) s = o.nextSibling, l = D(o, e), t && t.appendChild(l), --a, o = s;
                return e != O && M.collapse(F), t
            }
            function k(e, t) {
                var n, i, o, a, s, l;
                if (t != I && (n = r()), i = R(e, t), n && n.appendChild(i), o = j(e), a = o - M[W], 0 >= a) return t != O && (M.setEndBefore(e), M.collapse(z)), n;
                for (i = e.previousSibling; a > 0;) s = i.previousSibling, l = D(i, t), n && n.insertBefore(l, n.firstChild), --a, i = s;
                return t != O && (M.setEndBefore(e), M.collapse(z)), n
            }
            function S(e, t) {
                var n, i, o, a, s, l;
                for (t != I && (n = r()), o = A(e, t), n && n.appendChild(o), i = j(e), ++i, a = M[q] - i, o = e.nextSibling; o && a > 0;) s = o.nextSibling, l = D(o, t), n && n.appendChild(l), --a, o = s;
                return t != O && (M.setStartAfter(e), M.collapse(F)), n
            }
            function T(e, t, n) {
                var i, o, a, s, l, c, d;
                for (n != I && (o = r()), i = A(e, n), o && o.appendChild(i), a = j(e), s = j(t), ++a, l = s - a, c = e.nextSibling; l > 0;) d = c.nextSibling, i = D(c, n), o && o.appendChild(i), c = d, --l;
                return i = R(t, n), o && o.appendChild(i), n != O && (M.setStartAfter(e), M.collapse(F)), o
            }
            function R(e, t) {
                var n = C(M[U], M[q] - 1),
                    r, i, o, a, s, l = n != M[U];
                if (n == e) return B(n, l, z, t);
                for (r = n.parentNode, i = B(r, z, z, t); r;) {
                    for (; n;) o = n.previousSibling, a = B(n, l, z, t), t != I && i.insertBefore(a, i.firstChild), l = F, n = o;
                    if (r == e) return i;
                    n = r.previousSibling, r = r.parentNode, s = B(r, z, z, t), t != I && s.appendChild(i), i = s
                }
            }
            function A(e, t) {
                var n = C(M[V], M[W]),
                    r = n != M[V],
                    i, o, a, s, l;
                if (n == e) return B(n, r, F, t);
                for (i = n.parentNode, o = B(i, z, F, t); i;) {
                    for (; n;) a = n.nextSibling, s = B(n, r, F, t), t != I && o.appendChild(s), r = F, n = a;
                    if (i == e) return o;
                    n = i.nextSibling, i = i.parentNode, l = B(i, z, F, t), t != I && l.appendChild(o), o = l
                }
            }
            function B(e, t, r, i) {
                var o, a, s, l, c;
                if (t) return D(e, i);
                if (3 == e.nodeType) {
                    if (o = e.nodeValue, r ? (l = M[W], a = o.substring(l), s = o.substring(0, l)) : (l = M[q], a = o.substring(0, l), s = o.substring(l)), i != O && (e.nodeValue = s), i == I) return;
                    return c = n.clone(e, z), c.nodeValue = a, c
                }
                if (i != I) return n.clone(e, z)
            }
            function D(e, t) {
                return t != I ? t == O ? n.clone(e, F) : e : void e.parentNode.removeChild(e)
            }
            function L() {
                return n.create("body", null, g()).outerText
            }
            var M = this,
                H = n.doc,
                P = 0,
                O = 1,
                I = 2,
                F = !0,
                z = !1,
                W = "startOffset",
                V = "startContainer",
                U = "endContainer",
                q = "endOffset",
                $ = e.extend,
                j = n.nodeIndex;
            return $(M, {
                startContainer: H,
                startOffset: 0,
                endContainer: H,
                endOffset: 0,
                collapsed: F,
                commonAncestorContainer: H,
                START_TO_START: 0,
                START_TO_END: 1,
                END_TO_END: 2,
                END_TO_START: 3,
                setStart: i,
                setEnd: o,
                setStartBefore: a,
                setStartAfter: s,
                setEndBefore: l,
                setEndAfter: c,
                collapse: d,
                selectNode: u,
                selectNodeContents: f,
                compareBoundaryPoints: p,
                deleteContents: m,
                extractContents: h,
                cloneContents: g,
                insertNode: v,
                surroundContents: y,
                cloneRange: b,
                toStringIE: L
            }), M
        }
        return t.prototype.toString = function() {
            return this.toStringIE()
        }, t
    }), r(m, [f], function(e) {
        function t(e) {
            var t;
            return t = document.createElement("div"), t.innerHTML = e, t.textContent || t.innerText || e
        }
        function n(e, t) {
            var n, r, i, a = {};
            if (e) {
                for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), o[r] || (i = "&" + e[n + 1] + ";", a[r] = i, a[i] = r);
                return a
            }
        }
        var r = e.makeMap,
            i, o, a, s = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            l = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            c = /[<>&\"\']/g,
            d = /&(#x|#)?([\w]+);/g,
            u = {
                128: "\u20ac",
                130: "\u201a",
                131: "\u0192",
                132: "\u201e",
                133: "\u2026",
                134: "\u2020",
                135: "\u2021",
                136: "\u02c6",
                137: "\u2030",
                138: "\u0160",
                139: "\u2039",
                140: "\u0152",
                142: "\u017d",
                145: "\u2018",
                146: "\u2019",
                147: "\u201c",
                148: "\u201d",
                149: "\u2022",
                150: "\u2013",
                151: "\u2014",
                152: "\u02dc",
                153: "\u2122",
                154: "\u0161",
                155: "\u203a",
                156: "\u0153",
                158: "\u017e",
                159: "\u0178"
            };
        o = {
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            "`": "&#96;"
        }, a = {
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&quot;": '"',
            "&apos;": "'"
        }, i = n("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
        var f = {
            encodeRaw: function(e, t) {
                return e.replace(t ? s : l, function(e) {
                    return o[e] || e
                })
            },
            encodeAllRaw: function(e) {
                return ("" + e).replace(c, function(e) {
                    return o[e] || e
                })
            },
            encodeNumeric: function(e, t) {
                return e.replace(t ? s : l, function(e) {
                    return e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : o[e] || "&#" + e.charCodeAt(0) + ";"
                })
            },
            encodeNamed: function(e, t, n) {
                return n = n || i, e.replace(t ? s : l, function(e) {
                    return o[e] || n[e] || e
                })
            },
            getEncodeFunc: function(e, t) {
                function a(e, n) {
                    return e.replace(n ? s : l, function(e) {
                        return o[e] || t[e] || "&#" + e.charCodeAt(0) + ";" || e
                    })
                }
                function c(e, n) {
                    return f.encodeNamed(e, n, t)
                }
                return t = n(t) || i, e = r(e.replace(/\+/g, ",")), e.named && e.numeric ? a : e.named ? t ? c : f.encodeNamed : e.numeric ? f.encodeNumeric : f.encodeRaw
            },
            decode: function(e) {
                return e.replace(d, function(e, n, r) {
                    return n ? (r = parseInt(r, 2 === n.length ? 16 : 10), r > 65535 ? (r -= 65536, String.fromCharCode(55296 + (r >> 10), 56320 + (1023 & r))) : u[r] || String.fromCharCode(r)) : a[e] || i[e] || t(e)
                })
            }
        };
        return f
    }), r(h, [], function() {
        var e = navigator,
            t = e.userAgent,
            n, r, i, o, a, s, l;
        n = window.opera && window.opera.buildNumber, r = /WebKit/.test(t), i = !r && !n && /MSIE/gi.test(t) && /Explorer/gi.test(e.appName), i = i && /MSIE (\w+)\./.exec(t)[1], o = -1 == t.indexOf("Trident/") || -1 == t.indexOf("rv:") && -1 == e.appName.indexOf("Netscape") ? !1 : 11, i = i || o, a = !r && !o && /Gecko/.test(t), s = -1 != t.indexOf("Mac"), l = /(iPad|iPhone)/.test(t);
        var c = !l || t.match(/AppleWebKit\/(\d*)/)[1] >= 534;
        return {
            opera: n,
            webkit: r,
            ie: i,
            gecko: a,
            mac: s,
            iOS: l,
            contentEditable: c,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: 8 != i,
            range: window.getSelection && "Range" in window,
            documentMode: i ? document.documentMode || 7 : 10
        }
    }), r(g, [], function() {
        return function(e, t) {
            function n(t) {
                e.getElementsByTagName("head")[0].appendChild(t)
            }
            function r(t, r, s) {
                function l() {
                    for (var e = v.passed, t = e.length; t--;) e[t]();
                    v.status = 2, v.passed = [], v.failed = []
                }
                function c() {
                    for (var e = v.failed, t = e.length; t--;) e[t]();
                    v.status = 3, v.passed = [], v.failed = []
                }
                function d() {
                    var e = navigator.userAgent.match(/WebKit\/(\d*)/);
                    return !!(e && e[1] < 536)
                }
                function u(e, t) {
                    e() || ((new Date).getTime() - g < a ? window.setTimeout(t, 0) : c())
                }
                function f() {
                    u(function() {
                        for (var t = e.styleSheets, n, r = t.length, i; r--;) if (n = t[r], i = n.ownerNode ? n.ownerNode : n.owningElement, i && i.id === m.id) return l(), !0
                    }, f)
                }
                function p() {
                    u(function() {
                        try {
                            var e = h.sheet.cssRules;
                            return l(), !! e
                        } catch (t) {}
                    }, p)
                }
                var m, h, g, v;
                if (o[t] ? v = o[t] : (v = {
                    passed: [],
                    failed: []
                }, o[t] = v), r && v.passed.push(r), s && v.failed.push(s), 1 != v.status) {
                    if (2 == v.status) return void l();
                    if (3 == v.status) return void c();
                    if (v.status = 1, m = e.createElement("link"), m.rel = "stylesheet", m.type = "text/css", m.id = "u" + i++, m.async = !1, m.defer = !1, g = (new Date).getTime(), "onload" in m && !d()) m.onload = f, m.onerror = c;
                    else {
                        if (navigator.userAgent.indexOf("Firefox") > 0) return h = e.createElement("style"), h.textContent = '@import "' + t + '"', p(), void n(h);
                        f()
                    }
                    n(m), m.href = t
                }
            }
            var i = 0,
                o = {},
                a;
            t = t || {}, a = t.maxLoadTime || 5e3, this.load = r
        }
    }), r(v, [l, c, d, u, p, m, h, f, g], function(e, n, r, i, o, a, s, l, c) {
        function d(e, t) {
            var i = this,
                o;
            i.doc = e, i.win = window, i.files = {}, i.counter = 0, i.stdMode = !v || e.documentMode >= 8, i.boxModel = !v || "CSS1Compat" == e.compatMode || i.stdMode, i.hasOuterHTML = "outerHTML" in e.createElement("a"), i.styleSheetLoader = new c(e), this.boundEvents = [], i.settings = t = h({
                keep_values: !1,
                hex_colors: 1
            }, t), i.schema = t.schema, i.styles = new n({
                url_converter: t.url_converter,
                url_converter_scope: t.url_converter_scope
            }, t.schema), i.fixDoc(e), i.events = t.ownEvents ? new r(t.proxy) : r.Event, o = t.schema ? t.schema.getBlockElements() : {}, i.isBlock = function(e) {
                if (!e) return !1;
                var t = e.nodeType;
                return t ? !(1 !== t || !o[e.nodeName]) : !! o[e]
            }
        }
        var u = l.each,
            f = l.is,
            p = l.grep,
            m = l.trim,
            h = l.extend,
            g = s.webkit,
            v = s.ie,
            y = /^([a-z0-9],?)+$/i,
            b = /^[ \t\r\n]*$/,
            C = l.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " ");
        return d.prototype = {
            root: null,
            props: {
                "for": "htmlFor",
                "class": "className",
                className: "className",
                checked: "checked",
                disabled: "disabled",
                maxlength: "maxLength",
                readonly: "readOnly",
                selected: "selected",
                value: "value",
                id: "id",
                name: "name",
                type: "type"
            },
            fixDoc: function(e) {
                var t = this.settings,
                    n;
                if (v && t.schema) {
                    "abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g, function(t) {
                        e.createElement(t)
                    });
                    for (n in t.schema.getCustomElements()) e.createElement(n)
                }
            },
            clone: function(e, t) {
                var n = this,
                    r, i;
                return !v || 1 !== e.nodeType || t ? e.cloneNode(t) : (i = n.doc, t ? r.firstChild : (r = i.createElement(e.nodeName), u(n.getAttribs(e), function(t) {
                    n.setAttrib(r, t.nodeName, n.getAttrib(e, t.nodeName))
                }), r))
            },
            getRoot: function() {
                var e = this;
                return e.get(e.settings.root_element) || e.doc.body
            },
            getViewPort: function(e) {
                var t, n;
                return e = e ? e : this.win, t = e.document, n = this.boxModel ? t.documentElement : t.body, {
                    x: e.pageXOffset || n.scrollLeft,
                    y: e.pageYOffset || n.scrollTop,
                    w: e.innerWidth || n.clientWidth,
                    h: e.innerHeight || n.clientHeight
                }
            },
            getRect: function(e) {
                var t = this,
                    n, r;
                return e = t.get(e), n = t.getPos(e), r = t.getSize(e), {
                    x: n.x,
                    y: n.y,
                    w: r.w,
                    h: r.h
                }
            },
            getSize: function(e) {
                var t = this,
                    n, r;
                return e = t.get(e), n = t.getStyle(e, "width"), r = t.getStyle(e, "height"), -1 === n.indexOf("px") && (n = 0), -1 === r.indexOf("px") && (r = 0), {
                    w: parseInt(n, 10) || e.offsetWidth || e.clientWidth,
                    h: parseInt(r, 10) || e.offsetHeight || e.clientHeight
                }
            },
            getParent: function(e, t, n) {
                return this.getParents(e, t, n, !1)
            },
            getParents: function(e, n, r, i) {
                var o = this,
                    a, s = [];
                for (e = o.get(e), i = i === t, r = r || ("BODY" != o.getRoot().nodeName ? o.getRoot().parentNode : null), f(n, "string") && (a = n, n = "*" === n ?
                function(e) {
                    return 1 == e.nodeType
                } : function(e) {
                    return o.is(e, a)
                }); e && e != r && e.nodeType && 9 !== e.nodeType;) {
                    if (!n || n(e)) {
                        if (!i) return e;
                        s.push(e)
                    }
                    e = e.parentNode
                }
                return i ? s : null
            },
            get: function(e) {
                var t;
                return e && this.doc && "string" == typeof e && (t = e, e = this.doc.getElementById(e), e && e.id !== t) ? this.doc.getElementsByName(t)[1] : e
            },
            getNext: function(e, t) {
                return this._findSib(e, t, "nextSibling")
            },
            getPrev: function(e, t) {
                return this._findSib(e, t, "previousSibling")
            },
            select: function(t, n) {
                var r = this;
                return e(t, r.get(n) || r.get(r.settings.root_element) || r.doc, [])
            },
            is: function(n, r) {
                var i;
                if (n.length === t) {
                    if ("*" === r) return 1 == n.nodeType;
                    if (y.test(r)) {
                        for (r = r.toLowerCase().split(/,/), n = n.nodeName.toLowerCase(), i = r.length - 1; i >= 0; i--) if (r[i] == n) return !0;
                        return !1
                    }
                }
                if (n.nodeType && 1 != n.nodeType) return !1;
                var o = n.nodeType ? [n] : n;
                return e(r, o[0].ownerDocument || o[0], null, o).length > 0
            },
            add: function(e, t, n, r, i) {
                var o = this;
                return this.run(e, function(e) {
                    var a;
                    return a = f(t, "string") ? o.doc.createElement(t) : t, o.setAttribs(a, n), r && (r.nodeType ? a.appendChild(r) : o.setHTML(a, r)), i ? a : e.appendChild(a)
                })
            },
            create: function(e, t, n) {
                return this.add(this.doc.createElement(e), e, t, n, 1)
            },
            createHTML: function(e, t, n) {
                var r = "",
                    i;
                r += "<" + e;
                for (i in t) t.hasOwnProperty(i) && null !== t[i] && (r += " " + i + '="' + this.encode(t[i]) + '"');
                return "undefined" != typeof n ? r + ">" + n + "</" + e + ">" : r + " />"
            },
            createFragment: function(e) {
                var t, n, r = this.doc,
                    i;
                for (i = r.createElement("div"), t = r.createDocumentFragment(), e && (i.innerHTML = e); n = i.firstChild;) t.appendChild(n);
                return t
            },
            remove: function(e, t) {
                return this.run(e, function(e) {
                    var n, r = e.parentNode;
                    if (!r) return null;
                    if (t) for (; n = e.firstChild;)!v || 3 !== n.nodeType || n.nodeValue ? r.insertBefore(n, e) : e.removeChild(n);
                    return r.removeChild(e)
                })
            },
            setStyle: function(e, t, n) {
                return this.run(e, function(e) {
                    var r = this,
                        i, o;
                    if (t) if ("string" == typeof t) {
                        i = e.style, t = t.replace(/-(\D)/g, function(e, t) {
                            return t.toUpperCase()
                        }), "number" != typeof n && !/^[\-0-9\.]+$/.test(n) || C[t] || (n += "px"), "opacity" === t && e.runtimeStyle && "undefined" == typeof e.runtimeStyle.opacity && (i.filter = "" === n ? "" : "alpha(opacity=" + 100 * n + ")"), "float" == t && (t = "cssFloat" in e.style ? "cssFloat" : "styleFloat");
                        try {
                            i[t] = n
                        } catch (a) {}
                        r.settings.update_styles && e.removeAttribute("data-mce-style")
                    } else for (o in t) r.setStyle(e, o, t[o])
                })
            },
            getStyle: function(e, n, r) {
                if (e = this.get(e)) {
                    if (this.doc.defaultView && r) {
                        n = n.replace(/[A-Z]/g, function(e) {
                            return "-" + e
                        });
                        try {
                            return this.doc.defaultView.getComputedStyle(e, null).getPropertyValue(n)
                        } catch (i) {
                            return null
                        }
                    }
                    return n = n.replace(/-(\D)/g, function(e, t) {
                        return t.toUpperCase()
                    }), "float" == n && (n = v ? "styleFloat" : "cssFloat"), e.currentStyle && r ? e.currentStyle[n] : e.style ? e.style[n] : t
                }
            },
            setStyles: function(e, t) {
                this.setStyle(e, t)
            },
            css: function(e, t, n) {
                this.setStyle(e, t, n)
            },
            removeAllAttribs: function(e) {
                return this.run(e, function(e) {
                    var t, n = e.attributes;
                    for (t = n.length - 1; t >= 0; t--) e.removeAttributeNode(n.item(t))
                })
            },
            setAttrib: function(e, t, n) {
                var r = this;
                if (e && t) return this.run(e, function(e) {
                    var i = r.settings,
                        o = e.getAttribute(t);
                    if (null !== n) switch (t) {
                    case "style":
                        if (!f(n, "string")) return void u(n, function(t, n) {
                            r.setStyle(e, n, t)
                        });
                        i.keep_values && (n ? e.setAttribute("data-mce-style", n, 2) : e.removeAttribute("data-mce-style", 2)), e.style.cssText = n;
                        break;
                    case "class":
                        e.className = n || "";
                        break;
                    case "src":
                    case "href":
                        i.keep_values && (i.url_converter && (n = i.url_converter.call(i.url_converter_scope || r, n, t, e)), r.setAttrib(e, "data-mce-" + t, n, 2));
                        break;
                    case "shape":
                        e.setAttribute("data-mce-style", n)
                    }
                    f(n) && null !== n && 0 !== n.length ? e.setAttribute(t, "" + n, 2) : e.removeAttribute(t, 2), o != n && i.onSetAttrib && i.onSetAttrib({
                        attrElm: e,
                        attrName: t,
                        attrValue: n
                    })
                })
            },
            setAttribs: function(e, t) {
                var n = this;
                return this.run(e, function(e) {
                    u(t, function(t, r) {
                        n.setAttrib(e, r, t)
                    })
                })
            },
            getAttrib: function(e, t, n) {
                var r, i = this,
                    o;
                if (e = i.get(e), !e || 1 !== e.nodeType) return n === o ? !1 : n;
                if (f(n) || (n = ""), /^(src|href|style|coords|shape)$/.test(t) && (r = e.getAttribute("data-mce-" + t))) return r;
                if (v && i.props[t] && (r = e[i.props[t]], r = r && r.nodeValue ? r.nodeValue : r), r || (r = e.getAttribute(t, 2)), /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noshade|nowrap|readonly|selected)$/.test(t)) return e[i.props[t]] === !0 && "" === r ? t : r ? t : "";
                if ("FORM" === e.nodeName && e.getAttributeNode(t)) return e.getAttributeNode(t).nodeValue;
                if ("style" === t && (r = r || e.style.cssText, r && (r = i.serializeStyle(i.parseStyle(r), e.nodeName), i.settings.keep_values && e.setAttribute("data-mce-style", r))), g && "class" === t && r && (r = r.replace(/(apple|webkit)\-[a-z\-]+/gi, "")), v) switch (t) {
                case "rowspan":
                case "colspan":
                    1 === r && (r = "");
                    break;
                case "size":
                    ("+0" === r || 20 === r || 0 === r) && (r = "");
                    break;
                case "width":
                case "height":
                case "vspace":
                case "checked":
                case "disabled":
                case "readonly":
                    0 === r && (r = "");
                    break;
                case "hspace":
                    -1 === r && (r = "");
                    break;
                case "maxlength":
                case "tabindex":
                    (32768 === r || 2147483647 === r || "32768" === r) && (r = "");
                    break;
                case "multiple":
                case "compact":
                case "noshade":
                case "nowrap":
                    return 65535 === r ? t : n;
                case "shape":
                    r = r.toLowerCase();
                    break;
                default:
                    0 === t.indexOf("on") && r && (r = ("" + r).replace(/^function\s+\w+\(\)\s+\{\s+(.*)\s+\}$/, "$1"))
                }
                return r !== o && null !== r && "" !== r ? "" + r : n
            },
            getPos: function(e, t) {
                var n = this,
                    r = 0,
                    i = 0,
                    o, a = n.doc,
                    s;
                if (e = n.get(e), t = t || a.body, e) {
                    if (t === a.body && e.getBoundingClientRect) return s = e.getBoundingClientRect(), t = n.boxModel ? a.documentElement : a.body, r = s.left + (a.documentElement.scrollLeft || a.body.scrollLeft) - t.clientLeft, i = s.top + (a.documentElement.scrollTop || a.body.scrollTop) - t.clientTop, {
                        x: r,
                        y: i
                    };
                    for (o = e; o && o != t && o.nodeType;) r += o.offsetLeft || 0, i += o.offsetTop || 0, o = o.offsetParent;
                    for (o = e.parentNode; o && o != t && o.nodeType;) r -= o.scrollLeft || 0, i -= o.scrollTop || 0, o = o.parentNode
                }
                return {
                    x: r,
                    y: i
                }
            },
            parseStyle: function(e) {
                return this.styles.parse(e)
            },
            serializeStyle: function(e, t) {
                return this.styles.serialize(e, t)
            },
            addStyle: function(e) {
                var t = this,
                    n = t.doc,
                    r, i;
                if (t !== d.DOM && n === document) {
                    var o = d.DOM.addedStyles;
                    if (o = o || [], o[e]) return;
                    o[e] = !0, d.DOM.addedStyles = o
                }
                i = n.getElementById("mceDefaultStyles"), i || (i = n.createElement("style"), i.id = "mceDefaultStyles", i.type = "text/css", r = n.getElementsByTagName("head")[0], r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i)), i.styleSheet ? i.styleSheet.cssText += e : i.appendChild(n.createTextNode(e))
            },
            loadCSS: function(e) {
                var t = this,
                    n = t.doc,
                    r;
                return t !== d.DOM && n === document ? void d.DOM.loadCSS(e) : (e || (e = ""), r = n.getElementsByTagName("head")[0], void u(e.split(","), function(e) {
                    var i;
                    t.files[e] || (t.files[e] = !0, i = t.create("link", {
                        rel: "stylesheet",
                        href: e
                    }), v && n.documentMode && n.recalc && (i.onload = function() {
                        n.recalc && n.recalc(), i.onload = null
                    }), r.appendChild(i))
                }))
            },
            addClass: function(e, t) {
                return this.run(e, function(e) {
                    var n;
                    return t ? this.hasClass(e, t) ? e.className : (n = this.removeClass(e, t), e.className = n = ("" !== n ? n + " " : "") + t, n) : 0
                })
            },
            removeClass: function(e, t) {
                var n = this,
                    r;
                return n.run(e, function(e) {
                    var i;
                    return n.hasClass(e, t) ? (r || (r = new RegExp("(^|\\s+)" + t + "(\\s+|$)", "g")), i = e.className.replace(r, " "), i = m(" " != i ? i : ""), e.className = i, i || (e.removeAttribute("class"), e.removeAttribute("className")), i) : e.className
                })
            },
            hasClass: function(e, t) {
                return e = this.get(e), e && t ? -1 !== (" " + e.className + " ").indexOf(" " + t + " ") : !1
            },
            toggleClass: function(e, n, r) {
                r = r === t ? !this.hasClass(e, n) : r, this.hasClass(e, n) !== r && (r ? this.addClass(e, n) : this.removeClass(e, n))
            },
            show: function(e) {
                return this.setStyle(e, "display", "block")
            },
            hide: function(e) {
                return this.setStyle(e, "display", "none")
            },
            isHidden: function(e) {
                return e = this.get(e), !e || "none" == e.style.display || "none" == this.getStyle(e, "display")
            },
            uniqueId: function(e) {
                return (e ? e : "mce_") + this.counter++
            },
            setHTML: function(e, t) {
                var n = this;
                return n.run(e, function(e) {
                    if (v) {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        try {
                            e.innerHTML = "<br />" + t, e.removeChild(e.firstChild)
                        } catch (r) {
                            var i = n.create("div");
                            i.innerHTML = "<br />" + t, u(p(i.childNodes), function(t, n) {
                                n && e.canHaveHTML && e.appendChild(t)
                            })
                        }
                    } else e.innerHTML = t;
                    return t
                })
            },
            getOuterHTML: function(e) {
                var t, n = this;
                return (e = n.get(e)) ? 1 === e.nodeType && n.hasOuterHTML ? e.outerHTML : (t = (e.ownerDocument || n.doc).createElement("body"), t.appendChild(e.cloneNode(!0)), t.innerHTML) : null
            },
            setOuterHTML: function(e, t, n) {
                var r = this;
                return r.run(e, function(e) {
                    function i() {
                        var i, o;
                        for (o = n.createElement("body"), o.innerHTML = t, i = o.lastChild; i;) r.insertAfter(i.cloneNode(!0), e), i = i.previousSibling;
                        r.remove(e)
                    }
                    if (1 == e.nodeType) if (n = n || e.ownerDocument || r.doc, v) try {
                        1 == e.nodeType && r.hasOuterHTML ? e.outerHTML = t : i()
                    } catch (o) {
                        i()
                    } else i()
                })
            },
            decode: a.decode,
            encode: a.encodeAllRaw,
            insertAfter: function(e, t) {
                return t = this.get(t), this.run(e, function(e) {
                    var n, r;
                    return n = t.parentNode, r = t.nextSibling, r ? n.insertBefore(e, r) : n.appendChild(e), e
                })
            },
            replace: function(e, t, n) {
                var r = this;
                return r.run(t, function(t) {
                    return f(t, "array") && (e = e.cloneNode(!0)), n && u(p(t.childNodes), function(t) {
                        e.appendChild(t)
                    }), t.parentNode.replaceChild(e, t)
                })
            },
            rename: function(e, t) {
                var n = this,
                    r;
                return e.nodeName != t.toUpperCase() && (r = n.create(t), u(n.getAttribs(e), function(t) {
                    n.setAttrib(r, t.nodeName, n.getAttrib(e, t.nodeName))
                }), n.replace(r, e, 1)), r || e
            },
            findCommonAncestor: function(e, t) {
                for (var n = e, r; n;) {
                    for (r = t; r && n != r;) r = r.parentNode;
                    if (n == r) break;
                    n = n.parentNode
                }
                return !n && e.ownerDocument ? e.ownerDocument.documentElement : n
            },
            toHex: function(e) {
                return this.styles.toHex(l.trim(e))
            },
            run: function(e, t, n) {
                var r = this,
                    i;
                return "string" == typeof e && (e = r.get(e)), e ? (n = n || this, e.nodeType || !e.length && 0 !== e.length ? t.call(n, e) : (i = [], u(e, function(e, o) {
                    e && ("string" == typeof e && (e = r.get(e)), i.push(t.call(n, e, o)))
                }), i)) : !1
            },
            getAttribs: function(e) {
                var t;
                if (e = this.get(e), !e) return [];
                if (v) {
                    if (t = [], "OBJECT" == e.nodeName) return e.attributes;
                    "OPTION" === e.nodeName && this.getAttrib(e, "selected") && t.push({
                        specified: 1,
                        nodeName: "selected"
                    });
                    var n = /<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;
                    return e.cloneNode(!1).outerHTML.replace(n, "").replace(/[\w:\-]+/gi, function(e) {
                        t.push({
                            specified: 1,
                            nodeName: e
                        })
                    }), t
                }
                return e.attributes
            },
            isEmpty: function(e, t) {
                var n = this,
                    r, o, a, s, l, c = 0;
                if (e = e.firstChild) {
                    s = new i(e, e.parentNode), t = t || n.schema ? n.schema.getNonEmptyElements() : null;
                    do {
                        if (a = e.nodeType, 1 === a) {
                            if (e.getAttribute("data-mce-bogus")) continue;
                            if (l = e.nodeName.toLowerCase(), t && t[l]) {
                                if ("br" === l) {
                                    c++;
                                    continue
                                }
                                return !1
                            }
                            for (o = n.getAttribs(e), r = o.length; r--;) if (l = o[r].nodeName, "name" === l || "data-mce-bookmark" === l) return !1
                        }
                        if (8 == a) return !1;
                        if (3 === a && !b.test(e.nodeValue)) return !1
                    } while (e = s.next())
                }
                return 1 >= c
            },
            createRng: function() {
                var e = this.doc;
                return e.createRange ? e.createRange() : new o(this)
            },
            nodeIndex: function(e, t) {
                var n = 0,
                    r, i;
                if (e) for (r = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) i = e.nodeType, (!t || 3 != i || i != r && e.nodeValue.length) && (n++, r = i);
                return n
            },
            split: function(e, t, n) {
                function r(e) {
                    function t(e) {
                        var t = e.previousSibling && "SPAN" == e.previousSibling.nodeName,
                            n = e.nextSibling && "SPAN" == e.nextSibling.nodeName;
                        return t && n
                    }
                    var n, o = e.childNodes,
                        a = e.nodeType;
                    if (1 != a || "bookmark" != e.getAttribute("data-mce-type")) {
                        for (n = o.length - 1; n >= 0; n--) r(o[n]);
                        if (9 != a) {
                            if (3 == a && e.nodeValue.length > 0) {
                                var s = m(e.nodeValue).length;
                                if (!i.isBlock(e.parentNode) || s > 0 || 0 === s && t(e)) return
                            } else if (1 == a && (o = e.childNodes, 1 == o.length && o[0] && 1 == o[0].nodeType && "bookmark" == o[0].getAttribute("data-mce-type") && e.parentNode.insertBefore(o[0], e), o.length || /^(br|hr|input|img)$/i.test(e.nodeName))) return;
                            i.remove(e)
                        }
                        return e
                    }
                }
                var i = this,
                    o = i.createRng(),
                    a, s, l;
                return e && t ? (o.setStart(e.parentNode, i.nodeIndex(e)), o.setEnd(t.parentNode, i.nodeIndex(t)), a = o.extractContents(), o = i.createRng(), o.setStart(t.parentNode, i.nodeIndex(t) + 1), o.setEnd(e.parentNode, i.nodeIndex(e) + 1), s = o.extractContents(), l = e.parentNode, l.insertBefore(r(a), e), n ? l.replaceChild(n, t) : l.insertBefore(t, e), l.insertBefore(r(s), e), i.remove(e), n || t) : void 0
            },
            bind: function(e, t, n, r) {
                var i = this;
                if (l.isArray(e)) {
                    for (var o = e.length; o--;) e[o] = i.bind(e[o], t, n, r);
                    return e
                }
                return !i.settings.collect || e !== i.doc && e !== i.win || i.boundEvents.push([e, t, n, r]), i.events.bind(e, t, n, r || i)
            },
            unbind: function(e, t, n) {
                var r = this,
                    i;
                if (l.isArray(e)) {
                    for (i = e.length; i--;) e[i] = r.unbind(e[i], t, n);
                    return e
                }
                if (r.boundEvents && (e === r.doc || e === r.win)) for (i = r.boundEvents.length; i--;) {
                    var o = r.boundEvents[i];
                    e != o[0] || t && t != o[1] || n && n != o[2] || this.events.unbind(o[0], o[1], o[2])
                }
                return this.events.unbind(e, t, n)
            },
            fire: function(e, t, n) {
                return this.events.fire(e, t, n)
            },
            getContentEditable: function(e) {
                var t;
                return e && 1 == e.nodeType ? (t = e.getAttribute("data-mce-contenteditable"), t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null) : null
            },
            getContentEditableParent: function(e) {
                for (var t = this.getRoot(), n = null; e && e !== t && (n = this.getContentEditable(e), null === n); e = e.parentNode);
                return n
            },
            destroy: function() {
                var t = this;
                if (t.boundEvents) {
                    for (var n = t.boundEvents.length; n--;) {
                        var r = t.boundEvents[n];
                        this.events.unbind(r[0], r[1], r[2])
                    }
                    t.boundEvents = null
                }
                e.setDocument && e.setDocument(), t.win = t.doc = t.root = t.events = t.frag = null
            },
            isChildOf: function(e, t) {
                for (; e;) {
                    if (t === e) return !0;
                    e = e.parentNode
                }
                return !1
            },
            dumpRng: function(e) {
                return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
            },
            _findSib: function(e, t, n) {
                var r = this,
                    i = t;
                if (e) for ("string" == typeof i && (i = function(e) {
                    return r.is(e, t)
                }), e = e[n]; e; e = e[n]) if (i(e)) return e;
                return null
            }
        }, d.DOM = new d(document), d
    }), r(y, [v, f], function(e, t) {
        function n() {
            function e(e, t) {
                function n() {
                    o.remove(s), a && (a.onreadystatechange = a.onload = a = null), t()
                }
                function i() {
                    "undefined" != typeof console && console.log && console.log("Failed to load: " + e)
                }
                var o = r,
                    a, s;
                s = o.uniqueId(), a = document.createElement("script"), a.id = s, a.type = "text/javascript", a.src = e, "onreadystatechange" in a ? a.onreadystatechange = function() {
                    /loaded|complete/.test(a.readyState) && n()
                } : a.onload = n, a.onerror = i, (document.getElementsByTagName("head")[0] || document.body).appendChild(a)
            }
            var t = 0,
                n = 1,
                a = 2,
                s = {},
                l = [],
                c = {},
                d = [],
                u = 0,
                f;
            this.isDone = function(e) {
                return s[e] == a
            }, this.markDone = function(e) {
                s[e] = a
            }, this.add = this.load = function(e, n, r) {
                var i = s[e];
                i == f && (l.push(e), s[e] = t), n && (c[e] || (c[e] = []), c[e].push({
                    func: n,
                    scope: r || this
                }))
            }, this.loadQueue = function(e, t) {
                this.loadScripts(l, e, t)
            }, this.loadScripts = function(t, r, l) {
                function p(e) {
                    i(c[e], function(e) {
                        e.func.call(e.scope)
                    }), c[e] = f
                }
                var m;
                d.push({
                    func: r,
                    scope: l || this
                }), (m = function() {
                    var r = o(t);
                    t.length = 0, i(r, function(t) {
                        return s[t] == a ? void p(t) : void(s[t] != n && (s[t] = n, u++, e(t, function() {
                            s[t] = a, u--, p(t), m()
                        })))
                    }), u || (i(d, function(e) {
                        e.func.call(e.scope)
                    }), d.length = 0)
                })()
            }
        }
        var r = e.DOM,
            i = t.each,
            o = t.grep;
        return n.ScriptLoader = new n, n
    }), r(b, [y, f], function(e, n) {
        function r() {
            var e = this;
            e.items = [], e.urls = {}, e.lookup = {}
        }
        var i = n.each;
        return r.prototype = {
            get: function(e) {
                return this.lookup[e] ? this.lookup[e].instance : t
            },
            dependencies: function(e) {
                var t;
                return this.lookup[e] && (t = this.lookup[e].dependencies), t || []
            },
            requireLangPack: function(t, n) {
                var i = r.language;
                if (i && r.languageLoad !== !1) {
                    if (n) if (n = "," + n + ",", -1 != n.indexOf("," + i.substr(0, 2) + ",")) i = i.substr(0, 2);
                    else if (-1 == n.indexOf("," + i + ",")) return;
                    e.ScriptLoader.add(this.urls[t] + "/langs/" + i + ".js")
                }
            },
            add: function(e, t, n) {
                return this.items.push(t), this.lookup[e] = {
                    instance: t,
                    dependencies: n
                }, t
            },
            createUrl: function(e, t) {
                return "object" == typeof t ? t : {
                    prefix: e.prefix,
                    resource: t,
                    suffix: e.suffix
                }
            },
            addComponents: function(t, n) {
                var r = this.urls[t];
                i(n, function(t) {
                    e.ScriptLoader.add(r + "/" + t)
                })
            },
            load: function(n, o, a, s) {
                function l() {
                    var r = c.dependencies(n);
                    i(r, function(e) {
                        var n = c.createUrl(o, e);
                        c.load(n.resource, n, t, t)
                    }), a && a.call(s ? s : e)
                }
                var c = this,
                    d = o;
                c.urls[n] || ("object" == typeof o && (d = o.prefix + o.resource + o.suffix), 0 !== d.indexOf("/") && -1 == d.indexOf("://") && (d = r.baseURL + "/" + d), c.urls[n] = d.substring(0, d.lastIndexOf("/")), c.lookup[n] ? l() : e.ScriptLoader.add(d, l, s))
            }
        }, r.PluginManager = new r, r.ThemeManager = new r, r
    }), r(C, [], function() {
        function e(e, t, n) {
            var r, i, o = n ? "lastChild" : "firstChild",
                a = n ? "prev" : "next";
            if (e[o]) return e[o];
            if (e !== t) {
                if (r = e[a]) return r;
                for (i = e.parent; i && i !== t; i = i.parent) if (r = i[a]) return r
            }
        }
        function t(e, t) {
            this.name = e, this.type = t, 1 === t && (this.attributes = [], this.attributes.map = {})
        }
        var n = /^[ \t\r\n]*$/,
            r = {
                "#text": 3,
                "#comment": 8,
                "#cdata": 4,
                "#pi": 7,
                "#doctype": 10,
                "#document-fragment": 11
            };
        return t.prototype = {
            replace: function(e) {
                var t = this;
                return e.parent && e.remove(), t.insert(e, t), t.remove(), t
            },
            attr: function(e, t) {
                var n = this,
                    r, i, o;
                if ("string" != typeof e) {
                    for (i in e) n.attr(i, e[i]);
                    return n
                }
                if (r = n.attributes) {
                    if (t !== o) {
                        if (null === t) {
                            if (e in r.map) for (delete r.map[e], i = r.length; i--;) if (r[i].name === e) return r = r.splice(i, 1), n;
                            return n
                        }
                        if (e in r.map) {
                            for (i = r.length; i--;) if (r[i].name === e) {
                                r[i].value = t;
                                break
                            }
                        } else r.push({
                            name: e,
                            value: t
                        });
                        return r.map[e] = t, n
                    }
                    return r.map[e]
                }
            },
            clone: function() {
                var e = this,
                    n = new t(e.name, e.type),
                    r, i, o, a, s;
                if (o = e.attributes) {
                    for (s = [], s.map = {}, r = 0, i = o.length; i > r; r++) a = o[r], "id" !== a.name && (s[s.length] = {
                        name: a.name,
                        value: a.value
                    }, s.map[a.name] = a.value);
                    n.attributes = s
                }
                return n.value = e.value, n.shortEnded = e.shortEnded, n
            },
            wrap: function(e) {
                var t = this;
                return t.parent.insert(e, t), e.append(t), t
            },
            unwrap: function() {
                var e = this,
                    t, n;
                for (t = e.firstChild; t;) n = t.next, e.insert(t, e, !0), t = n;
                e.remove()
            },
            remove: function() {
                var e = this,
                    t = e.parent,
                    n = e.next,
                    r = e.prev;
                return t && (t.firstChild === e ? (t.firstChild = n, n && (n.prev = null)) : r.next = n, t.lastChild === e ? (t.lastChild = r, r && (r.next = null)) : n.prev = r, e.parent = e.next = e.prev = null), e
            },
            append: function(e) {
                var t = this,
                    n;
                return e.parent && e.remove(), n = t.lastChild, n ? (n.next = e, e.prev = n, t.lastChild = e) : t.lastChild = t.firstChild = e, e.parent = t, e
            },
            insert: function(e, t, n) {
                var r;
                return e.parent && e.remove(), r = t.parent || this, n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, e.next = t, t.prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, e.prev = t, t.next = e), e.parent = r, e
            },
            getAll: function(t) {
                var n = this,
                    r, i = [];
                for (r = n.firstChild; r; r = e(r, n)) r.name === t && i.push(r);
                return i
            },
            empty: function() {
                var t = this,
                    n, r, i;
                if (t.firstChild) {
                    for (n = [], i = t.firstChild; i; i = e(i, t)) n.push(i);
                    for (r = n.length; r--;) i = n[r], i.parent = i.firstChild = i.lastChild = i.next = i.prev = null
                }
                return t.firstChild = t.lastChild = null, t
            },
            isEmpty: function(t) {
                var r = this,
                    i = r.firstChild,
                    o, a;
                if (i) do {
                    if (1 === i.type) {
                        if (i.attributes.map["data-mce-bogus"]) continue;
                        if (t[i.name]) return !1;
                        for (o = i.attributes.length; o--;) if (a = i.attributes[o].name, "name" === a || 0 === a.indexOf("data-mce-")) return !1
                    }
                    if (8 === i.type) return !1;
                    if (3 === i.type && !n.test(i.value)) return !1
                } while (i = e(i, r));
                return !0
            },
            walk: function(t) {
                return e(this, null, t)
            }
        }, t.create = function(e, n) {
            var i, o;
            if (i = new t(e, r[e] || 1), n) for (o in n) i.attr(o, n[o]);
            return i
        }, t
    }), r(x, [f], function(e) {
        function t(e, t) {
            return e ? e.split(t || " ") : []
        }
        function n(e) {
            function n(e, n, r) {
                function i(e) {
                    var t = {},
                        n, r;
                    for (n = 0, r = e.length; r > n; n++) t[e[n]] = {};
                    return t
                }
                var a, l, c, d = arguments;
                for (r = r || [], n = n || "", "string" == typeof r && (r = t(r)), l = 3; l < d.length; l++)"string" == typeof d[l] && (d[l] = t(d[l])), r.push.apply(r, d[l]);
                for (e = t(e), a = e.length; a--;) c = [].concat(s, t(n)), o[e[a]] = {
                    attributes: i(c),
                    attributesOrder: c,
                    children: i(r)
                }
            }
            function r(e, n) {
                var r, i, a, s;
                for (e = t(e), r = e.length, n = t(n); r--;) for (i = o[e[r]], a = 0, s = n.length; s > a; a++) i.attributes[n[a]] = {}, i.attributesOrder.push(n[a])
            }
            var o = {},
                s, l, c, d, u, f;
            return i[e] ? i[e] : (s = t("id accesskey class dir lang style tabindex title"), l = t("address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"), c = t("a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"), "html4" != e && (s.push.apply(s, t("contenteditable contextmenu draggable dropzone hidden spellcheck translate")), l.push.apply(l, t("article aside details dialog figure header footer hgroup section nav")), c.push.apply(c, t("audio canvas command datalist mark meter output progress time wbr video ruby bdi keygen"))), "html5-strict" != e && (s.push("xml:lang"), f = t("acronym applet basefont big font strike tt"), c.push.apply(c, f), a(f, function(e) {
                n(e, "", c)
            }), u = t("center dir isindex noframes"), l.push.apply(l, u), d = [].concat(l, c), a(u, function(e) {
                n(e, "", d)
            })), d = d || [].concat(l, c), n("html", "manifest", "head body"), n("head", "", "base command link meta noscript script style title"), n("title hr noscript br"), n("base", "href target"), n("link", "href rel media hreflang type sizes hreflang"), n("meta", "name http-equiv content charset"), n("style", "media type scoped"), n("script", "src async defer type charset"), n("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", d), n("address dt dd div caption", "", d), n("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", c), n("blockquote", "cite", d), n("ol", "reversed start type", "li"), n("ul", "", "li"), n("li", "value", d), n("dl", "", "dt dd"), n("a", "href target rel media hreflang type", c), n("q", "cite", c), n("ins del", "cite datetime", d), n("img", "src alt usemap ismap width height"), n("iframe", "src name width height", d), n("embed", "src type width height"), n("object", "data type typemustmatch name usemap form width height", d, "param"), n("param", "name value"), n("map", "name", d, "area"), n("area", "alt coords shape href target rel media hreflang type"), n("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" == e ? " col" : "")), n("colgroup", "span", "col"), n("col", "span"), n("tbody thead tfoot", "", "tr"), n("tr", "", "td th"), n("td", "colspan rowspan headers", d), n("th", "colspan rowspan headers scope abbr", d), n("form", "accept-charset action autocomplete enctype method name novalidate target", d), n("fieldset", "disabled form name", d, "legend"), n("label", "form for", c), n("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), n("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" == e ? d : c), n("select", "disabled form multiple name required size", "option optgroup"), n("optgroup", "disabled label", "option"), n("option", "disabled label selected value"), n("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), n("menu", "type label", d, "li"), n("noscript", "", d), "html4" != e && (n("wbr"), n("ruby", "", c, "rt rp"), n("figcaption", "", d), n("mark rt rp summary bdi", "", c), n("canvas", "width height", d), n("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", d, "track source"), n("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", d, "track source"), n("source", "src type media"), n("track", "kind src srclang label default"), n("datalist", "", c, "option"), n("article section nav aside header footer", "", d), n("hgroup", "", "h1 h2 h3 h4 h5 h6"), n("figure", "", d, "figcaption"), n("time", "datetime", c), n("dialog", "open", d), n("command", "type label icon disabled checked radiogroup command"), n("output", "for form name", c), n("progress", "value max", c), n("meter", "value min max low high optimum", c), n("details", "open", d, "summary"), n("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" != e && (r("script", "language xml:space"), r("style", "xml:space"), r("object", "declare classid code codebase codetype archive standby align border hspace vspace"), r("embed", "align name hspace vspace"), r("param", "valuetype type"), r("a", "charset name rev shape coords"), r("br", "clear"), r("applet", "codebase archive code object alt name width height align hspace vspace"), r("img", "name longdesc align border hspace vspace"), r("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), r("font basefont", "size color face"), r("input", "usemap align"), r("select", "onchange"), r("textarea"), r("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), r("ul", "type compact"), r("li", "type"), r("ol dl menu dir", "compact"), r("pre", "width xml:space"), r("hr", "align noshade size width"), r("isindex", "prompt"), r("table", "summary width frame rules cellspacing cellpadding align bgcolor"), r("col", "width align char charoff valign"), r("colgroup", "width align char charoff valign"), r("thead", "align char charoff valign"), r("tr", "align char charoff valign bgcolor"), r("th", "axis align char charoff valign nowrap bgcolor width height"), r("form", "accept"), r("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), r("tfoot", "align char charoff valign"), r("tbody", "align char charoff valign"), r("area", "nohref"), r("body", "background bgcolor text link vlink alink")), "html4" != e && (r("input button select textarea", "autofocus"), r("input textarea", "placeholder"), r("a", "download"), r("link script img", "crossorigin"), r("iframe", "sandbox seamless allowfullscreen")), a(t("a form meter progress dfn"), function(e) {
                o[e] && delete o[e].children[e]
            }), delete o.caption.children.table, i[e] = o, o)
        }
        function r(e, t) {
            var n;
            return e && (n = {}, "string" == typeof e && (e = {
                "*": e
            }), a(e, function(e, r) {
                n[r] = "map" == t ? o(e, /[, ]/) : l(e, /[, ]/)
            })), n
        }
        var i = {},
            o = e.makeMap,
            a = e.each,
            s = e.extend,
            l = e.explode,
            c = e.inArray;
        return function(e) {
            function d(t, n, r) {
                var a = e[t];
                return a ? a = o(a, /[, ]/, o(a.toUpperCase(), /[, ]/)) : (a = i[t], a || (a = o(n, " ", o(n.toUpperCase(), " ")), a = s(a, r), i[t] = a)), a
            }
            function u(e) {
                return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
            }
            function f(e) {
                var n, r, i, a, s, l, d, f, p, m, h, g, v, b, x, w, _, E, N, k = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                    S = /^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                    T = /[*?+]/;
                if (e) for (e = t(e, ","), y["@"] && (w = y["@"].attributes, _ = y["@"].attributesOrder), n = 0, r = e.length; r > n; n++) if (s = k.exec(e[n])) {
                    if (b = s[1], p = s[2], x = s[3], f = s[5], g = {}, v = [], l = {
                        attributes: g,
                        attributesOrder: v
                    }, "#" === b && (l.paddEmpty = !0), "-" === b && (l.removeEmpty = !0), "!" === s[4] && (l.removeEmptyAttrs = !0), w) {
                        for (E in w) g[E] = w[E];
                        v.push.apply(v, _)
                    }
                    if (f) for (f = t(f, "|"), i = 0, a = f.length; a > i; i++) if (s = S.exec(f[i])) {
                        if (d = {}, h = s[1], m = s[2].replace(/::/g, ":"), b = s[3], N = s[4], "!" === h && (l.attributesRequired = l.attributesRequired || [], l.attributesRequired.push(m), d.required = !0), "-" === h) {
                            delete g[m], v.splice(c(v, m), 1);
                            continue
                        }
                        b && ("=" === b && (l.attributesDefault = l.attributesDefault || [], l.attributesDefault.push({
                            name: m,
                            value: N
                        }), d.defaultValue = N), ":" === b && (l.attributesForced = l.attributesForced || [], l.attributesForced.push({
                            name: m,
                            value: N
                        }), d.forcedValue = N), "<" === b && (d.validValues = o(N, "?"))), T.test(m) ? (l.attributePatterns = l.attributePatterns || [], d.pattern = u(m), l.attributePatterns.push(d)) : (g[m] || v.push(m), g[m] = d)
                    }
                    w || "@" != p || (w = g, _ = v), x && (l.outputName = p, y[x] = l), T.test(p) ? (l.pattern = u(p), C.push(l)) : y[p] = l
                }
            }
            function p(e) {
                y = {}, C = [], f(e), a(_, function(e, t) {
                    b[t] = e.children
                })
            }
            function m(e) {
                var n = /^(~)?(.+)$/;
                e && (i.text_block_elements = i.block_elements = null, a(t(e, ","), function(e) {
                    var t = n.exec(e),
                        r = "~" === t[1],
                        i = r ? "span" : "div",
                        o = t[2];
                    if (b[o] = b[i], L[o] = i, r || (R[o.toUpperCase()] = {}, R[o] = {}), !y[o]) {
                        var l = y[i];
                        l = s({}, l), delete l.removeEmptyAttrs, delete l.removeEmpty, y[o] = l
                    }
                    a(b, function(e, t) {
                        e[i] && (b[t] = e = s({}, b[t]), e[o] = e[i])
                    })
                }))
            }
            function h(e) {
                var n = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                e && a(t(e, ","), function(e) {
                    var r = n.exec(e),
                        i, o;
                    r && (o = r[1], i = o ? b[r[2]] : b[r[2]] = {
                        "#comment": {}
                    }, i = b[r[2]], a(t(r[3], "|"), function(e) {
                        "-" === o ? (b[r[2]] = i = s({}, b[r[2]]), delete i[e]) : i[e] = {}
                    }))
                })
            }
            function g(e) {
                var t = y[e],
                    n;
                if (t) return t;
                for (n = C.length; n--;) if (t = C[n], t.pattern.test(e)) return t
            }
            var v = this,
                y = {},
                b = {},
                C = [],
                x, w, _, E, N, k, S, T, R, A, B, D, L = {},
                M = {};
            e = e || {}, _ = n(e.schema), e.verify_html === !1 && (e.valid_elements = "*[*]"), x = r(e.valid_styles), w = r(e.invalid_styles, "map"), T = r(e.valid_classes, "map"), E = d("whitespace_elements", "pre script noscript style textarea video audio iframe object"), N = d("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), k = d("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), S = d("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), A = d("non_empty_elements", "td th iframe video audio object script", k), B = d("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"), R = d("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup", B), D = d("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"), a((e.special || "script noscript style textarea").split(" "), function(e) {
                M[e] = new RegExp("</" + e + "[^>]*>", "gi")
            }), e.valid_elements ? p(e.valid_elements) : (a(_, function(e, t) {
                y[t] = {
                    attributes: e.attributes,
                    attributesOrder: e.attributesOrder
                }, b[t] = e.children
            }), "html5" != e.schema && a(t("strong/b em/i"), function(e) {
                e = t(e, "/"), y[e[1]].outputName = e[0]
            }), y.img.attributesDefault = [{
                name: "alt",
                value: ""
            }], a(t("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function(e) {
                y[e] && (y[e].removeEmpty = !0)
            }), a(t("p h1 h2 h3 h4 h5 h6 th td pre div address caption"), function(e) {
                y[e].paddEmpty = !0
            }), a(t("span"), function(e) {
                y[e].removeEmptyAttrs = !0
            })), m(e.custom_elements), h(e.valid_children), f(e.extended_valid_elements), h("+ol[ul|ol],+ul[ul|ol]"), e.invalid_elements && a(l(e.invalid_elements), function(e) {
                y[e] && delete y[e]
            }), g("span") || f("span[!data-mce-type|*]"), v.children = b, v.getValidStyles = function() {
                return x
            }, v.getInvalidStyles = function() {
                return w
            }, v.getValidClasses = function() {
                return T
            }, v.getBoolAttrs = function() {
                return S
            }, v.getBlockElements = function() {
                return R
            }, v.getTextBlockElements = function() {
                return B
            }, v.getTextInlineElements = function() {
                return D
            }, v.getShortEndedElements = function() {
                return k
            }, v.getSelfClosingElements = function() {
                return N
            }, v.getNonEmptyElements = function() {
                return A
            }, v.getWhiteSpaceElements = function() {
                return E
            }, v.getSpecialElements = function() {
                return M
            }, v.isValidChild = function(e, t) {
                var n = b[e];
                return !(!n || !n[t])
            }, v.isValid = function(e, t) {
                var n, r, i = g(e);
                if (i) {
                    if (!t) return !0;
                    if (i.attributes[t]) return !0;
                    if (n = i.attributePatterns) for (r = n.length; r--;) if (n[r].pattern.test(e)) return !0
                }
                return !1
            }, v.getElementRule = g, v.getCustomElements = function() {
                return L
            }, v.addValidElements = f, v.setValidElements = p, v.addCustomElements = m, v.addValidChildren = h, v.elements = y
        }
    }), r(w, [x, m, f], function(e, t, n) {
        function r(e, t, n) {
            var r = 1,
                i, o, a;
            for (a = e.getShortEndedElements(), o = /<([!?\/])?([A-Za-z0-9\-\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g, o.lastIndex = n; i = o.exec(t);) {
                if ("/" === i[1]) r--;
                else if (!i[1]) {
                    if (i[2] in a) continue;
                    r++
                }
                if (0 === r) break
            }
            return o.lastIndex
        }
        var i = n.each;
        return function(o, a) {
            function s() {}
            var l = this;
            o = o || {}, l.schema = a = a || new e, o.fix_self_closing !== !1 && (o.fix_self_closing = !0), i("comment cdata text start end pi doctype".split(" "), function(e) {
                e && (l[e] = o[e] || s)
            }), l.parse = function(e) {
                function i(e) {
                    var t, n;
                    for (t = p.length; t-- && p[t].name !== e;);
                    if (t >= 0) {
                        for (n = p.length - 1; n >= t; n--) e = p[n], e.valid && l.end(e.name);
                        p.length = t
                    }
                }
                function s(e, t, n, r, i) {
                    var a, s, l = /[\s\u0000-\u001F]+/g;
                    if (t = t.toLowerCase(), n = t in x ? t : z(n || r || i || ""), _ && !y && 0 !== t.indexOf("data-")) {
                        if (a = T[t], !a && R) {
                            for (s = R.length; s-- && (a = R[s], !a.pattern.test(t));); - 1 === s && (a = null)
                        }
                        if (!a) return;
                        if (a.validValues && !(n in a.validValues)) return
                    }
                    if (V[t] && !o.allow_script_urls) {
                        var c = n.replace(l, "");
                        try {
                            c = decodeURIComponent(c)
                        } catch (d) {
                            c = unescape(c)
                        }
                        if (U.test(c)) return;
                        if (!o.allow_html_data_urls && q.test(c) && !/^data:image\//i.test(c)) return
                    }
                    m.map[t] = n, m.push({
                        name: t,
                        value: n
                    })
                }
                var l = this,
                    c, d = 0,
                    u, f, p = [],
                    m, h, g, v, y, b, C, x, w, _, E, N, k, S, T, R, A, B, D, L, M, H, P, O, I, F = 0,
                    z = t.decode,
                    W, V = n.makeMap("src,href,data,background,formaction,poster"),
                    U = /((java|vb)script|mhtml):/i,
                    q = /^data:/i;
                for (H = new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), P = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, C = a.getShortEndedElements(), M = o.self_closing_elements || a.getSelfClosingElements(), x = a.getBoolAttrs(), _ = o.validate, b = o.remove_internals, W = o.fix_self_closing, O = a.getSpecialElements(); c = H.exec(e);) {
                    if (d < c.index && l.text(z(e.substr(d, c.index - d))), u = c[6]) u = u.toLowerCase(), ":" === u.charAt(0) && (u = u.substr(1)), i(u);
                    else if (u = c[7]) {
                        if (u = u.toLowerCase(), ":" === u.charAt(0) && (u = u.substr(1)), w = u in C, W && M[u] && p.length > 0 && p[p.length - 1].name === u && i(u), !_ || (E = a.getElementRule(u))) {
                            if (N = !0, _ && (T = E.attributes, R = E.attributePatterns), (S = c[8]) ? (y = -1 !== S.indexOf("data-mce-type"), y && b && (N = !1), m = [], m.map = {}, S.replace(P, s)) : (m = [], m.map = {}), _ && !y) {
                                if (A = E.attributesRequired, B = E.attributesDefault, D = E.attributesForced, L = E.removeEmptyAttrs, L && !m.length && (N = !1), D) for (h = D.length; h--;) k = D[h], v = k.name, I = k.value, "{$uid}" === I && (I = "mce_" + F++), m.map[v] = I, m.push({
                                    name: v,
                                    value: I
                                });
                                if (B) for (h = B.length; h--;) k = B[h], v = k.name, v in m.map || (I = k.value, "{$uid}" === I && (I = "mce_" + F++), m.map[v] = I, m.push({
                                    name: v,
                                    value: I
                                }));
                                if (A) {
                                    for (h = A.length; h-- && !(A[h] in m.map);); - 1 === h && (N = !1)
                                }
                                if (k = m.map["data-mce-bogus"]) {
                                    if ("all" === k) {
                                        d = r(a, e, H.lastIndex), H.lastIndex = d;
                                        continue
                                    }
                                    N = !1
                                }
                            }
                            N && l.start(u, m, w)
                        } else N = !1;
                        if (f = O[u]) {
                            f.lastIndex = d = c.index + c[0].length, (c = f.exec(e)) ? (N && (g = e.substr(d, c.index - d)), d = c.index + c[0].length) : (g = e.substr(d), d = e.length), N && (g.length > 0 && l.text(g, !0), l.end(u)), H.lastIndex = d;
                            continue
                        }
                        w || (S && S.indexOf("/") == S.length - 1 ? N && l.end(u) : p.push({
                            name: u,
                            valid: N
                        }))
                    } else(u = c[1]) ? (">" === u.charAt(0) && (u = " " + u), o.allow_conditional_comments || "[if" !== u.substr(0, 3) || (u = " " + u), l.comment(u)) : (u = c[2]) ? l.cdata(u) : (u = c[3]) ? l.doctype(u) : (u = c[4]) && l.pi(u, c[5]);
                    d = c.index + c[0].length
                }
                for (d < e.length && l.text(z(e.substr(d))), h = p.length - 1; h >= 0; h--) u = p[h], u.valid && l.end(u.name)
            }
        }
    }), r(_, [C, x, w, f], function(e, t, n, r) {
        var i = r.makeMap,
            o = r.each,
            a = r.explode,
            s = r.extend;
        return function(r, l) {
            function c(t) {
                var n, r, o, a, s, c, u, f, p, m, h, g, v, y;
                for (h = i("tr,td,th,tbody,thead,tfoot,table"), m = l.getNonEmptyElements(), g = l.getTextBlockElements(), n = 0; n < t.length; n++) if (r = t[n], r.parent && !r.fixed) if (g[r.name] && "li" == r.parent.name) {
                    for (v = r.next; v && g[v.name];) v.name = "li", v.fixed = !0, r.parent.insert(v, r.parent), v = v.next;
                    r.unwrap(r)
                } else {
                    for (a = [r], o = r.parent; o && !l.isValidChild(o.name, r.name) && !h[o.name]; o = o.parent) a.push(o);
                    if (o && a.length > 1) {
                        for (a.reverse(), s = c = d.filterNode(a[0].clone()), p = 0; p < a.length - 1; p++) {
                            for (l.isValidChild(c.name, a[p].name) ? (u = d.filterNode(a[p].clone()), c.append(u)) : u = c, f = a[p].firstChild; f && f != a[p + 1];) y = f.next, u.append(f), f = y;
                            c = u
                        }
                        s.isEmpty(m) ? o.insert(r, a[0], !0) : (o.insert(s, a[0], !0), o.insert(r, s)), o = a[0], (o.isEmpty(m) || o.firstChild === o.lastChild && "br" === o.firstChild.name) && o.empty().remove()
                    } else if (r.parent) {
                        if ("li" === r.name) {
                            if (v = r.prev, v && ("ul" === v.name || "ul" === v.name)) {
                                v.append(r);
                                continue
                            }
                            if (v = r.next, v && ("ul" === v.name || "ul" === v.name)) {
                                v.insert(r, v.firstChild, !0);
                                continue
                            }
                            r.wrap(d.filterNode(new e("ul", 1)));
                            continue
                        }
                        l.isValidChild(r.parent.name, "div") && l.isValidChild("div", r.name) ? r.wrap(d.filterNode(new e("div", 1))) : "style" === r.name || "script" === r.name ? r.empty().remove() : r.unwrap()
                    }
                }
            }
            var d = this,
                u = {},
                f = [],
                p = {},
                m = {};
            r = r || {}, r.validate = "validate" in r ? r.validate : !0, r.root_name = r.root_name || "body", d.schema = l = l || new t, d.filterNode = function(e) {
                var t, n, r;
                n in u && (r = p[n], r ? r.push(e) : p[n] = [e]), t = f.length;
                for (; t--;) n = f[t].name, n in e.attributes.map && (r = m[n], r ? r.push(e) : m[n] = [e]);
                return e
            }, d.addNodeFilter = function(e, t) {
                o(a(e), function(e) {
                    var n = u[e];
                    n || (u[e] = n = []), n.push(t)
                })
            }, d.addAttributeFilter = function(e, t) {
                o(a(e), function(e) {
                    var n;
                    for (n = 0; n < f.length; n++) if (f[n].name === e) return void f[n].callbacks.push(t);
                    f.push({
                        name: e,
                        callbacks: [t]
                    })
                })
            }, d.parse = function(t, o) {
                function a() {
                    function e(e) {
                        e && (t = e.firstChild, t && 3 == t.type && (t.value = t.value.replace(R, "")), t = e.lastChild, t && 3 == t.type && (t.value = t.value.replace(D, "")))
                    }
                    var t = y.firstChild,
                        n, i;
                    if (l.isValidChild(y.name, I.toLowerCase())) {
                        for (; t;) n = t.next, 3 == t.type || 1 == t.type && "p" !== t.name && !T[t.name] && !t.attr("data-mce-type") ? i ? i.append(t) : (i = d(I, 1), i.attr(r.forced_root_block_attrs), y.insert(i, t), i.append(t)) : (e(i), i = null), t = n;
                        e(i)
                    }
                }
                function d(t, n) {
                    var r = new e(t, n),
                        i;
                    return t in u && (i = p[t], i ? i.push(r) : p[t] = [r]), r
                }
                function h(e) {
                    var t, n, r;
                    for (t = e.prev; t && 3 === t.type;) n = t.value.replace(D, ""), n.length > 0 ? (t.value = n, t = t.prev) : (r = t.prev, t.remove(), t = r)
                }
                function g(e) {
                    var t, n = {};
                    for (t in e)"li" !== t && "p" != t && (n[t] = e[t]);
                    return n
                }
                var v, y, b, C, x, w, _, E, N, k, S, T, R, A = [],
                    B, D, L, M, H, P, O, I;
                if (o = o || {}, p = {}, m = {}, T = s(i("script,style,head,html,body,title,meta,param"), l.getBlockElements()), O = l.getNonEmptyElements(), P = l.children, S = r.validate, I = "forced_root_block" in o ? o.forced_root_block : r.forced_root_block, H = l.getWhiteSpaceElements(), R = /^[ \t\r\n]+/, D = /[ \t\r\n]+$/, L = /[ \t\r\n]+/g, M = /^[ \t\r\n]+$/, v = new n({
                    validate: S,
                    allow_script_urls: r.allow_script_urls,
                    allow_conditional_comments: r.allow_conditional_comments,
                    self_closing_elements: g(l.getSelfClosingElements()),
                    cdata: function(e) {
                        b.append(d("#cdata", 4)).value = e
                    },
                    text: function(e, t) {
                        var n;
                        B || (e = e.replace(L, " "), b.lastChild && T[b.lastChild.name] && (e = e.replace(R, ""))), 0 !== e.length && (n = d("#text", 3), n.raw = !! t, b.append(n).value = e)
                    },
                    comment: function(e) {
                        b.append(d("#comment", 8)).value = e
                    },
                    pi: function(e, t) {
                        b.append(d(e, 7)).value = t, h(b)
                    },
                    doctype: function(e) {
                        var t;
                        t = b.append(d("#doctype", 10)), t.value = e, h(b)
                    },
                    start: function(e, t, n) {
                        var r, i, o, a, s;
                        if (o = S ? l.getElementRule(e) : {}) {
                            for (r = d(o.outputName || e, 1), r.attributes = t, r.shortEnded = n, b.append(r), s = P[b.name], s && P[r.name] && !s[r.name] && A.push(r), i = f.length; i--;) a = f[i].name, a in t.map && (N = m[a], N ? N.push(r) : m[a] = [r]);
                            T[e] && h(r), n || (b = r), !B && H[e] && (B = !0)
                        }
                    },
                    end: function(t) {
                        var n, r, i, o, a;
                        if (r = S ? l.getElementRule(t) : {}) {
                            if (T[t] && !B) {
                                if (n = b.firstChild, n && 3 === n.type) if (i = n.value.replace(R, ""), i.length > 0) n.value = i, n = n.next;
                                else for (o = n.next, n.remove(), n = o; n && 3 === n.type;) i = n.value, o = n.next, (0 === i.length || M.test(i)) && (n.remove(), n = o), n = o;
                                if (n = b.lastChild, n && 3 === n.type) if (i = n.value.replace(D, ""), i.length > 0) n.value = i, n = n.prev;
                                else for (o = n.prev, n.remove(), n = o; n && 3 === n.type;) i = n.value, o = n.prev, (0 === i.length || M.test(i)) && (n.remove(), n = o), n = o
                            }
                            if (B && H[t] && (B = !1), (r.removeEmpty || r.paddEmpty) && b.isEmpty(O)) if (r.paddEmpty) b.empty().append(new e("#text", "3")).value = "\xa0";
                            else if (!b.attributes.map.name && !b.attributes.map.id) return a = b.parent, b.unwrap(), void(b = a);
                            b = b.parent
                        }
                    }
                }, l), y = b = new e(o.context || r.root_name, 11), v.parse(t), S && A.length && (o.context ? o.invalid = !0 : c(A)), I && ("body" == y.name || o.isRootContent) && a(), !o.invalid) {
                    for (k in p) {
                        for (N = u[k], C = p[k], _ = C.length; _--;) C[_].parent || C.splice(_, 1);
                        for (x = 0, w = N.length; w > x; x++) N[x](C, k, o)
                    }
                    for (x = 0, w = f.length; w > x; x++) if (N = f[x], N.name in m) {
                        for (C = m[N.name], _ = C.length; _--;) C[_].parent || C.splice(_, 1);
                        for (_ = 0, E = N.callbacks.length; E > _; _++) N.callbacks[_](C, N.name, o)
                    }
                }
                return y
            }, r.remove_trailing_brs && d.addNodeFilter("br", function(t) {
                var n, r = t.length,
                    i, o = s({}, l.getBlockElements()),
                    a = l.getNonEmptyElements(),
                    c, d, u, f, p, m;
                for (o.body = 1, n = 0; r > n; n++) if (i = t[n], c = i.parent, o[i.parent.name] && i === c.lastChild) {
                    for (u = i.prev; u;) {
                        if (f = u.name, "span" !== f || "bookmark" !== u.attr("data-mce-type")) {
                            if ("br" !== f) break;
                            if ("br" === f) {
                                i = null;
                                break
                            }
                        }
                        u = u.prev
                    }
                    i && (i.remove(), c.isEmpty(a) && (p = l.getElementRule(c.name), p && (p.removeEmpty ? c.remove() : p.paddEmpty && (c.empty().append(new e("#text", 3)).value = "\xa0"))))
                } else {
                    for (d = i; c && c.firstChild === d && c.lastChild === d && (d = c, !o[c.name]);) c = c.parent;
                    d === c && (m = new e("#text", 3), m.value = "\xa0", i.replace(m))
                }
            }), r.allow_html_in_named_anchor || d.addAttributeFilter("id,name", function(e) {
                for (var t = e.length, n, r, i, o; t--;) if (o = e[t], "a" === o.name && o.firstChild && !o.attr("href")) {
                    i = o.parent, n = o.lastChild;
                    do r = n.prev, i.insert(n, o), n = r;
                    while (n)
                }
            }), r.validate && l.getValidClasses() && d.addAttributeFilter("class", function(e) {
                for (var t = e.length, n, r, i, o, a, s = l.getValidClasses(), c, d; t--;) {
                    for (n = e[t], r = n.attr("class").split(" "), a = "", i = 0; i < r.length; i++) o = r[i], d = !1, c = s["*"], c && c[o] && (d = !0), c = s[n.name], d || !c || c[o] || (d = !0), d && (a && (a += " "), a += o);
                    a.length || (a = null), n.attr("class", a)
                }
            })
        }
    }), r(E, [m, f], function(e, t) {
        var n = t.makeMap;
        return function(t) {
            var r = [],
                i, o, a, s, l;
            return t = t || {}, i = t.indent, o = n(t.indent_before || ""), a = n(t.indent_after || ""), s = e.getEncodeFunc(t.entity_encoding || "raw", t.entities), l = "html" == t.element_format, {
                start: function(e, t, n) {
                    var c, d, u, f;
                    if (i && o[e] && r.length > 0 && (f = r[r.length - 1], f.length > 0 && "\n" !== f && r.push("\n")), r.push("<", e), t) for (c = 0, d = t.length; d > c; c++) u = t[c], r.push(" ", u.name, '="', s(u.value, !0), '"');
                    r[r.length] = !n || l ? ">" : " />", n && i && a[e] && r.length > 0 && (f = r[r.length - 1], f.length > 0 && "\n" !== f && r.push("\n"))
                },
                end: function(e) {
                    var t;
                    r.push("</", e, ">"), i && a[e] && r.length > 0 && (t = r[r.length - 1], t.length > 0 && "\n" !== t && r.push("\n"))
                },
                text: function(e, t) {
                    e.length > 0 && (r[r.length] = t ? e : s(e))
                },
                cdata: function(e) {
                    r.push("<![CDATA[", e, "]]>")
                },
                comment: function(e) {
                    r.push("<!--", e, "-->")
                },
                pi: function(e, t) {
                    t ? r.push("<?", e, " ", t, "?>") : r.push("<?", e, "?>"), i && r.push("\n")
                },
                doctype: function(e) {
                    r.push("<!DOCTYPE", e, ">", i ? "\n" : "")
                },
                reset: function() {
                    r.length = 0
                },
                getContent: function() {
                    return r.join("").replace(/\n$/, "")
                }
            }
        }
    }), r(N, [E, x], function(e, t) {
        return function(n, r) {
            var i = this,
                o = new e(n);
            n = n || {}, n.validate = "validate" in n ? n.validate : !0, i.schema = r = r || new t, i.writer = o, i.serialize = function(e) {
                function t(e) {
                    var n = i[e.type],
                        s, l, c, d, u, f, p, m, h;
                    if (n) n(e);
                    else {
                        if (s = e.name, l = e.shortEnded, c = e.attributes, a && c && c.length > 1) {
                            for (f = [], f.map = {}, h = r.getElementRule(e.name), p = 0, m = h.attributesOrder.length; m > p; p++) d = h.attributesOrder[p], d in c.map && (u = c.map[d], f.map[d] = u, f.push({
                                name: d,
                                value: u
                            }));
                            for (p = 0, m = c.length; m > p; p++) d = c[p].name, d in f.map || (u = c.map[d], f.map[d] = u, f.push({
                                name: d,
                                value: u
                            }));
                            c = f
                        }
                        if (o.start(e.name, c, l), !l) {
                            if (e = e.firstChild) do t(e);
                            while (e = e.next);
                            o.end(s)
                        }
                    }
                }
                var i, a;
                return a = n.validate, i = {
                    3: function(e) {
                        o.text(e.value, e.raw)
                    },
                    8: function(e) {
                        o.comment(e.value)
                    },
                    7: function(e) {
                        o.pi(e.name, e.value)
                    },
                    10: function(e) {
                        o.doctype(e.value)
                    },
                    4: function(e) {
                        o.cdata(e.value)
                    },
                    11: function(e) {
                        if (e = e.firstChild) do t(e);
                        while (e = e.next)
                    }
                }, o.reset(), 1 != e.type || n.inner ? i[11](e) : t(e), o.getContent()
            }
        }
    }), r(k, [v, _, m, N, C, x, h, f], function(e, t, n, r, i, o, a, s) {
        var l = s.each,
            c = s.trim,
            d = e.DOM;
        return function(e, i) {
            var s, u, f;
            return i && (s = i.dom, u = i.schema), s = s || d, u = u || new o(e), e.entity_encoding = e.entity_encoding || "named", e.remove_trailing_brs = "remove_trailing_brs" in e ? e.remove_trailing_brs : !0, f = new t(e, u), f.addAttributeFilter("data-mce-tabindex", function(e, t) {
                for (var n = e.length, r; n--;) r = e[n], r.attr("tabindex", r.attributes.map["data-mce-tabindex"]), r.attr(t, null)
            }), f.addAttributeFilter("src,href,style", function(t, n) {
                for (var r = t.length, i, o, a = "data-mce-" + n, l = e.url_converter, c = e.url_converter_scope, d; r--;) i = t[r], o = i.attributes.map[a], o !== d ? (i.attr(n, o.length > 0 ? o : null), i.attr(a, null)) : (o = i.attributes.map[n], "style" === n ? o = s.serializeStyle(s.parseStyle(o), i.name) : l && (o = l.call(c, o, n, i.name)), i.attr(n, o.length > 0 ? o : null))
            }), f.addAttributeFilter("class", function(e) {
                for (var t = e.length, n, r; t--;) n = e[t], r = n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), n.attr("class", r.length > 0 ? r : null)
            }), f.addAttributeFilter("data-mce-type", function(e, t, n) {
                for (var r = e.length, i; r--;) i = e[r], "bookmark" !== i.attributes.map["data-mce-type"] || n.cleanup || i.remove()
            }), f.addNodeFilter("noscript", function(e) {
                for (var t = e.length, r; t--;) r = e[t].firstChild, r && (r.value = n.decode(r.value))
            }), f.addNodeFilter("script,style", function(e, t) {
                function n(e) {
                    return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                }
                for (var r = e.length, i, o, a; r--;) i = e[r], o = i.firstChild ? i.firstChild.value : "", "script" === t ? (a = i.attr("type"), a && i.attr("type", "mce-no/type" == a ? null : a.replace(/^mce\-/, "")), o.length > 0 && (i.firstChild.value = "// <![CDATA[\n" + n(o) + "\n// ]]>")) : o.length > 0 && (i.firstChild.value = "<!--\n" + n(o) + "\n-->")
            }), f.addNodeFilter("#comment", function(e) {
                for (var t = e.length, n; t--;) n = e[t], 0 === n.value.indexOf("[CDATA[") ? (n.name = "#cdata", n.type = 4, n.value = n.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === n.value.indexOf("mce:protected ") && (n.name = "#text", n.type = 3, n.raw = !0, n.value = unescape(n.value).substr(14))
            }), f.addNodeFilter("xml:namespace,input", function(e, t) {
                for (var n = e.length, r; n--;) r = e[n], 7 === r.type ? r.remove() : 1 === r.type && ("input" !== t || "type" in r.attributes.map || r.attr("type", "text"))
            }), e.fix_list_elements && f.addNodeFilter("ul,ol", function(e) {
                for (var t = e.length, n, r; t--;) n = e[t], r = n.parent, ("ul" === r.name || "ol" === r.name) && n.prev && "li" === n.prev.name && n.prev.append(n)
            }), f.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize", function(e, t) {
                for (var n = e.length; n--;) e[n].attr(t, null)
            }), {
                schema: u,
                addNodeFilter: f.addNodeFilter,
                addAttributeFilter: f.addAttributeFilter,
                serialize: function(t, n) {
                    var i = this,
                        o, d, p, m, h;
                    return a.ie && s.select("script,style,select,map").length > 0 ? (h = t.innerHTML, t = t.cloneNode(!1), s.setHTML(t, h)) : t = t.cloneNode(!0), o = t.ownerDocument.implementation, o.createHTMLDocument && (d = o.createHTMLDocument(""), l("BODY" == t.nodeName ? t.childNodes : [t], function(e) {
                        d.body.appendChild(d.importNode(e, !0))
                    }), t = "BODY" != t.nodeName ? d.body.firstChild : d.body, p = s.doc, s.doc = d), n = n || {}, n.format = n.format || "html", n.selection && (n.forced_root_block = ""), n.no_events || (n.node = t, i.onPreProcess(n)), m = new r(e, u), n.content = m.serialize(f.parse(c(n.getInner ? t.innerHTML : s.getOuterHTML(t)), n)), n.cleanup || (n.content = n.content.replace(/\uFEFF/g, "")), n.no_events || i.onPostProcess(n), p && (s.doc = p), n.node = null, n.content
                },
                addRules: function(e) {
                    u.addValidElements(e)
                },
                setRules: function(e) {
                    u.setValidElements(e)
                },
                onPreProcess: function(e) {
                    i && i.fire("PreProcess", e)
                },
                onPostProcess: function(e) {
                    i && i.fire("PostProcess", e)
                }
            }
        }
    }), r(S, [], function() {
        function e(e) {
            function t(t, n) {
                var r, i = 0,
                    o, a, s, l, c, d, u = -1,
                    f;
                if (r = t.duplicate(), r.collapse(n), f = r.parentElement(), f.ownerDocument === e.dom.doc) {
                    for (;
                    "false" === f.contentEditable;) f = f.parentNode;
                    if (!f.hasChildNodes()) return {
                        node: f,
                        inside: 1
                    };
                    for (s = f.children, o = s.length - 1; o >= i;) if (d = Math.floor((i + o) / 2), l = s[d], r.moveToElementText(l), u = r.compareEndPoints(n ? "StartToStart" : "EndToEnd", t), u > 0) o = d - 1;
                    else {
                        if (!(0 > u)) return {
                            node: l
                        };
                        i = d + 1
                    }
                    if (0 > u) for (l ? r.collapse(!1) : (r.moveToElementText(f), r.collapse(!0), l = f, a = !0), c = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", 1) && f == r.parentElement();) c++;
                    else for (r.collapse(!0), c = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", -1) && f == r.parentElement();) c++;
                    return {
                        node: l,
                        position: u,
                        offset: c,
                        inside: a
                    }
                }
            }
            function n() {
                function n(e) {
                    var n = t(o, e),
                        r, i, s = 0,
                        l, c, d;
                    if (r = n.node, i = n.offset, n.inside && !r.hasChildNodes()) return void a[e ? "setStart" : "setEnd"](r, 0);
                    if (i === c) return void a[e ? "setStartBefore" : "setEndAfter"](r);
                    if (n.position < 0) {
                        if (l = n.inside ? r.firstChild : r.nextSibling, !l) return void a[e ? "setStartAfter" : "setEndAfter"](r);
                        if (!i) return void(3 == l.nodeType ? a[e ? "setStart" : "setEnd"](l, 0) : a[e ? "setStartBefore" : "setEndBefore"](l));
                        for (; l;) {
                            if (3 == l.nodeType && (d = l.nodeValue, s += d.length, s >= i)) {
                                r = l, s -= i, s = d.length - s;
                                break
                            }
                            l = l.nextSibling
                        }
                    } else {
                        if (l = r.previousSibling, !l) return a[e ? "setStartBefore" : "setEndBefore"](r);
                        if (!i) return void(3 == r.nodeType ? a[e ? "setStart" : "setEnd"](l, r.nodeValue.length) : a[e ? "setStartAfter" : "setEndAfter"](l));
                        for (; l;) {
                            if (3 == l.nodeType && (s += l.nodeValue.length, s >= i)) {
                                r = l, s -= i;
                                break
                            }
                            l = l.previousSibling
                        }
                    }
                    a[e ? "setStart" : "setEnd"](r, s)
                }
                var o = e.getRng(),
                    a = i.createRng(),
                    s, l, c, d, u;
                if (s = o.item ? o.item(0) : o.parentElement(), s.ownerDocument != i.doc) return a;
                if (l = e.isCollapsed(), o.item) return a.setStart(s.parentNode, i.nodeIndex(s)), a.setEnd(a.startContainer, a.startOffset + 1), a;
                try {
                    n(!0), l || n()
                } catch (f) {
                    if (-2147024809 != f.number) throw f;
                    u = r.getBookmark(2), c = o.duplicate(), c.collapse(!0), s = c.parentElement(), l || (c = o.duplicate(), c.collapse(!1), d = c.parentElement(), d.innerHTML = d.innerHTML), s.innerHTML = s.innerHTML, r.moveToBookmark(u), o = e.getRng(), n(!0), l || n()
                }
                return a
            }
            var r = this,
                i = e.dom,
                o = !1;
            this.getBookmark = function(n) {
                function r(e) {
                    var t, n, r, o, a = [];
                    for (t = e.parentNode, n = i.getRoot().parentNode; t != n && 9 !== t.nodeType;) {
                        for (r = t.children, o = r.length; o--;) if (e === r[o]) {
                            a.push(o);
                            break
                        }
                        e = t, t = t.parentNode
                    }
                    return a
                }
                function o(e) {
                    var n;
                    return n = t(a, e), n ? {
                        position: n.position,
                        offset: n.offset,
                        indexes: r(n.node),
                        inside: n.inside
                    } : void 0
                }
                var a = e.getRng(),
                    s = {};
                return 2 === n && (a.item ? s.start = {
                    ctrl: !0,
                    indexes: r(a.item(0))
                } : (s.start = o(!0), e.isCollapsed() || (s.end = o()))), s
            }, this.moveToBookmark = function(e) {
                function t(e) {
                    var t, n, r, o;
                    for (t = i.getRoot(), n = e.length - 1; n >= 0; n--) o = t.children, r = e[n], r <= o.length - 1 && (t = o[r]);
                    return t
                }
                function n(n) {
                    var i = e[n ? "start" : "end"],
                        a, s, l, c;
                    i && (a = i.position > 0, s = o.createTextRange(), s.moveToElementText(t(i.indexes)), c = i.offset, c !== l ? (s.collapse(i.inside || a), s.moveStart("character", a ? -c : c)) : s.collapse(n), r.setEndPoint(n ? "StartToStart" : "EndToStart", s), n && r.collapse(!0))
                }
                var r, o = i.doc.body;
                e.start && (e.start.ctrl ? (r = o.createControlRange(), r.addElement(t(e.start.indexes)), r.select()) : (r = o.createTextRange(), n(!0), n(), r.select()))
            }, this.addRange = function(t) {
                function n(e) {
                    var t, n, a, u, m;
                    a = i.create("a"), t = e ? s : c, n = e ? l : d, u = r.duplicate(), (t == f || t == f.documentElement) && (t = p, n = 0), 3 == t.nodeType ? (t.parentNode.insertBefore(a, t), u.moveToElementText(a), u.moveStart("character", n), i.remove(a), r.setEndPoint(e ? "StartToStart" : "EndToEnd", u)) : (m = t.childNodes, m.length ? (n >= m.length ? i.insertAfter(a, m[m.length - 1]) : t.insertBefore(a, m[n]), u.moveToElementText(a)) : t.canHaveHTML && (t.innerHTML = "<span>&#xFEFF;</span>", a = t.firstChild, u.moveToElementText(a), u.collapse(o)), r.setEndPoint(e ? "StartToStart" : "EndToEnd", u), i.remove(a))
                }
                var r, a, s, l, c, d, u, f = e.dom.doc,
                    p = f.body,
                    m, h;
                if (s = t.startContainer, l = t.startOffset, c = t.endContainer, d = t.endOffset, r = p.createTextRange(), s == c && 1 == s.nodeType) {
                    if (l == d && !s.hasChildNodes()) {
                        if (s.canHaveHTML) return u = s.previousSibling, u && !u.hasChildNodes() && i.isBlock(u) ? u.innerHTML = "&#xFEFF;" : u = null, s.innerHTML = "<span>&#xFEFF;</span><span>&#xFEFF;</span>", r.moveToElementText(s.lastChild), r.select(), i.doc.selection.clear(), s.innerHTML = "", void(u && (u.innerHTML = ""));
                        l = i.nodeIndex(s), s = s.parentNode
                    }
                    if (l == d - 1) try {
                        if (h = s.childNodes[l], a = p.createControlRange(), a.addElement(h), a.select(), m = e.getRng(), m.item && h === m.item(0)) return
                    } catch (g) {}
                }
                n(!0), n(), r.select()
            }, this.getRangeAt = n
        }
        return e
    }), r(T, [h], function(e) {
        return {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            modifierPressed: function(e) {
                return e.shiftKey || e.ctrlKey || e.altKey
            },
            metaKeyPressed: function(t) {
                return e.mac ? t.metaKey : t.ctrlKey && !t.altKey
            }
        }
    }), r(R, [T, f, h], function(e, t, n) {
        return function(r, i) {
            function o(e) {
                var t = i.settings.object_resizing;
                return t === !1 || n.iOS ? !1 : ("string" != typeof t && (t = "table,img,div"), "false" === e.getAttribute("data-mce-resize") ? !1 : i.dom.is(e, t))
            }
            function a(t) {
                var n, r;
                n = t.screenX - S, r = t.screenY - T, H = n * N[2] + B, P = r * N[3] + D, H = 5 > H ? 5 : H, P = 5 > P ? 5 : P, (e.modifierPressed(t) || "IMG" == w.nodeName && N[2] * N[3] !== 0) && (H = Math.round(P / L), P = Math.round(H * L)), C.setStyles(_, {
                    width: H,
                    height: P
                }), N[2] < 0 && _.clientWidth <= H && C.setStyle(_, "left", R + (B - H)), N[3] < 0 && _.clientHeight <= P && C.setStyle(_, "top", A + (D - P)), M || (i.fire("ObjectResizeStart", {
                    target: w,
                    width: B,
                    height: D
                }), M = !0)
            }
            function s() {
                function e(e, t) {
                    t && (w.style[e] || !i.schema.isValid(w.nodeName.toLowerCase(), e) ? C.setStyle(w, e, t) : C.setAttrib(w, e, t))
                }
                M = !1, e("width", H), e("height", P), C.unbind(O, "mousemove", a), C.unbind(O, "mouseup", s), I != O && (C.unbind(I, "mousemove", a), C.unbind(I, "mouseup", s)), C.remove(_), F && "TABLE" != w.nodeName || l(w), i.fire("ObjectResized", {
                    target: w,
                    width: H,
                    height: P
                }), i.nodeChanged()
            }
            function l(e, t, r) {
                var l, d, u, f, p, m = i.getBody();
                g(), l = C.getPos(e, m), R = l.x, A = l.y, p = e.getBoundingClientRect(), d = p.width || p.right - p.left, u = p.height || p.bottom - p.top, w != e && (h(), w = e, H = P = 0), f = i.fire("ObjectSelected", {
                    target: e
                }), o(e) && !f.isDefaultPrevented() ? x(E, function(e, o) {
                    function l(t) {
                        S = t.screenX, T = t.screenY, B = w.clientWidth, D = w.clientHeight, L = D / B, N = e, _ = w.cloneNode(!0), C.addClass(_, "mce-clonedresizable"), _.contentEditable = !1, _.unSelectabe = !0, C.setStyles(_, {
                            left: R,
                            top: A,
                            margin: 0
                        }), _.removeAttribute("data-mce-selected"), i.getBody().appendChild(_), C.bind(O, "mousemove", a), C.bind(O, "mouseup", s), I != O && (C.bind(I, "mousemove", a), C.bind(I, "mouseup", s))
                    }
                    var c, f;
                    return t ? void(o == t && l(r)) : (c = C.get("mceResizeHandle" + o), c ? C.show(c) : (f = i.getBody(), c = C.add(f, "div", {
                        id: "mceResizeHandle" + o,
                        "data-mce-bogus": !0,
                        "class": "mce-resizehandle",
                        unselectable: !0,
                        style: "cursor:" + o + "-resize; margin:0; padding:0"
                    }), n.ie && (c.contentEditable = !1)), e.elm || (C.bind(c, "mousedown", function(e) {
                        e.stopImmediatePropagation(), e.preventDefault(), l(e)
                    }), e.elm = c), void C.setStyles(c, {
                        left: d * e[0] + R - c.offsetWidth / 2,
                        top: u * e[1] + A - c.offsetHeight / 2
                    }))
                }) : c(), w.setAttribute("data-mce-selected", "1")
            }
            function c() {
                var e, t;
                g(), w && w.removeAttribute("data-mce-selected");
                for (e in E) t = C.get("mceResizeHandle" + e), t && (C.unbind(t), C.remove(t))
            }
            function d(e) {
                function t(e, t) {
                    if (e) do
                    if (e === t) return !0;
                    while (e = e.parentNode)
                }
                var n;
                return x(C.select("img[data-mce-selected],hr[data-mce-selected]"), function(e) {
                    e.removeAttribute("data-mce-selected")
                }), n = "mousedown" == e.type ? e.target : r.getNode(), n = C.getParent(n, F ? "table" : "table,img,hr"), t(n, i.getBody()) && (v(), t(r.getStart(), n) && t(r.getEnd(), n) && (!F || n != r.getStart() && "IMG" !== r.getStart().nodeName)) ? void l(n) : void c()
            }
            function u(e, t, n) {
                e && e.attachEvent && e.attachEvent("on" + t, n)
            }
            function f(e, t, n) {
                e && e.detachEvent && e.detachEvent("on" + t, n)
            }
            function p(e) {
                var t = e.srcElement,
                    n, r, o, a, s, c, d;
                n = t.getBoundingClientRect(), c = k.clientX - n.left, d = k.clientY - n.top;
                for (r in E) if (o = E[r], a = t.offsetWidth * o[0], s = t.offsetHeight * o[1], Math.abs(a - c) < 8 && Math.abs(s - d) < 8) {
                    N = o;
                    break
                }
                M = !0, i.getDoc().selection.empty(), l(t, r, k)
            }
            function m(e) {
                var t = e.srcElement;
                if (t != w) {
                    if (h(), 0 === t.id.indexOf("mceResizeHandle")) return void(e.returnValue = !1);
                    ("IMG" == t.nodeName || "TABLE" == t.nodeName) && (c(), w = t, u(t, "resizestart", p))
                }
            }
            function h() {
                f(w, "resizestart", p)
            }
            function g() {
                for (var e in E) {
                    var t = E[e];
                    t.elm && (C.unbind(t.elm), delete t.elm)
                }
            }
            function v() {
                try {
                    i.getDoc().execCommand("enableObjectResizing", !1, !1)
                } catch (e) {}
            }
            function y(e) {
                var t;
                if (F) {
                    t = O.body.createControlRange();
                    try {
                        return t.addElement(e), t.select(), !0
                    } catch (n) {}
                }
            }
            function b() {
                w = _ = null, F && (h(), f(i.getBody(), "controlselect", m))
            }
            var C = i.dom,
                x = t.each,
                w, _, E, N, k, S, T, R, A, B, D, L, M, H, P, O = i.getDoc(),
                I = document,
                F = n.ie && n.ie < 11;
            E = {
                n: [.5, 0, 0, -1],
                e: [1, .5, 1, 0],
                s: [.5, 1, 0, 1],
                w: [0, .5, -1, 0],
                nw: [0, 0, -1, -1],
                ne: [1, 0, 1, -1],
                se: [1, 1, 1, 1],
                sw: [0, 1, -1, 1]
            };
            var z = ".mce-content-body";
            return i.contentStyles.push(z + " div.mce-resizehandle {position: absolute;border: 1px solid black;background: #FFF;width: 5px;height: 5px;z-index: 10000}" + z + " .mce-resizehandle:hover {background: #000}" + z + " img[data-mce-selected], hr[data-mce-selected] {outline: 1px solid black;resize: none}" + z + " .mce-clonedresizable {position: absolute;" + (n.gecko ? "" : "outline: 1px dashed black;") + "opacity: .5;filter: alpha(opacity=50);z-index: 10000}"), i.on("init", function() {
                F ? (i.on("ObjectResized", function(e) {
                    "TABLE" != e.target.nodeName && (c(), y(e.target))
                }), u(i.getBody(), "controlselect", m), i.on("mousedown", function(e) {
                    k = e
                })) : (v(), n.ie >= 11 && (i.on("mouseup", function(e) {
                    var t = e.target.nodeName;
                    /^(TABLE|IMG|HR)$/.test(t) && (i.selection.select(e.target, "TABLE" == t), i.nodeChanged())
                }), i.dom.bind(i.getBody(), "mscontrolselect", function(e) {
                    /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" == e.target.tagName && window.setTimeout(function() {
                        i.selection.select(e.target)
                    }, 0))
                }))), i.on("nodechange mousedown mouseup ResizeEditor", d), i.on("keydown keyup", function(e) {
                    w && "TABLE" == w.nodeName && d(e)
                }), i.on("hide", c)
            }), i.on("remove", g), {
                isResizable: o,
                showResizeRect: l,
                hideResizeRect: c,
                updateResizeRect: d,
                controlSelect: y,
                destroy: b
            }
        }
    }), r(A, [f, u], function(e, t) {
        function n(e, t) {
            var n = e.childNodes;
            return t--, t > n.length - 1 ? t = n.length - 1 : 0 > t && (t = 0), n[t] || e
        }
        function r(e) {
            this.walk = function(t, r) {
                function o(e) {
                    var t;
                    return t = e[0], 3 === t.nodeType && t === c && d >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === f && e.length > 0 && t === u && 3 === t.nodeType && e.splice(e.length - 1, 1), e
                }
                function a(e, t, n) {
                    for (var r = []; e && e != n; e = e[t]) r.push(e);
                    return r
                }
                function s(e, t) {
                    do {
                        if (e.parentNode == t) return e;
                        e = e.parentNode
                    } while (e)
                }
                function l(e, t, n) {
                    var i = n ? "nextSibling" : "previousSibling";
                    for (g = e, v = g.parentNode; g && g != t; g = v) v = g.parentNode, y = a(g == e ? g : g[i], i), y.length && (n || y.reverse(), r(o(y)))
                }
                var c = t.startContainer,
                    d = t.startOffset,
                    u = t.endContainer,
                    f = t.endOffset,
                    p, m, h, g, v, y, b;
                if (b = e.select("td.mce-item-selected,th.mce-item-selected"), b.length > 0) return void i(b, function(e) {
                    r([e])
                });
                if (1 == c.nodeType && c.hasChildNodes() && (c = c.childNodes[d]), 1 == u.nodeType && u.hasChildNodes() && (u = n(u, f)), c == u) return r(o([c]));
                for (p = e.findCommonAncestor(c, u), g = c; g; g = g.parentNode) {
                    if (g === u) return l(c, p, !0);
                    if (g === p) break
                }
                for (g = u; g; g = g.parentNode) {
                    if (g === c) return l(u, p);
                    if (g === p) break
                }
                m = s(c, p) || c, h = s(u, p) || u, l(c, m, !0), y = a(m == c ? m : m.nextSibling, "nextSibling", h == u ? h.nextSibling : h), y.length && r(o(y)), l(u, h)
            }, this.split = function(e) {
                function t(e, t) {
                    return e.splitText(t)
                }
                var n = e.startContainer,
                    r = e.startOffset,
                    i = e.endContainer,
                    o = e.endOffset;
                return n == i && 3 == n.nodeType ? r > 0 && r < n.nodeValue.length && (i = t(n, r), n = i.previousSibling, o > r ? (o -= r, n = i = t(i, o).previousSibling, o = i.nodeValue.length, r = 0) : o = 0) : (3 == n.nodeType && r > 0 && r < n.nodeValue.length && (n = t(n, r), r = 0), 3 == i.nodeType && o > 0 && o < i.nodeValue.length && (i = t(i, o).previousSibling, o = i.nodeValue.length)), {
                    startContainer: n,
                    startOffset: r,
                    endContainer: i,
                    endOffset: o
                }
            }, this.normalize = function(n) {
                function r(r) {
                    function a(n, r) {
                        for (var i = new t(n, e.getParent(n.parentNode, e.isBlock) || f); n = i[r ? "prev" : "next"]();) if ("BR" === n.nodeName) return !0
                    }
                    function s(e, t) {
                        return e.previousSibling && e.previousSibling.nodeName == t
                    }
                    function l(n, r) {
                        var a, s, l;
                        if (r = r || c, l = e.getParent(r.parentNode, e.isBlock) || f, n && "BR" == r.nodeName && g && e.isEmpty(l)) return c = r.parentNode, d = e.nodeIndex(r), void(i = !0);
                        for (a = new t(r, l); p = a[n ? "prev" : "next"]();) {
                            if ("false" === e.getContentEditableParent(p)) return;
                            if (3 === p.nodeType && p.nodeValue.length > 0) return c = p, d = n ? p.nodeValue.length : 0, void(i = !0);
                            if (e.isBlock(p) || m[p.nodeName.toLowerCase()]) return;
                            s = p
                        }
                        o && s && (c = s, i = !0, d = 0)
                    }
                    var c, d, u, f = e.getRoot(),
                        p, m, h, g;
                    if (c = n[(r ? "start" : "end") + "Container"], d = n[(r ? "start" : "end") + "Offset"], g = 1 == c.nodeType && d === c.childNodes.length, m = e.schema.getNonEmptyElements(), h = r, 1 == c.nodeType && d > c.childNodes.length - 1 && (h = !1), 9 === c.nodeType && (c = e.getRoot(), d = 0), c === f) {
                        if (h && (p = c.childNodes[d > 0 ? d - 1 : 0], p && (m[p.nodeName] || "TABLE" == p.nodeName))) return;
                        if (c.hasChildNodes() && (d = Math.min(!h && d > 0 ? d - 1 : d, c.childNodes.length - 1), c = c.childNodes[d], d = 0, c.hasChildNodes() && !/TABLE/.test(c.nodeName))) {
                            p = c, u = new t(c, f);
                            do {
                                if (3 === p.nodeType && p.nodeValue.length > 0) {
                                    d = h ? 0 : p.nodeValue.length, c = p, i = !0;
                                    break
                                }
                                if (m[p.nodeName.toLowerCase()]) {
                                    d = e.nodeIndex(p), c = p.parentNode, "IMG" != p.nodeName || h || d++, i = !0;
                                    break
                                }
                            } while (p = h ? u.next() : u.prev())
                        }
                    }
                    o && (3 === c.nodeType && 0 === d && l(!0), 1 === c.nodeType && (p = c.childNodes[d], p || (p = c.childNodes[d - 1]), !p || "BR" !== p.nodeName || s(p, "A") || a(p) || a(p, !0) || l(!0, p))), h && !o && 3 === c.nodeType && d === c.nodeValue.length && l(!1), i && n["set" + (r ? "Start" : "End")](c, d)
                }
                var i, o;
                return o = n.collapsed, r(!0), o || r(), i && o && n.collapse(!0), i
            }
        }
        var i = e.each;
        return r.compareRanges = function(e, t) {
            if (e && t) {
                if (!e.item && !e.duplicate) return e.startContainer == t.startContainer && e.startOffset == t.startOffset;
                if (e.item && t.item && e.item(0) === t.item(0)) return !0;
                if (e.isEqual && t.isEqual && t.isEqual(e)) return !0
            }
            return !1
        }, r
    }), r(B, [h, f], function(e, t) {
        function n(n) {
            var r = n.dom;
            this.getBookmark = function(e, i) {
                function o(e, n) {
                    var i = 0;
                    return t.each(r.select(e), function(e, t) {
                        e == n && (i = t)
                    }), i
                }
                function a(e) {
                    function t(t) {
                        var n, r, i, o = t ? "start" : "end";
                        n = e[o + "Container"], r = e[o + "Offset"], 1 == n.nodeType && "TR" == n.nodeName && (i = n.childNodes, n = i[Math.min(t ? r : r - 1, i.length - 1)], n && (r = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, r)))
                    }
                    return t(!0), t(), e
                }
                function s() {
                    function e(e, t) {
                        var n = e[t ? "startContainer" : "endContainer"],
                            a = e[t ? "startOffset" : "endOffset"],
                            s = [],
                            l, c, d = 0;
                        if (3 == n.nodeType) {
                            if (i) for (l = n.previousSibling; l && 3 == l.nodeType; l = l.previousSibling) a += l.nodeValue.length;
                            s.push(a)
                        } else c = n.childNodes, a >= c.length && c.length && (d = 1, a = Math.max(0, c.length - 1)), s.push(r.nodeIndex(c[a], i) + d);
                        for (; n && n != o; n = n.parentNode) s.push(r.nodeIndex(n, i));
                        return s
                    }
                    var t = n.getRng(!0),
                        o = r.getRoot(),
                        a = {};
                    return a.start = e(t, !0), n.isCollapsed() || (a.end = e(t)), a
                }
                var l, c, d, u, f, p, m = "&#xFEFF;",
                    h;
                if (2 == e) return p = n.getNode(), f = p ? p.nodeName : null, "IMG" == f ? {
                    name: f,
                    index: o(f, p)
                } : n.tridentSel ? n.tridentSel.getBookmark(e) : s();
                if (e) return {
                    rng: n.getRng()
                };
                if (l = n.getRng(), d = r.uniqueId(), u = n.isCollapsed(), h = "overflow:hidden;line-height:0px", l.duplicate || l.item) {
                    if (l.item) return p = l.item(0), f = p.nodeName, {
                        name: f,
                        index: o(f, p)
                    };
                    c = l.duplicate();
                    try {
                        l.collapse(), l.pasteHTML('<span data-mce-type="bookmark" id="' + d + '_start" style="' + h + '">' + m + "</span>"), u || (c.collapse(!1), l.moveToElementText(c.parentElement()), 0 === l.compareEndPoints("StartToEnd", c) && c.move("character", -1), c.pasteHTML('<span data-mce-type="bookmark" id="' + d + '_end" style="' + h + '">' + m + "</span>"))
                    } catch (g) {
                        return null
                    }
                } else {
                    if (p = n.getNode(), f = p.nodeName, "IMG" == f) return {
                        name: f,
                        index: o(f, p)
                    };
                    c = a(l.cloneRange()), u || (c.collapse(!1), c.insertNode(r.create("span", {
                        "data-mce-type": "bookmark",
                        id: d + "_end",
                        style: h
                    }, m))), l = a(l), l.collapse(!0), l.insertNode(r.create("span", {
                        "data-mce-type": "bookmark",
                        id: d + "_start",
                        style: h
                    }, m))
                }
                return n.moveToBookmark({
                    id: d,
                    keep: 1
                }), {
                    id: d
                }
            }, this.moveToBookmark = function(i) {
                function o(e) {
                    var t = i[e ? "start" : "end"],
                        n, r, o, a;
                    if (t) {
                        for (o = t[0], r = c, n = t.length - 1; n >= 1; n--) {
                            if (a = r.childNodes, t[n] > a.length - 1) return;
                            r = a[t[n]]
                        }
                        3 === r.nodeType && (o = Math.min(t[0], r.nodeValue.length)), 1 === r.nodeType && (o = Math.min(t[0], r.childNodes.length)), e ? l.setStart(r, o) : l.setEnd(r, o)
                    }
                    return !0
                }
                function a(n) {
                    var o = r.get(i.id + "_" + n),
                        a, s, l, c, m = i.keep;
                    if (o && (a = o.parentNode, "start" == n ? (m ? (a = o.firstChild, s = 1) : s = r.nodeIndex(o), d = u = a, f = p = s) : (m ? (a = o.firstChild, s = 1) : s = r.nodeIndex(o), u = a, p = s), !m)) {
                        for (c = o.previousSibling, l = o.nextSibling, t.each(t.grep(o.childNodes), function(e) {
                            3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
                        }); o = r.get(i.id + "_" + n);) r.remove(o, 1);
                        c && l && c.nodeType == l.nodeType && 3 == c.nodeType && !e.opera && (s = c.nodeValue.length, c.appendData(l.nodeValue), r.remove(l), "start" == n ? (d = u = c, f = p = s) : (u = c, p = s))
                    }
                }
                function s(t) {
                    return !r.isBlock(t) || t.innerHTML || e.ie || (t.innerHTML = '<br data-mce-bogus="1" />'), t
                }
                var l, c, d, u, f, p;
                if (i) if (i.start) {
                    if (l = r.createRng(), c = r.getRoot(), n.tridentSel) return n.tridentSel.moveToBookmark(i);
                    o(!0) && o() && n.setRng(l)
                } else i.id ? (a("start"), a("end"), d && (l = r.createRng(), l.setStart(s(d), f), l.setEnd(s(u), p), n.setRng(l))) : i.name ? n.select(r.select(i.name)[i.index]) : i.rng && n.setRng(i.rng)
            }
        }
        return n.isBookmarkNode = function(e) {
            return e && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        }, n
    }), r(D, [u, S, R, A, B, h, f], function(e, n, r, i, o, a, s) {
        function l(e, t, i, a) {
            var s = this;
            s.dom = e, s.win = t, s.serializer = i, s.editor = a, s.bookmarkManager = new o(s), s.controlSelection = new r(s, a), s.win.getSelection || (s.tridentSel = new n(s))
        }
        var c = s.each,
            d = s.trim,
            u = a.ie;
        return l.prototype = {
            setCursorLocation: function(e, t) {
                var n = this,
                    r = n.dom.createRng();
                e ? (r.setStart(e, t), r.setEnd(e, t), n.setRng(r), n.collapse(!1)) : (n._moveEndPoint(r, n.editor.getBody(), !0), n.setRng(r))
            },
            getContent: function(e) {
                var n = this,
                    r = n.getRng(),
                    i = n.dom.create("body"),
                    o = n.getSel(),
                    a, s, l;
                return e = e || {}, a = s = "", e.get = !0, e.format = e.format || "html", e.selection = !0, n.editor.fire("BeforeGetContent", e), "text" == e.format ? n.isCollapsed() ? "" : r.text || (o.toString ? o.toString() : "") : (r.cloneContents ? (l = r.cloneContents(), l && i.appendChild(l)) : r.item !== t || r.htmlText !== t ? (i.innerHTML = "<br>" + (r.item ? r.item(0).outerHTML : r.htmlText), i.removeChild(i.firstChild)) : i.innerHTML = r.toString(), /^\s/.test(i.innerHTML) && (a = " "), /\s+$/.test(i.innerHTML) && (s = " "), e.getInner = !0, e.content = n.isCollapsed() ? "" : a + n.serializer.serialize(i, e) + s, n.editor.fire("GetContent", e), e.content)
            },
            setContent: function(e, t) {
                var n = this,
                    r = n.getRng(),
                    i, o = n.win.document,
                    a, s;
                if (t = t || {
                    format: "html"
                }, t.set = !0, t.selection = !0, e = t.content = e, t.no_events || n.editor.fire("BeforeSetContent", t), e = t.content, r.insertNode) {
                    e += '<span id="__caret">_</span>', r.startContainer == o && r.endContainer == o ? o.body.innerHTML = e : (r.deleteContents(), 0 === o.body.childNodes.length ? o.body.innerHTML = e : r.createContextualFragment ? r.insertNode(r.createContextualFragment(e)) : (a = o.createDocumentFragment(), s = o.createElement("div"), a.appendChild(s), s.outerHTML = e, r.insertNode(a))), i = n.dom.get("__caret"), r = o.createRange(), r.setStartBefore(i), r.setEndBefore(i), n.setRng(r), n.dom.remove("__caret");
                    try {
                        n.setRng(r)
                    } catch (l) {}
                } else r.item && (o.execCommand("Delete", !1, null), r = n.getRng()), /^\s+/.test(e) ? (r.pasteHTML('<span id="__mce_tmp">_</span>' + e), n.dom.remove("__mce_tmp")) : r.pasteHTML(e);
                t.no_events || n.editor.fire("SetContent", t)
            },
            getStart: function() {
                var e = this,
                    t = e.getRng(),
                    n, r, i, o;
                if (t.duplicate || t.item) {
                    if (t.item) return t.item(0);
                    for (i = t.duplicate(), i.collapse(1), n = i.parentElement(), n.ownerDocument !== e.dom.doc && (n = e.dom.getRoot()), r = o = t.parentElement(); o = o.parentNode;) if (o == n) {
                        n = r;
                        break
                    }
                    return n
                }
                return n = t.startContainer, 1 == n.nodeType && n.hasChildNodes() && (n = n.childNodes[Math.min(n.childNodes.length - 1, t.startOffset)]), n && 3 == n.nodeType ? n.parentNode : n
            },
            getEnd: function() {
                var e = this,
                    t = e.getRng(),
                    n, r;
                return t.duplicate || t.item ? t.item ? t.item(0) : (t = t.duplicate(), t.collapse(0), n = t.parentElement(), n.ownerDocument !== e.dom.doc && (n = e.dom.getRoot()), n && "BODY" == n.nodeName ? n.lastChild || n : n) : (n = t.endContainer, r = t.endOffset, 1 == n.nodeType && n.hasChildNodes() && (n = n.childNodes[r > 0 ? r - 1 : r]), n && 3 == n.nodeType ? n.parentNode : n)
            },
            getBookmark: function(e, t) {
                return this.bookmarkManager.getBookmark(e, t)
            },
            moveToBookmark: function(e) {
                return this.bookmarkManager.moveToBookmark(e)
            },
            select: function(e, t) {
                var n = this,
                    r = n.dom,
                    i = r.createRng(),
                    o;
                if (n.lastFocusBookmark = null, e) {
                    if (!t && n.controlSelection.controlSelect(e)) return;
                    o = r.nodeIndex(e), i.setStart(e.parentNode, o), i.setEnd(e.parentNode, o + 1), t && (n._moveEndPoint(i, e, !0), n._moveEndPoint(i, e)), n.setRng(i)
                }
                return e
            },
            isCollapsed: function() {
                var e = this,
                    t = e.getRng(),
                    n = e.getSel();
                return !t || t.item ? !1 : t.compareEndPoints ? 0 === t.compareEndPoints("StartToEnd", t) : !n || t.collapsed
            },
            collapse: function(e) {
                var t = this,
                    n = t.getRng(),
                    r;
                n.item && (r = n.item(0), n = t.win.document.body.createTextRange(), n.moveToElementText(r)), n.collapse( !! e), t.setRng(n)
            },
            getSel: function() {
                var e = this.win;
                return e.getSelection ? e.getSelection() : e.document.selection
            },
            getRng: function(e) {
                function t(e, t, n) {
                    try {
                        return t.compareBoundaryPoints(e, n)
                    } catch (r) {
                        return -1
                    }
                }
                var n = this,
                    r, i, o, a = n.win.document,
                    s;
                if (!e && n.lastFocusBookmark) {
                    var l = n.lastFocusBookmark;
                    return l.startContainer ? (i = a.createRange(), i.setStart(l.startContainer, l.startOffset), i.setEnd(l.endContainer, l.endOffset)) : i = l, i
                }
                if (e && n.tridentSel) return n.tridentSel.getRangeAt(0);
                try {
                    (r = n.getSel()) && (i = r.rangeCount > 0 ? r.getRangeAt(0) : r.createRange ? r.createRange() : a.createRange())
                } catch (c) {}
                if (u && i && i.setStart && a.selection) {
                    try {
                        s = a.selection.createRange()
                    } catch (c) {}
                    s && s.item && (o = s.item(0), i = a.createRange(), i.setStartBefore(o), i.setEndAfter(o))
                }
                return i || (i = a.createRange ? a.createRange() : a.body.createTextRange()), i.setStart && 9 === i.startContainer.nodeType && i.collapsed && (o = n.dom.getRoot(), i.setStart(o, 0), i.setEnd(o, 0)), n.selectedRange && n.explicitRange && (0 === t(i.START_TO_START, i, n.selectedRange) && 0 === t(i.END_TO_END, i, n.selectedRange) ? i = n.explicitRange : (n.selectedRange = null, n.explicitRange = null)), i
            },
            setRng: function(e, t) {
                var n = this,
                    r;
                if (e.select) try {
                    e.select()
                } catch (i) {} else if (n.tridentSel) {
                    if (e.cloneRange) try {
                        return void n.tridentSel.addRange(e)
                    } catch (i) {}
                } else if (r = n.getSel()) {
                    n.explicitRange = e;
                    try {
                        r.removeAllRanges(), r.addRange(e)
                    } catch (i) {}
                    t === !1 && r.extend && (r.collapse(e.endContainer, e.endOffset), r.extend(e.startContainer, e.startOffset)), n.selectedRange = r.rangeCount > 0 ? r.getRangeAt(0) : null
                }
            },
            setNode: function(e) {
                var t = this;
                return t.setContent(t.dom.getOuterHTML(e)), e
            },
            getNode: function() {
                function e(e, t) {
                    for (var n = e; e && 3 === e.nodeType && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling;
                    return e || n
                }
                var t = this,
                    n = t.getRng(),
                    r, i = n.startContainer,
                    o = n.endContainer,
                    a = n.startOffset,
                    s = n.endOffset,
                    l = t.dom.getRoot();
                return n ? n.setStart ? (r = n.commonAncestorContainer, !n.collapsed && (i == o && 2 > s - a && i.hasChildNodes() && (r = i.childNodes[a]), 3 === i.nodeType && 3 === o.nodeType && (i = i.length === a ? e(i.nextSibling, !0) : i.parentNode, o = 0 === s ? e(o.previousSibling, !1) : o.parentNode, i && i === o)) ? i : r && 3 == r.nodeType ? r.parentNode : r) : (r = n.item ? n.item(0) : n.parentElement(), r.ownerDocument !== t.win.document && (r = l), r) : l
            },
            getSelectedBlocks: function(t, n) {
                var r = this,
                    i = r.dom,
                    o, a, s = [];
                if (a = i.getRoot(), t = i.getParent(t || r.getStart(), i.isBlock), n = i.getParent(n || r.getEnd(), i.isBlock), t && t != a && s.push(t), t && n && t != n) {
                    o = t;
                    for (var l = new e(t, a);
                    (o = l.next()) && o != n;) i.isBlock(o) && s.push(o)
                }
                return n && t != n && n != a && s.push(n), s
            },
            isForward: function() {
                var e = this.dom,
                    t = this.getSel(),
                    n, r;
                return t && t.anchorNode && t.focusNode ? (n = e.createRng(), n.setStart(t.anchorNode, t.anchorOffset), n.collapse(!0), r = e.createRng(), r.setStart(t.focusNode, t.focusOffset), r.collapse(!0), n.compareBoundaryPoints(n.START_TO_START, r) <= 0) : !0
            },
            normalize: function() {
                var e = this,
                    t = e.getRng();
                return !u && new i(e.dom).normalize(t) && e.setRng(t, e.isForward()), t
            },
            selectorChanged: function(e, t) {
                var n = this,
                    r;
                return n.selectorChangedData || (n.selectorChangedData = {}, r = {}, n.editor.on("NodeChange", function(e) {
                    var t = e.element,
                        i = n.dom,
                        o = i.getParents(t, null, i.getRoot()),
                        a = {};
                    c(n.selectorChangedData, function(e, t) {
                        c(o, function(n) {
                            return i.is(n, t) ? (r[t] || (c(e, function(e) {
                                e(!0, {
                                    node: n,
                                    selector: t,
                                    parents: o
                                })
                            }), r[t] = e), a[t] = e, !1) : void 0
                        })
                    }), c(r, function(e, n) {
                        a[n] || (delete r[n], c(e, function(e) {
                            e(!1, {
                                node: t,
                                selector: n,
                                parents: o
                            })
                        }))
                    })
                })), n.selectorChangedData[e] || (n.selectorChangedData[e] = []), n.selectorChangedData[e].push(t), n
            },
            getScrollContainer: function() {
                for (var e, t = this.dom.getRoot(); t && "BODY" != t.nodeName;) {
                    if (t.scrollHeight > t.clientHeight) {
                        e = t;
                        break
                    }
                    t = t.parentNode
                }
                return e
            },
            scrollIntoView: function(e) {
                function t(e) {
                    for (var t = 0, n = 0, r = e; r && r.nodeType;) t += r.offsetLeft || 0, n += r.offsetTop || 0, r = r.offsetParent;
                    return {
                        x: t,
                        y: n
                    }
                }
                var n, r, i = this,
                    o = i.dom,
                    a = o.getRoot(),
                    s, l;
                if ("BODY" != a.nodeName) {
                    var c = i.getScrollContainer();
                    if (c) return n = t(e).y - t(c).y, l = c.clientHeight, s = c.scrollTop, void((s > n || n + 25 > s + l) && (c.scrollTop = s > n ? n : n - l + 25))
                }
                r = o.getViewPort(i.editor.getWin()), n = o.getPos(e).y, s = r.y, l = r.h, (n < r.y || n + 25 > s + l) && i.editor.getWin().scrollTo(0, s > n ? n : n - l + 25)
            },
            _moveEndPoint: function(t, n, r) {
                var i = n,
                    o = new e(n, i),
                    s = this.dom.schema.getNonEmptyElements();
                do {
                    if (3 == n.nodeType && 0 !== d(n.nodeValue).length) return void(r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
                    if (s[n.nodeName]) return void(r ? t.setStartBefore(n) : "BR" == n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
                    if (a.ie && a.ie < 11 && this.dom.isBlock(n) && this.dom.isEmpty(n)) return void(r ? t.setStart(n, 0) : t.setEnd(n, 0))
                } while (n = r ? o.next() : o.prev());
                "BODY" == i.nodeName && (r ? t.setStart(i, 0) : t.setEnd(i, i.childNodes.length))
            },
            destroy: function() {
                this.win = null, this.controlSelection.destroy()
            }
        }, l
    }), r(L, [B, f], function(e, t) {
        function n(t) {
            this.compare = function(n, i) {
                function o(e) {
                    var n = {};
                    return r(t.getAttribs(e), function(r) {
                        var i = r.nodeName.toLowerCase();
                        0 !== i.indexOf("_") && "style" !== i && "data-mce-style" !== i && (n[i] = t.getAttrib(e, i))
                    }), n
                }
                function a(e, t) {
                    var n, r;
                    for (r in e) if (e.hasOwnProperty(r)) {
                        if (n = t[r], "undefined" == typeof n) return !1;
                        if (e[r] != n) return !1;
                        delete t[r]
                    }
                    for (r in t) if (t.hasOwnProperty(r)) return !1;
                    return !0
                }
                return n.nodeName != i.nodeName ? !1 : a(o(n), o(i)) && a(t.parseStyle(t.getAttrib(n, "style")), t.parseStyle(t.getAttrib(i, "style"))) ? !e.isBookmarkNode(n) && !e.isBookmarkNode(i) : !1
            }
        }
        var r = t.each;
        return n
    }), r(M, [f], function(e) {
        function t(e, t) {
            function r(e) {
                return e.replace(/%(\w+)/g, "")
            }
            var i, o, a = e.dom,
                s = "",
                l, c;
            if (c = e.settings.preview_styles, c === !1) return "";
            if (c || (c = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"), "string" == typeof t) {
                if (t = e.formatter.get(t), !t) return;
                t = t[0]
            }
            return i = t.block || t.inline || "span", o = a.create(i), n(t.styles, function(e, t) {
                e = r(e), e && a.setStyle(o, t, e)
            }), n(t.attributes, function(e, t) {
                e = r(e), e && a.setAttrib(o, t, e)
            }), n(t.classes, function(e) {
                e = r(e), a.hasClass(o, e) || a.addClass(o, e)
            }), e.fire("PreviewFormats"), a.setStyles(o, {
                position: "absolute",
                left: -65535
            }), e.getBody().appendChild(o), l = a.getStyle(e.getBody(), "fontSize", !0), l = /px$/.test(l) ? parseInt(l, 10) : 0, n(c.split(" "), function(t) {
                var n = a.getStyle(o, t, !0);
                if (!("background-color" == t && /transparent|rgba\s*\([^)]+,\s*0\)/.test(n) && (n = a.getStyle(e.getBody(), t, !0), "#ffffff" == a.toHex(n).toLowerCase()) || "color" == t && "#000000" == a.toHex(n).toLowerCase())) {
                    if ("font-size" == t && /em|%$/.test(n)) {
                        if (0 === l) return;
                        n = parseFloat(n, 10) / (/%$/.test(n) ? 100 : 1), n = n * l + "px"
                    }
                    "border" == t && n && (s += "padding:0 2px;"), s += t + ":" + n + ";"
                }
            }), e.fire("AfterPreviewFormats"), a.remove(o), s
        }
        var n = e.each;
        return {
            getCssText: t
        }
    }), r(H, [u, A, B, L, f, M], function(e, t, n, r, i, o) {
        return function(a) {
            function s(e) {
                return e.nodeType && (e = e.nodeName), !! a.schema.getTextBlockElements()[e.toLowerCase()]
            }
            function l(e, t) {
                return W.getParents(e, t, W.getRoot())
            }
            function c(e) {
                return 1 === e.nodeType && "_mce_caret" === e.id
            }
            function d() {
                p({
                    valigntop: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "top"
                        }
                    }],
                    valignmiddle: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "middle"
                        }
                    }],
                    valignbottom: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "bottom"
                        }
                    }],
                    alignleft: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "left"
                        },
                        defaultBlock: "div"
                    }, {
                        selector: "img,table",
                        collapsed: !1,
                        styles: {
                            "float": "left"
                        }
                    }],
                    aligncenter: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "center"
                        },
                        defaultBlock: "div"
                    }, {
                        selector: "img",
                        collapsed: !1,
                        styles: {
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }
                    }, {
                        selector: "table",
                        collapsed: !1,
                        styles: {
                            marginLeft: "auto",
                            marginRight: "auto"
                        }
                    }],
                    alignright: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "right"
                        },
                        defaultBlock: "div"
                    }, {
                        selector: "img,table",
                        collapsed: !1,
                        styles: {
                            "float": "right"
                        }
                    }],
                    alignjustify: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "justify"
                        },
                        defaultBlock: "div"
                    }],
                    bold: [{
                        inline: "strong",
                        remove: "all"
                    }, {
                        inline: "span",
                        styles: {
                            fontWeight: "bold"
                        }
                    }, {
                        inline: "b",
                        remove: "all"
                    }],
                    italic: [{
                        inline: "em",
                        remove: "all"
                    }, {
                        inline: "span",
                        styles: {
                            fontStyle: "italic"
                        }
                    }, {
                        inline: "i",
                        remove: "all"
                    }],
                    underline: [{
                        inline: "span",
                        styles: {
                            textDecoration: "underline"
                        },
                        exact: !0
                    }, {
                        inline: "u",
                        remove: "all"
                    }],
                    strikethrough: [{
                        inline: "span",
                        styles: {
                            textDecoration: "line-through"
                        },
                        exact: !0
                    }, {
                        inline: "strike",
                        remove: "all"
                    }],
                    forecolor: {
                        inline: "span",
                        styles: {
                            color: "%value"
                        },
                        wrap_links: !1
                    },
                    hilitecolor: {
                        inline: "span",
                        styles: {
                            backgroundColor: "%value"
                        },
                        wrap_links: !1
                    },
                    fontname: {
                        inline: "span",
                        styles: {
                            fontFamily: "%value"
                        }
                    },
                    fontsize: {
                        inline: "span",
                        styles: {
                            fontSize: "%value"
                        }
                    },
                    fontsize_class: {
                        inline: "span",
                        attributes: {
                            "class": "%value"
                        }
                    },
                    blockquote: {
                        block: "blockquote",
                        wrapper: 1,
                        remove: "all"
                    },
                    subscript: {
                        inline: "sub"
                    },
                    superscript: {
                        inline: "sup"
                    },
                    code: {
                        inline: "code"
                    },
                    link: {
                        inline: "a",
                        selector: "a",
                        remove: "all",
                        split: !0,
                        deep: !0,
                        onmatch: function() {
                            return !0
                        },
                        onformat: function(e, t, n) {
                            it(n, function(t, n) {
                                W.setAttrib(e, n, t)
                            })
                        }
                    },
                    removeformat: [{
                        selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q",
                        remove: "all",
                        split: !0,
                        expand: !1,
                        block_expand: !0,
                        deep: !0
                    }, {
                        selector: "span",
                        attributes: ["style", "class"],
                        remove: "empty",
                        split: !0,
                        expand: !1,
                        deep: !0
                    }, {
                        selector: "*",
                        attributes: ["style", "class"],
                        split: !1,
                        expand: !1,
                        deep: !0
                    }]
                }), it("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function(e) {
                    p(e, {
                        block: e,
                        remove: "all"
                    })
                }), p(a.settings.formats)
            }
            function u() {
                a.addShortcut("ctrl+b", "bold_desc", "Bold"), a.addShortcut("ctrl+i", "italic_desc", "Italic"), a.addShortcut("ctrl+u", "underline_desc", "Underline");
                for (var e = 1; 6 >= e; e++) a.addShortcut("ctrl+" + e, "", ["FormatBlock", !1, "h" + e]);
                a.addShortcut("ctrl+7", "", ["FormatBlock", !1, "p"]), a.addShortcut("ctrl+8", "", ["FormatBlock", !1, "div"]), a.addShortcut("ctrl+9", "", ["FormatBlock", !1, "address"])
            }
            function f(e) {
                return e ? z[e] : z
            }
            function p(e, t) {
                e && ("string" != typeof e ? it(e, function(e, t) {
                    p(t, e)
                }) : (t = t.length ? t : [t], it(t, function(e) {
                    e.deep === Z && (e.deep = !e.selector), e.split === Z && (e.split = !e.selector || e.inline), e.remove === Z && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
                }), z[e] = t))
            }
            function m(e) {
                var t;
                return a.dom.getParent(e, function(e) {
                    return t = a.dom.getStyle(e, "text-decoration"), t && "none" !== t
                }), t
            }
            function h(e) {
                var t;
                1 === e.nodeType && e.parentNode && 1 === e.parentNode.nodeType && (t = m(e.parentNode), a.dom.getStyle(e, "color") && t ? a.dom.setStyle(e, "text-decoration", t) : a.dom.getStyle(e, "textdecoration") === t && a.dom.setStyle(e, "text-decoration", null))
            }
            function g(t, n, r) {
                function i(e, t) {
                    if (t = t || p, e) {
                        if (t.onformat && t.onformat(e, t, n, r), it(t.styles, function(t, r) {
                            W.setStyle(e, r, R(t, n))
                        }), t.styles) {
                            var i = W.getAttrib(e, "style");
                            i && e.setAttribute("data-mce-style", i)
                        }
                        it(t.attributes, function(t, r) {
                            W.setAttrib(e, r, R(t, n))
                        }), it(t.classes, function(t) {
                            t = R(t, n), W.hasClass(e, t) || W.addClass(e, t)
                        })
                    }
                }
                function o() {
                    function t(t, n) {
                        var i = new e(n);
                        for (r = i.current(); r; r = i.prev()) if (r.childNodes.length > 1 || r == t || "BR" == r.tagName) return r
                    }
                    var n = a.selection.getRng(),
                        i = n.startContainer,
                        o = n.endContainer;
                    if (i != o && 0 === n.endOffset) {
                        var s = t(i, o),
                            l = 3 == s.nodeType ? s.length : s.childNodes.length;
                        n.setEnd(s, l)
                    }
                    return n
                }
                function l(e, t, n, r, i) {
                    var o = [],
                        a = -1,
                        s, l = -1,
                        c = -1,
                        d;
                    return it(e.childNodes, function(e, t) {
                        return "UL" === e.nodeName || "OL" === e.nodeName ? (a = t, s = e, !1) : void 0
                    }), it(e.childNodes, function(e, n) {
                        rt(e) && (e.id == t.id + "_start" ? l = n : e.id == t.id + "_end" && (c = n))
                    }), 0 >= a || a > l && c > a ? (it(ot(e.childNodes), i), 0) : (d = W.clone(n, X), it(ot(e.childNodes), function(e, t) {
                        (a > l && a > t || l > a && t > a) && (o.push(e), e.parentNode.removeChild(e))
                    }), a > l ? e.insertBefore(d, s) : l > a && e.insertBefore(d, s.nextSibling), r.push(d), it(o, function(e) {
                        d.appendChild(e)
                    }), d)
                }
                function d(e, r, o) {
                    var a = [],
                        d, f, m = !0;
                    d = p.inline || p.block, f = W.create(d), i(f), U.walk(e, function(e) {
                        function h(e) {
                            var v, C, x, w, _;
                            return _ = m, v = e.nodeName.toLowerCase(), C = e.parentNode.nodeName.toLowerCase(), 1 === e.nodeType && et(e) && (_ = m, m = "true" === et(e), w = !0), k(v, "br") ? (g = 0, void(p.block && W.remove(e))) : p.wrapper && b(e, t, n) ? void(g = 0) : m && !w && p.block && !p.wrapper && s(v) && q(C, d) ? (e = W.rename(e, d), i(e), a.push(e), void(g = 0)) : p.selector && (it(u, function(t) {
                                "collapsed" in t && t.collapsed !== y || W.is(e, t.selector) && !c(e) && (i(e, t), x = !0)
                            }), !p.inline || x) ? void(g = 0) : void(!m || w || !q(d, v) || !q(C, d) || !o && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || c(e) || p.inline && $(e) ? "li" == v && r ? g = l(e, r, f, a, h) : (g = 0, it(ot(e.childNodes), h), w && (m = _), g = 0) : (g || (g = W.clone(f, X), e.parentNode.insertBefore(g, e), a.push(g)), g.appendChild(e)))
                        }
                        var g;
                        it(e, h)
                    }), p.wrap_links === !1 && it(a, function(e) {
                        function t(e) {
                            var n, r, i;
                            if ("A" === e.nodeName) {
                                for (r = W.clone(f, X), a.push(r), i = ot(e.childNodes), n = 0; n < i.length; n++) r.appendChild(i[n]);
                                e.appendChild(r)
                            }
                            it(ot(e.childNodes), t)
                        }
                        t(e)
                    }), it(a, function(e) {
                        function r(e) {
                            var t = 0;
                            return it(e.childNodes, function(e) {
                                A(e) || rt(e) || t++
                            }), t
                        }
                        function o(e) {
                            var t, n;
                            return it(e.childNodes, function(e) {
                                return 1 != e.nodeType || rt(e) || c(e) ? void 0 : (t = e, X)
                            }), t && !rt(t) && N(t, p) && (n = W.clone(t, X), i(n), W.replace(n, e, J), W.remove(t, 1)), n || e
                        }
                        var s;
                        if (s = r(e), (a.length > 1 || !$(e)) && 0 === s) return void W.remove(e, 1);
                        if (p.inline || p.wrapper) {
                            if (p.exact || 1 !== s || (e = o(e)), it(u, function(t) {
                                it(W.select(t.inline, e), function(e) {
                                    var r;
                                    if (!rt(e)) {
                                        if (t.wrap_links === !1) {
                                            r = e.parentNode;
                                            do
                                            if ("A" === r.nodeName) return;
                                            while (r = r.parentNode)
                                        }
                                        L(t, n, e, t.exact ? e : null)
                                    }
                                })
                            }), b(e.parentNode, t, n)) return W.remove(e, 1), e = 0, J;
                            p.merge_with_parents && W.getParent(e.parentNode, function(r) {
                                return b(r, t, n) ? (W.remove(e, 1), e = 0, J) : void 0
                            }), e && p.merge_siblings !== !1 && (e = P(H(e), e), e = P(e, H(e, J)))
                        }
                    })
                }
                var u = f(t),
                    p = u[0],
                    m, v, y = !r && V.isCollapsed();
                if (p) if (r) r.nodeType ? (v = W.createRng(), v.setStartBefore(r), v.setEndAfter(r), d(D(v, u), null, !0)) : d(r, null, !0);
                else if (y && p.inline && !W.select("td.mce-item-selected,th.mce-item-selected").length) I("apply", t, n);
                else {
                    var C = a.selection.getNode();
                    j || !u[0].defaultBlock || W.getParent(C, W.isBlock) || g(u[0].defaultBlock), a.selection.setRng(o()), m = V.getBookmark(), d(D(V.getRng(J), u), m), p.styles && (p.styles.color || p.styles.textDecoration) && (at(C, h, "childNodes"), h(C)), V.moveToBookmark(m), F(V.getRng(J)), a.nodeChanged()
                }
            }
            function v(e, t, n) {
                function r(e) {
                    var n, i, o, a, s;
                    if (1 === e.nodeType && et(e) && (a = v, v = "true" === et(e), s = !0), n = ot(e.childNodes), v && !s) for (i = 0, o = u.length; o > i && !L(u[i], t, e, e); i++);
                    if (p.deep && n.length) {
                        for (i = 0, o = n.length; o > i; i++) r(n[i]);
                        s && (v = a)
                    }
                }
                function i(n) {
                    var r;
                    return it(l(n.parentNode).reverse(), function(n) {
                        var i;
                        r || "_start" == n.id || "_end" == n.id || (i = b(n, e, t), i && i.split !== !1 && (r = n))
                    }), r
                }
                function o(e, n, r, i) {
                    var o, a, s, l, c, d;
                    if (e) {
                        for (d = e.parentNode, o = n.parentNode; o && o != d; o = o.parentNode) {
                            for (a = W.clone(o, X), c = 0; c < u.length; c++) if (L(u[c], t, a, a)) {
                                a = 0;
                                break
                            }
                            a && (s && a.appendChild(s), l || (l = a), s = a)
                        }!i || p.mixed && $(e) || (n = W.split(e, n)), s && (r.parentNode.insertBefore(s, r), l.appendChild(r))
                    }
                    return n
                }
                function s(e) {
                    return o(i(e), e, e, !0)
                }
                function c(e) {
                    var t = W.get(e ? "_start" : "_end"),
                        n = t[e ? "firstChild" : "lastChild"];
                    return rt(n) && (n = n[e ? "firstChild" : "lastChild"]), W.remove(t, !0), n
                }
                function d(e) {
                    var t, n, i = e.commonAncestorContainer;
                    e = D(e, u, J), p.split && (t = O(e, J), n = O(e), t != n ? (/^(TR|TH|TD)$/.test(t.nodeName) && t.firstChild && (t = "TR" == t.nodeName ? t.firstChild.firstChild || t : t.firstChild || t), i && /^T(HEAD|BODY|FOOT|R)$/.test(i.nodeName) && /^(TH|TD)$/.test(n.nodeName) && n.firstChild && (n = n.firstChild || n), t = B(t, "span", {
                        id: "_start",
                        "data-mce-type": "bookmark"
                    }), n = B(n, "span", {
                        id: "_end",
                        "data-mce-type": "bookmark"
                    }), s(t), s(n), t = c(J), n = c()) : t = n = s(t), e.startContainer = t.parentNode, e.startOffset = K(t), e.endContainer = n.parentNode, e.endOffset = K(n) + 1), U.walk(e, function(e) {
                        it(e, function(e) {
                            r(e), 1 === e.nodeType && "underline" === a.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === m(e.parentNode) && L({
                                deep: !1,
                                exact: !0,
                                inline: "span",
                                styles: {
                                    textDecoration: "underline"
                                }
                            }, null, e)
                        })
                    })
                }
                var u = f(e),
                    p = u[0],
                    h, g, v = !0;
                return n ? void(n.nodeType ? (g = W.createRng(), g.setStartBefore(n), g.setEndAfter(n), d(g)) : d(n)) : void(V.isCollapsed() && p.inline && !W.select("td.mce-item-selected,th.mce-item-selected").length ? I("remove", e, t) : (h = V.getBookmark(), d(V.getRng(J)), V.moveToBookmark(h), p.inline && C(e, t, V.getStart()) && F(V.getRng(!0)), a.nodeChanged()))
            }
            function y(e, t, n) {
                var r = f(e);
                !C(e, t, n) || "toggle" in r[0] && !r[0].toggle ? g(e, t, n) : v(e, t, n)
            }
            function b(e, t, n, r) {
                function i(e, t, i) {
                    var o, a, s = t[i],
                        l;
                    if (t.onmatch) return t.onmatch(e, t, i);
                    if (s) if (s.length === Z) {
                        for (o in s) if (s.hasOwnProperty(o)) {
                            if (a = "attributes" === i ? W.getAttrib(e, o) : S(e, o), r && !a && !t.exact) return;
                            if ((!r || t.exact) && !k(a, T(R(s[o], n), o))) return
                        }
                    } else for (l = 0; l < s.length; l++) if ("attributes" === i ? W.getAttrib(e, s[l]) : S(e, s[l])) return t;
                    return t
                }
                var o = f(t),
                    a, s, l;
                if (o && e) for (s = 0; s < o.length; s++) if (a = o[s], N(e, a) && i(e, a, "attributes") && i(e, a, "styles")) {
                    if (l = a.classes) for (s = 0; s < l.length; s++) if (!W.hasClass(e, l[s])) return;
                    return a
                }
            }
            function C(e, t, n) {
                function r(n) {
                    var r = W.getRoot();
                    return n === r ? !1 : (n = W.getParent(n, function(n) {
                        return n.parentNode === r || !! b(n, e, t, !0)
                    }), b(n, e, t))
                }
                var i;
                return n ? r(n) : (n = V.getNode(), r(n) ? J : (i = V.getStart(), i != n && r(i) ? J : X))
            }
            function x(e, t) {
                var n, r = [],
                    i = {};
                return n = V.getStart(), W.getParent(n, function(n) {
                    var o, a;
                    for (o = 0; o < e.length; o++) a = e[o], !i[a] && b(n, a, t) && (i[a] = !0, r.push(a))
                }, W.getRoot()), r
            }
            function w(e) {
                var t = f(e),
                    n, r, i, o, a;
                if (t) for (n = V.getStart(), r = l(n), o = t.length - 1; o >= 0; o--) {
                    if (a = t[o].selector, !a || t[o].defaultBlock) return J;
                    for (i = r.length - 1; i >= 0; i--) if (W.is(r[i], a)) return J
                }
                return X
            }
            function _(e, t, n) {
                var r;
                return Q || (Q = {}, r = {}, a.on("NodeChange", function(e) {
                    var t = l(e.element),
                        n = {};
                    it(Q, function(e, i) {
                        it(t, function(o) {
                            return b(o, i, {}, e.similar) ? (r[i] || (it(e, function(e) {
                                e(!0, {
                                    node: o,
                                    format: i,
                                    parents: t
                                })
                            }), r[i] = e), n[i] = e, !1) : void 0
                        })
                    }), it(r, function(i, o) {
                        n[o] || (delete r[o], it(i, function(n) {
                            n(!1, {
                                node: e.element,
                                format: o,
                                parents: t
                            })
                        }))
                    })
                })), it(e.split(","), function(e) {
                    Q[e] || (Q[e] = [], Q[e].similar = n), Q[e].push(t)
                }), this
            }
            function E(e) {
                return o.getCssText(a, e)
            }
            function N(e, t) {
                return k(e, t.inline) ? J : k(e, t.block) ? J : t.selector ? 1 == e.nodeType && W.is(e, t.selector) : void 0
            }
            function k(e, t) {
                return e = e || "", t = t || "", e = "" + (e.nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() == t.toLowerCase()
            }
            function S(e, t) {
                return T(W.getStyle(e, t), t)
            }
            function T(e, t) {
                return ("color" == t || "backgroundColor" == t) && (e = W.toHex(e)), "fontWeight" == t && 700 == e && (e = "bold"), "fontFamily" == t && (e = e.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + e
            }
            function R(e, t) {
                return "string" != typeof e ? e = e(t) : t && (e = e.replace(/%(\w+)/g, function(e, n) {
                    return t[n] || e
                })), e
            }
            function A(e) {
                return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
            }
            function B(e, t, n) {
                var r = W.create(t, n);
                return e.parentNode.insertBefore(r, e), r.appendChild(e), r
            }
            function D(t, n, r) {
                function i(e) {
                    function t(e) {
                        return "BR" == e.nodeName && e.getAttribute("data-mce-bogus") && !e.nextSibling
                    }
                    var r, i, o, a, s;
                    if (r = i = e ? g : y, a = e ? "previousSibling" : "nextSibling", s = W.getRoot(), 3 == r.nodeType && !A(r) && (e ? v > 0 : b < r.nodeValue.length)) return r;
                    for (;;) {
                        if (!n[0].block_expand && $(i)) return i;
                        for (o = i[a]; o; o = o[a]) if (!rt(o) && !A(o) && !t(o)) return i;
                        if (i.parentNode == s) {
                            r = i;
                            break
                        }
                        i = i.parentNode
                    }
                    return r
                }
                function o(e, t) {
                    for (t === Z && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes();) e = e.childNodes[t], e && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
                    return {
                        node: e,
                        offset: t
                    }
                }
                function c(e) {
                    for (var t = e; t;) {
                        if (1 === t.nodeType && et(t)) return "false" === et(t) ? t : e;
                        t = t.parentNode
                    }
                    return e
                }
                function d(t, n, i) {
                    function o(e, t) {
                        var n, o, a = e.nodeValue;
                        return "undefined" == typeof t && (t = i ? a.length : 0), i ? (n = a.lastIndexOf(" ", t), o = a.lastIndexOf("\xa0", t), n = n > o ? n : o, -1 === n || r || n++) : (n = a.indexOf(" ", t), o = a.indexOf("\xa0", t), n = -1 !== n && (-1 === o || o > n) ? n : o), n
                    }
                    var s, l, c, d;
                    if (3 === t.nodeType) {
                        if (c = o(t, n), -1 !== c) return {
                            container: t,
                            offset: c
                        };
                        d = t
                    }
                    for (s = new e(t, W.getParent(t, $) || a.getBody()); l = s[i ? "prev" : "next"]();) if (3 === l.nodeType) {
                        if (d = l, c = o(l), -1 !== c) return {
                            container: l,
                            offset: c
                        }
                    } else if ($(l)) break;
                    return d ? (n = i ? 0 : d.length, {
                        container: d,
                        offset: n
                    }) : void 0
                }
                function u(e, r) {
                    var i, o, a, s;
                    for (3 == e.nodeType && 0 === e.nodeValue.length && e[r] && (e = e[r]), i = l(e), o = 0; o < i.length; o++) for (a = 0; a < n.length; a++) if (s = n[a], !("collapsed" in s && s.collapsed !== t.collapsed) && W.is(i[o], s.selector)) return i[o];
                    return e
                }
                function f(e, t) {
                    var r, i = W.getRoot();
                    if (n[0].wrapper || (r = W.getParent(e, n[0].block, i)), r || (r = W.getParent(3 == e.nodeType ? e.parentNode : e, function(e) {
                        return e != i && s(e)
                    })), r && n[0].wrapper && (r = l(r, "ul,ol").reverse()[0] || r), !r) for (r = e; r[t] && !$(r[t]) && (r = r[t], !k(r, "br")););
                    return r || e
                }
                var p, m, h, g = t.startContainer,
                    v = t.startOffset,
                    y = t.endContainer,
                    b = t.endOffset;
                if (1 == g.nodeType && g.hasChildNodes() && (p = g.childNodes.length - 1, g = g.childNodes[v > p ? p : v], 3 == g.nodeType && (v = 0)), 1 == y.nodeType && y.hasChildNodes() && (p = y.childNodes.length - 1, y = y.childNodes[b > p ? p : b - 1], 3 == y.nodeType && (b = y.nodeValue.length)), g = c(g), y = c(y), (rt(g.parentNode) || rt(g)) && (g = rt(g) ? g : g.parentNode, g = g.nextSibling || g, 3 == g.nodeType && (v = 0)), (rt(y.parentNode) || rt(y)) && (y = rt(y) ? y : y.parentNode, y = y.previousSibling || y, 3 == y.nodeType && (b = y.length)), n[0].inline && (t.collapsed && (h = d(g, v, !0), h && (g = h.container, v = h.offset), h = d(y, b), h && (y = h.container, b = h.offset)), m = o(y, b), m.node)) {
                    for (; m.node && 0 === m.offset && m.node.previousSibling;) m = o(m.node.previousSibling);
                    m.node && m.offset > 0 && 3 === m.node.nodeType && " " === m.node.nodeValue.charAt(m.offset - 1) && m.offset > 1 && (y = m.node, y.splitText(m.offset - 1))
                }
                return (n[0].inline || n[0].block_expand) && (n[0].inline && 3 == g.nodeType && 0 !== v || (g = i(!0)), n[0].inline && 3 == y.nodeType && b !== y.nodeValue.length || (y = i())), n[0].selector && n[0].expand !== X && !n[0].inline && (g = u(g, "previousSibling"), y = u(y, "nextSibling")), (n[0].block || n[0].selector) && (g = f(g, "previousSibling"), y = f(y, "nextSibling"), n[0].block && ($(g) || (g = i(!0)), $(y) || (y = i()))), 1 == g.nodeType && (v = K(g), g = g.parentNode), 1 == y.nodeType && (b = K(y) + 1, y = y.parentNode), {
                    startContainer: g,
                    startOffset: v,
                    endContainer: y,
                    endOffset: b
                }
            }
            function L(e, t, n, r) {
                var i, o, a;
                if (!N(n, e)) return X;
                if ("all" != e.remove) for (it(e.styles, function(e, i) {
                    e = T(R(e, t), i), "number" == typeof i && (i = e, r = 0), (!r || k(S(r, i), e)) && W.setStyle(n, i, ""), a = 1
                }), a && "" === W.getAttrib(n, "style") && (n.removeAttribute("style"), n.removeAttribute("data-mce-style")), it(e.attributes, function(e, i) {
                    var o;
                    if (e = R(e, t), "number" == typeof i && (i = e, r = 0), !r || k(W.getAttrib(r, i), e)) {
                        if ("class" == i && (e = W.getAttrib(n, i), e && (o = "", it(e.split(/\s+/), function(e) {
                            /mce\w+/.test(e) && (o += (o ? " " : "") + e)
                        }), o))) return void W.setAttrib(n, i, o);
                        "class" == i && n.removeAttribute("className"), G.test(i) && n.removeAttribute("data-mce-" + i), n.removeAttribute(i)
                    }
                }), it(e.classes, function(e) {
                    e = R(e, t), (!r || W.hasClass(r, e)) && W.removeClass(n, e)
                }), o = W.getAttribs(n), i = 0; i < o.length; i++) if (0 !== o[i].nodeName.indexOf("_")) return X;
                return "none" != e.remove ? (M(n, e), J) : void 0
            }
            function M(e, t) {
                function n(e, t, n) {
                    return e = H(e, t, n), !e || "BR" == e.nodeName || $(e)
                }
                var r = e.parentNode,
                    i;
                t.block && (j ? r == W.getRoot() && (t.list_block && k(e, t.list_block) || it(ot(e.childNodes), function(e) {
                    q(j, e.nodeName.toLowerCase()) ? i ? i.appendChild(e) : (i = B(e, j), W.setAttribs(i, a.settings.forced_root_block_attrs)) : i = 0
                })) : $(e) && !$(r) && (n(e, X) || n(e.firstChild, J, 1) || e.insertBefore(W.create("br"), e.firstChild), n(e, J) || n(e.lastChild, X, 1) || e.appendChild(W.create("br")))), t.selector && t.inline && !k(t.inline, e) || W.remove(e, 1)
            }
            function H(e, t, n) {
                if (e) for (t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t]; e; e = e[t]) if (1 == e.nodeType || !A(e)) return e
            }
            function P(e, t) {
                function n(e, t) {
                    for (i = e; i; i = i[t]) {
                        if (3 == i.nodeType && 0 !== i.nodeValue.length) return e;
                        if (1 == i.nodeType && !rt(i)) return i
                    }
                    return e
                }
                var i, o, a = new r(W);
                if (e && t && (e = n(e, "previousSibling"), t = n(t, "nextSibling"), a.compare(e, t))) {
                    for (i = e.nextSibling; i && i != t;) o = i, i = i.nextSibling, e.appendChild(o);
                    return W.remove(t), it(ot(t.childNodes), function(t) {
                        e.appendChild(t)
                    }), e
                }
                return t
            }
            function O(t, n) {
                var r, i, o;
                return r = t[n ? "startContainer" : "endContainer"], i = t[n ? "startOffset" : "endOffset"], 1 == r.nodeType && (o = r.childNodes.length - 1, !n && i && i--, r = r.childNodes[i > o ? o : i]), 3 === r.nodeType && n && i >= r.nodeValue.length && (r = new e(r, a.getBody()).next() || r), 3 !== r.nodeType || n || 0 !== i || (r = new e(r, a.getBody()).prev() || r), r
            }
            function I(t, n, r) {
                function i(e) {
                    var t = W.create("span", {
                        id: h,
                        "data-mce-bogus": !0,
                        style: y ? "color:red" : ""
                    });
                    return e && t.appendChild(a.getDoc().createTextNode(Y)), t
                }
                function o(e, t) {
                    for (; e;) {
                        if (3 === e.nodeType && e.nodeValue !== Y || e.childNodes.length > 1) return !1;
                        t && 1 === e.nodeType && t.push(e), e = e.firstChild
                    }
                    return !0
                }
                function l(e) {
                    for (; e;) {
                        if (e.id === h) return e;
                        e = e.parentNode
                    }
                }
                function c(t) {
                    var n;
                    if (t) for (n = new e(t, t), t = n.current(); t; t = n.next()) if (3 === t.nodeType) return t
                }
                function d(e, t) {
                    var n, r;
                    if (e) r = V.getRng(!0), o(e) ? (t !== !1 && (r.setStartBefore(e), r.setEndBefore(e)), W.remove(e)) : (n = c(e), n.nodeValue.charAt(0) === Y && (n = n.deleteData(0, 1)), W.remove(e, 1)), V.setRng(r);
                    else if (e = l(V.getStart()), !e) for (; e = W.get(h);) d(e, !1)
                }
                function u() {
                    var e, t, o, a, s, d, u;
                    e = V.getRng(!0), a = e.startOffset, d = e.startContainer, u = d.nodeValue, t = l(V.getStart()), t && (o = c(t)), u && a > 0 && a < u.length && /\w/.test(u.charAt(a)) && /\w/.test(u.charAt(a - 1)) ? (s = V.getBookmark(), e.collapse(!0), e = D(e, f(n)), e = U.split(e), g(n, r, e), V.moveToBookmark(s)) : (t && o.nodeValue === Y ? g(n, r, t) : (t = i(!0), o = t.firstChild, e.insertNode(t), a = 1, g(n, r, t)), V.setCursorLocation(o, a))
                }
                function p() {
                    var e = V.getRng(!0),
                        t, o, a, l, c, d, u = [],
                        p, m;
                    for (t = e.startContainer, o = e.startOffset, c = t, 3 == t.nodeType && (o != t.nodeValue.length && (l = !0), c = c.parentNode); c;) {
                        if (b(c, n, r)) {
                            d = c;
                            break
                        }
                        c.nextSibling && (l = !0), u.push(c), c = c.parentNode
                    }
                    if (d) if (l) a = V.getBookmark(), e.collapse(!0), e = D(e, f(n), !0), e = U.split(e), v(n, r, e), V.moveToBookmark(a);
                    else {
                        for (m = i(), c = m, p = u.length - 1; p >= 0; p--) c.appendChild(W.clone(u[p], !1)), c = c.firstChild;
                        c.appendChild(W.doc.createTextNode(Y)), c = c.firstChild;
                        var h = W.getParent(d, s);
                        h && W.isEmpty(h) ? d.parentNode.replaceChild(m, d) : W.insertAfter(m, d), V.setCursorLocation(c, 1), W.isEmpty(d) && W.remove(d)
                    }
                }
                function m() {
                    var e;
                    e = l(V.getStart()), e && !W.isEmpty(e) && at(e, function(e) {
                        1 != e.nodeType || e.id === h || W.isEmpty(e) || W.setAttrib(e, "data-mce-bogus", null)
                    }, "childNodes")
                }
                var h = "_mce_caret",
                    y = a.settings.caret_debug;
                a._hasCaretEvents || (nt = function() {
                    var e = [],
                        t;
                    if (o(l(V.getStart()), e)) for (t = e.length; t--;) W.setAttrib(e[t], "data-mce-bogus", "1")
                }, tt = function(e) {
                    var t = e.keyCode;
                    d(), (8 == t || 37 == t || 39 == t) && d(l(V.getStart())), m()
                }, a.on("SetContent", function(e) {
                    e.selection && m()
                }), a._hasCaretEvents = !0), "apply" == t ? u() : p()
            }
            function F(t) {
                var n = t.startContainer,
                    r = t.startOffset,
                    i, o, a, s, l;
                if (3 == n.nodeType && r >= n.nodeValue.length && (r = K(n), n = n.parentNode, i = !0), 1 == n.nodeType) for (s = n.childNodes, n = s[Math.min(r, s.length - 1)], o = new e(n, W.getParent(n, W.isBlock)), (r > s.length - 1 || i) && o.next(), a = o.current(); a; a = o.next()) if (3 == a.nodeType && !A(a)) return l = W.create("a", null, Y), a.parentNode.insertBefore(l, a), t.setStart(a, 0), V.setRng(t), void W.remove(l)
            }
            var z = {},
                W = a.dom,
                V = a.selection,
                U = new t(W),
                q = a.schema.isValidChild,
                $ = W.isBlock,
                j = a.settings.forced_root_block,
                K = W.nodeIndex,
                Y = "\ufeff",
                G = /^(src|href|style)$/,
                X = !1,
                J = !0,
                Q, Z, et = W.getContentEditable,
                tt, nt, rt = n.isBookmarkNode,
                it = i.each,
                ot = i.grep,
                at = i.walk,
                st = i.extend;
            st(this, {
                get: f,
                register: p,
                apply: g,
                remove: v,
                toggle: y,
                match: C,
                matchAll: x,
                matchNode: b,
                canApply: w,
                formatChanged: _,
                getCssText: E
            }), d(), u(), a.on("BeforeGetContent", function() {
                nt && nt()
            }), a.on("mouseup keydown", function(e) {
                tt && tt(e)
            })
        }
    }), r(P, [h, f], function(e, t) {
        var n = t.trim,
            r;
        return r = new RegExp(["<span[^>]+data-mce-bogus[^>]+>[\u200b\ufeff]+<\\/span>", "<div[^>]+data-mce-bogus[^>]+><\\/div>", '\\s?data-mce-selected="[^"]+"'].join("|"), "gi"), function(t) {
            function i() {
                return n(t.getContent({
                    format: "raw",
                    no_events: 1
                }).replace(r, ""))
            }
            function o(e) {
                a.typing = !1, a.add({}, e)
            }
            var a = this,
                s = 0,
                l = [],
                c, d, u = 0;
            return t.on("init", function() {
                a.add()
            }), t.on("BeforeExecCommand", function(e) {
                var t = e.command;
                "Undo" != t && "Redo" != t && "mceRepaint" != t && a.beforeChange()
            }), t.on("ExecCommand", function(e) {
                var t = e.command;
                "Undo" != t && "Redo" != t && "mceRepaint" != t && o(e)
            }), t.on("ObjectResizeStart", function() {
                a.beforeChange()
            }), t.on("SaveContent ObjectResized blur", o), t.on("DragEnd", o), t.on("KeyUp", function(n) {
                var r = n.keyCode;
                (r >= 33 && 36 >= r || r >= 37 && 40 >= r || 45 == r || 13 == r || n.ctrlKey) && (o(), t.nodeChanged()), (46 == r || 8 == r || e.mac && (91 == r || 93 == r)) && t.nodeChanged(), d && a.typing && (t.isDirty() || (t.isNotDirty = !l[0] || i() == l[0].content, t.isNotDirty || t.fire("change", {
                    level: l[0],
                    lastLevel: null
                })), t.fire("TypingUndo"), d = !1, t.nodeChanged())
            }), t.on("KeyDown", function(e) {
                var t = e.keyCode;
                return t >= 33 && 36 >= t || t >= 37 && 40 >= t || 45 == t ? void(a.typing && o(e)) : void((16 > t || t > 20) && 224 != t && 91 != t && !a.typing && (a.beforeChange(), a.typing = !0, a.add({}, e), d = !0))
            }), t.on("MouseDown", function(e) {
                a.typing && o(e)
            }), t.addShortcut("ctrl+z", "", "Undo"), t.addShortcut("ctrl+y,ctrl+shift+z", "", "Redo"), t.on("AddUndo Undo Redo ClearUndos MouseUp", function(e) {
                e.isDefaultPrevented() || t.nodeChanged()
            }), a = {
                data: l,
                typing: !1,
                beforeChange: function() {
                    u || (c = t.selection.getBookmark(2, !0))
                },
                add: function(e, n) {
                    var r, o = t.settings,
                        a;
                    if (e = e || {}, e.content = i(), u || t.removed) return null;
                    if (a = l[s], t.fire("BeforeAddUndo", {
                        level: e,
                        lastLevel: a,
                        originalEvent: n
                    }).isDefaultPrevented()) return null;
                    if (a && a.content == e.content) return null;
                    if (l[s] && (l[s].beforeBookmark = c), o.custom_undo_redo_levels && l.length > o.custom_undo_redo_levels) {
                        for (r = 0; r < l.length - 1; r++) l[r] = l[r + 1];
                        l.length--, s = l.length
                    }
                    e.bookmark = t.selection.getBookmark(2, !0), s < l.length - 1 && (l.length = s + 1), l.push(e), s = l.length - 1;
                    var d = {
                        level: e,
                        lastLevel: a,
                        originalEvent: n
                    };
                    return t.fire("AddUndo", d), s > 0 && (t.isNotDirty = !1, t.fire("change", d)), e
                },
                undo: function() {
                    var e;
                    return a.typing && (a.add(), a.typing = !1), s > 0 && (e = l[--s], 0 === s && (t.isNotDirty = !0), t.setContent(e.content, {
                        format: "raw"
                    }), t.selection.moveToBookmark(e.beforeBookmark), t.fire("undo", {
                        level: e
                    })), e
                },
                redo: function() {
                    var e;
                    return s < l.length - 1 && (e = l[++s], t.setContent(e.content, {
                        format: "raw"
                    }), t.selection.moveToBookmark(e.bookmark), t.fire("redo", {
                        level: e
                    })), e
                },
                clear: function() {
                    l = [], s = 0, a.typing = !1, t.fire("ClearUndos")
                },
                hasUndo: function() {
                    return s > 0 || a.typing && l[0] && i() != l[0].content
                },
                hasRedo: function() {
                    return s < l.length - 1 && !this.typing
                },
                transact: function(e) {
                    a.beforeChange();
                    try {
                        u++, e()
                    } finally {
                        u--
                    }
                    a.add()
                }
            }
        }
    }), r(O, [u, A, h], function(e, t, n) {
        var r = n.ie && n.ie < 11;
        return function(i) {
            function o(o) {
                function f(e) {
                    return e && a.isBlock(e) && !/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName) && !/^(fixed|absolute)/i.test(e.style.position) && "true" !== a.getContentEditable(e)
                }
                function p(e) {
                    var t;
                    a.isBlock(e) && (t = s.getRng(), e.appendChild(a.create("span", null, "\xa0")), s.select(e), e.lastChild.outerHTML = "", s.setRng(t))
                }
                function m(e) {
                    var t = e,
                        n = [],
                        r;
                    if (t) {
                        for (; t = t.firstChild;) {
                            if (a.isBlock(t)) return;
                            1 != t.nodeType || u[t.nodeName.toLowerCase()] || n.push(t)
                        }
                        for (r = n.length; r--;) t = n[r], !t.hasChildNodes() || t.firstChild == t.lastChild && "" === t.firstChild.nodeValue ? a.remove(t) : "A" == t.nodeName && " " === (t.innerText || t.textContent) && a.remove(t)
                    }
                }
                function h(t) {
                    function r(e) {
                        for (; e;) {
                            if (1 == e.nodeType || 3 == e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
                            e = e.nextSibling
                        }
                    }
                    var i, o, l, c = t,
                        d;
                    if (t) {
                        if (n.ie && n.ie < 9 && B && B.firstChild && B.firstChild == B.lastChild && "BR" == B.firstChild.tagName && a.remove(B.firstChild), /^(LI|DT|DD)$/.test(t.nodeName)) {
                            var f = r(t.firstChild);
                            f && /^(UL|OL|DL)$/.test(f.nodeName) && t.insertBefore(a.doc.createTextNode("\xa0"), t.firstChild)
                        }
                        if (l = a.createRng(), n.ie || t.normalize(), t.hasChildNodes()) {
                            for (i = new e(t, t); o = i.current();) {
                                if (3 == o.nodeType) {
                                    l.setStart(o, 0), l.setEnd(o, 0);
                                    break
                                }
                                if (u[o.nodeName.toLowerCase()]) {
                                    l.setStartBefore(o), l.setEndBefore(o);
                                    break
                                }
                                c = o, o = i.next()
                            }
                            o || (l.setStart(c, 0), l.setEnd(c, 0))
                        } else "BR" == t.nodeName ? t.nextSibling && a.isBlock(t.nextSibling) ? ((!D || 9 > D) && (d = a.create("br"), t.parentNode.insertBefore(d, t)), l.setStartBefore(t), l.setEndBefore(t)) : (l.setStartAfter(t), l.setEndAfter(t)) : (l.setStart(t, 0), l.setEnd(t, 0));
                        s.setRng(l), a.remove(d), s.scrollIntoView(t)
                    }
                }
                function g(e) {
                    var t = l.forced_root_block;
                    t && t.toLowerCase() === e.tagName.toLowerCase() && a.setAttribs(e, l.forced_root_block_attrs)
                }
                function v(e) {
                    var t = R,
                        n, i, o, s = d.getTextInlineElements();
                    if (e || "TABLE" == O ? (n = a.create(e || F), g(n)) : n = B.cloneNode(!1), o = n, l.keep_styles !== !1) do
                    if (s[t.nodeName]) {
                        if ("_mce_caret" == t.id) continue;
                        i = t.cloneNode(!1), a.setAttrib(i, "id", ""), n.hasChildNodes() ? (i.appendChild(n.firstChild), n.appendChild(i)) : (o = i, n.appendChild(i))
                    }
                    while (t = t.parentNode);
                    return r || (o.innerHTML = '<br data-mce-bogus="1">'), n
                }
                function y(t) {
                    var n, r, i;
                    if (3 == R.nodeType && (t ? A > 0 : A < R.nodeValue.length)) return !1;
                    if (R.parentNode == B && z && !t) return !0;
                    if (t && 1 == R.nodeType && R == B.firstChild) return !0;
                    if ("TABLE" === R.nodeName || R.previousSibling && "TABLE" == R.previousSibling.nodeName) return z && !t || !z && t;
                    for (n = new e(R, B), 3 == R.nodeType && (t && 0 === A ? n.prev() : t || A != R.nodeValue.length || n.next()); r = n.current();) {
                        if (1 === r.nodeType) {
                            if (!r.getAttribute("data-mce-bogus") && (i = r.nodeName.toLowerCase(), u[i] && "br" !== i)) return !1
                        } else if (3 === r.nodeType && !/^[ \t\r\n]*$/.test(r.nodeValue)) return !1;
                        t ? n.prev() : n.next()
                    }
                    return !0
                }
                function b(e, t) {
                    var n, r, o, s, l, c, u = F || "P";
                    if (r = a.getParent(e, a.isBlock), c = i.getBody().nodeName.toLowerCase(), !r || !f(r)) {
                        if (r = r || T, !r.hasChildNodes()) return n = a.create(u), g(n), r.appendChild(n), k.setStart(n, 0), k.setEnd(n, 0), n;
                        for (s = e; s.parentNode != r;) s = s.parentNode;
                        for (; s && !a.isBlock(s);) o = s, s = s.previousSibling;
                        if (o && d.isValidChild(c, u.toLowerCase())) {
                            for (n = a.create(u), g(n), o.parentNode.insertBefore(n, o), s = o; s && !a.isBlock(s);) l = s.nextSibling, n.appendChild(s), s = l;
                            k.setStart(e, t), k.setEnd(e, t)
                        }
                    }
                    return e
                }
                function C() {
                    function e(e) {
                        for (var t = P[e ? "firstChild" : "lastChild"]; t && 1 != t.nodeType;) t = t[e ? "nextSibling" : "previousSibling"];
                        return t === B
                    }
                    function t() {
                        var e = P.parentNode;
                        return /^(LI|DT|DD)$/.test(e.nodeName) ? e : P
                    }
                    var n = P.parentNode.nodeName;
                    /^(OL|UL|LI)$/.test(n) && (F = "LI"), M = F ? v(F) : a.create("BR"), e(!0) && e() ? "LI" == n ? a.insertAfter(M, t()) : a.replace(M, P) : e(!0) ? "LI" == n ? (a.insertAfter(M, t()), M.appendChild(a.doc.createTextNode(" ")), M.appendChild(P)) : P.parentNode.insertBefore(M, P) : e() ? (a.insertAfter(M, t()), p(M)) : (P = t(), S = k.cloneRange(), S.setStartAfter(B), S.setEndAfter(P), H = S.extractContents(), "LI" == F && "LI" == H.firstChild.nodeName ? (M = H.firstChild, a.insertAfter(H, P)) : (a.insertAfter(H, P), a.insertAfter(M, P))), a.remove(B), h(M), c.add()
                }
                function x() {
                    for (var t = new e(R, B), n; n = t.next();) if (u[n.nodeName.toLowerCase()] || n.length > 0) return !0
                }
                function w() {
                    var e, t, n;
                    R && 3 == R.nodeType && A >= R.nodeValue.length && (r || x() || (e = a.create("br"), k.insertNode(e), k.setStartAfter(e), k.setEndAfter(e), t = !0)), e = a.create("br"), k.insertNode(e), r && "PRE" == O && (!D || 8 > D) && e.parentNode.insertBefore(a.doc.createTextNode("\r"), e), n = a.create("span", {}, "&nbsp;"), e.parentNode.insertBefore(n, e), s.scrollIntoView(n), a.remove(n), t ? (k.setStartBefore(e), k.setEndBefore(e)) : (k.setStartAfter(e), k.setEndAfter(e)), s.setRng(k), c.add()
                }
                function _(e) {
                    do 3 === e.nodeType && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild;
                    while (e)
                }
                function E(e) {
                    var t = a.getRoot(),
                        n, r;
                    for (n = e; n !== t && "false" !== a.getContentEditable(n);)"true" === a.getContentEditable(n) && (r = n), n = n.parentNode;
                    return n !== t ? r : t
                }
                function N(e) {
                    var t;
                    r || (e.normalize(), t = e.lastChild, (!t || /^(left|right)$/gi.test(a.getStyle(t, "float", !0))) && a.add(e, "br"))
                }
                var k, S, T, R, A, B, D, L, M, H, P, O, I, F, z;
                if (k = s.getRng(!0), !o.isDefaultPrevented()) {
                    if (!k.collapsed) return void i.execCommand("Delete");
                    if (new t(a).normalize(k), R = k.startContainer, A = k.startOffset, F = (l.force_p_newlines ? "p" : "") || l.forced_root_block, F = F ? F.toUpperCase() : "", D = a.doc.documentMode, L = o.shiftKey, 1 == R.nodeType && R.hasChildNodes() && (z = A > R.childNodes.length - 1, R = R.childNodes[Math.min(A, R.childNodes.length - 1)] || R, A = z && 3 == R.nodeType ? R.nodeValue.length : 0), T = E(R)) {
                        if (c.beforeChange(), !a.isBlock(T) && T != a.getRoot()) return void((!F || L) && w());
                        if ((F && !L || !F && L) && (R = b(R, A)), B = a.getParent(R, a.isBlock), P = B ? a.getParent(B.parentNode, a.isBlock) : null, O = B ? B.nodeName.toUpperCase() : "", I = P ? P.nodeName.toUpperCase() : "", "LI" != I || o.ctrlKey || (B = P, O = I), /^(LI|DT|DD)$/.test(O)) {
                            if (!F && L) return void w();
                            if (a.isEmpty(B)) return void C()
                        }
                        if ("PRE" == O && l.br_in_pre !== !1) {
                            if (!L) return void w()
                        } else if (!F && !L && "LI" != O || F && L) return void w();
                        F && B === i.getBody() || (F = F || "P", y() ? (M = /^(H[1-6]|PRE|FIGURE)$/.test(O) && "HGROUP" != I ? v(F) : v(), l.end_container_on_empty_block && f(P) && a.isEmpty(B) ? M = a.split(P, B) : a.insertAfter(M, B), h(M)) : y(!0) ? (M = B.parentNode.insertBefore(v(), B), p(M), h(B)) : (S = k.cloneRange(), S.setEndAfter(B), H = S.extractContents(), _(H), M = H.firstChild, a.insertAfter(H, B), m(M), N(B), h(M)), a.setAttrib(M, "id", ""), i.fire("NewBlock", {
                            newBlock: M
                        }), c.add())
                    }
                }
            }
            var a = i.dom,
                s = i.selection,
                l = i.settings,
                c = i.undoManager,
                d = i.schema,
                u = d.getNonEmptyElements();
            i.on("keydown", function(e) {
                13 == e.keyCode && o(e) !== !1 && e.preventDefault()
            })
        }
    }), r(I, [], function() {
        return function(e) {
            function t() {
                var t = i.getStart(),
                    s = e.getBody(),
                    l, c, d, u, f, p, m, h = -16777215,
                    g, v, y, b, C;
                if (C = n.forced_root_block, t && 1 === t.nodeType && C) {
                    for (; t && t != s;) {
                        if (a[t.nodeName]) return;
                        t = t.parentNode
                    }
                    if (l = i.getRng(), l.setStart) {
                        c = l.startContainer, d = l.startOffset, u = l.endContainer, f = l.endOffset;
                        try {
                            v = e.getDoc().activeElement === s
                        } catch (x) {}
                    } else l.item && (t = l.item(0), l = e.getDoc().body.createTextRange(), l.moveToElementText(t)), v = l.parentElement().ownerDocument === e.getDoc(), y = l.duplicate(), y.collapse(!0), d = -1 * y.move("character", h), y.collapsed || (y = l.duplicate(), y.collapse(!1), f = -1 * y.move("character", h) - d);
                    for (t = s.firstChild, b = s.nodeName.toLowerCase(); t;) if ((3 === t.nodeType || 1 == t.nodeType && !a[t.nodeName]) && o.isValidChild(b, C.toLowerCase())) {
                        if (3 === t.nodeType && 0 === t.nodeValue.length) {
                            m = t, t = t.nextSibling, r.remove(m);
                            continue
                        }
                        p || (p = r.create(C, e.settings.forced_root_block_attrs), t.parentNode.insertBefore(p, t), g = !0), m = t, t = t.nextSibling, p.appendChild(m)
                    } else p = null, t = t.nextSibling;
                    if (g && v) {
                        if (l.setStart) l.setStart(c, d), l.setEnd(u, f), i.setRng(l);
                        else try {
                            l = e.getDoc().body.createTextRange(), l.moveToElementText(s), l.collapse(!0), l.moveStart("character", d), f > 0 && l.moveEnd("character", f), l.select()
                        } catch (x) {}
                        e.nodeChanged()
                    }
                }
            }
            var n = e.settings,
                r = e.dom,
                i = e.selection,
                o = e.schema,
                a = o.getBlockElements();
            n.forced_root_block && e.on("NodeChange", t)
        }
    }), r(F, [N, h, f, L], function(e, n, r, i) {
        var o = r.each,
            a = r.extend,
            s = r.map,
            l = r.inArray,
            c = r.explode,
            d = n.gecko,
            u = n.ie,
            f = !0,
            p = !1;
        return function(r) {
            function m(e, t, n) {
                var r;
                return e = e.toLowerCase(), (r = N.exec[e]) ? (r(e, t, n), f) : p
            }
            function h(e) {
                var t;
                return e = e.toLowerCase(), (t = N.state[e]) ? t(e) : -1
            }
            function g(e) {
                var t;
                return e = e.toLowerCase(), (t = N.value[e]) ? t(e) : p
            }
            function v(e, t) {
                t = t || "exec", o(e, function(e, n) {
                    o(n.toLowerCase().split(","), function(n) {
                        N[t][n] = e
                    })
                })
            }
            function y(e, n, i) {
                return n === t && (n = p), i === t && (i = null), r.getDoc().execCommand(e, n, i)
            }
            function b(e) {
                return S.match(e)
            }
            function C(e, n) {
                S.toggle(e, n ? {
                    value: n
                } : t), r.nodeChanged()
            }
            function x(e) {
                T = E.getBookmark(e)
            }
            function w() {
                E.moveToBookmark(T)
            }
            var _ = r.dom,
                E = r.selection,
                N = {
                    state: {},
                    exec: {},
                    value: {}
                },
                k = r.settings,
                S = r.formatter,
                T;
            a(this, {
                execCommand: m,
                queryCommandState: h,
                queryCommandValue: g,
                addCommands: v
            }), v({
                "mceResetDesignMode,mceBeginUndoLevel": function() {},
                "mceEndUndoLevel,mceAddUndoLevel": function() {
                    r.undoManager.add()
                },
                "Cut,Copy,Paste": function(e) {
                    var t = r.getDoc(),
                        i;
                    try {
                        y(e)
                    } catch (o) {
                        i = f
                    }
                    if (i || !t.queryCommandSupported(e)) {
                        var a = r.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                        n.mac && (a = a.replace(/Ctrl\+/g, "\u2318+")), r.windowManager.alert(a)
                    }
                },
                unlink: function() {
                    if (E.isCollapsed()) {
                        var e = E.getNode();
                        return void("A" == e.tagName && r.dom.remove(e, !0))
                    }
                    S.remove("link")
                },
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function(e) {
                    var t = e.substring(7);
                    "full" == t && (t = "justify"), o("left,center,right,justify".split(","), function(e) {
                        t != e && S.remove("align" + e)
                    }), C("align" + t), m("mceRepaint")
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t, n;
                    y(e), t = _.getParent(E.getNode(), "ol,ul"), t && (n = t.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (x(), _.split(n, t), w()))
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                    C(e)
                },
                "ForeColor,HiliteColor,FontName": function(e, t, n) {
                    C(e, n)
                },
                FontSize: function(e, t, n) {
                    var r, i;
                    n >= 1 && 7 >= n && (i = c(k.font_size_style_values), r = c(k.font_size_classes), n = r ? r[n - 1] || n : i[n - 1] || n), C(e, n)
                },
                RemoveFormat: function(e) {
                    S.remove(e)
                },
                mceBlockQuote: function() {
                    C("blockquote")
                },
                FormatBlock: function(e, t, n) {
                    return C(n || "p")
                },
                mceCleanup: function() {
                    var e = E.getBookmark();
                    r.setContent(r.getContent({
                        cleanup: f
                    }), {
                        cleanup: f
                    }), E.moveToBookmark(e)
                },
                mceRemoveNode: function(e, t, n) {
                    var i = n || E.getNode();
                    i != r.getBody() && (x(), r.dom.remove(i, f), w())
                },
                mceSelectNodeDepth: function(e, t, n) {
                    var i = 0;
                    _.getParent(E.getNode(), function(e) {
                        return 1 == e.nodeType && i++ == n ? (E.select(e), p) : void 0
                    }, r.getBody())
                },
                mceSelectNode: function(e, t, n) {
                    E.select(n)
                },
                mceInsertContent: function(t, n, a) {
                    function s(e) {
                        function t(e) {
                            return r[e] && 3 == r[e].nodeType
                        }
                        var n, r, i;
                        return n = E.getRng(!0), r = n.startContainer, i = n.startOffset, 3 == r.nodeType && (i > 0 ? e = e.replace(/^&nbsp;/, " ") : t("previousSibling") || (e = e.replace(/^ /, "&nbsp;")), i < r.length ? e = e.replace(/&nbsp;(<br>|)$/, " ") : t("nextSibling") || (e = e.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), e
                    }
                    function l(e) {
                        if (w) for (b = e.firstChild; b; b = b.walk(!0)) N[b.name] && b.attr("data-mce-new", "true")
                    }
                    function c() {
                        if (w) {
                            var e = r.getBody(),
                                t = new i(_);
                            o(_.select("*[data-mce-new]"), function(n) {
                                n.removeAttribute("data-mce-new");
                                for (var r = n.parentNode; r && r != e; r = r.parentNode) t.compare(r, n) && _.remove(n, !0)
                            })
                        }
                    }
                    var d, f, p, m, h, g, v, y, b, C, x, w, N = r.schema.getTextInlineElements();
                    "string" != typeof a && (w = a.merge, a = a.content), /^ | $/.test(a) && (a = s(a)), d = r.parser, f = new e({}, r.schema), x = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#200B;</span>', g = {
                        content: a,
                        format: "html",
                        selection: !0
                    }, r.fire("BeforeSetContent", g), a = g.content, -1 == a.indexOf("{$caret}") && (a += "{$caret}"), a = a.replace(/\{\$caret\}/, x), y = E.getRng();
                    var k = y.startContainer || (y.parentElement ? y.parentElement() : null),
                        S = r.getBody();
                    k === S && E.isCollapsed() && _.isBlock(S.firstChild) && _.isEmpty(S.firstChild) && (y = _.createRng(), y.setStart(S.firstChild, 0), y.setEnd(S.firstChild, 0), E.setRng(y)), E.isCollapsed() || r.getDoc().execCommand("Delete", !1, null), p = E.getNode();
                    var T = {
                        context: p.nodeName.toLowerCase()
                    };
                    if (h = d.parse(a, T), l(h), b = h.lastChild, "mce_marker" == b.attr("id")) for (v = b, b = b.prev; b; b = b.walk(!0)) if (3 == b.type || !_.isBlock(b.name)) {
                        b.parent.insert(v, b, "br" === b.name);
                        break
                    }
                    if (T.invalid) {
                        for (E.setContent(x), p = E.getNode(), m = r.getBody(), 9 == p.nodeType ? p = b = m : b = p; b !== m;) p = b, b = b.parentNode;
                        a = p == m ? m.innerHTML : _.getOuterHTML(p), a = f.serialize(d.parse(a.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function() {
                            return f.serialize(h)
                        }))), p == m ? _.setHTML(m, a) : _.setOuterHTML(p, a)
                    } else a = f.serialize(h), b = p.firstChild, C = p.lastChild, !b || b === C && "BR" === b.nodeName ? _.setHTML(p, a) : E.setContent(a);
                    c(), v = _.get("mce_marker"), E.scrollIntoView(v), y = _.createRng(), b = v.previousSibling, b && 3 == b.nodeType ? (y.setStart(b, b.nodeValue.length), u || (C = v.nextSibling, C && 3 == C.nodeType && (b.appendData(C.data), C.parentNode.removeChild(C)))) : (y.setStartBefore(v), y.setEndBefore(v)), _.remove(v), E.setRng(y), r.fire("SetContent", g), r.addVisual()
                },
                mceInsertRawHTML: function(e, t, n) {
                    E.setContent("tiny_mce_marker"), r.setContent(r.getContent().replace(/tiny_mce_marker/g, function() {
                        return n
                    }))
                },
                mceToggleFormat: function(e, t, n) {
                    C(n)
                },
                mceSetContent: function(e, t, n) {
                    r.setContent(n)
                },
                "Indent,Outdent": function(e) {
                    var t, n, i;
                    t = k.indentation, n = /[a-z%]+$/i.exec(t), t = parseInt(t, 10), h("InsertUnorderedList") || h("InsertOrderedList") ? y(e) : (k.forced_root_block || _.getParent(E.getNode(), _.isBlock) || S.apply("div"), o(E.getSelectedBlocks(), function(o) {
                        if ("LI" != o.nodeName) {
                            var a = r.getParam("indent_use_margin", !1) ? "margin" : "padding";
                            a += "rtl" == _.getStyle(o, "direction", !0) ? "Right" : "Left", "outdent" == e ? (i = Math.max(0, parseInt(o.style[a] || 0, 10) - t), _.setStyle(o, a, i ? i + n : "")) : (i = parseInt(o.style[a] || 0, 10) + t + n, _.setStyle(o, a, i))
                        }
                    }))
                },
                mceRepaint: function() {
                    if (d) try {
                        x(f), E.getSel() && E.getSel().selectAllChildren(r.getBody()), E.collapse(f), w()
                    } catch (e) {}
                },
                InsertHorizontalRule: function() {
                    r.execCommand("mceInsertContent", !1, "<hr />")
                },
                mceToggleVisualAid: function() {
                    r.hasVisual = !r.hasVisual, r.addVisual()
                },
                mceReplaceContent: function(e, t, n) {
                    r.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, E.getContent({
                        format: "text"
                    })))
                },
                mceInsertLink: function(e, t, n) {
                    var r;
                    "string" == typeof n && (n = {
                        href: n
                    }), r = _.getParent(E.getNode(), "a"), n.href = n.href.replace(" ", "%20"), r && n.href || S.remove("link"), n.href && S.apply("link", n, r)
                },
                selectAll: function() {
                    var e = _.getRoot(),
                        t;
                    E.getRng().setStart ? (t = _.createRng(), t.setStart(e, 0), t.setEnd(e, e.childNodes.length), E.setRng(t)) : (t = E.getRng(), t.item || (t.moveToElementText(e), t.select()))
                },
                "delete": function() {
                    y("Delete");
                    var e = r.getBody();
                    _.isEmpty(e) && (r.setContent(""), e.firstChild && _.isBlock(e.firstChild) ? r.selection.setCursorLocation(e.firstChild, 0) : r.selection.setCursorLocation(e, 0))
                },
                mceNewDocument: function() {
                    r.setContent("")
                }
            }), v({
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function(e) {
                    var t = "align" + e.substring(7),
                        n = E.isCollapsed() ? [_.getParent(E.getNode(), _.isBlock)] : E.getSelectedBlocks(),
                        r = s(n, function(e) {
                            return !!S.matchNode(e, t)
                        });
                    return -1 !== l(r, f)
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                    return b(e)
                },
                mceBlockQuote: function() {
                    return b("blockquote")
                },
                Outdent: function() {
                    var e;
                    if (k.inline_styles) {
                        if ((e = _.getParent(E.getStart(), _.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0) return f;
                        if ((e = _.getParent(E.getEnd(), _.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0) return f
                    }
                    return h("InsertUnorderedList") || h("InsertOrderedList") || !k.inline_styles && !! _.getParent(E.getNode(), "BLOCKQUOTE")
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t = _.getParent(E.getNode(), "ul,ol");
                    return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
                }
            }, "state"), v({
                "FontSize,FontName": function(e) {
                    var t = 0,
                        n;
                    return (n = _.getParent(E.getNode(), "span")) && (t = "fontsize" == e ? n.style.fontSize : n.style.fontFamily.replace(/, /g, ",").replace(/[\'\"]/g, "").toLowerCase()), t
                }
            }, "value"), v({
                Undo: function() {
                    r.undoManager.undo()
                },
                Redo: function() {
                    r.undoManager.redo()
                }
            })
        }
    }), r(z, [f], function(e) {
        function t(e, i) {
            var o = this,
                a, s;
            if (e = r(e), i = o.settings = i || {}, a = i.base_uri, /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) return void(o.source = e);
            var l = 0 === e.indexOf("//");
            0 !== e.indexOf("/") || l || (e = (a ? a.protocol || "http" : "http") + "://mce_host" + e), /^[\w\-]*:?\/\//.test(e) || (s = i.base_uri ? i.base_uri.path : new t(location.href).directory, "" === i.base_uri.protocol ? e = "//mce_host" + o.toAbsPath(s, e) : (e = /([^#?]*)([#?]?.*)/.exec(e), e = (a && a.protocol || "http") + "://mce_host" + o.toAbsPath(s, e[1]) + e[2])), e = e.replace(/@@/g, "(mce_at)"), e = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e), n(["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], function(t, n) {
                var r = e[n];
                r && (r = r.replace(/\(mce_at\)/g, "@@")), o[t] = r
            }), a && (o.protocol || (o.protocol = a.protocol), o.userInfo || (o.userInfo = a.userInfo), o.port || "mce_host" !== o.host || (o.port = a.port), o.host && "mce_host" !== o.host || (o.host = a.host), o.source = ""), l && (o.protocol = "")
        }
        var n = e.each,
            r = e.trim,
            i = {
                ftp: 21,
                http: 80,
                https: 443,
                mailto: 25
            };
        return t.prototype = {
            setPath: function(e) {
                var t = this;
                e = /^(.*?)\/?(\w+)?$/.exec(e), t.path = e[0], t.directory = e[1], t.file = e[2], t.source = "", t.getURI()
            },
            toRelative: function(e) {
                var n = this,
                    r;
                if ("./" === e) return e;
                if (e = new t(e, {
                    base_uri: n
                }), "mce_host" != e.host && n.host != e.host && e.host || n.port != e.port || n.protocol != e.protocol && "" !== e.protocol) return e.getURI();
                var i = n.getURI(),
                    o = e.getURI();
                return i == o || "/" == i.charAt(i.length - 1) && i.substr(0, i.length - 1) == o ? i : (r = n.toRelPath(n.path, e.path), e.query && (r += "?" + e.query), e.anchor && (r += "#" + e.anchor), r)
            },
            toAbsolute: function(e, n) {
                return e = new t(e, {
                    base_uri: this
                }), e.getURI(n && this.isSameOrigin(e))
            },
            isSameOrigin: function(e) {
                if (this.host == e.host && this.protocol == e.protocol) {
                    if (this.port == e.port) return !0;
                    var t = i[this.protocol];
                    if (t && (this.port || t) == (e.port || t)) return !0
                }
                return !1
            },
            toRelPath: function(e, t) {
                var n, r = 0,
                    i = "",
                    o, a;
                if (e = e.substring(0, e.lastIndexOf("/")), e = e.split("/"), n = t.split("/"), e.length >= n.length) for (o = 0, a = e.length; a > o; o++) if (o >= n.length || e[o] != n[o]) {
                    r = o + 1;
                    break
                }
                if (e.length < n.length) for (o = 0, a = n.length; a > o; o++) if (o >= e.length || e[o] != n[o]) {
                    r = o + 1;
                    break
                }
                if (1 === r) return t;
                for (o = 0, a = e.length - (r - 1); a > o; o++) i += "../";
                for (o = r - 1, a = n.length; a > o; o++) i += o != r - 1 ? "/" + n[o] : n[o];
                return i
            },
            toAbsPath: function(e, t) {
                var r, i = 0,
                    o = [],
                    a, s;
                for (a = /\/$/.test(t) ? "/" : "", e = e.split("/"), t = t.split("/"), n(e, function(e) {
                    e && o.push(e)
                }), e = o, r = t.length - 1, o = []; r >= 0; r--) 0 !== t[r].length && "." !== t[r] && (".." !== t[r] ? i > 0 ? i-- : o.push(t[r]) : i++);
                return r = e.length - i, s = 0 >= r ? o.reverse().join("/") : e.slice(0, r).join("/") + "/" + o.reverse().join("/"), 0 !== s.indexOf("/") && (s = "/" + s), a && s.lastIndexOf("/") !== s.length - 1 && (s += a), s
            },
            getURI: function(e) {
                var t, n = this;
                return (!n.source || e) && (t = "", e || (t += n.protocol ? n.protocol + "://" : "//", n.userInfo && (t += n.userInfo + "@"), n.host && (t += n.host), n.port && (t += ":" + n.port)), n.path && (t += n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), n.source = t), n.source
            }
        }, t
    }), r(W, [f], function(e) {
        function t() {}
        var n = e.each,
            r = e.extend,
            i, o;
        return t.extend = i = function(e) {
            function t() {
                var e, t, n, r = this;
                if (!o && (r.init && r.init.apply(r, arguments), t = r.Mixins)) for (e = t.length; e--;) n = t[e], n.init && n.init.apply(r, arguments)
            }
            function a() {
                return this
            }
            function s(e, t) {
                return function() {
                    var n = this,
                        r = n._super,
                        i;
                    return n._super = c[e], i = t.apply(n, arguments), n._super = r, i
                }
            }
            var l = this,
                c = l.prototype,
                d, u, f;
            o = !0, d = new l, o = !1, e.Mixins && (n(e.Mixins, function(t) {
                t = t;
                for (var n in t)"init" !== n && (e[n] = t[n])
            }), c.Mixins && (e.Mixins = c.Mixins.concat(e.Mixins))), e.Methods && n(e.Methods.split(","), function(t) {
                e[t] = a
            }), e.Properties && n(e.Properties.split(","), function(t) {
                var n = "_" + t;
                e[t] = function(e) {
                    var t = this,
                        r;
                    return e !== r ? (t[n] = e, t) : t[n]
                }
            }), e.Statics && n(e.Statics, function(e, n) {
                t[n] = e
            }), e.Defaults && c.Defaults && (e.Defaults = r({}, c.Defaults, e.Defaults));
            for (u in e) f = e[u], d[u] = "function" == typeof f && c[u] ? s(u, f) : f;
            return t.prototype = d, t.constructor = t, t.extend = i, t
        }, t
    }), r(V, [f], function(e) {
        function t(e) {
            function t() {
                return !1
            }
            function n() {
                return !0
            }
            function r(r, i) {
                var o, a, s, d;
                if (r = r.toLowerCase(), i = i || {}, i.type = r, i.target || (i.target = l), i.preventDefault || (i.preventDefault = function() {
                    i.isDefaultPrevented = n
                }, i.stopPropagation = function() {
                    i.isPropagationStopped = n
                }, i.stopImmediatePropagation = function() {
                    i.isImmediatePropagationStopped = n
                }, i.isDefaultPrevented = t, i.isPropagationStopped = t, i.isImmediatePropagationStopped = t), e.beforeFire && e.beforeFire(i), o = c[r]) for (a = 0, s = o.length; s > a; a++) {
                    if (o[a] = d = o[a], i.isImmediatePropagationStopped()) return i.stopPropagation(), i;
                    if (d.call(l, i) === !1) return i.preventDefault(), i
                }
                return i
            }
            function i(e, n, r) {
                var i, o, a;
                if (n === !1 && (n = t), n) for (o = e.toLowerCase().split(" "), a = o.length; a--;) e = o[a], i = c[e], i || (i = c[e] = [], d(e, !0)), r ? i.unshift(n) : i.push(n);
                return s
            }
            function o(e, t) {
                var n, r, i, o, a;
                if (e) for (o = e.toLowerCase().split(" "), n = o.length; n--;) {
                    if (e = o[n], r = c[e], !e) {
                        for (i in c) d(i, !1), delete c[i];
                        return s
                    }
                    if (r) {
                        if (t) for (a = r.length; a--;) r[a] === t && r.splice(a, 1);
                        else r.length = 0;
                        r.length || (d(e, !1), delete c[e])
                    }
                } else {
                    for (e in c) d(e, !1);
                    c = {}
                }
                return s
            }
            function a(e) {
                return e = e.toLowerCase(), !(!c[e] || 0 === c[e].length)
            }
            var s = this,
                l, c = {},
                d;
            e = e || {}, l = e.scope || s, d = e.toggleEvent || t, s.fire = r, s.on = i, s.off = o, s.has = a
        }
        var n = e.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate", " ");
        return t.isNative = function(e) {
            return !!n[e.toLowerCase()]
        }, t
    }), r(U, [W], function(e) {
        function t(e) {
            for (var t = [], n = e.length, r; n--;) r = e[n], r.__checked || (t.push(r), r.__checked = 1);
            for (n = t.length; n--;) delete t[n].__checked;
            return t
        }
        var n = /^([\w\\*]+)?(?:#([\w\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i,
            r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            i = /^\s*|\s*$/g,
            o, a = e.extend({
                init: function(e) {
                    function t(e) {
                        return e ? (e = e.toLowerCase(), function(t) {
                            return "*" === e || t.type === e
                        }) : void 0
                    }
                    function o(e) {
                        return e ?
                        function(t) {
                            return t._name === e
                        } : void 0
                    }
                    function a(e) {
                        return e ? (e = e.split("."), function(t) {
                            for (var n = e.length; n--;) if (!t.hasClass(e[n])) return !1;
                            return !0
                        }) : void 0
                    }
                    function s(e, t, n) {
                        return e ?
                        function(r) {
                            var i = r[e] ? r[e]() : "";
                            return t ? "=" === t ? i === n : "*=" === t ? i.indexOf(n) >= 0 : "~=" === t ? (" " + i + " ").indexOf(" " + n + " ") >= 0 : "!=" === t ? i != n : "^=" === t ? 0 === i.indexOf(n) : "$=" === t ? i.substr(i.length - n.length) === n : !1 : !! n
                        } : void 0
                    }
                    function l(e) {
                        var t;
                        return e ? (e = /(?:not\((.+)\))|(.+)/i.exec(e), e[1] ? (t = d(e[1], []), function(e) {
                            return !u(e, t)
                        }) : (e = e[2], function(t, n, r) {
                            return "first" === e ? 0 === n : "last" === e ? n === r - 1 : "even" === e ? n % 2 === 0 : "odd" === e ? n % 2 === 1 : t[e] ? t[e]() : !1
                        })) : void 0
                    }
                    function c(e, r, c) {
                        function d(e) {
                            e && r.push(e)
                        }
                        var u;
                        return u = n.exec(e.replace(i, "")), d(t(u[1])), d(o(u[2])), d(a(u[3])), d(s(u[4], u[5], u[6])), d(l(u[7])), r.psuedo = !! u[7], r.direct = c, r
                    }
                    function d(e, t) {
                        var n = [],
                            i, o, a;
                        do
                        if (r.exec(""), o = r.exec(e), o && (e = o[3], n.push(o[1]), o[2])) {
                            i = o[3];
                            break
                        }
                        while (o);
                        for (i && d(i, t), e = [], a = 0; a < n.length; a++)">" != n[a] && e.push(c(n[a], [], ">" === n[a - 1]));
                        return t.push(e), t
                    }
                    var u = this.match;
                    this._selectors = d(e, [])
                },
                match: function(e, t) {
                    var n, r, i, o, a, s, l, c, d, u, f, p, m;
                    for (t = t || this._selectors, n = 0, r = t.length; r > n; n++) {
                        for (a = t[n], o = a.length, m = e, p = 0, i = o - 1; i >= 0; i--) for (c = a[i]; m;) {
                            if (c.psuedo) for (f = m.parent().items(), d = u = f.length; d-- && f[d] !== m;);
                            for (s = 0, l = c.length; l > s; s++) if (!c[s](m, d, u)) {
                                s = l + 1;
                                break
                            }
                            if (s === l) {
                                p++;
                                break
                            }
                            if (i === o - 1) break;
                            m = m.parent()
                        }
                        if (p === o) return !0
                    }
                    return !1
                },
                find: function(e) {
                    function n(e, t, i) {
                        var o, a, s, l, c, d = t[i];
                        for (o = 0, a = e.length; a > o; o++) {
                            for (c = e[o], s = 0, l = d.length; l > s; s++) if (!d[s](c, o, a)) {
                                s = l + 1;
                                break
                            }
                            if (s === l) i == t.length - 1 ? r.push(c) : c.items && n(c.items(), t, i + 1);
                            else if (d.direct) return;
                            c.items && n(c.items(), t, i)
                        }
                    }
                    var r = [],
                        i, s, l = this._selectors;
                    if (e.items) {
                        for (i = 0, s = l.length; s > i; i++) n(e.items(), l[i], 0);
                        s > 1 && (r = t(r))
                    }
                    return o || (o = a.Collection), new o(r)
                }
            });
        return a
    }), r(q, [f, U, W], function(e, t, n) {
        var r, i, o = Array.prototype.push,
            a = Array.prototype.slice;
        return i = {
            length: 0,
            init: function(e) {
                e && this.add(e)
            },
            add: function(t) {
                var n = this;
                return e.isArray(t) ? o.apply(n, t) : t instanceof r ? n.add(t.toArray()) : o.call(n, t), n
            },
            set: function(e) {
                var t = this,
                    n = t.length,
                    r;
                for (t.length = 0, t.add(e), r = t.length; n > r; r++) delete t[r];
                return t
            },
            filter: function(e) {
                var n = this,
                    i, o, a = [],
                    s, l;
                for ("string" == typeof e ? (e = new t(e), l = function(t) {
                    return e.match(t)
                }) : l = e, i = 0, o = n.length; o > i; i++) s = n[i], l(s) && a.push(s);
                return new r(a)
            },
            slice: function() {
                return new r(a.apply(this, arguments))
            },
            eq: function(e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            },
            each: function(t) {
                return e.each(this, t), this
            },
            toArray: function() {
                return e.toArray(this)
            },
            indexOf: function(e) {
                for (var t = this, n = t.length; n-- && t[n] !== e;);
                return n
            },
            reverse: function() {
                return new r(e.toArray(this).reverse())
            },
            hasClass: function(e) {
                return this[0] ? this[0].hasClass(e) : !1
            },
            prop: function(e, t) {
                var n = this,
                    r, i;
                return t !== r ? (n.each(function(n) {
                    n[e] && n[e](t)
                }), n) : (i = n[0], i && i[e] ? i[e]() : void 0)
            },
            exec: function(t) {
                var n = this,
                    r = e.toArray(arguments).slice(1);
                return n.each(function(e) {
                    e[t] && e[t].apply(e, r)
                }), n
            },
            remove: function() {
                for (var e = this.length; e--;) this[e].remove();
                return this
            }
        }, e.each("fire on off show hide addClass removeClass append prepend before after reflow".split(" "), function(t) {
            i[t] = function() {
                var n = e.toArray(arguments);
                return this.each(function(e) {
                    t in e && e[t].apply(e, n)
                }), this
            }
        }), e.each("text name disabled active selected checked visible parent value data".split(" "), function(e) {
            i[e] = function(t) {
                return this.prop(e, t)
            }
        }), r = n.extend(i), t.Collection = r, r
    }), r($, [f, v], function(e, t) {
        var n = 0;
        return {
            id: function() {
                return "mceu_" + n++
            },
            createFragment: function(e) {
                return t.DOM.createFragment(e)
            },
            getWindowSize: function() {
                return t.DOM.getViewPort()
            },
            getSize: function(e) {
                var t, n;
                if (e.getBoundingClientRect) {
                    var r = e.getBoundingClientRect();
                    t = Math.max(r.width || r.right - r.left, e.offsetWidth), n = Math.max(r.height || r.bottom - r.bottom, e.offsetHeight)
                } else t = e.offsetWidth, n = e.offsetHeight;
                return {
                    width: t,
                    height: n
                }
            },
            getPos: function(e, n) {
                return t.DOM.getPos(e, n)
            },
            getViewPort: function(e) {
                return t.DOM.getViewPort(e)
            },
            get: function(e) {
                return document.getElementById(e)
            },
            addClass: function(e, n) {
                return t.DOM.addClass(e, n)
            },
            removeClass: function(e, n) {
                return t.DOM.removeClass(e, n)
            },
            hasClass: function(e, n) {
                return t.DOM.hasClass(e, n)
            },
            toggleClass: function(e, n, r) {
                return t.DOM.toggleClass(e, n, r)
            },
            css: function(e, n, r) {
                return t.DOM.setStyle(e, n, r)
            },
            on: function(e, n, r, i) {
                return t.DOM.bind(e, n, r, i)
            },
            off: function(e, n, r) {
                return t.DOM.unbind(e, n, r)
            },
            fire: function(e, n, r) {
                return t.DOM.fire(e, n, r)
            },
            innerHtml: function(e, n) {
                t.DOM.setHTML(e, n)
            }
        }
    }), r(j, [W, f, V, q, $], function(e, t, n, r, i) {
        function o(e) {
            return e._eventDispatcher || (e._eventDispatcher = new n({
                scope: e,
                toggleEvent: function(t, r) {
                    r && n.isNative(t) && (e._nativeEvents || (e._nativeEvents = {}), e._nativeEvents[t] = !0, e._rendered && e.bindPendingEvents())
                }
            })), e._eventDispatcher
        }
        var a = {},
            s = "onmousewheel" in document,
            l = !1,
            c = "mce-",
            d = e.extend({
                Statics: {
                    elementIdCache: a,
                    classPrefix: c
                },
                isRtl: function() {
                    return d.rtl
                },
                classPrefix: c,
                init: function(e) {
                    var n = this,
                        r, o;
                    if (n.settings = e = t.extend({}, n.Defaults, e), n._id = e.id || i.id(), n._text = n._name = "", n._width = n._height = 0, n._aria = {
                        role: e.role
                    }, r = e.classes) for (r = r.split(" "), r.map = {}, o = r.length; o--;) r.map[r[o]] = !0;
                    n._classes = r || [], n.visible(!0), t.each("title text width height name classes visible disabled active value".split(" "), function(t) {
                        var r = e[t],
                            i;
                        r !== i ? n[t](r) : n["_" + t] === i && (n["_" + t] = !1)
                    }), n.on("click", function() {
                        return n.disabled() ? !1 : void 0
                    }), e.classes && t.each(e.classes.split(" "), function(e) {
                        n.addClass(e)
                    }), n.settings = e, n._borderBox = n.parseBox(e.border), n._paddingBox = n.parseBox(e.padding), n._marginBox = n.parseBox(e.margin), e.hidden && n.hide()
                },
                Properties: "parent,title,text,width,height,disabled,active,name,value",
                Methods: "renderHtml",
                getContainerElm: function() {
                    return document.body
                },
                getParentCtrl: function(e) {
                    for (var t, n = this.getRoot().controlIdLookup; e && n && !(t = n[e.id]);) e = e.parentNode;
                    return t
                },
                parseBox: function(e) {
                    var t, n = 10;
                    if (e) return "number" == typeof e ? (e = e || 0, {
                        top: e,
                        left: e,
                        bottom: e,
                        right: e
                    }) : (e = e.split(" "), t = e.length, 1 === t ? e[1] = e[2] = e[3] = e[0] : 2 === t ? (e[2] = e[0], e[3] = e[1]) : 3 === t && (e[3] = e[1]), {
                        top: parseInt(e[0], n) || 0,
                        right: parseInt(e[1], n) || 0,
                        bottom: parseInt(e[2], n) || 0,
                        left: parseInt(e[3], n) || 0
                    })
                },
                borderBox: function() {
                    return this._borderBox
                },
                paddingBox: function() {
                    return this._paddingBox
                },
                marginBox: function() {
                    return this._marginBox
                },
                measureBox: function(e, t) {
                    function n(t) {
                        var n = document.defaultView;
                        return n ? (t = t.replace(/[A-Z]/g, function(e) {
                            return "-" + e
                        }), n.getComputedStyle(e, null).getPropertyValue(t)) : e.currentStyle[t]
                    }
                    function r(e) {
                        var t = parseFloat(n(e), 10);
                        return isNaN(t) ? 0 : t
                    }
                    return {
                        top: r(t + "TopWidth"),
                        right: r(t + "RightWidth"),
                        bottom: r(t + "BottomWidth"),
                        left: r(t + "LeftWidth")
                    }
                },
                initLayoutRect: function() {
                    var e = this,
                        t = e.settings,
                        n, r, o = e.getEl(),
                        a, s, l, c, d, u, f, p;
                    n = e._borderBox = e._borderBox || e.measureBox(o, "border"), e._paddingBox = e._paddingBox || e.measureBox(o, "padding"), e._marginBox = e._marginBox || e.measureBox(o, "margin"), p = i.getSize(o), u = t.minWidth, f = t.minHeight, l = u || p.width, c = f || p.height, a = t.width, s = t.height, d = t.autoResize, d = "undefined" != typeof d ? d : !a && !s, a = a || l, s = s || c;
                    var m = n.left + n.right,
                        h = n.top + n.bottom,
                        g = t.maxWidth || 65535,
                        v = t.maxHeight || 65535;
                    return e._layoutRect = r = {
                        x: t.x || 0,
                        y: t.y || 0,
                        w: a,
                        h: s,
                        deltaW: m,
                        deltaH: h,
                        contentW: a - m,
                        contentH: s - h,
                        innerW: a - m,
                        innerH: s - h,
                        startMinWidth: u || 0,
                        startMinHeight: f || 0,
                        minW: Math.min(l, g),
                        minH: Math.min(c, v),
                        maxW: g,
                        maxH: v,
                        autoResize: d,
                        scrollW: 0
                    }, e._lastLayoutRect = {}, r
                },
                layoutRect: function(e) {
                    var t = this,
                        n = t._layoutRect,
                        r, i, o, a, s, l;
                    return n || (n = t.initLayoutRect()), e ? (o = n.deltaW, a = n.deltaH, e.x !== s && (n.x = e.x), e.y !== s && (n.y = e.y), e.minW !== s && (n.minW = e.minW), e.minH !== s && (n.minH = e.minH), i = e.w, i !== s && (i = i < n.minW ? n.minW : i, i = i > n.maxW ? n.maxW : i, n.w = i, n.innerW = i - o), i = e.h, i !== s && (i = i < n.minH ? n.minH : i, i = i > n.maxH ? n.maxH : i, n.h = i, n.innerH = i - a), i = e.innerW, i !== s && (i = i < n.minW - o ? n.minW - o : i, i = i > n.maxW - o ? n.maxW - o : i, n.innerW = i, n.w = i + o), i = e.innerH, i !== s && (i = i < n.minH - a ? n.minH - a : i, i = i > n.maxH - a ? n.maxH - a : i, n.innerH = i, n.h = i + a), e.contentW !== s && (n.contentW = e.contentW), e.contentH !== s && (n.contentH = e.contentH), r = t._lastLayoutRect, (r.x !== n.x || r.y !== n.y || r.w !== n.w || r.h !== n.h) && (l = d.repaintControls, l && l.map && !l.map[t._id] && (l.push(t), l.map[t._id] = !0), r.x = n.x, r.y = n.y, r.w = n.w, r.h = n.h), t) : n
                },
                repaint: function() {
                    var e = this,
                        t, n, r, i, o = 0,
                        a = 0,
                        s, l;
                    l = document.createRange ?
                    function(e) {
                        return e
                    } : Math.round, t = e.getEl().style, r = e._layoutRect, s = e._lastRepaintRect || {}, i = e._borderBox, o = i.left + i.right, a = i.top + i.bottom, r.x !== s.x && (t.left = l(r.x) + "px", s.x = r.x), r.y !== s.y && (t.top = l(r.y) + "px", s.y = r.y), r.w !== s.w && (t.width = l(r.w - o) + "px", s.w = r.w), r.h !== s.h && (t.height = l(r.h - a) + "px", s.h = r.h), e._hasBody && r.innerW !== s.innerW && (n = e.getEl("body").style, n.width = l(r.innerW) + "px", s.innerW = r.innerW), e._hasBody && r.innerH !== s.innerH && (n = n || e.getEl("body").style, n.height = l(r.innerH) + "px", s.innerH = r.innerH), e._lastRepaintRect = s, e.fire("repaint", {}, !1)
                },
                on: function(e, t) {
                    function n(e) {
                        var t, n;
                        return "string" != typeof e ? e : function(i) {
                            return t || r.parentsAndSelf().each(function(r) {
                                var i = r.settings.callbacks;
                                return i && (t = i[e]) ? (n = r, !1) : void 0
                            }), t.call(n, i)
                        }
                    }
                    var r = this;
                    return o(r).on(e, n(t)), r
                },
                off: function(e, t) {
                    return o(this).off(e, t), this
                },
                fire: function(e, t, n) {
                    var r = this;
                    if (t = t || {}, t.control || (t.control = r), t = o(r).fire(e, t), n !== !1 && r.parent) for (var i = r.parent(); i && !t.isPropagationStopped();) i.fire(e, t, !1), i = i.parent();
                    return t
                },
                hasEventListeners: function(e) {
                    return o(this).has(e)
                },
                parents: function(e) {
                    var t = this,
                        n, i = new r;
                    for (n = t.parent(); n; n = n.parent()) i.add(n);
                    return e && (i = i.filter(e)), i
                },
                parentsAndSelf: function(e) {
                    return new r(this).add(this.parents(e))
                },
                next: function() {
                    var e = this.parent().items();
                    return e[e.indexOf(this) + 1]
                },
                prev: function() {
                    var e = this.parent().items();
                    return e[e.indexOf(this) - 1]
                },
                findCommonAncestor: function(e, t) {
                    for (var n; e;) {
                        for (n = t; n && e != n;) n = n.parent();
                        if (e == n) break;
                        e = e.parent()
                    }
                    return e
                },
                hasClass: function(e, t) {
                    var n = this._classes[t || "control"];
                    return e = this.classPrefix + e, n && !! n.map[e]
                },
                addClass: function(e, t) {
                    var n = this,
                        r, i;
                    return e = this.classPrefix + e, r = n._classes[t || "control"], r || (r = [], r.map = {}, n._classes[t || "control"] = r), r.map[e] || (r.map[e] = e, r.push(e), n._rendered && (i = n.getEl(t), i && (i.className = r.join(" ")))), n
                },
                removeClass: function(e, t) {
                    var n = this,
                        r, i, o;
                    if (e = this.classPrefix + e, r = n._classes[t || "control"], r && r.map[e]) for (delete r.map[e], i = r.length; i--;) r[i] === e && r.splice(i, 1);
                    return n._rendered && (o = n.getEl(t), o && (o.className = r.join(" "))), n
                },
                toggleClass: function(e, t, n) {
                    var r = this;
                    return t ? r.addClass(e, n) : r.removeClass(e, n), r
                },
                classes: function(e) {
                    var t = this._classes[e || "control"];
                    return t ? t.join(" ") : ""
                },
                innerHtml: function(e) {
                    return i.innerHtml(this.getEl(), e), this
                },
                getEl: function(e, t) {
                    var n, r = e ? this._id + "-" + e : this._id;
                    return n = a[r] = (t === !0 ? null : a[r]) || i.get(r)
                },
                visible: function(e) {
                    var t = this,
                        n;
                    return "undefined" != typeof e ? (t._visible !== e && (t._rendered && (t.getEl().style.display = e ? "" : "none"), t._visible = e, n = t.parent(), n && (n._lastRect = null), t.fire(e ? "show" : "hide")), t) : t._visible
                },
                show: function() {
                    return this.visible(!0)
                },
                hide: function() {
                    return this.visible(!1)
                },
                focus: function() {
                    try {
                        this.getEl().focus()
                    } catch (e) {}
                    return this
                },
                blur: function() {
                    return this.getEl().blur(), this
                },
                aria: function(e, t) {
                    var n = this,
                        r = n.getEl(n.ariaTarget);
                    return "undefined" == typeof t ? n._aria[e] : (n._aria[e] = t, n._rendered && r.setAttribute("role" == e ? e : "aria-" + e, t), n)
                },
                encode: function(e, t) {
                    return t !== !1 && (e = this.translate(e)), (e || "").replace(/[&<>"]/g, function(e) {
                        return "&#" + e.charCodeAt(0) + ";"
                    })
                },
                translate: function(e) {
                    return d.translate ? d.translate(e) : e
                },
                before: function(e) {
                    var t = this,
                        n = t.parent();
                    return n && n.insert(e, n.items().indexOf(t), !0), t
                },
                after: function(e) {
                    var t = this,
                        n = t.parent();
                    return n && n.insert(e, n.items().indexOf(t)), t
                },
                remove: function() {
                    var e = this,
                        t = e.getEl(),
                        n = e.parent(),
                        r, o;
                    if (e.items) {
                        var s = e.items().toArray();
                        for (o = s.length; o--;) s[o].remove()
                    }
                    n && n.items && (r = [], n.items().each(function(t) {
                        t !== e && r.push(t)
                    }), n.items().set(r), n._lastRect = null), e._eventsRoot && e._eventsRoot == e && i.off(t);
                    var l = e.getRoot().controlIdLookup;
                    if (l && delete l[e._id], delete a[e._id], t && t.parentNode) {
                        var c = t.getElementsByTagName("*");
                        for (o = c.length; o--;) delete a[c[o].id];
                        t.parentNode.removeChild(t)
                    }
                    return e._rendered = !1, e
                },
                renderBefore: function(e) {
                    var t = this;
                    return e.parentNode.insertBefore(i.createFragment(t.renderHtml()), e), t.postRender(), t
                },
                renderTo: function(e) {
                    var t = this;
                    return e = e || t.getContainerElm(), e.appendChild(i.createFragment(t.renderHtml())), t.postRender(), t
                },
                postRender: function() {
                    var e = this,
                        t = e.settings,
                        n, r, o, a, s;
                    for (a in t) 0 === a.indexOf("on") && e.on(a.substr(2), t[a]);
                    if (e._eventsRoot) {
                        for (o = e.parent(); !s && o; o = o.parent()) s = o._eventsRoot;
                        if (s) for (a in s._nativeEvents) e._nativeEvents[a] = !0
                    }
                    e.bindPendingEvents(), t.style && (n = e.getEl(), n && (n.setAttribute("style", t.style), n.style.cssText = t.style)), e._visible || i.css(e.getEl(), "display", "none"), e.settings.border && (r = e.borderBox(), i.css(e.getEl(), {
                        "border-top-width": r.top,
                        "border-right-width": r.right,
                        "border-bottom-width": r.bottom,
                        "border-left-width": r.left
                    }));
                    var l = e.getRoot();
                    l.controlIdLookup || (l.controlIdLookup = {}), l.controlIdLookup[e._id] = e;
                    for (var c in e._aria) e.aria(c, e._aria[c]);
                    e.fire("postrender", {}, !1)
                },
                scrollIntoView: function(e) {
                    function t(e, t) {
                        var n, r, i = e;
                        for (n = r = 0; i && i != t && i.nodeType;) n += i.offsetLeft || 0, r += i.offsetTop || 0, i = i.offsetParent;
                        return {
                            x: n,
                            y: r
                        }
                    }
                    var n = this.getEl(),
                        r = n.parentNode,
                        i, o, a, s, l, c, d = t(n, r);
                    return i = d.x, o = d.y, a = n.offsetWidth, s = n.offsetHeight, l = r.clientWidth, c = r.clientHeight, "end" == e ? (i -= l - a, o -= c - s) : "center" == e && (i -= l / 2 - a / 2, o -= c / 2 - s / 2), r.scrollLeft = i, r.scrollTop = o, this
                },
                bindPendingEvents: function() {
                    function e(e) {
                        var t = o.getParentCtrl(e.target);
                        t && t.fire(e.type, e)
                    }
                    function t() {
                        var e = u._lastHoverCtrl;
                        e && (e.fire("mouseleave", {
                            target: e.getEl()
                        }), e.parents().each(function(e) {
                            e.fire("mouseleave", {
                                target: e.getEl()
                            })
                        }), u._lastHoverCtrl = null)
                    }
                    function n(e) {
                        var t = o.getParentCtrl(e.target),
                            n = u._lastHoverCtrl,
                            r = 0,
                            i, a, s;
                        if (t !== n) {
                            if (u._lastHoverCtrl = t, a = t.parents().toArray().reverse(), a.push(t), n) {
                                for (s = n.parents().toArray().reverse(), s.push(n), r = 0; r < s.length && a[r] === s[r]; r++);
                                for (i = s.length - 1; i >= r; i--) n = s[i], n.fire("mouseleave", {
                                    target: n.getEl()
                                })
                            }
                            for (i = r; i < a.length; i++) t = a[i], t.fire("mouseenter", {
                                target: t.getEl()
                            })
                        }
                    }
                    function r(e) {
                        e.preventDefault(), "mousewheel" == e.type ? (e.deltaY = -1 / 40 * e.wheelDelta, e.wheelDeltaX && (e.deltaX = -1 / 40 * e.wheelDeltaX)) : (e.deltaX = 0, e.deltaY = e.detail), e = o.fire("wheel", e)
                    }
                    var o = this,
                        a, c, d, u, f, p;
                    if (o._rendered = !0, f = o._nativeEvents) {
                        for (d = o.parents().toArray(), d.unshift(o), a = 0, c = d.length; !u && c > a; a++) u = d[a]._eventsRoot;
                        for (u || (u = d[d.length - 1] || o), o._eventsRoot = u, c = a, a = 0; c > a; a++) d[a]._eventsRoot = u;
                        var m = u._delegates;
                        m || (m = u._delegates = {});
                        for (p in f) {
                            if (!f) return !1;
                            "wheel" !== p || l ? ("mouseenter" === p || "mouseleave" === p ? u._hasMouseEnter || (i.on(u.getEl(), "mouseleave", t), i.on(u.getEl(), "mouseover", n), u._hasMouseEnter = 1) : m[p] || (i.on(u.getEl(), p, e), m[p] = !0), f[p] = !1) : s ? i.on(o.getEl(), "mousewheel", r) : i.on(o.getEl(), "DOMMouseScroll", r)
                        }
                    }
                },
                getRoot: function() {
                    for (var e = this, t, n = []; e;) {
                        if (e.rootControl) {
                            t = e.rootControl;
                            break
                        }
                        n.push(e), t = e, e = e.parent()
                    }
                    t || (t = this);
                    for (var r = n.length; r--;) n[r].rootControl = t;
                    return t
                },
                reflow: function() {
                    return this.repaint(), this
                }
            });
        return d
    }), r(K, [], function() {
        var e = {},
            t;
        return {
            add: function(t, n) {
                e[t.toLowerCase()] = n
            },
            has: function(t) {
                return !!e[t.toLowerCase()]
            },
            create: function(n, r) {
                var i, o, a;
                if (!t) {
                    a = tinymce.ui;
                    for (o in a) e[o.toLowerCase()] = a[o];
                    t = !0
                }
                if ("string" == typeof n ? (r = r || {}, r.type = n) : (r = n, n = r.type), n = n.toLowerCase(), i = e[n], !i) throw new Error("Could not find control by type: " + n);
                return i = new i(r), i.type = n, i
            }
        }
    }), r(Y, [], function() {
        return function(e) {
            function t(e) {
                return e = e || b, e && e.getAttribute("role")
            }
            function n(e) {
                for (var n, r = e || b; r = r.parentNode;) if (n = t(r)) return n
            }
            function r(e) {
                var t = b;
                return t ? t.getAttribute("aria-" + e) : void 0
            }
            function i(e) {
                var t = e.tagName.toUpperCase();
                return "INPUT" == t || "TEXTAREA" == t
            }
            function o(e) {
                return i(e) && !e.hidden ? !0 : /^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell)$/.test(t(e)) ? !0 : !1
            }
            function a(e) {
                function t(e) {
                    if (1 == e.nodeType && "none" != e.style.display) {
                        o(e) && n.push(e);
                        for (var r = 0; r < e.childNodes.length; r++) t(e.childNodes[r])
                    }
                }
                var n = [];
                return t(e || y.getEl()), n
            }
            function s(e) {
                var t, n;
                e = e || C, n = e.parents().toArray(), n.unshift(e);
                for (var r = 0; r < n.length && (t = n[r], !t.settings.ariaRoot); r++);
                return t
            }
            function l(e) {
                var t = s(e),
                    n = a(t.getEl());
                t.settings.ariaRemember && "lastAriaIndex" in t ? c(t.lastAriaIndex, n) : c(0, n)
            }
            function c(e, t) {
                return 0 > e ? e = t.length - 1 : e >= t.length && (e = 0), t[e] && t[e].focus(), e
            }
            function d(e, t) {
                var n = -1,
                    r = s();
                t = t || a(r.getEl());
                for (var i = 0; i < t.length; i++) t[i] === b && (n = i);
                n += e, r.lastAriaIndex = c(n, t)
            }
            function u() {
                var e = n();
                "tablist" == e ? d(-1, a(b.parentNode)) : C.parent().submenu ? g() : d(-1)
            }
            function f() {
                var e = t(),
                    i = n();
                "tablist" == i ? d(1, a(b.parentNode)) : "menuitem" == e && "menu" == i && r("haspopup") ? v() : d(1)
            }
            function p() {
                d(-1)
            }
            function m() {
                var e = t(),
                    i = n();
                "menuitem" == e && "menubar" == i ? v() : "button" == e && r("haspopup") ? v({
                    key: "down"
                }) : d(1)
            }
            function h(e) {
                var t = n();
                if ("tablist" == t) {
                    var r = a(C.getEl("body"))[0];
                    r && r.focus()
                } else d(e.shiftKey ? -1 : 1)
            }
            function g() {
                C.fire("cancel")
            }
            function v(e) {
                e = e || {}, C.fire("click", {
                    target: b,
                    aria: e
                })
            }
            var y = e.root,
                b, C;
            return b = document.activeElement, C = y.getParentCtrl(b), y.on("keydown", function(e) {
                function t(e, t) {
                    i(b) || t(e) !== !1 && e.preventDefault()
                }
                if (!e.isDefaultPrevented()) switch (e.keyCode) {
                case 37:
                    t(e, u);
                    break;
                case 39:
                    t(e, f);
                    break;
                case 38:
                    t(e, p);
                    break;
                case 40:
                    t(e, m);
                    break;
                case 27:
                    g();
                    break;
                case 14:
                case 13:
                case 32:
                    t(e, v);
                    break;
                case 9:
                    h(e) !== !1 && e.preventDefault()
                }
            }), y.on("focusin", function(e) {
                b = e.target, C = e.control
            }), {
                focusFirst: l
            }
        }
    }), r(G, [j, q, U, K, Y, f, $], function(e, t, n, r, i, o, a) {
        var s = {};
        return e.extend({
            layout: "",
            innerClass: "container-inner",
            init: function(e) {
                var n = this;
                n._super(e), e = n.settings, n._fixed = e.fixed, n._items = new t, n.isRtl() && n.addClass("rtl"), n.addClass("container"), n.addClass("container-body", "body"), e.containerCls && n.addClass(e.containerCls), n._layout = r.create((e.layout || n.layout) + "layout"), n.settings.items && n.add(n.settings.items), n._hasBody = !0
            },
            items: function() {
                return this._items
            },
            find: function(e) {
                return e = s[e] = s[e] || new n(e), e.find(this)
            },
            add: function(e) {
                var t = this;
                return t.items().add(t.create(e)).parent(t), t
            },
            focus: function(e) {
                var t = this,
                    n, r, i;
                return e && (r = t.keyboardNav || t.parents().eq(-1)[0].keyboardNav) ? void r.focusFirst(t) : (i = t.find("*"), t.statusbar && i.add(t.statusbar.items()), i.each(function(e) {
                    return e.settings.autofocus ? (n = null, !1) : void(e.canFocus && (n = n || e))
                }), n && n.focus(), t)
            },
            replace: function(e, t) {
                for (var n, r = this.items(), i = r.length; i--;) if (r[i] === e) {
                    r[i] = t;
                    break
                }
                i >= 0 && (n = t.getEl(), n && n.parentNode.removeChild(n), n = e.getEl(), n && n.parentNode.removeChild(n)), t.parent(this)
            },
            create: function(t) {
                var n = this,
                    i, a = [];
                return o.isArray(t) || (t = [t]), o.each(t, function(t) {
                    t && (t instanceof e || ("string" == typeof t && (t = {
                        type: t
                    }), i = o.extend({}, n.settings.defaults, t), t.type = i.type = i.type || t.type || n.settings.defaultType || (i.defaults ? i.defaults.type : null), t = r.create(i)), a.push(t))
                }), a
            },
            renderNew: function() {
                var e = this;
                return e.items().each(function(t, n) {
                    var r, i;
                    t.parent(e), t._rendered || (r = e.getEl("body"), i = a.createFragment(t.renderHtml()), r.hasChildNodes() && n <= r.childNodes.length - 1 ? r.insertBefore(i, r.childNodes[n]) : r.appendChild(i), t.postRender())
                }), e._layout.applyClasses(e), e._lastRect = null, e
            },
            append: function(e) {
                return this.add(e).renderNew()
            },
            prepend: function(e) {
                var t = this;
                return t.items().set(t.create(e).concat(t.items().toArray())), t.renderNew()
            },
            insert: function(e, t, n) {
                var r = this,
                    i, o, a;
                return e = r.create(e), i = r.items(), !n && t < i.length - 1 && (t += 1), t >= 0 && t < i.length && (o = i.slice(0, t).toArray(), a = i.slice(t).toArray(), i.set(o.concat(e, a))), r.renderNew()
            },
            fromJSON: function(e) {
                var t = this;
                for (var n in e) t.find("#" + n).value(e[n]);
                return t
            },
            toJSON: function() {
                var e = this,
                    t = {};
                return e.find("*").each(function(e) {
                    var n = e.name(),
                        r = e.value();
                    n && "undefined" != typeof r && (t[n] = r)
                }), t
            },
            preRender: function() {},
            renderHtml: function() {
                var e = this,
                    t = e._layout,
                    n = this.settings.role;
                return e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '"' + (n ? ' role="' + this.settings.role + '"' : "") + '><div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            },
            postRender: function() {
                var e = this,
                    t;
                return e.items().exec("postRender"), e._super(), e._layout.postRender(e), e._rendered = !0, e.settings.style && a.css(e.getEl(), e.settings.style), e.settings.border && (t = e.borderBox(), a.css(e.getEl(), {
                    "border-top-width": t.top,
                    "border-right-width": t.right,
                    "border-bottom-width": t.bottom,
                    "border-left-width": t.left
                })), e.parent() || (e.keyboardNav = new i({
                    root: e
                })), e
            },
            initLayoutRect: function() {
                var e = this,
                    t = e._super();
                return e._layout.recalc(e), t
            },
            recalc: function() {
                var e = this,
                    t = e._layoutRect,
                    n = e._lastRect;
                return n && n.w == t.w && n.h == t.h ? void 0 : (e._layout.recalc(e), t = e.layoutRect(), e._lastRect = {
                    x: t.x,
                    y: t.y,
                    w: t.w,
                    h: t.h
                }, !0)
            },
            reflow: function() {
                var t;
                if (this.visible()) {
                    for (e.repaintControls = [], e.repaintControls.map = {}, this.recalc(), t = e.repaintControls.length; t--;) e.repaintControls[t].repaint();
                    "flow" !== this.settings.layout && "stack" !== this.settings.layout && this.repaint(), e.repaintControls = []
                }
                return this
            }
        })
    }), r(X, [$], function(e) {
        function t() {
            var e = document,
                t, n, r, i, o, a, s, l, c = Math.max;
            return t = e.documentElement, n = e.body, r = c(t.scrollWidth, n.scrollWidth), i = c(t.clientWidth, n.clientWidth), o = c(t.offsetWidth, n.offsetWidth), a = c(t.scrollHeight, n.scrollHeight), s = c(t.clientHeight, n.clientHeight), l = c(t.offsetHeight, n.offsetHeight), {
                width: o > r ? i : r,
                height: l > a ? s : a
            }
        }
        return function(n, r) {
            function i() {
                return a.getElementById(r.handle || n)
            }
            var o, a = document,
                s, l, c, d, u, f;
            r = r || {}, l = function(n) {
                var l = t(),
                    p, m;
                n.preventDefault(), s = n.button, p = i(), u = n.screenX, f = n.screenY, m = window.getComputedStyle ? window.getComputedStyle(p, null).getPropertyValue("cursor") : p.runtimeStyle.cursor, o = a.createElement("div"), e.css(o, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: l.width,
                    height: l.height,
                    zIndex: 2147483647,
                    opacity: 1e-4,
                    background: "red",
                    cursor: m
                }), a.body.appendChild(o), e.on(a, "mousemove", d), e.on(a, "mouseup", c), r.start(n)
            }, d = function(e) {
                return e.button !== s ? c(e) : (e.deltaX = e.screenX - u, e.deltaY = e.screenY - f, e.preventDefault(), void r.drag(e))
            }, c = function(t) {
                e.off(a, "mousemove", d), e.off(a, "mouseup", c), o.parentNode.removeChild(o), r.stop && r.stop(t)
            }, this.destroy = function() {
                e.off(i())
            }, e.on(i(), "mousedown", l)
        }
    }), r(J, [$, X], function(e, t) {
        return {
            init: function() {
                var e = this;
                e.on("repaint", e.renderScroll)
            },
            renderScroll: function() {
                function n() {
                    function t(t, a, s, l, c, d) {
                        var u, f, p, m, h, g, v, y, b;
                        if (f = i.getEl("scroll" + t)) {
                            if (y = a.toLowerCase(), b = s.toLowerCase(), i.getEl("absend") && e.css(i.getEl("absend"), y, i.layoutRect()[l] - 1), !c) return void e.css(f, "display", "none");
                            e.css(f, "display", "block"), u = i.getEl("body"), p = i.getEl("scroll" + t + "t"), m = u["client" + s] - 2 * o, m -= n && r ? f["client" + d] : 0, h = u["scroll" + s], g = m / h, v = {}, v[y] = u["offset" + a] + o, v[b] = m, e.css(f, v), v = {}, v[y] = u["scroll" + a] * g, v[b] = m * g, e.css(p, v)
                        }
                    }
                    var n, r, a;
                    a = i.getEl("body"), n = a.scrollWidth > a.clientWidth, r = a.scrollHeight > a.clientHeight, t("h", "Left", "Width", "contentW", n, "Height"), t("v", "Top", "Height", "contentH", r, "Width")
                }
                function r() {
                    function n(n, r, a, s, l) {
                        var c, d = i._id + "-scroll" + n,
                            u = i.classPrefix;
                        i.getEl().appendChild(e.createFragment('<div id="' + d + '" class="' + u + "scrollbar " + u + "scrollbar-" + n + '"><div id="' + d + 't" class="' + u + 'scrollbar-thumb"></div></div>')), i.draghelper = new t(d + "t", {
                            start: function() {
                                c = i.getEl("body")["scroll" + r], e.addClass(e.get(d), u + "active")
                            },
                            drag: function(e) {
                                var t, d, u, f, p = i.layoutRect();
                                d = p.contentW > p.innerW, u = p.contentH > p.innerH, f = i.getEl("body")["client" + a] - 2 * o, f -= d && u ? i.getEl("scroll" + n)["client" + l] : 0, t = f / i.getEl("body")["scroll" + a], i.getEl("body")["scroll" + r] = c + e["delta" + s] / t
                            },
                            stop: function() {
                                e.removeClass(e.get(d), u + "active")
                            }
                        })
                    }
                    i.addClass("scroll"), n("v", "Top", "Height", "Y", "Width"), n("h", "Left", "Width", "X", "Height")
                }
                var i = this,
                    o = 2;
                i.settings.autoScroll && (i._hasScroll || (i._hasScroll = !0, r(), i.on("wheel", function(e) {
                    var t = i.getEl("body");
                    t.scrollLeft += 10 * (e.deltaX || 0), t.scrollTop += 10 * e.deltaY, n()
                }), e.on(i.getEl("body"), "scroll", n)), n())
            }
        }
    }), r(Q, [G, J], function(e, t) {
        return e.extend({
            Defaults: {
                layout: "fit",
                containerCls: "panel"
            },
            Mixins: [t],
            renderHtml: function() {
                var e = this,
                    t = e._layout,
                    n = e.settings.html;
                return e.preRender(), t.preRender(e), "undefined" == typeof n ? n = '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + t.renderHtml(e) + "</div>" : ("function" == typeof n && (n = n.call(e)), e._hasBody = !1), '<div id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1" role="group">' + (e._preBodyHtml || "") + n + "</div>"
            }
        })
    }), r(Z, [$], function(e) {
        function t(t, n, r) {
            var i, o, a, s, l, c, d, u, f, p;
            return f = e.getViewPort(), o = e.getPos(n), a = o.x, s = o.y, t._fixed && (a -= f.x, s -= f.y), i = t.getEl(), p = e.getSize(i), l = p.width, c = p.height, p = e.getSize(n), d = p.width, u = p.height, r = (r || "").split(""), "b" === r[0] && (s += u), "r" === r[1] && (a += d), "c" === r[0] && (s += Math.round(u / 2)), "c" === r[1] && (a += Math.round(d / 2)), "b" === r[3] && (s -= c), "r" === r[4] && (a -= l), "c" === r[3] && (s -= Math.round(c / 2)), "c" === r[4] && (a -= Math.round(l / 2)), {
                x: a,
                y: s,
                w: l,
                h: c
            }
        }
        return {
            testMoveRel: function(n, r) {
                for (var i = e.getViewPort(), o = 0; o < r.length; o++) {
                    var a = t(this, n, r[o]);
                    if (this._fixed) {
                        if (a.x > 0 && a.x + a.w < i.w && a.y > 0 && a.y + a.h < i.h) return r[o]
                    } else if (a.x > i.x && a.x + a.w < i.w + i.x && a.y > i.y && a.y + a.h < i.h + i.y) return r[o]
                }
                return r[0]
            },
            moveRel: function(e, n) {
                "string" != typeof n && (n = this.testMoveRel(e, n));
                var r = t(this, e, n);
                return this.moveTo(r.x, r.y)
            },
            moveBy: function(e, t) {
                var n = this,
                    r = n.layoutRect();
                return n.moveTo(r.x + e, r.y + t), n
            },
            moveTo: function(t, n) {
                function r(e, t, n) {
                    return 0 > e ? 0 : e + n > t ? (e = t - n, 0 > e ? 0 : e) : e
                }
                var i = this;
                if (i.settings.constrainToViewport) {
                    var o = e.getViewPort(window),
                        a = i.layoutRect();
                    t = r(t, o.w + o.x, a.w), n = r(n, o.h + o.y, a.h)
                }
                return i._rendered ? i.layoutRect({
                    x: t,
                    y: n
                }).repaint() : (i.settings.x = t, i.settings.y = n), i.fire("move", {
                    x: t,
                    y: n
                }), i
            }
        }
    }), r(et, [$], function(e) {
        return {
            resizeToContent: function() {
                this._layoutRect.autoResize = !0, this._lastRect = null, this.reflow()
            },
            resizeTo: function(t, n) {
                if (1 >= t || 1 >= n) {
                    var r = e.getWindowSize();
                    t = 1 >= t ? t * r.w : t, n = 1 >= n ? n * r.h : n
                }
                return this._layoutRect.autoResize = !1, this.layoutRect({
                    minW: t,
                    minH: n,
                    w: t,
                    h: n
                }).reflow()
            },
            resizeBy: function(e, t) {
                var n = this,
                    r = n.layoutRect();
                return n.resizeTo(r.w + e, r.h + t)
            }
        }
    }), r(tt, [Q, Z, et, $], function(e, t, n, r) {
        function i() {
            function e(e, t) {
                for (; e;) {
                    if (e == t) return !0;
                    e = e.parent()
                }
            }
            c || (c = function(t) {
                if (2 != t.button) for (var n = f.length; n--;) {
                    var r = f[n],
                        i = r.getParentCtrl(t.target);
                    if (r.settings.autohide) {
                        if (i && (e(i, r) || r.parent() === i)) continue;
                        t = r.fire("autohide", {
                            target: t.target
                        }), t.isDefaultPrevented() || r.hide()
                    }
                }
            }, r.on(document, "click", c))
        }
        function o() {
            d || (d = function() {
                var e;
                for (e = f.length; e--;) s(f[e])
            }, r.on(window, "scroll", d))
        }
        function a() {
            u || (u = function() {
                h.hideAll()
            }, r.on(window, "resize", u))
        }
        function s(e) {
            function t(t, n) {
                for (var r, i = 0; i < f.length; i++) if (f[i] != e) for (r = f[i].parent(); r && (r = r.parent());) r == e && f[i].fixed(t).moveBy(0, n).repaint()
            }
            var n = r.getViewPort().y;
            e.settings.autofix && (e._fixed ? e._autoFixY > n && (e.fixed(!1).layoutRect({
                y: e._autoFixY
            }).repaint(), t(!1, e._autoFixY - n)) : (e._autoFixY = e.layoutRect().y, e._autoFixY < n && (e.fixed(!0).layoutRect({
                y: 0
            }).repaint(), t(!0, n - e._autoFixY))))
        }
        function l(e) {
            var t;
            for (t = f.length; t--;) f[t] === e && f.splice(t, 1);
            for (t = p.length; t--;) p[t] === e && p.splice(t, 1)
        }
        var c, d, u, f = [],
            p = [],
            m, h = e.extend({
                Mixins: [t, n],
                init: function(e) {
                    function t() {
                        var e, t = h.zIndex || 65535,
                            i;
                        if (p.length) for (e = 0; e < p.length; e++) p[e].modal && (t++, i = p[e]), p[e].getEl().style.zIndex = t, p[e].zIndex = t, t++;
                        var o = document.getElementById(n.classPrefix + "modal-block");
                        i ? r.css(o, "z-index", i.zIndex - 1) : o && (o.parentNode.removeChild(o), m = !1), h.currentZIndex = t
                    }
                    var n = this;
                    n._super(e), n._eventsRoot = n, n.addClass("floatpanel"), e.autohide && (i(), a(), f.push(n)), e.autofix && (o(), n.on("move", function() {
                        s(this)
                    })), n.on("postrender show", function(e) {
                        if (e.control == n) {
                            var i, o = n.classPrefix;
                            n.modal && !m && (i = r.createFragment('<div id="' + o + 'modal-block" class="' + o + "reset " + o + 'fade"></div>'), i = i.firstChild, n.getContainerElm().appendChild(i), setTimeout(function() {
                                r.addClass(i, o + "in"), r.addClass(n.getEl(), o + "in")
                            }, 0), m = !0), p.push(n), t()
                        }
                    }), n.on("close hide", function(e) {
                        if (e.control == n) {
                            for (var r = p.length; r--;) p[r] === n && p.splice(r, 1);
                            t()
                        }
                    }), n.on("show", function() {
                        n.parents().each(function(e) {
                            return e._fixed ? (n.fixed(!0), !1) : void 0
                        })
                    }), e.popover && (n._preBodyHtml = '<div class="' + n.classPrefix + 'arrow"></div>', n.addClass("popover").addClass("bottom").addClass(n.isRtl() ? "end" : "start"))
                },
                fixed: function(e) {
                    var t = this;
                    if (t._fixed != e) {
                        if (t._rendered) {
                            var n = r.getViewPort();
                            e ? t.layoutRect().y -= n.y : t.layoutRect().y += n.y
                        }
                        t.toggleClass("fixed", e), t._fixed = e
                    }
                    return t
                },
                show: function() {
                    var e = this,
                        t, n = e._super();
                    for (t = f.length; t-- && f[t] !== e;);
                    return -1 === t && f.push(e), n
                },
                hide: function() {
                    return l(this), this._super()
                },
                hideAll: function() {
                    h.hideAll()
                },
                close: function() {
                    var e = this;
                    return e.fire("close"), e.remove()
                },
                remove: function() {
                    l(this), this._super()
                },
                postRender: function() {
                    var e = this;
                    return e.settings.bodyRole && this.getEl("body").setAttribute("role", e.settings.bodyRole), e._super()
                }
            });
        return h.hideAll = function() {
            for (var e = f.length; e--;) {
                var t = f[e];
                t && t.settings.autohide && (t.hide(), f.splice(e, 1))
            }
        }, h
    }), r(nt, [tt, Q, $, X], function(e, t, n, r) {
        var i = e.extend({
            modal: !0,
            Defaults: {
                border: 1,
                layout: "flex",
                containerCls: "panel",
                role: "dialog",
                callbacks: {
                    submit: function() {
                        this.fire("submit", {
                            data: this.toJSON()
                        })
                    },
                    close: function() {
                        this.close()
                    }
                }
            },
            init: function(e) {
                var n = this;
                n._super(e), n.isRtl() && n.addClass("rtl"), n.addClass("window"), n._fixed = !0, e.buttons && (n.statusbar = new t({
                    layout: "flex",
                    border: "1 0 0 0",
                    spacing: 3,
                    padding: 10,
                    align: "center",
                    pack: n.isRtl() ? "start" : "end",
                    defaults: {
                        type: "button"
                    },
                    items: e.buttons
                }), n.statusbar.addClass("foot"), n.statusbar.parent(n)), n.on("click", function(e) {
                    -1 != e.target.className.indexOf(n.classPrefix + "close") && n.close()
                }), n.on("cancel", function() {
                    n.close()
                }), n.aria("describedby", n.describedBy || n._id + "-none"), n.aria("label", e.title), n._fullscreen = !1
            },
            recalc: function() {
                var e = this,
                    t = e.statusbar,
                    r, i, o, a;
                e._fullscreen && (e.layoutRect(n.getWindowSize()), e.layoutRect().contentH = e.layoutRect().innerH), e._super(), r = e.layoutRect(), e.settings.title && !e._fullscreen && (i = r.headerW, i > r.w && (o = r.x - Math.max(0, i / 2), e.layoutRect({
                    w: i,
                    x: o
                }), a = !0)), t && (t.layoutRect({
                    w: e.layoutRect().innerW
                }).recalc(), i = t.layoutRect().minW + r.deltaW, i > r.w && (o = r.x - Math.max(0, i - r.w), e.layoutRect({
                    w: i,
                    x: o
                }), a = !0)), a && e.recalc()
            },
            initLayoutRect: function() {
                var e = this,
                    t = e._super(),
                    r = 0,
                    i;
                if (e.settings.title && !e._fullscreen) {
                    i = e.getEl("head");
                    var o = n.getSize(i);
                    t.headerW = o.width, t.headerH = o.height, r += t.headerH
                }
                e.statusbar && (r += e.statusbar.layoutRect().h), t.deltaH += r, t.minH += r, t.h += r;
                var a = n.getWindowSize();
                return t.x = Math.max(0, a.w / 2 - t.w / 2), t.y = Math.max(0, a.h / 2 - t.h / 2), t
            },
            renderHtml: function() {
                var e = this,
                    t = e._layout,
                    n = e._id,
                    r = e.classPrefix,
                    i = e.settings,
                    o = "",
                    a = "",
                    s = i.html;
                return e.preRender(), t.preRender(e), i.title && (o = '<div id="' + n + '-head" class="' + r + 'window-head"><div id="' + n + '-title" class="' + r + 'title">' + e.encode(i.title) + '</div><button type="button" class="' + r + 'close" aria-hidden="true">\xd7</button><div id="' + n + '-dragh" class="' + r + 'dragh"></div></div>'), i.url && (s = '<iframe src="' + i.url + '" tabindex="-1"></iframe>'), "undefined" == typeof s && (s = t.renderHtml(e)), e.statusbar && (a = e.statusbar.renderHtml()), '<div id="' + n + '" class="' + e.classes() + '" hidefocus="1"><div class="' + e.classPrefix + 'reset" role="application">' + o + '<div id="' + n + '-body" class="' + e.classes("body") + '">' + s + "</div>" + a + "</div></div>"
            },
            fullscreen: function(e) {
                var t = this,
                    r = document.documentElement,
                    i, o = t.classPrefix,
                    a;
                if (e != t._fullscreen) if (n.on(window, "resize", function() {
                    var e;
                    if (t._fullscreen) if (i) t._timer || (t._timer = setTimeout(function() {
                        var e = n.getWindowSize();
                        t.moveTo(0, 0).resizeTo(e.w, e.h), t._timer = 0
                    }, 50));
                    else {
                        e = (new Date).getTime();
                        var r = n.getWindowSize();
                        t.moveTo(0, 0).resizeTo(r.w, r.h), (new Date).getTime() - e > 50 && (i = !0)
                    }
                }), a = t.layoutRect(), t._fullscreen = e, e) {
                    t._initial = {
                        x: a.x,
                        y: a.y,
                        w: a.w,
                        h: a.h
                    }, t._borderBox = t.parseBox("0"), t.getEl("head").style.display = "none", a.deltaH -= a.headerH + 2, n.addClass(r, o + "fullscreen"), n.addClass(document.body, o + "fullscreen"), t.addClass("fullscreen");
                    var s = n.getWindowSize();
                    t.moveTo(0, 0).resizeTo(s.w, s.h)
                } else t._borderBox = t.parseBox(t.settings.border), t.getEl("head").style.display = "", a.deltaH += a.headerH, n.removeClass(r, o + "fullscreen"), n.removeClass(document.body, o + "fullscreen"), t.removeClass("fullscreen"), t.moveTo(t._initial.x, t._initial.y).resizeTo(t._initial.w, t._initial.h);
                return t.reflow()
            },
            postRender: function() {
                var e = this,
                    t;
                setTimeout(function() {
                    e.addClass("in")
                }, 0), e._super(), e.statusbar && e.statusbar.postRender(), e.focus(), this.dragHelper = new r(e._id + "-dragh", {
                    start: function() {
                        t = {
                            x: e.layoutRect().x,
                            y: e.layoutRect().y
                        }
                    },
                    drag: function(n) {
                        e.moveTo(t.x + n.deltaX, t.y + n.deltaY)
                    }
                }), e.on("submit", function(t) {
                    t.isDefaultPrevented() || e.close()
                })
            },
            submit: function() {
                return this.fire("submit", {
                    data: this.toJSON()
                })
            },
            remove: function() {
                var e = this,
                    t = e.classPrefix;
                e.dragHelper.destroy(), e._super(), e.statusbar && this.statusbar.remove(), e._fullscreen && (n.removeClass(document.documentElement, t + "fullscreen"), n.removeClass(document.body, t + "fullscreen"))
            },
            getContentWindow: function() {
                var e = this.getEl().getElementsByTagName("iframe")[0];
                return e ? e.contentWindow : null
            }
        });
        return i
    }), r(rt, [nt], function(e) {
        var t = e.extend({
            init: function(e) {
                e = {
                    border: 1,
                    padding: 20,
                    layout: "flex",
                    pack: "center",
                    align: "center",
                    containerCls: "panel",
                    autoScroll: !0,
                    buttons: {
                        type: "button",
                        text: "Ok",
                        action: "ok"
                    },
                    items: {
                        type: "label",
                        multiline: !0,
                        maxWidth: 500,
                        maxHeight: 200
                    }
                }, this._super(e)
            },
            Statics: {
                OK: 1,
                OK_CANCEL: 2,
                YES_NO: 3,
                YES_NO_CANCEL: 4,
                msgBox: function(n) {
                    var r, i = n.callback ||
                    function() {};
                    switch (n.buttons) {
                    case t.OK_CANCEL:
                        r = [{
                            type: "button",
                            text: "Ok",
                            subtype: "primary",
                            onClick: function(e) {
                                e.control.parents()[1].close(), i(!0)
                            }
                        }, {
                            type: "button",
                            text: "Cancel",
                            onClick: function(e) {
                                e.control.parents()[1].close(), i(!1)
                            }
                        }];
                        break;
                    case t.YES_NO:
                        r = [{
                            type: "button",
                            text: "Ok",
                            subtype: "primary",
                            onClick: function(e) {
                                e.control.parents()[1].close(), i(!0)
                            }
                        }];
                        break;
                    case t.YES_NO_CANCEL:
                        r = [{
                            type: "button",
                            text: "Ok",
                            subtype: "primary",
                            onClick: function(e) {
                                e.control.parents()[1].close()
                            }
                        }];
                        break;
                    default:
                        r = [{
                            type: "button",
                            text: "Ok",
                            subtype: "primary",
                            onClick: function(e) {
                                e.control.parents()[1].close(), i(!0)
                            }
                        }]
                    }
                    return new e({
                        padding: 20,
                        x: n.x,
                        y: n.y,
                        minWidth: 300,
                        minHeight: 100,
                        layout: "flex",
                        pack: "center",
                        align: "center",
                        buttons: r,
                        title: n.title,
                        role: "alertdialog",
                        items: {
                            type: "label",
                            multiline: !0,
                            maxWidth: 500,
                            maxHeight: 200,
                            text: n.text
                        },
                        onPostRender: function() {
                            this.aria("describedby", this.items()[0]._id)
                        },
                        onClose: n.onClose,
                        onCancel: function() {
                            i(!1)
                        }
                    }).renderTo(document.body).reflow()
                },
                alert: function(e, n) {
                    return "string" == typeof e && (e = {
                        text: e
                    }), e.callback = n, t.msgBox(e)
                },
                confirm: function(e, n) {
                    return "string" == typeof e && (e = {
                        text: e
                    }), e.callback = n, e.buttons = t.OK_CANCEL, t.msgBox(e)
                }
            }
        });
        return t
    }), r(it, [nt, rt], function(e, t) {
        return function(n) {
            function r() {
                return o.length ? o[o.length - 1] : void 0
            }
            var i = this,
                o = [];
            i.windows = o, i.open = function(t, r) {
                var i;
                return n.editorManager.activeEditor = n, t.title = t.title || " ", t.url = t.url || t.file, t.url && (t.width = parseInt(t.width || 320, 10), t.height = parseInt(t.height || 240, 10)), t.body && (t.items = {
                    defaults: t.defaults,
                    type: t.bodyType || "form",
                    items: t.body
                }), t.url || t.buttons || (t.buttons = [{
                    text: "Ok",
                    subtype: "primary",
                    onclick: function() {
                        i.find("form")[0].submit()
                    }
                }, {
                    text: "Cancel",
                    onclick: function() {
                        i.close()
                    }
                }]), i = new e(t), o.push(i), i.on("close", function() {
                    for (var e = o.length; e--;) o[e] === i && o.splice(e, 1);
                    n.focus()
                }), t.data && i.on("postRender", function() {
                    this.find("*").each(function(e) {
                        var n = e.name();
                        n in t.data && e.value(t.data[n])
                    })
                }), i.features = t || {}, i.params = r || {}, n.nodeChanged(), i.renderTo().reflow()
            }, i.alert = function(e, r, i) {
                t.alert(e, function() {
                    r ? r.call(i || this) : n.focus()
                })
            }, i.confirm = function(e, n, r) {
                t.confirm(e, function(e) {
                    n.call(r || this, e)
                })
            }, i.close = function() {
                r() && r().close()
            }, i.getParams = function() {
                return r() ? r().params : null
            }, i.setParams = function(e) {
                r() && (r().params = e)
            }, i.getWindows = function() {
                return o
            }
        }
    }), r(ot, [T, A, C, m, h, f], function(e, t, n, r, i, o) {
        return function(a) {
            function s(e, t) {
                try {
                    a.getDoc().execCommand(e, !1, t)
                } catch (n) {}
            }
            function l() {
                var e = a.getDoc().documentMode;
                return e ? e : 6
            }
            function c(e) {
                return e.isDefaultPrevented()
            }
            function d() {
                function t(e) {
                    var t = new i(function() {});
                    o.each(a.getBody().getElementsByTagName("*"), function(e) {
                        "SPAN" == e.tagName && e.setAttribute("mce-data-marked", 1), !e.hasAttribute("data-mce-style") && e.hasAttribute("style") && a.dom.setAttrib(e, "style", e.getAttribute("style"))
                    }), t.observe(a.getDoc(), {
                        childList: !0,
                        attributes: !0,
                        subtree: !0,
                        attributeFilter: ["style"]
                    }), a.getDoc().execCommand(e ? "ForwardDelete" : "Delete", !1, null);
                    var n = a.selection.getRng(),
                        r = n.startContainer.parentNode;
                    o.each(t.takeRecords(), function(e) {
                        if (q.isChildOf(e.target, a.getBody())) {
                            if ("style" == e.attributeName) {
                                var t = e.target.getAttribute("data-mce-style");
                                t ? e.target.setAttribute("style", t) : e.target.removeAttribute("style")
                            }
                            o.each(e.addedNodes, function(e) {
                                if ("SPAN" == e.nodeName && !e.getAttribute("mce-data-marked")) {
                                    var t, i;
                                    e == r && (t = n.startOffset, i = e.firstChild), q.remove(e, !0), i && (n.setStart(i, t), n.setEnd(i, t), a.selection.setRng(n))
                                }
                            })
                        }
                    }), t.disconnect(), o.each(a.dom.select("span[mce-data-marked]"), function(e) {
                        e.removeAttribute("mce-data-marked")
                    })
                }
                var n = a.getDoc(),
                    r = "data:text/mce-internal,",
                    i = window.MutationObserver,
                    s, l;
                i || (s = !0, i = function() {
                    function e(e) {
                        var t = e.relatedNode || e.target;
                        n.push({
                            target: t,
                            addedNodes: [t]
                        })
                    }
                    function t(e) {
                        var t = e.relatedNode || e.target;
                        n.push({
                            target: t,
                            attributeName: e.attrName
                        })
                    }
                    var n = [],
                        r;
                    this.observe = function(n) {
                        r = n, r.addEventListener("DOMSubtreeModified", e, !1), r.addEventListener("DOMNodeInsertedIntoDocument", e, !1), r.addEventListener("DOMNodeInserted", e, !1), r.addEventListener("DOMAttrModified", t, !1)
                    }, this.disconnect = function() {
                        r.removeEventListener("DOMSubtreeModified", e, !1), r.removeEventListener("DOMNodeInsertedIntoDocument", e, !1), r.removeEventListener("DOMNodeInserted", e, !1), r.removeEventListener("DOMAttrModified", t, !1)
                    }, this.takeRecords = function() {
                        return n
                    }
                }), a.on("keydown", function(n) {
                    var r = n.keyCode == U,
                        i = e.metaKeyPressed(n);
                    if (!c(n) && (r || n.keyCode == V)) {
                        var o = a.selection.getRng(),
                            s = o.startContainer,
                            l = o.startOffset;
                        if (!i && o.collapsed && 3 == s.nodeType && (r ? l < s.data.length : l > 0)) return;
                        n.preventDefault(), i && a.selection.getSel().modify("extend", r ? "forward" : "backward", "word"), t(r)
                    }
                }), a.on("keypress", function(n) {
                    c(n) || $.isCollapsed() || !n.charCode || e.metaKeyPressed(n) || (n.preventDefault(), t(!0), a.selection.setContent(String.fromCharCode(n.charCode)))
                }), a.addCommand("Delete", function() {
                    t()
                }), a.addCommand("ForwardDelete", function() {
                    t(!0)
                }), s || (a.on("dragstart", function(e) {
                    var t;
                    a.selection.isCollapsed() && "IMG" == e.target.tagName && $.select(e.target), l = $.getRng(), t = a.selection.getContent(), t.length > 0 && e.dataTransfer.setData("URL", "data:text/mce-internal," + escape(t))
                }), a.on("drop", function(e) {
                    if (!c(e)) {
                        var i = e.dataTransfer.getData("URL");
                        if (!i || -1 == i.indexOf(r) || !n.caretRangeFromPoint) return;
                        i = unescape(i.substr(r.length)), n.caretRangeFromPoint && (e.preventDefault(), window.setTimeout(function() {
                            var r = n.caretRangeFromPoint(e.x, e.y);
                            l && ($.setRng(l), l = null), t(), $.setRng(r), a.insertContent(i)
                        }, 0))
                    }
                }), a.on("cut", function(e) {
                    !c(e) && e.clipboardData && (e.preventDefault(), e.clipboardData.clearData(), e.clipboardData.setData("text/html", a.selection.getContent()), e.clipboardData.setData("text/plain", a.selection.getContent({
                        format: "text"
                    })), t(!0))
                }))
            }
            function u() {
                function e(e) {
                    var t = q.create("body"),
                        n = e.cloneContents();
                    return t.appendChild(n), $.serializer.serialize(t, {
                        format: "html"
                    })
                }
                function n(n) {
                    if (!n.setStart) {
                        if (n.item) return !1;
                        var r = n.duplicate();
                        return r.moveToElementText(a.getBody()), t.compareRanges(n, r)
                    }
                    var i = e(n),
                        o = q.createRng();
                    o.selectNode(a.getBody());
                    var s = e(o);
                    return i === s
                }
                a.on("keydown", function(e) {
                    var t = e.keyCode,
                        r, i;
                    if (!c(e) && (t == U || t == V)) {
                        if (r = a.selection.isCollapsed(), i = a.getBody(), r && !q.isEmpty(i)) return;
                        if (!r && !n(a.selection.getRng())) return;
                        e.preventDefault(), a.setContent(""), i.firstChild && q.isBlock(i.firstChild) ? a.selection.setCursorLocation(i.firstChild, 0) : a.selection.setCursorLocation(i, 0), a.nodeChanged()
                    }
                })
            }
            function f() {
                a.on("keydown", function(t) {
                    !c(t) && 65 == t.keyCode && e.metaKeyPressed(t) && (t.preventDefault(), a.execCommand("SelectAll"))
                })
            }
            function p() {
                a.settings.content_editable || (q.bind(a.getDoc(), "focusin", function() {
                    $.setRng($.getRng())
                }), q.bind(a.getDoc(), "mousedown", function(e) {
                    e.target == a.getDoc().documentElement && (a.getBody().focus(), $.setRng($.getRng()))
                }))
            }
            function m() {
                a.on("keydown", function(e) {
                    if (!c(e) && e.keyCode === V && $.isCollapsed() && 0 === $.getRng(!0).startOffset) {
                        var t = $.getNode(),
                            n = t.previousSibling;
                        if ("HR" == t.nodeName) return q.remove(t), void e.preventDefault();
                        n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (q.remove(n), e.preventDefault())
                    }
                })
            }
            function h() {
                window.Range.prototype.getClientRects || a.on("mousedown", function(e) {
                    if (!c(e) && "HTML" === e.target.nodeName) {
                        var t = a.getBody();
                        t.blur(), setTimeout(function() {
                            t.focus()
                        }, 0)
                    }
                })
            }
            function g() {
                a.on("click", function(e) {
                    e = e.target, /^(IMG|HR)$/.test(e.nodeName) && $.getSel().setBaseAndExtent(e, 0, e, 1), "A" == e.nodeName && q.hasClass(e, "mce-item-anchor") && $.select(e), a.nodeChanged()
                })
            }
            function v() {
                function e() {
                    var e = q.getAttribs($.getStart().cloneNode(!1));
                    return function() {
                        var t = $.getStart();
                        t !== a.getBody() && (q.setAttrib(t, "style", null), W(e, function(e) {
                            t.setAttributeNode(e.cloneNode(!0))
                        }))
                    }
                }
                function t() {
                    return !$.isCollapsed() && q.getParent($.getStart(), q.isBlock) != q.getParent($.getEnd(), q.isBlock)
                }
                a.on("keypress", function(n) {
                    var r;
                    return c(n) || 8 != n.keyCode && 46 != n.keyCode || !t() ? void 0 : (r = e(), a.getDoc().execCommand("delete", !1, null), r(), n.preventDefault(), !1)
                }), q.bind(a.getDoc(), "cut", function(n) {
                    var r;
                    !c(n) && t() && (r = e(), setTimeout(function() {
                        r()
                    }, 0))
                })
            }
            function y() {
                var e, n;
                a.on("selectionchange", function() {
                    n && (clearTimeout(n), n = 0), n = window.setTimeout(function() {
                        if (!a.removed) {
                            var n = $.getRng();
                            e && t.compareRanges(n, e) || (a.nodeChanged(), e = n)
                        }
                    }, 50)
                })
            }
            function b() {
                document.body.setAttribute("role", "application")
            }
            function C() {
                a.on("keydown", function(e) {
                    if (!c(e) && e.keyCode === V && $.isCollapsed() && 0 === $.getRng(!0).startOffset) {
                        var t = $.getNode().previousSibling;
                        if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1
                    }
                })
            }
            function x() {
                l() > 7 || (s("RespectVisibilityInDesign", !0), a.contentStyles.push(".mceHideBrInPre pre br {display: none}"), q.addClass(a.getBody(), "mceHideBrInPre"), K.addNodeFilter("pre", function(e) {
                    for (var t = e.length, r, i, o, a; t--;) for (r = e[t].getAll("br"), i = r.length; i--;) o = r[i], a = o.prev, a && 3 === a.type && "\n" != a.value.charAt(a.value - 1) ? a.value += "\n" : o.parent.insert(new n("#text", 3), o, !0).value = "\n"
                }), Y.addNodeFilter("pre", function(e) {
                    for (var t = e.length, n, r, i, o; t--;) for (n = e[t].getAll("br"), r = n.length; r--;) i = n[r], o = i.prev, o && 3 == o.type && (o.value = o.value.replace(/\r?\n$/, ""))
                }))
            }
            function w() {
                q.bind(a.getBody(), "mouseup", function() {
                    var e, t = $.getNode();
                    "IMG" == t.nodeName && ((e = q.getStyle(t, "width")) && (q.setAttrib(t, "width", e.replace(/[^0-9%]+/g, "")), q.setStyle(t, "width", "")), (e = q.getStyle(t, "height")) && (q.setAttrib(t, "height", e.replace(/[^0-9%]+/g, "")), q.setStyle(t, "height", "")))
                })
            }
            function _() {
                a.on("keydown", function(t) {
                    var n, r, i, o, s;
                    if (!c(t) && t.keyCode == e.BACKSPACE && (n = $.getRng(), r = n.startContainer, i = n.startOffset, o = q.getRoot(), s = r, n.collapsed && 0 === i)) {
                        for (; s && s.parentNode && s.parentNode.firstChild == s && s.parentNode != o;) s = s.parentNode;
                        "BLOCKQUOTE" === s.tagName && (a.formatter.toggle("blockquote", null, s), n = q.createRng(), n.setStart(r, 0), n.setEnd(r, 0), $.setRng(n))
                    }
                })
            }
            function E() {
                function e() {
                    a._refreshContentEditable(), s("StyleWithCSS", !1), s("enableInlineTableEditing", !1), j.object_resizing || s("enableObjectResizing", !1)
                }
                j.readonly || a.on("BeforeExecCommand MouseDown", e)
            }
            function N() {
                function e() {
                    W(q.select("a"), function(e) {
                        var t = e.parentNode,
                            n = q.getRoot();
                        if (t.lastChild === e) {
                            for (; t && !q.isBlock(t);) {
                                if (t.parentNode.lastChild !== t || t === n) return;
                                t = t.parentNode
                            }
                            q.add(t, "br", {
                                "data-mce-bogus": 1
                            })
                        }
                    })
                }
                a.on("SetContent ExecCommand", function(t) {
                    ("setcontent" == t.type || "mceInsertLink" === t.command) && e()
                })
            }
            function k() {
                j.forced_root_block && a.on("init", function() {
                    s("DefaultParagraphSeparator", j.forced_root_block)
                })
            }
            function S() {
                a.on("Undo Redo SetContent", function(e) {
                    e.initial || a.execCommand("mceRepaint")
                })
            }
            function T() {
                a.on("keydown", function(e) {
                    var t;
                    c(e) || e.keyCode != V || (t = a.getDoc().selection.createRange(), t && t.item && (e.preventDefault(), a.undoManager.beforeChange(), q.remove(t.item(0)), a.undoManager.add()))
                })
            }
            function R() {
                var e;
                l() >= 10 && (e = "", W("p div h1 h2 h3 h4 h5 h6".split(" "), function(t, n) {
                    e += (n > 0 ? "," : "") + t + ":empty"
                }), a.contentStyles.push(e + "{padding-right: 1px !important}"))
            }
            function A() {
                l() < 9 && (K.addNodeFilter("noscript", function(e) {
                    for (var t = e.length, n, r; t--;) n = e[t], r = n.firstChild, r && n.attr("data-mce-innertext", r.value)
                }), Y.addNodeFilter("noscript", function(e) {
                    for (var t = e.length, i, o, a; t--;) i = e[t], o = e[t].firstChild, o ? o.value = r.decode(o.value) : (a = i.attributes.map["data-mce-innertext"], a && (i.attr("data-mce-innertext", null), o = new n("#text", 3), o.value = a, o.raw = !0, i.append(o)))
                }))
            }
            function B() {
                function e(e, t) {
                    var n = i.createTextRange();
                    try {
                        n.moveToPoint(e, t)
                    } catch (r) {
                        n = null
                    }
                    return n
                }
                function t(t) {
                    var r;
                    t.button ? (r = e(t.x, t.y), r && (r.compareEndPoints("StartToStart", a) > 0 ? r.setEndPoint("StartToStart", a) : r.setEndPoint("EndToEnd", a), r.select())) : n()
                }
                function n() {
                    var e = r.selection.createRange();
                    a && !e.item && 0 === e.compareEndPoints("StartToEnd", e) && a.select(), q.unbind(r, "mouseup", n), q.unbind(r, "mousemove", t), a = o = 0
                }
                var r = q.doc,
                    i = r.body,
                    o, a, s;
                r.documentElement.unselectable = !0, q.bind(r, "mousedown contextmenu", function(i) {
                    if ("HTML" === i.target.nodeName) {
                        if (o && n(), s = r.documentElement, s.scrollHeight > s.clientHeight) return;
                        o = 1, a = e(i.x, i.y), a && (q.bind(r, "mouseup", n), q.bind(r, "mousemove", t), q.getRoot().focus(), a.select())
                    }
                })
            }
            function D() {
                a.on("keyup focusin mouseup", function(t) {
                    65 == t.keyCode && e.metaKeyPressed(t) || $.normalize()
                }, !0)
            }
            function L() {
                a.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")
            }
            function M() {
                a.inline || a.on("keydown", function() {
                    document.activeElement == document.body && a.getWin().focus()
                })
            }
            function H() {
                a.inline || (a.contentStyles.push("body {min-height: 150px}"), a.on("click", function(e) {
                    "HTML" == e.target.nodeName && (a.getBody().focus(), a.selection.normalize(), a.nodeChanged())
                }))
            }
            function P() {
                i.mac && a.on("keydown", function(t) {
                    !e.metaKeyPressed(t) || 37 != t.keyCode && 39 != t.keyCode || (t.preventDefault(), a.selection.getSel().modify("move", 37 == t.keyCode ? "backward" : "forward", "word"))
                })
            }
            function O() {
                s("AutoUrlDetect", !1)
            }
            function I() {
                a.inline || a.on("focus blur beforegetcontent", function() {
                    var e = a.dom.create("br");
                    a.getBody().appendChild(e), e.parentNode.removeChild(e)
                }, !0)
            }
            function F() {
                a.on("click", function(e) {
                    var t = e.target;
                    do
                    if ("A" === t.tagName) return void e.preventDefault();
                    while (t = t.parentNode)
                }), a.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")
            }
            function z() {
                a.on("init", function() {
                    a.dom.bind(a.getBody(), "submit", function(e) {
                        e.preventDefault()
                    })
                })
            }
            var W = o.each,
                V = e.BACKSPACE,
                U = e.DELETE,
                q = a.dom,
                $ = a.selection,
                j = a.settings,
                K = a.parser,
                Y = a.serializer,
                G = i.gecko,
                X = i.ie,
                J = i.webkit;
            C(), _(), u(), D(), J && (d(), p(), g(), k(), z(), i.iOS ? (y(), M(), H(), F()) : f()), X && i.ie < 11 && (m(), b(), x(), w(), T(), R(), A(), B()), i.ie >= 11 && (H(), I()), i.ie && (f(), O()), G && (m(), h(), v(), E(), N(), S(), L(), P())
        }
    }), r(at, [V], function(e) {
        function t(t) {
            return t._eventDispatcher || (t._eventDispatcher = new e({
                scope: t,
                toggleEvent: function(n, r) {
                    e.isNative(n) && t.toggleNativeEvent && t.toggleNativeEvent(n, r)
                }
            })), t._eventDispatcher
        }
        return {
            fire: function(e, n, r) {
                var i = this;
                if (i.removed && "remove" !== e) return n;
                if (n = t(i).fire(e, n, r), r !== !1 && i.parent) for (var o = i.parent(); o && !n.isPropagationStopped();) o.fire(e, n, !1), o = o.parent();
                return n
            },
            on: function(e, n, r) {
                return t(this).on(e, n, r)
            },
            off: function(e, n) {
                return t(this).off(e, n)
            },
            hasEventListeners: function(e) {
                return t(this).has(e)
            }
        }
    }), r(st, [at, v, f], function(e, t, n) {
        function r(e, t) {
            return "selectionchange" == t ? e.getDoc() : !e.inline && /^mouse|click|contextmenu|drop/.test(t) ? e.getDoc() : e.getBody()
        }
        function i(e, t) {
            var n = e.settings.event_root,
                i = e.editorManager,
                a = i.eventRootElm || r(e, t);
            if (n) {
                if (i.rootEvents || (i.rootEvents = {}, i.on("RemoveEditor", function() {
                    i.activeEditor || (o.unbind(a), delete i.rootEvents)
                })), i.rootEvents[t]) return;
                a == e.getBody() && (a = o.select(n)[0], i.eventRootElm = a), i.rootEvents[t] = !0, o.bind(a, t, function(e) {
                    for (var n = e.target, r = i.editors, a = r.length; a--;) {
                        var s = r[a].getBody();
                        (s === n || o.isChildOf(n, s)) && (r[a].hidden || r[a].fire(t, e))
                    }
                })
            } else e.dom.bind(a, t, function(n) {
                e.hidden || e.fire(t, n)
            })
        }
        var o = t.DOM,
            a = {
                bindPendingEventDelegates: function() {
                    var e = this;
                    n.each(e._pendingNativeEvents, function(t) {
                        i(e, t)
                    })
                },
                toggleNativeEvent: function(e, t) {
                    var n = this;
                    n.settings.readonly || "focus" != e && "blur" != e && (t ? n.initialized ? i(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && n.dom.unbind(r(n, e), e))
                }
            };
        return a = n.extend({}, e, a)
    }), r(lt, [f, h], function(e, t) {
        var n = e.each,
            r = e.explode,
            i = {
                f9: 120,
                f10: 121,
                f11: 122
            };
        return function(o) {
            var a = this,
                s = {};
            o.on("keyup keypress keydown", function(e) {
                (e.altKey || e.ctrlKey || e.metaKey) && n(s, function(n) {
                    var r = t.mac ? e.metaKey : e.ctrlKey;
                    if (n.ctrl == r && n.alt == e.altKey && n.shift == e.shiftKey) return e.keyCode == n.keyCode || e.charCode && e.charCode == n.charCode ? (e.preventDefault(), "keydown" == e.type && n.func.call(n.scope), !0) : void 0
                })
            }), a.add = function(t, a, l, c) {
                var d;
                return d = l, "string" == typeof l ? l = function() {
                    o.execCommand(d, !1, null)
                } : e.isArray(d) && (l = function() {
                    o.execCommand(d[0], d[1], d[2])
                }), n(r(t.toLowerCase()), function(e) {
                    var t = {
                        func: l,
                        scope: c || o,
                        desc: o.translate(a),
                        alt: !1,
                        ctrl: !1,
                        shift: !1
                    };
                    n(r(e, "+"), function(e) {
                        switch (e) {
                        case "alt":
                        case "ctrl":
                        case "shift":
                            t[e] = !0;
                            break;
                        default:
                            /^[0-9]{2,}$/.test(e) ? t.keyCode = parseInt(e, 10) : (t.charCode = e.charCodeAt(0), t.keyCode = i[e] || e.toUpperCase().charCodeAt(0))
                        }
                    }), s[(t.ctrl ? "ctrl" : "") + "," + (t.alt ? "alt" : "") + "," + (t.shift ? "shift" : "") + "," + t.keyCode] = t
                }), !0
            }
        }
    }), r(ct, [v, b, C, k, N, D, H, P, O, I, F, z, y, d, it, x, _, ot, h, f, st, lt], function(e, n, r, i, o, a, s, l, c, d, u, f, p, m, h, g, v, y, b, C, x, w) {
        function _(e, t, r) {
            var i = this,
                o, a;
            o = i.documentBaseUrl = r.documentBaseURL, a = r.baseURI, i.settings = t = S({
                id: e,
                theme: "modern",
                delta_width: 0,
                delta_height: 0,
                popup_css: "",
                plugins: "",
                document_base_url: o,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_style_values: "xx-small,x-small,small,medium,large,x-large,xx-large",
                font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                padd_empty_editor: !0,
                render_ui: !0,
                indentation: "30px",
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: "simple",
                indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,li,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,option,optgroup,datalist",
                indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,li,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,option,optgroup,datalist",
                validate: !0,
                entity_encoding: "named",
                url_converter: i.convertURL,
                url_converter_scope: i,
                ie7_compat: !0
            }, t), n.language = t.language || "en", n.languageLoad = t.language_load, n.baseURL = r.baseURL, i.id = t.id = e, i.isNotDirty = !0, i.plugins = {}, i.documentBaseURI = new f(t.document_base_url || o, {
                base_uri: a
            }), i.baseURI = a, i.contentCSS = [], i.contentStyles = [], i.shortcuts = new w(i), i.execCommands = {}, i.queryStateCommands = {}, i.queryValueCommands = {}, i.loadedCSS = {}, i.suffix = r.suffix, i.editorManager = r, i.inline = t.inline, r.fire("SetupEditor", i), i.execCallback("setup", i)
        }
        var E = e.DOM,
            N = n.ThemeManager,
            k = n.PluginManager,
            S = C.extend,
            T = C.each,
            R = C.explode,
            A = C.inArray,
            B = C.trim,
            D = C.resolve,
            L = m.Event,
            M = b.gecko,
            H = b.ie;
        return _.prototype = {
            render: function() {
                function e() {
                    E.unbind(window, "ready", e), n.render()
                }
                function t() {
                    var e = p.ScriptLoader;
                    if (r.language && "en" != r.language && !r.language_url && (r.language_url = n.editorManager.baseURL + "/langs/" + r.language + ".js"), r.language_url && e.add(r.language_url), r.theme && "function" != typeof r.theme && "-" != r.theme.charAt(0) && !N.urls[r.theme]) {
                        var t = r.theme_url;
                        t = t ? n.documentBaseURI.toAbsolute(t) : "themes/" + r.theme + "/theme" + o + ".js", N.load(r.theme, t)
                    }
                    C.isArray(r.plugins) && (r.plugins = r.plugins.join(" ")), T(r.external_plugins, function(e, t) {
                        k.load(t, e), r.plugins += " " + t
                    }), T(r.plugins.split(/[ ,]/), function(e) {
                        if (e = B(e), e && !k.urls[e]) if ("-" == e.charAt(0)) {
                            e = e.substr(1, e.length);
                            var t = k.dependencies(e);
                            T(t, function(e) {
                                var t = {
                                    prefix: "plugins/",
                                    resource: e,
                                    suffix: "/plugin" + o + ".js"
                                };
                                e = k.createUrl(t, e), k.load(e.resource, e)
                            })
                        } else k.load(e, {
                            prefix: "plugins/",
                            resource: e,
                            suffix: "/plugin" + o + ".js"
                        })
                    }), e.loadQueue(function() {
                        n.removed || n.init()
                    })
                }
                var n = this,
                    r = n.settings,
                    i = n.id,
                    o = n.suffix;
                if (!L.domLoaded) return void E.bind(window, "ready", e);
                if (n.getElement() && b.contentEditable) {
                    r.inline ? n.inline = !0 : (n.orgVisibility = n.getElement().style.visibility, n.getElement().style.visibility = "hidden");
                    var a = n.getElement().form || E.getParent(i, "form");
                    a && (n.formElement = a, r.hidden_input && !/TEXTAREA|INPUT/i.test(n.getElement().nodeName) && (E.insertAfter(E.create("input", {
                        type: "hidden",
                        name: i
                    }), i), n.hasHiddenInput = !0), n.formEventDelegate = function(e) {
                        n.fire(e.type, e)
                    }, E.bind(a, "submit reset", n.formEventDelegate), n.on("reset", function() {
                        n.setContent(n.startContent, {
                            format: "raw"
                        })
                    }), !r.submit_patch || a.submit.nodeType || a.submit.length || a._mceOldSubmit || (a._mceOldSubmit = a.submit, a.submit = function() {
                        return n.editorManager.triggerSave(), n.isNotDirty = !0, a._mceOldSubmit(a)
                    })), n.windowManager = new h(n), "xml" == r.encoding && n.on("GetContent", function(e) {
                        e.save && (e.content = E.encode(e.content))
                    }), r.add_form_submit_trigger && n.on("submit", function() {
                        n.initialized && n.save()
                    }), r.add_unload_trigger && (n._beforeUnload = function() {
                        !n.initialized || n.destroyed || n.isHidden() || n.save({
                            format: "raw",
                            no_events: !0,
                            set_dirty: !1
                        })
                    }, n.editorManager.on("BeforeUnload", n._beforeUnload)), t()
                }
            },
            init: function() {
                function e(n) {
                    var r = k.get(n),
                        i, o;
                    i = k.urls[n] || t.documentBaseUrl.replace(/\/$/, ""), n = B(n), r && -1 === A(h, n) && (T(k.dependencies(n), function(t) {
                        e(t)
                    }), o = new r(t, i), t.plugins[n] = o, o.init && (o.init(t, i), h.push(n)))
                }
                var t = this,
                    n = t.settings,
                    r = t.getElement(),
                    i, o, a, s, l, c, d, u, f, p, m, h = [];
                if (t.rtl = this.editorManager.i18n.rtl, t.editorManager.add(t), n.aria_label = n.aria_label || E.getAttrib(r, "aria-label", t.getLang("aria.rich_text_area")), n.theme && ("function" != typeof n.theme ? (n.theme = n.theme.replace(/-/, ""), c = N.get(n.theme), t.theme = new c(t, N.urls[n.theme]), t.theme.init && t.theme.init(t, N.urls[n.theme] || t.documentBaseUrl.replace(/\/$/, ""))) : t.theme = n.theme), T(n.plugins.replace(/\-/g, "").split(/[ ,]/), e), n.render_ui && t.theme && (t.orgDisplay = r.style.display, "function" != typeof n.theme ? (i = n.width || r.style.width || r.offsetWidth, o = n.height || r.style.height || r.offsetHeight, a = n.min_height || 100, p = /^[0-9\.]+(|px)$/i, p.test("" + i) && (i = Math.max(parseInt(i, 10), 100)), p.test("" + o) && (o = Math.max(parseInt(o, 10), a)), l = t.theme.renderUI({
                    targetNode: r,
                    width: i,
                    height: o,
                    deltaWidth: n.delta_width,
                    deltaHeight: n.delta_height
                }), n.content_editable || (E.setStyles(l.sizeContainer || l.editorContainer, {
                    wi2dth: i,
                    h2eight: o
                }), o = (l.iframeHeight || o) + ("number" == typeof o ? l.deltaHeight || 0 : ""), a > o && (o = a))) : (l = n.theme(t, r), l.editorContainer.nodeType && (l.editorContainer = l.editorContainer.id = l.editorContainer.id || t.id + "_parent"), l.iframeContainer.nodeType && (l.iframeContainer = l.iframeContainer.id = l.iframeContainer.id || t.id + "_iframecontainer"), o = l.iframeHeight || r.offsetHeight), t.editorContainer = l.editorContainer), n.content_css && T(R(n.content_css), function(e) {
                    t.contentCSS.push(t.documentBaseURI.toAbsolute(e))
                }), n.content_style && t.contentStyles.push(n.content_style), n.content_editable) return r = s = l = null, t.initContentBody();
                for (t.iframeHTML = n.doctype + "<html><head>", n.document_base_url != t.documentBaseUrl && (t.iframeHTML += '<base href="' + t.documentBaseURI.getURI() + '" />'), !b.caretAfter && n.ie7_compat && (t.iframeHTML += '<meta http-equiv="X-UA-Compatible" content="IE=7" />'), t.iframeHTML += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', m = 0; m < t.contentCSS.length; m++) {
                    var g = t.contentCSS[m];
                    t.iframeHTML += '<link type="text/css" rel="stylesheet" href="' + g + '" />', t.loadedCSS[g] = !0
                }
                u = n.body_id || "tinymce", -1 != u.indexOf("=") && (u = t.getParam("body_id", "", "hash"), u = u[t.id] || u), f = n.body_class || "", -1 != f.indexOf("=") && (f = t.getParam("body_class", "", "hash"), f = f[t.id] || ""), t.iframeHTML += '</head><body id="' + u + '" class="mce-content-body ' + f + '" onload="window.parent.tinymce.get(\'' + t.id + "').fire('load');\"><br></body></html>";
                var v = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + t.id + '");document.write(ed.iframeHTML);document.close();ed.initContentBody(true);})()';
                if (document.domain != location.hostname && (d = v), s = E.add(l.iframeContainer, "iframe", {
                    id: t.id + "_ifr",
                    src: d || 'javascript:""',
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: t.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
                    style: {
                        width: "100%",
                        height: o,
                        display: "block"
                    }
                }), H) try {
                    t.getDoc()
                } catch (y) {
                    s.src = d = v
                }
                t.contentAreaContainer = l.iframeContainer, l.editorContainer && (E.get(l.editorContainer).style.display = t.orgDisplay), E.get(t.id).style.display = "none", E.setAttrib(t.id, "aria-hidden", !0), d || t.initContentBody(), r = s = l = null
            },
            initContentBody: function(t) {
                var n = this,
                    o = n.settings,
                    f = E.get(n.id),
                    p = n.getDoc(),
                    m, h;
                o.inline || (n.getElement().style.visibility = n.orgVisibility), t || o.content_editable || (p.open(), p.write(n.iframeHTML), p.close()), o.content_editable && (n.on("remove", function() {
                    var e = this.getBody();
                    E.removeClass(e, "mce-content-body"), E.removeClass(e, "mce-edit-focus"), E.setAttrib(e, "contentEditable", null)
                }), E.addClass(f, "mce-content-body"), n.contentDocument = p = o.content_document || document, n.contentWindow = o.content_window || window, n.bodyElement = f, o.content_document = o.content_window = null, o.root_name = f.nodeName.toLowerCase()), m = n.getBody(), m.disabled = !0, o.readonly || (n.inline && "static" == E.getStyle(m, "position", !0) && (m.style.position = "relative"), m.contentEditable = n.getParam("content_editable_state", !0)), m.disabled = !1, n.schema = new g(o), n.dom = new e(p, {
                    keep_values: !0,
                    url_converter: n.convertURL,
                    url_converter_scope: n,
                    hex_colors: o.force_hex_style_colors,
                    class_filter: o.class_filter,
                    update_styles: !0,
                    root_element: o.content_editable ? n.id : null,
                    collect: o.content_editable,
                    schema: n.schema,
                    onSetAttrib: function(e) {
                        n.fire("SetAttrib", e)
                    }
                }), n.parser = new v(o, n.schema), n.parser.addAttributeFilter("src,href,style,tabindex", function(e, t) {
                    for (var r = e.length, i, o = n.dom, a, s; r--;) i = e[r], a = i.attr(t), s = "data-mce-" + t, i.attributes.map[s] || ("style" === t ? (a = o.serializeStyle(o.parseStyle(a), i.name), a.length || (a = null), i.attr(s, a), i.attr(t, a)) : "tabindex" === t ? (i.attr(s, a), i.attr(t, null)) : i.attr(s, n.convertURL(a, t, i.name)))
                }), n.parser.addNodeFilter("script", function(e) {
                    for (var t = e.length, n; t--;) n = e[t], n.attr("type", "mce-" + (n.attr("type") || "no/type"))
                }), n.parser.addNodeFilter("#cdata", function(e) {
                    for (var t = e.length, n; t--;) n = e[t], n.type = 8, n.name = "#comment", n.value = "[CDATA[" + n.value + "]]"
                }), n.parser.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function(e) {
                    for (var t = e.length, i, o = n.schema.getNonEmptyElements(); t--;) i = e[t], i.isEmpty(o) && (i.empty().append(new r("br", 1)).shortEnded = !0)
                }), n.serializer = new i(o, n), n.selection = new a(n.dom, n.getWin(), n.serializer, n), n.formatter = new s(n), n.undoManager = new l(n), n.forceBlocks = new d(n), n.enterKey = new c(n), n.editorCommands = new u(n), n.fire("PreInit"), o.browser_spellcheck || o.gecko_spellcheck || (p.body.spellcheck = !1, E.setAttrib(m, "spellcheck", "false")), n.fire("PostRender"), n.quirks = y(n), o.directionality && (m.dir = o.directionality), o.nowrap && (m.style.whiteSpace = "nowrap"), o.protect && n.on("BeforeSetContent", function(e) {
                    T(o.protect, function(t) {
                        e.content = e.content.replace(t, function(e) {
                            return "<!--mce:protected " + escape(e) + "-->"
                        })
                    })
                }), n.on("SetContent", function() {
                    n.addVisual(n.getBody())
                }), o.padd_empty_editor && n.on("PostProcess", function(e) {
                    e.content = e.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/, "")
                }), n.load({
                    initial: !0,
                    format: "html"
                }), n.startContent = n.getContent({
                    format: "raw"
                }), n.initialized = !0, n.bindPendingEventDelegates(), n.fire("init"), n.focus(!0), n.nodeChanged({
                    initial: !0
                }), n.execCallback("init_instance_callback", n), n.contentStyles.length > 0 && (h = "", T(n.contentStyles, function(e) {
                    h += e + "\r\n"
                }), n.dom.addStyle(h)), T(n.contentCSS, function(e) {
                    n.loadedCSS[e] || (n.dom.loadCSS(e), n.loadedCSS[e] = !0)
                }), o.auto_focus && setTimeout(function() {
                    var e = n.editorManager.get(o.auto_focus);
                    e.selection.select(e.getBody(), 1), e.selection.collapse(1), e.getBody().focus(), e.getWin().focus()
                }, 100), f = p = m = null
            },
            focus: function(e) {
                var t, n = this,
                    r = n.selection,
                    i = n.settings.content_editable,
                    o, a, s = n.getDoc(),
                    l;
                if (!e) {
                    if (o = r.getRng(), o.item && (a = o.item(0)), n._refreshContentEditable(), i || (b.opera || n.getBody().focus(), n.getWin().focus()), M || i) {
                        if (l = n.getBody(), l.setActive) try {
                            l.setActive()
                        } catch (c) {
                            l.focus()
                        } else l.focus();
                        i && r.normalize()
                    }
                    a && a.ownerDocument == s && (o = s.body.createControlRange(), o.addElement(a), o.select())
                }
                n.editorManager.activeEditor != n && ((t = n.editorManager.activeEditor) && t.fire("deactivate", {
                    relatedTarget: n
                }), n.fire("activate", {
                    relatedTarget: t
                })), n.editorManager.activeEditor = n
            },
            execCallback: function(e) {
                var t = this,
                    n = t.settings[e],
                    r;
                if (n) return t.callbackLookup && (r = t.callbackLookup[e]) && (n = r.func, r = r.scope), "string" == typeof n && (r = n.replace(/\.\w+$/, ""), r = r ? D(r) : 0, n = D(n), t.callbackLookup = t.callbackLookup || {}, t.callbackLookup[e] = {
                    func: n,
                    scope: r
                }), n.apply(r || t, Array.prototype.slice.call(arguments, 1))
            },
            translate: function(e) {
                var t = this.settings.language || "en",
                    n = this.editorManager.i18n;
                return e ? n.data[t + "." + e] || e.replace(/\{\#([^\}]+)\}/g, function(e, r) {
                    return n.data[t + "." + r] || "{#" + r + "}"
                }) : ""
            },
            getLang: function(e, n) {
                return this.editorManager.i18n.data[(this.settings.language || "en") + "." + e] || (n !== t ? n : "{#" + e + "}")
            },
            getParam: function(e, t, n) {
                var r = e in this.settings ? this.settings[e] : t,
                    i;
                return "hash" === n ? (i = {}, "string" == typeof r ? T(r.split(r.indexOf("=") > 0 ? /[;,](?![^=;,]*(?:[;,]|$))/ : ","), function(e) {
                    e = e.split("="), i[B(e[0])] = B(e.length > 1 ? e[1] : e)
                }) : i = r, i) : r
            },
            nodeChanged: function() {
                var e = this,
                    t = e.selection,
                    n, r, i;
                !e.initialized || e.settings.disable_nodechange || e.settings.readonly || (i = e.getBody(), n = t.getStart() || i, n = H && n.ownerDocument != e.getDoc() ? e.getBody() : n, "IMG" == n.nodeName && t.isCollapsed() && (n = n.parentNode), r = [], e.dom.getParent(n, function(e) {
                    return e === i ? !0 : void r.push(e)
                }), e.fire("NodeChange", {
                    element: n,
                    parents: r
                }))
            },
            addButton: function(e, t) {
                var n = this;
                t.cmd && (t.onclick = function() {
                    n.execCommand(t.cmd)
                }), t.text || t.icon || (t.icon = e), n.buttons = n.buttons || {}, t.tooltip = t.tooltip || t.title, n.buttons[e] = t
            },
            addMenuItem: function(e, t) {
                var n = this;
                t.cmd && (t.onclick = function() {
                    n.execCommand(t.cmd)
                }), n.menuItems = n.menuItems || {}, n.menuItems[e] = t
            },
            addCommand: function(e, t, n) {
                this.execCommands[e] = {
                    func: t,
                    scope: n || this
                }
            },
            addQueryStateHandler: function(e, t, n) {
                this.queryStateCommands[e] = {
                    func: t,
                    scope: n || this
                }
            },
            addQueryValueHandler: function(e, t, n) {
                this.queryValueCommands[e] = {
                    func: t,
                    scope: n || this
                }
            },
            addShortcut: function(e, t, n, r) {
                this.shortcuts.add(e, t, n, r)
            },
            execCommand: function(e, t, n, r) {
                var i = this,
                    o = 0,
                    a;
                if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e) || r && r.skip_focus || i.focus(), r = S({}, r), r = i.fire("BeforeExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), r.isDefaultPrevented()) return !1;
                if ((a = i.execCommands[e]) && a.func.call(a.scope, t, n) !== !0) return i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0;
                if (T(i.plugins, function(r) {
                    return r.execCommand && r.execCommand(e, t, n) ? (i.fire("ExecCommand", {
                        command: e,
                        ui: t,
                        value: n
                    }), o = !0, !1) : void 0
                }), o) return o;
                if (i.theme && i.theme.execCommand && i.theme.execCommand(e, t, n)) return i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0;
                if (i.editorCommands.execCommand(e, t, n)) return i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0;
                try {
                    o = i.getDoc().execCommand(e, t, n)
                } catch (s) {}
                return o ? (i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0) : !1
            },
            queryCommandState: function(e) {
                var t = this,
                    n, r;
                if (!t._isHidden()) {
                    if ((n = t.queryStateCommands[e]) && (r = n.func.call(n.scope), r === !0 || r === !1)) return r;
                    if (r = t.editorCommands.queryCommandState(e), -1 !== r) return r;
                    try {
                        return t.getDoc().queryCommandState(e)
                    } catch (i) {}
                }
            },
            queryCommandValue: function(e) {
                var n = this,
                    r, i;
                if (!n._isHidden()) {
                    if ((r = n.queryValueCommands[e]) && (i = r.func.call(r.scope), i !== !0)) return i;
                    if (i = n.editorCommands.queryCommandValue(e), i !== t) return i;
                    try {
                        return n.getDoc().queryCommandValue(e)
                    } catch (o) {}
                }
            },
            show: function() {
                var e = this;
                e.hidden && (e.hidden = !1, e.inline ? e.getBody().contentEditable = !0 : (E.show(e.getContainer()), E.hide(e.id)), e.load(), e.fire("show"))
            },
            hide: function() {
                var e = this,
                    t = e.getDoc();
                e.hidden || (H && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = !1, e == e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (E.hide(e.getContainer()), E.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"))
            },
            isHidden: function() {
                return !!this.hidden
            },
            setProgressState: function(e, t) {
                this.fire("ProgressState", {
                    state: e,
                    time: t
                })
            },
            load: function(e) {
                var n = this,
                    r = n.getElement(),
                    i;
                return r ? (e = e || {}, e.load = !0, i = n.setContent(r.value !== t ? r.value : r.innerHTML, e), e.element = r, e.no_events || n.fire("LoadContent", e), e.element = r = null, i) : void 0
            },
            save: function(e) {
                var t = this,
                    n = t.getElement(),
                    r, i;
                if (n && t.initialized) return e = e || {}, e.save = !0, e.element = n, r = e.content = t.getContent(e), e.no_events || t.fire("SaveContent", e), r = e.content, /TEXTAREA|INPUT/i.test(n.nodeName) ? n.value = r : (t.inline || (n.innerHTML = r), (i = E.getParent(t.id, "form")) && T(i.elements, function(e) {
                    return e.name == t.id ? (e.value = r, !1) : void 0
                })), e.element = n = null, e.set_dirty !== !1 && (t.isNotDirty = !0), r
            },
            setContent: function(e, t) {
                var n = this,
                    r = n.getBody(),
                    i;
                return t = t || {}, t.format = t.format || "html", t.set = !0, t.content = e, t.no_events || n.fire("BeforeSetContent", t), e = t.content, 0 === e.length || /^\s+$/.test(e) ? (i = n.settings.forced_root_block, i && n.schema.isValidChild(r.nodeName.toLowerCase(), i.toLowerCase()) ? (e = H && 11 > H ? "" : '<br data-mce-bogus="1">', e = n.dom.createHTML(i, n.settings.forced_root_block_attrs, e)) : H || (e = '<br data-mce-bogus="1">'), r.innerHTML = e, n.fire("SetContent", t)) : ("raw" !== t.format && (e = new o({}, n.schema).serialize(n.parser.parse(e, {
                    isRootContent: !0
                }))), t.content = B(e), n.dom.setHTML(r, t.content), t.no_events || n.fire("SetContent", t)), t.content
            },
            getContent: function(e) {
                var t = this,
                    n, r = t.getBody();
                return e = e || {}, e.format = e.format || "html", e.get = !0, e.getInner = !0, e.no_events || t.fire("BeforeGetContent", e), n = "raw" == e.format ? r.innerHTML : "text" == e.format ? r.innerText || r.textContent : t.serializer.serialize(r, e), e.content = "text" != e.format ? B(n) : n, e.no_events || t.fire("GetContent", e), e.content
            },
            insertContent: function(e, t) {
                t && (e = S({
                    content: e
                }, t)), this.execCommand("mceInsertContent", !1, e)
            },
            isDirty: function() {
                return !this.isNotDirty
            },
            getContainer: function() {
                var e = this;
                return e.container || (e.container = E.get(e.editorContainer || e.id + "_parent")), e.container
            },
            getContentAreaContainer: function() {
                return this.contentAreaContainer
            },
            getElement: function() {
                return E.get(this.settings.content_element || this.id)
            },
            getWin: function() {
                var e = this,
                    t;
                return e.contentWindow || (t = E.get(e.id + "_ifr"), t && (e.contentWindow = t.contentWindow)), e.contentWindow
            },
            getDoc: function() {
                var e = this,
                    t;
                return e.contentDocument || (t = e.getWin(), t && (e.contentDocument = t.document)), e.contentDocument
            },
            getBody: function() {
                return this.bodyElement || this.getDoc().body
            },
            convertURL: function(e, t, n) {
                var r = this,
                    i = r.settings;
                return i.urlconverter_callback ? r.execCallback("urlconverter_callback", e, n, !0, t) : !i.convert_urls || n && "LINK" == n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : i.relative_urls ? r.documentBaseURI.toRelative(e) : e = r.documentBaseURI.toAbsolute(e, i.remove_script_host)
            },
            addVisual: function(e) {
                var n = this,
                    r = n.settings,
                    i = n.dom,
                    o;
                e = e || n.getBody(), n.hasVisual === t && (n.hasVisual = r.visual), T(i.select("table,a", e), function(e) {
                    var t;
                    switch (e.nodeName) {
                    case "TABLE":
                        return o = r.visual_table_class || "mce-item-table", t = i.getAttrib(e, "border"), void(t && "0" != t || (n.hasVisual ? i.addClass(e, o) : i.removeClass(e, o)));
                    case "A":
                        return void(i.getAttrib(e, "href", !1) || (t = i.getAttrib(e, "name") || e.id, o = r.visual_anchor_class || "mce-item-anchor", t && (n.hasVisual ? i.addClass(e, o) : i.removeClass(e, o))))
                    }
                }), n.fire("VisualAid", {
                    element: e,
                    hasVisual: n.hasVisual
                })
            },
            remove: function() {
                var e = this;
                if (!e.removed) {
                    e.removed = 1, e.save(), e.hasHiddenInput && E.remove(e.getElement().nextSibling), e.inline || (H && 10 > H && e.getDoc().execCommand("SelectAll", !1, null), E.setStyle(e.id, "display", e.orgDisplay), e.getBody().onload = null, L.unbind(e.getWin()), L.unbind(e.getDoc()));
                    var t = e.getContainer();
                    L.unbind(e.getBody()), L.unbind(t), e.fire("remove"), e.editorManager.remove(e), E.remove(t), e.destroy()
                }
            },
            destroy: function(e) {
                var t = this,
                    n;
                if (!t.destroyed) {
                    if (!e && !t.removed) return void t.remove();
                    e && M && (L.unbind(t.getDoc()), L.unbind(t.getWin()), L.unbind(t.getBody())), e || (t.editorManager.off("beforeunload", t._beforeUnload), t.theme && t.theme.destroy && t.theme.destroy(), t.selection.destroy(), t.dom.destroy()), n = t.formElement, n && (n._mceOldSubmit && (n.submit = n._mceOldSubmit, n._mceOldSubmit = null), E.unbind(n, "submit reset", t.formEventDelegate)), t.contentAreaContainer = t.formElement = t.container = t.editorContainer = null, t.settings.content_element = t.bodyElement = t.contentDocument = t.contentWindow = null, t.selection && (t.selection = t.selection.win = t.selection.dom = t.selection.dom.doc = null), t.destroyed = 1
                }
            },
            _refreshContentEditable: function() {
                var e = this,
                    t, n;
                e._isHidden() && (t = e.getBody(), n = t.parentNode, n.removeChild(t), n.appendChild(t), t.focus())
            },
            _isHidden: function() {
                var e;
                return M ? (e = this.selection.getSel(), !e || !e.rangeCount || 0 === e.rangeCount) : 0
            }
        }, S(_.prototype, x), _
    }), r(dt, [], function() {
        var e = {};
        return {
            rtl: !1,
            add: function(t, n) {
                for (var r in n) e[r] = n[r];
                this.rtl = this.rtl || "rtl" === e._dir
            },
            translate: function(t) {
                if ("undefined" == typeof t) return t;
                if ("string" != typeof t && t.raw) return t.raw;
                if (t.push) {
                    var n = t.slice(1);
                    t = (e[t[0]] || t[0]).replace(/\{([^\}]+)\}/g, function(e, t) {
                        return n[t]
                    })
                }
                return e[t] || t
            },
            data: e
        }
    }), r(ut, [v, h], function(e, t) {
        function n(e) {
            function s() {
                try {
                    return document.activeElement
                } catch (e) {
                    return document.body
                }
            }
            function l(e, t) {
                if (t && t.startContainer) {
                    if (!e.isChildOf(t.startContainer, e.getRoot()) || !e.isChildOf(t.endContainer, e.getRoot())) return;
                    return {
                        startContainer: t.startContainer,
                        startOffset: t.startOffset,
                        endContainer: t.endContainer,
                        endOffset: t.endOffset
                    }
                }
                return t
            }
            function c(e, t) {
                var n;
                return t.startContainer ? (n = e.getDoc().createRange(), n.setStart(t.startContainer, t.startOffset), n.setEnd(t.endContainer, t.endOffset)) : n = t, n
            }
            function d(e) {
                return !!a.getParent(e, n.isEditorUIElement)
            }
            function u(n) {
                var u = n.editor;
                u.on("init", function() {
                    (u.inline || t.ie) && (u.on("nodechange keyup", function() {
                        var e = document.activeElement;
                        e && e.id == u.id + "_ifr" && (e = u.getBody()), u.dom.isChildOf(e, u.getBody()) && (u.lastRng = u.selection.getRng())
                    }), t.webkit && !r && (r = function() {
                        var t = e.activeEditor;
                        if (t && t.selection) {
                            var n = t.selection.getRng();
                            n && !n.collapsed && (u.lastRng = n)
                        }
                    }, a.bind(document, "selectionchange", r)))
                }), u.on("setcontent", function() {
                    u.lastRng = null
                }), u.on("mousedown", function() {
                    u.selection.lastFocusBookmark = null
                }), u.on("focusin", function() {
                    var t = e.focusedEditor;
                    u.selection.lastFocusBookmark && (u.selection.setRng(c(u, u.selection.lastFocusBookmark)), u.selection.lastFocusBookmark = null), t != u && (t && t.fire("blur", {
                        focusedEditor: u
                    }), e.activeEditor = u, e.focusedEditor = u, u.fire("focus", {
                        blurredEditor: t
                    }), u.focus(!0)), u.lastRng = null
                }), u.on("focusout", function() {
                    window.setTimeout(function() {
                        var t = e.focusedEditor;
                        d(s()) || t != u || (u.fire("blur", {
                            focusedEditor: null
                        }), e.focusedEditor = null, u.selection && (u.selection.lastFocusBookmark = null))
                    }, 0)
                }), i || (i = function(t) {
                    var n = e.activeEditor;
                    n && t.target.ownerDocument == document && (n.selection && (n.selection.lastFocusBookmark = l(n.dom, n.lastRng)), d(t.target) || e.focusedEditor != n || (n.fire("blur", {
                        focusedEditor: null
                    }), e.focusedEditor = null))
                }, a.bind(document, "focusin", i)), u.inline && !o && (o = function(t) {
                    var n = e.activeEditor;
                    if (n.inline && !n.dom.isChildOf(t.target, n.getBody())) {
                        var r = n.selection.getRng();
                        r.collapsed || (n.lastRng = r)
                    }
                }, a.bind(document, "mouseup", o))
            }
            function f(t) {
                e.focusedEditor == t.editor && (e.focusedEditor = null), e.activeEditor || (a.unbind(document, "selectionchange", r), a.unbind(document, "focusin", i), a.unbind(document, "mouseup", o), r = i = o = null)
            }
            e.on("AddEditor", u), e.on("RemoveEditor", f)
        }
        var r, i, o, a = e.DOM;
        return n.isEditorUIElement = function(e) {
            return -1 !== e.className.toString().indexOf("mce-")
        }, n
    }), r(ft, [ct, v, z, h, f, at, dt, ut], function(e, t, n, r, i, o, a, s) {
        function l(e) {
            var t = g.editors,
                n;
            delete t[e.id];
            for (var r = 0; r < t.length; r++) if (t[r] == e) {
                t.splice(r, 1), n = !0;
                break
            }
            return g.activeEditor == e && (g.activeEditor = t[0]), g.focusedEditor == e && (g.focusedEditor = null), n
        }
        function c(e) {
            return e && !(e.getContainer() || e.getBody()).parentNode && (l(e), e.destroy(!0), e = null), e
        }
        var d = t.DOM,
            u = i.explode,
            f = i.each,
            p = i.extend,
            m = 0,
            h, g;
        return g = {
            majorVersion: "4",
            minorVersion: "0.28",
            releaseDate: "2014-05-27",
            editors: [],
            i18n: a,
            activeEditor: null,
            setup: function() {
                var e = this,
                    t, r, i = "",
                    o, a;
                if (r = document.location.href, /^[^:]+:\/\/[^\/]+\//.test(r) && (r = r.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(r) || (r += "/")), o = window.tinymce || window.tinyMCEPreInit) t = o.base || o.baseURL, i = o.suffix;
                else {
                    for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) if (a = l[c].src, /tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)) {
                        -1 != a.indexOf(".min") && (i = ".min"), t = a.substring(0, a.lastIndexOf("/"));
                        break
                    }!t && document.currentScript && (a = document.currentScript.src, -1 != a.indexOf(".min") && (i = ".min"), t = a.substring(0, a.lastIndexOf("/")))
                }
                e.baseURL = new n(r).toAbsolute(t), e.documentBaseURL = r, e.baseURI = new n(e.baseURL), e.suffix = i, e.focusManager = new s(e)
            },
            init: function(t) {
                function n(e) {
                    var t = e.id;
                    return t || (t = e.name, t = t && !d.get(t) ? e.name : d.uniqueId(), e.setAttribute("id", t)), t
                }
                function r(t, n) {
                    if (!c(s.get(t))) {
                        var r = new e(t, n, s);
                        l.push(r), r.render()
                    }
                }
                function i(e, t, n) {
                    var r = e[t];
                    if (r) return r.apply(n || this, Array.prototype.slice.call(arguments, 2))
                }
                function o(e, t) {
                    return t.constructor === RegExp ? t.test(e.className) : d.hasClass(e, t)
                }
                function a() {
                    var c, g;
                    if (d.unbind(window, "ready", a), i(t, "onpageload"), t.types) return void f(t.types, function(e) {
                        f(d.select(e.selector), function(i) {
                            r(n(i), p({}, t, e))
                        })
                    });
                    if (t.selector) return void f(d.select(t.selector), function(e) {
                        r(n(e), t)
                    });
                    switch (t.mode) {
                    case "exact":
                        c = t.elements || "", c.length > 0 && f(u(c), function(n) {
                            d.get(n) ? (h = new e(n, t, s), l.push(h), h.render()) : f(document.forms, function(e) {
                                f(e.elements, function(e) {
                                    e.name === n && (n = "mce_editor_" + m++, d.setAttrib(e, "id", n), r(n, t))
                                })
                            })
                        });
                        break;
                    case "textareas":
                    case "specific_textareas":
                        f(d.select("textarea"), function(e) {
                            t.editor_deselector && o(e, t.editor_deselector) || (!t.editor_selector || o(e, t.editor_selector)) && r(n(e), t)
                        })
                    }
                    t.oninit && (c = g = 0, f(l, function(e) {
                        g++, e.initialized ? c++ : e.on("init", function() {
                            c++, c == g && i(t, "oninit")
                        }), c == g && i(t, "oninit")
                    }))
                }
                var s = this,
                    l = [],
                    h;
                s.settings = t, d.bind(window, "ready", a)
            },
            get: function(e) {
                return arguments.length ? e in this.editors ? this.editors[e] : null : this.editors
            },
            add: function(e) {
                var t = this,
                    n = t.editors;
                return n[e.id] = e, n.push(e), t.activeEditor = e, t.fire("AddEditor", {
                    editor: e
                }), h || (h = function() {
                    t.fire("BeforeUnload")
                }, d.bind(window, "beforeunload", h)), e
            },
            createEditor: function(t, n) {
                return this.add(new e(t, n, this))
            },
            remove: function(e) {
                var t = this,
                    n, r = t.editors,
                    i; {
                    if (e) return "string" == typeof e ? (e = e.selector || e, void f(d.select(e), function(e) {
                        t.remove(r[e.id])
                    })) : (i = e, r[i.id] ? (l(i) && t.fire("RemoveEditor", {
                        editor: i
                    }), r.length || d.unbind(window, "beforeunload", h), i.remove(), i) : null);
                    for (n = r.length - 1; n >= 0; n--) t.remove(r[n])
                }
            },
            execCommand: function(t, n, r) {
                var i = this,
                    o = i.get(r);
                switch (t) {
                case "mceAddEditor":
                    return i.get(r) || new e(r, i.settings, i).render(), !0;
                case "mceRemoveEditor":
                    return o && o.remove(), !0;
                case "mceToggleEditor":
                    return o ? (o.isHidden() ? o.show() : o.hide(), !0) : (i.execCommand("mceAddEditor", 0, r), !0)
                }
                return i.activeEditor ? i.activeEditor.execCommand(t, n, r) : !1
            },
            triggerSave: function() {
                f(this.editors, function(e) {
                    e.save()
                })
            },
            addI18n: function(e, t) {
                a.add(e, t)
            },
            translate: function(e) {
                return a.translate(e)
            }
        }, p(g, o), g.setup(), window.tinymce = window.tinyMCE = g, g
    }), r(pt, [ft, f], function(e, t) {
        var n = t.each,
            r = t.explode;
        e.on("AddEditor", function(e) {
            var t = e.editor;
            t.on("preInit", function() {
                function e(e, t) {
                    n(t, function(t, n) {
                        t && s.setStyle(e, n, t)
                    }), s.rename(e, "span")
                }
                function i(e) {
                    s = t.dom, l.convert_fonts_to_spans && n(s.select("font,u,strike", e.node), function(e) {
                        o[e.nodeName.toLowerCase()](s, e)
                    })
                }
                var o, a, s, l = t.settings;
                l.inline_styles && (a = r(l.font_size_legacy_values), o = {
                    font: function(t, n) {
                        e(n, {
                            backgroundColor: n.style.backgroundColor,
                            color: n.color,
                            fontFamily: n.face,
                            fontSize: a[parseInt(n.size, 10) - 1]
                        })
                    },
                    u: function(t, n) {
                        e(n, {
                            textDecoration: "underline"
                        })
                    },
                    strike: function(t, n) {
                        e(n, {
                            textDecoration: "line-through"
                        })
                    }
                }, t.on("PreProcess SetContent", i))
            })
        })
    }), r(mt, [], function() {
        return {
            send: function(e) {
                function t() {
                    !e.async || 4 == n.readyState || r++ > 1e4 ? (e.success && 1e4 > r && 200 == n.status ? e.success.call(e.success_scope, "" + n.responseText, n, e) : e.error && e.error.call(e.error_scope, r > 1e4 ? "TIMED_OUT" : "GENERAL", n, e), n = null) : setTimeout(t, 10)
                }
                var n, r = 0;
                if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = e.async === !1 ? !1 : !0, e.data = e.data || "", n = new XMLHttpRequest) {
                    if (n.overrideMimeType && n.overrideMimeType(e.content_type), n.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.content_type && n.setRequestHeader("Content-Type", e.content_type), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(e.data), !e.async) return t();
                    setTimeout(t, 10)
                }
            }
        }
    }), r(ht, [], function() {
        function e(t, n) {
            var r, i, o, a;
            if (n = n || '"', null === t) return "null";
            if (o = typeof t, "string" == o) return i = "\bb    t\nn\ff\rr\"\"''\\\\", n + t.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function(e, t) {
                return '"' === n && "'" === e ? e : (r = i.indexOf(t), r + 1 ? "\\" + i.charAt(r + 1) : (e = t.charCodeAt().toString(16), "\\u" + "0000".substring(e.length) + e))
            }) + n;
            if ("object" == o) {
                if (t.hasOwnProperty && "[object Array]" === Object.prototype.toString.call(t)) {
                    for (r = 0, i = "["; r < t.length; r++) i += (r > 0 ? "," : "") + e(t[r], n);
                    return i + "]"
                }
                i = "{";
                for (a in t) t.hasOwnProperty(a) && (i += "function" != typeof t[a] ? (i.length > 1 ? "," + n : n) + a + n + ":" + e(t[a], n) : "");
                return i + "}"
            }
            return "" + t
        }
        return {
            serialize: e,
            parse: function(e) {
                try {
                    return window[String.fromCharCode(101) + "val"]("(" + e + ")")
                } catch (t) {}
            }
        }
    }), r(gt, [ht, mt, f], function(e, t, n) {
        function r(e) {
            this.settings = i({}, e), this.count = 0
        }
        var i = n.extend;
        return r.sendRPC = function(e) {
            return (new r).send(e)
        }, r.prototype = {
            send: function(n) {
                var r = n.error,
                    o = n.success;
                n = i(this.settings, n), n.success = function(t, i) {
                    t = e.parse(t), "undefined" == typeof t && (t = {
                        error: "JSON Parse error."
                    }), t.error ? r.call(n.error_scope || n.scope, t.error, i) : o.call(n.success_scope || n.scope, t.result)
                }, n.error = function(e, t) {
                    r && r.call(n.error_scope || n.scope, e, t)
                }, n.data = e.serialize({
                    id: n.id || "c" + this.count++,
                    method: n.method,
                    params: n.params
                }), n.content_type = "application/json", t.send(n)
            }
        }, r
    }), r(vt, [v], function(e) {
        return {
            callbacks: {},
            count: 0,
            send: function(n) {
                var r = this,
                    i = e.DOM,
                    o = n.count !== t ? n.count : r.count,
                    a = "tinymce_jsonp_" + o;
                r.callbacks[o] = function(e) {
                    i.remove(a), delete r.callbacks[o], n.callback(e)
                }, i.add(i.doc.body, "script", {
                    id: a,
                    src: n.url,
                    type: "text/javascript"
                }), r.count++
            }
        }
    }), r(yt, [], function() {
        function e() {
            s = [];
            for (var e in a) s.push(e);
            i.length = s.length
        }
        function n() {
            function n(e) {
                var n, r;
                return r = e !== t ? d + e : i.indexOf(",", d), -1 === r || r > i.length ? null : (n = i.substring(d, r), d = r + 1, n)
            }
            var r, i, s, d = 0;
            if (a = {}, c) {
                o.load(l), i = o.getAttribute(l) || "";
                do {
                    var u = n();
                    if (null === u) break;
                    if (r = n(parseInt(u, 32) || 0), null !== r) {
                        if (u = n(), null === u) break;
                        s = n(parseInt(u, 32) || 0), r && (a[r] = s)
                    }
                } while (null !== r);
                e()
            }
        }
        function r() {
            var t, n = "";
            if (c) {
                for (var r in a) t = a[r], n += (n ? "," : "") + r.length.toString(32) + "," + r + "," + t.length.toString(32) + "," + t;
                o.setAttribute(l, n);
                try {
                    o.save(l)
                } catch (i) {}
                e()
            }
        }
        var i, o, a, s, l, c;
        try {
            if (window.localStorage) return localStorage
        } catch (d) {}
        return l = "tinymce", o = document.documentElement, c = !! o.addBehavior, c && o.addBehavior("#default#userData"), i = {
            key: function(e) {
                return s[e]
            },
            getItem: function(e) {
                return e in a ? a[e] : null
            },
            setItem: function(e, t) {
                a[e] = "" + t, r()
            },
            removeItem: function(e) {
                delete a[e], r()
            },
            clear: function() {
                a = {}, r()
            }
        }, n(), i
    }), r(bt, [v, d, y, b, f, h], function(e, t, n, r, i, o) {
        var a = window.tinymce;
        return a.DOM = e.DOM, a.ScriptLoader = n.ScriptLoader, a.PluginManager = r.PluginManager, a.ThemeManager = r.ThemeManager, a.dom = a.dom || {}, a.dom.Event = t.Event, i.each(i, function(e, t) {
            a[t] = e
        }), i.each("isOpera isWebKit isIE isGecko isMac".split(" "), function(e) {
            a[e] = o[e.substr(2).toLowerCase()]
        }), {}
    }), r(Ct, [W, f], function(e, t) {
        return e.extend({
            Defaults: {
                firstControlClass: "first",
                lastControlClass: "last"
            },
            init: function(e) {
                this.settings = t.extend({}, this.Defaults, e)
            },
            preRender: function(e) {
                e.addClass(this.settings.containerClass, "body")
            },
            applyClasses: function(e) {
                var t = this,
                    n = t.settings,
                    r, i, o;
                r = e.items().filter(":visible"), i = n.firstControlClass, o = n.lastControlClass, r.each(function(e) {
                    e.removeClass(i).removeClass(o), n.controlClass && e.addClass(n.controlClass)
                }), r.eq(0).addClass(i), r.eq(-1).addClass(o)
            },
            renderHtml: function(e) {
                var t = this,
                    n = t.settings,
                    r, i = "";
                return r = e.items(), r.eq(0).addClass(n.firstControlClass), r.eq(-1).addClass(n.lastControlClass), r.each(function(e) {
                    n.controlClass && e.addClass(n.controlClass), i += e.renderHtml()
                }), i
            },
            recalc: function() {},
            postRender: function() {}
        })
    }), r(xt, [Ct], function(e) {
        return e.extend({
            Defaults: {
                containerClass: "abs-layout",
                controlClass: "abs-layout-item"
            },
            recalc: function(e) {
                e.items().filter(":visible").each(function(e) {
                    var t = e.settings;
                    e.layoutRect({
                        x: t.x,
                        y: t.y,
                        w: t.w,
                        h: t.h
                    }), e.recalc && e.recalc()
                })
            },
            renderHtml: function(e) {
                return '<div id="' + e._id + '-absend" class="' + e.classPrefix + 'abs-end"></div>' + this._super(e)
            }
        })
    }), r(wt, [j, Z], function(e, t) {
        return e.extend({
            Mixins: [t],
            Defaults: {
                classes: "widget tooltip tooltip-n"
            },
            text: function(e) {
                var t = this;
                return "undefined" != typeof e ? (t._value = e, t._rendered && (t.getEl().lastChild.innerHTML = t.encode(e)), t) : t._value
            },
            renderHtml: function() {
                var e = this,
                    t = e.classPrefix;
                return '<div id="' + e._id + '" class="' + e.classes() + '" role="presentation"><div class="' + t + 'tooltip-arrow"></div><div class="' + t + 'tooltip-inner">' + e.encode(e._text) + "</div></div>"
            },
            repaint: function() {
                var e = this,
                    t, n;
                t = e.getEl().style, n = e._layoutRect, t.left = n.x + "px", t.top = n.y + "px", t.zIndex = 131070
            }
        })
    }), r(_t, [j, wt], function(e, t) {
        var n, r = e.extend({
            init: function(e) {
                var t = this;
                t._super(e), e = t.settings, t.canFocus = !0, e.tooltip && r.tooltips !== !1 && (t.on("mouseenter", function(n) {
                    var r = t.tooltip().moveTo(-65535);
                    if (n.control == t) {
                        var i = r.text(e.tooltip).show().testMoveRel(t.getEl(), ["bc-tc", "bc-tl", "bc-tr"]);
                        r.toggleClass("tooltip-n", "bc-tc" == i), r.toggleClass("tooltip-nw", "bc-tl" == i), r.toggleClass("tooltip-ne", "bc-tr" == i), r.moveRel(t.getEl(), i)
                    } else r.hide()
                }), t.on("mouseleave mousedown click", function() {
                    t.tooltip().hide()
                })), t.aria("label", e.ariaLabel || e.tooltip)
            },
            tooltip: function() {
                return n || (n = new t({
                    type: "tooltip"
                }), n.renderTo()), n
            },
            active: function(e) {
                var t = this,
                    n;
                return e !== n && (t.aria("pressed", e), t.toggleClass("active", e)), t._super(e)
            },
            disabled: function(e) {
                var t = this,
                    n;
                return e !== n && (t.aria("disabled", e), t.toggleClass("disabled", e)), t._super(e)
            },
            postRender: function() {
                var e = this,
                    t = e.settings;
                e._rendered = !0, e._super(), e.parent() || !t.width && !t.height || (e.initLayoutRect(), e.repaint()), t.autofocus && e.focus()
            },
            remove: function() {
                this._super(), n && (n.remove(), n = null)
            }
        });
        return r
    }), r(Et, [_t], function(e) {
        return e.extend({
            Defaults: {
                classes: "widget btn",
                role: "button"
            },
            init: function(e) {
                var t = this,
                    n;
                t.on("click mousedown", function(e) {
                    e.preventDefault()
                }), t._super(e), n = e.size, e.subtype && t.addClass(e.subtype), n && t.addClass("btn-" + n)
            },
            icon: function(e) {
                var t = this,
                    n = t.classPrefix;
                if ("undefined" == typeof e) return t.settings.icon;
                if (t.settings.icon = e, e = e ? n + "ico " + n + "i-" + t.settings.icon : "", t._rendered) {
                    var r = t.getEl().firstChild,
                        i = r.getElementsByTagName("i")[0];
                    e ? (i && i == r.firstChild || (i = document.createElement("i"), r.insertBefore(i, r.firstChild)), i.className = e) : i && r.removeChild(i), t.text(t._text)
                }
                return t
            },
            repaint: function() {
                var e = this.getEl().firstChild.style;
                e.width = e.height = "100%", this._super()
            },
            text: function(e) {
                var t = this;
                if (t._rendered) {
                    var n = t.getEl().lastChild.lastChild;
                    n && (n.data = t.translate(e))
                }
                return t._super(e)
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = e.classPrefix,
                    r = e.settings.icon,
                    i;
                return i = e.settings.image, i ? (r = "none", "string" != typeof i && (i = window.getSelection ? i[0] : i[1]), i = " style=\"background-image: url('" + i + "')\"") : i = "", r = e.settings.icon ? n + "ico " + n + "i-" + r : "", '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1" aria-labelledby="' + t + '"><button role="presentation" type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + i + "></i>" : "") + (e._text ? (r ? "\xa0" : "") + e.encode(e._text) : "") + "</button></div>"
            }
        })
    }), r(Nt, [G], function(e) {
        return e.extend({
            Defaults: {
                defaultType: "button",
                role: "group"
            },
            renderHtml: function() {
                var e = this,
                    t = e._layout;
                return e.addClass("btn-group"), e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '"><div id="' + e._id + '-body">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            }
        })
    }), r(kt, [_t], function(e) {
        return e.extend({
            Defaults: {
                classes: "checkbox",
                role: "checkbox",
                checked: !1
            },
            init: function(e) {
                var t = this;
                t._super(e), t.on("click mousedown", function(e) {
                    e.preventDefault()
                }), t.on("click", function(e) {
                    e.preventDefault(), t.disabled() || t.checked(!t.checked())
                }), t.checked(t.settings.checked)
            },
            checked: function(e) {
                var t = this;
                return "undefined" != typeof e ? (e ? t.addClass("checked") : t.removeClass("checked"), t._checked = e, t.aria("checked", e), t) : t._checked
            },
            value: function(e) {
                return this.checked(e)
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = e.classPrefix;
                return '<div id="' + t + '" class="' + e.classes() + '" unselectable="on" aria-labelledby="' + t + '-al" tabindex="-1"><i class="' + n + "ico " + n + 'i-checkbox"></i><span id="' + t + '-al" class="' + n + 'label">' + e.encode(e._text) + "</span></div>"
            }
        })
    }), r(St, [Et, tt], function(e, t) {
        return e.extend({
            showPanel: function() {
                var e = this,
                    n = e.settings;
                if (e.active(!0), e.panel) e.panel.show();
                else {
                    var r = n.panel;
                    r.type && (r = {
                        layout: "grid",
                        items: r
                    }), r.role = r.role || "dialog", r.popover = !0, r.autohide = !0, r.ariaRoot = !0, e.panel = new t(r).on("hide", function() {
                        e.active(!1)
                    }).on("cancel", function(t) {
                        t.stopPropagation(), e.focus(), e.hidePanel()
                    }).parent(e).renderTo(e.getContainerElm()), e.panel.fire("show"), e.panel.reflow()
                }
                e.panel.moveRel(e.getEl(), n.popoverAlign || (e.isRtl() ? ["bc-tr", "bc-tc"] : ["bc-tl", "bc-tc"]))
            },
            hidePanel: function() {
                var e = this;
                e.panel && e.panel.hide()
            },
            postRender: function() {
                var e = this;
                return e.aria("haspopup", !0), e.on("click", function(t) {
                    t.control === e && (e.panel && e.panel.visible() ? e.hidePanel() : (e.showPanel(), e.panel.focus( !! t.aria)))
                }), e._super()
            }
        })
    }), r(Tt, [St, v], function(e, t) {
        var n = t.DOM;
        return e.extend({
            init: function(e) {
                this._super(e), this.addClass("colorbutton")
            },
            color: function(e) {
                return e ? (this._color = e, this.getEl("preview").style.backgroundColor = e, this) : this._color
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = e.classPrefix,
                    r = e.settings.icon ? n + "ico " + n + "i-" + e.settings.icon : "",
                    i = e.settings.image ? " style=\"background-image: url('" + e.settings.image + "')\"" : "";
                return '<div id="' + t + '" class="' + e.classes() + '" role="button" tabindex="-1" aria-haspopup="true"><button role="presentation" hidefocus="1" type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + i + "></i>" : "") + '<span id="' + t + '-preview" class="' + n + 'preview"></span>' + (e._text ? (r ? " " : "") + e._text : "") + '</button><button type="button" class="' + n + 'open" hidefocus="1" tabindex="-1"> <i class="' + n + 'caret"></i></button></div>'
            },
            postRender: function() {
                var e = this,
                    t = e.settings.onclick;
                return e.on("click", function(r) {
                    r.aria && "down" == r.aria.key || r.control != e || n.getParent(r.target, "." + e.classPrefix + "open") || (r.stopImmediatePropagation(), t.call(e, r))
                }), delete e.settings.onclick, e._super()
            }
        })
    }), r(Rt, [_t, K, $], function(e, t, n) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e), t.addClass("combobox"), t.subinput = !0, t.ariaTarget = "inp", e = t.settings, e.menu = e.menu || e.values, e.menu && (e.icon = "caret"), t.on("click", function(n) {
                    for (var r = n.target, i = t.getEl(); r && r != i;) r.id && -1 != r.id.indexOf("-open") && (t.fire("action"), e.menu && (t.showMenu(), n.aria && t.menu.items()[0].focus())), r = r.parentNode
                }), t.on("keydown", function(e) {
                    "INPUT" == e.target.nodeName && 13 == e.keyCode && t.parents().reverse().each(function(n) {
                        return e.preventDefault(), t.fire("change"), n.hasEventListeners("submit") && n.toJSON ? (n.fire("submit", {
                            data: n.toJSON()
                        }), !1) : void 0
                    })
                }), e.placeholder && (t.addClass("placeholder"), t.on("focusin", function() {
                    t._hasOnChange || (n.on(t.getEl("inp"), "change", function() {
                        t.fire("change")
                    }), t._hasOnChange = !0), t.hasClass("placeholder") && (t.getEl("inp").value = "", t.removeClass("placeholder"))
                }), t.on("focusout", function() {
                    0 === t.value().length && (t.getEl("inp").value = e.placeholder, t.addClass("placeholder"))
                }))
            },
            showMenu: function() {
                var e = this,
                    n = e.settings,
                    r;
                e.menu || (r = n.menu || [], r.length ? r = {
                    type: "menu",
                    items: r
                } : r.type = r.type || "menu", e.menu = t.create(r).parent(e).renderTo(e.getContainerElm()), e.fire("createmenu"), e.menu.reflow(), e.menu.on("cancel", function(t) {
                    t.control === e.menu && e.focus()
                }), e.menu.on("show hide", function(t) {
                    t.control.items().each(function(t) {
                        t.active(t.value() == e.value())
                    })
                }).fire("show"), e.menu.on("select", function(t) {
                    e.value(t.control.value())
                }), e.on("focusin", function(t) {
                    "INPUT" == t.target.tagName.toUpperCase() && e.menu.hide()
                }), e.aria("expanded", !0)), e.menu.show(), e.menu.layoutRect({
                    w: e.layoutRect().w
                }), e.menu.moveRel(e.getEl(), e.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"])
            },
            value: function(e) {
                var t = this;
                return "undefined" != typeof e ? (t._value = e, t.removeClass("placeholder"), t._rendered && (t.getEl("inp").value = e), t) : t._rendered ? (e = t.getEl("inp").value, e != t.settings.placeholder ? e : "") : t._value
            },
            disabled: function(e) {
                var t = this;
                return t._rendered && "undefined" != typeof e && (t.getEl("inp").disabled = e), t._super(e)
            },
            focus: function() {
                this.getEl("inp").focus()
            },
            repaint: function() {
                var e = this,
                    t = e.getEl(),
                    r = e.getEl("open"),
                    i = e.layoutRect(),
                    o, a;
                o = r ? i.w - n.getSize(r).width - 10 : i.w - 10;
                var s = document;
                return s.all && (!s.documentMode || s.documentMode <= 8) && (a = e.layoutRect().h - 2 + "px"), n.css(t.firstChild, {
                    width: o,
                    lineHeight: a
                }), e._super(), e
            },
            postRender: function() {
                var e = this;
                return n.on(this.getEl("inp"), "change", function() {
                    e.fire("change")
                }), e._super()
            },
            remove: function() {
                n.off(this.getEl("inp")), this._super()
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = e.settings,
                    r = e.classPrefix,
                    i = n.value || n.placeholder || "",
                    o, a, s = "",
                    l = "";
                return "spellcheck" in n && (l += ' spellcheck="' + n.spellcheck + '"'), n.maxLength && (l += ' maxlength="' + n.maxLength + '"'), n.size && (l += ' size="' + n.size + '"'), n.subtype && (l += ' type="' + n.subtype + '"'), e.disabled() && (l += ' disabled="disabled"'), o = n.icon, o && "caret" != o && (o = r + "ico " + r + "i-" + n.icon), a = e._text, (o || a) && (s = '<div id="' + t + '-open" class="' + r + "btn " + r + 'open" tabIndex="-1" role="button"><button id="' + t + '-action" type="button" hidefocus="1" tabindex="-1">' + ("caret" != o ? '<i class="' + o + '"></i>' : '<i class="' + r + 'caret"></i>') + (a ? (o ? " " : "") + a : "") + "</button></div>", e.addClass("has-open")), '<div id="' + t + '" class="' + e.classes() + '"><input id="' + t + '-inp" class="' + r + "textbox " + r + 'placeholder" value="' + i + '" hidefocus="1"' + l + " />" + s + "</div>"
            }
        })
    }), r(At, [_t], function(e) {
        return e.extend({
            init: function(e) {
                var t = this;
                e.delimiter || (e.delimiter = "\xbb"), t._super(e), t.addClass("path"), t.canFocus = !0, t.on("click", function(e) {
                    var n, r = e.target;
                    (n = r.getAttribute("data-index")) && t.fire("select", {
                        value: t.data()[n],
                        index: n
                    })
                })
            },
            focus: function() {
                var e = this;
                return e.getEl().firstChild.focus(), e
            },
            data: function(e) {
                var t = this;
                return "undefined" != typeof e ? (t._data = e, t.update(), t) : t._data
            },
            update: function() {
                this.innerHtml(this._getPathHtml())
            },
            postRender: function() {
                var e = this;
                e._super(), e.data(e.settings.data)
            },
            renderHtml: function() {
                var e = this;
                return '<div id="' + e._id + '" class="' + e.classes() + '">' + e._getPathHtml() + "</div>"
            },
            _getPathHtml: function() {
                var e = this,
                    t = e._data || [],
                    n, r, i = "",
                    o = e.classPrefix;
                for (n = 0, r = t.length; r > n; n++) i += (n > 0 ? '<div class="' + o + 'divider" aria-hidden="true"> ' + e.settings.delimiter + " </div>" : "") + '<div role="button" class="' + o + "path-item" + (n == r - 1 ? " " + o + "last" : "") + '" data-index="' + n + '" tabindex="-1" id="' + e._id + "-" + n + '" aria-level="' + n + '">' + t[n].name + "</div>";
                return i || (i = '<div class="' + o + 'path-item">\xa0</div>'), i
            }
        })
    }), r(Bt, [At, ft], function(e, t) {
        return e.extend({
            postRender: function() {
                function e(e) {
                    if (1 === e.nodeType) {
                        if ("BR" == e.nodeName || e.getAttribute("data-mce-bogus")) return !0;
                        if ("bookmark" === e.getAttribute("data-mce-type")) return !0
                    }
                    return !1
                }
                var n = this,
                    r = t.activeEditor;
                return n.on("select", function(t) {
                    var n = [],
                        i, o = r.getBody();
                    for (r.focus(), i = r.selection.getStart(); i && i != o;) e(i) || n.push(i), i = i.parentNode;
                    r.selection.select(n[n.length - 1 - t.index]), r.nodeChanged()
                }), r.on("nodeChange", function(t) {
                    for (var i = [], o = t.parents, a = o.length; a--;) if (1 == o[a].nodeType && !e(o[a])) {
                        var s = r.fire("ResolveName", {
                            name: o[a].nodeName.toLowerCase(),
                            target: o[a]
                        });
                        i.push({
                            name: s.name
                        })
                    }
                    n.data(i)
                }), n._super()
            }
        })
    }), r(Dt, [G], function(e) {
        return e.extend({
            Defaults: {
                layout: "flex",
                align: "center",
                defaults: {
                    flex: 1
                }
            },
            renderHtml: function() {
                var e = this,
                    t = e._layout,
                    n = e.classPrefix;
                return e.addClass("formitem"), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<div id="' + e._id + '-title" class="' + n + 'title">' + e.settings.title + "</div>" : "") + '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            }
        })
    }), r(Lt, [G, Dt], function(e, t) {
        return e.extend({
            Defaults: {
                containerCls: "form",
                layout: "flex",
                direction: "column",
                align: "stretch",
                flex: 1,
                padding: 20,
                labelGap: 30,
                spacing: 10,
                callbacks: {
                    submit: function() {
                        this.submit()
                    }
                }
            },
            preRender: function() {
                var e = this,
                    n = e.items();
                n.each(function(n) {
                    var r, i = n.settings.label;
                    i && (r = new t({
                        layout: "flex",
                        autoResize: "overflow",
                        defaults: {
                            flex: 1
                        },
                        items: [{
                            type: "label",
                            id: n._id + "-l",
                            text: i,
                            flex: 0,
                            forId: n._id,
                            disabled: n.disabled()
                        }]
                    }), r.type = "formitem", n.aria("labelledby", n._id + "-l"), "undefined" == typeof n.settings.flex && (n.settings.flex = 1), e.replace(n, r), r.add(n))
                })
            },
            recalcLabels: function() {
                var e = this,
                    t = 0,
                    n = [],
                    r, i, o;
                if (e.settings.labelGapCalc !== !1) for (o = "children" == e.settings.labelGapCalc ? e.find("formitem") : e.items(), o.filter("formitem").each(function(e) {
                    var r = e.items()[0],
                        i = r.getEl().clientWidth;
                    t = i > t ? i : t, n.push(r)
                }), i = e.settings.labelGap || 0, r = n.length; r--;) n[r].settings.minWidth = t + i
            },
            visible: function(e) {
                var t = this._super(e);
                return e === !0 && this._rendered && this.recalcLabels(), t
            },
            submit: function() {
                return this.fire("submit", {
                    data: this.toJSON()
                })
            },
            postRender: function() {
                var e = this;
                e._super(), e.recalcLabels(), e.fromJSON(e.settings.data)
            }
        })
    }), r(Mt, [Lt], function(e) {
        return e.extend({
            Defaults: {
                containerCls: "fieldset",
                layout: "flex",
                direction: "column",
                align: "stretch",
                flex: 1,
                padding: "25 15 5 15",
                labelGap: 30,
                spacing: 10,
                border: 1
            },
            renderHtml: function() {
                var e = this,
                    t = e._layout,
                    n = e.classPrefix;
                return e.preRender(), t.preRender(e), '<fieldset id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<legend id="' + e._id + '-title" class="' + n + 'fieldset-title">' + e.settings.title + "</legend>" : "") + '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></fieldset>"
            }
        })
    }), r(Ht, [Rt, f], function(e, t) {
        return e.extend({
            init: function(e) {
                var n = this,
                    r = tinymce.activeEditor,
                    i, o;
                e.spellcheck = !1, o = r.settings.file_browser_callback_types, o && (o = t.makeMap(o, /[, ]/)), i = r.settings.file_browser_callback, !i || o && !o[e.filetype] || (e.icon = "browse", e.onaction = function() {
                    i(n.getEl("inp").id, n.getEl("inp").value, e.filetype, window)
                }), n._super(e)
            }
        })
    }), r(Pt, [xt], function(e) {
        return e.extend({
            recalc: function(e) {
                var t = e.layoutRect(),
                    n = e.paddingBox();
                e.items().filter(":visible").each(function(e) {
                    e.layoutRect({
                        x: n.left,
                        y: n.top,
                        w: t.innerW - n.right - n.left,
                        h: t.innerH - n.top - n.bottom
                    }), e.recalc && e.recalc()
                })
            }
        })
    }), r(Ot, [xt], function(e) {
        return e.extend({
            recalc: function(e) {
                var t, n, r, i, o, a, s, l, c, d, u, f, p, m, h, g, v = [],
                    y, b, C, x, w, _, E, N, k, S, T, R, A, B, D, L, M, H, P, O, I, F, z = Math.max,
                    W = Math.min;
                for (r = e.items().filter(":visible"), i = e.layoutRect(), o = e._paddingBox, a = e.settings, f = e.isRtl() ? a.direction || "row-reversed" : a.direction, s = a.align, l = e.isRtl() ? a.pack || "end" : a.pack, c = a.spacing || 0, ("row-reversed" == f || "column-reverse" == f) && (r = r.set(r.toArray().reverse()), f = f.split("-")[0]), "column" == f ? (k = "y", E = "h", N = "minH", S = "maxH", R = "innerH", T = "top", A = "deltaH", B = "contentH", P = "left", M = "w", D = "x", L = "innerW", H = "minW", O = "right", I = "deltaW", F = "contentW") : (k = "x", E = "w", N = "minW", S = "maxW", R = "innerW", T = "left", A = "deltaW", B = "contentW", P = "top", M = "h", D = "y", L = "innerH", H = "minH", O = "bottom", I = "deltaH", F = "contentH"), u = i[R] - o[T] - o[T], _ = d = 0, t = 0, n = r.length; n > t; t++) p = r[t], m = p.layoutRect(), h = p.settings, g = h.flex, u -= n - 1 > t ? c : 0, g > 0 && (d += g, m[S] && v.push(p), m.flex = g), u -= m[N], y = o[P] + m[H] + o[O], y > _ && (_ = y);
                if (x = {}, x[N] = 0 > u ? i[N] - u + i[A] : i[R] - u + i[A], x[H] = _ + i[I], x[B] = i[R] - u, x[F] = _, x.minW = W(x.minW, i.maxW), x.minH = W(x.minH, i.maxH), x.minW = z(x.minW, i.startMinWidth), x.minH = z(x.minH, i.startMinHeight), !i.autoResize || x.minW == i.minW && x.minH == i.minH) {
                    for (C = u / d, t = 0, n = v.length; n > t; t++) p = v[t], m = p.layoutRect(), b = m[S], y = m[N] + m.flex * C, y > b ? (u -= m[S] - m[N], d -= m.flex, m.flex = 0, m.maxFlexSize = b) : m.maxFlexSize = 0;
                    for (C = u / d, w = o[T], x = {}, 0 === d && ("end" == l ? w = u + o[T] : "center" == l ? (w = Math.round(i[R] / 2 - (i[R] - u) / 2) + o[T], 0 > w && (w = o[T])) : "justify" == l && (w = o[T], c = Math.floor(u / (r.length - 1)))), x[D] = o[P], t = 0, n = r.length; n > t; t++) p = r[t], m = p.layoutRect(), y = m.maxFlexSize || m[N], "center" === s ? x[D] = Math.round(i[L] / 2 - m[M] / 2) : "stretch" === s ? (x[M] = z(m[H] || 0, i[L] - o[P] - o[O]), x[D] = o[P]) : "end" === s && (x[D] = i[L] - m[M] - o.top), m.flex > 0 && (y += m.flex * C), x[E] = y, x[k] = w, p.layoutRect(x), p.recalc && p.recalc(), w += y + c
                } else if (x.w = x.minW, x.h = x.minH, e.layoutRect(x), this.recalc(e), null === e._lastRect) {
                    var V = e.parent();
                    V && (V._lastRect = null, V.recalc())
                }
            }
        })
    }), r(It, [Ct], function(e) {
        return e.extend({
            Defaults: {
                containerClass: "flow-layout",
                controlClass: "flow-layout-item",
                endClass: "break"
            },
            recalc: function(e) {
                e.items().filter(":visible").each(function(e) {
                    e.recalc && e.recalc()
                })
            }
        })
    }), r(Ft, [j, _t, tt, f, ft, h], function(e, t, n, r, i, o) {
        function a(e) {
            function t(t, n) {
                return function() {
                    var r = this;
                    e.on("nodeChange", function(i) {
                        var o = e.formatter,
                            a = null;
                        s(i.parents, function(e) {
                            return s(t, function(t) {
                                return n ? o.matchNode(e, n, {
                                    value: t.value
                                }) && (a = t.value) : o.matchNode(e, t.value) && (a = t.value), a ? !1 : void 0
                            }), a ? !1 : void 0
                        }), r.value(a)
                    })
                }
            }
            function r(e) {
                e = e.replace(/;$/, "").split(";");
                for (var t = e.length; t--;) e[t] = e[t].split("=");
                return e
            }
            function i() {
                function t(e) {
                    var n = [];
                    if (e) return s(e, function(e) {
                        var o = {
                            text: e.title,
                            icon: e.icon
                        };
                        if (e.items) o.menu = t(e.items);
                        else {
                            var a = e.format || "custom" + r++;
                            e.format || (e.name = a, i.push(e)), o.format = a, o.cmd = e.cmd
                        }
                        n.push(o)
                    }), n
                }
                function n() {
                    var n;
                    return n = t(e.settings.style_formats_merge ? e.settings.style_formats ? o.concat(e.settings.style_formats) : o : e.settings.style_formats || o)
                }
                var r = 0,
                    i = [],
                    o = [{
                        title: "Headings",
                        items: [{
                            title: "Heading 1",
                            format: "h1"
                        }, {
                            title: "Heading 2",
                            format: "h2"
                        }, {
                            title: "Heading 3",
                            format: "h3"
                        }, {
                            title: "Heading 4",
                            format: "h4"
                        }, {
                            title: "Heading 5",
                            format: "h5"
                        }, {
                            title: "Heading 6",
                            format: "h6"
                        }]
                    }, {
                        title: "Inline",
                        items: [{
                            title: "Bold",
                            icon: "bold",
                            format: "bold"
                        }, {
                            title: "Italic",
                            icon: "italic",
                            format: "italic"
                        }, {
                            title: "Underline",
                            icon: "underline",
                            format: "underline"
                        }, {
                            title: "Strikethrough",
                            icon: "strikethrough",
                            format: "strikethrough"
                        }, {
                            title: "Superscript",
                            icon: "superscript",
                            format: "superscript"
                        }, {
                            title: "Subscript",
                            icon: "subscript",
                            format: "subscript"
                        }, {
                            title: "Code",
                            icon: "code",
                            format: "code"
                        }]
                    }, {
                        title: "Blocks",
                        items: [{
                            title: "Paragraph",
                            format: "p"
                        }, {
                            title: "Blockquote",
                            format: "blockquote"
                        }, {
                            title: "Div",
                            format: "div"
                        }, {
                            title: "Pre",
                            format: "pre"
                        }]
                    }, {
                        title: "Alignment",
                        items: [{
                            title: "Left",
                            icon: "alignleft",
                            format: "alignleft"
                        }, {
                            title: "Center",
                            icon: "aligncenter",
                            format: "aligncenter"
                        }, {
                            title: "Right",
                            icon: "alignright",
                            format: "alignright"
                        }, {
                            title: "Justify",
                            icon: "alignjustify",
                            format: "alignjustify"
                        }]
                    }];
                return e.on("init", function() {
                    s(i, function(t) {
                        e.formatter.register(t.name, t)
                    })
                }), {
                    type: "menu",
                    items: n(),
                    onPostRender: function(t) {
                        e.fire("renderFormatsMenu", {
                            control: t.control
                        })
                    },
                    itemDefaults: {
                        preview: !0,
                        textStyle: function() {
                            return this.settings.format ? e.formatter.getCssText(this.settings.format) : void 0
                        },
                        onPostRender: function() {
                            var t = this;
                            t.parent().on("show", function() {
                                var n, r;
                                n = t.settings.format, n && (t.disabled(!e.formatter.canApply(n)), t.active(e.formatter.match(n))), r = t.settings.cmd, r && t.active(e.queryCommandState(r))
                            })
                        },
                        onclick: function() {
                            this.settings.format && l(this.settings.format), this.settings.cmd && e.execCommand(this.settings.cmd)
                        }
                    }
                }
            }
            function o(t) {
                return function() {
                    function n() {
                        return e.undoManager ? e.undoManager[t]() : !1
                    }
                    var r = this;
                    t = "redo" == t ? "hasRedo" : "hasUndo", r.disabled(!n()), e.on("Undo Redo AddUndo TypingUndo ClearUndos", function() {
                        r.disabled(!n())
                    })
                }
            }
            function a() {
                var t = this;
                e.on("VisualAid", function(e) {
                    t.active(e.hasVisual)
                }), t.active(e.hasVisual)
            }
            function l(t) {
                t.control && (t = t.control.value()), t && e.execCommand("mceToggleFormat", !1, t)
            }
            var c;
            c = i(), s({
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                strikethrough: "Strikethrough",
                subscript: "Subscript",
                superscript: "Superscript"
            }, function(t, n) {
                e.addButton(n, {
                    tooltip: t,
                    onPostRender: function() {
                        var t = this;
                        e.formatter ? e.formatter.formatChanged(n, function(e) {
                            t.active(e)
                        }) : e.on("init", function() {
                            e.formatter.formatChanged(n, function(e) {
                                t.active(e)
                            })
                        })
                    },
                    onclick: function() {
                        l(n)
                    }
                })
            }), s({
                outdent: ["Decrease indent", "Outdent"],
                indent: ["Increase indent", "Indent"],
                cut: ["Cut", "Cut"],
                copy: ["Copy", "Copy"],
                paste: ["Paste", "Paste"],
                help: ["Help", "mceHelp"],
                selectall: ["Select all", "SelectAll"],
                hr: ["Insert horizontal rule", "InsertHorizontalRule"],
                removeformat: ["Clear formatting", "RemoveFormat"],
                visualaid: ["Visual aids", "mceToggleVisualAid"],
                newdocument: ["New document", "mceNewDocument"]
            }, function(t, n) {
                e.addButton(n, {
                    tooltip: t[0],
                    cmd: t[1]
                })
            }), s({
                blockquote: ["Blockquote", "mceBlockQuote"],
                numlist: ["Numbered list", "InsertOrderedList"],
                bullist: ["Bullet list", "InsertUnorderedList"],
                subscript: ["Subscript", "Subscript"],
                superscript: ["Superscript", "Superscript"],
                alignleft: ["Align left", "JustifyLeft"],
                aligncenter: ["Align center", "JustifyCenter"],
                alignright: ["Align right", "JustifyRight"],
                alignjustify: ["Justify", "JustifyFull"]
            }, function(t, n) {
                e.addButton(n, {
                    tooltip: t[0],
                    cmd: t[1],
                    onPostRender: function() {
                        var t = this;
                        e.formatter ? e.formatter.formatChanged(n, function(e) {
                            t.active(e)
                        }) : e.on("init", function() {
                            e.formatter.formatChanged(n, function(e) {
                                t.active(e)
                            })
                        })
                    }
                })
            }), e.addButton("undo", {
                tooltip: "Undo",
                onPostRender: o("undo"),
                cmd: "undo"
            }), e.addButton("redo", {
                tooltip: "Redo",
                onPostRender: o("redo"),
                cmd: "redo"
            }), e.addMenuItem("newdocument", {
                text: "New document",
                shortcut: "Ctrl+N",
                icon: "newdocument",
                cmd: "mceNewDocument"
            }), e.addMenuItem("undo", {
                text: "Undo",
                icon: "undo",
                shortcut: "Ctrl+Z",
                onPostRender: o("undo"),
                cmd: "undo"
            }), e.addMenuItem("redo", {
                text: "Redo",
                icon: "redo",
                shortcut: "Ctrl+Y",
                onPostRender: o("redo"),
                cmd: "redo"
            }), e.addMenuItem("visualaid", {
                text: "Visual aids",
                selectable: !0,
                onPostRender: a,
                cmd: "mceToggleVisualAid"
            }), s({
                cut: ["Cut", "Cut", "Ctrl+X"],
                copy: ["Copy", "Copy", "Ctrl+C"],
                paste: ["Paste", "Paste", "Ctrl+V"],
                selectall: ["Select all", "SelectAll", "Ctrl+A"],
                bold: ["Bold", "Bold", "Ctrl+B"],
                italic: ["Italic", "Italic", "Ctrl+I"],
                underline: ["Underline", "Underline"],
                strikethrough: ["Strikethrough", "Strikethrough"],
                subscript: ["Subscript", "Subscript"],
                superscript: ["Superscript", "Superscript"],
                removeformat: ["Clear formatting", "RemoveFormat"]
            }, function(t, n) {
                e.addMenuItem(n, {
                    text: t[0],
                    icon: n,
                    shortcut: t[2],
                    cmd: t[1]
                })
            }), e.on("mousedown", function() {
                n.hideAll()
            }), e.addButton("styleselect", {
                type: "menubutton",
                text: "Formats",
                menu: c
            }), e.addButton("formatselect", function() {
                var n = [],
                    i = r(e.settings.block_formats || "Paragraph=p;Address=address;Pre=pre;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6");
                return s(i, function(t) {
                    n.push({
                        text: t[0],
                        value: t[1],
                        textStyle: function() {
                            return e.formatter.getCssText(t[1])
                        }
                    })
                }), {
                    type: "listbox",
                    text: i[0][0],
                    values: n,
                    fixedWidth: !0,
                    onselect: l,
                    onPostRender: t(n)
                }
            }), e.addButton("fontselect", function() {
                var n = "Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats",
                    i = [],
                    o = r(e.settings.font_formats || n);
                return s(o, function(e) {
                    i.push({
                        text: {
                            raw: e[0]
                        },
                        value: e[1],
                        textStyle: -1 == e[1].indexOf("dings") ? "font-family:" + e[1] : ""
                    })
                }), {
                    type: "listbox",
                    text: "Font Family",
                    tooltip: "Font Family",
                    values: i,
                    fixedWidth: !0,
                    onPostRender: t(i, "fontname"),
                    onselect: function(t) {
                        t.control.settings.value && e.execCommand("FontName", !1, t.control.settings.value)
                    }
                }
            }), e.addButton("fontsizeselect", function() {
                var n = [],
                    r = "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
                    i = e.settings.fontsize_formats || r;
                return s(i.split(" "), function(e) {
                    var t = e,
                        r = e,
                        i = e.split("=");
                    i.length > 1 && (t = i[0], r = i[1]), n.push({
                        text: t,
                        value: r
                    })
                }), {
                    type: "listbox",
                    text: "Font Sizes",
                    tooltip: "Font Sizes",
                    values: n,
                    fixedWidth: !0,
                    onPostRender: t(n, "fontsize"),
                    onclick: function(t) {
                        t.control.settings.value && e.execCommand("FontSize", !1, t.control.settings.value)
                    }
                }
            }), e.addMenuItem("formats", {
                text: "Formats",
                menu: c
            })
        }
        var s = r.each;
        i.on("AddEditor", function(t) {
            t.editor.rtl && (e.rtl = !0), a(t.editor)
        }), e.translate = function(e) {
            return i.translate(e)
        }, t.tooltips = !o.iOS
    }), r(zt, [xt], function(e) {
        return e.extend({
            recalc: function(e) {
                var t = e.settings,
                    n, r, i, o, a, s, l, c, d, u, f, p, m, h, g, v, y, b, C, x, w, _, E = [],
                    N = [],
                    k, S, T, R;
                for (t = e.settings, i = e.items().filter(":visible"), o = e.layoutRect(), r = t.columns || Math.ceil(Math.sqrt(i.length)), n = Math.ceil(i.length / r), y = t.spacingH || t.spacing || 0, b = t.spacingV || t.spacing || 0, C = t.alignH || t.align, x = t.alignV || t.align, g = e._paddingBox, C && "string" == typeof C && (C = [C]), x && "string" == typeof x && (x = [x]), u = 0; r > u; u++) E.push(0);
                for (f = 0; n > f; f++) N.push(0);
                for (f = 0; n > f; f++) for (u = 0; r > u && (d = i[f * r + u], d); u++) c = d.layoutRect(), k = c.minW, S = c.minH, E[u] = k > E[u] ? k : E[u], N[f] = S > N[f] ? S : N[f];
                for (T = o.innerW - g.left - g.right, w = 0, u = 0; r > u; u++) w += E[u] + (u > 0 ? y : 0), T -= (u > 0 ? y : 0) + E[u];
                for (R = o.innerH - g.top - g.bottom, _ = 0, f = 0; n > f; f++) _ += N[f] + (f > 0 ? b : 0), R -= (f > 0 ? b : 0) + N[f];
                if (w += g.left + g.right, _ += g.top + g.bottom, l = {}, l.minW = w + (o.w - o.innerW), l.minH = _ + (o.h - o.innerH), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH, l.minW = Math.min(l.minW, o.maxW), l.minH = Math.min(l.minH, o.maxH), l.minW = Math.max(l.minW, o.startMinWidth), l.minH = Math.max(l.minH, o.startMinHeight), !o.autoResize || l.minW == o.minW && l.minH == o.minH) {
                    o.autoResize && (l = e.layoutRect(l), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH);
                    var A;
                    A = "start" == t.packV ? 0 : R > 0 ? Math.floor(R / n) : 0;
                    var B = 0,
                        D = t.flexWidths;
                    if (D) for (u = 0; u < D.length; u++) B += D[u];
                    else B = r;
                    var L = T / B;
                    for (u = 0; r > u; u++) E[u] += D ? D[u] * L : L;
                    for (m = g.top, f = 0; n > f; f++) {
                        for (p = g.left, s = N[f] + A, u = 0; r > u && (d = i[f * r + u], d); u++) h = d.settings, c = d.layoutRect(), a = Math.max(E[u], c.startMinWidth), c.x = p, c.y = m, v = h.alignH || (C ? C[u] || C[0] : null), "center" == v ? c.x = p + a / 2 - c.w / 2 : "right" == v ? c.x = p + a - c.w : "stretch" == v && (c.w = a), v = h.alignV || (x ? x[u] || x[0] : null), "center" == v ? c.y = m + s / 2 - c.h / 2 : "bottom" == v ? c.y = m + s - c.h : "stretch" == v && (c.h = s), d.layoutRect(c), p += a + y, d.recalc && d.recalc();
                        m += s + b
                    }
                } else if (l.w = l.minW, l.h = l.minH, e.layoutRect(l), this.recalc(e), null === e._lastRect) {
                    var M = e.parent();
                    M && (M._lastRect = null, M.recalc())
                }
            }
        })
    }), r(Wt, [_t], function(e) {
        return e.extend({
            renderHtml: function() {
                var e = this;
                return e.addClass("iframe"), e.canFocus = !1, '<iframe id="' + e._id + '" class="' + e.classes() + '" tabindex="-1" src="' + (e.settings.url || "javascript:''") + '" frameborder="0"></iframe>'
            },
            src: function(e) {
                this.getEl().src = e
            },
            html: function(e, t) {
                var n = this,
                    r = this.getEl().contentWindow.document.body;
                return r ? (r.innerHTML = e, t && t()) : setTimeout(function() {
                    n.html(e)
                }, 0), this
            }
        })
    }), r(Vt, [_t, $], function(e, t) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e), t.addClass("widget"), t.addClass("label"), t.canFocus = !1, e.multiline && t.addClass("autoscroll"), e.strong && t.addClass("strong")
            },
            initLayoutRect: function() {
                var e = this,
                    n = e._super();
                if (e.settings.multiline) {
                    var r = t.getSize(e.getEl());
                    r.width > n.maxW && (n.minW = n.maxW, e.addClass("multiline")), e.getEl().style.width = n.minW + "px", n.startMinH = n.h = n.minH = Math.min(n.maxH, t.getSize(e.getEl()).height)
                }
                return n
            },
            repaint: function() {
                var e = this;
                return e.settings.multiline || (e.getEl().style.lineHeight = e.layoutRect().h + "px"), e._super()
            },
            text: function(e) {
                var t = this;
                return t._rendered && e && this.innerHtml(t.encode(e)), t._super(e)
            },
            renderHtml: function() {
                var e = this,
                    t = e.settings.forId;
                return '<label id="' + e._id + '" class="' + e.classes() + '"' + (t ? ' for="' + t + '"' : "") + ">" + e.encode(e._text) + "</label>"
            }
        })
    }), r(Ut, [G], function(e) {
        return e.extend({
            Defaults: {
                role: "toolbar",
                layout: "flow"
            },
            init: function(e) {
                var t = this;
                t._super(e), t.addClass("toolbar")
            },
            postRender: function() {
                var e = this;
                return e.items().addClass("toolbar-item"), e._super()
            }
        })
    }), r(qt, [Ut], function(e) {
        return e.extend({
            Defaults: {
                role: "menubar",
                containerCls: "menubar",
                ariaRoot: !0,
                defaults: {
                    type: "menubutton"
                }
            }
        })
    }), r($t, [Et, K, qt], function(e, t, n) {
        function r(e, t) {
            for (; e;) {
                if (t === e) return !0;
                e = e.parentNode
            }
            return !1
        }
        var i = e.extend({
            init: function(e) {
                var t = this;
                t._renderOpen = !0, t._super(e), t.addClass("menubtn"), e.fixedWidth && t.addClass("fixed-width"), t.aria("haspopup", !0), t.hasPopup = !0
            },
            showMenu: function() {
                var e = this,
                    n = e.settings,
                    r;
                return e.menu && e.menu.visible() ? e.hideMenu() : (e.menu || (r = n.menu || [], r.length ? r = {
                    type: "menu",
                    items: r
                } : r.type = r.type || "menu", e.menu = t.create(r).parent(e).renderTo(), e.fire("createmenu"), e.menu.reflow(), e.menu.on("cancel", function(t) {
                    t.control.parent() === e.menu && (t.stopPropagation(), e.focus(), e.hideMenu())
                }), e.menu.on("select", function() {
                    e.focus()
                }), e.menu.on("show hide", function(t) {
                    t.control == e.menu && e.activeMenu("show" == t.type), e.aria("expanded", "show" == t.type)
                }).fire("show")), e.menu.show(), e.menu.layoutRect({
                    w: e.layoutRect().w
                }), void e.menu.moveRel(e.getEl(), e.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"]))
            },
            hideMenu: function() {
                var e = this;
                e.menu && (e.menu.items().each(function(e) {
                    e.hideMenu && e.hideMenu()
                }), e.menu.hide())
            },
            activeMenu: function(e) {
                this.toggleClass("active", e)
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    r = e.classPrefix,
                    i = e.settings.icon ? r + "ico " + r + "i-" + e.settings.icon : "";
                return e.aria("role", e.parent() instanceof n ? "menuitem" : "button"), '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1" aria-labelledby="' + t + '"><button id="' + t + '-open" role="presentation" type="button" tabindex="-1">' + (i ? '<i class="' + i + '"></i>' : "") + "<span>" + (e._text ? (i ? "\xa0" : "") + e.encode(e._text) : "") + '</span> <i class="' + r + 'caret"></i></button></div>'
            },
            postRender: function() {
                var e = this;
                return e.on("click", function(t) {
                    t.control === e && r(t.target, e.getEl()) && (e.showMenu(), t.aria && e.menu.items()[0].focus())
                }), e.on("mouseenter", function(t) {
                    var n = t.control,
                        r = e.parent(),
                        o;
                    n && r && n instanceof i && n.parent() == r && (r.items().filter("MenuButton").each(function(e) {
                        e.hideMenu && e != n && (e.menu && e.menu.visible() && (o = !0), e.hideMenu())
                    }), o && (n.focus(), n.showMenu()))
                }), e._super()
            },
            text: function(e) {
                var t = this,
                    n, r;
                if (t._rendered) for (r = t.getEl("open").getElementsByTagName("span"), n = 0; n < r.length; n++) r[n].innerHTML = (t.settings.icon && e ? "\xa0" : "") + t.encode(e);
                return this._super(e)
            },
            remove: function() {
                this._super(), this.menu && this.menu.remove()
            }
        });
        return i
    }), r(jt, [$t], function(e) {
        return e.extend({
            init: function(e) {
                function t(r) {
                    for (var a = 0; a < r.length; a++) {
                        if (i = r[a].selected || e.value === r[a].value) {
                            o = o || r[a].text, n._value = r[a].value;
                            break
                        }
                        r[a].menu && t(r[a].menu)
                    }
                }
                var n = this,
                    r, i, o, a;
                n._values = r = e.values, r && (t(r), !i && r.length > 0 && (o = r[0].text, n._value = r[0].value), e.menu = r), e.text = e.text || o || r[0].text, n._super(e), n.addClass("listbox"), n.on("select", function(t) {
                    var r = t.control;
                    a && (t.lastControl = a), e.multiple ? r.active(!r.active()) : n.value(t.control.settings.value), a = r
                })
            },
            value: function(e) {
                function t(e, n) {
                    e.items().each(function(e) {
                        i = e.value() === n, i && (o = o || e.text()), e.active(i), e.menu && t(e.menu, n)
                    })
                }
                function n(t) {
                    for (var r = 0; r < t.length; r++) i = t[r].value == e, i && (o = o || t[r].text), t[r].active = i, t[r].menu && n(t[r].menu)
                }
                var r = this,
                    i, o, a;
                return "undefined" != typeof e && (r.menu ? t(r.menu, e) : (a = r.settings.menu, n(a)), r.text(o || this.settings.text)), r._super(e)
            }
        })
    }), r(Kt, [_t, K, h], function(e, t, n) {
        return e.extend({
            Defaults: {
                border: 0,
                role: "menuitem"
            },
            init: function(e) {
                var t = this;
                t.hasPopup = !0, t._super(e), e = t.settings, t.addClass("menu-item"), e.menu && t.addClass("menu-item-expand"), e.preview && t.addClass("menu-item-preview"), ("-" === t._text || "|" === t._text) && (t.addClass("menu-item-sep"), t.aria("role", "separator"), t._text = "-"), e.selectable && (t.aria("role", "menuitemcheckbox"), t.addClass("menu-item-checkbox"), e.icon = "selected"), e.preview || e.selectable || t.addClass("menu-item-normal"), t.on("mousedown", function(e) {
                    e.preventDefault()
                }), e.menu && !e.ariaHideMenu && t.aria("haspopup", !0)
            },
            hasMenus: function() {
                return !!this.settings.menu
            },
            showMenu: function() {
                var e = this,
                    n = e.settings,
                    r, i = e.parent();
                if (i.items().each(function(t) {
                    t !== e && t.hideMenu()
                }), n.menu) {
                    r = e.menu, r ? r.show() : (r = n.menu, r.length ? r = {
                        type: "menu",
                        items: r
                    } : r.type = r.type || "menu", i.settings.itemDefaults && (r.itemDefaults = i.settings.itemDefaults), r = e.menu = t.create(r).parent(e).renderTo(), r.reflow(), r.on("cancel", function(t) {
                        t.stopPropagation(), e.focus(), r.hide()
                    }), r.on("show hide", function(e) {
                        e.control.items().each(function(e) {
                            e.active(e.settings.selected)
                        })
                    }).fire("show"), r.on("hide", function(t) {
                        t.control === r && e.removeClass("selected")
                    }), r.submenu = !0), r._parentMenu = i, r.addClass("menu-sub");
                    var o = r.testMoveRel(e.getEl(), e.isRtl() ? ["tl-tr", "bl-br", "tr-tl", "br-bl"] : ["tr-tl", "br-bl", "tl-tr", "bl-br"]);
                    r.moveRel(e.getEl(), o), r.rel = o, o = "menu-sub-" + o, r.removeClass(r._lastRel), r.addClass(o), r._lastRel = o, e.addClass("selected"), e.aria("expanded", !0)
                }
            },
            hideMenu: function() {
                var e = this;
                return e.menu && (e.menu.items().each(function(e) {
                    e.hideMenu && e.hideMenu()
                }), e.menu.hide(), e.aria("expanded", !1)), e
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    r = e.settings,
                    i = e.classPrefix,
                    o = e.encode(e._text),
                    a = e.settings.icon,
                    s = "",
                    l = r.shortcut;
                return a && e.parent().addClass("menu-has-icons"), r.image && (a = "none", s = " style=\"background-image: url('" + r.image + "')\""), l && n.mac && (l = l.replace(/ctrl\+alt\+/i, "&#x2325;&#x2318;"), l = l.replace(/ctrl\+/i, "&#x2318;"), l = l.replace(/alt\+/i, "&#x2325;"), l = l.replace(/shift\+/i, "&#x21E7;")), a = i + "ico " + i + "i-" + (e.settings.icon || "none"), '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1">' + ("-" !== o ? '<i class="' + a + '"' + s + "></i>\xa0" : "") + ("-" !== o ? '<span id="' + t + '-text" class="' + i + 'text">' + o + "</span>" : "") + (l ? '<div id="' + t + '-shortcut" class="' + i + 'menu-shortcut">' + l + "</div>" : "") + (r.menu ? '<div class="' + i + 'caret"></div>' : "") + "</div>"
            },
            postRender: function() {
                var e = this,
                    t = e.settings,
                    n = t.textStyle;
                if ("function" == typeof n && (n = n.call(this)), n) {
                    var r = e.getEl("text");
                    r && r.setAttribute("style", n)
                }
                return e.on("mouseenter click", function(n) {
                    n.control === e && (t.menu || "click" !== n.type ? (e.showMenu(), n.aria && e.menu.focus(!0)) : (e.fire("select"), e.parent().hideAll()))
                }), e._super(), e
            },
            active: function(e) {
                return "undefined" != typeof e && this.aria("checked", e), this._super(e)
            },
            remove: function() {
                this._super(), this.menu && this.menu.remove()
            }
        })
    }), r(Yt, [tt, Kt, f], function(e, t, n) {
        var r = e.extend({
            Defaults: {
                defaultType: "menuitem",
                border: 1,
                layout: "stack",
                role: "application",
                bodyRole: "menu",
                ariaRoot: !0
            },
            init: function(e) {
                var t = this;
                if (e.autohide = !0, e.constrainToViewport = !0, e.itemDefaults) for (var r = e.items, i = r.length; i--;) r[i] = n.extend({}, e.itemDefaults, r[i]);
                t._super(e), t.addClass("menu")
            },
            repaint: function() {
                return this.toggleClass("menu-align", !0), this._super(), this.getEl().style.height = "", this.getEl("body").style.height = "", this
            },
            cancel: function() {
                var e = this;
                e.hideAll(), e.fire("select")
            },
            hideAll: function() {
                var e = this;
                return this.find("menuitem").exec("hideMenu"), e._super()
            },
            preRender: function() {
                var e = this;
                return e.items().each(function(t) {
                    var n = t.settings;
                    return n.icon || n.selectable ? (e._hasIcons = !0, !1) : void 0
                }), e._super()
            }
        });
        return r
    }), r(Gt, [kt], function(e) {
        return e.extend({
            Defaults: {
                classes: "radio",
                role: "radio"
            }
        })
    }), r(Xt, [_t, X], function(e, t) {
        return e.extend({
            renderHtml: function() {
                var e = this,
                    t = e.classPrefix;
                return e.addClass("resizehandle"), "both" == e.settings.direction && e.addClass("resizehandle-both"), e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes() + '"><i class="' + t + "ico " + t + 'i-resize"></i></div>'
            },
            postRender: function() {
                var e = this;
                e._super(), e.resizeDragHelper = new t(this._id, {
                    start: function() {
                        e.fire("ResizeStart")
                    },
                    drag: function(t) {
                        "both" != e.settings.direction && (t.deltaX = 0), e.fire("Resize", t)
                    },
                    stop: function() {
                        e.fire("ResizeEnd")
                    }
                })
            },
            remove: function() {
                return this.resizeDragHelper && this.resizeDragHelper.destroy(), this._super()
            }
        })
    }), r(Jt, [_t], function(e) {
        return e.extend({
            renderHtml: function() {
                var e = this;
                return e.addClass("spacer"), e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes() + '"></div>'
            }
        })
    }), r(Qt, [$t, $], function(e, t) {
        return e.extend({
            Defaults: {
                classes: "widget btn splitbtn",
                role: "button"
            },
            repaint: function() {
                var e = this,
                    n = e.getEl(),
                    r = e.layoutRect(),
                    i, o;
                return e._super(), i = n.firstChild, o = n.lastChild, t.css(i, {
                    width: r.w - t.getSize(o).width,
                    height: r.h - 2
                }), t.css(o, {
                    height: r.h - 2
                }), e
            },
            activeMenu: function(e) {
                var n = this;
                t.toggleClass(n.getEl().lastChild, n.classPrefix + "active", e)
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = e.classPrefix,
                    r = e.settings.icon ? n + "ico " + n + "i-" + e.settings.icon : "";
                return '<div id="' + t + '" class="' + e.classes() + '" role="button" tabindex="-1"><button type="button" hidefocus="1" tabindex="-1">' + (r ? '<i class="' + r + '"></i>' : "") + (e._text ? (r ? " " : "") + e._text : "") + '</button><button type="button" class="' + n + 'open" hidefocus="1" tabindex="-1">' + (e._menuBtnText ? (r ? "\xa0" : "") + e._menuBtnText : "") + ' <i class="' + n + 'caret"></i></button></div>'
            },
            postRender: function() {
                var e = this,
                    t = e.settings.onclick;
                return e.on("click", function(e) {
                    var n = e.target;
                    if (e.control == this) for (; n;) {
                        if (e.aria && "down" != e.aria.key || "BUTTON" == n.nodeName && -1 == n.className.indexOf("open")) return e.stopImmediatePropagation(), void t.call(this, e);
                        n = n.parentNode
                    }
                }), delete e.settings.onclick, e._super()
            }
        })
    }), r(Zt, [It], function(e) {
        return e.extend({
            Defaults: {
                containerClass: "stack-layout",
                controlClass: "stack-layout-item",
                endClass: "break"
            }
        })
    }), r(en, [Q, $], function(e, t) {
        return e.extend({
            lastIdx: 0,
            Defaults: {
                layout: "absolute",
                defaults: {
                    type: "panel"
                }
            },
            activateTab: function(e) {
                var n;
                this.activeTabId && (n = this.getEl(this.activeTabId), t.removeClass(n, this.classPrefix + "active"), n.setAttribute("aria-selected", "false")), this.activeTabId = "t" + e, n = this.getEl("t" + e), n.setAttribute("aria-selected", "true"), t.addClass(n, this.classPrefix + "active"), e != this.lastIdx && (this.items()[this.lastIdx].hide(), this.lastIdx = e), this.items()[e].show().fire("showtab"), this.reflow()
            },
            renderHtml: function() {
                var e = this,
                    t = e._layout,
                    n = "",
                    r = e.classPrefix;
                return e.preRender(), t.preRender(e), e.items().each(function(t, i) {
                    var o = e._id + "-t" + i;
                    t.aria("role", "tabpanel"), t.aria("labelledby", o), n += '<div id="' + o + '" class="' + r + 'tab" unselectable="on" role="tab" aria-controls="' + t._id + '" aria-selected="false" tabIndex="-1">' + e.encode(t.settings.title) + "</div>"
                }), '<div id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1"><div id="' + e._id + '-head" class="' + r + 'tabs" role="tablist">' + n + '</div><div id="' + e._id + '-body" class="' + e.classes("body") + '">' + t.renderHtml(e) + "</div></div>"
            },
            postRender: function() {
                var e = this;
                e._super(), e.settings.activeTab = e.settings.activeTab || 0, e.activateTab(e.settings.activeTab), this.on("click", function(t) {
                    var n = t.target.parentNode;
                    if (t.target.parentNode.id == e._id + "-head") for (var r = n.childNodes.length; r--;) n.childNodes[r] == t.target && e.activateTab(r)
                })
            },
            initLayoutRect: function() {
                var e = this,
                    n, r, i;
                r = t.getSize(e.getEl("head")).width, r = 0 > r ? 0 : r, i = 0, e.items().each(function(t, n) {
                    r = Math.max(r, t.layoutRect().minW), i = Math.max(i, t.layoutRect().minH), e.settings.activeTab != n && t.hide()
                }), e.items().each(function(e) {
                    e.settings.x = 0, e.settings.y = 0, e.settings.w = r, e.settings.h = i, e.layoutRect({
                        x: 0,
                        y: 0,
                        w: r,
                        h: i
                    })
                });
                var o = t.getSize(e.getEl("head")).height;
                return e.settings.minWidth = r, e.settings.minHeight = i + o, n = e._super(), n.deltaH += o, n.innerH = n.h - n.deltaH, n
            }
        })
    }), r(tn, [_t, $], function(e, t) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e), t._value = e.value || "", t.addClass("textbox"), e.multiline ? t.addClass("multiline") : t.on("keydown", function(e) {
                    13 == e.keyCode && t.parents().reverse().each(function(t) {
                        return e.preventDefault(), t.hasEventListeners("submit") && t.toJSON ? (t.fire("submit", {
                            data: t.toJSON()
                        }), !1) : void 0
                    })
                })
            },
            disabled: function(e) {
                var t = this;
                return t._rendered && "undefined" != typeof e && (t.getEl().disabled = e), t._super(e)
            },
            value: function(e) {
                var t = this;
                return "undefined" != typeof e ? (t._value = e, t._rendered && (t.getEl().value = e), t) : t._rendered ? t.getEl().value : t._value
            },
            repaint: function() {
                var e = this,
                    t, n, r, i = 0,
                    o = 0,
                    a;
                t = e.getEl().style, n = e._layoutRect, a = e._lastRepaintRect || {};
                var s = document;
                return !e.settings.multiline && s.all && (!s.documentMode || s.documentMode <= 8) && (t.lineHeight = n.h - o + "px"), r = e._borderBox, i = r.left + r.right + 8, o = r.top + r.bottom + (e.settings.multiline ? 8 : 0), n.x !== a.x && (t.left = n.x + "px", a.x = n.x), n.y !== a.y && (t.top = n.y + "px", a.y = n.y), n.w !== a.w && (t.width = n.w - i + "px", a.w = n.w), n.h !== a.h && (t.height = n.h - o + "px", a.h = n.h), e._lastRepaintRect = a, e.fire("repaint", {}, !1), e
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = e.settings,
                    r = e.encode(e._value, !1),
                    i = "";
                return "spellcheck" in n && (i += ' spellcheck="' + n.spellcheck + '"'), n.maxLength && (i += ' maxlength="' + n.maxLength + '"'), n.size && (i += ' size="' + n.size + '"'), n.subtype && (i += ' type="' + n.subtype + '"'), e.disabled() && (i += ' disabled="disabled"'), n.multiline ? '<textarea id="' + t + '" class="' + e.classes() + '" ' + (n.rows ? ' rows="' + n.rows + '"' : "") + ' hidefocus="1"' + i + ">" + r + "</textarea>" : '<input id="' + t + '" class="' + e.classes() + '" value="' + r + '" hidefocus="1"' + i + " />"
            },
            postRender: function() {
                var e = this;
                return t.on(e.getEl(), "change", function(t) {
                    e.fire("change", t)
                }), e._super()
            },
            remove: function() {
                t.off(this.getEl()), this._super()
            }
        })
    }), r(nn, [$, j], function(e, t) {
        return function(n, r) {
            var i = this,
                o, a = t.classPrefix;
            i.show = function(t) {
                return i.hide(), o = !0, window.setTimeout(function() {
                    o && n.appendChild(e.createFragment('<div class="' + a + "throbber" + (r ? " " + a + "throbber-inline" : "") + '"></div>'))
                }, t || 0), i
            }, i.hide = function() {
                var e = n.lastChild;
                return e && -1 != e.className.indexOf("throbber") && e.parentNode.removeChild(e), o = !1, i
            }
        }
    }), a([l, c, d, u, f, p, m, h, v, y, b, C, x, w, _, E, N, k, S, T, R, B, D, L, H, P, O, I, F, z, W, V, U, q, $, j, K, Y, G, X, J, Q, Z, et, tt, nt, rt, it, ot, at, st, lt, ct, dt, ut, ft, pt, mt, ht, gt, vt, yt, bt, Ct, xt, wt, _t, Et, Nt, kt, St, Tt, Rt, At, Bt, Dt, Lt, Mt, Ht, Pt, Ot, It, Ft, zt, Wt, Vt, Ut, qt, $t, jt, Kt, Yt, Gt, Xt, Jt, Qt, Zt, en, tn, nn])
}(this);
tinymce.PluginManager.add("link",function(t){function e(e){return function(){var n=t.settings.link_list;"string"==typeof n?tinymce.util.XHR.send({url:n,success:function(t){e(tinymce.util.JSON.parse(t))}}):"function"==typeof n?n(e):e(n)}}function n(e){function n(t){var e=d.find("#text");(!e.value()||t.lastControl&&e.value()==t.lastControl.text())&&e.value(t.control.text()),d.find("#href").value(t.control.value())}function l(){function n(e,l){return l=l||[],tinymce.each(e,function(e){var i={text:e.text||e.title};e.menu?i.menu=n(e.menu):i.value=t.convertURL(e.value||e.url,"href"),l.push(i)}),l}return n(e,[{text:"None",value:""}])}function i(e){return tinymce.each(e,function(e){e.textStyle=function(){return t.formatter.getCssText({inline:"a",classes:[e.value]})}}),e}function a(e,n,l){var i,a=[];return tinymce.each(t.settings[e]||l,function(t){var e={text:t.text||t.title,value:t.value};a.push(e),(b[n]===t.value||!i&&t.selected)&&(i=e)}),i&&!b[n]&&(b[n]=i.value,i.selected=!0),a}function r(e){var l=[];return tinymce.each(t.dom.select("a:not([href])"),function(t){var n=t.name||t.id;n&&l.push({text:n,value:"#"+n,selected:-1!=e.indexOf("#"+n)})}),l.length?(l.unshift({text:"None",value:""}),{name:"anchor",type:"listbox",label:"Anchors",values:l,onselect:n}):void 0}function o(){h&&h.value(t.convertURL(this.value(),"href")),!f&&0===b.text.length&&x&&this.parent().parent().find("#text")[0].value(this.value())}function s(t){var e=k.getContent();if(/</.test(e)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(e)||-1==e.indexOf("href=")))return!1;if(t){var n,l=t.childNodes;if(0===l.length)return!1;for(n=l.length-1;n>=0;n--)if(3!=l[n].nodeType)return!1}return!0}var u,c,f,d,x,v,h,g,m,p,y,b={},k=t.selection,w=t.dom;u=k.getNode(),c=w.getParent(u,"a[href]"),x=s(),b.text=f=c?c.innerText||c.textContent:k.getContent({format:"text"}),b.href=c?w.getAttrib(c,"href"):"",b.target=c?w.getAttrib(c,"target"):t.settings.default_link_target||null,b.rel=c?w.getAttrib(c,"rel"):null,b["class"]=c?w.getAttrib(c,"class"):null,b.title=c?w.getAttrib(c,"title"):"",x&&(v={name:"text",type:"textbox",size:40,label:"Text to display",onchange:function(){b.text=this.value()}}),e&&(h={type:"listbox",label:"Link list",values:l(),onselect:n,value:t.convertURL(b.href,"href"),onPostRender:function(){h=this}}),t.settings.target_list!==!1&&(m={name:"target",type:"listbox",label:"Target",values:a("target_list","target",[{text:"None",value:""},{text:"New window",value:"_blank"}])}),t.settings.rel_list&&(g={name:"rel",type:"listbox",label:"Rel",values:a("rel_list","rel",[{text:"None",value:""}])}),t.settings.link_class_list&&(p={name:"class",type:"listbox",label:"Class",values:i(a("link_class_list","class"))}),t.settings.link_title!==!1&&(y={name:"title",type:"textbox",label:"Title",value:b.title}),d=t.windowManager.open({title:"Insert link",data:b,body:[{name:"href",type:"filepicker",filetype:"file",size:40,autofocus:!0,label:"Url",onchange:o,onkeyup:o},v,y,r(b.href),h,g,m,p],onSubmit:function(e){function n(e,n){var l=t.selection.getRng();window.setTimeout(function(){t.windowManager.confirm(e,function(e){t.selection.setRng(l),n(e)})},0)}function l(){var e={href:i,target:b.target?b.target:null,rel:b.rel?b.rel:null,"class":b["class"]?b["class"]:null,title:b.title?b.title:null};c?(t.focus(),x&&b.text!=f&&("innerText"in c?c.innerText=b.text:c.textContent=b.text),w.setAttribs(c,e),k.select(c),t.undoManager.add()):x?t.insertContent(w.createHTML("a",e,w.encode(b.text))):t.execCommand("mceInsertLink",!1,e)}var i;return b=tinymce.extend(b,e.data),(i=b.href)?i.indexOf("@")>0&&-1==i.indexOf("//")&&-1==i.indexOf("mailto:")?void n("The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",function(t){t&&(i="mailto:"+i),l()}):/^\s*www\./i.test(i)?void n("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(t){t&&(i="http://"+i),l()}):void l():void t.execCommand("unlink")}})}t.addButton("link",{icon:"link",tooltip:"Insert/edit link",shortcut:"Ctrl+K",onclick:e(n),stateSelector:"a[href]"}),t.addButton("unlink",{icon:"unlink",tooltip:"Remove link",cmd:"unlink",stateSelector:"a[href]"}),t.addShortcut("Ctrl+K","",e(n)),this.showDialog=n,t.addMenuItem("link",{icon:"link",text:"Insert link",shortcut:"Ctrl+K",onclick:e(n),stateSelector:"a[href]",context:"insert",prependToContext:!0})});
tinymce.PluginManager.add("code",function(e){function o(){e.windowManager.open({title:"Source code",body:{type:"textbox",name:"code",multiline:!0,minWidth:e.getParam("code_dialog_width",600),minHeight:e.getParam("code_dialog_height",Math.min(tinymce.DOM.getViewPort().h-200,500)),value:e.getContent({source_view:!0}),spellcheck:!1,style:"direction: ltr; text-align: left"},onSubmit:function(o){e.focus(),e.undoManager.transact(function(){e.setContent(o.data.code)}),e.selection.setCursorLocation(),e.nodeChanged()}})}e.addCommand("mceCodeEditor",o),e.addButton("code",{icon:"code",tooltip:"Source code",onclick:o}),e.addMenuItem("code",{icon:"code",text:"Source code",context:"tools",onclick:o})});
tinymce.PluginManager.add("textcolor",function(e){function t(){var t,o,l=[];for(o=e.settings.textcolor_map||["000000","Black","993300","Burnt orange","333300","Dark olive","003300","Dark green","003366","Dark azure","000080","Navy Blue","333399","Indigo","333333","Very dark gray","800000","Maroon","FF6600","Orange","808000","Olive","008000","Green","008080","Teal","0000FF","Blue","666699","Grayish blue","808080","Gray","FF0000","Red","FF9900","Amber","99CC00","Yellow green","339966","Sea green","33CCCC","Turquoise","3366FF","Royal blue","800080","Purple","999999","Medium gray","FF00FF","Magenta","FFCC00","Gold","FFFF00","Yellow","00FF00","Lime","00FFFF","Aqua","00CCFF","Sky blue","993366","Red violet","C0C0C0","Silver","FF99CC","Pink","FFCC99","Peach","FFFF99","Light yellow","CCFFCC","Pale green","CCFFFF","Pale cyan","99CCFF","Light sky blue","CC99FF","Plum","FFFFFF","White"],t=0;t<o.length;t+=2)l.push({text:o[t+1],color:o[t]});return l}function o(){var o,l,r,a,c,i,n,F,d,s=this;for(o=t(),r='<table class="mce-grid mce-grid-border mce-colorbutton-grid" role="list" cellspacing="0"><tbody>',a=o.length-1,c=e.settings.textcolor_rows||5,i=e.settings.textcolor_cols||8,F=0;c>F;F++){for(r+="<tr>",n=0;i>n;n++)d=F*i+n,d>a?r+="<td></td>":(l=o[d],r+='<td><div id="'+s._id+"-"+d+'" data-mce-color="'+l.color+'" role="option" tabIndex="-1" style="'+(l?"background-color: #"+l.color:"")+'" title="'+l.text+'"></div></td>');r+="</tr>"}return r+="</tbody></table>"}function l(t){var o,l=this.parent();(o=t.target.getAttribute("data-mce-color"))&&(this.lastId&&document.getElementById(this.lastId).setAttribute("aria-selected",!1),t.target.setAttribute("aria-selected",!0),this.lastId=t.target.id,l.hidePanel(),o="#"+o,l.color(o),e.execCommand(l.settings.selectcmd,!1,o))}function r(){var t=this;t._color&&e.execCommand(t.settings.selectcmd,!1,t._color)}e.addButton("forecolor",{type:"colorbutton",tooltip:"Text color",selectcmd:"ForeColor",panel:{role:"application",ariaRemember:!0,html:o,onclick:l},onclick:r}),e.addButton("backcolor",{type:"colorbutton",tooltip:"Background color",selectcmd:"HiliteColor",panel:{role:"application",ariaRemember:!0,html:o,onclick:l},onclick:r})});
(function(){var e=" |\u2200\uff9f , (\u00b4\uff9f\u0414\uff9f`) , (;\u00b4\u0414`) , (\uff40\uff65\u03c9\uff65) , (=\uff9f\u03c9\uff9f)= , | \u03c9\u30fb\u00b4) , |-` ) , |\u0434` ) , |\u30fc` ) , |\u2200` ) , (\u3064\u0434\u2282) , (\uff9f\u0414\uff9f\u2261\uff9f\u0414\uff9f) , (\uff3eo\uff3e)\uff89 , (|||\uff9f\u0414\uff9f) , ( \uff9f\u2200\uff9f) , ( \u00b4\u2200`) , (*\u00b4\u2200`) , (*\uff9f\u2207\uff9f) , (*\uff9f\u30fc\uff9f) , (\u3000\uff9f 3\uff9f) , ( \u00b4\u30fc`) , ( \u30fb_\u309d\u30fb) , ( \u00b4_\u309d`) , (*\u00b4\u0434`) , (\u30fb\u30fc\u30fb) , (\u30fb\u2200\u30fb) , (\u309d\u2200\uff65) , (\u3003\u2200\u3003) , (*\uff9f\u2200\uff9f*) , ( \uff9f\u2200\u3002) , ( `\u0434\u00b4) , (`\u03b5\u00b4 ) , (`\u30ee\u00b4 ) , \u03c3`\u2200\u00b4) ,  \uff9f\u2200\uff9f)\u03c3 , \uff9f \u2200\uff9f)\u30ce , (\u256c\uff9f\u0434\uff9f) , (|||\uff9f\u0434\uff9f) , ( \uff9f\u0434\uff9f) , \u03a3( \uff9f\u0434\uff9f) , ( ;\uff9f\u0434\uff9f) , ( ;\u00b4\u0434`) , (\u3000\u0434 ) \uff9f \uff9f , ( \u2609\u0434\u2299) , (((\u3000\uff9f\u0434\uff9f))) , ( ` \u30fb\u00b4) , ( \u00b4\u0434`) , ( -\u0434-) , (&gt;\u0434&lt;) , \uff65\uff9f( \uff89\u0434`\uff9f) , ( T\u0434T) , (\uffe3\u2207\uffe3) , (\uffe33\uffe3) , (\uffe3\uff70\uffe3) , (\uffe3 . \uffe3) , (\uffe3\u76bf\uffe3) , (\uffe3\u8278\uffe3) , (\uffe3\ufe3f\uffe3) , (\uffe3\ufe36\uffe3) , \u30fe(\u00b4\u03c9\uff9f\uff40) , (*\u00b4\u03c9`*) , (\u30fb\u03c9\u30fb) , ( \u00b4\u30fb\u03c9) , (\uff40\u30fb\u03c9) , (\u00b4\u30fb\u03c9\u30fb`) , (`\u30fb\u03c9\u30fb\u00b4) , ( `_\u3063\u00b4) , ( `\u30fc\u00b4) , ( \u00b4_\u3063`) , ( \u00b4\u03c1`) , ( \uff9f\u03c9\uff9f) , (o\uff9f\u03c9\uff9fo) , (\u3000^\u03c9^) , (\uff61\u25d5\u2200\u25d5\uff61) , /( \u25d5\u203f\u203f\u25d5 )\\ , \u30fe(\u00b4\u03b5`\u30fe) , (\u30ce\uff9f\u2200\uff9f)\u30ce , (\u03c3\uff9f\u0434\uff9f)\u03c3 , (\u03c3\uff9f\u2200\uff9f)\u03c3 , |\u0434\uff9f ) , \u2503\u96fb\u67f1\u2503 , \uff9f(\u3064\u0434`\uff9f) , \uff9f\u212b\uff9f )\u3000 , \u2282\u5f61\u2606))\u0434`) , \u2282\u5f61\u2606))\u0434\u00b4) , \u2282\u5f61\u2606))\u2200`) ".split(",");
tinymce.PluginManager.add("yen",function(c){var b,f,g;b=function(a,c){var d,b;d=$('<div class="tinymce-yen-box mce-menu"><div>').css({left:a+"px",top:c+"px"});$("body").append(d);for(b in e)d.append(f(e[b]));setTimeout(function(){$(document).on("click.yentext",function(){$(document).off("click.yentext");d.remove()})},1)};f=function(a){a=$('<div class="tinymce-yen-item">'+a+"</div>");a.on("click",function(){g(this.innerText)});return a};g=function(a){c.insertContent(a)};c.addButton("yen",{icon:"yen",
tooltip:"Yen text",onclick:function(a){b(a.pageX,a.pageY)}})})})();
/*global tinymce:true */
/*global $:true */

(function () {
	'use strict';

	tinymce.PluginManager.add('image', function (editor) {
		var allowedUploader,
			showDialog = function () {
				var tab = 'link', body;
				if (typeof $.cookie === 'undefined') {
					$.getScript('/libraries/jquery.cookie/jquery.cookie.js', removeUploadCookie);
				}
				body = [{
					title: 'Insert link',
					type: 'form',
					items: [{
						label: 'Url',
						name: 'linkUrl',
						type: 'textbox'
					}, {
						label: 'Width',
						name: 'linkWidth',
						type: 'textbox'
					}, {
						label: 'Height',
						name: 'linkHeight',
						type: 'textbox'
					}],
					onShowTab: function () {
						tab = 'link';
					}
				}];
				if (allowedUploader) {
					body.push({
						title: 'Upload picture',
						type: 'form',
						pack: 'start',
						items: [{
							label: 'Upload',
							type: 'iframe',
							url: '/system/imageuploader',
							minWidth: 320,
							minHeight: 50
						}, {
							label: 'Width',
							name: 'uploadWidth',
							type: 'textbox'
						}, {
							label: 'Height',
							name: 'uploadHeight',
							type: 'textbox'
						}],
						onShowTab: function () {
							tab = 'upload';
						}
					});
				}
				editor.windowManager.open({
					title: 'Insert image',
					bodyType: 'tabpanel',
					body: body,
					onSubmit: function () {
						var data, content;
						data = submit[tab](this.toJSON());
						if (!data.url || data.url.indexOf('://') === -1) {
							return false;
						}
						content = imgTemplate(data);
						editor.insertContent(content);
						return true;
					}
				});
			},
			imgTemplate = function (data) {
				var html;
				html = '<img src="' + data.url + '"';
				if (data.width) {
					html += ' width="' + data.width + '"';
				}
				if (data.height) {
					html += ' height="' + data.height + '"';
				}
				html += ' />';
				return html;
			},
			submit = {
				link: function (data, close) {
					return({
						url: data.linkUrl,
						width: data.linkWidth,
						height: data.linkHeight
					});
				},
				upload: function (data, close) {
					return({
						url: readUploadCookie(),
						width: data.uploadWidth,
						height: data.uploadHeight
					});
				}
			},
			readUploadCookie = function () {
				var url = $.cookie(diybb.cookiePrefix + 'uploadimage');
				removeUploadCookie();
				return url;
			},
			removeUploadCookie = function () {
				$.removeCookie(diybb.cookiePrefix + 'uploadimage', {
					path: diybb.cookiePath,
					domain: diybb.cookieDomain
				});
			};

		editor.addButton('image', {
			icon: 'image',
			tooltip: 'Insert/edit image',
			onclick: showDialog,
			stateSelector: 'img:not([data-mce-object],[data-mce-placeholder])'
		});

		$.getJSON('/system/imageupallowed', function (res) {
			allowedUploader = res.state;
		});
	});
}());