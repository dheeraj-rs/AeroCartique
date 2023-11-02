import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/user/Homepage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default Router;
