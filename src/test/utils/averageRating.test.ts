import { describe, it, expect } from "vitest";
import { getAverageRating } from "../../utils/averageRating";

describe("getAverageRating Utility", () => {
  it("returns 0 when reviews array is empty", () => {
    const result = getAverageRating([]);
    expect(result).toBe(0);
  });

  it("calculates average correctly with single review", () => {
    const reviews = [{ rating: 5 }];
    const result = getAverageRating(reviews);
    expect(result).toBe(5);
  });

  it("calculates average correctly with multiple reviews", () => {
    const reviews = [{ rating: 3 }, { rating: 4 }, { rating: 5 }];
    const result = getAverageRating(reviews);
    expect(result).toBe(4); // (3 + 4 + 5) / 3 = 4
  });

  it("handles decimal results correctly", () => {
    const reviews = [{ rating: 2 }, { rating: 3 }, { rating: 4 }];
    const result = getAverageRating(reviews);
    expect(result).toBe(3); // (2 + 3 + 4) / 3 = 3
  });

  it("handles negative ratings correctly", () => {
    const reviews = [{ rating: -2 }, { rating: 4 }, { rating: 4 }];
    const result = getAverageRating(reviews);
    expect(result).toBe(2); // (-2 + 4 + 4) / 3 = 2
  });
});
