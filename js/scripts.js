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
    addPizzaToSummary(newPizza);

  })

  $("#placeOrder").click(function(){
    alert("Thanks for the order!");
    location.reload();

  });

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
    var cost = formatCosts(pizza.pizzaCost)
    $(".pizzaOrders").show();
    $("#sizePizza1").text(pizza.size);
    $("#cheesePizza1").text(pizza.cheese);
    $("#toppingsPizza1").text(pizza.toppings);
    $("#costPizza1").text("$" + cost);
  }

});

//business logic
function Customer(name, phone, notes) {
  this.name = name;
  this.phone = phone;
  this.deliveryNotes = notes;
  this.addresses = []
}

function Address(type, street, city, state, zip) {
  this.type = type
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
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

function formatCosts(cost){
  var formattedCost
  if(Number.isInteger(cost)){
    formattedCost = cost + ".00"
  } else{
    var index =  cost.toString().indexOf(".")
    var length = cost.toString().length
    if(length === (index + 2)){
      console.log("in if")
      formattedCost = cost + "0"
    } else{
      formattedCost = cost
    }
  }
  return formattedCost
}
