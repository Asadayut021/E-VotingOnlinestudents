<template>
  <v-row>
    <v-col cols="12" sm="8" md="12">
      <v-col
        style="
          font-family: 'Kanit', sans-serif;
          margin-left: 46%;
          margin-bottom: 48px;
          margin-top: 24px;
        "
        cols="12"
        sm="8"
        md="12"
        >หน้าแก้ไขข้อมูล</v-col
      >
      <v-form>
        <v-container>
          <v-row class="font1">
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.first_name"
                label="ชื่อ"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.last_name"
                label="นามสกุล"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.phone"
                label="เบอร์"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.email"
                label="อีเมล"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn @click="$refs.inputPortraitImage.click()">เลือกรูปภาพ</v-btn>
        <input
          type="file"
          ref="inputPortraitImage"
          style="display: none"
          @change="
            (e) => {
              ResizeImage(e)
            }
          "
          accept="image/png, image/jpeg"
        />
        <div v-if="imagesRaw != ''">
          <img
            :src="imagesRaw"
            style="border: 1px dashed #ccc; width: 100px; height: 100px"
          />
        </div>
        <div v-else-if="imagesRaw == null">
          <img
            :src="EditCandidate.images_url"
            style="border: 1px dashed #ccc; width: 100px; height: 100px"
          />
        </div>
        <!-- <div v-if="EditCandidate.images_url != ''">
              
            </div> -->
        <!-- <div v-else-if="EditCandidate.images_url == null"></div> -->
        <v-btn class="bu" block @click="updateStudents(user.id)">
          ยืนยันการแก้ไข
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>
<style>
.font1 {
  font-family: 'Kanit', sans-serif;
}
.bu {
  margin-top: 40px;
  background-color: #2196f3 !important;
  font-family: 'Kanit', sans-serif;
  color: #ffff !important;
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
      imageUrl: '',
      imagesRaw: '',
      user: [],
    }
  },
  mounted() {
    // this.getCandidate()
    // this.getYear()
    this.user = $nuxt.$auth.user
    console.log(this.user)
  },
  watch: {
    radios() {
      console.log(this.radios)
    },
  },
  methods: {
    // async getCandidate() {
    //   try {
    //     const { data } = await this.$axios.get(`/api/v1/voting/setup`)
    //     this.users = data.data
    //   } catch (error) {}
    // },
    async updateStudents(id) {
      if (this.imagesRaw) {
        this.imageUrl = await this.onUpload(this.imagesRaw)
      }
      const updateStudents = {
        id_std: this.user.id_std,
        id_class: this.user.id_class,
        prefix: this.user.prefix,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        phone: this.user.phone,
        email: this.user.email,
        images_url: this.imageUrl,
      }
      try {
        const { data } = await this.$axios.put(
          `/api/v1/students/${id}`,
          updateStudents
        )
        this.$router.push('/indexstd')
        // this.getStudents()
        // // console.log(this.updateCandidate)
      } catch (error) {}
    },

    ResizeImage(event) {
      var file = event.target.files[0]
      if (file.type.match(/image.*/)) {
        console.log('An image has been loaded')
        var reader = new FileReader()
        var self = this
        reader.onload = function (readerEvent) {
          var image = new Image()
          image.onload = function (imageEvent) {
            var canvas = document.createElement('canvas'),
              max_size = 1024,
              width = image.width,
              height = image.height
            if (width > height) {
              if (width > max_size) {
                height *= max_size / width
                width = max_size
              }
            } else {
              if (height > max_size) {
                width *= max_size / height
                height = max_size
              }
            }
            canvas.width = width
            canvas.height = height
            canvas.getContext('2d').drawImage(image, 0, 0, width, height)
            var dataUrl = canvas.toDataURL('image/jpeg')
            var resizedImage = self.dataURLToBlob(dataUrl)

            console.log({
              type: 'imageResized',
              blob: resizedImage,
              url: dataUrl,
            })
            self.imagesRaw = dataUrl
          }
          image.src = readerEvent.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    dataURLToBlob(dataURL) {
      var BASE64_MARKER = ';base64,'
      if (dataURL.indexOf(BASE64_MARKER) == -1) {
        var parts = dataURL.split(',')
        var contentType = parts[0].split(':')[1]
        var raw = parts[1]

        return new Blob([raw], { type: contentType })
      }

      var parts = dataURL.split(BASE64_MARKER)
      var contentType = parts[0].split(':')[1]
      var raw = window.atob(parts[1])
      var rawLength = raw.length

      var uInt8Array = new Uint8Array(rawLength)

      for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
      }

      return new Blob([uInt8Array], { type: contentType })
    },
    onUpload(image) {
      let self = this
      return new Promise(function (fulfill, reject) {
        const storageRef = self.$fire.storage
          .ref(`edtistd-profile/${Date.now()}.jpg`)
          .putString(image, 'data_url')
        storageRef.on(
          `state_changed`,
          (snapshot) => {
            self.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          },
          (error) => {
            console.log(error.message)
          },
          () => {
            self.uploadValue = 100
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              fulfill(url)
            })
          }
        )
      })
    },
  },
}
</script>