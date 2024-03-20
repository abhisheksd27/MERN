// Create a prototype for a product object with properties like name ,price , and quantity. add a method to the product prototype to calculate the total value

function Product(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity ||1 ;
}

Product.prototype.subTotal= function(){
   return this.price * this.quantity;
};

const product1=new Product("widget",10,5);
console.log(Product.prototype)
console.log(product1)
console.log(product1.subTotal())//50