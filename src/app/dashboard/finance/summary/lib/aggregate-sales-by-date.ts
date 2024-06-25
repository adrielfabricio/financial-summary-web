export const aggregateSalesByDate = (sales: Sale[]) => {
  const salesByDate: { [key: string]: number } = {}

  sales.forEach((sale) => {
    const saleDate = new Date(sale.saleDate).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    if (salesByDate[saleDate]) {
      salesByDate[saleDate] += parseFloat(sale.totalValue.toString())
    } else {
      salesByDate[saleDate] = parseFloat(sale.totalValue.toString())
    }
  })

  const sortedSalesByDate: { [key: string]: number } = {}

  Object.keys(salesByDate)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    .forEach((key) => {
      sortedSalesByDate[key] = salesByDate[key]
    })

  return Object.keys(sortedSalesByDate).map((date) => ({
    date: date,
    Valor: sortedSalesByDate[date],
  }))
}
