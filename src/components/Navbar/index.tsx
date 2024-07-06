import React, { useEffect, useState } from "react";
import Row from "../Layout/Row";
import Col from "../Layout/Col";
import Navlink from "./Navlink";
import Sun from "./Sun";
import Moon from "./Moon";
import Hamburger from "./Hamburger";
import useDarkMode from "../../hooks/useDarkMode";

const Nav: React.FC = () => {
    const { isDark, toggleDarkMode } = useDarkMode()!;
    const [height, setHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const [style, setStyle] = useState<React.CSSProperties>({
        color: "#38bdf8",
        backgroundColor: document.body.style.backgroundColor,
        borderRadius: "12px",
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
        // document.body.style.color = isDark ? "#cbd5e1" : "#1e293b";
        document.body.style.color = isDark ? "#cbd5e1" : "#0c4a6e";

        const position = height ? "sticky" : "relative";
        const opacity = height ? 0.85 : 1;

        const color = isDark ? "#38bdf8" : "#0c4a6e";
        const bg = isDark ? "#1e293b" : "#e0f2fe";

        const hexInt = parseInt(bg.replace("#", ""), 16);
        let r = (hexInt >> 16) & 255;
        let g = (hexInt >> 8) & 255;
        let b = hexInt & 255;

        console.log({ r, g, b });

        [r, g, b] = [r, g, b].map((num) => {
            const product = num * 0.75;

            return product > 255 ? 255 : product.toFixed(0);
        });

        const adjusted = `rgb(${r}, ${g}, ${b})`;
        const backgroundColor = height ? adjusted : bg;

        console.log({ isDark, bg, color, adjusted });

        setStyle({ ...style, position, borderBottom: `1px solid ${color}`, opacity, color, backgroundColor });
    }, [height, isDark]);

    const handleCollapseOnMobile = () => {
        if (isMobile) {
            setCollapsed(true);
        }
    };

    return (
        <nav style={style}>
            <Row>
                {!collapsed && (
                    <>
                        <Col>
                            <Navlink onClick={handleCollapseOnMobile} link="#bio" text="about me" />
                        </Col>
                        <Col>
                            <Navlink onClick={handleCollapseOnMobile} link="#experience" text="experience" />
                        </Col>
                        <Col>
                            <Navlink onClick={handleCollapseOnMobile} link="#education" text="education" />
                        </Col>
                        <Col>
                            <Navlink onClick={handleCollapseOnMobile} link="#projects" text="projects" />
                        </Col>
                        <Col>
                            <div onClick={toggleDarkMode}>{isDark ? <Sun /> : <Moon />}</div>
                        </Col>
                    </>
                )}
                {isMobile && (
                    <Col>
                        <div onClick={() => setCollapsed(!collapsed)}>
                            <Hamburger isDark={isDark} />
                        </div>
                    </Col>
                )}
            </Row>
        </nav>
    );
};

export default Nav;
