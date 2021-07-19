<template>
  <main class="block-main">
    <div class="block-lg"></div>
    <h1 class="title">Bienvenido a FourP</h1>
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
