// Pages for routes
import express from 'express';
import { Customer } from '../models/customerModel.js';

const router = express.Router();

     // Route for save a new book
     router.post('/', async (request, response) => {
    try {
       if (
         !request.body.title ||
         !request.body.adress ||
         !request.body.customerno
    
       ){
        return response.status(400).send({
            message: 'Send all required fields: title, adress, customerno',
        });
       }
       const newCustomer = {
        title: request.body.title,
        adress: request.body.adress,
        customerno: request.body.customerno, 
       };
       const customer = await Customer.create(newCustomer);
       return response.status(281).send(customer);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message })
    } 
     });
    
     //Route to get all customer details from database
     router.get('/', async (request, response) => {
        try{
          const customer = await Customer.find({});
    
          return response.status(200).json({
            count: customer.length,
            data: customer
          });
        }catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message});
        }
     });
    
     //Route to get one customer details from database by id
     router.get('/:id', async (request, response) => {
        try{
    
           const { id } = request.params;
          const customer = await Customer.findById(id);
    
          return response.status(200).json(customer);
        }catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message});
        }
     });
    
     // Route for updating a customer details
    
     router.put('/:id', async (request, response) => {
        try{ 
            if
      (          !request.body.title ||
                !request.body.adress ||
                !request.body.customerno
    
     ){
                return response.status(400).send({
                    mesage: 'Send all required fields: title, adress, customerno',
                });
            }
    
            const {id} = request.params;
            const result = await Customer.findByIdAndUpdate(id, request.body);
    
            if(!result){
                return response.status(404).json({ message: 'Book not found'});  
          }
    return response.status(200).send({ message: 'Customer details updated successfully'});
        } catch(error){
            console.log(error.message);
            response.status(500).send({ message: error.message});
        }
     });
    
     // Delete customer details
    
     router.delete('/:id', async (request, response) => {
        try {
            const { id } = request.params;
            const result = await Customer.findByIdAndDelete(id);
    
            if(!result){
                return response.status(404).json({ message: 'Customer Details Not found'});
            }
          return response.status(200).send({ message: 'Customer Details Has Been Deleted Successfully'});
            
        }catch(error){
       console.log(error.message);
       response.status(500).send({ message: error.message});
        }
     });
    
      export default router;