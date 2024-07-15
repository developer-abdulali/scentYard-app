// import { Navbar } from "../../../components/Navbar/Navbar";
// import { Footer } from "../../../components/Footer/Footer";
// import "../styles.css";
// import { useState } from "react";
// import { signupService } from "../../../services/authServices";
// import { Loader } from "../../../components/Loader/Loader";
// import { toast } from "react-hot-toast";
// import { useAuth } from "../../../contexts/authContext";
// import { Link } from "react-router-dom";

// const SignUp = () => {
//   const { setIsAuth, setToken, navigate } = useAuth();

//   const [signup, setSignup] = useState({
//     input: {},
//     error: "",
//     pwdMatch: true,
//     hide: { pwd: true, confirmPwd: true },
//   });

//   const [loading, setLoading] = useState(false);

//   const signupInputHandler = (e) => {
//     const { name, value } = e.target;

//     if (name === "confirmPwd") {
//       setSignup({
//         ...signup,
//         input: { ...signup.input, [name]: value },
//         pwdMatch: value === signup.input.password ? true : false,
//       });
//     } else {
//       setSignup({ ...signup, input: { ...signup.input, [name]: value } });
//     }
//   };

//   const signupHandler = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);
//       const { data } = await signupService(signup.input);
//       setLoading(false);

//       toast.success(`Hi, ${data.createdUser.firstName}!`, {
//         icon: "👋",
//       });

//       localStorage.setItem("isAuth", true);
//       localStorage.setItem("token", data.encodedToken);
//       localStorage.setItem("user", JSON.stringify(data.createdUser));

//       setToken(data.encodedToken);

//       setIsAuth(true);

//       navigate("/");
//     } catch (err) {
//       setLoading(false);
//       toast.error("There was an error signing you up");
//       setSignup({ ...signup, error: err.response.data.errors[0] });
//     }
//   };

//   return (
//     <div className="page-wrapper">
//       <Navbar />

//       <section className="main-section login-container">
//         {loading ? (
//           <Loader />
//         ) : (
//           <div className="card-wrapper basic-card card-text-only">
//             <div className="text-center text-danger">{signup.error}</div>

//             <div>
//               <div className="card-heading">Sign Up</div>
//             </div>

//             <div className="card-content">
//               <form className="form-group" onSubmit={signupHandler}>
//                 <div className="input-group input input-primary">
//                   <label className="input-label">
//                     FirstName<span>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Type here..."
//                     name="firstName"
//                     value={signup.input.firstName || ""}
//                     onChange={signupInputHandler}
//                     required
//                   />
//                 </div>

//                 <div className="input-group input input-primary">
//                   <label className="input-label">
//                     LastName<span>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Type here..."
//                     name="lastName"
//                     value={signup.input.lastName || ""}
//                     onChange={signupInputHandler}
//                     required
//                   />
//                 </div>

//                 <div className="input-group input input-primary">
//                   <label className="input-label">
//                     Email<span>*</span>
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Type here..."
//                     name="email"
//                     value={signup.input.email || ""}
//                     onChange={signupInputHandler}
//                     required
//                   />
//                 </div>

//                 <div className="input-group input input-primary">
//                   <label className="input-label">
//                     Password<span>*</span>
//                   </label>
//                   <div className="toggle-pwd">
//                     <input
//                       type={`${signup.hide.pwd ? "password" : "text"}`}
//                       placeholder="Type here..."
//                       name="password"
//                       value={signup.input.password || ""}
//                       onChange={signupInputHandler}
//                       required
//                     />
//                     <i
//                       className={`fa-solid ${
//                         signup.hide.pwd ? "fa-eye" : "fa-eye-slash"
//                       }
//                     `}
//                       onClick={() =>
//                         setSignup({
//                           ...signup,
//                           hide: { ...signup.hide, pwd: !signup.hide.pwd },
//                         })
//                       }
//                     ></i>
//                   </div>
//                 </div>

//                 <div className="input-group input input-primary">
//                   <label className="input-label">
//                     Confirm Password<span>*</span>
//                   </label>
//                   <div className="toggle-pwd">
//                     <input
//                       type={`${signup.hide.confirmPwd ? "password" : "text"}`}
//                       placeholder="Type here..."
//                       name="confirmPwd"
//                       value={signup.input.confirmPwd || ""}
//                       onChange={signupInputHandler}
//                       required
//                     />

