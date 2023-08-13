const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

let employeeName = prompt("Name");

if (employeeName in employees) {
  const employee = employees[employeeName];
  console.log(
    `Name: ${employeeName}, salary: ${employee.salary}, address: ${employee.address.district}, ${employee.address.province}`
  );
} else {
  console.log("Not Found");
}
