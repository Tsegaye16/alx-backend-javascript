const getStudentIdsSum = (studentList) => studentList.reduce((preVal, cur) => preVal + cur.id, 0);

export default getStudentIdsSum;
