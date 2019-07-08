<template>
  <div class="app-container">
    <!-- 搜索 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label>
        <el-input v-model="formInline.ruleName" placeholder="红包名称" />
      </el-form-item>
      <el-form-item label>
        <el-select v-model="formInline.ruleTypeId" placeholder="红包类型">
          <el-option label="停用" value="1" />
          <el-option label="启用" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label>
        <el-select v-model="formInline.status" placeholder="状态">
          <el-option label="停用" value="1" />
          <el-option label="启用" value="2" />
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
      <el-button type="primary" @click="onSubmit">重置</el-button>
      <el-button type="primary" @click="onSubmit">新增</el-button>
      <el-button type="primary" @click="onSubmit">批量删除</el-button>
    </el-form>
    <!-- table -->
    <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column type="index" label="序号" width="55" align="center" />
      <el-table-column prop="ruleName" label="红包名称" width="180" align="center" />
      <el-table-column prop="commodityId" label="红包编号" width="180" align="center" />
      <el-table-column prop="ruleTypeId" label="红包类型" width="180" align="center" />
      <el-table-column prop="amount" label="金额（元）" width="180" align="center" />
      <el-table-column prop="status" label="是否发布" width="" align="center">
        <template slot-scope="scope">
          <div>
            <el-switch v-model="scope.row.data" active-color="#13ce66" inactive-color="#ff4949" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="releaseTime" label="创建时间" width="" align="center" />
      <el-table-column label="操作" width="120" align="center">
        <template slot-scope="">
          <div>
            <el-button type="text">修改</el-button>
            <el-button type="text">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改 -->
    <editredpacket :dialogshow="dialog" @close="dialog=false" />
  </div>
</template>
<script>
import Editredpacket from './edit'
export default {
  components: {
    Editredpacket
  },
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: [],
      dialog: false
    }
  },
  methods: {
    onSubmit() {
      this.data = Object.assign({}, this.formInline)
      this.dialog = true
      console.log('submit!')
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>
