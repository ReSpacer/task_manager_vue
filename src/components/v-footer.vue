<template>
    <footer>
        <div class="container footer-container">
            <div class="row w-100">
                <div class="col-12">
                    <div class="footer">
                        <div class="socials">
                            <a href="#"><img src="../assets/instagram_logo.png" alt="instagram" class="socials__item"></a>
                            <a href="#"><img src="../assets/vk_logo.png" alt="vk" class="socials__item"></a>
                            <a href="#"><img src="../assets/facebook_logo.png" alt="facebook" class="socials__item"></a>
                            <a href="#"><img src="../assets/google_logo.png" alt="google" class="socials__item"></a>
                        </div>
                        <a href="#" class="politics">Условия и конфиденциальность</a>
                        <div class="apps">
                            <a href="#"><img src="../assets/google-play_logo.png" alt="google-play" class="apps__item"></a>
                            <a href="#"><img src="../assets/A_logo.png" alt="A" class="apps__item"></a>
                        </div>
                    </div>
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
        height: 93px;
        background: #52586F;
    }

    .footer-container
    {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .footer
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .socials__item
    {
        margin-right: 40px;
    }

    .apps__item
    {
        margin-left: 40px;
    }

    .politics
    {
        font-weight: 300;
        font-size: 20px;
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
