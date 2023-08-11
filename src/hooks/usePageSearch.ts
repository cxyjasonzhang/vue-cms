import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent> | null>(null)
  const handleSearchClick = (payload: any) => {
    pageContentRef.value?.getPageData(payload)
  }
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  return { pageContentRef, handleSearchClick, handleResetClick }
}
