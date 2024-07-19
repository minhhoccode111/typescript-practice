export class GradeSchool {
  constructor() {
    this._db = new Map();
  }
  roster() {
    const result = {};
    for (const [name, grade] of this._db) {
      const counter = result[grade] || [];
      result[grade] = [...counter, name].sort();
    }
    return result;
  }
  grade(n) {
    const result = [];
    for (const [name, grade] of this._db) {
      if (grade === n) result.push(name);
    }
    return result.sort();
  }
  add(name, grade) {
    this._db.set(name, grade);
  }
}
