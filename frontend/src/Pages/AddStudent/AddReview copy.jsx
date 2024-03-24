import React, {useState, useEffect} from 'react'

import api from '../../api'

import AddForm from './AddForm'

export default function AddStudent(){


    //app.post("/api/student/{first}/{last}/{grade}")
    const [student, setStudent] = useState({
        first_name: '',
        last_name: '',
        grade_level: 0,
    });

    

    return(
        <>
        <div>
        Add review here
        </div>

        <AddForm />
        </>
    )
}