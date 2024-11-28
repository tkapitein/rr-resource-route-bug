import { createCookieSessionStorage } from "react-router";
import { createThemeSessionResolver } from "./react-router-theme";

// You can default to 'development' if process.env.NODE_ENV is not set
const isProduction = process.env.NODE_ENV === "production";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["super-secret"],
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
