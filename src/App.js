import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Createstudent } from './components/create-student';
import { Studentlist } from './components/student-list';
import EditStudent from './components/edit-student';
import { Nav } from './components/navbar';
function App() {
  return (
    <div className="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Createstudent />}/>
          <Route path='/create-student' element={<Createstudent />} />
          <Route path='/student-list' element={<Studentlist />}/>
          <Route path='/edit-student/:id' element={<EditStudent />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
