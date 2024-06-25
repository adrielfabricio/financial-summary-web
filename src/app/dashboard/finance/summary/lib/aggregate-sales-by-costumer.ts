export const aggregateSalesByCustomer = (sales: Sale[]) => {
  const salesByCustomer: { [key: string]: number } = {}

  sales.forEach((sale) => {
    const customerName = sale.customer.name
    if (salesByCustomer[customerName]) {
      salesByCustomer[customerName] += parseFloat(sale.totalValue.toString())
    } else {
      salesByCustomer[customerName] = parseFloat(sale.totalValue.toString())
    }
  })

  const sortedSalesByCustomer: { [key: string]: number } = {}

  Object.keys(salesByCustomer)
    .sort((a, b) => salesByCustomer[b] - salesByCustomer[a])
    .forEach((key) => {
      sortedSalesByCustomer[key] = salesByCustomer[key]
    })

  return Object.keys(sortedSalesByCustomer)
    .slice(0, 15)
    .map((customer) => ({
      name: `${customer}`,
      Valor: sortedSalesByCustomer[customer],
    }))
}
