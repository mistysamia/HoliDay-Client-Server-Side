import React from 'react';
import { faShoppingCart, fastar } from '@fortawesome/free-solid-svg-icons';
import './PackageDisplay.css';
import StarRatings from 'react-star-ratings';
import { useHistory } from 'react-router';
import { SiVerizon } from "react-icons/si";
import { Link } from 'react-router-dom';

const PackageDisplay = (props) => {
    const { img, packagename, price, placename, day, review } = props.packages;

    const history = useHistory();

    const handleToShowDetails = () => {
        history.push('/packages', props.packages);
    }

    const handleProceedToShipping = () => {
        history.push('/order', props.packages);
    }
    return (
        <div>
            <section className='eachPackage'>
                <section className='eachPackageDisplay'>
                    <div className='eachPackageImg'>
                        <img src={img} />
                    </div>
                    <div className='eachPackageDisplayDetails'>
                        <h1>${price}</h1>
                        <div>
                            <button className='btnSectionDetails my-3 mx-2' onClick={handleToShowDetails} >See Details</button>

                            <button className='btnSection my-3' onClick={handleProceedToShipping}>Book Now</button>
                        </div>


                        <h5 className='text-start mb-3'>  {packagename}</h5>
                        <p className='text-start placename'><SiVerizon /> {placename}</p>
                        <p className='text-start'><SiVerizon /> {day}</p>
                        <div className='starReview'>
                            <StarRatings
                                rating={review}
                                starDimension="23px"
                                starSpacing="4px"
                                starEmptyColor='rgb(177, 173, 173)'
                                starRatedColor='rgb(252, 179, 23)'
                            />
                        </div>
                    </div>
                </section>
            </section>
        </div >
    );
};

export default PackageDisplay;