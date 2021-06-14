import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, brand, price, image, _id } = props.product;
    return (
        <div className="shadow my-4 rounded">
            <img className="w-100" src={image} alt="" />
            <h3>{name} <span className="text-primary">{brand}</span></h3>
            <div className="d-flex justify-content-around py-2">
                <div>
                    <h2>${price}</h2>
                </div>
                <div>
                    <button className="btn btn-warning"><Link to={`/checkout/${_id}`}>Buy Now</Link></button>
                </div>

            </div>
        </div>
    );
};

export default Product;