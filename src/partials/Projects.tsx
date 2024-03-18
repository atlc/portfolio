import React from "react";
import Section from "../components/Layout/Section";
import Row from "../components/Layout/Row";
import Col from "../components/Layout/Col";
import Card from "../components/General/Card";

const Projects: React.FC = () => {
    return (
        <Section noBottomBorder parentId="projects">
            <h1>Here are some fun projects I've worked on lately</h1>
            <Row>
                <Col tenths={3}>
                    <Card>
                        <h1>PetMed</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint
                            architecto quisquam nihil velit voluptatum illum! Illum perspiciatis quam vitae aspernatur!
                        </p>
                    </Card>
                </Col>
                <Col tenths={3}>
                    <Card>
                        <h1>Connections</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint
                            architecto quisquam nihil velit voluptatum illum! Illum perspiciatis quam vitae aspernatur!
                        </p>
                    </Card>
                </Col>
                <Col tenths={3}>
                    <Card>
                        <h1>Video Stats</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint
                            architecto quisquam nihil velit voluptatum illum! Illum perspiciatis quam vitae aspernatur!
                        </p>
                    </Card>
                </Col>
                <Col tenths={3}>
                    <Card>
                        <h1>Worlds Worst AIM</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint
                            architecto quisquam nihil velit voluptatum illum! Illum perspiciatis quam vitae aspernatur!
                        </p>
                    </Card>
                </Col>
                <Col tenths={3}>
                    <Card>
                        <h1>Anti-Scammer Selenium</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint
                            architecto quisquam nihil velit voluptatum illum! Illum perspiciatis quam vitae aspernatur!
                        </p>
                    </Card>
                </Col>
                <Col tenths={3}>
                    <Card>
                        <h1>Arduino</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint
                            architecto quisquam nihil velit voluptatum illum! Illum perspiciatis quam vitae aspernatur!
                        </p>
                    </Card>
                </Col>
            </Row>
        </Section>
    );
};

export default Projects;
