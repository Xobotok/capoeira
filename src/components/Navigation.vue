<template>
    <div class="navigation">
        <div class="logo">Capoeira</div>
        <div class="navigation-list">
            <router-link to="/" class="navigation-item">Школа</router-link>
            <router-link to="/calendar" class="navigation-item">Календарь</router-link>
            <router-link to="/profile" class="navigation-item">Профиль</router-link>
        </div>
        <div class="settings">
            <div class="notification">Notify</div>
            <div class="notification" @click="logout">Logout</div>
        </div>
    </div>
</template>
<script>
  import helper from '../helper'
  import constants from '../constants'
  export default {
    name: 'navigation',
    components: {},
    data: ()=>({

    }),
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      },
    }
  };

</script>
<style lang="less">
    @background: #E5E5E5;
    @background_workspace: white;
    @elements: #0093d4;
    @main_text: #58525a;
    @light_text: #b2b3b4;
    @link_text: #8cacd0;
    .navigation {
        display: flex;
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid @elements;
     background-color: @background_workspace;

        .logo {
            width: 100px;
        }
        .notification {
            width: 100px;
        }
        .navigation-list {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

        .navigation-item.router-link-active {
            border-bottom: 2px solid @elements;
            color: @elements;
        }
            .navigation-item:hover {
                color: rgba(0, 147, 212, 0.66);
            }
            .navigation-item {
                padding-left: 20px;
                padding-right: 20px;
                padding-bottom: 10px;
                margin-left: 20px;
                margin-right: 20px;
                color: @main_text;
                font-family: RobotoMedium, sans-serif;
            }
        }
    }
</style>
