<template>
  <div class="paper create-container row">
    <h4>创建投票</h4>
    <div class="form-group col sm-12">
      <label for="voteTitle">投票标题</label>
      <input class="w-100" type="text" placeholder="投票标题(必填)" id="voteTitle">
    </div>
    <div class="form-group col sm-6">
      <label for="startTime">开始时间</label><input type="datetime-local" class="w-100" id="startTime">
    </div>
    <div class="form-group col sm-6">
      <label for="endTime">结束时间</label><input type="datetime-local" class="w-100" id="endTime">
    </div>
    <div class="form-group col sm-4">
      <label for="single" class="paper-switch-tile">
        <input id="single" name="single" type="checkbox" />
        <div class="paper-switch-tile-card border">
          <div class="paper-switch-tile-card-front border">单选</div>
          <div class="paper-switch-tile-card-back border background-primary">多选</div>
        </div>
      </label>
    </div>
    <div class="form-group col sm-4">
      
    </div>
  </div>
</template>
<script setup>

</script>

<style lang="less">
.create-container {
  width: 80vw;

}
</style>