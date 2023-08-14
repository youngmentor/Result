import { useState } from 'react'
import './App.css'
import StudentPage from './Result/StudentsResult'
import ResultComponent from './Result/Result'
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
const App = () => {
  const [subjectData, setSubjectData] = useState([]);

  return (
    <Router>
        <Routes exact path="/">
          <Route path='/' element={<ResultComponent subjectData={subjectData} setSubjectData={setSubjectData}/> }/>
          <Route path='/studentsresults' element={<StudentPage subjectData={subjectData}/> }/>
        </Routes>
    </Router>
  );
};

export default App;
