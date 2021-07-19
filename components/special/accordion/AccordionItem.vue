<template>
  <div class="accordion-item">
    <div class="accordion-header" @click="toggleContent">
      <div class="flex">
        <h3 class="t3">1. {{ title }}</h3>
        <div class="ml-auto">
          <button
            type="button"
            aria-label="Alternar visualización de las clases">
            <ChevronDown
              class="transition-all duration-300"
              :class="{
              'rotate-180': isOpen
              }"
            />
          </button>
        </div>
      </div>
      <p class="text-sm">
        Introduciremos todas las herramientas necesarias
      </p>
    </div>
    <ul
      :id="`accordion-${id}`" :ref="`accordion-${id}`"
      class="accordion-content"
      :style="styles">
      <li class="accordion-content-item">
        <div class="flex flex-nowrap">
          <LockIcon class="w-5" />
          1. Bienvenida del curso
        </div>
        <time class="ml-auto">
          4:25
        </time>
      </li>
      <li class="accordion-content-item">
        <div class="flex flex-nowrap">
          <LockIcon class="w-5" />
          2. ¿Qué vamos a realizar?
        </div>
        <time class="ml-auto">
          4:25
        </time>
      </li>
      <li class="accordion-content-item">
        <div class="flex flex-nowrap">
          <LockIcon  class="w-5"/>
          3. Instalación de las herramientas
        </div>
        <time class="ml-auto">
          4:25
        </time>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    ChevronDown: () => import('@/static/icons/chevron-down.svg?inline'),
    LockIcon: () => import('@/static/icons/lock.svg?inline')
  },
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      styles: {
        maxHeight: 0
      },
      isOpen: false
    }
  },
  methods: {
    toggleContent() {
      if (this.styles.maxHeight) {
        this.isOpen = false
        this.styles.maxHeight = 0
      } else {
        const ul = this.$refs[`accordion-${this.id}`]
        this.isOpen = true
        this.styles.maxHeight = ul.scrollHeight + 'px'
      }
    }
  }
}
</script>

<style scoped lang="postcss">
.accordion-item {
  @apply border-l border-r border-b border-gray-200 bg-white dark:bg-dm-darker dark:border-gray-700;
}
.accordion-item:first-child {
  @apply border-t border-gray-200 rounded-t-lg overflow-hidden dark:border-gray-700;
}

.accordion-item:last-child {
  @apply border-b border-gray-200 dark:border-gray-700;
}

.accordion-header {
  @apply flex flex-col cursor-pointer py-2 px-3 bg-gray-100 dark:bg-dm-dark-accordion dark:border-gray-700;
}

.accordion-content {
  @apply px-4 overflow-hidden max-h-0 transition-all duration-300;
}

.accordion-content-item {
  @apply p-2 flex transition-colors hover:bg-gray-200 cursor-pointer mb-2 rounded dark:hover:bg-gray-600;
}

.accordion-content-item:first-child {
  @apply mt-2;
}

.t3 {
  @apply dark:text-dark-font-title;
}
</style>
