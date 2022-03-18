<template>
  <v-row>
    <v-col cols="12" sm="8" md="12">
      <v-col cols="12" sm="8" md="12">
        <vs-select
          class="yearstd"
          placeholder="เปลี่ยนปีการศึกษา"
          v-model="value3"
        >
          <vs-option
            v-for="(item, index) in yEars"
            :key="index"
            :label="index.years"
            :value="item.id"
            >{{ item.year }}</vs-option
          >
        </vs-select>
      </v-col>
      <!-- <v-stepper style="margin-top: 25px;" v-model="e1">
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
            <v-btn color="primary" @click="e1 = 2"> เลือกตั้ง </v-btn>
            <v-btn text> Cancel </v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-row>
              <v-col cols="12" sm="8" md="6" v-for="n in 1" :key="n">
                <v-card style="margin: 10px">
                  <v-col cols="12" sm="8" md="12">
                    <v-row>
                      <v-col cols="12" sm="8" md="3">
                        <img
                          class="imgstd"
                          src="~/static/images/userprofiledefault.png"
                          alt
                      /></v-col>
                      <v-col cols="12" sm="8" md="9">
                        <v-row>
                          <v-col cols="12" sm="8" md="10"
                            ><div class="datastd1">
                              <h3 style="margin-top: -10px">
                                เบอร์ผู้สมัคร :
                              </h3>
                              <h3 style="margin-top: 15px">ชื่อ - นามสกุล :</h3>
                              <h3 style="margin-top: 15px">ระดับชั้น :</h3>
                            </div></v-col
                          >
                          <v-col cols="12" sm="8" md="2">
                            <v-radio-group class="radio" v-model="radios">
                              <v-radio label="" :value="n"></v-radio>
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
              <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
              <v-btn text> Cancel </v-btn>
            </div>
          </v-stepper-content>
          <v-stepper-content step="3">
             <v-row
              ><v-col cols="12" sm="8" md="3">
                  <img
                    class="imgssss"
                    src="~/static/images/userprofiledefault.png"
                    alt
                  />
              </v-col>
              <v-col cols="12" sm="8" md="4">
                <div class="datastd2">
                  <h3 style="margin-top: 10px">เบอร์ผู้สมัคร :</h3>
                  <h3 style="margin-top: 15px">ชื่อ - นามสกุล :</h3>
                  <h3 style="margin-top: 15px">ระดับชั้น :</h3>
                </div>
              </v-col>
             
            </v-row>
            <v-btn color="primary" @click="e1 = 1"> ยืนยันการเลือก </v-btn>
            <v-btn text> Cancel </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper> -->

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
.radio{
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
      yEars: [
        //	พ.ศ.
        {
          id: '1',
          year: '2565',
        },
      ],
      cLassapp: [
        {
          id: '1',
          classapps: 'ปวช.1',
        },
        {
          id: '2',
          classapps: 'ปวช.2',
        },
      ],
    }
  },
  watch:{
    radios(){
      console.log(this.radios);
    }
  },
  methods: {},
}
</script>