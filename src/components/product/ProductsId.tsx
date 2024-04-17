import { useParams } from "react-router";
import { dataImage } from "../data/data";
import { IoIosStar } from "react-icons/io";
import { MdOutlineGpsFixed } from "react-icons/md";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  rating: number;
  location?: string;
  price: string;
}

const ProductsId = () => {
  const { id } = useParams();
  console.log(id);
  const product = dataImage.find((Item) => Item.id.toString() === id);
  let relatedProducts: Product[] = [];
  if (product) {
    relatedProducts = dataImage.filter((item) =>
      item.category.some((categoryItem) =>
        product.category.some(
          (productCategory) =>
            categoryItem === productCategory && item.id !== product.id
        )
      )
    );
  }
  console.log(relatedProducts);

  console.log(relatedProducts);
  return (
    <div className="max-w-7xl h-full pt-24 mx-auto">
      <div className="container flex flex-col  py-5">
        <h2 className="text-emerald-500 font-bold tracking-widest text-3xl text-center">
          {product?.title}
        </h2>
        <div
          className="flex flex-col sm:flex-row gap-5 justify-center 
        py-10 sm:py-0 items-center sm:h-[500px] h-full">
          <img
            src={product?.image}
            alt="../"
            key={product?.id}
            className="w-[350px] h-[350px] object-cover "
          />
          <div className="grid grid-cols-1 gap-4 px-4 ">
            <h2 className="text-gray-300 w-[500px]">{product?.description}</h2>

            <p className=" flex  justify-between items-center text-center">
              <p className="flex text-yellow-500 px-2">
                {product?.rating !== undefined && product.rating <= 5 ? (
                  <>
                    <IoIosStar /> <IoIosStar />
                    <IoIosStar />
                  </>
                ) : product?.rating !== undefined && product.rating <= 8 ? (
                  <>
                    <IoIosStar /> <IoIosStar /> <IoIosStar />
                    <IoIosStar />
                  </>
                ) : (
                  <>
                    <IoIosStar /> <IoIosStar /> <IoIosStar />
                    <IoIosStar /> <IoIosStar />
                  </>
                )}
              </p>
              <span className="flex items-center gap-5 text-neutral-200 text-lg">
                <MdOutlineGpsFixed className="text-emerald-700" />
                {product?.location}
              </span>
            </p>

            <p className="text-xl font-medium text-yellow-500 px-2">
              Rp.{product?.price}
              <span className="text-slate-400"> /night</span>
            </p>
            <button className="text-gray-200 bg-emerald-500 w-40 h-10 rounded-xl ">
              Booking Now
            </button>
          </div>
        </div>
        {relatedProducts.length > 0 && (
          <div className="flex flex-col gap-4 ">
            <h2 className="text-2xl font-semibold text-emerald-500 py-10 text-center">
              Related Products
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((item) => (
                <div key={item.id} className="grid justify-center items-center">
                  <img
                    src={item.image}
                    alt="../"
                    className="w-[300px] h-[200px]  object-cover"
                  />
                  <div className="flex justify-between items-center p-2">
                    <p className="text-md font-medium text-gray-200">
                      {item.title}
                    </p>
                    <p className="flex text-yellow-500 ">
                      {item.rating <= 5 ? (
                        <>
                          <IoIosStar /> <IoIosStar />
                          <IoIosStar />
                        </>
                      ) : item.rating <= 8 ? (
                        <>
                          <IoIosStar /> <IoIosStar /> <IoIosStar />
                          <IoIosStar />
                        </>
                      ) : (
                        <>
                          <IoIosStar /> <IoIosStar /> <IoIosStar />
                          <IoIosStar /> <IoIosStar />
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsId;
