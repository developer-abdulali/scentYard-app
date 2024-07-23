// import { useState } from "react";
// import { useAddress } from "../../contexts/addressContext";

// export const AddressForm = () => {
//   const { dispatchAddress } = useAddress();

//   const [formData, setFormData] = useState({
//     email: "",
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddAddress = (newAddress) => {
//     // Add the new address to local storage
//     const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
//     storedAddresses.push({ ...newAddress, _id: Date.now().toString() });
//     localStorage.setItem("addresses", JSON.stringify(storedAddresses));

//     // Dispatch an action to update the addresses array in the addressState
//     dispatchAddress({ type: "GET_ADDRESS", payload: storedAddresses });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleAddAddress(formData);
//   };

//   return (
//     <form className="space-y-4 mt-2" onSubmit={handleSubmit}>
//       <div className="grid grid-cols-1 gap-4">
//         <div>
//           <label className="text-lg font-bold text-gray-800">Contact</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder:text-black/60"
//           />
//         </div>

//         <div>
//           <label className="text-lg font-bold text-gray-800">Delivery</label>
//           <select
//             name=""
//             id=""
//             className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           >
//             <option value="pakistan">Pakistan</option>
//           </select>
//         </div>

//         <label className="text-lg font-bold text-gray-800">First Name</label>
//         <div className="flex items-center gap-2">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           />

//           <input
//             type="text"
//             name="lastName"
//             placeholder="lastName (optional)"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           />
//         </div>

//         <div>
//           <label className="text-lg font-bold text-gray-800">Address</label>
//           <input
//             type="text"
//             name="address"
//             placeholder="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           />
//         </div>

//         <label className="text-lg font-bold text-gray-800">City</label>
//         <div className="flex items-center gap-2">
//           <input
//             type="text"
//             name="city"
//             placeholder="city"
//             value={formData.city}
//             onChange={handleChange}
//             className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           />
//           <input
//             type="text"
//             name="postalCode"
//             placeholder="postalCode"
//             value={formData.postalCode}
//             onChange={handleChange}
//             className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Phone
//           </label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           />
//         </div>
//       </div>

//       <button
//         type="submit"
//         className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/75"
//       >
//         Add Address
//       </button>
//     </form>
//   );
// };

import { useState } from "react";
import { useAddress } from "../../contexts/addressContext";

export const AddressForm = () => {
  const { dispatchAddress } = useAddress();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddAddress = (newAddress) => {
    // Add the new address to local storage
    const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    storedAddresses.push({ ...newAddress, _id: Date.now().toString() });
    localStorage.setItem("addresses", JSON.stringify(storedAddresses));

    // Dispatch an action to update the addresses array in the addressState
    dispatchAddress({ type: "GET_ADDRESS", payload: storedAddresses });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddAddress(formData);
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      postalCode: "",
      phone: "",
    });
  };

  return (
    <form className="space-y-4 mt-2" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Delivery
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="pakistan">Pakistan</option>
          </select>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name (optional)
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/75"
      >
        Add Address
      </button>
    </form>
  );
};
