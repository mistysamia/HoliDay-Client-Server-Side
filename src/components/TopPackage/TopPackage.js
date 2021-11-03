import React from 'react';
import './TopPackage.css';
import { SiAirplayaudio } from "react-icons/si";
import { SiApacheflink } from "react-icons/si";
import { SiAzurefunctions } from "react-icons/si";


const TopPackage = () => {
    return (
        <div>
            <section className='topPackage'>
                <article className='eachTopPackage'>
                    <div className='packageDetails'>
                            <div className='packageDetailsIcon'>
                                <h3>  <SiAirplayaudio /> </h3>
                                <h2>Name</h2>
                                <hr className='w-50 ' />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                    </div>
                </article>
                <article className='eachTopPackage'>
                    <div className='packageDetails'>
                    <div className='packageDetailsIcon'>
                                <h3>  <SiApacheflink /> </h3>
                                <h2>Name</h2>
                                <hr className='w-50 ' />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                    </div>
                </article>
                <article className='eachTopPackage'>
                    <div className='packageDetails'>
                    <div className='packageDetailsIcon'>
                                <h3>  <SiAzurefunctions /> </h3>
                                <h2>Name</h2>
                                <hr className='w-50 ' />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default TopPackage;