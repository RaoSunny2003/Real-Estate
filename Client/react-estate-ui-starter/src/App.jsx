import { Navbar } from "./Components/Navbar/Navbar";
import "./Layout.scss";
import HomePage from "./Routes/Home/Home";

function App() {
  return (
    <>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
