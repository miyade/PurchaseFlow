import React, {useEffect} from 'react';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
import './index.css';
export default function Thankyou({history}){
   
    const location = useLocation();

    const gobackHandler = async () => {
        history.push('/');
      }

    useEffect(() => {
        console.log(location.state);
      
     }, []);
    return (
        <Container>
            <div class="cart-page-header page-order-received">
      <div class="cart-header-notice">
        <span class="cart-header-icon"><i class="fa fa-check" aria-hidden="true"></i></span>
        <span class="cart-header-text">Thank you. Your order has been received.</span>
      </div>
      <div class="cart-order-received">
        <div class="order-received-col">
          <span class="">Order Prixe:</span>
          <span class="bold-text">“£20.00</span>
        </div>
        <div class="order-received-col received-col-mobile">
          <span class="">Name:</span>
          <span class="bold-text">{location.state.firstName}</span>
        </div>
        <div class="order-received-col">
          <span class="">Last Name:</span>
          <span class="bold-text">{location.state.lastName}</span>
        </div>
        <div class="order-received-col">
          <span class="">Category:</span>
          <span class="bold-text">{location.state.selectedCategory}</span>
        </div>

       

      </div>
    </div>
    <div className="gobackwrap">
            <button onClick={gobackHandler} className="gobackbutton">Go Back</button>
        </div>
        </Container>
    );
}
