<template>
  <Modal
    :id="`component-${id}`"
    :ref="`component-${id}`"
    title="Inicia sesión"
    :footer="false"
    size="sm"
    class="scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-500 dark:scrollbar-track-gray-400">
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
    <p class="font-extrabold text-sm mb-3 mt-3">
      O inicia con tu correo electrónico
    </p>
    <div class="divide-y">
      <form class="mb-2">
        <div class="input-form">
          <label for="email" class="font-medium text-sm mb-1">
            Correo electrónico
          </label>
          <Input id="email" type="email" placeholder="Ingresa tu correo electrónico"/>
        </div>
        <div class="input-form">
          <label for="password" class="font-medium text-sm mb-1">
            Contraseña
          </label>
          <Input id="password" type="password" placeholder="Ingresa tu contraseña"/>
        </div>
        <Button variant="primary" size="block" class="mt-2">
          Iniciar sesión
        </Button>
      </form>
      <div class="pt-2 text-sm">
        <p class="text-center">
          <nuxt-link to="/recuperacion" class="link">
            ¿Has olvidado tu contraseña?
          </nuxt-link>
        </p>
        <p class="text-center mt-1">
          ¿Aún no tienes cuenta?
          <span class="link cursor-pointer" @click="clickToRegister">
            Regístrate
          </span>
        </p>
      </div>
    </div>
  </Modal>
</template>

<script>
export default {
  components: {
    FacebookIcon: () => import('@/static/icons/facebook-brand.svg?inline'),
    GoogleIcon: () => import('@/static/icons/google-brand.svg?inline')
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    open(){
      this.$refs[`component-${this.id}`].open()
    },
    clickToRegister() {
      this.$emit('changeToRegister')
      this.$refs[`component-${this.id}`].hide()
    }
  }
}
</script>
