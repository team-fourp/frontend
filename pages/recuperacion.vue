<template>
  <main class="w-full flex" style="min-height: 70vh">
    <div class="m-auto max-w-lg overflow-hidden">
      <h1 class="title mb-5">
        Recupera tu contraseña
      </h1>
      <transition name="slide" mode="out-in">
        <div v-if="step === 1" key="step1" class="divide-y">
          <form class="mb-3" @submit.prevent="sendCode">
          <p class="mb-3 mt-1 font-medium">Enviaremos un código a tu correo electrónico</p>
            <div class="input-form">
              <label for="email" class="font-medium text-sm mb-1">
                Correo electrónico
              </label>
              <div>
                <Input
                  v-model="email"
                  id-input="email"
                  type="email"
                  placeholder="Ingresa tu correo electrónico"/>
              </div>
            </div>
            <button
              type="submit"
              class="button button-primary button-block mt-4">
              Enviar correo
            </button>
          </form>
          <div class="pt-3 text-sm">
            <p class="text-center mt-1">
              ¿Aún no tienes cuenta?
              <nuxt-link to="/registro" class="link cursor-pointer">
                Regístrate
              </nuxt-link>
            </p>
            <p class="text-center mt-1">
              También puedes
              <nuxt-link to="/login" class="link cursor-pointer">
                Iniciar sesión
              </nuxt-link>
            </p>
          </div>
        </div>
        <div v-if="step === 2" key="step2">
          <p class="font-medium mb-3 mt-3">
            Ingresa el código que hemos enviado a tu correo
          </p>
          <form class="pt-4" @submit.prevent="verifyCode">
            <InputCode
              ref="input-code-password"
              :error="errorInCode"
              @completed="onCompleteInputCode"
              @onRemoveError="errorInCode = false"/>
            <p v-if="errorInCode" class="text-red-600 mt-1 text-sm text-center">
              El código ingresado no es válido
            </p>
            <input
              type="submit"
              value="Restablecer contraseña"
              class="button button-info button-block mt-4">
          </form>
          <p class="mt-3 text-center text-sm">
            ¿No te ha llegado el código?
            <span
              class="link cursor-pointer"
              @click="requestOtherCode">
              solicita
            </span> otro
          </p>
        </div>
        <div v-if="step === 3" key="step3">
          <p class="font-medium mb-3 mt-3">
            Crea tu nueva contraseña
          </p>
          <form @submit.prevent="changePassword">
            <Input
              v-model="password"
              id-input="password"
              type="password"
              placeholder="Contraseña"
              validations="true"
              required="true"
              type-validation="password"
              label="Contraseña"
              invalid-message="La contraseña es muy débil"
              />
            <Input
              v-model="repeatPassword"
              id-input="password-repeat"
              type="password"
              placeholder="Repetir contraseña"
              validations="true"
              required="true"
              type-validation="password"
              :password="password"
              label="Repetir contraseña"
              invalid-message="La contraseña es muy débil" />
            <button
              type="submit"
              class="button button-primary button-block mt-4">
              Cambiar contraseña
            </button>
          </form>
        </div>
      </transition>
    </div>
  </main>
</template>

<script>
import InputCode from '@/components/special/InputCode.vue'
import dynamicMetadata from '~/plugins/metadata/metadata-dynamic'

export default {
  components: {
    InputCode
  },
  data(){
    return {
      email: '',
      step: 1,
      code: 0,
      errorInCode: false,
      password: '',
    }
  },
  head() {
    const title = 'Recuperar contraseña'
    const url = `${this.$config.baseURL}${this.$nuxt.$route.path}`
    const description = 'Recupera tu contraseña en FourP con un simple paso'
    const dynamicMeta = dynamicMetadata({
      title,
      description,
      url
    })
    return {
      title,
      meta: [...dynamicMeta]
    }
  },
  methods: {
    sendCode() {
      // TODO: Send code to email
      this.step = 2;
    },
    onCompleteInputCode(code) {
      this.code = code
      this.verifyCode()
    },
    verifyCode() {
      if (this.code !== "")
        this.errorInCode = true

      if (this.code === "000000" )
        this.step = 3
    },
    requestOtherCode() {
      this.$refs['input-code-password'].resetCode()
      this.step = 1
    },
    changePassword() {

    }
  }
}
</script>

<style scoped lang="postcss">
.slide-enter {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to { transform: translateX(0), }
.slide-slide-enter-active { position: absolute }

.slide-leave { transform: translateX(0) }
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active { transition: all .35s linear }
</style>
