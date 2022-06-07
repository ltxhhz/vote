<template>
  <div class="paper container container-md">
    <div class="row">
      <div class="col-fill fs-5 ">投票编辑</div>
      <div class="col-1 text-center">
        <label v-if="level == 0" class="paper-btn btn-secondary p-0" style="width: 32px;height:32px;" for="edit-modal"
          @click="voteEditInit">
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
        </label>
        <teleport to="body">
          <input class="modal-state" id="edit-modal" type="checkbox">
          <div class="modal">
            <div class="modal-body">
              <label class="btn-close" for="edit-modal">X</label>
              <!-- <h4 class="modal-title">Modal Title</h4> -->
              <div class="row">
                <div class="form-group col-12">
                  <label for="voteTitle">投票标题</label>
                  <input class="w-100" type="text" placeholder="投票标题(必填)" id="voteTitle" v-model="voteDataEdit.title">
                </div>
              </div>
              <div class="row">
                <div class="form-group col-12 md-6">
                  <label for="startTime">开始时间</label>
                  <input type="datetime-local" class="w-100" id="startTime" v-model="voteDataEdit.start">
                </div>
                <div class="form-group col-12 md-6">
                  <label for="endTime">结束时间</label>
                  <input type="datetime-local" class="w-100" id="endTime" v-model="voteDataEdit.end">
                </div>
              </div>
              <div class="row">
                <div class="form-group col-4 mb-0 pb-0" style="height: 80px">
                  <label for="single" class="paper-switch-tile">
                    <input id="single" name="single" type="checkbox" v-model="voteDataEdit.single"
                      @change="singleChange" />
                    <div class="paper-switch-tile-card border">
                      <div class="paper-switch-tile-card-front border background-primary">多选</div>
                      <div class="paper-switch-tile-card-back border">单选</div>
                    </div>
                  </label>
                </div>
                <div class="form-group col-4 mb-0 pb-0">
                  <label for="min">最少选</label>
                  <input class="input-block" placeholder="无限制" type="number" id="min" :disabled="voteDataEdit.single"
                    v-model="voteDataEdit.min">
                </div>
                <div class="form-group col-4 mb-0 pb-0">
                  <label for="max">最多选</label>
                  <input class="input-block" placeholder="无限制" type="number" id="max" :disabled="voteDataEdit.single"
                    v-model="voteDataEdit.max">
                </div>
              </div>
              <div class="row">
                <div class="form-group col-12 ">
                  <div class="form-group mb-0">
                    <label for="description">投票说明</label>
                    <textarea class="w-100 " id="description" placeholder="投票说明(可空)" v-model="voteData.description"
                      style="resize:vertical;min-height: 100px;"></textarea>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <label for="edit-modal" class="paper-btn">关闭</label>
                <button @click="voteEditSave">保存</button>
                <button class="btn-danger-outline" @click="deleteVote">删除投票</button>
              </div>
            </div>
          </div>
        </teleport>
      </div>
    </div>
    <div class="row mb-1">
      <div class="col-12 text-center">{{ voteData.title }}</div>
    </div>
    <div class="row">
      <div class="col-12 text-center text-muted" style="font-size: 15px;">{{ voteData.description }}</div>
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
          <span class="mx-1">{{ visit }}</span>
          查看
        </div>
        <div class="d-inline-flex align-items-center">
          <svg t="1652503478711" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4142" width="16" height="16">
            <path
              d="M691.2 928.2V543.1c0-32.7 26.5-59.3 59.2-59.3h118.5c32.7 0 59.3 26.5 59.3 59.2V928.2h-237z m192.6-385.1c0-8.2-6.6-14.8-14.8-14.8H750.5c-8.2 0-14.8 6.6-14.9 14.7v340.8h148.2V543.1zM395 157.8c-0.1-32.6 26.3-59.2 58.9-59.3h118.8c32.6 0 59.1 26.5 59.1 59.1v770.6H395V157.8z m44.4 725.9h148V157.9c0-8.1-6.5-14.7-14.7-14.8H454.1c-8.1 0.1-14.7 6.7-14.7 14.8v725.8zM98.6 394.9c0-32.7 26.5-59.2 59.2-59.3h118.5c32.7-0.1 59.3 26.4 59.3 59.1v533.5h-237V394.9z m44.5 488.8h148.2V394.9c0-8.2-6.7-14.8-14.8-14.8H158c-8.2 0-14.8 6.6-14.9 14.7v488.9z"
              p-id="4143" fill="#41403e"></path>
          </svg>
          <span class="mx-1">{{ part }}</span>
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
          <code
            class="text-nowrap ">{{ voteData.single ? '单选' : `多选 [${voteData.max && voteData.min ? `${voteData.min} - ${voteData.max}` : '无限制'}]` }}</code>
        </div>
      </div>
    </div>
  </div>
  <template v-if="level < 2">
    <div v-if="level == 0" class="paper container container-md">
      <div class="row mb-0">
        <div class="e-func col-12 xs-4">
          <label class="paper-btn btn-block btn-primary-outline text-center" for="add-option"
            @click="openAddOption">添加选项</label>
          <teleport to="body">
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
                  <input ref="inputFile" class="d-none" type="file" name="option-image" id="" accept="image/*"
                    @change="fileChange">
                  <div v-if="option.imgUrl"
                    class="e-container e-preview position-relative overflow-hidden d-flex flex-column justify-content-center align-items-center align-self-center">
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
                  <button v-if="~editOptionIndex" class="btn-danger-outline" @click="deleteOption">删除选项</button>
                  <label for="add-option" class="paper-btn btn-muted mr-3">关闭</label>
                  <button @click="addOption" :disabled="!option.title">{{ ~editOptionIndex ? '修改'
                      : '添加'
                  }}</button>
                </div>
              </div>
            </div>
          </teleport>
        </div>
        <div class="e-func col-12 xs-4">
          <label class="paper-btn btn-block btn-secondary-outline text-center" for="vote-config"
            @click="voteConfigInit">投票设置</label>
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
                    <input id="everyday-vote" name="everyday-vote" type="checkbox" v-model="voteConfigEdit.everyday" />
                    <span class="paper-switch-slider round"></span>
                  </label>
                </div>
                <div class="form-group col-12 xs-6 md-4 px-2 d-flex align-items-center justify-content-between">
                  <label for="hide-vote-num" class="mb-0">隐藏票数</label>
                  <label class="paper-switch-2">
                    <input id="hide-vote-num" name="hide-vote-num" type="checkbox"
                      v-model="voteConfigEdit.hideResult" />
                    <span class="paper-switch-slider round"></span>
                  </label>
                </div>
              </div>
              <div class="modal-text text-center">{{ tip.data[tip.use] }}</div>
              <div class="d-flex justify-content-center">
                <label for="vote-config" class="paper-btn btn-muted mr-3">关闭</label>
                <button @click="saveConfig">保存</button>
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
    <div class="paper container container-md mt-3">
      <div v-if="!voteData.options || !voteData.options.length" class="d-flex align-items-center">
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
        <span>{{ level == 0 ? '点击上方按钮添加选项' : '暂无选项' }}</span>
      </div>
      <template v-else>
        <div v-for="item, index of voteData.options" :key="item.optionId" class="d-flex align-items-center mb-2">
          <label for="add-option" class="cursor-pointer mr-2 edit-btn" @click.stop="openEditOption(index)">
            <svg t="1654344626923" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="4674" width="32" height="32">
              <path
                d="M779.636364 954.181818h-535.272728A174.778182 174.778182 0 0 1 69.818182 779.636364v-535.272728A174.778182 174.778182 0 0 1 244.363636 69.818182H512a34.909091 34.909091 0 0 1 0 69.818182H244.363636A104.96 104.96 0 0 0 139.636364 244.363636v535.272728a104.96 104.96 0 0 0 104.727272 104.727272h535.272728a104.96 104.96 0 0 0 104.727272-104.727272V512a34.909091 34.909091 0 0 1 69.818182 0v267.636364a174.778182 174.778182 0 0 1-174.545454 174.545454z"
                p-id="4675"></path>
              <path
                d="M808.96 149.178182l32.814545 33.047273 33.047273 32.814545-160.581818 160.581818-192 191.767273-72.378182 6.749091 6.749091-72.378182 191.767273-192 160.581818-160.581818m0-79.36a46.545455 46.545455 0 0 0-33.047273 13.730909l-176.872727 176.872727L395.636364 465.454545a23.272727 23.272727 0 0 0-6.749091 14.196364l-13.032728 144.989091a23.272727 23.272727 0 0 0 23.272728 25.367273h2.094545l144.989091-13.032728a23.272727 23.272727 0 0 0 14.196364-6.74909l203.869091-203.869091 176.872727-176.872728a46.545455 46.545455 0 0 0 0-65.861818l-50.036364-50.734545-49.338182-49.338182A46.545455 46.545455 0 0 0 808.96 69.818182z"
                p-id="4676"></path>
            </svg>
          </label>
          <div @click.stop="optionClick(index)" class="form-group d-flex align-items-center option flex-fill mb-0">
            <label :for="item.optionId" class="paper-radio flex-fill mb-0" :data-check="item.checked"
              :class="{ disabled: haveVoted || (voteData.single ? false : voteData.max && voteData.min && (checkedNum == voteData.max && !item.checked)) }">
              <input v-if="voteData.single" name="option" type="radio" :id="item.optionId" v-model="optionRadio"
                :value="item.optionId" :disabled="haveVoted">
              <input v-else name="option" type="checkbox" :id="item.optionId" v-model="item.checked"
                :value="item.optionId" :disabled="haveVoted">
              <span>{{ item.content }}</span>
            </label>
            <label v-if="item.image" class="option-image cursor-pointer m-0" popover-left="点击放大" for="preview-image"
              @click.stop="preview(item.image)">
              <img :src="item.image" alt="img">
            </label>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <button class="d-flex align-items-center justify-content-around" @click="submit"
            :disabled="submitting || haveVoted || (!checkedNum && !optionRadio)">
            <span class="pr-2">{{ haveVoted ? '已参与' : submitting ? '投票中' : '参与投票' }}</span>
            <svg t="1654176438861" class="icon " :class="{ 'submit-loading': submitting }" viewBox="0 0 1024 1024"
              version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4311" width="32" height="32">
              <path
                d="M161.9 842.2C66.8 747.1 18.8 622.9 22.1 493.5 25.3 369.1 76 249.1 163.4 161.7 250.7 74.3 370 24.3 493.8 22 622 19.6 745.5 68.3 840.6 163.4c197.3 197.3 216.2 536.6 38.6 714.1-178 178.2-520.6 161.4-717.3-35.3z m687.2 5.2c160.1-160.1 142.7-472.5-38.6-653.8-86.9-86.9-199.2-131.1-316-128.9-112.8 2.1-221.5 47.7-301 127.2C114 271.5 67.6 381.1 64.7 494.6 61.7 612.5 105.3 725.3 192 812c180.7 180.7 496.4 196.1 657.1 35.4zM263 741c-143.4-143.4-149.5-360.6-15.2-494.9C381.3 112.7 594 121.6 738.2 265.8c70.5 70.5 115.2 163.9 124.7 258.2 9.9 97.9-18.6 189-83.4 253.8-64.8 64.8-157 94.3-255.7 85.7-96-8.4-190.5-52.2-260.8-122.5z m30.2-30.1C356.4 774 441.5 813.5 527.5 821c86.8 7.6 166.5-17.9 221.9-73.3 55.2-55.2 79.8-133.7 71.1-219.3-8.5-84.5-48.8-168.8-112.4-232.4C580 167.9 394.2 160.1 278 276.3c-117.2 117.2-111.9 307.5 15.2 434.6z m42.1-42.2c-92.3-92.3-98.9-257.2-10.5-345.6 43.4-43.4 103.7-62.6 168-56.4 61 5.9 121.1 34.3 165.7 78.9 91.4 91.5 93.7 226.6 4.5 315.7-43.6 43.6-102 69-162.1 71.4-62 2.5-121.2-19.6-165.6-64z m163.9 21.4c49.4-2 97.7-23 133.6-59 72.3-72.3 70.5-180.4-4.5-255.4-37.6-37.6-88.5-61.6-139.6-66.6-52.1-5-99.8 10.1-133.8 44.1-71.2 71.2-65.6 209.1 10.5 285.3 35.9 35.8 83.5 53.6 133.8 51.6zM566.7 565c-21.2 21.2-47.8 37-74 43.4-30.4 7.4-58.8 2-78.9-18-38.9-38.9-28.7-116.9 16.3-161.9 43.7-43.7 111.9-45.7 151.6-6 19.4 19.4 27.5 44.9 23.6 71.8-3.7 24.6-17.3 49.3-38.6 70.7z m-3.6-77c2-13.7-1.8-25.7-11.5-35.4-22.6-22.6-63.8-21.5-91.3 6-29.8 29.8-36.5 81.3-16.3 101.5 8.4 8.4 21.6 10.9 38.6 6.8 18.2-4.5 38-16.2 53.9-32.1 15.2-15.2 24.3-31.8 26.6-46.8z"
                fill="" p-id="4312"></path>
            </svg>
          </button>
        </div>
      </template>

    </div>
    <teleport to="body">
      <input class="modal-state" id="preview-image" type="checkbox">
      <div class="modal">
        <label class="modal-bg" for="preview-image"></label>
        <div class="modal-body preview-image">
          <img :src="previewImg" alt="preview">
        </div>
      </div>
    </teleport>
  </template>
