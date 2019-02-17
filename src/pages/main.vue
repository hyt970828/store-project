<template>
    <el-container>
    <el-header>Header</el-header>
    <el-container>
        <el-aside width="200px">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
        <el-main>
            <router-view/>
        </el-main>
        <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
    </el-container>
</template>
<script>
export default {
    data(){
        return {}
    }
}
</script>
