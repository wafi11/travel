import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Banner = () => {
  const [imgBg, setImgBg] = useState<string | null>(null);
  const handleClickBg = (bg: string) => {
    setImgBg(bg);
  };
  console.log(imgBg);
  return (
    <div className="max-w-[1240px] min-h-[550px] mx-auto px-4 py-16 mt-10 relative justify-center items-center ">
      <div className="flex flex-col  items-center justify-center">
        <img
          src={
            imgBg ||
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="../"
          className="w-full h-[550px] object-cover brightness-50"
        />
        <div className="text-center flex flex-col gap-4 justify-center items-center absolute ">
          <h1 className="text-emerald-300/50 text-center text-3xl font-bold tracking-wide uppercase">
            Enjoy your trips{" "}
          </h1>
          <p className="text-lg px-7 font-medium text-gray-200/50">
            You Can find Anything Destinatios, Have fun trips
          </p>
          <div className="grid md:grid-cols-4 grid-cols-2  gap-4">
            {images.map((img, i) => (
              <img
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover rounded-2xl hover:translate-y-3 duration-300"
                src={img}
                key={i}
                onClick={() => handleClickBg(img)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