</template>
<script setup>
import { getCurrentInstance, onMounted, onUnmounted, reactive, ref, toRaw, watch } from 'vue';
import QRCode from 'qrcode';
import ClipboardJS from 'clipboard';
import superagent from 'superagent'
import dayjs from 'dayjs';
import lodash from 'lodash';

import utils from '../utils';
import { onBeforeRouteUpdate } from 'vue-router';

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
  qrLink = ref(''),
  voteData = reactive({
    title: 'title',
    start: +dayjs(),
    end: +dayjs().add(1, 'day'),
    single: true,
    max: 0,
    min: 0,
    options: [],
    description: ''
  }),
  optionRadio = ref(''),
  voteDataEdit = reactive({
    title: voteData.title,
    start: dayjs(voteData.start).format('YYYY-MM-DDTHH:mm'),
    end: dayjs(voteData.end).format('YYYY-MM-DDTHH:mm'),
    single: voteData.single,
    max: voteData.max,
    min: voteData.min,
    description: ''
  }),
  voteConfig = reactive({
    everyday: false,
    hideResult: false
  }),
  voteConfigEdit = reactive({
    everyday: false,
    hideResult: false
  }),
  visit = ref(0),
  part = ref(0),
  //0 查看、编辑、投票 1查看、投票 2查看
  level = ref(2),
  option = reactive({
    title: '',
    img: null,
    imgUrl: '',
    imgName: ''
  }),
  previewImg = ref(''),
  checkedNum = ref(0),
  haveVoted = ref(false),
  submitting = ref(false)
