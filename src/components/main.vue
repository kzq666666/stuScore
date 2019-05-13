<template>
  <div class="main">
    <div class="header">
      <h2>学生成绩管理系统</h2>
    </div>
    <div class="body">
      <div class="left">
        <div
          class="scoreInsert"
          :class="{active:onClick==0}"
          @click="goScoreInsert"
        >
          学生成绩录入
        </div>
        <div
          class="scoreSearch"
          :class="{active:onClick==1}"
          @click="goScoreSearch"
        >
          学生成绩查询
        </div>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        onClick: 0
      };
    },
    methods: {
      goScoreInsert() {
        this.onClick = 0;
        this.$router.push("/scoreInsert");
      },
      goScoreSearch() {
        this.onClick = 1;
        this.$router.push("/search");
      }
    }
  };
</script>
<style scoped>
  .header {
    background: #abcdef;
    height: 50px;
    line-height: 50px;
    padding-left: 20px
  }
  .body {
    position: absolute;
    width: 100%;
    top: 50px;
    bottom: 0;
    display: flex;
  }
  .left {
    width: 10%;
    height: 100%;
    background: #f5f5f5;
    text-align: center;
  }
  .left div {
    color: #428bca;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
  .left div:not(.active):hover {
    background: #a4c0d8;
    color: #fff;
  }
  .left .active {
    background: #428bca;
    color: white;
  }
  .right {
    padding: 20px;
    width: 90%;
    text-align: center;
  }
</style>
