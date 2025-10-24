import Navigation from "../components/Navigation.jsx";
import { Outlet } from "react-router";

function Root() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
