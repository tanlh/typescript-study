/**
 * Learn about: never type
 */

// Function throw exception like below return 'never' type
// But, by default, void is inferred
function throwException(message: string): never {
  throw { message };
}

// Learn more about never in advanced-type module
