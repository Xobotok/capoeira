<template>
    <div class="add-student-fullscreen" data-id="full-screen-outscreen" @click="close">
        <div class="add-student-form">
            <div class="form-header">Создать группу</div>
            <div class="form-input">
                <div class="input-header">Название группы</div>
                <input type="text" v-model="group.name" class="input-text">
            </div>
            <div class="group-schools" v-if="schools.length > 0">
                <select name="group-schools" id="group-schools">
                    <option value="" v-for="(key, school) in schools"></option>
                </select>
            </div>
            <div class="form-description">
                <label for="group-description" class="input-header">Описание группы</label>
                <textarea name="group-description" v-model="group.description" id="group-description" cols="30" rows="10"></textarea>
            </div>
            <div class="add-student">
                <div class="add-button" @click="createGroup" v-if="group.name != ''">Создать группу</div>
                <div class="add-button" style="opacity: .3; cursor: default" v-else>Создать группу</div>
            </div>
        </div>
    </div>
</template>
<script>
  import helper from '../helper'
  import constants from '../constants'
  import radio from '../simple_components/input_components/radio.vue'
  export default {
    name: 'CreateGroupFullScreen',
    components: {radio},
    data: function(){
      return {
        group: {
          id: '',
          name: '',
          school_id: '',
          description: '',
        },
        schools: [],
      }
    },
    props:['edited_group'],
    mounted(){
      this.group = this.edited_group;
      helper.GET(constants.BACKEND_URL + 'school/get-user-schools', '', this.updateSchools)
    },
    methods: {
      updateSchools(respond) {

      },
      close(e) {
        var target = e.target;
        if(target.getAttribute('data-id') == 'full-screen-outscreen') {
          this.$parent.openCreateGroup = false;
        }
      },
      selectPaidClasses(option) {
        this.student.paid_classes = option.value;
      },
      createGroup(){
        helper.POST(constants.BACKEND_URL + 'group/create-group', this.group, this.updateGroups)
      },
      updateGroups(data) {
        if(data.ok == 1) {
            this.$parent.groups = data.data;
            this.$parent.openCreateGroup = false;
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
        background-color: rgba(229, 229, 229, 0.85);

    .form-header {
        font-size: 24px;
    }
    .form-description {
        display: flex;
        flex-direction: column;
    .input-header {
        color: @background;
        text-align: left;
        padding-bottom: 10px;
        padding-top: 20px;
        font-size: 18px;
    }
    textarea {
        border-radius: 6px;
    }
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
        justify-content: space-between;
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
