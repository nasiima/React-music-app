import React from 'react'
import { useNavigate } from "react-router-dom";
import './index.css'

const BackButton = () => {
    const navigate = useNavigate()
    
 


    return(
        <button className="button-53" onClick={() => navigate(-1)}>go back</button>

    )
}

export default BackButton