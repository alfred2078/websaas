<template>
  <div class="login-div">
    <div class="sdy-div">
      <ul>
        <li>让</li>
        <li>数</li>
        <li>据</li>
        <li>改</li>
        <li>变</li>
        <li>未</li>
        <li>来</li>   
      </ul>
    </div>

    <div class="lmy-div">
      <div class="title0">{{$t('login.title0')}}</div>
      <div class="title1">{{$t('login.title1')}}</div>
      <div class="imggroup">
        <img class="img0" src="@/assets/img/login/page1_0.png" alt />
        <img class="img1" src="@/assets/img/login/page1_1.png" alt />
        <img class="img2" src="@/assets/img/login/page1_2.png" alt />
      </div>
      <div>
        <img class="img3" src="@/assets/img/login/page1_3.jpg" alt />
      </div>
    </div>

    <div class="form-div">
      <el-form  :rules="rules" ref="form" :model="form" >
        <div class="title-container">
          <h2>{{$t('login.login')}}</h2>
          <p>{{$t('login.loginmsg')}}</p>
          <language-select class="setlanguage"></language-select> 
        </div>

        <el-form-item  prop='userno'>          
          <span>
            <svg-icon icon-class="user" />
          </span>
          <el-input v-model="form.userno" :placeholder="$t('login.userno')"></el-input>
        </el-form-item>

        <el-form-item prop='password'>
          <span>
            <svg-icon icon-class="password" />
          </span>
          <el-input v-model="form.password" :placeholder="$t('login.password')"></el-input>
        </el-form-item>
        <el-button type="primary" style="width:100%;margin-bottom:30px;" @click="Login('form')">{{$t('login.login')}}</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import store from '@/store'
import LanguageSelect from '@/components/languageselect'

export default {
  components:{LanguageSelect},
  data() {
    const validateUserNo = (rule, value, callback) => {
      if (!value) {
        callback(this.$t('login.userno'))
      } else {
        callback()
      }
    }
    const validatePassWord = (rule, value, callback) => {
      if (!value) {
        callback(this.$t('login.password'))
      } else {
        callback()
      }
    }

    return {
      form: {
        userno: '',
        password:''
      },
      
      rules:{
        userno:[
          {required:true,trigger:'blur',validator: validateUserNo}
        ],
        password:[
          {required:true,trigger:'blur',validator: validatePassWord}
        ]
      }
    };
  }, 
  methods: {
    Login(form){
      this.$refs[form].validate((valid)=>{
        if(valid){
          this.$store.dispatch("UserLogin", "sad");
          this.$router.push({ path: '/' })
        }else{
          alert('false')
        }

      })

    }
  },
  watch: {
    "$i18n.locale": function () {
                this.$refs['form'].fields.forEach(item => {
                    if(item.validateState === 'error'){
                        this.$refs['form'].validateField(item.labelFor)
                    }
                })
            }
  },
};
</script>

<style lang="scss" scoped>
.login-div {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #191c2c;
  .sdy-div {
    position: absolute;
    top: 20%;
    left: 5%;
    // background-color: blue;
    ul li {
      font-size: 30px;
      color: #2ec0f6;
      list-style: none;
    }

    li:nth-child(2) {
      margin-left: 20px;
    }
    li:nth-child(3) {
      margin-left: 40px;
    }
    li:nth-child(4) {
      margin-left: 60px;
    }
    li:nth-child(5) {
      margin-left: 80px;
    }
    li:nth-child(6) {
      margin-left: 100px;
    }
    li:nth-child(7) {
      margin-left: 120px;
    }
  }
}

