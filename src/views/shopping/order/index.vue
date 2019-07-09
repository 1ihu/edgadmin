<template>
  <div>
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
      </div>
    </div>
    <el-table
      v-loading="listLoading"
      :data="tableData"
      align="center"
      border
      style="width: 100%"
    >
      <el-table-column prop="orderNo" label="兑换订单编号" align="center" />
      <el-table-column prop="receiver" label="姓名" align="center" />
      <el-table-column prop="mobile" label="手机号" align="center" />
      <el-table-column prop="commodityName" label="商品名称" align="center" />
      <el-table-column prop="commodityNo" label="商品编号" align="center" />
      <el-table-column prop="typeString" label="商品类型" align="center" />
      <el-table-column prop="price" label="兑换金额" align="center" />
      <el-table-column prop="count" label="兑换数量" align="center" />
      <el-table-column prop="price" label="兑换总金额" align="center" />
      <el-table-column prop="statusString" label="状态" align="center" />
      <el-table-column prop="placeTime" label="创建时间" align="center" />
      <el-table-column label="操作" align="center" width="180">
        <template slot-scope="scope">
          <el-button type="primary" :size="tablebtn" plain @click="handleClick(scope.row)">查看</el-button>
          <el-button type="primary" :size="tablebtn" plain @click="handleClick(scope.row)">处理</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination ref="pagination" />
  </div>
</template>

<script>

import {
  getOrderListPage
} from '@/api/shopping/shop/order'
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
  methods: {
    // 重置搜索
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
    // 编辑 添加
    handleClick(row) {
      this.$router.push({
        path: '/shopping/order/edit',
        query: {
          orderId: row.orderId
        }
      })
    },
    // 查询列表
    search() {
      const params = {
        ...this.$refs.pagination.pageData,
        ...this.searchData
      }
      return new Promise(resolve => {
        getOrderListPage(params).then(res => {
          this.listLoading = false
          this.tableData = res.data.items.map(item => {
            return {
              ...item,
              ...item.orderCommodityVoList[0]
            }
          })
          resolve(res.data)
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
