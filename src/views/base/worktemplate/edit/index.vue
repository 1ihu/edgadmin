<template>
  <div>
    <el-dialog
      title="修改"
      :visible.sync="dialogshow"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="ruleForm" :label-position="labelPosition" :rules="rules" label-width="100px" :model="formLabelAlign">
        <el-form-item label="模版名称:" prop="taskModelName">
          <el-input v-model="formLabelAlign.taskModelName" />
        </el-form-item>
        <el-form-item label="作业节点:" prop="nodeName">
          <div class="flexdiv">
            <el-select v-model="formLabelAlign.nodeName" clearable multiple collapse-tags placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-button slot="append" icon="el-icon-plus" type="primary" @click="OpenkeySearch" />
          </div>
        </el-form-item>
        <el-form-item label="工种:" prop="craftIds">
          <div class="flexdiv">
            <el-select v-model="formLabelAlign.craftIds" clearable multiple collapse-tags style="width:100%" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-button slot="append" icon="el-icon-plus" type="primary" @click="OpenkeySearch" />
          </div>

        </el-form-item>
        <el-form-item label="标签:" prop="nodeModelLabel">
          <div class="flexdiv">
            <el-select v-model="formLabelAlign.nodeModelLabel" clearable multiple collapse-tags style="width:100%" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-button slot="append" icon="el-icon-plus" type="primary" @click="OpenkeySearch" />
          </div>

        </el-form-item>
        <el-form-item label="作业指导书:" prop="workManualIds">
          <div class="flexdiv">
            <el-select v-model="formLabelAlign.workManualIds" clearable multiple collapse-tags style="width:100%" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-button slot="append" icon="el-icon-plus" type="primary" @click="OpenkeySearch" />
          </div>
        </el-form-item>
        <el-form-item label="额定工时:" prop="workHour">
          <el-input-number v-model="formLabelAlign.workHour" :min="0" :max="9999" :precision="2" label="描述文字" /> 时
        </el-form-item>
        <el-form-item label="单价:" prop="price">
          <el-input-number v-model="formLabelAlign.price" :min="0" :max="9999" :precision="2" label="描述文字" /> 元
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" :loading="loading" @click="resetForm('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 关键字搜索 -->
    <keysearch :dialogshow="keyshow" @close="keyshow= false" />
  </div>
</template>
<script>
// 搜索框
const formLabelAlign = {
  taskModelName: '',
  nodeName: [],
  craftIds: [],
  nodeModelLabel: [],
  workManualIds: [],
  workHour: null,
  price: null
}
import { rules } from './rules'
import Keysearch from '@/components/Keysearch'
export default {
  components: {
    Keysearch
  },
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
      loading: false,
      keyshow: false,
      rules: rules,
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
    OpenkeySearch() {
      this.keyshow = true
    },
    handleClose(done) {
      this.$emit('close')
      this.loading = false
    },
    resetForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          // const data = {
          //   ...formLabelAlign
          // }
          // addRedpackRuleType(data).then((result) => {
          //   this.loading = false
          //   this.$message.success(result.msg)
          //   this.$refs[formName].resetFields()
          //   this.handleClose()
          //   this.$parent.searchClick()
          // })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

  }
}
</script>
<style scoped>
.flexdiv{
  display: flex;
  justify-content: flex-start;
}
.flexdiv .el-select{
  flex: 1;
  margin-right: 10px;
}
</style>

