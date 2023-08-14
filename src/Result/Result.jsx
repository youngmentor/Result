import React, { useState } from 'react';
import './Result.css'
const ResultComponent = () => {
  const [subjectData, setSubjectData] = useState([]);

  const addSubject = () => {
    setSubjectData([...subjectData, { subjectName: '', subjectTest: 0, subjectExam: 0 }]);
  };

  const removeSubject = (index) => {
    const updatedSubjects = [...subjectData];
    updatedSubjects.splice(index, 1);
    setSubjectData(updatedSubjects);
  };

  const handleSubjectChange = (index, property, newValue) => {
    const updatedSubjects = [...subjectData];
    updatedSubjects[index][property] = newValue;
    setSubjectData(updatedSubjects);
  };
  const calculateTotalPerSubject = (subject) => {
    return parseInt(subject.subjectTest) + parseInt(subject.subjectExam);
  }
  const calculateAllSubjectsTotal = () => {
    return subjectData.reduce((total, subject) => total + calculateTotalPerSubject(subject), 0);
  };
  const handleSubmit = async () => {
    console.log('clicked')
    // try {
    //   const response = await axios.post('put your API here', subjectData);
    //   console.log( response.data);
    // } catch (error) {
    //   console.error('Error uploading data:', error);
    // }
    localStorage.setItem('subjectData', JSON.stringify(subjectData));
    
    setSubjectData([]);
  };
  const getRemark = (totalScore) => {
    if (totalScore >= 85) {
      return 'Excellent';
    } else if (totalScore >= 70) {
      return 'Good';
    } else if (totalScore >= 60) {
      return 'Average';
    } else {
      return 'Needs Improvement';
    }
  };
  return (
    <div className='Result_Main'>
      {subjectData.map((subject, index) => (
        <div key={index}>
          <button onClick={() => removeSubject(index)}>Remove Subject</button>
          <h3>Subject {index + 1}</h3>
          <label>
            Subject Name:
            <input
              type="text"
              value={subject.subjectName}
              onChange={(e) => handleSubjectChange(index, 'subjectName', e.target.value)}
            />
          </label>
          <label>
            Test Score:
            <input
              type="number"
              value={subject.subjectTest}
              onChange={(e) => handleSubjectChange(index, 'subjectTest', e.target.value)}
            />
          </label>
          <label>
            Exam Score:
            <input
              type="number"
              value={subject.subjectExam}
              onChange={(e) => handleSubjectChange(index, 'subjectExam', e.target.value)}
            />
          <p>Total Score: {calculateTotalPerSubject(subject)}</p>
           Subject Remark:  {getRemark(calculateTotalPerSubject(subject))}
          </label>
        </div>
      ))}
      <p>Total Score for All Subjects: {calculateAllSubjectsTotal()}</p>
      {subjectData.length > 0 && (
        <div>
          <h2>Remarks:</h2>
          {subjectData.map((subject, index) => (
            <p key={index}>
            </p>
          ))}
          <p>
            Total Score for All Subjects: {calculateAllSubjectsTotal()} - {getRemark(calculateAllSubjectsTotal())}
          </p>
        </div>
      )}
       <button onClick={addSubject}>Add Subject</button>
       <button onClick={handleSubmit}>Create Result</button>
    </div>
  );
};

export default ResultComponent;
