
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Filter from './components/filter'
import Header from './components/header'
import PieChartCard from './components/pie-chart-card'
import SalesByDateComponent from './components/sales-by-date-component'
import SalesSummary from './components/sales-summary'
import SalesTable from './components/sales-table'
import { FilterData, PieChartConfigType, SalesPaymentDataType, SalesStoreDataType } from './types'
import { buildFiltersParams, makeRequest } from './utils/requests'
import { buildSalesByPaymentChart, buildSalesByStoreChart } from './helpers'


function App() {

const [ filterData, setFilterData] = useState<FilterData>();

const [ salesStore, setSalesStore] = useState<PieChartConfigType>() ;
const [ salesPayment, setSalesPayment] = useState<PieChartConfigType>() ;

const params = useMemo( ()=> buildFiltersParams(filterData),[filterData])

useEffect( () => {
  makeRequest.get<SalesStoreDataType[]>("/sales/by-store", {params})
      .then( (response) => {
          const newChartSeries = buildSalesByStoreChart(response.data);
            setSalesStore(newChartSeries);
      })
},[params] )

useEffect( () => {
  makeRequest.get<SalesPaymentDataType[]>("/sales/by-payment-method", {params})
      .then( (response) => {
        const newPaymentChartSeries = buildSalesByPaymentChart(response.data);
        setSalesPayment(newPaymentChartSeries)
      })
},[params] )

function onChangeFilterData( filterChangeData : FilterData) {
  setFilterData(filterChangeData);
}

  return (
    <>
      <Header />
      <div className='app-container'>
        <Filter onFilterChange={onChangeFilterData}/>
        <SalesByDateComponent filterDates={filterData} />
        <div className='sales-overview-container'>
          <SalesSummary filterDates={filterData}/>
          <PieChartCard name='Lojas' labels={salesStore?.labels} series={salesStore?.series} />
          <PieChartCard name='Pagamentos' labels={salesPayment?.labels} series={salesPayment?.series} />
        </div>
        <SalesTable />
      </div>
    </>
  )
}

export default App
