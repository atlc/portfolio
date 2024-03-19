import React from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { SIZE } from ".";

const NextJS: React.FC = () => {
    const { isDark } = useDarkMode();
    const fill = isDark ? "#38bdf8" : "#0c4a6e";

    return (
        <svg fill={fill} viewBox="0 0 15 15" height={SIZE} width={SIZE}>
            <path
                fill={fill}
                fillRule="evenodd"
                d="M0 7.5a7.5 7.5 0 1111.697 6.216L4.907 4.21A.5.5 0 004 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 010 7.5zM10 10V4h1v6h-1z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default NextJS;
