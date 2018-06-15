//user logic
$(function(){
  $("#addAddress").click(function(){
    var name = $("#customerName").val()
    var number = $("#customerNumber").val()
    var street = $("#street").val()
    var city = $("#city").val()
    var state = $("#state").val()
    var zip = $("#zip").val()
    var type = $("#addressType").val()
    var notes = $("#deliveryNotes").val()
    var newCustomer = new Customer(name, number, notes)
    var newAddress = new Address(type, street, city, state, zip)
    newCustomer.addresses.push([newAddress]);
    console.log("newContact: "+ newCustomer)
    console.log("addresses:" + newCustomer.addresses);
    console.log(newCustomer.addresses[0].street);
    addCustomerInfoToSummary(newCustomer)
  })

  function addCustomerInfoToSummary(customer){
    var addressStreet = customer.addresses[0].street
    $("#orderName").text(customer.name);
    $("#orderNumber").text(customer.number);
    $("#orderAddress").text("test address");
    $("#orderNotes").text("test notes");
    // $("#orderAddress").text(customer.addresses[0]);
  }

});

//business logic
function Customer(name, phone, notes) {
  this.name = name;
  this.phone = phone;
  this.deliveryNotes = notes;
  this.addresses = []
}

// Address.prototype.addAddress = function(newAddress){
//   newCustomer.addresses.push(newAddress);
// }

function Address(type, street, city, state, zip) {
  this.type = type
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
//   Address.prototype.addAddress(this)
}

Pizza.prototype.calcPizzaCost = function (numberOfToppings, pizzaSize){
  var toppingCost
  var basePrice
  var pizzaCost
  if(pizzaSize === "small"){
    toppingCost = numberOfToppings * .50
    basePrice = 12
  } else if(pizzaSize ==="medium"){
    toppingCost = numberOfToppings * .75
    basePrice = 15
  } else {
    toppingCost = numberOfToppings * 1
    basePrice = 18
  }
  pizzaCost = toppingCost + basePrice
  return pizzaCost
}

function Pizza(size, cheese, toppings){
  this.size = size;
  this.cheese = cheese;
  this.toppings = toppings;
  this.pizzaCost = Pizza.prototype.calcPizzaCost(toppings.length, size)
}



// var newCustomer = new Customer("Sam Jones", "503-888-1234", "Please call when you get here");
// var newAddress = new Address ("home","1234 Alder St", "Portland", "OR", 97214);
// var newPizza = new Pizza("medium", "vegan", ["mushroom"]);
