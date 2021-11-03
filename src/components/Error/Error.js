import React from 'react';
import './Error.css'
import error from '../../images/404.png'

const Error = () => {
    return (
        <div className='container '>
            <section className='errorSection'>
                <section className='errorImg'>
                    <img src={error} />
                    <section>
                        <p className='errorTitle mt-4'>Page Not Found</p>
                        <p className='errorDetails'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <button className='btnSection mt-2'>GO TO HOME</button>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default Error;