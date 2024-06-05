import React from 'react';
import StudentItem from './StudentItem';

const StudentList = ({ students, setStudents, calculateClassAverage }) => {
  const deleteStudent = async (id) => {
    await fetch(`http://localhost:3000/api/students/${id}`, {
      method: 'DELETE',
    });
    const updatedStudents = students.filter((student) => student._id !== id);
    setStudents(updatedStudents);
    calculateClassAverage(updatedStudents);
  };

  return (
    <table id="students-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Internet of Things</th>
          <th>Full Stack Development</th>
          <th>Design and Analysis of Algorithm</th>
          <th>Advanced Database Management System</th>
          <th>Advanced Software Engineering</th>
          <th>Total</th>
          <th>Average</th>
          <th>Grade</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentItem key={student._id} student={student} deleteStudent={deleteStudent} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
