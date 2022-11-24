<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import AppJumbotron from './components/AppJumbotron.vue'
import AppMain from './components/AppMain.vue'
export default {
    components: { AppHeader, AppJumbotron, AppMain, AppFooter },
  name: 'App',
}
</script>

<template>
  <AppHeader />
  <AppJumbotron />
  <AppMai />
  <AppFooter />
</template>

<style lang="scss">
  @use './styles/general';
</style>