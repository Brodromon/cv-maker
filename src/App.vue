<template>
  <div id="app">
    <Header></Header>
    <div class="container-fluid">
      <div class="row">
        <Sidebar class="col-md-2"></Sidebar>
        <Main class="col-md-8 col-md-offset-2"></Main>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'App',
  components: {Header, Main, Sidebar}
}
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
}
body {
  background: #f7f7f7;
}
</style>
