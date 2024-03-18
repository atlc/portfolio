import React from "react";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import Email from "./Email";
import Link from "./Link";
import Row from "../Layout/Row";

const Contact: React.FC = () => {
    return (
        <>
            <h3 style={{ textAlign: "center" }}>Let's get in touch!</h3>
            <Row>
                <Link href="mailto:andrewlloydcartwright@gmail.com">
                    <Email />
                </Link>

                <Link href="https://www.linkedin.com/in/atlc-/">
                    <LinkedIn />
                </Link>

                <Link href="https://github.com/atlc">
                    <Github />
                </Link>
            </Row>
        </>
    );
};

export default Contact;
