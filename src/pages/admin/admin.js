import React from "react";
import './admin.css'

const Admin = () => {
    return(
        <div className="adminparent">
    <div className="adminbox">
        <br></br>
        <label for="admintitle">Title</label>
        <br></br>
        <input type="text" id="admintitle"></input><br></br>
        <label for="admindescription">Description</label>
        <br></br>
        <textarea id="admindescription"/>
        <br></br>
        <label for="adminlink">Link of the Content</label>
        <br></br>
        <input type="text" id="adminlink"></input>
        <br></br>
        <button className="adminbtn">Submit</button>
    </div>
    </div>
    )
}
export default Admin;