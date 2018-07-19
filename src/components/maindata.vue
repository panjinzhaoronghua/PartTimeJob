<template>
<div>
    <!--最上方位置-->
    <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">
            <Maindatahead></Maindatahead>
        </div></el-col>
    </el-row>
    <!--中间大块位置-->
        <el-row :gutter="20" >
            <el-col :span="13" :offset="6">
                <maindatamiddle></maindatamiddle>
            </el-col>
        </el-row>



</div>
</template>

<script>
    import Maindatahead from "~/components/componentuitls/maindatahead";
    import Maindatamiddle from "~/components/componentuitls/maindatamiddle";
    export default {
        name: "maindata",
        components: {Maindatamiddle, Maindatahead}
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #f5f5f5;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .middle{
        height: 1000px;
    }
</style>