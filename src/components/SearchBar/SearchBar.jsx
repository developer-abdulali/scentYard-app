import { useProducts } from "../../contexts/productContext";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const SearchBar = () => {
  const {
    searchVal,
    setSearchVal,
    productDispatch,
    productState,
    filterTypes: { CLEAR_FILTERS },
  } = useProducts();
  const { navigate } = useAuth();

  const location = useLocation();

  const navigateToProducts = () => {
    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };

  const onChangeHandler = (e) => {
    productDispatch({
      type: CLEAR_FILTERS,
      payload: { data: productState.products },
    });
    setSearchVal(e.target.value);
    navigateToProducts();
  };

  const debounce = (fn, delay = 500) => {
    let timer = 0;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  return (
    <input
      type="text"
      placeholder="Search"
      onChange={debounce(onChangeHandler, 500)}
      className="border border-[#436C68] w-[218px] h-8 px-2 rounded-md focus:outline-none"
    />
  );
};

export { SearchBar };