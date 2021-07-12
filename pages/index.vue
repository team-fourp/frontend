<template>
  <div>
    <Header />
    <p v-for="i in 20" :key="i">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quia beatae veritatis aliquam similique atque repellendus commodi quibusdam animi, error excepturi delectus ea expedita nobis. Cupiditate enim modi esse deserunt!
    </p>
  </div>
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
