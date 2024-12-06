class Departments {
  //   private id: string;
  //   // private readonly id: string;
  //   private name: string;
  //   //   private employees: string[] = [];
  employees: string[] = [];

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
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  getReport() {
    console.log(this.reports);
  }
}

const ac = new AccountingDepartment('ac777', ['Payment received on Dec 5']);
ac.addReport('Payment has been cancelled');
ac.getReport();
console.log(ac);

const sd = new ITDepartment('sd921', ['First Admin: Chai']);
sd.describes();
sd.addEmployee('Mango');
sd.addEmployee('Doobie');
sd.printEmployeeInformation();
console.log(sd);

const business = new Departments('ac1234', 'Business');
business.describes();
