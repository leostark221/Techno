import React, { useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

const useAuth = () => {
  const userToken = localStorage.getItem("userToken");
  const adminToken = localStorage.getItem("adminToken");

  return {
    isAuthenticated: !!userToken || !!adminToken,
    isAdmin: !!adminToken,
  };
};

export const ProtectedRoute = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    } else {
      if (isAdmin) {
        navigate("/admin", { replace: true });
      }
    }
  }, [isAuthenticated, isAdmin, navigate]);

  return isAuthenticated ? <Outlet /> : null;
};

export const AdminProtectedRoute = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      isAuthenticated
        ? navigate("/", { replace: true })
        : navigate("/login", { replace: true });
    }
  }, [isAuthenticated, isAdmin, navigate]);

  return isAdmin ? <Outlet /> : null;
};

export const RestrictedRoute = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect admins to the admin dashboard
      if (isAdmin) {
        navigate("/admin", { replace: true });
      } else {
        // Navigate regular users to the home page
        navigate("/", { replace: true });
      }
    }
  }, [isAuthenticated, isAdmin, navigate, location.pathname]);

  return !isAuthenticated ? <Outlet /> : null;
};
