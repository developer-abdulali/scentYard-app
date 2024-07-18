import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-grow flex flex-col items-center justify-center">
        <div className="border border-primary p-4 max-w-lg text-center">
          <div className="text-6xl text-blue-500">
            <i className="fas fa-check-circle"></i>
          </div>

          <div className="text-2xl font-bold mt-4">
            You have successfully been logged out!
          </div>

          <div className="mt-4">
            <Link
              to="/"
              className="text-blue-500 flex items-center justify-center"
            >
              <i className="fas fa-angle-double-left mr-2"></i>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { Logout };
