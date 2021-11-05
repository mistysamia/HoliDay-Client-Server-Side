import React from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router';
import StarRatings from 'react-star-ratings';
import { packageDetailsBG } from '../../images/packageDetailsBG.jpg'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';


const PlaceOrder = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        console.log(location.pathname);
        console.log(location.search);
        console.log(location.state);
    }, [location]);
 

    const packages = location.state[0];
    const price = location.state[1];
    const code = location.state[2];
    let packagePrice = packages.price;


    const onSubmit = data => {
       
        data.package = packages;
 console.log(data);
        fetch(`https://spooky-spell-89697.herokuapp.com/packagerequest`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    };
    return (
        <div className='container'>
            <section className='placeOrderShow'>

                <section className='eachPlaceOrderShow row'>
                    <section className='placeOrderDetails col-12 col-md-8'>
                        <div className='PlaceOrderTitle'>
                            <h2>Make your Holiday Memorable with <span className='title'>HOLIDAY</span></h2>
                        </div>
                        <form className="row g-3 mt-5 placeOrderForm needs-validation"  onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-12">
                                <input type="email" className="form-control"
                                    id="inputEmail4" value={user.displayName} readOnly required />
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control"
                                    id="inputEmail4" value={user.email} readOnly required />
                            </div>

                            <div className="col-12">
                                <input type="text" className="form-control" id="inputAddress" placeholder="Address..." required />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>

                            <div className="col-md-5">
                                <input type="text" className="form-control" id="inputCity" placeholder="Country..." required />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" id="inputCity" placeholder="City..." required />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" id="inputZip" placeholder="Zip Code..." required />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div className="col-md-12">
                                <input type="tel" className="form-control" id="inputZip" placeholder="Contact Number..." required />
                            </div>
                            <div className="col-md-12">
                                <input type="datetime-local" id="meeting-time"
                                    name="meeting-time" value="2021-06-12T19:30"
                                    min="2018-06-07T00:00" max="2025-06-14T00:00" className="form-control" required />
                            </div>

                            <div >
                                <button className='btnSection my-3 mx-2' type="submit">Submit</button>
                            </div>
                        </form>

                    </section>
                    <section className='cart col-12 col-md-4'>
                        <h2 className='mb-5'>Checkout Summary</h2>
                        <div className='cartDetails mt-5'>
                            <h5 className='text-start mt-5'> Total: <span className='price total'>${packages.price}</span></h5>

                            <h5 className='text-start mb-4 mt-3'> Discount: <span className='price  discount'>${code}</span></h5>
                            <hr />
                            <h5 className='text-start mb-5'> Payable Total: <span className='price'>${price}</span></h5>


                        </div>

                    </section>


                </section>
            </section>
        </div>
    );
};

export default PlaceOrder;