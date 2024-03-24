import React from 'react'
import {Link} from 'react-router-dom'
import dinoTxt from '../../resources/dinoboi.png';
import SearchBar from '../Searchbar/Searchbar';
import './DisplayHeader.css';
import MainHeader from '../mainHeader/mainHeader';

export default function DisplayHeader ({ search, setSearch }) {
  return (
    <header className="header">
        <img src={dinoTxt} className = "logoTxt" alt="Logo"/>
        <div className = "searchTop">
          <SearchBar
            search={search}
            setSearch={setSearch}
        />
        </div>
        
    </header>
  );
}
