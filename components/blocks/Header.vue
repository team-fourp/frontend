<template>
  <header
    class="fixed top-0 left-0 z-10 w-full flex items-center content-center border-b border-gray-200 bg-white dark:bg-dm-darker dark:border-gray-800">
    <div class="flex items-center content-center w-full h-full relative py-3 px-2 lg:px-4">
      <!-- Icon of menu -->
      <div class="lg:hidden w-8 h-8" @click="isShowMenu = true">
        <MenuIcon />
      </div>
      <Logotype class="ml-2" />

      <!-- Icon of left (mobile) -->
      <div class="ml-auto flex items-center content-center lg:hidden">
        <div
          for="main-search-input"
          class="cursor-pointer w-8 h-8 flex items-center justify-center"
          @click="showInputSearchMobile = true">
          <SearchIcon />
        </div>
        <div
          v-if="false"
          class="lg:hidden w-8 h-8 ml-2"
          @click="isShowMenu = true">
          <MenuIcon />
        </div>
        <div class="main-search">
          <div
            class="bg-white flex items-center z-10 absolute top-0 left-0 h-full py-3 px-2 transition-all duration-300 dark:bg-dark-header"
            :class="{
              'w-full pointer-events-auto opacity-100': showInputSearchMobile,
              'w-0 opacity-0': !showInputSearchMobile
            }"
            >
            <div
              class="cursor-pointer mr-1"
              :class="{ 'block': showInputSearchMobile, 'hidden': !showInputSearchMobile }"
              @click="showInputSearchMobile = false">
              <ArrowBackIcon class="dark:text-gray-700" />
            </div>
            <Autocomplete
              v-show="showInputSearchMobile"
              variant="header"
              :is-in-header-mobile="true"
              :items="[]"
            />
          </div>
        </div>
      </div>

      <!-- Input search (laptop)  -->
      <div class="ml-auto w-1/4 max-w-lg mr-4 relative hidden lg:block">
        <Autocomplete
          variant="header"
          :items="[
            { href: '/cursos/javascript', title: 'Curso javascript fundamentos desde cero hasta las bases', type: 'course'},
            {title:'nodejs', href: '/cursos/node', type: 'course'},
            {title: 'typescript', href: '/cursos/typescript', type: 'course'},
            { href: '/juanandres', name: 'Juan Andrés', type: 'user'},
            {name:'Alejandro Velasco', href: '/alejovelasco', type: 'user'},
            {name: 'Francisco santos', href: '/franciscosantos', type: 'user'},
            { href: '/juanandres', name: 'Juan Andrés', type: 'user'},
            {name:'Alejandro Velasco', href: '/alejovelasco', type: 'user'},
            {name: 'Francisco santos', href: '/franciscosantos', type: 'user'},
            { href: '/juanandres', name: 'Juan Andrés', type: 'user'},
            {name:'Alejandro Velasco', href: '/alejovelasco', type: 'user'},
            {name: 'Francisco santos', href: '/franciscosantos', type: 'user'}
          ]"
          />
      </div>

      <!-- Navigation (laptop)-->
      <nav class="mr-4 flex flex-wrap max-h-8 items-center content-center hidden lg:block">
        <ul class="flex flex-wrap items-center content-center">
          <li v-for="item in items" :key="item.icon" class="mr-3">
            <nuxt-link :to="item.href">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </nav>

      <!-- Buttons signin / signup (laptop) -->
      <div class="hidden lg:block">
        <Button
          variant="primary"
          title="Inicia sesión"
          class="mr-2"
          @click="onClickLogin('top')">
          Inicia sesión
        </Button>
        <Button
          variant="info"
          title="Registrarse"
          @click="onClickRegister('top')">
          Comenzar aventura
        </Button>
      </div>

      <color-switcher class="ml-1"></color-switcher>

      <!-- Lateral menu -->
      <div
        class="fixed top-0 right-0 h-screen z-10 w-full transition-transform transform delay-100 duration-300"
        :class="{ 'translate-x-0': isShowMenu, '-translate-x-full': !isShowMenu }">
        <div class="absolute top-0 left-0 h-full w-full bg-aside-menu"
        :class="{ 'aside-menu-visible': isShowMenu, 'aside-menu-invisible': !isShowMenu }">
        </div>
        <div class="relative w-100 mr-auto sm:w-10/12 md:w-2/5 bg-white h-screen py-3 dark:bg-dm-darker">
          <!-- Header lateral menu -->
          <div class="flex items-center px-2">
            <FourPIcon width="32" class="sm:hidden" />
            <span class="font-bold ml-1 text-sm sm:text-base">Menú</span>
            <div class="ml-auto" @click="isShowMenu = false">
              <XIcon />
            </div>
          </div>
          <!-- Links lateral menu -->
          <div class="pt-4">
            <div
              v-for="item in items"
              :key="item.icon"
              >
              <nuxt-link :to="item.href"
                class="py-3 px-2 hover:bg-gray-200 h-full flex items-center">
                <component :is="item.icon" width="24" height="24"></component>
                <span class="leading-normal ml-1">
                  {{ item.title }}
                </span>
              </nuxt-link>
            </div>
          </div>

          <!-- Buttons lateral menu -->
          <div class="w-full bottom-0 absolute left-0 flex flex-col items-center px-2 pb-4">
            <Button
              size="block"
              variant="primary"
              class="max-w-lg mb-2"
              @click="onClickLogin('lateral')">
              Inicia sesión
            </Button>

            <Button
              size="block"
              variant="info"
              class="max-w-lg"
              @click="onClickRegister('lateral')">
              Regístrate
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <ModalLogin
      id="modal-login"
      ref="modal-login"
      @changeToRegister="changeTo('register')"/>

    <ModalRegister
      id="modal-register"
      ref="modal-register"
      @changeToLogin="changeTo('login')"/>
  </header>
