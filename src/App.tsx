import Container from "./components/Layout/Container";
import Row from "./components/Layout/Row";
import Nav from "./components/Navbar/Nav";

const App = () => {
    return (
        <Container>
            <Nav />

            <Row>
                <div style={{ marginTop: "500px" }}>One</div>
            </Row>
            <Row>
                <div style={{ marginTop: "500px" }}>Two</div>
            </Row>
            <Row>
                <div style={{ marginTop: "500px" }}>Three</div>
            </Row>
            <Row>
                <div style={{ marginTop: "500px" }}>Foo</div>
            </Row>
            <Row>
                <div style={{ marginTop: "500px" }}>Bar</div>
            </Row>
            <Row>
                <div style={{ marginTop: "500px" }}>Baz</div>
            </Row>
        </Container>
    );
};

export default App;
