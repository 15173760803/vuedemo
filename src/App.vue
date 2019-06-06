<template>
  <div id="app">
      <Div></Div>
    <router-view/>
  </div>
</template>
<script>
import Div from './components/div'
export default {
  name: 'app',
  components:{
    Div
  }
}
</script>

<style>
*{
  margin: 0px;
  padding:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>


