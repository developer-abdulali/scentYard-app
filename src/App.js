import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { NavRoutes } from "./Routes/NavRoutes";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: "4rem",
        }}
      />
      <NavRoutes />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
