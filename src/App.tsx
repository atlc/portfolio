import Container from "./components/Layout/Container";
import Nav from "./components/Navbar";
import Bio from "./partials/Bio";
import Education from "./partials/Education";
import Experience from "./partials/Experience";
import Projects from "./partials/Projects";

const App = () => {
    return (
        <Container>
            <Nav />
            <main>
                <Bio />
                <Experience />
                <Education />
                <Projects />
            </main>
        </Container>
    );
};

export default App;
