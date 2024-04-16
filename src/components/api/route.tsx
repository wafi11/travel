// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import React from "react";

// type RouterrrProps = {
//   image: string;
//   title: string;
//   item: any;
// };

// export const HotelsApi = async () => {
//   const response = await axios(
//     "https://travelguide-api.herokuapp.com/addresses/All/Munich"
//     // {
//     //   params: {
//     //     name: "All",
//     //   },
//     //   headers: {
//     //     "X-RapidAPI-Key": "a7da05f2b1mshd749f16c75ab70ep1560d4jsn46a07a2b9907",
//     //     "X-RapidAPI-Host": "airports-by-api-ninjas.p.rapidapi.com",
//     //   },
//     // }
//   );
//   const data = await response.data;
//   console.log(data);
//   return data;
// };

// export const Routerrrr = () => {};

// // const {
// //   data: Search,
// //   isLoading,
// //   error,
// // } = useQuery({
// //   queryKey: ["hotels"],
// //   queryFn: async () => {
// //     const hotels = await HotelsApi();
// //     if (hotels.error) throw new Error(hotels.error);
// //     if (hotels.succes) return hotels.data;
// //     // setValue(hotels);
// //     return hotels;
// //   },
// // });
// // console.log(Search);

// // const response = await axios(
// //   "https://airports-by-api-ninjas.p.rapidapi.com/v1/airports",
// //   {
// //     params: {
// //       name: "All",
// //     },
// //     headers: {
// //       "X-RapidAPI-Key": "a7da05f2b1mshd749f16c75ab70ep1560d4jsn46a07a2b9907",
// //       "X-RapidAPI-Host": "airports-by-api-ninjas.p.rapidapi.com",
// //     },
// //   }
// // );
