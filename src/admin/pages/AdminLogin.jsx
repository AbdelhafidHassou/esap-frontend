import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/admin/context/AdminAuthContext";
import { adminLoginPassword, adminLoginTotp } from "@/admin/data/AdminApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function AdminLogin() {
    const navigate = useNavigate();
    const { login } = useAdminAuth();

    const [step, setStep] = useState("password");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    async function handlePassword() {
        setError(null);
        setLoading(true);
        const res = await adminLoginPassword(email, password);
        setLoading(false);
        if (res.success && res.totpRequired) {
            setStep("totp");
        } else {
            setError("Email ou mot de passe incorrect.");
        }
    }

    async function handleTotp() {
        setError(null);
        setLoading(true);
        const res = await adminLoginTotp(code);
        setLoading(false);
        if (res.success) {
            login(res.token);
            navigate("/admin/dashboard", { replace: true });
        } else {
            setError("Code incorrect.");
        }
    }

    return (
        <div
            className="relative flex min-h-screen items-center justify-start bg-cover bg-center p-6 lg:p-16"
            style={{ backgroundImage: "url('/background/loginadminbg.png')" }}
        >
            <button
                onClick={toggleTheme}
                className="absolute right-6 top-6 rounded-full border border-white/15 bg-white/5 p-2.5 text-neutral-300 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
            >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className="w-full max-w-lg rounded-md border border-border bg-card/90 p-8 shadow-xl backdrop-blur-sm">
                <div className="mb-8">
                    <img src="/logos/mercure_logo.png" alt="Mercure" className="size-11 dark:hidden" />
                    <img src="/logos/merlogo.png" alt="Mercure" className="size-11 hidden dark:block" />
                    <h1 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                        Administration Mercure
                    </h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        {step === "password"
                            ? "Connectez-vous pour accéder à la console."
                            : "Saisissez le code de votre application d'authentification."}
                    </p>
                </div>

                {error && (
                    <div className="mb-4 text-sm text-danger">
                        {error}
                    </div>
                )}

                {step === "password" ? (
                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-foreground">Email</label>
                            <Input
                                className="h-12 rounded-md bg-background/50 border-border text-foreground focus-visible:border-ring"
                                type="email"
                                placeholder="admin@mercure.one"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-foreground">Password</label>
                            <Input
                                className="h-12 rounded-md bg-background/50 border-border text-foreground focus-visible:border-ring"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button
                            className="w-full h-12 rounded-md bg-foreground text-background hover:bg-foreground/90"
                            onClick={handlePassword}
                            disabled={loading}
                        >
                            {loading ? "..." : "Continuer"}
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-foreground">Code d'authentification</label>
                            <Input
                                className="h-12 rounded-md bg-background/50 border-border text-foreground focus-visible:border-ring"
                                type="text"
                                inputMode="numeric"
                                maxLength={8}
                                placeholder="8 chiffres"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </div>
                        <Button
                            className="w-full h-12 rounded-md bg-foreground text-background hover:bg-foreground/90"
                            onClick={handleTotp}
                            disabled={loading}
                        >
                            {loading ? "..." : "Se connecter"}
                        </Button>
                        <button
                            type="button"
                            onClick={() => { setStep("password"); setCode(""); setError(null); }}
                            className="w-full text-center text-sm text-muted-foreground hover:text-foreground"
                        >
                            Retour
                        </button>
                    </div>
                )}

                <p className="mt-8 text-center text-xs text-muted-foreground">
                    Accès réservé aux administrateurs Mercure.
                </p>
            </div>
        </div>
    );
}