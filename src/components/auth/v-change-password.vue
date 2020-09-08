<template>
    <div class="change-password">
        <form class="window-form">
            <h2 class="window__title">Смена пароля</h2>
            <div class="window-form-field">
                <input type="password" class="window-form-field__input" id="change-password-password" placeholder="Пароль">
                <label for="change-password-password"><img src="@/assets/icons/password_icon.svg" alt="*" class="icon"></label>
            </div>
            <div class="window-form-field">
                <input type="password" class="window-form-field__input" id="change-password-repeat-password" placeholder="Подтвердить пароль">
                <label for="change-password-repeat-password"><img src="@/assets/icons/password_icon.svg" alt="*" class="icon"></label>
            </div>
            <button class="window-form__button">ВХОД</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'v-change-password',
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
