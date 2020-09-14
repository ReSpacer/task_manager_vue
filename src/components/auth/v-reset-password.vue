<template>
    <div class="reset-password">
      <div class="reset-password-form" v-if="!isResetSuccessful">
        <form class="window-form" @submit.prevent="">
            <h2 class="window__title">Смена пароля</h2>
            <div class="window-form-field">
                <input type="email" class="window-form-field__input" id="reset-password-email" placeholder="Е-mail">
                <label for="reset-password-email"><img src="@/assets/icons/email_icon.svg" alt="*" class="icon"></label>
            </div>
            <button class="window-form__button" @click="resetPassword">СБРОС ПАРОЛЯ</button>
            <router-link to="/register" class="window-link-button">Регистрация</router-link>
        </form>
      </div>
      <div class="successful-reset-password" v-else>
        <form class="window-form">
          <h2 class="window__title">Вы запросили доступ к вашему аккаунту в LOGOOO</h2>
          <p class="window__text">Для смены пароля перейдите по ссылке: <router-link to="/change-password">ссылка</router-link></p>
          <span class="window-small-text">Если письмо не пришло, нажмите <a href="#">отправить ещё раз.</a></span>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'v-reset-password',
  components: {
    
  },
  data: () => {
    return {
      isResetSuccessful: false
    }
  },
  methods: {
    resetPassword()
    {
      this.isResetSuccessful = true;
    }
  }
}
</script>
  
<style>

</style>
