import axios from "axios"
import { FilterData } from "../types"
import { formatDateToServer } from "./formatters"

const baseURL = "http://localhost:8080"

export const makeRequest = axios.create ( {
  baseURL
})


export const buildFiltersParams = ( filterData?: FilterData, extraParams?: Record<string, unknown> | undefined ) => {

  if(filterData ) {
    return {
      minDate: formatDateToServer(filterData?.dates?.[0]),
      maxDate: formatDateToServer(filterData?.dates?.[1]),
      gender: filterData?.gender,
      ...extraParams
    }
  }


}

