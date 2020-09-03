<template>
    <div class="register">
        <form class="window-form">
            <h2 class="window__title">Регистрация</h2>
            <div class="window-form-field">
                <input type="text" class="window-form-field__input" id="register-email" placeholder="Е-mail">
                <label for="register-email"><img src="../assets/email_icon.svg" alt="*" class="icon"></label>
            </div>
            <div class="window-form-field">
                <input type="password" class="window-form-field__input" id="register-password" placeholder="Пароль">
                <label for="register-password"><img src="../assets/password_icon.svg" alt="*" class="icon"></label>
            </div>
            <div class="window-form-field">
                <input type="password" class="window-form-field__input" id="register-repeat-password" placeholder="Подтвердить пароль">
                <label for="register-repeat-password"><img src="../assets/password_icon.svg" alt="*" class="icon"></label>
            </div>
            <span class="window-small-link">Нажимая Зарегистрироваться я принимаю <a href="#">Правила использования сайта</a> и даю <a href=""> Согласие на обработку персональных данных.</a></span>
            <button class="window-form__button">РЕГИСТРАЦИЯ</button>
            <router-link to="/">Вход</router-link>
        </form>
    </div>
</template>

<script>
export default {
    name: 'v-register',
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

</style>