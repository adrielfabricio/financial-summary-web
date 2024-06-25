export const aggregateSalesByProductType = (sales: Sale[]) => {
  const salesByProductType: { [key: string]: number } = {}

  sales.forEach((sale) => {
    const productName = sale.product.description
    if (salesByProductType[productName]) {
      salesByProductType[productName] += 1
    } else {
      salesByProductType[productName] = 1
    }
  })

  const sortedSalesByProductType: { [key: string]: number } = {}

  Object.keys(salesByProductType)
    .sort((a, b) => salesByProductType[b] - salesByProductType[a])
    .forEach((key) => {
      sortedSalesByProductType[key] = salesByProductType[key]
    })

  return Object.keys(sortedSalesByProductType)
    .slice(0, 15)
    .map((productType) => ({
      name: `${productType}`,
      Quantidade: sortedSalesByProductType[productType],
    }))
}
