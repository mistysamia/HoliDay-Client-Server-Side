import React from 'react';
import DeliveryUpdate from '../DeliveryUpdate/DeliveryUpdate';
import MyOrderDisplay from '../MyOrderDisplay/MyOrderDisplay';
import './MyOrder.css'
import { useEffect, useState } from 'react';


const MyOrder = () => {

    const [myOrder, setmyOrder] = useState([]);

    useEffect(() => {
        fetch(`https://spooky-spell-89697.herokuapp.com/allorderdisplay`)
            .then(res => res.json())
            .then(data => {
                setmyOrder(data.allOrderDisplay);
                console.log(data ," now ",data.allOrderDisplay);
            });
    }, []);

    return (
        <div>
            <section className='myOrder'>
                <DeliveryUpdate></DeliveryUpdate>
                <article >
                    {
                        myOrder.map(myOrder => <MyOrderDisplay
                            key={myOrder.key}
                            myOrder={myOrder}
                        >
                        </MyOrderDisplay>)
                    }
                </article>


            </section>

        </div>
    );
};

export default MyOrder;