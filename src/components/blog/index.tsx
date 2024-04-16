import React from "react";
import { dataBlog } from "../data/data";

const Blog = () => {
  return (
    <div className="justify-center items-center">
      <img
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="../"
        className="w-full h-screen object-cover brightness-50"
      />
      <div className="justify-center items-center w-full flex flex-col absolute top-[40%] ">
        <h1 className=" text-slate-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold tracking-widest">
          Welcome To Blog NextTravel
        </h1>
        <p className=" text-slate-400/95 py-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          NextTravel provides information about holidays, tours, etc
        </p>
        <button className="text-center text-gray-300 text-lg bg-emerald-600 p-2 px-4 mt-2 w-[200px] rounded-md ">
          Read More
        </button>
      </div>
      <div className="container pb-10">
        <h1 className="text-center py-10 text-emerald-400 font-bold text-3xl">
          Latest Blogs NextTravel
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dataBlog.map((item) => (
            <React.Fragment key={item.id}>
              <a
                href={item.link}
                className="flex flex-col gap-2 justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[400px] h-[200px] brightness-75 object-cover rounded-xl"
                />
                <p className="text-lg h-[50px] font-medium text-gray-200 text-center">
                  {item.title}
                </p>
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
