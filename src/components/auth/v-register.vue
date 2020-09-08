<template>
    <div class="register">
        <div class="register-form" v-if="!isRegistered">
            <form class="window-form">
                <h2 class="window__title">Регистрация</h2>
                <div class="window-form-field" v-if="isInvite">
                    <span class="window-form-field__icon"><img src="@/assets/icons/email_icon.svg" alt="*" class="icon"></span>
                    <span class="window-form-field__text">Е-mail приглашенного пользователя</span>
                </div>
                <div class="window-form-field" v-else>
                    <input type="text" class="window-form-field__input" id="register-email" placeholder="Е-mail">
                    <label for="register-email"><img src="@/assets/icons/email_icon.svg" alt="*" class="icon"></label>
                </div>
                <div class="window-form-field">
                    <input type="password" class="window-form-field__input" id="register-password" placeholder="Пароль">
                    <label for="register-password"><img src="@/assets/icons/password_icon.svg" alt="*" class="icon"></label>
                </div>
                <div class="window-form-field">
                    <input type="password" class="window-form-field__input" id="register-repeat-password" placeholder="Подтвердить пароль">
                    <label for="register-repeat-password"><img src="@/assets/icons/password_icon.svg" alt="*" class="icon"></label>
                </div>
                <span class="window-small-subtext">Нажимая Зарегистрироваться я принимаю <a href="#">Правила использования сайта</a> и даю <a href=""> Согласие на обработку персональных данных.</a></span>
                <button class="window-form__button" @click="register">РЕГИСТРАЦИЯ</button>
                <router-link to="/" class="window-link-button">Вход</router-link>
            </form>
        </div>
        <div class="successful-registration" v-else>
            <form class="window-form">
                <h2 class="window__title">Вы успешно зарегистрировались в “LOGOOO” !</h2>
                <p class="window__text">Для подтверждения регистрации проверьте свою электронную почту {e-mail} и перейдите по ссылке</p>
                <span class="window-small-text">Если письмо не пришло, нажмите <a href="#">отправить ещё раз.</a></span>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-register',
    components: {

    },
    data: () => {
    return {
        isInvite: true,
        isRegistered: false
    }
    },
    methods: {
        register()
        {
            this.isRegistered = true;
        }
    }
}
</script>

<style>
</style>