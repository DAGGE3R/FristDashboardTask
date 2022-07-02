import { Navbar } from "./components/navbar/navbar.components";
import { LowerNavbar } from "./components/lower-navbar/lower-navbar.components";
import { Sidebar } from "./components/sidebar/sidebar.components";
function App() {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <LowerNavbar />
    </div>
  );
}

export default App;
