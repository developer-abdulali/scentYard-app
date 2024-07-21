import { useParams, Link } from "react-router-dom";
import { useOrder } from "../../contexts/orderContext";

export const OrderSummary = () => {
  const { orderId } = useParams();
  const {
    orderState: { orders },
  } = useOrder();

  const latestOrder = orders.find((order) => order.orderId === orderId);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        {latestOrder ? (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
              Order Placed Successfully!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto p-4 text-sm border border-gray-200 rounded-lg shadow-md">
              <div>
                <div className="space-y-2" key={latestOrder?.paymentId}>
                  <div className="flex">
                    <div className="font-bold">Payment ID:</div>
                    <div>{latestOrder?.paymentId}</div>
                  </div>

                  <div className="flex">
                    <div className="font-bold">Order ID:</div>
                    <div>{latestOrder?.orderId}</div>
                  </div>

                  <div className="flex">
                    <div className="font-bold">Amount Paid:</div>
                    <div>&#8377;{latestOrder?.amount}</div>
                  </div>

                  <div className="flex">
                    <div className="font-bold">Address:</div>
                    <div>{`${latestOrder?.delivery.name}, ${latestOrder?.delivery.street}, ${latestOrder?.delivery.city} - ${latestOrder.delivery?.zipcode}, ${latestOrder?.delivery.state}, ${latestOrder.delivery?.country}`}</div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className="font-bold mb-2">Products Ordered:</div>
                  <div className="space-y-2">
                    {latestOrder?.products.map((product) => (
                      <Link
                        to={`/products/${product.id}`}
                        key={product.id}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 rounded-lg shadow-md cursor-pointer"
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
            </div>
          </>
        ) : (
          <div className="text-center">
            <p>Oops! We lost your order :</p>
            <Link to="/products" className="text-blue-500">
              Start shopping!
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};
