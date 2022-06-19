import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './index.css'



function Lyrics() {
    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(0)
    const [three, setThree] = useState(0)
    const [four, setFour] = useState(0)
    const [five, setFive] = useState(0)
    const [six, setSix] = useState(0)

 

        const getEuphoria = () => {
          
                axios.get('https://api.lyrics.ovh/v1/BTS/Euphoria')
                .then(response => {
                    setOne(response.data.lyrics)
                //  console.log(response)
                })     
         }

         const getSerendipity = () => {
          
            axios.get('https://api.lyrics.ovh/v1/BTS/Serendipity')
            .then(response => {
                setTwo(response.data.lyrics)
            //  console.log(response)
            })  
        }

        const getDimple = () => {
          
            axios.get('https://api.lyrics.ovh/v1/BTS/Dimple')
            .then(response => {
                setThree(response.data.lyrics)
            //  console.log(response)
            })  
         }

         const getHer = () => {
          
            axios.get('https://api.lyrics.ovh/v1/BTS/Her')
            .then(response => {
                setFour(response.data.lyrics)
            //  console.log(response)
              })  
            }

                   
         const getFakeLove = () => {
          
            axios.get('https://api.lyrics.ovh/v1/BTS/Fake Love')
           .then(response => {
            setFive(response.data.lyrics)
            // console.log(response)
            })  
          }

         
        const getDNA = () => {
          
            axios.get('https://api.lyrics.ovh/v1/BTS/DNA')
            .then(response => {
                setSix(response.data.lyrics)
            //  console.log(response)
              })  
            }

      

        
            return(
                <>
            <div>
                <h2 className='h2-title'> Click on button to display lyrics</h2>
                <button className='button' onClick={getEuphoria}> Euphoria</button>
                <p className='lyrics'> {one} </p>
            </div>
            <div >
                <button className='button' onClick={getSerendipity}> Serendipity</button>
                <p className='lyrics'> {two} </p>
             </div>
             <div>
                <button className='button' onClick={getDimple}> Dimple</button>
                <p className='lyrics'> {three} </p>
             </div>
             <div>
                <button  className='button' onClick={getHer}> Her</button>
                <p className='lyrics'> {four} </p>
             </div>
             <div>
                <button  className='button' onClick={getFakeLove}> Fake Love</button>
                <p className='lyrics'> {five} </p>
             </div>
             <div>
                <button className='button'  onClick={getDNA}> DNA</button>
                <p className='lyrics'> {six} </p>
             </div>
         
                </>
            )
      
        
}

export default Lyrics
