import React from 'react';
import './OrderRequest.css';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router';

const OrderRequest = (props) => {

    const { name, email, number, address, city, zipcode, country,price,userId,img } = props.request;
    const { packagename } = props.request.package;
    const history = useHistory();

    const handleAddNewOrder = () => {
        const data = {};
        data.name = name;
        data.email = email;
        data.address = address;
        data.city = city;
        data.country = country;
        data.zipcode = zipcode;
        data.number = number;
        data.packagename = packagename;
        data.price = price;
        data.userId = userId;
        data.img = img;
        console.log("sc  ", data, "   ", typeof (data));
        fetch(`https://spooky-spell-89697.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast("Order Confirmed!");
                    // window.location.reload();
                }  
            })
    }

    const handleDeleteNewOrder = () => {
        const data = {};
        data.name = name;
        data.email = email;
        data.address = address;
        data.city = city;
        data.country = country;
        data.zipcode = zipcode;
        data.number = number;
        data.packagename = packagename;
        data.price = price;
        data.userId = userId;
        data.img = img;
        console.log("sc  ", data, "   ", typeof (data));
        fetch(`https://spooky-spell-89697.herokuapp.com/deleteordersreq`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast("Order Confirmed!");
                    // window.location.reload();
                }  
            })
    }

    return (
        <div>
            <section className='eachRequest'>
                <h3>{packagename}</h3>
                <article className='row'>
                    <div className='col-12 col-sm-9'>
                        <h5 className=' mt-3' >Booked By : </h5>
                        <div className='mx-5'>
                            <p><strong>Name : </strong>{name}</p>
                            <p><strong>E-mail : </strong>{email}</p>
                            <p><strong>Phone : </strong>{number}</p>
                            <p><strong>Address : </strong>{address} ,{city}, {country} ,{zipcode}</p>
                            <p><strong>Booking Date : </strong>{address}</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-3 btnSection'>
                        <div className='d-flex  '>
                            <button type="button" className="btn btn-success" onClick={handleAddNewOrder} id="liveToastBtn"><AiOutlinePlus></AiOutlinePlus> Add</button>
                            <ToastContainer />

                            <button type="button" className="btn btn-danger  mx-2" onClick={handleDeleteNewOrder}><MdDelete></MdDelete> Delete</button>
                        </div>
                    </div>
                </article>


            </section>

        </div>
    );
};
export default OrderRequest;