import { useState } from "react";
import { SharedSelection } from "@heroui/system";

export function useOpenSummary() {
  const [summaryOpen, setSummaryOpen] = useState(false);

  function handleSummaryOpen(keys: SharedSelection) {
    if (keys instanceof Set) {
      setSummaryOpen(keys.size > 0);
    } else {
      setSummaryOpen(false);
    }
  }

  return { summaryOpen, handleSummaryOpen };
}
