// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../contexts/authContext";
// import { useWishlist } from "../../contexts/wishlistContext";
// import { useCart } from "../../contexts/cartContext";
// import { SearchBar } from "../SearchBar/SearchBar";

// const Navbar = () => {
//   const { isAuth, logoutHandler } = useAuth();
//   const { wishlistState } = useWishlist();
//   const { cartState } = useCart();

//   return (
//     <nav className="nav-bar">
//       <Link to="/" className="nav-brand">
//         ScentYard
//       </Link>

//       <Link to="/products" className="nav-primary">
//         <span>Shop</span>
//       </Link>

//       <div className="nav-search input input-primary">
//         <SearchBar />
//       </div>

//       <div className="nav-action">
//         <Link to="/wishlist" className="icon" title="Wishlist">
//           <i className="fa-solid fa-heart"></i>
//           {isAuth && wishlistState.length > 0 ? (
//             <span className="badge">{wishlistState.length}</span>
//           ) : null}
//         </Link>

//         <Link to="/cart" className="icon" title="Cart">
//           <i className="fa-solid fa-shopping-cart"></i>
//           {isAuth && cartState.length > 0 ? (
//             <span className="badge">{cartState.length}</span>
//           ) : null}
//         </Link>

//         {isAuth ? (
//           <Link to="/profile" className="icon profile" title="Profile">
//             <i className="fa-solid fa-user"></i>
//           </Link>
//         ) : (
//           <Link to="/login" className="icon login" title="Login">
//             <i className="fa-solid fa-sign-in"></i>
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export { Navbar };

import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { SearchBar } from "../SearchBar/SearchBar";

const Navbar = () => {
  const { isAuth, logoutHandler } = useAuth();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();

  return (
    <nav className="flex items-center justify-between bg-white py-3 px-4 sm:py-5 sm:px-10 mb-6 sm:mb-10">
      <div className="flex items-center gap-2 mb-3 sm:mb-0">
        <Link
          to="/"
          className="text-[#436C68] text-2xl sm:text-4xl font-normal"
        >
          ScentYard
        </Link>
        <Link to="/products" className="underline">
          Shop
        </Link>
      </div>

      {/* search bar */}
      <div className="hidden md:block w-full sm:w-auto mb-3 sm:mb-0">
        <SearchBar />
      </div>

      {/* icons */}
      <div className="flex items-center gap-3 text-[#436C68]">
        <Link to="/wishlist" title="Wishlist" className="relative">
          <i className="fa-solid fa-heart"></i>
          {isAuth && wishlistState.length > 0 ? (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
              {wishlistState.length}
            </span>
          ) : null}
        </Link>

        <Link to="/cart" title="Cart" className="relative">
          <i className="fa-solid fa-shopping-cart"></i>
          {isAuth && cartState.length > 0 ? (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
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