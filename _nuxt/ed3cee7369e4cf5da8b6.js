(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{162:function(t,e,n){"use strict";var l=n(3),r=n(21),o=n(29),c=n(115),h=n(63),d=n(10),f=n(46).f,m=n(64).f,I=n(9).f,B=n(163).trim,v=l.Number,C=v,A=v.prototype,N="Number"==o(n(80)(A)),M="trim"in String.prototype,w=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var n,l,r,o=(e=M?e.trim():B(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:l=2,r=49;break;case 79:case 111:l=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,l)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(N?d((function(){A.valueOf.call(n)})):"Number"!=o(n))?c(new C(w(e)),n,v):w(e)};for(var x,_=n(8)?f(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),R=0;_.length>R;R++)r(C,x=_[R])&&!r(v,x)&&I(v,x,m(C,x));v.prototype=A,A.constructor=v,n(11)(l,"Number",v)}},163:function(t,e,n){var l=n(7),r=n(30),o=n(10),c=n(164),h="["+c+"]",d=RegExp("^"+h+h+"*"),f=RegExp(h+h+"*$"),m=function(t,e,n){var r={},h=o((function(){return!!c[t]()||"​"!="​"[t]()})),d=r[t]=h?e(I):c[t];n&&(r[n]=d),l(l.P+l.F*h,"String",r)},I=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(f,"")),t};t.exports=m},164:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},165:function(t,e,n){"use strict";n(162);var l={name:"GameGrid",props:{cellsPerRow:{type:Number,default:20},cellsPerColumn:{type:Number,default:20},cellResolution:{type:Number,default:22},livingCellFillStyle:{type:String,default:"#82ded2"},showFps:{type:Boolean,default:!1},skipDeadCellRender:{type:Boolean,default:!1}},data:function(){return{timeLastDraw:0,timeLastDrawFps:0,rafId:0,deadCellFillStyle:"#fff",cellBorderSize:2}},computed:{gridWidth:function(){return this.cellsPerRow*this.cellResolution+this.cellBorderSize},gridHeight:function(){return this.cellsPerColumn*this.cellResolution+this.cellBorderSize},canvasContext:function(){var canvas=this.$refs["canvas-grid"];return!!canvas.getContext&&canvas.getContext("2d")}},mounted:function(){!1!==this.canvasContext?(this.timeLastDraw=performance.now(),this.timeLastDrawFps=performance.now(),this.initDrawing(),this.drawCellsGrid()):this.$emit("cant-use-canvas")},beforeDestroy:function(){window.cancelAnimationFrame(this.rafId)},methods:{initDrawing:function(){!1===this.skipDeadCellRender&&(this.canvasContext.fillStyle="grey",this.canvasContext.fillRect(0,0,this.gridWidth,this.gridHeight))},drawCellsGrid:function(){this.skipDeadCellRender&&(this.canvasContext.fillStyle="#e7e2e8",this.canvasContext.fillRect(0,0,this.gridWidth,this.gridHeight));for(var t=0;t<this.cellsPerRow;t++)for(var e=0;e<this.cellsPerColumn;e++){var n=this.$store.getters["cells-grid/getCellState"](t,e);this.canvasContext.fillStyle=n?this.livingCellFillStyle:this.deadCellFillStyle,(!1===this.skipDeadCellRender||this.skipDeadCellRender&&n)&&this.canvasContext.fillRect(t*this.cellResolution+this.cellBorderSize,e*this.cellResolution+this.cellBorderSize,this.cellResolution-this.cellBorderSize,this.cellResolution-this.cellBorderSize)}this.calculateFps(),this.rafId=window.requestAnimationFrame(this.drawCellsGrid)},calculateFps:function(){var t=performance.now(),e=t-this.timeLastDraw;this.timeLastDraw=t,this.timeLastDraw-this.timeLastDrawFps>1e3&&(this.timeLastDrawFps=this.timeLastDraw,this.canvasContext.fillStyle="white",this.canvasContext.fillRect(0,this.gridHeight+1,this.gridWidth,this.cellResolution),this.canvasContext.fillStyle="black",this.canvasContext.font="13px IBM Plex Sans, Arial",this.canvasContext.fillText((1e3/e).toFixed(1)+" average fps",0,this.gridHeight+13))}}},r=n(16),component=Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"canvas-grid",staticClass:"canvas-grid",attrs:{width:this.gridWidth,height:!0===this.showFps?this.gridHeight+this.cellResolution:this.gridHeight}})}),[],!1,null,null,null);e.a=component.exports},175:function(t,e,n){var map={"./bulma.png":176,"./nuxt.svg":177,"./vue.png":178};function l(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}l.keys=function(){return Object.keys(map)},l.resolve=r,t.exports=l,l.id=175},176:function(t,e,n){t.exports=n.p+"img/bulma-5169c5c.png"},177:function(t,e,n){t.exports=n.p+"img/nuxt-68a498e.svg"},178:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAACK1BMVEVBuINBuIM8enI/nnxBuINBuINBuIM8enJBuIM8enJBuINBuINBuIM8enJBuIM8enJBuINBuIM7eXFBuINBuIM8eXFBuINBuIM8eHFBuIM8eXFBuIM8eHBBuIM8eHBBuIM8d3BBuINBuIM8d3BBuINBuINBuIM8dnBBuINBuIM8dnBBuINBuIM7dXBBuINBuIM8dG9BuINBuIM8dG9BuIM8dG9BuINBuIM8c29BuINBuIM7cm5BuINBuIM7cW5BuIM7cW9BuINBuINBuIM7cW5BuINBuINBuIM7b21BuINBuIM6b21BuIM7bm1BuINBuIM7bW1BuINBuIM6bGxBuINBuIM6a2xBuIM6a2xBuINBuIM6amxBuIM6aWtBuINBuIM6aGpBuINBuIM6ZmpBuINBuIM5ZGlBuIM5Y2lBuINBuIM5YWhBuINBuIM5YGdBuIM4XmdBuINBuIM4XGZBuINBuIM4WmVBuIM3WGRBuIM3V2RBuINBuIM3VGNBuIM2UmI2UGFBuIM1TWA1SV41Sl41S141TF81TWA2T2A2UWE2U2I3VWM3WGQ4W2U4Xmc5YGc5YWg5ZGk6Zmo6Z2o6aGo6a2w7bW07bm07cG48c287dnA7eHA8enI8fHI9fnM8gXM9g3Q9hnU9iXY+i3c+jHc+j3g+kXk+lHo/l3o/mXs+m3s/nnw/oH0/o31Apn5BqH5Aqn9BrH9BroBBr4BCsYBBs4FBtoJCt4JBuINdRXyIAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBQkNIixpW4peAAAAoklEQVQ4y83UMQ7CMBAEwP0c/IAv0CJq6Kx8gI78gdR+HhI5O7G9zm0RKWzluxttaeC4XOKcV5iT9jYGO0cgvThcXEfaMK1cDX/ySgppJXWkMnDYVnZclp9QZLD1o4GxhG0hl8zpkEju8LT14MGmsudqOdp08mC/sJRbTocrue1wtvPbg7nSc7XEDhCq0yFUt8ibCv3PSHU6hOpwVyFU93f5ArS6o1uCAo66AAAAAElFTkSuQmCC"},180:function(t,e,n){"use strict";n.r(e);var l={name:"FooterApp",data:function(){return{dependencies:[{link:"https://vuejs.org/",logo:"vue.png",alt:"Vue.js Logo"},{link:"https://fr.nuxtjs.org/",logo:"nuxt.svg",alt:"Nuxt.js Logo"},{link:"https://bulma.io/",logo:"bulma.png",alt:"Bulma Logo"}]}}},r=n(16),o={name:"HomePage",components:{FooterApp:Object(r.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"level"},[l("div",{staticClass:"level-left"},[l("div",{staticClass:"level-item"},[t._m(0),t._v(" "),t._l(t.dependencies,(function(t,e){return l("span",{key:e},[l("a",{attrs:{href:t.link,target:"_blank",rel:"noopener"}},[l("figure",{staticClass:"image is-32x32"},[l("img",{attrs:{src:n(175)("./"+t.logo),alt:t.alt}})])])])}))],2)]),t._v(" "),l("div",{staticClass:"level-right"},[l("div",{staticClass:"level-item"},[l("div",{staticClass:" buttons"},[l("a",{staticClass:"button is-link",attrs:{href:"https://github.com/mathieu-ducrot/vue-game-of-life",target:"_blank",rel:"noopener"}},[l("span",{staticClass:"icon"},[l("fa-icon",{staticClass:"fa-lg",attrs:{icon:["fab","github"]}})],1),t._v(" "),l("span",[t._v("mathieu-ducrot")])]),t._v(" "),l("a",{staticClass:"button is-link",attrs:{href:"https://www.linkedin.com/in/mathieu-ducrot-sf-vue/",target:"_blank",rel:"noopener"}},[l("span",{staticClass:"icon"},[l("fa-icon",{staticClass:"fa-lg",attrs:{icon:["fab","linkedin"]}})],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("strong",[this._v("Build with")])])}],!1,null,null,null).exports,GameGrid:n(165).a},data:function(){return{cellsPerRow:0,cellsPerColumn:0,cellResolution:38,timerId:0}},mounted:function(){this.cellsPerRow=Math.floor(window.innerWidth/this.cellResolution),this.cellsPerColumn=Math.floor((window.innerHeight-90)/this.cellResolution),this.$store.dispatch("cells-grid/initGridState",{cellsPerRow:this.cellsPerRow,cellsPerColumn:this.cellsPerColumn}),this.$store.dispatch("cells-grid/loadRandomGridPattern"),this.timerId=setTimeout(function t(){this.$store.dispatch("cells-grid/nextGridState"),this.timerId=setTimeout(t.bind(this),this.$store.state["cells-grid"].recommendedTimeoutSpeed)}.bind(this),this.$store.state["cells-grid"].recommendedTimeoutSpeed)},beforeDestroy:function(){clearTimeout(this.timerId)},head:function(){return{title:"Homepage",meta:[{hid:"description",name:"description",content:"Hi, i'm Mathieu Ducrot and you are watching my project on coding the Conway's Game of Life with Vue.js."}]}}},c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-fullheight-with-navbar"},[n("game-grid",{staticClass:"home-grid",attrs:{"cells-per-row":t.cellsPerRow,"cells-per-column":t.cellsPerColumn,"cell-resolution":t.cellResolution,"skip-dead-cell-render":!0}}),t._v(" "),n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[n("h1",{staticClass:"title is-size-1-desktop is-size-2-tablet is-size-3-mobile is-spaced is-uppercase",attrs:{itemscope:"",itemtype:"http://schema.org/CreativeWork"}},[n("span",{staticClass:"has-text-primary has-white-background"},[n("fa-icon",{attrs:{icon:["fas","th"]}})],1),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"buttons"},[n("nuxt-link",{staticClass:"button is-link",attrs:{to:{name:"rules"}}},[n("span",[t._v("What is it")]),t._v(" "),n("span",{staticClass:"icon"},[n("fa-icon",{attrs:{icon:["fas","question"]}})],1)]),t._v(" "),n("nuxt-link",{staticClass:"button is-link",attrs:{to:{name:"game"}}},[n("span",[t._v("Get Started ")]),t._v(" "),n("span",{staticClass:"icon"},[n("fa-icon",{attrs:{icon:["fas","play"]}})],1)])],1)])]),t._v(" "),n("div",{staticClass:"hero-foot"},[n("footer-app")],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("span",{attrs:{itemprop:"creator",itemscope:"",itemtype:"https://schema.org/Person"}},[e("span",{attrs:{itemprop:"familyName"}},[this._v("Conway")])]),this._v("'s\n          "),e("span",{attrs:{itemprop:"name"}},[this._v("Game of Life")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"subtitle"},[this._v("\n        A\n        "),e("strong",{staticClass:"has-text-primary"},[this._v("VueJS")]),this._v("\n        implementation of the Game of Life cellular automaton\n      ")])}],!1,null,null,null);e.default=c.exports}}]);