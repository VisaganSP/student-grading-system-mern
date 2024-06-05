import React, { useState } from 'react';

const StudentForm = ({ setStudents, calculateClassAverage }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [marks, setMarks] = useState(Array(5).fill(0));

  const handleMarksChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = Number(value);
    setMarks(newMarks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = { name, rollNo: Number(rollNo), marks };
    const res = await fetch('http://localhost:3000/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    });
    const data = await res.json();
    setStudents((prevStudents) => [...prevStudents, data]);
    calculateClassAverage([...students, data]);
    setName('');
    setRollNo('');
    setMarks(Array(5).fill(0));
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><label htmlFor="name">Name</label></td>
            <td><input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /></td>
          </tr>
          <tr>
            <td><label htmlFor="rollNo">Roll Number</label></td>
            <td><input type="number" id="rollNo" value={rollNo} onChange={(e) => setRollNo(e.target.value)} required /></td>
          </tr>
          {['Internet of Things', 'Full Stack Development', 'Design and Analysis of Algorithm', 'Advanced Database Management System', 'Advanced Software Engineering'].map((subject, index) => (
            <tr key={index}>
              <td><label htmlFor={`subject${index}`}>{subject}</label></td>
              <td><input type="number" id={`subject${index}`} value={marks[index]} onChange={(e) => handleMarksChange(index, e.target.value)} required /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default StudentForm;
