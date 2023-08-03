function car(make,mode1,year){
    this.make=make;
    this.mode1=mode1;
    this.year=year;
    console.log(this.make+" "+this.mode1+" "+this.year);
}
const car1=new car("BMW","corolla",2022);
const car2=new car("rolls royce","civic",2023);

console.log (car1.make);
console.log (car1.model);
console.log (car1.year);
console.log (car2.make);
console.log (car2.model);
console.log (car2.year);




