import React, {useEffect, useState} from "react";
import api from "./api"


export default function FrontPage(){

    const [students , setStudent] = useState([])

    useEffect(()=>{
        const getStudents = async () =>{

            const studentList = await api.get('/api/student');
            console.log("read in")
            console.log(studentList);
            //console.log(todoList.data);
            setStudent(studentList.data)

        }
        getStudents();
    }, [])

    return(
        <>
        <div>
            Hello
        </div>
        </>
    )
}