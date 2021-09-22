import { Container, Jumbotron } from 'react-bootstrap';

const MyJumbotron = () => {
    return (
        <Container>
            <Jumbotron fluid>
                <Container>
                    <h1 className="display-4 text-center">Music Search</h1>
                    <p className="lead text-center">Search your favorite Music</p>
                </Container>
            </Jumbotron>
        </Container>
    );
};

export default MyJumbotron;