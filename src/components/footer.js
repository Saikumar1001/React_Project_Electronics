import brand1 from "../media/brand1.png"
import brand2 from "../media/brand2.png"
import brand3 from "../media/brand3.png"
import brand4 from "../media/brand4.png"
import brand5 from "../media/brand5.png"
import { Input } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import "../styles/footer.css"
import logo from "../media/logo2.png"
import payment from "../media/payment-icon.png"

const Footer = () => {
    return (
        <div className="FooterContainer">
            <div>
                <br/>
                <hr/>
                <h1 className="top">Top Brands</h1>
                <hr />
                <div className="brands">
                    <img src={brand1}></img>
                    <img src={brand2}></img>
                    <img src={brand3}></img>
                    <img src={brand4}></img>
                    <img src={brand5}></img>
                </div>
            </div>
            <div className="Signup">
                <span>Sign Up</span>
                <span>Receive Coupon</span>
                <Input size="large" className="In_search" placeholder="Enter Your Email Address" prefix={<UserOutlined />} />
            </div>
            <div className="Foots">
                <ul>
                    <img className="logo" src={logo} alt="logo"></img>
                    <li>123 Street Name, City, England</li>
                    <li>mail@example.com</li>
                    <li>Toll Free (123) 456-7890</li>
                </ul>
                <ul>
                    <h1>Account</h1>
                    <li>My Account</li>
                    <li>Track Your Order</li>
                    <li>Payment Methods</li>
                    <li>Product Support</li>
                </ul>
                <ul>
                    <h1>About</h1>
                    <li>About Porto</li>
                    <li>Our Guarantees</li>
                    <li>Terms And Conditions</li>
                    <li>Intellectual Property Claims</li>
                    <li>Site Map</li>
                    <li>Privacy policy</li>
                    <li>Return Policy</li>
                </ul>
                <ul>
                    <h1>Features</h1>
                    <li>Super Fast REACT Template</li>
                    <li>Mobile & Retina Optimized</li>
                    <li>Powerful Admin Panel</li>
                    <li>1st Fully working Ajax Theme</li>
                    <li>40 Unique Shop Layouts</li>
                </ul>
            </div>
            <hr/>
            <div className="Footend">
                <p>© Porto eCommerce. 2021. All Rights Reserved</p>
                <img src={payment}></img>
            </div>
        </div>
    )
}
export default Footer