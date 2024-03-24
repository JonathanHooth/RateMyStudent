import React from 'react'
import { Link } from 'react-router-dom'

import "./StudentList.css"

export default function StudentList({studentList}){


    return studentList.map((student, index) =>(
        <>
        <Link style={{ textDecoration: 'none' , color :"black" }} to={"/student/" + (index + 1)}>
        <div className='studentWrapper'>
        <div className='student-background'>
            
            <div className='studentGrade'>
                Grade Level : {student.grade_num}
            </div>
            <div className='student' key={index}>
                <div className='studentName'>
                    {student.first_name} {student.last_name}
                </div>
            </div>
        </div>
        </div>
        </Link>
        </>
    ))
}