import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

const LinkURL: React.FC = () => {
    const { isDark } = useDarkMode();
    const fill = isDark ? "#38bdf8" : "#0c4a6e";

    return (
        <svg fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" height={"50px"} width={"50px"}>
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        </svg>
    );
};

export default LinkURL;
