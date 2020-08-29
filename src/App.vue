<template>
  <div id="app">
    <TheNavBar />
    <div class="mt-3">
      <transition mode="out-in" name="fade">
        <router-view />
      </transition>
    </div>
    <notifications class="mt-1" position="top center" />
  </div>
</template>
<script>
import TheNavBar from "./components/TheNavBar";

export default {
  name: "app",
  components: {
    TheNavBar
  }
};
</script>
<style lang="scss" >
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.fade-enter,
fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active,
fade-leave-active {
  transition: all 0.4s ease;
}
</style>
