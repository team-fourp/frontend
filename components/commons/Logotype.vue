<template>
  <nuxt-link to="/" class="flex items-center">
    <img
    height="32"
    :src="`/logos/logo-${pathLogo}.svg`"
    alt="FourP logo"
    class="h-8 inline mr-1" />
  </nuxt-link>
</template>

<script>
export default {
  computed: {
    pathLogo() {
      return this.$colorMode.preference;
    }
  }
}
</script>
