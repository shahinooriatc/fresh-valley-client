import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css';

const Admin = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        console.log(imageURL);
        const productData = {
            name: data.name,
            brand: data.brand,
            price: data.price,
            image: imageURL
        };
        const url = 'https://cherry-crumble-46990.herokuapp.com/addProduct';
        console.log(productData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response ', res));
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '43a1310f8200e90436e4751590ba0b70');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleAddProductBtn = () => {
        document.getElementById("manage-product-section").style.display = "none";
        document.getElementById("add-product-section").style.display = "block";
    }
    const handleManageProductBtn = () => {
        document.getElementById("add-product-section").style.display = "none";
        document.getElementById("manage-product-section").style.display = "block";
    }
    return (
        <div>
            <div className="container m-5 text-center">
                <button onClick={handleAddProductBtn} className="btn btn-primary m-2">Add Product</button>
                <button onClick={handleManageProductBtn} className="btn btn-warning m-2">Manage Product</button>
            </div>
            < form id="add-product-section" onSubmit={handleSubmit(onSubmit)} >
                <div className="container">
                    <h2>Add Product</h2>
                    <div className="row shadow p-5 m-4 rounded">
                        <div className="col-6">
                            <label htmlFor="">Product Name</label>
                            < input className="w-100 mb-4" name="name" placeholder="Product name" ref={register} />
                            <label htmlFor="">Price</label>
                            < input className="w-100 mb-4" name="price" placeholder="Price" ref={register({ required: true })} />
                        </div>
                        <div className="col-6">
                            <label htmlFor="">Brand Name</label>
                            < input className="w-100 mb-4" name="brand" placeholder="Brand name" ref={register({ required: true })} />
                            <label htmlFor="">Upload image</label>
                            < input className="w-100 mb-4" name="image" type="file" onChange={handleImageUpload} />
                            <input className="btn btn-primary" type="submit" />
                        </div>
                    </div>
                </div>
            </form >
            <div id="manage-product-section" className="container">
                <h2>Manage Product</h2>
                <ManageProduct></ManageProduct>
            </div>
        </div>
    );
};

export default Admin;