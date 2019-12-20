<template>
  <div class="theme-container" :class="[dark ? 'theme--dark' : 'theme--light']">
    <div class="screen-container">
      <div class="container">
        <TheNavbar/>
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
export default {
  components: {
    TheNavbar
  },
  data(){
    return {
      dark: true
    }
  }
}
</script>

<style>  
</style>