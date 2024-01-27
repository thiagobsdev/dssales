
import "./styles.css"
import SalesSummuryCard from "./sales-summary-card"
import DoneIcon from '../../assets/done-icon.svg'
import MaxIcon from '../../assets/max-icon.svg';
import MinIcon from '../../assets/min-icon.svg';
import QtdeIcon from '../../assets/qtde.svg';
import { FilterData, SalesSummaryData } from "../../types";
import { useEffect, useMemo, useState } from "react";
import { buildFiltersParams, makeRequest } from "../../utils/requests";


type Props = {
  filterDates?: FilterData;
}

function SalesSummary({filterDates}: Props) {

  const [ salesSummary, setSalesSummary] = useState<SalesSummaryData>() ;

  const params = useMemo( ()=> buildFiltersParams(filterDates),[filterDates])


  useEffect( () => {
      makeRequest.get<SalesSummaryData>("/sales/summary", {params})
          .then( response => {
             setSalesSummary(response.data)
          })
  },[params] )

  return (
    <div className="sales-summary-container">
        <SalesSummuryCard icon={DoneIcon} label="Média" value={salesSummary?.avg?.toFixed(2) || 0} />
        <SalesSummuryCard icon={QtdeIcon} label="Quantidade" value={salesSummary?.count || 0} />
        <SalesSummuryCard icon={MinIcon} label="Mínima" value={salesSummary?.min || 0} />
        <SalesSummuryCard icon={MaxIcon} label="Máxima" value={salesSummary?.max || 0} />
    </div>
  )
}

export default SalesSummary
