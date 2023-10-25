import { computed } from 'vue'

export function useVModel(props: any, propName: any, emits: any) {
  return computed({
    get() {
      return new Proxy(props[propName], {
        get(target, key) {
          return Reflect.get(target, key)
        },
        set(target, key, value) {
          console.log('更新')
          emits('update:modelValue', { ...target, [key]: value })
          return true
        }
      })
    },
    set(val) {
      console.log('触发更新', val)
      emits('update:modelValue', { ...val })
    }
  })
}
