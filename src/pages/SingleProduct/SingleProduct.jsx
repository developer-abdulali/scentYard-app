import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/authContext";
import { Loader } from "../../components/Loader/Loader";
import { useProducts } from "../../contexts/productContext";

const SingleProduct = () => {
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

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="flex justify-center">
        {currentProduct ? (
          <section className="max-w-4xl p-2 mx-4 my-2 bg-white border border-primary rounded-lg shadow-md sm:flex sm:gap-6">
            {/* <section className="max-w-4xl p-6 mx-4 my-2 bg-white border border-primary rounded-lg shadow-md sm:flex sm:gap-6"> */}
            <div className="relative sm:w-1/2">
              <img
                src={currentProduct.image}
                className="object-contain h-full pr-5 rounded-md"
                // className="object-contain h-full rounded-md"
                alt={currentProduct.title}
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
                  className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90 disabled:opacity-80 disabled:cursor-not-allowed"
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

      <Footer />
    </div>
  );
};

export { SingleProduct };
