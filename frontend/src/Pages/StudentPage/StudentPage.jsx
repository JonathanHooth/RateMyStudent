import React, {useState, useEffect} from 'react'
import {Link, Route} from 'react-router-dom'

import api from '../../api'
import StudentReviews from './StudentReviews'
import MainHeader from '../../components/mainHeader/mainHeader'
import DisplayHeader from '../../components/DisplayHeader/DisplayHeaderBackground'

import "./StudentPage.css"

import Star from "./star.png"

export default function StudentPage(props){

    const[reviews, setReviews] = useState([])
    const[student, setStudent] = useState('')

    const[average, setAverage] = useState('')

    const[counter, setCounter] = useState(0)

    const urlid = Number(props.student)
    let addURL = "/addReview" + urlid

    useEffect(()=>{
        
        const getReviews = async () =>{
            //console.log(props.student)
            const id = Number(props.student)
            console.log(id)
            const reviewList = await api.get(`api/student/review/${id}`)
            

            setReviews(reviewList.data)
            console.log(reviews)
        }
        getReviews();
        const getStudent = async()=>{
            const id = Number(props.student)
            const studentObj = await api.get(`api/student/${id}`)
            setStudent(studentObj.data)
            console.log(student)
        }
        getStudent();
        const calculateAverage = () =>{

            let avg = 0;
            let size = 1;

            if(reviews.length !== 0)
            {
                size = reviews.length
            }

            for (let i = 0; i < reviews.length; i++) {
                avg += Number(reviews[i].review_rating)
            }
            let av = avg;

            console.log(av)

            av = av / size
            setAverage(av)
        }
        calculateAverage();
    },[])

    const handleClick = async () =>{

        await api.delete(`/api/student/${urlid}`)
        console.log("deleted")
    }

    return(
        <>
        <DisplayHeader/>
        <MainHeader />
        <div className='studentInfo'>
            <div className='image'>
            <img src={Star} className = "logoTxt" alt="Logo"/>
            </div>
            <div>
            <div className='average'>
                Overall Average: {average}
            </div>
            <div className='studentNamePage'>
                {student.first_name} {student.last_name}
            </div>
            </div>
            <div>
            <Link to={"/addReview/" + student.id} style={{ textDecoration: 'none' , color :"black" }}>
                <button className = "sButton">
                    Add Review
                </button>
            </Link>
            <div>
                <Link to={"/displayStudents"} style={{ textDecoration: 'none' , color :"black" }}>
                    <button className = "sButton">
                        All students
                    </button>
                </Link>
            </div>
            <div onClick={handleClick} className='align'>
                <Link to={"/displayStudents"} style={{ textDecoration: 'none' , color :"black" }}>
                    <button className = "sButton">
                        Delete Student
                    </button>
                </Link>
            </div>
            </div>
        </div>
        <div className='reviewList'>
        <StudentReviews reviewList={reviews} />
            
        </div>
        </>
    )
}