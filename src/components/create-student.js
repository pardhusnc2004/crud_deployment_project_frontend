import { useState } from "react";
import StudentForm from "./studentForm";
import Axios from 'axios'

export function Createstudent() {
    const [arr, setArr] = useState([])

    const getFormData = (childData) => {
        setArr(childData)
    }
    const handleSubmit = (event) => {
        const data = {name: arr[0], email: arr[1], roll: arr[2]}
        Axios.post("https://crud-deployment-project-backend.onrender.com/studentdetails/create-student/", data)
        .then((res) => {
            if(res.status === 200) alert("Record added successfully")
            else Promise.reject()
        })
        .catch((err) => {alert(err)})
        event.target.reset()
    }
    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getFormData={getFormData} nameVal="" emailVal="" rollVal="">
                Add Item
            </StudentForm>
        </form>
    )
}