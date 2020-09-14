<template>
    <div class="login">
        <form class="window-form" @submit.prevent="">
            <h2 class="window__title">Добро пожаловать!</h2>
            <div class="window-form-field">
                <input v-model="logData.email" type="email" class="window-form-field__input" id="login-email" placeholder="Е-mail">
                <label for="login-email"><img src="@/assets/icons/email_icon.svg" alt="*" class="icon"></label>
            </div>
            <div class="window-form-field">
                <input v-model="logData.password" type="password" class="window-form-field__input" id="login-password" placeholder="Пароль">
                <label for="login-password"><img src="@/assets/icons/password_icon.svg" alt="*" class="icon"></label>
            </div>
            <router-link to="/reset-password" href="#" class="window-small-subtext">Не помню пароль</router-link>
            <button class="window-form__button" @click="login">ВХОД</button>
            <router-link to="/register" class="window-link-button">Регистрация</router-link>
        </form>
    </div>
</template>

<script>

export default {
    name: 'v-login',
    components: {

    },
    data: () => {
    return {
        logData: {
            email: "",
            password: ""
        }
    }
    },
    methods: {
        login ()
        {
            ///
        }
    }
}
</script>
  
<style>
    
</style>
