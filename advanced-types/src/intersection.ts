/**
 * Learn about: intersection type
 * Somehow, produce a type is the result of logical "and" (&) of all element types
 */

type Admin = {
  name: string;
  priviliges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// intersection type have properties of all element types
type ElavatedEmployee = Admin & Employee;

let eEmployee: ElavatedEmployee;
eEmployee = {
  name: "Tan",
  priviliges: ["can-create"],
  startDate: new Date(),
};

// intersection of incompatible primitive types produce 'never'
type NumberAndString = string & number; // never

// never melts in union
type UnionNeverAndNumber = number | never;
let aUnionNeverAndNumber: UnionNeverAndNumber = 30;

type Combinable = string | number;
type Numeric = number | boolean;

// (string | number) & (number | boolean)
// (string & number) | (string & boolean) | (number & number) | (number & boolean)
// never | never | number | never
// number
type Universal = Combinable & Numeric; // number

let aUniversal: Universal;
aUniversal = 30;

type TypeA = string | number;
type TypeB = string | boolean | Date;

// (string | number) & (string | boolean | Date)
// (string & string) | (string & boolean) | (string & Date) | (number & string) | (number & boolean) | (number & Date)
// string | never | (string & Date) | never | never | never | (number & Date)
// string | (string & Date) | (number & Date)
type TypeC = TypeA & TypeB;

let aTypeC: TypeC;
aTypeC = "a String";
aTypeC = Object.assign(0, new Date());
aTypeC = Object.assign("", new Date());
