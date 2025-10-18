function updateRemoteStudents(studentData) {
  const studentDataOutput = structuredClone(studentData);
  for (const obj of studentDataOutput) {
    if (obj.location === undefined) {
      obj.location = "remote";
    }
  }

  return studentDataOutput;
}

module.exports = updateRemoteStudents;
