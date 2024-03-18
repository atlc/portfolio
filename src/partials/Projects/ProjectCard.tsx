import React from "react";
import Col from "../../components/Layout/Col";
import Card from "../../components/General/Card";
import { Project } from "../../types";
import Github from "../../components/Contact/Github";
import Icons from "../../components/Icons";
import Row from "../../components/Layout/Row";

const ProjectCard: React.FC<Project> = ({ name, description, repo_url, badges, demo_url, images }) => {
    return (
        <Col tenths={3}>
            <Card>
                <h1 style={{ textAlign: "center" }}>{name}</h1>
                <p>{description}</p>

                <Row>
                    <a style={{ margin: "0px 10px" }} href={repo_url}>
                        <Github />
                    </a>
                    {demo_url && (
                        <a style={{ margin: "0px 10px" }} href={demo_url}>
                            <Icons.LinkURL />
                        </a>
                    )}
                    {images.length ? (
                        <a style={{ margin: "0px 10px" }} href={demo_url}>
                            <Icons.Photo />
                        </a>
                    ) : (
                        <></>
                    )}
                </Row>

                <hr />
                <Row>
                    {badges.map((b, index) => (
                        <span style={{ margin: "0px 10px" }} key={`${name}-badge-${index}`}>
                            {b}
                        </span>
                    ))}
                </Row>
            </Card>
        </Col>
    );
};

export default ProjectCard;
