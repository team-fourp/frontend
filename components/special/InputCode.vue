<template>
  <div class="input-code">
    <div
      v-for="item in amount"
      :key="item" class="input-wrapper"
      :class="{ 'error': error }">
      <input
        v-model="code[item - 1]"
        v-focus="(item  - 1) === currentIndex"
        type="number"
        title="code"
        max="1"
        @focus="onFocus"
        @paste="handlePaste"
        @input="handleInput($event,(item - 1))"
        @keyup.delete="onDelete($event,(item - 1))">
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      componentUpdated: (el, object) => {
        object.value && el.focus()
      }
    }
  },
  props: {
    amount: {
      type: Number,
      default: 6
    },
    error: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      code: [],
      currentIndex: 0
    }
  },
  created() {
    this.code = new Array(this.amount).fill('')
  },
  methods: {
    handlePaste(e) {
      e.preventDefault()
    },
    handleInput(e, index) {
      this.currentIndex = index
      if (e.target.value.length === 1) {
        e.target.value = this.validateNumber(e.target.value)
        e.target.value !== '' && ++this.currentIndex
        !this.code.includes('') && this.$emit('completed', this.code.join(''))
      } else if (e.target.value.length > 1) {
        this.code[index] = e.target.value.charAt(0)
        this.code[index + 1] = e.target.value.charAt(e.target.value.length  - 1)
        ++this.currentIndex
      }

      if (index === this.amount - 1) {
        this.code = new Array(this.amount).fill('')
        e.target.blur()
      }
    },
    onDelete(e, index) {
      if (e.target.value === '') {
        this.currentIndex = index - 1
      }
    },
    validateNumber (val) {
      return val.replace(/\D/g, '')
    },
    onFocus() {
      if (this.error) {
        this.$emit('onRemoveError')
      }
    },
    resetCode() {
      this.code = new Array(this.amount).fill('')
    }
  }
}
</script>

<style scoped lang="postcss">
.input-code {
  @apply w-full flex justify-center items-center;
}
.input-wrapper{
  @apply border border-gray-400 pb-12 h-0 relative w-12 rounded-md mr-2;
}

.input-wrapper input {
  @apply h-full w-full text-center transition-all absolute focus:outline-none rounded-md;
}

.error {
  @apply border-red-600 text-red-600;
}
.error input {
  @apply border-red-600 text-red-600;
}

/* Chrome, Safari, Edge, Opera */
.input-wrapper input::-webkit-outer-spin-button,
.input-wrapper input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

</style>
