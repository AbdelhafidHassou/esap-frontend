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
import AdminLayout from "@/admin/components/layout/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import {
    UserPlus, Palette, ScrollText, Megaphone, Database, Activity,
    UserCog, Settings,
} from "lucide-react";
import { AdminProtectedRoute, AdminPublicRoute } from "./admin/components/AdminRouteGuards";
import AdminLogin from "./admin/pages/AdminLogin";

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
                ],
            },
            { path: "/formation/:id", element: <FormationActive /> },
            { path: "/test/:id", element: <TestFinal /> },
        ]
    },
    {
        element: <AdminPublicRoute />,
        children: [
            { path: "/admin/login", element: <AdminLogin /> },
        ],
    },
    {
        element: <AdminProtectedRoute />,
        children: [
            {
                element: <AdminLayout />,
                children: [
                    { path: "/admin/dashboard", element: <AdminDashboard /> },
                    { path: "/admin/account", element: <PlaceholderPage icon={UserCog} title="Compte" description="Gestion du compte administrateur. Bientôt disponible." /> },
                    { path: "/admin/settings", element: <PlaceholderPage icon={Settings} title="Paramètres" description="Configuration de la plateforme. Bientôt disponible." /> },
                    { path: "/admin/employees", element: <PlaceholderPage icon={UserPlus} title="Employés" description="Import et gestion des employés par client. Bientôt disponible." /> },
                    { path: "/admin/customization", element: <PlaceholderPage icon={Palette} title="Personnalisation du contenu" description="Édition du contenu cloné par client. Bientôt disponible." /> },
                    { path: "/admin/audit", element: <PlaceholderPage icon={ScrollText} title="Journal d'audit" description="Traçabilité des actions sensibles. Bientôt disponible." /> },
                    { path: "/admin/communication", element: <PlaceholderPage icon={Megaphone} title="Communication" description="Campagnes de relance et notifications. Bientôt disponible." /> },
                    { path: "/admin/question-bank", element: <PlaceholderPage icon={Database} title="Banque de questions système" description="Banque partagée entre clients. Bientôt disponible." /> },
                    { path: "/admin/health", element: <PlaceholderPage icon={Activity} title="Santé plateforme" description="Supervision système multi-clients. Bientôt disponible." /> },
                ],
            },
        ],
    },
])