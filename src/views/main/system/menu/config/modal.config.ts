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
      label: '菜单名称',
      placeholder: '请输入菜单名称'
    },
    {
      field: 'type',
      type: 'input',
      label: '菜单种类',
      placeholder: '请输入菜单种类'
    },
    {
      field: 'url',
      type: 'input',
      label: '菜单路径',
      placeholder: '请输入菜单路径'
    },
    {
      field: 'icon',
      type: 'input',
      label: '图标选择',
      placeholder: '请选择图标'
    }
  ]
}
