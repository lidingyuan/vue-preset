<template>
  <div class="layout-container">
    layout-container
    <Test v-model:propName="dfsf"></Test>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      dfsf
    }
  }
}
</script>

<style lang='scss' scoped>
.layout-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #F3F4F5;
  .layout-body{
    height: 0;
    flex-grow: 1;
    display: flex;
    .layout-content{
      width: 0;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .layout-page{
        width: 100%;
        height: 0;
        flex-grow: 1;
      }
    }
  }
}
</style>
