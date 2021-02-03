<template>
    <div class="add-student-fullscreen"  data-id="full-screen-outscreen" @click="close">
        <div class="add-student-form">
            <div class="form-header">Добавить ученика</div>
            <div class="form-input">
                <div class="input-header">ФИО</div>
                <input type="text" v-model="student.name" class="input-text">
            </div>
            <div class="form-input radio-block" v-if="student.id == ''">
                <div class="input-header">Оплата за</div>
                <div class="radio-list">
                    <radio :change="this.selectPaidClasses" name="test-radio" id="select-1" :value="1" text="Пробное занятие"></radio>
                    <radio :change="this.selectPaidClasses" name="test-radio" id="select-2" :value="2" text="1 занятие"></radio>
                    <radio :change="this.selectPaidClasses" name="test-radio" id="select-3" :value="3" text="8 занятий"></radio>
                </div>
            </div>
            <div class="form-input radio-block">
                <div class="input-header">Пояс</div>
                <input type="number" v-model="student.belt" class="input-belt">
            </div>
            <div class="add-student">
                <div class="add-button" @click="createStudent">Сохранить</div>
            </div>
        </div>
    </div>
</template>
<script>
  import helper from '../helper'
  import constants from '../constants'
  import radio from '../simple_components/input_components/radio.vue'
  export default {
    name: 'AddStudentFullScreen',
    components: {radio},
    data: function(){
      return {
        student: {
          id: '',
          name: '',
          paid_classes: 1,
          belt: 0,
        },
      }
    },
    props:['edited_student', 'group_id'],
    mounted() {
      this.student = this.edited_student;
    },
    beforeDestroy() {
      this.student = {
        id: '',
        name: '',
        paid_classes: 1,
        belt: 0,
      };
    },
    methods: {
      selectPaidClasses(option) {
        this.student.paid_classes = option.value;
      },
      close(e) {
        var target = e.target;
        if(target.getAttribute('data-id') == 'full-screen-outscreen') {
          this.$parent.openCreateStudent = false;
        }
      },
      createStudent(){
        helper.POST(constants.BACKEND_URL + 'student/update-student', {'student': this.student, 'group_id': this.group_id}, this.updateStudent)
      },
      updateStudent(respond) {
        if(respond.ok == 1) {
          this.$parent.$parent.groups = respond.data;
         this.$parent.openCreateStudent = false;
        }
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
    .add-student-fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(229, 229, 229, 0.65);

    .form-header {
        font-size: 24px;
    }

    .add-student-form {
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        border-radius: 12px;
        width: 100%;
        max-width: 600px;
        max-height: 500px;
        background-color: white;
        padding: 40px;
    }

    .radio-list {
        display: flex;
    }

    .form-input {
        display: flex;
        flex-direction: column;
        width: 100%;
    .input-belt {
        width: 60px;
        padding-left: 10px;
        padding-right: 10px;
        height: 30px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        border: 1px solid @main_text;
    }
    .input-header {
        color: @main_text;
        text-align: left;
        padding-bottom: 10px;
        padding-top: 20px;
        font-size: 18px;
    }

    .input-text {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 16px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        border: 1px solid @main_text;
    }

    }
    }
</style>
