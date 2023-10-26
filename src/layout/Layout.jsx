import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <main className="bg-mainBackground">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
