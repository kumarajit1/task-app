import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

 function EditPage(){

    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setTitle(localStorage.getItem("title"));
        setDescription(localStorage.getItem("description"));
    },[])

    function handleUpdate(e){
        e.preventDefault();
        axios
        .put(`https://64440de590738aa7c07df79d.mockapi.io/register/${id}`,{
            title:title,
            description:description,
        })
        .then(()=>{
            navigate("/homepage");
        })
    }

    return(
        <div className="container">
            <form>
            <div>
                <label>Name</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control"   />
            </div>

            <div>
                <label>Email</label>
                <input type="email" value={description} onChange={(e)=>setDescription(e.target.value)}  className="form-control"  />
            </div>

            <button type="submit" onClick={handleUpdate} className="btn btn-success mx-2" >Update</button>
            <Link to="/homepage">
            <button type="submit" className="btn btn-secondary mx-2" >Back</button>
            </Link>
        </form>
        </div>
    )
}

export default EditPage;