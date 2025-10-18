function f(obj, b) {
  obj.sal += obj.sal * (b / 100);
  return obj;
}

const x = { informalId: 'Mezz Davies', sal: 28000 };

f(x, 10);

console.log(x);

function salaryCalculator(personObj, salary) {
  personObj.salary += personObj.salary * (salary / 100); // calculate salary
  return personObj
}

salaryCalculator(x, 10);
console.log(x)