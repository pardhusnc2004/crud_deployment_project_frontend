
import { useParams } from "react-router-dom";
import StudentForm from "./studentForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditStudent()
{
    const {id} = useParams();
    const [initialValue, setInitialValue] = useState({name:"",email:"",roll:""});
    const [newData,setNewData] = useState([]);

    useEffect(()=>{
        Axios.get("https://crud-deployment-project-backend.onrender.com/studentdetails/update-student/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {name,email,roll} = res.data;
                setInitialValue({name,email,roll});
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[id])

    const getFormData = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = {name:newData[0],email:newData[1],roll:newData[2]};
        Axios.put("https://crud-deployment-project-backend.onrender.com/studentdetails/update-student/"+id,data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record updated successfully")
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getFormData={getFormData}
                        nameVal={initialValue.name}
                        emailVal={initialValue.email}
                        rollVal= {initialValue.roll}>
                            Update Item
                        </StudentForm>
        </form>
    )
}
export default EditStudent;
