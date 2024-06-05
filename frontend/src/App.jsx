import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./assets/styles/App.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch("http://localhost:3000/api/students");
      const data = await res.json();
      console.log(data);
      setStudents(data);
      calculateClassAverage(data);
    };
    fetchStudents();
  }, []);

  const calculateClassAverage = (students) => {
    const totalMarks = students.reduce((total, student) => {
      const averageMarks =
        student.marks.reduce((sum, mark) => sum + mark, 0) /
        student.marks.length;
      return total + averageMarks;
    }, 0);
    const average = totalMarks / students.length;
    setAverage(average);
  };

  return (
    <div>
      <h1>Visagan's Student Grading System</h1>
      <StudentForm
        setStudents={setStudents}
        calculateClassAverage={calculateClassAverage}
      />
      <div id="average-display">
        <h3 className="class-avg">
          Total Students: {students.length}, Average Total Marks:{" "}
          {average ? average.toFixed(2) : 0}
        </h3>
      </div>
      <StudentList
        students={students}
        setStudents={setStudents}
        calculateClassAverage={calculateClassAverage}
      />
    </div>
  );
};

export default App;
