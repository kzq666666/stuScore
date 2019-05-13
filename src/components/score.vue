<template>
  <div class="score">
    <div class="">
      <h2>学生成绩录入</h2>
      <div class="form">
        <div class="formEl">
          姓名：<input type="text" v-model="form.name">
        </div>
        <div class="formEl">
          语文：<input type="text" v-model="form.chinese">
        </div>
        <div class="formEl">
          英语：<input type="text" v-model="form.english">
        </div>
        <div class="formEl">
          数学：<input type="text" v-model="form.math">
        </div>
        <div class="saveButton">
          <button @click="commit">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        form:{
          name:'test',
          chinese:'80',
          english:'80',
          math:'80'
        }
      }
    },
    methods: {
      commit(){
        this.$http.post('http://localhost:3000/score',this.form).then(
          (res)=>{
            console.log(res)
            if(res.data.code==0){
              alert('录入成功');
            }else{
              alert('录入失败')
            }
            this.form = {
              name:'',
              chinese:'',
              english:'',
              math:''
            }
          }
        )
      }
    },
  }
</script>
<style>
.formEl{
  margin-top:20px;
  font-size: 20px;
}
input{
  font-size: 18px;
  padding: 5px;
}
button{
  margin-top: 20px;
  font-size: 20px;
}
</style>