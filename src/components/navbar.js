import logo from "../media/logo.png"
import "../styles/navbar.css"
import React from 'react';
import { UserOutlined, ShoppingCartOutlined, HeartOutlined, HomeOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const Navbar = () => {
    return (
        <div className="Navbar">
            <img className="logo" src={logo} alt="logo"></img>
            <Input size="large" className="In_search" placeholder="I am Searching For" prefix={<UserOutlined />} />
           
            <div className="Icons">
                <span>
                <  ShoppingCartOutlined /></span>
                 <p className="Hello">
                Hello!
                My Account
            </p>
            <span><HeartOutlined /></span>
            <span><HomeOutlined /></span>
            </div>
        </div>
    )
}
export default Navbar;