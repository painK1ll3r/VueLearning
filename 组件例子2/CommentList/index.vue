<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none" v-show="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentItem v-for='comment in comments' :key='comment.id' :comment="comment" :deleteComment="deleteComment"/>
    </ul>
  </div>
</template>

<script>
import CommentItem from './CommentItem'
export default {
  name:"CommentList",
  props:{
    comments:Array,
    deleteComment:Function
  },
  components:{
    CommentItem,
  }
};
</script>

<style lang="less" scoped>
</style>