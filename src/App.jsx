import { BrowserRouter as Router } from "react-router-dom";
import MenuRoutes from "./components/MenuRoutes";

function App() {
  return (
    <>
      <Router basename="/ALTI/">
        <MenuRoutes />
      </Router>
      {/* <p>TEST AJA</p> */}
    </>
  );
}

export default App;
