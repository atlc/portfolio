import React, { useState } from "react";
import { Job } from "../../types";
import Col from "../Layout/Col";
import Row from "../Layout/Row";
import Button from "./Button";

const JobCard: React.FC<Job> = ({ position, is_relevant, name, url, startDate, endDate, description, highlights }) => {
    const [collapsed, setCollapsed] = useState(!is_relevant);

    return (
        <Col tenths={8}>
            <div style={{ padding: "20px", border: `2px solid`, borderRadius: "12px" }}>
                <h1>{position}</h1>

                <Row>
                    <Col tenths={8}>
                        <h3>
                            <a href={url}>{name}</a> | {new Date(startDate).getFullYear()} - {new Date(endDate).getFullYear()}{" "}
                        </h3>
                    </Col>
                    <Col tenths={2}>
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
                    </Col>
                </Row>

                <hr />

                <Row>
                    {!collapsed && (
                        <Col tenths={8}>
                            <p style={{ textAlign: "center" }}>{description}</p>
                            <ul>
                                {highlights.map((highlight, idx) => (
                                    <li key={`job-highlight-${name}-${idx}`}>
                                        <h4>{highlight}</h4>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    )}
                </Row>
            </div>
        </Col>
    );
};

export default JobCard;
