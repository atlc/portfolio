import React from "react";
import Section from "../components/Section";
import Row from "../components/Layout/Row";
import Card from "../components/Card";
import Col from "../components/Layout/Col";

export const Education: React.FC = () => {
    return (
        <Section parentId="education">
            <Row>
                <Col tenths={10}>
                    <Card>
                        {/* <h2>B.S. Software Engineering (Present)</h2>
                        <h4>Western Governors University</h4>

                        <hr /> */}

                        <h2>A.S. Mathematics (2024)</h2>
                        <h4>Jefferson State Community College</h4>
                        <ul>
                            <li>Gained membership to Mu Alpha Theta, the math honors society</li>
                            <li>
                                Attained a 3.3 GPA in my math courses, having completed Cal I, II, III, Statistics, Differential Equations, & Linear Algebra
                            </li>
                        </ul>

                        <hr />

                        <h2>A.S. Computer Information Systems, Programming (2017)</h2>
                        <h4>Jefferson State Community College</h4>
                        <ul>
                            <li>The recipient of the 2016 College Scholars award, an award of distinction given to </li>
                        </ul>
                    </Card>
                </Col>
            </Row>
        </Section>
    );
};
