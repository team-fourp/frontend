<template>
  <Modal
    :id="`component-${id}`"
    :ref="`component-${id}`"
    target="modal-register"
    title="Comenzar aventura"
    :footer="false"
    size="sm"
    @close="onClose">
    <p class="font-bold text-sm">
      Regístrate usando una de tus redes
    </p>
    <div class="mt-3 mb-2">
      <span class="w-full block flex items-center justify-center button-social button-fb">
        <FacebookIcon class="icon-fb w-6 h-6 mr-2"/>
        <span class="leading-relaxed">
          Regístrate con Facebook
        </span>
      </span>
      <span class="w-full block flex items-center justify-center button-social button-gg mt-3">
        <GoogleIcon class="mr-2"/>
        <span class="leading-relaxed">
          Regístrate con Google
        </span>
      </span>
    </div>
    <p class="font-extrabold text-sm mb-3 mt-3">
      O regístrate con tu correo electrónico
    </p>
    <div class="divide-y">
      <form class="mb-2 grid grid-cols-1 md:grid-cols-2 md:gap-2">
        <Input
          v-model="user.firstname"
          id-input="firstname"
          type="text"
          class="col-span-2 md:col-span-1"
          placeholder="Nombres"
          validations="true"
          required="true"
          type-validation="name"
          label="Nombres"
          invalid-message="Los nombres no son válidos"
          />

        <Input
          v-model="user.lastname"
          id-input="lastname"
          type="text"
          class="col-span-2 md:col-span-1"
          placeholder="Apellidos"
          validations="true"
          required="true"
          type-validation="name"
          label="Apellidos"
          invalid-message="Los apellidos no son válidos"
          />
        <Input
          v-model="user.email"
          id-input="email"
          type="email"
          class="col-span-2"
          placeholder="Correo electrónico"
          validations="true"
          required="true"
          type-validation="email"
          label="Correo electrónico"
          invalid-message="Al parecer el correo no es válido"
          />
        <Input
          v-model="user.password"
          id-input="password"
          type="password"
          class="col-span-2 md:col-span-1"
          placeholder="Contraseña"
          validations="true"
          required="true"
          type-validation="password"
          label="Contraseña"
          invalid-message="La contraseña es muy débil"
          />
        <Input
          v-model="user.repeatPassword"
          id-input="password-repeat"
          type="password"
          class="col-span-2 md:col-span-1"
          placeholder="Repetir contraseña"
          validations="true"
          required="true"
          type-validation="password"
          label="Repetir contraseña"
          invalid-message="Los nombres no son válidos"
          />

        <Button
          type="submit"
          variant="info" size="block" class="mt-2 col-span-2">
          Registrarme ahora
        </Button>
        <p class="text-xs text-center col-span-2">
          Al momento de registrarte aceptas nuestras
          <nuxt-link
            class="link"
            to="/politicas-de-privacidad"
            target="_blank"
            rel="noreferrer noopener">
            políticas de privacidad
          </nuxt-link> y
          <nuxt-link
            class="link"
            to="/terminos-y-condiciones-de-uso"
            target="_blank"
            rel="noreferrer noopener">
            condiciones de uso
          </nuxt-link>.
        </p>
      </form>
      <div class="pt-2 text-sm">
        <p class="text-center mt-1">
          ¿Ya tienes cuenta?
          <span class="link cursor-pointer" @click="changeToLogin">
            Inicia sesión
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
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  methods: {
    open(){
      this.$refs[`component-${this.id}`].open()
    },
    changeToLogin() {
      this.$emit('changeToLogin')
      this.$refs[`component-${this.id}`].hide('register')
    },
    onClose() {
      this.user.firstname = ''
      this.user.lastname = ''
      this.user.email = ''
      this.user.password = ''
      this.user.repeatPassword = ''
    }
  }
}
</script>
