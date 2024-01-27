import { useEffect, useMemo, useState } from "react";
import { FilterData, SalesPageDataType, SalesReponse } from "../../types";
import { buildFiltersParams, makeRequest } from "../../utils/requests";
import "./styles.css"
import { formatDate, formatGender, formatPrice } from "../../utils/formatters";

type Props = {
  filterDates?: FilterData;
}

const extraParams = {
  page: 0,
  size: 12,
  sort: 'date,desc'
}

function SalesTable({filterDates}: Props) {

  const params = useMemo( ()=> buildFiltersParams(filterDates, extraParams),[filterDates])

  const [ tableData, setTableData] = useState<SalesPageDataType[]>([]) ;

  useEffect( () => {
    makeRequest.get<SalesReponse>("/sales", {params})
        .then( (response) => {
            const newSeriesChartData = response.data.content
            setTableData(newSeriesChartData);

        })
},[params] )


  return (
    <div className="sales-table-container base-card">
        <h3 className="sales-table-title" >Vendas recentes</h3>
        <table className="sales-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Data</th>
              <th>Gênero</th>
              <th>Categoria</th>
              <th>Loja</th>
              <th>Forma de pagamento</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            { tableData.length > 0 &&
              tableData.map( (x) => {
                return (
                  <tr key={x.id}>
                  <td>{`# ${x.id}`}</td>
                  <td>{formatDate(x.date)}</td>
                  <td>{formatGender(x.gender)}</td>
                  <td>{x.categoryName}	</td>
                  <td>{x.storeName}</td>
                  <td>{x.paymentMethod}</td>
                  <td>{formatPrice(x.total)}</td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default SalesTable
