import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@heroui/drawer";
import { RiSearchLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import { useModalStore } from "../../store/modalStore";
import { useMemo, useState } from "react";
import { topSearch } from "../../constants/topSearch";
import Button from "../Button/Button.component";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FullProduct } from "../../lib/schemas/productSchema";
import { getProductsByCategory } from "../../api/products/products";
import SearchProductCard from "../ProductCard/SearchProductCard.component";

export default function SearchBar() {
  const isSearchOpen = useModalStore((state) => state.isSearchOpen);
  const setSearchOpen = useModalStore((state) => state.setSearchOpen);

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const cachedMountainProducts = queryClient.getQueryData<FullProduct[]>([
    "products",
    "mountain",
  ]);

  const cachedCityProducts = queryClient.getQueryData<FullProduct[]>([
    "products",
    "city",
  ]);

  const { data: mountainProducts } = useQuery({
    queryKey: ["products", "mountain"],
    queryFn: () => {
      console.log("LOCO FETCHING");
      return getProductsByCategory("mountain");
    },
    staleTime: Infinity,
    enabled: cachedMountainProducts === undefined,
    placeholderData: cachedMountainProducts,
  });

  const { data: cityProducts } = useQuery({
    queryKey: ["products", "city"],
    queryFn: () => {
      console.log("LOCO FETCHING");
      return getProductsByCategory("city");
    },
    staleTime: Infinity,
    enabled: cachedCityProducts === undefined,
    placeholderData: cachedCityProducts,
  });

  const searchedProducts = useMemo(() => {
    const allProducts = [...(cityProducts ?? []), ...(mountainProducts ?? [])];

    if (!query.trim()) return allProducts;

    return allProducts
      .filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 3);
  }, [cityProducts, mountainProducts, query]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchOpen(false);
    navigate(`/search?q=${query}`);
  };
  return (
    <Drawer
      isOpen={isSearchOpen}
      onOpenChange={() => setSearchOpen(!isSearchOpen)}
      placement="top"
      classNames={{
        backdrop: "bg-black/50 translate-y-[56px] z-30",
        base: "bg-neutral-50 max-h-none translate-y-[101px] z-40 rounded-none",
        closeButton:
          "translate-y-1.5 cursor-pointer text-xl text-neutral-500 mr-3",
        body: "px-0",
        wrapper: "translate-y-[56px] z-40 ",
      }}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="uppercase font-sans font-medium text-lg gap-3 ">
              <form
                className="w-full flex items-center gap-3"
                onSubmit={(e) => handleSubmit(e)}
              >
                <RiSearchLine size={20} className="text-neutral-500" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for..."
                  className="flex w-full placeholder:text-neutral-500 placeholder:font-condensed placeholder:uppercase placeholder:font-normal placeholder:text-lg outline-none me-10 bg-neutral-50"
                />
              </form>
            </DrawerHeader>

            {query.length > 0 && (
              <DrawerBody className="px-7 mt-6">
                <section className="grid grid-cols-4 gap-10">
                  <div className="col-span-4 lg:col-span-1">
                    <span className="font-condensed font-medium uppercase text-sm mb-3 tracking-widest transition-colors data-[open=true]:text-neutral-950 text-neutral-500">
                      Top searches
                    </span>
                    <div className="w-full mt-3 mb-5 border-t border-neutral-300"></div>
                    <div className="flex flex-col gap-2 pb-4">
                      {topSearch.map((search) => (
                        <Link
                          key={search.key}
                          to={`/search?q=${search.label}`}
                          className="font-sans font-medium lowercase text-sm text-neutral-500 hover:text-neutral-800 transition-colors duration-300 ml-2"
                          onClick={() => {
                            onClose();
                          }}
                        >
                          {search.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-4 lg:col-span-3">
                    <span className="font-condensed font-medium uppercase text-sm mb-3 tracking-widest transition-colors data-[open=true]:text-neutral-950 text-neutral-500">
                      Products ({searchedProducts.length})
                    </span>
                    <div className="w-full mt-3 mb-5 border-t border-neutral-300"></div>
                    {searchedProducts.length === 0 ? (
                      <p className="text-neutral-500 font-sans font-normal text-sm">
                        No results could be found. Please try again with a
                        different query.
                      </p>
                    ) : (
                      <>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                          {searchedProducts.map((product) => (
                            <SearchProductCard
                              key={product.id}
                              product={product}
                              onClose={onClose}
                            />
                          ))}
                        </div>
                        <div className="my-10 w-[180px] mx-auto">
                          <Button
                            variant="primary"
                            size="md"
                            font="primary"
                            shape="square"
                            fontSize="sm"
                            onClick={() => {
                              onClose();
                              navigate(`/search?q=${query}`);
                            }}
                            className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer "
                          >
                            View all results
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </section>
              </DrawerBody>
            )}
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
