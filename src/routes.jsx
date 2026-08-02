import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import AppLayout from "@/components/layout/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Account from "@/pages/Account";
import Support from "@/pages/Support";
import Certificats from "@/pages/Certificats";
import Formations from "@/pages/Formations";
import FormationActive from "@/pages/FormationActive";
import TestFinal from "@/pages/TestFinal";
import { ProtectedRoute, PublicRoute } from "./components/auth/RouteGuards";

export const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/login" replace /> },
    {
        element: <PublicRoute />,
        children: [
            { path: "/login", element: <Login /> },
        ]
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <AppLayout />,
                children: [
                    { path: "/dashboard", element: <Dashboard /> },
                    { path: "/account", element: <Account /> },
                    { path: "/support", element: <Support /> },
                    { path: "/certificats", element: <Certificats /> },
                    { path: "/formations", element: <Formations /> },
                    { path: "/formation/:id", element: <FormationActive /> },
                ],
            },
            { path: "/test/:id", element: <TestFinal /> },
        ]
    },
])