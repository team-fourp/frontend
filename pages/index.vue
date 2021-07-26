<template>
  <main>
    <section class="home-banner">
      <div class="home-banner-content block-main fade">
        <div class="col-span-6 h-full flex items-center justify-center">
          <h1 class="text-6xl font-extrabold">
            Aprende, enseña y transforma
          </h1>
        </div>
        <div class="col-span-5 overflow-hidden rounded-lg">
          <div class="container-img">
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import dynamicMetadata from '~/plugins/metadata/metadata-dynamic'

export default {
  head() {
    const title = 'FourP: Una mirada hacia lo diferente'
    const url = `${this.$config.baseURL}${this.$nuxt.$route.path}`
    const description = 'En FourP buscamos una mirada hacia lo diferente, transformando la educación actual y generando más oportunidades para nuestra comunidad.'
    const dynamicMeta = dynamicMetadata({
      title,
      description,
      url
    })
    return {
      title,
      meta: [...dynamicMeta]
    }
  }
}
</script>

<style scoped lang="postcss">
.home-banner {
  min-height: calc(100vh - var(--height-header));
  @apply bg-gradient-to-r pt-8 from-blue-400 via-indigo-500 to-purple-500;
}

.home-banner-content {
  @apply h-full w-full grid grid-cols-12;
}

</style>
