import React, { useState } from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";




const Bar = () => {

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container >
        <Navbar.Brand href="/" className="d-flex">
          <p className="soundBar">Loving Years</p>
          
          
        </Navbar.Brand>
        <br/>

        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
         
          <GiSelfLove className="soundBar"/>
        </Navbar.Toggle>
        
      

        




        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/seventeen" onClick={() => updateExpanded(false)}>
               '17
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/eighteen"
                onClick={() => updateExpanded(false)}
              >
                 '18
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/nineteen"
                onClick={() => updateExpanded(false)}
              >
               {" "}
                '19
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/twenty"
                onClick={() => updateExpanded(false)}
              >
               {" "}
                '20'
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/twentyone"
                onClick={() => updateExpanded(false)}
              >
               {" "}
                '21
              </Nav.Link>
            </Nav.Item>



            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/twentytwo"
                onClick={() => updateExpanded(false)}
              >
               {" "}
                '22
              </Nav.Link>
            </Nav.Item>


            

           

            


            

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;
