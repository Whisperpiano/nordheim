import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@heroui/drawer";
import { useNavigate } from "react-router";
import { useModalStore } from "../../store/modalStore";
import { useState } from "react";

import { useCacheProducts } from "../../hooks/searchbar/useCacheProducts";
import { useSearchedProducts } from "../../hooks/searchbar/useSearchedProducts";
import { searchBarStyles } from "./SearchBar.styles";

import SearchBarHeader from "./components/SearchBarHeader/SearchBarHeader.component";
import SearchBarBody from "./components/SearchBarBody/SearchBarBody.component";

export default function SearchBar() {
  const isSearchOpen = useModalStore((state) => state.isSearchOpen);
  const setSearchOpen = useModalStore((state) => state.setSearchOpen);

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { mountainProducts, cityProducts } = useCacheProducts();
  const searchedProducts = useSearchedProducts(
    query,
    mountainProducts ?? [],
    cityProducts ?? []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchOpen(false);
    navigate(`/search?q=${query}`);
    setQuery("");
  };

  return (
    <Drawer
      isOpen={isSearchOpen}
      onOpenChange={() => {
        if (isSearchOpen || query.length > 0) {
          setQuery("");
        }

        setSearchOpen(!isSearchOpen);
      }}
      placement="top"
      classNames={searchBarStyles}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="uppercase font-sans font-medium text-base md:text-lg gap-3 ">
              <SearchBarHeader
                query={query}
                setQuery={setQuery}
                handleSubmit={handleSubmit}
              />
            </DrawerHeader>

            {query.length > 0 && (
              <DrawerBody className="px-7 mt-3 md:mt-6">
                <SearchBarBody
                  query={query}
                  onClose={onClose}
                  navigate={navigate}
                  searchedProducts={searchedProducts}
                />
              </DrawerBody>
            )}
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
