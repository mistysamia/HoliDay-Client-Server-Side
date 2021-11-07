import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.svg';
import './Header.css';
import { GiMonsteraLeaf } from "react-icons/gi";
import $ from "jquery";



const Header = () => {
    const { user, logOut } = useAuth();
    const name = user.displayName ? user.displayName.substring(0, user.displayName.indexOf(" ")) : '';


    return (
        <div >
            {/* <nav className="  navbar fixed-top navbar-expand-lg navbar-dark HeaderBgColor d-flex justify-content-between ">
                <section className="container-fluid xxx">
                    <article className="d-flex justify-content-between">
                        <div className="logo">
                            <a className="navbar-brand navImg" href="#">
                                <GiMonsteraLeaf></GiMonsteraLeaf>
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
                            <NavLink to="/home" style={{ color: 'white' }}><a className="nav-link active px-3 pageName" aria-current="page" href="" >Holiday</a></NavLink>
                           
                            <NavLink to="/home" style={{ color: 'white' }}><a className="nav-link active px-3 homePage" aria-current="page" href="" >HOME</a></NavLink>

                            <NavLink to="/allorders"> <a className="nav-link active px-3 pageName" href="">AllOrders</a></NavLink>

                            <NavLink to="/myorder"> <a className="nav-link active px-3 pageName" href="">MyOrders</a></NavLink>

                            <NavLink to="/newservice"><a className="nav-link active px-3 pageName HEALTH" href="" >AddnewService</a></NavLink>
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
            </nav> */}

            <nav className="navbar fixed-top navbar-expand-lg  navbar-dark HeaderBgColor">
                <div className="container-fluid">
                    <NavLink to="/home" style={{ color: 'white' }}><a className="nav-link active  navImg" aria-current="page" href="" ><GiMonsteraLeaf></GiMonsteraLeaf> <span className='title'>Holi<span className='titleDay'>day</span></span></a></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto  mt-3">
                            <NavLink to="/allorders"> <a className="nav-link active pageName" href="">AllOrders</a></NavLink>
                            <NavLink to="/myorder"> <a className="nav-link active pageName" href="">MyOrders</a></NavLink>

                            <NavLink to="/newservice"><a className="nav-link active  pageName HEALTH" href="" >AddnewService</a></NavLink>
                            {
                                user.email ?
                                    <a onClick={logOut} href="" className='logoutBtn mt-2 ' style={{ color: 'white' }}>LOGOUT</a>
                                    :
                                    <NavLink to="/login" className=""><a className="nav-link active  " href="" >LOGIN</a></NavLink>
                            }

                        </ul>
                        <span className="navbar-text mt-3 userName">
                            {user.email && <p className='displayName mt-3'>Welcome {name} </p>}
                        </span>
                        <span className="navbar-text mt-3 userImg">
                        {user.photoURL &&  <img src={user.photoURL} />}
                           
                        </span>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;