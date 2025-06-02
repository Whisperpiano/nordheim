// Create mocks that match the expected structure for ProductCard
export const mockProduct = {
  id: "12345678-1234-1234-1234-123456789012", // Fixed ID instead of random
  title: "Test Product",
  slug: "test-product",
  price: 99.99,
  description: "This is a test product description",
  image: "/path/to/image.jpg",
  category: "city" as "city" | "mountain", // Type assertion to match the union literal
  // Properties that were missing according to the TypeScript error
  discount: null,
  features: ["Feature 1", "Feature 2"],
  // Reviews with the correct structure
  reviews: [
    {
      id: 1,
      title: "Great review",
      rating: 5,
      product_id: "12345678-1234-1234-1234-123456789012", // Added product_id
      username: "test-user",
      email: "test@example.com", // Added email
      review: "Great product!",
      verified: true,
    },
  ],
  // Variants with the necessary structure
  variants: [
    {
      id: "23456789-2345-2345-2345-234567890123",
      color: "red",
      product_id: "12345678-1234-1234-1234-123456789012",
      volume: 2.5,
      weight: 1.2,
      stock: 10,
      dimensions: "10x10x10",
      hex: "#ff0000",
    },
  ],
};

// For using in arrays
export const mockProducts = [
  mockProduct,
  {
    ...mockProduct,
    id: "98765432-9876-9876-9876-987654321098",
    slug: "test-product-2",
  },
];
