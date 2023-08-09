import { types } from '@/baseUI/form'
import { ITableColumns, ITableData } from '@/baseUI/table/type'

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
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      placeholder: '请选择用户状态',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
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

export const tableColumnsConfig: ITableColumns[] = [
  { prop: 'name', label: '绰号', minWidth: '130' },
  { prop: 'realname', label: '姓名', minWidth: '120' },
  { prop: 'cellphone', label: '电话', minWidth: '180' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
  { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createTime' },
  { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateTime' },
  { label: '操作', minWidth: '150', slotName: 'handle' }
]

export const pageContentConfig: ITableData = {
  tableName: '菜单列表',
  tableColumnsConfig: [
    { prop: 'name', label: '菜单名称', minWidth: '130' },
    { prop: 'type', label: '类型', minWidth: '120' },
    { prop: 'url', label: '菜单url', minWidth: '180' },
    { prop: 'permission', label: '按钮权限', minWidth: '180' },
    { prop: 'icon', label: '菜单icon', minWidth: '100', slotName: 'icon' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createTime' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateTime' },
    { label: '操作', minWidth: '150', slotName: 'handle' }
  ],
  showTableIndexColumn: false,
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