//                     <i
//                       className={`fa-solid ${
//                         signup.hide.confirmPwd ? "fa-eye" : "fa-eye-slash"
//                       }`}
//                       onClick={() =>
//                         setSignup({
//                           ...signup,
//                           hide: {
//                             ...signup.hide,
//                             confirmPwd: !signup.hide.confirmPwd,
//                           },
//                         })
//                       }
//                     ></i>
//                   </div>
//                   {!signup.pwdMatch ? (
//                     <div className="input-error-msg">
//                       Passwords do not match
//                     </div>
//                   ) : null}
//                 </div>

//                 {signup.pwdMatch ? (
//                   <button className="btn btn-primary" type="submit">
//                     Create New Account
//                   </button>
//                 ) : (
//                   <button
//                     className="btn btn-primary btn-disabled"
//                     type="submit"
//                     disabled
//                   >
//                     Create New Account
//                   </button>
//                 )}
//               </form>
//             </div>

//             <div className="card-action">
//               <span>Already have an account? </span>
//               <Link to="/login" className="link">
//                 Login
//               </Link>
//             </div>
//           </div>
//         )}
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export { SignUp };

import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import "../styles.css";
import { useState } from "react";
import { signupService } from "../../../services/authServices";
import { Loader } from "../../../components/Loader/Loader";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../contexts/authContext";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { setIsAuth, setToken, navigate } = useAuth();

  const [signup, setSignup] = useState({
    input: {},
    error: "",
    pwdMatch: true,
    hide: { pwd: true, confirmPwd: true },
  });

  const [loading, setLoading] = useState(false);

  const signupInputHandler = (e) => {
    const { name, value } = e.target;

    if (name === "confirmPwd") {
      setSignup({
        ...signup,
        input: { ...signup.input, [name]: value },
        pwdMatch: value === signup.input.password ? true : false,
      });
    } else {
      setSignup({ ...signup, input: { ...signup.input, [name]: value } });
    }
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await signupService(signup.input);
      setLoading(false);

      toast.success(`Hi, ${data.createdUser.firstName}!`, {
        icon: "👋",
      });

      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.createdUser));

      setToken(data.encodedToken);

      setIsAuth(true);

      navigate("/");
    } catch (err) {
      setLoading(false);
      toast.error("There was an error signing you up");
      setSignup({ ...signup, error: err.response.data.errors[0] });
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
            <div className="text-center text-red-500">{signup.error}</div>
            <div className="text-center text-2xl font-bold mb-4">Sign Up</div>

            <form className="space-y-4" onSubmit={signupHandler}>
              <div className="space-y-2">
                <label className="text-sm">
                  FirstName<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  name="firstName"
                  value={signup.input.firstName || ""}
                  onChange={signupInputHandler}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm">
                  LastName<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  name="lastName"
                  value={signup.input.lastName || ""}
                  onChange={signupInputHandler}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here..."
                  name="email"
                  value={signup.input.email || ""}
                  onChange={signupInputHandler}
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
                    type={`${signup.hide.pwd ? "password" : "text"}`}
                    placeholder="Type here..."
                    name="password"
                    value={signup.input.password || ""}
                    onChange={signupInputHandler}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <i
                    className={`fa-solid absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${
                      signup.hide.pwd ? "fa-eye" : "fa-eye-slash"
                    } text-blue-600`}
                    onClick={() =>
                      setSignup({
                        ...signup,
                        hide: { ...signup.hide, pwd: !signup.hide.pwd },
                      })
                    }
                  ></i>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm">
                  Confirm Password<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={`${signup.hide.confirmPwd ? "password" : "text"}`}
                    placeholder="Type here..."
                    name="confirmPwd"
                    value={signup.input.confirmPwd || ""}
                    onChange={signupInputHandler}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <i
                    className={`fa-solid absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${
                      signup.hide.confirmPwd ? "fa-eye" : "fa-eye-slash"
                    } text-blue-600`}
                    onClick={() =>
                      setSignup({
                        ...signup,
                        hide: {
                          ...signup.hide,
                          confirmPwd: !signup.hide.confirmPwd,
                        },
                      })
                    }
                  ></i>
                </div>
                {!signup.pwdMatch ? (
                  <div className="text-sm text-red-500">
                    Passwords do not match
                  </div>
                ) : null}
              </div>

              {signup.pwdMatch ? (
                <button
                  className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="submit"
                >
                  Create New Account
                </button>
              ) : (
                <button
                  className="w-full px-4 py-2 text-white bg-gray-400 rounded-md cursor-not-allowed"
                  type="submit"
                  disabled
                >
                  Create New Account
                </button>
              )}
            </form>

            <div className="mt-4 text-sm">
              <span>Already have an account? </span>
              <Link to="/login" className="text-blue-600 underline">
                Login
              </Link>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>

    // <div className="page-wrapper">
    //   <Navbar />

    //   <section className="main-section login-container">
    //     {loading ? (
    //       <Loader />
    //     ) : (
    //       <div className="card-wrapper basic-card card-text-only">
    //         <div className="text-center text-danger">{signup.error}</div>

    //         <div>
    //           <div className="card-heading">Sign Up</div>
    //         </div>

    //         <div className="card-content">
    //           <form className="form-group" onSubmit={signupHandler}>
    //             <div className="input-group input input-primary">
    //               <label className="input-label">
    //                 FirstName<span>*</span>
    //               </label>
    //               <input
    //                 type="text"
    //                 placeholder="Type here..."
    //                 name="firstName"
    //                 value={signup.input.firstName || ""}
    //                 onChange={signupInputHandler}
    //                 required
    //               />
    //             </div>

    //             <div className="input-group input input-primary">
    //               <label className="input-label">
    //                 LastName<span>*</span>
    //               </label>
    //               <input
    //                 type="text"
    //                 placeholder="Type here..."
    //                 name="lastName"
    //                 value={signup.input.lastName || ""}
    //                 onChange={signupInputHandler}
    //                 required
    //               />
    //             </div>

    //             <div className="input-group input input-primary">
    //               <label className="input-label">
    //                 Email<span>*</span>
    //               </label>
    //               <input
    //                 type="email"
    //                 placeholder="Type here..."
    //                 name="email"
    //                 value={signup.input.email || ""}
    //                 onChange={signupInputHandler}
    //                 required
    //               />
    //             </div>

    //             <div className="input-group input input-primary">
    //               <label className="input-label">
    //                 Password<span>*</span>
    //               </label>
    //               <div className="toggle-pwd">
    //                 <input
    //                   type={`${signup.hide.pwd ? "password" : "text"}`}
    //                   placeholder="Type here..."
    //                   name="password"
    //                   value={signup.input.password || ""}
    //                   onChange={signupInputHandler}
    //                   required
    //                 />
    //                 <i
    //                   className={`fa-solid ${
    //                     signup.hide.pwd ? "fa-eye" : "fa-eye-slash"
    //                   }
    //                 `}
    //                   onClick={() =>
    //                     setSignup({
    //                       ...signup,
    //                       hide: { ...signup.hide, pwd: !signup.hide.pwd },
    //                     })
    //                   }
    //                 ></i>
    //               </div>
    //             </div>

    //             <div className="input-group input input-primary">
    //               <label className="input-label">
    //                 Confirm Password<span>*</span>
    //               </label>
    //               <div className="toggle-pwd">
    //                 <input
    //                   type={`${signup.hide.confirmPwd ? "password" : "text"}`}
    //                   placeholder="Type here..."
    //                   name="confirmPwd"
    //                   value={signup.input.confirmPwd || ""}
    //                   onChange={signupInputHandler}
    //                   required
    //                 />

    //                 <i
    //                   className={`fa-solid ${
    //                     signup.hide.confirmPwd ? "fa-eye" : "fa-eye-slash"
    //                   }`}
    //                   onClick={() =>
    //                     setSignup({
    //                       ...signup,
    //                       hide: {
    //                         ...signup.hide,
    //                         confirmPwd: !signup.hide.confirmPwd,
    //                       },
    //                     })
    //                   }
    //                 ></i>
    //               </div>
    //               {!signup.pwdMatch ? (
    //                 <div className="input-error-msg">
    //                   Passwords do not match
    //                 </div>
    //               ) : null}
    //             </div>

    //             {signup.pwdMatch ? (
    //               <button className="btn btn-primary" type="submit">
    //                 Create New Account
    //               </button>
    //             ) : (
    //               <button
    //                 className="btn btn-primary btn-disabled"
    //                 type="submit"
    //                 disabled
    //               >
    //                 Create New Account
    //               </button>
    //             )}
    //           </form>
    //         </div>

    //         <div className="card-action">
    //           <span>Already have an account? </span>
    //           <Link to="/login" className="link">
    //             Login
    //           </Link>
    //         </div>
    //       </div>
    //     )}
    //   </section>
    //   <Footer />
    // </div>
  );
};

export { SignUp };
