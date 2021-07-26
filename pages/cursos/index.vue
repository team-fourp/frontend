<template>
  <main>
    <section class="home-banner block-main min-h-screen">
      <div class="col-span-6">
        <h1 class="text-6xl font-extrabold">
          ¡Nunca pares de aprender!
          <br>
          <span class="text-2xl font-medium">
            Nuestros cursos son realizados con calidad para ofrecerte el mejor conocimiento
          </span>
        </h1>
      </div>
      <div class="col-span-6">

      </div>
    </section>
  </main>
</template>

<script>
import dynamicMetadata from '@/plugins/metadata/metadata-dynamic'

export default {
  head() {
    const title = 'Cursos';
    const description = '¡Nunca pares de aprender! Nuestros cursos son realizados con calidad para ofrecerte el mejor conocimiento'
    const url = `${this.$config.baseURL}${this.$nuxt.$route.path}`
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
  margin-top: calc(var(--height-header) + 5rem);
  @apply grid grid-cols-12;
}
</style>
