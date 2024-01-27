export type SalesByDateType = {
  date: string,
  sum: number
}

export type ChartSeriesData = {
  x: string,
  y: number
}

export type GenderType = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData ={
  dates?: Date[];
  gender?: GenderType
  extraParams?: Record<string, unknown>
}

export type SalesSummaryData = {
  sum?: number,
  min: number,
  max: number,
  avg?: number,
  count: number
}

export type SalesStoreDataType =  {
  storeName: string ,
  sum: number
}

export type SalesPaymentDataType =  {
  description: string ,
  sum: number
}

export type SalesReponse =  {
  content: SalesPageDataType[]
}

export type SalesPageDataType =  {
  id: number,
  date: string,
  volume: number,
  total: number,
  gender: GenderType,
  categoryName: string,
  paymentMethod: string,
  storeName: string
}

export type PieChartConfigType = {
    labels: string[];
    series: number[];
}


