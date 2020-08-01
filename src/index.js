import VuePixelBar from "./PixelBar.vue";

Object.defineProperty(VuePixelBar, 'install', {
	value(Vue) {
        Vue.component("vue-pixel-bar",VuePixelBar)
	}
})

export default VuePixelBar
