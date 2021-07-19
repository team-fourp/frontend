<template>
  <div class="relative">
    <Header />
    <Nuxt/>
    <Footer />
    <portal-target name="modal-target"></portal-target>
  </div>
</template>

<script>
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
