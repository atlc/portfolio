import React, { useState } from "react";
import { Job } from "../../types";
import Col from "../Layout/Col";
import Row from "../Layout/Row";
import Button from "./Button";

const JobCard: React.FC<Job> = ({ position, is_relevant, name, url, startDate, endDate, description, highlights }) => {
    const [collapsed, setCollapsed] = useState(!is_relevant);

    return (
        <Col tenths={9}>
            <div style={{ padding: "20px", border: `2px solid`, borderRadius: "12px", marginTop: "20px" }}>
                <h1 style={{ margin: "0px 0px" }}>{position}</h1>

                <Row>
                    <Col tenths={8}>
                        <h3>
                            <a href={url}>{name}</a>{" "}
                            <span>
                                ({new Date(startDate).getFullYear()} - {new Date(endDate).getFullYear()})
                            </span>
                            <span>
                                <em> {description}</em>
                            </span>
                        </h3>
                    </Col>
                    <Col tenths={2}>
                        <Row>
                            <span onClick={() => setCollapsed(!collapsed)}>
                                <Button>
                                    {collapsed ? (
                                        <>
                                            Expand <span style={{ fontSize: "1.5em" }}>⤽</span>
                                        </>
                                    ) : (
                                        <>
                                            Collapse <span style={{ fontSize: "1.5em" }}>⤼</span>
                                        </>
                                    )}
                                </Button>
                            </span>
                        </Row>
                    </Col>
                </Row>

                <hr />
                {!collapsed && (
                    <Row>
                        <Col tenths={8}>
                            <ul>
                                {highlights.map((highlight, index) => (
                                    <li key={`job-highlight-${index}`}>
                                        <h4 style={{ margin: "10px" }}>
                                            {highlight.split(/(`.*?`)/).map((word, index) => {
                                                return word.startsWith("`") && word.endsWith("`") ? (
                                                    <code style={{ fontFamily: "Courier new" }} key={`job-highlight-code-${index}`}>
                                                        {word.replace(/`/g, "")}
                                                    </code>
                                                ) : (
                                                    <span key={`job-highlight-span-${index}`}>{word}</span>
                                                );
                                            })}
                                        </h4>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                )}
            </div>
        </Col>
    );
};

export default JobCard;
