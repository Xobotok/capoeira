<template>
    <div class="students">
        <div class="students-list" v-for="(group, key2) in groups">
            <div class="group-header">{{group.name}}</div>
            <div class="group-controls">
                <div class="group-header" @click="editGroup(group)">Edit</div>
                <div class="group-header" @click="deleteGroup(group)">Delete</div>
            </div>
            <div class="student-info">
                <div class="student-header" style="width: 5%">№</div>
                <div class="student-header">ФИО</div>
                <div class="student-header">Пояс</div>
                <div class="student-header">Осталось занятий</div>
                <div class="student-header">Последняя оплата</div>
                <div class="student-header" style="width: 7%">Управление</div>
            </div>
            <div class="student-info" v-for="(student,key) in group.students">
                <div class="student-text" style="width: 5%">{{key + 1}}</div>
                <div class="student-text">{{student.name}}</div>
                <div class="student-text">{{student.belt}}</div>
                <div class="student-text">{{student.paid_classes}}
                    <div class="settings_paid">
                        <div class="paid_plus setting-icon" v-if="openPaidPlus != ''+key2+key + 1" @click="openPaidPlus = ''+key2+key + 1"><span>+</span></div>
                        <div class="paid_minus setting-icon" v-if="openPaidPlus != ''+key2+key + 1" @click="paidMinus(student)"><span>-</span></div>
                        <div class="paid-plus-block" v-if="openPaidPlus == ''+key2 + key + 1">
                            <input type="text" v-model="paidAdd" class="paid-input">
                            <div class="done-icon-mini" @click="paidPlusDone(student)"></div>
                            <div class="input-cancel" @click="paidAdd = 1; openPaidPlus = false"></div>
                        </div>
                    </div>
                </div>
                <div class="student-text">{{student.last_paid}}</div>
                <div class="student-text settings-block"  style="width: 7%">
                    <div class="student_edit setting-icon" @click="editStudent(student)"></div>
                    <div class="student_delete setting-icon" @click="deleteStudent(student)"></div>
                </div>
            </div>
            <div class="add-student">
                <div class="add-button" @click="createStudent(group.id)">Добавить ученика</div>
            </div>
        </div>
        <div class="no-groups" v-if="groups.length == 0">Нет групп</div>
        <div class="add-student">
            <div class="add-button" @click="createGroup">Создать группу</div>
        </div>
        <AddStudentFullScreen :group_id="studentGroupId" :edited_student="editedStudent" v-if="openCreateStudent"></AddStudentFullScreen>
        <CreateGroupFullScreen :edited_group="editedGroup" v-if="openCreateGroup"></CreateGroupFullScreen>
    </div>
</template>
<script>
  import helper from '../helper'
  import constants from '../constants'
  import Loader from '../components/Loader.vue'
  import AddStudentFullScreen from '../components/AddStudentFullScreen.vue'
  import CreateGroupFullScreen from '../components/CreateGroupFullScreen.vue'
  export default {
    name: 'GroupStudentsList',
    components: {
      AddStudentFullScreen, Loader, CreateGroupFullScreen
    },
    data: function(){
      return {
        loading: true,
        editedGroup: {},
        editedStudent: {},
        studentGroupId: '',
        openCreateGroup: false,
        openCreateStudent: false,
        openPaidPlus: false,
        paidAdd: 1,
      }
    },
    props:['groups'],
    mounted() {
      this.student = this.edited_student;
    },
    methods: {
      paidMinus(student){
        helper.POST(constants.BACKEND_URL + '/student/paid-minus', student, this.paidPlusFinish)
      },
      paidPlusDone(student) {
        var data = {};
        data.student = student;
        data.count = this.paidAdd;
        helper.POST(constants.BACKEND_URL + '/student/paid-plus', data, this.paidPlusFinish)
      },
      paidPlusFinish(respond) {
        this.$parent.groups = respond.data;
        this.openPaidPlus = false;
        this.paidAdd = 1;
      },
      editStudent(student) {
        this.editedStudent = student;
        this.openCreateStudent = true;
      },
      deleteStudent(student) {
        helper.POST(constants.BACKEND_URL + '/student/delete-student', student, this.deleteStudentFinish)
      },
      deleteStudentFinish(respond) {
        this.$parent.groups = respond.data;
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
    }
  };
</script>
