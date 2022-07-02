import { Navbar } from "./components/navbar/navbar.components";
import { LowerNavbar } from "./components/lower-navbar/lower-navbar.components";
import { Sidebar } from "./components/sidebar/sidebar.components";
import "./app.styles.scss";
function App() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <Sidebar />
        <div className="container">
          <LowerNavbar />
        </div>
      </div>
    </div>
  );
}

export default App;
