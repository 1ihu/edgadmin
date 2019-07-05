<template>

  <el-upload
    class="upload-demo"
    action="http://edgproduct.oss-cn-hangzhou.aliyuncs.com"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :before-upload="beforeAvatarUpload"
    :data="data"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>
<script>
//  "data": {
//     "accessid": "LTAIM9WtKzHu7zAM",
//     "policy": "eyJleHBpcmF0aW9uIjoiMjAxOS0wNy0wNFQxMDowMToxOS4xNTNaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJzdHJpbmciXV19",
//     "signature": "K3/58sr02fNFgtBxOqTrtsMRj5g=",
//     "dir": "string",
//     "host": "http://edgproduct.oss-cn-hangzhou.aliyuncs.com",
//     "expire": "1562234479",
//     "callback": "eyJjYWxsYmFja0JvZHlUeXBlIjoiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkIiwiY2FsbGJhY2tVcmwiOiJodHRwOi8vMTc1M2E3M3Y1MC5pbXdvcmsubmV0OjM0MjAzL2ZpbGUvY2FsbGJhY2siLCJjYWxsYmFja0JvZHkiOiJmaWxlbmFtZT0ke29iamVjdH0mc2l6ZT0ke3NpemV9Jm1pbWVUeXBlPSR7bWltZVR5cGV9JmhlaWdodD0ke2ltYWdlSW5mby5oZWlnaHR9JndpZHRoPSR7aW1hZ2VJbmZvLndpZHRofSZyVHlwZT0ke3g6MH0mYml6VHlwZT0ke3g6MH0mcHJvZHVjZUNvZGU9JHt4OnN0cmluZ30ifQ=="
//   }
export default {
  data() {
    return {
      data: {
        'key': '',
        'policy': 'eyJleHBpcmF0aW9uIjoiMjAxOS0wNy0wNFQxNDoxNDo1NC4zNjFaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJ1c2VyLWRpci1wcmVmaXgvIl1dfQ==',
        'OSSAccessKeyId': 'LTAIM9WtKzHu7zAM',
        // 'dir': 'user-dir-prefix',
        'success_action_status': '200', // 让服务端返回200,不然，默认会返回204
        'callback': 'eyJjYWxsYmFja1VybCI6Imh0dHA6Ly8xNzUzYTczdjUwLmltd29yay5uZXQ6MzQyMDMvZmlsZS9jYWxsYmFjayIsImNhbGxiYWNrQm9keSI6ImZpbGVuYW1lPSR7b2JqZWN0fSZzaXplPSR7c2l6ZX0mbWltZVR5cGU9JHttaW1lVHlwZX0maGVpZ2h0PSR7aW1hZ2VJbmZvLmhlaWdodH0md2lkdGg9JHtpbWFnZUluZm8ud2lkdGh9IiwiY2FsbGJhY2tCb2R5VHlwZSI6ImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCJ9',
        'signature': 'lEbY5EvqYU5mO1o9+Wm0DRXJATM='
      },
      fileList: []
    }
  },
  methods: {
    beforeAvatarUpload(file, fileList) {
      console.log(file, fileList)
      this.data.key = 'user-dir-prefix/' + file.name
      // this.data.key = file.uid
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },

    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>
