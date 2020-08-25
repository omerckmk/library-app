<template>
  <div id="app">
    <div class="container bg-info h-25">
      <router-link to="/">Home</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

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
