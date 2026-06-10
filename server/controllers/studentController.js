const Student =
require("../models/Student");

exports.addStudent =
async (req, res) => {

  try {

    const student =
      await Student.create(
        req.body
      );

    res.status(201).json(
      student
    );

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.getStudents =
async (req, res) => {

  try {

    const students =
      await Student.find();

    res.json(students);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.deleteStudent =
async (req, res) => {

  try {

    await Student.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
      "Student deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.updateStudent =
async (req, res) => {

  try {

    const student =
      await Student.findByIdAndUpdate(

        req.params.id,

        req.body,

        {
          new: true
        }

      );

    res.json(student);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};