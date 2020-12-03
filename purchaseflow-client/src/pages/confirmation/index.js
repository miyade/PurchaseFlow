import React, {useEffect} from 'react';
import {Button, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './index.css';


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

  <div class='order'>
    <h2>Confirmation</h2>
    <h5>Paying for {location.state.selectedCategory}</h5>
    <ul class='order-list'>
    <li><h4>First Name : {location.state.firstName}</h4></li>
    <li><h4>Last Name : {location.state.lastName}</h4></li>
    </ul>
    <h5 class='total'>Total</h5><h1>“£20.00</h1>
    <button onClick={paytHandler} class='button-cta' title='Confirm your purchase'><span>Pay</span></button>
  </div>

 
     </Container>
 
 

    );
}
