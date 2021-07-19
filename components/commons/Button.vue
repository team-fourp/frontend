<template>
  <component
    :is="tag"
    :to="to"
    class="button"
    :class="`button-${variant} button-${size}`"
    @click="$emit('click')"
    >
    <span>
      <slot></slot>
    </span>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: ''
    },
    variant: {
      type: String,
      required: false,
      default: 'default'
    },
    size: {
      type: String,
      required: false,
      default: 'md'
    }
  },
  data(){
    return {
      tag: 'span'
    }
  },
  mounted() {
    if (this.to !== '') {
      this.tag = 'nuxt-link'
    }
  }
}
</script>

<style scoped lang="postcss">

/* ---------- Default styles --------- */
.button {
  @apply rounded cursor-pointer transition-colors font-semibold;
}

/* ------------ sizes styles ---------- */
.button-sm {
  @apply px-3 py-2 text-xs;
}

.button-md {
  @apply px-3 py-2 text-sm;
}

.button-lg {
  @apply px-5 py-2;
}

.button-block {
  @apply w-full py-2 text-center block;
}

/* ------------ variant styles --------- */

.button-default {
  @apply bg-gray-300 hover:bg-gray-400;
}

.button-outline {
  @apply border border-gray-300 hover:bg-gray-400 hover:border-gray-400;
}

.button-success,
.button-danger,
.button-info,
.button-primary,
.button-warning {
  color: #fff;
}

.button-outline-danger,
.button-outline-info,
.button-outline-primary,
.button-outline-success,
.button-outline-warning {
  @apply hover:text-white;
}

/* ---- variant success ---- */
.button-success {
  @apply bg-green-500 hover:bg-green-600;
}
.button-outline-success {
  @apply border border-green-500 hover:bg-green-600 hover:border-gray-600 text-green-500;
}

/* ----  variant danger  ----- */
.button-danger {
  @apply bg-red-500 hover:bg-red-600;
}

.button-outline-danger {
  @apply border border-red-500 hover:bg-red-600 hover:border-red-600 text-red-500;
}

/* ------- variant info ------ */
.button-info {
  @apply bg-purple-600 hover:bg-purple-700;
}
.button-outline-info {
  @apply border border-purple-600 hover:bg-purple-700 hover:border-purple-700 text-purple-600;
}

/* --- variant primary  ----- */
.button-primary {
  @apply bg-blue-600 hover:bg-blue-700;
}
.button-outline-primary {
  @apply border border-blue-600 hover:border-blue-600 hover:bg-blue-600 text-blue-600;
}

/* ---- variant warning ----- */
.button-warning {
  @apply bg-yellow-500 hover:bg-yellow-600;
}

.button-outline-warning {
  @apply border border-yellow-500 hover:bg-yellow-600 hover:bg-yellow-600 text-yellow-500;
}


</style>
