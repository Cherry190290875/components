<template>
    <div>
      <head-top></head-top>
      <input-list :items="items"></input-list>
    </div>
</template>

<script>
  import headTop from '../components/head/header.vue'
  import inputList from '../components/input.vue'
  export default {
    data() {
      return {
        items:[
          {
            name:"一级行业名称",
            message: ''
          },
          {
            name:"细分行业名称",
            message: ''
          }
        ]
      }
    },
    components: {
      headTop,
      inputList
    }
  }
</script>

<style>

</style>
