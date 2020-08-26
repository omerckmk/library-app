<template>
  <div id="app">
    <TheNavBar/>
    <div class="mt-3">
      <transition mode="out-in" name="fade">
        <router-view/>
      </transition>
    </div>
    <notifications class="mt-1" position="top center"/>
  </div>
</template>
<script>
import TheNavBar from "@/components/TheNavBar";
import './styles/app.scss'

export default {
  name: "app",
  components: {
    TheNavBar
  }

};
</script>
<style lang="scss">

#app {
  height: 100%;
}
</style>
