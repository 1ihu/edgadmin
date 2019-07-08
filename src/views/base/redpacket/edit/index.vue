<template>
  <div>
    <el-dialog
      title="新增"
      :visible.sync="dialogshow"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="ruleForm" :label-position="labelPosition" :rules="rules" label-width="100px" :model="formLabelAlign">
        <el-form-item label="红包名称:" prop="ruleName">
          <el-input v-model="formLabelAlign.ruleName" />
        </el-form-item>
        <el-form-item label="红包类型:" prop="ruleTypeId">
          <el-select v-model="formLabelAlign.ruleTypeId" style="width:100%" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="金额:" prop="amount">
          <el-input-number v-model="formLabelAlign.amount" :min="0" :max="9999" :precision="2" label="描述文字" @change="handleChange" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" :loading="loading" @click="resetForm('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// 搜索框
const formLabelAlign = {
  ruleName: '',
  ruleTypeId: '',
  amount: ''
}
import { rules } from './rules'
import { addRedpackRuleType } from '@/api/redpacket'
export default {
  props: {
    dialogshow: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: Object.assign({}, formLabelAlign),
      rules: rules,
      loading: false,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    }
  },
  methods: {
    handleClose(done) {
      this.$emit('close')
      this.loading = false
    },
    handleChange() {

    },
    resetForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          const data = {
            ...formLabelAlign
          }
          addRedpackRuleType(data).then((result) => {
            this.loading = false
            this.$message.success(result.msg)
            this.$refs[formName].resetFields()
            this.handleClose()
            this.$parent.searchClick()
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
