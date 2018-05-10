<template>
    <div class="index">
        <header>
          <ul>
            <li :class="{activeLine:isLine}"><a href="" :class="{active:isActive}">第一页</a></li>
            <li><a href="">第二页</a></li>
            <li><a href="">第三页</a></li>
            <li><a href="">第四页</a></li>
          </ul>
        </header>
        <section>
          <div class="work">
            <span>任务类型</span>
            <p>
              <input type="radio"  value="创业者" name="demo" checked v-model="picked" id="one"><label for="one">创业者</label>
              <input type="radio" value="投资人" name="demo" v-model="picked" id="two"><label for="two">投资人</label>
            </p>
          </div>
          <div class="item" v-for="(item ,index) in items">
            <span>{{item.name}}</span>
           <input type="text" v-model="item.message">{{item.message}}
          </div>
          <button type="submit" @click="submit">确定</button>
        </section>
        {{picked}}
    </div>
</template>

<script>
    export default {
      data (){
        return {
          isActive :true,
          isLine :true,
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
      methods: {
        submit:function () {
          for(let i=0;i<this.items.length-1;i++){
              console.log(this.itmes[i].message)
          }
        /* console.log(this.items[0].message)
          console.log(this.items[1].message)
          console.log(this.items[2].message)*/
        }
      }
    }
</script>

<style lang="scss">
  $color:#333;
  $colorHover:#31dca6;
  $colorLine:#ccc;
  * {
    padding:0;
    margin: 0;
  }
  body {
    font-size: 30px;
  }
  .active {
    color:$colorHover;
  }
  .activeLine {
    border-bottom: 10px solid $colorHover;
  }
  ul {
    list-style: none;
    display: flex;
    border-bottom:10px solid $colorLine;
    height: 150px;
    li {
      flex: 1;
      width: 100%;
      height: 150px;
      a {
        text-decoration: none;
        color:$color;
        line-height: 150px;
        &:hover {
          color:$colorHover;
        }
      }
    }
  }
  .item {
    display: flex;
    height: 200px;
    span {
      line-height: 200px;
      text-align: right;
      width: 30%;
    }
    input {
      flex: auto;
      padding:30px;
      margin: 20px;
    }
  }
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
  button {
    background: $colorHover;
    padding:30px;
    border:none;
    margin: 10px;
    margin-top: 100px;
    width: 95%;
    text-align: center;
    color:#FFF;
    font-size: 80px;
  }
</style>
