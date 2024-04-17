import { useCallback, useState } from "react";
import { Menu, dataNav } from "./Menu";
import InputSearch from "./inputSearch";
import { MenuSquare, SearchIcon } from "lucide-react";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [color, setColor] = useState(false);

  const handleOpen = useCallback(() => {
    setNav(!nav);
  }, [nav]);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <header
      className={`${
        color ? "bg-slate-900 duration-300" : ""
      } w-full fixed z-10  p-4`}>
      <div className="w-full mx-auto flex justify-between gap-6 px-4">
        <a
          href="/"
          className="text-3xl font-bold text-emerald-500 px-7 py-4 uppercase">
          NextTravel
        </a>
        <Menu />
        <InputSearch />
        <button
          className="text-gray-200 md:hidden flex justfy-center items-center"
          onClick={handleOpen}>
          <MenuSquare size={30} />
        </button>
      </div>
      {nav ? (
        <div
          className={`${
            nav ? "top-0" : "top-10"
          } bg-white absolute h-screen w-screen left-0 container`}>
          <div className="container justify-center items-center relative">
            <div className="p-3">
              <h1 className="text-5xl font-bold text-emerald-500 py-5">
                NextTravel
              </h1>
              <button className="absolute right-5 top-10" onClick={handleOpen}>
                <IoClose size={30} />
              </button>
            </div>
            <form className="w-full flex justify-center py-4">
              <input
                type="text"
                placeholder="Search.."
                className="bg-gray-300/15 p-2 w-full rounded-md focus:outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
              <a
                href={`/search?q=${search}`}
                className="bg-gray-200
              cursor-pointer rounded-md w-10 text-center justify-center items-center flex">
                <SearchIcon size={20} />
              </a>
            </form>
            {
              <ul className="flex flex-col justify-center items-center text-center gap-4 pt-10 w-full">
                {dataNav.map((item) => (
                  <li
                    key={item.title}
                    className="p-2 w-full hover:bg-emerald-500 hover:text-gray-100">
                    <a href={item.href} className="text-lg font-medium  w-full">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            }
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default Navbar;
