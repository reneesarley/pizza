//business logic
function Customer(name, phone, notes) {
  this.name = name;
  this.phone = phone;
  this.deliveryNotes = notes;
  this.addresses = []
}

Address.prototype.addAddress = function(newAddress){
  alert("the customer's street is"+ newAddress.street)
  newCustomer.addresses.push(newAddress);
}

function Address(type, street, city, state, zip) {
  this.type = type
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  Address.prototype.addAddress(this)
}

function Pizza(size, cheese, toppings){
  this.size = size;
  this.cheese = cheese;
  this.toppings = toppings;
}
var newCustomer = new Customer("Sam Jones", "503-888-1234", "Please call when you get here");
var newAddress = new Address ("home","1234 Alder St", "Portland", "OR", 97214);
var newPizza = new Pizza("medimum", "vegan", "mushroom");


// calculate topping costs
function calcToppingCost(numberOfToppings, pizzaSize){
  var toppingCost
  if(pizzaSize === "small"){
    toppingCost = numberOfToppings * .50
    return toppingCost
  } else if(pizzaSize ==="medium"){
    toppingCost = numberOfToppings * .75
    return toppingCost
  } else {
    toppingCost = numberOfToppings * 1
    return toppingCost
  }
  console.log(toppingCost)
}
