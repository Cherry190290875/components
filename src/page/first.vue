<template>
    <div class="index">
        <head-top ></head-top>
        <section>
          <div class="work">
            <span>任务类型</span>
            <p>
              <input type="radio"  value="创业者" name="demo" checked v-model="picked" id="one"><label for="one">创业者</label>
              <input type="radio" value="投资人" name="demo" v-model="picked" id="two"><label for="two">投资人</label>
            </p>
          </div>
          <input-list :items="items"></input-list>
        </section>
    </div>
</template>

<script>
    import headTop from '../components/head/header.vue'
    import inputList from '../components/input.vue'
    export default {
      data (){
        return {
          picked: '创业者',
          items:[
            {
              name:"人物名称",
              message: ''
            },
            {
              name:"所属投资机构名称",
              message: ''
            },
            {
              name:"职位",
              message: '',
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

<style lang="scss">
  .work {
    display: flex;
    height: 200px;
    line-height: 200px;
    span {
      text-align: right;
      margin-right: 100px;
      width: 30%;
    }
    p {
      flex: auto;
      text-align: left;
      input {
        margin-left: 100px;
      }
    }
  }
</style>
