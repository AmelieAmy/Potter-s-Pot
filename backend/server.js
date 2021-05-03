import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products/:id', (req, res) => {
    
    const productId = parseInt(req.params.id);
    const product = data.products.find((x) => x._id === productId);
    
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Up and running on port ${PORT}`);
});