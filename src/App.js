import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./router";
import Navbar from "./Layouts/Navbar";

function App() {
  const getRoutes = (allRoutes) => 
    allRoutes.map((route) => {
      return <Route exact path={route.route} element={route.component} key={route.key} />
    });
  return (
    <div className="App">
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
