
// import OutputList from './output.list'
import useFetch from './useFetch'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const OutputList = ({blogs, title}) => {
 
    return (
     
               <div >
                   <h1 className="title">{title}</h1>
                
            {blogs.map((blog) => (
           
             <div className='grid' key={blog.id}>

                <div className='container'> 
                <div className='cardBody'>
                    <div className='column-item'
                    ><h2> {blog.list}</h2>
                    <h3> {blog.message}</h3>
                    </div>
               
                    
                </div>
                </div>
           
              
                </div>
           
            

            ))}

        </div>
    )
}



const Messages = () => {
  
 const {data: blogs} = useFetch('http://localhost:8000/All-7')

  

    return (
        <div className='message'>
     
       {blogs && <OutputList blogs={blogs} title="Heartfelt Message to"/>} 

        </div>
    )
}

export default Messages
