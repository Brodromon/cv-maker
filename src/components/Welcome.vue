<template>
    <div id="welcome-wrapper">
        <h3>Welcome to Cv Maker!</h3>
        <router-link to="/login" class="welcone-btns blue btn">Login</router-link>
        <router-link to="/signup" class="welcone-btns yellow btn">Register</router-link>
    </div>
</template>

<script>
    
</script>

<style lang="less">
#welcome-wrapper {
    position: absolute;
    right: 50%;
    width: 320px;
    margin-right: -160px;
    height: 90px;
    top: 30%;
}
    h3 {
        text-align: center;
    }
    .welcone-btns {
        color: #fff;
        font-weight: bold;
        width: 150px;
    }
    .blue {
        background: #367ced;
    }
    .yellow {
        background: #1cc419;
        margin-left: 16px;
    }
</style>
