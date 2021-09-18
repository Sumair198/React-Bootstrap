import './App.css';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';
import { useHistory } from 'react-router-dom';
import {
  Switch, Route, Link
} from 'react-router-dom';
import { Navbar, Nav, Carousel,Card,CardGroup } from 'react-bootstrap';


import image from './image/logo512.png'
import image1 from './image/one.png'
import image2 from './image/two.png'
import image3 from './image/three.jpg'
function App() {
  let history = useHistory();
  return (
    <>
      {/* <nav>
          <ul>
            <li>
              <Link  to='/'><Button variant="success">Home</Button></Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/Contact'>Contact</Link>
            </li>
            <li>
              <Link to='/Service'><Button variant="success">Service</Button></Link>
            </li>
          </ul>
        </nav> */}


      <Navbar bg="light" expand="lg">
        <Navbar.Brand ><img height='40px' src={image} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => { history.push('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { history.push('/About') }}>About</Nav.Link>
            <Nav.Link onClick={() => { history.push('/Service') }}>Service</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path='/About'><About /></Route>
        <Route path='/Contact'><Contact /></Route>
        <Route path='/Service'><Service /></Route>
      </Switch>


      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>


      <div className = 'container'>
      <CardGroup>
  <Card>
    <Card.Img variant="top" height='300px' src="https://images8.alphacoders.com/380/thumb-1920-380534.png" />
    <Card.Body>
      <Card.Title>React.js</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" height='300px' src="https://wallpapercave.com/wp/wp4923978.jpg" />
    <Card.Body>
      <Card.Title>React.js</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" height='300px' src="https://res.cloudinary.com/practicaldev/image/fetch/s--l-Gxsagx--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/1amer2k9l9qtpguowryd.png" />
    <Card.Body>
      <Card.Title>React.js</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

      </div>
      <div className = 'bottom1'>
      &copy; Copyright : 2021
      </div>
      
    </>
  );
}

export default App;
