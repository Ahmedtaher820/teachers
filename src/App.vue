<template>
  <mainHeader />
  <router-view/>
  <MainFooter />
</template>
<script>
import mainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
export default{
  components:{
    mainHeader,MainFooter
  }
}
</script>
<style lang="scss">

</style>
