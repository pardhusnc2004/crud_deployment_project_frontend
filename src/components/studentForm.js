import { useEffect, useState } from "react";

function StudentForm (props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [roll, setRoll] = useState('')

    useEffect(() => {
        setName(props.nameVal)
        setEmail(props.emailVal)
        setRoll(props.rollVal)
    }, [props.nameVal, props.emailVal, props.rollVal])
    const arr = [name, email, roll]

    const handleClick = () => {
        props.getFormData(arr)
    }
    return (
        <div style={{maxWidth: "40%", margin: "0px auto"}}>
            <input defaultValue={props.nameVal} onChange={(event) => setName(event.target.value)} className="form-control my-3" placeholder="Enter your name"/>
            <input defaultValue={props.emailVal} onChange={(event) => setEmail(event.target.value)} className="form-control my-3" placeholder="Enter your email"/>
            <input defaultValue={props.rollVal} onChange={(event) => setRoll(event.target.value)} className="form-control my-3" placeholder="Enter your roll number"/>
            <button onClick={handleClick} className="btn btn-success d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}
export default StudentForm;