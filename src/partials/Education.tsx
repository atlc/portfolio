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
                        <div style={{ border: `2px solid`, borderRadius: "12px", padding: "20px", margin: "5%" }}>
                            <h1>A.S. Mathematics </h1>
                            <h3>Jefferson State Community College (2024)</h3>
                            <ul>
                                <li>
                                    <h4>Gained membership to Mu Alpha Theta, the math honors society</h4>
                                </li>
                                <li>
                                    <h4>
                                        Attained a 3.3 GPA in my math courses, including Cal I, II, III, Statistics, Differential Equations, & Linear Algebra
                                    </h4>
                                </li>
                            </ul>

                            <hr />

                            <h1>A.S. CIS - Programming </h1>
                            <h3>Jefferson State Community College (2017)</h3>
                            <ul>
                                <li>
                                    <h4>
                                        The recipient of the 2016 College Scholars award, an award of distinction given to a high-performing student on the
                                        College Scholars' team
                                    </h4>
                                </li>
                            </ul>

                            <hr />

                            <h1>Additional Academic Achievements</h1>
                            <ul>
                                <li>
                                    <h4>
                                        My academic journey has been diverse, with studies in healthcare, programming, and mathematics across institutions such
                                        as Auburn University and Jefferson State. These experiences have culminated in 152 earned credit hours, surpassing the
                                        typical requirements for a Bachelor's degree. My coursework has provided a solid foundation in both technical and
                                        analytical skills, which I have applied throughout my career.
                                    </h4>
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
