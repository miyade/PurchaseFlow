import React from 'react';
import { Container, Form, FormGroup, Input } from 'reactstrap';
import {Button, Box} from '@material-ui/core';
import './index.css'


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Welcome({history}){


    const handleSubmit = async () => {
            history.push('/categories')
    }

    return (
        <Container>
         <div className="wrapper">
            <button onClick={() => handleSubmit()} className="button">Get Started</button>
        </div>
        </Container>
    );
}