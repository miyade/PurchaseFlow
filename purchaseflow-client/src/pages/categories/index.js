import React, { useEffect, useState} from 'react';
import {Label, Modal, ModalHeader, ModalBody, ModalFooter, Container, Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../services/api';
import { useHistory } from "react-router-dom";
import './index.css'


export default function Welcome(){
    let history = useHistory(); 
    const [categories, setCategories] = useState([]); 
    const [selected, setSelected] = useState(); 
    const [modal, setModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(""); 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const apiURL= '/v1/product_categories';
    useEffect(() => {
        getEvents()
    },[])

    const toggle = () => setModal(!modal);

    const selectHandler = async (selectedItem) => {
      // console.log('this works');
       setSelected(true);
       setSelectedCategory(selectedItem);
    }

    // Contact form submit + selected category passed through history to next page

    const submitHandler = async () => {
        try {
            if (firstName !== "" &&
                lastName !== "" &&
                emailAddress !== "" &&
                phoneNumber !== "" &&
                selectedCategory !== "" 
            ) {
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                    history.push({ 
                        pathname: '/confirmation',
                        state: {
                            firstName: firstName,
                            lastName: lastName,
                            emailAddress: emailAddress,
                            phoneNumber: phoneNumber,
                            selectedCategory: selectedCategory
                        }
                       });
                }, 2000)
            } else {
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 2000)
            }
        } catch (error) {
            Promise.reject(error);
            console.log(error);
        }
    }

// Getting events from api url using axios, the BaseURL is in the api file
   const getEvents = async () => {
        const response= await api.get(apiURL)
        setCategories(response.data.data)
   };




    return (



        
        <div>
                {categories.map(category => (

                    <ul class="categories">
                        
                        <li>
                            <a>
                                <p onClick={() => selectHandler(category.attributes.name)} class="categories-name"><span class="name">{category.attributes.name}</span> <span class="scnd-font-color">29/06</span></p>
                            </a>
                        </li>
                    </ul>


                    ))}
            {
                selected ? (
                    <Button onClick={toggle}> Next </Button>
                ) : ""
            }












            {/* This is the Modal that opens up for client to put his information */}

            <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Contact Information</ModalHeader>
            <ModalBody>
            <Form>
                    <FormGroup>
                        <Label>First Name: </Label>
                        <Input id="title" type="text" value={firstName} placeholder={'First Name ..'} onChange={(evt) => setFirstName(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name: </Label>
                        <Input id="description" type="text" value={lastName} placeholder={'Last Name ..'} onChange={(evt) => setLastName(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email Address: </Label>
                        <Input id="price" type="text" value={emailAddress} placeholder={'Email Address .. xyz@azer.xy'} onChange={(evt) => setEmailAddress(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Phone Number: </Label>
                        <Input id="date" type="text" value={phoneNumber} placeholder={'Phone Number.. '} onChange={(evt) => setPhoneNumber(evt.target.value)} />
                    </FormGroup>
            </Form>
                <Input type="checkbox" />{' '}
                Accept <a href="">Terms & Conditions</a>
            </ModalBody>
            <ModalFooter>
            <FormGroup>
                    <Button onClick={()=>submitHandler()} className="submit-btn" >Submit</Button>
                </FormGroup>
                <FormGroup>
                    <Button className="secondary-btn" onClick={() => toggle()}>
                        Cancel
                    </Button>
                </FormGroup>
            </ModalFooter>
            </Modal>
            {/* END of Modal */}




        </div>
       
    )
}