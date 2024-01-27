export const formatPrice = ( price: number) => {
    return new Intl.NumberFormat('pt-BR',{
      currency: 'BRL',
      minimumFractionDigits:2,
      style: 'currency'
    }).format(price);
}

export const formatDate = (date: Date ) => {
  return date.toLocaleDateString();
}
