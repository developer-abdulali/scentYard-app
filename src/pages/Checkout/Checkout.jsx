// import "./Checkout.css";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Navbar } from "../../components/Navbar/Navbar";
// import { Footer } from "../../components/Footer/Footer";
// import { useAddress } from "../../contexts/addressContext";
// import { useCart } from "../../contexts/cartContext";
// import { OrderDetails } from "./OrderDetails";
// import { AddressModal } from "./../../components/AddressModal/AddressModal";

// export const Checkout = () => {
//   const {
//     addressState: { addresses, selectedAddrId },
//     dispatchAddress,
//   } = useAddress();
//   const { cartState } = useCart();

//   const [showAddrModal, setShowAddrModal] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (cartState.length === 0) {
//       navigate("/products");
//     }
//   }, [cartState]);

//   return (
//     <div className="page-wrapper">
//       <Navbar />

//       <section className="main-section checkout-container">
//         <div className="heading-3">Checkout</div>

//         <div className="checkout-wrapper">
//           <div className="checkout-address">
//             <div className="address-title title">Select Address</div>

//             <div className="address-list">
//               {addresses?.length ? (
//                 addresses?.map((address) => (
//                   <label className="address" key={address._id}>
//                     <input
//                       type="radio"
//                       name="address"
//                       checked={selectedAddrId === address._id}
//                       onChange={() =>
//                         dispatchAddress({
//                           type: "SET_ADDRESS_ID",
//                           payload: address._id,
//                         })
//                       }
//                     />

//                     <div>
//                       <div className="address-name">{address.name}</div>
//                       <div>{address.street},</div>
//                       <div>
//                         {address.city} - {address.zipcode}
//                       </div>
//                       <div>
//                         {address.state}, {address.country}
//                       </div>
//                       <div>{address.mobile}</div>
//                     </div>
//                   </label>
//                 ))
//               ) : (
//                 <p>No address available.</p>
//               )}
//             </div>

//             <button
//               className="btn outline-primary add-address"
//               onClick={() => setShowAddrModal(true)}
//             >
//               <i className="fa-solid fa-plus"></i>Add address
//             </button>
//           </div>

//           <OrderDetails />
//         </div>

//         {showAddrModal ? (
//           <div className="address-modal">
//             <AddressModal setShowAddrModal={setShowAddrModal} />
//           </div>
//         ) : null}
//       </section>

//       <Footer />
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { useAddress } from "../../contexts/addressContext";
import { useCart } from "../../contexts/cartContext";
import { OrderDetails } from "./OrderDetails";
import { AddressModal } from "./../../components/AddressModal/AddressModal";

export const Checkout = () => {
  const {
    addressState: { addresses, selectedAddrId },
    dispatchAddress,
  } = useAddress();
  const { cartState } = useCart();

  const [showAddrModal, setShowAddrModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (cartState.length === 0) {
      navigate("/products");
    }
  }, [cartState]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <h3 className="text-2xl font-bold text-center">Checkout</h3>

        <div className="grid grid-cols-2 gap-8 max-w-6xl w-full mx-auto my-4">
          <div className="space-y-4">
            <div className="text-xl font-bold text-center border-b border-gray-200 pb-2">
              Select Address
            </div>

            <div className="space-y-2">
              {addresses?.length ? (
                addresses?.map((address) => (
                  <label
                    className="flex items-start gap-2 p-2 border border-gray-200 rounded"
                    key={address._id}
                  >
                    <input
                      type="radio"
                      name="address"
                      checked={selectedAddrId === address._id}
                      onChange={() =>
                        dispatchAddress({
                          type: "SET_ADDRESS_ID",
                          payload: address._id,
                        })
                      }
                      className="text-blue-500"
                    />

                    <div className="text-sm">
                      <div className="font-bold">{address.name}</div>
                      <div>{address.street},</div>
                      <div>
                        {address.city} - {address.zipcode}
                      </div>
                      <div>
                        {address.state}, {address.country}
                      </div>
                      <div>{address.mobile}</div>
                    </div>
                  </label>
                ))
              ) : (
                <p>No address available.</p>
              )}
            </div>

            <button
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded flex items-center gap-2"
              onClick={() => setShowAddrModal(true)}
            >
              <i className="fas fa-plus"></i>Add address
            </button>
          </div>

          <OrderDetails />
        </div>

        {showAddrModal ? (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <AddressModal setShowAddrModal={setShowAddrModal} />
          </div>
        ) : null}
      </section>

      <Footer />
    </div>
  );
};
