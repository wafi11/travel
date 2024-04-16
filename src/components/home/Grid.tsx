import { imageUrl } from "../data/data";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const Grid = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center justify-center items-center my-5">
      <h1 className="text-4xl font-bold text-emerald-500 tracking-widest">
        Full Resorts
      </h1>
      <p className="py-4 text-md font-medium text-gray-300">
        Here is a location for reference
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 py-4 gap-2 md:gap-4 justify-center items-center">
        {imageUrl.map((img) => (
          <DirectionAwareHover imageUrl={img.image} key={img.image}>
            <p className="font-bold text-xl">{img.location}</p>
            <p className="font-normal text-sm">{img.cost}</p>
          </DirectionAwareHover>
        ))}
      </div>
    </div>
  );
};

export default Grid;
