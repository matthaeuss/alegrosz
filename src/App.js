import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./components/Products/Products";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/products/:id" element={<h1>Product detail</h1>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
