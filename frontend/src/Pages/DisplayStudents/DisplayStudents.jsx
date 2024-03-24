import React, {useState,useEffect} from 'react'

import api from '../../api'

import StudentList from './StudentList'
import Footer from '../../components/Footer/Footer'
import MainHeader from '../../components/mainHeader/mainHeader'


import DisplayHeader from '../../components/DisplayHeader/DisplayHeader'

import "./DisplayStudents.css"

export default function DisplayStudents(){

    const[students, setStudents] = useState([])

    useEffect(()=>{
        
        const getStudents = async() =>{
            const studentList = await api.get("api/student")
            setStudents(studentList.data)
            console.log(studentList.data)
        }
        getStudents();
    }, [])

    return(
        <>
        <div className="contentWrapper">
            <DisplayHeader/>
            <MainHeader />

            <div className='studentList'>
                <StudentList studentList={students} />
            </div>
        </div>
        <Footer />
        
        </>
    )

}