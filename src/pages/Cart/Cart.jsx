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

      <section className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl px-4">
          <h3 className="text-2xl font-bold text-center">
            My Cart (<span className="font-normal">{cartState.length}</span>)
          </h3>

          {cartState.length > 0 ? (
            <section className="grid grid-cols-3 gap-4">
              <div className="col-span-3 md:col-span-2 bg-[#E9E9E9] rounded-lg">
                {/* <div className="col-span-3 md:col-span-2 bg-gray-900 rounded-lg"> */}
                {cartState.map((cartItem) => (
                  <CartCard product={cartItem} key={cartItem._id} />
                ))}
              </div>

              <div className="col-span-3 md:col-span-1 bg-[#E9E9E9] p-4 rounded-lg h-fit">
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
