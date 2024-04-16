import { useNavigate, useSearchParams } from "react-router-dom";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import { GiBarn, GiCactus, GiCaveEntrance, GiWindmill } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdSurfing } from "react-icons/md";
import { TbBeach, TbMountain, TbPoolOff } from "react-icons/tb";
import { IconType } from "react-icons/lib";
import { BiHomeAlt2 } from "react-icons/bi";

interface iAppProps {
  name: string;
  title: string;
  imageUrl: IconType;
  description: string;
  id: number;
}

export const dataCategoryItems: iAppProps[] = [
  {
    id: 0,
    name: "beach",
    description: "This Property is close to the Beach.",
    title: "Beach",
    imageUrl: TbBeach,
  },
  {
    id: 1,
    name: "trending",
    description: "This is a Property which is trending.",
    title: "Trending",
    imageUrl: GiWindmill,
  },
  {
    id: 2,
    name: "beachfront",
    description: "This is a Property is close to the beachfront",
    title: "Beachfront",
    imageUrl: BsSnow,
  },
  {
    id: 3,
    name: "erathhome",
    description: "This Property is considerd a Earth Home",
    title: "Earth Home",
    imageUrl: GiCactus,
  },
  {
    id: 4,
    name: "luxe",
    description: "This Property is considerd Luxorious",
    title: "Luxe",
    imageUrl: IoDiamond,
  },
  {
    id: 5,
    name: "amazingView",
    description: "This property has an amazing View",
    title: "Amazing View",
    imageUrl: GiCaveEntrance,
  },
  {
    id: 6,
    name: "design",
    description: "This property puts a big focus on design ",
    title: "Design",
    imageUrl: FaSkiing,
  },
  {
    id: 7,
    name: "pool",
    description: "This property has an amazing Pool",
    title: "Pool",
    imageUrl: TbPoolOff,
  },
  {
    id: 8,
    name: "hotels",
    description: "This property is considered a tiny home",
    title: "Hotels",
    imageUrl: MdOutlineVilla,
  },
  {
    id: 9,
    name: "historic",
    description: "This Property is considered historic",
    title: "Historic Home",
    imageUrl: BiHomeAlt2,
  },
  {
    id: 10,
    name: "countryside",
    description: "This Property is located on the countryside",
    title: "Countryside",
    imageUrl: TbMountain,
  },
  {
    id: 11,
    name: "omg",
    description: "This Property has a wow factor",
    title: "WOW!",
    imageUrl: GiBarn,
  },
  {
    id: 12,
    name: "surfing",
    description: "This Property is located near to a surfing spot",
    title: "Surfing",
    imageUrl: MdSurfing,
  },
];

const CategoryItems = () => {
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleCategory = (category: string) => {
    setSearchParams(`type=${category}`);
    navigate(`?type=${category}`);
  };
  return (
    <div
      className={`flex gap-11 py-3 justify-center items-center
     text-center overflow-x-auto no-scrollbar p-3 
    `}>
      {dataCategoryItems.map((Item) => (
        <div
          key={Item.id}
          onClick={() => handleCategory(Item.name)}
          className={`justify-center items-center cursor-pointer text-center flex flex-col py-4 gap-3 text-gray-200 hover:text-slate-500`}>
          <Item.imageUrl size={20} className=" text-2xl " />
          <p className={`text-xs font-medium `}>{Item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryItems;
