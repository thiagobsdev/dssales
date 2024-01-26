
import './App.css'
import Filter from './components/filter'
import Header from './components/header'
import PieChartCard from './components/pie-chart-card'
import SalesByDate from './components/sales-by-date'
import SalesSummary from './components/sales-summary'
import SalesTable from './components/sales-table'

function App() {


  return (
    <>
      <Header />
      <div className='app-container'>
        <Filter/>
        <SalesByDate />
        <div className='sales-overview-container'>
          <SalesSummary />
          <PieChartCard name='Lojas' labels={['Guaruja','Uberlândia','Santos','Praia Grande']} series={[10,20,30,40]} />
          <PieChartCard name='Pagamentos' labels={['Crédito', 'Débito', 'Dinheiro']} series={[40,30,30]} />
        </div>
        <SalesTable />
      </div>
    </>
  )
}

export default App
