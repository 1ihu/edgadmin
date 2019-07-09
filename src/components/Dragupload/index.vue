<template>
  <div class="imgUpload">
    <br>
    <div id="ossfile">你的浏览器不支持flash,Silverlight或者HTML5！</div>
    <div id="container">
      <a id="selectfiles" href="javascript:void(0);" class="btn">选择文件</a>
      <a id="postfiles" href="javascript:void(0);" class="btn">开始上传</a>
    </div>
    <pre id="console" />
  </div>
</template>
<script>
import plupload from 'plupload'

var accessid = ''
// var accesskey = ''
var host = ''
var policyBase64 = ''
var signature = ''
var callbackbody = ''
// var filename = ''
var key = ''
var expire = 0
var g_object_name = ''
var g_object_name_type = ''
var now = Date.parse(new Date()) / 1000
// const timestamp = Date.parse(new Date()) / 1000

function send_request() {
  var xmlhttp = 'http://192.168.5.138:8080/'
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest()
  } else if (window.ActiveXObject) {
    // eslint-disable-next-line no-undef
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
  }
  if (xmlhttp != null) {
    // serverUrl是 用户获取 '签名和Policy' 等信息的应用服务器的URL，请将下面的IP和Port配置为您自己的真实信息。
    // serverUrl = 'http://88.88.88.88:8888/aliyun-oss-appserver-php/php/get.php'
    const serverUrl = 'http://192.168.5.138:8080/'
    xmlhttp.open('GET', serverUrl, false)
    xmlhttp.send(null)
    return xmlhttp.responseText
  } else {
    alert('Your browser does not support XMLHTTP.')
  }
}
function check_object_radio() {
  var tt = document.getElementsByName('myradio')
  for (var i = 0; i < tt.length; i++) {
    if (tt[i].checked) {
      g_object_name_type = tt[i].value
      break
    }
  }
}
function get_signature() {
  // 可以判断当前expire是否超过了当前时间， 如果超过了当前时间， 就重新取一下，3s 作为缓冲。
  now = Date.parse(new Date()) / 1000
  if (expire < now + 3) {
    const body = send_request()
    // eslint-disable-next-line no-eval
    var obj = eval('(' + body + ')')
    host = obj['host']
    policyBase64 = obj['policy']
    accessid = obj['accessid']
    signature = obj['signature']
    expire = parseInt(obj['expire'])
    callbackbody = obj['callback']
    key = obj['dir']
    return true
  }
  return false
}

