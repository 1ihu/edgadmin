<template>
  <div>
    <el-dialog title="" :visible.sync="dialogshow" width="30%" :before-close="handleClose" append-to-body>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <div class="flexdiv">
            <el-input /> <el-button type="primary">搜索</el-button>
          </div>
          <div>
            <span>雨纷纷</span>
            <el-divider direction="vertical" />
            <span>旧故里</span>
            <el-divider direction="vertical" />
            <span>草木深</span>
            <el-divider direction="vertical" />
            <span>草木深</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second" />
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    dialogshow: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleClose(done) {
      this.$emit('close')
      this.loading = false
    }
  }
}
</script>
<style lang="scss" scoped>
    // .el-tabs{
    //     display: flex;
    //     justify-content: space-between;
    // }
    .el-tabs__nav.is-top{
        width: 100%;
    }
    .el-tabs{
        width: 100%;
    }
    .el-tab-pane{
        width: 50%;
    }
    .flexdiv{
        display: flex;
        justify-content: space-between;
    }
</style>

