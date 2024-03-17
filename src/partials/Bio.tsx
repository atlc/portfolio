import React from "react";
import Section from "../components/Section";
import Row from "../components/Layout/Row";
import Col from "../components/Layout/Col";
import Card from "../components/Card";
import Headshot from "../components/Headshot";

export const Bio: React.FC = () => {
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
                                <p>Location: Birmingham, Alabama</p>
                                <p>
                                    Github: <a href="https://github.com/atlc">atlc</a>
                                </p>
                                <p>
                                    LinkedIn: <a href="https://www.linkedin.com/in/atlc-/">atlc-</a>
                                </p>
                                <p>
                                    Email: <a href="mailto:andrewlloydcartwright@gmail.com">andrewlloydcartwright@gmail.com</a>
                                </p>
                                <p>
                                    With a background as a Full-Stack Software Developer spanning educational, healthcare, and accounting domains, I bring a
                                    versatile skill set encompassing TypeScript, Node.js, React, and MySQL proficiency. My experience extends to C++, Python,
                                    and Ruby on Rails, allowing me to approach projects with a variety of tools and techniques.{" "}
                                </p>
                                <p>
                                    With a background as a Full-Stack Software Developer spanning educational, healthcare, and accounting domains, I bring a
                                    versatile skill set encompassing TypeScript, Node.js, React, and MySQL proficiency. My experience extends to C++, Python,
                                    and Ruby on Rails, allowing me to approach projects with a variety of tools and techniques.{" "}
                                </p>
                            </Col>
                        </Row>
                        <p>
                            Biography Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus placeat aspernatur quae iusto, optio illo asperiores,
                            culpa molestias inventore voluptas accusantium tenetur. Ut nostrum a quod eum numquam hic expedita?
                        </p>
                        <p>
                            Biography Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus placeat aspernatur quae iusto, optio illo asperiores,
                            culpa molestias inventore voluptas accusantium tenetur. Ut nostrum a quod eum numquam hic expedita?
                        </p>
                        <p>
                            Biography Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus placeat aspernatur quae iusto, optio illo asperiores,
                            culpa molestias inventore voluptas accusantium tenetur. Ut nostrum a quod eum numquam hic expedita?
                        </p>
                        <p>
                            Biography Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus placeat aspernatur quae iusto, optio illo asperiores,
                            culpa molestias inventore voluptas accusantium tenetur. Ut nostrum a quod eum numquam hic expedita?
                        </p>
                    </Card>
                </Col>
            </Row>
        </Section>
    );
};
