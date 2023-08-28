import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";



export default function HomePage(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [data, setData] = useState([]);
    const [show, setShow]=useState(true);

    function handleSubmit(e){
        e.preventDefault();
        Axios
        .post("https://64440de590738aa7c07df79d.mockapi.io/register",{
            title:title,
            description:description,
        })
        setTitle("");
        setDescription("");
    };

    function getData(){
        Axios
        .get('https://64440de590738aa7c07df79d.mockapi.io/register')
        .then((res)=>{
            setData(res.data);
        });
    }

    useEffect(()=>{
        getData();
    },[]); 

    function handleDelete(id){
        Axios.delete(
            `https://64440de590738aa7c07df79d.mockapi.io/register/${id}`
            ).then((data)=>{
                getData();
            })
        
    }
    function setToLocalStorage(id,title,description){
        localStorage.setItem("id",id);
        localStorage.setItem("title",title);
        localStorage.setItem("description",description);
    }

    return(
        <div className="container mt-4">
        <div className="d-flex justify-content-between">
            <h1>Manage Your Task</h1>
            <Link to="/">
            <button type="submit" className="btn btn-secondary mx-2" >LOGOUT</button>
            </Link>
        </div>
        <form className="form-body">
            <div>
                <label>Title</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Please enter your title" name="title" autoComplete="off" />
            </div>

            <div>
                <label>Description</label>
                <input type="text" className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Please enter your description" name="email" autoComplete="off" />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add Task</button>
        </form>
        <hr/>
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>                            
                {
                    data && data.map((eachData)=>{
                        return(
                                <tr key={eachData.id}>
                                    <td>{eachData.id}</td>
                                    <td>{eachData.title}</td>
                                    <td>{eachData.description}</td>
                                    <td>
                                    {
                                       show? <button className="btn btn-primary w-50" onClick={()=>setShow(!show)}>Mark as Completed</button> : 
                                       <Link to="/editpage">
                                                <button className="btn btn-success w-50"
                                                onClick={()=>setToLocalStorage(
                                                    eachData.id,eachData.title,eachData.description
                                                )}
                                                >Edit</button>
                                            </Link>
                                        
                                    }
                                    <button type="delete" className="btn btn-danger" 
                                    onClick={()=>handleDelete(eachData.id)}>Delete</button>
                                    </td>
                                    {/* <td colSpan={2}>
                                            <Link to="/editpage">
                                                <button className="btn btn-success"
                                                onClick={()=>setToLocalStorage(
                                                    eachData.id,eachData.title,eachData.description
                                                )}
                                                >Edit</button>
                                            </Link>
                                    </td>
                                    <td> <button type="delete" className="btn btn-danger" 
                                    onClick={()=>handleDelete(eachData.id)}>Delete</button></td> */}
                                </tr>
                        )
                    })
                }  
            </tbody>
        </table>
    </div>
    )
}