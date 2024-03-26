import Service_text from "./Service_text";
import { Navbar, Container, FormControl, Button, Form } from 'react-bootstrap'; 


function Services (){



    return(
        <>
            <Service_text className="services" name="HOME" />
            <Service_text className="services" name = "SERVICES"/>
            <Service_text className="services" name = "PAGES"/>
            <Service_text className="services" name = "CASE SHOP"/>
            <Service_text className="services" name = "BLOG"/>
            <Service_text className="services" name = "CONTENT"/>
        </>
    )
};

export default Services;
