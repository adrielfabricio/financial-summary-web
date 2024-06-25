export const transformSalesToTableSales = (sales: Sale[]): TableSale[] => {
  return sales.map((sale) => ({
    customer: sale.customer.name,
    date: new Date(sale.saleDate).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    id: sale.id.toString(),
    location: sale.locality.description,
    product: sale.product.description,
    total: sale.totalValue,
  }))
}
