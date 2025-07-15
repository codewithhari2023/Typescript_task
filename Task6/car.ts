class cars{
    constructor(
       public carid:number,
       public brand:string,
       public model:string,
       public price:number){}
    getCarDetails(): string {
    return `Id:${this.carid}, brand: ${this.brand}, model: ${this.model},price:${this.price}`;
  }
}
class carWorkFunction{
  private cars:cars[]=[]
  AddCar(item:cars){
          this.cars.push(item);
          console.log(`Added car: ${item.getCarDetails()}`);
     }
     RemoveCar(Id:number){
       this.cars = this.cars.filter(car => car.carid !== Id);
       console.log(`Removed product: ${Id}`);
     }
     Totalsales(): number {
        let total = 0;
        for (const item of this.cars) {
            total += item.price; 
        }
        return total;
    }
      listCars(): void {
     console.log('\nCar Catalog:');
    this.cars.forEach(car => console.log(car.getCarDetails()));
  }
}
let cary=new carWorkFunction();
let car5=new cars(1,"maruti","xuv",50000);
let car6=new cars(2,"Bmw","i6",700000);
cary.AddCar(car5)
cary.AddCar(car6)
cary.listCars()

// Task 6