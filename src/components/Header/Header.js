import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container">
                        <a className="navbar-brand text-light" href="#">GEDGET BAZAR</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/orders">Orders</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link text-light" to="/admin">Admin</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Deals</a>
                                </li>
                                <li className="nav-item">
                                    {loggedInUser.email? <button className="btn btn-warning mx-5"><Link to="/"><span>{loggedInUser.displayName}</span></Link></button>:<button className="btn btn-warning mx-5"><Link to="/login">Login</Link></button>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;