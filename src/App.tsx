import { Checkout } from "./pages/checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/checkouturl" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
