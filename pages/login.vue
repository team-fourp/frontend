<template>
  <main class="w-full flex mb-20" style="min-height: 70vh">
    <div class="m-auto w-full max-w-md">
      <div class="block-lg"></div>
      <h1 class="title mb-6">Inicia sesión</h1>
      <div>
        <p class="font-bold text-sm">
          Inicia usando una de tus redes
        </p>
        <div class="mt-3 mb-2">
          <span class="w-full block flex items-center justify-center button-social button-fb">
            <FacebookIcon class="icon-fb w-6 h-6 mr-2"/>
            <span class="leading-relaxed">
              Inicia con Facebook
            </span>
          </span>
          <span class="w-full block flex items-center justify-center button-social button-gg mt-3">
            <GoogleIcon class="mr-2"/>
            <span class="leading-relaxed">
              Inicia con Google
            </span>
          </span>
        </div>
      </div>
      <p class="font-extrabold text-sm mb-3 mt-3">
        O inicia con tu correo electrónico
      </p>
      <div class="divide-y">
        <form class="mb-3">
          <Input
            v-model="email"
            id-input="login-email"
            type="email"
            placeholder="Ingresa tu correo electrónico"
            label="Correo electrónico"/>
          <Input
            v-model="password"
            id-input="login-password"
            type="password"
            placeholder="Ingresa tu contraseña"
            label="Contraseña"/>
          <button
            class="button button-primary button-block mt-6"
            type="submit">
            Iniciar sesión
          </button>
        </form>
        <div class="pt-3 text-sm text-center">
          <p>
          <nuxt-link to="/recuperacion" class="link">
            ¿Has olvidado tu contraseña?
          </nuxt-link>
        </p>
        <p class="mt-1">
          ¿Aún no tienes cuenta?
          <nuxt-link to="/registro" class="link">
            Regístrate
          </nuxt-link>
        </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import dynamicMetadata from '~/plugins/metadata/metadata-dynamic'

export default {
  components: {
    FacebookIcon: () => import('@/static/icons/facebook-brand.svg?inline'),
    GoogleIcon: () => import('@/static/icons/google-brand.svg?inline')
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  head() {
    const title = 'Iniciar sesión'
    const url = `${this.$config.baseURL}${this.$nuxt.$route.path}`
    const dynamicMeta = dynamicMetadata({
      title,
      url
    })
    return {
      title,
      meta: [...dynamicMeta]
    }
  },
  methods: {
    login() {

    }
  }
}
</script>
