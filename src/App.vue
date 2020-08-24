<template>
  <div id="app">
    <div class="container bg-info h-25">
      <router-link to="/">Home</router-link>
    </div>
        <router-view />

  </div>
</template>
<script>
import './styles/app.scss'
export default {
  name: "app",

};
</script>
<style lang="scss">


</style>
