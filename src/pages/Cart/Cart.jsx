// import "./Cart.css";
// import { Footer } from "../../components/Footer/Footer";
// import { Navbar } from "../../components/Navbar/Navbar";
// import { CartCard } from "../../components/CartCard/CartCard";
// import { CartPrice } from "../../components/CartPrice/CartPrice";
// import { useCart } from "../../contexts/cartContext";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cartState } = useCart();

//   return (
//     <div className="page-wrapper">
//       <Navbar />

//       <section className="main-section cart-container">
//         <section className="cart-wrapper">
//           <div className="heading-3">
//             My Cart (<span className="quantity">{cartState.length}</span>)
//           </div>

//           {cartState.length > 0 ? (
//             <section className="cart-main">
//               <div className="cart-product">
//                 {cartState.map((cartItem) => (
//                   <CartCard product={cartItem} key={cartItem._id} />
//                 ))}
//               </div>

//               <div className="cart-price">
//                 <CartPrice />
//               </div>
//             </section>
//           ) : (
//             <div className="text-center">
//               <p>Oops! Your cart is empty :</p>
//               <Link to="/products" className="text-primary">
//                 Start shopping!
//               </Link>
//             </div>
//           )}
//         </section>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export { Cart };

import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { CartCard } from "../../components/CartCard/CartCard";
import { CartPrice } from "../../components/CartPrice/CartPrice";
import { useCart } from "../../contexts/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartState } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <div className="w-full max-w-6xl px-4">
          <h3 className="text-2xl font-bold text-center">
            My Cart (<span className="font-normal">{cartState.length}</span>)
          </h3>

          {cartState.length > 0 ? (
            <section className="grid grid-cols-3 gap-4">
              <div className="col-span-3 md:col-span-2 bg-gray-900 rounded-lg">
                {cartState.map((cartItem) => (
                  <CartCard product={cartItem} key={cartItem._id} />
                ))}
              </div>

              <div className="col-span-3 md:col-span-1 bg-gray-100 p-4 rounded-lg">
                <CartPrice />
              </div>
            </section>
          ) : (
            <div className="text-center">
              <p>Oops! Your cart is empty :</p>
              <Link to="/products" className="text-blue-500">
                Start shopping!
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { Cart };
