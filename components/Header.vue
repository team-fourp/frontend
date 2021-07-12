<template>
  <header
    class="fixed top-0 left-0 z-20 w-full flex items-center content-center bg-white dark:bg-dark-header">
    <div class="flex items-center content-center w-full h-full relative py-3 px-2 lg:px-4">
      <!-- Icon of menu -->
      <button type="button" class="lg:hidden w-8 h-8" @click="isShowMenu = true">
        <!-- <img src="@/static/ui/menu.svg" alt="Menu icon" > -->
        <MenuIcon />
      </button>
      <Logotype class="ml-2" />

      <!-- Icon of left (mobile) -->

      <div class="ml-auto flex items-center content-center lg:hidden">
        <button
          type="button"
          class="cursor-pointer w-8 h-8 flex items-center justify-center"
          @click="showInputSearchMobile = true">
          <img src="@/static/icons/search.svg" alt="Search icon">
        </button>
        <button
          v-if="false"
          type="button"
          class="lg:hidden w-8 h-8 ml-2"
          @click="isShowMenu = true">
          <img src="@/static/icons/menu.svg" alt="Menu icon">
        </button>
        <div class="main-search">
          <div
            class="bg-white flex items-center z-10 absolute top-0 left-0 h-full py-3 px-2 transition-all duration-300"
            :class="{
              'w-full pointer-events-auto opacity-100': showInputSearchMobile,
              'w-0 opacity-0': !showInputSearchMobile
            }"
            >
            <button
              type="button"
              class="cursor-pointer mr-1"
              :class="{ 'block': showInputSearchMobile, 'hidden': !showInputSearchMobile }"
              @click="showInputSearchMobile = false">
              <ArrowBackIcon />
            </button>
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
      <div class="ml-auto w-1/3 max-w-lg mr-4 relative hidden lg:block">
        <Autocomplete
          variant="header"
          :items="[
            { href: '/cursos/javascript', title: 'javascript', type: 'course'},
            {title:'nodejs', href: '/cursos/node', type: 'course'},
            {title: 'typescript', href: '/cursos/typescript', type: 'course'},
            { href: '/juanandres', name: 'Juan Andrés', type: 'user'},
            {name:'Alejandro Velasco', href: '/alejovelasco', type: 'user'},
            {name: 'Francisco santos', href: '/franciscosantos', type: 'user'}
          ]"
          />
      </div>

      <!-- Navigation (laptop)-->
      <nav class="mr-4 flex flex-wrap max-h-8 items-center content-center hidden lg:block">
        <ul class="flex flex-wrap items-center content-center">
          <li v-for="item in items" :key="item.iconName" class="mr-3">
            <nuxt-link :to="item.href">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </nav>

      <!-- Buttons signin / signup (laptop) -->
      <div class="hidden lg:block">
        <button type="button" class="px-3 max-w-lg rounded bg-blue-600 py-1">
          <span class="text-sm font-bolder text-white">Inicia sesión</span>
        </button>
        <button type="button" class="px-3 max-w-lg rounded bg-red-600 py-1">
          <span class="text-sm font-bolder text-white">Comenzar aventura</span>
        </button>
      </div>

      <color-switcher class="ml-1"></color-switcher>

      <!-- Lateral menu -->
      <div
        class="fixed top-0 right-0 h-screen z-10 w-full transition-transform transform delay-100 duration-300"
        :class="{ 'translate-x-0': isShowMenu, '-translate-x-full': !isShowMenu }">
        <div class="absolute top-0 left-0 h-full w-full bg-aside-menu"
        :class="{ 'aside-menu-visible': isShowMenu, 'aside-menu-invisible': !isShowMenu }">
        </div>
        <div class="relative w-100 mr-auto sm:w-10/12 md:w-2/5 bg-white h-screen py-3">
          <!-- Header lateral menu -->
          <div class="flex items-center px-2">
            <img src="@/static/logos/icon.svg" alt="FourP logo" width="32" class="sm:hidden">
            <span class="font-bold ml-1 text-sm sm:text-base">Menú</span>
            <button type="button" class="ml-auto" @click="isShowMenu = false">
              <img src="@/static/icons/x.svg" alt="Icon close menu">
            </button>
          </div>
          <!-- Links lateral menu -->
          <div class="pt-4">
            <div
              v-for="item in items"
              :key="item.iconName"
              >
              <nuxt-link :to="item.href"
                class="py-3 px-2 hover:bg-gray-200 h-full flex items-center">
                <img
                  :src="require(`@/static/icons/${item.iconName}.svg`)"
                  class="inline"
                  width="24"
                  :alt="`Icon ${item.title}`">
                <span class="leading-normal ml-1">
                  {{ item.title }}
                </span>
              </nuxt-link>
            </div>
          </div>

          <!-- Buttons lateral menu -->
          <div class="w-full bottom-0 absolute left-0 flex flex-col items-center px-2 pb-4">
            <button type="button" class="w-full max-w-lg rounded bg-blue-600 py-1 mb-2">
              <span class="text-sm font-bolder text-white">Inicia sesión</span>
            </button>

            <button type="button" class="w-full max-w-lg  rounded bg-purple-700 py-1">
              <span class="text-sm font-bolder text-white">Regístrate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ColorSwitcher from './special/ColorSwitcher.vue';
const items = [
  { iconName: 'courses', title: 'Cursos', href: '/cursos' },
  { iconName: 'certificate', title: 'Freelances', href: '/freelances' },
  { iconName: 'rocket', title: 'Únetenos', href: '/registro' },
]

export default {
  components: {
    ColorSwitcher,
    MenuIcon: () => import('@/static/icons/menu.svg?inline'),
    ArrowBackIcon: () => import('@/static/icons/arrow-back.svg?inline')
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
</style>
