import React, { useEffect, useState } from "react";
import Row from "../Layout/Row";
import Col from "../Layout/Col";

const Nav: React.FC = () => {
    const [isDark, setIsDark] = useState(true);
    const [height, setHeight] = useState(0);
    const [style, setStyle] = useState<React.CSSProperties>({
        backgroundColor: document.body.style.backgroundColor,
        opacity: 1,
        top: 0,
        marginTop: "75px",
        paddingTop: "10px",
        position: "relative",
        padding: "30px",
        fontSize: "1.5rem",
        fontFamily: "'League Spartan', 'sans-serif'",
        fontOpticalSizing: "auto",
        fontStyle: "normal",
    });

    const handleScroll = () => {
        const position = window.scrollY;
        setHeight(position);
    };

    useEffect(() => {
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
                <Col>bio</Col>
                <Col>experience</Col>
                <Col>projects</Col>
                <Col>
                    <div onClick={() => setIsDark(!isDark)}>{isDark ? "sun" : "moon"}</div>
                </Col>
            </Row>
        </nav>
    );
};

export default Nav;
