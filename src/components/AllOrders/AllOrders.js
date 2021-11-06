import React from 'react';
import allOrderImg1 from '../../images/allOrderImg1.jpg'
import allOrderImg2 from '../../images/allOrderImg2.jpg'
import allOrderImg3 from '../../images/allOrderImg3.jpg'
import OrderRequest from '../OrderRequest/OrderRequest';
import { useEffect, useState } from 'react';
import './AllOrders.css'

const AllOrders = () => {


    const [packageRequest, setPackageRequest] = useState([]);
    const [displayRequest, setDisplayRequest] = useState([]);
    

    useEffect(() => {
        fetch(`https://spooky-spell-89697.herokuapp.com/orderrequest`)
            .then(res => res.json())
            .then(data => {
             
                setPackageRequest(data.orderrequest);
                setDisplayRequest(data.orderrequest);
               
            });
    }, []);



    return (
        <div>
            {/* Header Part Starts */}
            <section id="carouselExampleIndicators" className='carousel slide' data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active carouselImg">
                        <img src={allOrderImg1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carouselImg">
                        <img src={allOrderImg2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carouselImg">
                        <img src={allOrderImg3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </section>
            {/* Header Part Ends */}

            
            <div className="container mb-5 newOrderReq">
            <h1 className='newOrdersTitle'>New Orders </h1>
                <article className=''>
                    {
                        displayRequest.map(request => <OrderRequest
                            key={request.key}
                            request={request}
                          
                        >
                        </OrderRequest>)
                    }
                </article>
            </div>
         
        </div>
    );
};

export default AllOrders;