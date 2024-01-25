
import "./styles.css"


type Props = {
  icon: string,
  value: number,
  label: string
}


function SalesSummuryCard( {icon, value, label}: Props) {
  return (
    <div className="sales-summary-card base-card">
      <img className="sales-summary-card-icon" src={icon} alt="Icone" />
       <h3 className="sales-summary-card-value">{value}</h3>
       <span className="sales-summary-card-label">{label}</span>
    </div>
  )
}

export default SalesSummuryCard
