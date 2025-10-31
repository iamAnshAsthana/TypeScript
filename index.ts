/*
-> Any data type:
    function render(document: any){
        console.log(document);
    }
*/

/*
-> Type Annotation in Python:
    let numbers: number[] = [1, 2, 3];
    console.log(numbers);
*/

/*
-> Tuple:
    let user: [number, string, boolean, number] = [1, 'Ram', true, 0];
*/

/*
-> Enum:
    enum Size {Small = 1, Medium, Large};
    let mySize: Size = Size.Medium;
    console.log(mySize);

    const enum Size {Small = 1, Medium, Large};
    let mySize: Size = Size.Medium;
    console.log(mySize);
*/
 
/*
-> Functions:
    function calcTax(income: number, taxYear = 2022):number{
        if (taxYear < 2022)
            return income * 1.2;
        return income * 1.3;
    }
    calcTax(10_000);
*/

/*
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
        */
/*     
->  Type Alias:       
       type Employee = {
           readonly id: number,
           name:string
           retire: (date: Date) => void 
        }      
        let employee : {
           } = {
               id: 1,
               name:"Ram",
               retire: (date: Date) => {
               console.log(date);
           }};
*/

/*
-> Union Type:
    function kgtolbs(weight: number | string){
        if (typeof weight === 'number')
            console.log(weight * 2.2);
        else
            console.log(parseInt(weight) * 2.2);
    }
    kgtolbs(10);
    kgtolbs('10kg');
*/

/*
-> Intersection Type:
    type Draggable = {
        drag: () => void
    };
    type Resizable = {
        resize: () => void
    };

    type UIWidget = Draggable & Resizable;

    let textbox: UIWidget = {
        drag: () => {},
        resize: () => {}
    }
*/

/*
-> Literal Types:
    type Quantity = 50 | 100;
    let quantity: Quantity = 100;

    type Metric = 'cm' | 'inch';
*/
/*
-> Null Types:
    function greet(name: string | null | undefined){
        if (name)
            console.log(name.toUpperCase());
        else
            console.log("Oops!");
    }
    greet('Ram');
*/

/*
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

*/
