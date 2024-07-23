// import { useCart } from "../../contexts/cartContext";
// import "./ApplyCoupon.css";

// const ApplyCoupon = ({ setShowCouponModal, totalPrice }) => {
//   const { coupons, selectedCoupon, setSelectedCoupon } = useCart();

//   return (
//     <div className="coupon-container">
//       <div className="coupon-header">
//         <h3>Apply Coupon</h3>
//         <button onClick={() => setShowCouponModal(false)}>
//           <i className="fa-solid fa-times"></i>
//         </button>
//       </div>

//       <div className="coupon">
//         {coupons?.map((coupon) => (
//           <label
//             className={`coupon-label ${
//               totalPrice < coupon.minPrice ? "invalid-coupon" : ""
//             } `}
//             key={coupon.id}
//           >
//             <input
//               type="radio"
//               name="coupon"
//               disabled={totalPrice < coupon.minPrice}
//               checked={selectedCoupon.minPrice === coupon.minPrice}
//               onChange={() => setSelectedCoupon(coupon)}
//             />
//             <p>
//               {coupon.name}: {coupon.discount}% off on orders above &#8377;
//               {coupon.minPrice}
//             </p>
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// export { ApplyCoupon };

import { useCart } from "../../contexts/cartContext";

const ApplyCoupon = ({ setShowCouponModal, totalPrice }) => {
  const { coupons, selectedCoupon, setSelectedCoupon } = useCart();

  return (
    <div className="bg-gray-100 rounded-lg p-4 overflow-hidden">
      <div className="flex justify-between items-center">
        <h3>Apply Coupon</h3>
        <button onClick={() => setShowCouponModal(false)}>
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="space-y-2 mt-2">
        {coupons?.map((coupon) => (
          <label
            className={`flex items-center border-2 rounded-lg p-2 cursor-pointer ${
              totalPrice < coupon.minPrice
                ? "opacity-50 cursor-not-allowed"
                : ""
            } `}
            key={coupon.id}
          >
            <input
              type="radio"
              name="coupon"
              disabled={totalPrice < coupon.minPrice}
              checked={selectedCoupon.id === coupon.id} // Change this line
              // checked={selectedCoupon.minPrice === coupon.minPrice}
              onChange={() => setSelectedCoupon(coupon)}
              className="text-blue-500"
            />
            <p className="ml-2 text-sm">
              {coupon.name}: {coupon.discount}% off on orders above &#8377;
              {coupon.minPrice}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
};

export { ApplyCoupon };
