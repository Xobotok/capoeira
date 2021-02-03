<template>
    <div class="app-main-layout">
        <Navigation></Navigation>
        <main class="app-content">
            <div class="app-page">
                <router-view />
            </div>
        </main>
    </div>
</template>

<style lang="less">
    @import '../assets/main.less';
</style>
<script>
  import Navigation from '../components/Navigation.vue'
    export default {
      name: 'main-layout',
      components: {
        Navigation
      },
      methods: {

      }
    }
</script>