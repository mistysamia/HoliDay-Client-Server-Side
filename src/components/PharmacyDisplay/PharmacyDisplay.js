import React from 'react';
import { faShoppingCart, fastar } from '@fortawesome/free-solid-svg-icons';
import './PharmacyDisplay.css';
import StarRatings from 'react-star-ratings';
import { useHistory } from 'react-router';

const Product = (props) => {
    // console.log(props);
    const { name, img, star, mainShopLocation, url ,rank,key} = props.pharmacy;
    // const { packagename} = props.pharmacy;
    const history = useHistory();

    const handleProceedToShipping = () => {
        history.push('/pharmacy',props.pharmacy);
    }

    return (

        <div class="col-12  col-sm-6 col-md-4">
            <section className='PharmacyCard'>
                <section className='pharmacyImg'>
                    <img src={img} />
                </section>
                <article>
                    {/* <h4>{packagename}</h4> */}

                     <p>Location : {mainShopLocation}</p>
                    <StarRatings
                    
                        rating={star}
                        starDimension="23px"
                        starSpacing="4px"
                        starEmptyColor='rgb(177, 173, 173)'
                        starRatedColor='rgb(252, 179, 23)'
                    />
                    <br/>
              
                    <button
                        onClick={handleProceedToShipping} 
                        className="btn btn-success mt-3" 
                    > See Details</button> 

                </article>
            </section>

        </div>


    );
};

export default Product;