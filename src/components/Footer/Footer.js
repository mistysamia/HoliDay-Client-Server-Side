import React from 'react';
import './Footer.css';
import footerImg from '../../images/footerImg.jpg'

const Footer = () => {
    return (
        <div>
            <section className='FooterPart'>
                <div className='container'>
                    <section className='row footerRow'>


                        <article className='col-6 col-md-3 col-sm-3 eachFootercol'>
                            <h2 className='text-start mb-4 '>About</h2>
                            <p className='text-start mb-5'>Rising cost of healthcare and medicines has become a global concern, and in order to reduce cost across the value chain, pharmaceutical companies from developed markets.</p>
                            <div className="input-group flex-nowrap">
                                <input type="text" className="form-control" placeholder="Please enter your e-mail" aria-label="Username" aria-describedby="addon-wrapping" />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </article>

                        <article className='col-6 col-md-3 col-sm-3 eachFootercol'>
                            <h2 className='text-start mb-4 '>How it Works</h2>
                            <p>• Pharmacy List</p>
                            <p>• Emergency</p>
                            <p>• Ambulance</p>
                            <p>• Medicines</p>
                        </article>

                        <article className='col-6 col-md-3 col-sm-3 eachFootercol'>
                            <h2 className='text-start mb-4 '>Contact</h2>
                            <p><a href="https://www.facebook.com/" target="_blank">Facebook</a></p>
                            <p><a href="https://mail.google.com/" target="_blank">Email</a></p>
                            <p><a target="_blank" href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a></p>
                        </article>

                        <article className='col-6 col-md-3 col-sm-3 eachFootercol'>
                            <section className='footerImgPart'>
                                <img src={footerImg} />
                            </section>
                        </article>

                    </section>
                    <section className="CopyRight ">
                        <h5>Copyright © 2021 Misty. All rights reserved</h5>
                    </section>
                </div>

            </section>
        </div>
    );
};

export default Footer;