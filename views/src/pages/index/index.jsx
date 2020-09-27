import React, { useState, useEffect } from 'react';
import Hello from './components/hello/Hello'
import Loading from '../../components/loading/Loading';
import fetch from '../../utils/fetch'

import './index.scss';

export default function (props) {
    let [userList, setUserList] = useState([]);
    useEffect(() => {
        fetch('/api/features').then(res => {
            setTimeout(() => setUserList(res.data && res.data.features), 2000)
        })
    }, [])

    return (
        <div className='index'>
            <Hello />
            {
                userList.length > 0 ? (
                    <>
                        <div>other features: </div>
                        <ul>
                            {
                                userList.map((user, index) => <li key={index}>{user}</li>)
                            }
                        </ul>
                    </>
                ) : <Loading />
            }
        </div>
    )
}