class Departments {
  //   employees: string[] = [];
  protected employees: string[] = []; // can access from child class
  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }
  describes(this: Departments) {
    console.log(`Department ${this.id}: ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
//Inheritance class of Departments even it's empty
class ITDepartment extends Departments {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}
class AccountingDepartment extends Departments {
  private lastReport: string;
  // getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }
  // setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass the value');
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text; // 존재이유? addReport를 통해 text가 들어오면 그 text 의 값이 lastReport에도 저장이되 불러오기 용이하다.
  }
  getReport() {
    console.log(this.reports);
  }
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
}
const ac = new AccountingDepartment('ac777', ['Payment received on Dec 5']);
ac.mostRecentReport = 'This is setter report';
console.log(ac.mostRecentReport);
ac.addReport('Payment has been cancelled');
ac.getReport();
console.log(ac);
ac.addEmployee('Max');
ac.addEmployee('Minnie');
ac.printEmployeeInformation();
const sd = new ITDepartment('sd921', ['First Admin: Chai']);
sd.describes();
sd.addEmployee('Mango');
sd.addEmployee('Doobie');
sd.printEmployeeInformation();
console.log(sd);
const business = new Departments('ac1234', 'Business');
business.describes();
