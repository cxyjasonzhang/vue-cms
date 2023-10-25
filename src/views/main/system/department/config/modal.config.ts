import { types } from '@/baseUI/form'

export const modalConfig: types.IForm = {
  labelWidth: '100px',
  colLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名',
      placeholder: '请输入部门名'
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导',
      placeholder: '请输入部门领导'
    }
  ]
}
