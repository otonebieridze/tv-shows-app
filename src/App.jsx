import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ShowSummary from "./pages/showSummary/ShowSummary";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ShowSummary />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
