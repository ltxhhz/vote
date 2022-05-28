<template>
  <div class="paper container container-md">
    <div class="row">
      <div class="col-fill fs-5 ">投票编辑</div>
      <div class="col-1 text-center">
        <button class="btn-secondary p-0" style="width: 32px;height:32px;">
          <svg t="1652500372645" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="1910" width="16" height="16">
            <path
              d="M223.962372 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S276.942718 607.897867 223.962372 607.897867z"
              p-id="1911" fill="#0057ab"></path>
            <path
              d="M511.913993 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S564.894339 607.897867 511.913993 607.897867z"
              p-id="1912" fill="#0057ab"></path>
            <path
              d="M800.037628 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S852.84596 607.897867 800.037628 607.897867z"
              p-id="1913" fill="#0057ab"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">{{ voteData.title }}</div>
    </div>
    <div class="row">
      <div class="col-12 text-center text-muted e-sub">
        <div class="d-inline-flex mr-2">
          <svg t="1652502999671" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2975" width="16" height="16">
            <path
              d="M928.842245 512.091074c0-5.006014-0.846274-9.193383-1.086751-9.691733-0.182149-2.480494-1.028423-7.001461-1.815345-9.374508-0.210801-0.590448-0.484024-1.209548-0.724501-1.799996-0.424672-1.360997-0.876973-2.691295-1.390673-3.749394-76.871785-168.137395-242.376213-281.144168-411.782507-281.144168-169.375595 0-334.865697 112.902396-411.388535 280.130072-0.921999 1.815345-1.572822 3.553942-1.981121 5.066389-0.181125 0.49835-0.39295 0.967024-0.558725 1.406023-1.512447 4.430916-1.542122 7.514137-1.421372 6.712889-0.710175 3.251044-1.360997 9.722432-1.360997 9.722432-0.181125 1.949398-0.181125 3.50687 0.030699 5.442966 0 0 0.649799 5.65479 0.968048 6.80294 0.090051 1.602498 0.483001 3.931542 0.951675 6.048763l-0.030699 0c0.408299 1.814322 0.968048 3.568269 1.738597 5.291516 0.393973 1.330298 0.862647 2.570545 1.270946 3.507894 76.976162 168.166047 242.436588 281.20352 411.781484 281.20352 169.436994 0 334.941422-112.945375 410.936233-279.328823 1.177825-2.177596 1.935072-4.233418 2.448772-6.018064 0.2415-0.543376 0.454348-1.027399 0.604774-1.511423 1.331321-3.872191 1.602498-7.227612 1.481747-7.227612l-0.028653 0.029676C928.027693 520.921183 928.842245 516.89959 928.842245 512.091074zM872.717993 514.146896c-0.029676 0.121773-0.091074 0.272199-0.151449 0.393973-0.090051 0.36225-0.240477 0.785899-0.332575 1.209548-68.403926 147.420561-212.830293 246.337431-360.191502 246.337431-146.997935 0-291.168476-98.642624-360.252901-246.578931-0.166799-0.5137-0.287549-0.998747-0.468674-1.481747-0.030699-0.484024-0.12075-0.876973-0.150426-1.150196-0.060375-0.300852-0.12075-0.724501-0.166799-1.088798l0-0.3776c0.166799-0.620124 0.286526-1.239224 0.347924-1.919722 0.12075-0.36225 0.211824-0.710175 0.347924-1.103124C220.132094 360.89042 364.680235 261.928524 512.041444 261.928524c147.420561 0 291.940049 99.051947 360.161826 246.322082 0.060375 0.287549 0.121773 0.530073 0.212848 0.726547 0.060375 0.2415 0.119727 0.484024 0.240477 0.740874 0.151449 1.104147 0.272199 2.192945 0.423649 2.736321C872.899118 513.028423 872.809067 513.572822 872.717993 514.146896z"
              p-id="2976" fill="#41403e"></path>
            <path
              d="M512.041444 373.060601c-76.598562 0-138.954749 62.325487-138.954749 138.939399 0 76.598562 62.356187 138.954749 138.954749 138.954749 76.598562 0 138.954749-62.356187 138.954749-138.954749C650.996193 435.386088 588.640006 373.060601 512.041444 373.060601zM512.041444 595.372849c-45.935192 0-83.371826-37.406958-83.371826-83.371826 0-45.950542 37.436634-83.356476 83.371826-83.356476 45.964868 0 83.373873 37.406958 83.373873 83.356476C595.414293 557.965891 558.006312 595.372849 512.041444 595.372849z"
              p-id="2977" fill="#41403e"></path>
          </svg>
          <span class="mx-1">0</span>
          查看
        </div>
        <div class="d-inline-flex align-items-center">
          <svg t="1652503478711" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4142" width="16" height="16">
            <path
              d="M691.2 928.2V543.1c0-32.7 26.5-59.3 59.2-59.3h118.5c32.7 0 59.3 26.5 59.3 59.2V928.2h-237z m192.6-385.1c0-8.2-6.6-14.8-14.8-14.8H750.5c-8.2 0-14.8 6.6-14.9 14.7v340.8h148.2V543.1zM395 157.8c-0.1-32.6 26.3-59.2 58.9-59.3h118.8c32.6 0 59.1 26.5 59.1 59.1v770.6H395V157.8z m44.4 725.9h148V157.9c0-8.1-6.5-14.7-14.7-14.8H454.1c-8.1 0.1-14.7 6.7-14.7 14.8v725.8zM98.6 394.9c0-32.7 26.5-59.2 59.2-59.3h118.5c32.7-0.1 59.3 26.4 59.3 59.1v533.5h-237V394.9z m44.5 488.8h148.2V394.9c0-8.2-6.7-14.8-14.8-14.8H158c-8.2 0-14.8 6.6-14.9 14.7v488.9z"
              p-id="4143" fill="#41403e"></path>
          </svg>
          <span class="mx-1">0</span>
          参与
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12 sm-4 mb-2 row justify-content-center">
        <span class="mr-1 text-nowrap col-12 sm-6">开始时间</span>
        <div class=" col-12">
          <code class="text-nowrap">{{ dayjs(voteData.start).format('YYYY-MM-DD HH:mm:ss') }}</code>
        </div>
      </div>
      <div class="col-12 sm-4 mb-2 row justify-content-center">
        <span class="mr-1 text-nowrap col-12 sm-6">结束时间</span>
        <div class="col-12">
          <code class="text-nowrap ">{{ dayjs(voteData.end).format('YYYY-MM-DD HH:mm:ss') }}</code>
        </div>
      </div>
      <div class="col-12 sm-4 mb-2 row justify-content-center">
        <span class="mr-1 text-nowrap col-12 sm-6">投票规则</span>
        <div class="col-12">
          <code class="text-nowrap ">{{ voteData.single ? '单选' : '多选' }}</code>
        </div>
      </div>
    </div>
  </div>
  <template v-if="level == 0">
    <div class="paper container container-md">
      <div class="row mb-0">
        <div class="e-func col-12 xs-4">
          <label class="paper-btn btn-block btn-primary-outline text-center" for="add-option">添加选项</label>
          <input class="modal-state" id="add-option" type="checkbox">
          <div class="modal">
            <!-- <label class="modal-bg" for="add-option"></label> -->
            <div class="modal-body container container-sm">
              <label class="btn-close" for="add-option">X</label>
              <h4 class="modal-title">添加选项</h4>
              <hr>
              <!-- <div class=""> -->
              <div class="form-group">
                <label for="startTime">选项内容</label>
                <input type="text" class="w-100" id="option-content" placeholder="选项内容(必填)" v-model="option.title">
              </div>
              <div class="form-group d-flex flex-column">
                <label for="option-image">选项图片</label>
                <input ref="inputFile" class="d-none" type="file" name="option-image" id="" accept="image/*" >
                <div v-if="option.imgUrl" class="e-container e-preview position-relative overflow-hidden">
                  <img :src="option.imgUrl" alt="选项图片" :title="option.imgName">
                  <div class="e-tools position-absolute top-0 right-0 bottom-0 left-0 ">
                    <button class="e-btn-close btn-close d-flex justify-content-center align-items-center"
                      @click="removeImage"></button>
                  </div>
                </div>
                <div v-else
                  class="e-img-upload e-container cursor-pointer d-flex flex-column justify-content-center align-items-center align-self-center"
                  :class="{ 'child-borders': dragging }" @click="uploadClick" @dragenter.prevent="uploadDragEnter"
                  @dragleave.prevent="uploadDragLeave" @drop.prevent="uploadDragDrop" @dragover.prevent>
                  <div class="d-flex flex-column justify-content-center align-items-center m-2 w-100 h-100 pe-none"
                    :class="{ 'border-dashed border-thick': dragging }">
                    <div class="" style="font-size: 18px;">拖放到此或点击上传</div>
                    <div class="text-muted" style="font-size: 13px;">最多一张图，大小限制10mb</div>
                  </div>
                </div>
              </div>
              <!-- </div> -->
              <div class="modal-text text-center">{{ tip.data[tip.use] }}</div>
              <div class="d-flex justify-content-center">
                <label for="add-option" class="paper-btn btn-muted mr-3">关闭</label>
                <label for="add-option" class="paper-btn btn-primary" @click="addOption">添加</label>
              </div>
            </div>
          </div>
        </div>
        <div class="e-func col-12 xs-4">
          <label class="paper-btn btn-block btn-secondary-outline text-center" for="vote-config">投票设置</label>
          <input class="modal-state" id="vote-config" type="checkbox">
          <div class="modal">
            <!-- <label class="modal-bg" for="vote-config"></label> -->
            <div class="modal-body container container-sm">
              <label class="btn-close" for="vote-config">X</label>
              <h4 class="modal-title">添加选项</h4>
              <hr>
              <div class="row mt-3">
                <div class="form-group col-12 xs-6 md-4 px-2 d-flex align-items-center justify-content-between">
                  <label for="everyday-vote" class="mb-0">每天可投票</label>
                  <label class="paper-switch-2">
                    <input id="everyday-vote" name="everyday-vote" type="checkbox" v-model="config.everyday" />
                    <span class="paper-switch-slider round"></span>
                  </label>
                </div>
                <div class="form-group col-12 xs-6 md-4 px-2 d-flex align-items-center justify-content-between">
                  <label for="hide-vote-num" class="mb-0">隐藏票数</label>
                  <label class="paper-switch-2">
                    <input id="hide-vote-num" name="hide-vote-num" type="checkbox" v-model="config.hideVoteNum" />
                    <span class="paper-switch-slider round"></span>
                  </label>
                </div>
              </div>
              <div class="modal-text text-center">{{ tip.data[tip.use] }}</div>
              <div class="d-flex justify-content-center">
                <label for="vote-config" class="paper-btn btn-muted mr-3">关闭</label>
                <label for="vote-config" class="paper-btn btn-primary" @click="saveConfig">保存</label>
              </div>
            </div>
          </div>
        </div>
        <div class="e-func col-12 xs-4">
          <label class="paper-btn btn-block btn-success-outline text-center" for="vote-link"
            @click="createLinkImg">投票链接</label>
          <input class="modal-state" id="vote-link" type="checkbox">
          <div class="modal">
            <label class="modal-bg" for="vote-link">X</label>
            <div class="modal-body e-qrcode">
              <label class="btn-close" for="vote-link">X</label>
              <h5 class="modal-title">链接二维码</h5>
              <hr>
              <div class="e-qrcode-container mt-1 d-inline-block">
                <!-- <canvas ref="qr" class="w-100 h-100"></canvas> -->
                <img :src="qrLink" alt="qrcode">
              </div>
              <div class="fs-6 text-center">
                <span ref="copyLink" class="modal-link">复制链接</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="paper container container-md mt-3 d-flex align-items-center">
      <svg t="1652531437925" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="1905" width="32" height="32">
        <path
          d="M512 958.016C266.08 958.016 65.984 757.952 65.984 512 65.984 266.08 266.08 65.984 512 65.984c245.952 0 446.016 200.064 446.016 446.016C958.016 757.952 757.952 958.016 512 958.016zM512 129.984C301.344 129.984 129.984 301.344 129.984 512c0 210.624 171.36 382.016 382.016 382.016 210.624 0 382.016-171.36 382.016-382.016C894.016 301.344 722.624 129.984 512 129.984z"
          p-id="1906"></path>
        <path d="M512 304m-48 0a1.5 1.5 0 1 0 96 0 1.5 1.5 0 1 0-96 0Z" p-id="1907"></path>
        <path
          d="M512 768c-17.664 0-32-14.304-32-32l0-288c0-17.664 14.336-32 32-32s32 14.336 32 32l0 288C544 753.696 529.664 768 512 768z"
          p-id="1908"></path>
      </svg>
      <span>在上方工具栏添加选项</span>
    </div>
  </template>
