import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import { registerVersion } from '@firebase/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Packages from './components/Packages/Packages';
import Order from './components/Order/Order';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Header from './components/Header/Header';
import AllOrders from './components/AllOrders/AllOrders';
// import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import NewService from './components/NewService/NewService';
import MyOrder from './components/MyOrder/MyOrder';
import Error from './components/Error/Error';
// import Health from './components/Health/Health';



function App() {
  return (
    <div className="App">
      <div className="App">
        <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/placeOrder">
                <PlaceOrder></PlaceOrder>
              </Route>
              <Route path="/order">
                <Order></Order>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute path="/packages">
                <Packages></Packages>
              </PrivateRoute>
              <PrivateRoute path="/allorders">
                <AllOrders></AllOrders>
              </PrivateRoute>
              <PrivateRoute path="/myorder">
                <MyOrder></MyOrder>
              </PrivateRoute>
              <PrivateRoute path="/newservice">
                <NewService></NewService>
              </PrivateRoute>
              <Route path="*">
                <Error></Error>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
