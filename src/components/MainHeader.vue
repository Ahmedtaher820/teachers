<template>
  <header>
    <div class="container">
      <MainNav />
      <div class="header grid lg:grid-cols-2 sm:grid-cols-1 text-start pt-14">
        <div class="header-content text-white sm:text-center lg:text-left">
          <div class="mb-10">
            <h1 class="font-bold text-5xl text-white">Our Frendly Teachers</h1>
            <p class="mt-4">
              Be a part on taking sessions with our smart , kind and friendly
              teachers
            </p>
          </div>
          <div class="start">
            <router-link
              class="
                text-white
                font-medium
                py-4
                px-8
                inline-block
                btn-bg
                rounded-full
              "
              to="/"
              title="start now with us"
              >Start Now</router-link
            >
          </div>
          <div class="get-app mt-16">
            <p class="mb-4">Get the App</p>
            <ul class="flex gap-3 sm:justify-center lg:justify-start">
              <li>
                <router-link to="/" title="icon for get app">
                  <img
                    src="../public/home/iphoneStore.svg"
                    class="inline-block"
                    alt="get application in iphone store"
                  />
                </router-link>
              </li>
              <li>
                <router-link to="/" title="icon for get app">
                  <img
                    src="../public/home/appStore.svg"
                    class="inline-block"
                    alt="get application in app store"
                  />
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="sm:hidden lg:block ">
          <div class="header-slider flex justify-end">
            <img
              src="../public/home/slider.png"
              class="inline-block"
              alt="slider image"
            />
          </div>
          <div class="flex mt-6 justify-between items-center carousel-move ml-auto">
            <div class="carousel-dots">
              <span class="w-4 h-4 mr-3 bg-white inline-block rounded-full carousel-active cursor-pointer"></span>
              <span class="w-4 h-4 mr-3 bg-white inline-block rounded-full cursor-pointer"></span>
              <span class="w-4 h-4 mr-3 bg-white inline-block rounded-full cursor-pointer"></span>
            </div>
            <div class="flex carousel-arrow">
              <img src="../public/home/arr-left.svg " class="pr-5 cursor-pointer" alt="arrow left">
              <img src="../public/home/arr-right.svg" class="cursor-pointer" alt="arrow right">
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MainNav from "./MainNav.vue";
export default {
  components: {
    MainNav,
  },
};
</script>

<style lang="scss">
header {
  background-color: var(--maincolor);
  height: 650px;

  .header-content {
    h1 {
      line-height: 64px;
    }
  }
  .header-slider{
    img{
      width: 90%;
    }
  }
  .carousel-move{
    width: 90%;
    .carousel-dots{
      span{
        transition: all .3s;
      }
      .carousel-active , span:hover{
        background-color: #F5C614;
      }
    }
    .carousel-arrow{
      img{
  
        transition: all .3s;
        &:hover{
         opacity: .7;
        }
      }
    }
  }
  
}
</style>