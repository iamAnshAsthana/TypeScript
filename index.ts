-> Any data type:
        function render(document: any){
        console.log(document);
        }
        render("Hello");
        render(10);
        render(true);    


-> Type Annotation in TypeScript:
        let numbers: number[] = [1, 2, 3];
        console.log(numbers);

-> Tuple:
        let user: [number, string, boolean, number] = [1, 'Ram', true, 0];

-> Enum:
        enum Size {Small = 1, Medium, Large};
        let mySize: Size = Size.Medium;
        console.log(mySize);
    
        const enum Size {Small = 1, Medium, Large};
        let mySize: Size = Size.Medium;
        console.log(mySize);

-> Functions:
        function calcTax(income: number, taxYear = 2022):number{
            if (taxYear < 2022)
                return income * 1.2;
            return income * 1.3;
        }
        calcTax(10_000);

-> Objects:
        let employee : {
            readonly id: number,
            name:string
            retire: (date: Date) => void
        } = {
            id: 1,
            name:"Ram",
            retire: (date: Date) => {
                console.log(date);
            }};
            
->  Type Alias:       
            type Employee = {
                readonly id: number,
                name: string
                retire: (date: Date) => void
            }
            
            let employee: Employee = {
                id: 1,
                name: "Ram",
                retire: (date: Date) => {
                    console.log(`Employee ${employee.name} is retiring on:`);
                    console.log(date.toDateString());
                }
            };
            
            const retirementDate = new Date(2026, 0, 15);
            
            employee.retire(retirementDate);

-> Union Type:
        function kgtolbs(weight: number | string){
            if (typeof weight === 'number')
                console.log(weight * 2.2);
            else
                console.log(parseInt(weight) * 2.2);
        }
        kgtolbs(10);
        kgtolbs('10kg');

-> Intersection Type:
        type Identity = {
            readonly id: number;
            name: string;
        };
        type JobInfo = {
            title: string;
            salary: number;
        };
        type Employee = Identity & JobInfo;
        let newEmployee: Employee = {
            id: 456,
            name: "Alex Johnson",
            title: "Software Engineer",
            salary: 85000
        };
        
        console.log(newEmployee.name);
        console.log(newEmployee.title);

-> Literal Types:
        type Quantity = 50 | 100;
        let quantity: Quantity = 100;
    
        type Metric = 'cm' | 'inch';

-> Null Types:
        function greet(name: string | null | undefined){
            if (name)
                console.log(name.toUpperCase());
            else
                console.log("Oops!");
        }
        greet('Ram');

-> Optional Chaining:
        type Customer = {
            birthday?: Date
        }
    
        function getCustomer(id: number): Customer | null | undefined{
            return id === 0 ? null : {birthday: new Date()};
        }
    
        let customer = getCustomer(1);
        console.log(customer?.birthday?.getFullYear()); // optional property access operator
    
        customer?.[0]; // optional element access operator
    
        let log: any = null;
        log?.('a'); //optional functional call operator


-> Generics:
        type P<a, b> = {
            first: a;
            second: b;
        }
        
        function logPair<A, B>(data: P<A, B>): void {
            console.log("First value:", data.first);
            console.log("Second value:", data.second);
        }
        
        let userData: P<string, number> = {
            first: "User ID 123",
            second: 45000
        };
        
        let coordData: P<number, number> = {
            first: 15.5,
            second: 22.8
        };
        
        logPair(userData); 
        
        logPair(coordData);
// P is a custom type, a and b are type arguments, a -> string else raises error, b -> number else error.

-> Interfaces:
        interface Book {
            title: string;
            pages: number;
            author?: string; 
        }
        
        let myFavoriteBook: Book = {
            title: "The TypeScript Handbook",
            pages: 600,
            author: "Jane Doe"
        };
        
        let anotherBook: Book = {
            title: "Getting Started with TS",
            pages: 150
        };
        
        console.log(`Title: ${myFavoriteBook.title}`);
        console.log(`Pages: ${anotherBook.pages}`);

-> Extending Two Interfaces:
        interface HasName {
            name: string;
        }
        
        interface HasAge {
            age: number;
        }
        
        interface Person extends HasName, HasAge {
            occupation: string;
        }
        
        let user: Person = {
            name: "Michael Scott", 
            age: 55, 
            occupation: "Regional Manager"
        };
        
        console.log(`${user.name} is ${user.age} and works as a ${user.occupation}.`);

-> Merging Two Interfaces:
        interface A {
            a: number;
        }
        
        interface B {
            b: string;
        }
        
        interface C extends A, B {
            c: boolean;
        }
        
        let combined: C = {
            a: 10,
            b: "Hi",
            c: true
        };
        
        interface Config {
            mode: 'test' | 'prod';
        }
        
        interface Config {
            port: number;
        }
        
        let serverConfig: Config = {
            mode: 'test',
            port: 3000
        };

-> @ symbol used for decorators in ts with react.   
