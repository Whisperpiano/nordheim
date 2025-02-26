import { useState } from "react";
import { useSearchParams } from "react-router";
import { SharedSelection } from "@heroui/system";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";

import { RiArrowDownSLine } from "react-icons/ri";
import { sortOptions } from "../../../constants";

export default function Sorter() {
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

  return (
    <Dropdown
      classNames={{
        content:
          "rounded-none translate-x-3 -translate-y-1 bg-neutral-50 text-neutral-900 min-w-fit",
      }}
    >
      <DropdownTrigger className="font-condensed uppercase text-sm flex gap-1 items-center border-l border-neutral-300 px-10 py-4">
        <button className="min-w-[170px] flex justify-center">
          Sort by <RiArrowDownSLine />
        </button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Sort Options"
        selectionMode="single"
        selectedKeys={selectedSort}
        onSelectionChange={handleSelectionChange}
        disallowEmptySelection
      >
        {sortOptions.map((option) => (
          <DropdownItem
            key={option.value}
            classNames={{ base: "rounded-none" }}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
