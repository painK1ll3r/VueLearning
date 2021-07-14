<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对你学习情况的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <AddComment :addComment="addComment"></AddComment>
      <CommentList :comments='comments' :deleteComment="deleteComment"></CommentList>
    </div>
  </div>
</template>

<script>
import AddComment from "./views/AddComment";
import CommentList from "./views/CommentList";
export default {
  name: "App",
  data() {
    return {
      comments: [
        {id:1,username:'华子哥',content:'我爱小菜鸡s'},
        {id:2,username:'海静哥',content:'我爱搞颜色c'},
      ],
    };
  },
  methods:{
    addComment(username,content){
      this.comments.unshift({id:+(new Date()),username,content})
    },
    deleteComment(id){
      this.comments = this.comments.filter(comment=>comment.id!==id)
    }
  },
  components: {
    AddComment,
    CommentList,
  },
};
</script>

<style lang="less">
.reply {
  margin-top: 0px;
}
</style>