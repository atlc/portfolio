import React from "react";
import Section from "../components/Layout/Section";
import Row from "../components/Layout/Row";
import Card from "../components/General/Card";
import Col from "../components/Layout/Col";

const Education: React.FC = () => {
    return (
        <Section parentId="education">
            <Row>
                <Col tenths={10}>
                    <Card>
                        <div style={{ padding: "20px" }}>
                            <h2>B.S. Software Engineering (Present)</h2>
                            <h4>Western Governors University</h4>

                            <hr />

                            <h2>A.S. Mathematics (2024)</h2>
                            <h4>Jefferson State Community College</h4>
                            <ul>
                                <li>Gained membership to Mu Alpha Theta, the math honors society</li>
                                <li>Attained a 3.3 GPA in my math courses, including Cal I, II, III, Statistics, Differential Equations, & Linear Algebra</li>
                            </ul>

                            <hr />

                            <h2>A.S. Computer Information Systems, Programming (2017)</h2>
                            <h4>Jefferson State Community College</h4>
                            <ul>
                                <li>
                                    The recipient of the 2016 College Scholars award, an award of distinction given to a high-performing student on the College
                                    Scholars' team
                                </li>
                            </ul>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Section>
    );
};

export default Education;
