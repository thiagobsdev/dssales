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

export type PieChartConfigType = {
    labels: string[];
    series: number[];
}
