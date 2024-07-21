import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/authContext";
import { Loader } from "../../components/Loader/Loader";
import { useProducts } from "../../contexts/productContext";

const SingleProduct = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { productId } = useParams();

  const {
    productState: { products },
  } = useProducts();

  const {
    wishlistState,
    toggleWishlist,
    loading: wishlistLoading,
  } = useWishlist();

  const { cartState, addToCartHandler, loading: cartLoading } = useCart();
  const { isAuth, navigate } = useAuth();

  const currentProduct = products?.find((product) => product.id === productId);

  const itemInWishlist = wishlistState.find(
    (item) => item.id === currentProduct.id
  );
  const itemInCart = cartState.find((item) => item.id === currentProduct.id);

  // Add current product image to additionalImages array
  const additionalImages = [
    currentProduct.image,
    ...currentProduct.additionalImages,
  ];

  return (
    <div className="page-wrapper ">
      <section className="flex items-center justify-center ">
        {currentProduct ? (
          <section className="max-w-4xl p-2 mx-4 my-2 bg-white  sm:flex sm:gap-6">
            <div className="relative sm:w-1/2">
              <img
                src={currentImage || currentProduct.image} // Use
                className="w-full object-cover h-[35rem] rounded-lg cursor-pointer"
                alt={currentProduct.title}
              />
              {/* addtional imgs component */}
              <AdditionalImages
                images={additionalImages}
                setCurrentImage={setCurrentImage}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
              <button
                onClick={() => toggleWishlist(currentProduct)}
                disabled={wishlistLoading}
                className="absolute top-2 right-2 p-2 rounded-full"
              >
                <i
                  className={`${
                    isAuth && itemInWishlist ? "fas fa-heart" : "far fa-heart"
                  }`}
                ></i>
              </button>
            </div>
            <div className="sm:w-1/2">
              <div className="text-2xl font-bold" title={currentProduct.title}>
                {currentProduct.title}
              </div>
              <div className="inline-flex items-center px-2 py-1 mt-2 text-sm text-white bg-primary rounded-md">
                {currentProduct.rating} <i className="ml-1 fas fa-star"></i>
              </div>
              <div className="flex items-end mt-4">
                <div className="text-lg font-medium">
                  &#8377; {currentProduct.discountedPrice}
                </div>
                <div className="ml-2 text-sm text-gray-500 line-through">
                  &#8377; {currentProduct.price}
                </div>
                <div className="ml-2 text-sm text-green-600">
                  {currentProduct.discount}% off
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <div>
                  <i className="mr-1 fas fa-check"></i> 7 Days Money Back
                  Guarantee
                </div>
                <div>
                  <i className="mr-1 fas fa-check"></i> Cash on Delivery
                  Available
                </div>
                <div>
                  <i className="mr-1 fas fa-check"></i> All cards accepted
                </div>
              </div>
              <hr className="my-4" />
              <div>
                <ul className="space-y-2">
                  <p className="font-bold">Product Details</p>
                  <li>
                    Brand:{" "}
                    <span className="font-normal">{currentProduct.brand}</span>
                  </li>
                  <li>
                    Availability:{" "}
                    <span className="font-normal">
                      {currentProduct.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </li>
                  <li>
                    Delivery:{" "}
                    <span className="font-normal">
                      {currentProduct.fastDelivery
                        ? "Fast"
                        : "5-7 business days"}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <button
                  className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90 disabled:opacity-80 disabled:cursor-not-allowed"
                  onClick={() =>
                    isAuth && itemInCart
                      ? navigate("/cart")
                      : addToCartHandler(currentProduct)
                  }
                  disabled={cartLoading || !currentProduct.inStock}
                >
                  {isAuth && itemInCart ? "Go To Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
          </section>
        ) : (
          <Loader />
        )}
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export { SingleProduct };

const AdditionalImages = ({
  images,
  setCurrentImage,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className="flex gap-4 mt-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-[7rem] h-[7rem] rounded-lg cursor-pointer border-2 ${
            index === activeIndex ? "border-primary" : "border-transparent"
          }`}
          onClick={() => {
            setCurrentImage(image);
            setActiveIndex(index);
          }}
        >
          <img
            src={image}
            className="w-full h-full rounded-lg"
            alt={`Additional Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};
