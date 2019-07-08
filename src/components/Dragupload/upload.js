import Vue from 'vue'
// 依赖 Plupload
import Plupload from 'plupload'
import VuePlupload from 'vue-plupload-aj'
Vue.use(VuePlupload, {
  // 注册标签名 默认为 'VuePlupload' 选填项
  tag: 'VuePlupload',
  // 需要注入 Plupload 必填项
  Plupload
})
