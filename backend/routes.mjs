import express from 'express';
/*
import * as productController from './controllers/productController.mjs'
import * as userController from './controllers/userController.mjs'
*/

const router = express.Router();

/*
router.get('/products', productController.getAllProducts)
router.put('/products/:id',productController.updateProduct)
router.post('/product-create',productController.createProduct)
router.delete('/products/:id', productController.deleteProduct);
*/
router.post('/registro', (req, res)=>{
    console.log ("estoy registrando");
    res.status(201).send('resitro en progreso');
});
router.post('/login', (req, res)=>{
    console.log ("estoy loquenago");
    res.status(200).send('login en proceso')
});


export default router;