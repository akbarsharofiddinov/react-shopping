import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "./components";
import { routes } from "./routes";

const App: React.FC = () => {

  const navigate = useNavigate()

  React.useEffect(() => {
    navigate("/")
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ RouteElement, path }) => (
          <Route
            key={`${path}_${RouteElement}`}
            path={path}
            element={<RouteElement />}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
