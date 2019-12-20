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
import { mapState } from 'vuex'
export default {
  components: {
    TheNavbar
  },
  computed: mapState({
    dark: state => state.general.dark
  }),
}
</script>

<style>  
</style>