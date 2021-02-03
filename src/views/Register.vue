<template>
    <div class="login">
        <form class="add-student-form" onsubmit="return false;">
            <div class="form-header">Регистрация</div>
            <div class="register-error">{{register_error}}</div>
            <div class="form-input">
                <div class="input-header">Имя</div>
                <input type="text" v-model="user.name" class="input-text">
            </div>
            <div class="form-input">
                <div class="input-header">Почта</div>
                <input type="email" v-model="user.mail" class="input-text">
            </div>
            <div class="form-input">
                <div class="input-header">Пароль</div>
                <input type="password" v-model="user.pass" class="input-text">
            </div>
            <div class="form-input">
                <div class="input-header">Зарегистрироваться как</div>
                <div class="form-line">
                    <radio v-for="type in types" :change="selectType" name="type-radio" :id="'select-' + type.id"
                           :value="type.id" :text="type.name"></radio>
                </div>
            </div>
            <div class="add-student">
                <input type="submit" v-if="user.name.length > 1 && user.pass.length > 1 && user.mail.length > 1" class="add-button" @click="register" value="Регистрация">
                <input type="submit" class="add-button disabled" @click="register" value="Регистрация" v-else disabled style="opacity: .5">
                <router-link to="/login" class="login-link">Вход</router-link>
            </div>
        </form>
    </div>
</template>

<style lang="less">
    @import '../assets/main.less';
    @import '../assets/login.less';
</style>
<script>
  import helper from '../helper'
  import constants from '../constants'
  import radio from '../simple_components/input_components/radio.vue'
  export default {
    name: 'Register',
    components: {
      radio,
    },
    data: ()=>({
      user: {
        mail: '',
        pass: '',
        type: 1,
        name: '',
      },
      types: [],
      register_error: '',
    }),
    methods: {
      updateUserTypes(respond) {
        if (respond.ok == 1) {
          this.types = respond.data;
        }
      },
      register(e) {
        e.preventDefault();
        this.register_error = '';
        helper.POST(constants.BACKEND_URL + 'auth/registration', this.user, this.registerFinish)
      },
      registerFinish(respond) {
        if(respond.ok == 1) {

        } else {
          this.makeWarning(respond.data);
        }
      },
      makeWarning(warning) {
        if(warning.email != undefined) {
          this.register_error = 'Почта ' + this.user.mail + ' уже занята. Войдите.'
        } else if(warning.mail_transport != undefined) {
          this.register_error = warning.mail_transport;
        }
      },
      selectType(option) {
        this.user.type = option.value;
      }
    },
    mounted() {
      helper.GET(constants.BACKEND_URL + 'user/get-user-types', '', this.updateUserTypes)
    }
  };
</script>