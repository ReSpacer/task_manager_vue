<template>
    <header>
        <div class="container header-container">
            <div class="row">
                <div class="col-12">
                    <div class="header">
                        <div class="logo">LOGOOO</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'v-header',
  components: {
    
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
    header
    {
        height: 60px;
        background: #52586F;
    }

    .header-container
    {
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    
    .logo
    {
        font-family: Noto Sans;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #518EF8;
        width: 80px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 5px;
    }
</style>
