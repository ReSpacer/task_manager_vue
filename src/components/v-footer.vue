<template>
    <footer>
        <div class="container-fluid footer-container">
            <div class="footer">
                <div></div>
                <a href="#" class="politics">Условия и конфиденциальность</a>
                <div class="apps">
                    <a href="#"><img src="../assets/google-play_logo.png" alt="google-play" class="apps__item"></a>
                    <a href="#"><img src="../assets/A_logo.png" alt="A" class="apps__item"></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'v-footer',
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
    footer
    {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50px;
        background: #52586F;
        padding: 0 150px;
    }

    .footer-container
    {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .footer
    {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
    }

    .apps
    {
        margin-left: auto;
    }

    .apps__item
    {
        margin-left: 40px;
    }

    .politics
    {
        margin: 0 auto;
        font-weight: 300;
        font-size: 10px;
        line-height: 24px;
        color: white;
        text-decoration: none;
    }

    .politics:hover
    {
        font-weight: 300;
        color: white;
    }
</style>
