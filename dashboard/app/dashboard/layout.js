import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import '../Styles/Menu.css'
import Footer from '../components/Footer'

export default function layout({ children }) {
  return (
    <div className="main-container">
      <div className="menu">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
