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
      label: '部门',
      placeholder: '请输入部门'
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
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
  tableName: '菜单列表',
  tableColumnsConfig: [
    { prop: 'name', label: '部门', minWidth: '130' },
    { prop: 'leader', label: '领导', minWidth: '120' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createTime' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateTime' },
    { label: '操作', minWidth: '150', slotName: 'handle' }
  ],
  showTableIndexColumn: false,
  showSelectColumn: false,
  showFooter: true
}
