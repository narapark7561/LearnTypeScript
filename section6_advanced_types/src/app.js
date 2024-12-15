"use strict";
// Type Guards
function add(a, b) {
    // this call 'Type Guard'
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
