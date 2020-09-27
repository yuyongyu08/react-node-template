import React from 'react';

import Hello from './components/hello/Hello'
import Loading from '../../components/loading/Loading';

import './index.scss';

export default function (props) {
    return (
        <div className='index'> 
            <Hello></Hello>
            <Loading/>  
        </div>
    )
}