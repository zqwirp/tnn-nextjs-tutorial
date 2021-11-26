import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";

export default function Layout({ children }) {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
