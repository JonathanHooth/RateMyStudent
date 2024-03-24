import React from 'react';
import AddForm from './AddComponents/AddForm';
import MainHeader from '../../components/mainHeader/mainHeader';
import DisplayHeaderBackground from '../../components/DisplayHeader/DisplayHeaderBackground';
import Footer from '../../components/Footer/Footer';
import "./AddStudent.css";

export default function AddStudent() {
    return (
        <div className="content-wrapper">
            <DisplayHeaderBackground />
            <MainHeader />
            <div className="title">
                Add Student
            </div>
            <AddForm />
            <Footer />
        </div>
    );
}
