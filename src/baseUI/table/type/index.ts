export interface ITableColumns {
  prop?: string
  label: string
  minWidth: string
  slotName?: string
}

export interface ITableData {
  tableColumnsConfig: ITableColumns[]
  showTableIndexColumn?: boolean
  showSelectColumn?: boolean
  tableName?: string
}
