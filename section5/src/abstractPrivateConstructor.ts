abstract class Departments {
  //   employees: string[] = [];

  static fiscalYear = 2020;
  protected employees: string[] = []; // can access from child class
  constructor(protected readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }
  abstract describes(this: Departments): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}
//Inheritance class of Departments even it's empty
class ITDepartment extends Departments {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describes() {
    console.log('IT Department - ID: ' + this.id);
  }
}
class AccountingDepartment extends Departments {
  private lastReport: string;
  private static instance: AccountingDepartment;
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
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('ac921', []);
    return this.instance;
  }

  //abstract
  describes() {
    console.log('Accounting Department - ID: ' + this.id);
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

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);
