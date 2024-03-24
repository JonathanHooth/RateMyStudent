import React from "react";
import AddReviewForm from "./AddReviewForm/AddReviewForm";
import MainHeader from "../../components/mainHeader/mainHeader";
import Footer from "../../components/Footer/Footer";
import DisplayHeaderBackground from '../../components/DisplayHeader/DisplayHeaderBackground';
import "./AddReview.css";

export default function AddReview(props) {

    let id = props.student
    return (
        <div className="content-wrapper">
            <DisplayHeaderBackground />
            <MainHeader />
            <div className="title">
                Add Review
            </div>
            <AddReviewForm studentID = {id}/>
            <Footer />
        </div>
    );
}
