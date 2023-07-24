// syntax
// IN typescript, we use <> to define the generic type
function identity<T>(arg: T): T {
  return arg;
}
// call the generic function with number type

let output = identity<number>(123);
console.log(output); // 5

// call the generic function with string type

let output2 = identity<string>("myString");
console.log(output2); // myString

// infer the type from the value

let output3 = identity(123234);
console.log(output3); // 123



// ======
// Generic Functions 
// =================


function genericFunctions<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

//Call the generic function with number type

let outputFuncNumbers = genericFunctions<number>([1, 2, 3, 4, 5]);
console.log(outputFuncNumbers);

//Call the generic function with string type

let output5 = genericFunctions<string>(["Apple", "Orange", "Banana"]);
console.log(output5);


// Generic classes

class GenericClass<T> {
  private genericProperty: T;

  constructor(value: T) {
    this.genericProperty = value;
  }

  public getGenericProperty(): T {
    return this.genericProperty;
  }
}

// create instance of generic class with number type argument

let instance1 = new GenericClass<number>(123);
console.log(instance1.getGenericProperty());


// create instance of generic class with string type argument

let instance2 = new GenericClass<string>("Hello, world");
console.log(instance2.getGenericProperty());