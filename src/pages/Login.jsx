import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { useAppData } from "@/context/AppDataContext";
import { requestOtp, verifyOtp } from "@/data/api";
import { OtpInput } from "@/components/auth/OtpInput";
import { useAuth } from "@/context/AuthContext";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_SECONDS = 30;

export default function Login() {
  const navigate = useNavigate();
  const { branding, platform } = useAppData();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [sending, setSending] = useState(false); // request in flight
  const [verifying, setVerifying] = useState(false); // verify in flight

  const isEmailValid = EMAIL_REGEX.test(email);

  useEffect(() => {
    if (otp.length === 6 && !verifying) handleComplete(otp);
  }, [otp]);

  useEffect(() => {
    if (countdown <= 0) return;
    const t = setInterval(() => setCountdown((c) => c - 1), 1000);
    return () => clearInterval(t);
  }, [countdown]);

  const handleSendCode = async () => {
    if (!isEmailValid || sending) return;
    setSending(true);
    setError("");
    try {
      const res = await requestOtp(email);
      if (res.success) {
        setCodeSent(true);
        setCountdown(RESEND_SECONDS);
      } else {
        setError("Impossible d'envoyer le code. Vérifiez votre email.");
      }
    } catch {
      setError("Erreur réseau. Réessayez.");
    } finally {
      setSending(false);
    }
  };

  const handleResend = () => {
    if (countdown > 0) return;
    setOtp("");
    handleSendCode();
  };

  const handleComplete = async (value) => {
    setVerifying(true);
    setError("");
    try {
      const res = await verifyOtp(email, value);
      if (res.success) {
        login(res.token);
        navigate("/dashboard");
      } else {
        setError("Code incorrect. Réessayez.");
        setOtp("");
      }
    } catch {
      setError("Erreur réseau. Réessayez.");
      setOtp("");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-12">
        <div className="mx-auto w-full max-w-sm">
          {branding?.logoUrl && (
            <img
              src={branding.logoUrl}
              alt={branding.name}
              className="mb-10 h-10 w-auto rounded-sm"
            />
          )}

          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Espace employé
          </p>
          <h1 className="mt-1 text-3xl font-bold text-foreground">
            Heureux de vous revoir <span className="text-primary">!</span>
          </h1>
          <p className="text-xs font-medium tracking-wide text-muted-foreground">
            Veuillez vous connecter à votre compte.
          </p>

          <div className="mt-8">
            <label className="text-sm font-medium text-foreground">Email</label>
            <div className="mt-2 flex gap-2">
              <div className="flex flex-1 items-center gap-2 rounded-sm border border-border bg-muted/50 px-3">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="prenom.nom@client.com"
                  className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <button
                type="button"
                onClick={handleSendCode}
                disabled={!isEmailValid || sending}
                className="shrink-0 rounded-sm bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {sending ? "Envoi…" : "Envoyer le code"}
              </button>
            </div>
          </div>

          {codeSent && (
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                Un code à 6 chiffres a été envoyé à{" "}
                <span className="font-medium text-foreground">{email}</span>.
              </p>

              <div className="mt-4">
                <OtpInput value={otp} onChange={setOtp} disabled={verifying} />
              </div>

              {error && <p className="mt-2 text-sm text-danger">{error}</p>}

              <button
                type="button"
                onClick={handleResend}
                disabled={countdown > 0}
                className="mt-4 text-sm text-primary transition hover:underline disabled:text-muted-foreground disabled:no-underline disabled:cursor-not-allowed"
              >
                {countdown > 0
                  ? `Renvoyer le code (${countdown}s)`
                  : "Renvoyer le code"}
              </button>
            </div>
          )}

          {!codeSent && error && (
            <p className="mt-4 text-sm text-danger">{error}</p>
          )}
        </div>

        <footer className="mx-auto w-full max-w-sm pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {platform?.year} {branding?.name} - Developed by <a
              href="https://www.linkedin.com/company/mercure-one"
              target="_blank"
              rel="noreferrer"
              className="transition duration-300 hover:text-primary"
            >
              {platform?.name}
            </a>
          </p>
        </footer>
      </div>

      <div className="relative hidden w-2/4 overflow-hidden lg:block">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="brandPat"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect width="80" height="80" fill="var(--primary)" />
              <path d="M0,0 L80,0 L0,80 Z" fill="var(--secondary-brand)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#brandPat)" />
        </svg>
      </div>
    </div>
  );
}
