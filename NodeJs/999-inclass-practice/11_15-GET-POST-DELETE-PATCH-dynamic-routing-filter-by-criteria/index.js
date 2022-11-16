const express = require("express");
const app = express();

app.use(express.json());

const PORT = 5001;

let students = [{ firstName: "Andrius", lastName: "Zažeckas", studentId: 1 }];

app.get("/", (_, res) => {
  res.send(students).end();
});

app.post("/create-student", (req, res) => {
  const { firstName, lastName, studentId } = req.body;

  const isNumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value);
  };

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    !isNumber(studentId)
  ) {
    res.status(400).send({ message: "Invalid user data" }).end();
    return;
  }

  const student = { firstName, lastName, studentId };

  students.push(student);
  res.send(students).end();
});

app.get("/student/:studentId", (req, res) => {
  const studentId = +req.params.studentId;

  const student = students.find(
    (curStudent) => curStudent.studentId === studentId
  );

  if (!student) {
    return res.status(404).send("Student does not exist").end();
  }

  res.send(student).end();
});

app.delete("/student/:studentId", (req, res) => {
  const studentId = +req.params.studentId;

  console.log({ studentId, existingStudentId: students[0].studentId });

  const deleteStudent = students.find(
    (curStudent) => curStudent.studentId === studentId
  );

  if (deleteStudent) {
    students = students.filter(
      (curStudent) => curStudent.studentId !== studentId
    );

    return res.send(deleteStudent).end();
  }

  res.status(404).send({ message: "Student does not exist." }).end();
});

// demo versija su netobulumais

app.patch("/student/:studentId", (req, res) => {
  const studentId = +req.params.studentId;
  const { firstName, lastName } = req.body;
  // console.log(req.body);

  if (!firstName && !lastName) {
    return res.status(404).send("No name was provided");
  }

  const studentToUpdate = students.find(
    (curStudent) => curStudent.studentId === studentId
  );

  if (!studentToUpdate) {
    return res.status(404).send("Student does not exist").end();
  }

  if (lastName) {
    studentToUpdate.lastName = lastName;
  }

  if (firstName) {
    studentToUpdate.firstName = firstName;
  }

  res.send(studentToUpdate).end();
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
