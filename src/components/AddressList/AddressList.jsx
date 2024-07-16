import { useState } from "react";
import { useAddress } from "../../contexts/addressContext";
import { AddressModal } from "../AddressModal/AddressModal";

const AddressList = () => {
  const {
    addressState: { addresses },
    dispatchAddress,
    deleteAddressHandler,
  } = useAddress();

  const [showAddrModal, setShowAddrModal] = useState(false);

  const editAddress = (data) => {
    setShowAddrModal(true);
    dispatchAddress({ type: "EDIT_INPUT", payload: { data } });
  };

  return (
    <div>
      <button
        className="bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded flex items-center gap-2"
        onClick={() => setShowAddrModal(true)}
      >
        <i className="fas fa-plus"></i>Add address
      </button>

      <div className="space-y-4 mt-4">
        {addresses?.length ? (
          addresses?.map((address) => (
            <div key={address._id} className="border-b border-gray-200 pb-4">
              <p className="font-bold">{address.name}</p>
              <p>{address.street},</p>
              <p>
                {address.city} - {address.zipcode}
              </p>
              <p>
                {address.state}, {address.country}
              </p>
              <p>{address.mobile}</p>

              <div className="flex gap-2 mt-2">
                <button
                  className="border border-blue-500 text-blue-500 px-2 py-1 text-sm rounded"
                  onClick={() => editAddress(address)}
                >
                  Edit
                </button>
                <button
                  className="border border-red-500 text-red-500 px-2 py-1 text-sm rounded"
                  onClick={() => deleteAddressHandler(address._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No address found.</p>
        )}
      </div>
      {showAddrModal ? (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <AddressModal setShowAddrModal={setShowAddrModal} />
        </div>
      ) : null}
    </div>
  );
};

export { AddressList };
