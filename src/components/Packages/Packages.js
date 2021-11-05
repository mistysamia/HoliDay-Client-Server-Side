import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Packages.css';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router';
import StarRatings from 'react-star-ratings';
import { packageDetailsBG } from '../../images/packageDetailsBG.jpg'


const Packages = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const location = useLocation();
  const history = useHistory();
    useEffect(() => {
        console.log(location.pathname);
        console.log(location.search);
        console.log(location.state);
    }, [location]);
    const onSubmit = data => {
        console.log(data)
    }
    const packages = location.state;

    const handleProceedToShipping = () => {
        history.push('/order', packages);
    }
    return (
        <div className='container'>
            <section className='packageShow'>
                <section className='eachPackageShow'>
                    <section className='packageShowImg'>
                        <section className='packageShowImgPart'>
                            <img src={packages.img} />
                        </section>
                    </section>
                    <section className='packageShowDetails'>
                        <h2>{packages.packagename} </h2>
                        <h6><span className='packageDay mx-1'>{packages.day}</span></h6>

                        <p className='text-start mt-3'>Locations : {packages.placename} </p>
                        <p className='text-start'>Package Cost : ${packages.price}</p>
                        <h5>Contact : </h5>
                        <div className='mx-4 contact'>
                            <p className='text-start'>Email: {packages.mail}</p>
                            <p className='text-start '>Phone :{packages.number}</p>
                        </div>
                        <p className='visitBtn mt-3'>   <a href={packages.location} target="_blank">See Locations</a></p>
                        <StarRatings

                            rating={packages.review}
                            starDimension="23px"
                            starSpacing="4px"
                            starEmptyColor='rgb(177, 173, 173)'
                            starRatedColor='rgb(252, 179, 23)'
                        />
                        <button className='btnSection my-3 mx-2' onClick={handleProceedToShipping}>Book Now</button>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default Packages;