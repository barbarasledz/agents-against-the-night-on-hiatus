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
  },
  beforeCreate: function () {
    fetch(this.$store.state.apiUrl + '/api/user', { method: 'GET' })
    .then( res => res.json())
    .then( res => console.log(res))
  }
}
</script>
