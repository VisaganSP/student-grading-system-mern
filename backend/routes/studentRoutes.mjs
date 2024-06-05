import express from "express";
import {
  getStudents,
  addStudent,
  deleteStudent,
  updateStudent,
} from "../controllers/studentController.mjs";

const router = express.Router();

router.route("/").get(getStudents).post(addStudent);

router.route("/:id").delete(deleteStudent).put(updateStudent);

export default router;
