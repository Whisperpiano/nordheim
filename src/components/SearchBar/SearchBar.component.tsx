import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@heroui/drawer";
import { RiSearchLine, RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import { useModalStore } from "../../store/modalStore";
import { useState } from "react";

export default function SearchBar() {
  const isSearchOpen = useModalStore((state) => state.isSearchOpen);
  const setSearchOpen = useModalStore((state) => state.setSearchOpen);

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

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
        backdrop: "bg-black/50  translate-y-[56px] z-30",
        base: "bg-neutral-50 max-h-none translate-y-[101px] z-40 rounded-none",
        closeButton: "translate-y-1.5 cursor-pointer text-2xl text-neutral-500",
        body: "px-0",
        wrapper: "translate-y-[56px] z-40 ",
      }}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="uppercase font-sans font-medium text-xl gap-3 ">
              <form
                className="w-full flex items-center gap-3"
                onSubmit={(e) => handleSubmit(e)}
              >
                <RiSearchLine size={24} className="text-neutral-500" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for..."
                  className="flex w-full placeholder:text-neutral-500 placeholder:font-condensed placeholder:uppercase placeholder:font-normal placeholder:text-xl outline-none me-10 bg-neutral-50"
                />
              </form>
            </DrawerHeader>

            {query.length > 0 && (
              <DrawerBody className="px-7 mt-6">
                <section className="grid grid-cols-4 gap-10">
                  <div className="col-span-1">
                    <span className="font-condensed font-medium uppercase text-sm mb-3 tracking-widest transition-colors data-[open=true]:text-neutral-950 text-neutral-500">
                      Top searches
                    </span>
                    <div className="w-full mt-3 mb-5 border-t border-neutral-300"></div>
                    <div className="flex flex-col gap-1">
                      <Link
                        to="/search?q=huger"
                        className="font-sans font-medium lowercase text-sm text-neutral-800"
                      >
                        huger
                      </Link>
                      <Link
                        to="/search?q=huger"
                        className="font-sans font-medium lowercase text-sm text-neutral-800"
                      >
                        huger
                      </Link>
                      <Link
                        to="/search?q=huger"
                        className="font-sans font-medium lowercase text-sm text-neutral-800"
                      >
                        huger
                      </Link>
                      <Link
                        to="/search?q=huger"
                        className="font-sans font-medium lowercase text-sm text-neutral-800"
                      >
                        huger
                      </Link>
                    </div>
                  </div>
                  <div className="col-span-3 ">
                    <span className="font-condensed font-medium uppercase text-sm mb-3 tracking-widest transition-colors data-[open=true]:text-neutral-950 text-neutral-500">
                      Products
                    </span>
                    <div className="w-full mt-3 mb-5 border-t border-neutral-300"></div>
                    <div className="grid grid-cols-3 gap-1">
                      <Link to="/products/city/hugger-backpack">
                        <article>
                          <img
                            src="/city.jpg"
                            alt="City"
                            className="object-cover aspect-[4/5] w-full"
                          />
                          <div className="p-4">
                            <h2 className="text-neutral-950 text-base font-semibold font-condensed">
                              Huger Backpack
                            </h2>
                            <span className="text-neutral-500 font-sans text-sm font-normal">
                              2995 kr
                            </span>
                            <div className="flex gap-2 items-center mt-1">
                              <div className="flex gap-0.5 items-center">
                                <RiStarFill size={12} />
                                <RiStarFill size={12} />
                                <RiStarFill size={12} />
                                <RiStarFill size={12} />
                                <RiStarHalfFill size={12} />
                              </div>
                              <span className="text-neutral-500 font-sans text-xs font-normal">
                                5 reviews
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>

                      <Link to="/products/city/hugger-backpack">
                        <article>
                          <img
                            src="/city.jpg"
                            alt="City"
                            className="object-cover aspect-[4/5] w-full"
                          />
                          <div className="p-4">
                            <h2 className="text-neutral-950 text-base font-semibold font-condensed">
                              Huger Backpack
                            </h2>
                            <span className="text-neutral-500 font-sans text-sm font-normal">
                              2995 kr
                            </span>
                            <div className="flex gap-2 items-center mt-1">
                              <div className="flex gap-0.5 items-center">
                                <RiStarFill size={12} />
                                <RiStarFill size={12} />
                                <RiStarFill size={12} />
                                <RiStarFill size={12} />
                                <RiStarHalfFill size={12} />
                              </div>
                              <span className="text-neutral-500 font-sans text-xs font-normal">
                                5 reviews
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>

                      <Link to="/products/city/hugger-backpack">
                        <article>
                          <img
                            src="/city.jpg"
                            alt="City"
                            className="object-cover aspect-[4/5] w-full"
                          />
                          <div className="p-4">
                            <h2 className="text-neutral-950 text-base font-semibold font-condensed">
                              Huger Backpack
                            </h2>
                            <span className="text-neutral-500 font-sans text-sm font-normal">
                              2995 kr
                            </span>
                            <div className="flex gap-2 items-center mt-1">
                              <div className="flex gap-0.5 items-center">
                                <RiStarFill size={12} />
                                <RiStarFill size={12} />
                                <RiStarFill size={12} />
                                <RiStarFill size={12} />
                                <RiStarHalfFill size={12} />
                              </div>
                              <span className="text-neutral-500 font-sans text-xs font-normal">
                                5 reviews
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="my-10 w-[180px] mx-auto">
                      <button
                        onClick={() => {
                          onClose();
                          navigate(`/search?q=${query}`);
                        }}
                        className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer "
                      >
                        View all results
                      </button>
                    </div>
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
