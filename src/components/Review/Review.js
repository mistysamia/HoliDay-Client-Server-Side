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
                                <h3>Ki dibo</h3>
                                <hr className='w-50' />
                                <div className='reviewShow'>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className='eachReviewSection'>
                        <div className="card eachReviewSectionCard" >
                            <img src={reviewImg2} className="card-img-top" alt="..." />
                            <div className="card-body mainReviewSection">
                                <h3>Ki dibo</h3>
                                <hr className='w-50' />
                                <div className='reviewShow'>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className='eachReviewSection'>
                        <div className="card eachReviewSectionCard" >
                            <img src={reviewImg3} className="card-img-top" alt="..." />
                            <div className="card-body mainReviewSection">
                                <h3>Ki dibo</h3>
                                <hr className='w-50' />
                                <div className='reviewShow'>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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