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
      data(){
        return {
          items:[
            {
              name: '投资机构全称',
              message: ''
            },
            {
              name: '下属基金名称',
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
