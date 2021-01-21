// Your code here
function createEmployeeRecord(arr) {
  let employee = {};
  const [firstName, familyName, title, payPerHour] = arr;
  employee.firstName = firstName;
  employee.familyName = familyName;
  employee.title = title;
  employee.payPerHour = payPerHour;
  employee.timeInEvents = [];
  employee.timeOutEvents = [];
  return employee;
}
function createEmployeeRecords(aOA) {
  return aOA.map((employee) => createEmployeeRecord(employee));
}

function createTimeInEvent(record, data) {
  let event = {};
  event.type = "TimeIn";
  event.hour = data.split(" ")[1];
  event.day = data.split("-")[2];
  record.timeInEvents.push(event);
  return record;
}
