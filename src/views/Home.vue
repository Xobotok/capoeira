<template>
    <div class="home">
        <Loader v-show="loading === true"></Loader>
        <div class="subnavigation">
            <div class="subnavigation-item" :class="{active: activeTab == 0}" @click="activeTab = 0">
                <div class="subnavigation-item-header">Группы</div>
                <div class="subnavigation-item-image"></div>
            </div>
            <div class="subnavigation-item" :class="{active: activeTab == 1}" @click="activeTab = 1">
                <div class="subnavigation-item-header">Школа</div>
                <div class="subnavigation-item-image"></div>
            </div>
            <div class="subnavigation-item" :class="{active: activeTab == 2}" @click="activeTab = 2">
                <div class="subnavigation-item-header">Прогресс</div>
                <div class="subnavigation-item-image"></div>
            </div>
        </div>
        <GroupStudentsList  v-if="activeTab == 0" :groups="groups"></GroupStudentsList>
    </div>
</template>
<script type="text/javascript" src="./weather-widget.js"></script>
<style lang="less">
    @import '../assets/main.less';
    @import '../assets/home.less';
</style>

<script>
  import AddStudentFullScreen from '../components/AddStudentFullScreen.vue'
  import CreateGroupFullScreen from '../components/CreateGroupFullScreen.vue'
  import GroupStudentsList from '../components/GroupStudentsList.vue'
  import Loader from '../components/Loader.vue'
  import helper from '../helper'
  import constants from '../constants'
  export default {
    name: 'Home',
    components: {
      AddStudentFullScreen, Loader, CreateGroupFullScreen, GroupStudentsList
    },
    data: ()=>({
      loading: true,
      groups: [],
      activeTab: 0,
    }),
    methods: {
      editStudent(student) {
        this.editedStudent = student;
        this.openCreateStudent = true;
      },
      loadList(respond){
        if (respond.ok == 1) {
          this.loading = false;
          this.groups = respond.data;
        }
      },
      createGroup() {
        this.editedGroup = {};
        this.openCreateGroup = true;
      },
      deleteGroup(group) {
        helper.POST(constants.BACKEND_URL + '/group/delete-group', group, this.deleteGroupFinish)
      },
      editGroup(group) {
        this.editedGroup = group;
        this.openCreateGroup = true;
      },
      deleteGroupFinish(respond) {
        this.groups = respond.data;
      },
      createStudent(group_id) {
        this.editedStudent = {
          id: '',
          name: '',
          paid_classes: 1,
          belt: 0,
        };
        this.studentGroupId = group_id;
        this.openCreateStudent = true;
      }
    },
    mounted(){
      helper.GET(constants.BACKEND_URL + '/group/take-user-groups', '', this.loadList)
      console.log(this.$store)
    }
  };
</script>
