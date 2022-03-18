<template>
  <div>
    <!-- <vs-sidebar absolute hover-expand reduce v-model="active" open>
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
          <vs-button @click="active1 = !active1">ลบข้อมูล</vs-button>

          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="" />
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar> -->
    
    <v-main>
      <v-container
        fluid
        style="margin-top: 50px; width: 92.5%; margin-bottom: 20px"
      >
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <vs-dialog v-model="active1">
      <template #header>
        <h3 style="margin-top: 20px" class="not-margin">
          คุณต้องการลบข้อมูลทั้งหมดใช่ไหม <b>?</b>
        </h3>
      </template>
      <template>
        <h4 style="margin-left: 10px; margin-top: -6px">
          หากกดลบแล้วจะไม่สามารถนำข้อมูลกลับมาได้อีก <b></b></h4
      ></template>
      <template #footer>
        <div class="footer-dialog">
          <vs-button style="background-color: #ff4757" class="" block>
            ลบ
          </vs-button>
        </div>
      </template>
    </vs-dialog> -->
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
      ],
      drawer: true,
      mini: true,
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
</style>
