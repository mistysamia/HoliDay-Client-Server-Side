import React from 'react';
import './OrderRequest.css';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";


const OrderRequest = (props) => {

    const { name, email, number, address } = props.request;
    const { packagename } = props.request.package;

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
                            <p><strong>Address : </strong>{address}</p>
                            <p><strong>Booking Date : </strong>{address}</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-3 btnSection'>

                        <div className='d-flex  '>
                            <button type="button" class="btn btn-success"><AiOutlinePlus></AiOutlinePlus> Add</button>
                            <button type="button" class="btn btn-danger mx-2"><MdDelete></MdDelete> Delete</button>
                        </div>
                    </div>
                </article>


            </section>

        </div>
    );
};
export default OrderRequest;