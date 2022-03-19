<template>
  <div>
    <h1 class="reg">สมัครสมาชิกแผนกวิชาเทคโนโลยีสารสนเทศ</h1>
    <v-row>
      <v-col cols="12" sm="8" md="12">
        <div class="ctt">
          <v-row>
            <v-col cols="12" sm="8" md="6">
              <vs-input
                block
                class="parent"
                danger
                v-model="form.aPplicantnumber"
                label="รหัสนักเรียนนักศึกษา"
                placeholder="	รหัสนักเรียนนักศึกษา"
                color="#1A5CFF"
            /></v-col>
            <v-col cols="12" sm="8" md="6">
              <vs-select
                filter
                class="parent"
                style="width: 100%"
                placeholder="ระดับชั้น"
                label="ระดับชั้น"
                v-model="form.cLassapp"
                v-if="cLassapp.length > 0"
              >
                <vs-option
                  v-for="(item, index) in cLassapp"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
                >
                  {{ item.name }}
                </vs-option>
              </vs-select>
            </v-col>

            <v-col cols="12" sm="8" md="6">
              <vs-select
                style="margin-top: 20px"
                filter
                placeholder="คำนำหน้า"
                label="คำนำหน้า"
                v-model="form.pRefix"
              >
                <vs-option label="นาย" value="1"> นาย </vs-option>
                <vs-option label="นางสาว" value="2"> นางสาว </vs-option>
                <vs-option label="นาง" value="3"> นาง </vs-option>
              </vs-select></v-col
            >
            <v-col cols="12" sm="8" md="6"></v-col>
            <v-col cols="12" sm="8" md="6">
              <vs-input
                block
                class="parent"
                danger
                v-model="form.fName"
                label="ชื่อ"
                placeholder="ชื่อ"
                color="#1A5CFF"
              />
            </v-col>
            <v-col cols="12" sm="8" md="6">
              <vs-input
                block
                class="parent"
                danger
                v-model="form.lName"
                label="นามสกุล"
                placeholder="นามสกุล"
                color="#1A5CFF"
              />
            </v-col>
            <v-col cols="12" sm="8" md="6">
              <vs-input
                block
                class="parent"
                danger
                v-model="form.pHonenumber"
                label="เบอร์โทรศัพท์ที่ติดต่อได้"
                placeholder="เบอร์โทรศัพท์ที่ติดต่อได้"
                color="#1A5CFF"
            /></v-col>
            <v-col cols="12" sm="8" md="6">
              <vs-input
                block
                class="parent"
                danger
                v-model="form.eMail"
                label="อีเมล"
                placeholder="อีเมล"
                color="#1A5CFF"
            /></v-col>
          </v-row>
          <div class="buttonadd">
            <vs-button class="buttonaddst" block @click="button()">
              <i class="">สมัครสมาชิก</i>
            </vs-button>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.ctt {
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  width: 75%;
  font-family: 'Kanit', sans-serif;

  /* background-color: #1a5cff; */
}
.reg {
  margin-top: 5%;
  text-align: center;
  font-family: 'Kanit', sans-serif;
}
.parent {
  width: 100px;
  margin-top: 20px;
}
.buttonadd {
  margin-top: 50px;
  width: 50%;
  margin-left: 25%;
}
</style>
<script>
export default {
  layout: 'loginlo',
  mounted() {
    this.loading = this.$vs.loading({
      type: 'scale',
    })
    setTimeout(() => {
      this.loading.close()
    }, 1000)
  },
  data() {
    return {
      editActive: false,
      loading: false,
      edit: null,
      editProp: {},
      search: '',
      allCheck: false,
      page: 1,
      max: 10,
      active: 0,
      selected: [],
      yEars: [],
      cLassapp: [],
      form: {
        //////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        aPplicantnumber: '', //รหัสนักเรียนนักศึกษา //เพิ่มผู้ามัคร
        nUmber: '', //หมายเลขผู้สมัคร
        cLassapp: '', //ระดับชั้น
        pRefix: '', //คำนำหน้า
        fName: '', //ชื่อ
        lName: '', //นามสกุล
        pHonenumber: '', //เบอร์โทรศัพท์ที่ติดต่อได้
        eMail: '', //อีเมล
        //////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

        //////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      },
      formm: {
        aPplicantnumbera: '', //รหัสนักเรียนนักศึกษา //แก้ไขข้อมูล
        yEar: '', // พ.ศ.
        nUmbera: '', //หมายเลขผู้สมัคร
        pRefixa: '', //คำนำหน้า
        cLassappa: '', //ระดับชั้น
        fNamea: '', //ชื่อ
        lNamea: '', //นามสกุล
        pHonenumbera: '', //เบอร์โทรศัพท์ที่ติดต่อได้
        eMaila: '', //อีเมล
      },

      users: [
        {
          iDs: 6349010021, //ตาราง
          nUmbers: '1',
          mRms: 'นาย',
          fNames: 'อัษฎายุธ',
          lNames: 'อมาตยกุล',
          cLasssts: 'ปวส.2',
          tElephonenumbers: '0896542569',
          eMails: 'Sincere@april.biz',
          cHoices: '',
        },
      ],
      value1: '',
      value2: '',
      value3: '',
      active: false,
      activeedit: false,
      activedelete: false,
      input1: '',
      input2: '',
      checkbox1: false,
      value: '',
      rules: [
        (
          value //รูป
        ) =>
          !value ||
          value.size < 2000000 ||
          'Avatar size should be less than 2 MB!',
      ],
    }
  },
  mounted() {
    // this.getCandidate()
    this.getYear()
    this.getClass()
  },
  methods: {
    async getClass() {
      try {
        const { data } = await this.$axios.get(`/api/v1/class`)
        this.cLassapp = data.data
      } catch (error) {}
    },
    async getYear() {
      try {
        const { data } = await this.$axios.get('/api/v1/year')
        this.yEars = data.data
        // console.log( this.yEars)
        this.value3 = this.yEars[0].id
        this.form.selectyear = this.value3
      } catch (error) {}
    },
    async button() {
      const readdstudent = {
        id_std: this.form.aPplicantnumber,
        prefix: this.form.pRefix,
        first_name: this.form.fName,
        last_name: this.form.lName,
        phone: this.form.pHonenumber,
        email: this.form.eMail,
        images_url: '',
        id_class: 1,
      }
      console.log(readdstudent)
      try {
        const { data } = await this.$axios.post(
          '/api/v1/auth_std/register_students',
          readdstudent
        )
        console.log('gooo')
        this.$router.push('/loginstd')
      } catch (error) {
        console.log('end')
      }
    },
  },
}
</script>
