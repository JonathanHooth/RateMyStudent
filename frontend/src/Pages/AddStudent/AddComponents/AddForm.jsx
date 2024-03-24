import React, {useState} from "react"

import api from "../../../api"

import "./AddForm.css"

export default function AddForm(){
    const gradeLevels = ["Select Grade Level:", "9th", "10th", "11th", "12th"];
    const [inputFirst, setFirst] = useState('')
    const [inputLast, setLast] = useState('')
    const [inputGrade, setGrades] = useState()


    const handleFirst = texter =>{

        setFirst(texter.target.value);
    }
    const handleLast = texter =>{

        setLast(texter.target.value);
    }

    const handleGrade = texter =>{

        setGrades(texter.target.value);
    }
    

    const handleSubmit = async (texter)  =>{

        texter.preventDefault()

        console.log(inputFirst)
        console.log(inputLast)
        console.log(inputGrade)
        if(!inputFirst || /^\s*$/.test(inputFirst))
        {
                return;
        }
        if(!inputLast || /^\s*$/.test(inputLast))
        {
                return;
        }
        if(!inputGrade || /^\s*$/.test(inputGrade))
        {
                return;
        }

        let grade = 0

        if(inputGrade === "9th"){
            grade = 9
        }else if(inputGrade === "10th"){
            grade = 10;
        }else if(inputGrade === "11th"){
            grade = 11;

        }else if(inputGrade === "12th"){
            grade = 12;
        }
        let gradeLevel = grade
        //app.post("/api/student/{first}/{last}/{grade}")
        await api.post(`api/student/${inputFirst}/${inputLast}/${gradeLevel}`)

        setFirst('');
        setLast('');
        setGrades('');
    }

    return(
        <>
        <form className="addForm" onSubmit={handleSubmit}>
            <input type="text" 
                className="addFormInput"
                placeholder="Enter First Name"
                value={inputFirst}
                name='text'
                onChange={handleFirst}
            />
            <input type="text" 
                className="addFormInput"
                placeholder="Enter Last Name"
                value={inputLast}
                name='text'
                onChange={handleLast}
            />
            <select className="addFormSelect" value={inputGrade} onChange={(e) => setGrades(e.target.value)} required>
            {gradeLevels.map((gradeLvl, index) => (
                <option className = "addFormOption" key={index} value={gradeLvl}>{gradeLvl}</option>
            ))}
            </select>
        
            <button className="addFormButton">
                Save
            </button>
        </form>
        
        </>
    )
}