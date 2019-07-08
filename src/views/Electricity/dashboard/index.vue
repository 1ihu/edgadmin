<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <!-- <chart height="100%" width="100%" /> -->
    /elec/elec/persona/getAssignElecPersonal
    <!-- <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="750px"
    >
      <Tinymce ref="editor" v-model="postForm.content" :height="400" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>-->
    <!-- <dragupload /> -->
  </div>
</template>
<script>
const defaultForm = {
  status: 'draft',
  title: '', // 文章题目
  content: '', // 文章内容
  content_short: '', // 文章摘要
  source_uri: '', // 文章外链
  image_uri: '', // 文章图片
  display_time: undefined, // 前台展示时间
  id: undefined,
  platforms: ['a-platform'],
  comment_disabled: false,
  importance: 0
}
import { mapGetters } from 'vuex'
// import Chart from '@/components/Charts/Keyboard'
// import Tinymce from '@/components/Tinymce'
// import Dragupload from '@/components/Dragupload'
export default {
  name: 'Dashboard',
  // components: { Dragupload },
  data() {
    return {
      postForm: Object.assign({}, defaultForm),
      dialogVisible: true
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
