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
      label: '商品名',
      placeholder: '请输入商品名'
    },
    {
      field: 'address',
      type: 'input',
      label: '发货地',
      placeholder: '请输入发货地'
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
    { prop: 'name', label: '商品名', minWidth: '130' },
    { prop: 'oldPrice', label: '原价', minWidth: '120', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价', minWidth: '180', slotName: 'newPrice' },
    { prop: 'desc', label: '描述', minWidth: '100' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '250', slotName: 'goodImg' },
    { prop: 'address', label: '发货地', minWidth: '250' },
    { label: '操作', minWidth: '150', slotName: 'handle' }
  ],
  showTableIndexColumn: false,
  showSelectColumn: true
}
