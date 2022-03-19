<template>
  <v-row>
    <v-col cols="12" sm="8" md="12">
      <v-col cols="12" sm="8" md="12">
        <v-btn depressed color="error" @click="logout"> ออกจากระบบ </v-btn>
      </v-col>
      <v-stepper style="margin-top: 25px" v-model="e1" v-if="!isStop">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            ข้อมูลนักเรียนนักศึกษา
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2">
            ใช้สิทธิ
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3"> ยืนยันการเลือก </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-row
              ><v-col cols="12" sm="8" md="3">
                <img
                  class="imgssss"
                  :src="
                    form.images_url ||
                    require('~/static/images/userprofiledefault.png')
                  "
                  alt
                />
              </v-col>
              <v-col cols="12" sm="8" md="4">
                <div class="datastd">
                  <h3 style="margin-top: 10px">
                    รหัสนักเรียนนักศึกษา : {{ form.id_std }}
                  </h3>
                  <h3 style="margin-top: 15px">
                    ชื่อ - นามสกุล :
                    {{ form.first_name + ' ' + form.last_name }}
                  </h3>
                  <h3 style="margin-top: 15px">
                    ระดับชั้น : {{ student_class.name }}
                  </h3>
                </div>
              </v-col>
              <v-col cols="12" sm="8" md="5">
                <div class="v" v-if="status == true">
                  <h2 style="margin-top: 10px">สิทธิ : ใช้สิทธิไปแล้ว</h2>
                </div>
                <div class="v" v-else>
                  <h2 style="margin-top: 10px">สิทธิ : ยังไม่ได้ใช้สิทธิ</h2>
                </div>
              </v-col>
            </v-row>
            <v-btn
              color="primary"
              v-if="status == true"
              @click=";(e1 = 2), getCandidate(form.id_year)"
              disabled
            >
              เลือกตั้ง
            </v-btn>
            <v-btn
              color="primary"
              v-else
              @click=";(e1 = 2), getCandidate(form.id_year)"
            >
              เลือกตั้ง
            </v-btn>
            <v-btn text> Cancel </v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-row>
              <v-col
                cols="12"
                sm="8"
                md="6"
                v-for="item in cAndidate"
                :key="item.id"
              >
                <v-card style="margin: 10px">
                  <v-col cols="12" sm="8" md="12">
                    <v-row>
                      <v-col cols="12" sm="8" md="3">
                        <img
                          class="imgssss"
                          :src="
                            item.images_url ||
                            require('~/static/images/userprofiledefault.png')
                          "
                          alt
                        />
                      </v-col>
                      <v-col cols="12" sm="8" md="9">
                        <v-row>
                          <v-col cols="12" sm="8" md="10"
                            ><div class="datastd1">
                              <h3 style="margin-top: -10px">
                                เบอร์ผู้สมัคร : {{ item.number }}
                              </h3>
                              <h3 style="margin-top: 15px">
                                ชื่อ - นามสกุล :
                                {{ item.first_name + ' ' + item.last_name }}
                              </h3>
                              <h3 style="margin-top: 15px">
                                ระดับชั้น : {{ item.class_name }}
                              </h3>
                            </div></v-col
                          >
                          <v-col cols="12" sm="8" md="2">
                            <v-radio-group class="radio" v-model="radios">
                              <v-radio label="" :value="item"></v-radio>
                            </v-radio-group>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
            <div style="margin-top: 3%">
              <v-btn color="primary" @click="e1 = 3" v-if="radios">
                เลือก
              </v-btn>
              <v-btn text @click="e1 = 1"> Cancel </v-btn>
            </div>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-row
              ><v-col cols="12" sm="8" md="3">
                <img
                  v-if="radios"
                  class="imgssss"
                  :src="
                    radios.images_url ||
                    require('~/static/images/userprofiledefault.png')
                  "
                  alt
                />
              </v-col>
              <v-col cols="12" sm="8" md="4">
                <div class="datastd2">
                  <h3 style="margin-top: 10px" v-if="radios != null">
                    เบอร์ผู้สมัคร : {{ radios.number }}
                  </h3>
                  <!-- <h3 style="margin-top: 10px" v-else>เบอร์ผู้สมัคร : </h3> -->
                  <h3 style="margin-top: 15px" v-if="radios != null">
                    ชื่อ - นามสกุล :
                    {{ radios.first_name + ' ' + radios.last_name }}
                  </h3>
                  <h3 style="margin-top: 15px" v-if="radios != null">
                    ระดับชั้น : {{ radios.class_name }}
                  </h3>
                </div>
              </v-col>
            </v-row>
            <v-btn color="primary" @click="createVoting(form.id, radios.id)">
              ยืนยันการเลือก
            </v-btn>
            <v-btn text @click="e1 = 2"> Cancel </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
      <div class="ssss" v-else>สิ้นสุดการเลือกตั้ง</div>
      <!-- <v-card class="car" elevation="2">
        <v-row
          ><v-col cols="12" sm="8" md="3">
            <img
              class="imgssss"
              src="~/static/images/userprofiledefault.png"
              alt
            />
          </v-col>
          <v-col cols="12" sm="8" md="4">
            <div class="datastd">
              <h3 style="margin-top: 10px">รหัสนักเรียนนักศึกษา :</h3>
              <h3 style="margin-top: 15px">ชื่อ - นามสกุล :</h3>
              <h3 style="margin-top: 15px">ระดับชั้น :</h3>
            </div>
          </v-col>
          <v-col cols="12" sm="8" md="5">
            <div class="v"><h2 style="margin-top: 10px">สิทธิ :</h2></div>
          </v-col>
        </v-row>
      </v-card> -->
    </v-col></v-row
  >
