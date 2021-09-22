import { Container, Navbar } from 'react-bootstrap';

const MyNavbar = () => { 
    return (
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Container>
                        <Navbar.Brand href="#">Music Search</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
    );
};

export default MyNavbar