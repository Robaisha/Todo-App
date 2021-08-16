import React, { useState } from 'react'
export default function Form() {
const [details,setDetails]=useState({
        title:"null",
        descrip :" "

})
const settitle=(data)=>{
console.log(data.target.value);
        setDetails({...details,title:data.target.value})

        } 
const setdescrip=(data)=>{
console.log(data.target.value);
        setDetails({...details,descrip:data.target.value})

        } 
  return (
        <div className="container my-3">
        <h3>Add a Todo</h3>
           
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" onChange={settitle} class="form-control" id="title" aria-describedby="emailHelp" />
                    
                </div>
                <div class="mb-3">
                    <label for="descrip" class="form-label">Description</label>
                    <input type="text"  onChange={setdescrip} class="form-control" id="descrip" />
                </div>
             
                <button type="submit" class="btn btn-success btn-sm">Add Todo</button>

        </div>
    )
}
