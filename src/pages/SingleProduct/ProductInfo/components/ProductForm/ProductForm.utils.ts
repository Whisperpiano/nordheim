export const getStockText = (stock: number) => {
  return stock > 10 ? "In stock" : stock > 0 ? "Few left" : "Out of stock";
};

export const getStockClass = (stock: number) => {
  return stock > 10
    ? "bg-green-500"
    : stock > 0
    ? "bg-amber-500"
    : "bg-red-500";
};
