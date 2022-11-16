<template>
<div class="card p-5">
    <div class="card-title flex items-center gap-6 mb-5">
        <div class="card-img relative">
            <img :src="require(`../public/team/${member.imgName}.svg`)" alt="" />
            <span class="absolute active bg-green-500 bottom-0 right-0 rounded-full"></span>
        </div>
        <div class="title-content ">
            <h3 class="font-semibold">{{member.name}}</h3>
            <div class="flex  gap-3">
                <div class="flex items-center gap-2">
                    <img src="../public/home/map.svg" alt="member country icon" />
                    <p class="leading-7 text-xs text-black font-medium">{{member.country}}</p>
                </div>
                <div class="flex items-center gap-1">
                    <img src="../public/home/star.svg" alt="member rating" />
                    <p class=" leading-7 text-xs text-black font-medium">{{member.rating}}</p>
                    <span class="num text-neutral-600 text-xs font-normal">(12)</span>
                </div>
            </div>
        </div>
     
    </div>
    <div class="features pb-5 border-b border-neutral-300 border-solid">
        <ul class="flex gap-5">
            <li v-for="feature in member.featuress" :key="feature" class="rounded-xl py-2 px-5 border-neutral-300 border-solid border ">{{feature}}</li>
        </ul>
    </div>
    <div class="brief pt-5">
        <p class="leading-5">{{member.brief}}</p>
    </div>
</div>
</template>

<script>
export default {
  props:{
      member:{
          type:Object,
          required:true
      }
  }
};
</script>

<style lang="scss">
.card {
  box-shadow: 0px 10px 24px 0px #2125291f;
  border-radius: 12px;
  margin-bottom: 32px;
  transition:all .5s;
  &:hover{
    box-shadow: none;
    cursor: pointer;

  }
  .card-title {
    .card-img{
        .active{
            width: 15px;
            height: 15px;
        }
    }
    .title-content {
      h3 {
        line-height: 28px;
      }
    }
  }
  .features , .brief p{
    font-size: 12px;
  }
}
</style>