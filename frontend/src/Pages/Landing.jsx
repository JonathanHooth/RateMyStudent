import React, {useState, useEffect} from 'react'
import DisplayHeaderBackground from '../components/DisplayHeader/DisplayHeaderBackground.jsx';
import MainHeader from '../components/mainHeader/mainHeader.jsx'
import Footer from '../components/Footer/Footer.jsx'
import SearchBar from '../components/Searchbar/Searchbar.jsx';
import "./Landing.css"

export default function Landing({search, setSearch}){
    return(
        <>
        <div className="land">
            <DisplayHeaderBackground className = "header"/>
            <MainHeader />  
            <div className="separatorTop"></div>

            
            <div className='lilWrap'>
            <div className="landingContainer">
                <h1 className="landingTitle">Welcome to RateMyStudent!</h1>
                <p className="landingDescription">Discover and rate amazing students!</p>
            </div>
            <div className="">
                <SearchBar />
            </div>    
            </div>
            
            <div className="separatorBot"></div>
              
            <Footer />
            
        </div>
        </>
    )
}