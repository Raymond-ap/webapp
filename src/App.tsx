import {Checkout} from "./pages/checkout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/home";

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkouturl" element={<Checkout />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
