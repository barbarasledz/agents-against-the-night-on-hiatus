<template>
  <div class="home">
    <WelcomeMsg/>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeMsg from '@/components/WelcomeMsg.vue'

export default {
  name: 'HomeView',
  components: {
    WelcomeMsg
  }
}
</script>
