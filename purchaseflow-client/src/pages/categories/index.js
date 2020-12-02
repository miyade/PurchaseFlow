import React, { useEffect, useState} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Container, Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../services/api';

export default function Welcome({history}){

    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState();
    const [modal, setModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

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
            
            <Input type="checkbox" />{' '}
              
                Accept <a href="">Terms & Conditions</a>

            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Next</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>

        </div>
       
    )
}