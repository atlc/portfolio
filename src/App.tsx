import { useState } from "react";
// import reactLogo from './assets/react.svg'
import Container from "./components/Layout/Container";
import Row from "./components/Layout/Row";
import Col from "./components/Layout/Col";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <Row>
                <Col tenths={3}>
                    <div>ayyy</div>
                </Col>
                <Col tenths={3}>
                    <div>luh</div>
                </Col>
                <Col tenths={3}>
                    <div>mao</div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
