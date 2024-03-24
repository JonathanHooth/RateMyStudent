import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./mainHeader.css"

export default function MainHeader(){
    return(
        <>
        <div className="mainHeader">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button className="topButton">
                    Home
                </button>
            </Link>
            <Link to="/displayStudents" style={{ textDecoration: 'none' }}>
                <button className="topButton">
                    Display Reviews
                </button>
            </Link>
            <div className=''>
            <Link to="/addStudent" style={{ textDecoration: 'none' }}>
                <button className="topButton" >
                    Add Student
                </button>
            </Link>
            </div>
        </div>
        </>
    )
}