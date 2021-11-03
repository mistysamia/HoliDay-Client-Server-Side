import React from 'react';
import '../Choose/Choose.css'
import chooseImg from '../../images/chooseImg.jpg'
import { BsColumnsGap } from "react-icons/bs";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { BsAsterisk } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";
import { BsLayers } from "react-icons/bs";
import { BsBoundingBox } from "react-icons/bs";

const Choose = () => {
    return (
        <div>
            <section className='chooseSection'>
                <article className='chooseSectionImg'>
                    <img src={chooseImg} />
                </article>
                <article className='chooseSectionDetails'>
                    <p className='title'>Your Benefits</p>
                    <h1>Why Choose Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <div className='listSection'>
                        <article className='eachList'>
                            <div className='iconSection'>
                                <h3>  <BsFillDiagram3Fill /> </h3>
                            </div>
                            <div className='detailsSection'>
                                <p className='title'>Creative Space</p>
                                <p className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </article>

                        <article className='eachList'>
                            <div className='iconSection'>
                                <h3>  <BsAsterisk /> </h3>
                            </div>
                            <div className='detailsSection'>
                                <p className='title'>24/7 Access</p>
                                <p className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </article>
                        <article className='eachList'>
                            <div className='iconSection'>
                                <h3>  <BsColumnsGap /> </h3>
                            </div>
                            <div className='detailsSection'>
                                <p className='title'>High Speed Wifi</p>
                                <p className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </article>
                        <article className='eachList'>
                            <div className='iconSection'>
                                <h3>  <BsFullscreenExit /> </h3>
                            </div>
                            <div className='detailsSection'>
                                <p className='title'>Great Location</p>
                                <p className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </article>
                        <article className='eachList'>
                            <div className='iconSection'>
                                <h3>  <BsLayers /> </h3>
                            </div>
                            <div className='detailsSection'>
                                <p className='title'>Car Sharing</p>
                                <p className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </article>
                        <article className='eachList'>
                            <div className='iconSection'>
                                <h3>  <BsBoundingBox /> </h3>
                            </div>
                            <div className='detailsSection'>
                                <p className='title'>Weekly Events</p>
                                <p className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </article>
                    </div>
                </article>

            </section>
        </div>
    );
};

export default Choose;