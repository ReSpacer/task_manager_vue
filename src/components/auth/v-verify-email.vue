<template>
    <div class="verify-email">
        <form class="window-form" @submit.prevent="">
            <h2 class="window__title">Вы успешно зарегистрировались в “LOGOOO” !</h2>
            <p class="window__text">Для подтверждения регистрации проверьте свою электронную почту {{email}} и перейдите по ссылке</p>
            <span class="window-small-text">Если письмо не пришло, нажмите <a href="#">отправить ещё раз.</a></span>
        </form>
    </div>
</template>

<script>
export default {
    name: 'v-verify-email',
    components: {

    },
    data: () => {
    return {
        email: "Email"
        }
    }
}
</script>

<style>
</style>