import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { SearchBar } from "../SearchBar/SearchBar";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth, logoutHandler } = useAuth();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();

  return (
    // <nav className="sticky !top-0 z-10 flex items-center justify-between bg-white py-3 px-4 sm:py-5 sm:px-10 mb-6 sm:mb-10">
    <nav className="flex items-center justify-between bg-white py-3 px-4 sm:px-10 shadow-md">
      <div className="flex items-center gap-2 mb-3 sm:mb-0">
        <button
          onClick={() => navigate("/")}
          className="text-primary text-2xl sm:text-4xl font-normal hover:no-underline"
        >
          ScentYard
        </button>
        <Link to="/products" className="underline">
          Shop
        </Link>
      </div>

      {/* search bar */}
      <div className="hidden md:block w-full sm:w-auto">
        <SearchBar />
      </div>

      {/* icons */}
      <div className="flex items-center gap-3 text-primary">
        <Link to="/wishlist" title="Wishlist" className="relative">
          <i className="fa-solid fa-heart"></i>
          {isAuth && wishlistState.length > 0 ? (
            <span className="absolute  -top-3 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
              {wishlistState.length}
            </span>
          ) : null}
        </Link>

        <Link to="/cart" title="Cart" className="relative">
          <i className="fa-solid fa-shopping-cart"></i>
          {isAuth && cartState.length > 0 ? (
            <span className="absolute -top-3 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
              {cartState.length}
            </span>
          ) : null}
        </Link>

        {isAuth ? (
          <Link to="/profile" title="Profile">
            <i className="fa-solid fa-user"></i>
          </Link>
        ) : (
          <Link to="/login" title="Login">
            <i className="fa-solid fa-sign-in"></i>
          </Link>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
