export const aggregateSalesByLocality = (sales: Sale[]) => {
  const salesByLocality: { [key: string]: number } = {}

  sales.forEach((sale) => {
    const localityName = sale.locality.description
    if (salesByLocality[localityName]) {
      salesByLocality[localityName] += 1
    } else {
      salesByLocality[localityName] = 1
    }
  })

  const sortedSalesByLocality: { [key: string]: number } = {}

  Object.keys(salesByLocality)
    .sort((a, b) => salesByLocality[b] - salesByLocality[a])
    .forEach((key) => {
      sortedSalesByLocality[key] = salesByLocality[key]
    })

  return Object.keys(sortedSalesByLocality).map((locality) => ({
    name: `${locality}`,
    Quantidade: sortedSalesByLocality[locality],
  }))
}
