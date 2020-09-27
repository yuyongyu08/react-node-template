import React from 'react';
import logo from '../../assets/imgs/logo.svg';


import './Loading.scss';

export default function (props) {
    return (
        <div className='loading'>
            <img src={logo} className="logo" alt="loading" />loading...
        </div>
    )
}