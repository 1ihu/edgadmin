<template>
  <div>
    <el-dialog
      title="新增"
      :visible.sync="dialogshow"
      width="30%"
      :before-close="handleClose"
    >
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="红包名称">
          <el-input v-model="formLabelAlign.name" />
        </el-form-item>
        <el-form-item label="红包类型">
          <el-input v-model="formLabelAlign.region" />
        </el-form-item>
        <el-form-item label="金额">
          <el-input v-model="formLabelAlign.type" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="$emit('close')">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
const formLabelAlign = {
  name: '',
  region: '',
  type: ''

}
export default {
  props: {
    dialogshow: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      labelPosition: 'left',
      formLabelAlign: Object.assign({}, formLabelAlign)
    }
  },
  methods: {
    handleClose(done) {
      this.$emit('close')
    }
  }
}
</script>
