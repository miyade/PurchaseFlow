import React, {useEffect} from 'react';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Confirmation(){
    let history = useHistory();

    const location = useLocation();


    useEffect(() => {
        console.log(location.state);
       
      
     }, []);


     const paytHandler = async () => {
        history.push({ 
            pathname: '/Thankyou',
            state: {
                firstName: location.state.firstName,
                lastName: location.state.lastName,
                selectedCategory: location.state.selectedCategory
            }
           });
      }


    return (
        <Container>
            <h2>Confirmation page</h2>
            {location.state.firstName}
            <Button onClick={() => paytHandler()} > </Button>
        </Container>
    );
}
