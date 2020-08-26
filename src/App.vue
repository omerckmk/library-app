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
import TheNavBar from "./components/TheNavBar";

export default {
  name: "app",
  components: {
    TheNavBar
  }

};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: inherit;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
}


html {
  font-size: 16px;
  box-sizing: border-box;
}
body {
  font-size: 1rem;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
  Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  padding-top: var(--header-height);
}
.fade-enter , fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active , fade-leave-active {
  transition: all .4s ease;
}
</style>
