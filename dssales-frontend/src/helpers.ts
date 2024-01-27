import { SalesPaymentDataType, SalesStoreDataType } from "./types";

export const buildSalesByStoreChart = ( salesStore: SalesStoreDataType[]) => {
    let labels:string[] =  [];
    let series: number[] = []

    if( salesStore) {
      salesStore.map( (x) => labels.push(x.storeName) )
      salesStore.map( (x) => series.push(x.sum) )
    }

      return {
        labels,
        series
      }
}


export const buildSalesByPaymentChart = ( salesStore: SalesPaymentDataType[]) => {
  let labels:string[] =  [];
  let series: number[] = []

  if( salesStore) {
    salesStore.map( (x) => labels.push(x.description) )
    salesStore.map( (x) => series.push(x.sum) )
  }
    return {
      labels,
      series
    }
}
