<template>
  <v-row>
    <v-col cols="12" sm="8" md="12">
      <p
        style="
          font-family: 'Kanit', sans-serif;
          font-weight: bold;
          font-size: 20px;
          margin-top: 20px;
          margin-left: -120px;
        "
        class="AdminLecturer"
      >
      
      </p>

      <img class="img1" src="~/static/images/logoit.png" alt="" />
      <p class="cm2">Information Technology</p>
      <p class="cm3">เข้าสู่ระบบนักเรียนศึกษา</p>
      <div class="center content-inputs">
        <vs-input
          style="font-family: 'Kanit', sans-serif; font-weight: bold"
          class="username"
          v-model="uSername"
          placeholder="ชื่อผู้ใช้งานรหัสนักเรียนนักศึกษา"
        >
          <template #icon>
            <i class="bx bx-user"></i>
          </template>
        </vs-input>
        <vs-input
          style="font-family: 'Kanit', sans-serif; font-weight: bold"
          class="password"
          type="password"
          v-model="pAssword"
          placeholder="รหัสผ่านเบอร์โทรศัพท์ที่ลงทะเบียน"
        >
          <template #icon>
            <i class="bx bx-lock-open-alt"></i>
          </template>
        </vs-input>
        <div class="flex">
         
          <a style="margin-left: 46%" class="register" href="#">
            <a
              href="/registerstd"
              style="
                margin-left: 170px;
                font-family: 'Kanit', sans-serif;
                font-weight: bold;
              "
              >ลงทะเบียน</a
            ></a
          >
        </div>
        <vs-button
          style="font-size: 16px"
          class="button1"
          block
          @click="button()"
        >
          เข้าสู่ระบบ
        </vs-button>
      </div>
    </v-col>
  </v-row>
</template>
<style>
.bglogin {
  background-color: #1867c0;
  height: auto;
}
.img1 {
  width: 100px;
  height: 90px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.cm2 {
  text-align: center;
  font-size: 28.5px;
}
.cm3 {
  margin-top: 3%;
  text-align: center;
  font-size: 17px;
  font-family: 'Kanit', sans-serif;
  font-weight: bold;
}
.AdminLecturer {
  padding-left: 1420px;
}
.vs-card {
  margin-left: auto;
  margin-right: auto;
}
.content-inputs {
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
.username {
  padding-top: 40px;
}
.password {
  padding-top: 20px;
}
.vs-input {
  width: 100%;
  height: 40px;
}
.flex {
  display: flex;
  margin-top: 8px;
}
.register {
  margin-left: 166px;
  margin-top: 8px;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
.button1 {
  margin-top: 25px;
  margin-left: -2px;
}
</style>
<script>
export default {
  mounted() {
    this.loading = this.$vs.loading({
      type: 'scale',
    })
    setTimeout(() => {
      this.loading.close()
    }, 1000)
  },
  layout: 'loginlo',
  data() {
    return {
      loading: false,
      uSername: '',
      pAssword: '',
      
    }
  },
  methods: {
    async button() {
      const payload = {
        username: this.uSername,
        password: this.pAssword,
      }
      try {
        await this.$auth.loginWith('local', {
          data: payload,
        })
        this.$router.push('/indexstd')
      } catch (e) {
        console.log(e)
        this.$router.push('/loginstd')
      }
    },
  },
}
</script>


