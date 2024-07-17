import { useState } from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { useAuth } from "../../../contexts/authContext";
import { loginService } from "../../../services/authServices";
import { Link } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import { toast } from "react-hot-toast";

const Login = () => {
  const { setIsAuth, setToken, navigate } = useAuth();

  const [login, setLogin] = useState({
    input: {},
    error: "",
    hide: { pwd: true },
  });

  const [loading, setLoading] = useState(false);

  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, input: { ...login.input, [name]: value } });
  };
  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await loginService(login.input);
      setLoading(false);

      toast.success(`Welcome back, ${data.foundUser.firstName}!`, {
        icon: "👋",
      });

      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));

      setToken(data.encodedToken);
      setIsAuth(true);
      navigate("/");
    } catch (err) {
      setLoading(false);
      console.error("Login error:", err);

      if (err.response) {
        if (err.response.status === 500) {
          setLogin({ ...login, error: "An unexpected server error occurred." });
        } else if (
          err.response.data &&
          err.response.data.errors &&
          err.response.data.errors.length > 0
        ) {
          setLogin({ ...login, error: err.response.data.errors[0] });
        } else {
          setLogin({ ...login, error: "An unexpected error occurred." });
        }
      } else {
        setLogin({ ...login, error: "An unexpected error occurred." });
      }
    }
  };

  return (
    <div className="page-wrapper flex flex-col min-h-screen">
      <Navbar />

      <section className="flex-grow flex items-center justify-center p-4">
        {loading ? (
          <Loader />
        ) : (
          <div className="max-w-md w-full p-4 border border-gray-200 bg-white rounded-md">
            <div className="text-center text-2xl font-bold mb-4">Log In</div>

            <form className="space-y-4" onSubmit={loginHandler}>
              <div className="space-y-2">
                <label className="text-sm">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here..."
                  name="email"
                  value={login.input.email || ""}
                  onChange={loginInputHandler}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm">
                  Password<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={`${login.hide.pwd ? "password" : "text"}`}
                    placeholder="Type here..."
                    name="password"
                    value={login.input.password || ""}
                    onChange={loginInputHandler}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <i
                    className={`fa-solid absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${
                      login.hide.pwd ? "fa-eye" : "fa-eye-slash"
                    } text-blue-600`}
                    onClick={() =>
                      setLogin({
                        ...login,
                        hide: { pwd: !login.hide.pwd },
                      })
                    }
                  ></i>
                </div>
                <div className="text-center text-red-500">{login.error}</div>
              </div>

              <button
                className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90"
                type="submit"
              >
                Log In
              </button>
              <button
                className="w-full px-4 py-2 text-primary border border-primary rounded-md hover:bg-blue-100 hover:no-underline"
                type="button"
                onClick={() =>
                  setLogin({
                    ...login,
                    input: {
                      email: "himadri123@gmail.com",
                      password: "himadri123",
                    },
                  })
                }
              >
                Guest Mode
              </button>
            </form>

            <div className="mt-4 text-sm">
              <span>New to Essence? </span>
              <Link to="/signup" className="text-blue-600 underline">
                SignUp
              </Link>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export { Login };
