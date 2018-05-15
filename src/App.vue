<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
.activeLine {
  color:$colorHover;
  border-bottom: 10px solid $colorHover;
}
ul {
  list-style: none;
  display: flex;

  height: 150px;
  li {
    flex: 1;
    width: 100%;
    height: 150px;
    border-bottom:10px solid $colorLine;
  &:hover {
     color:$colorHover;
     border-bottom: 10px solid $colorHover;
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
    &:focus {
      outline: none;
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
