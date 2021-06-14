import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://cherry-crumble-46990.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {
                products.length === 0 &&
                <div className="d-flex justify-content-center">
                    <div className="spinner-border m-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }
            <div className="container product-area">
                {
                    products.map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;

