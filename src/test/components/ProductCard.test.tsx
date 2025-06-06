import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import { mockProduct } from "../mocks/productMocks";
import ProductCard from "../../components/ProductCard/ProductCard.component";

// Mock ImageProduct to avoid image loading issues
vi.mock(
  "../../components/ProductCard/components/ImageProduct/ImageProduct.component",
  () => ({
    default: ({ className }: { className: string }) => (
      <div data-testid="mock-image" className={className}>
        Mock Image
      </div>
    ),
  })
);

// Mock RatingStars
vi.mock("../../components/RatingStars/RatingStars.component", () => ({
  default: ({ rating }: { rating: number }) => (
    <div data-testid="rating-stars">Rating: {rating}</div>
  ),
}));

describe("ProductCard Component", () => {
  it("renders product information correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price} kr`)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProduct.reviews.length} reviews`)
    ).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      `/products/${mockProduct.category}/${mockProduct.slug}`
    );
  });

  it("contains the product image component", () => {
    render(<ProductCard product={mockProduct} />);

    const imageComponent = screen.getByTestId("mock-image");
    expect(imageComponent).toBeInTheDocument();
    expect(imageComponent).toHaveClass(
      "object-cover aspect-[4/5] w-full group-hover:scale-105 transition-transform duration-700"
    );
  });
});
