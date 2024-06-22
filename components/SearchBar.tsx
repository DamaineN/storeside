"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
      <input
        className="outline-none max-sm:max-w-[120px]"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        disabled={query === ""}
        onClick={() => router.push(`/search/${query}`)}
      >
        <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
      </button>
    </div>
  );
};

export default SearchBar;
