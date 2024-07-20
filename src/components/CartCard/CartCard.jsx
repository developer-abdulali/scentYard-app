// import React from "react";
// import Modal from "react-modal";
// import { Link } from "react-router-dom";
// import { useCart } from "../../contexts/cartContext";
// import ProductCarousel from "../ProductCarousel/ProductCarousel";

// Modal.setAppElement("#root");

// const CartCard = ({ product }) => {
//   const { title, qty, price, image, id, additionalImages } = product;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   const {
//     removeFromCartHandler,
//     updateQtyHandler,
//     moveToWishlistHandler,
//     loading,
//   } = useCart();

//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   const customStyles = {
//     overlay: {
//       backgroundColor: "rgba(0, 0, 0, 0.75)",
//       backdropFilter: "blur(5px)",
//     },
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//       borderRadius: "10px",
//       padding: "20px",
//       width: "90%",
//       maxWidth: "600px",
//     },
//   };

//   return (
//     <div className="border border-primary rounded-lg bg-white shadow-md m-4 p-10 max-h-max">
//       <div className="flex flex-col md:flex-row">
//         <button onClick={openModal}>
//           <img
//             src={image}
//             className="w-[500px] object-cover h-48"
//             alt={title}
//           />
//         </button>

//         <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           contentLabel="Product Images"
//           style={customStyles}
//         >
//           <ProductCarousel images={additionalImages} />
//           <button
//             onClick={closeModal}
//             className="mt-4 p-2 bg-red-500 text-white rounded"
//           >
//             Close
//           </button>
//         </Modal>

//         <div className="p-3">
//           <Link to={`/products/${id}`} className="font-bold">
//             {title}
//           </Link>

//           <div className="py-2">
//             <div className="font-bold">&#8377; {price}</div>

//             <div className="text-sm pt-1">
//               Quantity:{" "}
//               <button
//                 className="border border-primary rounded-full px-2 mx-1"
//                 onClick={() => updateQtyHandler(product, "decrement")}
//                 disabled={loading}
//               >
//                 -
//               </button>
//               <span className="px-4 text-center border border-primary rounded">
//                 {qty}
//               </span>
//               <button
//                 className="border border-primary rounded-full px-2 mx-1"
//                 onClick={() => updateQtyHandler(product, "increment")}
//                 disabled={loading}
//               >
//                 +
//               </button>
//             </div>
//           </div>
//           <button
//             className="bg-primary hover:bg-primary/90 text-white py-1 px-2 rounded mt-2 w-full"
//             onClick={() => moveToWishlistHandler(product)}
//             disabled={loading}
//           >
//             Move to Wishlist
//           </button>
//           <button
//             className="border border-primary text-primary py-1 px-2 rounded mt-2 w-full hover:no-underline"
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

import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import ProductCarousel from "../ProductCarousel/ProductCarousel";

Modal.setAppElement("#root");

const CartCard = ({ product }) => {
  const { title, qty, price, image, id, additionalImages } = product;

  console.log(additionalImages);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const {
    removeFromCartHandler,
    updateQtyHandler,
    moveToWishlistHandler,
    loading,
  } = useCart();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      padding: "20px",
      border: "none",
      width: "100%",
      // maxWidth: "100%",
      overflow: "hidden",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      backdropFilter: "blur(10px)",
    },
  };

  return (
    <div className="border border-primary rounded-lg bg-white shadow-md m-4 p-10 max-h-max">
      <div className="flex flex-col md:flex-row">
        <button onClick={openModal}>
          <img
            src={image}
            className="w-[500px] object-cover h-48"
            alt={title}
          />
        </button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Product Images"
          style={customStyles}
        >
          <ProductCarousel images={additionalImages} />
          <button
            onClick={closeModal}
            className="absolute top-10 right-5 p-3 text-white rounded"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </Modal>

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
