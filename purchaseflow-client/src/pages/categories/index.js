import React, { useEffect, useState} from 'react';
import {Label, Modal, ModalHeader, ModalBody, ModalFooter, Container, Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../services/api';

export default function Welcome({history}){

    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState();
    const [modal, setModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
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


    const submitHandler = async (evt) => {
        evt.preventDefault()

        const contactData = new FormData();

        contactData.append("firstName", firstName)
        contactData.append("lastName", lastName)
        contactData.append("emailAddress", emailAddress)
        contactData.append("phoneNumber", phoneNumber)
        contactData.append("selectedCategory", selectedCategory)
        try {
            if (firstName !== "" &&
                lastName !== "" &&
                emailAddress !== "" &&
                phoneNumber !== null &&
                selectedCategory !== "" 
              
            ) {
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                    history.push("/")
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

   const getEvents = async () => {
      
        const response= await api.get(apiURL)
        setCategories(response.data.data)
   };
   //console.log(categories)

    return (
        <div>
            <ul className="categories-list">
                {categories.map(category => (
                    <li key={category.id}>
                    <strong onClick={() => selectHandler(category.attributes.name)} >{category.attributes.name}</strong>
                    </li>
                     ))}
            </ul>
            {
                selected ? (
                    <Button onClick={toggle}> Next </Button>
                ) : ""
            }
           
            <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Contact Information</ModalHeader>
            <ModalBody>
            
            <Form onSubmit={submitHandler}>
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
                    <Button className="submit-btn" >Submit</Button>
                </FormGroup>
                <FormGroup>
                    <Button className="secondary-btn" onClick={() => toggle()}>
                        Cancel
                    </Button>
                </FormGroup>
            </ModalFooter>
            </Modal>

        </div>
       
    )
}