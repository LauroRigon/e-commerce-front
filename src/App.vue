<template>
    <div id="app" class="d-flex flex-column">
        <the-header/>
        <main class="flex-grow-1">
            <router-view/>
        </main>
        <the-footer/>
    </div>
</template>

<script>
  import TheHeader from "./components/TheHeader"
  import TheFooter from "./components/TheFooter"
  export default {
    components: { TheFooter, TheHeader },
  }
</script>

<style lang="scss">
  #app {
    min-height: 100vh;
  }

  .fade-enter,
  .fade-leave-to {
      opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
      transition: opacity .2s;
  }

  .fade-enter-to {
      opacity: 1;
  }
</style>