import VuePalette from "./Palette.vue";

Object.defineProperty(VuePalette, 'install', {
	value(Vue) {
        Vue.component("vue-palette",VuePalette)
	}
})

export default VuePalette
