import React, { useEffect, useState} from 'react';import { Container, Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../services/api';
import axios from 'axios';

export default function Welcome({history}){
    const [categories, setCategories] = useState([]);
    const apiURL= 'https://testapi.numan.com/v1/product_categories';
    useEffect(() => {
        getEvents()
    },[])



   const getEvents = async () => {
      
        const response= await api.get(apiURL)
        setCategories(response.data.data)
   };
   console.log(categories)

    return (
       <ul className="categories-list">

           {categories.map(category => (
               <li key={category.id}>
                   <strong>{category.attributes.name}</strong>
               </li>
           ))}

       </ul>
    )
}