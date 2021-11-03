import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Pharmacy.css';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router';
import StarRatings from 'react-star-ratings';


const Pharmacy = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
        console.log(location.search);
        console.log(location.state);
    }, [location]);
    const onSubmit = data => {
        console.log(data)
    }
    const pharmacy = location.state;

    return (
        <div className='container'>
            <section className='pharmacyShow'>
                <section className='pharmacyShowImg'>
                    <section className='pharmacyShowImgPart'>
                        <img src={pharmacy.img} />
                    </section>
                </section>


                <h2 className='pharmacyShowName mt-4'>{pharmacy.name}</h2>
                <h5>Main Branch : {pharmacy.mainShopLocation}</h5>
                <h5>Rank : {pharmacy.rank}</h5>

                <h5 className='mb-3'>Total Shop : {pharmacy.totalShop}</h5>
                <StarRatings

                    rating={pharmacy.star}
                    starDimension="23px"
                    starSpacing="4px"
                    starEmptyColor='rgb(177, 173, 173)'
                    starRatedColor='rgb(252, 179, 23)'
                />
                <br />
                <p className='visitBtn mt-3'>   <a href={pharmacy.url}>Visit For More</a></p>
            </section>
        </div>
    );
};

export default Pharmacy;