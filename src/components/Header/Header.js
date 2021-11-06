import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.svg';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div >
            <nav className="  navbar fixed-top navbar-expand-lg navbar-dark HeaderBgColor d-flex justify-content-between ">
                <section className="container-fluid ">
                    <article className="d-flex justify-content-between">
                        <div className="logo">
                            <a className="navbar-brand " href="#">
                                <img src={logo} />
                            </a>
                        </div>
                        <div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </article>
                    <article className="collapse navbar-collapse   " id="navbarNavAltMarkup">
                        <div className=" d-flex justify-content-evenly navbar-nav  ">

                            <NavLink to="/home" style={{ color: 'white' }}><a className="nav-link active px-3 pageName" aria-current="page" href="" >HOME</a></NavLink>

                            <NavLink to="/allorders"> <a className="nav-link active px-3 pageName" href="">All Orders</a></NavLink>

                            <NavLink to="/newservice"><a className="nav-link active px-3 pageName HEALTH" href="" >Add a new Service</a></NavLink>
                            {
                                user.email ?
                                    <a onClick={logOut} href="" className='logoutBtn mt-2 px-3' style={{ color: 'white' }}>LOGOUT</a>
                                    :
                                    <NavLink to="/login" className=""><a className="nav-link active px-3 " href="" >LOGIN</a></NavLink>
                            }
                            {user.email && <h3 className='displayName'> {user.displayName} </h3>}
                        </div>
                    </article>
                </section>
            </nav>
        </div>
    );
};

export default Header;