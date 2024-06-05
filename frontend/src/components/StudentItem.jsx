import React from "react";

const StudentItem = ({ student, deleteStudent }) => {
  const calculateTotal = (marks) =>
    marks.reduce((total, mark) => total + mark, 0);
  const calculateAverage = (marks) => calculateTotal(marks) / marks.length;
  const calculateGrade = (average) => {
    if (average >= 90) return "A+";
    if (average >= 80) return "A";
    if (average >= 70) return "B";
    if (average >= 60) return "C";
    return "D";
  };

  const handleEdit = () => {
    const newName = prompt("Enter new name:", student.name);
    const newMarks = student.marks.map((mark, index) =>
      Number(prompt(`Enter new marks for subject ${index + 1}:`, mark))
    );
    const updatedStudent = { ...student, name: newName, marks: newMarks };

    fetch(`http://localhost:3000/api/students/${student._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudent),
    }).then(() => {
      setStudents((prevStudents) =>
        prevStudents.map((s) => (s._id === student._id ? updatedStudent : s))
      );
      // calculateClassAverage();
      calculateTotal(student.marks);
      calculateAverage(student.marks).toFixed(2);
      calculateGrade(calculateAverage(student.marks));
    });
  };

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.rollNo}</td>
      {student.marks.map((mark, index) => (
        <td key={index}>{mark}</td>
      ))}
      <td>{calculateTotal(student.marks)}</td>
      <td>{calculateAverage(student.marks).toFixed(2)}</td>
      <td>{calculateGrade(calculateAverage(student.marks))}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteStudent(student._id)}>Delete</button>
      </td>
    </tr>
  );
};

export default StudentItem;
