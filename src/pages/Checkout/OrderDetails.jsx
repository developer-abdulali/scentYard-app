// import "./Checkout.css";
// import toast from "react-hot-toast";
// import { v4 as uuid } from "uuid";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../contexts/cartContext";
// import { useAddress } from "../../contexts/addressContext";
// import { getTotalPrice } from "../../utils/cartPrice";
// import { useAuth } from "../../contexts/authContext";
// import { useOrder } from "../../contexts/orderContext";
// import { addOrderService } from "../../services/orderServices/addOrderService";

// export const OrderDetails = () => {
//   const navigate = useNavigate();
//   const { token } = useAuth();

//   const { cartState, setSelectedCoupon, selectedCoupon, cartPrice } = useCart();
//   const {
//     addressState: { addresses, selectedAddrId },
//   } = useAddress();
//   const { dispatchOrder } = useOrder();

//   const user = JSON.parse(localStorage.getItem("user"));

//   const totalPrice = getTotalPrice(
//     cartState,
//     cartPrice.price,
//     cartPrice.discountInPrice,
//     cartPrice.deliveryCharges
//   );

//   const discountedCouponPrice = (totalPrice * selectedCoupon.discount) / 100;

//   const currentAddress = addresses?.find(
//     (address) => address._id === selectedAddrId
//   );

//   const loadScript = async (url) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = url;

//       script.onload = () => {
//         resolve(true);
//       };

//       script.onerror = () => {
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   };

//   const displayRazorpay = async () => {
//     const res = await loadScript(
//       "https://checkout.razorpay.com/v1/checkout.js"
//     );

//     if (!res) {
//       toast.error("Razorpay SDK failed to load, check your connection");
//       return;
//     }

//     const options = {
//       key: "rzp_test_SP206ka3zuV4SX",
//       amount:
//         (discountedCouponPrice
//           ? totalPrice - discountedCouponPrice
//           : totalPrice) * 100,
//       currency: "INR",
//       name: "Essence",
//       description: "Thank you for shopping with us",
//       handler: async function (response) {
//         const orderId = uuid().toString().split("-")[0];

//         const orderData = {
//           products: [...cartState],
//           amount: totalPrice,
//           paymentId: response.razorpay_payment_id,
//           orderId,
//           delivery: currentAddress,
//         };

//         const { data, status } = await addOrderService(orderData, token);

//         if (status === 201) {
//           setSelectedCoupon({});
//           dispatchOrder({ type: "GET_ORDERS", payload: data.order });
//           navigate(`/order/${orderId}`);
//         }
//       },

//       prefill: {
//         name: `${user.firstName} ${user.lastName}`,
//         email: user.email,
//         contact: "93225088143",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <div className="order-details">
//       <div className="title">Order Summary</div>

//       <div className="order-items-wrapper order-items">
//         {cartState.map((cartItem) => (
//           <div key={cartItem.id} className="item">
//             <div>
//               {cartItem.title} (&#8377;{cartItem.price} x {cartItem.qty})
//             </div>

//             <div>&#8377;{cartItem.price * cartItem.qty}</div>
//           </div>
//         ))}
//       </div>

//       <div className="title">Price Details</div>

//       <div className="order-items-wrapper">
//         <div className="item">
//           <div>Total Price</div>
//           <div>&#8377;{cartPrice.price}</div>
//         </div>

//         <div className="item">
//           <div>Total Discount</div>
//           <div>
//             &#8377;
//             {cartPrice.discountInPrice +
//               (JSON.stringify(selectedCoupon) !== "{}"
//                 ? discountedCouponPrice
//                 : 0)}
//           </div>
//         </div>

//         <div className="item">
//           <div>Delivery Charges</div>
//           <div>&#8377;49</div>
//         </div>

//         <div className="item">
//           <div>Grand Total</div>
//           <div>
//             &#8377;
//             {totalPrice -
//               (JSON.stringify(selectedCoupon) !== "{}"
//                 ? discountedCouponPrice
//                 : 0)}
//           </div>
//         </div>
//       </div>

//       <div className="title">Deliver To</div>

//       <div className="order-items-wrapper addr-item">
//         {currentAddress ? (
//           <>
//             <div className="address-name">{currentAddress.name}</div>
//             <div>
//               {currentAddress.street}, {currentAddress.city} -{" "}
//               {currentAddress.zipcode}
//             </div>
//             <div>
//               {currentAddress.state}, {currentAddress.country}
//             </div>
//             <div>{currentAddress.mobile}</div>
//           </>
//         ) : (
//           <p>Add an address to proceed.</p>
//         )}
//       </div>

