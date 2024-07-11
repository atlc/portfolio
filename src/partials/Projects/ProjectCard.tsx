import React, { useState } from "react";
import Col from "../../components/Layout/Col";
import Card from "../../components/General/Card";
import { Project } from "../../types";
import Github from "../../components/Contact/Github";
import Icons from "../../components/Icons";
import Row from "../../components/Layout/Row";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import MinHeightParagraph from "../../components/General/MinHeightParagraph";

const ProjectCard: React.FC<Project> = ({ name, description, repo_url, badges, demo_url, images, uses }) => {
    const [active, setActive] = useState(false);

    const border = { border: "2px solid", radius: "12px" };

    return (
        <Col tenths={3}>
            <Card hasBorder={border}>
                {/* <Card> */}
                <h1 style={{ textAlign: "center" }}>{name}</h1>
                <MinHeightParagraph text={description} />
                {/* 
                <Row>
                    {youtube_links.map(({ url, title }) => (
                        <span
                            style={{
                                borderRadius: "12px",
                                padding: "6px",
                                color: isDark ? "#000000" : "#ffffff",
                                backgroundColor: isDark ? "#38bdf8" : "#0c4a6e",
                            }}
                        >
                            <Col key={url}>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href={url}
                                >
                                    {title}
                                </a>
                            </Col>
                        </span>
                    ))}
                </Row> */}

                <div style={{ marginTop: "10px" }}>
                    <Row>
                        {repo_url && (
                            <a
                                rel="noreferrer"
                                target="_blank"
                                style={{ margin: "0px 5px" }}
                                href={repo_url}
                            >
                                <Github />
                            </a>
                        )}
                        {demo_url && (
                            <a
                                rel="noreferrer"
                                target="_blank"
                                style={{ margin: "0px 5px" }}
                                href={demo_url}
                            >
                                <Icons.LinkURL />
                            </a>
                        )}
                        {images.length ? (
                            <div
                                onClick={() => setActive(true)}
                                style={{ margin: "0px 5px" }}
                            >
                                <Icons.Photo />

                                <Lightbox
                                    open={active}
                                    close={() => setActive(false)}
                                    slides={images.map((img) => ({
                                        src: img,
                                    }))}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                    </Row>
                </div>

                <hr />
                <Row>
                    {badges.map((b, index) => (
                        <span
                            style={{ margin: "0px 5px" }}
                            key={`${name}-badge-${index}`}
                        >
                            {b}
                        </span>
                    ))}
                </Row>
                <Row>{uses.join(", ")}</Row>
            </Card>
        </Col>
    );
};

export default ProjectCard;
