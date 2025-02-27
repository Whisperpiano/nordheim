export interface CheckoutFormProps {
  setSelectedShipping: (shipping: "economy" | "home") => void;
  selectedShipping: "economy" | "home";
}
