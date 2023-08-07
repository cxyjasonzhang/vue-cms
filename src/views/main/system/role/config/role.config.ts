import { types } from '@/baseUI/form'
import { ITableData } from '@/baseUI/table/type'

export const searchFormConfig: types.IForm = {
  labelWidth: '100px',
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名'
    },
    {
      field: 'userType',
      type: 'select',
      label: '用户类型',
      placeholder: '请选择用户类型',
      options: [
        { label: '超级会员', value: '1' },
        { label: '黄金会员', value: '2' }
      ]
    },
    {
      field: 'createAt',
      type: 'datePicker',
      label: '创建时间',
      placeholder: '请选择创建时间'
    }
  ]
}

export const pageContentConfig: ITableData = {
  tableColumnsConfig: [
    { prop: 'name', label: '姓名', minWidth: '130' },
    { prop: 'intro', label: '角色权限', minWidth: '120' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createTime' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateTime' },
    { label: '操作', minWidth: '150', slotName: 'handle' }
  ],
  showTableIndexColumn: false,
  showSelectColumn: false
}
