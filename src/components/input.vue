<template>
    <div class="list">
      <div class="item" v-for="(item ,index) in items">
        <span>{{item.name}}</span>
        <input type="text" v-model="item.message">
      </div>
      <button type="submit" @click="submit">确定</button>
    </div>
</template>

<script>
    export default {
      props:{
          items: {
            type: Array,
            required: true
          }
      },
      data (){
        return {
        }
      },
      methods: {
        submit:function () {
          for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i].message)
          }
        }
      },
    }
</script>

<style lang="scss">
  .list {
    margin-top: 50px;
  }
</style>
