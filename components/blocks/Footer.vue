<template>
  <footer
    class="bg-white dark:bg-dm-darker">
    <div class="flex flex-col sm-md:flex-row pt-12 pb-12 ml-auto mr-auto max-w-6xl w-full-2rem xl:w-full">
      <div>
        <img
          :src="`/logos/logo-${pathLogo}.svg`"
          alt="Logo de FourP" class="h-10">
          <div class="flex mt-3 sm-md:mt-6">
            <a class="mr-2 social-link"
              href="https://www.facebook.com/FourPI/" target="_blank"
              rel="noreferrer noopener"
              aria-label="Enlace para el Facebook de FourP">
              <FacebookIcon class="social-icon"/>
            </a>
            <a class="mr-2 social-link"
              href="mailto:soporte@fourp.space" target="_blank"
              rel="noreferrer noopener"
              aria-label="Enlace para el email de FourP">
              <MailIcon class="social-icon"/>
            </a>
            <a class="mr-2 social-link"
              href="https://wa.me/573219087862" target="_blank"
              rel="noreferrer noopener"
              aria-label="Enlace para el WhatsApp de FourP">
              <WhatsAppIcon class="social-icon"/>
            </a>
            <a class="social-link"
              href="https://www.youtube.com/channel/UCA9ukhWLVq1S6w3AWYy_D9A?view_as=subscriber"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Enlace para el Youtube de FourP">
              <YoutubeIcon class="social-icon"/>
            </a>
          </div>
      </div>
      <div class="mt-4 sm-md:mt-0 sm-md:ml-auto flex flex-col sm:flex-row sm:divide-x">
        <div class="mr-3">
          <h2 class="font-bold text-md">Acerca de la empresa</h2>
          <ul class="pl-1">
            <li class="item-list">
              <nuxt-link to="/sobre-nosotros">
                Sobre FourP
              </nuxt-link>
            </li>
            <li class="item-list">
              <nuxt-link to="/freelances">
                Conoce a nuestros freelances
              </nuxt-link>
            </li>
            <li class="item-list">
              <nuxt-link to="/enseña">
                Enseña en FourP
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="sm:pl-3 mt-3 sm:mt-0">
          <h2 class="font-bold text-md">Legalidad</h2>
          <ul class="pl-1">
            <li class="item-list">
              <nuxt-link to="/politicas-de-privacidad">
                Políticas de privacidad
              </nuxt-link>
            </li>
            <li class="item-list">
              <nuxt-link to="/terminos-y-condiciones-de-uso">
                Terminos y condiciones de uso
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center">
      <span class="text-sm">
        Derechos reservados de FourP &copy; 2021
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  components:{
    FacebookIcon: () => import('@/static/icons/facebook.svg?inline'),
    MailIcon: () => import('@/static/icons/inbox.svg?inline'),
    WhatsAppIcon: () => import('@/static/icons/whatsapp.svg?inline'),
    YoutubeIcon: () => import('@/static/icons/youtube.svg?inline'),
  },
  computed: {
    pathLogo() {
      return this.$colorMode.preference;
    }
  }
}
</script>

<style scoped lang="postcss">

.item-list {
  @apply text-sm;
}

.social-link {
  @apply h-8 w-8 inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200  dark:bg-gray-500  dark:hover:bg-gray-600 transition-colors;
}

.social-icon {
  @apply w-5 stroke-current text-gray-700 dark:text-black;
}

</style>
