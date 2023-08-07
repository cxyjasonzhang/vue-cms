import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent> | null>(null)
  const handlerSearchClick = (payload: any) => {
    pageContentRef.value?.getPageData(payload)
  }
  const handlerResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  return [pageContentRef, handlerSearchClick, handlerResetClick]
}
