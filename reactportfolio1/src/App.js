import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer'
// import Card from './components/Cards'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'
import './App.css'
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <>
     
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <div>
              <nav className="reddish">
                <Navbar light expand="md">
                  
                  <NavbarBrand>Home</NavbarBrand>
                  
                  <NavbarToggler onClick={toggle} />
                  <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                      <NavItem>
                        <NavLink><Link className="link" to="/">About</Link></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink><Link className="link" to="/portfolio">Portfolio</Link></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink><Link className="link" to="/contact">Contact</Link></NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </nav>
              
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
