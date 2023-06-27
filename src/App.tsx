import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { routes } from "./routes";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ path, RouteElement }) =>
          path === "/" ? (
            <Route
              key={`${path}_${RouteElement}`}
              index
              element={<RouteElement />}
            />
          ) : (
            <Route
              key={`${path}_${RouteElement}`}
              path={path}
              element={<RouteElement />}
            />
          )
        )}
      </Route>
    </Routes>
  );
};

export default App;
