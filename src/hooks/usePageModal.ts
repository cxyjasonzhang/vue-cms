import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type callbackFn = (item?: any) => void

export function usePageModal(createCb?: callbackFn, editCb?: callbackFn) {
  const modelTitle = ref('用户新增')
  const modalRef = ref<InstanceType<typeof PageModal> | null>(null)

  const defaultInfo = ref({})

  function handleCreate() {
    modelTitle.value = '新增角色'
    defaultInfo.value = {}
    createCb && createCb()
    modalRef.value?.showDialog()
  }

  function handleEdit(item: any) {
    modelTitle.value = '编辑角色'
    defaultInfo.value = item
    editCb && editCb(item)
    modalRef.value?.showDialog()
  }
  return { modalRef, defaultInfo, modelTitle, handleCreate, handleEdit }
}
