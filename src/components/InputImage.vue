<template>
    <div class="container">
        <div class="wrapper">
            <!-- 업로드한 이미지가 보이는 자리 -->
            <div class="imagePlace">
                <div class="imageBack" @change="HideContainerBackground" style='background-color: rgba(216, 215, 215, 0.473);'>
                <img :src="originalImgUrl" v-if="originalImgUrl"/>
                your photo
                </div>
            </div>

            <!-- 로컬에서 사진 업로드 -->
            <div class="fileInput-wrapper">
                <label for="originalInput">업로드</label>
                <input
                type="file"
                id="originalInput"
                ref="originalImg"
                accept="image/png, image/jpeg, image/jpg"
                @change="uploadImage"
                />
            </div>
        </div>
        <div class="wrapper">
            <!-- 업로드한 이미지가 보이는 자리 -->
            <div class="imagePlace">
                <div class="imageBack" @change="HideContainerBackground" style='background-color: rgba(216, 215, 215, 0.473);'>
                <img :src="styleImgUrl" v-if="styleImgUrl"/>
                style
                </div>
                <!-- <p>{{ originalImgName }}</p> -->
            </div>

            <!-- 로컬에서 사진 업로드 -->
            <div class="fileInput-wrapper">
                <label for="styleInput">업로드</label>
                <input
                type="file"
                id="styleInput"
                ref="styleImg"
                accept="image/png, image/jpeg, image/jpg"
                @change="uploadStyle"
                />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            originalImgUrl: "",
            originalImgName: "",
            styleImgUrl: "",
            styleImgName: "",
        }
    },
    methods: {
        HideContainerBackground() {
            const imageBack = document.querySelector('.imageBack');
            imageBack.style.backgroundColor = 'white';
        },
        async uploadImage() {
            try {
                if (this.$refs.originalImg.files.length > 0) {
                const originalData = new FormData();
                const originalImg = this.$refs.originalImg.files[0];
                originalData.append("image", originalImg);
                const response = await axios.post(
                    "http://localhost:8000/api/image/upload",
                    originalData
                );
                // 비동기 병렬처리
                console.log(response.data)
                console.log(originalImageUrl,originalImageName)
                const originalImageUrl = response.data.url;
                const originalImageName = response.data.filename;
 
                this.originalImgUrl = originalImageUrl;
                this.originalImgName = originalImageName;
                this.$store.commit("setOriginalImageUrl", originalImageUrl);
                this.$store.commit("setOriginalImageName", originalImageName);
                this.HideContainerBackground()
               } else {
                return alert("파일을 업로드해 주세요");
                }
            } catch (error) {
                console.log(error);
            }
        },
        async uploadStyle() {
            try {
                if (this.$refs.styleImg.files.length > 0) {
                const styleData = new FormData();
                const styleImg = this.$refs.styleImg.files[0];
                styleData.append("image", styleImg);
                const response = await axios.post(
                    "http://localhost:8000/api/image/upload",
                    styleData
                );
                // 비동기 병렬처리
                const styleImageUrl = response.data.url;
                const styleImageName = response.data.filename;
                this.styleImgUrl = styleImageUrl;
                this.styleImgName = styleImageName;
                this.$store.commit("setStyleImageUrl", styleImageUrl);
                this.$store.commit("setStyleImageName", styleImageName);
                } else {
                return alert("파일을 업로드해 주세요");
                }
                this.HideContainerBackground()
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>

<style scoped>
.container {
    display: flex;
}
.wrapper {
    /* width: 30%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
}
.wrapper .imagePlace {
  margin: 30px 0 20px 0;
}
.wrapper .imagePlace .imageBack {
  width: 290px;
  height: 290px;
  text-align: center;
  color: rgb(102, 102, 102);
  font-style: italic;
}
.wrapper .imagePlace img {
  width: 290px;
  height: 290px;
  object-fit: contain; /* 이미지가 컨테이너의 사이즈와 맞지 않을 경우, 가로세로 비율을 유지한 채 여백을 남김 */
}

.wrapper .fileInput-wrapper {
  display: flex;
  margin-bottom: 0.8rem;
}
.wrapper .fileInput-wrapper input[type="file"] {
  display: none;
}
.wrapper .fileInput-wrapper label {
  cursor: pointer;
  border: 1px solid black;
  border-radius: 3px;
  background-color: rgb(239,239,239);
  font-size: 0.8rem;
  padding: 3px 8px;
}
</style>