</template>
<style>
.ssss{
  text-align: center;
  margin-top: 17%;
  font-size: 50px;
}
.yearstd {
  margin-left: -146px;
  font-family: 'Kanit', sans-serif;
}
.imgssss {
  width: 70%;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 15%;
}
.imgstd {
  width: 70%;
  margin-top: 25%;
  margin-bottom: 10%;
  margin-left: 15%;
}

.datastd {
  margin-top: 100px;
}
.datastd1 {
  margin-top: 50px;
  margin-bottom: 25px;
  margin-left: 5%;
}
.datastd2 {
  margin-top: 100px;
}
.radio {
  margin-top: 76px;
}
.vs-select {
  margin-left: 1116px;
  width: 180%;
  margin-top: -31px;
}
.v {
  margin-top: 140px;
}
.car {
  margin-top: 50px;
}
</style>
<script>
export default {
  middleware: 'auth',
  mounted() {
    this.loading = this.$vs.loading({
      type: 'scale',
    })
    setTimeout(() => {
      this.loading.close()
    }, 1000)
  },
  // layout: 'indexstd',
  data() {
    return {
      e1: 1,
      value3: '',
      radios: null,
      form: [],
      status: null,
      student_class: [],
      isStop: false,
      cAndidate: [],
      yEars: [
        //	พ.ศ.
        {
          id: 1,
          // year: '2565',
        },
      ],
      cLassapp: [],
    }
  },

  mounted() {
    this.getStudents()
    // this.getCandidate()
    // this.getYear()
  },
  watch: {
    radios() {
      console.log(this.radios)
    },
  },
  async value3() {
    // console.log(this.value3)
    var year = this.value3
    this.form.selectyear = this.value3
    this.getCandidate(year)
  },
  methods: {
    logout() {
      $nuxt.$auth.logout()
      this.$router.push('/loginstd')
    },
    async getStudents() {
      try {
        const { data } = await this.$axios.get(`/api/v1/voting/setup`)
        this.isStop = data.data.is_stop
        this.status = data.data.is_voting
        this.form = data.data.student_info
        this.student_class = data.data.student_class
        // console.log(data.data.is_voting)
      } catch (error) {}
    },
    async createVoting(id_std, id) {
      // console.log(id_std, id)
      const formVoting = {
        id_std: id_std,
        id_candidate: id,
      }
      try {
        const { data } = await this.$axios.post('/api/v1/voting', formVoting)
        this.$router.push('/indexstd')
        this.getStudents()
        this.e1 = 1
        // this.active = false
      } catch (error) {}
    },
    async getCandidate(year) {
      // console.log(year);
      try {
        const { data } = await this.$axios.get(
          `/api/v1/candidate?id_year=${year}`
        )
        this.cAndidate = data.data

        // console.log(this.student_class)
      } catch (error) {}
    },
  },
}
</script>