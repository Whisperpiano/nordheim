import { useState } from "react";
import { useSearchParams } from "react-router";
import { SharedSelection } from "@heroui/system";

export function useSortHandler() {
  const [selectedSort, setSelectedSort] = useState<Set<string>>(
    new Set(["featured"])
  );
  const [, setSearchParams] = useSearchParams();

  const handleSelectionChange = (keys: SharedSelection) => {
    const stringKeys = new Set<string>(
      Array.from(keys).map((key) => String(key))
    );

    setSelectedSort(stringKeys);

    const [selectedKey] = stringKeys;

    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("sort", selectedKey);
      return newParams;
    });
  };

  return { selectedSort, handleSelectionChange };
}
