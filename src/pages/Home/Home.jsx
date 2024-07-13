// import "./Home.css";
// import { Link } from "react-router-dom";
// import { Navbar } from "../../components/Navbar/Navbar";
// import { Footer } from "../../components/Footer/Footer";
// import { HorizontalCard } from "../../components/HorizontalCard/HorizontalCard";
// import { categories } from "../../backend/db/categories";
// import { useProducts } from "../../contexts/productContext";

// const Home = () => {
//   const { productState, productDispatch, filterTypes } = useProducts();
//   const { CATEGORY, CLEAR_FILTERS } = filterTypes;

//   return (
//     <div className="page-wrapper">
//       <Navbar />

//       <section className="main-section">
//         <div className="hero">
//           <div className="hero-img">
//             <img className="resp-img" src="/assets/hero-img.jpg" alt="Image" />
//           </div>

//           <div className="hero-content">
//             <div>
//               Everything's better with a bit of fragrance
//               <p className="sub-title">
//                 Choose from our wide variety of fragrances
//               </p>
//               <Link to="/products" className="hero-action">
//                 <button className="btn btn-primary">Shop Now</button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="services-category">
//           <div className="service">
//             <div className="icon">
//               <i className="fa-solid fa-check-circle"></i>
//             </div>

//             <div className="text">
//               <div className="heading">Money Guarantee</div>
//               <div className="sub-heading">7 Days Money Back</div>
//             </div>
//           </div>

//           <div className="service">
//             <div className="icon">
//               <i className="fa-solid fa-truck-fast"></i>
//             </div>

//             <div className="text">
//               <div className="heading">Fast Delivery</div>
//               <div className="sub-heading">Within 3-5 business days</div>
//             </div>
//           </div>

//           <div className="service">
//             <div className="icon">
//               <i className="fa fa-credit-card"></i>
//             </div>

//             <div className="text">
//               <div className="heading">Secure Payments</div>
//               <div className="sub-heading">All Cards Accepted</div>
//             </div>
//           </div>
//         </div>

//         <div className="main-category">
//           <div className="heading-2">Categories:</div>

//           <div className="grid grid-three-col category-grid">
//             {categories.map((category) => {
//               return (
//                 <Link to="/products" key={category._id}>
//                   <div
//                     className="category-container"
//                     onClick={() => {
//                       productDispatch({
//                         type: CLEAR_FILTERS,
//                         payload: { data: productState.products },
//                       });
//                       productDispatch({
//                         type: CATEGORY,
//                         payload: { value: category.categoryName },
//                       });
//                     }}
//                   >
//                     <img
//                       className="resp-img"
//                       src={category.image}
//                       alt={category.categoryName}
//                     />
//                     <div className="overlay-container">
//                       {category.categoryName.toUpperCase()}
//                     </div>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>

//         <div className="featured-category">
//           <div className="heading-2">Featured:</div>

//           <div className="grid grid-two-col featured-grid">
//             {productState.products.slice(0, 4).map((product) => (
//               <HorizontalCard product={product} key={product._id} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export { Home };

import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { HorizontalCard } from "../../components/HorizontalCard/HorizontalCard";
import { categories } from "../../backend/db/categories";
import { useProducts } from "../../contexts/productContext";

const Home = () => {
  const { productState, productDispatch, filterTypes } = useProducts();
  const { CATEGORY, CLEAR_FILTERS } = filterTypes;

  return (
    <div className="page-wrapper overflow-hidden">
      <Navbar />

      <section className="main-section">
        {/* hero section */}
        <div className="hero">
          <div className="hero-img">
            {/* <div className="hero-img"> */}
            <img
              src="/assets/hero-img.jpg"
              alt="Image"
              className="w-full object-cover"
            />
            {/* <img className="resp-img" src="/assets/hero-img.jpg" alt="Image" /> */}
          </div>

          <div className="hero-content leading-tight">
            <div>
              Everything's better with a bit of fragrance
              <p className="text-xl my-4 text-[#000000]">
                {/* <p className="sub-title"> */}
                Choose from our wide variety of fragrances
              </p>
              <Link
                to="/products"
                className="bg-[#436C68] hover:bg-[#436c68d5] duration-300 text-2xl text-white py-2 px-4 font-normal"
              >
                {/* <Link to="/products" className="hero-action "> */}

                <button className="btn btn-primary">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>

        {/* services-category */}
        <div className="services-category">
          <div className="service">
            <div className="icon">
              <i className="fa-solid fa-check-circle"></i>
            </div>

            <div>
              <p className="text-2xl font-extrabold">Money Guarantee</p>
              <div className="text-2xl font-normal">7 Days Money Back</div>
            </div>
          </div>

          <div className="service">
            <div className="icon">
              <i className="fa-solid fa-truck-fast"></i>
            </div>

            <div>
              <div className="text-2xl font-extrabold">Fast Delivery</div>
              <div className="text-2xl">Within 3-5 business days</div>
            </div>
          </div>

          <div className="service">
            <div className="icon">
              <i className="fa fa-credit-card"></i>
            </div>

            <div className="text">
              <div className="text-2xl font-extrabold">Secure Payments</div>
              <div className="text-2xl">All Cards Accepted</div>
            </div>
          </div>
        </div>

        {/* categories */}
        <div className="main-category">
          <div className="text-4xl text-center my-10 font-semibold">
            Categories:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 category-grid">
            {categories.map((category) => {
              return (
                <Link to="/products" key={category._id}>
                  <div
                    className="category-container"
                    onClick={() => {
                      productDispatch({
                        type: CLEAR_FILTERS,
                        payload: { data: productState.products },
                      });
                      productDispatch({
                        type: CATEGORY,
                        payload: { value: category.categoryName },
                      });
                    }}
                  >
                    <img
                      className="resp-img"
                      src={category.image}
                      alt={category.categoryName}
                    />
                    <div className="overlay-container">
                      {category.categoryName.toUpperCase()}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="featured-category">
          <div className="text-4xl text-center my-10 font-semibold">
            Featured:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 featured-grid">
            {productState.products.slice(0, 4).map((product) => (
              <HorizontalCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { Home };
