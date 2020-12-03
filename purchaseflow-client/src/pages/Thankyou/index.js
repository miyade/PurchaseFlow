import React, {useEffect} from 'react';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";

export default function Thankyou(){
   
    const location = useLocation();


    useEffect(() => {
        console.log(location.state);
      
     }, []);
    return (
        <Container>
            <h2>Thank you page</h2>
            {location.state.firstName}
          
        </Container>
    );
}
