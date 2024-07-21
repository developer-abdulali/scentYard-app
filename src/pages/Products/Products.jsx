import "./Products.css";
import { ProductListing } from "../../components/ProductListing/ProductListing";
import { ProductFilters } from "../../components/ProductFilters/ProductFilters";

const Products = () => {
  return (
    <div className="page-wrapper">
      <section className="main-section">
        <main className="flex-grow flex">
          <div className="lg:w-72">
            <ProductFilters />
          </div>
          <div className="flex-1">
            <ProductListing />
          </div>
        </main>
      </section>
    </div>
  );
};

export { Products };
