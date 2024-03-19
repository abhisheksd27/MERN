// create an object representing a car with properties like make , model, and year . add a method to the car object to start the engine
const car={
    "make": "Toyota",
    "model": "Camry",  
    "year": 201,
    startengine: function(){
        console.log("The engine is starting");
    }
    
}
car.startengine();
console.log(car);
//add a new property to the object
car.color="Red";