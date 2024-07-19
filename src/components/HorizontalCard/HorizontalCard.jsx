import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/authContext";

const HorizontalCard = ({ product }) => {
  const { _id, title, price, image, id } = product;
  const { cartState, addToCartHandler, loading } = useCart();
  const { isAuth, navigate } = useAuth();

  const itemInCart = cartState.find((item) => item._id === _id);

  return (
    <div className="flex flex-col md:flex-row items-center p-2 border border-[#436C68] rounded-md ">
      <img
        src={image}
        className="w-40 h-40 rounded-l-lg object-contain"
        alt="Perfume"
      />

      <div className="flex-1 pl-0 md:pl-4">
        <Link to={`/products/${id}`}>
          <div className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">
            Trending
          </div>

          <p className="text-lg font-medium mb-2">{title}</p>

          <div className="text-xl font-bold mb-4">₹ {price}</div>
        </Link>

        <button
          className="w-full px-4 py-2 text-white bg-[#436C68] rounded-md hover:bg-[#436c68e8] disabled:opacity-80 disabled:cursor-not-allowed"
          onClick={() =>
            isAuth && itemInCart ? navigate("/cart") : addToCartHandler(product)
          }
          disabled={loading}
        >
          {isAuth && itemInCart ? "Go To Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export { HorizontalCard };

// my code
// import "./HorizontalCard.css";
// import { Link } from "react-router-dom";
// import { useCart } from "../../contexts/cartContext";
// import { useAuth } from "../../contexts/authContext";

// const HorizontalCard = ({ product }) => {
//   const { _id, title, price, image, id } = product;
//   const { cartState, addToCartHandler, loading } = useCart();
//   const { isAuth, navigate } = useAuth();

//   const itemInCart = cartState.find((item) => item._id === _id);

//   return (
//     <div className="">
//       {/* <div className="card-wrapper basic-card card-horizontal featured-card"> */}
//       <div className="flex items-center">
//         <div>
//           {/* <div className="row"> */}
//           <img src={image} alt="Perfume" className="" />
//           {/* <img src={image} className="card-img" alt="Perfume" /> */}
//         </div>

//         <div>
//           {/* <div className="card-main"> */}
//           <Link to={`/products/${id}`}>
//             <div className="card-bdg primary">Trending</div>

//             <p className="heading">{title}</p>

//             <div className="card-content">
//               <div className="price">&#8377; {price}</div>
//             </div>
//           </Link>
//           <button
//             className="btn btn-primary"
//             onClick={() =>
//               isAuth && itemInCart
//                 ? navigate("/cart")
//                 : addToCartHandler(product)
//             }
//             disabled={loading}
//           >
//             {isAuth && itemInCart ? "Go To Cart" : "Add To Cart"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { HorizontalCard };
