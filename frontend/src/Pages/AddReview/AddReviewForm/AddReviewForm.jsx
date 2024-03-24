import React, {useState} from "react"

import api from "../../../api"

import "./AddReviewForm.css"

export default function AddReviewForm({studentID}){

    const subjects = ["Select:", "Math", "Science", "History", "English", "Writing", "Other"];
    const ratings = ["Select:", 5, 4, 3, 2, 1];
    const classGrades = ["Select:", "A+", "A", "A-", "B+", "B", "B-","C+", "C", "C-","D+", "D", "D-","F"];

    let id = studentID

    //@app.post("/api/student/{id}/{review_dec}/{review_rate}/{review_sub}/{method}/{work}/{exam}/{behavoir}/{participation}/{grade}/{teacher}")
    const [inputDescription, setInputDescription] = useState('')
    const [inputRating, setInputRating] = useState('')
    const [inputSubject, setInputSubject] = useState('')
    const [inputWorkMethod, setInputWorkMethod] = useState('')
    const [inputExam, setInputExam] = useState('')
    const [inputTeamwork, setInputTeamwork]  = useState('')
    const [inputBehavior, setInputBehavior] = useState('')
    const [inputParticipation, setInputParticipation] = useState('')
    const [inputGrade, setInputGrade] = useState('')
    const [inputTeacher, setInputTeacher] = useState('')

    const handleDescription = (texter) =>{

        setInputDescription(texter.target.value)
    }

    const handleRating = (texter) =>{

        setInputRating(texter.target.value)
    }

    const handleSubject = (texter) =>{

        setInputSubject(texter.target.value)
    }
    
    const handleWorkMethod = (texter) =>{

        setInputWorkMethod(texter.target.value)
    }
    const handleExam = (texter) =>{

        setInputExam(texter.target.value)
    }
    
    const handleTeamwork = (texter) =>{

        setInputTeamwork(texter.target.value)
    }
    const handleBehaviors = (texter) =>{

        setInputBehavior(texter.target.value)
    }
    
    const handleParticipation = (texter) =>{

        setInputParticipation(texter.target.value)
    }
    const handleGrade = (texter) =>{

        setInputGrade(texter.target.value)
    }
    
    const handleTeacher = (texter) =>{

        setInputTeacher(texter.target.value)
    }


    const handleSubmit = async (texter) =>{

        texter.preventDefault()

        console.log(inputDescription)
        console.log(inputRating)
        console.log(inputSubject)
        console.log(inputWorkMethod)
        console.log(inputExam)
        console.log(inputTeamwork)
        console.log(inputBehavior)
        console.log(inputParticipation)
        console.log(inputGrade)
        console.log(inputTeacher)

        if(!inputDescription || /^\s*$/.test(inputDescription))
        {
                return;
        }
        if(!inputRating || /^\s*$/.test(inputRating))
        {
                return;
        }
        if(!inputSubject || /^\s*$/.test(inputSubject))
        {
                return;
        }
        if(!inputWorkMethod || /^\s*$/.test(inputWorkMethod))
        {
                return;
        }
        if(!inputExam || /^\s*$/.test(inputExam))
        {
                return;
        }
        if(!inputTeamwork || /^\s*$/.test(inputTeamwork))
        {
                return;
        }

        if(!inputBehavior || /^\s*$/.test(inputBehavior))
        {
                return;
        }
        if(!inputParticipation || /^\s*$/.test(inputParticipation))
        {
                return;
        }
        if(!inputGrade || /^\s*$/.test(inputGrade))
        {
                return;
        }

        if(!inputTeacher || /^\s*$/.test(inputTeacher))
        {
                return;
        }
        
        await api.post(`api/student/${id}/${inputDescription}/${inputRating}/${inputSubject}/${inputWorkMethod}/${inputTeamwork}/${inputExam}/${inputBehavior}/${inputParticipation}/${inputGrade}/${inputTeacher}`)
    
        setInputDescription('')
        setInputRating('')
        setInputSubject('')
        setInputWorkMethod('')
        setInputExam('')
        setInputTeamwork('')
        setInputBehavior('')
        setInputParticipation('')
        setInputGrade('')
        setInputTeacher('')
    }


    return(
        <>
        <div className="box">
        <div className="container">
            <form name="addReview" className='addRevForm' onSubmit={handleSubmit}>
            <div className="col-25">
                <label className='addRevFormLabel'>Teacher Name:</label>
            </div>  
            <div className="col-75">
                <input type="text" 
                className="addRevFormInput"
                placeholder=""
                value={inputTeacher}
                name='text'
                onChange={handleTeacher}
                />
            </div>
                
            

                <br/>

                <div className="col-25">
                    <label className='addRevFormLabel'>Class Grade: </label>
                </div>
                <div className="col-75">
                    <select id = "classGrades" className = "addRevFormSelect" value={inputGrade} onChange={handleGrade}>
                    {classGrades.map((cGrade, index) => (
                        <option className='addRevFormOption' key={index} value={cGrade}>{cGrade}</option>
                    ))}
                    </select>
                </div>
                <br/>
                
                <div className="col-25">
                    <label className='addRevFormLabel'>Class Subject: </label>
                </div>
                <div className="col-75">
                    <select id ="Subject" className='addRevFormSelect' value={inputSubject} onChange={handleSubject}>
                    {subjects.map((subj, index) => (
                        <option className='addRevFormOption' key={index} value={subj}>{subj}</option>
                    ))}
                    </select>
                </div>
                

                <br/>
                
                <div className="col-25">
                    <label className='addRevFormLabel'>Class Rating: </label>
                </div>
                <div className="col-75">
                    <select id="rating" className='addRevFormSelect' value={inputRating} onChange={handleRating}>
                    {ratings.map((subj, index) => (
                        <option className='addRevFormOption' key={index} value={subj}>{subj}</option>
                    ))}
                    </select>
                </div>
                

                <br/>
                
                <div className="col-25">
                    <label className='addRevFormLabel'>Exam Proficiency: </label>
                </div>
                <div className="col-75">
                    <select id="Exam" className='addRevFormSelect' value={inputExam} onChange={handleExam}>
                    {ratings.map((rate, index) => (
                        <option className='addRevFormOption' key={index} value={rate}>{rate}</option>
                    ))}
                    </select>
                </div>
                

                <br />

                <div className="col-25">
                    <label className='addRevFormLabel'>Collaboration Level: </label>
                </div>
                <div className="col-75">
                    <select id="Collaboration" className='addRevFormSelect' value={inputTeamwork} onChange={handleTeamwork}>
                    {ratings.map((rate, index) => (
                        <option className='addRevFormOption' key={index} value={rate}>{rate}</option>
                    ))}
                    </select>
                </div>
                

                <br />
                
                <div className="col-25">
                    <label className='addRevFormLabel'>Class Participation Level:  </label>
                </div>
                <div className="col-75">
                    <select id="participate" className='addRevFormSelect' value={inputParticipation} onChange={handleParticipation}>
                    {ratings.map((rate, index) => (
                        <option className='addRevFormOption' key={index} value={rate}>{rate}</option>
                    ))}
                    </select>
                </div>
               

                <br />
                
                <div className="col-25">
                    <label className='addRevFormLabel'>Behavior in Class: </label>
                </div>
                <div className="col-75">
                    <select id="Behave" className='addRevFormSelect' value={inputBehavior} onChange={handleBehaviors}>
                    {ratings.map((rate, index) => (
                        <option className='addRevFormOption' key={index} value={rate}>{rate}</option>
                    ))}
                    </select>
                </div>
                

                <br />
                
                <div className="col-25">
                    <label className='addRevFormLabel'>Study Method: </label>
                </div>
                <div className="col-75">
                    <input
                    className="addRevFormInput"
                    type="text"
                    name='text'
                    value={inputWorkMethod}
                    onChange={handleWorkMethod}
                    />
                </div>
                <br/>
                
                <div className="col-25">
                    <label className='addRevFormLabel'>Review Description: </label>
                </div>
                <div className="col-75">
                    <textarea type="text" 
                    className="addRevFormReviewInput"
                    placeholder=""
                    value={inputDescription}
                    name='text'
                    onChange={handleDescription}
                    style = {{
                        height: "200px",
                        width: "100%"
                    }}
                    />
                </div>
                
        
                <div className = 'center'>
                    <button className='addRevFormSubmitButton' type='submit'>Submit</button>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}