import { useEffect, useState } from "react";
import { buildChartSeries, chartOptions, sumSalesByDate } from "./helpers"
import "./styles.css"
import ReactApexChart from "react-apexcharts"
import { makeRequest } from "../../utils/requests";
import { ChartSeriesData, FilterData, SalesByDateType } from "../../types";
import { formatDate, formatPrice } from "../../utils/formatters";

type Props = {
  filterDates?: FilterData;
}

function SalesByDateComponent( {filterDates}: Props) {

  const [ chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]) ;
  const [ totalSum, setTotalSum] = useState<number>(0) ;


  useEffect( () => {
      makeRequest.get<SalesByDateType[]>("/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE")
          .then( (response) => {
              const newSeriesChartData = buildChartSeries(response.data);
              setChartSeries(newSeriesChartData);
              setTotalSum( sumSalesByDate(response.data));
          })
  },[chartSeries] )

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Evolução das vendas</h4>
        {filterDates?.dates && (
            <span className="sales-by-date-period">
             {`${formatDate(filterDates?.dates?.[0])}
              até
              ${formatDate(filterDates?.dates?.[1])}`}
          </span>
          )}
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
            <h2 className="sales-by-date-quantity">{formatPrice(totalSum)}</h2>
            <span className="sales-by-date-quantity-label" >Vendas no período</span>
            <span className="sales-by-date-quantity-description">O gráfico mostra as vendas em todas as lojas</span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
          options={chartOptions}
          series={[{name: 'Vendas', data: chartSeries}]}
          type="bar"
          height={240}
          width="100%"/>
      </div>
      </div>

    </div>
  )
}

export default SalesByDateComponent