.lmy-div {  
  .title0 {
    // background-color: aqua;
    width: 100%;
    height: 70px;
    text-align: center;
    line-height: 70px;
    color: #2ec0f6;
    // margin: 20px 0 0 0;
    font-size: 40px;
    position: absolute;
    top: 5%;
  }

  .title1 {
    text-align: center;
    width: 100%;
    // background-color: azure;
    color: #fff;
    font-size: 20px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 15%;
  }
  .imggroup {
    width: 170px;
    height: 170px;
    position: absolute;
    top: 30%;
    left: calc(50% - 85px);
    // background-color: #2ec0f6;
  }
  .img0,
  .img1,
  .img2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .img0 {
    transform: rotateY(240deg) translateZ(150px) scale(0.925);
    animation: rotate_0 10s linear 0.5s infinite;
  }
  .img1 {
    -webkit-transform: rotateY(0deg) translateZ(150px);
    -moz-transform: rotateY(0deg) translateZ(150px);
    -o-transform: rotateY(0deg) translateZ(150px);
    transform: rotateY(0deg) translateZ(150px);
    -webkit-animation: rotate_1 10s linear 0.5s infinite;
    -moz-animation: rotate_1 10s linear 0.5s infinite;
    -o-animation: rotate_1 10s linear 0.5s infinite;
    animation: rotate_1 10s linear 0.5s infinite;
  }
  .img2 {
    -webkit-transform: rotateY(120deg) translateZ(150px) scale(0.925);
    -moz-transform: rotateY(120deg) translateZ(150px) scale(0.925);
    -o-transform: rotateY(120deg) translateZ(150px) scale(0.925);
    transform: rotateY(120deg) translateZ(150px) scale(0.925);
    -webkit-animation: rotate_2 10s linear 0.5s infinite;
    -moz-animation: rotate_2 10s linear 0.5s infinite;
    -o-animation: rotate_2 10s linear 0.5s infinite;
    animation: rotate_2 10s linear 0.5s infinite;
  }
  @keyframes rotate_0 {
    0%{transform:rotateY(240deg) translateZ(150px) scale(.85);z-index:1}12.4%{z-index:1}12.5%{transform:rotateY(285deg) translateZ(150px) scale(.9);z-index:2}37.5%{transform:rotateY(375deg) translateZ(150px) scale(1);z-index:2}62.5%{transform:rotateY(465deg) translateZ(150px) scale(.9);z-index:2}62.6%{z-index:1}87.5%{transform:rotateY(555deg) translateZ(150px) scale(.8)}100%{transform:rotateY(600deg) translateZ(150px) scale(.85)}
  }
  @keyframes rotate_1 {
    0%{transform:rotateY(0deg) translateZ(150px) scale(1);z-index:2}25%{transform:rotateY(90deg) translateZ(150px) scale(.9);z-index:2}25.1%{transform:rotateY(91deg) translateZ(150px) scale(.9);z-index:1}50%{transform:rotateY(180deg) translateZ(150px) scale(.8)}74.9%{transform:rotateY(269deg) translateZ(150px) scale(.9);z-index:1}75%{transform:rotateY(270deg) translateZ(150px) scale(.9);z-index:2}100%{transform:rotateY(360deg) translateZ(150px) scale(1);z-index:2}
  }
  @keyframes rotate_2 {
    0%{transform:rotateY(120deg) translateZ(150px) scale(.85);z-index:1}12.5%{transform:rotateY(165deg) translateZ(150px) scale(.8)}37.4%{z-index:1}37.5%{transform:rotateY(255deg) translateZ(150px) scale(.9);z-index:2}62.5%{transform:rotateY(345deg) translateZ(150px) scale(1);z-index:2}87.5%{transform:rotateY(435deg) translateZ(150px) scale(.9);z-index:2}100%{transform:rotateY(480deg) translateZ(150px) scale(.85);z-index:1}
  }
  .img3 {
    position: absolute;
    top: -12%;
    left: calc(50% - 360px);
    z-index: -1;
  }
}

.form-div {
  color: #2ec0f6;
  background-color: #23305a;
  position: absolute;
  top: 30%;
  right: 6%;
  width: 300px;
  padding: 10px 10px;
  box-sizing: border-box;
  .el-input {
    width: 90%;
  }
  >>> .el-input__inner {
    padding: 0 10px;
  }

  .title-container {
    margin-bottom: 20px;
    p {
      position: absolute;
      top: 18px;
      left:75px;
    }
    .setlanguage{
      position: absolute;
      top: 18px;
      right:6%;
    }
  }
}
</style>