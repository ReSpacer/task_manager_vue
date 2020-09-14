<template>
    <div class="register">
        <form class="window-form" @submit.prevent="">
            <h2 class="window__title">Регистрация</h2>
            <div class="window-form-field" v-if="isInvite">
                <span class="window-form-field__icon"><img src="@/assets/icons/email_icon.svg" alt="*" class="icon"></span>
                <span class="window-form-field__text" >{{regData.email}}</span>
            </div>
            <div class="window-form-field" v-else>
                <input v-model="regData.email" type="email" class="window-form-field__input" id="register-email" placeholder="Е-mail">
                <label for="register-email"><img src="@/assets/icons/email_icon.svg" alt="*" class="icon"></label>
            </div>
            <div class="window-form-field">
                <input v-model="regData.password" type="password" class="window-form-field__input" id="register-password" placeholder="Пароль">
                <label for="register-password"><img src="@/assets/icons/password_icon.svg" alt="*" class="icon"></label>
            </div>
            <div class="window-form-field">
                <input v-model="regData.repeatPassword" type="password" class="window-form-field__input" id="register-repeat-password" placeholder="Подтвердить пароль">
                <label for="register-repeat-password"><img src="@/assets/icons/password_icon.svg" alt="*" class="icon"></label>
            </div>
            <span class="window-small-subtext">Нажимая Зарегистрироваться я принимаю <a href="#">Правила использования сайта</a> и даю <a href=""> Согласие на обработку персональных данных.</a></span>
            <button class="window-form__button" @click="register">РЕГИСТРАЦИЯ</button>
            <router-link to="/login" class="window-link-button">Вход</router-link>
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
        regData: {
            email: "",
            password: "",
            repeatPassword: ""
        },
        isInvite: false
        }
    },
    methods: {
        async register()
        {
            ///
        }
    }
}
</script>

<style>
</style>