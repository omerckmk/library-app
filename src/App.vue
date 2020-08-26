<template>
  <div id="app">
    <div class="container">
      <div class="dropdown-header">
      </div>
    </div>
    <div class="mt-3"> <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    </div>

    <notifications position="top center" class="mt-4" />
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
