export const getAverageRating = (reviews: { rating: number }[]): number => {
  if (!reviews.length) return 0;
  return (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  );
};
