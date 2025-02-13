export interface Review {
  email: string;
  id: number;
  product_id: string;
  rating: number;
  review: string;
  title: string;
  username: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    email: "alice.smith@example.com",
    id: 1,
    product_id: "016e2a3d-f10d-4ccd-9ad9-5c5d6cfc17e1",
    rating: 5,
    review:
      "I've been using this backpack for a few weeks now, and I have to say it's exceeded my expectations.",
    title: "Best backpack ever! Stylish and functional",
    username: "Alice Smith",
    verified: true,
  },
  {
    email: "bob.johnson@example.com",
    id: 2,
    product_id: "016e2a3d-f10d-4ccd-9ad9-5c5d6cfc17e1",
    rating: 4.5,
    review:
      "I purchased this backpack mainly for work, but it’s surprisingly versatile. The quality is top-notch, and you can tell it was designed with attention to detail. The zippers feel sturdy, the seams are strong, and the pockets are well-placed. My only minor complaint is that the shoulder straps, while padded, could use a bit more cushioning for extended wear. I often carry heavy books, and after a few hours, I can start to feel the strain. That said, it’s still one of the best backpacks I’ve owned, and I would absolutely buy it again. It's sleek, professional-looking, and fits everything I need.",
    title: "Great quality, minor flaws",
    username: "Bob Johnson",
    verified: true,
  },
  {
    email: "charlie.adams@example.com",
    id: 3,
    product_id: "016e2a3d-f10d-4ccd-9ad9-5c5d6cfc17e1",
    rating: 4,
    review:
      "This is a solid backpack with lots of space and useful compartments. I love that it has a dedicated laptop sleeve and an external water bottle pocket, which many premium backpacks seem to overlook.",
    title: "Spacious but lacks internal organization",
    username: "Charlie Adams",
    verified: false,
  },
  {
    email: "diana.lee@example.com",
    id: 4,
    product_id: "016e2a3d-f10d-4ccd-9ad9-5c5d6cfc17e1",
    rating: 5,
    review:
      "I was looking for a backpack that I could use for both work and travel, and this one hits all the right marks. The design is sleek and professional, yet it's spacious enough to fit everything I need for a short trip. I love how lightweight it is despite being made from high-quality materials. The reinforced stitching gives me confidence that it will last for years. I also like the hidden anti-theft pocket at the back, which is perfect for keeping important items safe when commuting. Overall, this is hands-down one of the best backpacks I've ever owned!",
    title: "Perfect for both work and travel",
    username: "Diana Lee",
    verified: true,
  },
  {
    email: "eric.wilson@example.com",
    id: 5,
    product_id: "016e2a3d-f10d-4ccd-9ad9-5c5d6cfc17e1",
    rating: 3.5,
    review:
      "I was excited to try this backpack based on all the great reviews, but I have mixed feelings about it. The design is fantastic, and it definitely has a premium feel. The material is sturdy, and the zippers seem well-made. However, I was disappointed with the lack of padding on the back panel. When carrying heavier items, the hard edges of my laptop can be felt pressing against my back, which is uncomfortable over time. I also think the straps could be a bit wider for better weight distribution. It’s a stylish and durable backpack, but there are a few design tweaks that could make it much better.",
    title: "Decent but could be improved",
    username: "Eric Wilson",
    verified: false,
  },
];
