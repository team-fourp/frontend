<template>
  <header class="flex items-center content-center py-3 px-2 relative">
    <!-- Icon of menu -->
    <button class="lg:hidden w-8 h-8" @click="isShowMenu = true">
      <!-- <img src="@/static/ui/menu.svg" alt="Menu icon" > -->
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
    </button>
    <Logotype class="ml-2" />

    <!-- Icon of left (mobile) -->

    <div class="ml-auto flex items-center content-center lg:hidden">
      <label for="search-header" class="cursor-pointer w-8 h-8 flex items-center justify-center">
        <img src="@/static/ui/search.svg" alt="Search icon">
      </label>
      <button v-if="false" class="lg:hidden w-8 h-8 ml-2" @click="isShowMenu = true">
        <img src="@/static/ui/menu.svg" alt="Menu icon">
      </button>
      <div class="main-search">
        <div class="bg-white flex items-center opacity-0 w-0 z-10 absolute top-0 left-0 h-full py-3 px-2 search-input">
          <button class="cursor-pointer h-full w-8 mr-2" @click="focusSearch">
            <img
            src="@/static/ui/search.svg"
            alt="Search icon" width="24">
          </button>
          <input
            id="search-header"
            ref="searchHeader"
            type="text" autocomplete="off"
            class="text-xs focus:border border-gray-300 w-full rounded-md focus:outline-none"
            placeholder="¿Cuál será tu nueva aventura?"
            >
          <img src="@/static/ui/x.svg" alt="Close icon" class="cursor-pointer ml-1">
        </div>
      </div>
    </div>

    <!-- Input search (laptop)  -->
    <div class="ml-auto">

    </div>

    <!-- Navigation (laptop)-->
    <nav class="mr-4 flex flex-wrap max-h-8 items-center content-center hidden lg:block">
      <ul class="flex flex-wrap items-center content-center">
        <li v-for="item in items" :key="item.iconName" class="mr-2">
          <nuxt-link :to="item.href">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </nav>

    <!-- Buttons signin / signup (laptop) -->
    <div class="hidden lg:block">
      <button class="px-3 max-w-lg rounded bg-blue-600 py-1">
        <span class="text-sm font-bolder text-white">Inicia sesión</span>
      </button>
      <button class="px-3 max-w-lg rounded bg-red-600 py-1">
        <span class="text-sm font-bolder text-white">Comenzar aventura</span>
      </button>
    </div>

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
          <button class="ml-auto" @click="isShowMenu = false">
            <img src="@/static/ui/x.svg" alt="Icon close menu">
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
                :src="require(`@/static/ui/${item.iconName}.svg`)"
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
          <button class="w-full max-w-lg rounded bg-blue-600 py-1 mb-2">
            <span class="text-sm font-bolder text-white">Inicia sesión</span>
          </button>

          <button class="w-full max-w-lg  rounded bg-purple-700 py-1">
            <span class="text-sm font-bolder text-white">Regístrate</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
const items = [
  { iconName: 'courses', title: 'Cursos', href: '/cursos' },
  { iconName: 'certificate', title: 'Freelances', href: '/freelances' },
  { iconName: 'rocket', title: 'Únetenos', href: '/registro' },
]

export default {
  data() {
    return {
      items,
      isShowMenu: false
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

.main-search:focus-within .search-input {
  width: 100%;
  opacity: 1;
  transition: width .3s, opacity .3s;
  pointer-events: auto;
}

#search-header:focus {
  padding: .5rem ;
}
</style>
