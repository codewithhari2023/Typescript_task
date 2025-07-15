class Tempratured{
    private celsius:number=0
    setCelsius(value:number){
        if (value <-273.12){
            throw new Error("Temprature cannot be below 273.15")
        }
        this.celsius=value
    }
    getFarenheit():number{
        return (this.celsius*9)/5 +32;
    }
    display():void{
        console.log(`Celsius:${this.celsius}C`)
        console.log(`Farenheit:${this.getFarenheit()}F`)
    }
}
let temp1=new Tempratured();
temp1.setCelsius(45);
temp1.display()

// Task 7