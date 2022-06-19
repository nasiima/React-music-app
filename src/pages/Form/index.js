// import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'



const Form = () => {
    const [message, setMessage] = useState('')
    const [list, setList] = useState('All 7')
    const histroy = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const getMessage = {list, message}


        fetch('http://localhost:8000/All-7', {
            method: 'POST',
            headers: { 'content-type': "application/json"},
            body: JSON.stringify(getMessage)
        }).then(() => {
           alert('message has been sent and can be viewd at messages page')
        })

        histroy.push('/Output')

    }

  

    return(
        <div >
        <h2 className='h2h'>Post a message to your fav</h2>
            <body className='body'>
            <form onSubmit={handleSubmit}>
                <div className="container-form">
                    <label className='subTtitle'>Select BTS member you want to send a message </label>
                    <select value={list}  onChange={(e) => setList(e.target.value)}>
                        <option value="All 7">All 7</option>
                        <option value="Jimin">Jimin</option>
                        <option value="Jin">Jin</option>
                        <option value="Suga">Suga</option>
                        <option value="Namjoon">Namjoon</option>
                        <option value="Jungkook">Jungkook</option>
                        <option value="v">V</option>
                        <option value="J-Hope">J-Hope</option>
                    </select>
                    <div >
                       <br></br>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="3"></textarea>
                    <button className='btn'>Submit message</button>
                    </div>
{/* 
                <h2> {message} </h2>
                <h3>{list}</h3>   */}
                 


                </div>


            </form>
            </body>


        </div>
    )
}

export default Form;