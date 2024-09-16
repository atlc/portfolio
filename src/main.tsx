import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DarkModeProvider } from "./hooks/useDarkMode.tsx";
import "./styles/global.css";
import { stylizedGreetingLogs } from "./services/stylizedLogs.ts";
import { checkForRedirects } from "./services/redirects.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <DarkModeProvider>
            <App />
        </DarkModeProvider>
    </React.StrictMode>
);

stylizedGreetingLogs();
checkForRedirects();
