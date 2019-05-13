<template>
    <div class="search">
        <h2>学生成绩查询</h2>
        <table border="1">
            <thead>
                <th>学号</th>
                <th>学生姓名</th>
                <th>语文</th>
                <th>英语</th>
                <th>数学</th>
            </thead>
            <tbody v-for="(stu, index) in data" :key="index">
                <th>{{stu.id}}</th>
                <th>{{stu.name}}</th>
                <th>{{stu.chinese}}</th>
                <th>{{stu.english}}</th>
                <th>{{stu.math}}</th>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                data:null
            }
        },
        methods: {
            
        },
        created() {
            this.$http.get('http://localhost:3000/score').then(
                (res)=>{
                    if(res.data.code==1){
                        alert('查询成绩失败')
                    }
                    this.data = res.data.data
                }
            )
        },
    }

</script>
<style>
    table{
        margin: 20px auto;
        width: 80%;
        border: 1px solid #ccc;
        border-collapse: collapse;
        font-size: 15px;
    }
    table thead,table tbody{
        line-height: 30px
    }
    table tbody:nth-child(even){
        background: #f5f5f5;
    }
    table thead:hover,table tbody:hover{
        background:darksalmon;
    }
</style>