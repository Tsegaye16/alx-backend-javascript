const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2].toString()).then((students) => {
      const result = [];
      result.push('This is the list of our students');
      const keys = Object.keys(students);
      keys.sort();
      for (let i = 0; i < keys.length; i += 1) {
        result.push(`Number of students in ${keys[i]}: ${students[keys[i]].length}. List: ${students[keys[i]].join(', ')}`);
      }
      res.status(200).send(result.join('\n'));
    }).catch(() => {
      re.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(req, res) {
    const field = req.params.major;
    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(field in students)) {
        res.status(500).send('Major parameter must be CS or SWE');
      } else {
        res.status(200).send(`List: ${students[field].join(', ')}`);
      }
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
