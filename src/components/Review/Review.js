import React from 'react';
import reviewImg1 from '../../images/reviewImg1.jpg'
import reviewImg2 from '../../images/reviewImg2.jpg'
import reviewImg3 from '../../images/reviewImg3.jpg'
import './Review.css'

const Review = () => {
    return (
        <div>
            <section className='reviewSectionDisplay'>
                <section className='reviewSection'>
                    <section className='eachReviewSection'>
                        <div className="card eachReviewSectionCard" >
                            <img src={reviewImg1} className="card-img-top" alt="..." />
                            <div className="card-body mainReviewSection">
                                <h3>Tour Packages</h3>
                                <hr className='w-50' />
                                <div className='reviewShow'>
                                    <p className="card-text">Holidays Tours and Travels organize different regular package tours to all over the worls and inside Bangladesh for different group size.</p>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className='eachReviewSection'>
                        <div className="card eachReviewSectionCard" >
                            <img src={reviewImg2} className="card-img-top" alt="..." />
                            <div className="card-body mainReviewSection">
                                <h3>Helicopters Rental</h3>
                                <hr className='w-50' />
                                <div className='reviewShow'>
                                    <p className="card-text">Holidays Tours and Travels, the major player in the aviation industry with a wide range of helicopters.</p>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className='eachReviewSection'>
                        <div className="card eachReviewSectionCard" >
                            <img src={reviewImg3} className="card-img-top" alt="..." />
                            <div className="card-body mainReviewSection">
                                <h3>Hotel booking</h3>
                                <hr className='w-50' />
                                <div className='reviewShow'>
                                    <p className="card-text">With over hundreds of hotel partners around the globe and within Bangladesh and a comprehensive offering of flight.</p>
                                </div>

                            </div>
                        </div>
                    </section>
                </section>

            </section>
        </div>
    );
};

export default Review;