import {Link} from 'react-router-dom'

export function Nav() {
    return (
        <nav class="navbar bg-warning">
            <Link to='/' className='navbar-brand mx-2' style={{fontWeight: "bolder"}}>CRUD ops</Link>
            <div className='nav'>
                <Link to='/create-student' className='nav-link text-dark'>Create student</Link>
                <Link to='/student-list' className='nav-link text-dark'>Student list</Link>
            </div>
        </nav>
    )
}