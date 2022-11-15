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

  const studentToUpdateIndex = students.findIndex(
    (curStudent) => curStudent.studentId === studentId
  );

  if (!firstName) {
    return res.status(404).send("First name was not provided").end();
  }

  const studentToUpdate = students[studentToUpdateIndex];
  console.log(studentToUpdate);

  if (studentToUpdateIndex !== -1) {
    console.log(firstName);
    students[studentToUpdateIndex] = {
      ...students[studentToUpdateIndex],
      firstName,
    };
  }

  res.send(students[studentToUpdateIndex]).end();
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
