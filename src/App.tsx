import { useState } from "react";
import Container from "./components/Layout/Container";
import Row from "./components/Layout/Row";
import Col from "./components/Layout/Col";

function App() {
    return (
        <Container>
            <Row>
                <Col tenths={3}>
                    <div>One</div>
                </Col>
                <Col tenths={3}>
                    <div>Two</div>
                </Col>
                <Col tenths={3}>
                    <div>Three</div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
