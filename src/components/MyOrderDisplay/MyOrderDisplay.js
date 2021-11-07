import React from 'react';
import './MyOrderDisplay.css'
import useAuth from '../../hooks/useAuth';

const MyOrderDisplay = (props) => {

    const { email, address, number, country, city, img, packagename, price, zipcode } = props.myOrder;
    const { user, logOut } = useAuth();

    return (
        <div>
            {user.email == email &&
                <section className='eachMyOrderSection'>
                    <section className='eachMyOrder'>
                        <div className='bookingDetails'>
                            <p className='title'>Booking Details </p>
                            <p><strong>Address : </strong>{address}</p>
                            <p><strong>City : </strong>{city}</p>
                            <p><strong>Country : </strong>{country}</p>
                            <p><strong>Phone : </strong>{number}</p>
                        </div>
                        <div className='packageDetails'>
                            <p className='title'>Order Summary </p>
                            <div className='packageDetailsDisplay row'>
                                <article className='col-7 '>
                                    <div className='imgSection'>
                                        <img src={img} />
                                    </div>
                                    <p className='mt-2 packageName'>{packagename}</p>
                                </article>
                                <article className='col-5 paymentSection'>
                                    <h5 className='my-4'>Payment </h5>
                                    <p>Price : ${price[0]}</p>
                                    <p>Status : Paid</p>
                                </article>

                            </div>
                        </div>

                    </section>

                </section>

            }




        </div>
    );
};

export default MyOrderDisplay;