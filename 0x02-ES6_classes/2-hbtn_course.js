export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students
  }

  get name() {
    return this_name;
  }

  set name(name) {
    if ((typeof name !== 'string') && !(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this_name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if ((typeof length !== 'number') && !(length instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!(students instanceof Array) || !student.every((s) => typeof s === 'string')) {
      throw new TypeError('Student must be ab array of strings');
    }
    this._students = students
  }
}
