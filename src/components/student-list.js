import Axios from 'axios'
import {useEffect, useState} from 'react'
import Studentlistrow from './student-list-row'

export function Studentlist(props) {
    const [data, setData] = useState([])
    const [searchdata, setSearchData] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        if(searchTerm !== '') {
            Axios.get("https://crud-deployment-project-backend.onrender.com/studentdetails/searchbyname/"+searchTerm)
            .then((res)=>{
                if(res.status === 200) {
                    setSearchData(res.data)
                }
                    
                else
                    Promise.reject();
            })
            .catch((err)=> alert(err));
        }
    };
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
        <div>
            <div className=''>
            <div style={{maxWidth: "40%", margin: "auto"}}>
                <input defaultValue={props.nameVal} onChange={handleChange} className="form-control my-3" placeholder="Enter Item name"/>
            </div>
            </div>
            <div>
                <table style={{maxWidth: "80%", minWidth: "80%", margin: "50px auto"}} class="table my-5 table-bordered table-striped table-dark table-hover">
                    <thead>
                        <tr>
                            <th class="text-center">Item</th>
                            <th class="text-center">Price</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchdata.length > 0 && searchdata.map((item, index) => (
                            <Studentlistrow key={index} obj={item} ind={index}/>
                        ))}
                        {searchdata.length === 0 && data.map((item, index) => (
                            <Studentlistrow key={index} obj={item} ind={index}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}