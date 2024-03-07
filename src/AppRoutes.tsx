import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Homepage from "./pages/dashboard/Homepage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
