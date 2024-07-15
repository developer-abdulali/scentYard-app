// import "./OrderList.css";
// import { useOrder } from "../../contexts/orderContext";
// import { Link } from "react-router-dom";

// const OrderList = () => {
//   const {
//     orderState: { orders },
//   } = useOrder();

//   return (
//     <div className="orders-container">
//       {orders?.length ? (
//         [...orders].reverse().map((order) => {
//           const { paymentId, orderId, amount, delivery, products } = order;
//           return (
//             <div className="order" key={paymentId}>
//               <div className="order-items">
//                 <div className="item-name">Payment ID:</div>
//                 <div>{paymentId}</div>
//               </div>

//               <div className="order-items">
//                 <div className="item-name">Order ID:</div>
//                 <div>{orderId}</div>
//               </div>

//               <div className="order-items">
//                 <div className="item-name">Amount Paid:</div>
//                 <div>&#8377;{amount}</div>
//               </div>

//               <div className="order-items">
//                 <div className="item-name">Address:</div>
//                 <div>{`${delivery.name}, ${delivery.street}, ${delivery.city} - ${delivery.zipcode}, ${delivery.state}, ${delivery.country}`}</div>
//               </div>

//               <div>
//                 <div className="item-name">Products Ordered:</div>
//                 <div>
//                   {products.map((product) => (
//                     <Link
//                       to={`/products/${product.id}`}
//                       key={product.id}
//                       className="order-product"
//                     >
//                       <img
//                         src={product.image}
//                         alt={product.title}
//                         className="resp-img"
//                       />

//                       <div>
//                         <div>{product.title}</div>

//                         <div className="order-items">
//                           <div className="item-name">Price:</div>
//                           <div>&#8377;{product.discountedPrice}</div>
//                         </div>

//                         <div className="order-items">
//                           <div className="item-name">Qty:</div>
//                           <div>{product.qty}</div>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p>No orders placed.</p>
//       )}
//     </div>
//   );
// };

// export { OrderList };

import { useOrder } from "../../contexts/orderContext";
import { Link } from "react-router-dom";

const OrderList = () => {
  const {
    orderState: { orders },
  } = useOrder();

  return (
    <div className="space-y-4">
      {orders?.length ? (
        [...orders].reverse().map((order) => {
          const { paymentId, orderId, amount, delivery, products } = order;
          return (
            <div
              className="border border-gray-200 rounded-lg shadow-md p-4 text-sm"
              key={paymentId}
            >
              <div className="flex mb-2">
                <div className="font-bold">Payment ID:</div>
                <div>{paymentId}</div>
              </div>

              <div className="flex mb-2">
                <div className="font-bold">Order ID:</div>
                <div>{orderId}</div>
              </div>

              <div className="flex mb-2">
                <div className="font-bold">Amount Paid:</div>
                <div>&#8377;{amount}</div>
              </div>

              <div className="flex mb-2">
                <div className="font-bold">Address:</div>
                <div>{`${delivery.name}, ${delivery.street}, ${delivery.city} - ${delivery.zipcode}, ${delivery.state}, ${delivery.country}`}</div>
              </div>

              <div>
                <div className="font-bold mb-2">Products Ordered:</div>
                <div className="space-y-2">
                  {products.map((product) => (
                    <Link
                      to={`/products/${product.id}`}
                      key={product.id}
                      className="grid grid-cols-2 gap-4 p-4 border border-gray-200 rounded-lg shadow-md cursor-pointer"
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto mx-auto"
                      />

                      <div>
                        <div>{product.title}</div>

                        <div className="flex">
                          <div className="font-bold">Price:</div>
                          <div>&#8377;{product.discountedPrice}</div>
                        </div>

                        <div className="flex">
                          <div className="font-bold">Qty:</div>
                          <div>{product.qty}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No orders placed.</p>
      )}
    </div>
  );
};

export { OrderList };
