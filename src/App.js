import { useState } from "react";
import AuthPage from "./pages/Auth/Auth";
import Products from "./pages/Products/Products";
import "./App.css";
import Table from "./pages/Table/Table";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      {/* <AuthPage /> */}
      {/* <Products /> */}
      <Table />
    </div>
  );
}

export default App;
