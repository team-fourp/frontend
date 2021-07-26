<template>
  <main>
    <h1>{{ slug }}</h1>
  </main>
</template>

<script>
export default {
  asyncData({ params }) {
    return { slug: params.slug}
  }
}
</script>
