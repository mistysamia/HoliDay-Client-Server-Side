import React from 'react';
import './Contact.css';

import footerImg from '../../images/footerImg.jpg'
const Contact = (props) => {
    return (
        <div>
            <section className='ContactPart'>
                <div className='container'>
                    <section className='row '>


                        <div className='col-12 col-sm-6 col-md-6'>
                            <article className=' ContactDetails'>
                                <h2 className='mb-3'><span>Holy</span> Day</h2>
                                <p>We are consistently building upon its portfolio and currently producing more than 500 products encompassing broad therapeutic categories and the Company has created strong differentiation by offering a range of high-tech, specialized products which are difficult to imitate.</p>
                                <h4 className='mt-5'>Contact Us</h4>
                                <div class="input-group mb-3 mt-4 mailUs">
                                    <input type="email" className="form-control" placeholder="Enter your mail" aria-label="Enter your mail" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-danger" type="button" id="button-addon2">Enter</button>
                                </div>
                            </article>
                        </div>


                        <article className='col-12 col-sm-6 col-md-6 eachFootercol'>
                            <div className='ContactImg'>
                                <img src={props.img} className='img-fluid' />
                            </div>
                        </article>

                    </section>

                </div>

            </section>
        </div>
    );
};

export default Contact;