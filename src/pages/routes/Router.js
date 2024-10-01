import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Dashboard from '../Dashboard';
import AuthPage from '../AuthPage';

const isAuthenticated = () => {
  const token = Cookies.get('authTkn');  
  return !!token; 
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>

        <Route
          path="/login"
          element={!isAuthenticated() ? <AuthPage /> : <Navigate to="/dashboard" replace />}
        />

        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
