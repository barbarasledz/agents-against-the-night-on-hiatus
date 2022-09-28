<template>
  <div id="nav-and-content">
  <NavBar />
  <div id="content-container">
    <router-view />
  </div>
  </div>
  <FooterBar />
</template>


<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
export default {
  name: 'app',
  components: {
    NavBar,
    FooterBar
}
}
</script>