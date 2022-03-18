<template>
  <div>
    <vs-sidebar fixed hover-expand reduce v-model="active" open>
      <template #logo>
        <img src="~/static/images/logoit.png" alt="" />
      </template>
      <vs-sidebar-item
        v-for="(item, i) in submenu"
        :key="i"
        :to="item.to"
        :id="item.active"
        router
        exact
      >
        <template #icon>
          <i :class="item.icon"></i>
        </template>
        {{ item.title }}
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-button @click="active1 = !active1">ออกจากระบบ</vs-button>
          <vs-avatar>
            <img src="~/static/images/userprofiledefault.png" alt="" />
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
    <!-- <vs-sidebar
        absolute
        v-model="active"
        open
        >
        <template #logo>
          <img src="~/static/images/logoit.png" alt="" />
        </template>
        <vs-sidebar-item
        v-for="(item, i) in submenu"
        :key="i"
        :to="item.to"
        :id="item.active"
        router
        exact
      >
        <template #icon>
          <i :class="item.icon"></i>
        </template>
        {{ item.title }}
      </vs-sidebar-item>
        
        <template #footer>
          <vs-row justify="space-between">
            <vs-button @click="active1 = !active1"> Open Dialog </vs-button>
          </vs-row>
        </template>
      </vs-sidebar> -->

    <v-main>
      <v-container
        fluid
        style="margin-left: 80px; margin-top: 50px; width: auto"
        data-app
      >
        <Nuxt />
      </v-container>
    </v-main>
    <vs-dialog v-model="active1">
      <template #header>
        <h3 style="margin-top: 20px" class="not-margin">
          คุณต้องการออกจากระบบใช่ไหม <b>?</b>
        </h3>
      </template>
      <template>
        <h4 style="margin-left: 10px; margin-top: -6px">
           <b></b>
        </h4>
      </template>
      <template #footer>
        <div class="footer-dialog">
          <vs-button style="background-color: #ff4757" class="" block>
          <p class="p">ออกจากระบบ</p>    <img class="logout1" src="~/static/images/logout3.png" alt="">
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active1: false,
      active: 'home',
      submenu: [
        {
          icon: 'bx bx-home',
          title: 'จัดการข้อมูลส่วนตัว',
          to: '/',
          active: 'home',
        },
        {
          icon: 'bx bx-user-plus',
          title: 'เพิ่มผู้สมัคร',
          to: '/addcandidate',
          active: 'addCandidate',
        },
        {
          icon: 'bx bxs-user-badge',
          title: 'เพิ่มนักเรียนนักศึกษา',
          to: '/addstudents',
          active: 'addStudents',
        },
        {
          icon: 'bx bxs-user-plus',
          title: 'เพิ่มกรรมการการเลือกตั้ง',
          to: '/electioncommissioner',
          active: 'electionCommissioner',
        },
        {
          icon: 'bx bxs-user-account',
          title: 'เพิ่มผู้ดูแล',
          to: '/addadmin',
          active: 'addadmin',
        },
      ],
    }
  },
}
</script>
<style>
body {
  font-family: 'Kanit', sans-serif;
}
.v-main,
.vs-dialog-content.fullScreen,
h2,
th,
td,
.v-system-bar.table1,
.vs-button,
h3 {
  font-family: 'Kanit', sans-serif;
}
label {
  font-size: 16px !important;
}
td {
  font-size: 16px !important;
}
th {
  font-size: 17px !important;
  font-weight: bold !important;
}
.p{
  margin-right: 10px;
  font-size: 17px !important;
  font-weight: bold !important;
}
.logout1{
  width: 20px;
}

</style>
