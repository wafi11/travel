import { dataImage } from "../data/data";
import CategoryItems from "./CategoryItems";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";

const Category = () => {
  const [params] = useSearchParams();

  const query = params.get("type");
  const querys = params.get("q");
  const filters = () => {
    let data: any[] = [];
    if (query) {
      data = dataImage.filter((item) =>
        query === null
          ? true
          : Array.isArray(query)
          ? query.includes(item.category)
          : item.category.includes(query)
      );
    } else {
      data = dataImage.filter((item) =>
        querys === null
          ? true
          : item.title.toLowerCase().includes(querys.toLowerCase())
      );
    }
    return data;
  };

  return (
    <div className={cn("max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 ")}>
      <CategoryItems />
      <ul
        className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 lg:grid-cols-4 gap-8 justofy-center items-center ">
        {filters()?.map((item) => {
          return (
            <a
              href={`product/${item.id}`}
              key={item.id}
              className="flex-col flex justify-center items-center">
              <img
                src={item.image}
                alt="../"
                className="w-[400px] h-[250px] object-cover "
              />
              <p className="text-gray-200 py-2 text-lg fon-medium">
                {item.title}
              </p>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
