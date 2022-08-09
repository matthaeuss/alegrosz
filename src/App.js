import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/products/:id" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
