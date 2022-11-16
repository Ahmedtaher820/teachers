<template>
  <div class="home">
    <div class="container">
      <div class="filter-member flex justify-end my-10">
        <div class="filter-content flex items-center gap-4 py-4 px-8 border border-solid border-neutral-300">
          <img src="../public/home/filter.svg" alt="filter member icon" />
          <p class="font-medium">Filter</p>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-6  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <MainCard v-for="member in members" :key="member.id" :member="member" />
      </div>
      <GetFree />
      <div class="grid grid-cols-3 gap-6  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <MainCard v-for="member in members" :key="member.id" :member="member" />
      </div>
    </div>
  </div>
</template>

<script>
import MainCard from "@/components/MainCard.vue";
import GetFree from "@/components/GetFree.vue";
export default {
  name: "HomeView",

  components: { MainCard,GetFree },
  data: () => ({
    members: [
      {
        id:'1',
        imgName: "member-1",
        name: "Ghada Ramadan",
        rating: "4.5",
        featuress: ["nice", "kind", "straight-forward"],
        brief:
          "I have worked as an Arabic teacher for non-native speakers since 2013. I have graduated from Arabic sdiashdiashdiah",
        country: "Egypt",
      },
      {
        id:'2',
        imgName: "member-2",
        name: "Ahmed Seddiq",
        rating: "4.8",
        featuress: ["nice", "kind", "straight-forward"],
        brief:
          "Do you want to learn Arabic in an easy and fun way? You have come to the right path. I am Rewan Na sdiashdiashdiah",
        country: "Egypt",
      },
      {
        id:'3',
        imgName: "member-3",
        name: "Hala Zamar",
        rating: "4.5",
        featuress: ["nice", "kind", "straight-forward"],
        brief:
          "Hello, My name is Hala, I have experience in teaching Arabic Language for more than 6 years. Teachin sdadadadadada",
        country: "Jordan",
      },
      {
        id:'4',
        imgName: "member-4",
        name: "Rewan Nasser",
        rating: "4.5",
        featuress: ["nice", "kind", "straight-forward"],
        brief:
          "I have worked as an Arabic teacher for non-native speakers since 2013. I have graduated from Arabic sdiashdiashdiah",
        country: "Egypt",
      },
      {
        id:'5',
        imgName: "member-5",
        name: "Abdelrahaman Kodr",
        rating: "4.1",
        featuress: ["nice", "kind", "straight-forward"],
        brief:
          "I have worked as an Arabic teacher for non-native speakers since 2013. I have graduated from Arabic sdiashdiashdiah",
        country: "Egypt",
      },
      {
        id:'6',
        imgName: "member-6",
        name: "Norhan Mohamed",
        rating: "4.8",
        featuress: ["nice", "kind", "straight-forward"],
        brief:
          "Hello! I am Nourhan Mohamed. I have been experiencing the Arabic training field since 2018 and I t sdadadadadada",
        country: "Egypt",
      },
      {
        id:'7',
        imgName: "member-7",
        name: "Mahmoud Mohamed",
        rating: "4.9",
        featuress: ["nice", "kind", "straight-forward"],
        brief:
          "I have worked as an Arabic teacher for non-native speakers since 2013. I have graduated from Arabic sdiashdiashdiah",
        country: "Egypt",
      },
      {
        id:'8',
        imgName: "member-8",
        name: "Goni Mohammed",
        rating: "4.9",
        featuress: ["nice", "kind", "straight-forward"],
        brief:
          "I have worked as an Arabic teacher for non-native speakers since 2013. I have graduated from Arabic sdiashdiashdiah",
        country: "Saudi Arabia",
      },
      {
        id:'9',
        imgName: "member-9",
        name: "Huda Mahayni",
        rating: "3.7",
        featuress: ["nice", "kind", "straight-forward"],
        brief:
          "I have worked as an Arabic teacher for non-native speakers since 2013. I have graduated from Arabic sdiashdiashdiah",
        country: "Syria",
      },
      {
        id:'10',
        imgName: "member-10",
        name: "Khaled Abdeldaym",
        rating: "4.5",
        featuress: ["nice", "kind", "straight-forward"],
        brief:
          "I have worked as an Arabic teacher for non-native speakers since 2013. I have graduated from Arabic sdiashdiashdiah",
        country: "Egypt",
      },
      {
        id:'11',
        imgName: "member-11",
        name: "Sumia Wagdy Radwan",
        rating: "4.6",
        featuress: ["nice", "kind", "straight-forward"],
        brief:
          "Arabic is a wonderful language ! I am an Arabic teacher from Egypt.I have been teaching Arabic to no sdadadadadada",
        country: "Egypt",
      },
      {
        id:'12',
        imgName: "member-12",
        name: "Salem Gamal Eldin",
        rating: "4.5",
        featuress: ["nice", "kind", "straight-forward"],
        brief:
          "Hello all students I'm Salem Gamal, Arabic and Quran tutor for non native speakers. I have the nee sdadadadadada",
        country: "Egypt",
      },
    ],
  }),
};
</script>
<style lang="scss">
.home {
  .filter-member {
    .filter-content {
      border: 1px solid var(border-color);
    }
  }
}
</style>