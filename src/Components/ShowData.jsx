
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ShowData() {
  const [data, setdata] = useState([])

function getData(){
  axios.get('https://63ea415e811db3d7ef0a6c6d.mockapi.io/form').then(response=> setdata(response.data)).catch((erro)=>{
    console.log(erro)
})

}
getData()


  return (
    <>     
      <div className="main">    
	     <h1> Data table</h1>
     </div>
     <div className='container mt-3'>
        <table className='table table-bordered table-striped table-dark  table-hover ' >
        <thead >
            <tr>
                <th>ID</th>  
                <th>Name</th>  
                <th>D.O.B</th>
                <th>Sex</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Govt ID</th>
                <th>Guardian Details</th>
                <th>Nationality</th>
            </tr>
        </thead>
        <tbody>
        {
         data.map((currData)=>{
         return(
              <tr>
                <td>{currData.id}</td>
                <td>{currData.e_Name}</td>
                <td>{currData.e_age}</td>
                <td>{currData.e_sex}</td>
                <td>{currData.e_Mobile_Number}</td>
                <td>{currData.e_Address}</td>
                <td>{currData.e_Govt_ID}</td>
                <td>{currData.e_label}</td>
                <td>{currData.e_Nationality}</td>
              </tr> 
             )
         })
       }
                 
      </tbody>
      </table>
    
      </div>
      <div className='boxBtn'>
           <Link to={'/'}>
             <button className='btn btn-info mt-5 ml-5' >Add Data</button>
        </Link>
      </div>
    </>
  )
}

