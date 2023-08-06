import React, { useState } from "react";

function App() {
  const [orderText, setOrderText] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setOrderText("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderText(`I ordered a pizza`);
    setInputValue("");
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#edf2f8]">
      <h1 className="text-3xl font-bold mb-4">Order Your Favorite Food</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your order"
          value={inputValue}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 mb-2"
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
      <p className="text-lg mt-4 text-black">{orderText}</p>
    </div>
  );
}

export default App;
