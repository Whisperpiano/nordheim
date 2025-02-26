export const formatWeight = (weight: number): string => {
  return weight < 1000
    ? (weight / 1000).toFixed(3).replace(".", ",")
    : (weight / 1000).toLocaleString("no-NO", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      });
};
