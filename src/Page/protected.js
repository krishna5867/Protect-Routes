import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const navigate = useNavigate();
    const {Component} = props

    useEffect(() => {
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
    });

    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected;