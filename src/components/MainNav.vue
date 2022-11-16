<template>
  <nav class=" lg:block sm:flex sm:py-6 lg:py-0 sm:justify-between sm:items-center">
    <div class="logo sm:block lg:hidden cursor-pointer">
      <img src="../public/home/Logo.svg" alt="logo image">
    </div>
    <div class="nav flex justify-between items-center py-6">

    <div class="flex justify-between items-center ">
      <div class="logo cursor-pointer">
        <img src="../public/home/Logo.svg" alt="logo image">
      </div>
      <ul class="pl-32">
        <li class="pr-10 inline-block">
          <router-link to="/" class="no-underline text-white font-medium"
            >Home</router-link
          >
        </li>
        <li class="pr-10 inline-block">
          <router-link to="/" class="no-underline text-white font-medium"
            >About</router-link
          >
        </li>
        <li class="inline-block">
          <router-link to="/" class="no-underline text-white font-medium"
            >Teachers</router-link
          >
        </li>
      </ul>
    </div>
    <div class="flex gap-8 items-center">
        <div class=" border-r border-solid global">
            <img src="../public/home/global.svg" alt="">
        </div>
        <router-link to="/" class="no-underline text-white font-medium">Register</router-link>
        <router-link class="btn-bg rounded-full no-underline text-white font-medium py-4 px-8" to="/">Get the app</router-link>
    </div>
  </div>

    <div class="burger sm:block lg:hidden cursor-pointer w-10 h-6" @click="openMenu($event)">
      <span class="w-10 h-1 bg-white mb-1.5 block"></span>
      <span class="w-10 h-1 bg-white mb-1.5 block"></span>
      <span class="w-10 h-1 bg-white block"></span>
    </div>
  </nav>
</template>

<script>
export default {
  methods:{
    openMenu(event){
      event.target.classList.toggle("active")
    }
  }
};
</script>

<style lang="scss">
.global{
  padding-right: 34px;
  border-color: #3543AF;
}
.logo{
  width: 64px;
  height: 44px;
  img{
    min-width: 64px;
  }
}
nav{

  .nav{
    @media (max-width:1024px) {
      display: none !important;
    }
  }
  .burger{
    &.active{
      span{
        transition: all .3s;
        &:nth-child(1){
          transform:translateY(5px) rotate(-45deg);
        }
        &:nth-child(2){
          display: none;
        }
        &:nth-child(3){
          transform:translateY(-5px) rotate(45deg);
        }
      }
    }
  }
}
</style>