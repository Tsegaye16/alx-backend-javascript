function getListStudentIds(studentList) {
  let result = [];
  if (!(studentList instanceof Array)) {
    return result;
  }
  result = studentList.map((student) => student.id);
  return result;
}

export default getListStudentIds;
