import Axios from 'axios'
import {Link} from 'react-router-dom'
function Studentlistrow(props) {
    const {_id, name, email, roll} = props.obj;
    const handleClick_delete = () => {
        Axios.delete("https://crud-deployment-project-backend.onrender.com/studentdetails/delete-student/" + _id)
        .then((res) => {
            if(res.status === 200) {
                alert("Record deleted successfully!")
                window.location.reload()
            }
            else Promise.reject()
        })
        .catch((err) => alert(err))
    }
    return (
        <tr key={props.ind} className='text-center pt-2'>
            <td className='mt-2'>{name}</td>
            <td className='mt-2'>{roll}</td>
            <td className='d-flex justify-content-center'>
                <Link className='btn btn-light mx-1' to={"/edit-student/" + _id}>✏️</Link>
                <button className='btn btn-light mx-1' onClick={handleClick_delete}>❌</button>
            </td>
        </tr>
    )
}

export default Studentlistrow