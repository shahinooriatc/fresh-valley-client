import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://radiant-refuge-65758.herokuapp.com/order?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>

            <div className="container">
                <h2 className="my-4">Hello, {loggedInUser.displayName}. You have {orders.length} orders</h2>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order =>
                            <tbody>
                                <tr>
                                    <td>{order.displayName}</td>
                                    <td>{order.name} {order.brand}</td>
                                    <td>{order.price}</td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>

        </div>
    );
};

export default Orders;