import Dropdown from 'react-bootstrap/Dropdown';
import './app.css';
import Properties from './components/Properties';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div>
       <div className='navbar'>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Estatery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Rent</Nav.Link>
            <Nav.Link href="#link">Sell</Nav.Link>
            <NavDropdown title="Manage property" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>

         
         
          <div>
        <div className='login'>
        <Button variant="light" size="sm">
          Login
        </Button>{' '}

        <Button variant="primary" size="sm">
          Signup
        </Button>{' '}
        </div>
        
         </div>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </div>

      <div className='heading'>
        <h1>Search properties to rent</h1>
      </div>
      <Properties />

    </div>
  );
}

export default App;