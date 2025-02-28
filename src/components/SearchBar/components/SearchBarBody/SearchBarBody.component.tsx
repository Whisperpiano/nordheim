import { Link } from "react-router";
import { topSearch } from "../../../../config/config";
import { SearchBarBodyProps } from "./SearchBarBody.types";

import SearchProductCard from "../SearchProductCard/SearchProductCard.component";
import Button from "../../../Button/Button.component";

export default function SearchBarBody({
  searchedProducts,
  query,
  onClose,
  navigate,
}: SearchBarBodyProps) {
  return (
    <section className="grid grid-cols-4 gap-3 lg:gap-10">
      <div className="col-span-4 lg:col-span-1">
        <span className="font-condensed font-medium uppercase text-xs md:text-sm mb-3 tracking-widest transition-colors data-[open=true]:text-neutral-950 text-neutral-500">
          Top searches
        </span>
        <div className="w-full mt-3 mb-5 border-t border-neutral-300"></div>
        <div className="flex flex-col gap-2 pb-4">
          {topSearch.map((search) => (
            <Link
              key={search.key}
              to={`/search?q=${search.label}`}
              className="font-sans font-medium lowercase text-xs md:text-sm text-neutral-500 hover:text-neutral-800 transition-colors duration-300 ml-2"
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
          <p className="text-neutral-500 font-sans font-normal text-sm pb-4 lg:pb-0">
            No results could be found. Please try again with a different query.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-1">
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
                fontSize="md"
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
  );
}
