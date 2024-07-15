// import "./CartCard.css";
// import { Link } from "react-router-dom";
// import { useCart } from "../../contexts/cartContext";

// const CartCard = ({ product }) => {
//   const { title, qty, price, image, id } = product;

//   const {
//     removeFromCartHandler,
//     updateQtyHandler,
//     moveToWishlistHandler,
//     loading,
//   } = useCart();

//   return (
//     <div className="card-wrapper basic-card card-horizontal">
//       <div className="row">
//         <img src={image} className="card-img" alt={title} />

//         <div className="card-heading">
//           <Link to={`/products/${id}`}>{title}</Link>

//           <div className="card-content">
//             <div className="price">&#8377; {price}</div>

//             <div className="card-quantity">
//               Quantity:{" "}
//               <button
//                 className="minus"
//                 onClick={() => updateQtyHandler(product, "decrement")}
//                 disabled={loading}
//               >
//                 -
//               </button>
//               <input type="number" value={qty} readOnly />
//               <button
//                 className="plus"
//                 onClick={() => updateQtyHandler(product, "increment")}
//                 disabled={loading}
//               >
//                 +
//               </button>
//             </div>
//           </div>
//           <button
//             className="btn btn-primary"
//             onClick={() => moveToWishlistHandler(product)}
//             disabled={loading}
//           >
//             Move to Wishlist
//           </button>
//           <button
//             className="btn outline-primary"
//             onClick={() => removeFromCartHandler(product)}
//             disabled={loading}
//           >
//             Remove from Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { CartCard };

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
    <div className="border border-blue-500 bg-white shadow-md m-4 max-h-max">
      <div className="flex">
        <img src={image} className="w-1/2 object-cover h-48" alt={title} />

        <div className="p-3">
          <Link to={`/products/${id}`} className="font-bold">
            {title}
          </Link>

          <div className="py-2">
            <div className="font-bold">&#8377; {price}</div>

            <div className="text-sm pt-1">
              Quantity:{" "}
              <button
                className="border border-gray-500 rounded-full px-2 mx-1"
                onClick={() => updateQtyHandler(product, "decrement")}
                disabled={loading}
              >
                -
              </button>
              <input
                type="number"
                value={qty}
                readOnly
                className="w-12 text-center border border-blue-500 rounded"
              />
              <button
                className="border border-gray-500 rounded-full px-2 mx-1"
                onClick={() => updateQtyHandler(product, "increment")}
                disabled={loading}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="bg-blue-500 text-white py-1 px-2 rounded mt-2 w-full"
            onClick={() => moveToWishlistHandler(product)}
            disabled={loading}
          >
            Move to Wishlist
          </button>
          <button
            className="border border-blue-500 text-blue-500 py-1 px-2 rounded mt-2 w-full"
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
