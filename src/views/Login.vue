<template>
    <div class="login">
        <div class="add-student-form">
            <div class="form-header">Войти</div>
            <div class="register-message">{{message}}</div>
            <div class="form-input">
                <div class="input-header">Почта</div>
                <input type="text" v-model="user.mail" class="input-text">
            </div>
            <div class="form-input">
                <div class="input-header">Пароль</div>
                <input type="password" v-model="user.pass" class="input-text">
            </div>
            <div class="add-student">
                <div class="add-button" @click="login">Войти</div>
                <router-link to="/register" class="login-link">Регистрация</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @import '../assets/main.less';
    @import '../assets/login.less';
</style>
<style lang="less">

</style>

<script>
  import helper from '../helper'
  import constants from '../constants'
  export default {
    name: 'Login',
    components: {

    },
    data: ()=>({
      user: {
        mail: '',
        pass: '',
      },
      message:'',
    }),
    methods: {
      makeMessage(respond) {
        if(respond.ok == 0) {
          this.$router.push('');
        } else {
          this.message = respond.data;
        }
      },
      login: function () {
        let user = this.user;
        this.$store.dispatch('login', {user: user, obj: this },)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
      }
    },
    mounted() {
      var location = window.location.href;
      var confirm = location.split('confirm_token=');
      if(confirm.length > 1) {
        confirm = confirm[1];
        var confirm_token = confirm.split('&mail=')[0];
        var mail =  confirm.split('&mail=')[1];
        var data = {token: confirm_token, mail: mail};
        helper.GET(constants.BACKEND_URL + 'auth/confirm', {token: confirm_token, mail: mail}, this.makeMessage);
      }
    }
  };
</script>
