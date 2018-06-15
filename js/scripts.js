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
    newCustomer.addresses.push(newAddress);
    addCustomerInfoToSummary(newCustomer)
  })

  $("#addPizza").click(function(){
    var size = $('#pizzaSize :selected').text();
    var cheese = $('#cheese :selected').text();
    var toppings = $("input.toppings:checked").map(function(){
      return $(this).val();}).get();
    var newPizza = new Pizza(size, cheese, toppings)
    console.log(newPizza)
    addPizzaToSummary(newPizza);

  })

  function addCustomerInfoToSummary(customer){
    $(".customerInfo").show();
    var cityStateZip = customer.addresses[0].city + ", " + customer.addresses[0].state + " " + customer.addresses[0].zip
    $("#orderName").text(customer.name);
    $("#orderNumber").text(customer.phone);
    $("#orderAddress").text(customer.addresses[0].street);
    $("#orderCityStateZip").text(cityStateZip);
    $("#orderNotes").text(customer.deliveryNotes);
  }

  function addPizzaToSummary(pizza){
    $(".pizzaOrders").show();
    $("#sizePizza1").text(pizza.size);
    $("#cheesePizza1").text(pizza.cheese);
    $("#toppingsPizza1").text(pizza.toppings);
    $("#costPizza1").text("$" + pizza.pizzaCost);

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
  if(pizzaSize === "Small"){
    toppingCost = numberOfToppings * .50
    basePrice = 12
  } else if(pizzaSize ==="Medium"){
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
