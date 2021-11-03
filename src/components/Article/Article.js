import React from 'react';
import './Article.css'
import articleImg1 from '../../images/articleImg1.jpg'
import articleImg2 from '../../images/articleImg2.jpg'
import { SiDpd } from "react-icons/si";
import { SiDeepnote } from "react-icons/si";

const Article = () => {
    return (
        <div className='article'>
            <section className='articleSection'>

                {/* Left Article Part Starts */}
                <article className='leftArticle'>
                    <section className='leftArticleSection'>
                        <article className='ArticleImg'>
                            <img src={articleImg1} />
                        </article>
                        <article className=' ArticleDetails'>
                            <div>
                                <div className='ArticleDetailsIcon'>
                                    <h3>  <SiDpd /> </h3>
                                </div>
                                <div className='title mt-4'>
                                    <p>Our Mission</p>
                                </div>
                                <div className='borderSection mb-4'></div>
                                <div>
                                    <p className='text-center'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                    </p>
                                </div>
                                <button className='btnSection mt-3'>Learn More</button>
                            </div>
                        </article>
                    </section>
                </article>
                {/* Left Article Part Ends */}

                {/* Right Article Part Starts */}
                <article className='rightArticle'>
                    <section className='rightArticleSection'>
                        <article className=' ArticleImg'>
                            <img src={articleImg2} />
                        </article>
                        <article className=' ArticleDetails'>
                            <div>
                                <div className='ArticleDetailsIcon'>
                                    <h3>  <SiDeepnote /> </h3>
                                </div>
                                <div className='title mt-4'>
                                    <p>Our History</p>
                                </div>
                                <div className='borderSection mb-4'></div>
                                <div>
                                    <p className='text-center'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                    </p>
                                </div>
                                <button className='btnSection mt-3'>Learn More</button>
                            </div>
                        </article>
                    </section>
                </article>

                {/* Right Article Part Ends */}

            </section>
        </div>
    );
};

export default Article;