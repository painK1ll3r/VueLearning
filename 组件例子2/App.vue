<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <AddComment :addComment="addComment"/>
      <CommentList :comments='comments' :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
import CommentList from './CommentList'
import AddComment from './AddComment'
export default {
  name:'App',
  data(){
    return {
      comments:[
        {id:1,username:'华子哥',content:"我爱吃炸虾条"},
        {id:2,username:'静子哥',content:"我爱吃玉米鸡翅"},
        {id:3,username:'灿子哥',content:"我爱吃酱香烤翅"},
      ]
    }
  },
  components:{
    AddComment,CommentList
  },
  methods:{
    addComment(username,content){
      this.comments.push({id:+(new Date()),username,content})
    },
    deleteComment(id){
      this.comments = this.comments.filter(comment=>comment.id!=id)
    },
  }
}
</script>

<style lang="less" scoped>

</style>