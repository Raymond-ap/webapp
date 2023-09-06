import Checkout from "./pages/checkout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/checkouturl" element={<Checkout />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
