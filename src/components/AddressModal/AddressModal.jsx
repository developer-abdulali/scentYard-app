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
//     <div className="bg-gray-100 p-4 w-80 m-4 rounded overflow-y-auto max-h-screen">
//       <h3>Add New Address</h3>

//       <form
//         className="space-y-2 mt-2"
//         onSubmit={(e) => {
//           submitFormHandler(e);
//           setShowAddrModal(false);
//         }}
//       >
//         <div className="border border-blue-500 rounded">
//           <label className="flex flex-col gap-1 p-2 text-sm">
//             <div className="opacity-80">Name</div>
//             <input
//               type="text"
//               name="name"
//               value={formData.name || ""}
//               onChange={formInputHandler}
//               required
//               className="bg-transparent focus:outline-none text-sm"
//             />
//           </label>
//         </div>

//         {/* Repeat the above div for each input field */}

//         <div className="flex gap-2 mt-2">
//           {Object.values(formData).every((value) => value.length > 0) &&
//           !formError.zipcodeError &&
//           !formError.mobileError ? (
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded flex-grow"
//               type="submit"
//             >
//               Add
//             </button>
//           ) : (
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded flex-grow opacity-60 cursor-not-allowed"
//               type="submit"
//               disabled
//             >
//               Add
//             </button>
//           )}

//           <button
//             className="border border-blue-500 text-blue-500 px-4 py-2 rounded flex-grow"
//             onClick={() => setShowAddrModal(false)}
//           >
//             Cancel
//           </button>
//         </div>

//         <div>
//           <button
//             className="border border-blue-500 text-blue-500 px-4 py-2 rounded w-full"
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

export const AddressModal = ({ setShowAddrModal }) => {
  const {
    addressState: { formData, formError },
    dispatchAddress,
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

  const handleAddAddress = async (e) => {
    e.preventDefault();

    // Add the new address to local storage
    const newAddress = { ...formData, _id: Date.now().toString() };
    const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    storedAddresses.push(newAddress);
    localStorage.setItem("addresses", JSON.stringify(storedAddresses));

    // Dispatch an action to update the addresses array in the addressState
    dispatchAddress({ type: "GET_ADDRESS", payload: storedAddresses });

    // Reset the form and close the modal
    dispatchAddress({ type: "RESET_FORM", payload: initialUserObj });
    setShowAddrModal(false);
  };

  return (
    <div className="bg-gray-100 p-4 w-80 m-4 rounded overflow-y-auto max-h-screen">
      <h3>Add New Address</h3>

      <form className="space-y-2 mt-2" onSubmit={handleAddAddress}>
        <div className="border border-blue-500 rounded">
          <label className="flex flex-col gap-1 p-2 text-sm">
            <div className="opacity-80">Email</div>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={formInputHandler}
              className="bg-transparent focus:outline-none text-sm"
            />
          </label>
        </div>

        <div className="border border-blue-500 rounded">
          <label className="flex flex-col gap-1 p-2 text-sm">
            <div className="opacity-80">First Name</div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ""}
              onChange={formInputHandler}
              className="bg-transparent focus:outline-none text-sm"
            />
          </label>
        </div>

        <div className="border border-blue-500 rounded">
          <label className="flex flex-col gap-1 p-2 text-sm">
            <div className="opacity-80">Last Name</div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ""}
              onChange={formInputHandler}
              className="bg-transparent focus:outline-none text-sm"
            />
          </label>
        </div>

        <div className="border border-blue-500 rounded">
          <label className="flex flex-col gap-1 p-2 text-sm">
            <div className="opacity-80">Address</div>
            <input
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={formInputHandler}
              className="bg-transparent focus:outline-none text-sm"
            />
          </label>
        </div>

        <div className="border border-blue-500 rounded">
          <label className="flex flex-col gap-1 p-2 text-sm">
            <div className="opacity-80">City</div>
            <input
              type="text"
              name="city"
              value={formData.city || ""}
              onChange={formInputHandler}
              className="bg-transparent focus:outline-none text-sm"
            />
          </label>
        </div>

        <div className="border border-blue-500 rounded">
          <label className="flex flex-col gap-1 p-2 text-sm">
            <div className="opacity-80">Postal Code</div>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode || ""}
              onChange={formInputHandler}
              className="bg-transparent focus:outline-none text-sm"
            />
          </label>
        </div>

        <div className="border border-blue-500 rounded">
          <label className="flex flex-col gap-1 p-2 text-sm">
            <div className="opacity-80">Phone</div>
            <input
              type="tel"
              name="phone"
              value={formData.phone || ""}
              onChange={formInputHandler}
              className="bg-transparent focus:outline-none text-sm"
            />
          </label>
        </div>

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
              className="bg-blue-500 text-white px-4 py-2 rounded flex-grow"
              type="submit"
              // disabled
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
      </form>
    </div>
  );
};
