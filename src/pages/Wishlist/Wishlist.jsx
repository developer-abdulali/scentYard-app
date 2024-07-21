import { useWishlist } from "../../contexts/wishlistContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlistState } = useWishlist();

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow flex flex-col items-center justify-center">
        <div className="max-w-[80%] mx-auto">
          <div className="text-3xl font-bold text-center">
            My Wishlist ({wishlistState.length})
          </div>

          {wishlistState.length > 0 ? (
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {wishlistState.map((wishlistItem) => (
                <ProductCard product={wishlistItem} key={wishlistItem._id} />
              ))}
            </section>
          ) : (
            <div className="text-center mt-4">
              <p>Oops! Your wishlist is empty :</p>
              <Link to="/products" className="text-primary">
                Start shopping!
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export { Wishlist };
