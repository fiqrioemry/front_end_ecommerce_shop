import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading ...
      </section>
    );
  }

  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12  lg:py-32 min-h-screen lg:h-screen flex items-center ">
      <div className="container mx-auto">
        {/* wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className=" max-w-[150px] lg:max-w-[300px]"
              src={image}
              alt=""
            />
          </div>

          {/* text */}
          <div className="flex-1 text-left">
            <h1 className="text-[26px] font-medium  mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-bold mb-6">$ {price}</div>
            <p className="mb-8 text-justify">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary w-full lg:w-auto py-4 px-8 text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
