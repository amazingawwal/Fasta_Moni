import React from 'react';
import { Navbar, Container, FormControl, Button, Form } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

function CustomForm(props) {
  return (
        <div>
          <Form className="d-flex">
            <FormControl
              type={props.search}
              placeholder={props.placeholder}
              className="mr-2"
              aria-label={props.placeholder}
            />
            <Button variant="outline-success">
              <BsSearch className='search' />
            </Button>
          </Form>
        </div>
  );
}

export default CustomForm;
