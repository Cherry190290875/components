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
          items: [
            {
              name: '下属项目名称',
              message: ''
            },
            {
              name: '公司全称',
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
