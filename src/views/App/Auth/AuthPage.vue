<template>
    <section class="auth-page d-flex justify-content-center mt-3 bg-light py-5 shadow-sm">
        <div class="login-wrapper">
            <login class="bg-body border-0"/>
        </div>
        <div class="register-wrapper">
            <register class="bg-body border-0"/>
        </div>
    </section>
</template>

<script>
import Login from "@/views/App/Auth/Login"
import Register from "@/views/App/Auth/Register"

export default {
    name: "AuthPage",
    components: { Register, Login },
}
</script>

<style lang="scss" scoped>
@import '../../../style/style';

.auth-page {
    max-width: 1000px;
    margin: 0 auto;
    border-radius: 10px;
    flex-wrap: wrap;
}

.login-wrapper, .register-wrapper {
    width: 400px;
    margin: 10px 20px;
}

@include media-breakpoint-down(lg) {
    .login-wrapper, .register-wrapper {
        flex-grow: 1;
    }
}
</style>