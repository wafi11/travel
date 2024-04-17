import { motion } from "framer-motion";
import React, { useState } from "react";
import { ImagesSlider } from "../ui/Image-Slider";
import { GrNext, GrPrevious } from "react-icons/gr";

type Objectype = {
  id: number;
  img: string;
  title: string;
};

interface ImageSliderProps {
  imageList: Objectype[];
}

const images = [
  "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
export const ImagesSliderDemo: React.FC<ImageSliderProps> = ({ imageList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const NextSlide = () => {
    const islastIndex = currentIndex === imageList.length - 1;
    const newindex = islastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newindex);
  };

  return (
    <ImagesSlider
      className="h-screen relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center"
      images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 container pb-8 sm:pb-0">
        <div className="flex justify-between  gap-8">
          <div className="flex-col flex p-3 gap-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-200 ">
              Welcome To
            </h1>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-200">
              NextTravel
            </h3>
            <div className="grid gap-4 py-4">
              <p className="text-white w-[400px] text-lg">
                NexTravel that help travelers plan their trips, discover
                destinations, book accommodations, and organize their
                itineraries.
              </p>
              <button className="bg-gray-100/30 p-2 w-[150px] text-gray-900 font-semibold rounded-lg">
                More info
              </button>
            </div>
          </div>
          <div className="sm:flex gap-8  justify-center items-center overflow-hidden hidden">
            <button
              className="text-gray-100  bg-gray-200/15 rounded-full  p-2"
              onClick={prevSlide}>
              <GrPrevious size={20} />
            </button>
            {imageList.map((item) => (
              <React.StrictMode key={item.id}>
                <img
                  src={item.img}
                  alt="../"
                  className={`${
                    item.id === currentIndex
                      ? "scale-125 absolute shadow-2xl  rounded-xl  duration-300"
                      : "flex"
                  } w-[200px]  h-[300px] object-cover border-[3px] border-transparent rounded-2xl 
            }`}
                />
                <p
                  className={`${
                    item.id === currentIndex
                      ? "absolute bottom-24 opacity-100"
                      : "opacity-0 hidden"
                  } text-white font-semibold text-lg p-2 `}>
                  {item.title}
                </p>
              </React.StrictMode>
            ))}
            <button
              className="text-gray-100 bg-gray-200/15 rounded-full  p-2"
              onClick={NextSlide}>
              <GrNext size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
};

{
  /* <div className="order-1 sm:order-2 ">
            <div
              className="relative z-10"
              data-aos="zoom-in"
              data-aos-once="true">
              <img
                src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-[300px] h-[300px] rounded-xl sm:scale-105 lg:scale-120
                 mx-auto"
              />
            </div>
          </div> */
}
{
  /* {imageList.map((item) => (
          <div key={item.id}> */
}
{
  /* <div className="grid grid-cols-1 sm:grid-cols-2"> */
}
{
  /* <div
              className="flex flex-col justify-center gap-4 pt-12 
                sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative ">
              <div>
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-100 
                    duration-200 text-white py-2 px-4 rounded-md">
                  more info
                </button> */
}
{
  /* </div> */
}
{
  /* </div> */
}
{
  /* <Slider {...settings}>
                image
                <div className="order-1 sm:order-2 ">
                  <div className="relative z-10">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120
           object-contain mx-auto"
                    />
                  </div>
                </div>
              </Slider> */
}
{
  /* </div>
          </div>
        ))} */
}
