import { chartOptions } from "./helpers"
import "./styles.css"
import ReactApexChart from "react-apexcharts"

const initialDate = [
  {
      x: '2020-01-01',
      y: 54
  }, {
      x: '2020-02-01',
      y: 66
  },
  {
    x: '2020-03-01',
    y: 40
},
{
  x: '2020-04-01',
  y: 40
},
{
  x: '2020-05-01',
  y: 40
}
];

function SalesByDate() {
  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Evolução das vendas</h4>
        <span className="sales-by-date-period">01/01/2017 a 31/01/2017</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
            <h2 className="sales-by-date-quantity">R$ 464.988,00</h2>
            <span className="sales-by-date-quantity-label" >Vendas no período</span>
            <span className="sales-by-date-quantity-description">O gráfico mostra as vendas em todas as lojas</span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
          options={chartOptions}
          series={[{name: 'Vendas', data: initialDate}]}
          type="bar"
          height={240}
          width="100%"/>
      </div>
      </div>

    </div>
  )
}

export default SalesByDate
