<template>
  <div>
    <el-button @click="isShow=true">你好</el-button>

    <el-dialog
      title="提示"
      :visible.sync="isShow"
      width="30%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="isShow = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

      <el-popover
    placement="top-start"
    title="TIPS:"
    width="200"
    trigger="hover"
    content="这里是提肛小助手,尝试提肛50次吧">
    <el-button slot="reference">移入查看详情</el-button>
  </el-popover>
  </div>
</template>

<script>
export default {
  name:"App",
  data(){
    return {
      isShow:false
    }
  },
  methods:{

  }
};
</script>

<style>
</style>