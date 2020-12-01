import React from 'react';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Welcome({history}){


    const handleSubmit = async evt => {
            evt.preventDefault();
            history.push('/categories')
    }

    return (
        <Container>
            <h2>Welcome</h2>
            <Form onSubmit={handleSubmit}>
                <Button>Get Started</Button>
            </Form>
        </Container>
    );
}