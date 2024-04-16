import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const InputSearch = () => {
  const [search, setSearch] = useState<string>("");
  console.log(search);

  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };
  return (
    <div className="hidden md:flex items-center justify-between">
      <div className="flex ">
        <input
          type="text"
          placeholder="Search locations...."
          className="focus:outline-none p-2 px-3 rounded bg-gray-100/20 placeholder-gray-200
        text-gray-100"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-gray-100/50 text-white p-2" type="submit">
          <a href={`/search?q=${search}`}>
            <BiSearch size={20} className="rounded-xl" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
