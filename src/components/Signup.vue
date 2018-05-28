<template>
    <div id="signup-wrapper">
        <input v-model="email" placeholder="E-mail" type="email">
        <input v-model="pass" placeholder="Password" type="password">
        <input v-model="confirmPass" placeholder="Confirm password" type="password">
        <button class="btn" @click="SignUserUp(email, pass, confirmPass)">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Signup',
        data() {
            return {
                email: '',
                pass: '',
                confirmPass: ''
            }
        },
        methods: {
            SignUserUp(email, pass, confirmPass) {
                if(pass == confirmPass) {
                    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });
                this.$router.push('/login')
                }
            }
        }
    }
</script>

<style lang="less">
</style>
