export type FormType = 'input' | 'select' | 'password' | 'datePicker'

export interface IFormItem {
  field: string
  type: FormType
  label: string
  rules?: any[]
  placeholder?: string
  // 针对select类型
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
