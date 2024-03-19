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
// import useDarkMode from "../../hooks/useDarkMode";

const ProjectCard: React.FC<Project> = ({ name, description, repo_url, badges, demo_url, images }) => {
    const [active, setActive] = useState(false);
    // const { isDark } = useDarkMode();

    return (
        <Col tenths={3}>
            <Card>
                <h1 style={{ textAlign: "center" }}>{name}</h1>
                <MinHeightParagraph text={description} />

                {/* <Row>
                    {youtube_links.map(({ url, title }) => (
                        <Col key={url}>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                style={{
                                    borderRadius: "12px",
                                    padding: "6px",
                                    color: isDark ? "#000000" : "#ffffff",
                                    backgroundColor: isDark ? "#38bdf8" : "#0c4a6e",
                                }}
                                href={url}
                            >
                                {title}
                            </a>
                        </Col>
                    ))}
                </Row> */}

                <div style={{ marginTop: "10px" }}>
                    <Row>
                        <a rel="noreferrer" target="_blank" style={{ margin: "0px 10px" }} href={repo_url}>
                            <Github />
                        </a>
                        {demo_url && (
                            <a rel="noreferrer" target="_blank" style={{ margin: "0px 10px" }} href={demo_url}>
                                <Icons.LinkURL />
                            </a>
                        )}
                        {images.length ? (
                            <div onClick={() => setActive(true)} style={{ margin: "0px 10px" }}>
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
