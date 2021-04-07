import React,{useState} from 'react';
import About from './About';
import './App.css';
import Contact from './Contact';
import CreateUser from './CreateUser';
import Home from './Home'
import User from './User';
import {Link,Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
function App() {

  const [name,setName] = useState('pankaj')
  return (
    <div className="App">
      <Router>


  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
      <Nav.Link href="#features"><Link to='/abouts'>About</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to='/contact'>Contact</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to='/list'>User List</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to='/create'>Create User</Link></Nav.Link>
    </Nav>
    
  </Navbar>
  <Switch>
          <Route path="/abouts">
            <About />
          </Route>
          <Route path="/list">
            <User />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/create">
            <CreateUser/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
