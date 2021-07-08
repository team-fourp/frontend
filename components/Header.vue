<template>
  <header class="flex items-center py-3 px-2">
    <Logotype />
    <div class="ml-auto flex items-center ">
      <button @click="isShowMenu = true">
        <img src="@/static/ui/menu.svg" alt="Menu icon">
      </button>
    </div>
    <div
      class="bg-white fixed top-0 right-0 h-screen z-10 w-full py-3 transition-transform transform duration-300"
      :class="{ 'translate-x-0': isShowMenu, 'translate-x-full': !isShowMenu }">
      <div class="flex items-center px-2">
        <img src="@/static/logos/icon.svg" alt="FourP logo" width="32">
        <span class="font-medium ml-1 text-sm">Menú</span>
        <button class="ml-auto" @click="isShowMenu = false">
          <img src="@/static/ui/x.svg" alt="Icon close menu">
        </button>
      </div>
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
      <div class="fixed bottom-0 w-full flex flex-col items-center px-2 pb-4">
        <button class="w-full max-w-lg rounded bg-blue-600 py-1 mb-2">
          <span class="text-sm font-bolder text-white">Inicia sesión</span>
        </button>

        <button class="w-full max-w-lg  rounded bg-purple-700 py-1">
          <span class="text-sm font-bolder text-white">Regístrate</span>
        </button>
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
}
</script>
