<template>
  <div class="relative default__layout">
    <Header />
    <Nuxt/>
    <Footer />
<!--     <portal-target name="modal-login"></portal-target>
    <portal-target name="modal-register"></portal-target> -->

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
