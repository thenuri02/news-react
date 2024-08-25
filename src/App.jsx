import { useState, useRef } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import './App.css'; // Assuming your CSS file is named App.css

const App = () => {
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState(""); 

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase()); // Update search query state
  };

  return (
    // <input type = "text"> </input>
    <div className="background-blur">
      <div className="content-wrapper">
        <Navbar setCategory={setCategory} handleSearch={handleSearch} /> 
        <NewsBoard category={category} searchQuery={searchQuery} /> 
      </div>
    </div>
  );
}

export default App;
