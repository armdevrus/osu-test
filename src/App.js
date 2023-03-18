import { useState } from "react";
import { useRoutes } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import Products from "./pages/Products/Products";
import Table from "./pages/Table/Table";
import RequireAuth from "./hoc/RequireAuth";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [login, setLogin] = useState("admin");
  const [password, setPassword] = useState("1234");
  console.log(isAuth);

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <div className="App">
          <AuthPage login={login} password={password} setIsAuth={setIsAuth} />
        </div>
      ),
    },
    {
      path: "/products",
      element: (
        <RequireAuth isAuth={isAuth}>
          <Products />
        </RequireAuth>
      ),
    },
    {
      path: "/table",
      element: (
        <RequireAuth isAuth={isAuth}>
          <Table />
        </RequireAuth>
      ),
    },
  ]);
  return routes;
}

export default App;
