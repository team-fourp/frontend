<template>
  <Modal
    :id="`component-${id}`"
    :ref="`component-${id}`"
    title="Comenzar aventura"
    :footer="false"
    size="sm">
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
        <div class="input-form col-span-2 md:col-span-1">
          <label for="firstname" class="font-medium text-sm mb-1">
            Nombres
          </label>
          <div>
            <Input
              id="firstname"
              type="text"
              placeholder="Nombres"/>
          </div>
        </div>
        <div class="input-form col-span-2 md:col-span-1">
          <label for="lastname" class="font-medium text-sm mb-1">
            Apellidos
          </label>
          <div>
            <Input
              id="lastname"
              type="text"
              placeholder="Apellidos"/>
          </div>
        </div>
        <div class="input-form col-span-2">
          <label for="email" class="font-medium text-sm mb-1">
            Correo electrónico
          </label>
          <div class="relative">
            <Input id="email" type="email" placeholder="Correo electrónico"/>
            <p class="absolute -bottom-2 text-xs text-red-600">
              Correo invalido
            </p>
          </div>
        </div>
        <div class="input-form col-span-2 md:col-span-1">
          <label for="password" class="font-medium text-sm mb-1">
            Contraseña
          </label>
          <div class="relative">
            <Input id="password" :type="input_pw_1.type" placeholder="Contraseña"/>
            <EyesIcon
              v-if="!input_pw_1.visible"
              class="absolute right-2 top-1 z-10 cursor-pointer eyes-icon"
              @click="onChangeVisible(1)"/>
            <EyesOffIcon
              v-else
              class="absolute right-2 top-1 z-10 cursor-pointer eyes-icon"
              @click="onChangeVisible(1)"/>
          </div>
        </div>
        <div class="input-form col-span-2 md:col-span-1">
          <label for="password-repeat" class="font-medium text-sm mb-1">
            Repetir contraseña
          </label>
          <div class="relative">
            <Input
              id="password-repeat"
              :type="input_pw_2.type"
              placeholder="Repetir contraseña"/>
            <EyesIcon
              v-if="!input_pw_2.visible"
              class="absolute right-2 top-1 z-10 cursor-pointer eyes-icon"
              @click="onChangeVisible(2)"/>
            <EyesOffIcon
              v-else
              class="absolute right-2 top-1 z-10 cursor-pointer eyes-icon"
              @click="onChangeVisible(2)"/>
          </div>
        </div>
        <Button variant="primary" size="block" class="mt-2 col-span-2">
          Registrarme ahora
        </Button>
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
    GoogleIcon: () => import('@/static/icons/google-brand.svg?inline'),
    EyesIcon: () => import('@/static/icons/eyes.svg?inline'),
    EyesOffIcon: () => import('@/static/icons/eyes-off.svg?inline')
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      input_pw_1: {
        visible: false,
        type: 'password'
      },
      input_pw_2: {
        visible: false,
        type: 'password'
      }
    }
  },
  methods: {
    open(){
      this.$refs[`component-${this.id}`].open()
    },
    changeToLogin() {
      this.$emit('changeToLogin')
      this.$refs[`component-${this.id}`].hide()
    },
    onChangeVisible(numberInput) {
      const inputClicked =  this[`input_pw_${numberInput}`]
      inputClicked.visible = !inputClicked.visible
      if (inputClicked.type === 'password') {
        inputClicked.type = 'text'
      } else {
        inputClicked.type = 'password'
      }
    }
  }
}
</script>

<style scoped lang="postcss">
.eyes-icon {
  @apply stroke-current text-gray-400;
}
</style>
