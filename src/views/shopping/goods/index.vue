<template>
  <div class="app-container">
    <div class="from_control">
      <div class="from_class">
        <el-select v-model="type" :size="size" style="width: 50%;" placeholder="商品类型">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="status" style="width: 50%;" placeholder="是否上架">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-input v-model="commodityName" placeholder="商品名称" :size="size" clearable />
        <el-input v-model="commodityNo" placeholder="商品编号" :size="size" clearable />
        <el-button class="marginleft" icon="el-icon-search" type="primary" @click="searchClick">搜索</el-button>
        <el-button class="marginleft" type="primary" @click="resetSearch">重置</el-button>
        <el-button :size="size" icon="el-icon-plus" type="primary" @click="handleClick">添加</el-button>
        <el-button :size="size" type="primary" @click="deleteRow('all')">批量删除</el-button>
      </div>
    </div>
    <el-table
      v-loading="listLoading"
      :data="tableData"
      align="center"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="commodityName" label="商品名称" align="center" />
      <el-table-column prop="commodityNo" label="商品编号" align="center" />
      <el-table-column prop="typeString" label="商品类型" align="center" />
      <el-table-column prop="price" label="兑换金额" align="center" />
      <el-table-column prop="stock" label="库存" align="center" />
      <el-table-column prop="releaseTime" label="上架时间" align="center" />
      <el-table-column label="是否上架" width="80" align="center">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="2"
            @change="changeStatus(scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" :size="tablebtn" plain @click="handleClick(scope.row)">修改</el-button>
          <el-button type="primary" :size="tablebtn" plain @click="deleteRow('one', scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination ref="pagination" />
  </div>
</template>

<script>

import {
  getCommodityListPage,
  removeCommodity,
  modifyCommodity
} from '@/api/shopping/shop/goods'
import pagination from '@/components/pagination'
export default {
  components: { pagination },
  data() {
    return {
      statusOptions: [
        {
          label: '上架',
          value: 1
        },
        {
          label: '下架',
          value: 2
        }
      ],
      typeOptions: [
        {
          label: '虚拟',
          value: 1
        },
        {
          label: '实物',
          value: 2
        }
      ],
      type: '',
      status: '',
      commodityName: '',
      commodityNo: '',
      tablebtn: 'mini',
      size: '',
      listLoading: false,
      tableData: [],
      selection: [],
      searchData: {}
    }
  },
  created() {
    // this.search() // 拉去table
  },
  methods: {
    resetSearch() {
      this.searchData = {}
      this.status = ''
      this.type = ''
      this.commodityName = ''
      this.commodityNo = ''
    },
    // 搜索
    searchClick() {
      this.searchData = {
        status: this.status,
        type: this.type,
        commodityName: this.commodityName,
        commodityNo: this.commodityNo
      }
      this.$refs.pagination.getData()
    },
    // 修改状态
    changeStatus(row) {
      modifyCommodity({
        commodityId: row.commodityId,
        status: row.status === 2 ? 1 : 2
      }).then(res => {
        this.$refs.pagination.getData()
      })
    },
    // 多选
    handleSelectionChange(arr) {
      this.selection = arr.map(item => item.commodityId)
    },
    // 用户编辑 添加
    handleClick(row) {
      this.$router.push({
        path: '/shopping/goods/edit',
        query: {
          commodityId: row.commodityId
        }
      })
    },
    // 查询用户列表
    search() {
      const params = {
        ...this.$refs.pagination.pageData,
        ...this.searchData
      }
      return new Promise(resolve => {
        getCommodityListPage(params).then(res => {
          this.listLoading = false
          this.tableData = res.data.items
          resolve(res.data)
        })
      })
    },
    deleteRow(type, row) {
      if (type === 'all' && this.selection.length === 0) {
        this.$message({
          type: 'error',
          message: '请至少选择一个商品'
        })
        return
      }
      this.$confirm('此操作将删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          removeCommodity({
            commodityIds: type === 'one' ? row.commodityId : this.selection.join(',')
          }).then(res => {
            this.$message({
              type: 'success',
              message: res.msg
            })
            this.selection = []
            this.$refs.pagination.getData()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.from_control {
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  .addfrom {
    text-align: left;
  }
  .from_class {
    display: flex;
    justify-content: space-between;
  }
  .input-with-select {
    width: 400px;
  }
}
</style>