function random_string(len) {
  len = len || 32
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  var maxPos = chars.length
  var pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

function get_suffix(filename) {
  const pos = filename.lastIndexOf('.')
  let suffix = ''
  if (pos !== -1) {
    suffix = filename.substring(pos)
  }
  return suffix
}

function calculate_object_name(filename) {
  if (g_object_name_type === 'local_name') {
    g_object_name += '${filename}'
  } else if (g_object_name_type === 'random_name') {
    const suffix = get_suffix(filename)
    g_object_name = key + random_string(10) + suffix
  }
  return ''
}

function get_uploaded_object_name(filename) {
  if (g_object_name_type === 'local_name') {
    let tmp_name = g_object_name
    tmp_name = tmp_name.replace('${filename}', filename)
    return tmp_name
  } else if (g_object_name_type === 'random_name') {
    return g_object_name
  }
}

function set_upload_param(up, filename, ret) {
  if (ret === false) {
    ret = get_signature()
  }
  g_object_name = key
  if (filename !== '') {
    const suffix = get_suffix(filename)
    console.log(suffix)
    calculate_object_name(filename)
  }
  const new_multipart_params = {
    key: g_object_name,
    policy: policyBase64,
    OSSAccessKeyId: accessid,
    success_action_status: '200', // 让服务端返回200,不然，默认会返回204
    callback: callbackbody,
    signature: signature
  }

  up.setOption({
    url: host,
    multipart_params: new_multipart_params
  })

  up.start()
}

export default {
  model: {
    prop: 'msg',
    event: 'ee'
  },
  props: {
    msg: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      url: this.msg || ''
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.initPlUploader()
  },
  methods: {
    /**
     * 初始化上传插件
     */
    initPlUploader() {
      var uploader = new plupload.Uploader({
        runtimes: 'html5,flash,silverlight,html4',
        browse_button: 'selectfiles',
        // multi_selection: false,
        // container: document.getElementById('container'),
        // flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
        // silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',
        url: 'http://oss.aliyuncs.com',

        filters: {
          mime_types: [
            // 只允许上传图片和zip文件
            { title: 'Image files', extensions: 'jpg,gif,png,bmp' },
            { title: 'Zip files', extensions: 'zip,rar,ipa' }
          ],
          max_file_size: '20mb', // 最大只能上传10mb的文件
          prevent_duplicates: true // 不允许选取重复文件
        },

        init: {
          PostInit: function() {
            document.getElementById('ossfile').innerHTML = ''
            document.getElementById('postfiles').onclick = function() {
              set_upload_param(uploader, '', false)
              return false
            }
          },

          FilesAdded: function(up, files) {
            plupload.each(files, function(file) {
              document.getElementById('ossfile').innerHTML +=
                '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')<b></b>' +
                '<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>' +
                '</div>'
            })
          },

          BeforeUpload: function(up, file) {
            check_object_radio()
            set_upload_param(up, file.name, true)
          },

          UploadProgress: function(up, file) {
            var d = document.getElementById(file.id)
            d.getElementsByTagName('b')[0].innerHTML =
              '<span>' + file.percent + '%</span>'
            var prog = d.getElementsByTagName('div')[0]
            var progBar = prog.getElementsByTagName('div')[0]
            progBar.style.width = 2 * file.percent + 'px'
            progBar.setAttribute('aria-valuenow', file.percent)
          },

          FileUploaded: function(up, file, info) {
            if (info.status === 200) {
              document
                .getElementById(file.id)
                .getElementsByTagName('b')[0].innerHTML =
                'upload to oss success, object name:' +
                get_uploaded_object_name(file.name) +
                ' 回调服务器返回的内容是:' +
                info.response
            } else if (info.status === 203) {
              document
                .getElementById(file.id)
                .getElementsByTagName('b')[0].innerHTML =
                '上传到OSS成功，但是oss访问用户设置的上传回调服务器失败，失败原因是:' +
                info.response
            } else {
              document
                .getElementById(file.id)
                .getElementsByTagName('b')[0].innerHTML = info.response
            }
          },

          Error: function(up, err) {
            if (err.code === -600) {
              document
                .getElementById('console')
                .appendChild(
                  document.createTextNode(
                    '\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小'
                  )
                )
            } else if (err.code === -601) {
              document
                .getElementById('console')
                .appendChild(
                  document.createTextNode(
                    '\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型'
                  )
                )
            } else if (err.code === -602) {
              document
                .getElementById('console')
                .appendChild(
                  document.createTextNode('\n这个文件已经上传过一遍了')
                )
            } else {
              document
                .getElementById('console')
                .appendChild(
                  document.createTextNode('\nError xml:' + err.response)
                )
            }
          }
        }
      })
      uploader.init()
    }
  }
}
</script>
<style scoped>
.btn {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
a.btn:hover {
  background-color: #3366b7;
}
.progress {
  margin-top: 2px;
  width: 200px;
  height: 14px;
  margin-bottom: 10px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.progress-bar {
  background-color: rgb(92, 184, 92);
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.14902) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.14902) 50%,
    rgba(255, 255, 255, 0.14902) 75%,
    transparent 75%,
    transparent
  );
  background-size: 40px 40px;
  box-shadow: rgba(0, 0, 0, 0.14902) 0px -1px 0px 0px inset;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: block;
  float: left;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  transition-delay: 0s;
  transition-duration: 0.6s;
  transition-property: width;
  transition-timing-function: ease;
  width: 266.188px;
}
</style>
