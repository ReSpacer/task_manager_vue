<template>
    <div class="container window-container">
        <div class="window">
            <div class="window__image">
                <img :src="getRandomImage()" alt="image">
            </div>
            <div class="window__content">
                <v-window-login/>
            </div>
        </div>
    </div>
</template>

<script>
import vWindowLogin from './v-window-login'

export default {
  name: 'v-window',
  components: {
    vWindowLogin
  },
  data: () => {
    return {
        images: ["window_img_1",
        "window_img_2",
        "window_img_3",
        "window_img_4"]
    }
  },
  methods: {
    getRandomImage() {
        let images = require.context('../assets/', false, /\.png$/)
        let img = this.images[Math.floor(Math.random()*this.images.length)];
        return images('./' + img + ".png")
    }
  },
  mounted()
  {
    
  }
}
</script>
  
<style>
    .window-container
    {
        
    }

    .window
    {
        display: flex;
        align-items: center;
        background: white;
        margin: 58px 0;
        border-radius: 14px;
        box-shadow: 0 0 15px rgb(141, 141, 141);
        padding: 100px 10px;
    }

    .window__image
    {
        margin-right: 33px;
    }

    .window__content
    {
        width: 100%;
        margin-right: 93px;
    }

    .window__title
    {
        color: #598FF9;
    }

    .window-form
    {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .window-form-field
    {
        display: flex;
        align-items: flex-end;
        margin-top: 40px;
        margin-bottom: 10px;
    }

    .window-form-field__input
    {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.29);
        color: rgba(0, 0, 0, 0.62);
        padding: 8px;
        order: 1;
        width: 314px;
    }

    .window-form-field__input:focus
    {
        border-color: #518EF8;
        outline: none;
    }

    .window-form-field__input:focus ~ label .window-form-field__icon
    {
        color: #518EF8;
    }

    .window-form__button
    {
        font-size: 20px;
        min-width: 246px;
        height: 40px;
        color: white;
        background: #518EF8;
        border-radius: 22px;
        border: 2px solid #518EF8;
        margin-top: 40px;
        margin-bottom: 20px;
        transition: background-color 0.15s, border 0.15s;
    }

    .window-form__button:hover
    {
        background: #70B1DC;
        border-color: #70B1DC;
    }

    .window-form__button:active
    {
        background: transparent;
        color: #70B1DC;
        border-color: #70B1DC;
    }

</style>
