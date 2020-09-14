<template>
    <main class="container window-container">
        <div class="window">
            <div class="window__image">
                <img :src="curImage" alt="image">
            </div>
            <div class="window__content">
                <component :is="curComponent"></component>
            </div>
        </div>
    </main>
</template>

<script>

export default {
  name: 'v-window',
  components: {
  },
  props: {
    curComponent: Object
  },
  data: () => {
    return {
        curImage: {},
        curImageName: "window_img_1.png",
    }
  },
  methods: {
    updateImage() {
        let allImages = require.context('@/assets/images/window_img/', false, /\.png$/);
        let freeImagesNames = allImages.keys().filter((imageName) => !imageName.includes(this.curImageName));
        this.curImageName = freeImagesNames[Math.floor(Math.random() * freeImagesNames.length)];
        this.curImage = allImages(this.curImageName);
    }
  },
  mounted()
  {
    this.updateImage()
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

    .window__image img
    {
        pointer-events: none;
        user-select: none;
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
        margin-bottom: 30px;
        text-align: center;
        min-width: 205px;
        user-select: none;
    }

    .window__text
    {
        margin-bottom: 20px;
        align-self: flex-start;
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
        margin-bottom: 30px;
    }

    .window-form-field:last-of-type
    {
        margin-bottom: 0;
    }

    .window-form-field label, .window-form-field__icon
    {
        margin: 0 4px;
    }

    .window-form-field__text
    {
        font-family: Montserrat;
        font-size: 9px;
        margin: auto 0;
        padding: 0 4px;
        color: rgba(0, 0, 0, 0.62);
        width: 190px;
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

    .window-small-text
    {
        align-self: flex-start;
    }

    .window-small-subtext
    {
        max-width: 140px;
        align-self: flex-start;
        margin-left: 15px;
        margin-top: 10px;
    }

    .window-small-text a,
    .window-small-subtext a
    {
        margin-left: 0;
    }

    .window-small-text, .window-small-text a,
    .window-small-subtext, .window-small-subtext a
    {
        font-family: Montserrat;
        font-weight: 300;
        line-height: 9px;
        font-size: 7px;
    }

    .window-link-button
    {
        font-family: Ubuntu;
        font-size: 10px;
        font-weight: 400;
        user-select: none;
    }
    

</style>
