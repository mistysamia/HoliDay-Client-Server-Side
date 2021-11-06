import React from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router';
import { packageDetailsBG } from '../../images/packageDetailsBG.jpg'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './NewService.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';


const NewService = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const [showModal, setShow] = useState(false);
    const history = useHistory();

    let setModal = false;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(setModal);




    const [packagename, setPackagename] = useState([]);
    const handlePackage = event => {
        const packagenameSet = event.target.value;
        setPackagename(packagenameSet);
    }
    const [placaname, setPlacaname] = useState([]);
    const handlePlace = event => {
        const placanemSet = event.target.value;
        setPlacaname(placanemSet);
    }
    const [day, setDay] = useState([]);
    const handleDay = event => {
        const daySet = event.target.value;
        setDay(daySet);
    }
    const [price, setPrice] = useState([]);
    const handlePrice = event => {
        const priceSet = event.target.value;
        setPrice(priceSet);
    }
    const [review, setReview] = useState([]);
    const handleReview = event => {
        const ReviewSet = event.target.value;
        setReview(ReviewSet);
    }
    const [image, setImage] = useState([]);
    const handleImage = event => {
        const imageSet = event.target.value;
        setImage(imageSet);
    }
    const [number, setNumber] = useState([]);
    const handleNumber = event => {
        const numberSet = event.target.value;
        setNumber(numberSet);
    }
    const [email, setEmail] = useState([]);
    const handleEmail = event => {
        const emailSet = event.target.value;
        setEmail(emailSet);
    }
    const [location, setLocation] = useState([]);
    const handleLocation = event => {
        const locationSet = event.target.value;
        setLocation(locationSet);
    }

    const onSubmit = data => {
        var reviewStar = parseFloat(review);
        data.packagename = packagename;
        data.mail = email;
        data.img = image;
        data.location = location;
        data.price = price;
        data.number = number;
        data.day = day;
        data.review = reviewStar;
        data.placaname = placaname;



        console.log(data);
        fetch(`https://spooky-spell-89697.herokuapp.com/addnewpackage`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setShow(true);
                     reset();
                }
            })
    };
    return (
        <div>
            <section className='placeOrderShow'>

                <section className='eachPlaceOrderShow '>
                    <section className='placeOrderDetails '>

                        <form className="row g-3 mt-5 placeOrderForm needs-validation" onSubmit={handleSubmit(onSubmit)}>
                            <div className='PlaceOrderTitle mt-3 mb-5 text-center'>
                                <h2>Add a New <span className='title'>Tour Package</span></h2>
                            </div>
                            <div className="col-7">
                                <label>Package Name :</label>
                                <input type="text" className="form-control" placeholder="Packagename..." required onChange={handlePackage} />
                            </div>
                            <div className="col-5 days">
                                <label>Days And Night :</label>
                                <input type="text" className="form-control" placeholder="Days and nights..." required onChange={handleDay} />
                            </div>

                            <div className="col-12">
                                <label>Place Name :</label>
                                <input type="text" className="form-control" placeholder="Placename..." required onChange={handlePlace} />
                            </div>
                            <div className="col-md-4">
                                <label>Package Price :</label>
                                <input type="tel" className="form-control" id="inputNumber" placeholder="Package Price..." required onChange={handlePrice} />
                            </div>
                            <div className="col-md-4">
                                <label>Review :</label>
                                <input type="text" className="form-control" id="inputNumber" placeholder="Review..." required onChange={handleReview} />
                            </div>
                            <div className="col-md-12">
                                <label>Image :</label>
                                <input type="text" className="form-control" id="inputImage" placeholder="Image..."   required onChange={handleImage} />
                            </div>


                            <div className="col-md-4">
                                <label>Contact Number : </label>
                                <input type="tel" className="form-control" id="inputNumber" placeholder="Contact Number..." required onChange={handleNumber} />
                            </div>
                            <div className="col-md-4">
                                <label>Email :</label>
                                <input type="email" className="form-control" id="inputNumber" placeholder="Email..." required onChange={handleEmail} />
                            </div>
                            <div className="col-md-12">
                                <label>Location Link :</label>
                                <input type="text" className="form-control" id="inputImage" placeholder="Location Link..." required onChange={handleLocation} />
                            </div>



                            <div >
                                <button className='btnSection my-3 mx-2' type="submit" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop" data-bs-target="#exampleModal" onClick={handleShow}>Submit</button>
                                <Modal
                                    show={showModal}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        New Tour Package Added!
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" >Okay</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </form>

                    </section>


                </section>


            </section>
        </div>
    );
};

export default NewService;