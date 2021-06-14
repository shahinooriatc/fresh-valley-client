import { useState } from 'react';
import { useEffect } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://radiant-refuge-65758.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    const deleteProduct = (id) => {
        fetch(`https://radiant-refuge-65758.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then( result => console.log('delete successfully',result))
    }
    return (
        <div className="m-3">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr>
                                <th scope="row">{product.name}</th>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td><button className="btn btn-danger" onClick={() =>deleteProduct(product._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;