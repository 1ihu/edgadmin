<template>
  <div>
    <el-pagination
      class="paginationstyle"
      :current-page="pageData.pageIndex"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pageData.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageData: {
        pageIndex: 1,
        pageSize: 10
      },
      total: 0
    }
  },
  mounted() {
    this.$parent.search(this.pageData).then(res => {
      this.total = res.totalNum
    })
  },
  methods: {
    getData() {
      this.pageData = {
        ...this.pageData,
        pageIndex: 1
      }
      this.$parent.search().then(res => {
        this.total = res.totalNum
      })
    },
    handleSizeChange(pageSize) {
      this.pageData = {
        pageSize,
        pageIndex: 1
      }
      this.$parent.search(this.pageData).then(res => {
        this.total = res.totalNum
      })
    },
    handleCurrentChange(pageIndex) {
      this.pageData = {
        ...this.pageData,
        pageIndex
      }
      this.$parent.search(this.pageData).then(res => {
        this.total = res.totalNum
      })
    }
  }
}
</script>
