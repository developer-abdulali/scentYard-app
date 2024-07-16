import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-grow flex flex-col items-center justify-center">
        <img
          src="/assets/404.svg"
          className="w-full max-w-[28rem] p-4"
          alt="Page Not Found"
        />

        <div className="mt-8">
          <Link to="/" className="flex items-center text-blue-500">
            <i
              className="fa-solid fa-angle-double-left mr-2"
              aria-hidden="true"
            ></i>
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { PageNotFound };
