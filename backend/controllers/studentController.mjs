import Student from "../models/studentModel.mjs";

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new student
export const addStudent = async (req, res) => {
  const { name, rollNo, marks } = req.body;

  try {
    const newStudent = new Student({ name, rollNo, marks });
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a student
export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // await student.remove();
    res.json({ message: "Student removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a student
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, rollNo, marks } = req.body;

  try {
    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;

    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
