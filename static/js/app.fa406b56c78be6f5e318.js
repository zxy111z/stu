webpackJsonp([0], {
    "/2BU": function (t, s) {
    }, "/FH4": function (t, s) {
    }, Jmt5: function (t, s) {
    }, NHnr: function (t, s, a) {
        "use strict";
        Object.defineProperty(s, "__esModule", {value: !0});
        var e = a("7+uW"), r = {
            name: "App", methods: {
                quit: function () {
                    localStorage.login = "", this.$router.push({path: "/login"})
                }
            }
        }, i = {
            render: function () {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return a("div", {attrs: {id: "app"}}, [a("div", {staticClass: "container header"}, [a("a", {
                    staticClass: "glyphicon glyphicon-home",
                    attrs: {href: "#/"}
                }), t._v(" "), a("span", {
                    directives: [{name: "show", rawName: "v-show"}],
                    staticClass: "glyphicon glyphicon-arrow-left"
                }), t._v(" "), a("header", [a("div", {staticClass: "title"}, [t._v("学生成绩管理表")]), t._v(" "), a("div", {staticClass: "login"}, [t._v("欢迎xxx登录\n        "), a("span", {on: {click: t.quit}}, [t._v("退出")])])]), t._v(" "), a("transition", {attrs: {mode: "out-in"}}, [a("router-view")], 1)], 1)])
            }, staticRenderFns: []
        };
        var o = a("VU/8")(r, i, !1, function (t) {
            a("/2BU")
        }, "data-v-68a59b83", null).exports, n = a("/ocq"), l = {
            name: "HelloWorld", data: function () {
                return {
                    datas: [{id: 1, name: "小明", age: 20, classes: "01", project: "英语", score: "90"}, {
                        id: 1,
                        name: "小花",
                        age: 21,
                        classes: "01",
                        project: "英语",
                        score: "85"
                    }, {id: 1, name: "小红", age: 19, classes: "01", project: "英语", score: "96"}]
                }
            }, methods: {
                edit: function () {
                    localStorage.login = "yes"
                }, add: function () {
                    localStorage.login = "yes", this.$router.push({path: "/add"})
                }
            }
        }, c = {
            render: function () {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return a("table", {staticClass: "table table-bordered"}, [a("tbody", [t._m(0), t._v(" "), t._l(t.datas, function (s) {
                    return a("tr", [a("td", [t._v(t._s(s.id))]), t._v(" "), a("td", [t._v(t._s(s.name))]), t._v(" "), a("td", [t._v(t._s(s.age))]), t._v(" "), a("td", [t._v(t._s(s.classes))]), t._v(" "), a("td", [t._v(t._s(s.project))]), t._v(" "), a("td", [t._v(t._s(s.score))]), t._v(" "), a("td", [t._v("\n        删除\n        "), a("a", {
                        attrs: {href: "#/edit"},
                        on: {click: t.edit}
                    }, [t._v("编辑")])])])
                }), t._v(" "), a("div", {
                    staticClass: "glyphicon glyphicon-plus",
                    on: {click: t.add}
                }, [t._v("添加")])], 2)])
            }, staticRenderFns: [function () {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return a("tr", [a("th", [t._v("id")]), t._v(" "), a("th", [t._v("姓名")]), t._v(" "), a("th", [t._v("年龄")]), t._v(" "), a("th", [t._v("班级")]), t._v(" "), a("th", [t._v("学科")]), t._v(" "), a("th", [t._v("分数")]), t._v(" "), a("th", [t._v("操作")])])
            }]
        };
        var d = a("VU/8")(l, c, !1, function (t) {
            a("sxWh")
        }, "data-v-bf70e122", null).exports, p = {
            name: "login", data: function () {
                return {}
            }, methods: {
                onsubmit: function () {
                    localStorage.login = "yes", this.$router.push({path: "/"})
                }, reg: function () {
                    this.$router.push({path: "/reg"})
                }
            }
        }, u = {
            render: function () {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return a("div", {staticClass: "login"}, [a("h3", [t._v("登录页")]), t._v(" "), a("form", [t._m(0), t._v(" "), t._m(1), t._v(" "), a("button", {
                    staticClass: "btn btn-default",
                    attrs: {type: "submit"},
                    on: {click: t.onsubmit}
                }, [t._v("登录")]), t._v(" "), a("button", {
                    staticClass: "btn btn-default",
                    attrs: {type: "submit"},
                    on: {click: t.reg}
                }, [t._v("注册")])])])
            }, staticRenderFns: [function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputEmail1"}}, [this._v("用户名")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "email", id: "exampleInputEmail1", placeholder: "Email"}
                })])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputPassword1"}}, [this._v("Password")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "password", id: "exampleInputPassword1", placeholder: "Password"}
                })])
            }]
        };
        var _ = a("VU/8")(p, u, !1, function (t) {
            a("b54+")
        }, "data-v-08687611", null).exports, v = {
            name: "edit", data: function () {
                return {}
            }, methods: {
                t_jiao: function () {
                    localStorage.login = "yes", this.$router.push({path: "/"})
                }
            }
        }, m = {
            render: function () {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return a("div", [a("div", [a("form", [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), t._m(4), t._v(" "), t._m(5), t._v(" "), t._m(6), t._v(" "), a("button", {
                    staticClass: "btn btn-default",
                    attrs: {type: "submit"},
                    on: {click: t.t_jiao}
                }, [t._v("提交")])])])])
            }, staticRenderFns: [function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "name"}}, [this._v("姓名 address")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "email", id: "name", placeholder: "Email"}
                })])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "name"}}, [this._v("性别")]), this._v(" "), s("div", {staticClass: "radio"}, [s("label", [s("input", {
                    attrs: {
                        type: "radio",
                        name: "optionsRadios",
                        id: "optionsRadios2",
                        value: "man"
                    }
                }), this._v("\n                        男\n                    ")])]), this._v(" "), s("div", {staticClass: "radio disabled"}, [s("label", [s("input", {
                    attrs: {
                        type: "radio",
                        name: "optionsRadios",
                        id: "optionsRadios3",
                        value: "woman"
                    }
                }), this._v("\n                        女\n                    ")])])])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputPassword1"}}, [this._v("Password")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "password", id: "exampleInputPassword1", placeholder: "Password"}
                })])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputPassword1"}}, [this._v("年龄")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "datetime-local", id: "age", placeholder: "age"}
                })])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputPassword1"}}, [this._v("班级")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "", id: "classes", placeholder: "班级"}
                })])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputPassword1"}}, [this._v("学科")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "", id: "project", placeholder: "学科"}
                })])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputPassword1"}}, [this._v("分数")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "", id: "score", placeholder: "分数"}
                })])
            }]
        };
        var h = a("VU/8")(v, m, !1, function (t) {
            a("/FH4")
        }, "data-v-72cf83d3", null).exports, f = {
            render: function () {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return a("div", {staticClass: "reg"}, [a("h3", [t._v("注册")]), t._v(" "), a("form", [t._m(0), t._v(" "), t._m(1), t._v(" "), a("button", {
                    staticClass: "btn btn-default",
                    attrs: {type: "submit"},
                    on: {click: t.login1}
                }, [t._v("注册")])])])
            }, staticRenderFns: [function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputEmail1"}}, [this._v("Email address")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "email", id: "exampleInputEmail1", placeholder: "Email"}
                })])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputPassword1"}}, [this._v("Password")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "password", id: "exampleInputPassword1", placeholder: "Password"}
                })])
            }]
        };
        var g = a("VU/8")({
            name: "reg", methods: {
                login1: function () {
                    this.$router.push({path: "/login"})
                }
            }
        }, f, !1, function (t) {
            a("XUDd")
        }, "data-v-0ef18ee6", null).exports, b = {
            name: "add", data: function () {
                return {}
            }, methods: {
                r_add: function () {
                    localStorage.login = "yes", this.$router.push({path: "/"})
                }
            }
        }, C = {
            render: function () {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return a("div", [a("div", [a("form", [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), t._m(4), t._v(" "), t._m(5), t._v(" "), t._m(6), t._v(" "), a("button", {
                    staticClass: "btn btn-default",
                    attrs: {type: "submit"},
                    on: {click: t.r_add}
                }, [t._v("添加")])])])])
            }, staticRenderFns: [function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "name"}}, [this._v("姓名 address")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "email", id: "name", placeholder: "Email"}
                })])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "name"}}, [this._v("性别")]), this._v(" "), s("div", {staticClass: "radio"}, [s("label", [s("input", {
                    attrs: {
                        type: "radio",
                        name: "optionsRadios",
                        id: "optionsRadios2",
                        value: "man"
                    }
                }), this._v("\n                        男\n                    ")])]), this._v(" "), s("div", {staticClass: "radio disabled"}, [s("label", [s("input", {
                    attrs: {
                        type: "radio",
                        name: "optionsRadios",
                        id: "optionsRadios3",
                        value: "woman"
                    }
                }), this._v("\n                        女\n                    ")])])])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputPassword1"}}, [this._v("Password")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "password", id: "exampleInputPassword1", placeholder: "Password"}
                })])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputPassword1"}}, [this._v("年龄")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "datetime-local", id: "age", placeholder: "age"}
                })])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputPassword1"}}, [this._v("班级")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "", id: "classes", placeholder: "班级"}
                })])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputPassword1"}}, [this._v("学科")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "", id: "project", placeholder: "学科"}
                })])
            }, function () {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {staticClass: "form-group"}, [s("label", {attrs: {for: "exampleInputPassword1"}}, [this._v("分数")]), this._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {type: "", id: "score", placeholder: "分数"}
                })])
            }]
        };
        var y = a("VU/8")(b, C, !1, function (t) {
            a("jDM0")
        }, "data-v-3fc26d8a", null).exports;
        e.a.use(n.a);
        var w = new n.a({
            routes: [{path: "/", component: d}, {path: "/login", component: _}, {
                path: "/edit",
                component: h
            }, {path: "/reg", component: g}, {path: "/add", component: y}]
        });
        w.beforeEach(function (t, s, a) {
            console.log(t), "yes" == localStorage.login ? a() : "/login" == t.path || "/reg" == t.path ? a() : a("/login")
        });
        var E = w;
        a("Jmt5"), a("V+Jc");
        e.a.config.productionTip = !1, new e.a({el: "#app", router: E, components: {App: o}, template: "<App/>"})
    }, "V+Jc": function (t, s, a) {
        t.exports = a.p + "static/fonts/glyphicons-halflings-regular.f4769f9.eot"
    }, XUDd: function (t, s) {
    }, "b54+": function (t, s) {
    }, jDM0: function (t, s) {
    }, sxWh: function (t, s) {
    }
}, ["NHnr"]);
//# sourceMappingURL=app.fa406b56c78be6f5e318.js.map