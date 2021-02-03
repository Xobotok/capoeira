<template>
    <div id="app">
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>
<script>
  import helper from './helper.js'
  import $ from 'jquery'
  import EmptyLayout from '@/layouts/EmptyLayout';
  import MainLayout from '@/layouts/MainLayout';

  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    },
    components: {
        EmptyLayout, helper, MainLayout
    },
  }
</script>
