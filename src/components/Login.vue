<template>
    <div id="login-wrapper">
        <input v-model="email" placeholder="E-mail" type="email">
        <input v-model="pass" placeholder="Password" type="password">
        <button @click="SignUserIn(email, pass)" class="btn">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                pass: ''
            }
        },
        methods: {
            SignUserIn(email, pass) {
                firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });
                this.$router.push('/main');
            }
        }
    }
</script>

<style lang="less">

</style>