</template>
<script setup>
import { getCurrentInstance, onMounted, reactive, ref, watch } from 'vue';
import QRCode from 'qrcode';
import ClipboardJS from 'clipboard';
import superagent from 'superagent'
import dayjs from 'dayjs';

import utils from '../utils';

const { proxy } = getCurrentInstance()
const dragging = ref(false),
  tip = reactive({
    use: 'default',
    data: {
      default: '点击上方或拖动图片到上方',
      error: '只接受10mb以内的图片文件',
      success: '选择图片成功'
    }
  }),
  config = reactive({
    everyday: false,
    hideVoteNum: false
  }),
  qrLink = ref(''),
  voteData = reactive({
    title: 'title',
    start: +dayjs(),
    end: +dayjs().add(1, 'day'),
    single: true
  }),
  level = ref(2),
  option=reactive({
    title:'',
    imgUrl:'',
    imgName:''
  })
const uuid = proxy.$route.params.uuid
let cjs

onMounted(() => {
  console.log(utils.config);
  initClipboard()
})
function init(uuid1 = uuid) {
  if (uuid1) {
    superagent.post('/api/content')
      .send({
        skey: utils.config.skey,
        account: utils.config.account,
        data: uuid1
      }).then(e => {
        console.log(e.body);
        if (e.body.status == 1) {
          if (!e.body.data) {
            proxy.$router.addRoute({
              name: '404'
            })
          } else {
            voteData.title = e.body.data.title
            voteData.start = e.body.data.start
            voteData.end = e.body.data.end
            voteData.single = e.body.data.single
            level.value = utils.config.account ? (e.body.data.account == utils.config.account) ? 0 : 1 : 2
          }
        } else {
          proxy.$toast("获取投票信息失败")
        }
      }).catch(r => {
        proxy.$toast("获取投票信息失败")
      })
  } else {
    proxy.$router.addRoute({
      name: '404'
    })
  }
  initClipboard()
}
function initClipboard() {
  if (level.value == 0 && !cjs) {
    cjs = new ClipboardJS(proxy.$refs.copyLink, {
      text() {
        console.log('copied');
        proxy.$toast('已复制')
        return location.href
      }
    }).on('error', function (e) {
      console.error('复制失败', e);
      proxy.$toast('复制失败，请手动尝试')
    })
  }
}
init()
watch(() => utils.config.skey, (n, o) => {
  console.log('登录了', n, o);
  init()
})

