(this["webpackJsonpwebcomponents-react"]=this["webpackJsonpwebcomponents-react"]||[]).push([[0],{14:function(n,e,t){n.exports=t(23)},20:function(n,e,t){},21:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);t(15);var a=t(3),r=t.n(a),i=t(13),o=t.n(i),l=(t(20),t(0)),c=t(1),s=t(5),u=t(2),d=t(4),h=(t(21),t(8)),b=t(10),m=t.n(b),f=t(11),p=t(6),v=t(7);function g(){var n=Object(h.a)([""]);return g=function(){return n},n}function j(){var n=Object(h.a)(["\n                <div class='resume-container'>\n                 ","\n                </div>\n        "]);return j=function(){return n},n}function O(){var n=Object(h.a)(["<span>some error occured, please try again</span>"]);return O=function(){return n},n}function y(){var n=Object(h.a)(["<span>Loading...</span>"]);return y=function(){return n},n}function k(){var n=Object(h.a)(["\n            <style>\n            .resume-container{\n                padding: 10px;\n                border: 1px solid #CCC;\n                BORDER-RADIUS: 6PX;\n                border-top: none;\n            }\n             .field-name{\n                 font-weight:bold;\n                 text-transform: capitalize;\n                 color: gray;\n             }\n             h3.field-name{\n                text-align: left;\n                font-size: 24px;\n                padding-left: 30px;\n                color: navy;\n             }\n             hr{\n                border: 0;\n                width  :100%;\n                height: 1px;\n                background: #333;\n                background: -webkit-gradient(linear, left top, right top, color-stop(0%,hsla(0,0%,0%,0)), color-stop(50%,hsla(0,0%,0%,.75)), color-stop(100%,hsla(0,0%,0%,0)));\n                background: -webkit-linear-gradient(left, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,.75) 50%, hsla(0,0%,0%,0) 100%);\n                background:    -moz-linear-gradient(left, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,.75) 50%, hsla(0,0%,0%,0) 100%);\n                background:     -ms-linear-gradient(left, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,.75) 50%, hsla(0,0%,0%,0) 100%);\n                background:      -o-linear-gradient(left, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,.75) 50%, hsla(0,0%,0%,0) 100%);\n                background:         linear-gradient(left, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,.75) 50%, hsla(0,0%,0%,0) 100%);\n             }\n             .field-value{\n                 font-style:italic;\n                 font-size:70%;\n                 color: gray;\n             }\n             .list-items{\n                padding: 10px 0px 0px 50px;\n                display: inline-block;\n                width: 100%;\n                margin-bottom: 10px;\n             }\n             .object-items{\n                 padding-left:50px;\n             }\n             .item{\n                 margin-bottom:10px;\n                 float: left;\n                width: 50%;\n             }\n            </style>\n            <div>","</div>\n        "]);return k=function(){return n},n}function E(){var n=Object(h.a)(["<div class='object'>\n                    <hr/>\n                    <h3 class='field-name'>","</h3>\n                    <hr/>\n                    <div class='object-items'>\n                        ","\n                    </div>\n                        <br/><br/>\n                        </div>\n                </div>"]);return E=function(){return n},n}function w(){var n=Object(h.a)(["<div class='list'>\n                        <hr/>\n                        <h3 class='field-name'>","</h3>\n                        <hr/>\n                        <div class='list-items'>\n                        ","\n                        </div>\n                        <br/><br/>\n                    </div>"]);return w=function(){return n},n}function x(){var n=Object(h.a)(["\n                    <div class='item'>\n                            <div><label class='field-name'>","</label></div>\n                            <div  class='field-value'>","</div>\n                    </div>\n                "]);return x=function(){return n},n}var C=function(n){function e(){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this))).isLoading=!1,n.isError=!1,n}return Object(d.a)(e,n),Object(c.a)(e,null,[{key:"properties",get:function(){return{url:{type:String,hasChanged:function(n,e){return n!==e}},data:{type:Object},json:{type:Object},isLoading:{type:Boolean},isError:{type:Boolean}}}}]),Object(c.a)(e,[{key:"attributeChangedCallback",value:function(n,t,a){Object(p.a)(Object(u.a)(e.prototype),"attributeChangedCallback",this).call(this,n,t,a),"url"===n&&a&&a!==t&&this.loadResume(a)}},{key:"loadResume",value:function(n){var e=this;n&&(this.isLoading=!0,this.isError=!1,fetch(n).then(function(){var n=Object(f.a)(m.a.mark((function n(t){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.json();case 2:e.json=n.sent;case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(n){e.isError=!0})).finally((function(){e.isLoading=!1})))}},{key:"getFullCollection",value:function(n){var e=this;return Object.keys(n).map((function(t,a){return e.getHtmlContent(t,n[t])}))}},{key:"getHtmlContent",value:function(n,e){var t=this,a=typeof e;return"string"===a?Object(v.b)(x(),n,e):"object"===a?Array.isArray(e)?Object(v.b)(w(),n,e.map((function(n){return t.getFullCollection(n)}))):Object(v.b)(E(),n,this.getFullCollection(e)):void 0}},{key:"render",value:function(){return console.log(this.url),Object(v.b)(k(),this.isLoading?Object(v.b)(y()):this.isError?Object(v.b)(O()):this.DataTemplate)}},{key:"DataTemplate",get:function(){return this.json?Object(v.b)(j(),this.getFullCollection(this.json)):Object(v.b)(g())}}]),e}(v.a);customElements.define("my-resume",C);var R=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this,n))).onShowResume=function(n){t.setState({url:t.urlInput.value})},t.urlInput=r.a.createRef(),t.state={url:"http://demo9617924.mockable.io/myresume"},t}return Object(d.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){var n=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"WebComponents inside ReactJs"),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",defaultValue:this.state.url,ref:function(e){return n.urlInput=e},placeholder:"Enter Resume JSON url here..."}),r.a.createElement("br",null))),r.a.createElement("div",{className:"col-sm-6 text-left"},r.a.createElement("button",{onClick:this.onShowResume,className:"btn btn-primary"},"Load Resume"))),r.a.createElement("div",null,r.a.createElement("my-resume",{url:this.state.url})))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.c106fdea.chunk.js.map