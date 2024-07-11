import React from "react";
import { Job } from "../../types";
import Col from "../Layout/Col";
import Row from "../Layout/Row";

const JobCard: React.FC<Job> = ({ position, name, url, startDate, endDate, description, highlights }) => {
    return (
        <Col tenths={9}>
            <div style={{ padding: "20px", border: `2px solid`, borderRadius: "12px", marginTop: "20px" }}>
                <h1 style={{ margin: "0px 0px" }}>{position}</h1>

                <Row>
                    <Col tenths={10}>
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
                </Row>

                <hr />

                <Row>
                    <Col tenths={8}>
                        <ul>
                            {highlights.map((highlight, index) => (
                                <li key={`job-highlight-${index}`}>
                                    <h4 style={{ margin: "10px" }}>
                                        {highlight.split(/(`.*?`)/).map((word, index) => {
                                            return word.startsWith("`") && word.endsWith("`") ? (
                                                <code
                                                    style={{ fontFamily: "Courier new" }}
                                                    key={`job-highlight-code-${index}`}
                                                >
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
            </div>
        </Col>
    );
};

export default JobCard;
