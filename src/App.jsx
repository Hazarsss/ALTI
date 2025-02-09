import { BrowserRouter as Router } from "react-router-dom";
import MenuRoutes from "./components/MenuRoutes";

function App() {
  return (
    <>
      <Router basename="/ALTI/">
        <MenuRoutes />
      </Router>
    </>
  );
}

export default App;
