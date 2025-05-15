import { Search, X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef, useState } from "react";

export default function Navbar({
  setSearch,
}: {
  setSearch: React.Dispatch<string>;
}) {
  const [searchOpen, setsearchOpen] = useState(false);
  useEffect(() => {
    console.log(searchOpen);
  }, [searchOpen]);

  const input = useRef<HTMLInputElement>(null);

  function focusInput() {
    input.current?.focus();
  }

  return (
    <nav
      className={twMerge(
        "fixed top-0 inset-x-0 container mx-auto px-5 py-7 flex gap-5 bg-white/50 backdrop-blur-xl",
        searchOpen ? "justify-end lg:justify-between" : "justify-between",
      )}
    >
      <img
        src="/img/logo.svg"
        alt="Logo"
        className={searchOpen ? "hidden lg:inline" : ""}
      />
      <label
        className={twMerge(
          "cursor-pointer flex gap-2 text-gray-400 bg-gray-100 outline px-2.5 h-10 outline-gray-200 justify-center items-center rounded-lg",
          !searchOpen && "size-10 lg:h-fill lg:w-fit",
        )}
        htmlFor="search"
        onClick={() => {
          if (!searchOpen) setsearchOpen(!searchOpen);
          setTimeout(() => {
            focusInput();
          }, 0);
        }}
      >
        <Search />
        <input
          type="text"
          placeholder="Search..."
          name="search"
          className={twMerge("outline-none", !searchOpen && "hidden lg:inline")}
          ref={input}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      {searchOpen && (
        <button
          className="bg-gray-100 outline outline-gray-200 size-10 inline-flex justify-center items-center rounded-lg text-gray-400 cursor-pointer lg:hidden"
          onClick={() => setsearchOpen(!searchOpen)}
        >
          <X />
        </button>
      )}
    </nav>
  );
}
