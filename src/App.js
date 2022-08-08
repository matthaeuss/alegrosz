import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Product list</h1>}/>
          <Route path="/products/:id" element={<h1>Product detail</h1>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
