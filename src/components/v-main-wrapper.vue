<template>
    <div class="main-wrapper">
       <v-header/>
       <div class="container">
            <div class="row">
                <div class="col-12">
                    
                </div>
            </div>
        </div>
        <v-footer/>
    </div>
</template>

<script>
import vHeader from './v-header'
import vFooter from './v-footer'

export default {
  name: 'v-main-wrapper',
  components: {
    vHeader,
    vFooter
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
