// import { create } from "zustand";

// interface FilterState {
//   filters: {
//     sort: string;
//     category: Promise<any>;
//   };
//   setFilters: (newFilters: Partial<FilterState["filters"]>) => void;
// }

// // const { data: hotels, isLoading } = useQuery({
// //   queryKey: ["data"],
// //   queryFn: HotelsApi,
// // });
// // if (isLoading) {
// //   console.log("Loading Bang....");
// // }

// // console.log(hotels);

// export const useProductStore = create<FilterState>((set) => ({
//   filters: {
//     sort: "none",
//     category: HotelsApi(),
//   },
//   setFilters: (newFilters) =>
//     set((state) => ({ filters: { ...state.filters, ...newFilters } })),
// }));
