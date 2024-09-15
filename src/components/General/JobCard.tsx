import React from "react";
import { Job } from "../../types";
import Col from "../Layout/Col";
import Row from "../Layout/Row";

const JobCard: React.FC<Job> = ({ position, name, url, startDate, endDate, description, full_description }) => {
    const THIS_YEAR = new Date().getFullYear();
    const JOB_YEAR_START = new Date(startDate).getFullYear();
    const JOB_YEAR_END = new Date(endDate).getFullYear();

    return (
        <Col tenths={9}>
            <div style={{ padding: "20px", border: `2px solid`, borderRadius: "12px", marginTop: "20px" }}>
                <h1 style={{ margin: "0px 0px" }}>{position}</h1>

                <Row>
                    <Col tenths={10}>
                        <h3>
                            <a href={url}>{name}</a>{" "}
                            <span>
                                ({JOB_YEAR_START} - {JOB_YEAR_END === THIS_YEAR ? "Present" : JOB_YEAR_END})
                            </span>
                            <span>
                                <em> {description}</em>
                            </span>
                        </h3>
                    </Col>
                </Row>

                <hr />

                <Row>
                    <Col tenths={9}>
                        <h4 style={{ margin: "10px" }}>
                            {full_description.split(/(`.*?`)/).map((word, index) => {
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
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default JobCard;
