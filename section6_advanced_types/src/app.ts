type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //so only 'number' type will work.

// Type Guards
function add(a: Combinable, b: Combinable) {
  // this call 'Type Guard'
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
