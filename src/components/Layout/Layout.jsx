import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}

export default Layout;
