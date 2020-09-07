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
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

  *
  {
    margin: 0;
    padding: 0;
  }

  body
  {
    background-color: #E5E5E5;
    font-family: Montserrat;
    color:black;
  }

  #app {
    font-family: Montserrat, sans-serif;
    
  }

  a
  {
    font-family: Montserrat;
    font-weight: 300;
    font-size: 9px;
    line-height: 11px;
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
    font-size: 9px;
    line-height: 11px;
  }

  h1, h2, h3, h4, h5, h6
  {
    font-family: Ubuntu;
    font-weight: 400;
    line-height: 25px;
  }

  h2
  {
    font-size: 20px;
  }

  .small-text
  {
    font-size: 7px;
  }

  button
  {
    font-family: Ubuntu;
    font-size: 10px;
  }

  button:focus, input:focus
  {
    outline: none;
  }

  .icon
  {
    width: 7px;
    height: 100%;
  }
</style>
