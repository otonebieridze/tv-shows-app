import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ShowSummary from "./pages/showSummary/ShowSummary";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ShowSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
