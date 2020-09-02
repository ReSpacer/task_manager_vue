<template>
    <div class="main-wrapper">
      <v-header/>
      <v-window/>
      <v-footer/>
    </div>
</template>

<script>
import vHeader from './v-header'
import vFooter from './v-footer'
import vWindow from './v-window'

export default {
  name: 'v-main-wrapper',
  components: {
    vHeader,
    vFooter,
    vWindow
  },
  data: () => {
    return {
    }
  },
  methods: {

  }
}
</script>
  
<style>
    .main-wrapper
    {
       
    }
</style>
