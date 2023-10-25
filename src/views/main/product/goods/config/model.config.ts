import { types } from '@/baseUI/form'

export const modalConfig: types.IForm = {
  labelWidth: '80px',
  colLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名',
      placeholder: '请输入商品名'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '新价格',
      placeholder: '请输入新价格'
    },
    {
      field: 'desc',
      type: 'textarea',
      label: '描述',
      placeholder: '请输入描述'
    }
  ]
}
