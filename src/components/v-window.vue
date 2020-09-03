<template>
    <main>
        <div class="container window-container">
            <div class="window">
                <div class="window__image">
                    <img :src="getRandomImage()" alt="image">
                </div>
                <div class="window__content">
                    <router-view/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

export default {
  name: 'v-window',
  components: {
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
        let images = require.context('../assets/', false, /\.png$/),
            img = this.images[Math.floor(Math.random()*this.images.length)];
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
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .window
    {
        display: flex;
        align-items: center;
        background: white;
        margin: 58px 0;
        border-radius: 14px;
        box-shadow: 0 0 15px rgb(141, 141, 141);
        padding: 10px;
        width: 634px;
        height: 412px;
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
        margin: 0;
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
        margin-top: 30px;
    }

    .window-form-field label
    {
        margin: 0 4px;
    }

    .window-form-field__input
    {
        font-family: Montserrat;
        font-size: 9px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.29);
        color: rgba(0, 0, 0, 0.62);
        padding: 4px;
        order: 1;
        width: 190px;
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
        font-size: 10px;
        min-width: 124px;
        height: 22px;
        color: white;
        background: #518EF8;
        border-radius: 22px;
        border: 2px solid #518EF8;
        margin-top: 30px;
        margin-bottom: 5px;
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

    .window-small-link
    {
        max-width: 140px;
        align-self: flex-start;
        margin-left: 15px;
        margin-top: 10px;
    }

    .window-small-link a
    {
        margin-left: 0;
    }

    .window-small-link, .window-small-link a
    {
        font-family: Montserrat;
        font-weight: 300;
        line-height: 9px;
        font-size: 7px;
    }
    

</style>
