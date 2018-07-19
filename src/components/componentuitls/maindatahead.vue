<template>
    <div>
        <el-row :gutter="20" style="font-size: 17px">
            <el-col :span="6" :offset="4"><div class="grid-content bg-purple" style="color: darkorange">广州
            <router-link to="/login">[切换城市] </router-link>
            </div></el-col>
            <el-col :span="0.5" :offset="4" ><div class="grid-content bg-purple">
                <router-link to="/login">首页 </router-link></div></el-col>
            <el-col :span="2"  ><div class="grid-content bg-purple">
                <router-link to="/login">申请社团赞助</router-link>
                </div></el-col>
            <el-col :span="1.2"  ><div class="grid-content bg-purple">
                <router-link to="/login">企业服务</router-link></div></el-col>
            <el-col :span="0.3"  ><div class="grid-content bg-purple">|</div></el-col>
            <el-col :span="0.5"  ><div class="grid-content bg-purple">
                <router-link to="/login">登陆</router-link></div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "maindatahead"
    }
</script>

<style scoped>

    a {
        text-decoration: none;
        color: #6c6c6c;
    }


</style>