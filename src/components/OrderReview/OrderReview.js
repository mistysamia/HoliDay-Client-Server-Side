import React from 'react';
// import useLists from '../../hooks/useLists';
import useCart from '../../hooks/useCart';
// import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import { Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const OrderReview = () => {
    // const [lists] = useLists();
    const [cart, setCart] = useCart();
    const history = useHistory();

    const handleRemove = id => {
        const newCart = cart.filter(list => list.id !== id);
        setCart(newCart);
        removeFromDb(id);
    }

    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
        history.push('/placeorder');
    }

    return (

        <section>
            <Row>
                <Col sm={8}>
                    <article>
                        {
                            cart.map(list => <ReviewItem
                                key={list.id}
                                list={list}
                                handleRemove={handleRemove}
                            ></ReviewItem>)
                        }
                    </article>
                </Col>
                {/* <Col sm={4} className="cartPart">
                    <article>
                        <Cart cart={cart}>
                            <Button onClick={handlePlaceOrder} variant="primary">Confirm List</Button>
                        </Cart>
                    </article>
                </Col> */}
            </Row>
        </section>
    );
};

export default OrderReview;