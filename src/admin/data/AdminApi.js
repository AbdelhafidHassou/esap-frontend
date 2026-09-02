const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

const MOCK_EMAIL = "admin@mercure.one";
const MOCK_PASSWORD = "admin";
const MOCK_TOTP = "12345678";

export async function adminLoginPassword(email, password) {
    await delay();
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
        return { success: true, totpRequired: true };
    }
    return { success: false, error: "invalid_credentials" };
}

export async function adminLoginTotp(code) {
    await delay();
    if (code === MOCK_TOTP) {
        return { success: true, token: "mock-admin-token" };
    }
    return { success: false, error: "invalid_code" };
}