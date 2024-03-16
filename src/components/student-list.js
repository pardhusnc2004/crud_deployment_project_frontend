import Axios from 'axios'
import {useEffect, useState} from 'react'
import Studentlistrow from './student-list-row'

export function Studentlist() {
    const [data, setData] = useState([])
    useEffect(()=>{
        Axios.get("https://crud-deployment-project-backend.onrender.com/studentdetails/")
        .then((res)=>{
            if(res.status === 200)
                setData(res.data)
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[])
    return (
        <table style={{maxWidth: "80%", minWidth: "80%", margin: "50px auto"}} class="table my-5 table-bordered table-striped table-dark table-hover">
            <thead>
                <tr>
                    <th class="text-center">Item</th>
                    <th class="text-center">Price</th>
                    <th className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <Studentlistrow obj={item} ind={index}/>
                ))}
            </tbody>
        </table>
    )
}