<template>
  <div>
    <h1>here we go App...</h1>
    <h3>{{ count }}</h3>
    <Btn @click.native='update' />
    <Btn  />
  </div>
  
</template>

<!-- 
1.在组件上添加自定义绑定事件 @自定义事件名="触发的回调"
当然你还需要在子组件里面触发这个自定义事件 所以需要在子组件种绑定某个事件触发这个回调
回调里需要写this.$emit('绑定的事件名',可以传多个参数)来触发 用...arg接收

2.或者可以给子组件设置一个ref标识符
在挂载的时候给他绑定某个事件 this.$on('自定义事件名',触发的回调)
卸载的时候也要清空
具体触发同1的后面操作一样

3.或者可以绑定click.native 来触发原生DOM事件 相当于给你所有的子组件页面都绑定了事件 因为是原生所以拿得到事件对象
    
   -->
      <!-- 
        1. 绑定事件
          <Child @update="update"/>

          <Child ref="child" />
          mounted() {
            this.$refs.child.$on("update", this.update);
          },
          beforeDestroy() {
            this.$refs.child.$off("update", this.update);
          },
        2. 触发事件
          this.$emit('update')

        3. 自定义事件API
          $on(事件名, 事件回调)      绑定持久事件
          $once(事件名, 事件回调)    绑定一次性事件
          $emit(事件名, ...事件参数) 触发事件
          $off(事件名, 事件回调)     解绑事件

        4. 作用：用来子向父通信

      ref 获取真实DOM元素或组件实例对象    
    -->
    <!-- <Child @update="update" @click.native="update" /> -->
<script>
import Btn from "./Btn.vue";
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  components: {
    Btn,
  },
  methods: {
    update(...arg) {
      this.count++;
      console.log(arg);
    },
  },
  // mounted() {
  //   this.$refs.btn.$on("update", this.update);
  // },
  // beforeDistroy() {
  //   this.$refs.btn.$off("update", this.update);
  // },
};
</script>

<style>
</style>