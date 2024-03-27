import React from 'react';
import { Navbar, Container, FormControl, Button, Form } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import Social_Icons from '../../Icons/Socials/Social_Icons';
import Services from './Services/Services';
import CustomForm from '../Form/Form';
import Help from './Services/Help';

function CustomNavbar() {
  return (
  <div>
    <Navbar className='bg nav' expand="lg">
      <Container className='container'>
        <div className='logo'><Navbar.Brand className='vertical-rule' href="#">Logo</Navbar.Brand></div>
        <Services/>
        <Social_Icons></Social_Icons>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <CustomForm type="search" placeholder="Search"/>
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <BsSearch className='search' />
            </Button>
          </Form> */}
        </Navbar.Collapse>
        <Help/>
      </Container>
    </Navbar>
  </div>
  );
}

export default CustomNavbar;
