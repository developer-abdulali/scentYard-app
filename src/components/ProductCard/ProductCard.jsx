import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/authContext";
import { GoHeart } from "react-icons/go";

const ProductCard = ({ product }) => {
  const { _id, title, price, discount, discountedPrice, image, inStock, id } =
    product;
  const {
    wishlistState,
    toggleWishlist,
    loading: wishlistLoading,
  } = useWishlist();
  const { cartState, addToCartHandler, loading: cartLoading } = useCart();
  const { isAuth, navigate } = useAuth();

  const itemInWishlist = wishlistState.find((item) => item._id === _id);
  const itemInCart = cartState.find((item) => item._id === _id);

  return (
    <div
      className={`relative border border-primary rounded-[10px] bg-transparent shadow-md ${
        !inStock ? "bg-gray-200" : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img
          src={image}
          className="w-full h-64 object-contain p-5"
          alt={title}
        />
      </Link>

      <div>
        {/* <div className={`${!inStock ? "bg-gray-200 " : ""}`}> */}
        <button
          onClick={() => toggleWishlist(product)}
          disabled={wishlistLoading}
          // className="card-dismiss"
          className="absolute top-3 right-3 rounded-full text-primary"
        >
          <i
            className={` ${
              isAuth && itemInWishlist ? "fas fa-heart" : "far fa-heart"
            }`}
          ></i>
        </button>

        <Link
          to={`/products/${id}`}
          className="block px-2 py-1 text-sm font-medium truncate"
          title={title}
        >
          {title}
        </Link>
      </div>

      {/* {!inStock ? (
        <div className="text-center text-sm">Out of Stock</div>
      ) : null} */}

      <div className="px-2 py-1">
        {/* <div className={`px-2 py-1 ${!inStock ? "bg-gray-200" : ""}`}> */}
        <div className="flex items-center">
          <div className="text-lg font-medium">₹ {discountedPrice}</div>
          <div className="ml-2 text-sm text-gray-500 line-through">
            ₹ {price}
          </div>
          <div className="ml-2 text-sm text-green-600">{discount}% off</div>
          {!inStock ? (
            <div className="text-center text-sm ml-2">Out of Stock</div>
          ) : null}
        </div>
      </div>

      <div
        className="px-2 py-1"
        // className={`px-2 py-1 ${
        //   !inStock ? "bg-gray-200  rounded-b-[10px]" : ""
        // }`}
      >
        <button
          className={`w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            !inStock ? "cursor-not-allowed" : ""
          }`}
          onClick={
            () => (itemInCart ? navigate("/cart") : addToCartHandler(product))
            // isAuth && itemInCart ? navigate("/cart") : addToCartHandler(product)
          }
          disabled={cartLoading || !inStock}
        >
          {itemInCart ? "Go To Cart" : "Add To Cart"}
          {/* {isAuth && itemInCart ? "Go To Cart" : "Add To Cart"} */}
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
