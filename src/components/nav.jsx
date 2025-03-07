import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from './logo.jpeg'
import { Link} from 'react-router-dom';

export default function Navbars() {
  return (
    <>
      {[ 'md' ].map((expand) => (
        <Navbar key={expand} expand={expand}  sticky="top"  bg="dark" data-bs-theme="dark">
          <Container fluid>
          <Navbar.Brand href="/"> 
            <img
              alt="Top Star Schools"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
               Top Star Schools
          </Navbar.Brand>
            {/* <Navbar.Brand href="#">Top Star Schools</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas bg="dark" data-bs-theme="dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Top Star Schools
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>  
                <Nav className="justify-content-end flex-grow-1 pe-3" bg="dark" data-bs-theme="dark">
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/about'>About Us</Nav.Link>
                  <Nav.Link as={Link} to='/gallery'>Gallery</Nav.Link>
                  <NavDropdown
                    title="Portal"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/portal">Returning Student</NavDropdown.Item>
                    <NavDropdown.Item href="/register">
                    New Student
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/portal">
                     Parent
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" >Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

;

