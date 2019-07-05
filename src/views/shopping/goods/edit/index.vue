<template>
  <div class="form">
    <div class="addfrom">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-form-item label="商品名称" prop="commodityName">
                <el-input v-model="form.commodityName" placeholder="请输入名称" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-form-item label="商品类型" prop="type">
                <el-select v-model="form.type" placeholder="请选择商品类型">
                  <el-option
                    v-for="item in typeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-form-item label="兑换金额" prop="price">
                <el-input-number v-model="form.price" placeholder="请输入兑换金额" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-form-item label="库存" prop="stock">
                <el-input-number v-model="form.stock" placeholder="请输入库存" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-form-item label="商品详情" prop="introduction">
                <el-input
                  v-model="form.introduction"
                  type="textarea"
                  :rows="2"
                  placeholder="请输入商品详情"
                />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-form-item label="注意事项" prop="careNote">
                <el-input v-model="form.careNote" type="textarea" :rows="2" placeholder="请输入注意事项" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-form-item label="兑换流程" prop="exchangeNote">
                <el-input v-model="form.exchangeNote" type="textarea" :rows="2" placeholder="请输入兑换流程" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="$router.go(-1)">取 消</el-button>
      <el-button size="small" type="primary" @click="dialogVisibleuserfncedit('form')">确 定</el-button>
    </span>
  </div>
</template>

<script>
import { goodsRules } from '@/rules'
import { upload } from '@/utils/auth'
import {
  addCommodity,
  modifyCommodity,
  getCommodityInfoById
} from '@/api/shopping'
export default {
  data() {
    return {
      upload: upload,
      rules: goodsRules,
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
      form: {
        commodityName: '',
        type: '',
        price: '',
        stock: '',
        introduction: '',
        careNote: '',
        exchangeNote: ''
      }
    }
  },
  mounted() {
    if (this.$route.query.commodityId) this.getData(this.$route.query.commodityId)
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.Theuseredit.imgId = res.data.fileId
    },
    // 编辑提交
    dialogVisibleuserfncedit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.form.commodityId) {
            modifyCommodity(this.form).then(response => {
              if (response.code === 1) {
                this.$message({
                  type: 'success',
                  message: response.msg
                })
                this.$router.go(-1)
              }
            })
          } else {
            addCommodity(this.form).then(response => {
              if (response.code === 1) {
                this.$message({
                  type: 'success',
                  message: response.msg
                })
                this.$router.go(-1)
              }
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getData(commodityId) {
      getCommodityInfoById({ commodityId }).then(response => {
        if (response.code === 1) {
          this.form = {
            ...response.data
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.form {
  padding: 50px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

