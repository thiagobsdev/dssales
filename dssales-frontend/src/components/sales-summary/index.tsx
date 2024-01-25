
import "./styles.css"
import SalesSummuryCard from "./sales-summary-card"
import DoneIcon from '../../assets/done-icon.svg'
import MaxIcon from '../../assets/max-icon.svg';
import MinIcon from '../../assets/min-icon.svg';
import QtdeIcon from '../../assets/qtde.svg';


function SalesSummary() {
  return (
    <div className="sales-summary-container">
        <SalesSummuryCard icon={DoneIcon} label="Média" value={534.00} />
        <SalesSummuryCard icon={QtdeIcon} label="Quantidade" value={44434} />
        <SalesSummuryCard icon={MinIcon} label="Mínima" value={434.00} />
        <SalesSummuryCard icon={MaxIcon} label="Máxima" value={3434.00} />
    </div>
  )
}

export default SalesSummary
