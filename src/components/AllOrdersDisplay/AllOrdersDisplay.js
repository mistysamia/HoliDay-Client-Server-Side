import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AllOrdersDisplay.css';

const AllOrdersDisplay = (props) => {

    const { name, email, number, price, img, packagename,userId } = props.orders;

    const handleDeleteNewOrder = () => {
        const data = {};
        data.userId = userId;
        fetch(`https://spooky-spell-89697.herokuapp.com/deleteorders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                   
                }  
            })
    }

    return (
        <div>
            <section className='eachAllOrderDisplay'>
                <div className='imgPart'>
                    <section className='imgSection'>
                        <img src={img} />
                    </section>
                </div>
                <div className='details'>
                    <h3>{packagename}</h3>
                    <p><strong>Paid : $</strong>{price}</p>
                    <p><strong>Booking Date : </strong>{price}</p>
                    <hr />
                    <div className='bookingSection'>
                        <article>
                            <h5>Booked By :</h5>
                            <p><strong>Name : </strong>{name}</p>
                            <div className='d-flex'>
                                <p><strong>E-mail : </strong>{email}</p>
                                <p className='mx-5'><strong>Phone : </strong>{number}</p>
                            </div>
                        </article>
                        <article className='btnPart'>
                            <button type="button" className="btn btn-danger mx-2"  onClick={handleDeleteNewOrder}><MdDelete></MdDelete> Delete</button>
                        </article>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default AllOrdersDisplay;