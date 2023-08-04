import { types } from '@/baseUI/form'
import { ITableColumns } from '@/baseUI/table/type'

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
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
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
      field: 'date',
      type: 'datePicker',
      label: '时间',
      placeholder: '请选择时间'
    }
  ]
}

export const tableColumnsConfig: ITableColumns[] = [
  { prop: 'name', label: '绰号', minWidth: '130' },
  { prop: 'realname', label: '姓名', minWidth: '120' },
  { prop: 'cellphone', label: '电话', minWidth: '180' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
  { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createTime' },
  { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateTime' }
]
