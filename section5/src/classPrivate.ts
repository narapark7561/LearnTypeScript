// Code goes here!
class Department {
  name: string; //field 속성 //public as default
  private employees: string[] = []; //inside class에서만 접근가능하다.
  //   employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  // describe() {
  //   console.log('Department: ' + this.name);
  // }
  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Chai');

accounting.describe();
accounting.printEmployeeInformation();

// accounting.employees[2] = 'Anna'; //private를 넣으니 에러가 난다.
accounting.printEmployeeInformation();
