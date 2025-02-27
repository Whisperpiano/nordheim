import { SharedSelection } from "@heroui/system";

export interface OrderSummaryMobileProps {
  summaryOpen: boolean;
  handleSummaryOpen: (keys: SharedSelection) => void;
  selectedShipping: "economy" | "home";
}
