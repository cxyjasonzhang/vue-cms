export type FormType = 'input' | 'select' | 'password' | 'datePicker' | 'textarea'

export interface IFormItem {
  field: string
  type: FormType
  label: string
  rules?: any[]
  placeholder?: string
  // 针对select类型
  options?: any[]
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
