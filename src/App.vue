<template>
  <div id="app">
    <v-main-wrapper></v-main-wrapper>
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'

export default {
  name: 'App',
  components: {
    vMainWrapper
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
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

  *
  {
    margin: 0;
    padding: 0;
  }

  body
  {
    background-color: #E5E5E5;
  }

  #app {
    font-family: Montserrat, sans-serif;
    
  }

  a
  {
    font-family: Yanone Kaffeesatz;
    font-weight: 300;
    font-size: 22px;
    line-height: 21px;
    text-decoration-line: underline;
    color: #616161;
  }

  a:hover
  {
    color: rgb(34, 34, 34);
  }

  p
  {
    font-family: Montserrat;
    font-weight: 300;
    line-height: 17px;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6
  {
    font-family: Yanone Kaffeesatz;
    font-weight: 400;
    line-height: 45px;
  }

  h2
  {
    font-size: 38px;
  }

  h3
  {
    font-size: 20px;
  }

  h6
  {
    font-size: 14px;
  }

  .small-text
  {
    font-size: 16px;
  }

  button
  {
    font-family: Yanone Kaffeesatz;
  }

  button:focus, input:focus
  {
    outline: none;
  }

  .icon
  {
    width: 15px;
    height: 100%;
  }
</style>
