import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type callbackFn = () => void

export function usePageModal(createCb: callbackFn, editCb?: callbackFn) {
  const modalRef = ref<InstanceType<typeof PageModal> | null>(null)

  const defaultInfo = ref({})

  function handleCreate() {
    defaultInfo.value = {}
    createCb && createCb()
    modalRef.value?.showDialog()
  }

  function handleEdit(item: any) {
    defaultInfo.value = item
    editCb && editCb()
    modalRef.value?.showDialog()
  }
  return { modalRef, defaultInfo, handleCreate, handleEdit }
}
