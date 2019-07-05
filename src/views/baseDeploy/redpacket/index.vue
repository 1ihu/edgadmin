<template>
  <div class="app-container">
    <!-- 搜索 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label>
        <el-input v-model="formInline.user" placeholder="红包名称" />
      </el-form-item>
      <el-form-item label>
        <el-select v-model="formInline.region" placeholder="红包类型">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label>
        <el-select v-model="formInline.region" placeholder="状态">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
      <el-button type="primary" @click="onSubmit">重置</el-button>
      <el-button type="primary" @click="onSubmit">新增</el-button>
      <el-button type="primary" @click="onSubmit">批量删除</el-button>
    </el-form>
    <!-- table -->
    <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="date" label="序号" width="180" />
      <el-table-column prop="date" label="红包名称" width="180" />
      <el-table-column prop="date" label="红包编号" width="180" />
      <el-table-column prop="date" label="红包类型" width="180" />
      <el-table-column prop="date" label="金额（元）" width="180" />
      <el-table-column prop="date" label="是否发布" width="180" />
      <el-table-column prop="date" label="创建时间" width="180" />
      <el-table-column prop="name" label="操作" width="" />
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [],
      multipleSelection: []
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>
