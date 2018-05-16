<template>
    <div class="head">
      <header>
        <ul>
          <li :class="{activeLine:index == nowIndex}" v-for = "(list,index) in lists" :id ="list.id" @click="listClick(index)">{{list.text}}</li>
        </ul>
      </header>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          activeLine: true,
          lists : [
            {
              text: '第一页',
              id :'first'
            },
            {
              text: '第二页',
              id :'second'
            },
            {
              text: '第三页',
              id :'three'
            },
            {
              text: '第四页',
              id :'four'
            }
          ],
          nowIndex : -1
        }
      },
      methods :{
        listClick(index){
          this.nowIndex = index;
          if (index == 0){
            this.$router.push('/')
          }
          if (index == 1){
            this.$router.push('/second')
          }
          if (index == 2){
            this.$router.push('/three')
          }
          if (index == 3){
            this.$router.push('/four')
          }
        }
      }
    }
</script>

<style lang="scss">

</style>
