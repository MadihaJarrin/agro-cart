/* eslint-disable */

import React, { useEffect, useState} from 'react';
import axios from 'axios'; 
import { useParams } from 'react-router-dom';
 import BackButton from '../components/BackButton';
 import Spinner from '../components/Spinner';
import { Customer } from '../../../backend/models/customerModel';
const ShowCustomer = () => {
    const[customer, setCustomer] = useState(false);
    const [loading, setLoading] = useState(false);

      useEffect(() => {
        setLoading(true);
        axios
           .get(`http://localhost:5000/customer/${id}`)
           .then((Response)  => {
            setCustomer(response.data);
            setLoading(false);
           })
           .catch((error) => {
            console.log(error);
            setLoading(false);
           });
      }, [])
return(
    <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'> Show Customer </h1>
       {loading ? (
        <Spinner />
       ):(
       
        
    
    
    <div className='flex flex-col border-2  border-sky-400 rounded-xl w-fit p-4'>
        <div className='my-4'>
            <span className='text-xl mr-4  text-gray-500'>Id</span>
             <span>{customer._id}</span> 
             
            </div>

            <div className='my-4'>
            <span className='text-xl mr-4  text-gray-500'>Title</span>
             <span>{customer._title}</span> 
             
            </div>

            <div className='my-4'>
            <span className='text-xl mr-4  text-gray-500'>Address</span>
             <span>{customer._adress}</span> 
             
            </div>

            <div className='my-4'>
            <span className='text-xl mr-4  text-gray-500'>Customer Number</span>
             <span>{customer._customerno}</span> 
             
             
            </div>
  
            <div className='my-4'>
            <span className='text-xl mr-4  text-gray-500'>Create Time</span>
             <span>{new Date(customer.createdAt).toString()}</span> 
             
            </div>

            
            <div className='my-4'>
            <span className='text-xl mr-4  text-gray-500'>Last Updated Time</span>
             <span>{new Date(customer.createdAt).toString()}</span> 
             
            </div>




        </div>
)}
</div>
)
}

export default ShowCustomer