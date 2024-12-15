// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: 'Max',
//   privileges: ['create-sever'],
//   startDate: new Date(),
// };

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric; //so only 'number' type will work.

// // Type Guards
// function add(a: Combinable, b: Combinable) {
//   // this call 'Type Guard'
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// type unknownEmployee = Employee | Admin;

// 공통된 속성인 name은 바로 접근할 수 있지만,
// unknownEmployee가 Admin인지 Employee인지 확인하려면 조건문(if문)이 필요하다.
// 'privileges'와 'startDate'는 각각 Admin과 Employee에서만 존재하는 속성이므로,
// 'in' 연산자를 사용해 해당 속성이 있는지 확인 후 처리한다.
function printEmployeeInformation(emp: unknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privilleges ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date ' + emp.startDate);
  }
}

printEmployeeInformation(e1);

const employee: Employee = { name: 'Bob', startDate: new Date() };
printEmployeeInformation(employee);

// another example

class Car {
  drive() {
    console.log('Driving..');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck..');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck; //union type

const v1 = new Car();
const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if ('loadCargo' in vehicle) {
//     vehicle.loadCargo(1000);
//   }
// }

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