</template>

<script>
import ColorSwitcher from '../special/ColorSwitcher.vue'
import ModalLogin from '../sections/ModalLogin.vue'
import ModalRegister from '../sections/ModalRegister.vue'

const items = [
  { icon: 'CoursesIcon', title: 'Cursos', href: '/cursos' },
  { icon: 'FreelancesIcon', title: 'Freelances', href: '/freelances' },
  { icon: 'RocketIcon', title: 'Únetenos', href: '/enseña' },
]

export default {
  components: {
    ModalLogin,
    ModalRegister,
    ColorSwitcher,
    MenuIcon: () => import('@/static/icons/menu.svg?inline'),
    ArrowBackIcon: () => import('@/static/icons/arrow-back.svg?inline'),
    SearchIcon: () => import('@/static/icons/search.svg?inline'),
    XIcon: () => import('@/static/icons/x.svg?inline'),
    FourPIcon: () => import('@/static/logos/icon.svg?inline'),
    CoursesIcon: () => import('@/static/icons/courses.svg?inline'),
    FreelancesIcon: () => import('@/static/icons/certificate.svg?inline'),
    RocketIcon: () => import('@/static/icons/rocket.svg?inline'),
  },
  data() {
    return {
      items,
      isShowMenu: false,
      showInputSearchMobile: false
    }
  },
  methods: {
    focusSearch() {
      this.$refs.searchHeader.focus();
    },
    onClickLogin(from) {
      if (from === 'lateral')
        this.isShowMenu = false

      this.$refs['modal-login'].open()
    },
    onClickRegister(from) {
      if (from === 'lateral')
        this.isShowMenu = false

      this.$refs['modal-register'].open()
    },
    changeTo(to) {
      if (to === 'register') {
        this.onClickRegister()
      } else if (to === 'login') {
        this.onClickLogin()
      }
    }
  }
}
</script>

<style scoped>
.bg-aside-menu {
  background-color: #021030c4;
}

.aside-menu-visible {
  opacity: 1;
  transition: opacity 1s ease;
  transition-delay: .2s;
}

.aside-menu-invisible {
  opacity: 0;
  transition: opacity .1s ease;
}

#search-header:focus {
  padding: .5rem ;
}

a.nuxt-link-active {
  font-weight: bold;
}
</style>
