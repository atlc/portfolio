import React, { useEffect, useState } from "react";
import Row from "../Layout/Row";
import Col from "../Layout/Col";
import Navlink from "./Navlink";
import Sun from "./Sun";
import Moon from "./Moon";
import Hamburger from "./Hamburger";

const Nav: React.FC = () => {
    const [height, setHeight] = useState(0);
    const [isDark, setIsDark] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const [style, setStyle] = useState<React.CSSProperties>({
        backgroundColor: document.body.style.backgroundColor,
        opacity: 1,
        top: 0,
        marginTop: "20px",
        padding: "20px",
        position: "relative",
        fontSize: "1.5rem",
        fontWeight: "light",
        zIndex: 2,
    });

    const handleScroll = () => {
        const position = window.scrollY;
        setHeight(position);
    };

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = isDark ? "#1e293b" : "#cbd5e1";
        document.body.style.color = isDark ? "#38bdf8" : "#0c4a6e";

        const position = height ? "sticky" : "relative";
        const opacity = height ? 0.66 : 1;

        const derived = document.body.style.backgroundColor;

        const rgb = derived.replace("rgb(", "").replace(")", "").split(", ");
        const [r, g, b] = rgb.map((num) => {
            const parsed = parseInt(num);
            const product = 0.75 * parsed;

            return product > 255 ? 255 : product.toFixed(0);
        });

        const adjusted = `rgb(${r}, ${g}, ${b})`;
        const backgroundColor = height ? adjusted : derived;

        setStyle({ ...style, position, opacity, backgroundColor });
    }, [height, isDark]);

    return (
        <nav style={style}>
            <Row>
                {!collapsed && (
                    <>
                        <Col>
                            <Navlink link="#bio" text="bio" />
                        </Col>
                        <Col>
                            <Navlink link="#experience" text="experience" />
                        </Col>
                        <Col>
                            <Navlink link="#education" text="education" />
                        </Col>
                        <Col>
                            <Navlink link="#projects" text="projects" />
                        </Col>
                        <Col>
                            <div style={{ marginTop: "10px" }} onClick={() => setIsDark(!isDark)}>
                                {isDark ? <Sun /> : <Moon />}
                            </div>
                        </Col>
                    </>
                )}
                {isMobile && (
                    <div style={{ opacity: 1 }} onClick={() => setCollapsed(!collapsed)}>
                        <Col>
                            <Hamburger />
                        </Col>
                    </div>
                )}
            </Row>
        </nav>
    );
};

export default Nav;
