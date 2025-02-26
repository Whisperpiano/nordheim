export interface QuantityCounterProps {
  quantity: number;
  stock: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}
