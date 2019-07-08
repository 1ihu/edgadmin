<template>
  <div class="app-container">
    <!-- 搜索 -->
    <el-form ref="demo-form-inline" :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label prop="ruleName">
        <el-input v-model="formInline.ruleName" placeholder="红包名称" />
      </el-form-item>
      <el-form-item label prop="ruleTypeId">
        <el-select v-model="formInline.ruleTypeId" placeholder="红包类型">
          <el-option label="停用" value="1" />
          <el-option label="启用" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label prop="status">
        <el-select v-model="formInline.status" placeholder="状态">
          <el-option label="停用" value="1" />
          <el-option label="启用" value="2" />
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="searchClick">搜索</el-button>
      <el-button type="primary" @click="$refs['demo-form-inline'].resetFields()">重置</el-button>
      <el-button type="primary" @click="onSubmit">新增</el-button>
      <el-button type="primary" @click="batchDelete">批量删除</el-button>
    </el-form>
    <!-- table -->
    <el-table :data="tableData" :loading="listLoading" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column type="index" label="序号" width="55" align="center" />
      <el-table-column prop="ruleName" label="红包名称" width="180" align="center" />
      <el-table-column prop="ruleCode" label="红包编号" width="180" align="center" />
      <el-table-column prop="ruleTypeId" label="红包类型" width="180" align="center" />
      <el-table-column prop="amount" label="金额（元）" width="180" align="center" />
      <el-table-column prop="status" label="是否发布" width="" align="center">
        <template slot-scope="scope">
          <div>
            <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="CreationTime" label="创建时间" width="" align="center" />
      <el-table-column label="操作" width="120" align="center">
        <template slot-scope="scope">
          <div>
            <el-button type="text" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改 -->
    <handle-edit :dialogshow="dialog" @close="dialog=false" />
    <!-- 分页 -->
    <pagination ref="pagination" />
  </div>
</template>
<script>
const formInline = {
  ruleName: '',
  ruleTypeId: '',
  status: ''
}
import handleEdit from './edit'
import { getRedpackRuleTypeListPage } from '@/api/redpacket'
import pagination from '@/components/pagination'
export default {
  components: {
    handleEdit,
    pagination
  },
  data() {
    return {
      formInline: Object.assign({}, formInline),
      tableData: [],
      multipleSelection: [],
      dialog: false,
      listLoading: false
    }
  },
  methods: {
    onSubmit() {
      this.data = Object.assign({}, this.formInline)
      this.dialog = true
      console.log('submit!')
    },
    // 弹窗编辑
    handleEdit(index, row) {
      this.dialog = true
    },
    // 删除
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    judgearr() {
      return this.multipleSelection.length !== 0
    },
    batchDelete() {
      if (this.judgearr()) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      } else {
        this.$message.warning('请选择删除项！')
      }
    },
    // 点击搜索
    searchClick() {
      this.formInline = Object.assign({}, this.formInline)
      this.$refs.pagination.getData()
    },
    // 获取页面table
    search() {
      const params = {
        ...this.$refs.pagination.pageData,
        ...this.formInline
      }
      return new Promise(resolve => {
        getRedpackRuleTypeListPage(params).then(res => {
          this.listLoading = false
          this.tableData = res.data.items
          resolve(res.data)
        })
      })
    }
  }
}
</script>