function uploadClick(e) {
  proxy.$refs.inputFile.click()
}
function uploadDragEnter(e) {
  dragging.value = true
  console.log(1);
}
function uploadDragLeave(e) {
  dragging.value = false
  console.log(2);
}
function uploadDragDrop(e) {
  dragging.value = false
  let { files: [file], types: [type], items: [item] } = e.dataTransfer
  if (file && item.kind == 'file' && /^image\/.+$/.test(item.type) && file.size / 1024 / 1024 < 10) {
    console.log('yes', file);
    option.imgUrl.value = URL.createObjectURL(file)
    option.imgName.value = file.name
    tip.use = 'success'
  } else {
    console.log('只接受图片，且大小不超过10mb');
    tip.use = 'error'
  }
  console.log(e.dataTransfer.files.length, e.dataTransfer.types, e.dataTransfer.items[0]);
}
function removeImage(e) {
  option.imgUrl.value = option.imgName.value = ''
  tip.use = 'default'
}
function addOption(e) {
  console.log('save');
}
function saveConfig(e) {
  console.log('save');
}
function createLinkImg(e) {
  qrLink.value = ''
  QRCode.toDataURL(location.href).then(res => {
    qrLink.value = res
  }).catch(err => {
    proxy.$toast('生成二维码失败')
  })
}
</script>

<style lang="less" scoped>
.e-sub {
  font-size: 15px;
}

@media only screen and (min-width: 480px) {
  .e-func {
    .btn-block {
      max-width: 200px;
    }

    display: flex;
    justify-content: center;
  }
}

svg path {
  fill: var(--primary);
}

.e-img-upload {
  width: 10rem;
  height: 6rem;
  transition: all .3s;

  &:hover {
    background-color: var(--primary-light);
  }

  >div {
    box-sizing: border-box;
  }
}

.e-preview {
  max-width: 15rem;

  .e-btn-close {
    &::before {
      content: 'x';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 5px;
    }
  }

  .e-tools {
    display: none;
  }

  &:hover>.e-tools {
    display: block;
    background-color: rgba(0, 0, 0, 0.2);
  }
}

.e-container {
  color: #41403e;
  color: var(--primary);
  border-color: #41403e;
  border-color: var(--primary);
  background: transparent;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-style: solid;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-width: 2px;
  display: block;
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
}

.modal-body.e-qrcode {
  width: auto !important;
}

.e-qrcode-container {
  max-width: 13rem;
  max-height: 13rem;
}
</style>