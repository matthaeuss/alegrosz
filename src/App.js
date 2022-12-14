import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import RequireAuth from "./components/Auth/RequireAuth";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/HttpCodes/NotFound";
import Unauthorized from "./components/HttpCodes/Unauthorized";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<RequireAuth />}>
            <Route path="/" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
