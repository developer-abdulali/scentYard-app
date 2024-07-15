// import "./AddressModal.css";
// import { useAddress } from "../../contexts/addressContext";
// import { useEffect } from "react";

// const dummyAddress = {
//   name: "Nandini Gandhi",
//   street: "18, Aazaad Colony",
//   city: "Surat",
//   state: "Gujarat",
//   zipcode: "360029",
//   country: "India",
//   mobile: "9823500668",
// };

// export const AddressModal = ({ setShowAddrModal }) => {
//   const {
//     addressState: { formData, formError },
//     dispatchAddress,
//     submitFormHandler,
//     initialUserObj,
//   } = useAddress();

//   const formInputHandler = (e) => {
//     const { name, value } = e.target;

//     dispatchAddress({ type: "SET_INPUT", payload: { name, value } });

//     if (name === "zipcode") {
//       const zipcodeError =
//         value.length > 0 && !/^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{5})$/.test(value)
//           ? true
//           : false;

//       dispatchAddress({ type: "ZIPCODE_ERROR", payload: { zipcodeError } });
//     }

//     if (name === "mobile") {
//       const mobileError =
//         value.length > 0 && !/^[1-9]{1}[0-9]{9}$/.test(value) ? true : false;
//       dispatchAddress({ type: "MOBILE_ERROR", payload: { mobileError } });
//     }
//   };

//   useEffect(() => {
//     return () =>
//       dispatchAddress({ type: "RESET_FORM", payload: initialUserObj });
//   }, []);

//   return (
//     <div className="address-form-wrapper">
//       <h3>Add New Address</h3>

//       <form
//         className="form-group"
//         onSubmit={(e) => {
//           submitFormHandler(e);
//           setShowAddrModal(false);
//         }}
//       >
//         <div className="input-group input input-primary">
//           <label className="input-label">
//             <div>Name</div>
//             <input
//               type="text"
//               name="name"
//               value={formData.name || ""}
//               onChange={formInputHandler}
//               required
//             />
//           </label>
//         </div>

//         <div className="input-group input input-primary">
//           <label className="input-label">
//             <div>Street</div>
//             <input
//               type="text"
//               name="street"
//               value={formData.street || ""}
//               onChange={formInputHandler}
//               required
//             />
//           </label>
//         </div>

//         <div className="input-group input input-primary ">
//           <label className="input-label">
//             <div>City</div>
//             <input
//               type="text"
//               name="city"
//               value={formData.city || ""}
//               onChange={formInputHandler}
//               required
//             />
//           </label>
//         </div>

//         <div className="input-group input input-primary">
//           <label className="input-label">
//             <div>Zipcode</div>
//             <input
//               type="text"
//               name="zipcode"
//               maxLength="6"
//               value={formData.zipcode || ""}
//               onChange={formInputHandler}
//               required
//             />

//             {formError.zipcodeError ? (
//               <div className="input-error-msg">Invalid Zipcode</div>
//             ) : null}
//           </label>
//         </div>

//         <div className="input-group input input-primary">
//           <label className="input-label">
//             <div>State</div>
//             <input
//               type="text"
//               name="state"
//               value={formData.state || ""}
//               onChange={formInputHandler}
//               required
//             />
//           </label>
//         </div>

//         <div className="input-group input input-primary">
//           <label className="input-label">
//             <div>Country</div>
//             <input
//               type="text"
//               name="country"
//               value={formData.country || ""}
//               onChange={formInputHandler}
//               required
//             />
//           </label>
//         </div>

//         <div className="input-group input input-primary">
//           <label className="input-label">
//             <div>Mobile</div>
//             <input
//               type="text"
//               name="mobile"
//               maxLength="10"
//               value={formData.mobile || ""}
//               onChange={formInputHandler}
//               required
//             />
//             {formError.mobileError ? (
//               <div className="input-error-msg">Invalid Mobile Number</div>
//             ) : null}
//           </label>
//         </div>

//         <div className="form-action">
//           {Object.values(formData).every((value) => value.length > 0) &&
//           !formError.zipcodeError &&
//           !formError.mobileError ? (
//             <button className="btn btn-primary" type="submit">
//               Add
//             </button>
//           ) : (
//             <button
//               className="btn btn-primary btn-disabled"
//               type="submit"
//               disabled
//             >
//               Add
//             </button>
//           )}

//           <button
//             className="btn btn-secondary"
//             onClick={() => setShowAddrModal(false)}
//           >
//             Cancel
//           </button>
//         </div>

//         <div>
//           <button
//             className="btn outline-primary"
//             type="button"
//             onClick={() =>
//               dispatchAddress({ type: "SET_DUMMY_ADDR", payload: dummyAddress })
//             }
//           >
//             Fill with Dummy values
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

import { useAddress } from "../../contexts/addressContext";
import { useEffect } from "react";

const dummyAddress = {
  name: "Nandini Gandhi",
  street: "18, Aazaad Colony",
  city: "Surat",
  state: "Gujarat",
  zipcode: "360029",
  country: "India",
  mobile: "9823500668",
};

export const AddressModal = ({ setShowAddrModal }) => {
  const {
    addressState: { formData, formError },
    dispatchAddress,
    submitFormHandler,
    initialUserObj,
  } = useAddress();

  const formInputHandler = (e) => {
    const { name, value } = e.target;

    dispatchAddress({ type: "SET_INPUT", payload: { name, value } });

    if (name === "zipcode") {
      const zipcodeError =
        value.length > 0 && !/^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{5})$/.test(value)
          ? true
          : false;

      dispatchAddress({ type: "ZIPCODE_ERROR", payload: { zipcodeError } });
    }

    if (name === "mobile") {
      const mobileError =
        value.length > 0 && !/^[1-9]{1}[0-9]{9}$/.test(value) ? true : false;
      dispatchAddress({ type: "MOBILE_ERROR", payload: { mobileError } });
    }
  };

  useEffect(() => {
    return () =>
      dispatchAddress({ type: "RESET_FORM", payload: initialUserObj });
  }, []);

  return (
    <div className="bg-gray-100 p-4 w-80 m-4 rounded overflow-y-auto max-h-screen">
      <h3>Add New Address</h3>

      <form
        className="space-y-2 mt-2"
        onSubmit={(e) => {
          submitFormHandler(e);
          setShowAddrModal(false);
        }}
      >
        <div className="border border-blue-500 rounded">
          <label className="flex flex-col gap-1 p-2 text-sm">
            <div className="opacity-80">Name</div>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={formInputHandler}
              required
              className="bg-transparent focus:outline-none text-sm"
            />
          </label>
        </div>

        {/* Repeat the above div for each input field */}

        <div className="flex gap-2 mt-2">
          {Object.values(formData).every((value) => value.length > 0) &&
          !formError.zipcodeError &&
          !formError.mobileError ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded flex-grow"
              type="submit"
            >
              Add
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded flex-grow opacity-60 cursor-not-allowed"
              type="submit"
              disabled
            >
              Add
            </button>
          )}

          <button
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded flex-grow"
            onClick={() => setShowAddrModal(false)}
          >
            Cancel
          </button>
        </div>

        <div>
          <button
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded w-full"
            type="button"
            onClick={() =>
              dispatchAddress({ type: "SET_DUMMY_ADDR", payload: dummyAddress })
            }
          >
            Fill with Dummy values
          </button>
        </div>
      </form>
    </div>
  );
};
