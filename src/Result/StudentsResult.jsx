import React, { useEffect, useState } from 'react';

const StudentPage = () => {
  const [subjectData, setSubjectData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('subjectData');
    if (storedData) {
      setSubjectData(JSON.parse(storedData));
    }
  }, []);

  const calculateTotal = (subject) => {
    return parseInt(subject.subjectTest) + parseInt(subject.subjectExam);
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
    <div>
      <h2>Student Results</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Test Score</th>
            <th>Exam Score</th>
            <th>Total Score</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {subjectData.map((subject, index) => (
            <tr key={index}>
              <td>{subject.subjectName}</td>
              <td>{subject.subjectTest}</td>
              <td>{subject.subjectExam}</td>
              <td>{calculateTotal(subject)}</td>
              <td>{getRemark(calculateTotal(subject))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPage;
