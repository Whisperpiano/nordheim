import { useRef } from "react";

export function useScrollToReviews() {
  const reviewsRef = useRef<HTMLDivElement>(null);

  const scrollToReviews = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return { reviewsRef, scrollToReviews };
}
