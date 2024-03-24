import React, {useState} from "react";

export default function AddField(props){

    const [input, setInput] = useState('')

    const handleChange = texter =>{

        setInput(texter.target.value);
    }
    
    return(
        <>
        <input type="text" 
            className=""
            placeholder="Enter First Name"
            value={input}
            name='text'
            onChange={handleChange}
            />
        </>
    )
}