//       <button
//         className="btn btn-primary place-order"
//         disabled={!selectedAddrId}
//         onClick={displayRazorpay}
//       >
//         Place Order
//       </button>
//     </div>
//   );
// };

import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import { useAddress } from "../../contexts/addressContext";
import { getTotalPrice } from "../../utils/cartPrice";
import { useAuth } from "../../contexts/authContext";
import { useOrder } from "../../contexts/orderContext";
import { addOrderService } from "../../services/orderServices/addOrderService";

export const OrderDetails = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const { cartState, setSelectedCoupon, selectedCoupon, cartPrice } = useCart();
  const {
    addressState: { addresses, selectedAddrId },
  } = useAddress();
  const { dispatchOrder } = useOrder();

  const user = JSON.parse(localStorage.getItem("user"));

  const totalPrice = getTotalPrice(
    cartState,
    cartPrice.price,
    cartPrice.discountInPrice,
    cartPrice.deliveryCharges
  );

  const discountedCouponPrice = (totalPrice * selectedCoupon.discount) / 100;

  const currentAddress = addresses?.find(
    (address) => address._id === selectedAddrId
  );

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load, check your connection");
      return;
    }

    const options = {
      key: "rzp_test_SP206ka3zuV4SX",
      amount:
        (discountedCouponPrice
          ? totalPrice - discountedCouponPrice
          : totalPrice) * 100,
      currency: "INR",
      name: "Essence",
      description: "Thank you for shopping with us",
      handler: async function (response) {
        const orderId = uuid().toString().split("-")[0];

        const orderData = {
          products: [...cartState],
          amount: totalPrice,
          paymentId: response.razorpay_payment_id,
          orderId,
          delivery: currentAddress,
        };

        const { data, status } = await addOrderService(orderData, token);

        if (status === 201) {
          setSelectedCoupon({});
          dispatchOrder({ type: "GET_ORDERS", payload: data.order });
          navigate(`/order/${orderId}`);
        }
      },

      prefill: {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        contact: "93225088143",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="border border-gray-200 rounded-lg">
      <div className="text-xl font-bold text-center border-b border-gray-200 pb-2">
        Order Summary
      </div>

      <div className="p-2 space-y-2">
        {cartState.map((cartItem) => (
          <div key={cartItem.id} className="flex justify-between text-sm">
            <div>
              {cartItem.title} (&#8377;{cartItem.price} x {cartItem.qty})
            </div>

            <div>&#8377;{cartItem.price * cartItem.qty}</div>
          </div>
        ))}
      </div>

      <div className="text-xl font-bold text-center border-b border-gray-200 pb-2">
        Price Details
      </div>

      <div className="p-2 space-y-2">
        <div className="flex justify-between text-sm">
          <div>Total Price</div>
          <div>&#8377;{cartPrice.price}</div>
        </div>

        <div className="flex justify-between text-sm">
          <div>Total Discount</div>
          <div>
            &#8377;
            {cartPrice.discountInPrice +
              (JSON.stringify(selectedCoupon) !== "{}"
                ? discountedCouponPrice
                : 0)}
          </div>
        </div>

        <div className="flex justify-between text-sm">
          <div>Delivery Charges</div>
          <div>&#8377;49</div>
        </div>

        <div className="flex justify-between text-sm">
          <div>Grand Total</div>
          <div>
            &#8377;
            {totalPrice -
              (JSON.stringify(selectedCoupon) !== "{}"
                ? discountedCouponPrice
                : 0)}
          </div>
        </div>
      </div>

      <div className="text-xl font-bold text-center border-b border-gray-200 pb-2">
        Deliver To
      </div>

      <div className="p-2 space-y-1 text-sm">
        {currentAddress ? (
          <>
            <div className="font-bold">{currentAddress.name}</div>
            <div>
              {currentAddress.street}, {currentAddress.city} -{" "}
              {currentAddress.zipcode}
            </div>
            <div>
              {currentAddress.state}, {currentAddress.country}
            </div>
            <div>{currentAddress.mobile}</div>
          </>
        ) : (
          <p>Add an address to proceed.</p>
        )}
      </div>

      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded w-full mt-2 ${
          !selectedAddrId ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={!selectedAddrId}
        onClick={displayRazorpay}
      >
        Place Order
      </button>
    </div>
  );
};
