<template>
  <div class="container-palette">
    <single
      v-for="(palette,index) in palettes"
      :key="index"
      :order="index"
      :colors="palette"
      :active="active"
      :dark="dark"
      @picked="picked"
    />
  </div>
</template>

<script>
import single from "./single";
import { isEqual } from "../utils/helpers";
export default {
  name: "vuePalette",
  components: { single },
  props: {
    palettes: {
      type: Array,
      required: true
    },
    pick: {
      type: Array,
      default: () => []
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: -1
    };
  },
  mounted() {
    this.active = this.palettes.findIndex(palette =>
      isEqual(palette, this.pick)
  );
  },
  methods: {
    picked({ colors, order }) {
      this.active = order;
      this.$emit("input", colors);
    }
  }
};
</script>

<style scoped>
.container-palette {
width: auto;
    height: auto;
    display: flex;
    overflow: hidden;
    align-items: center;
  flex-direction: column;
}
</style>