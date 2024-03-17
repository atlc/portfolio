import React from "react";
import { HamburgerProps } from "../../types";

const Hamburger: React.FC<HamburgerProps> = ({ isDark }) => {
    const bg = isDark ? "#38bdf8" : "#0c4a6e";
    const color = !isDark ? "#38bdf8" : "#0c4a6e";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width={30}
            height={30}
            viewBox="0 0 256 256"
            xmlSpace="preserve"
        >
            <defs></defs>
            <g
                style={{
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "none",
                    fillRule: "nonzero",
                    opacity: 1,
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
                <circle
                    cx={45}
                    cy={45}
                    r={45}
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: bg,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="  matrix(1 0 0 1 0 0) "
                />
                <path
                    d="M 67 32.966 H 40.492 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 H 67 c 1.104 0 2 0.896 2 2 S 68.104 32.966 67 32.966 z"
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: color,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                />
                <path
                    d="M 67 47 H 40.492 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 H 67 c 1.104 0 2 0.896 2 2 S 68.104 47 67 47 z"
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: color,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                />
                <path
                    d="M 67 61.034 H 40.492 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 H 67 c 1.104 0 2 0.896 2 2 S 68.104 61.034 67 61.034 z"
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: color,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                />
                <path
                    d="M 29.054 32.966 H 23 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 6.054 c 1.104 0 2 0.896 2 2 S 30.158 32.966 29.054 32.966 z"
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: color,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                />
                <path
                    d="M 29.054 47 H 23 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 6.054 c 1.104 0 2 0.896 2 2 S 30.158 47 29.054 47 z"
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: color,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                />
                <path
                    d="M 29.054 61.034 H 23 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 6.054 c 1.104 0 2 0.896 2 2 S 30.158 61.034 29.054 61.034 z"
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: color,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
};

export default Hamburger;
