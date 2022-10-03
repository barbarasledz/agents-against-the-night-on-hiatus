<template>
  <div class="home">
    <WelcomeMsg/>
    <FAQList />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeMsg from '@/components/WelcomeMsg.vue'
import FAQList from '@/components/FAQList.vue';

export default {
  name: 'HomeView',
  components: {
    WelcomeMsg,
    FAQList
  }
}
</script>
