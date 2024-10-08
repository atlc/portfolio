import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

const Photo: React.FC = () => {
    const { isDark } = useDarkMode();
    const fill = isDark ? "#38bdf8" : "#0c4a6e";

    return (
        <svg viewBox="0 0 20 20" fill={fill} height={"50px"} width={"50px"}>
            <path d="M0 4c0-1.1.9-2 2-2h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm11 9l-3-3-6 6h16l-5-5-2 2zm4-4a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
    );
};

export default Photo;
