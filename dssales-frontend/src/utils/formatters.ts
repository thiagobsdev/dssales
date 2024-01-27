import { GenderType } from "../types";

export const formatPrice = ( price: number) => {
    return new Intl.NumberFormat('pt-BR',{
      currency: 'BRL',
      minimumFractionDigits:2,
      style: 'currency'
    }).format(price);
}

export const formatDate = (date: Date | string ) => {
  return new Date(date).toLocaleDateString();
}


export const formatDateToServer = ( date?: Date) => {
    if( date) {
      return date.toISOString().substring(0,10);
    }
}

export function formatGender( gender: GenderType) {
    const textByGender = {
      MALE: 'Masculino',
      FEMALE: 'Feminino',
      OTHER: 'Outro'
    }

    return textByGender[gender];
}
