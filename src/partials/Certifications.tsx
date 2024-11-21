import React from "react";
import Section from "../components/Layout/Section";
import Row from "../components/Layout/Row";
import Card from "../components/General/Card";
import Col from "../components/Layout/Col";

const Certifications: React.FC = () => {
    return (
        <Section parentId="certifications">
            <Row>
                <Col tenths={10}>
                    <Card>
                        <div style={{ padding: "20px" }}>
                            <h1 className="text-center">Certifications</h1>

                            <Microsoft />
                            <AWS />
                            <LPI />
                            <CompTIA />
                        </div>
                    </Card>
                </Col>
            </Row>
        </Section>
    );
};

function AWS() {
    return (
        <div style={{ border: "2px solid", borderRadius: "12px", margin: "2%", padding: "20px" }}>
            <h2>AWS</h2>
            <ul>
                <li>
                    <h4>
                        <a href="https://www.credly.com/badges/9043eb59-5ee7-49f6-9072-900a2a954ed8">Certified Cloud Practitioner</a>
                    </h4>
                </li>
                <li>
                    <h4>Certified Developer (expected completion December 2024)</h4>
                </li>
            </ul>
        </div>
    );
}

function CompTIA() {
    return (
        <div style={{ border: "2px solid", borderRadius: "12px", margin: "2%", padding: "20px" }}>
            <h2>CompTIA</h2>
            <ul>
                <li>
                    <h4>
                        <a href="https://www.certmetrics.com/comptia/public/verification.aspx">Healthcare IT Technician</a> <em>(License: CTJDLDWN2KVEK52F)</em>
                    </h4>
                </li>
            </ul>
        </div>
    );
}

function LPI() {
    return (
        <div style={{ border: "2px solid", borderRadius: "12px", margin: "2%", padding: "20px" }}>
            <h2>Linux Professional Institute</h2>
            <ul>
                <li>
                    <h4>
                        <a href="https://cs.lpi.org/caf/Xamman/certification/verify/LPI000614094/35tywaswu3">Linux Essentials</a>
                    </h4>
                </li>
            </ul>
        </div>
    );
}

function Microsoft() {
    return (
        <div style={{ border: "2px solid", borderRadius: "12px", margin: "2%", padding: "20px" }}>
            <h2>Microsoft</h2>
            <ul>
                <li>
                    <h4>
                        <a href="https://learn.microsoft.com/api/credentials/share/en-us/AndrewCartwright-0770/C0AF3E712D6EC64F?sharingId=27FBD064B975A40C">Azure Fundamentals</a>
                    </h4>
                </li>
                <li>
                    <h4>
                        <a href="https://www.youracclaim.com/badges/ddfa48f5-981f-445c-a16b-0adfecd18f6d/public_url">Database Administration Fundamentals</a>
                    </h4>
                </li>
                <li>
                    <h4>
                        <a href="https://www.youracclaim.com/badges/2bdeff35-cf12-4228-af03-e3485a0c60d8/public_url">Software Development Fundamentals</a>
                    </h4>
                </li>
                <li>
                    <h4>
                        <a href="https://www.youracclaim.com/badges/91a09b81-4a76-448a-be2c-7ea49551e31b">Security Fundamentals</a>
                    </h4>
                </li>
            </ul>
        </div>
    );
}

export default Certifications;
