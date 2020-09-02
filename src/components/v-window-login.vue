<template>
    <div class="window-login">
        <form class="window-form">
            <h2 class="window__title">ДОБРО ПОЖАЛОВАТЬ!</h2>
            <div class="window-form-field">
                <input type="text" class="window-form-field__input" id="login-email" placeholder="Е-mail">
                <label for="login-email"><img src="../assets/email_icon.svg" alt="*" class="icon"></label>
            </div>
            <div class="window-form-field">
                <input type="text" class="window-form-field__input" id="login-password" placeholder="Пароль">
                <label for="login-password"><img src="../assets/password_icon.svg" alt="*" class="icon"></label>
            </div>
            <a href="#" class="forgot-password small-text">Не помню пароль</a>
            <button class="window-form__button">ВХОД</button>
            <a href="#">Регистрация</a>
            <h6 class="login-socials__title">Войти с помощью</h6>
            <div class="login-socials">
                <a href="#"><img src="../assets/vk_logo.png" alt="vk" class="login-socials__item"></a>
                <a href="#"><img src="../assets/facebook_logo.png" alt="facebook" class="login-socials__item"></a>
                <a href="#"><img src="../assets/google_logo.png" alt="google" class="login-socials__item"></a>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'v-window-login',
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
    .login-socials
    {
        width: 134px;
        display: flex;
        justify-content: space-between;
    }

    .login-socials__title
    {
        font-family: Montserrat;
        margin-top: 30px;
        color: #518EF8;
    }

    .login-socials__item
    {
        width: 30px;
    }

    .forgot-password
    {
        align-self: flex-start;
        margin-left: 15px;
    }
</style>