let uuid = proxy.$route.params.uuid
let cjs, editOptionIndex = ref(-1)
onBeforeRouteUpdate((to, from, next) => {
  init(uuid = to.params.uuid)
})
onMounted(() => {
  initClipboard()
})

superagent.post('api/count')
  .send({ uuid })
  .then(() => { }).catch(() => { })

function init(uuid1 = uuid) {
  if (uuid1) {
    superagent.post('api/content')
      .send({
        uuid: uuid1
      }).then(e => {
        if (e.body.status == 1) {
          if (!e.body.data) {
            proxy.$router.push({
              name: '404'
            })
          } else {
            voteData.title = e.body.data.title
            voteData.start = e.body.data.start
            voteData.end = e.body.data.end
            voteData.single = e.body.data.single
            voteData.max = e.body.data.max
            voteData.min = e.body.data.min
            voteData.description = e.body.data.description
            voteConfig.everyday = !!e.body.data.everyday
            voteConfig.hideResult = !!e.body.data.hideResult
            if (e.body.data.single) {
              e.body.data.options && (optionRadio.value = e.body.data.options[0].optionId)
            } else {
              e.body.data.options && e.body.data.options.forEach(e1 => {
                e1.checked = e1.disable = false
              });
            }
            e.body.data.options && (voteData.options = e.body.data.options)

            visit.value = e.body.data.visit
            part.value = e.body.data.part
            level.value = utils.config.account ? (e.body.data.account == utils.config.account) ? 0 : 1 : 2
            haveVoted.value = !!e.body.data.haveVoted
            if (e.body.data.choice) {
              /** @type {Array<string>} */
              let arr = e.body.data.choice.split(',')
              arr.forEach(e => {
                voteData.options[e] && (voteData.options[e].checked = true)
              })
            }
          }
        } else {
          proxy.$toast("获取投票信息失败")
        }
      }).catch(r => {
        proxy.$toast("获取投票信息失败")
      })
  } else {
    proxy.$router.push({
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
  init()
})
const optionClick = lodash.debounce(function (e) {
  countChecked()
}, 100)

function countChecked() {
  let n = 0
  voteData.options.forEach(e => {
    e.checked && n++
  });
  checkedNum.value = n
  return n
}

function uploadClick(e) {
  proxy.$refs.inputFile.click()
}
function uploadDragEnter(e) {
  dragging.value = true
}
function uploadDragLeave(e) {
  dragging.value = false
}
function fileChange(e) {
  const file = proxy.$refs.inputFile.files[0]
  if (file && /^image\/.+$/.test(file.type) && file.size / 1024 / 1024 < 10) {
    option.img = file
    option.imgUrl = URL.createObjectURL(file)
    option.imgName = file.name
    tip.use = 'success'
  } else {
    console.error('只接受图片，且大小不超过10mb');
    tip.use = 'error'
  }
}
function uploadDragDrop(e) {
  dragging.value = false
  let { files: [file], types: [type], items: [item] } = e.dataTransfer
  if (file && item.kind == 'file' && /^image\/.+$/.test(item.type) && file.size / 1024 / 1024 < 10) {
    option.img = file
    option.imgUrl = URL.createObjectURL(file)
    option.imgName = file.name
    tip.use = 'success'
  } else {
    console.error('只接受图片，且大小不超过10mb');
    tip.use = 'error'
  }
}
function resetAddOption() {
  removeImage()
  option.img = null
  option.imgName = option.imgUrl = option.title = ''
}
function removeImage(e) {
  option.imgUrl = option.imgName = ''
  tip.use = 'default'
}
function openAddOption() {
  resetAddOption()
  editOptionIndex.value = -1
}
function addOption(e) {
  const req = superagent.post('api/addOption')
    .field({
      type: ~editOptionIndex.value ? 'edit' : 'add',
      title: option.title,
      uuid,
    })
  if (~editOptionIndex.value) {
    if (option.imgUrl) {
      if (option.imgUrl != voteData.options[editOptionIndex.value].image)
        req.attach('image', option.img, option.imgName)
    } else {
      req.field({
        noImage: true
      })
    }
    req.field({
      optionId: voteData.options[editOptionIndex.value].optionId
    })
  } else {
    if (option.imgUrl) req.attach('image', option.img, option.imgName)
  }
  req.then(e => {
    if (~editOptionIndex.value) {
      if (e.body.status) {
        proxy.$toast('修改成功')
        voteData.options[editOptionIndex.value].content = option.title
        if (e.body.data) voteData.options[editOptionIndex.value].image = e.body.data
        document.getElementById('add-option').checked = false
      } else {
        proxy.$toast('修改失败，请重试')
      }
    } else {
      if (e.body.status) {
        e.body.data.checked = false
        voteData.options.push(e.body.data)
        proxy.$toast('添加成功')
        document.getElementById('add-option').checked = false
      } else {
        proxy.$toast('添加失败，请重试')
      }
    }
  }).catch(err => {
    proxy.$toast(~editOptionIndex.value ? '修改' : '添加' + '错误，请重试')
  })
}
function voteEditInit() {
  voteDataEdit.title = voteData.title
  voteDataEdit.start = dayjs(voteData.start).format('YYYY-MM-DDTHH:mm')
  voteDataEdit.end = dayjs(voteData.end).format('YYYY-MM-DDTHH:mm')
  voteDataEdit.single = voteData.single
  voteDataEdit.max = voteData.max
  voteDataEdit.min = voteData.min
}
function voteEditSave() {
  let data = JSON.parse(JSON.stringify(voteDataEdit))
  data.start = +dayjs(data.start)
  data.end = +dayjs(data.end)
  superagent.post('api/update')
    .send({
      type: 'edit',
      uuid,
      data
    }).then(e => {
      if (e.body.status) {
        proxy.$toast('修改成功')
        for (const k in data) {
          voteData[k] = data[k]
        }
        document.getElementById('edit-modal').checked = false
      } else {
        proxy.$toast('修改失败，请重试')
      }
    }).catch(e => {
      proxy.$toast('修改失败，请重试')
    })
}
function deleteVote() {
  superagent.post('api/delete')
    .send({
      uuid
    }).then(e => {
      if (e.body.status) {
        proxy.$toast('删除成功')
        proxy.$router.push({
          name: 'index'
        })
      } else {
        if (e.body.msg) proxy.$toast(e.body.msg)
        else proxy.$toast('删除失败，请重试')
      }
    }).catch(e => {
      proxy.$toast('删除错误，请重试')
    })
}
function voteConfigInit() {
  for (const key in voteConfig) {
    voteConfigEdit[key] = voteConfig[key]
  }
}
function saveConfig() {
  let data = JSON.parse(JSON.stringify(voteConfigEdit))
  superagent.post('api/update')
    .send({
      type: 'config',
      uuid,
      data: voteConfigEdit
    }).then(e => {
      if (e.body.status) {
        proxy.$toast('修改成功')
        for (const k in data) {
          voteData[k] = data[k]
        }
        document.getElementById('vote-config').checked = false
      } else {
        proxy.$toast('修改失败，请重试')
      }
    }).catch(e => {
      proxy.$toast('修改失败，请重试')
    })
}
function openEditOption(e) {
  resetAddOption()
  editOptionIndex.value = e
  option.imgUrl = voteData.options[e].image
  option.title = voteData.options[e].content
  option.imgName = '选项图片'
}
function deleteOption() {
  superagent.post('api/deleteOption')
    .send({
      uuid,
      optionId: voteData.options[editOptionIndex.value].optionId
    }).then(e => {
      if (e.body.status) {
        proxy.$toast('删除成功')
      } else {
        proxy.$toast('删除失败，请重试')
      }
    }).catch(e => {
      proxy.$toast('删除错误，请重试')
    })
}
function createLinkImg(e) {
  qrLink.value = ''
  QRCode.toDataURL(location.href).then(res => {
    qrLink.value = res
  }).catch(err => {
    proxy.$toast('生成二维码失败')
  })
}
function preview(e) {
  previewImg.value = e
}
function submit() {
  submitting.value = true
  superagent.post('api/vote')
    .send({
      uuid,
      checked: voteData.single ? [optionRadio.value] : voteData.options.filter(item => item.checked).map(item => item.optionId)
    })
    .then(e => {
      if (e.body.status) {
        haveVoted.value = true
        proxy.$toast("投票成功")
      } else {
        if (e.body.msg) {
          proxy.$toast(e.body.msg)
          //过期状态
          //统一管理状态
        } else {
          proxy.$toast("投票失败，请重试")
        }
      }
    }).catch(err => {
      proxy.$toast("投票失败，请重试")
    }).finally(() => {
      submitting.value = false
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


.option {
  height: 2rem;

  .option-image {
    height: 100%;

    img {
      height: 100%;
    }
  }
}

.preview-image {
  max-width: 35rem;
  max-height: 35rem;

  image {
    height: 100%;
  }
}

.submit-loading {
  animation: fadenum 3s infinite;

  @keyframes fadenum {
    100% {
      transform: rotate(360deg);
    }
  }
}

.edit-btn {
  svg {
    path {
      transition: all .3s;
      fill: var(--primary);
    }

    &:hover path {
      fill: var(--secondary);
    }

    &:active path {
      fill: var(--primary-light);
    }
  }
}
</style>