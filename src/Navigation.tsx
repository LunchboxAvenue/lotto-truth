import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));

const Navigation: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Lotto Truth</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <NavItem>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </NavItem>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/about">
            <About />
          </Route>

        </Switch>
      </Suspense>
    </React.Fragment>
  )
}

export default Navigation