import "./App.css";
import { Route, Routes } from "react-router-dom";
import TvList from "./pages/TvList";
import TvDetails from "./pages/TvDetails";
import Header from "./components/Header/Header";
function App() {
  return (
    <Routes>
      <Route path="/" element={<TvList />} />
      <Route path="/detail/:id" element={<TvDetails />} />
      <Route path="*" element={<h1>Wrong Page</h1>}></Route>
    </Routes>
  );
}

export default App;
