import { DARK_MODE_KEY } from "../hooks/useDarkMode";

const savedDM = localStorage.getItem(DARK_MODE_KEY);
const isDark = savedDM ? JSON.parse(savedDM) : true;
const DARK_LOG = `background-color:#1e293b; color: #38bdf8; font-size: 1.2rem; border-radius: 12px; padding: 1%;`;
const LIGHT_LOG = `background-color:#0c4a6e; color: #e0f2fe; font-size: 1.2rem; border-radius: 12px; padding: 1%;`;

const LOG_STYLE = isDark ? DARK_LOG : LIGHT_LOG;

const delay = (ms: number = 2500) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, ms);
    });
};

const delayedLogs = async (...strings: string[]) => {
    for await (const str of strings) {
        console.log("%c" + str, LOG_STYLE);
        await delay(str.length * 42);
    }
};

export const stylizedGreetingLogs = () => {
    return delayedLogs(
        "Poking around in my logs? Let's chat outside of these.",
        "You can email me at andrewlloydcartwright@gmail.com",
        "You can also reach out to me on LinkedIn at https://linkedin.com/in/atlc-/",
        "Thanks for stopping in; I'm looking forward to getting in touch!",
        "Best Regards,",
        "Andrew Cartwright"
    );
};
