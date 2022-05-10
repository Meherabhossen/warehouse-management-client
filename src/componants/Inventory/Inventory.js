import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import image1 from '../Images/img-1.jfif'
import image2 from '../Images/img-2.jfif'
import image3 from '../Images/img-3.jfif'
import image4 from '../Images/img-4.jfif'
import image5 from '../Images/img-5.jfif'
import image6 from '../Images/img-6.jfif'
import './Inventory.css'

const Inventory = () => {
    const navigateProductDetails = event => {
        Navigate('/productdetails')
    }
    const navigate = useNavigate();
    const ManageInventory = () => {
        navigate('/manageinventory')
    }
    return (
        <div className='container'>
            <h2 className='title'>Inventory-Items</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 ms-5 me-5">
                <div class="col">
                    <div class="card">
                        <img src={image1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">RC Monstar Track</h5>
                            <p class="discription">It has turbo charge motor and 6000mh battery</p>
                            <p class="quantity">Quantity:4</p>
                            <p class="suppliar">Supplier : MH toys</p>
                            <p class="price">Price : $ 4000</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">Teddy Bear</h5>
                            <p class="discription">Super soft teddy bear with best wool.</p>
                            <p class="quantity">Quantity:2</p>
                            <p class="suppliar">Supplier :Gk group</p>
                            <p class="price">Price : $ 1000</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">Lego Ship</h5>
                            <p class="discription">This is Lego ship, it help children to think sharply.</p>
                            <p class="quantity">Quantity:3</p>
                            <p class="suppliar">Supplier : AR group</p>
                            <p class="price">Price : $ 1500</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">RC Jeep</h5>
                            <p class="discription">Super fast double motor rc jeep. It has 2 turbo motor</p>
                            <p class="quantity">Quantity:5</p>
                            <p class="suppliar">Supplier : MH Toys</p>
                            <p class="price">Price : $ 4000</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">RC Fighter Jet</h5>
                            <p class="discription">Rc fighter jet it has 2 dual charged engine it can fly 20 meters.</p>
                            <p class="quantity">Quantity:9</p>
                            <p class="suppliar">Supplier : MH Toys</p>
                            <p class="price">Price : $ 8000</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">RC Robot</h5>
                            <p class="discription">This is Rc robot it has one speaker and 4 motors and 4000mh battery</p>
                            <p class="quantity">Quantity:5</p>
                            <p class="suppliar">Supplier : MH toys</p>
                            <p class="price">Price : $ 5000</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Button onClick={ManageInventory} className='Manage-Inventory-btn-1'>Manage-Inventories</Button>
        </div >
    );
};

export default Inventory;