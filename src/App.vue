<template>
  <div id="app">
    <main>
      <router-view></router-view>
      <!-- <Header></Header>
    <div class="container-fluid">
      <div class="row">
        <Sidebar class="col-md-2"></Sidebar>
        <Main class="col-md-8 col-md-offset-2"></Main>
      </div>
    </div> -->
    </main>
  </div>
</template>

<script>

export default {
  name: 'App'
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
