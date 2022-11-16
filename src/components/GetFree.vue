<template>
  <div class="get-free rounded-3xl grid md:grid-cols-2 sm:grid-cols-1  gap-12 md:my-28 sm:my-14">
    <div class="left-content md:pt-14 md:pl-16 md:pb-11 sm:pt-7 sm:pb-5 sm:pr-8 md:pr-0 sm:pl-8 sm:text-center md:text-left">
      <h2 class="font-semibold md:mb-4 sm:mb-2">
        Get 15 Minutes for free from us here at Friendly Arabic
      </h2>
      <p class="text-base leading-6 md:mb-8 sm:mb-2 ">
        Complete your account info and Get 15 Minutes free to your wallet
        balance and call Your Teacher right away
      </p>
      <router-link
        to="/"
        class="rounded-full no-underline text-white font-medium py-4 px-8 inline-block"
        >Start Now</router-link
      >
    </div>
    <div class="right-bg rounded-r-3xl relative md:block sm:hidden">
      <img src="../public/home/getfree.png" class="mx-auto absolute bottom-0" alt="get free image" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$maincolor: #b72c52;
.get-free {
  background-color: #ffeaf0;
  .left-content {
    a {
      background-color: $maincolor;
      transition: all .3s;
      border: 2px solid $maincolor;
      &:hover{
        background-color: #ffeaf0;
        border: 2px solid $maincolor;
        color: $maincolor;
      }
    }
    h2 {
      font-size: 36px;
      line-height: 1.2;
      color: $maincolor;
      @media (max-width:991px) {
        font-size: 24px;
        line-break: 1;
            
        }
    }
    p {
      color: #bc657e;
      @media (max-width:991px) {
        font-size: 14px !important;
        }
    }
  }
  .right-bg{
    background: url("../public/home/ellipse.png");
    background-size: cover;
    background-repeat: none;
    position: relative;
    
    img{
        max-width: 75%;
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width:991px) {
        max-width: 110%;
            
        }
    }
  }
}
</style>