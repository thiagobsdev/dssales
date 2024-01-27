import "./styles.css"
import "flatpickr/dist/themes/material_green.css";
import flatpickrLib from "flatpickr"
import { Portuguese} from "flatpickr/dist/l10n/pt"
import FlatPicker from "react-flatpickr"
import { useState } from "react";
import { FilterData, GenderType } from "../../types";

flatpickrLib.localize(Portuguese);

type Props = {
  onFilterChange: (filter: FilterData )=> void;
}

function Filter( {onFilterChange}: Props) {

  const[dates, setDate] = useState<Date[]>([])
  const[gender, setGender] = useState<GenderType>();

  const onChangeDate = (dates: Date[]) => {
    if(dates.length === 2) {
        setDate(dates);
        onFilterChange( {dates,gender })
    }
  }

  const onChangeGender = ( event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedGender = event.target.value as GenderType;
      setGender(selectedGender);
      onFilterChange( {dates,gender:selectedGender  })
  }


  return (
    <div className="filter-container base-card">
        <FlatPicker
        options={{
          mode:"range",
          dateFormat:"d/m/Y",
          showMonths:2
        }}
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Selecione um período"
        />
        <select className="filter-input" value={gender} onChange={onChangeGender}>
          <option value="">Selecione um gênero</option>
          <option value="MALE">Masculino</option>
          <option value="FEMALE">Feminino</option>
          <option value="OTHER">Outro</option>
        </select>
    </div>

  )
}

export default Filter
