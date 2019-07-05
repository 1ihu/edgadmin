<template>
  <div>
    <div class="from_control">
      <div class="from_class">
        <!-- <el-input v-model="input3" placeholder="请输入内容" :size="size" clearable class="input-with-select">
          <el-select slot="prepend" v-model="select" style="width:120px;" placeholder="请选择">
            <el-option label="帐号" value="loginName" />
            <el-option label="姓名" value="name" />
            <el-option label="手机号码" value="mobile" />
          </el-select>
        </el-input>
        <el-button class="marginleft" icon="el-icon-search" type="primary" @click="searchClick">搜索</el-button> -->

      </div>
      <div class="from-btns">
        <el-button
          :size="size"
          icon="el-icon-plus"
          type="primary"
          @click="handleClick({
            filePath: '',
            imgId: '',
            linkName: '',
            linkUrl: '',
            linkId: ''
          })"
        >
          添加
        </el-button>
      </div>
    </div>
    <el-table
      v-loading="listLoading"
      :data="tableDataUser"
      align="center"
      border
      style="width: 100%"
    >
      <!-- <el-table-column type="index" width="50" align="center" /> -->
      <el-table-column prop="linkName" label="名称" align="center" />
      <el-table-column prop="linkUrl" label="链接地址" align="center" />
      <el-table-column label="状态" width="80" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status == 1" size="small" type="info">未发布</el-tag>
          <el-tag v-else size="small" type="success">已发布</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            :type="scope.row.status == 2? 'info':'success'"
            :size="tablebtn"
            plain
            @click="disablerow(scope.row)"
          >{{ scope.row.status == 2 ? '停用':'发布' }}</el-button>
          <el-button type="primary" :size="tablebtn" plain @click="handleClick(scope.row)">编辑</el-button>
          <el-button type="primary" :size="tablebtn" plain @click="deleteClick(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="paginationstyle"
      :current-page="currentPageuser4"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChangeuser"
      @current-change="handleCurrentChangeuser"
    />
  </div>
</template>

<script>

import {
  getCommodityListPage
} from '@/api/appSetting'
export default {
  data() {
    return {
      tablebtn: 'mini',
      input3: '', // tabsmodel
      size: '',
      total: 1,
      dialogsize: '', // 弹窗input button大小
      select: 'loginName',
      pageSize: 10,
      dialogVisible: false,
      listLoading: false,
      currentPageuser4: 1,
      options: [],
      content: '',
      tableDataUser: []
    }
  },
  created() {
    this.search() // 拉去table
  },
  methods: {
    // 用户编辑
    handleClick(row) {
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.addLink.dialog(row)
      })
    },
    // 查询用户列表
    search() {
      const select = this.select
      const params = {
        pageIndex: this.currentPageuser4,
        pageSize: this.pageSize
      }
      params[select] = this.input
      getCommodityListPage(params).then(response => {
        console.log(response)
        this.listLoading = false
        this.tableDataUser = response.data.items
        this.total = response.data.totalNum
      })
    },
    closeAndRefresh() {
      this.dialogVisible = false
      this.search()
    },
    handleSizeChangeuser(val) {
      this.pageSize = val
      this.currentPageuser4 = 1
      this.search()
    },
    handleCurrentChangeuser(val) {
      this.currentPageuser4 = val
      this.search()
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
