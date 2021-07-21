<template>
  <Modal
    :id="`component-${id}`"
    :ref="`component-${id}`"
    target="modal-login"
    title="Inicia sesión"
    :footer="false"
    size="sm"
    @close="onClose"
    >
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
        <Button
          type="submit"
          variant="primary"
          size="block"
          class="mt-6">
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
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    open(){
      this.$refs[`component-${this.id}`].open()
    },
    clickToRegister() {
      this.$emit('changeToRegister')
      this.$refs[`component-${this.id}`].hide('login')
    },
    onClose() {
      this.email = ''
      this.password = ''
    }
  }
}
</script>
