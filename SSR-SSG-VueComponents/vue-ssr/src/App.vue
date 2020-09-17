<template>
 <div id="app">
    <h1>拉勾教育1</h1> 
    <input v-model="msg" />
    {{msg}}
</div>
</template>
<script>
export default {
  name: 'App',
  data(){
      return {
          msg: 'hhh'
      }
  }
}
</script>
<style>
</style>