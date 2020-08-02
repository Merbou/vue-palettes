/*!
 * vue-palette v1.0.0
 * (c) Merouane Boucenna
 * Released under the MIT License.
 */
function t(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}function e(t,e,r,a,o,i,n,s,c,d){"boolean"!=typeof n&&(c=s,s=n,n=!1);const l="function"==typeof r?r.options:r;let f;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),a&&(l._scopeId=a),i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=f):e&&(f=n?function(t){e.call(this,d(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),f)if(l.functional){const t=l.render;l.render=function(e,r){return f.call(r),t(e,r)}}else{const t=l.beforeCreate;l.beforeCreate=t?[].concat(t,f):[f]}return r}t(".icon-checked{width:100%!important;position:absolute;background:0 0;display:flex;justify-content:center}.svg-icon{height:12px;font-weight:100;stroke:#fff;stroke-width:2}");var r={name:"single",components:{icon:e({render:function(t,e){var r=e._c;return r("div",{staticClass:"icon-checked"},[r("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"}})])])},staticRenderFns:[]},void 0,{name:"icon"},void 0,!0,void 0,!1,void 0,void 0,void 0)},props:{colors:{type:Array,required:!0},order:{type:Number,required:!0},active:{type:Number,default:-1},dark:{type:Boolean,default:!1}},data:function(){return{active_colors:this.active>-1&&this.active===this.order}},methods:{picked:function(){this.active_colors=!0,this.$emit("picked",{colors:this.colors,order:this.order})}},watch:{active:function(t){this.active_colors=t>-1&&t===this.order}}};t(".palette[data-v-72a6f475]{position:relative;width:95%;display:flex;border:1px rgba(253,253,253,.8) solid;opacity:.6;cursor:pointer;transition:transform .5s;-moz-transition:transform .5s;-webkit-transition:transform .5s;-o-transition:transform .5s}.palette-light[data-v-72a6f475]{border:1px rgba(26,25,25,.8) solid}.palette-dark[data-v-72a6f475]{border:1px rgba(253,253,253,.8) solid}.palette[data-v-72a6f475]:hover{opacity:1;transform:scaleY(1.1);transform:scaleY(1.1);-moz-transform:scaleY(1.1);-webkit-transform:scaleY(1.1);-o-transform:scaleY(1.1)}.active-light[data-v-72a6f475]{border:2px rgba(26,25,25,.8) solid;opacity:1;transform:scaleY(1.1);transform:scaleY(1.1);-moz-transform:scaleY(1.1);-webkit-transform:scaleY(1.1);-o-transform:scaleY(1.1)}.active-dark[data-v-72a6f475]{border:2px rgba(253,253,253,.8) solid;opacity:1;transform:scaleY(1.1);transform:scaleY(1.1);-moz-transform:scaleY(1.1);-webkit-transform:scaleY(1.1);-o-transform:scaleY(1.1)}.palette div[data-v-72a6f475]{height:12px;width:40px}.color[data-v-72a6f475]{flex-grow:2}");var a={name:"vuePalette",components:{single:e({render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"palette",class:{"active-dark":t.active_colors&&t.dark,"active-light":t.active_colors&&!t.dark,"palette-dark":t.dark,"palette-light":!t.dark},on:{click:t.picked}},[t.active_colors?r("icon"):t._e(),t._v(" "),t._l(t.colors,(function(t,e){return r("div",{key:t+e,staticClass:"color",style:{background:t}})}))],2)},staticRenderFns:[]},void 0,r,"data-v-72a6f475",!1,void 0,!1,void 0,void 0,void 0)},props:{palettes:{type:Array,required:!0},pick:{type:Array,default:function(){return[]}},dark:{type:Boolean,default:!1}},data:function(){return{active:-1}},mounted:function(){var t=this;this.active=this.palettes.findIndex((function(e){return function(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(t.length!==e.length)return!1;for(var r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}(e,t.pick)}))},methods:{picked:function(t){var e=t.colors,r=t.order;this.active=r,this.$emit("input",e)}}};t(".container-palette[data-v-3046657a]{width:auto;height:auto;display:flex;overflow:hidden;align-items:center;flex-direction:column}");var o=e({render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-palette"},t._l(t.palettes,(function(e,a){return r("single",{key:a,attrs:{order:a,colors:e,active:t.active,dark:t.dark},on:{picked:t.picked}})})),1)])},staticRenderFns:[]},void 0,a,"data-v-3046657a",!1,void 0,!1,void 0,void 0,void 0);Object.defineProperty(o,"install",{value:function(t){t.component("vue-palette",o)}});export default o;
//# sourceMappingURL=index.esm.js.map
