<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="4">
                <img src="http://www.jianzhimao.com/web/assets/img/logo.png?version=2.28.7" alt="logo" id="logo">
            </el-col>
            <el-col :span="10" offset="1">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item>
                        <el-input v-model="formInline.user" placeholder="请输入搜索内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="warning" @click="onSubmit">搜索</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="7" offset="2">
                <el-button type="success">发布信息</el-button>
                <el-button type="warning">进入招聘管理</el-button>
            </el-col>
        </el-row>
        <!--广告位置-->
        <div>
            <img src="http://jianzhimao.oss-cn-hangzhou.aliyuncs.com/jzmao/ffads/rese-11_1510126915326.jpg">
        </div>
        <el-row :gutter="20">
            <el-col :span="2" style="color: #6c6c6c">广州兼职</el-col>
        </el-row>
        <div style="height: 20px"></div>
        <el-row id="r1">
            <el-col :span="4">
                <div id="r2">
                    最新兼职
                </div>
            </el-col>
            <el-col :span="20">
                <div id="r3">
                </div>
            </el-col>
        </el-row>
        <!--类型，种类，区域-->
        <el-row id="r4">


        </el-row>
        <div style="height: 30px"></div>
        <!--三个按钮-->
        <div style="border-bottom: #f2f2f2 1px solid;height: 60px;border-top: #f2f2f2 1px solid">
            <el-button-group style="position: relative;left:-367px;padding: 10px">
                <el-button type="warning" plain="">最新发布</el-button>
                <el-button type="warning" plain="">最高薪资</el-button>
                <el-button type="warning" plain="">最多人看</el-button>
            </el-button-group>
        </div>
        <div style="height: 20px"></div>

        <el-row :gutter="20">
            <el-co1 :span="16">
                <el-table
                        :data="tableData"
                        style="width: 100%" show-header="false">
                    <el-table-column
                            label=""
                            width="180" >
                        <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label=""
                            width="180">
                        <template slot-scope="scope">
                            <el-popover trigger="hover" placement="top">
                                <p>姓名: {{ scope.row.name }}</p>
                                <p>住址: {{ scope.row.address }}</p>
                                <div slot="reference" class="name-wrapper">
                                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                                </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column label="">
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">编辑
                            </el-button>
                            <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </el-co1>
        </el-row>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''

                },aa:false,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
    .color {
        background: aqua;
        height: 100px;
    }

    #r1 {
        border: #dddddd;
        border-style: solid;
        border-width: 1px;
        height: 36.8px
    }

    #r2 {
        border-right: #dddddd 1px solid;
        height: 36.8px;
    }

    #r3 {
        background: #f7f7f7;
        height: 34.8px;
        border-bottom: #dddddd 1px solid
    }

    #r4 {
        height: 120px;
        border-right: #dddddd 1px solid;
        border-left: #dddddd 1px solid;
        border-bottom: #dddddd 1px solid
    }
</style>