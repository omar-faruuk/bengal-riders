import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { userContex } from './../../App';






const Header = () => {
    const [logedInUser, setLogedInUser] = useContext(userContex);

    return (
        <div className='header'>
            <div className="logo">Bengal-Riders</div>
            <nav>
                <li><Link to="home">Home</Link></li>
                <li><Link to="login">Destination</Link></li>
                <li><Link to="blog">Blog</Link></li>
                {logedInUser.name ? <li><p>{logedInUser.name}</p></li>
                    : <li><Link to="login">Log in</Link></li>}

            </nav>
        </div>
    );
};

export default Header;