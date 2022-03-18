<template>
  <v-app dark>
    <v-main>
      <v-navigation-drawer permanent expand-on-hover app>
        <!-- <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/women/85.jpg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list> -->
        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item link v-for="(item, i) in submenu" :key="i" :to="item.to" router exact>
            <v-list-item-icon>
              <i :class="item.icon" style="font-size: 25px"></i>
              <!-- <v-icon>mdi-folder</v-icon> -->
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- <v-app> -->
      <v-container
        fluid
        style="margin-top: 50px; width: 92.5%; margin-bottom: 20px"
      >
        <Nuxt />
      </v-container>
      <!-- </v-app> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,

      submenu: [
        {
          icon: 'bx bx-home',
          title: 'จัดการข้อมูลส่วนตัว',
          to: '/indexstd',
          active: 'home',
        },
        {
          icon: 'bx bx-user-plus',
          title: 'แก้ไขข้อมูล',
          to: '/edtistd',
          active: 'edtistd',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style>
.v-main,
.vs-dialog-content.fullScreen,
h2,
th,
td,
.v-system-bar.table1,
.vs-button,
h3,
.v-list {
  font-family: 'Kanit', sans-serif;
}
.v-list-item__title {
  font-size: 16px !important;
}
.font1 {
  font-family: 'Kanit', sans-serif;
}
.v-main {
  padding: 0px 0px 0px 0px !important;
}
</style>
