import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import SearchState from "./context/SearchState";
import Home from "./pages/Home";
import Search from "./pages/Search";


function App() {
  return (
    <>
      <SearchState>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/search" element={<Search/>} ></Route>
        </Routes>
      </Router>
      </SearchState>
    </>
  );
}

export default App;
