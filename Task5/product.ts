export class product{
    constructor(public id:number,
    public name:string,
    public price:number){}
      getDetails(): string {
    return `Id: ${this.id}, name: ${this.name}, price: ${this.price}`;
  }
  
}


// Task 5

