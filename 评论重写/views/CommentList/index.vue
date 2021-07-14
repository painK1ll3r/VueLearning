<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none" v-show="!comments.length">
      暂无评论，点击左侧添加评论！！！
    </h2>
    <ul class="list-group">
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </ul>
  </div>
</template>

<script>
import CommentItem from "./CommentItem";
export default {
  name: "CommentList",
  data() {
    return {
      comments: [
        { id: 1, username: "华子哥", content: "我爱吃炸鸡翅" },
        { id: 2, username: "静子哥", content: "我爱吃重庆酸辣抄手" },
        { id: 3, username: "键子哥", content: "我爱吃熊の力量" },
      ],
    };
  },
  mounted() {
    this.$bus.$on("addComment", this.addComment);
    this.$bus.$on("deleteComment", this.deleteComment);
  },
  beforeDestroy() {
    this.$bus.$off("addComment", this.addComment);
    this.$bus.$off("deleteComment", this.deleteComment);
  },
  components: {
    CommentItem,
  },
  methods: {
    addComment(username, content) {
      console.log(2);
      if (!username || !content) {
        alert("用户名或者内容不能为空");
        return;
      }
      this.comments.unshift({ id: +new Date(), username, content });
    },
    deleteComment(id) {
      if (confirm("请问您要删除平路吗")) {
        this.comments = this.comments.filter((comment) => comment.id !== id);
      }
    },
  },
};
</script>

<style lang="less">
</style>