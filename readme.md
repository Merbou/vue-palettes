# vue-palette
>It's a vue component that will allows you to choose the color palette

 [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) [![minified](https://badgen.net/bundlephobia/min/vue-palette@1.0.0)](https://bundlephobia.com/result?p=vue-palette@1.0.0) [![gzip](https://badgen.net/bundlephobia/minzip/vue-palette@1.0.0)](https://bundlephobia.com/result?p=vue-palette@1.0.0) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/Merbou/vue-palette) [![npm](https://img.shields.io/npm/v/vue-palette.svg)](https://www.npmjs.com/package/vue-palette)
 
 vue-palette is a dependency-free, lightweight vue component that can be overwrited by yourself.
### How to use?
```bash
npm install vue-palette
```


### Example

```vue
<template>
  <palette :palettes="palettes" v-model="picked"/>
</template>

<script>
  import palette from 'vue-palette';
  export default {
    components: { palette },
    data(){
        return {
           picked:[],
           palettes: [
            ["#8D8741", "#659DBD", "#DAAD86", "#FBEEC1", "#BC986A"],

            ["#05386B", "#379683", "#5CDB95", "#8EE4AF", "#8860D0"],
    
            ["#2E1114", "#501B1D", "#ADADAD"],
          ],
        }
    }
  }
</script>
```

### Options
|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| palettes       | list of palettes colors. |Array| [] |
| pick         | a chosen color palette. |Array | [] |
| dark  | Applies the dark theme variant to the component.  | Boolean | false |

### Events
| event Name | Description   |Value
| -----------------  | ---------------- | :--------: |
|input|Selected palette. Depending on what you passed to the value prop |Array|

