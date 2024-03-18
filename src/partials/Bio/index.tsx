import React, { useState } from "react";
import Section from "../../components/Layout/Section";
import Row from "../../components/Layout/Row";
import Col from "../../components/Layout/Col";
import Card from "../../components/General/Card";
import Headshot from "../../components/General/Headshot";
import Contact from "../../components/Contact";
import Full from "./Full";
import Shortened from "./Shortened";

const Bio: React.FC = () => {
    const [tldr, showTLDR] = useState(true);
    return (
        <Section parentId="bio">
            <Row>
                <Col>
                    <Card>
                        <Row reverse>
                            <Col tenths={3}>
                                <Headshot />
                            </Col>
                            <Col tenths={7}>
                                <h1>Andrew Cartwright</h1>
                                <h2>Full-Stack Software Engineer</h2>
                                <h1 onClick={() => showTLDR(!tldr)} style={{ color: "red" }}>
                                    DEBUG TL;DR
                                </h1>

                                {tldr ? <Shortened /> : <Full />}
                            </Col>
                        </Row>
                        <Contact />
                    </Card>
                </Col>
            </Row>
        </Section>
    );
};

export default Bio;
