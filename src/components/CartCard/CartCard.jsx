import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";

const CartCard = ({ product }) => {
  const { title, qty, price, image, id } = product;

  const {
    removeFromCartHandler,
    updateQtyHandler,
    moveToWishlistHandler,
    loading,
  } = useCart();

  return (
    <div className="border border-primary rounded-lg bg-white shadow-md m-4 p-10 max-h-max">
      <div className="flex flex-col md:flex-row">
        <img src={image} className="sm:w-1/2 object-cover h-48" alt={title} />

        <div className="p-3">
          <Link to={`/products/${id}`} className="font-bold">
            {title}
          </Link>

          <div className="py-2">
            <div className="font-bold">&#8377; {price}</div>

            <div className="text-sm pt-1">
              Quantity:{" "}
              <button
                className="border border-primary rounded-full px-2 mx-1"
                onClick={() => updateQtyHandler(product, "decrement")}
                disabled={loading}
              >
                -
              </button>
              <span className="px-4 text-center border border-primary rounded">
                {qty}
              </span>
              {/* <input
                type="number"
                value={qty}
                className="w-10 text-center border border-primary rounded"
              /> */}
              <button
                className="border border-primary rounded-full px-2 mx-1"
                onClick={() => updateQtyHandler(product, "increment")}
                disabled={loading}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="bg-primary hover:bg-primary/90 text-white py-1 px-2 rounded mt-2 w-full"
            onClick={() => moveToWishlistHandler(product)}
            disabled={loading}
          >
            Move to Wishlist
          </button>
          <button
            className="border border-primary text-primary py-1 px-2 rounded mt-2 w-full hover:no-underline"
            onClick={() => removeFromCartHandler(product)}
            disabled={loading}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
