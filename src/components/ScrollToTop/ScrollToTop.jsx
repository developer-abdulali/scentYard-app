import React from "react";

const ScrollToTop = () => {
  return (
    <button
      className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => window.scrollTo(0, 0)}
    >
      <i className="fas fa-angle-up"></i>
    </button>
  );
};

export { ScrollToTop };
