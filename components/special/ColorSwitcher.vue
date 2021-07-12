<template>
  <button
    type="button"
    class="transition-colors duration-100 rounded-md hover:bg-gray-100 hover:bg-opacity-10"
    title="Cambiar de modo"
    @click="switchColorMode()"
  >
    <MoonIcon
      v-if="colorMode === 'dark'"
      class="w-8 h-8 text-yellow-500"
    />
    <SunIcon
      v-else
      class="w-8 h-8 text-yellow-500"
     />
  </button>
</template>

<script>
export default {
  name: 'AppColorToggle',
  components: {
    MoonIcon: () => import('@/static/icons/moon.svg?inline'),
    SunIcon: () => import('@/static/icons/sun.svg?inline'),
  },
  computed: {
    colorMode: {
      get() {
        return this.$colorMode.preference
      },
      set(newMode) {
        return newMode
      },
    },
  },
  watch: {
    colorMode(newCount, oldCount) {
      this.colorMode = this.$colorMode.preference
    },
  },
  mounted() {
    setTimeout(() => {
      this.colorMode = this.$colorMode.preference
    }, 100)
  },
  methods: {
    switchColorMode() {
      if (this.$colorMode.value === 'dark') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
      this.colorMode = this.$colorMode.preference
    },
  },
}
</script>

<style lang="postcss" scoped>
.toggle {
  @apply h-6 w-11;
}
.toggle-inner {
  @apply h-5 w-5;
}
.icon-color {
  @apply h-4 w-4;
}
</style>
