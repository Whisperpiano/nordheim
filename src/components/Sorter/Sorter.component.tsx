import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";

import { RiArrowDownSLine } from "react-icons/ri";
import { useSearchParams } from "react-router";
import { sortOptions } from "../../constants";

export default function Sorter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSort = searchParams.get("sort") || "featured";
  const [selectedSort, setSelectedSort] = useState(new Set([initialSort]));

  useEffect(() => {
    const sortValue = Array.from(selectedSort)[0];

    if (searchParams.get("sort") !== sortValue) {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set("sort", sortValue);
        return newParams;
      });
    }
  }, [selectedSort, setSearchParams, searchParams]);

  return (
    <Dropdown
      classNames={{
        content:
          "rounded-none -translate-x-3 -translate-y-1 bg-neutral-50 text-neutral-900 min-w-fit",
      }}
    >
      <DropdownTrigger className="font-condensed uppercase text-sm flex gap-1 items-center border-r border-neutral-300 px-10 py-4">
        <button className="min-w-[170px] flex justify-center">
          Sort by <RiArrowDownSLine />
        </button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Sort Options"
        selectionMode="single"
        selectedKeys={selectedSort}
        onSelectionChange={(keys) =>
          setSelectedSort(new Set(keys as Iterable<string>))
        }
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
