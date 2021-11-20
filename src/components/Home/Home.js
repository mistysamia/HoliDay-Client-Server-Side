import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import TopPackage from '../TopPackage/TopPackage';
import Article from '../Article/Article';
import Contact from '../Contact/Contact';
import Review from '../Review/Review';
import homeBG from '../../images/homgBg.jpg'
import PackageDisplay from '../PackageDisplay/PackageDisplay';
import homeContact from '../../images/homeContact.jpg'
import Quotes from '../Quotes/Quotes';
import Footer from '../Footer/Footer';



const Home = () => {

    const [packages, setPackages] = useState([]);
    const [displayPackages, setDisplayPackages] = useState([]);
    

    useEffect(() => {
        fetch(`https://ancient-anchorage-65062.herokuapp.com/packages`)
            .then(res => res.json())
            .then(data => {
                setPackages(data.packages);
                setDisplayPackages(data.packages);
                console.log(data,"   ff ",data.packages);
            });
    }, []);



    return (
        <div>
            {/* Header Part Starts */}
            <section className='headBg'>
                <article className='headerTitle'>
                    <p className='headerTitleName mb-3'>Holiday</p>
                    <div className='headerTitleNameDetails'>
                        <p >Find, compare, and book sightseeing tours, attractions,
                        </p>
                        <p className='nextline'>
                            excursions, things to do and fun activities from around the world.
                        </p>
                    </div>
                </article>
                <img src={homeBG} />
            </section>
            {/* Header Part Ends */}

            <TopPackage></TopPackage>
            <Article></Article>



            {/* Package details Starts */}

            <section className='PackageTitle'>
                <p className='title'>Our Pricing Packages</p>
                <p className='titleDetails '>Prices are based on round trip travel and hotel stay per traveler
                </p>
            </section>
            <div className="container mb-5">
                <article className='packageDisplay'>
                    {
                        displayPackages.map(Package => <PackageDisplay
                            key={Package.key}
                            packages={Package}
                        >
                        </PackageDisplay>)
                    }
                </article>
            </div>
            {/* Package details Ends */}

            <Contact img={homeContact}></Contact>

            {/* Review Part Starts */}
            <section className='PackageTitle'>
                <p className='title'>Our Pricing Packages</p>
            </section>
            <Review></Review>
             {/* Review Part Ends */}


             <Quotes></Quotes>
         

           
        </div>
    );
};

export default Home;