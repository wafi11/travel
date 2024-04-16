import { useCallback, useState } from "react";
import { Menu } from "./Menu";
import InputSearch from "./inputSearch";
import { MenuSquare } from "lucide-react";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleOpen = useCallback(() => {
    setNav(!nav);
  }, []);

  const [color, setColor] = useState(false);

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
        <button className="text-gray-200 md:hidden flex justfy-center items-center">
          <MenuSquare size={30} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
