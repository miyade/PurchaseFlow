import React, { useEffect, useState} from 'react';import { Container, Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../services/api';

export default function Welcome({history}){
    const [categories, setCategories] = useState([]);
    const apiURL= '/v1/product_categories';
    useEffect(() => {
        getEvents()
    },[])



   const getEvents = async () => {
      
        const response= await api.get(apiURL)
        setCategories(response.data.data)
   };
   console.log(categories)

    return (
        <div>
            <ul className="categories-list">
                {categories.map(category => (
                    <li key={category.id}>
                    <strong>{category.attributes.name}</strong>
                    </li>
                     ))}
            </ul>
            <Button>Next</Button> 
        </div>
       
    )
}